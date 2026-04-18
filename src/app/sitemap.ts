import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://burchies-website.vercel.app'
  const now = new Date()
  return [
    { url: `${base}/`,          lastModified: now, changeFrequency: 'weekly',  priority: 1 },
    { url: `${base}/catering`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
