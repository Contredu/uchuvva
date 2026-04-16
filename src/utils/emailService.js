import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

/**
 * Sends a quote request email via EmailJS.
 * @param {Object} formData - The form data from the contact form
 * @returns {Promise}
 */
export const sendQuoteEmail = async (formData) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    event_type: formData.eventType,
    guests: formData.guests,
    event_date: formData.date,
    message: formData.message,
    to_email: 'info@uchuvva.com', // Replace with your actual email
  }

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
}
