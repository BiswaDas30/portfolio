import { useEffect, useRef } from 'react'

/**
 * Draws animated rain onto the canvas the returned ref is attached to.
 * Respects prefers-reduced-motion (skips entirely if set).
 */
export function useRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let w, h, drops, rafId

    function sizeCanvas() {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }

    function makeDrops() {
      const density = w < 700 ? 90 : 170
      drops = Array.from({ length: density }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        len: 14 + Math.random() * 18,
        speed: 5 + Math.random() * 7,
        drift: 1.4 + Math.random() * 0.6,
        opacity: 0.08 + Math.random() * 0.22,
      }))
    }

    function tick() {
      ctx.clearRect(0, 0, w, h)
      ctx.lineCap = 'round'
      for (const d of drops) {
        ctx.strokeStyle = `rgba(200,205,222,${d.opacity})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(d.x, d.y)
        ctx.lineTo(d.x - d.drift * 4, d.y + d.len)
        ctx.stroke()
        d.x -= d.drift
        d.y += d.speed
        if (d.y > h || d.x < -20) {
          d.y = -d.len
          d.x = Math.random() * w + 40
        }
      }
      rafId = requestAnimationFrame(tick)
    }

    sizeCanvas()
    makeDrops()
    tick()

    function handleResize() {
      sizeCanvas()
      makeDrops()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return canvasRef
}
