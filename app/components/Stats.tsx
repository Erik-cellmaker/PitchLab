import FadeUp from './FadeUp'

const stats = [
  { num: '5 minutes',          lbl: 'Average outreach delivery' },
  { num: '200+',               lbl: 'Emails per outreach batch' },
  { num: '35+',                lbl: 'Universities supported' },
  { num: 'Generic templates',  lbl: 'Not part of the process' },
]

export default function Stats() {
  return (
    <section className="stats-section" aria-label="Platform statistics">
      <div className="container">
        <FadeUp>
          <div className="stats-grid">
            {stats.map(s => (
              <div key={s.lbl} className="stat-cell">
                <div className="stat-num">{s.num}</div>
                <div className="stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
