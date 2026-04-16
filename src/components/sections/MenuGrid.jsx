import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { menuItems } from '@/data/menuItems'

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function MenuGrid() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState(null)

  return (
    <section
      id="menu"
      className="py-24 px-6 lg:px-12"
      style={{ backgroundColor: 'var(--color-cream)' }}
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
            Menú
          </p>
          <h2
            className="font-['Playfair_Display'] font-bold mb-4"
            style={{ color: 'var(--color-charcoal)', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            {t('menu.title')}
          </h2>
          <p
            className="font-['Inter'] text-base max-w-xl mx-auto font-light"
            style={{ color: 'var(--color-charcoal-light)' }}
          >
            {t('menu.subtitle')}
          </p>
          <div
            className="w-12 h-0.5 mx-auto mt-6"
            style={{ backgroundColor: 'var(--color-sage)' }}
          />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="group cursor-pointer text-center sm:text-left"
              onClick={() => setSelected(item)}
            >
              <div className="overflow-hidden rounded-sm mb-4 aspect-[4/3] relative">
                <img
                  src={item.imageUrl}
                  alt={t(`${item.translationKey}.name`)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(44,44,44,0.35)' }}
                >
                  <span className="text-white font-['Inter'] text-xs tracking-widest uppercase border border-white/60 px-4 py-2">
                    {t('menu.details')}
                  </span>
                </div>
              </div>
              <h3
                className="font-['Playfair_Display'] text-lg font-semibold mb-2"
                style={{ color: 'var(--color-charcoal)' }}
              >
                {t(`${item.translationKey}.name`)}
              </h3>
              <button
                className="font-['Inter'] text-xs tracking-widest uppercase underline underline-offset-4 transition-opacity hover:opacity-60"
                style={{ color: 'var(--color-sage)' }}
                onClick={(e) => { e.stopPropagation(); setSelected(item) }}
              >
                {t('menu.details')}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ backgroundColor: 'rgba(44,44,44,0.6)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-lg w-full overflow-hidden rounded-sm"
              style={{ backgroundColor: 'var(--color-cream)' }}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.imageUrl}
                alt={t(`${selected.translationKey}.name`)}
                className="w-full aspect-[16/9] object-cover"
              />
              <div className="p-8">
                <h3
                  className="font-['Playfair_Display'] text-2xl font-bold mb-3"
                  style={{ color: 'var(--color-charcoal)' }}
                >
                  {t(`${selected.translationKey}.name`)}
                </h3>
                <p
                  className="font-['Inter'] text-sm leading-relaxed"
                  style={{ color: 'var(--color-charcoal-light)' }}
                >
                  {t(`${selected.translationKey}.description`)}
                </p>
              </div>
              <button
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-opacity hover:opacity-70"
                style={{ backgroundColor: 'white' }}
                onClick={() => setSelected(null)}
                aria-label={t('menu.close')}
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
