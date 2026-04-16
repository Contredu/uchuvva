import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const { t } = useTranslation()

  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient + pattern */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #F5F0E8 0%, #EDE7D9 40%, #D6CDB8 100%)',
        }}
      />
      {/* Decorative circles */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7A8C6E 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6B4F3A 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 w-full max-w-4xl mx-auto">
        {/* Logo circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-10 w-32 h-32 rounded-full flex flex-col items-center justify-center border-2"
          style={{
            borderColor: 'var(--color-charcoal)',
            backgroundColor: 'white',
            margin: '0 auto 2.5rem',
            display: 'flex',
          }}
        >
          <span
            className="font-['Playfair_Display'] font-bold text-sm tracking-[0.2em] uppercase leading-tight"
            style={{ color: 'var(--color-charcoal)' }}
          >
            UCHUVVA
          </span>
          <span
            className="font-['Inter'] text-[8px] tracking-[0.2em] uppercase mt-1"
            style={{ color: 'var(--color-sage)' }}
          >
            Plant-Based food
          </span>
        </motion.div>

        <motion.h1
          className="font-['Playfair_Display'] font-bold mb-5 leading-tight"
          style={{ color: 'var(--color-charcoal)', fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          className="font-['Inter'] text-lg md:text-xl mb-12 font-light"
          style={{ color: 'var(--color-charcoal-light)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          <button
            id="hero-cta-menu"
            onClick={() => handleScroll('#menu')}
            className="w-full sm:w-auto px-8 py-4 text-sm tracking-widest uppercase font-['Inter'] font-medium border-2 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            style={{
              borderColor: 'var(--color-charcoal)',
              color: 'var(--color-charcoal)',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'var(--color-charcoal)'
              e.currentTarget.style.color = 'var(--color-cream)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--color-charcoal)'
            }}
          >
            {t('hero.cta_menu')}
          </button>
          <button
            id="hero-cta-quote"
            onClick={() => handleScroll('#contact')}
            className="w-full sm:w-auto px-8 py-4 text-sm tracking-widest uppercase font-['Inter'] font-medium transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            style={{ backgroundColor: 'var(--color-sage)', color: 'white', border: '2px solid var(--color-sage)' }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'var(--color-sage-dark)'
              e.currentTarget.style.borderColor = 'var(--color-sage-dark)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'var(--color-sage)'
              e.currentTarget.style.borderColor = 'var(--color-sage)'
            }}
          >
            {t('hero.cta_quote')}
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll('#menu')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <ArrowDown size={20} style={{ color: 'var(--color-charcoal)' }} />
      </motion.button>
    </section>
  )
}
