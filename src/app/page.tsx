import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { StoryBlock } from '@/components/StoryBlock'
import { MenuGrid } from '@/components/MenuGrid'
import { PlaceholderSchedule } from '@/components/PlaceholderSchedule'
import { PlaceholderGallery } from '@/components/PlaceholderGallery'
import { CtaStrip } from '@/components/CtaStrip'
import { FollowStrip } from '@/components/FollowStrip'
import { Footer } from '@/components/Footer'

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
        <MenuGrid />
        <PlaceholderSchedule />
        <PlaceholderGallery />
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
