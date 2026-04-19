'use client'
import { useState, useEffect, useRef } from 'react'
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
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu when the route changes
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Route changes don't fire for in-page anchors (same pathname, new hash),
  // so also listen for hash changes explicitly.
  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  // Lock body scroll while the mobile menu is open so the page behind stays put
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = '' }
    }
  }, [menuOpen])

  // Focus trap: send focus to the first link when the menu opens, return to
  // the hamburger when it closes, and close on Escape.
  useEffect(() => {
    if (!menuOpen) return
    const t = setTimeout(() => firstLinkRef.current?.focus(), 50)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(t)
      window.removeEventListener('keydown', onKey)
      hamburgerRef.current?.focus()
    }
  }, [menuOpen])

  const transparent = isHome && !scrolled && !menuOpen
  const textColor = transparent ? 'text-cream' : 'text-charcoal'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex justify-between items-center transition-all duration-300 ${
          transparent ? 'bg-transparent' : 'bg-cream/95 backdrop-blur-sm shadow-sm'
        }`}
      >
        <Link
          href="/"
          onClick={(e) => {
            // Already on the home page? Scroll to top instead of a no-op navigation.
            if (isHome) {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setMenuOpen(false)
            }
          }}
          aria-label="Burchie's Fried Chicken — home"
          className="flex items-center gap-3 leading-none transition-colors duration-300"
        >
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
          <span className={`flex items-baseline gap-2 ${textColor}`}>
            <span className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight">Burchie&rsquo;s</span>
            <span className="font-editorial italic text-sm sm:text-base md:text-lg text-ember">fried chicken</span>
          </span>
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
          ref={hamburgerRef}
          onClick={() => setMenuOpen(v => !v)}
          className={`md:hidden flex flex-col gap-1.5 p-2 -m-2 ${textColor}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span aria-hidden className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span aria-hidden className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
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
                <Link
                  href={href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-4xl text-cream tracking-tight block px-8 py-2"
                >
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
