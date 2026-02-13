import { Link } from 'react-router-dom'
import './CruisesSection.css'

function CruisesSection() {
  return (
    <section className="cruises-section">
      <div className="cruises-container">
        <div className="cruises-header">
          <h2 className="cruises-title">Hotel Prices That Beat Booking Platforms</h2>
          <p className="cruises-subtitle">
            We often secure more competitive accommodation rates than major booking sites, with expert support before and during your stay.
          </p>
        </div>

        <div className="hotel-value-grid">
          <article className="hotel-value-card">
            <h3 className="hotel-card-title">Better Hotel Deals</h3>
            <p className="hotel-card-copy">
              Through trusted partners and negotiated allocations, our team can often provide rates that are more competitive than public OTA prices.
            </p>
            <div className="hotel-card-highlight">Save more on selected stays</div>
          </article>

          <article className="hotel-value-card">
            <h3 className="hotel-card-title">Real Travel Support</h3>
            <p className="hotel-card-copy">
              You are not just booking a room. You also get expert guidance, help with room preferences, and assistance if anything changes.
            </p>
            <div className="hotel-card-highlight">Local team, fast response</div>
          </article>

          <article className="hotel-value-card">
            <h3 className="hotel-card-title">Tailored Recommendations</h3>
            <p className="hotel-card-copy">
              We match each property to your trip style, location priorities, and budget so you get the right value, not just the lowest headline price.
            </p>
            <div className="hotel-card-highlight">Smart value, not guesswork</div>
          </article>
        </div>

        <div className="hotel-cta-block">
          <p className="hotel-cta-text">
            Compare your next hotel stay with us first and see the difference in value.
          </p>
          <Link to="/book-online" className="hotel-cta-btn">
            <span>Request A Hotel Quote</span>
            <span className="btn-icon">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CruisesSection
