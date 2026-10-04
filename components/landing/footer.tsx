import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-white border-t border-brand-soft py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6 flex flex-col gap-10">
        
        {/* BARIS 1: BRANDING (KIRI) VS TOMBOL EMAIL SEBAGAI CTA (KANAN) */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-brand-soft/40 pb-8">
          {/* SISI KIRI: BRANDING CLASSIO */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <img 
                src="/images/logo-Smartclass-black.png" 
                alt="Classio Logo" 
                className="h-6 w-auto object-contain" 
              />
            </div>
            <p className="text-sm text-ink/50 mt-1">
              Smart & Green Campus Solutions.
            </p>
          </div>

          {/* SISI KANAN: TOMBOL KONTAK EMAIL UTAMA (PENGGANTI INSTAGRAM AGAR TIDAK KOSONG) */}
          <div>
            <a
              href="mailto:hanayaofficial@hanaya.co.id"
              className="inline-flex items-center gap-2.5 rounded-full bg-brand-dark px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-brand shadow-sm hover:shadow"
            >
              <Mail className="size-4" aria-hidden="true" />
              <span>Hubungi Kami</span>
            </a>
          </div>
        </div>

        {/* BARIS 2: DETAIL INFORMASI KONTAK RESMI HANAYA */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-2">
          
          {/* A. DETAIL ALAMAT KANTOR */}
          <div className="flex gap-3.5 items-start">
            <div className="p-2 rounded-xl bg-brand-soft shrink-0 mt-0.5">
              <MapPin className="size-5 text-brand-dark" aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink/40">Office Address</span>
              <p className="text-sm leading-relaxed text-ink/75 font-medium">
                Condovilla Apple 1 Tower B Lantai GF No 10, Jati Padang, Jakarta Selatan
              </p>
            </div>
          </div>

          {/* B. DETAIL NOMOR TELEPON / WA */}
          <div className="flex gap-3.5 items-start">
            <div className="p-2 rounded-xl bg-brand-soft shrink-0 mt-0.5">
              <Phone className="size-5 text-brand-dark" aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink/40">Contact Number</span>
              <a 
                href="https://wa.me/628112868811" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-semibold text-brand-dark hover:text-brand transition-colors mt-0.5 block"
              >
                +62 811 2868 811
              </a>
            </div>
          </div>

          {/* C. DETAIL EMAIL RESMI */}
          <div className="flex gap-3.5 items-start sm:col-span-2 lg:col-span-1">
            <div className="p-2 rounded-xl bg-brand-soft shrink-0 mt-0.5">
              <Mail className="size-5 text-brand-dark" aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink/40">Official Email</span>
              <a 
                href="mailto:hanayaofficial@hanaya.co.id" 
                className="text-sm font-semibold text-brand-dark hover:text-brand transition-colors mt-0.5 block break-all"
              >
                hanayaofficial@hanaya.co.id
              </a>
            </div>
          </div>

        </div>

        {/* BARIS 3: TEKS HAK CIPTA (COPYRIGHT) */}
        <div className="border-t border-brand-soft/60 pt-8 flex items-center justify-center">
          <p className="text-xs text-ink/40 tracking-wide text-center">
            &copy; {currentYear} Classio. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
