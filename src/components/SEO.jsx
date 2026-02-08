import { useEffect } from 'react'

/**
 * SEO Component for dynamic meta tags per page
 * Usage: <SEO title="Page Title" description="Page description" structuredData={jsonLdObject} />
 */
function SEO({ 
  title = 'Honeywell Travel - Premium Travel Agency in Limassol & Nicosia, Cyprus',
  description = 'Award-winning travel agency in Cyprus specializing in tailor-made holidays, honeymoon packages, corporate travel, and exotic destinations.',
  keywords = '',
  image = 'https://www.honeywelltravel.com.cy/images/og-image.jpg',
  url = '',
  type = 'website',
  noindex = false,
  structuredData = null
}) {
  useEffect(() => {
    // Update document title
    document.title = title

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attribute}="${name}"]`)
      
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attribute, name)
        document.head.appendChild(meta)
      }
      
      meta.setAttribute('content', content)
    }

    // Update description
    updateMetaTag('description', description)
    
    // Update keywords if provided
    if (keywords) {
      updateMetaTag('keywords', keywords)
    }

    // Update Open Graph tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', image, true)
    updateMetaTag('og:type', type, true)
    
    if (url) {
      updateMetaTag('og:url', url, true)
    }

    // Update Twitter Card tags
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', image)

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (url) {
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', url)
    }

    // Update robots meta tag
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow')
    } else {
      updateMetaTag('robots', 'index, follow')
    }

    // Update HTML lang attribute if needed (for i18n)
    const htmlLang = document.documentElement.getAttribute('lang')
    // You can extend this to support language switching

    // Add structured data (JSON-LD) if provided
    if (structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"][data-seo="true"]')
      if (!scriptTag) {
        scriptTag = document.createElement('script')
        scriptTag.setAttribute('type', 'application/ld+json')
        scriptTag.setAttribute('data-seo', 'true')
        document.head.appendChild(scriptTag)
      }
      scriptTag.textContent = JSON.stringify(structuredData)
    }

  }, [title, description, keywords, image, url, type, noindex, structuredData])

  return null
}

export default SEO
