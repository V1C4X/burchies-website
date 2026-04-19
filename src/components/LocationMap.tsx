import { venues } from '@/data/venues'

/**
 * Google Maps embed centred on Auckland.
 *
 * We use Google's public `maps/embed/v1/search` endpoint via the generic
 * `/maps?output=embed` URL. No API key, but this has two quirks:
 *   - the iframe sometimes flickers/doesn't paint if the parent has no
 *     defined height (hence a fixed aspect ratio below, not h-full)
 *   - if Google's CDN is being flaky, we still want users to find us,
 *     so we render a text list of venue links underneath as a fallback.
 */
export function LocationMap() {
  const mapSrc =
    'https://maps.google.com/maps?q=Auckland,+New+Zealand&hl=en-NZ&z=10&t=m&output=embed&iwloc=near'

  return (
    <div className="flex flex-col gap-4">
      <div
        data-lenis-prevent
        className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[5/4] rounded-sm overflow-hidden bg-bone border border-charcoal/10 shadow-sm"
      >
        <iframe
          src={mapSrc}
          title="Where Burchie's parks up around Auckland"
          className="absolute inset-0 w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      {/* Venue quick-links — always loads, works even when Maps iframe is flaky */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5 text-[12px] text-charcoal/65">
        {venues.map((v) => (
          <li key={v.name}>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${v.mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-ember transition-colors duration-150"
            >
              <span className="inline-block w-1.5 h-1.5 bg-ember rounded-full" />
              <span>{v.name}</span>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="w-3 h-3 text-ember/60 group-hover:text-ember transition-colors shrink-0"
                fill="currentColor"
              >
                <path d="M12 2C7.58 2 4 5.58 4 10c0 6 8 12 8 12s8-6 8-12c0-4.42-3.58-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
