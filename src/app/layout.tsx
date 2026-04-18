import type { Metadata } from 'next'
import { Bricolage_Grotesque, Fraunces, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { JsonLd } from '@/components/JsonLd'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Burchie's Fried Chicken — Auckland food truck",
  description:
    "Crispy, juicy fried chicken — American, Mexican, Thai, Korean, O.G. Five sauces, one truck, wherever the queue goes. Auckland, Aotearoa.",
  metadataBase: new URL('https://burchies-website.vercel.app'),
  openGraph: {
    title: "Burchie's Fried Chicken",
    description:
      'Five sauces. One truck. Wherever the queue goes. Auckland food truck serving seriously crispy fried chicken (and cauliflower for our vegetarian friends).',
    type: 'website',
    locale: 'en_NZ',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-NZ"
      className={`${bricolage.variable} ${fraunces.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen bg-cream text-charcoal">
        {children}
        <JsonLd />
      </body>
    </html>
  )
}
