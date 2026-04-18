'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

/**
 * Enables Lenis smooth scrolling on desktop, keeps native momentum on touch.
 * Respects prefers-reduced-motion by bailing out entirely.
 * Mounted once in the root layout — no props, no children.
 */
export function LenisProvider() {
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mql.matches) return

    const lenis = new Lenis({
      lerp: 0.09,          // how quickly the scroll catches up — higher = snappier
      duration: 1.1,
      smoothWheel: true,   // mouse wheel + trackpad smoothing
      touchMultiplier: 1,  // no touch smoothing — native scroll feels better on phones
      wheelMultiplier: 1,
      anchors: {
        offset: -72,       // sticky-nav height compensation
        onComplete: undefined,
      },
    })

    let rafId = 0
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return null
}
