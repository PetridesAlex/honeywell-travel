// Blog posts data structure
// Add new blog posts by adding objects to the blogPosts array

export const blogPosts = [
  {
    id: 1,
    title: 'Rome in 4 Days : Must-See Attractions of the Eternal City',
    slug: 'rome-in-4-days-must-see-attractions',
    date: '2024-03-01',
    formattedDate: 'March 1, 2024',
    excerpt: 'Discover the timeless beauty of Rome with our comprehensive 4-day itinerary covering the Colosseum, Vatican City, Trevi Fountain, and more iconic landmarks.',
    content: `Rome, the Eternal City, is a destination that captures the hearts of travelers from around the world. With its rich history, stunning architecture, and delicious cuisine, Rome offers an unforgettable experience.

In this comprehensive guide, we'll take you through a perfect 4-day itinerary that covers all the must-see attractions, from ancient ruins to Renaissance masterpieces.

**Day 1: Ancient Rome**
Start your journey at the Colosseum, the iconic symbol of Rome. Then explore the Roman Forum and Palatine Hill, where you can walk in the footsteps of emperors.

**Day 2: Vatican City**
Visit St. Peter's Basilica, the Sistine Chapel, and the Vatican Museums. Don't forget to climb to the top of St. Peter's Dome for breathtaking views.

**Day 3: Baroque Rome**
Explore the Trevi Fountain, Spanish Steps, and Piazza Navona. End your day with authentic Italian gelato.

**Day 4: Trastevere and Local Life**
Discover the charming neighborhood of Trastevere, known for its narrow streets, local restaurants, and vibrant nightlife.`,
    category: 'City Guides',
    author: 'Honeywell Travel Team',
    image: '/images/blog/rome.webp',
    featured: true,
    tags: ['Rome', 'Italy', 'City Break', 'History', 'Culture']
  },
  {
    id: 2,
    title: 'TRAVELING SOLO : TIPS AND DESTINATIONS',
    slug: 'traveling-solo-tips-and-destinations',
    date: '2023-12-15',
    formattedDate: 'December 15, 2023',
    excerpt: 'Everything you need to know about solo travel, from safety tips to the best destinations for solo travelers seeking adventure and independence.',
    content: `Solo travel is one of the most rewarding experiences you can have. It allows you to discover yourself while exploring the world at your own pace.

**Safety Tips for Solo Travelers:**
- Research your destination thoroughly before departure
- Stay in well-reviewed accommodations
- Keep copies of important documents
- Stay connected with family and friends
- Trust your instincts

**Best Destinations for Solo Travel:**
1. **Japan** - Safe, clean, and incredibly welcoming
2. **Iceland** - Stunning natural beauty and friendly locals
3. **New Zealand** - Perfect for adventure seekers
4. **Portugal** - Affordable and beautiful
5. **Singapore** - Modern, safe, and easy to navigate

Solo travel teaches you independence, confidence, and the joy of meeting new people from different cultures.`,
    category: 'Travel Tips',
    author: 'Honeywell Travel Team',
    image: '/images/blog/solo-travel.webp',
    featured: true,
    tags: ['Solo Travel', 'Travel Tips', 'Adventure', 'Safety']
  },
  {
    id: 3,
    title: 'DISCOVER THE WORLD THROUGH GASTRONOMY',
    slug: 'discover-world-through-gastronomy',
    date: '2023-12-06',
    formattedDate: 'December 6, 2023',
    excerpt: 'Explore different cultures through their unique culinary traditions, from street food to fine dining experiences around the globe.',
    content: `Food is one of the most authentic ways to experience a culture. Every dish tells a story, every recipe carries tradition, and every meal brings people together.

**Culinary Destinations to Explore:**

**Italy** - From pasta in Rome to pizza in Naples, Italian cuisine is a celebration of fresh ingredients and simple perfection.

**Japan** - Experience the art of sushi, the comfort of ramen, and the elegance of kaiseki dining.

**Thailand** - Discover the perfect balance of sweet, sour, salty, and spicy in Thai street food.

**France** - Indulge in world-class pastries, cheeses, and wines in the culinary capital of the world.

**Mexico** - Explore the vibrant flavors of tacos, mole, and authentic Mexican cuisine.

Traveling for food allows you to connect with locals, understand traditions, and create unforgettable memories through taste.`,
    category: 'Food & Culture',
    author: 'Honeywell Travel Team',
    image: '/images/blog/gastronomy.webp',
    featured: false,
    tags: ['Food', 'Culture', 'Culinary', 'Dining', 'Local Experience']
  }
]

// Helper function to get blog post by slug
export const getBlogPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug)
}

// Helper function to get featured blog posts
export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured)
}

// Helper function to get posts by category
export const getPostsByCategory = (category) => {
  return blogPosts.filter(post => post.category === category)
}

// Get all unique categories
export const getCategories = () => {
  const categories = [...new Set(blogPosts.map(post => post.category))]
  return categories.sort()
}
