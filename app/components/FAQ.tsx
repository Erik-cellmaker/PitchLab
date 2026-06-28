'use client'
import { useState } from 'react'
import FadeUp from './FadeUp'

const items = [
  {
    q: 'How fast do the emails actually go out?',
    a: 'Within minutes of your order being processed. PitchLab looks up each professor\'s research, writes their email, and sends, all automatically. Most outreach batches fully deliver the same day you order.',
  },
  {
    q: 'Won\'t professors ignore AI-generated emails?',
    a: 'Each email references the professor\'s actual published research: their specific paper, their findings, their method. Professors ignore generic "I am passionate about medicine" emails. They respond to specific, relevant outreach. That\'s what PitchLab writes.',
  },
  {
    q: 'Do I need to give you my Gmail password?',
    a: 'No. Emails send from your Gmail through secure Google authorization. We never store your password and cannot read your inbox. Professors reply directly to you. We are never in the loop.',
  },
  {
    q: 'Can I review the emails before they send?',
    a: 'Every sent email appears immediately in your Gmail Sent folder so you can see exactly what went out. If anything looks off, contact us within 24 hours and we\'ll reprocess or refund. Your choice.',
  },
  {
    q: 'Which universities do you support?',
    a: 'Johns Hopkins, Stanford, Harvard Medical School, UCLA, Yale, UCSF, NYU, USC, Columbia, Duke, Emory, Penn, Northwestern, UChicago, Vanderbilt, Mayo Clinic, Cedars-Sinai, UCSD, UC Davis, UC Irvine, and 15+ more. We add new schools regularly.',
  },
  {
    q: 'What is your refund policy?',
    a: 'If your emails don\'t send due to a technical error on our end, we\'ll reprocess your entire outreach at no charge or issue a full refund. We stand behind every order.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIdx(prev => (prev === i ? null : i))
  }

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-h2">
      <div className="container">
        <FadeUp>
          <div className="faq-header">
            <h2 id="faq-h2" className="faq-h2">FAQ</h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="faq-wrap">
            <div className="faq-list" role="list">
              {items.map((item, i) => {
                const isOpen = openIdx === i
                const answerId = `faq-answer-${i}`
                return (
                  <div
                    key={i}
                    className={`faq-item${isOpen ? ' open' : ''}`}
                    role="listitem"
                  >
                    <button
                      className="faq-btn"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => toggle(i)}
                    >
                      {item.q}
                      <div className="faq-icon" aria-hidden="true">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </button>
                    <div className="faq-answer" id={answerId} role="region" aria-labelledby={`faq-btn-${i}`}>
                      <div className="faq-answer-inner">
                        <div className="faq-answer-body">{item.a}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
