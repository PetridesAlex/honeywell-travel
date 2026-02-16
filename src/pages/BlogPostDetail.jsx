import { useParams, Link } from 'react-router-dom'
import { getBlogPostBySlug, blogPosts } from '../data/blog'
import RevealOnScroll from '../components/RevealOnScroll'
import SEO from '../components/SEO'
import './BlogPostDetail.css'

function BlogPostDetail() {
  const { slug } = useParams()
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="blog-post-container">
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/our-blog/" className="back-link">← Back to Blog</Link>
        </div>
      </div>
    )
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  // Format content with paragraphs
  const formatContent = (content) => {
    return content.split('\n\n').filter(p => p.trim())
  }

  const contentParagraphs = formatContent(post.content)

  return (
    <div className="blog-post-page">
      <SEO
        title={`${post.title} | Honeywell Travel Blog`}
        description={post.excerpt}
        keywords={`${post.category}, travel blog, honeywell travel`}
        image={post.image}
        url={`https://www.honeywelltravel.com.cy/our-blog/${post.slug}`}
        type="article"
      />
      {/* Hero Section */}
      {post.image && (
        <div 
          className="blog-post-hero"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="blog-post-hero-overlay"></div>
          <div className="blog-post-hero-content">
            <Link to="/our-blog/" className="back-to-blog">← Back to Blog</Link>
            <div className="blog-post-meta-hero">
              <span className="blog-post-category-hero">{post.category}</span>
              <span className="blog-post-date-hero">{post.formattedDate}</span>
            </div>
            <h1 className="blog-post-title-hero">{post.title}</h1>
            {post.author && (
              <p className="blog-post-author">By {post.author}</p>
            )}
          </div>
        </div>
      )}

      <RevealOnScroll direction="up">
      <div className="blog-post-container">
        {/* Main Content */}
        <article className="blog-post-content">
          {!post.image && (
            <div className="blog-post-header-no-image">
              <Link to="/our-blog/" className="back-to-blog">← Back to Blog</Link>
              <div className="blog-post-meta-hero">
                <span className="blog-post-category-hero">{post.category}</span>
                <span className="blog-post-date-hero">{post.formattedDate}</span>
              </div>
              <h1 className="blog-post-title-hero">{post.title}</h1>
              {post.author && (
                <p className="blog-post-author">By {post.author}</p>
              )}
            </div>
          )}

          <div className="blog-post-body">
            {contentParagraphs.map((paragraph, index) => {
              // Check if paragraph is a heading (starts with **)
              if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                const headingText = paragraph.replace(/\*\*/g, '').trim()
                return (
                  <h2 key={index} className="blog-post-heading">{headingText}</h2>
                )
              }
              // Check if paragraph is a list item (starts with - or *)
              if (paragraph.trim().startsWith('-') || paragraph.trim().startsWith('*')) {
                const items = paragraph.split(/\n/).filter(item => item.trim().startsWith('-') || item.trim().startsWith('*'))
                return (
                  <ul key={index} className="blog-post-list">
                    {items.map((item, idx) => (
                      <li key={idx}>{item.replace(/^[-*]\s*/, '').trim()}</li>
                    ))}
                  </ul>
                )
              }
              // Regular paragraph
              return (
                <p key={index} className="blog-post-paragraph">{paragraph.trim()}</p>
              )
            })}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="blog-post-tags">
              <h3>Tags:</h3>
              <div className="tags-list">
                {post.tags.map((tag, index) => (
                  <span key={index} className="blog-post-tag">{tag}</span>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <aside className="blog-post-sidebar">
            <h2 className="related-posts-title">Related Posts</h2>
            <div className="related-posts">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  to={`/our-blog/${relatedPost.slug}`}
                  className="related-post-card"
                >
                  {relatedPost.image && (
                    <div 
                      className="related-post-image"
                      style={{ backgroundImage: `url(${relatedPost.image})` }}
                    />
                  )}
                  <div className="related-post-content">
                    <h3>{relatedPost.title}</h3>
                    <p className="related-post-date">{relatedPost.formattedDate}</p>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>
      </RevealOnScroll>
    </div>
  )
}

export default BlogPostDetail
