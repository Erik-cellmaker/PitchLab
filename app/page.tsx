import Nav from './components/Nav'
import Hero from './components/Hero'
import LogoBar from './components/LogoBar'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingOrb from './components/FloatingOrb'

export default function Home() {
  return (
    <>
      <FloatingOrb />
      <a href="#main" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main">
        <Hero />
        <LogoBar />
        <Features />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
