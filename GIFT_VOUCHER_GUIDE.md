# 🎁 Gift Voucher System Guide

## Overview

The Gift Voucher system allows customers to purchase gift vouchers for travel experiences. When a user clicks "Learn More" on the Gift Vouchers card in the hero section, they're taken to a dedicated form page.

## User Flow

1. **Homepage** → User clicks "Learn More" on "GIFT VOUCHERS" card
2. **Gift Voucher Page** → User fills out the form with:
   - **TO (Recipient)**: Name and email of the person receiving the voucher
   - **FROM (Sender)**: Name and email of the person purchasing
   - **Amount**: Voucher value in euros
   - **Message**: Optional personal message
3. **Submission** → Form data is sent to your email
4. **Confirmation** → User sees success message

## Form Fields

### Required Fields:
- ✅ Recipient Name
- ✅ Recipient Email
- ✅ Sender Name
- ✅ Sender Email
- ✅ Voucher Amount (minimum €1.00)
- ✅ Terms & Conditions agreement

### Optional Fields:
- Personal Message

## Email Functionality

### Current Implementation (Development)
- Uses `mailto:` protocol which opens the user's default email client
- Pre-fills email with all voucher details
- Sends to: `info@honeywelltravel.com.cy`

### Production Setup (Recommended)
You'll need to set up a backend API to handle emails properly. See `BACKEND_EMAIL_SETUP.md` for detailed instructions.

**Quick Setup Options:**
1. **Node.js/Express** with Nodemailer
2. **SendGrid** (recommended for production)
3. **Mailgun**
4. **Serverless Functions** (Vercel/Netlify)

## Email Content

When submitted, the email includes:

```
GIFT VOUCHER REQUEST

TO (Recipient):
Name: [Recipient Name]
Email: [Recipient Email]

FROM (Sender):
Name: [Sender Name]
Email: [Sender Email]

VOUCHER DETAILS:
Amount: €[Amount]

Personal Message:
[Message or "No message provided"]

---
This voucher request was submitted through the Honeywell Travel website.
```

## Files Structure

```
src/
  ├── pages/
  │   └── GiftVoucher.jsx          # Main gift voucher form page
  ├── utils/
  │   └── emailService.js           # Email sending logic
  └── components/
      └── HeroSection.jsx           # Contains link to gift vouchers
```

## Testing

1. Navigate to homepage
2. Click "Learn More" on Gift Vouchers card
3. Fill out the form
4. Submit
5. Check that email client opens (or API call is made in production)

## Next Steps for Production

1. **Set up backend API** (see `BACKEND_EMAIL_SETUP.md`)
2. **Update API endpoint** in `src/utils/emailService.js`
3. **Add email templates** for better formatting
4. **Send confirmation emails** to both sender and recipient
5. **Generate voucher codes** automatically
6. **Store vouchers in database** for tracking
7. **Add voucher redemption system**
8. **Set expiration dates** for vouchers
9. **Add payment processing** integration
10. **Create admin dashboard** to manage vouchers

## Security Considerations

- ✅ Form validation on frontend
- ⚠️ Add backend validation
- ⚠️ Add rate limiting
- ⚠️ Add CAPTCHA to prevent spam
- ⚠️ Sanitize all user inputs
- ⚠️ Use HTTPS for all submissions

## Customization

### Change Email Recipient
Edit `src/utils/emailService.js`:
```javascript
to: 'your-email@honeywelltravel.com.cy'
```

### Change Form Fields
Edit `src/pages/GiftVoucher.jsx` to add/remove fields

### Styling
Edit `src/pages/GiftVoucher.css` for custom styling

## Support

For questions about setting up the backend email service, refer to `BACKEND_EMAIL_SETUP.md` which includes code examples for various email service providers.






