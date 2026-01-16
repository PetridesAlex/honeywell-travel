// Travel packages data structure
// You can expand this or connect it to a backend API later

export const travelPackages = [
  {
    id: 1,
    title: 'Amazing New York City Break',
    destination: 'America',
    category: 'City Breaks',
    price: 1299,
    duration: '5 days',
    description: 'Experience the Big Apple with this amazing city break package.',
    image: '🇺🇸',
    featured: true
  },
  {
    id: 2,
    title: 'Greek Islands Paradise',
    destination: 'Greece',
    category: 'Summer Packages',
    price: 899,
    duration: '7 days',
    description: 'Explore the beautiful Greek islands with crystal clear waters.',
    image: '🇬🇷',
    featured: true
  },
  {
    id: 3,
    title: 'Paris Romantic Getaway',
    destination: 'Europe',
    category: 'City Breaks',
    price: 699,
    duration: '4 days',
    description: 'Romantic escape to the City of Light.',
    image: '🇫🇷',
    featured: false
  },
  {
    id: 4,
    title: 'Thailand Adventure',
    destination: 'Asia',
    category: 'Exotic Packages',
    price: 1499,
    duration: '10 days',
    description: 'Discover the exotic beauty of Thailand.',
    image: '🇹🇭',
    featured: true
  },
  {
    id: 5,
    title: 'Safari in Kenya',
    destination: 'Africa',
    category: 'Exotic Packages',
    price: 2499,
    duration: '12 days',
    description: 'Witness the great migration and amazing wildlife.',
    image: '🦁',
    featured: false
  }
]

// Helper functions
export const getPackagesByDestination = (destination) => {
  if (destination === 'Any') return travelPackages
  return travelPackages.filter(pkg => pkg.destination === destination)
}

export const getPackagesByCategory = (category) => {
  if (category === 'Any') return travelPackages
  return travelPackages.filter(pkg => pkg.category === category)
}

export const getPackagesByFilter = (category, destination) => {
  let filtered = travelPackages

  if (category !== 'Any') {
    filtered = filtered.filter(pkg => pkg.category === category)
  }

  if (destination !== 'Any') {
    filtered = filtered.filter(pkg => pkg.destination === destination)
  }

  return filtered
}

export const addPackage = (newPackage) => {
  const id = Math.max(...travelPackages.map(p => p.id), 0) + 1
  const packageToAdd = { ...newPackage, id }
  travelPackages.push(packageToAdd)
  return packageToAdd
}

export const getPackageById = (id) => {
  return travelPackages.find(pkg => pkg.id === parseInt(id))
}






