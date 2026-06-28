const testimonials = [
  {
    quote: "NexusPay cut our checkout abandonment by 34% in the first month. The smart routing alone paid for the integration ten times over.",
    name: 'Priya Mehta',
    role: 'CTO, ArcShop',
    avatar: 'PM',
    color: '#635bff',
  },
  {
    quote: "We went from a three-month integration project with our old processor to being live with NexusPay in a single sprint. The docs are genuinely excellent.",
    name: 'James Okafor',
    role: 'Head of Engineering, SwiftRide',
    avatar: 'JO',
    color: '#3ecf8e',
  },
  {
    quote: "Radar blocked $2.1M in fraudulent transactions in Q3 alone. We didn't write a single line of fraud logic — it just works.",
    name: 'Sofia Reyes',
    role: 'VP Payments, TroveCard',
    avatar: 'SR',
    color: '#00d4ff',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="testimonials-header">
          <div className="section-kicker">Customer stories</div>
          <h2 id="testimonials-heading" className="section-h2">Trusted by teams building at scale</h2>
          <p className="section-sub">From day-one startups to global enterprises, NexusPay powers the businesses that power the internet.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(t => (
            <article key={t.name} className="testi-card">
              <div className="testi-stars" aria-label="5 out of 5 stars">
                {[0,1,2,3,4].map(i => <span key={i} aria-hidden="true">★</span>)}
              </div>
              <blockquote className="testi-quote">"{t.quote}"</blockquote>
              <div className="testi-author">
                <div className="testi-avatar" style={{background: t.color}} aria-hidden="true">{t.avatar}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
