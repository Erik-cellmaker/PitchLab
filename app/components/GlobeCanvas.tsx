'use client'
import { useEffect, useRef } from 'react'

const AR = 94, AG = 106, AB = 210
const LAT  = 9
const LON  = 12
const SEGS = 72

type V3 = [number, number, number]

function ry(v: V3, a: number): V3 {
  const [x, y, z] = v
  return [x * Math.cos(a) + z * Math.sin(a), y, -x * Math.sin(a) + z * Math.cos(a)]
}

function proj(v: V3, cx: number, cy: number, r: number) {
  const [x, y, z] = v
  const s = 3.2 / (3.2 + z)
  return { sx: cx + x * r * s, sy: cy - y * r * s, z }
}

function sphere(lat: number, lon: number): V3 {
  return [Math.cos(lat) * Math.cos(lon), Math.sin(lat), Math.cos(lat) * Math.sin(lon)]
}

function da(z: number) {
  return z > 0 ? 0.12 + z * 0.16 : 0.02 + (1 + z) * 0.035
}

interface Ring {
  tiltX: number
  tiltZ: number
  size: number
  speed: number
  ballAngle: number
  ballSpeed: number
}

export default function GlobeCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const _canvas = ref.current
    if (!_canvas) return
    const _ctx = _canvas.getContext('2d')
    if (!_ctx) return
    const canvas: HTMLCanvasElement = _canvas
    const ctx: CanvasRenderingContext2D = _ctx

    let raf = 0
    let angle = 0

    const rings: Ring[] = [
      { tiltX:  0.42, tiltZ: 0.15, size: 1.30, speed:  0.60, ballAngle: 0,                   ballSpeed: 0.014 },
      { tiltX: -0.58, tiltZ: 0.30, size: 1.56, speed: -0.42, ballAngle: Math.PI * 0.7,        ballSpeed: 0.010 },
      { tiltX:  0.20, tiltZ: 0.70, size: 1.72, speed:  0.28, ballAngle: Math.PI * 1.4,        ballSpeed: 0.007 },
    ]

    function dpr() { return window.devicePixelRatio || 1 }

    function resize() {
      const d = dpr()
      canvas.width  = canvas.offsetWidth  * d
      canvas.height = canvas.offsetHeight * d
    }

    function seg(a: V3, b: V3, yAng: number, lw: number, cx: number, cy: number, r: number) {
      const pa = proj(ry(a, yAng), cx, cy, r)
      const pb = proj(ry(b, yAng), cx, cy, r)
      const alpha = da((pa.z + pb.z) / 2)
      ctx.strokeStyle = `rgba(${AR},${AG},${AB},${alpha.toFixed(3)})`
      ctx.lineWidth = dpr() * lw
      ctx.beginPath()
      ctx.moveTo(pa.sx, pa.sy)
      ctx.lineTo(pb.sx, pb.sy)
      ctx.stroke()
    }

    function ringPoint(ring: Ring, a: number): V3 {
      const cosX = Math.cos(ring.tiltX), sinX = Math.sin(ring.tiltX)
      const cosZ = Math.cos(ring.tiltZ), sinZ = Math.sin(ring.tiltZ)
      const x0 = Math.cos(a) * ring.size
      const y0 = Math.sin(a) * ring.size
      const y1 = y0 * cosX, z1 = y0 * sinX
      const x2 = x0 * cosZ - y1 * sinZ
      const y2 = x0 * sinZ + y1 * cosZ
      return [x2, y2, z1]
    }

    function draw() {
      const d = dpr()
      const W = canvas.width, H = canvas.height
      ctx.clearRect(0, 0, W, H)

      const cx = W / 2
      const cy = H * 0.45
      const r  = Math.min(W, H) * 0.37

      // Globe wireframe — latitude
      for (let i = 0; i <= LAT; i++) {
        const lat = -Math.PI / 2 + (i / LAT) * Math.PI
        for (let j = 0; j < SEGS; j++) {
          const l0 = (j / SEGS) * Math.PI * 2
          const l1 = ((j + 1) / SEGS) * Math.PI * 2
          seg(sphere(lat, l0), sphere(lat, l1), angle, 0.55, cx, cy, r)
        }
      }

      // Globe wireframe — longitude
      for (let j = 0; j < LON; j++) {
        const lon = (j / LON) * Math.PI * 2
        for (let i = 0; i < SEGS; i++) {
          const la0 = -Math.PI / 2 + (i / SEGS) * Math.PI
          const la1 = -Math.PI / 2 + ((i + 1) / SEGS) * Math.PI
          seg(sphere(la0, lon), sphere(la1, lon), angle, 0.55, cx, cy, r)
        }
      }

      // Orbital rings + balls
      for (const ring of rings) {
        const ra = angle * ring.speed

        // Draw ring segments
        for (let j = 0; j < SEGS; j++) {
          const a0 = (j / SEGS) * Math.PI * 2
          const a1 = ((j + 1) / SEGS) * Math.PI * 2
          const p0 = ringPoint(ring, a0)
          const p1 = ringPoint(ring, a1)
          seg(p0, p1, ra, 0.45, cx, cy, r)
        }

        // Draw orbiting ball
        const bp = proj(ry(ringPoint(ring, ring.ballAngle), ra), cx, cy, r)
        const ballZ = bp.z
        const ballAlpha = ballZ > 0 ? 0.85 : 0.25
        const ballR = d * (ballZ > 0 ? 3.5 : 2.5)

        // Glow
        ctx.beginPath()
        ctx.arc(bp.sx, bp.sy, ballR * 2.8, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${AR},${AG},${AB},${(ballAlpha * 0.18).toFixed(3)})`
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(bp.sx, bp.sy, ballR, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${AR},${AG},${AB},${ballAlpha.toFixed(3)})`
        ctx.fill()
      }
    }

    function frame() {
      angle += 0.0025
      for (const ring of rings) {
        ring.ballAngle += ring.ballSpeed
      }
      draw()
      raf = requestAnimationFrame(frame)
    }

    const ro = new ResizeObserver(() => { resize(); draw() })
    ro.observe(canvas)
    resize()
    frame()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
