// Email service utility
// This file handles sending emails for gift vouchers

/**
 * Send gift voucher email to the company
 * In production, this should call your backend API
 */
export const sendGiftVoucherEmail = async (voucherData) => {
  // Production: Replace with your actual API endpoint
  const API_ENDPOINT = '/api/send-voucher-email'
  
  try {
    // Option 1: Use backend API (recommended for production)
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'limassol@honeywelltravel.com.cy',
        subject: `New Gift Voucher Request - €${voucherData.amount}`,
        voucherData: {
          to: {
            name: voucherData.toName
          },
          from: {
            name: voucherData.fromName,
            email: voucherData.fromEmail
          },
          amount: voucherData.amount,
          message: voucherData.message
        }
      })
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    return { success: true, data: await response.json() }
  } catch (error) {
    console.error('API email failed, falling back to mailto:', error)
    
    // Fallback: Use mailto (opens email client)
    return sendViaMailto(voucherData)
  }
}

/**
 * Fallback method using mailto: protocol
 * Opens the user's default email client
 */
const sendViaMailto = (voucherData) => {
  const emailBody = `
GIFT VOUCHER REQUEST

TO (Recipient):
Name: ${voucherData.toName}

FROM (Sender):
Name: ${voucherData.fromName}
Email: ${voucherData.fromEmail}

VOUCHER DETAILS:
Amount: €${voucherData.amount}

Personal Message:
${voucherData.message || 'No message provided'}

---
This voucher request was submitted through the Honeywell Travel website.
  `.trim()

  const mailtoLink = `mailto:limassol@honeywelltravel.com.cy?subject=${encodeURIComponent(`New Gift Voucher Request - €${voucherData.amount}`)}&body=${encodeURIComponent(emailBody)}`
  
  window.location.href = mailtoLink
  
  return { success: true, method: 'mailto' }
}

/**
 * Send confirmation email to recipient
 * This would be called from your backend after processing
 */
export const sendRecipientConfirmation = async (voucherData) => {
  // This would typically be handled by your backend
  // after the voucher is processed and created
  console.log('Sending confirmation to recipient:', voucherData.toName)
  
  // Backend would send an email with:
  // - Voucher code
  // - Voucher amount
  // - How to redeem
  // - Expiration date (if applicable)
  // Note: Recipient email would need to be provided separately or stored in database
}


