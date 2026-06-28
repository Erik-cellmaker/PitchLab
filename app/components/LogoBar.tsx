const schools = [
  'Johns Hopkins', 'Stanford', 'UCLA', 'Yale', 'UCSF',
  'NYU', 'USC', 'Columbia', 'Harvard', 'Duke',
  'Emory', 'Penn', 'Northwestern', 'UChicago', 'Vanderbilt',
  'Mayo Clinic', 'UCSD', 'Georgetown', 'UC Davis', 'Tufts',
]

export default function LogoBar() {
  const doubled = [...schools, ...schools]

  return (
    <div className="logobar" aria-label="Trusted by pre-med students at leading universities">
      <p className="logobar-label">Trusted by pre-med students at</p>
      <div className="logobar-track-wrap">
        <div className="logobar-track" aria-hidden="true">
          {doubled.map((s, i) => (
            <div key={i} className="logo-badge">
              <span className="logo-badge-dot"/>
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
