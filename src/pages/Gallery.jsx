import './Gallery.css'

function Gallery() {
  const galleryItems = [
    { id: 1, src: '/images/destinations/iceland.webp', title: 'Iceland' },
    { id: 2, src: '/images/destinations/thailand.webp', title: 'Thailand' },
    { id: 3, src: '/images/destinations/australia.webp', title: 'Australia' },
    { id: 4, src: '/images/destinations/capetown.webp', title: 'South Africa' },
    { id: 5, src: '/images/destinations/dubai.webp', title: 'Dubai' },
    { id: 6, src: '/images/destinations/brazil.webp', title: 'Brazil' },
    { id: 7, src: '/images/destinations/canada.webp', title: 'Canada' },
    { id: 8, src: '/images/destinations/japan.webp', title: 'Japan' },
    { id: 9, src: '/images/destinations/maldives.webp', title: 'Maldives' },
    { id: 10, src: '/images/destinations/netherlands.webp', title: 'Netherlands' },
    { id: 11, src: '/images/destinations/usa.webp', title: 'United States' }
  ]

  return (
    <div className="gallery-page">
      <div className="gallery-container">
        <h1>Gallery</h1>
        <p className="gallery-subtitle">Explore our travel destinations through stunning photography</p>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <img 
                src={item.src} 
                alt={item.title}
                className="gallery-image"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none'
                  const placeholder = e.target.nextElementSibling
                  if (placeholder) {
                    placeholder.style.display = 'flex'
                  }
                }}
              />
              <div className="gallery-placeholder" style={{ display: 'none' }}>
                <span>📸</span>
                <p>{item.title}</p>
              </div>
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery






