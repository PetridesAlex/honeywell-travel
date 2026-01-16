import { Link } from 'react-router-dom'
import './TourPackagesSection.css'

function TourPackagesSection() {
  const tourPackages = [
    {
      id: 'destinations',
      title: 'Destinations',
      icon: '🌍',
      description: 'Explore amazing destinations around the world',
      color: '#E31E24',
      image: '/images/iceland.webp'
    },
    {
      id: 'summer-packages',
      title: 'Summer Packages',
      icon: '☀️',
      description: 'Perfect summer getaways for your vacation',
      color: '#FF6B35',
      image: '/images/Summer.webp'
    },
    {
      id: 'autumn-packages',
      title: 'Autumn Packages',
      icon: '🍂',
      description: 'Experience the beauty of autumn destinations',
      color: '#D2691E',
      image: '/images/autumn.webp'
    },
    {
      id: 'winter-packages',
      title: 'Winter Packages',
      icon: '❄️',
      description: 'Winter wonderlands and cozy escapes',
      color: '#4A90E2',
      image: '/images/winter.webp'
    },
    {
      id: 'christmas-packages',
      title: 'Christmas Packages',
      icon: '🎄',
      description: 'Magical Christmas holidays and celebrations',
      color: '#C41230',
      image: '/images/christmas.webp'
    },
    {
      id: 'easter-packages',
      title: 'Easter Packages',
      icon: '🐰',
      description: 'Easter breaks in beautiful locations',
      color: '#FFB6C1',
      image: '/images/easter.webp'
    },
    {
      id: 'green-monday',
      title: 'Green Monday',
      icon: '🌿',
      description: 'Special Green Monday travel deals',
      color: '#228B22',
      image: '/images/green-monday.webp'
    },
    {
      id: 'cruises',
      title: 'Cruises',
      icon: '🚢',
      description: 'Luxury cruises to exotic destinations',
      color: '#1E90FF',
      image: '/images/Cruises.webp'
    },
    {
      id: 'city-breaks',
      title: 'City Breaks',
      icon: '🏙️',
      description: 'Urban adventures in vibrant cities',
      color: '#8B008B',
      image: '/images/city-breaks.webp'
    },
    {
      id: 'exotic-packages',
      title: 'Exotic Packages',
      icon: '🌴',
      description: 'Discover exotic and tropical paradises',
      color: '#FF6347',
      image: '/images/exotic-destinations.webp'
    },
    {
      id: 'music-sports',
      title: 'Music & Sports',
      icon: '🎵',
      description: 'Festivals, concerts, and sporting events',
      color: '#9B59B6',
      image: '/images/music-sports.webp'
    },
    {
      id: 'mary-special-trips',
      title: 'Mary Special Trips',
      icon: '✨',
      description: 'Exclusive curated travel experiences',
      color: '#FFD700',
      image: '/images/Sports.webp'
    }
  ]

  return (
    <section className="tour-packages-section">
      <div className="tour-packages-container">
        <div className="section-header">
          <h2 className="section-title">Tour Packages</h2>
          <p className="section-subtitle">Discover our wide range of holiday packages tailored for every season and occasion</p>
        </div>

        <div className="packages-grid">
          {tourPackages.map((pkg, index) => (
            <Link
              key={pkg.id}
              to={`/holiday-types/${pkg.id}`}
              className="package-card"
              style={{ 
                '--delay': `${index * 0.1}s`,
                '--pkg-color': pkg.color,
                '--pkg-image': pkg.image ? `url(${pkg.image})` : 'none'
              }}
            >
              {pkg.image && (
                <div className="package-image-overlay"></div>
              )}
              <div className="package-icon-wrapper">
                <div className="package-icon" style={{ '--pkg-color': pkg.color }}>
                  {pkg.icon}
                </div>
                <div className="icon-glow" style={{ '--pkg-color': pkg.color }}></div>
              </div>
              <h3 className="package-title">{pkg.title}</h3>
              <p className="package-description">{pkg.description}</p>
              <div className="package-arrow">
                <span>Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TourPackagesSection





