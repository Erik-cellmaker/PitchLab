import FadeUp from './FadeUp'

export default function CTA() {
  return (
    <section className="cta-section" aria-labelledby="cta-h2">
      <div className="cta-glow" aria-hidden="true"/>
      <div className="container">
        <FadeUp style={{ position: 'relative', zIndex: 1 }}>
          <h2 id="cta-h2" className="cta-h2">
            Reach professors with<br/>research-specific outreach.
          </h2>
          <p className="cta-sub">PitchLab helps you create personalized professor outreach in minutes.</p>
          <a href="#pricing" className="btn btn-accent btn-lg">Start your outreach →</a>
        </FadeUp>
      </div>
    </section>
  )
}
