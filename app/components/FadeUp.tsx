'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1]

export default function FadeUp({
  children,
  delay = 0,
  className,
  style,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease, delay }}
    >
      {children}
    </motion.div>
  )
}
