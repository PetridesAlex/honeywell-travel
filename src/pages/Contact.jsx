import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="info-item">
              <strong>Address:</strong>
              <p>9 Anastasi Shioukri street Limassol, 3035</p>
            </div>
            <div className="info-item">
              <strong>Phone:</strong>
              <p>+357 2582 8848</p>
            </div>
            <div className="info-item">
              <strong>Email:</strong>
              <p>info@honeywelltravel.com.cy</p>
            </div>
            <div className="info-item">
              <strong>Opening Hours:</strong>
              <p>Monday - Friday: 09:00 - 17:00</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>

          <form className="contact-form">
            <h2>Send us a Message</h2>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact






