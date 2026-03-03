import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './ImageCarousel.css'

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()

  const slides = [
    {
      id: 0,
      image: '/images/destinations/water-blue-hero.webp',
      title: 'Welcome to Honeywell Travel',
      subtitle: '#Live the Experience',
      location: 'Worldwide'
    },
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

  // Rotate slides every 8 seconds on all devices
  useEffect(() => {
    if (slides.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [slides.length])

  const current = slides[currentIndex]
  const currentImage = current?.image ? `url(${current.image})` : null

  // If the hero ever has scrollable overflow, pass wheel to the page so only the main scrollbar is used
  const handleWheel = (e) => {
    const el = e.currentTarget
    if (el.scrollHeight <= el.clientHeight) return // no overflow, let event bubble to document
    e.preventDefault()
    window.scrollBy(0, e.deltaY)
  }

  return (
    <section className="hero-section" aria-label="Hero" onWheel={handleWheel}>
      <div
        className="hero-bg-single"
        aria-hidden="true"
        style={{ backgroundImage: currentImage || undefined }}
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className={`hero-content${currentIndex === 0 ? ' hero-content--welcome' : ''}`}>
        <div className="hero-text-wrap">
          <h2 className="hero-title">{current?.title}</h2>
          <p className="hero-subtitle">{current?.subtitle}</p>
        </div>
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
