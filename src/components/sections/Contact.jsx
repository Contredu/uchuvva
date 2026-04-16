import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle, Send } from 'lucide-react'
import { sendQuoteEmail } from '@/utils/emailService'

const inputClass = `
  w-full px-4 py-3 bg-transparent border-b-2 outline-none transition-all duration-200
  font-['Inter'] text-sm placeholder-[#aaa]
  focus:border-[#7A8C6E]
`

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    eventType: '', guests: '', date: '', message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await sendQuoteEmail(form)
      setStatus('success')
      setForm({ name: '', email: '', phone: '', eventType: '', guests: '', date: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const eventTypes = ['corporate', 'wedding', 'private', 'other']

  return (
    <section
      id="contact"
      className="py-24 px-6 lg:px-12"
      style={{ backgroundColor: 'var(--color-cream-dark)' }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="font-['Inter'] text-xs tracking-[0.35em] uppercase mb-4"
            style={{ color: 'var(--color-sage)' }}
          >
            Contacto
          </p>
          <h2
            className="font-['Playfair_Display'] font-bold mb-4"
            style={{ color: 'var(--color-charcoal)', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            {t('contact.title')}
          </h2>
          <p
            className="font-['Inter'] text-base font-light"
            style={{ color: 'var(--color-charcoal-light)' }}
          >
            {t('contact.subtitle')}
          </p>
          <div
            className="w-12 h-0.5 mx-auto mt-6"
            style={{ backgroundColor: 'var(--color-sage)' }}
          />
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="p-6 sm:p-10 md:p-14 space-y-8"
          style={{ backgroundColor: 'var(--color-white)' }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label
                className="block font-['Inter'] text-xs tracking-widest uppercase mb-2"
                style={{ color: 'var(--color-charcoal-light)' }}
              >
                {t('contact.form.name')}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className={inputClass}
                style={{ borderColor: 'var(--color-cream-dark)', color: 'var(--color-charcoal)' }}
                placeholder="María García"
              />
            </div>
            <div>
              <label
                className="block font-['Inter'] text-xs tracking-widest uppercase mb-2"
                style={{ color: 'var(--color-charcoal-light)' }}
              >
                {t('contact.form.email')}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                style={{ borderColor: 'var(--color-cream-dark)', color: 'var(--color-charcoal)' }}
                placeholder="maria@ejemplo.com"
              />
            </div>
          </div>

          {/* Row 2: Phone + Event Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label
                className="block font-['Inter'] text-xs tracking-widest uppercase mb-2"
                style={{ color: 'var(--color-charcoal-light)' }}
              >
                {t('contact.form.phone')}
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
                style={{ borderColor: 'var(--color-cream-dark)', color: 'var(--color-charcoal)' }}
                placeholder="+34 600 000 000"
              />
            </div>
            <div>
              <label
                className="block font-['Inter'] text-xs tracking-widest uppercase mb-2"
                style={{ color: 'var(--color-charcoal-light)' }}
              >
                {t('contact.form.event_type')}
              </label>
              <select
                id="contact-event-type"
                name="eventType"
                required
                value={form.eventType}
                onChange={handleChange}
                className={`${inputClass} bg-white cursor-pointer`}
                style={{ borderColor: 'var(--color-cream-dark)', color: form.eventType ? 'var(--color-charcoal)' : '#aaa' }}
              >
                <option value="" disabled>{t('contact.form.event_type')}</option>
                {eventTypes.map(type => (
                  <option key={type} value={type}>{t(`contact.form.event_types.${type}`)}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 3: Guests + Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label
                className="block font-['Inter'] text-xs tracking-widest uppercase mb-2"
                style={{ color: 'var(--color-charcoal-light)' }}
              >
                {t('contact.form.guests')}
              </label>
              <input
                id="contact-guests"
                name="guests"
                type="number"
                min="1"
                value={form.guests}
                onChange={handleChange}
                className={inputClass}
                style={{ borderColor: 'var(--color-cream-dark)', color: 'var(--color-charcoal)' }}
                placeholder="50"
              />
            </div>
            <div>
              <label
                className="block font-['Inter'] text-xs tracking-widest uppercase mb-2"
                style={{ color: 'var(--color-charcoal-light)' }}
              >
                {t('contact.form.date')}
              </label>
              <input
                id="contact-date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                className={inputClass}
                style={{ borderColor: 'var(--color-cream-dark)', color: 'var(--color-charcoal)' }}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              className="block font-['Inter'] text-xs tracking-widest uppercase mb-2"
              style={{ color: 'var(--color-charcoal-light)' }}
            >
              {t('contact.form.message')}
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
              style={{ borderColor: 'var(--color-cream-dark)', color: 'var(--color-charcoal)' }}
              placeholder="Cuéntanos sobre tu evento..."
            />
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 rounded-sm"
              style={{ backgroundColor: '#f0f7ed', color: 'var(--color-sage-dark)' }}
            >
              <CheckCircle size={18} />
              <span className="font-['Inter'] text-sm">{t('contact.form.success')}</span>
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 rounded-sm"
              style={{ backgroundColor: '#fdf0ed', color: '#9B3A2A' }}
            >
              <AlertCircle size={18} />
              <span className="font-['Inter'] text-sm">{t('contact.form.error')}</span>
            </motion.div>
          )}

          {/* Submit */}
          <div className="flex justify-center pt-2">
            <button
              id="contact-submit"
              type="submit"
              disabled={status === 'sending'}
              className="flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase font-['Inter'] font-medium transition-all duration-300 disabled:opacity-60 hover:scale-[1.03] cursor-pointer"
              style={{ backgroundColor: 'var(--color-sage)', color: 'white' }}
              onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.backgroundColor = 'var(--color-sage-dark)' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--color-sage)' }}
            >
              <Send size={15} />
              {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
