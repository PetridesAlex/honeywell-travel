export const flightTicketOffers = [
  {
    id: 'rhodes-5-cy',
    destination: 'Rhodes',
    destinationSlug: 'rhodes',
    title: 'ΡΟΔΟΣ 5 ημέρες',
    duration: '5 ημέρες',
    airline: 'Cyprus Airways',
    luggage: '1 αποσκευή 23kg και μία χειραποσκευή 10kg',
    departureFlight: { route: 'Λάρνακα - Ρόδος', time: '10:30 - 11:40' },
    returnFlight: { route: 'Ρόδος - Λάρνακα', time: '09:35 - 10:45' },
    pricing: [
      { dates: '06/07,13/07,20/07,27/07,31/08', price: 325 },
      { dates: '03/08,10/08,17/08,24/08', price: 345 }
    ],
    departures: [
      { departureDate: '06/07', returnDate: '10/07', price: 325 },
      { departureDate: '13/07', returnDate: '17/07', price: 325 },
      { departureDate: '20/07', returnDate: '24/07', price: 325 },
      { departureDate: '27/07', returnDate: '31/07', price: 325 },
      { departureDate: '03/08', returnDate: '07/08', price: 345 },
      { departureDate: '10/08', returnDate: '14/08', price: 345 },
      { departureDate: '17/08', returnDate: '21/08', price: 345 },
      { departureDate: '24/08', returnDate: '28/08', price: 345 },
      { departureDate: '31/08', returnDate: '04/09', price: 325 }
    ]
  },
  {
    id: 'rhodes-5-a3',
    destination: 'Rhodes',
    destinationSlug: 'rhodes',
    title: 'ΡΟΔΟΣ 5 ημέρες',
    duration: '5 ημέρες',
    airline: 'Aegean Airlines',
    luggage: '1 αποσκευή 23kg και μία χειραποσκευή 8kg',
    departureFlight: { route: 'Λάρνακα - Ρόδος', time: '06:40 - 07:40' },
    returnFlight: { route: 'Ρόδος - Λάρνακα', time: '07:40 - 08:40' },
    pricing: [
      { dates: '03/07,10/07,17/07,24/07,28/08', price: 280 },
      { dates: '31/07,07/08,14/08,21/08', price: 299 }
    ],
    departures: [
      { departureDate: '03/07', returnDate: '07/07', price: 280 },
      { departureDate: '10/07', returnDate: '14/07', price: 280 },
      { departureDate: '17/07', returnDate: '21/07', price: 280 },
      { departureDate: '24/07', returnDate: '28/07', price: 280 },
      { departureDate: '31/07', returnDate: '04/08', price: 299 },
      { departureDate: '07/08', returnDate: '11/08', price: 299 },
      { departureDate: '14/08', returnDate: '18/08', price: 299 },
      { departureDate: '21/08', returnDate: '25/08', price: 299 },
      { departureDate: '28/08', returnDate: '01/09', price: 280 }
    ]
  },
  {
    id: 'skiathos-5-cy',
    destination: 'Skiathos',
    destinationSlug: 'skiathos',
    title: 'ΣΚΙΑΘΟΣ 5 ημέρες',
    duration: '5 ημέρες',
    airline: 'Cyprus Airways',
    luggage: '1 αποσκευή 23kg και μία χειραποσκευή 10kg',
    departureFlight: { route: 'Λάρνακα - Σκιάθος', time: '13:45 - 15:45' },
    returnFlight: { route: 'Σκιάθος - Λάρνακα', time: '11:00 - 12:50' },
    pricing: [
      { dates: '30/06,07/07,14/07,21/07,28/07', price: 365 },
      { dates: '04/08,11/08,18/08,25/08', price: 375 }
    ],
    departures: [
      { departureDate: '30/06', returnDate: '04/07', price: 365, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '07/07', returnDate: '11/07', price: 365, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '14/07', returnDate: '18/07', price: 365, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '21/07', returnDate: '25/07', price: 365, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '28/07', returnDate: '01/08', price: 365, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '04/08', returnDate: '08/08', price: 375, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '11/08', returnDate: '15/08', price: 375, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '18/08', returnDate: '22/08', price: 375, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '25/08', returnDate: '29/08', price: 375, availability: 'Μόνο 6 καθίσματα!' }
    ]
  },
  {
    id: 'skiathos-8-tue-cy',
    destination: 'Skiathos',
    destinationSlug: 'skiathos',
    title: 'ΣΚΙΑΘΟΣ 8 ημέρες',
    duration: '8 ημέρες',
    airline: 'Cyprus Airways',
    note: 'Αναχωρήσεις κάθε Τρίτη με Cyprus Airways',
    luggage: '1 αποσκευή 23kg και μία χειραποσκευή 10kg',
    departureFlight: { route: 'Λάρνακα - Σκιάθος', time: '13:45 - 15:45' },
    returnFlight: { route: 'Σκιάθος - Λάρνακα', time: '11:00 - 12:50' },
    pricing: [
      { dates: '30/06,07/07,14/07,21/07,28/07', price: 365 },
      { dates: '04/08,11/08,18/08', price: 375 }
    ],
    departures: [
      { departureDate: '30/06', returnDate: '07/07', price: 365, availability: 'Διαθέσιμος' },
      { departureDate: '07/07', returnDate: '14/07', price: 365, availability: 'Διαθέσιμος' },
      { departureDate: '14/07', returnDate: '21/07', price: 365, availability: 'Διαθέσιμος' },
      { departureDate: '21/07', returnDate: '28/07', price: 365, availability: 'Διαθέσιμος' },
      { departureDate: '28/07', returnDate: '04/08', price: 365, availability: 'Διαθέσιμος' },
      { departureDate: '04/08', returnDate: '11/08', price: 375, availability: 'Διαθέσιμος' },
      { departureDate: '11/08', returnDate: '18/08', price: 375, availability: 'Διαθέσιμος' },
      { departureDate: '18/08', returnDate: '25/08', price: 375, availability: 'Διαθέσιμος' }
    ]
  },
  {
    id: 'skiathos-8-sat-cy',
    destination: 'Skiathos',
    destinationSlug: 'skiathos',
    title: 'ΣΚΙΑΘΟΣ 8 ημέρες',
    duration: '8 ημέρες',
    airline: 'Cyprus Airways',
    note: 'Αναχωρήσεις κάθε Σάββατο με Cyprus Airways',
    luggage: '1 αποσκευή 23kg και μία χειραποσκευή 10kg',
    departureFlight: { route: 'Λάρνακα - Σκιάθος', time: '13:45 - 15:45' },
    returnFlight: { route: 'Σκιάθος - Λάρνακα', time: '16:45 - 18:35' },
    pricing: [
      { dates: '04/07,11/07,18/07,25/07', price: 365 },
      { dates: '01/08,08/08,15/08,22/08', price: 375 }
    ],
    departures: [
      { departureDate: '04/07', returnDate: '11/07', price: 365, availability: 'Διαθέσιμος' },
      { departureDate: '11/07', returnDate: '18/07', price: 365, availability: 'Διαθέσιμος' },
      { departureDate: '18/07', returnDate: '25/07', price: 365, availability: 'Διαθέσιμος' },
      { departureDate: '25/07', returnDate: '01/08', price: 365, availability: 'Διαθέσιμος' },
      { departureDate: '01/08', returnDate: '08/08', price: 375, availability: 'Διαθέσιμος' },
      { departureDate: '08/08', returnDate: '15/08', price: 375, availability: 'Διαθέσιμος' },
      { departureDate: '15/08', returnDate: '22/08', price: 375, availability: 'Διαθέσιμος' },
      { departureDate: '22/08', returnDate: '29/08', price: 375, availability: 'Διαθέσιμος' }
    ]
  },
  {
    id: 'santorini-5-cy',
    destination: 'Santorini',
    destinationSlug: 'santorini',
    title: 'ΣΑΝΤΟΡΙΝΗ 5 ημέρες',
    duration: '5 ημέρες',
    airline: 'Cyprus Airways',
    luggage: '1 αποσκευή 23kg και μία χειραποσκευή 10kg',
    departureFlight: { route: 'Λάρνακα - Θήρα', time: '15:00 - 16:30' },
    returnFlight: { route: 'Θήρα - Λάρνακα', time: '14:30 - 16:00' },
    pricing: [
      { dates: '06/07,13/07,20/07,27/07,31/08', price: 355 },
      { dates: '03/08,10/08,17/08,24/08', price: 375 }
    ],
    departures: [
      { departureDate: '06/07', returnDate: '10/07', price: 355, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '13/07', returnDate: '17/07', price: 355, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '20/07', returnDate: '24/07', price: 355, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '27/07', returnDate: '31/07', price: 355, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '03/08', returnDate: '07/08', price: 375, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '10/08', returnDate: '14/08', price: 375, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '17/08', returnDate: '21/08', price: 375, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '24/08', returnDate: '28/08', price: 375, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '31/08', returnDate: '04/09', price: 355, availability: 'Μόνο 6 καθίσματα!' }
    ]
  },
  {
    id: 'preveza-5-cy',
    destination: 'Preveza',
    destinationSlug: 'preveza',
    title: 'ΠΡΕΒΕΖΑ 5 ημέρες',
    duration: '5 ημέρες',
    airline: 'Cyprus Airways',
    luggage: '1 αποσκευή 23kg και μία χειραποσκευή 10kg',
    departureFlight: { route: 'Λάρνακα - Πρέβεζα', time: '07:00 - 09:10' },
    returnFlight: { route: 'Πρέβεζα - Λάρνακα', time: '10:10 - 12:10' },
    pricing: [
      { dates: '05/07,12/07,19/07,26/07,30/08', price: 379 },
      { dates: '02/08,09/08,16/08,23/08', price: 395 }
    ],
    departures: [
      { departureDate: '05/07', returnDate: '09/07', price: 379, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '12/07', returnDate: '16/07', price: 379, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '19/07', returnDate: '23/07', price: 379, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '26/07', returnDate: '30/07', price: 379, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '02/08', returnDate: '06/08', price: 395, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '09/08', returnDate: '13/08', price: 395, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '16/08', returnDate: '20/08', price: 395, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '23/08', returnDate: '27/08', price: 395, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '30/08', returnDate: '03/09', price: 379, availability: 'Μόνο 6 καθίσματα!' }
    ]
  },
  {
    id: 'preveza-8-cy',
    destination: 'Preveza',
    destinationSlug: 'preveza',
    title: 'ΠΡΕΒΕΖΑ 8 ημέρες',
    duration: '8 ημέρες',
    airline: 'Cyprus Airways',
    luggage: '1 αποσκευή 23kg και μία χειραποσκευή 10kg',
    departureFlight: { route: 'Λάρνακα - Πρέβεζα', time: '07:00 - 09:10' },
    returnFlight: { route: 'Πρέβεζα - Λάρνακα', time: '10:10 - 12:10' },
    pricing: [
      { dates: '05/07,09/07,12/07,16/07,19/07,23/07,26/07,30/07', price: 379 },
      { dates: '02/08,06/08,09/08,13/08,16/08,20/08,23/08', price: 395 }
    ],
    departures: [
      { departureDate: '05/07', returnDate: '12/07', price: 379, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '09/07', returnDate: '16/07', price: 379, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '12/07', returnDate: '19/07', price: 379, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '16/07', returnDate: '23/07', price: 379, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '19/07', returnDate: '26/07', price: 379, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '23/07', returnDate: '30/07', price: 379, availability: 'Μόνο 3 καθίσματα!' },
      { departureDate: '26/07', returnDate: '02/08', price: 379, availability: 'Μόνο 3 καθίσματα!' },
      { departureDate: '30/07', returnDate: '06/08', price: 379, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '02/08', returnDate: '09/08', price: 395, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '06/08', returnDate: '13/08', price: 395, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '09/08', returnDate: '16/08', price: 395, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '13/08', returnDate: '20/08', price: 395, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '16/08', returnDate: '23/08', price: 395, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '20/08', returnDate: '27/08', price: 395, availability: 'Μόνο 6 καθίσματα!' },
      { departureDate: '23/08', returnDate: '30/08', price: 395, availability: 'Μόνο 6 καθίσματα!' }
    ]
  }
]

const destinationCardImages = {
  rhodes: '/images/greek-packages-summer/rhodes/rhodes-summer-greece-hero.webp',
  skiathos: '/images/greek-packages-summer/skiathos/skiathos-lake-hero.webp',
  santorini: '/images/greek-packages-summer/santorini/santorini-greece-cover.webp',
  preveza: '/images/greek-packages-summer/preveza/preveza-hero.webp'
}

export const getDestinationSummaries = () => {
  const grouped = new Map()

  flightTicketOffers.forEach((offer) => {
    const current = grouped.get(offer.destinationSlug)
    const offerMin = Math.min(...offer.pricing.map((p) => p.price))
    if (!current || offerMin < current.fromPrice) {
      grouped.set(offer.destinationSlug, {
        destination: offer.destination,
        destinationSlug: offer.destinationSlug,
        image: destinationCardImages[offer.destinationSlug] || '',
        fromPrice: offerMin,
        offersCount: (current?.offersCount || 0) + 1
      })
    } else {
      grouped.set(offer.destinationSlug, {
        ...current,
        offersCount: current.offersCount + 1
      })
    }
  })

  return Array.from(grouped.values())
}

export const getOffersByDestination = (destinationSlug) => {
  return flightTicketOffers.filter((offer) => offer.destinationSlug === destinationSlug)
}
