import { useEffect, useRef } from 'react'

const TRAIL_COUNT = 9

// Rich, high-saturation optical glow nodes for an intense, vibrant light wake
const TRAIL_CONFIG = [
  // Head: Primary golden spotlight & bloom
  { size: 480, opacity: 0.9, blur: 55, bg: 'radial-gradient(circle, rgba(255,240,160,0.9) 0%, rgba(255,190,50,0.65) 35%, rgba(216,140,30,0.35) 55%, transparent 75%)' },
  // Node 1: Intense trailing core
  { size: 400, opacity: 0.85, blur: 48, bg: 'radial-gradient(circle, rgba(255,225,120,0.85) 0%, rgba(255,175,40,0.6) 35%, rgba(216,130,25,0.3) 55%, transparent 75%)' },
  // Node 2: Rich warm amber
  { size: 340, opacity: 0.8, blur: 42, bg: 'radial-gradient(circle, rgba(255,210,100,0.8) 0%, rgba(250,160,35,0.55) 35%, rgba(216,120,20,0.25) 55%, transparent 75%)' },
  // Node 3: Golden wake
  { size: 290, opacity: 0.72, blur: 36, bg: 'radial-gradient(circle, rgba(255,195,85,0.75) 0%, rgba(245,145,30,0.5) 35%, rgba(210,110,15,0.2) 55%, transparent 75%)' },
  // Node 4: Saturated amber tail
  { size: 240, opacity: 0.65, blur: 30, bg: 'radial-gradient(circle, rgba(250,180,70,0.7) 0%, rgba(240,130,25,0.45) 35%, rgba(200,100,15,0.18) 55%, transparent 75%)' },
  // Node 5: Warm amber wake
  { size: 190, opacity: 0.55, blur: 24, bg: 'radial-gradient(circle, rgba(245,165,60,0.6) 0%, rgba(230,115,20,0.35) 35%, rgba(190,90,10,0.12) 55%, transparent 75%)' },
  // Node 6: Deep golden tail
  { size: 150, opacity: 0.45, blur: 20, bg: 'radial-gradient(circle, rgba(240,150,50,0.5) 0%, rgba(220,100,15,0.3) 35%, transparent 70%)' },
  // Node 7: Fading amber tip
  { size: 110, opacity: 0.35, blur: 16, bg: 'radial-gradient(circle, rgba(235,135,40,0.4) 0%, rgba(210,90,10,0.2) 35%, transparent 70%)' },
  // Node 8: Soft tail end
  { size: 80, opacity: 0.22, blur: 12, bg: 'radial-gradient(circle, rgba(230,120,30,0.3) 0%, transparent 70%)' },
]

const HeroCursorGlow = ({ heroId = 'hero' }) => {
  const containerRef = useRef(null)
  const nodeRefs = useRef([])
  const headCoreRef = useRef(null)
  const headSparkleRef = useRef(null)

  useEffect(() => {
    const isTouchOrReduced = window.matchMedia('(hover: none), (prefers-reduced-motion: reduce)').matches
    if (isTouchOrReduced) return

    const hero = document.getElementById(heroId)
    const container = containerRef.current
    if (!hero || !container) return

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2

    // Chained coordinates array
    const points = Array.from({ length: TRAIL_COUNT }, () => ({
      x: targetX,
      y: targetY,
    }))

    let targetOpacity = 0
    let currentOpacity = 0
    let isInside = false
    let isIntersecting = true
    let animationFrame = null

    const handleMouseEnter = () => {
      isInside = true
      targetOpacity = 1
      if (isIntersecting && !animationFrame) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect()
      targetX = e.clientX - rect.left
      targetY = e.clientY - rect.top

      // 3D tilt calculations
      const percentX = (targetX / rect.width - 0.5) * 2
      const percentY = (targetY / rect.height - 0.5) * 2

      hero.style.setProperty('--mouse-x', `${targetX}px`)
      hero.style.setProperty('--mouse-y', `${targetY}px`)
      hero.style.setProperty('--tilt-x', `${-percentY * 6}deg`)
      hero.style.setProperty('--tilt-y', `${percentX * 6}deg`)
      hero.style.setProperty('--sheen-x', `${(targetX / rect.width) * 100}%`)
      hero.style.setProperty('--sheen-y', `${(targetY / rect.height) * 100}%`)

      if (!isInside) {
        isInside = true
        targetOpacity = 1
        if (isIntersecting && !animationFrame) {
          animationFrame = requestAnimationFrame(animate)
        }
      }
    }

    const handleMouseLeave = () => {
      isInside = false
      targetOpacity = 0
      hero.style.setProperty('--tilt-x', '0deg')
      hero.style.setProperty('--tilt-y', '0deg')
    }

    const animate = () => {
      if (!isIntersecting) {
        animationFrame = null
        return
      }

      // 1. Head tracks cursor with silky smooth responsiveness
      points[0].x += (targetX - points[0].x) * 0.22
      points[0].y += (targetY - points[0].y) * 0.22

      // 2. Chained trailing physics - each node follows predecessor with natural inertia
      for (let i = 1; i < TRAIL_COUNT; i++) {
        const factor = Math.max(0.12, 0.26 - i * 0.016)
        points[i].x += (points[i - 1].x - points[i].x) * factor
        points[i].y += (points[i - 1].y - points[i].y) * factor
      }

      // Smooth opacity fade
      currentOpacity += (targetOpacity - currentOpacity) * 0.08
      if (container) {
        container.style.opacity = currentOpacity.toFixed(3)
      }

      // Update positions of all trailing glow nodes directly in DOM
      for (let i = 0; i < TRAIL_COUNT; i++) {
        const node = nodeRefs.current[i]
        if (node) {
          const cfg = TRAIL_CONFIG[i]
          const halfSize = cfg.size / 2
          node.style.transform = `translate3d(${points[i].x - halfSize}px, ${points[i].y - halfSize}px, 0)`
        }
      }

      // Update Head Inner Core & Specular Highlight
      if (headCoreRef.current) {
        headCoreRef.current.style.transform = `translate3d(${points[0].x - 100}px, ${points[0].y - 100}px, 0)`
      }
      if (headSparkleRef.current) {
        headSparkleRef.current.style.transform = `translate3d(${points[0].x - 16}px, ${points[0].y - 16}px, 0)`
      }

      // If faded out and mouse left, stop loop to preserve battery/CPU
      if (!isInside && currentOpacity < 0.01) {
        animationFrame = null
        return
      }

      animationFrame = requestAnimationFrame(animate)
    }

    // IntersectionObserver to pause loop when Hero is out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersecting = entry.isIntersecting
          if (isIntersecting && isInside && !animationFrame) {
            animationFrame = requestAnimationFrame(animate)
          } else if (!isIntersecting && animationFrame) {
            cancelAnimationFrame(animationFrame)
            animationFrame = null
          }
        })
      },
      { threshold: 0.05 }
    )

    observer.observe(hero)
    hero.addEventListener('mouseenter', handleMouseEnter)
    hero.addEventListener('mousemove', handleMouseMove, { passive: true })
    hero.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      observer.disconnect()
      hero.removeEventListener('mouseenter', handleMouseEnter)
      hero.removeEventListener('mousemove', handleMouseMove)
      hero.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [heroId])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-[1] select-none opacity-0 mix-blend-screen transition-opacity duration-300 will-change-transform"
      aria-hidden="true"
    >
      {/* Trailing Optical Glow Nodes */}
      {TRAIL_CONFIG.map((cfg, idx) => (
        <div
          key={idx}
          ref={(el) => (nodeRefs.current[idx] = el)}
          className="absolute left-0 top-0 rounded-full will-change-transform"
          style={{
            width: `${cfg.size}px`,
            height: `${cfg.size}px`,
            background: cfg.bg,
            filter: `blur(${cfg.blur}px)`,
            opacity: cfg.opacity,
          }}
        />
      ))}

      {/* Head Inner Radiant Warm Core */}
      <div
        ref={headCoreRef}
        className="absolute left-0 top-0 h-[200px] w-[200px] rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(255,245,180,0.85) 0%, rgba(255,190,60,0.55) 40%, rgba(216,140,30,0.2) 70%, transparent 85%)',
          filter: 'blur(18px)',
        }}
      />

      {/* Head Specular Sparkle */}
      <div
        ref={headSparkleRef}
        className="absolute left-0 top-0 h-8 w-8 rounded-full bg-amber-100/90 blur-[4px] will-change-transform"
        style={{
          boxShadow: '0 0 20px rgba(255,220,120,0.8), 0 0 40px rgba(216,140,30,0.5)',
        }}
      />
    </div>
  )
}

export default HeroCursorGlow