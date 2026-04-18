import dynamic from 'next/dynamic'
import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { StoryBlock } from '@/components/StoryBlock'
import { MenuGrid } from '@/components/MenuGrid'
import { WhereSection } from '@/components/WhereSection'
import { CtaStrip } from '@/components/CtaStrip'
import { galleryImages } from '@/data/gallery'
import { FollowStrip } from '@/components/FollowStrip'
import { Footer } from '@/components/Footer'

// Below-fold components — dynamic so their JS (framer-motion lightbox
// for Gallery in particular) doesn't block initial paint.
const Gallery = dynamic(() => import('@/components/Gallery').then(m => ({ default: m.Gallery })))

const marqueeItems = [
  'Crispy',
  'Juicy',
  'Double-fried',
  '24-hour marinade',
  'Five sauces',
  'Since 2025',
]

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee items={marqueeItems} />
        <StoryBlock />
        <div aria-hidden className="checker-band" />
        <MenuGrid />
        <div aria-hidden className="checker-band" />
        <WhereSection />
        <Gallery images={galleryImages} />
        <div aria-hidden className="checker-band-sm" />
        <CtaStrip
          heading="Feeding a crowd?"
          highlight="Let us park up."
          subtitle="Weddings, corporates, birthdays, parties — we cater the lot."
          buttonText="Book the truck"
          href="/catering"
        />
        <FollowStrip />
      </main>
      <Footer />
    </>
  )
}
