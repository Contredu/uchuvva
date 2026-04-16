import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import LanguageToggle from '@/components/ui/LanguageToggle'

const navLinks = [
  { key: 'nav.menu', href: '#menu' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.contact', href: '#contact' },
]

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_2px_20px_rgba(44,44,44,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col leading-none cursor-pointer group"
        >
          <span
            className="font-['Playfair_Display'] font-bold tracking-[0.25em] uppercase text-lg transition-colors"
            style={{ color: scrolled ? 'var(--color-brown)' : 'var(--color-charcoal)' }}
          >
            UCHUVVA
          </span>
          <span
            className="text-[10px] tracking-[0.3em] uppercase font-['Inter'] font-light transition-colors"
            style={{ color: scrolled ? 'var(--color-sage)' : 'var(--color-charcoal-light)' }}
          >
            Plant-Based Food
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ key, href }) => (
            <button
              key={key}
              onClick={() => handleNav(href)}
              className="font-['Inter'] text-sm tracking-widest uppercase transition-all duration-200 hover:opacity-60 cursor-pointer"
              style={{ color: 'var(--color-charcoal)' }}
            >
              {t(key)}
            </button>
          ))}
          <LanguageToggle />
          <button
            onClick={() => handleNav('#contact')}
            className="ml-2 px-5 py-2.5 text-xs tracking-widest uppercase font-['Inter'] font-medium border transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            style={{
              borderColor: 'var(--color-sage)',
              color: 'var(--color-sage)',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'var(--color-sage)'
              e.currentTarget.style.color = 'white'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--color-sage)'
            }}
          >
            {t('nav.quote')}
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white/95 backdrop-blur-md border-t border-[#EDE7D9]`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map(({ key, href }) => (
            <button
              key={key}
              onClick={() => handleNav(href)}
              className="text-left font-['Inter'] text-sm tracking-widest uppercase cursor-pointer"
              style={{ color: 'var(--color-charcoal)' }}
            >
              {t(key)}
            </button>
          ))}
          <div className="pt-2 flex items-center justify-between">
            <LanguageToggle />
            <button
              onClick={() => handleNav('#contact')}
              className="px-5 py-2.5 text-xs tracking-widest uppercase font-['Inter'] font-medium border cursor-pointer"
              style={{ borderColor: 'var(--color-sage)', color: 'var(--color-sage)' }}
            >
              {t('nav.quote')}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
