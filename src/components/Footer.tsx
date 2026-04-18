import Link from 'next/link'

export function Footer() {
  const links = [
    { href: '/#menu',    label: 'Menu' },
    { href: '/#where',   label: 'Where' },
    { href: '/#gallery', label: 'Gallery' },
    { href: '/catering', label: 'Catering' },
  ]

  return (
    <footer className="bg-smoke text-cream px-6 md:px-12 py-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-baseline gap-2 leading-none">
            <span className="font-display text-2xl font-bold tracking-tight">Burchie&rsquo;s</span>
            <span className="font-editorial italic text-sm text-amber">fried chicken</span>
          </div>
          <p className="text-xs text-cream/50 mt-3 tracking-wide">Auckland, Aotearoa</p>
          <p className="text-xs text-cream/40 mt-6 leading-relaxed max-w-xs">
            Made with 🔥 in Auckland. Complaints to the pigeon on the roof.
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          <span className="text-[10px] tracking-widest uppercase text-amber">Sitemap</span>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-cream/70 hover:text-cream transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <span className="text-[10px] tracking-widest uppercase text-amber">Follow the chaos</span>
          <a
            href="https://www.instagram.com/burchies.fried.chicken/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-cream/70 hover:text-cream transition-colors duration-200"
          >
            Instagram · @burchies.fried.chicken
          </a>
          <a
            href="https://twitch.tv/burchietv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-cream/70 hover:text-cream transition-colors duration-200"
          >
            Twitch · twitch.tv/burchietv
          </a>
          <p className="text-xs text-cream/40 mt-6 leading-relaxed">
            Logo by{' '}
            <a className="underline decoration-amber/50 underline-offset-2 hover:text-cream" href="https://instagram.com/sofgill" target="_blank" rel="noopener noreferrer">@sofgill</a>
            {' '}· Truck wrap by{' '}
            <a className="underline decoration-amber/50 underline-offset-2 hover:text-cream" href="https://instagram.com/ellargraphics" target="_blank" rel="noopener noreferrer">@ellargraphics</a>
            {' '}· Trailer from P Mullz
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between items-start gap-2 text-xs text-cream/40">
        <span>© {new Date().getFullYear()} Burchie&rsquo;s Fried Chicken</span>
        <span>Site by <a className="underline decoration-amber/50 underline-offset-2 hover:text-cream" href="https://carpetdirect.nz" target="_blank" rel="noopener noreferrer">Carpet Direct NZ</a></span>
      </div>
    </footer>
  )
}
