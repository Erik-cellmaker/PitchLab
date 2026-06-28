'use client'
import { useEffect, useRef } from 'react'

const AR = 94, AG = 106, AB = 210
const LAT       = 10
const LON       = 14
const SEGS      = 80
const FOV       = 2.2
const TILT_X    = 0.38
const ROT_SPEED   = 0.000110
const BALL_SPEEDS = [0.000072, 0.000052, 0.000038]
// max mouse-driven tilt offsets (radians) — kept subtle
const MOUSE_RY    = 0.08
const MOUSE_RX    = 0.05

type V3 = [number, number, number]

function ry(v: V3, a: number): V3 {
  const [x, y, z] = v
  return [x * Math.cos(a) + z * Math.sin(a), y, -x * Math.sin(a) + z * Math.cos(a)]
}

function rx(v: V3, a: number): V3 {
  const [x, y, z] = v
  return [x, y * Math.cos(a) - z * Math.sin(a), y * Math.sin(a) + z * Math.cos(a)]
}

function proj(v: V3, cx: number, cy: number, r: number) {
  const [x, y, z] = v
  const s = FOV / (FOV + z)
  return { sx: cx + x * r * s, sy: cy - y * r * s, z }
}

function sphere(lat: number, lon: number): V3 {
  return [Math.cos(lat) * Math.cos(lon), Math.sin(lat), Math.cos(lat) * Math.sin(lon)]
}

function da(z: number) {
  return z > 0
    ? Math.min(0.70, 0.20 + z * 0.50)
    : Math.max(0.02, 0.03 + (1 + z) * 0.05)
}

interface Ring { tiltX: number; tiltZ: number; size: number; speed: number; ballAngle: number; ballSpeed: number }

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
    let lastTime = 0

    // Mouse state — normalised -1..1 relative to canvas centre
    let mouseX = 0, mouseY = 0
    let lerpX  = 0, lerpY  = 0

    function onMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left)  / rect.width  - 0.5) * 2
      mouseY = ((e.clientY - rect.top)   / rect.height - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove)

    const rings: Ring[] = [
      { tiltX:  0.42, tiltZ: 0.15, size: 1.30, speed:  0.60, ballAngle: 0,             ballSpeed: BALL_SPEEDS[0] },
      { tiltX: -0.58, tiltZ: 0.30, size: 1.56, speed: -0.42, ballAngle: Math.PI * 0.7, ballSpeed: BALL_SPEEDS[1] },
      { tiltX:  0.20, tiltZ: 0.70, size: 1.72, speed:  0.28, ballAngle: Math.PI * 1.4, ballSpeed: BALL_SPEEDS[2] },
    ]

    function dpr() { return window.devicePixelRatio || 1 }

    function resize() {
      const d = dpr()
      canvas.width  = canvas.offsetWidth  * d
      canvas.height = canvas.offsetHeight * d
    }

    // Build a transform that folds in auto-rotation + mouse-driven parallax
    function xform(v: V3, yAng: number): V3 {
      return rx(ry(v, yAng + lerpX * MOUSE_RY), TILT_X - lerpY * MOUSE_RX)
    }

    function seg(a: V3, b: V3, yAng: number, lw: number, cx: number, cy: number, r: number) {
      const pa = proj(xform(a, yAng), cx, cy, r)
      const pb = proj(xform(b, yAng), cx, cy, r)
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
      const cy = H * 0.62
      const r  = Math.min(W, H) * 0.32

      // Atmosphere glow
      const grad = ctx.createRadialGradient(cx, cy, r * 0.6, cx, cy, r * 1.4)
      grad.addColorStop(0, `rgba(${AR},${AG},${AB},0.06)`)
      grad.addColorStop(1, `rgba(${AR},${AG},${AB},0)`)
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, W, H)

      // Latitude lines
      for (let i = 0; i <= LAT; i++) {
        const lat = -Math.PI / 2 + (i / LAT) * Math.PI
        for (let j = 0; j < SEGS; j++) {
          const l0 = (j / SEGS) * Math.PI * 2
          const l1 = ((j + 1) / SEGS) * Math.PI * 2
          seg(sphere(lat, l0), sphere(lat, l1), angle, 1.0, cx, cy, r)
        }
      }

      // Longitude lines
      for (let j = 0; j < LON; j++) {
        const lon = (j / LON) * Math.PI * 2
        for (let i = 0; i < SEGS; i++) {
          const la0 = -Math.PI / 2 + (i / SEGS) * Math.PI
          const la1 = -Math.PI / 2 + ((i + 1) / SEGS) * Math.PI
          seg(sphere(la0, lon), sphere(la1, lon), angle, 1.0, cx, cy, r)
        }
      }

      // Orbital rings + balls
      for (const ring of rings) {
        const ra = angle * ring.speed

        for (let j = 0; j < SEGS; j++) {
          const a0 = (j / SEGS) * Math.PI * 2
          const a1 = ((j + 1) / SEGS) * Math.PI * 2
          const p0 = ringPoint(ring, a0)
          const p1 = ringPoint(ring, a1)
          const tp0 = proj(xform(p0, ra), cx, cy, r)
          const tp1 = proj(xform(p1, ra), cx, cy, r)
          const alpha = da((tp0.z + tp1.z) / 2) * 0.85
          ctx.strokeStyle = `rgba(${AR},${AG},${AB},${alpha.toFixed(3)})`
          ctx.lineWidth = d * 0.75
          ctx.beginPath()
          ctx.moveTo(tp0.sx, tp0.sy)
          ctx.lineTo(tp1.sx, tp1.sy)
          ctx.stroke()
        }

        const bp = proj(xform(ringPoint(ring, ring.ballAngle), ra), cx, cy, r)
        const ballAlpha = bp.z > 0 ? 0.92 : 0.28
        const ballR = d * (bp.z > 0 ? 4.5 : 3.0)

        ctx.beginPath()
        ctx.arc(bp.sx, bp.sy, ballR * 3.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${AR},${AG},${AB},${(ballAlpha * 0.15).toFixed(3)})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(bp.sx, bp.sy, ballR * 1.8, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${AR},${AG},${AB},${(ballAlpha * 0.35).toFixed(3)})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(bp.sx, bp.sy, ballR, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${AR},${AG},${AB},${ballAlpha.toFixed(3)})`
        ctx.fill()
      }
    }

    function frame(now: number) {
      const dt = lastTime ? Math.min(now - lastTime, 50) : 16.667
      lastTime = now

      // Smooth cursor follow — k=0.005 gives ~0.8s lag at 60fps, identical feel at any Hz
      const ease = 1 - Math.exp(-0.005 * dt)
      lerpX += (mouseX - lerpX) * ease
      lerpY += (mouseY - lerpY) * ease

      angle += ROT_SPEED * dt
      for (const ring of rings) ring.ballAngle += ring.ballSpeed * dt
      draw()
      raf = requestAnimationFrame(frame)
    }

    const ro = new ResizeObserver(() => { resize(); draw() })
    ro.observe(canvas)
    resize()
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0,
      }}
    />
  )
}
