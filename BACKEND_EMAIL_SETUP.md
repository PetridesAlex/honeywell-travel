# Email Setup Guide for Gift Vouchers

## Current Implementation

The gift voucher form currently uses a **mailto:** fallback that opens the user's email client. For production, you'll want to set up a proper backend email service.

## Recommended Solutions

### Option 1: Backend API with Email Service (Recommended)

#### Node.js/Express Example

```javascript
// server/routes/voucher.js
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Configure email transporter (using Gmail as example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

router.post('/send-voucher-email', async (req, res) => {
  const { voucherData } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'info@honeywelltravel.com.cy',
    subject: `New Gift Voucher Request - €${voucherData.amount}`,
    html: `
      <h2>New Gift Voucher Request</h2>
      <h3>TO (Recipient):</h3>
      <p><strong>Name:</strong> ${voucherData.to.name}</p>
      <p><strong>Email:</strong> ${voucherData.to.email}</p>
      
      <h3>FROM (Sender):</h3>
      <p><strong>Name:</strong> ${voucherData.from.name}</p>
      <p><strong>Email:</strong> ${voucherData.from.email}</p>
      
      <h3>VOUCHER DETAILS:</h3>
      <p><strong>Amount:</strong> €${voucherData.amount}</p>
      <p><strong>Message:</strong> ${voucherData.message || 'No message provided'}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    
    // Also send confirmation to recipient
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: voucherData.to.email,
      subject: 'Your Gift Voucher from Honeywell Travel',
      html: `
        <h2>You've Received a Gift Voucher!</h2>
        <p>Dear ${voucherData.to.name},</p>
        <p>You've received a gift voucher worth <strong>€${voucherData.amount}</strong> from ${voucherData.from.name}.</p>
        <p>We'll process your voucher and send you the details shortly.</p>
        <p>Thank you for choosing Honeywell Travel!</p>
      `
    });

    res.json({ success: true, message: 'Voucher request sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

module.exports = router;
```

### Option 2: Third-Party Email Services

#### Using SendGrid

```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'info@honeywelltravel.com.cy',
  from: 'noreply@honeywelltravel.com.cy',
  subject: `New Gift Voucher Request - €${amount}`,
  html: emailTemplate
};

await sgMail.send(msg);
```

#### Using Mailgun

```javascript
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY
});

await mg.messages.create('honeywelltravel.com.cy', {
  from: 'noreply@honeywelltravel.com.cy',
  to: 'info@honeywelltravel.com.cy',
  subject: `New Gift Voucher Request - €${amount}`,
  html: emailTemplate
});
```

### Option 3: Serverless Functions (Vercel/Netlify)

#### Vercel Serverless Function

```javascript
// api/send-voucher-email.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { voucherData } = req.body;

  // Use a service like SendGrid, Resend, or similar
  // Example with Resend:
  const { Resend } = require('resend');
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: 'Honeywell Travel <noreply@honeywelltravel.com.cy>',
    to: 'info@honeywelltravel.com.cy',
    subject: `New Gift Voucher Request - €${voucherData.amount}`,
    html: emailTemplate
  });

  res.json({ success: true });
}
```

## Frontend Update

Update the API endpoint in `src/utils/emailService.js`:

```javascript
const API_ENDPOINT = process.env.REACT_APP_API_URL + '/api/send-voucher-email'
// Or for production:
// const API_ENDPOINT = 'https://api.honeywelltravel.com.cy/api/send-voucher-email'
```

## Environment Variables

Create a `.env` file:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
# OR
SENDGRID_API_KEY=your-sendgrid-key
# OR
MAILGUN_API_KEY=your-mailgun-key
```

## Security Considerations

1. **Never expose API keys in frontend code**
2. **Use environment variables** for sensitive data
3. **Validate input** on both frontend and backend
4. **Rate limiting** to prevent spam
5. **CAPTCHA** for form submissions
6. **HTTPS** for all API calls

## Testing

Test the email functionality:
1. Submit a test voucher request
2. Check your email inbox
3. Verify all fields are correct
4. Test with different email providers

## Next Steps

1. Choose an email service provider
2. Set up backend API endpoint
3. Update frontend API endpoint URL
4. Test email delivery
5. Set up email templates
6. Add email confirmation to recipients






