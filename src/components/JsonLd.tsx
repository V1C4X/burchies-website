import { menu } from '@/data/menu'
import { SITE_URL } from '@/lib/siteUrl'

export function JsonLd() {
  const baseUrl = SITE_URL

  const data = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: "Burchie's Fried Chicken",
    description:
      'Auckland food truck serving crispy, double-fried chicken in American, Mexican, Thai, Korean, and O.G. styles, plus fried cauliflower for vegetarians.',
    url: baseUrl,
    image: `${baseUrl}/logo.jpg`,
    foundingDate: '2025-05',
    servesCuisine: ['Fried Chicken', 'American', 'Mexican', 'Thai', 'Korean'],
    priceRange: '$$',
    telephone: '+64 22 648 9257',
    email: 'burchies.friedchicken@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Auckland',
      addressCountry: 'NZ',
    },
    areaServed: [
      { '@type': 'City', name: 'Auckland' },
      { '@type': 'Place', name: 'Titirangi' },
      { '@type': 'Place', name: 'Waterview' },
      { '@type': 'Place', name: 'P\u016Bhoi' },
      { '@type': 'Place', name: 'Oratia' },
      { '@type': 'Place', name: 'Kumeu' },
    ],
    knowsAbout: [
      'double-fried chicken',
      'Korean fried chicken',
      'food truck catering',
      'free-range chicken',
      'vegetarian fried cauliflower',
    ],
    hasMenu: {
      '@type': 'Menu',
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Fried chicken styles',
          hasMenuItem: menu.map((item) => ({
            '@type': 'MenuItem',
            name: item.name,
            description: item.description,
            ...(item.veg ? { suitableForDiet: 'https://schema.org/VegetarianDiet' } : {}),
          })),
        },
      ],
    },
    sameAs: [
      'https://www.instagram.com/burchies.fried.chicken/',
      'https://www.facebook.com/profile.php?id=61576948422449',
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
