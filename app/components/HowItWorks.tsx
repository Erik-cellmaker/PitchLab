const sparkHeights = [40, 55, 45, 70, 60, 80, 72, 90, 85, 100]

export default function HowItWorks() {
  return (
    <section className="features-section" id="solutions" aria-labelledby="features-heading">
      <div className="container">
        <h2 id="features-heading" className="sr-only">Platform features</h2>

        {/* Row 1: Payments — text left, visual right */}
        <div className="features-row">
          <div className="features-text">
            <div className="features-kicker">Payments</div>
            <h3 className="features-h3">Accept payments everywhere, in any currency</h3>
            <p className="features-desc">
              Offer your customers 135+ payment methods — credit cards, wallets, bank transfers, and buy now pay later — all through a single API integration.
            </p>
            <ul className="features-list">
              <li><span className="feat-check" aria-hidden="true">✓</span>135+ global payment methods</li>
              <li><span className="feat-check" aria-hidden="true">✓</span>Dynamic currency conversion in 47 currencies</li>
              <li><span className="feat-check" aria-hidden="true">✓</span>One-click checkout with Link</li>
              <li><span className="feat-check" aria-hidden="true">✓</span>Optimized for mobile conversion</li>
            </ul>
          </div>
          <div className="features-visual" aria-hidden="true">
            <div className="fui">
              <div className="fui-header">
                <div className="fui-dot" style={{background:'#ff5f57'}}/>
                <div className="fui-dot" style={{background:'#ffbd2e'}}/>
                <div className="fui-dot" style={{background:'#28ca42'}}/>
                <span className="fui-title">Payment method</span>
              </div>
              <div className="fui-methods">
                {[
                  { label: 'Credit or debit card', sub: 'Visa, Mastercard, Amex', badge: 'Default', active: true },
                  { label: 'Apple Pay',   sub: 'Touch or Face ID',      badge: null,      active: false },
                  { label: 'Google Pay',  sub: 'Saved cards & wallets',  badge: null,      active: false },
                  { label: 'SEPA Direct Debit', sub: 'EU bank accounts', badge: 'New',     active: false },
                ].map(m => (
                  <div key={m.label} className={`fui-method${m.active ? ' active' : ''}`}>
                    <div className="fui-method-left">
                      <div className="fui-method-icon" style={{background: m.active ? 'rgba(99,91,255,0.1)' : '#f6f9fc', color: m.active ? '#635bff' : '#8898aa', fontSize: 9, fontWeight: 700}}>
                        {m.label[0]}
                      </div>
                      <div>
                        <div style={{fontSize:13, fontWeight:600}}>{m.label}</div>
                        <div style={{fontSize:11, color:'var(--text-3)'}}>{m.sub}</div>
                      </div>
                    </div>
                    {m.badge && <div className="fui-badge">{m.badge}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Radar — visual left, text right */}
        <div className="features-row reverse">
          <div className="features-text">
            <div className="features-kicker">Radar</div>
            <h3 className="features-h3">Block fraud before it reaches your balance sheet</h3>
            <p className="features-desc">
              NexusPay Radar uses machine learning trained on billions of data points to detect and block fraudulent transactions in real time — with zero extra code.
            </p>
            <ul className="features-list">
              <li><span className="feat-check" aria-hidden="true">✓</span>ML models updated with every transaction</li>
              <li><span className="feat-check" aria-hidden="true">✓</span>Custom risk rules via simple if/then logic</li>
              <li><span className="feat-check" aria-hidden="true">✓</span>3D Secure 2 authentication built in</li>
              <li><span className="feat-check" aria-hidden="true">✓</span>Zero-liability chargeback protection</li>
            </ul>
          </div>
          <div className="features-visual" aria-hidden="true">
            <div className="fui">
              <div className="fui-header">
                <div className="fui-dot" style={{background:'#ff5f57'}}/>
                <div className="fui-dot" style={{background:'#ffbd2e'}}/>
                <div className="fui-dot" style={{background:'#28ca42'}}/>
                <span className="fui-title">Fraud risk assessment</span>
              </div>
              <div className="fui-risk-header">
                <div>
                  <div style={{fontSize:11, color:'var(--text-3)', marginBottom:4}}>Risk score</div>
                  <div className="fui-risk-score" style={{color:'var(--green)'}}>12</div>
                </div>
                <div className="fui-risk-label" style={{background:'rgba(62,207,142,0.1)', color:'#1a8a5a'}}>Low risk</div>
              </div>
              <div className="fui-risk-bar-wrap">
                <div className="fui-risk-bar" style={{width:'12%', background:'var(--green)'}}/>
              </div>
              <div className="fui-flags">
                {[
                  { label: 'IP matches billing country', ok: true },
                  { label: 'Card used 3× in last 30 days', ok: true },
                  { label: 'Email first seen today',  ok: false },
                  { label: 'Device fingerprint recognized', ok: true },
                ].map(f => (
                  <div key={f.label} className="fui-flag" style={{background: f.ok ? 'rgba(62,207,142,0.06)' : 'rgba(245,166,35,0.06)'}}>
                    <div className="fui-flag-dot" style={{background: f.ok ? 'var(--green)' : 'var(--amber)'}}/>
                    {f.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Analytics — text left, visual right */}
        <div className="features-row">
          <div className="features-text">
            <div className="features-kicker">Analytics</div>
            <h3 className="features-h3">Real-time revenue intelligence, out of the box</h3>
            <p className="features-desc">
              Track MRR, churn, LTV, and payment funnel conversions without writing a single analytics query. NexusPay surfaces insights the moment they happen.
            </p>
            <ul className="features-list">
              <li><span className="feat-check" aria-hidden="true">✓</span>Live MRR and ARR dashboards</li>
              <li><span className="feat-check" aria-hidden="true">✓</span>Cohort-based churn and retention charts</li>
              <li><span className="feat-check" aria-hidden="true">✓</span>Checkout funnel conversion tracking</li>
              <li><span className="feat-check" aria-hidden="true">✓</span>Exportable reports via API or CSV</li>
            </ul>
          </div>
          <div className="features-visual" aria-hidden="true">
            <div className="fui">
              <div className="fui-header">
                <div className="fui-dot" style={{background:'#ff5f57'}}/>
                <div className="fui-dot" style={{background:'#ffbd2e'}}/>
                <div className="fui-dot" style={{background:'#28ca42'}}/>
                <span className="fui-title">Revenue analytics</span>
              </div>
              <div className="fui-metric-row">
                {[
                  { val: '$42.8K', lbl: 'MRR' },
                  { val: '2.1%',  lbl: 'Churn' },
                  { val: '$186',  lbl: 'Avg LTV' },
                  { val: '87%',   lbl: 'Conversion' },
                ].map(m => (
                  <div key={m.lbl} className="fui-metric">
                    <div className="fui-metric-val">{m.val}</div>
                    <div className="fui-metric-lbl">{m.lbl}</div>
                  </div>
                ))}
              </div>
              <div style={{fontSize:11, color:'var(--text-3)', marginBottom:8}}>Monthly revenue — last 10 months</div>
              <div className="fui-sparkline">
                {sparkHeights.map((h, i) => (
                  <div key={i} className="fui-spark-bar" style={{height:`${h}%`}}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
