import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { travelPackages } from '../data/packages'
import PackageCard from '../components/PackageCard'
import RevealOnScroll from '../components/RevealOnScroll'
import SEO from '../components/SEO'
import './Cruises.css'

const cruisePackagesData = [
  {
    id: 'marella-discovery-limassol-2026',
    departureHub: 'limassol',
    cardTitle: 'Marella Discovery - Limassol Roundtrip 2026',
    cardSubtitle: 'Cruises from/to Cyprus',
    season: 'April 2026 - December 2026',
    nightsText: '7 Nights',
    fromPrice: 1012,
    coverImage: '/images/cruises/marella-cruise/marella-1.webp',
    coverPosition: 'center 42%',
    gallery: [
      '/images/cruises/marella-cruise/marella-1.webp',
      '/images/cruises/marella-cruise/marella-2.webp',
      '/images/cruises/marella-cruise/marella-3.webp',
      '/images/cruises/marella-cruise/marella-4.webp',
      '/images/cruises/marella-cruise/marella-5.webp',
      '/images/cruises/marella-cruise/marella-6.webp',
      '/images/cruises/marella-cruise/marella-7.webp',
      '/images/cruises/marella-cruise/marella-8.webp'
    ],
    region: 'Europe',
    title: 'Marella Discovery - Limassol Roundtrip Cruises 2026',
    highlightText: 'Adults-Only or Family-Friendly Sailings from Cyprus in 2026!',
    introPrimary:
      'Discover the ease of cruising from Limassol, Cyprus with weekly departures to top destinations across the Eastern Mediterranean. From the iconic Greek Isles to the cultural treasures of Turkey and beyond, each itinerary offers a mix of relaxation, exploration and unforgettable views. Depart close to home and enjoy a seamless travel experience without the need for flights. Just step aboard and start your journey.',
    introSecondary:
      'Join Marella Cruises for a 7-night round trip departing from Limassol, and enjoy an all-inclusive experience that covers drinks and gratuities. Don\'t miss out on this cruise to the Mediterranean with Marella Cruises.',
    itineraries: [
      {
        name: 'Grecian Discovery',
        days: [
          'Day 1: Limassol, Cyprus',
          'Day 2: At Sea',
          'Day 3: Piraeus (Athens), Greece',
          'Day 4: Santorini, Greece',
          'Day 5: Bodrum, Turkey',
          'Day 6: Heraklion, Greece',
          'Day 7: Rhodes, Greece',
          'Day 8: Limassol, Cyprus'
        ],
        availableDates:
          '1st April 2026 / 15th April 2026 / 13th May 2026 / 3rd June 2026 / 24th June 2026 / 8th July 2026 / 22nd July 2026 / 19th August 2026 / 2nd September 2026 / 30th September 2026 / 28th October 2026'
      },
      {
        name: 'Aegean Gems',
        days: [
          'Day 1: Limassol, Cyprus',
          'Day 2: At Sea',
          'Day 3: Kusadasi (Ephesus), Turkey',
          'Day 4: Mykonos, Greece',
          'Day 5: Piraeus (Athens), Greece',
          'Day 6: Souda (Chania), Greece',
          'Day 7: Rhodes, Greece',
          'Day 8: Limassol, Cyprus'
        ],
        availableDates:
          '8th April 2026 / 22nd April 2026 / 6th May 2026 / 20th May 2026 / 10th June 2026 / 1st July 2026 / 15th July 2026 / 29th July 2026 / 12th August 2026 / 26th August 2026 / 9th September 2026 / 23rd September 2026 / 7th October 2026 / 21st October 2026'
      },
      {
        name: 'Aegean Delight',
        days: [
          'Day 1: Limassol, Cyprus',
          'Day 2: At Sea',
          'Day 3: Kusadasi (for Ephesus), Turkey',
          'Day 4: Patmos, Greece',
          'Day 5: Rhodes, Greece',
          'Day 6: Marmaris, Turkey',
          'Day 7: Alanya, Turkey',
          'Day 8: Limassol, Cyprus'
        ],
        availableDates: '27th May 2026 / 17th June 2026 / 5th August 2026 / 16th September 2026 / 14th October 2026'
      }
    ],
    note:
      '*Itineraries and port calls may vary by sailing date. For the exact itinerary for your chosen departure, please contact us.',
    includedExcluded: [
      'Cruise Only',
      'All-Inclusive',
      'Drinks',
      'Gratuities',
      'Shore excursions and other on-board services that are on pay'
    ],
    additionalInfo: [
      'Specialty restaurants carry an additional supplement.',
      'Adults-only: All sailings from 6th May - 28th October 2026.',
      'Family friendly: All sailings from 1st April - 5th May 2026.'
    ],
    pricingAccommodation: [
      'Inside Cabin From: EUR 1012pp',
      'Outside Cabin From: EUR 1126pp',
      'Balcony Cabin From: EUR 1534pp',
      'Suite From: EUR 1759pp'
    ]
  },
  {
    id: 'marella-discovery-malaga-limassol-2026',
    departureHub: 'limassol',
    cardTitle: 'Marella Discovery - Malaga to Limassol',
    cardSubtitle: 'Marella Discovery Repositioning Cruise',
    season: 'April 2026 - December 2026',
    nightsText: '8 Nights',
    fromPrice: 1195,
    coverImage: '/images/cruises/malaga-limassol-marella-cruise/malaga-limassol-1.webp',
    coverPosition: 'center 32%',
    gallery: [
      '/images/cruises/malaga-limassol-marella-cruise/malaga-limassol-1.webp',
      '/images/cruises/malaga-limassol-marella-cruise/malaga-limassol-2.webp',
      '/images/cruises/malaga-limassol-marella-cruise/malaga-limassol-3.webp',
      '/images/cruises/malaga-limassol-marella-cruise/malaga-limassol-4.webp',
      '/images/cruises/malaga-limassol-marella-cruise/malaga-limassol-5.webp',
      '/images/cruises/malaga-limassol-marella-cruise/malaga-limassol-6.webp'
    ],
    region: 'Europe',
    title: 'Marella Discovery - Malaga to Limassol',
    highlightText: 'Sail onboard Marella Discovery with an all-inclusive cruise.',
    introPrimary:
      'Set sail on an unforgettable 8-night journey that takes you from Malaga to the historic port city of Limassol, Cyprus. This extraordinary itinerary offers an unparalleled adventure, visiting some of the world\'s most enchanting destinations.',
    introSecondary:
      'Enjoy a seamless cruise experience with premium onboard comfort, beautiful sea days, and iconic port calls across the Mediterranean before arriving in Cyprus.',
    itineraries: [
      {
        name: 'Cruise Itinerary',
        days: [
          'Day 1: Malaga, Spain',
          'Day 2: At Sea',
          'Day 3: Palma, Majorca',
          'Day 4: At Sea',
          'Day 5: Valletta, Malta',
          'Day 6: At Sea',
          'Day 7: Souda (for Chania), Crete',
          'Day 8: At Sea',
          'Day 9: Limassol, Cyprus'
        ],
        availableDates: '24th March 2026'
      }
    ],
    note: 'Sailing date is fixed for this itinerary: 24th March 2026.',
    includedExcluded: [
      'Cruise Only',
      'Port Taxes & Fees',
      'GBP Pricing Available',
      'All-Inclusive',
      'Shore excursions and other on-board services that are on pay'
    ],
    additionalInfo: [
      'Specialty restaurants carry an additional supplement.'
    ],
    pricingAccommodation: [
      'Inside Cabin From: EUR 1195pp',
      'Ocean View Cabin From: EUR 1192pp',
      'Balcony Cabin From: EUR 1614pp',
      'Suite Cabin From: EUR 1780pp'
    ]
  },
  {
    id: 'emerald-kaia-limassol-athens-2026',
    departureHub: 'limassol',
    cardTitle: 'Emerald Kaia - Limassol to Athens',
    cardSubtitle: 'From Cyprus to the Acropolis',
    season: 'April 2026 - December 2026',
    nightsText: '10 Nights',
    fromPrice: 7645,
    coverImage: '/images/cruises/Emerald-Kaia-cruise/Emerald-kaia-cruise-1.webp',
    coverPosition: 'center 42%',
    gallery: [
      '/images/cruises/Emerald-Kaia-cruise/Emerald-kaia-cruise-1.webp',
      '/images/cruises/Emerald-Kaia-cruise/Emerald-kaia-cruise-2.webp',
      '/images/cruises/Emerald-Kaia-cruise/Emerald-kaia-cruise-3.webp',
      '/images/cruises/Emerald-Kaia-cruise/Emerald-kaia-cruise-4.webp',
      '/images/cruises/Emerald-Kaia-cruise/Emerald-kaia-cruise-5.webp',
      '/images/cruises/Emerald-Kaia-cruise/Emerald-kaia-cruise-6.webp',
      '/images/cruises/Emerald-Kaia-cruise/Emerald-kaia-cruise-7.webp'
    ],
    region: 'Europe',
    title: 'Emerald Kaia - Limassol to Athens',
    highlightText: 'From Cyprus to the Acropolis: Sail through ancient shores',
    introPrimary:
      'Discover a coastline where myth and history meet crystal-clear waters and timeless island charm. Along the way, step ashore to explore ancient ruins, whitewashed villages and hidden harbours that bigger ships can’t reach.',
    introSecondary:
      'Enjoy an elegant yacht-style cruise experience with immersive stops across the Aegean before arriving in Athens.',
    itineraries: [
      {
        name: 'Cruise Itinerary',
        days: [
          'Day 1: Limassol, Cyprus',
          'Day 2: At Sea',
          'Day 3: Rhodes, Greece',
          'Day 4: Nisyros, Greece - Kos, Greece',
          'Day 5: Bodrum, Turkey',
          'Day 6: Kusadasi, Greece',
          'Day 7: Patmos, Greece',
          'Day 8: Delos, Greece - Mykonos, Greece',
          'Day 9: Spetses, Greece',
          'Day 10: Nafplio, Greece',
          'Day 11: Athens, Greece'
        ],
        availableDates: '4th April 2026'
      }
    ],
    note: 'Sailing date is fixed for this itinerary: 4th April 2026.',
    includedExcluded: [
      'Cruise Only',
      'Transfers (From/to Airport)',
      'Port Taxes & Fees',
      'All tipping and gratuities',
      'Complimentary wine, beer, soft drinks & selected cocktails throughout the day',
      'Insurance'
    ],
    additionalInfo: [
      'For any questions not covered here call us on +357 25828848',
      'Flights can be added for a supplement.'
    ],
    pricingAccommodation: [
      '4th April 2026',
      'Ocean View Room: From EUR 7645pp',
      'Balcony Suite: From EUR 10645pp',
      'Terrace Suite: From EUR 15345pp',
      'Yacht Suite: From EUR 16295pp'
    ]
  },
  {
    id: 'balmoral-limassol-athens-2026',
    departureHub: 'limassol',
    cardTitle: 'Balmoral - Limassol to Athens',
    cardSubtitle: 'Eastern Mediterranean Discovery',
    season: 'April 2026 - December 2026',
    nightsText: '10 Nights',
    fromPrice: 1706,
    coverImage: '/images/cruises/balmoral-limassol-curise/Balmora-Limassol-1.webp',
    coverPosition: 'center 38%',
    gallery: [
      '/images/cruises/balmoral-limassol-curise/Balmora-Limassol-1.webp',
      '/images/cruises/balmoral-limassol-curise/Balmora-Limassol-2.webp',
      '/images/cruises/balmoral-limassol-curise/Balmora-Limassol-3.webp',
      '/images/cruises/balmoral-limassol-curise/Balmora-Limassol-4.webp',
      '/images/cruises/balmoral-limassol-curise/Balmora-Limassol-5.webp',
      '/images/cruises/balmoral-limassol-curise/Balmora-Limassol-6.webp',
      '/images/cruises/balmoral-limassol-curise/Balmora-Limassol-7.webp'
    ],
    region: 'Europe',
    title: 'Balmoral - Limassol to Athens',
    highlightText: 'Legendary cities, rich history, and stunning seascapes.',
    introPrimary:
      'Begin your journey in sunny Limassol and sail through the heart of the Eastern Mediterranean. Explore the ancient wonders of Alexandria, relax along the turquoise coast of Marmaris, and immerse yourself in the vibrant culture of Istanbul. With scenic days at sea arrive in historic Athens!',
    introSecondary:
      'Enjoy a classic cruise atmosphere combining cultural highlights, relaxing sea days, and iconic ports across Cyprus, Egypt, Turkey, and Greece.',
    itineraries: [
      {
        name: 'Cruise Itinerary',
        days: [
          'Day 1-2: Limassol, Cyprus',
          'Day 3: Cruising',
          'Day 4: Alexandria, Egypt',
          'Day 5: Cruising',
          'Day 6: Marmaris, Turkey',
          'Day 7: Cruising',
          'Day 8-9: Istanbul, Turkey',
          'Day 10: Cruising',
          'Day 11: Piraeus (for Athens), Greece'
        ],
        availableDates: '9th November 2026'
      }
    ],
    note: 'Sailing date is fixed for this itinerary: 9th November 2026.',
    includedExcluded: [
      'Cruise Only',
      'Port Taxes & Fees',
      'Entertainment',
      'Full-Board including selected drinks with meals',
      'Gratuities',
      'Shore excursions and other on-board services that are on pay'
    ],
    additionalInfo: [
      'Specialty restaurants carry an additional supplement.',
      'Premium Drinks Package Available - Ask for More Details'
    ],
    pricingAccommodation: [
      '9th November 2026',
      'Inside Cabin From: EUR 1706 pp',
      'Ocean View Cabin From: EUR 1950 pp',
      'Balcony Cabin From: EUR 3537 pp',
      'Suite From: EUR 3658 pp'
    ]
  },
  {
    id: 'balmoral-valletta-limassol-2026',
    departureHub: 'limassol',
    cardTitle: 'Balmoral - Valletta to Limassol',
    cardSubtitle: 'A Mediterranean odyssey',
    season: 'April 2026 - December 2026',
    nightsText: '21 Nights',
    fromPrice: 5574,
    coverImage: '/images/cruises/balmoral-limassol-curise/Balmora-Limassol-2.webp',
    coverPosition: 'center 36%',
    gallery: [
      '/images/cruises/balmoral-valleta-cruise/balmoral-valleta-cruise-1.webp',
      '/images/cruises/balmoral-valleta-cruise/balmoral-valleta-cruise-2.webp',
      '/images/cruises/balmoral-valleta-cruise/balmoral-valleta-cruise-3.webp',
      '/images/cruises/balmoral-valleta-cruise/balmoral-valleta-cruise-4.webp'
    ],
    region: 'Europe',
    title: 'Balmoral - Valletta to Limassol',
    highlightText: 'A Mediterranean odyssey through history, coastlines & culture',
    introPrimary:
      'Discover Croatia’s iconic Adriatic ports, cruise through Montenegro’s Bay of Kotor, and explore Greece’s legendary islands - from Crete to Rhodes. With unforgettable sunrises, ancient ruins, and turquoise waters, this journey is the perfect blend of discovery and relaxation.',
    introSecondary:
      'An extended 21-night itinerary designed for travelers who want deeper exploration, iconic destinations, and relaxing sea days across the Mediterranean.',
    itineraries: [
      {
        name: 'Cruise Itinerary',
        days: [
          'Day 1: Valletta, Malta',
          'Day 2: Cruising',
          'Day 3: Dubrovnik, Croatia',
          'Day 4: Split, Croatia',
          'Day 5: Koper, Croatia',
          'Day 6: Zadar, Croatia',
          'Day 7: Cruising Bay of Kotor',
          'Day 7-8: Kotor, Montenegro',
          'Day 9: Kerkira, Corfu, Greece',
          'Day 10: Cruising',
          'Day 11-12: Heraklion, Crete, Greece',
          'Day 13: Ermoupoli, Syros, Greece',
          'Day 14: Sunrise at Temple of Poseidon, Greece',
          'Day 15-16: Kavala, Greece',
          'Day 17: Mytilene, Lesbos, Greece',
          'Day 18: Vathy, Samos, Greece',
          'Day 19: Rhodes, Greece',
          'Day 20: Cruising',
          'Day 21-22: Limassol, Cyprus'
        ],
        availableDates: '19th October 2026'
      }
    ],
    note: 'Sailing date is fixed for this itinerary: 19th October 2026.',
    includedExcluded: [
      'Cruise Only',
      'Port Taxes & Fees',
      'Entertainment',
      'Full-Board including selected drinks with meals',
      'Gratuities',
      'Shore excursions and other on-board services that are on pay'
    ],
    additionalInfo: [
      'Specialty restaurants carry an additional supplement.',
      'Premium Drinks Package Available - Ask for More Details'
    ],
    pricingAccommodation: [
      '19th October 2026',
      'Inside Cabin From: SOLD OUT',
      'Ocean View Cabin From: EUR 5574pp',
      'Balcony Cabin From: EUR 7880pp',
      'Suite From: EUR 8392pp'
    ]
  },
  {
    id: 'msc-sinfonia-piraeus-eastern-med-2026',
    departureHub: 'piraeus',
    cardTitle: 'MSC Sinfonia - Eastern Mediterranean',
    cardSubtitle: 'From/To Piraeus, Athens',
    season: 'April 2026 - December 2026',
    nightsText: '7 Nights',
    fromPrice: 793,
    coverImage: '/images/cruises/msc-simfonia/msc-simfonia-1.webp',
    coverPosition: 'center 40%',
    gallery: [
      '/images/cruises/msc-simfonia/msc-simfonia-1.webp',
      '/images/cruises/msc-simfonia/MSC Sinfonia-2.webp',
      '/images/cruises/msc-simfonia/MSC Sinfonia-3.webp',
      '/images/cruises/msc-simfonia/MSC Sinfonia-4.webp'
    ],
    region: 'Europe',
    title: 'Eastern Mediterranean 8 days from/to Piraeus, Athens',
    highlightText: 'On board of MSC Sinfonia',
    introPrimary:
      'Cruise: 7.4.26 - 14.4.26. Discover the Eastern Mediterranean from/to Piraeus with iconic Greek islands and coastal ports.',
    introSecondary:
      'The MSC Sinfonia offers first-class service in elegant Italian style, with extensive leisure facilities, dining options, and onboard entertainment.',
    itineraries: [
      {
        name: 'Cruise Itinerary',
        days: [
          'Day 1 Tue: Piraeus, Athens - Greece | Departure 17:00',
          'Day 2 Wed: Katakolon, Olympia - Greece | 10:00 - 19:00',
          'Day 3 Thu: Argostoli, Cephalonia - Greece | 08:00 - 18:00',
          'Day 4 Fri: Corfu - Greece | 09:00 - 19:00',
          'Day 5 Sat: Bari - Italy | 07:00 - 19:00',
          'Day 6 Sun: Cruising Day',
          'Day 7 Mon: Santorini - Greece | 08:00 - 18:00',
          'Day 8 Tue: Piraeus, Athens - Greece | Arrival 06:00'
        ],
        availableDates: '07.04.26 / 14.04.26 / 21.04.26 / 28.04.26 / 05.05.26 / 12.05.26 / 19.05.26 / 26.05.26 / 02.06.26 / 09.06.26 / 16.06.26 / 23.06.26 / 30.06.26 / 07.07.26 / 14.07.26 / 21.07.26 / 28.07.26 / 04.08.26 / 11.08.26 / 18.08.26 / 25.08.26 / 01.09.26 / 08.09.26 / 15.09.26 / 22.09.26 / 29.09.26 / 06.10.26 / 13.10.26 / 20.10.26'
      }
    ],
    note: 'All listed departures are operated on the MSC Sinfonia Eastern Mediterranean itinerary from/to Piraeus.',
    includedExcluded: [
      'Included: Cruise in the cabin category booked',
      'Included: Full board',
      'Included: Hotel Service Charge',
      'Included: Entertainment program on board',
      'Included: Use of onboard facilities (extra charges possible)',
      'Included: Port charges and taxes',
      'Included: Luggage transportation to/from cabin',
      'Not included: Arrival and departure',
      'Not included: Beverages, unless specified',
      'Not included: Meals and drinks in specialty restaurants',
      'Not included: Personal expenses aboard',
      'Not included: Shore excursions',
      'Not included: Medical service',
      'Not included: Travel insurances',
      'Not included: Visa, if necessary (extra charges possible)'
    ],
    additionalInfo: [
      'Ship: MSC Sinfonia | Cruise line: MSC Cruises | Ship category: 4',
      'Year: 2002 | Speed: 20.9 | Cabins: 980 | Decks: 9 | Passengers: 2646 | Ship class: Lirica',
      'Weight: 65,542 | Length: 274.9 | Beam: 28.8 | Draft: 6.8',
      'Travel documents: Passport',
      'Onboard languages: German, English, French, Italian, Spanish',
      'Facilities include Internet Cafe, Conference Room, Wi-Fi (with fee), buffet & main restaurant, bars, casino, theatre, disco, spa, sauna, sports and kids/teens clubs',
      'Environmental systems: HVAC Control and Scrubber (EGCS)'
    ],
    pricingAccommodation: [
      'Departures: April - October 2026',
      'Pricing: On request',
      'Please contact us for cabin categories and live rates'
    ]
  },
  {
    id: 'msc-fantasia-piraeus-eastern-med-2026',
    departureHub: 'piraeus',
    cardTitle: 'MSC Fantasia - Eastern Mediterranean',
    cardSubtitle: 'From/To Piraeus, Athens',
    season: 'April 2026 - December 2026',
    nightsText: '10 Days',
    fromPrice: 1157,
    coverImage: '/images/cruises/msc-fantasia/msc-cruise-fantasia.webp',
    coverPosition: 'center 38%',
    gallery: [
      '/images/cruises/msc-fantasia/msc-cruise-fantasia-1.webp',
      '/images/cruises/msc-fantasia/msc-cruise-fantasia-2.webp',
      '/images/cruises/msc-fantasia/msc-cruise-fantasia-3.webp',
      '/images/cruises/msc-fantasia/msc-cruise-fantasia.webp'
    ],
    region: 'Europe',
    title: 'Eastern Mediterranean 10 days from/to Piraeus, Athens',
    highlightText: 'On board of MSC Fantasia',
    introPrimary:
      'Sail through Greece, Turkey, and Italy on a 10-day Eastern Mediterranean itinerary from/to Piraeus aboard MSC Fantasia.',
    introSecondary:
      'MSC Fantasia combines premium Mediterranean cruising with diverse ports, scenic sea days, extensive dining, and rich onboard entertainment.',
    itineraries: [
      {
        name: 'Cruise Itinerary',
        days: [
          'Day 1 Wed: Piraeus, Athens - Greece | Departure 18:00',
          'Day 2 Thu: Izmir - Turkey | 08:00 - 16:00',
          'Day 3 Fri: Istanbul - Turkey | 09:00 - 23:00',
          'Day 4 Sat: Cruising Day',
          'Day 5 Sun: Corfu - Greece | 13:00 - 21:00',
          'Day 6 Mon: Bari - Italy | 07:00 - 14:00',
          'Day 7 Tue: Trieste - Italy | 09:00 - 19:00',
          'Day 8 Wed: Cruising Day',
          'Day 9 Thu: Katakolon, Olympia - Greece | 07:00 - 15:00',
          'Day 10 Fri: Piraeus, Athens - Greece | Arrival 08:00'
        ],
        availableDates: '06.05.26 / 15.05.26 / 24.05.26 / 02.06.26 / 11.06.26 / 20.06.26 / 29.06.26 / 08.07.26 / 17.07.26 / 26.07.26 / 04.08.26 / 13.08.26 / 22.08.26 / 31.08.26 / 09.09.26 / 18.09.26 / 27.09.26 / 06.10.26 / 15.10.26 / 24.10.26 / 02.11.26 / 11.11.26'
      }
    ],
    note: 'Cruise reference: 6.5.26 - 15.5.26.',
    includedExcluded: [
      'Included: Cruise in the cabin category booked',
      'Included: Full board',
      'Included: Hotel Service Charge',
      'Included: Entertainment program on board',
      'Included: Use of onboard facilities (extra charges possible)',
      'Included: Port charges and taxes',
      'Included: Luggage transportation to/from cabin',
      'Not included: Arrival and departure',
      'Not included: Beverages, unless specified',
      'Not included: Meals and drinks in specialty restaurants',
      'Not included: Personal expenses aboard',
      'Not included: Shore excursions',
      'Not included: Medical service',
      'Not included: Travel insurances',
      'Not included: Visa, if necessary (extra charges possible)'
    ],
    additionalInfo: [
      'Ship: MSC Fantasia | Cruise line: MSC Cruises | Ship category: 4 | Ship class: Fantasia',
      'Year: 2008 | Speed: 23.64 | Cabins: 1637 | Decks: 13 | Passengers: 4363',
      'Weight: 137,936 | Length: 333.33 | Beam: 37.92 | Draft: 8.67',
      'Travel documents: Passport',
      'Onboard languages: German, English, French, Italian, Spanish',
      'Facilities: 3-D/4-D Cinema, Disco, Casino, Theatre, Internet Cafe, Conference Room, Wi-Fi (fee), bars & cafes, sports, spa, kids and teens clubs, Formula 1 simulator',
      'Food options: Buffet restaurant, Gelateria, Mexican restaurant, Pizzeria, Sportsbar',
      'Environmental systems: HVAC Control and Scrubber (EGCS)'
    ],
    pricingAccommodation: [
      'Inside cabin: EUR 1,157',
      'Outside cabin: EUR 1,277',
      'Balcony cabin: EUR 1,357',
      'Mini Suite: -',
      'Suite: -',
      'Starting from EUR 1,157 p.p. double occupancy'
    ]
  }
  ,
  {
    id: 'costa-fascinosa-piraeus-eastern-med-2026',
    departureHub: 'piraeus',
    cardTitle: 'Costa Fascinosa - Eastern Mediterranean',
    cardSubtitle: 'From/To Piraeus, Athens',
    season: 'April 2026 - December 2026',
    nightsText: '7 Nights',
    fromPrice: 889,
    coverImage: '/images/cruises/costa-fascinosa/costa-fascinosa-cruise.webp',
    coverPosition: 'center 42%',
    gallery: [
      '/images/cruises/costa-fascinosa/costa-fascinosa-cruise.webp',
      '/images/cruises/costa-fascinosa/costa-fascinosa-cruise-3.webp',
      '/images/cruises/costa-fascinosa/costa-fascinosa-cruise-2.webp',
      '/images/cruises/costa-fascinosa/costa-fascinosa-cruise-1.webp'
    ],
    region: 'Europe',
    title: 'Eastern Mediterranean 8 days from/to Piraeus, Athens',
    highlightText: 'On board of Costa Fascinosa',
    introPrimary:
      'Discover the Eastern Mediterranean from/to Piraeus aboard Costa Fascinosa with calls in Malta, Italy, and the Greek islands.',
    introSecondary:
      'Operated by Costa Cruises, this 7-night itinerary combines scenic cruising with iconic ports and full-board comfort on board.',
    itineraries: [
      {
        name: 'Cruise Itinerary',
        days: [
          'Day 1 Wed: Piraeus, Athens - Greece | Departure 20:00',
          'Day 2 Thu: Cruising Day',
          'Day 3 Fri: Valletta - Malta | 09:00 - 19:00',
          'Day 3 Fri: Cruising in the Ionian Sea - Italy | From 23:30',
          'Day 4 Sat: Cruising in the Ionian Sea - Italy | At 00:30',
          'Day 4 Sat: Catania - Italy | 07:00 - 17:00',
          'Day 4 Sat: Etna skyline - Italy | 17:45 - 19:00',
          'Day 5 Sun: Taranto - Italy | 09:00 - 17:00',
          'Day 6 Mon: Argostoli, Cephalonia - Greece | 09:00 - 16:00',
          'Day 7 Tue: Mykonos - Greece | 12:00 - 22:30',
          'Day 7 Tue: Bay of Mykonos - Greece | From 23:15',
          'Day 8 Wed: Bay of Mykonos - Greece | At 01:30',
          'Day 8 Wed: Piraeus, Athens - Greece | Arrival 06:00'
        ],
        availableDates:
          '06.05.26 / 15.05.26 / 24.05.26 / 02.06.26 / 11.06.26 / 20.06.26 / 29.06.26 / 08.07.26 / 17.07.26 / 26.07.26 / 04.08.26 / 13.08.26 / 22.08.26 / 31.08.26 / 09.09.26 / 18.09.26 / 27.09.26 / 06.10.26 / 15.10.26 / 24.10.26 / 02.11.26 / 11.11.26'
      }
    ],
    note: 'Operator: Costa Cruises. Sailing dates are listed under Available Dates.',
    includedExcluded: [
      'Included: Cruise in the cabin category booked',
      'Included: Full board',
      'Included: Entertainment program on board',
      'Included: Use of onboard facilities (extra charges possible)',
      'Included: Port charges and taxes',
      'Included: Luggage transportation to/from cabin',
      'Not included: Arrival and departure',
      'Not included: Beverages, unless specified',
      'Not included: Meals and drinks in specialty restaurants',
      'Not included: Personal expenses aboard',
      'Not included: Shore excursions',
      'Not included: Medical service',
      'Not included: Travel insurances',
      'Not included: Recommended gratuities',
      'Not included: Visa, if necessary (extra charges possible)'
    ],
    additionalInfo: [
      'Ship: Costa Fascinosa | Cruise line: Costa Cruises',
      'Departures: May - November 2026',
      'Starting from EUR 889 p.p. double occupancy'
    ],
    pricingAccommodation: [
      'Inside cabin: EUR 889',
      'Outside cabin: EUR 1,059',
      'Balcony cabin: EUR 1,189',
      'Mini Suite: EUR 1,339',
      'Suite: EUR 1,849',
      'Starting from EUR 889 p.p. double occupancy'
    ]
  },
  {
    id: 'legend-of-the-seas-barcelona-central-med-2027',
    departureHub: 'barcelona',
    cardTitle: 'Legend of the Seas - Central Mediterranean',
    cardSubtitle: 'From/To Barcelona',
    season: 'April 2026 - December 2026',
    nightsText: '7 Nights',
    fromPrice: 1430,
    coverImage: '/images/cruises/legend-of-the-sea/Legend-of-the-seas-cover.webp',
    coverPosition: 'center 42%',
    gallery: [
      '/images/cruises/legend-of-the-sea/Legend-of-the-seas-1.webp',
      '/images/cruises/legend-of-the-sea/Legend-of-the-seas-2.webp',
      '/images/cruises/legend-of-the-sea/Legend-of-the-seas-3.webp',
      '/images/cruises/legend-of-the-sea/Legend-of-the-seas-4.webp',
      '/images/cruises/legend-of-the-sea/Legend-of-the-seas-5.webp'
    ],
    region: 'Europe',
    title: 'Central Mediterranean 8 days from/to Barcelona',
    highlightText: 'On board of Legend of the Seas',
    introPrimary:
      'Welcome aboard Legend of the Seas, designed for unforgettable family holidays at sea with thrilling attractions and resort-style relaxation.',
    introSecondary:
      'Experience waterslides, pools, family zones, entertainment venues, and a wide range of dining concepts while sailing the Central Mediterranean.',
    itineraries: [
      {
        name: 'Cruise Itinerary',
        days: [
          'Day 1 Sun: Barcelona - Spain | Departure 17:00',
          'Day 2 Mon: Palma de Mallorca, Balearic Islands - Spain | 08:00 - 16:00',
          'Day 3 Tue: Marseille - France | 09:00 - 18:00',
          'Day 4 Wed: La Spezia, Florence, Pisa, Cinque - Italy | 08:30 - 20:00',
          'Day 5 Thu: Civitavecchia, Rome - Italy | 07:00 - 20:00',
          'Day 6 Fri: Naples - Italy | 07:00 - 19:00',
          'Day 7 Sat: Cruising Day | 00:00 - 00:00',
          'Day 8 Sun: Barcelona - Spain | Arrival 05:00'
        ],
        availableDates:
          '02.08.26 / 09.08.26 / 16.08.26 / 23.08.26 / 30.08.26 / 06.09.26 / 13.09.26 / 20.09.26 / 27.09.26 / 04.10.26 / 11.10.26 / 18.10.26 / 09.05.27 / 16.05.27 / 23.05.27 / 30.05.27 / 06.06.27 / 13.06.27 / 20.06.27 / 27.06.27 / 04.07.27 / 11.07.27 / 18.07.27 / 25.07.27 / 01.08.27 / 08.08.27 / 15.08.27 / 22.08.27 / 29.08.27 / 05.09.27 / 12.09.27 / 19.09.27 / 26.09.27 / 03.10.27 / 10.10.27 / 17.10.27 / 24.10.27'
      }
    ],
    note: 'Operator: Royal Caribbean. Barcelona sailing dates are listed under Available Dates.',
    includedExcluded: [
      'Included: Cruise in the cabin category booked',
      'Included: Full board',
      'Included: Entertainment program on board',
      'Included: Use of onboard facilities (extra charges possible)',
      'Included: Port charges and taxes',
      'Included: Luggage transportation to/from cabin',
      'Not included: Arrival and departure',
      'Not included: Beverages, unless specified',
      'Not included: Meals and drinks in specialty restaurants',
      'Not included: Personal expenses aboard',
      'Not included: Shore excursions',
      'Not included: Medical service',
      'Not included: Travel insurances',
      'Not included: Recommended gratuities',
      'Not included: Visa, if necessary (extra charges possible)'
    ],
    additionalInfo: [
      'Ship: Legend of the Seas | Cruise line: Royal Caribbean | Ship class: Icon',
      'Travel documents: Passport | Onboard language: English',
      'Entertainment: 3-D/4-D cinema, comedy, dining shows, disco, casino, live music, theatre',
      'Bars and cafes: coffee bar, champagne/caviar bar, cocktail bar, ice bar, pool bar, English pub, wine cellar',
      'Kids and teens: babysitter, kids club, aquapark, kids restaurant, child care, teens disco, teens club',
      'Communication: conference room, Wi-Fi with fee',
      'Wellness/Health: handicapped accessible, hairdresser, cosmetic, massage, sauna, spa, indoor/outdoor whirlpools',
      'Food: Asian, BBQ/grill, buffet, burger, fish and chips, gelateria, Italian, Japanese, Mexican, seafood, sushi',
      'Sport: jogging/walking track, climbing wall, minigolf, indoor/outdoor pools, surf simulator, ping-pong, waterslide',
      'Passenger capacity: More than 5000 passengers | Environmental friendliness: LNG'
    ],
    pricingAccommodation: [
      'Inside cabin: From EUR 1,430',
      'Outside cabin: On request',
      'Balcony cabin: On request',
      'Mini Suite: On request',
      'Suite: On request',
      'Starting from EUR 1,430 p.p. double occupancy'
    ]
  },
  {
    id: 'legend-of-the-seas-civitavecchia-central-med-2027',
    departureHub: 'civitavecchia',
    cardTitle: 'Legend of the Seas - Central Mediterranean',
    cardSubtitle: 'From/To Civitavecchia, Rome',
    season: 'April 2026 - December 2026',
    nightsText: '7 Nights',
    fromPrice: 1430,
    coverImage: '/images/cruises/legend-of-the-sea/Legend-of-the-seas-cover.webp',
    coverPosition: 'center 42%',
    gallery: [
      '/images/cruises/legend-of-the-sea/Legend-of-the-seas-1.webp',
      '/images/cruises/legend-of-the-sea/Legend-of-the-seas-2.webp',
      '/images/cruises/legend-of-the-sea/Legend-of-the-seas-3.webp',
      '/images/cruises/legend-of-the-sea/Legend-of-the-seas-4.webp',
      '/images/cruises/legend-of-the-sea/Legend-of-the-seas-5.webp'
    ],
    region: 'Europe',
    title: 'Central Mediterranean 8 days from/to Civitavecchia, Rome',
    highlightText: 'On board of Legend of the Seas',
    introPrimary:
      'Welcome aboard Legend of the Seas, designed for unforgettable family holidays at sea with thrilling attractions and resort-style relaxation.',
    introSecondary:
      'Experience waterslides, pools, family zones, entertainment venues, and a wide range of dining concepts while sailing the Central Mediterranean.',
    itineraries: [
      {
        name: 'Cruise Itinerary',
        days: [
          'Day 1 Thu: Civitavecchia, Rome - Italy | Departure 20:00',
          'Day 2 Fri: Naples - Italy | 07:00 - 19:00',
          'Day 3 Sat: Cruising Day | 00:00 - 00:00',
          'Day 4 Sun: Barcelona - Spain | 05:00 - 17:00',
          'Day 5 Mon: Palma de Mallorca, Balearic Islands - Spain | 08:00 - 16:00',
          'Day 6 Tue: Marseille - France | 09:00 - 18:00',
          'Day 7 Wed: La Spezia, Florence, Pisa, Cinque - Italy | 08:30 - 20:00',
          'Day 8 Thu: Civitavecchia, Rome - Italy'
        ],
        availableDates:
          '20.08.26 / 27.08.26 / 03.09.26 / 10.09.26 / 17.09.26 / 24.09.26 / 01.10.26 / 08.10.26 / 15.10.26 / 13.05.27 / 20.05.27 / 27.05.27 / 03.06.27 / 10.06.27 / 17.06.27 / 24.06.27 / 01.07.27 / 08.07.27 / 15.07.27 / 22.07.27 / 29.07.27 / 05.08.27 / 12.08.27 / 19.08.27 / 26.08.27 / 02.09.27 / 09.09.27 / 16.09.27 / 23.09.27 / 30.09.27 / 07.10.27 / 14.10.27 / 21.10.27'
      }
    ],
    note: 'Operator: Royal Caribbean. Civitavecchia sailing dates are listed under Available Dates.',
    includedExcluded: [
      'Included: Cruise in the cabin category booked',
      'Included: Full board',
      'Included: Entertainment program on board',
      'Included: Use of onboard facilities (extra charges possible)',
      'Included: Port charges and taxes',
      'Included: Luggage transportation to/from cabin',
      'Not included: Arrival and departure',
      'Not included: Beverages, unless specified',
      'Not included: Meals and drinks in specialty restaurants',
      'Not included: Personal expenses aboard',
      'Not included: Shore excursions',
      'Not included: Medical service',
      'Not included: Travel insurances',
      'Not included: Recommended gratuities',
      'Not included: Visa, if necessary (extra charges possible)'
    ],
    additionalInfo: [
      'Ship: Legend of the Seas | Cruise line: Royal Caribbean | Ship class: Icon',
      'Travel documents: Passport | Onboard language: English',
      'Entertainment: 3-D/4-D cinema, comedy, dining shows, disco, casino, live music, theatre',
      'Bars and cafes: coffee bar, champagne/caviar bar, cocktail bar, ice bar, pool bar, English pub, wine cellar',
      'Kids and teens: babysitter, kids club, aquapark, kids restaurant, child care, teens disco, teens club',
      'Communication: conference room, Wi-Fi with fee',
      'Wellness/Health: handicapped accessible, hairdresser, cosmetic, massage, sauna, spa, indoor/outdoor whirlpools',
      'Food: Asian, BBQ/grill, buffet, burger, fish and chips, gelateria, Italian, Japanese, Mexican, seafood, sushi',
      'Sport: jogging/walking track, climbing wall, minigolf, indoor/outdoor pools, surf simulator, ping-pong, waterslide',
      'Passenger capacity: More than 5000 passengers | Environmental friendliness: LNG'
    ],
    pricingAccommodation: [
      'Inside cabin: From EUR 1,430',
      'Outside cabin: On request',
      'Balcony cabin: On request',
      'Mini Suite: On request',
      'Suite: On request',
      'Starting from EUR 1,430 p.p. double occupancy'
    ]
  },
  {
    id: 'msc-world-europa-genoa-western-med-2026',
    departureHub: 'genoa',
    cardTitle: 'MSC World Europa - Western Mediterranean',
    cardSubtitle: 'From Genoa to Marseille',
    season: 'April 2026 - December 2026',
    nightsText: '7 Nights',
    fromPrice: 561,
    coverImage: '/images/cruises/msc-world-europa/msc-world-europa-1.webp',
    coverPosition: 'center 45%',
    gallery: [
      '/images/cruises/msc-world-europa/msc-world-europa-1.webp',
      '/images/cruises/msc-world-europa/msc-world-europa-2.webp',
      '/images/cruises/msc-world-europa/msc-world-europa-3.webp',
      '/images/cruises/msc-world-europa/msc-world-europa-4.webp'
    ],
    region: 'Europe',
    title: 'MSC Package - Western Mediterranean 7 days from Genoa to Marseille - HOLIDAY BREAKS',
    highlightText: 'On board of MSC World Europa',
    introPrimary:
      'Discover the Western Mediterranean on a 7-night itinerary from Genoa to Marseille, with calls in Naples, Messina, Valletta, and Barcelona.',
    introSecondary:
      'This MSC holiday break combines full-board comfort, rich onboard entertainment, and iconic Mediterranean port experiences.',
    itineraries: [
      {
        name: 'Cruise Itinerary',
        days: [
          'Day 1 Sun: Genoa - Italy | Departure 16:00',
          'Day 2 Mon: Naples - Italy | 13:00 - 20:00',
          'Day 3 Tue: Messina, Sicily - Italy | 09:00 - 18:00',
          'Day 4 Wed: Valletta - Malta | 08:00 - 17:00',
          'Day 5 Thu: Cruising Day',
          'Day 6 Fri: Barcelona - Spain | 08:00 - 18:00',
          'Day 7 Sat: Marseille - France | Arrival 07:00'
        ],
        availableDates: '19.04.26'
      }
    ],
    note: 'Cruise: 19.4.26 - 25.4.26 | Operator: MSC Cruises.',
    includedExcluded: [
      'Included: Cruise in the cabin category booked',
      'Included: Full board',
      'Included: Entertainment program on board',
      'Included: Use of onboard facilities (extra charges possible)',
      'Included: Luggage transportation to/from cabin',
      'Included: Port charges and taxes',
      'Included: Hotel Service Charge',
      'Not included: Arrival and Departure',
      'Not included: Personal expenses aboard',
      'Not included: Medical service',
      'Not included: Travel insurances',
      'Not included: Visa, if necessary (extra charges possible)'
    ],
    additionalInfo: [
      'Ship: MSC World Europa | Cruise line: MSC Cruises',
      'Passport: Mandatory and valid for at least 6 months after cruise return date',
      'For hygiene and safety concepts, refer to current cruise company information',
      'Special cruise-company terms may apply to selected offers'
    ],
    pricingAccommodation: [
      'Inside cabin: EUR 561',
      'Outside cabin: EUR 701',
      'Balcony cabin: EUR 811',
      'Mini Suite: EUR 1,031',
      'Suite: EUR 2,181',
      'Starting from EUR 561 p.p. double occupancy'
    ]
  },
  {
    id: 'norwegian-epic-civitavecchia-western-med-2026',
    departureHub: 'civitavecchia',
    cardTitle: 'Norwegian Epic - Western Mediterranean',
    cardSubtitle: 'From Civitavecchia, Rome to Barcelona',
    season: 'April 2026 - December 2026',
    nightsText: '7 Nights',
    fromPrice: 720,
    coverImage: '/images/cruises/norwedjian-cruise/norwegian-cruise-1.webp',
    coverPosition: 'center 52%',
    gallery: [
      '/images/cruises/norwedjian-cruise/norwegian-cruise-5.webp',
      '/images/cruises/norwedjian-cruise/norwegian-cruise-4.webp',
      '/images/cruises/norwedjian-cruise/norwegian-cruise-3.webp',
      '/images/cruises/norwedjian-cruise/norwegian-cruise-2.webp',
      '/images/cruises/norwedjian-cruise/norwegian-cruise-1.webp'
    ],
    region: 'Europe',
    title: 'Western Mediterranean 8 days from Civitavecchia - Rome to Barcelona',
    highlightText: 'On board of Norwegian Epic',
    introPrimary:
      'Sail from Civitavecchia to Barcelona on a 7-night Western Mediterranean itinerary with scenic stops across Italy and the French Riviera.',
    introSecondary:
      'Operated by Norwegian Cruise Line, this sailing combines full-board comfort, lively onboard entertainment, and diverse port experiences.',
    itineraries: [
      {
        name: 'Cruise Itinerary',
        days: [
          'Day 1 Sun: Civitavecchia, Rome - Italy | Departure 17:00',
          'Day 2 Mon: Salerno - Italy | 07:00 - 18:00',
          'Day 3 Tue: Catania - Italy | 08:00 - 19:00',
          'Day 4 Wed: Cruising Day',
          'Day 5 Thu: Livorno - Italy | 07:00 - 22:00',
          'Day 6 Fri: Villefranche, Nice - France | 07:00 - 18:00',
          'Day 7 Sat: Marseille - France | 07:00 - 17:00',
          'Day 8 Sun: Barcelona - Spain | Arrival 06:00'
        ],
        availableDates: '10.05.26'
      }
    ],
    note: 'Cruise: 10.5.26 - 17.5.26 | Operator: Norwegian Cruise Line.',
    includedExcluded: [
      'Included: Cruise in the cabin category booked',
      'Included: Full board',
      'Included: Entertainment program on board',
      'Included: Use of onboard facilities (extra charges possible)',
      'Included: Port charges and taxes',
      'Included: Luggage transportation to/from cabin',
      'Not included: Arrival and departure',
      'Not included: Beverages, unless specified',
      'Not included: Meals and drinks in specialty restaurants',
      'Not included: Personal expenses aboard',
      'Not included: Shore excursions',
      'Not included: Medical service',
      'Not included: Travel insurances',
      'Not included: Recommended gratuities',
      'Not included: Visa, if necessary (extra charges possible)'
    ],
    additionalInfo: [
      'Ship: Norwegian Epic | Cruise line: Norwegian Cruise Line',
      'Travel time: 10.5.26 - 17.5.26',
      'Passport required for travel'
    ],
    pricingAccommodation: [
      'Inside cabin: EUR 720',
      'Outside cabin: -',
      'Balcony cabin: EUR 1,070',
      'Mini Suite: EUR 1,170',
      'Suite: EUR 4,235',
      'Starting from EUR 720 p.p. double occupancy'
    ]
  },
  {
    id: 'msc-lirica-ancona-eastern-med-2026',
    departureHub: 'msc-cruises',
    cardTitle: 'MSC Lirica - Eastern Mediterranean',
    cardSubtitle: 'From/To Ancona',
    season: 'April 2026 - December 2026',
    nightsText: '7 Nights',
    fromPrice: 0,
    coverImage: '/images/cruises/msc-lirica/msc-lirica-5.webp',
    coverPosition: 'center 52%',
    gallery: [
      '/images/cruises/msc-lirica/msc-lirica-5.webp',
      '/images/cruises/msc-lirica/msc-lirica-4.webp',
      '/images/cruises/msc-lirica/msc-lirica-3.webp',
      '/images/cruises/msc-lirica/msc-lirica-1.webp',
      '/images/cruises/msc-lirica/msc-lirica-2.webp'
    ],
    region: 'Europe',
    title: 'Eastern Mediterranean 8 days from/to Ancona',
    highlightText: 'On board of MSC Lirica',
    introPrimary:
      'Discover the Eastern Mediterranean from/to Ancona with calls across Italy, Montenegro, and Greece, including Kotor, Mykonos, and Syros.',
    introSecondary:
      'This 7-night MSC Lirica sailing combines full-board comfort, hotel service charge inclusion, and rich onboard entertainment.',
    itineraries: [
      {
        name: 'Cruise Itinerary',
        days: [
          'Day 1 Fri: Ancona - Italy | Departure 20:30',
          'Day 2 Sat: Venice - Italy | 07:00 - 16:00',
          'Day 3 Sun: Kotor - Montenegro | 15:00 - 20:30',
          'Day 4 Mon: Cruising Day',
          'Day 5 Tue: Mykonos - Greece | At 10:00',
          'Day 6 Wed: Mykonos - Greece | From 01:00',
          'Day 6 Wed: Syros, Kyklades - Greece | 07:00 - 16:00',
          'Day 7 Thu: Cruising Day',
          'Day 8 Fri: Ancona - Italy | Arrival 14:00'
        ],
        availableDates: '10.04.26'
      },
      {
        name: 'Cruise Itinerary 2',
        days: [
          'Day 1 Sat: Venice - Italy | Departure 16:00',
          'Day 2 Sun: Kotor - Montenegro | 15:00 - 20:30',
          'Day 3 Mon: Cruising Day',
          'Day 4 Tue: Mykonos - Greece | At 10:00',
          'Day 5 Wed: Mykonos - Greece | From 01:00',
          'Day 5 Wed: Syros, Kyklades - Greece | 07:00 - 16:00',
          'Day 6 Thu: Cruising Day',
          'Day 7 Fri: Ancona - Italy | 14:00 - 20:30',
          'Day 8 Sat: Venice - Italy | Arrival 07:00'
        ],
        availableDates: '11.04.26'
      }
    ],
    note: 'Cruise: 10.4.26 - 17.4.26 | Operator: MSC Cruises.',
    includedExcluded: [
      'Included: Cruise in the cabin category booked',
      'Included: Full board',
      'Included: Hotel Service Charge',
      'Included: Entertainment program on board',
      'Included: Use of onboard facilities (extra charges possible)',
      'Included: Port charges and taxes',
      'Included: Luggage transportation to/from cabin',
      'Not included: Arrival and departure',
      'Not included: Beverages, unless specified',
      'Not included: Meals and drinks in specialty restaurants',
      'Not included: Personal expenses aboard',
      'Not included: Shore excursions',
      'Not included: Medical service',
      'Not included: Travel insurances',
      'Not included: Visa, if necessary (extra charges possible)'
    ],
    additionalInfo: [
      'Ship: MSC Lirica | Cruise line: MSC Cruises',
      'Travel time: 10.4.26 - 17.4.26',
      'Pricing: On request'
    ],
    pricingAccommodation: [
      'Inside cabin: On request',
      'Outside cabin: On request',
      'Balcony cabin: On request',
      'Mini Suite: On request',
      'Suite: On request',
      'Price on request'
    ]
  }
]

function Cruises() {
  const [selectedPort, setSelectedPort] = useState('Any')
  const [selectedDuration, setSelectedDuration] = useState('Any')
  const [isLimassolHubOpen, setIsLimassolHubOpen] = useState(false)
  const [isPiraeusHubOpen, setIsPiraeusHubOpen] = useState(false)
  const [isBarcelonaHubOpen, setIsBarcelonaHubOpen] = useState(false)
  const [isCivitavecchiaHubOpen, setIsCivitavecchiaHubOpen] = useState(false)
  const [isGenoaHubOpen, setIsGenoaHubOpen] = useState(false)
  const [isMscCruisesHubOpen, setIsMscCruisesHubOpen] = useState(false)
  const [selectedCruiseId, setSelectedCruiseId] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)

  useEffect(() => {
    if (!selectedCruiseId) return
    const selectedCruise = cruisePackagesData.find((cruise) => cruise.id === selectedCruiseId)
    if (!selectedCruise?.gallery?.length) return

    // Preload gallery images for instant preview modal open.
    selectedCruise.gallery.forEach((src) => {
      const img = new Image()
      img.decoding = 'async'
      img.src = src
    })
  }, [selectedCruiseId])

  const departurePorts = [
    { value: 'Any', label: 'All Ports', icon: '🌍' },
    { value: 'Limassol', label: 'Limassol, Cyprus', icon: '🇨🇾' },
    { value: 'Piraeus', label: 'Piraeus, Greece', icon: '🇬🇷' },
    { value: 'Genoa', label: 'Genoa, Italy', icon: '🇮🇹' },
    { value: 'MSC Cruises', label: 'MSC Cruises', icon: '🚢' },
    { value: 'Venice', label: 'Venice, Italy', icon: '🇮🇹' },
    { value: 'Barcelona', label: 'Barcelona, Spain', icon: '🇪🇸' },
    { value: 'Civitavecchia', label: 'Civitavecchia, Italy', icon: '🇮🇹' },
    { value: 'Miami', label: 'Miami, USA', icon: '🇺🇸' }
  ]

  const durations = [
    { value: 'Any', label: 'Any Duration' },
    { value: '3-5', label: '3-5 Days' },
    { value: '6-8', label: '6-8 Days' },
    { value: '9-12', label: '9-12 Days' },
    { value: '13+', label: '13+ Days' }
  ]

  // Filter for cruises only
  const filteredCruises = travelPackages.filter(
    (pkg) => pkg.category === 'Cruises' || pkg.category === 'cruises'
  )
  const limassolCruises = cruisePackagesData.filter((cruise) => cruise.departureHub === 'limassol')
  const piraeusCruises = cruisePackagesData.filter((cruise) => cruise.departureHub === 'piraeus')
  const barcelonaCruises = cruisePackagesData.filter((cruise) => cruise.departureHub === 'barcelona')
  const civitavecchiaCruises = cruisePackagesData.filter((cruise) => cruise.departureHub === 'civitavecchia')
  const genoaCruises = cruisePackagesData.filter((cruise) => cruise.departureHub === 'genoa')
  const mscCruises = cruisePackagesData.filter((cruise) => cruise.departureHub === 'msc-cruises')
  const limassolPrices = limassolCruises.map((c) => c.fromPrice).filter((v) => typeof v === 'number' && v > 0)
  const piraeusPrices = piraeusCruises.map((c) => c.fromPrice).filter((v) => typeof v === 'number' && v > 0)
  const barcelonaPrices = barcelonaCruises.map((c) => c.fromPrice).filter((v) => typeof v === 'number' && v > 0)
  const civitavecchiaPrices = civitavecchiaCruises.map((c) => c.fromPrice).filter((v) => typeof v === 'number' && v > 0)
  const genoaPrices = genoaCruises.map((c) => c.fromPrice).filter((v) => typeof v === 'number' && v > 0)
  const mscCruisesPrices = mscCruises.map((c) => c.fromPrice).filter((v) => typeof v === 'number' && v > 0)

  const previewModal = previewImage ? (
    <div
      className="cruise-image-preview-backdrop"
      role="dialog"
      aria-modal="true"
      onClick={() => setPreviewImage(null)}
    >
      <div className="cruise-image-preview-modal" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="cruise-image-preview-close"
          aria-label="Close image preview"
          onClick={() => setPreviewImage(null)}
        >
          ×
        </button>
        <img src={previewImage.src} alt={previewImage.alt} loading="eager" decoding="sync" />
      </div>
    </div>
  ) : null
  const toggleCruiseDetails = (cruiseId) => {
    setSelectedCruiseId((prev) => (prev === cruiseId ? null : cruiseId))
  }

  const toggleLimassolHub = () => {
    setIsLimassolHubOpen((prev) => {
      const next = !prev
      if (!next) {
        setSelectedCruiseId(null)
      }
      return next
    })
  }

  const getIncludedItems = (cruise) => {
    if (!Array.isArray(cruise?.includedExcluded)) return []
    const included = cruise.includedExcluded
      .filter((item) => /^included:/i.test(item))
      .map((item) => item.replace(/^included:\s*/i, '').trim())
    return included.length ? included : cruise.includedExcluded
  }

  const getExcludedItems = (cruise) => {
    if (!Array.isArray(cruise?.includedExcluded)) return []
    return cruise.includedExcluded
      .filter((item) => /^not included:/i.test(item))
      .map((item) => item.replace(/^not included:\s*/i, '').trim())
  }

  return (
    <div className="cruises-page">
      <SEO
        title="Cruise Holidays | Honeywell Travel"
        description="Browse luxury cruise holiday packages and discover top cruise destinations with Honeywell Travel."
        keywords="cruise holidays cyprus, luxury cruises, cruise packages"
        url="https://www.honeywelltravel.com.cy/cruises"
      />
      {/* Hero Section */}
      <div className="cruises-hero">
        <div className="cruises-hero-overlay"></div>
        <div className="cruises-hero-content">
          <h1>Discover the World by Sea</h1>
          <p>Set sail on an unforgettable journey across the world's most beautiful waters</p>
        </div>
        <div className="cruises-hero-waves">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.1)"/>
          </svg>
        </div>
      </div>

      <RevealOnScroll direction="up">
      <div className="cruises-container">
        {/* Filters Section */}
        <section className="cruises-filters-section">
          <h2 className="section-title">Find Your Perfect Cruise</h2>
          <div className="cruises-filters">
            <div className="filter-group">
              <label htmlFor="port-filter">
                <span className="filter-icon">⚓</span>
                Departure Port
              </label>
              <select 
                id="port-filter"
                value={selectedPort}
                onChange={(e) => setSelectedPort(e.target.value)}
                className="filter-select"
              >
                {departurePorts.map((port) => (
                  <option key={port.value} value={port.value}>
                    {port.icon} {port.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="duration-filter">
                <span className="filter-icon">⏱️</span>
                Duration
              </label>
              <select 
                id="duration-filter"
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="filter-select"
              >
                {durations.map((duration) => (
                  <option key={duration.value} value={duration.value}>
                    {duration.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className="cruise-packages-overview">
          <h2 className="section-title">Cruises by Departure Port</h2>
          <article className={`cruise-hub-card ${isLimassolHubOpen ? 'is-open' : ''}`}>
            <div
              className="cruise-hub-cover"
              style={{
                backgroundImage: 'url("/images/cruises/marella-cruise/marella-1.webp")'
              }}
            />
            <div className="cruise-hub-content">
              <h3>Cruises from/to Limassol</h3>
              <p>Browse all available Limassol departures and arrivals in one place.</p>
              <div className="cruise-package-card-meta">
                <span>{limassolCruises.length} Cruise Packages</span>
                <strong>{limassolPrices.length ? `From EUR ${Math.min(...limassolPrices)}` : 'Price On Request'}</strong>
              </div>
              <button type="button" className="cruise-package-card-btn" onClick={toggleLimassolHub}>
                {isLimassolHubOpen ? 'Hide Cruises' : 'View Cruises'}
              </button>
            </div>

            {isLimassolHubOpen ? (
              <div className="cruise-packages-grid cruise-packages-grid--nested">
                {limassolCruises.map((cruise) => (
                  <article
                    key={cruise.id}
                    className={`cruise-package-card ${selectedCruiseId === cruise.id ? 'is-active' : ''}`}
                  >
                    <div
                      className="cruise-package-card-image"
                      style={{
                        backgroundImage: `url("${cruise.coverImage}")`,
                        backgroundPosition: cruise.coverPosition || 'center center'
                      }}
                      onClick={() => toggleCruiseDetails(cruise.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault()
                          toggleCruiseDetails(cruise.id)
                        }
                      }}
                    />
                    <div className="cruise-package-card-content">
                      <h3>{cruise.cardTitle}</h3>
                      <p>{cruise.cardSubtitle}</p>
                      <div className="cruise-package-card-meta">
                        <span>{cruise.nightsText}</span>
                        <span>{cruise.season}</span>
                        <strong>{typeof cruise.fromPrice === 'number' && cruise.fromPrice > 0 ? `From EUR ${cruise.fromPrice}` : 'Price On Request'}</strong>
                      </div>
                      <button type="button" className="cruise-package-card-btn" onClick={() => toggleCruiseDetails(cruise.id)}>
                        {selectedCruiseId === cruise.id ? 'Hide Cruise Details' : 'View Cruise Details'}
                      </button>
                    </div>

                    {selectedCruiseId === cruise.id ? (
                      <div className="cruise-package-expanded">
                        <div className="cruise-featured-head">
                          <span className="cruise-featured-region">Region: {cruise.region}</span>
                          <h2>{cruise.title}</h2>
                          <p className="cruise-featured-subtitle">{cruise.season}</p>
                          <p className="cruise-featured-highlight">{cruise.highlightText}</p>
                          <p className="cruise-featured-intro">
                            {cruise.introPrimary}
                          </p>
                          <p className="cruise-featured-intro">
                            {cruise.introSecondary}
                          </p>
                          <div className="cruise-featured-price">
                            <span>{cruise.nightsText} from</span>
                            <strong>{typeof cruise.fromPrice === 'number' && cruise.fromPrice > 0 ? `EUR ${cruise.fromPrice}` : 'On Request'}</strong>
                            <span>per person</span>
                          </div>
                        </div>

                        <div className="cruise-featured-gallery">
                          {cruise.gallery.map((image, index) => (
                            <button
                              type="button"
                              key={image}
                              className="cruise-gallery-image-btn"
                              onClick={() => setPreviewImage({ src: image, alt: `${cruise.cardTitle} image ${index + 1}` })}
                            >
                              <img src={image} alt={`${cruise.cardTitle} image ${index + 1}`} loading="eager" decoding="async" />
                            </button>
                          ))}
                        </div>

                        <div className="cruise-itineraries-grid">
                          {cruise.itineraries.map((itinerary, itineraryIndex) => (
                            <article className="cruise-itinerary-card" key={itinerary.name}>
                              <div className="cruise-itinerary-header">
                                <span className="cruise-itinerary-badge">Itinerary {itineraryIndex + 1}</span>
                                <h3>{itinerary.name}</h3>
                              </div>
                              <ul>
                                {itinerary.days.map((day) => (
                                  <li key={day}>{day}</li>
                                ))}
                              </ul>
                              <div className="cruise-itinerary-dates">
                                <strong>Available Dates</strong>
                                <div className="cruise-itinerary-dates-list">
                                  {itinerary.availableDates.split(' / ').map((date) => (
                                    <span key={date} className="cruise-itinerary-date-chip">{date}</span>
                                  ))}
                                </div>
                              </div>
                            </article>
                          ))}
                        </div>

                        <p className="cruise-featured-note">
                          {cruise.note}
                        </p>

                        <div className="cruise-details-grid">
                          <div className="cruise-details-card">
                            <h3>What&apos;s Included?</h3>
                            <ul>
                              {getIncludedItems(cruise).map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          {getExcludedItems(cruise).length ? (
                            <div className="cruise-details-card">
                              <h3>What&apos;s Excluded?</h3>
                              <ul>
                                {getExcludedItems(cruise).map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ) : null}

                          <div className="cruise-details-card">
                            <h3>Additional Information</h3>
                            <ul>
                              {cruise.additionalInfo.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="cruise-details-card">
                            <h3>Pricing / Accommodation</h3>
                            <ul>
                              {cruise.pricingAccommodation.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            ) : null}
          </article>

          <article className={`cruise-hub-card ${isPiraeusHubOpen ? 'is-open' : ''}`}>
            <div
              className="cruise-hub-cover"
              style={{
                backgroundImage: 'url("/images/cruises/cover-for-cruises/peiraus-port.webp")',
                backgroundPosition: 'center 72%',
                backgroundSize: '92% auto',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <div className="cruise-hub-content">
              <h3>Cruises from/to Piraeus</h3>
              <p>New departures from Piraeus will be listed here.</p>
              <div className="cruise-package-card-meta">
                <span>{piraeusCruises.length} Cruise Packages</span>
                <strong>{piraeusPrices.length ? `From EUR ${Math.min(...piraeusPrices)}` : (piraeusCruises.length ? 'Price On Request' : 'Coming Soon')}</strong>
              </div>
              <button type="button" className="cruise-package-card-btn" onClick={() => setIsPiraeusHubOpen((prev) => !prev)}>
                {isPiraeusHubOpen ? 'Hide Cruises' : 'View Cruises'}
              </button>
            </div>

            {isPiraeusHubOpen ? (
              <div className="cruise-packages-grid cruise-packages-grid--nested">
                {piraeusCruises.length === 0 ? (
                  <div className="cruise-hub-empty">
                    Piraeus cruise packages will be added here next.
                  </div>
                ) : (
                  piraeusCruises.map((cruise) => (
                    <article
                      key={cruise.id}
                      className={`cruise-package-card ${selectedCruiseId === cruise.id ? 'is-active' : ''}`}
                    >
                      <div
                        className="cruise-package-card-image"
                        style={{
                          backgroundImage: `url("${cruise.coverImage}")`,
                          backgroundPosition: cruise.coverPosition || 'center center'
                        }}
                        onClick={() => toggleCruiseDetails(cruise.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault()
                            toggleCruiseDetails(cruise.id)
                          }
                        }}
                      />
                      <div className="cruise-package-card-content">
                        <h3>{cruise.cardTitle}</h3>
                        <p>{cruise.cardSubtitle}</p>
                        <div className="cruise-package-card-meta">
                          <span>{cruise.nightsText}</span>
                          <span>{cruise.season}</span>
                          <strong>{typeof cruise.fromPrice === 'number' && cruise.fromPrice > 0 ? `From EUR ${cruise.fromPrice}` : 'Price On Request'}</strong>
                        </div>
                        <button type="button" className="cruise-package-card-btn" onClick={() => toggleCruiseDetails(cruise.id)}>
                          {selectedCruiseId === cruise.id ? 'Hide Cruise Details' : 'View Cruise Details'}
                        </button>
                      </div>

                      {selectedCruiseId === cruise.id ? (
                        <div className="cruise-package-expanded">
                          <div className="cruise-featured-head">
                            <span className="cruise-featured-region">Region: {cruise.region}</span>
                            <h2>{cruise.title}</h2>
                            <p className="cruise-featured-subtitle">{cruise.season}</p>
                            <p className="cruise-featured-highlight">{cruise.highlightText}</p>
                            <p className="cruise-featured-intro">
                              {cruise.introPrimary}
                            </p>
                            <p className="cruise-featured-intro">
                              {cruise.introSecondary}
                            </p>
                            <div className="cruise-featured-price">
                              <span>{cruise.nightsText} from</span>
                              <strong>{typeof cruise.fromPrice === 'number' && cruise.fromPrice > 0 ? `EUR ${cruise.fromPrice}` : 'On Request'}</strong>
                              <span>per person</span>
                            </div>
                          </div>

                          <div className="cruise-featured-gallery">
                            {cruise.gallery.map((image, index) => (
                              <button
                                type="button"
                                key={image}
                                className="cruise-gallery-image-btn"
                                onClick={() => setPreviewImage({ src: image, alt: `${cruise.cardTitle} image ${index + 1}` })}
                              >
                                <img src={image} alt={`${cruise.cardTitle} image ${index + 1}`} loading="eager" decoding="async" />
                              </button>
                            ))}
                          </div>

                          <div className="cruise-itineraries-grid">
                            {cruise.itineraries.map((itinerary, itineraryIndex) => (
                              <article className="cruise-itinerary-card" key={itinerary.name}>
                                <div className="cruise-itinerary-header">
                                  <span className="cruise-itinerary-badge">Itinerary {itineraryIndex + 1}</span>
                                  <h3>{itinerary.name}</h3>
                                </div>
                                <ul>
                                  {itinerary.days.map((day) => (
                                    <li key={day}>{day}</li>
                                  ))}
                                </ul>
                                <div className="cruise-itinerary-dates">
                                  <strong>Available Dates</strong>
                                  <div className="cruise-itinerary-dates-list">
                                    {itinerary.availableDates.split(' / ').map((date) => (
                                      <span key={date} className="cruise-itinerary-date-chip">{date}</span>
                                    ))}
                                  </div>
                                </div>
                              </article>
                            ))}
                          </div>

                          <p className="cruise-featured-note">
                            {cruise.note}
                          </p>

                          <div className="cruise-details-grid">
                          <div className="cruise-details-card">
                            <h3>What&apos;s Included?</h3>
                            <ul>
                              {getIncludedItems(cruise).map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          {getExcludedItems(cruise).length ? (
                            <div className="cruise-details-card">
                              <h3>What&apos;s Excluded?</h3>
                              <ul>
                                {getExcludedItems(cruise).map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ) : null}

                            <div className="cruise-details-card">
                              <h3>Additional Information</h3>
                              <ul>
                                {cruise.additionalInfo.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="cruise-details-card">
                              <h3>Pricing / Accommodation</h3>
                              <ul>
                                {cruise.pricingAccommodation.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </article>
                  ))
                )}
              </div>
            ) : null}
          </article>

          <article className={`cruise-hub-card ${isBarcelonaHubOpen ? 'is-open' : ''}`}>
            <div
              className="cruise-hub-cover"
              style={{
                backgroundImage: 'url("/images/cruises/cover-for-cruises/cruise-cover-barcelona.webp")',
                backgroundPosition: 'center 68%'
              }}
            />
            <div className="cruise-hub-content">
              <h3>Cruises from/to Barcelona</h3>
              <p>New departures from Barcelona will be listed here.</p>
              <div className="cruise-package-card-meta">
                <span>{barcelonaCruises.length} Cruise Packages</span>
                <strong>{barcelonaPrices.length ? `From EUR ${Math.min(...barcelonaPrices)}` : (barcelonaCruises.length ? 'Price On Request' : 'Coming Soon')}</strong>
              </div>
              <button type="button" className="cruise-package-card-btn" onClick={() => setIsBarcelonaHubOpen((prev) => !prev)}>
                {isBarcelonaHubOpen ? 'Hide Cruises' : 'View Cruises'}
              </button>
            </div>

            {isBarcelonaHubOpen ? (
              <div className="cruise-packages-grid cruise-packages-grid--nested cruise-packages-grid--barcelona">
                {barcelonaCruises.length === 0 ? (
                  <div className="cruise-hub-empty">
                    Barcelona cruise packages will be added here next.
                  </div>
                ) : (
                  barcelonaCruises.map((cruise) => (
                    <article
                      key={cruise.id}
                      className={`cruise-package-card ${selectedCruiseId === cruise.id ? 'is-active' : ''}`}
                    >
                      <div
                        className="cruise-package-card-image"
                        style={{
                          backgroundImage: `url("${cruise.coverImage}")`,
                          backgroundPosition: cruise.coverPosition || 'center center'
                        }}
                        onClick={() => toggleCruiseDetails(cruise.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault()
                            toggleCruiseDetails(cruise.id)
                          }
                        }}
                      />
                      <div className="cruise-package-card-content">
                        <h3>{cruise.cardTitle}</h3>
                        <p>{cruise.cardSubtitle}</p>
                        <div className="cruise-package-card-meta">
                          <span>{cruise.nightsText}</span>
                          <span>{cruise.season}</span>
                          <strong>{typeof cruise.fromPrice === 'number' && cruise.fromPrice > 0 ? `From EUR ${cruise.fromPrice}` : 'Price On Request'}</strong>
                        </div>
                        <button type="button" className="cruise-package-card-btn" onClick={() => toggleCruiseDetails(cruise.id)}>
                          {selectedCruiseId === cruise.id ? 'Hide Cruise Details' : 'View Cruise Details'}
                        </button>
                      </div>

                      {selectedCruiseId === cruise.id ? (
                        <div className="cruise-package-expanded">
                          <div className="cruise-featured-head">
                            <span className="cruise-featured-region">Region: {cruise.region}</span>
                            <h2>{cruise.title}</h2>
                            <p className="cruise-featured-subtitle">{cruise.season}</p>
                            <p className="cruise-featured-highlight">{cruise.highlightText}</p>
                            <p className="cruise-featured-intro">
                              {cruise.introPrimary}
                            </p>
                            <p className="cruise-featured-intro">
                              {cruise.introSecondary}
                            </p>
                            <div className="cruise-featured-price">
                              <span>{cruise.nightsText} from</span>
                              <strong>{typeof cruise.fromPrice === 'number' && cruise.fromPrice > 0 ? `EUR ${cruise.fromPrice}` : 'On Request'}</strong>
                              <span>per person</span>
                            </div>
                          </div>

                          <div className="cruise-featured-gallery">
                            {cruise.gallery.map((image, index) => (
                              <button
                                type="button"
                                key={image}
                                className="cruise-gallery-image-btn"
                                onClick={() => setPreviewImage({ src: image, alt: `${cruise.cardTitle} image ${index + 1}` })}
                              >
                                <img src={image} alt={`${cruise.cardTitle} image ${index + 1}`} loading="eager" decoding="async" />
                              </button>
                            ))}
                          </div>

                          <div className="cruise-itineraries-grid">
                            {cruise.itineraries.map((itinerary, itineraryIndex) => (
                              <article className="cruise-itinerary-card" key={itinerary.name}>
                                <div className="cruise-itinerary-header">
                                  <span className="cruise-itinerary-badge">Itinerary {itineraryIndex + 1}</span>
                                  <h3>{itinerary.name}</h3>
                                </div>
                                <ul>
                                  {itinerary.days.map((day) => (
                                    <li key={day}>{day}</li>
                                  ))}
                                </ul>
                                <div className="cruise-itinerary-dates">
                                  <strong>Available Dates</strong>
                                  <div className="cruise-itinerary-dates-list">
                                    {itinerary.availableDates.split(' / ').map((date) => (
                                      <span key={date} className="cruise-itinerary-date-chip">{date}</span>
                                    ))}
                                  </div>
                                </div>
                              </article>
                            ))}
                          </div>

                          <p className="cruise-featured-note">
                            {cruise.note}
                          </p>

                          <div className="cruise-details-grid">
                            <div className="cruise-details-card">
                              <h3>What&apos;s Included?</h3>
                              <ul>
                                {getIncludedItems(cruise).map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            {getExcludedItems(cruise).length ? (
                              <div className="cruise-details-card">
                                <h3>What&apos;s Excluded?</h3>
                                <ul>
                                  {getExcludedItems(cruise).map((item) => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}

                            <div className="cruise-details-card">
                              <h3>Additional Information</h3>
                              <ul>
                                {cruise.additionalInfo.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="cruise-details-card">
                              <h3>Pricing / Accommodation</h3>
                              <ul>
                                {cruise.pricingAccommodation.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </article>
                  ))
                )}
              </div>
            ) : null}
          </article>

          <article className={`cruise-hub-card ${isCivitavecchiaHubOpen ? 'is-open' : ''}`}>
            <div
              className="cruise-hub-cover"
              style={{
                backgroundImage: 'url("/images/cruises/cover-for-cruises/rome-civita-port.webp")',
                backgroundPosition: 'center 52%'
              }}
            />
            <div className="cruise-hub-content">
              <h3>Cruises from/to Civitavecchia</h3>
              <p>New departures from Civitavecchia, Rome will be listed here.</p>
              <div className="cruise-package-card-meta">
                <span>{civitavecchiaCruises.length} Cruise Packages</span>
                <strong>{civitavecchiaPrices.length ? `From EUR ${Math.min(...civitavecchiaPrices)}` : (civitavecchiaCruises.length ? 'Price On Request' : 'Coming Soon')}</strong>
              </div>
              <button type="button" className="cruise-package-card-btn" onClick={() => setIsCivitavecchiaHubOpen((prev) => !prev)}>
                {isCivitavecchiaHubOpen ? 'Hide Cruises' : 'View Cruises'}
              </button>
            </div>

            {isCivitavecchiaHubOpen ? (
              <div className="cruise-packages-grid cruise-packages-grid--nested cruise-packages-grid--barcelona">
                {civitavecchiaCruises.length === 0 ? (
                  <div className="cruise-hub-empty">
                    Civitavecchia cruise packages will be added here next.
                  </div>
                ) : (
                  civitavecchiaCruises.map((cruise) => (
                    <article
                      key={cruise.id}
                      className={`cruise-package-card ${selectedCruiseId === cruise.id ? 'is-active' : ''}`}
                    >
                      <div
                        className="cruise-package-card-image"
                        style={{
                          backgroundImage: `url("${cruise.coverImage}")`,
                          backgroundPosition: cruise.coverPosition || 'center center'
                        }}
                        onClick={() => toggleCruiseDetails(cruise.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault()
                            toggleCruiseDetails(cruise.id)
                          }
                        }}
                      />
                      <div className="cruise-package-card-content">
                        <h3>{cruise.cardTitle}</h3>
                        <p>{cruise.cardSubtitle}</p>
                        <div className="cruise-package-card-meta">
                          <span>{cruise.nightsText}</span>
                          <span>{cruise.season}</span>
                          <strong>{typeof cruise.fromPrice === 'number' && cruise.fromPrice > 0 ? `From EUR ${cruise.fromPrice}` : 'Price On Request'}</strong>
                        </div>
                        <button type="button" className="cruise-package-card-btn" onClick={() => toggleCruiseDetails(cruise.id)}>
                          {selectedCruiseId === cruise.id ? 'Hide Cruise Details' : 'View Cruise Details'}
                        </button>
                      </div>

                      {selectedCruiseId === cruise.id ? (
                        <div className="cruise-package-expanded">
                          <div className="cruise-featured-head">
                            <span className="cruise-featured-region">Region: {cruise.region}</span>
                            <h2>{cruise.title}</h2>
                            <p className="cruise-featured-subtitle">{cruise.season}</p>
                            <p className="cruise-featured-highlight">{cruise.highlightText}</p>
                            <p className="cruise-featured-intro">
                              {cruise.introPrimary}
                            </p>
                            <p className="cruise-featured-intro">
                              {cruise.introSecondary}
                            </p>
                            <div className="cruise-featured-price">
                              <span>{cruise.nightsText} from</span>
                              <strong>{typeof cruise.fromPrice === 'number' && cruise.fromPrice > 0 ? `EUR ${cruise.fromPrice}` : 'On Request'}</strong>
                              <span>per person</span>
                            </div>
                          </div>

                          <div className="cruise-featured-gallery">
                            {cruise.gallery.map((image, index) => (
                              <button
                                type="button"
                                key={image}
                                className="cruise-gallery-image-btn"
                                onClick={() => setPreviewImage({ src: image, alt: `${cruise.cardTitle} image ${index + 1}` })}
                              >
                                <img src={image} alt={`${cruise.cardTitle} image ${index + 1}`} loading="eager" decoding="async" />
                              </button>
                            ))}
                          </div>

                          <div className="cruise-itineraries-grid">
                            {cruise.itineraries.map((itinerary, itineraryIndex) => (
                              <article className="cruise-itinerary-card" key={itinerary.name}>
                                <div className="cruise-itinerary-header">
                                  <span className="cruise-itinerary-badge">Itinerary {itineraryIndex + 1}</span>
                                  <h3>{itinerary.name}</h3>
                                </div>
                                <ul>
                                  {itinerary.days.map((day) => (
                                    <li key={day}>{day}</li>
                                  ))}
                                </ul>
                                <div className="cruise-itinerary-dates">
                                  <strong>Available Dates</strong>
                                  <div className="cruise-itinerary-dates-list">
                                    {itinerary.availableDates.split(' / ').map((date) => (
                                      <span key={date} className="cruise-itinerary-date-chip">{date}</span>
                                    ))}
                                  </div>
                                </div>
                              </article>
                            ))}
                          </div>

                          <p className="cruise-featured-note">
                            {cruise.note}
                          </p>

                          <div className="cruise-details-grid">
                            <div className="cruise-details-card">
                              <h3>What&apos;s Included?</h3>
                              <ul>
                                {getIncludedItems(cruise).map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            {getExcludedItems(cruise).length ? (
                              <div className="cruise-details-card">
                                <h3>What&apos;s Excluded?</h3>
                                <ul>
                                  {getExcludedItems(cruise).map((item) => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}

                            <div className="cruise-details-card">
                              <h3>Additional Information</h3>
                              <ul>
                                {cruise.additionalInfo.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="cruise-details-card">
                              <h3>Pricing / Accommodation</h3>
                              <ul>
                                {cruise.pricingAccommodation.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </article>
                  ))
                )}
              </div>
            ) : null}
          </article>

          <article className={`cruise-hub-card ${isGenoaHubOpen ? 'is-open' : ''}`}>
            <div
              className="cruise-hub-cover"
              style={{
                backgroundImage: 'url("/images/cruises/cover-for-cruises/genoa-port-cruise.webp")',
                backgroundPosition: 'center 46%'
              }}
            />
            <div className="cruise-hub-content">
              <h3>Cruises from/to Genoa</h3>
              <p>New departures from Genoa will be listed here.</p>
              <div className="cruise-package-card-meta">
                <span>{genoaCruises.length} Cruise Packages</span>
                <strong>{genoaPrices.length ? `From EUR ${Math.min(...genoaPrices)}` : (genoaCruises.length ? 'Price On Request' : 'Coming Soon')}</strong>
              </div>
              <button type="button" className="cruise-package-card-btn" onClick={() => setIsGenoaHubOpen((prev) => !prev)}>
                {isGenoaHubOpen ? 'Hide Cruises' : 'View Cruises'}
              </button>
            </div>

            {isGenoaHubOpen ? (
              <div className="cruise-packages-grid cruise-packages-grid--nested cruise-packages-grid--barcelona">
                {genoaCruises.length === 0 ? (
                  <div className="cruise-hub-empty">
                    Genoa cruise packages will be added here next.
                  </div>
                ) : (
                  genoaCruises.map((cruise) => (
                    <article
                      key={cruise.id}
                      className={`cruise-package-card ${selectedCruiseId === cruise.id ? 'is-active' : ''}`}
                    >
                      <div
                        className="cruise-package-card-image"
                        style={{
                          backgroundImage: `url("${cruise.coverImage}")`,
                          backgroundPosition: cruise.coverPosition || 'center center'
                        }}
                        onClick={() => toggleCruiseDetails(cruise.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault()
                            toggleCruiseDetails(cruise.id)
                          }
                        }}
                      />
                      <div className="cruise-package-card-content">
                        <h3>{cruise.cardTitle}</h3>
                        <p>{cruise.cardSubtitle}</p>
                        <div className="cruise-package-card-meta">
                          <span>{cruise.nightsText}</span>
                          <span>{cruise.season}</span>
                          <strong>{typeof cruise.fromPrice === 'number' && cruise.fromPrice > 0 ? `From EUR ${cruise.fromPrice}` : 'Price On Request'}</strong>
                        </div>
                        <button type="button" className="cruise-package-card-btn" onClick={() => toggleCruiseDetails(cruise.id)}>
                          {selectedCruiseId === cruise.id ? 'Hide Cruise Details' : 'View Cruise Details'}
                        </button>
                      </div>

                      {selectedCruiseId === cruise.id ? (
                        <div className="cruise-package-expanded">
                          <div className="cruise-featured-head">
                            <span className="cruise-featured-region">Region: {cruise.region}</span>
                            <h2>{cruise.title}</h2>
                            <p className="cruise-featured-subtitle">{cruise.season}</p>
                            <p className="cruise-featured-highlight">{cruise.highlightText}</p>
                            <p className="cruise-featured-intro">
                              {cruise.introPrimary}
                            </p>
                            <p className="cruise-featured-intro">
                              {cruise.introSecondary}
                            </p>
                            <div className="cruise-featured-price">
                              <span>{cruise.nightsText} from</span>
                              <strong>{typeof cruise.fromPrice === 'number' && cruise.fromPrice > 0 ? `EUR ${cruise.fromPrice}` : 'On Request'}</strong>
                              <span>per person</span>
                            </div>
                          </div>

                          <div className="cruise-featured-gallery">
                            {cruise.gallery.map((image, index) => (
                              <button
                                type="button"
                                key={image}
                                className="cruise-gallery-image-btn"
                                onClick={() => setPreviewImage({ src: image, alt: `${cruise.cardTitle} image ${index + 1}` })}
                              >
                                <img src={image} alt={`${cruise.cardTitle} image ${index + 1}`} loading="eager" decoding="async" />
                              </button>
                            ))}
                          </div>

                          <div className="cruise-itineraries-grid">
                            {cruise.itineraries.map((itinerary, itineraryIndex) => (
                              <article className="cruise-itinerary-card" key={itinerary.name}>
                                <div className="cruise-itinerary-header">
                                  <span className="cruise-itinerary-badge">Itinerary {itineraryIndex + 1}</span>
                                  <h3>{itinerary.name}</h3>
                                </div>
                                <ul>
                                  {itinerary.days.map((day) => (
                                    <li key={day}>{day}</li>
                                  ))}
                                </ul>
                                <div className="cruise-itinerary-dates">
                                  <strong>Available Dates</strong>
                                  <div className="cruise-itinerary-dates-list">
                                    {itinerary.availableDates.split(' / ').map((date) => (
                                      <span key={date} className="cruise-itinerary-date-chip">{date}</span>
                                    ))}
                                  </div>
                                </div>
                              </article>
                            ))}
                          </div>

                          <p className="cruise-featured-note">
                            {cruise.note}
                          </p>

                          <div className="cruise-details-grid">
                            <div className="cruise-details-card">
                              <h3>What&apos;s Included?</h3>
                              <ul>
                                {getIncludedItems(cruise).map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            {getExcludedItems(cruise).length ? (
                              <div className="cruise-details-card">
                                <h3>What&apos;s Excluded?</h3>
                                <ul>
                                  {getExcludedItems(cruise).map((item) => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}

                            <div className="cruise-details-card">
                              <h3>Additional Information</h3>
                              <ul>
                                {cruise.additionalInfo.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="cruise-details-card">
                              <h3>Pricing / Accommodation</h3>
                              <ul>
                                {cruise.pricingAccommodation.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </article>
                  ))
                )}
              </div>
            ) : null}
          </article>

          <article className={`cruise-hub-card ${isMscCruisesHubOpen ? 'is-open' : ''}`}>
            <div
              className="cruise-hub-cover"
              style={{
                backgroundImage: 'url("/images/cruises/cover-for-cruises/msc-cruises-cover.webp")',
                backgroundPosition: 'center center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <div className="cruise-hub-content">
              <h3>MSC Cruises</h3>
              <p>MSC cruise packages will be listed here.</p>
              <div className="cruise-package-card-meta">
                <span>{mscCruises.length} Cruise Packages</span>
                <strong>{mscCruisesPrices.length ? `From EUR ${Math.min(...mscCruisesPrices)}` : (mscCruises.length ? 'Price On Request' : 'Coming Soon')}</strong>
              </div>
              <button type="button" className="cruise-package-card-btn" onClick={() => setIsMscCruisesHubOpen((prev) => !prev)}>
                {isMscCruisesHubOpen ? 'Hide Cruises' : 'View Cruises'}
              </button>
            </div>

            {isMscCruisesHubOpen ? (
              <div className="cruise-packages-grid cruise-packages-grid--nested cruise-packages-grid--barcelona">
                {mscCruises.length === 0 ? (
                  <div className="cruise-hub-empty">
                    MSC cruise packages will be added here next.
                  </div>
                ) : (
                  mscCruises.map((cruise) => (
                    <article
                      key={cruise.id}
                      className={`cruise-package-card ${selectedCruiseId === cruise.id ? 'is-active' : ''}`}
                    >
                      <div
                        className="cruise-package-card-image"
                        style={{
                          backgroundImage: `url("${cruise.coverImage}")`,
                          backgroundPosition: cruise.coverPosition || 'center center'
                        }}
                        onClick={() => toggleCruiseDetails(cruise.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault()
                            toggleCruiseDetails(cruise.id)
                          }
                        }}
                      />
                      <div className="cruise-package-card-content">
                        <h3>{cruise.cardTitle}</h3>
                        <p>{cruise.cardSubtitle}</p>
                        <div className="cruise-package-card-meta">
                          <span>{cruise.nightsText}</span>
                          <span>{cruise.season}</span>
                          <strong>{typeof cruise.fromPrice === 'number' && cruise.fromPrice > 0 ? `From EUR ${cruise.fromPrice}` : 'Price On Request'}</strong>
                        </div>
                        <button type="button" className="cruise-package-card-btn" onClick={() => toggleCruiseDetails(cruise.id)}>
                          {selectedCruiseId === cruise.id ? 'Hide Cruise Details' : 'View Cruise Details'}
                        </button>
                      </div>

                      {selectedCruiseId === cruise.id ? (
                        <div className="cruise-package-expanded">
                          <div className="cruise-featured-head">
                            <span className="cruise-featured-region">Region: {cruise.region}</span>
                            <h2>{cruise.title}</h2>
                            <p className="cruise-featured-subtitle">{cruise.season}</p>
                            <p className="cruise-featured-highlight">{cruise.highlightText}</p>
                            <p className="cruise-featured-intro">
                              {cruise.introPrimary}
                            </p>
                            <p className="cruise-featured-intro">
                              {cruise.introSecondary}
                            </p>
                            <div className="cruise-featured-price">
                              <span>{cruise.nightsText} from</span>
                              <strong>{typeof cruise.fromPrice === 'number' && cruise.fromPrice > 0 ? `EUR ${cruise.fromPrice}` : 'On Request'}</strong>
                              <span>per person</span>
                            </div>
                          </div>

                          <div className="cruise-featured-gallery">
                            {cruise.gallery.map((image, index) => (
                              <button
                                type="button"
                                key={image}
                                className="cruise-gallery-image-btn"
                                onClick={() => setPreviewImage({ src: image, alt: `${cruise.cardTitle} image ${index + 1}` })}
                              >
                                <img src={image} alt={`${cruise.cardTitle} image ${index + 1}`} loading="eager" decoding="async" />
                              </button>
                            ))}
                          </div>

                          <div className="cruise-itineraries-grid">
                            {cruise.itineraries.map((itinerary, itineraryIndex) => (
                              <article className="cruise-itinerary-card" key={itinerary.name}>
                                <div className="cruise-itinerary-header">
                                  <span className="cruise-itinerary-badge">Itinerary {itineraryIndex + 1}</span>
                                  <h3>{itinerary.name}</h3>
                                </div>
                                <ul>
                                  {itinerary.days.map((day) => (
                                    <li key={day}>{day}</li>
                                  ))}
                                </ul>
                                <div className="cruise-itinerary-dates">
                                  <strong>Available Dates</strong>
                                  <div className="cruise-itinerary-dates-list">
                                    {itinerary.availableDates.split(' / ').map((date) => (
                                      <span key={date} className="cruise-itinerary-date-chip">{date}</span>
                                    ))}
                                  </div>
                                </div>
                              </article>
                            ))}
                          </div>

                          <p className="cruise-featured-note">
                            {cruise.note}
                          </p>

                          <div className="cruise-details-grid">
                            <div className="cruise-details-card">
                              <h3>What&apos;s Included?</h3>
                              <ul>
                                {getIncludedItems(cruise).map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            {getExcludedItems(cruise).length ? (
                              <div className="cruise-details-card">
                                <h3>What&apos;s Excluded?</h3>
                                <ul>
                                  {getExcludedItems(cruise).map((item) => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}

                            <div className="cruise-details-card">
                              <h3>Additional Information</h3>
                              <ul>
                                {cruise.additionalInfo.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="cruise-details-card">
                              <h3>Pricing / Accommodation</h3>
                              <ul>
                                {cruise.pricingAccommodation.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </article>
                  ))
                )}
              </div>
            ) : null}
          </article>
        </section>

        {previewModal ? createPortal(previewModal, document.body) : null}

        {/* Why Choose Cruises Section */}
        <section className="cruises-benefits">
          <h2 className="section-title">Why Choose a Cruise?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🏝️</div>
              <h3>Multiple Destinations</h3>
              <p>Visit several stunning destinations in one trip without the hassle of packing and unpacking</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🍽️</div>
              <h3>All-Inclusive Dining</h3>
              <p>Enjoy world-class cuisine with unlimited dining options included in your cruise package</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎭</div>
              <h3>Entertainment & Activities</h3>
              <p>From Broadway shows to spa treatments, enjoy endless entertainment and relaxation</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌊</div>
              <h3>Ocean Views</h3>
              <p>Wake up to breathtaking ocean views and stunning sunsets from your private balcony</p>
            </div>
          </div>
        </section>

        {/* Cruise Packages Grid */}
        <section className="cruises-results">
          {filteredCruises.length > 0 ? (
            <div className="results-header">
              <h2 className="results-title">
                {filteredCruises.length} {filteredCruises.length === 1 ? 'Cruise' : 'Cruises'} Available
              </h2>
              {(selectedPort !== 'Any' || selectedDuration !== 'Any') && (
                <div className="active-filters">
                  {selectedPort !== 'Any' && (
                    <span className="active-filter-tag">
                      {departurePorts.find(p => p.value === selectedPort)?.label}
                      <button 
                        onClick={() => setSelectedPort('Any')}
                        className="remove-filter"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {selectedDuration !== 'Any' && (
                    <span className="active-filter-tag">
                      {durations.find(d => d.value === selectedDuration)?.label}
                      <button 
                        onClick={() => setSelectedDuration('Any')}
                        className="remove-filter"
                      >
                        ×
                      </button>
                    </span>
                  )}
                </div>
              )}
            </div>
          ) : null}

          {filteredCruises.length > 0 ? (
            <div className="cruises-grid">
              {filteredCruises.map((cruise) => (
                <PackageCard key={cruise.id} package={cruise} />
              ))}
            </div>
          ) : null}
        </section>

        {/* Popular Destinations */}
        <section className="popular-destinations">
          <h2 className="section-title">Popular Cruise Destinations</h2>
          <div className="destinations-grid">
            <div className="destination-card">
              <div className="destination-icon">🏝️</div>
              <h3>Mediterranean</h3>
              <p>Explore the stunning coasts of Greece, Italy, Spain, and more</p>
            </div>
            <div className="destination-card">
              <div className="destination-icon">🌴</div>
              <h3>Caribbean</h3>
              <p>Discover tropical paradise with crystal-clear waters and white sand beaches</p>
            </div>
            <div className="destination-card">
              <div className="destination-icon">🏔️</div>
              <h3>Alaska</h3>
              <p>Witness breathtaking glaciers and wildlife in America's last frontier</p>
            </div>
            <div className="destination-card">
              <div className="destination-icon">🌊</div>
              <h3>Northern Europe</h3>
              <p>Experience the beauty of Scandinavian fjords and Baltic capitals</p>
            </div>
          </div>
        </section>
      </div>
      </RevealOnScroll>
    </div>
  )
}

export default Cruises
