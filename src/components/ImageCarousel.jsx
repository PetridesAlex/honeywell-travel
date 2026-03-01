import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './ImageCarousel.css'

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()

  const slides = [
    {
      id: 1,
      image: '/images/destinations/northern-lights.webp',
      title: 'Northern Lights Adventure',
      subtitle: 'Experience the magical Aurora Borealis in pristine wilderness',
      location: 'Iceland & Norway'
    },
    {
      id: 2,
      image: '/images/destinations/mountain.webp',
      title: 'Mountain Escapes',
      subtitle: 'Discover breathtaking landscapes and natural wonders',
      location: 'Mountain Destinations'
    },
    {
      id: 3,
      image: '/images/destinations/cliftonbay.webp',
      title: 'Coastal Paradise',
      subtitle: 'Relax on pristine beaches with crystal-clear turquoise waters',
      location: 'Tropical Destinations'
    },
    {
      id: 4,
      image: '/images/destinations/amsterdam-hero.webp',
      title: 'Amsterdam & Beyond',
      subtitle: 'Canals, culture and city breaks in the heart of Europe',
      location: 'Netherlands & Europe'
    }
  ]

  // Rotate slides every 5 seconds on all devices
  useEffect(() => {
    if (slides.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const current = slides[currentIndex]
  const currentImage = current?.image
    ? `url(${current.image}), linear-gradient(135deg, #E31E24 0%, #C41230 100%)`
    : 'linear-gradient(135deg, #E31E24 0%, #C41230 100%)'

  return (
    <section className="hero-section" aria-label="Hero">
      <div
        className="hero-bg-single"
        aria-hidden="true"
        style={{ backgroundImage: currentImage }}
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <h2 className="hero-title">{current?.title}</h2>
        <p className="hero-subtitle">{current?.subtitle}</p>
        <button
          type="button"
          className="hero-btn"
          onClick={() => navigate('/book-online')}
        >
          Book Online
        </button>
      </div>
    </section>
  )
}

export default ImageCarousel
