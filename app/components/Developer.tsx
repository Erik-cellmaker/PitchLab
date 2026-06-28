const lines = [
  { ln: '1',  parts: [{ t: 'cc', v: '// Install: npm install nexuspay' }] },
  { ln: '2',  parts: [] },
  { ln: '3',  parts: [{ t: '', v: '' }, { t: 'ck', v: 'const' }, { t: '', v: ' nexuspay = ' }, { t: 'cf', v: 'require' }, { t: '', v: '(' }, { t: 'cs', v: "'nexuspay'" }, { t: '', v: ')(' }, { t: 'cs', v: "'sk_live_4xTq...'" }, { t: '', v: ');' }] },
  { ln: '4',  parts: [] },
  { ln: '5',  parts: [{ t: 'cc', v: '// Create a payment intent' }] },
  { ln: '6',  parts: [{ t: 'ck', v: 'const' }, { t: '', v: ' intent = ' }, { t: 'ck', v: 'await' }, { t: '', v: ' nexuspay.' }, { t: 'cp', v: 'paymentIntents' }, { t: '', v: '.' }, { t: 'cf', v: 'create' }, { t: '', v: '({' }] },
  { ln: '7',  parts: [{ t: 'cp', v: '  amount' }, { t: '', v: ':    ' }, { t: 'cn', v: '4900' }, { t: '', v: ',' }] },
  { ln: '8',  parts: [{ t: 'cp', v: '  currency' }, { t: '', v: ':  ' }, { t: 'cs', v: "'usd'" }, { t: '', v: ',' }] },
  { ln: '9',  parts: [{ t: 'cp', v: '  customer' }, { t: '', v: ':  ' }, { t: 'cs', v: "'cus_MxZ8qYpNkL3F'" }, { t: '', v: ',' }] },
  { ln: '10', parts: [{ t: 'cp', v: '  metadata' }, { t: '', v: ': { ' }, { t: 'cp', v: 'order_id' }, { t: '', v: ': ' }, { t: 'cs', v: "'ord_7tXq'" }, { t: '', v: ' },' }] },
  { ln: '11', parts: [{ t: '', v: '});' }] },
  { ln: '12', parts: [] },
  { ln: '13', parts: [{ t: 'cc', v: '// → { id: \'pi_3NxUJ2Lk...\', status: \'succeeded\' }' }] },
]

const devLinks = [
  {
    label: 'Read the docs',
    sub: 'Full API reference and guides',
    icon: (
      <svg viewBox="0 0 14 14" fill="none">
        <path d="M2 2h10v10H2V2zM5 2v10M2 5h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Explore SDKs',
    sub: 'Node, Python, Ruby, Go, Java, PHP',
    icon: (
      <svg viewBox="0 0 14 14" fill="none">
        <path d="M4 5L2 7l2 2M10 5l2 2-2 2M7 3l-1.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Try the sandbox',
    sub: 'Test payments with no real money',
    icon: (
      <svg viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M7 4.5v2.5l1.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Developer() {
  return (
    <section className="dev-section" id="developers" aria-labelledby="dev-heading">
      <div className="container">
        <div className="dev-inner">
          <div>
            <div className="dev-kicker">Developer-first</div>
            <h2 id="dev-heading" className="dev-h2">Built for engineers who move fast</h2>
            <p className="dev-desc">
              Integrate in hours, not weeks. NexusPay's API is designed to be clean, predictable, and thoroughly documented — with libraries for every major language.
            </p>
            <div className="dev-links">
              {devLinks.map(l => (
                <a key={l.label} href="#" className="dev-link">
                  <div className="dev-link-icon" aria-hidden="true">{l.icon}</div>
                  <div>
                    <div style={{fontWeight:600, color:'var(--text-inv)'}}>{l.label}</div>
                    <div style={{fontSize:13}}>{l.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="code-block" role="img" aria-label="NexusPay API code example">
            <div className="code-chrome" aria-hidden="true">
              <div className="code-dot" style={{background:'#ff5f57'}}/>
              <div className="code-dot" style={{background:'#ffbd2e'}}/>
              <div className="code-dot" style={{background:'#28ca42'}}/>
              <span className="code-filename">payment.js</span>
            </div>
            <div className="code-body" aria-hidden="true">
              {lines.map(line => (
                <div key={line.ln} className="code-line">
                  <span className="code-ln">{line.ln}</span>
                  <span className="code-text">
                    {line.parts.map((p, i) => (
                      p.t ? <span key={i} className={p.t}>{p.v}</span> : <span key={i}>{p.v}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
