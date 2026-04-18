import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-ember text-cream noise">
      <p className="text-xs tracking-widest uppercase text-amber font-semibold mb-6">
        404 · Page not found
      </p>
      <h1 className="font-display text-[clamp(4rem,15vw,10rem)] leading-[0.9] font-bold tracking-tight">
        You clucked it.
      </h1>
      <p className="mt-8 text-lg md:text-xl max-w-md text-cream/80 leading-snug">
        This page doesn&rsquo;t exist. The chicken does, though.
      </p>
      <Link
        href="/"
        className="mt-12 inline-block text-xs tracking-widest uppercase px-7 py-4 bg-cream text-charcoal rounded-sm relative overflow-hidden btn-shimmer hover:scale-[1.02] transition-transform duration-200 font-semibold"
      >
        Back to the good stuff
      </Link>
    </main>
  )
}
