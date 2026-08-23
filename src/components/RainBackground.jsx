import { useEffect, useRef, useState } from 'react'
import { useRain } from '../hooks/useRain.js'
import '../css/RainBackground.css'

export default function RainBackground() {
  const canvasRef = useRain()
  const [flash, setFlash] = useState(false)
  const [featherStyles, setFeatherStyles] = useState([])

  useEffect(() => {
    // Distant lightning flash, rare and brief
    let timeoutId
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!prefersReducedMotion) {
      const scheduleFlash = () => {
        const delay = 9000 + Math.random() * 16000
        timeoutId = setTimeout(() => {
          setFlash(true)
          setTimeout(() => setFlash(false), 120)
          scheduleFlash()
        }, delay)
      }
      scheduleFlash()
    }
    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    const count = window.innerWidth < 700 ? 4 : 8
    const styles = Array.from({ length: count }, () => ({
      left: `${Math.random() * 100}vw`,
      animationDuration: `${10 + Math.random() * 12}s`,
      animationDelay: `${Math.random() * -20}s`,
      opacity: 0.1 + Math.random() * 0.2,
    }))
    setFeatherStyles(styles)
  }, [])

  return (
    <>
      <div className="void-bg" />
      <canvas ref={canvasRef} className="rain-canvas" />
      <div className={`flash ${flash ? 'flash-active' : ''}`} />
      <div className="feathers">
        {featherStyles.map((style, i) => (
          <div key={i} className="feather" style={style} />
        ))}
      </div>
    </>
  )
}
