import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export const EMAIL_TEMPLATES = {
  AUTOREPLY: import.meta.env.VITE_TEMPLATE_AUTOREPLY,
  CONTACT: import.meta.env.VITE_TEMPLATE_CONTACT,
  CRUISE: import.meta.env.VITE_TEMPLATE_CRUISE,
  CORPORATE: import.meta.env.VITE_TEMPLATE_CORPORATE,
  DMC: import.meta.env.VITE_TEMPLATE_DMC,
  HOTEL: import.meta.env.VITE_TEMPLATE_HOTEL || import.meta.env.VITE_TEMPLATE_OTHER,
  PACKAGE: import.meta.env.VITE_TEMPLATE_PACKAGE || import.meta.env.VITE_TEMPLATE_OTHER,
  OTHER: import.meta.env.VITE_TEMPLATE_OTHER
}

export const sendEmail = async (templateId, templateParams) => {
  try {
    if (!SERVICE_ID || !PUBLIC_KEY || !templateId) {
      console.error('EmailJS configuration problem:', {
        SERVICE_ID,
        PUBLIC_KEY,
        templateId
      })
      throw new Error('EmailJS is not configured correctly. Check .env values and reload dev server.')
    }

    const response = await emailjs.send(
      SERVICE_ID,
      templateId,
      templateParams,
      PUBLIC_KEY
    )

    return response
  } catch (error) {
    console.error('EmailJS Error:', error)
    throw error
  }
}

