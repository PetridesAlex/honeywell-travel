import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p><strong>Address:</strong> 9 Anastasi Shioukri street Limassol, 3035</p>
          <p><strong>Phone:</strong> +357 2582 8848</p>
          <p><strong>Email:</strong> info@honeywelltravel.com.cy</p>
        </div>

        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Monday - Friday: 09:00 - 17:00</p>
          <p>Saturday: Closed</p>
          <p>Sunday: Closed</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/our-world">Our World</Link>
          <Link to="/holiday-types">Holiday Types</Link>
          <Link to="/honeymoon">Honeymoon</Link>
          <Link to="/corporate">Corporate</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe to get updates on special offers</p>
          <form className="newsletter-form">
            <input type="text" placeholder="First Name" className="newsletter-input" />
            <input type="email" placeholder="Email address" className="newsletter-input" />
            <label className="newsletter-checkbox">
              <input type="checkbox" />
              I have read and agree to the terms & conditions
            </label>
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Honeywell Travel | Copyright 2024 All Rights Reserved</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/cookies">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer






