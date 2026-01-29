import RevealOnScroll from '../components/RevealOnScroll'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>We're here to help you plan your perfect getaway</p>
        </div>
      </div>

      <RevealOnScroll direction="up">
      <div className="contact-container">
        {/* Contact Info Cards */}
        <div className="contact-info-grid">
          <div className="contact-info-card">
            <div className="contact-icon-wrapper">
              <div className="contact-icon">📍</div>
            </div>
            <h3>Address</h3>
            <p>9 Anastasi Shioukri street</p>
            <p>Limassol, 3035</p>
            <a 
              href="https://maps.google.com/?q=9+Anastasi+Shioukri+street,+Limassol+3035,+Cyprus" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link-btn"
            >
              View on Map →
            </a>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon-wrapper">
              <div className="contact-icon">📞</div>
            </div>
            <h3>Phone</h3>
            <p>+357 2582 8848</p>
            <a href="tel:+35725828848" className="contact-link-btn">
              Call Now →
            </a>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon-wrapper">
              <div className="contact-icon">✉️</div>
            </div>
            <h3>Email</h3>
            <p>info@honeywelltravel.com.cy</p>
            <a href="mailto:info@honeywelltravel.com.cy" className="contact-link-btn">
              Send Email →
            </a>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon-wrapper">
              <div className="contact-icon">🕒</div>
            </div>
            <h3>Opening Hours</h3>
            <p><strong>Monday - Friday:</strong> 09:00 - 17:00</p>
            <p><strong>Saturday - Sunday:</strong> Closed</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-section">
          <div className="form-header">
            <h2>Send us a Message</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible</p>
          </div>
          <form 
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              const name = formData.get('name')
              const email = formData.get('email')
              const phone = formData.get('phone') || 'Not provided'
              const message = formData.get('message')
              
              const emailBody = `CONTACT FORM SUBMISSION

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

---
This message was submitted through the Honeywell Travel website contact form.`.trim()

              const mailtoLink = `mailto:limassol@honeywelltravel.com.cy?subject=${encodeURIComponent(`Contact Form - ${name}`)}&body=${encodeURIComponent(emailBody)}`
              window.location.href = mailtoLink
              
              alert('Thank you! Your message has been sent. We will get back to you soon.')
              e.target.reset()
            }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  <span className="label-icon">👤</span>
                  Name <span className="required">*</span>
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Enter your full name"
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <span className="label-icon">✉️</span>
                  Email <span className="required">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="your.email@example.com"
                  required 
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone">
                <span className="label-icon">📱</span>
                Phone
              </label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="+357 1234 5678"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">
                <span className="label-icon">💬</span>
                Message <span className="required">*</span>
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows="6" 
                placeholder="Tell us how we can help you..."
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              <span>Send Message</span>
              <span className="button-icon">→</span>
            </button>
          </form>
        </div>
      </div>
      </RevealOnScroll>
    </div>
  )
}

export default Contact






