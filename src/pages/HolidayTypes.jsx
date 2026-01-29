import { Link } from 'react-router-dom'
import './HolidayTypes.css'

function HolidayTypes() {
  const holidayCategories = [
    {
      id: 'destinations',
      title: 'Destinations',
      icon: '🌍',
      description: 'Explore amazing destinations around the world'
    },
    {
      id: 'summer-packages',
      title: 'Summer Packages',
      icon: '☀️',
      description: 'Perfect summer getaways for your vacation'
    },
    {
      id: 'autumn-packages',
      title: 'Autumn Packages',
      icon: '🍂',
      description: 'Experience the beauty of autumn destinations'
    },
    {
      id: 'winter-packages',
      title: 'Winter Packages',
      icon: '❄️',
      description: 'Winter wonderlands and cozy escapes'
    },
    {
      id: 'christmas-packages',
      title: 'Christmas Packages',
      icon: '🎄',
      description: 'Magical Christmas holidays and celebrations'
    },
    {
      id: 'easter-packages',
      title: 'Easter Packages',
      icon: '🐰',
      description: 'Easter breaks in beautiful locations'
    },
    {
      id: 'green-monday',
      title: 'Green Monday',
      icon: '🌿',
      description: 'Special Green Monday travel deals'
    },
    {
      id: 'cruises',
      title: 'Cruises',
      icon: '🚢',
      description: 'Luxury cruises to exotic destinations'
    },
    {
      id: 'city-breaks',
      title: 'City Breaks',
      icon: '🏙️',
      description: 'Urban adventures in vibrant cities'
    },
    {
      id: 'exotic-packages',
      title: 'Exotic Packages',
      icon: '🌴',
      description: 'Discover exotic and tropical paradises'
    },
    {
      id: 'mary-special-trips',
      title: 'Mary Special Trips',
      icon: '✨',
      description: 'Exclusive curated travel experiences'
    }
  ]

  const categoryTitleMap = holidayCategories.reduce((acc, cat) => {
    acc[cat.id] = cat.title
    return acc
  }, {})

  return (
    <div className="holiday-types-page">
      <div className="holiday-types-container">
        <div className="page-header">
          <h1>Holiday Types</h1>
          <p className="page-subtitle">Discover the perfect holiday experience tailored just for you</p>
        </div>

        <div className="categories-grid">
          {holidayCategories.map((category) => (
            <Link
              key={category.id}
              to={`/tour-category/${category.id}/`}
              className="category-card"
            >
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-title">{category.title}</h3>
              <p className="category-description">{category.description}</p>
              <span className="category-link">View Packages →</span>
            </Link>
          ))}
        </div>

        <section className="content-section">
          <h2>What we do</h2>
          <p className="intro-text">
            A honeymoon is the most romantic holiday you will ever experience, and we can help you create your dream getaway with our experienced honeymoon experts who arrange tailor-made honeymoons every day!
          </p>
          <p>
            Whether you are after luxury and romance, relaxation, entertainment or sightseeing, the one thing that a honeymoon should do is give you an unforgettable experience, this is why here at Honeywell Travel we have made this our sole aim.
          </p>
          <p>
            The world is waiting. Full of sights, sounds, colour and life. Travel with us to deserted beaches, cosmopolitan cities, ancient temples, exotic bazaars, vivid coral reefs, vibrant rain forests and majestic mountains.
          </p>
          <p>
            Our team of specialists have compiled a list of our favorite places from around the world for your perusal. From idyllic jewel islands to thrilling adventure tours, Honeywell Travel has the potential to fulfill all of your desires and make your dreams a reality.
          </p>
        </section>

        <section className="content-section why-section">
          <h2>Why Honeywell Travel?</h2>
          <p className="intro-text">
            We take the time to get to know you and your vision of the perfect honeymoon. It's our service, our attention to detail and our vast and varied array of destinations and holiday experiences that sets us apart from the rest.
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">✨</div>
              <h3>Tailored to you</h3>
              <p>We build your holiday around what you want, not our preferences. We take the time to understand what you enjoy so we can create the perfect holiday for you.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🌍</div>
              <h3>First-hand knowledge</h3>
              <p>Our specialists have visited many of the destinations that we offer and so we know our product inside out.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">⭐</div>
              <h3>Renowned service</h3>
              <p>You can trust us, not only to tailor the right holiday for you, but to look after you from the moment you speak to one of our consultants, until after you have returned home. We take care of you every step of the way, whatever happens.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🏖️</div>
              <h3>Our holidays</h3>
              <p>We offer everything, from romantic city breaks to deserted beaches on a tropical paradise to enchanting, lush forests and jungles. We have something for everyone's taste.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <h3>We believe in value</h3>
              <p>Our quality of service and expertise makes our value for money hard to beat.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Plan Your Perfect Holiday?</h2>
          <p>Contact our travel experts today and let us create an unforgettable experience for you.</p>
          <a href="/contact/" className="cta-button">Get in Touch</a>
        </section>
      </div>
    </div>
  )
}

export default HolidayTypes

