import { useState } from 'react'
import ImageCarousel from '../components/ImageCarousel'
import CircularGallery from '../components/CircularGallery'
import SearchSection from '../components/SearchSection'
import TourPackagesSection from '../components/TourPackagesSection'
import CruisesSection from '../components/CruisesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import './Home.css'

function Home() {
  const [sharedBackground, setSharedBackground] = useState('/images/destinations/search-where-to-travel.webp')

  return (
    <div className="home-page">
      <ImageCarousel />
      <div style={{ height: '400px', position: 'relative', margin: '3rem 0' }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
      </div>
      <div className="unified-sections-wrapper" style={{ backgroundImage: `url(${sharedBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
        <SearchSection 
          sharedBackground={sharedBackground} 
          setSharedBackground={setSharedBackground} 
        />
        <TourPackagesSection sharedBackground={sharedBackground} />
        <CruisesSection sharedBackground={sharedBackground} />
        <TestimonialsSection sharedBackground={sharedBackground} />
      </div>
    </div>
  )
}

export default Home


