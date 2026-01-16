import './TestimonialsSection.css'

function TestimonialsSection() {
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

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="section-title">Customer Reviews</h2>
        </div>
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <div className="reviewer-avatar">
                  {review.name.charAt(0)}
                </div>
                <div className="reviewer-info">
                  <div className="reviewer-name-row">
                    <span className="reviewer-name">{review.name}</span>
                    {review.verified && (
                      <span className="verified-badge" title="Verified review">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#4285F4">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </span>
                    )}
                  </div>
                  <div className="review-rating">
                    <span className="stars">{renderStars(review.rating)}</span>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection





