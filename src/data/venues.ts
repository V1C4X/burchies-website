export interface Venue {
  name: string
  address: string
  /** Google Maps short-link fragment used for map pins */
  mapsQuery: string
}

export const venues: Venue[] = [
  {
    name: 'Waterview Coffee Project',
    address: '11-15 Blockhouse Bay Rd, Waterview, Auckland',
    mapsQuery: 'Waterview+Coffee+Project+Auckland',
  },
  {
    name: 'Pūhoi Pub Hotel',
    address: '4 Saleyards Rd, Pūhoi',
    mapsQuery: 'Puhoi+Pub+Hotel',
  },
  {
    name: 'Oratia Bowling Club',
    address: '637 West Coast Rd, Oratia, Auckland',
    mapsQuery: 'Oratia+Bowling+Club',
  },
  {
    name: 'Crafty Bakery',
    address: '400 Titirangi Rd, Titirangi, Auckland',
    mapsQuery: 'Crafty+Bakery+Titirangi',
  },
  {
    name: 'Kumeu Market',
    address: 'Kumeu Showgrounds, 17 Access Rd, Kumeu',
    mapsQuery: 'Kumeu+Market',
  },
]
