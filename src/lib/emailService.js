import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export const sendEmail = async (templateId, templateParams) => {
  try {
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

