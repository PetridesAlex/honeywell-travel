import { Link } from 'react-router-dom'
import './TourPackagesSection.css'

function TourPackagesSection({ sharedBackground }) {
  const categoryQueryMap = {
    'destinations': 'Destinations',
    'summer-packages': 'Summer Packages',
    'autumn-packages': 'Autumn Packages',
    'winter-packages': 'Winter Packages',
    'ski-packages': 'Ski Packages',
    'christmas-packages': 'Christmas Packages',
    'easter-packages': 'Easter Packages',
    'green-monday': 'Green Monday',
    'cruises': 'Cruises',
    'city-breaks': 'City Breaks',
    'exotic-packages': 'Exotic Packages',
    'music-sports': 'Music & Sports',
    'mary-special-trips': 'Mary Special Trips'
  }

  const tourPackages = [
    {
      id: 'summer-packages',
      title: 'Summer Packages',
      icon: '☀️',
      description: 'Perfect summer getaways for your vacation',
      color: '#FF6B35',
      image: '/images/categories/summer.png'
    },
    {
      id: 'autumn-packages',
      title: 'Autumn Packages',
      icon: '🍂',
      description: 'Experience the beauty of autumn destinations',
      color: '#D2691E',
      image: '/images/categories/autumn.png'
    },
    {
      id: 'winter-packages',
      title: 'Winter Packages',
      icon: '❄️',
      description: 'Winter wonderlands and cozy escapes',
      color: '#4A90E2',
      image: '/images/categories/winter.png'
    },
    {
      id: 'ski-packages',
      title: 'Ski Packages',
      icon: '⛷️',
      description: 'Hit the slopes at world-class ski resorts',
      color: '#87CEEB',
      image: '/images/categories/ski.png'
    },
    {
      id: 'christmas-packages',
      title: 'Christmas Packages',
      icon: '🎄',
      description: 'Magical Christmas holidays and celebrations',
      color: '#C41230',
      image: '/images/categories/christmas.png'
    },
    {
      id: 'easter-packages',
      title: 'Easter Packages',
      icon: '🐰',
      description: 'Easter breaks in beautiful locations',
      color: '#FFB6C1',
      image: '/images/categories/easter.png'
    },
    {
      id: 'green-monday',
      title: 'Green Monday',
      icon: '🌿',
      description: 'Special Green Monday travel deals',
      color: '#228B22',
      image: '/images/categories/green-monday.png'
    },
    {
      id: 'cruises',
      title: 'Cruises',
      icon: '🚢',
      description: 'Luxury cruises to exotic destinations',
      color: '#1E90FF',
      image: '/images/categories/cruises.png'
    },
    {
      id: 'city-breaks',
      title: 'City Breaks',
      icon: '🏙️',
      description: 'Urban adventures in vibrant cities',
      color: '#8B008B',
      image: '/images/categories/city-breaks.png'
    },
    {
      id: 'exotic-packages',
      title: 'Exotic Packages',
      icon: '🌴',
      description: 'Discover exotic and tropical paradises',
      color: '#FF6347',
      image: '/images/categories/exotic.png'
    },
    {
      id: 'music-sports',
      title: 'Music & Sports',
      icon: '🎵',
      description: 'Festivals, concerts, and sporting events',
      color: '#9B59B6',
      image: '/images/categories/music-sports.png'
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
            <div key={pkg.id} className="package-card-wrapper">
              <Link
                to={`/tour-category/${pkg.id}/`}
                className="package-card"
                style={{ 
                  '--delay': `${index * 0.1}s`,
                  '--pkg-color': pkg.color,
                  '--pkg-image': pkg.image ? `url(${pkg.image})` : 'none'
                }}
              >
                {pkg.image && (
                  <div className="package-image-overlay">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title}
                      className="package-image"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="package-arrow">
                  <span>Explore →</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TourPackagesSection





