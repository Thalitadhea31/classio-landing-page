import { Footer } from '@/components/landing/footer'
import { GreenCampus } from '@/components/landing/green-campus'
import { Hero } from '@/components/landing/hero'
import { Impact } from '@/components/landing/impact'
import { Navbar } from '@/components/landing/navbar'
import { Pillars } from '@/components/landing/pillars'
import { SmartCampus } from '@/components/landing/smart-campus'
import { Technology } from '@/components/landing/technology'

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-white via-white to-brand-soft/60">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <SmartCampus />
        <GreenCampus />
        <Technology />
        <Impact />
      </main>
      <Footer />
    </div>
  )
}
