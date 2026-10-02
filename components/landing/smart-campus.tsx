import Image from 'next/image'
import { Camera, Monitor, Share2 } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from './motion'

const features = [
  { icon: Monitor, label: 'Smart Classroom' },
  { icon: Camera, label: 'AI Cam Tracking' },
  { icon: Share2, label: 'IoT Learning' },
]

// Diperbaiki: Menggunakan 4 gambar berbeda sesuai urutan Figma
const collage = [
  { src: '/images/classroom-1.jpg', alt: 'Ruang kelas dengan layar interaktif', radius: 'rounded-tl-[4.5rem] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl', height: 'h-[220px] md:h-[260px]' },
  { src: '/images/classroom-2.jpg', alt: 'Layar pintar menampilkan kelas virtual', radius: 'rounded-2xl', height: 'h-[180px] md:h-[220px] self-end' },
  { src: '/images/classroom-3.jpg', alt: 'Sesi pembelajaran jarak jauh di layar kelas', radius: 'rounded-2xl', height: 'h-[180px] md:h-[220px]' },
  { src: '/images/classroom-4.jpg', alt: 'Kelas dengan kamera AI tracking', radius: 'rounded-br-[4.5rem] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl', height: 'h-[220px] md:h-[260px]' },
]


export function SmartCampus() {
      return (
    <section id="solutions" className="scroll-mt-24 bg-white py-24 md:py-28 overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        
        {/* KOLOM KIRI: KOLASE GAMBAR DENGAN DUA FLEX KOLOM (OTOMATIS NAIK) */}
        <Reveal direction="left" className="relative mx-auto w-full max-w-lg">
          {/* Ornamen Hijau Kiri Atas (bg-brand) */}
          <div aria-hidden="true" className="absolute -left-4 -top-4 h-[45%] w-[55%] rounded-tl-[5rem] rounded-tr-3xl rounded-bl-3xl bg-brand opacity-90 z-0" />
          
          {/* Ornamen Hijau Kanan Bawah (bg-brand-dark) */}
          <div aria-hidden="true" className="absolute -right-4 -bottom-4 h-[45%] w-[55%] rounded-br-[5rem] rounded-tr-3xl rounded-bl-3xl bg-brand-dark opacity-90 z-0" />
          
          {/* === FIX GABUNGAN: DUA KOLOM FLEXBOX AGAR MERAPAT DAN NAIK === */}
          <div className="relative flex gap-2 items-start z-10 w-full">
            
            {/* KOLOM KIRI (Gambar 1 & Gambar 3) */}
            <div className="flex flex-col gap-2 w-1/2">
              {/* Gambar 1 (Kiri Atas) */}
              <div className={`relative w-full overflow-hidden bg-brand-mint shadow-md border-[1.5px] border-white transition-transform duration-500 hover:scale-[1.02] ${collage[0].radius} ${collage[0].height}`}>
                <Image src={collage[0].src} alt={collage[0].alt} fill sizes="(min-width: 1024px) 260px, 50vw" className="object-cover" priority />
              </div>
              {/* Gambar 3 (Kiri Bawah) */}
              <div className={`relative w-full overflow-hidden bg-brand-mint shadow-md border-[1.5px] border-white transition-transform duration-500 hover:scale-[1.02] ${collage[2].radius} ${collage[2].height}`}>
                <Image src={collage[2].src} alt={collage[2].alt} fill sizes="(min-width: 1024px) 260px, 50vw" className="object-cover" />
              </div>
            </div>

            {/* KOLOM KANAN (Gambar 2 & Gambar 4) */}
            <div className="flex flex-col gap-2 w-1/2">
              {/* Gambar 2 (Kanan Atas) */}
              <div className={`relative w-full overflow-hidden bg-brand-mint shadow-md border-[1.5px] border-white transition-transform duration-500 hover:scale-[1.02] ${collage[1].radius} ${collage[1].height}`}>
                <Image src={collage[1].src} alt={collage[1].alt} fill sizes="(min-width: 1024px) 260px, 50vw" className="object-cover" />
              </div>
              {/* Gambar 4 (Kanan Bawah) */}
              <div className={`relative w-full overflow-hidden bg-brand-mint shadow-md border-[1.5px] border-white transition-transform duration-500 hover:scale-[1.02] ${collage[3].radius} ${collage[3].height}`}>
                <Image src={collage[3].src} alt={collage[3].alt} fill sizes="(min-width: 1024px) 260px, 50vw" className="object-cover" />
              </div>
            </div>

          </div>
          {/* === BATAS AKHIR PERBAIKAN KOLOM GAMBAR === */}
        </Reveal>

        {/* KOLOM KANAN: TEKS DAN FITUR */}
        <div className="lg:pl-6">
          <Reveal direction="right">
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">SMART CAMPUS</h2>
            <p className="mt-3 text-lg font-medium text-brand">Smarter Campus, Smarter Learning</p>
            <p className="mt-6 max-w-lg text-pretty leading-relaxed text-ink/50">
              Menghadirkan ekosistem pembelajaran interaktif yang mendukung kegiatan belajar,
              riset, dan pengembangan teknologi di kawasan.
            </p>
          </Reveal>

          <Stagger className="mt-10 flex max-w-sm flex-col gap-4" delay={0.3} stagger={0.15}>
            {features.map(({ icon: Icon, label }) => (
              <StaggerItem key={label} direction="right">
                <div className="flex items-center gap-5 rounded-full bg-[#f3f7f4] px-7 py-4 transition-all duration-300 hover:bg-brand-soft hover:translate-x-2 cursor-pointer shadow-sm hover:shadow">
                  <Icon className="size-5 text-brand-dark" aria-hidden="true" />
                  <span className="text-sm font-medium text-ink">{label}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

      </div>
    </section>
  )
}
