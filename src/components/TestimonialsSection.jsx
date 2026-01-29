import { useState, useEffect } from 'react'
import './TestimonialsSection.css'

function TestimonialsSection({ sharedBackground }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews = [
    {
      name: 'Stephanie Michael',
      text: 'Thank you for this amazing experience! Special thanks to Anna Rupina for helping us plan our Honeymoon to Japan, Bali and Dubai. Our travel agent planned such a romantic, well organized and wonderful trip for us, everything was absolutely perfect!',
      rating: 5,
      date: '2 months ago',
      verified: true
    },
    {
      name: 'Stavros Anastasiou',
      text: 'Super professional, punctual and assistive on anything we asked for! Highly recommended travel agency!',
      rating: 5,
      date: '3 months ago',
      verified: true
    },
    {
      name: 'Anthi Theocharous',
      text: 'A travel agency true to their mission!!! they do make you fall in love with travel. I have just returned from a trip to Tuscany area and the whole excursion was greatly organised, excellent guide and a super journey.',
      rating: 5,
      date: '1 month ago',
      verified: true
    },
    {
      name: 'Maria Christodoulou',
      text: 'My husband and I could not have been happier with our trip to Bali with this travel agency. Our agent assisted us in designing an absolutely spectacular itinerary for our 10day trip. We felt safe and well cared for.',
      rating: 5,
      date: '4 months ago',
      verified: true
    },
    {
      name: 'Andreas Georgiou',
      text: 'Excellent service! They helped us plan our family vacation to Greece. Everything was perfectly organized, from flights to hotels. The team is very knowledgeable and responsive. Will definitely use them again!',
      rating: 5,
      date: '5 months ago',
      verified: true
    }
  ]

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [reviews.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="testimonials-section" style={{ background: 'transparent' }}>
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="section-title">Clients Review</h2>
        </div>
        <div className="testimonials-carousel">
          <div className="carousel-viewport">
            <div 
              className="testimonials-wrapper"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="reviewer-avatar">{review.name.charAt(0)}</div>
                  <div className="reviewer-info">
                    <div className="reviewer-name-row">
                      <span className="reviewer-name">{review.name}</span>
                      {review.verified && (
                        <svg className="verified-badge" viewBox="0 0 22 22" width="18" height="18" fill="#1DA1F2">
                          <g>
                            <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                          </g>
                        </svg>
                      )}
                    </div>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
                <div className="review-stars">{renderStars(review.rating)}</div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="carousel-dots">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection





