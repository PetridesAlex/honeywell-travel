import { useState } from 'react'
import { sendGiftVoucherEmail } from '../utils/emailService'
import './GiftVoucher.css'

function GiftVoucher() {
  const [formData, setFormData] = useState({
    toName: '',
    fromName: '',
    fromEmail: '',
    amount: '',
    message: '',
    agreeToTerms: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.toName || !formData.fromName || !formData.fromEmail || !formData.amount || !formData.agreeToTerms) {
      alert('Please fill in all required fields and agree to the terms')
      return
    }

    if (parseFloat(formData.amount) <= 0) {
      alert('Please enter a valid amount greater than 0')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Send email using the email service
      const result = await sendGiftVoucherEmail(formData)

      if (result.success) {
        setSubmitStatus('success')
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            toName: '',
            fromName: '',
            fromEmail: '',
            amount: '',
            message: '',
            agreeToTerms: false
          })
          setSubmitStatus(null)
        }, 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting voucher:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="gift-voucher-page">
      <div className="gift-voucher-container">
        <div className="gift-voucher-header">
          <h1>🎁 Gift Vouchers</h1>
          <p className="subtitle">Give the gift of travel! Create a personalized gift voucher for your loved ones.</p>
        </div>

        <div className="gift-voucher-content">
          <div className="voucher-info">
            <h2>How It Works</h2>
            <div className="info-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Fill in the Details</h3>
                  <p>Enter recipient and sender information, plus the voucher amount</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Submit Your Request</h3>
                  <p>We'll receive your voucher request and process it</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Receive Confirmation</h3>
                  <p>We'll send you and the recipient a confirmation email</p>
                </div>
              </div>
            </div>
          </div>

          <form className="voucher-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h2>To (Recipient) *</h2>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="toName">Recipient Name *</label>
                  <input
                    type="text"
                    id="toName"
                    name="toName"
                    value={formData.toName}
                    onChange={handleChange}
                    placeholder="Enter recipient's name"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>From (Sender) *</h2>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fromName">Your Name *</label>
                  <input
                    type="text"
                    id="fromName"
                    name="fromName"
                    value={formData.fromName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fromEmail">Your Email *</label>
                  <input
                    type="email"
                    id="fromEmail"
                    name="fromEmail"
                    value={formData.fromEmail}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Voucher Details</h2>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="amount">Voucher Amount (€) *</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="0.00"
                    min="1"
                    step="0.01"
                    required
                  />
                  <small>Minimum amount: €1.00</small>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Personal Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Add a personal message to the recipient..."
                />
              </div>
            </div>

            <div className="form-section terms-section">
              <div className="terms-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                    className="terms-checkbox"
                  />
                  <span className="checkbox-text">
                    I agree to the terms and conditions *
                  </span>
                </label>
                <p className="terms-note">
                  By checking this box, you confirm that all information provided is accurate and you agree to our terms of service.
                </p>
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="alert alert-success">
                ✅ Your gift voucher request has been submitted successfully! We'll process it and send you a confirmation email shortly.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="alert alert-error">
                ❌ There was an error submitting your request. Please try again or contact us directly.
              </div>
            )}

            <div className="form-actions">
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Gift Voucher Request'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default GiftVoucher

