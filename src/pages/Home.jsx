import ImageCarousel from '../components/ImageCarousel'
import CircularGallery from '../components/CircularGallery'
import SearchSection from '../components/SearchSection'
import TourPackagesSection from '../components/TourPackagesSection'
import TestimonialsSection from '../components/TestimonialsSection'

function Home() {
  return (
    <div className="home-page">
      <ImageCarousel />
      <div style={{ height: '400px', position: 'relative', margin: '3rem 0' }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
      </div>
      <SearchSection />
      <TourPackagesSection />
      <TestimonialsSection />
    </div>
  )
}

export default Home


