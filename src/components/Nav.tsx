'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '/#menu',     label: 'Menu' },
  { href: '/#where',    label: 'Where' },
  { href: '/#gallery',  label: 'Gallery' },
  { href: '/catering',  label: 'Catering' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const transparent = isHome && !scrolled && !menuOpen
  const textColor = transparent ? 'text-cream' : 'text-charcoal'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex justify-between items-center transition-all duration-300 ${
          transparent ? 'bg-transparent' : 'bg-cream/95 backdrop-blur-sm shadow-sm'
        }`}
      >
        <Link href="/" className="flex items-center gap-3 leading-none transition-colors duration-300">
          <span className="relative block w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden ring-2 ring-cream/40 shadow-sm">
            <Image
              src="/logo.jpg"
              alt="Burchie's Fried Chicken logo"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </span>
          <span className={`hidden sm:flex items-baseline gap-1.5 ${textColor}`}>
            <span className="font-display text-lg md:text-xl font-bold tracking-tight">Burchie&rsquo;s</span>
            <span className="font-editorial italic text-xs md:text-sm text-ember">fried chicken</span>
          </span>
          <span className="sr-only">Burchie&rsquo;s Fried Chicken — home</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-[11px] tracking-widest uppercase transition-opacity duration-300 hover:opacity-60 ${textColor}`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#where"
            className="text-[11px] tracking-widest uppercase px-5 py-2.5 bg-ember text-cream rounded-sm relative overflow-hidden btn-shimmer hover:scale-[1.02] transition-transform duration-200 font-semibold"
          >
            Find the truck
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(v => !v)}
          className={`md:hidden flex flex-col gap-1.5 ${textColor}`}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-ember flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map(({ href, label }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
              >
                <Link href={href} className="font-display text-4xl text-cream tracking-tight">
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
