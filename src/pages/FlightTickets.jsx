import { Link } from 'react-router-dom'
import { getDestinationSummaries } from '../data/flightTickets'
import './FlightTickets.css'

function FlightTickets() {
  const destinations = getDestinationSummaries()

  return (
    <div className="flight-tickets-page">
      <section className="flight-tickets-hero">
        <div className="flight-tickets-container">
          <h1>Flight Tickets</h1>
          <p>
            Επιλέξτε προορισμό και δείτε όλες τις διαθέσιμες αναχωρήσεις και τιμές.
          </p>

          <div className="flight-destinations-grid">
            {destinations.map((item) => (
              <article className="flight-destination-card" key={item.destinationSlug}>
                <div
                  className="flight-destination-image"
                  style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.35)), url("${item.image}")` }}
                  role="img"
                  aria-label={`${item.destination} destination`}
                />
                <div className="flight-destination-content">
                  <h3>{item.destination}</h3>
                  <p>From EUR {item.fromPrice}</p>
                  <span>{item.offersCount} επιλογές πτήσεων</span>
                  <Link to={`/flight-tickets/${item.destinationSlug}`} className="flight-tickets-btn">
                    Book Now
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="flight-tickets-actions">
            <a href="tel:+35725828848" className="flight-tickets-btn flight-tickets-btn--secondary">Call Us</a>
            <a href="mailto:info@honeywelltravel.com.cy" className="flight-tickets-btn flight-tickets-btn--secondary">Email Us</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FlightTickets
