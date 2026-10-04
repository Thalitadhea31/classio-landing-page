import Image from 'next/image'
import { Reveal } from './motion'

function Solution({
  number,
  title,
  subtitle,
  highlight,
  text,
}: {
  number: number
  title: string
  subtitle: string
  highlight: string
  text: string
}) {
  return (
    <div className="flex gap-5">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
        {number}
      </span>
      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-ink">{title}</h3>
        <p className="mt-2 font-medium text-brand">{subtitle}</p>
        <p className="mt-6 max-w-md text-pretty leading-relaxed text-ink/55">
          <strong className="font-semibold text-ink/75">{highlight}</strong> {text}
        </p>
      </div>
    </div>
  )
}

export function GreenCampus() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-mint to-white py-24 md:py-28">
      {/* Background radial ornamen halus jika diperlukan di Figma */}
      <div className="absolute right-0 top-1/4 -z-10 h-[500px] w-[500px] opacity-10 bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] [background-size:24px_24px]" />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">Green Campus</h2>
          <p className="mt-5 text-pretty text-sm leading-relaxed text-ink/50">
            Solusi energi terbarukan dan pengelolaan limbah untuk operasional kawasan yang mandiri
            dan ramah lingkungan.
          </p>
        </Reveal>

        {/* SECTION 1: SOLAR ENERGY (DENGAN TAMBAHAN ELEMEN & LENGKUNGAN FIGMA) */}
        <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">
          
          {/* KOLOM KIRI: KOLASE GAMBAR PERBAIKAN */}
          <Reveal className="relative mx-auto h-[320px] w-full max-w-lg sm:h-[360px]">
            {/* Gambar 1 (Kiri Atas): Hanya melengkung besar di kiri atas sesuai Figma */}
            <div className="absolute left-0 top-0 aspect-[4/3] w-[64%] overflow-hidden rounded-tl-[4rem] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl shadow-md bg-brand-mint">
              <Image src="/images/solar-rooftop-1.jpg" alt="Panel surya dan tangki air di atap gedung kampus" fill sizes="350px" className="object-cover" />
            </div>
            
            {/* Gambar 2 (Kanan Bawah): Hanya melengkung besar di kanan bawah sesuai Figma */}
            <div className="absolute bottom-4 right-0 aspect-[4/3] w-[64%] overflow-hidden rounded-br-[4rem] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl border-4 border-white shadow-xl bg-brand-mint">
              <Image src="/images/solar-rooftop-2.jpg" alt="Inverter dan baterai sistem tenaga surya" fill sizes="350px" className="object-cover" />
            </div>

            {/* BARU: Elemen Tambahan Pohon Solar Panel Melayang di Kiri Bawah */}
            <div className="absolute left-[-20px] bottom-[-20px] w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] z-20 pointer-events-none drop-shadow-lg transition-transform duration-700 hover:scale-105">
              <Image 
                src="/images/element solar panel.png" 
                alt="Ornamen pohon panel surya" 
                fill 
                sizes="180px" 
                className="object-contain"
              />
            </div>
          </Reveal>

          {/* KOLOM KANAN: KONTEN TEKS */}
          <Reveal delay={0.15}>
            <div className="lg:pl-6">
              <Solution
                number={1}
                title="SOLAR ENERGY"
                subtitle="Energi Terbarukan untuk Kebutuhan Kampus"
                highlight="Solar Panel"
                text="dimanfaatkan sebagai sumber energi terbarukan untuk menyuplai daya mandiri bagi perangkat kritis kawasan yang beroperasi 24/7."
              />
            </div>
          </Reveal>
        </div>

        {/* SECTION 2: WASTE MANAGEMENT */}
        <div className="mt-28 grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="lg:pr-6">
              <Solution
                number={2}
                title="WASTE MANAGEMENT"
                subtitle="Pengelolaan Sampah yang Lebih Efisien"
                highlight="Autothermix"
                text="merupakan teknologi insinerator bersuhu tinggi untuk memusnahkan sampah domestik maupun operasional kawasan langsung di sumber limbah."
              />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="order-1 mx-auto w-full max-w-md lg:order-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-lg border border-gray-100">
              <Image src="/images/waste-plant.png" alt="Ilustrasi isometrik fasilitas insinerator Autothermix" fill sizes="(min-width: 1024px) 448px, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  )
}
