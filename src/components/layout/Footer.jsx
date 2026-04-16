import { useTranslation } from 'react-i18next'
import { Mail } from 'lucide-react'

// Instagram SVG inline (lucide-react v1.x removed brand icons)
function InstagramIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

const navLinks = [
  { key: 'nav.menu', href: '#menu' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.contact', href: '#contact' },
]

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ backgroundColor: 'var(--color-charcoal)', color: 'var(--color-cream)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h3
            className="font-['Playfair_Display'] font-bold tracking-[0.25em] uppercase text-xl mb-1"
            style={{ color: 'var(--color-cream)' }}
          >
            UCHUVVA
          </h3>
          <p
            className="text-[10px] tracking-[0.3em] uppercase font-['Inter'] font-light mb-4"
            style={{ color: 'var(--color-sage-light)' }}
          >
            {t('footer.tagline')}
          </p>
          <p className="font-['Inter'] text-sm leading-relaxed opacity-70">
            {t('footer.description')}
          </p>
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="mailto:info@uchuvva.com"
              className="opacity-60 hover:opacity-100 transition-opacity"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="text-center md:text-left">
          <p className="font-['Inter'] text-xs tracking-widest uppercase mb-5 opacity-50">
            {t('footer.links_title')}
          </p>
          <ul className="space-y-3">
            {navLinks.map(({ key, href }) => (
              <li key={key}>
                <button
                  onClick={() => handleNav(href)}
                  className="font-['Inter'] text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  {t(key)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <p className="font-['Inter'] text-xs tracking-widest uppercase mb-5 opacity-50">
            {t('footer.contact_title')}
          </p>
          <div className="space-y-3 font-['Inter'] text-sm opacity-70">
            <p>info@uchuvva.com</p>
            <p>+34 600 000 000</p>
          </div>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto px-6 lg:px-12 py-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left"
        style={{ borderColor: 'rgba(245,240,232,0.1)' }}
      >
        <p className="font-['Inter'] text-xs opacity-40">
          © {year} Uchuvva. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
