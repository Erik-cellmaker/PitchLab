'use client'
import { useEffect, useRef, useState } from 'react'

const EMAIL = `Dear Professor Adamo,

I came across your 2023 paper on cardiac macrophage regulation in heart failure — specifically the finding that targeted IL-10 modulation could prevent adverse ventricular remodeling. The implications for immune-mediated cardioprotection are genuinely compelling.

I am Sarah Johnson, a junior at UCLA majoring in Molecular Biology with a 3.9 GPA. I am drawn to the intersection of innate immunity and cardiology, and I would love to contribute to your lab as a research volunteer.

Would you have 15 minutes for a brief call to discuss potential opportunities?

Best,
Sarah Johnson`

const CPS = 70

export default function EmailTyper({ active }: { active: boolean }) {
  const [text, setText] = useState('')
  const [done, setDone] = useState(false)
  const raf = useRef(0)
  const t0  = useRef<number | null>(null)

  useEffect(() => {
    if (!active || done) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(EMAIL)
      setDone(true)
      return
    }

    t0.current = null

    function tick(now: number) {
      if (t0.current === null) t0.current = now
      const idx = Math.min(Math.floor(((now - t0.current) / 1000) * CPS), EMAIL.length)
      setText(EMAIL.slice(0, idx))
      if (idx < EMAIL.length) {
        raf.current = requestAnimationFrame(tick)
      } else {
        setDone(true)
      }
    }

    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [active, done])

  return (
    <>
      <span style={{ whiteSpace: 'pre-wrap' }}>{text}</span>
      {!done && <span className="email-cursor" aria-hidden="true" />}
      {done && (
        <div className="email-sent" role="status" aria-live="polite">
          <div className="email-sent-dot" />
          Sent, along with 49 other personalized emails
        </div>
      )}
    </>
  )
}
