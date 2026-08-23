import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, inView]. Attach `ref` to the element you want to watch;
 * `inView` flips to true once it scrolls into the viewport (then stops observing).
 * Falls back to true immediately if IntersectionObserver isn't supported.
 */
export function useInView(options) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(node)
        }
      },
      options || { threshold: 0.25, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}
