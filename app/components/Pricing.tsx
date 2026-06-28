import FadeUp from './FadeUp'

function Check() {
  return (
    <svg className="p-check" viewBox="0 0 10 10" fill="none" width="10" height="10" aria-hidden="true">
      <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const plans = [
  {
    name: 'Starter',
    price: '19',
    volume: '50 personalized emails',
    desc: 'One targeted school. Enough to get real replies.',
    featured: false,
    features: [
      '50 professors at your target school',
      'PubMed paper lookup per professor',
      'Unique 150-word email for each one',
      'Sent from your Gmail, same day',
    ],
    cta: 'Get started',
    btnClass: 'p-btn p-btn-ghost',
    href: '#',
  },
  {
    name: 'Pro',
    price: '29',
    volume: '125 personalized emails',
    desc: 'Most students choose this. Maximum signal, wide reach.',
    featured: true,
    features: [
      '125 professors at your target school',
      'PubMed paper lookup per professor',
      'Unique 150-word email for each one',
      'Sent from your Gmail, same day',
      '2.5× the reach of Starter',
    ],
    cta: 'Get started',
    btnClass: 'p-btn p-btn-accent',
    href: '#',
  },
  {
    name: 'Premium',
    price: '39',
    volume: '200 personalized emails',
    desc: 'The whole department. Best odds of landing a lab.',
    featured: false,
    features: [
      '200 professors at your target school',
      'PubMed paper lookup per professor',
      'Unique 150-word email for each one',
      'Sent from your Gmail, same day',
      'Maximum reach, entire department',
    ],
    cta: 'Get started',
    btnClass: 'p-btn p-btn-ghost',
    href: '#',
  },
]

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing" aria-labelledby="pricing-h2">
      <div className="container">
        <FadeUp>
          <div className="pricing-header">
            <div className="pricing-eyebrow">Pricing</div>
            <h2 id="pricing-h2" className="pricing-h2">Choose the outreach size that fits your goals.</h2>
            <p className="pricing-sub">One-time payment. No subscription. Personalized emails sent from your Gmail.</p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="pricing-grid">
            {plans.map(plan => (
              <article
                key={plan.name}
                className={`p-card${plan.featured ? ' featured' : ''}`}
                aria-labelledby={`plan-name-${plan.name}`}
              >
                {plan.featured && <div className="p-badge">Most popular</div>}
                <div className="p-name" id={`plan-name-${plan.name}`}>{plan.name}</div>
                <div className="p-price"><sup>$</sup>{plan.price}</div>
                <div className="p-volume">{plan.volume}</div>
                <p style={{ fontSize: 13, color: 'var(--text-3)', marginBottom: 0, textAlign: 'center' }}>{plan.desc}</p>
                <div className="p-divider"/>
                <ul className="p-features" aria-label={`${plan.name} features`}>
                  {plan.features.map(f => (
                    <li key={f}><Check/>{f}</li>
                  ))}
                </ul>
                <a href={plan.href} className={plan.btnClass}>{plan.cta}</a>
              </article>
            ))}
          </div>
          <p className="pricing-note">All tiers · AI-written emails based on each professor's actual published research · No templates</p>
        </FadeUp>
      </div>
    </section>
  )
}
