'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Building2, Cctv, Monitor, Wifi, type LucideIcon } from 'lucide-react'
import { Reveal, SectionBadge } from './motion'

type Point = {
  icon: LucideIcon
  label: string
  tooltip: { x: number; y: number }
  target: { x: number; y: number }
}

const points: Point[] = [
  { icon: Monitor, label: 'Smart Learning', tooltip: { x: 8, y: 18 }, target: { x: 36, y: 40 } },
  { icon: Wifi, label: 'IoT & Connectivity', tooltip: { x: 64, y: 8 }, target: { x: 52, y: 34 } },
  { icon: Building2, label: 'Smart Infrastructure', tooltip: { x: 90, y: 30 }, target: { x: 70, y: 50 } },
  { icon: Cctv, label: 'AI Cam Tracking', tooltip: { x: 10, y: 82 }, target: { x: 40, y: 62 } },
]

export function Technology() {
  return (
    <section id="technology" className="scroll-mt-24 bg-white py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto flex max-w-xl flex-col items-center text-center">
          <SectionBadge>Technology</SectionBadge>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-ink md:text-5xl md:leading-tight">
            Technology-Driven
            <br />
            Campus
          </h2>
          <p className="mt-5 text-ink/50">Teknologi terintegrasi dalam satu ekosistem kawasan.</p>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-14 aspect-[4/3] w-full max-w-4xl"
        >
          <Image
            src="/images/tech-campus.png"
            alt="Ilustrasi isometrik kampus pintar dengan panel surya dan jaringan IoT"
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-contain mix-blend-multiply"
          />

          <svg
            className="pointer-events-none absolute inset-0 hidden size-full md:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {points.map((p, i) => (
              <motion.path
                key={p.label}
                d={`M ${p.tooltip.x} ${p.tooltip.y + 5} L ${p.target.x} ${p.target.y}`}
                fill="none"
                stroke="var(--brand-dark)"
                strokeWidth={0.18}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 + i * 0.2 }}
              />
            ))}
          </svg>

          {points.map((p, i) => (
            <motion.div
              key={`dot-${p.label}`}
              className="absolute hidden md:block"
              style={{ left: `${p.target.x}%`, top: `${p.target.y}%` }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 + i * 0.2, type: 'spring' }}
            >
              <span className="absolute -left-2 -top-2 size-4 animate-ping rounded-full bg-teal-400/50" />
              <span className="absolute -left-1.5 -top-1.5 size-3 rounded-full border-2 border-white bg-teal-500" />
            </motion.div>
          ))}

          {points.map(({ icon: Icon, label, tooltip }, i) => (
            <motion.div
              key={label}
              className="absolute hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
              style={{ left: `${tooltip.x}%`, top: `${tooltip.y - 6}%` }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: [0.6, 1.12, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 + i * 0.2 }}
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft">
                <Icon className="size-6 text-brand" aria-hidden="true" />
              </span>
              <span className="whitespace-nowrap rounded-full bg-white/90 px-2 text-sm font-medium text-brand-dark">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <ul className="mt-8 grid grid-cols-2 gap-3 md:hidden">
          {points.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 rounded-2xl bg-brand-mint p-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft">
                <Icon className="size-5 text-brand" aria-hidden="true" />
              </span>
              <span className="text-xs font-medium text-brand-dark">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
