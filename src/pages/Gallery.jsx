import './Gallery.css'

function Gallery() {
  const galleryItems = [
    { id: 1, src: '/images/iceland.webp', title: 'Iceland' },
    { id: 2, src: '/images/Thailand.webp', title: 'Thailand' },
    { id: 3, src: '/images/Australia.webp', title: 'Australia' },
    { id: 4, src: '/images/capetown.webp', title: 'South Africa' },
    { id: 5, src: '/images/image.webp', title: 'Dubai' },
    { id: 6, src: '/images/brazil-hero.webp', title: 'Brazil' },
    { id: 7, src: '/images/canada-hero.webp', title: 'Canada' },
    { id: 8, src: '/images/japan-hero.webp', title: 'Japan' },
    { id: 9, src: '/images/maldives-hero.webp', title: 'Maldives' },
    { id: 10, src: '/images/netherlands-hero.webp', title: 'Netherlands' },
    { id: 11, src: '/images/usa-hero.webp', title: 'United States' }
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
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextElementSibling.style.display = 'flex'
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






