import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const location = useLocation()
  const previousLocationRef = useRef(location)

  useLayoutEffect(() => {
    // Prevent browser from restoring old scroll positions during SPA navigation.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const previousLocation = previousLocationRef.current
    const isHashOnlyNavigation =
      previousLocation.pathname === location.pathname &&
      previousLocation.search === location.search &&
      previousLocation.hash !== location.hash

    previousLocationRef.current = location

    // Preserve browser/native anchor behavior for same-page hash navigation.
    if (isHashOnlyNavigation || location.hash) return

    const resetScrollTop = () => {
      const activeEl = document.activeElement
      if (activeEl instanceof HTMLElement) {
        activeEl.blur()
      }

      window.scrollTo(0, 0)
      if (document.scrollingElement) {
        document.scrollingElement.scrollTop = 0
      }
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0

      // If routing content scrolls inside a container, reset that as well.
      const mainContent = document.querySelector('.main-content')
      if (mainContent instanceof HTMLElement) {
        mainContent.scrollTop = 0
      }

      const root = document.getElementById('root')
      if (root instanceof HTMLElement) root.scrollTop = 0

      // Safety net: reset any scrollable containers with active scroll.
      const allElements = document.querySelectorAll('*')
      allElements.forEach((el) => {
        if (!(el instanceof HTMLElement)) return
        if (el.scrollTop <= 0) return

        const styles = window.getComputedStyle(el)
        const canScrollY = ['auto', 'scroll', 'overlay'].includes(styles.overflowY)
        if (canScrollY && el.scrollHeight > el.clientHeight) {
          el.scrollTop = 0
        }
      })
    }

    resetScrollTop()
    const rafId = requestAnimationFrame(resetScrollTop)
    const timeoutA = setTimeout(resetScrollTop, 80)
    const timeoutB = setTimeout(resetScrollTop, 180)
    const timeoutC = setTimeout(resetScrollTop, 320)
    const timeoutD = setTimeout(resetScrollTop, 600)
    let retries = 0
    const intervalId = window.setInterval(() => {
      resetScrollTop()
      retries += 1
      if (retries >= 10) {
        window.clearInterval(intervalId)
      }
    }, 80)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(timeoutA)
      clearTimeout(timeoutB)
      clearTimeout(timeoutC)
      clearTimeout(timeoutD)
      window.clearInterval(intervalId)
    }
  }, [location.pathname, location.search, location.hash])

  return null
}

export default ScrollToTop
