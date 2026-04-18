export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: "Burchie's Fried Chicken",
    description:
      'Auckland food truck serving crispy, double-fried chicken in American, Mexican, Thai, Korean, and O.G. styles, plus fried cauliflower for vegetarians.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://burchies-website.vercel.app',
    servesCuisine: ['Fried Chicken', 'American', 'Mexican', 'Thai', 'Korean'],
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Auckland',
      addressCountry: 'NZ',
    },
    sameAs: [
      'https://www.instagram.com/burchies.fried.chicken/',
      'https://twitch.tv/burchietv',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
