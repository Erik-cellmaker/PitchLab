import type { Metadata } from 'next'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | PitchLab',
  description: 'Terms and conditions for using PitchLab.',
}

const h2Style: React.CSSProperties = {
  marginTop: '24px', marginBottom: '8px',
}
const pStyle: React.CSSProperties = {
  marginBottom: '10px', lineHeight: '1.65', fontSize: '14px',
}
const ulStyle: React.CSSProperties = {
  listStyle: 'none', padding: 0, margin: '6px 0',
  display: 'flex', flexDirection: 'column', gap: '4px',
}
const sectionStyle: React.CSSProperties = { padding: 0 }
const bodyStyle: React.CSSProperties = { gap: '0', padding: '28px 0 56px' }

export default function Terms() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Nav />
      <main className="legal-wrap" id="main">
        <div className="container">
          <header className="legal-hero">
            <div className="legal-eyebrow">Terms of Service</div>
            <h1 className="legal-h1">Simple, honest terms.</h1>
            <p className="legal-date">Last updated: June 2026</p>
          </header>

          <div className="legal-body" style={bodyStyle}>

            <section className="legal-section" style={sectionStyle}>
              <h2 className="legal-h2" style={{ ...h2Style, marginTop: 0 }}>What PitchLab does</h2>
              <p className="legal-p" style={pStyle}>
                PitchLab is a one-time outreach service for pre-medical students seeking undergraduate research opportunities. When you place an order, PitchLab looks up each professor's recently published research on PubMed, generates a unique, research-specific email for each one, and sends those emails directly from your Gmail account on your behalf.
              </p>
              <p className="legal-p" style={{ ...pStyle, marginBottom: 0 }}>
                By using PitchLab, you agree to these Terms of Service. If you do not agree, do not use the service.
              </p>
            </section>

            <section className="legal-section" style={sectionStyle}>
              <h2 className="legal-h2" style={h2Style}>One-time payment</h2>
              <p className="legal-p" style={pStyle}>
                All PitchLab plans are one-time payments. There are no subscriptions, no recurring charges, and no hidden fees. You pay once and receive one outreach batch.
              </p>
              <ul className="legal-ul" style={ulStyle}>
                <li>Payments are processed securely by Stripe. PitchLab never stores your payment card information.</li>
                <li>Your plan determines the number of personalized emails included in your batch (50 for Starter, 125 for Pro, 200 for Premium).</li>
                <li>Each purchase covers a single outreach batch to a single target institution.</li>
              </ul>
            </section>

            <section className="legal-section" style={sectionStyle}>
              <h2 className="legal-h2" style={h2Style}>Refund policy</h2>
              <div className="legal-callout" style={{ margin: '6px 0' }}>
                <strong>If your emails fail to send due to a technical error on our end, you are entitled to a full refund or a complete reprocess of your order — your choice.</strong>
              </div>
              <p className="legal-p" style={pStyle}>
                We stand behind every order. If something goes wrong on our side — emails not sending, incomplete batches, or delivery failures caused by our system — we will make it right at no cost to you.
              </p>
              <ul className="legal-ul" style={ulStyle}>
                <li>Refund requests must be submitted within 7 days of your order date</li>
                <li>If your emails were successfully sent, refunds are not available</li>
                <li>Refunds are not available for dissatisfaction with professor response rates, as those are outside our control</li>
                <li>To request a refund, email <a href="mailto:hello@pitchlab.me" style={{ color: 'var(--accent)' }}>hello@pitchlab.me</a> with your order details</li>
              </ul>
              <p className="legal-p" style={{ ...pStyle, marginBottom: 0 }}>
                Every sent email appears in your Gmail Sent folder, giving you a complete record of exactly what went out.
              </p>
            </section>

            <section className="legal-section" style={sectionStyle}>
              <h2 className="legal-h2" style={h2Style}>Your responsibilities</h2>
              <p className="legal-p" style={pStyle}>
                When you authorize PitchLab through Google OAuth, you are granting us permission to send email from your Gmail account on your behalf. This comes with responsibilities on your end:
              </p>
              <ul className="legal-ul" style={ulStyle}>
                <li>You are responsible for the Gmail account you connect to PitchLab</li>
                <li>You are the sender of record for all emails sent through PitchLab — professor replies will come directly to your inbox</li>
                <li>You agree that the information you provide in your order form (your name, institution, research interests) is accurate</li>
                <li>You agree not to use PitchLab to send emails to individuals who have requested not to be contacted</li>
                <li>You agree not to use PitchLab in any way that violates Google's Terms of Service or applicable law</li>
              </ul>
              <p className="legal-p" style={{ ...pStyle, marginBottom: 0 }}>
                PitchLab generates email content on your behalf, but you remain accountable as the sender. We write research-specific, professional outreach — not spam. Use this service only for its intended purpose: legitimate academic research inquiry.
              </p>
            </section>

            <section className="legal-section" style={sectionStyle}>
              <h2 className="legal-h2" style={h2Style}>Acceptable use</h2>
              <p className="legal-p" style={pStyle}>
                PitchLab is designed for pre-medical and undergraduate students seeking research opportunities at universities and medical institutions. The service may not be used for:
              </p>
              <ul className="legal-ul" style={ulStyle}>
                <li>Commercial solicitation or any non-academic outreach</li>
                <li>Harassment, bulk unsolicited messaging, or spamming</li>
                <li>Misrepresenting your identity, credentials, or institutional affiliation</li>
                <li>Any purpose that violates applicable laws or regulations</li>
              </ul>
              <p className="legal-p" style={{ ...pStyle, marginBottom: 0 }}>
                We reserve the right to refuse or cancel any order we believe violates these terms, with or without notice.
              </p>
            </section>

            <section className="legal-section" style={sectionStyle}>
              <h2 className="legal-h2" style={h2Style}>Disclaimer of warranties</h2>
              <p className="legal-p" style={pStyle}>
                PitchLab is provided "as is." We do not guarantee any specific outcome, including professor responses, interview invitations, or research placements. Response rates depend on many factors outside our control, including professor availability, lab capacity, and email deliverability.
              </p>
              <p className="legal-p" style={{ ...pStyle, marginBottom: 0 }}>
                What we do guarantee: that each email is uniquely written based on that professor's actual published research, and that every email in your batch is sent from your Gmail account.
              </p>
            </section>

            <section className="legal-section" style={sectionStyle}>
              <h2 className="legal-h2" style={h2Style}>Changes to these terms</h2>
              <p className="legal-p" style={{ ...pStyle, marginBottom: 0 }}>
                We may update these Terms of Service at any time. When we do, we will update the "Last updated" date at the top of this page. Continued use of PitchLab after changes are posted constitutes your acceptance of the revised terms.
              </p>
            </section>

            <section className="legal-section" style={sectionStyle}>
              <div className="legal-contact" style={{ marginTop: '24px' }}>
                <div className="legal-contact-label">Questions about these terms</div>
                <div className="legal-contact-h">Contact us</div>
                <p>
                  For questions about these Terms of Service, refund requests, or anything else, email us at{' '}
                  <a href="mailto:hello@pitchlab.me">hello@pitchlab.me</a>.
                  {' '}We aim to respond within 2 business days.
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
