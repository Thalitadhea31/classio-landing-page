'use client'

import { motion } from 'framer-motion'
import { Cpu, Leaf, Share2 } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from './motion'

const pillars = [
  {
    icon: Cpu,
    title: 'SMART',
    text: 'Teknologi IoT untuk mendukung pembelajaran dan aktivitas kampus',
  },
  {
    icon: Share2,
    title: 'CONNECTED',
    text: 'Sistem dan perangkat yang saling terhubung dalam satu ekosistem',
  },
  {
    icon: Leaf,
    title: 'GREEN',
    text: 'Solusi energi dan pengelolaan lingkungan yang lebih efisien',
  },
]

export function Pillars() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Where Smart Meets Green
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-ink/50">
            Mengintegrasikan teknologi, konektivitas, dan solusi ramah lingkungan dalam satu
            ekosistem kampus.
          </p>
        </Reveal>

        <Stagger className="mt-16 grid gap-8 md:grid-cols-3" stagger={0.15}>
          {pillars.map(({ icon: Icon, title, text }) => (
            <StaggerItem key={title} direction="left">
              <motion.article
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex h-full flex-col items-center rounded-3xl bg-white px-8 py-10 text-center shadow-[0_8px_40px_-12px_rgba(31,81,50,0.15)]"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-soft">
                  <Icon className="size-6 text-brand" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-wide text-brand-dark">{title}</h3>
                <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-ink/55">{text}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
