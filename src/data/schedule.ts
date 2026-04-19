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
    imageSrc: '/instagram/2026-02-11_07-00-20_DUm8RCHj8Qv_1.jpg',
    imageAlt: "Burchie's truck parked up at Pūhoi Pub",
  },
  {
    day: 'Sat',
    venue: 'Crafty Bakery · Titirangi',
    time: '5–8 pm',
    address: byName['Crafty Bakery'].address,
    imageSrc: '/instagram/2025-10-14_00-00-12_DPxMy9AkhNd.jpg',
    imageAlt: "Burchie's × Crafty Bakery pop-up poster",
  },
  {
    day: 'Sun',
    venue: 'Kumeu Market',
    time: '9 am–2 pm',
    address: byName['Kumeu Market'].address,
    // imageSrc intentionally omitted — photo still to come
  },
]
