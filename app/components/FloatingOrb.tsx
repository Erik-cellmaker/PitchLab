'use client'
import { useEffect, useRef } from 'react'

const R = 94, G = 106, B = 210

export default function FloatingOrb() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0
    let scrollY = 0

    function onScroll() {
      scrollY = window.scrollY
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    function frame(now: number) {
      const el = ref.current
      if (!el) return

      const t = now / 1000
      const vw = window.innerWidth
      const vh = window.innerHeight

      const x = vw * 0.58
        + Math.sin(t * 0.22) * vw * 0.16
        + Math.cos(t * 0.13) * vw * 0.07

      const y = vh * 0.40
        + scrollY * 0.10
        + Math.sin(t * 0.18) * 55
        + Math.cos(t * 0.09) * 32

      el!.style.transform = `translate(${x}px, ${y}px)`
      raf = requestAnimationFrame(frame)
    }

    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        borderRadius: '50%',
        background: `rgba(${R},${G},${B},0.82)`,
        boxShadow: `0 0 0 4px rgba(${R},${G},${B},0.22), 0 0 0 10px rgba(${R},${G},${B},0.10)`,
        pointerEvents: 'none',
        zIndex: 2,
        willChange: 'transform',
      }}
    />
  )
}
