'use client'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`nav${scrolled ? ' nav-scrolled' : ''}`} role="navigation" aria-label="Main">
        <a href="#" className="nav-logo" aria-label="PitchLab home">
          <div className="nav-logo-mark" aria-hidden="true">
            <svg viewBox="0 0 11 11" fill="none">
              <path d="M5.5 1L10 3.5V7.5L5.5 10L1 7.5V3.5L5.5 1Z" stroke="white" strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
          </div>
          PitchLab
        </a>

        <ul className="nav-links" aria-label="Site navigation">
          <li><a href="#how">How it works</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>

        <div className="nav-right">
          <a href="#pricing" className="btn btn-accent">Get started</a>
        </div>

        <button
          className={`nav-hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span aria-hidden="true"/><span aria-hidden="true"/>
        </button>
      </nav>

      {open && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation">
          <a href="#how"     className="mobile-link" onClick={close}>How it works</a>
          <a href="#pricing" className="mobile-link" onClick={close}>Pricing</a>
          <a href="#faq"     className="mobile-link" onClick={close}>FAQ</a>
          <a href="#pricing" className="btn btn-accent mobile-cta" onClick={close}>Get started</a>
        </div>
      )}
    </>
  )
}
