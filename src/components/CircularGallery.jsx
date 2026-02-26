import './CircularGallery.css'

function CircularGallery({ textColor = '#ffffff', borderRadius = 0.05 }) {
  const images = [
    { id: 1, src: '/images/destinations/iceland.webp', title: 'Iceland' },
    { id: 2, src: '/images/destinations/thailand.webp', title: 'Thailand' },
    { id: 3, src: '/images/destinations/australia.webp', title: 'Australia' },
    { id: 4, src: '/images/destinations/capetown.webp', title: 'South Africa' },
    { id: 5, src: '/images/destinations/dubai.webp', title: 'Dubai' },
    { id: 6, src: '/images/destinations/brazil.webp', title: 'Brazil' },
    { id: 7, src: '/images/destinations/canada.webp', title: 'Canada' },
    { id: 8, src: '/images/destinations/maldives.webp', title: 'Maldives' },
    { id: 9, src: '/images/destinations/japan.webp', title: 'Japan' },
    { id: 10, src: '/images/destinations/netherlands.webp', title: 'Netherlands' }
  ]

  return (
    <div
      className="circular-gallery"
      style={{
        '--text-color': textColor,
        '--border-radius': `${borderRadius * 100}%`
      }}
    >
      <div className="circular-gallery-container">
        {images.map((image) => (
          <div key={image.id} className="circular-gallery-item">
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

