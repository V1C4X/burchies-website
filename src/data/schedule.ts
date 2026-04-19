import { venues } from './venues'

export interface ScheduleSlot {
  day: string
  venue: string
  time: string
  address: string
  imageSrc?: string
  imageAlt?: string
  note?: string
}

const byName = Object.fromEntries(venues.map((v) => [v.name, v]))

// NOTE: Schedule placeholder based on recent Instagram posts — needs Thomas
// to confirm the current weekly lineup before v1 goes fully public.
export const schedule: ScheduleSlot[] = [
  {
    day: 'Thu',
    venue: 'Waterview Coffee Project',
    time: '4–8 pm',
    address: byName['Waterview Coffee Project'].address,
    imageSrc: '/venues/waterview.avif',
    imageAlt: 'Waterview Coffee Project — colourful shipping-container café',
  },
  {
    day: 'Fri',
    venue: 'Pūhoi Pub Hotel',
    time: '4:30–8:30 pm',
    address: byName['Pūhoi Pub Hotel'].address,
    note: 'Food Truck Fridays',
    imageSrc: '/venues/puhoi-pub.avif',
    imageAlt: 'Outdoor gathering at Pūhoi Pub Hotel',
  },
  {
    day: 'Sat',
    venue: 'Crafty Bakery · Titirangi',
    time: '5–8 pm',
    address: byName['Crafty Bakery'].address,
    imageSrc: '/venues/crafty-baker.avif',
    imageAlt: 'Crafty Baker — hands shaping sourdough loaves',
  },
  {
    day: 'Sun',
    venue: 'Kumeu Market',
    time: '9 am–2 pm',
    address: byName['Kumeu Market'].address,
    imageSrc: '/venues/kumeu-market.avif',
    imageAlt: 'Kumeu Market at Kumeu Showgrounds',
  },
]
