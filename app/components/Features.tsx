'use client'
import { useState } from 'react'
import FadeUp from './FadeUp'

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function PubmedMockup() {
  return (
    <div className="feat-visual">
      <div className="fcard-chrome" aria-hidden="true">
        <div className="ec-dot" style={{ background: '#ff5f57' }}/>
        <div className="ec-dot" style={{ background: '#ffbd2e' }}/>
        <div className="ec-dot" style={{ background: '#28ca42' }}/>
        <span className="fcard-chrome-label">PitchLab — Research matching</span>
      </div>
      <div className="pubmed-card">
        <div className="pub-paper">
          <div className="pub-badge">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><circle cx="4" cy="4" r="3" stroke="currentColor" strokeWidth="1"/></svg>
            PubMed · 2024
          </div>
          <div className="pub-title">"Post-infarct ventricular remodeling: collagen cross-linking and long-term ejection fraction outcomes"</div>
          <div className="pub-meta">Rossi E, Nakamura T, et al. · Journal of Cardiovascular Research</div>
        </div>

        <div className="pub-arrow">
          <div className="pub-arrow-line"/>
          PitchLab AI · generating email
          <div className="pub-arrow-line" style={{ background: 'linear-gradient(to left, rgba(94,106,210,0.3), transparent)' }}/>
        </div>

        <div className="pub-email">
          <div className="pub-email-label">Draft · dr.elenarossi@westbridge.edu</div>
          <p className="pub-email-text">
            Dear Professor Rossi, I came across your 2024 paper on post-infarct ventricular remodeling. Your findings on collagen cross-linking during scar maturation were particularly compelling, especially the correlation with<span className="typing-dots" aria-hidden="true"><span>.</span><span>.</span><span>.</span></span>
          </p>
        </div>
      </div>
    </div>
  )
}

function GmailMockup() {
  const [clicked, setClicked] = useState(false)

  function handleAllow() {
    setClicked(true)
    setTimeout(() => setClicked(false), 2000)
  }

  return (
    <div className="feat-visual">
      <div className="fcard-chrome" aria-hidden="true">
        <div className="ec-dot" style={{ background: '#ff5f57' }}/>
        <div className="ec-dot" style={{ background: '#ffbd2e' }}/>
        <div className="ec-dot" style={{ background: '#28ca42' }}/>
        <span className="fcard-chrome-label">accounts.google.com</span>
      </div>
      <div className="gmail-card">
        <div className="gmail-header">
          <div className="gmail-g" aria-hidden="true" style={{ color: '#4285f4', fontFamily: 'serif' }}>G</div>
          <div className="gmail-title-wrap">
            <div className="gmail-title">PitchLab wants to access your Google Account</div>
            <div className="gmail-sub">maya.patel@northlake.edu</div>
          </div>
        </div>

        <div className="gmail-account" aria-hidden="true">maya.patel@northlake.edu</div>

        <div className="gmail-perms" role="list" aria-label="Requested permissions">
          <div className="gmail-perm allow" role="listitem">
            <div className="gmail-perm-icon"><CheckIcon/></div>
            Send emails on your behalf
          </div>
          <div className="gmail-perm deny" role="listitem">
            <div className="gmail-perm-icon">✕</div>
            Read or access your existing emails
          </div>
          <div className="gmail-perm deny" role="listitem">
            <div className="gmail-perm-icon">✕</div>
            Access your contacts or calendar
          </div>
        </div>

        <div className="gmail-actions">
          <button className="gmail-btn deny" type="button" tabIndex={-1}>Cancel</button>
          <button
            className={`gmail-btn allow${clicked ? ' gmail-btn-allowed' : ''}`}
            type="button"
            onClick={handleAllow}
            aria-label="Allow PitchLab to send emails"
          >
            {clicked ? 'Allowed ✓' : 'Allow'}
          </button>
        </div>
      </div>
    </div>
  )
}

function TimelineMockup() {
  const steps = [
    {
      state: 'done',
      num: '01',
      title: 'You choose the school',
      desc: 'Pick a university and research area. Select 50, 125, or 200 professors.',
      time: '0 min',
    },
    {
      state: 'done',
      num: '02',
      title: 'AI reads each paper',
      desc: 'PitchLab fetches each professor\'s latest publication from PubMed and extracts the key findings.',
      time: '~1 min',
    },
    {
      state: 'active',
      num: '03',
      title: 'Emails delivered',
      desc: 'A unique 150-word email sends from your Gmail to each professor, one by one.',
      time: '2–5 min',
    },
  ]

  return (
    <div className="feat-visual">
      <div className="fcard-chrome" aria-hidden="true">
        <div className="ec-dot" style={{ background: '#ff5f57' }}/>
        <div className="ec-dot" style={{ background: '#ffbd2e' }}/>
        <div className="ec-dot" style={{ background: '#28ca42' }}/>
        <span className="fcard-chrome-label">Outreach · Johns Hopkins · 50 emails</span>
      </div>
      <div className="timeline-card">
        <div className="timeline" role="list" aria-label="Outreach steps">
          {steps.map((s, i) => (
            <div key={i} className="tl-step" role="listitem">
              <div className="tl-line-wrap">
                <div className={`tl-dot ${s.state}`} aria-label={s.state === 'done' ? 'Complete' : 'In progress'}>
                  {s.state === 'done' ? (
                    <svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#3ecf8e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  ) : (
                    <svg viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="2" fill="#5e6ad2"/></svg>
                  )}
                </div>
              </div>
              <div className="tl-content">
                <div className="tl-num">{s.num}</div>
                <div className="tl-title">{s.title}</div>
                <div className="tl-desc">{s.desc}</div>
                <div className="tl-time">{s.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section className="features-section" id="how" aria-labelledby="features-heading">
      <h2 id="features-heading" className="sr-only">How PitchLab works</h2>
      <div className="container">

        {/* Row 1 */}
        <div className="feat-row">
          <FadeUp className="feat-text">
            <div className="feat-eyebrow">Research-first</div>
            <h3 className="feat-h2">We read the research. You get the reply.</h3>
            <p className="feat-desc">
              Every email references the professor's actual published work: the specific paper, the exact finding, the method they used. It reads like you spent an hour on PubMed, because we did.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <PubmedMockup/>
          </FadeUp>
        </div>

        {/* Row 2 — flipped */}
        <div className="feat-row flip">
          <FadeUp className="feat-text">
            <div className="feat-eyebrow">Zero data exposure</div>
            <h3 className="feat-h2">Your Gmail. Your reputation.</h3>
            <p className="feat-desc">
              Emails send from your actual address via secure Google authorization. We never access your inbox, your contacts, your calendar, or your password. Professors reply directly to you, no middleman.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <GmailMockup/>
          </FadeUp>
        </div>

        {/* Row 3 */}
        <div className="feat-row">
          <FadeUp className="feat-text">
            <div className="feat-eyebrow">Same-day delivery</div>
            <h3 className="feat-h2">From order to sent in minutes.</h3>
            <p className="feat-desc">
              No waiting days while someone manually writes emails. PitchLab handles research lookup, drafting, and delivery automatically while you do other things.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <TimelineMockup/>
          </FadeUp>
        </div>

      </div>
    </section>
  )
}
