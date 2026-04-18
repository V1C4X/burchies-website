import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const links = [
    { href: '/#menu',    label: 'Menu' },
    { href: '/#where',   label: 'Where' },
    { href: '/#gallery', label: 'Gallery' },
    { href: '/catering', label: 'Catering' },
  ]

  return (
    <footer className="bg-smoke text-cream px-6 md:px-12 py-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-center gap-4">
            <span className="relative block w-16 h-16 rounded-full overflow-hidden ring-2 ring-cream/20 shadow-md shrink-0">
              <Image
                src="/logo.jpg"
                alt="Burchie's Fried Chicken logo"
                fill
                sizes="64px"
                className="object-cover"
              />
            </span>
            <div className="flex items-baseline gap-2 leading-none">
              <span className="font-display text-2xl md:text-3xl font-bold tracking-tight">Burchie&rsquo;s</span>
              <span className="font-editorial italic text-lg md:text-xl text-amber">fried chicken</span>
            </div>
          </div>
          <p className="text-xs text-cream/75 mt-4 tracking-wide">Auckland, Aotearoa</p>
          <p className="text-xs text-cream/70 mt-5 leading-relaxed max-w-xs">
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
          <span className="text-[10px] tracking-widest uppercase text-amber">Get in touch</span>
          <a
            href="tel:+64226489257"
            className="text-sm text-cream/70 hover:text-cream transition-colors duration-200"
          >
            022 648 9257
          </a>
          <a
            href="mailto:burchies.friedchicken@gmail.com"
            className="text-sm text-cream/70 hover:text-cream transition-colors duration-200 break-words"
          >
            burchies.friedchicken@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[10px] tracking-widest uppercase text-amber">Follow the chaos</span>
          <a
            href="https://www.instagram.com/burchies.fried.chicken/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-cream/70 hover:text-cream transition-colors duration-200"
          >
            Instagram
          </a>
          <a
            href="https://twitch.tv/burchietv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-cream/70 hover:text-cream transition-colors duration-200"
          >
            Twitch
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-cream/15 flex flex-col md:flex-row justify-between items-start gap-2 text-xs text-cream/70">
        <span>© {new Date().getFullYear()} Burchie&rsquo;s Fried Chicken</span>
        <span className="tracking-widest uppercase">Site by V1C4X Design Studio</span>
      </div>
    </footer>
  )
}
