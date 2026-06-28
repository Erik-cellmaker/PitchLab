const logos = ['ArcShop', 'SwiftRide', 'Basecamp', 'PulseFlow', 'TroveCard', 'Miraxis']

export default function Logos() {
  return (
    <section className="logos-section" aria-label="Trusted by leading companies">
      <div className="container">
        <p className="logos-label">Trusted by 2.4 million businesses worldwide</p>
        <div className="logos-row" aria-hidden="true">
          {logos.map(name => (
            <div key={name} className="logo-item">{name}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
