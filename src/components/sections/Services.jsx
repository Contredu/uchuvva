import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { services } from '@/data/services'

export default function Services() {
  const { t } = useTranslation()

  const handleContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="services"
      className="py-24 px-6 lg:px-12"
      style={{ backgroundColor: 'var(--color-cream-dark)' }}
    >
      <div className="mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="font-['Inter'] text-xs tracking-[0.35em] uppercase mb-4"
            style={{ color: 'var(--color-sage)' }}
          >
            Servicios
          </p>
          <h2
            className="font-['Playfair_Display'] font-bold mb-4"
            style={{ color: 'var(--color-charcoal)', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            {t('services.title')}
          </h2>
          <p
            className="font-['Inter'] text-base max-w-xl mx-auto font-light"
            style={{ color: 'var(--color-charcoal-light)' }}
          >
            {t('services.subtitle')}
          </p>
          <div
            className="w-12 h-0.5 mx-auto mt-6"
            style={{ backgroundColor: 'var(--color-sage)' }}
          />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                className="p-6 sm:p-8 md:p-10 text-center group transition-all duration-300 hover:shadow-[0_12px_40px_rgba(44,44,44,0.1)] hover:-translate-y-1"
                style={{ backgroundColor: 'var(--color-white)' }}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#7A8C6E]"
                  style={{ backgroundColor: 'var(--color-cream)', margin: '0 auto 1.5rem' }}
                >
                  <Icon
                    size={26}
                    className="transition-colors duration-300 group-hover:text-white"
                    style={{ color: 'var(--color-sage)' }}
                  />
                </div>
                <h3
                  className="font-['Playfair_Display'] text-xl font-semibold mb-4"
                  style={{ color: 'var(--color-charcoal)' }}
                >
                  {t(`${service.translationKey}.name`)}
                </h3>
                <p
                  className="font-['Inter'] text-sm leading-relaxed mb-6"
                  style={{ color: 'var(--color-charcoal-light)' }}
                >
                  {t(`${service.translationKey}.description`)}
                </p>
                <button
                  onClick={handleContact}
                  className="font-['Inter'] text-xs tracking-widest uppercase underline underline-offset-4 transition-opacity hover:opacity-60 cursor-pointer"
                  style={{ color: 'var(--color-sage)' }}
                >
                  {t('services.cta')}
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
