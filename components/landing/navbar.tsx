'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#technology', label: 'Technology' },
  { href: '#impact', label: 'Impact' },
]

export function Logo() {
  return (
    <a href="#home" className="flex items-center" aria-label="Classio home">
      {/* BERHASIL DIUBAH: Menggunakan file gambar logo asli Anda */}
      <img 
        src="/images/logo Smartclass black.png" 
        alt="Classio Logo" 
        className="h-8 w-auto object-contain" 
      />
    </a>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-transparent bg-white/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Logo />

        <ul className="hidden items-center gap-12 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                aria-current={active === link.href ? 'page' : undefined}
                className={cn(
                  'relative py-2 text-sm transition-colors hover:text-brand',
                  active === link.href ? 'font-medium text-brand-dark' : 'text-ink/70',
                )}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-brand"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-brand-dark px-5 py-2 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-dark hover:text-white md:inline-flex"
        >
          Contact Us
        </a>

        <button
          type="button"
          className="rounded-md p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-brand-soft bg-white md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setActive(link.href)
                      setOpen(false)
                    }}
                    className="block rounded-lg px-3 py-2.5 text-sm text-ink/80 hover:bg-brand-mint hover:text-brand-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-full border border-brand-dark px-5 py-2.5 text-center text-sm font-medium text-brand-dark"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
