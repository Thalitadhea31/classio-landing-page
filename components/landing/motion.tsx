'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const ease = [0.22, 1, 0.36, 1] as const

type Direction = 'up' | 'left' | 'right' | 'none'

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
  none: { x: 0, y: 0 },
}

export function Reveal({
  children,
  className,
  direction = 'up',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  direction?: Direction
  delay?: number
}) {
  const { x, y } = offsets[direction]
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({
  children,
  className,
  stagger = 0.12,
  delay = 0,
  animateOnMount = false,
}: {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
  animateOnMount?: boolean
}) {
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  }
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      {...(animateOnMount
        ? { animate: 'show' }
        : { whileInView: 'show', viewport: { once: true, amount: 0.2 } })}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  direction = 'up',
}: {
  children: ReactNode
  className?: string
  direction?: Direction
}) {
  const { x, y } = offsets[direction]
  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease } },
  }
  return (
    <motion.div className={cn(className)} variants={variants}>
      {children}
    </motion.div>
  )
}

export function Float({
  children,
  className,
  delay = 0,
  distance = 10,
}: {
  children: ReactNode
  className?: string
  delay?: number
  distance?: number
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-soft px-5 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-dark">
      {children}
    </span>
  )
}
