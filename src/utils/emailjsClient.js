/**
 * EmailJS client – all credentials and send helpers in one place.
 * Uses Public Key only. Do not add any private key.
 */

import emailjs from '@emailjs/browser'

const EMAILJS_CONFIG = {
  serviceId: 'service_y7tl9ds',
  templateId: 'template_4gmq6q5',
  publicKey: '_DmWbZC1wGdH6miKI'
}

let initialized = false

function init() {
  if (initialized) return
  emailjs.init(EMAILJS_CONFIG.publicKey)
  initialized = true
}

/**
 * Build template params object (must match EmailJS template exactly).
 * Keys: title, name, email, phone, dates, people, package, message
 */
function toTemplateParams({ title, name, email, phone, dates, people, package: pkg, message }) {
  return {
    title: title ?? '',
    name: name ?? '',
    email: email ?? '',
    phone: phone ?? '',
    dates: dates ?? '',
    people: people ?? '',
    package: pkg ?? '',
    message: message ?? ''
  }
}

/**
 * Send contact form submission.
 * @param {Object} formData - { title?, name, email, phone?, dates?, people?, package?, message }
 * @returns {Promise<{ ok: boolean, error?: string }>}
 */
export async function sendContactForm(formData) {
  init()
  try {
    const params = toTemplateParams({
      title: formData.title ?? 'New Website Inquiry',
      name: formData.name ?? '',
      email: formData.email ?? '',
      phone: formData.phone ?? '',
      dates: formData.dates ?? '',
      people: formData.people ?? '',
      package: formData.package ?? 'General Inquiry',
      message: formData.message ?? ''
    })
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      params
    )
    return { ok: true }
  } catch (err) {
    const msg = err?.text ?? err?.message ?? 'Failed to send'
    console.error('EmailJS sendContactForm error:', err, msg)
    return { ok: false, error: msg }
  }
}

/**
 * Send action request (Reserve Now, Send Request, etc.).
 * @param {Object} opts - { title, packageName, message?, formData? }
 * @returns {Promise<{ ok: boolean, error?: string }>}
 */
export async function sendActionRequest({ title, packageName, message, formData = {} }) {
  init()
  const msg = message ?? `${title} clicked from website`
  try {
    const params = toTemplateParams({
      title: title ?? '',
      name: formData.name ?? '',
      email: formData.email ?? '',
      phone: formData.phone ?? '',
      dates: formData.dates ?? '',
      people: formData.people ?? '',
      package: packageName ?? '',
      message: msg
    })
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      params
    )
    return { ok: true }
  } catch (err) {
    const msg = err?.text ?? err?.message ?? 'Failed to send'
    console.error('EmailJS sendActionRequest error:', err, msg)
    return { ok: false, error: msg }
  }
}
