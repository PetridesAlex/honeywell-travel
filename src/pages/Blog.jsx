import './Blog.css'

function Blog() {
  const blogPosts = [
    {
      title: 'Rome in 4 Days : Must-See Attractions of the Eternal City',
      date: 'March 1, 2024',
      excerpt: 'Discover the timeless beauty of Rome with our comprehensive 4-day itinerary...'
    },
    {
      title: 'TRAVELING SOLO : TIPS AND DESTINATIONS',
      date: 'December 15, 2023',
      excerpt: 'Everything you need to know about solo travel, from safety tips to the best destinations...'
    },
    {
      title: 'DISCOVER THE WORLD THROUGH GASTRONOMY',
      date: 'December 6, 2023',
      excerpt: 'Explore different cultures through their unique culinary traditions...'
    }
  ]

  return (
    <div className="blog-page">
      <div className="blog-container">
        <h1>Our Blog</h1>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-card">
              <h2>{post.title}</h2>
              <p className="blog-date">{post.date}</p>
              <p className="blog-excerpt">{post.excerpt}</p>
              <a href="#" className="blog-link">Read More →</a>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog






