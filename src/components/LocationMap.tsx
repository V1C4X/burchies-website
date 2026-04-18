// Lightweight Google Maps embed — no API key needed for basic search embeds.
// Shows all venues centred on Auckland by searching for "burchies fried chicken".
export function LocationMap() {
  const src =
    'https://www.google.com/maps?q=Auckland,+New+Zealand&output=embed&z=10'
  return (
    <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-full rounded-sm overflow-hidden bg-bone border border-charcoal/10">
      <iframe
        src={src}
        title="Where Burchie's parks up around Auckland"
        className="absolute inset-0 w-full h-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  )
}
