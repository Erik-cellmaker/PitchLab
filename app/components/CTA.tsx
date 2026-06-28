'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1]

const line1 = ['Reach', 'professors', 'with']
const line2 = ['research-specific', 'outreach.']

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="cta-section" aria-labelledby="cta-h2">
      <div className="cta-glow" aria-hidden="true"/>
      <div className="container">
        <div ref={ref} style={{ position: 'relative', zIndex: 1 }}>
          <h2 id="cta-h2" className="cta-h2">
            {line1.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                style={{ display: 'inline-block', marginRight: '0.25em' }}
              >
                {word}
              </motion.span>
            ))}
            <br/>
            {line2.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease, delay: (line1.length + i) * 0.08 }}
                style={{ display: 'inline-block', marginRight: i < line2.length - 1 ? '0.25em' : 0 }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <motion.p
            className="cta-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: (line1.length + line2.length) * 0.08 }}
          >
            PitchLab helps you create personalized professor outreach in minutes.
          </motion.p>
          <motion.a
            href="#pricing"
            className="btn btn-accent btn-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: (line1.length + line2.length + 1) * 0.08 }}
          >
            Start your outreach →
          </motion.a>
        </div>
      </div>
    </section>
  )
}
