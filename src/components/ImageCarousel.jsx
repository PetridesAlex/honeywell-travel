import { useState, useEffect } from 'react'
import './ImageCarousel.css'

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      id: 1,
      image: '/images/hero-northerlights.webp',
      title: 'Northern Lights Adventure',
      subtitle: 'Experience the magical Aurora Borealis in pristine wilderness',
      location: 'Iceland & Norway'
    },
    {
      id: 2,
      image: '/images/hero-mountain.webp',
      title: 'Mountain Escapes',
      subtitle: 'Discover breathtaking landscapes and natural wonders',
      location: 'Mountain Destinations'
    },
    {
      id: 3,
      image: '/images/hero-cliftonbay.webp',
      title: 'Coastal Paradise',
      subtitle: 'Relax on pristine beaches with crystal-clear turquoise waters',
      location: 'Tropical Destinations'
    }
  ]

  // Auto-rotate carousel every 2.5 seconds
  useEffect(() => {
    if (images.length <= 1) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <section className="image-carousel">
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {images.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''} ${
                index < currentIndex ? 'prev' : index > currentIndex ? 'next' : ''
              }`}
            >
              <div 
                className="slide-image"
                style={{
                  backgroundImage: item.image ? `url(${item.image}), linear-gradient(135deg, #E31E24 0%, #C41230 100%)` : 'linear-gradient(135deg, #E31E24 0%, #C41230 100%)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Subtle overlay for text readability */}
                <div className="image-overlay"></div>
              </div>
              <div className="slide-content">
                <div className="slide-badge">{item.location}</div>
                <h2 className="slide-title">{item.title}</h2>
                <p className="slide-subtitle">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Only show if multiple images */}
        {images.length > 1 && (
          <>
            <button className="carousel-arrow carousel-arrow-left" onClick={goToPrevious}>
              ‹
            </button>
            <button className="carousel-arrow carousel-arrow-right" onClick={goToNext}>
              ›
            </button>
          </>
        )}

        {/* Dots Indicator - Only show if multiple images */}
        {images.length > 1 && (
          <div className="carousel-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ImageCarousel

