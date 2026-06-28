import type { Metadata } from 'next'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | PitchLab',
  description: 'How PitchLab collects, uses, and protects your data.',
}

export default function Privacy() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Nav />
      <main className="legal-wrap" id="main">
        <div className="container">
          <header className="legal-hero">
            <div className="legal-eyebrow">Privacy Policy</div>
            <h1 className="legal-h1">Your privacy matters.</h1>
            <p className="legal-date">Last updated: June 2026</p>
          </header>

          <div className="legal-body">

            <section className="legal-section">
              <h2 className="legal-h2">What data we collect</h2>
              <p className="legal-p">
                When you use PitchLab, we collect only the minimum information required to send your outreach emails. This includes:
              </p>
              <ul className="legal-ul">
                <li>Your Gmail email address, obtained via Google OAuth during authorization</li>
                <li>A Gmail OAuth refresh token, which authorizes us to send email on your behalf</li>
                <li>Your selected plan (Starter, Pro, or Premium)</li>
                <li>Research preferences you submit in our order form — such as your target institution and field of interest</li>
              </ul>
              <p className="legal-p">
                We do not collect your name, phone number, mailing address, or any other personal information beyond what is listed above.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-h2">How we use your data</h2>
              <p className="legal-p">
                The data we collect is used for one purpose only: fulfilling your outreach order.
              </p>
              <ul className="legal-ul">
                <li>Your Gmail OAuth token is used exclusively to send the personalized emails you ordered, from your Gmail account, to the professors you selected</li>
                <li>Your email address is used to associate your authorization with your order</li>
                <li>Your form responses are used to understand your research interests and generate relevant, specific email content</li>
              </ul>
              <p className="legal-p">
                We do not use your data for advertising, analytics, marketing communications, or any purpose beyond processing your order.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-h2">What we never do</h2>
              <div className="legal-callout">
                <strong>We never store your Gmail password.</strong> PitchLab uses Google OAuth — a secure authorization standard — which means you grant us a limited, revocable permission to send email on your behalf. We never see or store your password at any point.
              </div>
              <ul className="legal-ul">
                <li>We never read your Gmail inbox, drafts, sent folder, or any existing emails</li>
                <li>We never send any email from your account other than the outreach batch you explicitly ordered</li>
                <li>We never sell, rent, share, or transfer your personal data to third parties</li>
                <li>We never use your Gmail access for any purpose other than sending your ordered emails</li>
              </ul>
              <p className="legal-p">
                You can revoke PitchLab's access to your Gmail at any time by visiting{' '}
                <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
                  myaccount.google.com/permissions
                </a>{' '}
                and removing PitchLab from your connected apps.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-h2">Data retention</h2>
              <p className="legal-p">
                Your OAuth token is stored only as long as needed to process your outreach batch. Once your emails have been sent and your order is complete, your token is deleted from our systems.
              </p>
              <p className="legal-p">
                Order metadata (your selected tier and research preferences) may be retained for up to 90 days for customer support and quality assurance purposes, after which it is permanently deleted.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-h2">Third-party services</h2>
              <p className="legal-p">
                PitchLab uses the following third-party services to operate:
              </p>
              <ul className="legal-ul">
                <li><strong style={{ color: 'var(--text)', fontWeight: 600 }}>Google OAuth</strong> — to authenticate and authorize sending from your Gmail account</li>
                <li><strong style={{ color: 'var(--text)', fontWeight: 600 }}>PubMed</strong> — to look up professors' published research papers</li>
                <li><strong style={{ color: 'var(--text)', fontWeight: 600 }}>Stripe</strong> — to process payments securely. We never see or store your card details.</li>
                <li><strong style={{ color: 'var(--text)', fontWeight: 600 }}>Tally</strong> — to collect your research preferences via our order form</li>
              </ul>
              <p className="legal-p">
                Each of these services operates under its own privacy policy.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-h2">Your rights</h2>
              <p className="legal-p">
                You have the right to request deletion of any personal data we hold about you. To do so, email us at the address below and we will respond within 5 business days. You can also revoke our Gmail access at any time via your Google Account settings.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-contact">
                <div className="legal-contact-label">Questions about privacy</div>
                <div className="legal-contact-h">Contact us</div>
                <p>
                  If you have any questions about this Privacy Policy or how your data is handled, email us at{' '}
                  <a href="mailto:hello@pitchlab.me">hello@pitchlab.me</a>.
                  {' '}We aim to respond to all privacy inquiries within 2 business days.
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
