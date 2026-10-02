import Image from 'next/image'
import { GraduationCap, Leaf, Recycle } from 'lucide-react'
import { Reveal, SectionBadge, Stagger, StaggerItem } from './motion'

const impacts = [
  {
    icon: GraduationCap,
    title: 'Interactive Learning',
    text: 'Mendukung pembelajaran yang lebih interaktif melalui teknologi kelas cerdas.',
  },
  {
    icon: Leaf,
    title: 'Energy Efficiency',
    text: 'Mengoptimalkan pemanfaatan energi terbarukan untuk kebutuhan operasional kawasan.',
  },
  {
    icon: Recycle,
    title: 'Responsible Waste Management',
    text: 'Mendukung pengelolaan limbah yang lebih baik untuk mengurangi dampak lingkungan.',
  },
]

export function Impact() {
  return (
    <section id="impact" className="scroll-mt-24 bg-[#e8f1ec] py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* KOLOM KIRI: JUDUL & DESKRIPSI KONTEN */}
          <Reveal>
            <SectionBadge>Our Impact</SectionBadge>
            <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-brand-dark md:text-5xl">
              Creating a Better Campus Environment
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-ink/55">
              Integrasi teknologi dan solusi ramah lingkungan untuk mendukung kawasan yang lebih
              cerdas, efisien, dan bertanggung jawab terhadap lingkungan.
            </p>
          </Reveal>

          {/* KOLOM KANAN: KEMBALI KE LAYOUT ASLI V0 DENGAN TAMBAHAN ELEMEN */}
          <Reveal delay={0.15} className="relative mx-auto w-full max-w-lg py-8">
            
            {/* Gambar Besar Utama v0 */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-lg">
              <Image 
                src="/images/impact image porto.png" 
                alt="Ruang kelas pintar di kawasan kampus" 
                fill 
                sizes="(min-width: 1024px) 512px, 100vw" 
                className="object-cover" 
              />
            </div>

              {/* BARU: 3 Miniatur Foto Atas (UKURAN DIPERBESAR SEDIKIT AGAR LEBIH JELAS) */}
            <div className="absolute top-2 right-[110px] flex gap-1 z-20">
              {/* Ukuran dinaikkan dari w-10 h-7 menjadi w-[52px] h-[38px] */}
              <div className="relative w-[82px] h-[58px] overflow-hidden rounded border-2 border-white shadow bg-white">
                <Image src="/images/impact 1.jpg" alt="Komponen 1" fill className="object-cover" />
              </div>
              <div className="relative w-[82px] h-[58px] overflow-hidden rounded border-2 border-white shadow bg-white">
                <Image src="/images/impact 2.jpg" alt="Komponen 2" fill className="object-cover" />
              </div>
              <div className="relative w-[82px] h-[58px] overflow-hidden rounded border-2 border-white shadow bg-white">
                <Image src="/images/impact 3.jpg" alt="Komponen 3" fill className="object-cover" />
              </div>
            </div>


            {/* BARU: Elemen Brosur Autothermix SVG + Hiasan Daun Melayang di Sisi Kanan Gambar Besar */}
            <div className="absolute -top-4 right-2 w-[100px] h-[130px] z-30">
              {/* Aksen Flat Daun Tropis */}
              <div className="absolute right-[-4px] bottom-6 w-5 h-5 opacity-90 rotate-12 pointer-events-none">
                <span className="text-base">🌿</span>
              </div>
              <Image 
                src="/images/Brosur Autothermix Ayooklik.svg" 
                alt="Mesin Autothermix" 
                fill 
                className="object-contain drop-shadow-md" 
              />
            </div>

            {/* Gambar Melayang Kiri Bawah Asli v0 */}
            <div className="absolute -left-3 bottom-4 aspect-[4/3] w-1/3 overflow-hidden rounded-xl border-4 border-white shadow-lg">
              <Image src="/images/classroom-2.jpg" alt="Pembelajaran dengan layar interaktif" fill sizes="180px" className="object-cover" />
            </div>

            {/* Gambar Melayang Kanan Bawah Asli v0 */}
            <div className="absolute bottom-0 left-[28%] aspect-[4/3] w-1/4 overflow-hidden rounded-xl border-4 border-white shadow-lg">
              <Image src="/images/smartclass.jpg" alt="Interior ekosistem smart classroom" fill sizes="140px" className="object-cover" />
            </div>

          </Reveal>
        </div>

        {/* TIGA INDIKATOR ANGKA DI BAWAH (01, 02, 03) */}
        <Stagger className="mt-24 grid gap-10 md:grid-cols-3 md:gap-0" stagger={0}>
          {impacts.map(({ icon: Icon, title, text }, i) => (
            <StaggerItem
              key={title}
              className={i > 0 ? 'md:border-l md:border-brand-dark/10 md:pl-14' : 'md:pr-14'}
            >
              <div className={i === 1 ? 'md:pr-14' : ''}>
                <div className="flex items-center gap-5">
                  <span className="text-3xl font-medium text-brand">{`0${i + 1}`}</span>
                  <span className="flex size-10 items-center justify-center rounded-full bg-brand-soft">
                    <Icon className="size-5 text-brand-dark" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-6 font-semibold text-brand-dark">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/55">{text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
