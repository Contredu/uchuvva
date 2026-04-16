import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Leaf, Award, Zap } from 'lucide-react'

const valueIcons = { sustainability: Leaf, excellence: Award, innovation: Zap }

export default function About() {
  const { t } = useTranslation()
  const valueKeys = Object.keys(valueIcons)

  return (
    <section
      id="about"
      className="py-24 px-6 lg:px-12"
      style={{ backgroundColor: 'var(--color-cream)' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <p
            className="font-['Inter'] text-xs tracking-[0.35em] uppercase mb-4"
            style={{ color: 'var(--color-sage)' }}
          >
            Nosotros
          </p>
          <h2
            className="font-['Playfair_Display'] font-bold mb-3"
            style={{ color: 'var(--color-charcoal)', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            {t('about.title')}
          </h2>
          <p
            className="font-['Playfair_Display'] italic text-lg mb-8"
            style={{ color: 'var(--color-brown)' }}
          >
            {t('about.subtitle')}
          </p>
          <div
            className="w-12 h-0.5 mb-8 mx-auto lg:mx-0"
            style={{ backgroundColor: 'var(--color-sage)' }}
          />
          <p
            className="font-['Inter'] text-base leading-relaxed font-light"
            style={{ color: 'var(--color-charcoal-light)' }}
          >
            {t('about.story')}
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {valueKeys.map((key, i) => {
            const Icon = valueIcons[key]
            return (
              <motion.div
                key={key}
                className="flex gap-5 p-6 transition-shadow duration-300 hover:shadow-[0_4px_24px_rgba(44,44,44,0.08)]"
                style={{ backgroundColor: 'var(--color-cream-dark)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--color-cream)' }}
                >
                  <Icon size={20} style={{ color: 'var(--color-sage)' }} />
                </div>
                <div className="min-w-0">
                  <h3
                    className="font-['Playfair_Display'] text-lg font-semibold mb-2"
                    style={{ color: 'var(--color-charcoal)' }}
                  >
                    {t(`about.values.${key}.title`)}
                  </h3>
                  <p
                    className="font-['Inter'] text-sm leading-relaxed"
                    style={{ color: 'var(--color-charcoal-light)' }}
                  >
                    {t(`about.values.${key}.description`)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
