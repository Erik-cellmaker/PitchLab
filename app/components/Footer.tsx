export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-left">
        <div className="footer-mark" aria-hidden="true">
          <svg viewBox="0 0 7 7" fill="none">
            <path d="M3.5 0.5L6.5 2.5V5L3.5 7L0.5 5V2.5L3.5 0.5Z" stroke="white" strokeWidth="0.8" strokeLinejoin="round"/>
          </svg>
        </div>
        <span>PitchLab © 2026</span>
      </div>
      <nav className="footer-links" aria-label="Footer links">
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
        <a href="mailto:hello@pitchlab.me">hello@pitchlab.me</a>
      </nav>
    </footer>
  )
}
