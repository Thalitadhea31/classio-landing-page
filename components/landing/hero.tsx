import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Float, Reveal, SectionBadge, Stagger, StaggerItem } from './motion'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden scroll-mt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 pt-12 md:pt-20 lg:grid-cols-[1.1fr_1fr] lg:pb-32">
        <Stagger animateOnMount delay={0.3} className="flex flex-col items-start">
          <StaggerItem>
            <SectionBadge>Smart &amp; Green Campus</SectionBadge>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl md:leading-[1.2]">
              Membangun Kampus yang Lebih Cerdas dan Berkelanjutan
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-ink/50">
              Integrasi Classio IoT, teknologi pintar, dan solusi energi terbarukan untuk
              menciptakan lingkungan pembelajaran yang modern, terhubung, dan efisien.
            </p>
          </StaggerItem>
          <StaggerItem>
            <a
              href="#solutions"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-dark px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-brand/25 transition-transform hover:-translate-y-0.5"
            >
              Explore Solutions
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </StaggerItem>
        </Stagger>

        <Reveal direction="right" delay={0.4} className="relative mx-auto w-full max-w-lg pb-14">
          <div className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-xl shadow-brand-dark/10">
            <Image
              src="/images/hero-campus.png"
              alt="Pemandangan udara kampus hijau modern dengan taman di atap gedung"
              fill
              priority
              sizes="(min-width: 1024px) 512px, 100vw"
              className="object-cover"
            />
          </div>

          <Float className="absolute -bottom-0 left-4 sm:left-6" delay={0}>
            <div className="-rotate-3 rounded-2xl border border-white/80 bg-white/90 px-8 py-5 text-center shadow-xl shadow-brand-dark/10 backdrop-blur">
              <p className="text-base font-semibold leading-tight text-brand-dark">
                IoT
                <br />
                Connected
              </p>
            </div>
          </Float>

          <Float className="absolute bottom-10 -right-2 sm:-right-6" delay={1.5} distance={12}>
            <div className="rotate-3 rounded-2xl bg-white px-8 py-5 text-center shadow-xl shadow-brand-dark/10">
              <p className="text-base font-semibold leading-tight text-brand">
                Renewable
                <br />
                Energy
              </p>
            </div>
          </Float>
        </Reveal>
      </div>
    </section>
  )
}
