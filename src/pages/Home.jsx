import { useState } from 'react'
import ImageCarousel from '../components/ImageCarousel'
import CircularGallery from '../components/CircularGallery'
import SearchSection from '../components/SearchSection'
import TourPackagesSection from '../components/TourPackagesSection'
import CruisesSection from '../components/CruisesSection'
import StatsRewardsSection from '../components/StatsRewardsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import RevealOnScroll from '../components/RevealOnScroll'
import './Home.css'

function Home() {
  const [sharedBackground, setSharedBackground] = useState('/images/destinations/search-where-to-travel.webp')
  return (
    <div className="home-page">
      <ImageCarousel />
      <div style={{ height: '400px', position: 'relative', margin: 0 }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
      </div>
      <div className="unified-sections-wrapper" style={{ backgroundImage: `url(${sharedBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
        <RevealOnScroll direction="up" delay={0}>
          <SearchSection 
            sharedBackground={sharedBackground} 
            setSharedBackground={setSharedBackground} 
          />
        </RevealOnScroll>
        <RevealOnScroll direction="up" delay={80}>
          <TourPackagesSection sharedBackground={sharedBackground} />
        </RevealOnScroll>
        <RevealOnScroll direction="up" delay={80}>
          <CruisesSection sharedBackground={sharedBackground} />
        </RevealOnScroll>
        <RevealOnScroll direction="up" delay={80}>
          <StatsRewardsSection />
        </RevealOnScroll>
        <RevealOnScroll direction="up" delay={80}>
          <TestimonialsSection sharedBackground={sharedBackground} />
        </RevealOnScroll>
      </div>
    </div>
  )
}

export default Home


