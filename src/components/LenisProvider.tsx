'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

declare global {
  interface Window {
    __lenis?: Lenis
  }
}

/**
 * Enables Lenis smooth scrolling on desktop, keeps native momentum on touch.
 * Respects prefers-reduced-motion by bailing out entirely.
 * Mounted once in the root layout — no props, no children.
 * Exposes the instance on window.__lenis so modals can stop/start it.
 */
export function LenisProvider() {
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mql.matches) return

    const lenis = new Lenis({
      lerp: 0.09,
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1,
      wheelMultiplier: 1,
      anchors: {
        offset: -72,
        onComplete: undefined,
      },
    })
    window.__lenis = lenis

    let rafId = 0
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      delete window.__lenis
    }
  }, [])

  return null
}
