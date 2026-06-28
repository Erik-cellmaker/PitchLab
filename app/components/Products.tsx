const products = [
  {
    name: 'Payments',
    desc: 'Accept payments online, in person, and globally with a single unified integration.',
    color: '#635bff',
    bg: 'rgba(99,91,255,0.08)',
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <rect x="1" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M1 8h18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Billing',
    desc: 'Handle subscriptions, recurring revenue, and smart payment retries automatically.',
    color: '#3ecf8e',
    bg: 'rgba(62,207,142,0.08)',
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <path d="M10 2C6.13 2 3 5.13 3 9s3.13 7 7 7 7-3.13 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 6v3.5l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Connect',
    desc: 'Build multi-party payment platforms and marketplaces with NexusPay as the backbone.',
    color: '#00d4ff',
    bg: 'rgba(0,212,255,0.08)',
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="3.5" cy="5"   r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="16.5" cy="5"  r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10"   cy="17" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 6L8 8.5M12 8.5L15 6M10 12.5V15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Radar',
    desc: 'Fight fraud with adaptive machine learning that improves with every transaction.',
    color: '#f5a623',
    bg: 'rgba(245,166,35,0.08)',
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <path d="M10 2L17 5V10.5C17 14 13.5 17 10 18C6.5 17 3 14 3 10.5V5L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M7.5 10l2 2 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Terminal',
    desc: 'Accept in-person payments with programmable point-of-sale hardware and SDKs.',
    color: '#ff7b72',
    bg: 'rgba(255,123,114,0.08)',
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <rect x="1.5" y="3" width="17" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 17h10M10 14v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5 9l2 2.5L5 14M10 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Atlas',
    desc: 'Start a global internet business with one click — company incorporation made simple.',
    color: '#d2a8ff',
    bg: 'rgba(210,168,255,0.08)',
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 2c-2.5 2.5-4 5-4 8s1.5 5.5 4 8M10 2c2.5 2.5 4 5 4 8s-1.5 5.5-4 8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 10h16M3.5 6.5h13M3.5 13.5h13" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
]

export default function Products() {
  return (
    <section className="products-section" id="products">
      <div className="container">
        <div className="products-header">
          <div className="section-kicker">The platform</div>
          <h2 className="section-h2">Everything you need to scale</h2>
          <p className="section-sub">A modular suite of products that work together — or standalone. Built for developers, designed for growth.</p>
        </div>
        <div className="products-grid">
          {products.map(p => (
            <div key={p.name} className="product-card">
              <div className="product-icon" style={{ background: p.bg, color: p.color }}>
                {p.icon}
              </div>
              <div className="product-name">{p.name}</div>
              <p className="product-desc">{p.desc}</p>
              <a href="#" className="product-link" style={{ color: p.color }} aria-label={`Learn more about ${p.name}`}>
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
