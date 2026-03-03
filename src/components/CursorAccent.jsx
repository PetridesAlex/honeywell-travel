import { useEffect, useRef } from 'react'
import './CursorAccent.css'

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, select, textarea, label, .package-card, .related-card'

function CursorAccent() {
  const ringRef = useRef(null)

  useEffect(() => {
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isCoarsePointer || prefersReducedMotion) return undefined

    const ringEl = ringRef.current
    if (!ringEl) return undefined

    document.body.classList.add('cursor-accent-enabled')

    const handleMove = (event) => {
      ringEl.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
      ringEl.classList.remove('is-hidden')
    }

    const handleLeave = () => {
      ringEl.classList.add('is-hidden')
      ringEl.classList.remove('is-hover')
    }

    const handleOver = (event) => {
      if (event.target instanceof Element && event.target.closest(INTERACTIVE_SELECTOR)) {
        ringEl.classList.add('is-hover')
      }
    }

    const handleOut = (event) => {
      if (event.target instanceof Element && event.target.closest(INTERACTIVE_SELECTOR)) {
        ringEl.classList.remove('is-hover')
      }
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('mouseleave', handleLeave)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)

    return () => {
      document.body.classList.remove('cursor-accent-enabled')
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
    }
  }, [])

  return <span ref={ringRef} className="cursor-accent-ring is-hidden" aria-hidden="true" />
}

export default CursorAccent
