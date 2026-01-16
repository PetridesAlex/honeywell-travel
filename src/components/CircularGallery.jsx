import { useEffect, useRef, useState } from 'react'
import './CircularGallery.css'

function CircularGallery({ textColor = '#ffffff', borderRadius = 0.05 }) {
  // Images with correct country names - easy to add more images here
  const images = [
    { id: 1, src: '/images/iceland.webp', title: 'Iceland' },
    { id: 2, src: '/images/Thailand.webp', title: 'Thailand' },
    { id: 3, src: '/images/Australia.webp', title: 'Australia' },
    { id: 4, src: '/images/capetown.webp', title: 'South Africa' },
    { id: 5, src: '/images/image.webp', title: 'Dubai' },
    { id: 6, src: '/images/brazil-hero.webp', title: 'Brazil' },
    { id: 7, src: '/images/canada-hero.webp', title: 'Canada' },
    { id: 8, src: '/images/maldives-hero.webp', title: 'Maldives' },
    { id: 9, src: '/images/japan-hero.webp', title: 'Japan' },
    { id: 10, src: '/images/netherlands-hero.webp', title: 'Netherlands' }
  ]

  const containerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length
        return nextIndex
      })
    }, 5000) // Rotate every 5 seconds

    return () => clearInterval(interval)
  }, [images.length])

  useEffect(() => {
    if (containerRef.current) {
      const firstItem = containerRef.current.querySelector('.circular-gallery-item')
      if (firstItem) {
        const itemWidth = firstItem.offsetWidth
        const gap = 24 // 1.5rem = 24px
        const scrollPosition = currentIndex * (itemWidth + gap)
        containerRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        })
      }
    }
  }, [currentIndex])

  return (
    <div 
      className="circular-gallery"
      style={{ 
        '--text-color': textColor,
        '--border-radius': `${borderRadius * 100}%`
      }}
    >
      <div className="circular-gallery-container" ref={containerRef}>
        {images.map((image, index) => (
          <div 
            key={image.id}
            className="circular-gallery-item"
          >
            <img 
              src={image.src} 
              alt={image.title}
              onError={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #E31E24 0%, #C41230 100%)'
                e.target.style.display = 'block'
              }}
            />
            <div className="circular-gallery-overlay">
              <h3 style={{ color: textColor }}>{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CircularGallery

