import { Link } from 'react-router-dom'
import './HeroSection.css'

function HeroSection() {
  const heroCards = [
    {
      id: 1,
      image: '/images/iceland.webp',
      title: 'Iceland',
      subtitle: 'Land of Fire and Ice',
      link: '/destinations'
    },
    {
      id: 2,
      image: '/images/Thailand.webp',
      title: 'Thailand',
      subtitle: 'Exotic Southeast Asia',
      link: '/packages'
    },
    {
      id: 3,
      image: '/images/Australia.webp',
      title: 'Australia',
      subtitle: 'Down Under Adventures',
      link: '/packages'
    },
    {
      id: 4,
      image: '/images/capetown.webp',
      title: 'South Africa',
      subtitle: 'Cape Town Beauty',
      link: '/destinations'
    },
    {
      id: 5,
      image: '/images/image.webp',
      title: 'Dubai',
      subtitle: 'Luxury in the Desert',
      link: '/packages'
    },
    {
      id: 6,
      image: '/images/brazil-hero.webp',
      title: 'Brazil',
      subtitle: 'Vibrant Culture & Nature',
      link: '/destinations'
    },
    {
      id: 7,
      image: '/images/canada-hero.webp',
      title: 'Canada',
      subtitle: 'Natural Wonders',
      link: '/packages'
    },
    {
      id: 8,
      image: '/images/japan-hero.webp',
      title: 'Japan',
      subtitle: 'Ancient Traditions & Modern Wonders',
      link: '/destinations'
    },
    {
      id: 9,
      image: '/images/maldives-hero.webp',
      title: 'Maldives',
      subtitle: 'Paradise Islands',
      link: '/packages'
    },
    {
      id: 10,
      image: '/images/netherlands-hero.webp',
      title: 'Netherlands',
      subtitle: 'Charming Canals & Tulips',
      link: '/destinations'
    },
    {
      id: 11,
      image: '/images/usa-hero.webp',
      title: 'United States',
      subtitle: 'Diverse Landscapes',
      link: '/packages'
    },
    {
      id: 12,
      image: null,
      title: 'GIFT VOUCHERS',
      subtitle: 'Life Experiences',
      link: '/gift-vouchers'
    }
  ]

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-cards">
          {heroCards.map((card) => (
            <div 
              key={card.id} 
              className="hero-card"
              style={card.image ? {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${card.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              } : {}}
            >
              <h2>{card.title}</h2>
              {card.subtitle && <p>{card.subtitle}</p>}
              <Link to={card.link} className="hero-link">Learn More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection






