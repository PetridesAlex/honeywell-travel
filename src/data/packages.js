// Travel packages data structure
// You can expand this or connect it to a backend API later.
//
// Hotel price types (per person) used in details.hotels[].prices:
//   - double: Double room (per person)
//   - single: Single room (per person)
//   - triple: Triple room (per person)
//   - child1: Child 1 (first child price)
//   - child2: Child 2 (second child / additional children price)

export const travelPackages = [
  {
    id: 8,
    title: 'ΚΑΘΑΡΑ ΔΕΥΤΕΡΑ ΣΤΗΝ ΑΘΗΝΑ - 4 Μέρες',
    destination: 'Greece',
    category: 'Green Monday',
    price: 798,
    duration: '4 days / 3 nights',
    description: 'Celebrate Clean Monday in Athens with this special 4-day package including flights, accommodation, and breakfast.',
    longDescription: 'Join us for a special Clean Monday celebration in Athens! This package includes round-trip flights, 3 nights accommodation at one of our carefully selected hotels, daily breakfast, and airport transfers. Experience the traditional Greek celebration of Clean Monday (Kathara Deftera) with kite flying, special foods, and cultural festivities.',
    image: '🇬🇷',
    featured: true,
    details: {
      departureDate: '20/02',
      departureFrom: 'Larnaca',
      destinationFull: 'Athens, Greece',
      monthAvailability: 'February',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      includedLuggage: '1×23kg checked + 8kg hand luggage + 1 personal item',
      flights: [
        {
          direction: 'Departure',
          date: '20/02',
          route: 'Larnaca → Athens',
          flight: 'GQ 607',
          time: '07:15 → 09:00',
          luggage: '1 free baggage'
        },
        {
          direction: 'Return',
          date: '20/02',
          route: 'Athens → Larnaca',
          flight: 'GQ 602',
          time: '18:00 → 19:40',
          luggage: '1 free baggage'
        }
      ],
      hotels: [
        {
          name: 'Dorian Inn Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          location: 'Pireos 15–19, 10552, Athens, Greece',
          packagePrice: 850,
          image: '/images/hotels/dorian-inn-athens.webp',
          prices: {
            double: 425,
            single: 489,
            triple: 419,
            child1: 369,
            child2: 369
          },
          departureDate: '20/02'
        },
        {
          name: 'Arion Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          location: 'Agiou Dimitriou 18, 10554, Athens, Greece',
          packagePrice: 858,
          image: '/images/hotels/arion-athens.webp',
          prices: {
            double: 429,
            single: 549
          },
          departureDate: '20/02'
        },
        {
          name: 'Achilleas Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          location: 'Lekka 21, 10562, Athens, Greece',
          packagePrice: 898,
          image: '/images/hotels/achilleas-athens.webp',
          prices: {
            double: 449,
            single: 589
          },
          departureDate: '20/02'
        },
        {
          name: 'The Alassia Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          location: '50 Socratous Str, 10431, Athens, Greece',
          packagePrice: 898,
          image: '/images/hotels/alassia-athens.webp',
          prices: {
            double: 449,
            single: 589,
            triple: 419,
            child1: 299
          },
          departureDate: '20/02'
        },
        {
          name: 'Pan Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          location: 'Mitropoleos 11, 10557, Athens, Greece',
          packagePrice: 918,
          image: '/images/hotels/pan-athens.webp',
          prices: {
            double: 459,
            single: 609,
            triple: 429,
            child1: 379,
            child2: 379
          },
          departureDate: '20/02'
        },
        {
          name: 'Classic by Athens Prime Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          location: '7 Chavriou Str, 10562, Athens, Greece',
          packagePrice: 950,
          image: '/images/hotels/classic-athens-prime.webp',
          prices: {
            double: 475,
            single: 609
          },
          departureDate: '20/02'
        },
        {
          name: 'Pure by Athens Prime Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          location: '8 Nikiou, 10560, Athens, Greece',
          packagePrice: 958,
          image: '/images/hotels/pure-athens.webp',
          prices: {
            double: 479,
            single: 629,
            triple: 465,
            child1: 429
          },
          departureDate: '20/02'
        },
        {
          name: 'Central Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          location: 'Apollonos 21, Plaka, 10557, Athens, Greece',
          packagePrice: 978,
          image: '/images/hotels/central-athens.webp',
          prices: {
            double: 489,
            single: 679,
            triple: 469,
            child1: 419
          },
          departureDate: '20/02'
        },
        {
          name: 'Astor Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          location: '16 Karageorgi Servias, 10562, Athens, Greece',
          packagePrice: 1058,
          image: '/images/hotels/astor-athens.webp',
          prices: {
            double: 529,
            single: 759,
            triple: 499,
            child1: 375,
            child2: 375
          },
          departureDate: '20/02'
        },
        {
          name: 'Athens Cypria Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          location: '5 Diomias Street, Syntagma Square, 10563, Athens, Greece',
          packagePrice: 1078,
          image: '/images/hotels/athens-cypria.webp',
          prices: {
            double: 539,
            single: 729,
            triple: 499,
            child1: 435
          },
          departureDate: '20/02'
        },
        {
          name: 'Elia Ermou Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          boardBasis: 'Bed & Breakfast',
          departureDate: '20/02',
          location: 'Ermou 15, 10563, Athens, Greece',
          packagePrice: 1198,
          image: '/images/hotels/elia-ermou.webp',
          prices: {
            double: 599,
            single: 899,
            triple: 569,
            child1: 499
          }
        }
      ],
      included: [
        'Round-trip airfare Larnaca → Athens → Larnaca with Sky Express',
        'Airport taxes and fuel surcharge',
        '3 nights accommodation at one of the above hotels',
        'Breakfast included',
        'Transfers from and to the airport',
        '23kg checked baggage + 8kg hand luggage + personal item',
        'Services of local representative'
      ],
      notIncluded: [
        'Local accommodation tax (paid directly at the hotel)',
        'Anything not mentioned in the "Included" section'
      ],
      cancellationPolicy: 'Prices do not change at the time of booking. A 30% deposit is required; final payment must be made 21 days before departure. Cancellation up to 45 days before departure → €50 administrative fee. Cancellation 44–31 days before departure → 30% charge. Cancellation 30–21 days before departure → 50% charge. Cancellation 20 days or less before departure → 100% charge. For charter flights, cruises, conferences & international fairs → cancellation fees may reach 100%.',
      termsAndConditions: [
        'Prices do not change at the time of booking.',
        'A 30% deposit is required; final payment must be made 21 days before departure.',
        'Cancellation up to 45 days before departure → €50 administrative fee',
        'Cancellation 44–31 days before departure → 30% charge',
        'Cancellation 30–21 days before departure → 50% charge',
        'Cancellation 20 days or less before departure → 100% charge',
        'For charter flights, cruises, conferences & international fairs → cancellation fees may reach 100%'
      ],
      program: {
        introduction: 'Όπου και αν κοιτάξει κανείς η Αθήνα είναι γεμάτη με μνημεία του αρχαίου αλλά και του νεώτερου πολιτισμού. Περπατώντας στην Αθήνα και κάνοντας μια περιήγηση στα αξιοθέατα της, είναι σαν να περπατάς μέσα στην ίδια την ιστορία της. Αν, μάλιστα, έχεις διαβάσει λίγο την ιστορία της, τότε σε πιάνει ένα ρίγος. Πατάς στις πατημασιές χιλιάδων προγόνων, βαδίζεις τα βήματά τους. Αν ακόμη σκεφτείς ότι είναι ίσως η μοναδική πρωτεύουσα όπου μπορείς να ζήσεις τα πάντα, να κάνεις αυτό το ταξίδι στο χρόνο και, μετά από λίγα χιλιόμετρα, να κάνεις και μια βουτιά στη θάλασσα, τότε την αγαπάς ακόμη περισσότερο!',
        food: 'Φαγητό στην Αθήνα\n\nΟι Έλληνες ακολουθούν την τυπική μεσογειακή διατροφή, με κάποιες ιδιαιτερότητες που κάνουν την ελληνική κουζίνα ξεχωριστή και ιδιαίτερα νόστιμη. Θα αφεθείτε σε ένα μοναδικό γαστρονομικό ταξίδι που πραγματικά θα σας ενθουσιάσει! Η ελληνική κουζίνα είναι ένας υπέροχος συνδυασμός φρέσκων υλικών, λαχανικών, αρωματικών βοτάνων, όπως το θυμάρι, η μέντα και το δεντρολίβανο, γευστικού ελαιόλαδου, φρέσκων θαλασσινών, αλλά και ντόπιων κρεάτων. Βέβαια, μην παραλείψετε να δοκιμάσετε τα εξαίσια ελληνικά τυριά, και κυρίως τη φέτα.\n\nΤα πιο δημοφιλή πιάτα που μπορείτε αν βρείτε οπουδήποτε είναι φυσικά το περίφημο σουβλάκι και ο ελληνικός γύρος, το πιο χαρακτηριστικό και εθνικό φαστ φουντ στην Ελλάδα. Η ελληνική γευστική απόλαυση είναι κάτι που δεν μπορεί να αντικατασταθεί και να βρεθεί σε καμία άλλη κουζίνα. Γι αυτό, αφήστε τον εαυτό σας να ζήσει μια ολοκληρωμένη γαστρονομική εμπειρία, στα υπέροχα ελληνικά εστιατόρια, που θα σας μείνει πραγματικά αξέχαστη! Τα περισσότερα εστιατόρια είναι άξιοι εκπρόσωποι της ελληνικής φιλοξενίας και μπορούν να σας εξυπηρετήσουν άψογα. Ακριβώς όπως τα μπαρ, εστιατόρια και ταβέρνες βρίσκονται παντού στην Αθήνα. Η περιοχή της Πλάκας είναι ίσως η πιο γραφική, αλλά και η περιοχή που δέχεται τους περισσότερους τουρίστες. Η περιοχή του Ψυρρή δεν απέχει πολύ από το Μοναστηράκι με πολλά όμορφα μαγαζιά, φαγάδικα, μεζεδοπωλεία και ταβέρνες με ζωντανή μουσική μέρα και νύχτα. Παρόλο που η ποιότητα του φαγητού είναι κάτι δεδομένο, να είστε προσεχτικοί στην επιλογή προκειμένου να μη βρεθείτε προ εκπλήξεων όταν θα έρθει ο λογαριασμός! Αρκετά εστιατόρια έχουν σε ταμπέλες τόσο το μενού, όσο και τιμές τους. Για αυτό κάντε πρώτα μια βόλτα, πριν αποφασίσετε που θα καθίσετε.',
        attractions: 'Τι να δείτε στην Αθήνα\n\nΤο μεγαλύτερο αρχαίο μνημείο της Αθήνας είναι φυσικά η Ακρόπολη. Πάνω από τον ιερό βράχο, μπορείτε να αισθανθείτε σχεδόν το μεγαλείο της αρχαίας Ελλάδας. Άλλοι ενδιαφέροντες αρχαιολογικοί χώροι είναι η αρχαία αγορά, με το ναό του Ηφαίστου ακόμη σε πολύ καλή κατάσταση, όπως επίσης και ο ναός του Δία και η αψίδα του Αδριανού.\n\nΣτην Αθήνα θα βρούμε τα κυριότερα μουσεία της Ελλάδας όπως το νέο μουσείο της Ακρόπολης, το Εθνικό Αρχαιολογικό Μουσείο, το Λαογραφικό Μουσείο, το Μουσείο Κεραμικού, το Βυζαντινό και Χριστιανικό Μουσείο, το Μουσείο Μουσικής, το Πολεμικό Μουσείο, το Μουσείο Μπενάκη, κλπ. Γενικά, υπάρχουν περίπου 50 μουσεία στην Αθήνα. Ένα δημοφιλές μέρος για ψώνια ή για φαγητό και ποτό είναι η Πλάκα, ακριβώς κάτω από την Ακρόπολη. Θεωρείται αρκετά τουριστικό μέρος, αλλά το γεγονός είναι ότι εδώ μπορείτε να πάρετε μια ιδέα της παλιάς Αθήνας, με χαμηλά κτίρια και μικρούς δρόμους.\n\nΣτο Μοναστηράκι υπάρχει το περίφημο Γιουσουρούμ, το παζάρι με παλαιοπωλεία και αλλά αντικείμενα. Στην Πλατεία Συντάγματος μπορείτε να επισκεφθείτε το μνημείο του Άγνωστου Στρατιώτη. Εδώ μπορείτε να δείτε τους Ευζώνους της προεδρικής φρουράς και εάν είστε τυχεροί, θα δείτε την αργή και πολύπλοκη αλλαγή της φρουράς μπροστά από το μνημείο του Αγνώστου Στρατιώτη. Το Μέγαρο Μουσικής, έχει πολλές υπέροχες παραστάσεις και το καλοκαίρι γίνονται πολλές παραστάσεις και συναυλίες στο θέατρο Ηρώδου του Αττικού (Ηρώδειο) κάτω από την Ακρόπολη, στο Λυκαβηττό και αλλού.'
      },
      gallery: [
        '/images/destinations/athens-hero.webp', // Main header image (Acropolis)
        '/images/destinations/greece-hero.webp', // Acropolis view 1
        '/images/destinations/greece-hero.webp', // Acropolis view 2
        '/images/destinations/greece-hero.webp'  // Acropolis view 3
      ]
    }
  },
  {
    id: 9,
    title: 'ΚΑΘΑΡΑ ΔΕΥΤΕΡΑ ΣΤΟ ΝΤΟΥΜΠΑΪ - 4 Μέρες',
    destination: 'Middle East',
    category: 'Green Monday',
    price: 1678,
    duration: '4 days / 3 nights',
    description: 'Celebrate Clean Monday in Dubai with this special 4-day package including flights, 5-star accommodation, and breakfast.',
    longDescription: 'Join us for a special Clean Monday celebration in Dubai! This package includes round-trip flights with Cyprus Airways, 3 nights accommodation at the luxurious Media Rotana 5★ hotel, daily breakfast, airport transfers, and the services of a local representative. Experience the glamour of Dubai with its iconic skyscrapers, world-famous attractions, and unique blend of traditional and modern culture.',
    image: '🇦🇪',
    featured: true,
    details: {
      departureDate: '20/02',
      departureFrom: 'Larnaca',
      destinationFull: 'Dubai, UAE',
      monthAvailability: 'February',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      hotel: 'Media Rotana 5★',
      airline: 'Cyprus Airways',
      includedLuggage: '1×23kg checked + 10kg hand luggage',
      flights: [
        {
          direction: 'Departure',
          date: '20/02',
          route: 'Larnaca → Dubai',
          flight: 'CY 106',
          time: '11:00 → 17:00',
          luggage: '1 free baggage'
        },
        {
          direction: 'Return',
          date: '20/02',
          route: 'Dubai → Larnaca',
          flight: 'CY 107',
          time: '18:00 → 20:10',
          luggage: '1 free baggage'
        }
      ],
      hotels: [
        {
          name: 'Media Rotana 5★ – Dubai',
          stars: 5,
          roomType: 'Standard Room',
          packagePrice: 1678,
          image: '/images/destinations/dubai-skyline.webp',
          prices: {
            double: 839,
            single: 1015,
            child1: 715
          },
          departureDate: '20/02'
        }
      ],
      included: [
        'Round-trip airfare Larnaca – Dubai – Larnaca with Cyprus Airways',
        'Airport taxes',
        'Accommodation at Media Rotana 5★ with breakfast',
        'Airport–hotel–airport transfers',
        'Experienced local escort during the tour',
        '23kg checked baggage + 10kg hand luggage',
        'Services of local representative'
      ],
      notIncluded: [
        'Local tourism tax AED20 (approx. €5) per room per night — paid directly to the hotel',
        'Optional excursions (e.g., Desert Safari)',
        'Anything not mentioned in the "Included" section'
      ],
      cancellationPolicy: 'Prices do not change at the time of booking. 30% deposit required; balance due 21 days before departure. Cancellation up to 45 days before departure → €50 fee. Cancellation 45–30 days before departure → 30% charge. Cancellation 30–21 days → 50% charge. Cancellation 21 days or less → 100% charge. For charter flights, cruises, special events, exhibitions → cancellation fees may reach 100%.',
      termsAndConditions: [
        'Prices do not change at the time of booking.',
        '30% deposit required; balance due 21 days before departure.',
        'Cancellation up to 45 days before departure → €50 fee',
        'Cancellation 45–30 days before departure → 30% charge',
        'Cancellation 30–21 days → 50% charge',
        'Cancellation 21 days or less → 100% charge',
        'For charter flights, cruises, special events, exhibitions → cancellation fees may reach 100%'
      ],
      itinerary: [
        {
          day: '1η ημέρα',
          title: 'Λάρνακα – Ντουμπάι',
          description: 'Συγκέντρωση στο αεροδρόμιο της Λάρνακας όπου θα πάρουμε την πτήση μας για το κοσμοπολίτικο Ντουμπάι. Μπορείτε να ανεβείτε στο ψηλότερο κτίριο του κόσμου για να θαυμάσετε την πανοραμική θέα και να ποζάρετε για φωτογραφίες μπροστά στα υψηλότερα και πιο εντυπωσιακά σιντριβάνια που χορεύουν. Έχει καταφέρει να είναι πλέον συνώνυμο του πλούτου και της πολυτέλειας. Ανακαλύψτε αγορές, φαγητό και διασκέδαση από πανύψηλα εμπορικά κέντρα μέχρι εξωφρενικά θεματικά πάρκα. Διανυκτέρευση.',
          image: '/images/destinations/dubai-skyline.webp'
        },
        {
          day: '2η Μέρα',
          title: 'Ντουμπάι – Πανοραμική Ξενάγηση',
          description: 'Πρωινό στο ξενοδοχείο μας. Η πανοραμική περιήγηση μας στο Ντουμπαι ξεκινά από την λεωφόρο Sheikh Zayed ή αλλιώς λεωφόρος των ουρανοξυστών. Εκεί θα θαυμάσουμε το περίφημο skyline του Ντουμπαι σε όλο του το μεγαλείο καθώς και τον ψηλότερο πύργο στον κόσμο, τον Burj Khalifa, με την κορυφή του χαμένη μέσα στα σύννεφα. Ακολουθεί η παλιά πόλη , η Deira, με τα παραδοσιακά της παζάρια, τα souqs. Η λάμψη από τον χρυσό και τους πολυτίμους λίθους στο σουκ του χρυσού θα μας τυφλώσει , τα μπαχαρικά θα διεγείρουν τις αισθήσεις μας, τα έργα τέχνης θα μας μαγέψουν. Με τα παραδοσιακά πλεούμενα , τα ονομαστά abra, θα διασχίσουμε το κανάλι του Ντουμπαι , το creek , και θα μάθουμε για την ιστορία του και τον σημαντικό ρόλο που έπαιξε στην ανάπτυξη της πόλης. Θα περπατήσουμε στις παραδοσιακές αγορές και θα δούμε το φρούριο Al Fahidi , δείγμα παραδοσιακής αρχιτεκτονικής και αναπόσπαστο κομμάτι της ιστορίας της πόλης. Επόμενη στάση στο μοναδικό , κατ\'ευφημισμον , 7* ξενοδοχείο στον κόσμο, το Burj Al Arab. Αφού φωτογραφηθούμε με φόντο το υπέροχο αυτό ξενοδοχείο σε σχήμα πανιού ιστιοφόρου, ακολουθούμε τον δρόμο που περνά μπροστά από το παραδοσιακό Madinat Jumeirah , γνωστό και ως η Μικρή Βενετία του Ντουμπαι, από τα παλάτια της βασιλικής οικογένειας. Επιστροφή στο ξενοδοχείο μας και διανυκτέρευση.',
          image: '/images/destinations/dubai-abra-boat.webp'
        },
        {
          day: '3η ημέρα',
          title: 'Ντουμπάι – Σαφάρι με δείπνο (προαιρετικό)',
          description: 'Το πρωινό μας είναι ελεύθερο και μπορείτε να το διαθέσετε για να επισκεφθείτε ένα από τα πολλά εμπορικά της πόλης για αγορές. Το μεσημέρι αναχωρούμε για το σαφάρι στην έρημο. Η αγαπημένη μέρα μικρών και μεγάλων. Μια μέρα που ανεβάζει την αδρεναλίνη, προσφέρει γέλιο, διασκέδαση και φυσικά την εμπειρία να βρεθείτε στη μέση της απέραντη ερήμου, εκεί που μερικά χρόνια πριν ζούσαν οι βεδουίνοι που ταξίδευαν στην έρημο με οδηγό τα αστέρια, το φεγγάρι και τον ήλιο. Φεύγουμε από το ξενοδοχείο με κλιματιζόμενα jeep 4x4 κλειστού τύπου (δεν συνιστάται σε εγκύους , παιδιά κάτω των 12 ετών και ηλικίας άνω των 70 ετών και φυσικά όσοι πάσχουν από καρδιά η πίεση) και μετά από διαδρομή μίας ώρας φτάνουμε στο σημείο όπου ξεκινά το σαφάρι. Βάζουμε ζώνες και ξεκινάμε για να απολαύσουμε την μαγεία της οδήγησης μέσα στην έρημο από έμπειρους οδηγούς. Θα σταματήσουμε για φωτογραφίες στη μέση της ερήμου, σε φάρμα με καμήλες και φυσικά για να απαθανατίσουμε το μαγευτικό ηλιοβασίλεμα της ερήμου, μια μαγευτική ώρα που ο ήλιος παίζει με τα χρώματα της άμμου, όπου γίνεται αισθητή η διαφορά της θερμοκρασίας που αρχίζει να πέφτει μαζί με τον ήλιο. Στην συνέχεια διασχίζουμε την προστατευόμενη περιοχή του Ντουμπάι, και καταλήγουμε στις τέντες των βεδουίνων όπου εκεί λαμβάνουν χώρα όλες οι δραστηριότητες: Sand board (κατάβαση αμμόλοφου με σανίδα) στην έρημο, υποδοχή με αραβικό καφέ, τσάι και χουρμάδες. Και επειδή η περιπέτεια ανοίγει την όρεξη, μέχρι να ετοιμαστεί το δείπνο, μας περιμένουν κάποια πρώτα παραδοσιακά ορεκτικά, ενώ μπορείτε να δροσιστείτε με όσο νερό και αναψυκτικά θέλετε. Επιστροφή στο ξενοδοχείο μας στο Ντουμπάι και διανυκτέρευση.',
          image: '/images/destinations/dubai-desert-safari.webp'
        },
        {
          day: '4η Μέρα',
          title: 'Ντουμπάι - Λάρνακα',
          description: 'Πρωινό. Ελεύθερος χρόνος για περιήγηση ή τις τελευταίες αγορές σας. Αναχώρηση για το αεροδρόμιο για να πάρουμε τη πτήση της επιστροφής για Λάρνακα αφήνοντας πίσω μας την χώρα των Σεΐχηδων αλλά παίρνοντας μαζί μας τις καλύτερες αναμνήσεις!!!.'
        }
      ],
      program: {
        introduction: 'Experience the glamour and luxury of Dubai with this special Clean Monday package. Dubai offers a unique blend of traditional Emirati culture and ultra-modern architecture, creating an unforgettable travel experience.',
        highlights: 'Discover Dubai\'s iconic landmarks including the world\'s tallest building Burj Khalifa, the luxurious Burj Al Arab, man-made Palm Jumeirah island, vibrant Dubai Marina, and traditional markets in the historic Al Fahidi district. Experience the contrast between old and new Dubai, from traditional abra boat rides across Dubai Creek to modern skyscrapers and luxury shopping malls.',
        optional: 'Προαιρετικό: Σαφάρι με δείπνο - € 60 το άτομο – Η τιμή ισχύει μόνο για προκρατήσεις που θα γίνουν και θα πληρωθούν στο γραφείο μας και θα πραγματοποιηθεί μόνο εάν υπάρξει ικανοποιητικός αριθμός συμμετοχών.'
      },
      gallery: [
        '/images/destinations/dubai-hero.webp', // Main header image (Dubai Skyline + Ain Dubai)
        '/images/destinations/dubai-skyline.webp', // Dubai skyline with Burj Khalifa
        '/images/destinations/dubai-abra-boat.webp', // Dubai Marina traditional boat
        '/images/destinations/dubai-desert-safari.webp'  // Desert safari / dunes / camels
      ]
    }
  },
  {
    id: 10,
    title: 'ΠΑΤΡΑ / ΟΡΕΙΝΗ ΝΑΥΠΑΚΤΙΑ / ΚΑΛΑΒΡΥΤΑ',
    destination: 'Greece',
    category: 'Easter Packages',
    price: 1138,
    duration: '5 days / 4 nights',
    description: 'Explore Patra, Mountainous Nafpaktia, and Kalavryta with this special 5-day Easter package including flights, accommodation, and guided tours.',
    longDescription: 'Join us for an unforgettable Easter journey through the Peloponnese! This package takes you to Patra, the gateway to the Peloponnese, through the stunning Mountainous Nafpaktia region, and to the historic Kalavryta. Experience Greek culture, history, and natural beauty with comfortable accommodation and expert guidance.',
    image: '🇬🇷',
    featured: true,
    details: {
      departureDate: '11/03 or 29/04',
      departureFrom: 'Larnaca',
      destinationFull: 'Patra – Mountainous Nafpaktia – Kalavryta, Greece',
      monthAvailability: 'March, April',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      hotel: 'Galaxy City Center Hotel 3★',
      airline: 'Sky Express',
      includedLuggage: '1×20kg checked + 8kg hand luggage',
      flights: [
        {
          direction: 'Departure (11/03)',
          date: '11/03',
          route: 'Larnaca → Athens',
          flight: 'Sky Express',
          time: '08:05 → 10:00',
          luggage: '1×20kg checked + 8kg hand luggage'
        },
        {
          direction: 'Return (11/03)',
          date: '11/03',
          route: 'Athens → Larnaca',
          flight: 'Sky Express',
          time: '20:55 → 22:35',
          luggage: '1×20kg checked + 8kg hand luggage'
        },
        {
          direction: 'Departure (29/04)',
          date: '29/04',
          route: 'Larnaca → Athens',
          flight: 'Sky Express',
          time: '07:45 → 09:40',
          luggage: '1×20kg checked + 8kg hand luggage'
        },
        {
          direction: 'Return (29/04)',
          date: '29/04',
          route: 'Athens → Larnaca',
          flight: 'Sky Express',
          time: '20:55 → 22:40',
          luggage: '1×20kg checked + 8kg hand luggage'
        }
      ],
      hotels: [
        {
          name: 'Galaxy City Center Hotel – Patra',
          stars: 3,
          roomType: 'Standard Room',
          packagePrice: 1138,
          image: '/images/destinations/patra-hotel.webp',
          prices: {
            double: 569,
            single: 659,
            triple: 539,
            child1: 489
          },
          departureDate: '11/03',
          description: 'Galaxy Hotel 3* Patra - [Hotel description will be added here - please provide the complete Greek text from the reference screenshots]'
        },
        {
          name: 'Galaxy City Center Hotel – Patra',
          stars: 3,
          roomType: 'Standard Room',
          packagePrice: 1238,
          image: '/images/destinations/patra-hotel.webp',
          prices: {
            double: 619,
            single: 709,
            triple: 589,
            child1: 539
          },
          departureDate: '29/04',
          description: 'Galaxy Hotel 3* Patra - [Hotel description will be added here - please provide the complete Greek text from the reference screenshots]'
        }
      ],
      included: [
        'Airtickets Larnaca–Athens–Larnaca with Sky Express',
        'Airport taxes',
        '4 nights accommodation at Galaxy Hotel Patra 3★ with breakfast',
        'Group leader / escort',
        'City tax included',
        'One 20kg suitcase + one 8kg hand luggage',
        'Representative support services'
      ],
      notIncluded: [
        'Entrance tickets to archaeological sites or museums',
        'Anything not listed as included or optional'
      ],
      cancellationPolicy: 'Prices do not change at the time of booking. A 30% deposit is required; final payment must be made 21 days before departure. Cancellation up to 45 days before departure → €50 administrative fee. Cancellation 44–31 days before departure → 30% charge. Cancellation 30–21 days before departure → 50% charge. Cancellation 20 days or less before departure → 100% charge. For charter flights, cruises, conferences & international fairs → cancellation fees may reach 100%.',
      termsAndConditions: [
        'Prices do not change at the time of booking.',
        'A 30% deposit is required; final payment must be made 21 days before departure.',
        'Cancellation up to 45 days before departure → €50 administrative fee',
        'Cancellation 44–31 days before departure → 30% charge',
        'Cancellation 30–21 days before departure → 50% charge',
        'Cancellation 20 days or less before departure → 100% charge',
        'For charter flights, cruises, conferences & international fairs → cancellation fees may reach 100%'
      ],
      itinerary: [
        {
          day: '1η ημέρα',
          title: 'Λάρνακα – Αθήνα – Πάτρα',
          description: '[Full program text for Day 1 will be inserted here - please provide the complete Greek text from the reference screenshots]'
        },
        {
          day: '2η ημέρα',
          title: 'Πάτρα – Περιήγηση στην πόλη',
          description: '[Full program text for Day 2 will be inserted here - please provide the complete Greek text from the reference screenshots]'
        },
        {
          day: '3η ημέρα',
          title: 'Πάτρα – Ορεινή Ναυπακτία',
          description: '[Full program text for Day 3 will be inserted here - please provide the complete Greek text from the reference screenshots]'
        },
        {
          day: '4η ημέρα',
          title: 'Πάτρα – Καλάβρυτα – Μέγα Σπήλαιο – Οδοντορός',
          description: '[Full program text for Day 4 will be inserted here - please provide the complete Greek text from the reference screenshots]'
        },
        {
          day: '5η ημέρα',
          title: 'Πάτρα – Λουτράκι – Αθήνα – Λάρνακα',
          description: '[Full program text for Day 5 will be inserted here - please provide the complete Greek text from the reference screenshots]'
        }
      ],
      program: {
        introduction: 'Experience the beauty of the Peloponnese with this special Easter package. Visit Patra, explore the stunning Mountainous Nafpaktia region, and discover the historic Kalavryta with its famous monastery and cog railway.',
        hotelDescription: '[Full Greek hotel description for Galaxy Hotel 3* Patra will be inserted here - please provide the complete text from the reference screenshots]'
      },
      coverImage: '/images/destinations/patra1.webp',
      thumbnailImage: '/images/destinations/patra3.webp',
      gallery: [
        '/images/destinations/patra1.webp',
        '/images/destinations/greece-hero.webp',
        '/images/destinations/greece-hero.webp',
        '/images/destinations/greece-hero.webp'
      ]
    }
  },
  {
    id: 11,
    title: 'ΒΟΥΚΟΥΡΕΣΤΙ – 5 Μέρες',
    destination: 'Europe',
    category: 'City Breaks',
    price: 750,
    duration: '5 days / 4 nights',
    description: 'Discover the charm of Bucharest, the "Little Paris of the East", with this 5-day city break including flights, accommodation, and breakfast.',
    longDescription: 'Experience the unique blend of history, culture, and modern life in Bucharest. From the grand architecture of the Palace of the Parliament to the charming Old Town, Bucharest offers an unforgettable European city break experience.',
    image: '🇷🇴',
    featured: true,
    details: {
      departureDate: '26/01, 02/02, 09/02, 16/02, 23/02, 02/03, 09/03, 16/03, 23/03',
      departureFrom: 'Paphos',
      destinationFull: 'Bucharest, Romania',
      monthAvailability: 'January, February, March',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Ryanair',
      includedLuggage: '1 small hand luggage',
      coverImage: '/images/destinations/bucharest-hero-castle.png',
      thumbnailImage: '/images/destinations/bucharest-thumb.png',
      flights: [
        {
          direction: 'Departure',
          date: 'Various dates',
          route: 'Paphos → Bucharest',
          flight: 'Ryanair',
          time: '14:10 → 16:20',
          luggage: '1 small hand luggage'
        },
        {
          direction: 'Return',
          date: 'Various dates',
          route: 'Bucharest → Paphos',
          flight: 'Ryanair',
          time: '14:10 → 16:20',
          luggage: '1 small hand luggage'
        }
      ],
      hotels: [
        {
          name: 'Mercure Unirii Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Mercure-Unirii-Hotel-Bucharest.webp',
          prices: {
            double: 375
          },
          departureDate: '26/01',
          packagePrice: 750
        },
        {
          name: 'Mercure Unirii Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Mercure-Unirii-Hotel-Bucharest.webp',
          prices: {
            double: 399
          },
          departureDate: '02/02',
          packagePrice: 798
        },
        {
          name: 'Mercure Unirii Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Mercure-Unirii-Hotel-Bucharest.webp',
          prices: {
            double: 385
          },
          departureDate: '09/02',
          packagePrice: 770
        },
        {
          name: 'Mercure Unirii Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Mercure-Unirii-Hotel-Bucharest.webp',
          prices: {
            double: 375
          },
          departureDate: '16/02',
          packagePrice: 750
        },
        {
          name: 'Mercure Unirii Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Mercure-Unirii-Hotel-Bucharest.webp',
          prices: {
            double: 429
          },
          departureDate: '23/02',
          packagePrice: 858
        },
        {
          name: 'Mercure Unirii Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Mercure-Unirii-Hotel-Bucharest.webp',
          prices: {
            double: 409
          },
          departureDate: '02/03',
          packagePrice: 818
        },
        {
          name: 'Mercure Unirii Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Mercure-Unirii-Hotel-Bucharest.webp',
          prices: {
            double: 429
          },
          departureDate: '09/03',
          packagePrice: 858
        },
        {
          name: 'Mercure Unirii Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Mercure-Unirii-Hotel-Bucharest.webp',
          prices: {
            double: 425
          },
          departureDate: '16/03',
          packagePrice: 850
        },
        {
          name: 'Mercure Unirii Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Mercure-Unirii-Hotel-Bucharest.webp',
          prices: {
            double: 465
          },
          departureDate: '23/03',
          packagePrice: 930
        },
        {
          name: 'Capitol Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Capitol-Hotel-Bucharest.webp',
          prices: {
            double: 399
          },
          departureDate: '26/01',
          packagePrice: 798
        },
        {
          name: 'Capitol Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Capitol-Hotel-Bucharest.webp',
          prices: {
            double: 435
          },
          departureDate: '02/02',
          packagePrice: 870
        },
        {
          name: 'Capitol Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Capitol-Hotel-Bucharest.webp',
          prices: {
            double: 409
          },
          departureDate: '09/02',
          packagePrice: 818
        },
        {
          name: 'Capitol Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Capitol-Hotel-Bucharest.webp',
          prices: {
            double: 405
          },
          departureDate: '16/02',
          packagePrice: 810
        },
        {
          name: 'Capitol Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Capitol-Hotel-Bucharest.webp',
          prices: {
            double: 469
          },
          departureDate: '23/02',
          packagePrice: 938
        },
        {
          name: 'Capitol Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Capitol-Hotel-Bucharest.webp',
          prices: {
            double: 465
          },
          departureDate: '02/03',
          packagePrice: 930
        },
        {
          name: 'Capitol Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Capitol-Hotel-Bucharest.webp',
          prices: {
            double: 479
          },
          departureDate: '09/03',
          packagePrice: 958
        },
        {
          name: 'Capitol Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Capitol-Hotel-Bucharest.webp',
          prices: {
            double: 445
          },
          departureDate: '16/03',
          packagePrice: 890
        },
        {
          name: 'Capitol Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Capitol-Hotel-Bucharest.webp',
          prices: {
            double: 479
          },
          departureDate: '23/03',
          packagePrice: 958
        },
        {
          name: 'Novotel City Centre Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Novotel-City-Hotel-Bucharest.webp',
          prices: {
            double: 465
          },
          departureDate: '26/01',
          packagePrice: 930
        },
        {
          name: 'Novotel City Centre Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Novotel-City-Hotel-Bucharest.webp',
          prices: {
            double: 489
          },
          departureDate: '02/02',
          packagePrice: 978
        },
        {
          name: 'Novotel City Centre Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Novotel-City-Hotel-Bucharest.webp',
          prices: {
            double: 479
          },
          departureDate: '09/02',
          packagePrice: 958
        },
        {
          name: 'Novotel City Centre Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Novotel-City-Hotel-Bucharest.webp',
          prices: {
            double: 465
          },
          departureDate: '16/02',
          packagePrice: 930
        },
        {
          name: 'Novotel City Centre Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Novotel-City-Hotel-Bucharest.webp',
          prices: {
            double: 519
          },
          departureDate: '23/02',
          packagePrice: 1038
        },
        {
          name: 'Novotel City Centre Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Novotel-City-Hotel-Bucharest.webp',
          prices: {
            double: 569
          },
          departureDate: '02/03',
          packagePrice: 1138
        },
        {
          name: 'Novotel City Centre Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Novotel-City-Hotel-Bucharest.webp',
          prices: {
            double: 589
          },
          departureDate: '09/03',
          packagePrice: 1178
        },
        {
          name: 'Novotel City Centre Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Novotel-City-Hotel-Bucharest.webp',
          prices: {
            double: 585
          },
          departureDate: '16/03',
          packagePrice: 1170
        },
        {
          name: 'Novotel City Centre Hotel – Bucharest',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Novotel-City-Hotel-Bucharest.webp',
          prices: {
            double: 625
          },
          departureDate: '23/03',
          packagePrice: 1250
        }
      ],
      included: [
        'Round-trip airfare Paphos → Bucharest → Paphos with Ryanair',
        'Airport taxes',
        '4 nights accommodation at selected hotel with breakfast',
        'Airport–hotel–airport transfers',
        'Services of local representative',
        '1 small hand luggage'
      ],
      notIncluded: [
        'Local accommodation tax (paid directly at the hotel)',
        'Checked baggage (available for additional fee)',
        'Anything not mentioned in the "Included" section'
      ],
      cancellationPolicy: 'Prices do not change at the time of booking. A 30% deposit is required; final payment must be made 21 days before departure. Cancellation up to 45 days before departure → €50 administrative fee. Cancellation 44–31 days before departure → 30% charge. Cancellation 30–21 days before departure → 50% charge. Cancellation 20 days or less before departure → 100% charge. For charter flights, cruises, conferences & international fairs → cancellation fees may reach 100%.',
      termsAndConditions: [
        'Prices do not change at the time of booking.',
        'A 30% deposit is required; final payment must be made 21 days before departure.',
        'Cancellation up to 45 days before departure → €50 administrative fee',
        'Cancellation 44–31 days before departure → 30% charge',
        'Cancellation 30–21 days before departure → 50% charge',
        'Cancellation 20 days or less before departure → 100% charge',
        'For charter flights, cruises, conferences & international fairs → cancellation fees may reach 100%'
      ],
      program: {
        introduction: 'Ανακαλύψτε τη μαγεία του Βουκουρεστίου, της "Μικρής Παριζιάνης" της Ανατολής! Το Βουκουρέστι είναι μια πόλη που συνδυάζει την παλιά με τη νέα εποχή, με εκπληκτική αρχιτεκτονική, πλούσια ιστορία και ζωντανή πολιτιστική σκηνή. Εξερευνήστε τα μνημεία, τα μουσεία, τα πάρκα και την παραδοσιακή κουζίνα της Ρουμανίας.',
        attractions: 'Τι να δείτε στο Βουκουρέστι\n\nΤο Βουκουρέστι προσφέρει μια πληθώρα αξιοθέατων. Επισκεφτείτε το Παλάτι του Κοινοβουλίου, το δεύτερο μεγαλύτερο διοικητικό κτίριο στον κόσμο, εξερευνήστε την Παλιά Πόλη με τα μπαρ, τα εστιατόρια και τα μουσεία της, και θαυμάστε την εκκλησία Stavropoleos με τη βυζαντινή της αρχιτεκτονική. Το Μουσείο του Χωρικού και το Μουσείο της Ιστορίας της Ρουμανίας προσφέρουν βαθιά γνώση για τον πολιτισμό και την ιστορία της χώρας.',
        food: 'Φαγητό στο Βουκουρέστι\n\nΗ ρουμανική κουζίνα είναι μια υπέροχη γαστρονομική εμπειρία που συνδυάζει επιρροές από διάφορες κουλτούρες. Δοκιμάστε παραδοσιακά πιάτα όπως το sarmale (λαχανοντολμάδες), το mici (μικρά κεμπάπ), το ciorbă (ξινή σούπα) και φυσικά το mămăligă (ρουμανικό καλαμπόκι). Τα εστιατόρια και τα μπαρ στην Παλιά Πόλη προσφέρουν μια ζωντανή ατμόσφαιρα με παραδοσιακή και διεθνή κουζίνα.'
      },
      gallery: [
        '/images/destinations/bucharest-hero-castle.png',
        '/images/hotels/bucharest-program.webp',
        '/images/hotels/Mercure-Unirii-Hotel-Bucharest.webp',
        '/images/hotels/Capitol-Hotel-Bucharest.webp',
        '/images/hotels/Novotel-City-Hotel-Bucharest.webp'
      ]
    }
  },
  {
    id: 12,
    title: 'Ζάγκρεμπ – 4 Μέρες',
    destination: 'Europe',
    category: 'City Breaks',
    price: 285,
    duration: '4 days / 3 nights',
    description: 'Discover Zagreb, the charming capital of Croatia, with its rich historical heritage and vibrant modern atmosphere.',
    longDescription: 'Zagreb, the capital of Croatia, is a picturesque city that combines rich historical heritage with a vibrant contemporary atmosphere. Located on the slopes of Mount Medvednica and on the banks of the Sava River, it is known for its beautiful architecture from the Austro-Hungarian era, its picturesque squares and lush gardens.',
    image: '🇭🇷',
    featured: true,
    details: {
      departureDate: '29/01, 05/02, 12/02, 19/02, 26/02, 05/03, 12/03',
      departureFrom: 'Paphos',
      destinationFull: 'Zagreb, Croatia',
      monthAvailability: 'January, February, March',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Ryanair',
      includedLuggage: '1 small hand luggage + 1 large hand luggage 10kg',
      coverImage: '/images/hotels/zagreb-cover.webp',
      flights: [
        {
          direction: 'Departure',
          date: '29/01, 05/02, 12/02, 19/02, 26/02, 05/03, 12/03',
          route: 'Paphos → Zagreb',
          flight: 'Ryanair FR5867',
          time: '09:55 → 12:05',
          luggage: '1 small hand luggage + 1 large hand luggage 10kg'
        },
        {
          direction: 'Return',
          date: 'Various dates',
          route: 'Zagreb → Paphos',
          flight: 'Ryanair FR5866',
          time: '05:45 → 09:30',
          luggage: '1 small hand luggage + 1 large hand luggage 10kg'
        }
      ],
      hotels: [
        {
          name: 'Central Hotel – Zagreb',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Central-hotel-zagreb.webp',
          prices: {
            double: 285
          },
          departureDate: '29/01',
          packagePrice: 570
        },
        {
          name: 'Central Hotel – Zagreb',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Central-hotel-zagreb.webp',
          prices: {
            double: 299
          },
          departureDate: '05/02',
          packagePrice: 598
        },
        {
          name: 'Central Hotel – Zagreb',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Central-hotel-zagreb.webp',
          prices: {
            double: 319
          },
          departureDate: '12/02',
          packagePrice: 638
        },
        {
          name: 'Central Hotel – Zagreb',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Central-hotel-zagreb.webp',
          prices: {
            double: 329
          },
          departureDate: '19/02',
          packagePrice: 658
        },
        {
          name: 'Central Hotel – Zagreb',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Central-hotel-zagreb.webp',
          prices: {
            double: 369
          },
          departureDate: '26/02',
          packagePrice: 738
        },
        {
          name: 'Central Hotel – Zagreb',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Central-hotel-zagreb.webp',
          prices: {
            double: 319
          },
          departureDate: '05/03',
          packagePrice: 638
        },
        {
          name: 'Central Hotel – Zagreb',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Central-hotel-zagreb.webp',
          prices: {
            double: 349
          },
          departureDate: '12/03',
          packagePrice: 698
        },
        {
          name: 'Dubrovnik Hotel – Zagreb',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Dubrovnik-hotel-zagreb.webp',
          prices: {
            double: 325
          },
          departureDate: '29/01',
          packagePrice: 650
        },
        {
          name: 'Dubrovnik Hotel – Zagreb',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Dubrovnik-hotel-zagreb.webp',
          prices: {
            double: 349
          },
          departureDate: '05/02',
          packagePrice: 698
        },
        {
          name: 'Dubrovnik Hotel – Zagreb',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Dubrovnik-hotel-zagreb.webp',
          prices: {
            double: 365
          },
          departureDate: '12/02',
          packagePrice: 730
        },
        {
          name: 'Dubrovnik Hotel – Zagreb',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Dubrovnik-hotel-zagreb.webp',
          prices: {
            double: 339
          },
          departureDate: '19/02',
          packagePrice: 678
        },
        {
          name: 'Dubrovnik Hotel – Zagreb',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Dubrovnik-hotel-zagreb.webp',
          prices: {
            double: 349
          },
          departureDate: '26/02',
          packagePrice: 698
        },
        {
          name: 'Dubrovnik Hotel – Zagreb',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Dubrovnik-hotel-zagreb.webp',
          prices: {
            double: 379
          },
          departureDate: '05/03',
          packagePrice: 758
        },
        {
          name: 'Dubrovnik Hotel – Zagreb',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/Dubrovnik-hotel-zagreb.webp',
          prices: {
            double: 405
          },
          departureDate: '12/03',
          packagePrice: 810
        },
        {
          name: 'DoubleTree by Hilton – Zagreb',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/DoubleTree-by-hilton-zagreb.webp',
          prices: {
            double: 349
          },
          departureDate: '29/01',
          packagePrice: 698
        },
        {
          name: 'DoubleTree by Hilton – Zagreb',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/DoubleTree-by-hilton-zagreb.webp',
          prices: {
            double: 375
          },
          departureDate: '05/02',
          packagePrice: 750
        },
        {
          name: 'DoubleTree by Hilton – Zagreb',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/DoubleTree-by-hilton-zagreb.webp',
          prices: {
            double: 415
          },
          departureDate: '12/02',
          packagePrice: 830
        },
        {
          name: 'DoubleTree by Hilton – Zagreb',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/DoubleTree-by-hilton-zagreb.webp',
          prices: {
            double: 399
          },
          departureDate: '19/02',
          packagePrice: 798
        },
        {
          name: 'DoubleTree by Hilton – Zagreb',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/DoubleTree-by-hilton-zagreb.webp',
          prices: {
            double: 445
          },
          departureDate: '26/02',
          packagePrice: 890
        },
        {
          name: 'DoubleTree by Hilton – Zagreb',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/DoubleTree-by-hilton-zagreb.webp',
          prices: {
            double: 405
          },
          departureDate: '05/03',
          packagePrice: 810
        },
        {
          name: 'DoubleTree by Hilton – Zagreb',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/DoubleTree-by-hilton-zagreb.webp',
          prices: {
            double: 379
          },
          departureDate: '12/03',
          packagePrice: 758
        }
      ],
      included: [
        'Αεροπορικό εισιτήριο Πάφος – Ζάγκρεμπ – Πάφος με πτήσεις της Ryan Air',
        'Φόροι αεροδρομίων',
        '3 διανυκτερεύσεις σε ένα από τα πιο πάνω ξενοδοχεία με πρόγευμα',
        'Μία μικρή χειραποσκευή (μήκ. 40 x 20 x 25 εκ.) για κάτω από το κάθισμα και μία μεγάλη χειραποσκευή 10kg (μήκ. 55 x 40 x 20 εκ.)',
        'Υπηρεσίες του αντιπροσώπου μας'
      ],
      notIncluded: [
        'Ασφάλεια ταξιδιού'
      ],
      cancellationPolicy: 'Prices do not change at the time of booking. A 30% deposit is required; final payment must be made 21 days before departure. Cancellation up to 45 days before departure → €50 administrative fee. Cancellation 44–31 days before departure → 30% charge. Cancellation 30–21 days before departure → 50% charge. Cancellation 20 days or less before departure → 100% charge. For charter flights, cruises, conferences & international fairs → cancellation fees may reach 100%.',
      termsAndConditions: [
        'Prices do not change at the time of booking.',
        'A 30% deposit is required; final payment must be made 21 days before departure.',
        'Cancellation up to 45 days before departure → €50 administrative fee',
        'Cancellation 44–31 days before departure → 30% charge',
        'Cancellation 30–21 days before departure → 50% charge',
        'Cancellation 20 days or less before departure → 100% charge',
        'For charter flights, cruises, conferences & international fairs → cancellation fees may reach 100%'
      ],
      program: {
        introduction: 'Το Ζάγκρεμπ, η πρωτεύουσα της Κροατίας, είναι μια γραφική πόλη που συνδυάζει πλούσια ιστορική κληρονομιά με μια ζωντανή σύγχρονη ατμόσφαιρα. Βρίσκεται στις πλαγιές του όρους Μέντβεννικα και στις όχθες του ποταμού Σάβα, και είναι γνωστή για την όμορφη αρχιτεκτονική της από την εποχή της Αυστροουγγαρίας, τις γραφικές πλατείες και τους καταπράσινους κήπους της. Η πόλη χωρίζεται στην Άνω Πόλη (Gornji Grad), με τα λιθόστρωτα δρομάκια και τα ιστορικά αξιοθέατα όπως η Εκκλησία του Αγίου Μάρκου, και στην Κάτω Πόλη (Donji Grad), η οποία διαθέτει κομψά καταστήματα, μουσεία και καφέ. Με μια δυναμική πολιτιστική σκηνή, πλούσιες εορταστικές εκδηλώσεις και φιλόξενους κατοίκους, το Ζάγκρεμπ προσφέρει μια μοναδική εμπειρία στους επισκέπτες καθ\' όλη τη διάρκεια του χρόνου.'
      },
      gallery: [
        '/images/destinations/zagreb-cover.webp',
        '/images/hotels/Central-hotel-zagreb.webp',
        '/images/hotels/Dubrovnik-hotel-zagreb.webp',
        '/images/hotels/DoubleTree-by-hilton-zagreb.webp'
      ]
    }
  },
  {
    id: 13,
    title: 'ΣΟΦΙΑ – 5 Μέρες',
    destination: 'Europe',
    category: 'City Breaks',
    price: 335,
    duration: '5 days / 4 nights',
    description: 'Discover Sofia, the capital of Bulgaria, with its rich history, beautiful architecture, and vibrant culture.',
    longDescription: 'Sofia, the capital of Bulgaria, is a fascinating city that combines ancient history with modern charm. Located at the foot of Vitosha Mountain, Sofia offers visitors a unique blend of Roman ruins, Orthodox churches, Ottoman mosques, and contemporary architecture. Explore the city\'s rich cultural heritage, enjoy traditional Bulgarian cuisine, and experience the warm hospitality of this Eastern European gem.',
    image: '🇧🇬',
    featured: true,
    details: {
      departureDate: '28/01, 04/02, 11/02, 18/02, 25/02, 04/03, 11/03, 18/03',
      departureFrom: 'Paphos',
      destinationFull: 'Sofia, Bulgaria',
      monthAvailability: 'January, February, March',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Ryanair',
      includedLuggage: '1 small hand luggage (40 x 30 x 20 cm) + 1 large hand luggage 10kg (55 x 40 x 23 cm)',
      coverImage: '/images/city-breaks/sofia-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '28/01, 04/02, 11/02, 18/02, 25/02, 04/03, 11/03, 18/03',
          route: 'Paphos (PFO) → Sofia (SOF)',
          flight: 'Ryanair',
          time: '09:40 → 11:55',
          luggage: '1 small hand luggage (40 x 30 x 20 cm)'
        },
        {
          direction: 'Return',
          date: 'Various dates',
          route: 'Sofia (SOF) → Paphos (PFO)',
          flight: 'Ryanair',
          time: '12:40 → 14:55',
          luggage: '1 small hand luggage (40 x 30 x 20 cm)'
        }
      ],
      hotels: [
        {
          name: 'Budapest Hotel – Sofia',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/budapest-hotel-sofia.webp',
          location: '92 A Budapest Street Centrum, 1202, Sofia, Bulgaria',
          prices: {
            double: 359
          },
          departureDate: '28/01',
          packagePrice: 718
        },
        {
          name: 'Budapest Hotel – Sofia',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/budapest-hotel-sofia.webp',
          location: '92 A Budapest Street Centrum, 1202, Sofia, Bulgaria',
          prices: {
            double: 359
          },
          departureDate: '04/02',
          packagePrice: 718
        },
        {
          name: 'Budapest Hotel – Sofia',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/budapest-hotel-sofia.webp',
          location: '92 A Budapest Street Centrum, 1202, Sofia, Bulgaria',
          prices: {
            double: 335
          },
          departureDate: '11/02',
          packagePrice: 670
        },
        {
          name: 'Budapest Hotel – Sofia',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/budapest-hotel-sofia.webp',
          location: '92 A Budapest Street Centrum, 1202, Sofia, Bulgaria',
          prices: {
            double: 359
          },
          departureDate: '18/02',
          packagePrice: 718
        },
        {
          name: 'Budapest Hotel – Sofia',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/budapest-hotel-sofia.webp',
          location: '92 A Budapest Street Centrum, 1202, Sofia, Bulgaria',
          prices: {
            double: 359
          },
          departureDate: '25/02',
          packagePrice: 718
        },
        {
          name: 'Budapest Hotel – Sofia',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/budapest-hotel-sofia.webp',
          location: '92 A Budapest Street Centrum, 1202, Sofia, Bulgaria',
          prices: {
            double: 399
          },
          departureDate: '04/03',
          packagePrice: 798
        },
        {
          name: 'Lion Hotel – Sofia',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/lion-hotel-sofia.webp',
          location: '2 Vasil Kalchev Str, 1172, Sofia, Bulgaria',
          prices: {
            double: 379
          },
          departureDate: '28/01',
          packagePrice: 758
        },
        {
          name: 'Lion Hotel – Sofia',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/lion-hotel-sofia.webp',
          location: '2 Vasil Kalchev Str, 1172, Sofia, Bulgaria',
          prices: {
            double: 379
          },
          departureDate: '04/02',
          packagePrice: 758
        },
        {
          name: 'Lion Hotel – Sofia',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/lion-hotel-sofia.webp',
          location: '2 Vasil Kalchev Str, 1172, Sofia, Bulgaria',
          prices: {
            double: 379
          },
          departureDate: '11/02',
          packagePrice: 758
        },
        {
          name: 'Lion Hotel – Sofia',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/lion-hotel-sofia.webp',
          location: '2 Vasil Kalchev Str, 1172, Sofia, Bulgaria',
          prices: {
            double: 399
          },
          departureDate: '18/02',
          packagePrice: 798
        },
        {
          name: 'Lion Hotel – Sofia',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/lion-hotel-sofia.webp',
          location: '2 Vasil Kalchev Str, 1172, Sofia, Bulgaria',
          prices: {
            double: 399
          },
          departureDate: '25/02',
          packagePrice: 798
        },
        {
          name: 'Lion Hotel – Sofia',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/lion-hotel-sofia.webp',
          location: '2 Vasil Kalchev Str, 1172, Sofia, Bulgaria',
          prices: {
            double: 399
          },
          departureDate: '04/03',
          packagePrice: 798
        },
        {
          name: 'COOP Hotel – Sofia',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/coop-hotel-sofia.webp',
          location: '99 G. S. Rakovski Str., 1000, Sofia, Bulgaria',
          prices: {
            double: 379
          },
          departureDate: '28/01',
          packagePrice: 758
        },
        {
          name: 'COOP Hotel – Sofia',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/coop-hotel-sofia.webp',
          location: '99 G. S. Rakovski Str., 1000, Sofia, Bulgaria',
          prices: {
            double: 399
          },
          departureDate: '04/02',
          packagePrice: 798
        },
        {
          name: 'COOP Hotel – Sofia',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/coop-hotel-sofia.webp',
          location: '99 G. S. Rakovski Str., 1000, Sofia, Bulgaria',
          prices: {
            double: 399
          },
          departureDate: '11/02',
          packagePrice: 798
        },
        {
          name: 'COOP Hotel – Sofia',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/coop-hotel-sofia.webp',
          location: '99 G. S. Rakovski Str., 1000, Sofia, Bulgaria',
          prices: {
            double: 429
          },
          departureDate: '18/02',
          packagePrice: 858
        },
        {
          name: 'COOP Hotel – Sofia',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/coop-hotel-sofia.webp',
          location: '99 G. S. Rakovski Str., 1000, Sofia, Bulgaria',
          prices: {
            double: 439
          },
          departureDate: '25/02',
          packagePrice: 878
        },
        {
          name: 'COOP Hotel – Sofia',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/coop-hotel-sofia.webp',
          location: '99 G. S. Rakovski Str., 1000, Sofia, Bulgaria',
          prices: {
            double: 459
          },
          departureDate: '04/03',
          packagePrice: 918
        }
      ],
      included: [
        'Αεροπορικό εισιτήριο Πάφος – Σόφια – Πάφος με πτήσεις της Ryan Air',
        'Φόροι αεροδρομίων',
        '4 διανυκτερεύσεις σε ένα από τα πιο πάνω ξενοδοχεία με πρόγευμα',
        'Μια μικρή χειραποσκευή (μχ. 40 x 30 x 20 εκ.) για κάτω από το κάθισμα και μια μεγάλη χειραποσκευή 10kg (μχ. 55 x 40 x 23 εκ.)',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Ασφάλεια ταξιδιού'
      ],
      cancellationPolicy: 'Prices do not change at the time of booking. A 30% deposit is required; final payment must be made 21 days before departure. Cancellation up to 45 days before departure → €50 administrative fee. Cancellation 44–31 days before departure → 30% charge. Cancellation 30–21 days before departure → 50% charge. Cancellation 20 days or less before departure → 100% charge. For charter flights, cruises, conferences & international fairs → cancellation fees may reach 100%.',
      termsAndConditions: [
        'Prices do not change at the time of booking.',
        'A 30% deposit is required; final payment must be made 21 days before departure.',
        'Cancellation up to 45 days before departure → €50 administrative fee',
        'Cancellation 44–31 days before departure → 30% charge',
        'Cancellation 30–21 days before departure → 50% charge',
        'Cancellation 20 days or less before departure → 100% charge',
        'For charter flights, cruises, conferences & international fairs → cancellation fees may reach 100%'
      ],
      program: {
        introduction: 'Η Σόφια, η πρωτεύουσα της Βουλγαρίας, είναι μια γοητευτική πόλη που συνδυάζει πλούσια ιστορία με σύγχρονη ατμόσφαιρα. Βρίσκεται στους πρόποδες του βουνού Βιτόσα και προσφέρει στους επισκέπτες μια μοναδική εμπειρία με ρωμαϊκά ερείπια, ορθόδοξες εκκλησίες, οθωμανικά τζαμιά και σύγχρονη αρχιτεκτονική. Εξερευνήστε την πλούσια πολιτιστική κληρονομιά της πόλης, απολαύστε την παραδοσιακή βουλγαρική κουζίνα και γνωρίστε τη φιλοξενία αυτού του ανατολικοευρωπαϊκού διαμαντιού.'
      },
      gallery: [
        '/images/city-breaks/sofia-hero.webp',
        '/images/hotels/budapest-hotel-sofia.webp',
        '/images/hotels/lion-hotel-sofia.webp',
        '/images/hotels/coop-hotel-sofia.webp'
      ]
    }
  },
  {
    id: 14,
    title: 'ΚΡΑΚΟΒΙΑ – 4 Μέρες',
    destination: 'Europe',
    category: 'City Breaks',
    price: 355,
    duration: '4 days / 3 nights',
    description: 'Discover Krakow, one of Poland\'s oldest and most culturally rich cities, with its stunning architecture and history.',
    longDescription: 'Krakow, one of Poland\'s oldest and most culturally rich cities, impresses with its architecture and history. Its historic center, a UNESCO World Heritage Site, hosts the main square (Rynek Główny), filled with colorful buildings, historic churches, and vibrant cafes. The city\'s rich heritage combines with modern amenities, making it a popular destination for tourists. From the charm of its historic streets to the warmth of its people, Krakow offers a unique experience that invites visitors to discover its many facets.',
    image: '🇵🇱',
    featured: true,
    details: {
      departureDate: '30/01, 06/02, 13/02, 20/02, 27/02, 06/03, 13/03, 20/03',
      departureFrom: 'Paphos',
      destinationFull: 'Krakow, Poland',
      monthAvailability: 'January, February, March',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Ryanair',
      includedLuggage: '1 small hand luggage (40 x 20 x 25 cm) + 1 large hand luggage 10kg (55 x 40 x 20 cm)',
      coverImage: '/images/city-breaks/krakow-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '30/01, 06/02, 13/02, 20/02, 27/02, 06/03, 13/03, 20/03',
          route: 'Paphos → Krakow',
          flight: 'Ryanair FR5086',
          time: '06:00 → 08:05',
          luggage: '1 small hand luggage (40 x 20 x 25 cm)'
        },
        {
          direction: 'Return',
          date: 'Various dates',
          route: 'Krakow → Paphos',
          flight: 'Ryanair FR5087',
          time: '06:15 → 10:20',
          luggage: '1 small hand luggage (40 x 20 x 25 cm)'
        }
      ],
      hotels: [
        {
          name: 'Down Town Hotel – Krakow',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/downtown-hotel-krakow.webp',
          location: 'ul. Ludwika Zamenhofa 14, Old Town, Kraków, Poland',
          prices: {
            double: 379
          },
          departureDate: '30/01',
          packagePrice: 758
        },
        {
          name: 'Down Town Hotel – Krakow',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/downtown-hotel-krakow.webp',
          location: 'ul. Ludwika Zamenhofa 14, Old Town, Kraków, Poland',
          prices: {
            double: 419
          },
          departureDate: '13/02',
          packagePrice: 838
        },
        {
          name: 'Down Town Hotel – Krakow',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/downtown-hotel-krakow.webp',
          location: 'ul. Ludwika Zamenhofa 14, Old Town, Kraków, Poland',
          prices: {
            double: 355
          },
          departureDate: '20/02',
          packagePrice: 710
        },
        {
          name: 'Down Town Hotel – Krakow',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/downtown-hotel-krakow.webp',
          location: 'ul. Ludwika Zamenhofa 14, Old Town, Kraków, Poland',
          prices: {
            double: 359
          },
          departureDate: '27/02',
          packagePrice: 718
        },
        {
          name: 'Down Town Hotel – Krakow',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/downtown-hotel-krakow.webp',
          location: 'ul. Ludwika Zamenhofa 14, Old Town, Kraków, Poland',
          prices: {
            double: 369
          },
          departureDate: '06/03',
          packagePrice: 738
        },
        {
          name: 'Down Town Hotel – Krakow',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/downtown-hotel-krakow.webp',
          location: 'ul. Ludwika Zamenhofa 14, Old Town, Kraków, Poland',
          prices: {
            double: 399
          },
          departureDate: '13/03',
          packagePrice: 798
        },
        {
          name: 'Plaza Boutique Hotel – Krakow',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/plaza-boutique-hotel-krakow.webp',
          location: 'Plaza Boutique Hotel, Krakow, Poland',
          prices: {
            double: 489
          },
          departureDate: '30/01',
          packagePrice: 978
        },
        {
          name: 'Plaza Boutique Hotel – Krakow',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/plaza-boutique-hotel-krakow.webp',
          location: 'Plaza Boutique Hotel, Krakow, Poland',
          prices: {
            double: 445
          },
          departureDate: '06/02',
          packagePrice: 890
        },
        {
          name: 'Plaza Boutique Hotel – Krakow',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/plaza-boutique-hotel-krakow.webp',
          location: 'Plaza Boutique Hotel, Krakow, Poland',
          prices: {
            double: 479
          },
          departureDate: '13/02',
          packagePrice: 958
        },
        {
          name: 'Plaza Boutique Hotel – Krakow',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/plaza-boutique-hotel-krakow.webp',
          location: 'Plaza Boutique Hotel, Krakow, Poland',
          prices: {
            double: 399
          },
          departureDate: '20/02',
          packagePrice: 798
        },
        {
          name: 'Plaza Boutique Hotel – Krakow',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/plaza-boutique-hotel-krakow.webp',
          location: 'Plaza Boutique Hotel, Krakow, Poland',
          prices: {
            double: 475
          },
          departureDate: '27/02',
          packagePrice: 950
        },
        {
          name: 'Plaza Boutique Hotel – Krakow',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/plaza-boutique-hotel-krakow.webp',
          location: 'Plaza Boutique Hotel, Krakow, Poland',
          prices: {
            double: 489
          },
          departureDate: '06/03',
          packagePrice: 978
        },
        {
          name: 'Plaza Boutique Hotel – Krakow',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/plaza-boutique-hotel-krakow.webp',
          location: 'Plaza Boutique Hotel, Krakow, Poland',
          prices: {
            double: 475
          },
          departureDate: '13/03',
          packagePrice: 950
        },
        {
          name: 'Tribe Krakow Old Town',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/tribe-krakow-old-town.webp',
          location: 'Tribe Krakow Old Town, Krakow, Poland',
          prices: {
            double: 499
          },
          departureDate: '30/01',
          packagePrice: 998
        },
        {
          name: 'Tribe Krakow Old Town',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/tribe-krakow-old-town.webp',
          location: 'Tribe Krakow Old Town, Krakow, Poland',
          prices: {
            double: 459
          },
          departureDate: '06/02',
          packagePrice: 918
        },
        {
          name: 'Tribe Krakow Old Town',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/tribe-krakow-old-town.webp',
          location: 'Tribe Krakow Old Town, Krakow, Poland',
          prices: {
            double: 499
          },
          departureDate: '13/02',
          packagePrice: 998
        },
        {
          name: 'Tribe Krakow Old Town',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/tribe-krakow-old-town.webp',
          location: 'Tribe Krakow Old Town, Krakow, Poland',
          prices: {
            double: 459
          },
          departureDate: '20/02',
          packagePrice: 918
        },
        {
          name: 'Tribe Krakow Old Town',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/tribe-krakow-old-town.webp',
          location: 'Tribe Krakow Old Town, Krakow, Poland',
          prices: {
            double: 499
          },
          departureDate: '27/02',
          packagePrice: 998
        },
        {
          name: 'Tribe Krakow Old Town',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/tribe-krakow-old-town.webp',
          location: 'Tribe Krakow Old Town, Krakow, Poland',
          prices: {
            double: 459
          },
          departureDate: '06/03',
          packagePrice: 918
        },
        {
          name: 'Tribe Krakow Old Town',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/tribe-krakow-old-town.webp',
          location: 'Tribe Krakow Old Town, Krakow, Poland',
          prices: {
            double: 499
          },
          departureDate: '13/03',
          packagePrice: 998
        },
        {
          name: 'Tribe Krakow Old Town',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/tribe-krakow-old-town.webp',
          location: 'Tribe Krakow Old Town, Krakow, Poland',
          prices: {
            double: 459
          },
          departureDate: '20/03',
          packagePrice: 918
        }
      ],
      included: [
        'Αεροπορικό εισιτήριο Πάφος – Κρακοβία – Πάφος με πτήσεις της Ryan Air',
        'Φόροι αεροδρομίων',
        '3 διανυκτερεύσεις σε ένα από τα πιο πάνω ξενοδοχεία με πρόγευμα',
        'Μία μικρή χειραποσκευή (μέγ. 40 x 20 x 25 εκ.) για κάτω από το κάθισμα και μία μεγάλη χειραποσκευή 10kg (μέγ. 55 x 40 x 20 εκ.)',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Ασφάλεια ταξιδιού'
      ],
      cancellationPolicy: 'Τα πακέτα δεν ακυρώνονται και δεν επιστρέφονται χρήματα. Οι τιμές ενδέχεται να αλλάξουν λόγω διαθεσιμότητας. Πλήρης εξόφληση κατά την κράτηση.',
      termsAndConditions: [
        'Τα πακέτα δεν ακυρώνονται και δεν επιστρέφονται χρήματα',
        'Οι τιμές ενδέχεται να αλλάξουν λόγω διαθεσιμότητας',
        'Πλήρης εξόφληση κατά την κράτηση'
      ],
      program: {
        introduction: 'Η Κρακοβία, μία από τις παλαιότερες και πιο πολιτιστικά πλούσιες πόλεις της Πολωνίας, εντυπωσιάζει με την αρχιτεκτονική και την ιστορία της. Το ιστορικό κέντρο της, μνημείο παγκόσμιας κληρονομιάς της UNESCO, φιλοξενεί την κεντρική πλατεία (Rynek Główny), γεμάτη με πολύχρωμα κτίρια, ιστορικές εκκλησίες και ζωντανά καφέ. Η πλούσια κληρονομιά της πόλης συνδυάζεται με σύγχρονες ανέσεις, κάνοντάς την έναν δημοφιλή προορισμό για τουρίστες. Από τη γοητεία των ιστορικών της δρόμων μέχρι τη ζεστασιά των ανθρώπων της, η Κρακοβία προσφέρει μια μοναδική εμπειρία που προσκαλεί τους επισκέπτες να ανακαλύψουν τις πολλές της πτυχές.'
      },
      gallery: [
        '/images/city-breaks/krakow-hero.webp',
        '/images/hotels/downtown-hotel-krakow.webp',
        '/images/hotels/plaza-boutique-hotel-krakow.webp',
        '/images/hotels/tribe-krakow-old-town.webp'
      ]
    }
  },
  {
    id: 15,
    title: 'ΒΙΕΝΝΗ – 4 Μέρες',
    destination: 'Europe',
    category: 'City Breaks',
    price: 375,
    duration: '4 days / 3 nights',
    description: 'Πάφος – Βιέννη – Πάφος με Ryanair',
    longDescription: 'Discover Vienna, the imperial capital of Austria, with its magnificent palaces, classical music heritage, and elegant coffeehouse culture. Explore the historic center, visit the Schönbrunn Palace, enjoy world-class museums, and experience the charm of this beautiful European capital.',
    image: '🇦🇹',
    featured: true,
    details: {
      departureDate: '29/01, 05/02, 12/02, 19/02, 26/02, 05/03, 12/03, 19/03',
      departureFrom: 'Paphos',
      destinationFull: 'Vienna, Austria',
      monthAvailability: 'January, February, March',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Ryanair',
      includedLuggage: '1 small hand luggage (40 x 20 x 25 cm)',
      coverImage: '/images/city-breaks/vienna-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '29/01, 05/02, 12/02, 19/02, 26/02, 05/03, 12/03, 19/03',
          route: 'Paphos (PFO) → Vienna (VIE)',
          flight: 'Ryanair FR 722',
          time: '10:45 → 13:05',
          luggage: '1 small hand luggage (40 x 20 x 25 cm)'
        },
        {
          direction: 'Return',
          date: 'Various dates',
          route: 'Vienna (VIE) → Paphos (PFO)',
          flight: 'Ryanair FR 721',
          time: '06:00 → 10:20',
          luggage: '1 small hand luggage (40 x 20 x 25 cm)'
        }
      ],
      hotels: [
        {
          name: 'Best Western Plus Amedia Hotel – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/best-western-plus-amedia-vienna.webp',
          location: 'Best Western Plus Amedia Hotel, Vienna, Austria',
          prices: {
            double: 375
          },
          departureDate: '29/01',
          packagePrice: 750
        },
        {
          name: 'Best Western Plus Amedia Hotel – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/best-western-plus-amedia-vienna.webp',
          location: 'Best Western Plus Amedia Hotel, Vienna, Austria',
          prices: {
            double: 415
          },
          departureDate: '05/02',
          packagePrice: 830
        },
        {
          name: 'Best Western Plus Amedia Hotel – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/best-western-plus-amedia-vienna.webp',
          location: 'Best Western Plus Amedia Hotel, Vienna, Austria',
          prices: {
            double: 455
          },
          departureDate: '12/02',
          packagePrice: 910
        },
        {
          name: 'Best Western Plus Amedia Hotel – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/best-western-plus-amedia-vienna.webp',
          location: 'Best Western Plus Amedia Hotel, Vienna, Austria',
          prices: {
            double: 439
          },
          departureDate: '19/02',
          packagePrice: 878
        },
        {
          name: 'Best Western Plus Amedia Hotel – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/best-western-plus-amedia-vienna.webp',
          location: 'Best Western Plus Amedia Hotel, Vienna, Austria',
          prices: {
            double: 479
          },
          departureDate: '26/02',
          packagePrice: 958
        },
        {
          name: 'Best Western Plus Amedia Hotel – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/best-western-plus-amedia-vienna.webp',
          location: 'Best Western Plus Amedia Hotel, Vienna, Austria',
          prices: {
            double: 385
          },
          departureDate: '05/03',
          packagePrice: 770
        },
        {
          name: 'Best Western Plus Amedia Hotel – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/best-western-plus-amedia-vienna.webp',
          location: 'Best Western Plus Amedia Hotel, Vienna, Austria',
          prices: {
            double: 435
          },
          departureDate: '12/03',
          packagePrice: 870
        },
        {
          name: 'Best Western Plus Amedia Hotel – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/best-western-plus-amedia-vienna.webp',
          location: 'Best Western Plus Amedia Hotel, Vienna, Austria',
          prices: {
            double: 399
          },
          departureDate: '19/03',
          packagePrice: 798
        },
        {
          name: 'Arcotel Kaiserwasser Hotel – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/arcotel-kaiserwasser-vienna.webp',
          location: 'Arcotel Kaiserwasser Hotel, Vienna, Austria',
          prices: {
            double: 445
          },
          departureDate: '29/01',
          packagePrice: 890
        },
        {
          name: 'Arcotel Kaiserwasser Hotel – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/arcotel-kaiserwasser-vienna.webp',
          location: 'Arcotel Kaiserwasser Hotel, Vienna, Austria',
          prices: {
            double: 405
          },
          departureDate: '05/02',
          packagePrice: 810
        },
        {
          name: 'Arcotel Kaiserwasser Hotel – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/arcotel-kaiserwasser-vienna.webp',
          location: 'Arcotel Kaiserwasser Hotel, Vienna, Austria',
          prices: {
            double: 439
          },
          departureDate: '12/02',
          packagePrice: 878
        },
        {
          name: 'Arcotel Kaiserwasser Hotel – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/arcotel-kaiserwasser-vienna.webp',
          location: 'Arcotel Kaiserwasser Hotel, Vienna, Austria',
          prices: {
            double: 425
          },
          departureDate: '19/02',
          packagePrice: 850
        },
        {
          name: 'Arcotel Kaiserwasser Hotel – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/arcotel-kaiserwasser-vienna.webp',
          location: 'Arcotel Kaiserwasser Hotel, Vienna, Austria',
          prices: {
            double: 465
          },
          departureDate: '26/02',
          packagePrice: 930
        },
        {
          name: 'Arcotel Kaiserwasser Hotel – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/arcotel-kaiserwasser-vienna.webp',
          location: 'Arcotel Kaiserwasser Hotel, Vienna, Austria',
          prices: {
            double: 445
          },
          departureDate: '05/03',
          packagePrice: 890
        },
        {
          name: 'Arcotel Kaiserwasser Hotel – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/arcotel-kaiserwasser-vienna.webp',
          location: 'Arcotel Kaiserwasser Hotel, Vienna, Austria',
          prices: {
            double: 499
          },
          departureDate: '12/03',
          packagePrice: 998
        },
        {
          name: 'Arcotel Kaiserwasser Hotel – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/arcotel-kaiserwasser-vienna.webp',
          location: 'Arcotel Kaiserwasser Hotel, Vienna, Austria',
          prices: {
            double: 459
          },
          departureDate: '19/03',
          packagePrice: 918
        },
        {
          name: 'Mercure Wien City – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/mercure-wien-city-vienna.webp',
          location: 'Mercure Wien City, Vienna, Austria',
          prices: {
            double: 455
          },
          departureDate: '29/01',
          packagePrice: 910
        },
        {
          name: 'Mercure Wien City – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/mercure-wien-city-vienna.webp',
          location: 'Mercure Wien City, Vienna, Austria',
          prices: {
            double: 485
          },
          departureDate: '05/02',
          packagePrice: 970
        },
        {
          name: 'Mercure Wien City – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/mercure-wien-city-vienna.webp',
          location: 'Mercure Wien City, Vienna, Austria',
          prices: {
            double: 505
          },
          departureDate: '12/02',
          packagePrice: 1010
        },
        {
          name: 'Mercure Wien City – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/mercure-wien-city-vienna.webp',
          location: 'Mercure Wien City, Vienna, Austria',
          prices: {
            double: 435
          },
          departureDate: '19/02',
          packagePrice: 870
        },
        {
          name: 'Mercure Wien City – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/mercure-wien-city-vienna.webp',
          location: 'Mercure Wien City, Vienna, Austria',
          prices: {
            double: 475
          },
          departureDate: '26/02',
          packagePrice: 950
        },
        {
          name: 'Mercure Wien City – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/mercure-wien-city-vienna.webp',
          location: 'Mercure Wien City, Vienna, Austria',
          prices: {
            double: 745
          },
          departureDate: '05/03',
          packagePrice: 1490
        },
        {
          name: 'Mercure Wien City – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/mercure-wien-city-vienna.webp',
          location: 'Mercure Wien City, Vienna, Austria',
          prices: {
            double: 535
          },
          departureDate: '12/03',
          packagePrice: 1070
        },
        {
          name: 'Mercure Wien City – Vienna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/mercure-wien-city-vienna.webp',
          location: 'Mercure Wien City, Vienna, Austria',
          prices: {
            double: 459
          },
          departureDate: '19/03',
          packagePrice: 918
        }
      ],
      included: [
        'Αεροπορικό εισιτήριο Πάφος – Βιέννη – Πάφος με πτήσεις της Ryan Air',
        'Φόροι αεροδρομίων',
        '3 διανυκτερεύσεις σε ένα από τα πιο πάνω ξενοδοχεία με πρόγευμα',
        'Μία μικρή χειραποσκευή (μέγ. 40 x 20 x 25 εκ.) για κάτω από το κάθισμα',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Ασφάλεια ταξιδιού'
      ],
      cancellationPolicy: 'Up to 150 days before departure → 100% charge. Cancellation up to 45 days before departure → €50 administrative fee. Cancellation 44–31 days before departure → 30% charge. Cancellation 30–21 days before departure → 50% charge. Cancellation 20 days or less before departure → 100% charge. For charter flights, cruises, conferences & international fairs → cancellation fees may reach 100%.',
      termsAndConditions: [
        'Up to 150 days before departure → 100% charge',
        'Cancellation up to 45 days before departure → €50 administrative fee',
        'Cancellation 44–31 days before departure → 30% charge',
        'Cancellation 30–21 days before departure → 50% charge',
        'Cancellation 20 days or less before departure → 100% charge',
        'For charter flights, cruises, conferences & international fairs → cancellation fees may reach 100%'
      ],
      program: {
        introduction: 'Η Βιέννη, η αυτοκρατορική πρωτεύουσα της Αυστρίας, είναι μια πόλη που συνδυάζει μεγαλοπρέπεια, πολιτιστική κληρονομιά και σύγχρονη κομψότητα. Εξερευνήστε το ιστορικό κέντρο της, επισκεφτείτε το Ανάκτορο Σένμπρουν, απολαύστε παγκόσμιας κλάσης μουσεία και γνωρίστε τη γοητεία αυτής της όμορφης ευρωπαϊκής πρωτεύουσας. Η Βιέννη προσφέρει μια μοναδική εμπειρία με την κλασική μουσική της, τα κομψά καφέ της και την εκπληκτική αρχιτεκτονική της.'
      },
      gallery: [
        '/images/city-breaks/vienna-hero.webp',
        '/images/hotels/best-western-plus-amedia-vienna.webp',
        '/images/hotels/arcotel-kaiserwasser-vienna.webp',
        '/images/hotels/mercure-wien-city-vienna.webp'
      ]
    }
  },
  {
    id: 16,
    title: 'ΜΙΛΑΝΟ – 4 Μέρες',
    destination: 'Europe',
    category: 'City Breaks',
    price: 499,
    duration: '4 days / 3 nights',
    description: 'Λάρνακα – Μιλάνο – Λάρνακα με Wizz Air',
    longDescription: 'Discover Milan, Italy\'s fashion and design capital, with its stunning Duomo, world-class shopping, and rich cultural heritage. Explore the historic center, visit the magnificent cathedral, enjoy Italian cuisine, and experience the vibrant atmosphere of this beautiful Italian city.',
    image: '🇮🇹',
    featured: true,
    details: {
      departureDate: '30/01, 27/02, 06/03, 13/03, 20/03',
      departureFrom: 'Larnaca',
      destinationFull: 'Milan, Italy',
      monthAvailability: 'January, February, March',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Wizz Air',
      includedLuggage: '1 small personal bag + 10kg cabin or included baggage per airline rules',
      coverImage: '/images/city-breaks/milan-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '30/01, 27/02, 06/03, 13/03, 20/03',
          route: 'Larnaca (LCA) → Milan (MXP)',
          flight: 'Wizz Air W6 6452',
          time: '12:05 → 15:05',
          luggage: '1 small bag'
        },
        {
          direction: 'Return',
          date: 'Various dates',
          route: 'Milan (MXP) → Larnaca (LCA)',
          flight: 'Wizz Air W6 6451',
          time: '06:10 → 10:50',
          luggage: '1 small bag'
        }
      ],
      hotels: [
        {
          name: 'Windsor Hotel – Milan',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/windsor-hotel-milan.webp',
          location: 'Windsor Hotel, Milan, Italy',
          prices: {
            double: 579
          },
          departureDate: '30/01',
          packagePrice: 1158
        },
        {
          name: 'Windsor Hotel – Milan',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/windsor-hotel-milan.webp',
          location: 'Windsor Hotel, Milan, Italy',
          prices: {
            double: 849
          },
          departureDate: '27/02',
          packagePrice: 1698
        },
        {
          name: 'Windsor Hotel – Milan',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/windsor-hotel-milan.webp',
          location: 'Windsor Hotel, Milan, Italy',
          prices: {
            double: 675
          },
          departureDate: '06/03',
          packagePrice: 1350
        },
        {
          name: 'Windsor Hotel – Milan',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/windsor-hotel-milan.webp',
          location: 'Windsor Hotel, Milan, Italy',
          prices: {
            double: 625
          },
          departureDate: '13/03',
          packagePrice: 1250
        },
        {
          name: 'Windsor Hotel – Milan',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/windsor-hotel-milan.webp',
          location: 'Windsor Hotel, Milan, Italy',
          prices: {
            double: 499
          },
          departureDate: '20/03',
          packagePrice: 998
        },
        {
          name: 'Brunelleschi Hotel – Milan',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/brunelleschi-hotel-milan.webp',
          location: 'Brunelleschi Hotel, Milan, Italy',
          prices: {
            double: 609
          },
          departureDate: '30/01',
          packagePrice: 1218
        },
        {
          name: 'Brunelleschi Hotel – Milan',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/brunelleschi-hotel-milan.webp',
          location: 'Brunelleschi Hotel, Milan, Italy',
          prices: {
            double: 745
          },
          departureDate: '27/02',
          packagePrice: 1490
        },
        {
          name: 'Brunelleschi Hotel – Milan',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/brunelleschi-hotel-milan.webp',
          location: 'Brunelleschi Hotel, Milan, Italy',
          prices: {
            double: 659
          },
          departureDate: '06/03',
          packagePrice: 1318
        },
        {
          name: 'Brunelleschi Hotel – Milan',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/brunelleschi-hotel-milan.webp',
          location: 'Brunelleschi Hotel, Milan, Italy',
          prices: {
            double: 619
          },
          departureDate: '13/03',
          packagePrice: 1238
        },
        {
          name: 'Brunelleschi Hotel – Milan',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/brunelleschi-hotel-milan.webp',
          location: 'Brunelleschi Hotel, Milan, Italy',
          prices: {
            double: 559
          },
          departureDate: '20/03',
          packagePrice: 1118
        },
        {
          name: 'Ariston Hotel – Milan',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/ariston-hotel-milan.webp',
          location: 'Ariston Hotel, Milan, Italy',
          prices: {
            double: 675
          },
          departureDate: '30/01',
          packagePrice: 1350
        },
        {
          name: 'Ariston Hotel – Milan',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/ariston-hotel-milan.webp',
          location: 'Ariston Hotel, Milan, Italy',
          prices: {
            double: 965
          },
          departureDate: '27/02',
          packagePrice: 1930
        },
        {
          name: 'Ariston Hotel – Milan',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/ariston-hotel-milan.webp',
          location: 'Ariston Hotel, Milan, Italy',
          prices: {
            double: 765
          },
          departureDate: '06/03',
          packagePrice: 1530
        },
        {
          name: 'Ariston Hotel – Milan',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/ariston-hotel-milan.webp',
          location: 'Ariston Hotel, Milan, Italy',
          prices: {
            double: 689
          },
          departureDate: '13/03',
          packagePrice: 1378
        },
        {
          name: 'Ariston Hotel – Milan',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/ariston-hotel-milan.webp',
          location: 'Ariston Hotel, Milan, Italy',
          prices: {
            double: 735
          },
          departureDate: '20/03',
          packagePrice: 1470
        }
      ],
      included: [
        'Αεροπορικό εισιτήριο Λάρνακα – Μιλάνο – Λάρνακα με πτήσεις της Wizz Air',
        'Φόροι αεροδρομίων',
        '3 διανυκτερεύσεις σε ένα από τα πιο πάνω ξενοδοχεία με πρόγευμα',
        'Μία μικρή προσωπική χειραποσκευή + 10kg καμπίνα ή συμπεριλαμβανόμενη αποσκευή σύμφωνα με τους κανόνες της αεροπορικής',
        'Υπηρεσίες των αντιπροσώπων της Honeywell Travel'
      ],
      notIncluded: [
        'Ασφάλεια ταξιδιού',
        'Οτιδήποτε δεν αναφέρεται παραπάνω'
      ],
      cancellationPolicy: 'Up to 150 days before departure → 100% charge. Cancellation up to 45 days before departure → €50 administrative fee. Cancellation 44–31 days before departure → 30% charge. Cancellation 30–21 days before departure → 50% charge. Cancellation 20 days or less before departure → 100% charge. For charter flights, cruises, conferences & international fairs → cancellation fees may reach 100%.',
      termsAndConditions: [
        'Τα πακέτα δεν ακυρώνονται και δεν επιστρέφονται χρήματα',
        'Οι τιμές ενδέχεται να αλλάξουν λόγω διαθεσιμότητας',
        'Πλήρης εξόφληση κατά την κράτηση (κάρτα ή τραπεζική μεταφορά)',
        'Up to 150 days before departure → 100% charge',
        'Cancellation up to 45 days before departure → €50 administrative fee',
        'Cancellation 44–31 days before departure → 30% charge',
        'Cancellation 30–21 days before departure → 50% charge',
        'Cancellation 20 days or less before departure → 100% charge',
        'For charter flights, cruises, conferences & international fairs → cancellation fees may reach 100%'
      ],
      program: {
        introduction: 'Το Μιλάνο, η πρωτεύουσα της μόδας και του σχεδιασμού της Ιταλίας, είναι μια πόλη που συνδυάζει εκπληκτική αρχιτεκτονική, παγκόσμιας κλάσης ψώνια και πλούσια πολιτιστική κληρονομιά. Εξερευνήστε το ιστορικό κέντρο, επισκεφτείτε τον εκπληκτικό Duomo, απολαύστε την ιταλική κουζίνα και γνωρίστε τη ζωντανή ατμόσφαιρα αυτής της όμορφης ιταλικής πόλης. Το Μιλάνο προσφέρει μια μοναδική εμπειρία με τα μουσεία της, τα σημαντικά μνημεία της και τη δυναμική πολιτιστική σκηνή της.'
      },
      gallery: [
        '/images/city-breaks/milan-hero.webp',
        '/images/hotels/windsor-hotel-milan.webp',
        '/images/hotels/brunelleschi-hotel-milan.webp',
        '/images/hotels/ariston-hotel-milan.webp'
      ]
    }
  },
  {
    id: 17,
    title: 'ΑΘΗΝΑ – 3 Μέρες',
    destination: 'Greece',
    category: 'City Breaks',
    price: 339,
    duration: '3 days / 2 nights',
    description: 'Πάφος – Αθήνα – Πάφος με Sky Express',
    longDescription: 'Όπου και αν κοιτάξει κανείς, η Αθήνα είναι γεμάτη με μνημεία του αρχαίου αλλά και του νεότερου πολιτισμού. Περιπλανώμενος στην Αθήνα και κάνοντας μια περιήγηση στα αξιοθέατά της, είναι σαν να περπατάς μέσα στην ίδια την ιστορία της.',
    image: '🇬🇷',
    featured: true,
    details: {
      departureDate: '30/01, 06/02, 13/02, 27/02, 06/03, 13/03, 20/03',
      departureFrom: 'Larnaca',
      destinationFull: 'Athens, Greece',
      monthAvailability: 'January, February, March',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Sky Express',
      includedLuggage: '1 checked bag 20kg + 1 hand luggage 8kg',
      coverImage: '/images/city-breaks/athens-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '30/01, 06/02, 13/02, 27/02, 06/03, 13/03, 20/03',
          route: 'Larnaca (LCA) → Athens (ATH)',
          flight: 'Sky Express',
          time: '07:15 → 09:00',
          luggage: '1 checked bag'
        },
        {
          direction: 'Return',
          date: 'Various dates',
          route: 'Athens (ATH) → Larnaca (LCA)',
          flight: 'Sky Express',
          time: '20:30 → 22:10',
          luggage: '1 checked bag'
        }
      ],
      hotels: [
        {
          name: 'Dorian Inn Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/dorian-inn-athens.webp',
          location: 'Dorian Inn Hotel, Athens, Greece',
          prices: {
            double: 339,
            single: 379,
            triple: 329,
            child1: 299
          },
          departureDate: '06/02',
          packagePrice: 678
        },
        {
          name: 'Dorian Inn Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/dorian-inn-athens.webp',
          location: 'Dorian Inn Hotel, Athens, Greece',
          prices: {
            double: 339,
            single: 379,
            triple: 329,
            child1: 299
          },
          departureDate: '27/02',
          packagePrice: 678
        },
        {
          name: 'Dorian Inn Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/dorian-inn-athens.webp',
          location: 'Dorian Inn Hotel, Athens, Greece',
          prices: {
            double: 339,
            single: 379,
            triple: 329,
            child1: 299
          },
          departureDate: '06/03',
          packagePrice: 678
        },
        {
          name: 'Dorian Inn Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/dorian-inn-athens.webp',
          location: 'Dorian Inn Hotel, Athens, Greece',
          prices: {
            double: 339,
            single: 379,
            triple: 329,
            child1: 299
          },
          departureDate: '13/03',
          packagePrice: 678
        },
        {
          name: 'Dorian Inn Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/dorian-inn-athens.webp',
          location: 'Dorian Inn Hotel, Athens, Greece',
          prices: {
            double: 339,
            single: 379,
            triple: 329,
            child1: 299
          },
          departureDate: '20/03',
          packagePrice: 678
        },
        {
          name: 'Achilleas Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/achilleas-athens.webp',
          location: 'Achilleas Hotel, Athens, Greece',
          prices: {
            double: 359,
            single: 469,
            triple: 339,
            child1: 315
          },
          departureDate: '06/02',
          packagePrice: 718
        },
        {
          name: 'Achilleas Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/achilleas-athens.webp',
          location: 'Achilleas Hotel, Athens, Greece',
          prices: {
            double: 359,
            single: 469,
            triple: 339,
            child1: 315
          },
          departureDate: '27/02',
          packagePrice: 718
        },
        {
          name: 'Pan Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/pan-athens.webp',
          location: 'Pan Hotel, Athens, Greece',
          prices: {
            double: 359,
            single: 435,
            triple: 339,
            child1: 299
          },
          departureDate: '06/02',
          packagePrice: 718
        },
        {
          name: 'Pan Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/pan-athens.webp',
          location: 'Pan Hotel, Athens, Greece',
          prices: {
            double: 359,
            single: 435,
            triple: 339,
            child1: 299
          },
          departureDate: '27/02',
          packagePrice: 718
        },
        {
          name: 'Pan Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/pan-athens.webp',
          location: 'Pan Hotel, Athens, Greece',
          prices: {
            double: 359,
            single: 435,
            triple: 339,
            child1: 299
          },
          departureDate: '06/03',
          packagePrice: 718
        },
        {
          name: 'Pan Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/pan-athens.webp',
          location: 'Pan Hotel, Athens, Greece',
          prices: {
            double: 359,
            single: 435,
            triple: 339,
            child1: 299
          },
          departureDate: '13/03',
          packagePrice: 718
        },
        {
          name: 'Pan Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/pan-athens.webp',
          location: 'Pan Hotel, Athens, Greece',
          prices: {
            double: 359,
            single: 435,
            triple: 339,
            child1: 299
          },
          departureDate: '20/03',
          packagePrice: 718
        },
        {
          name: 'The Alassia Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/alassia-athens.webp',
          location: 'The Alassia Hotel, Athens, Greece',
          prices: {
            double: 365,
            single: 439,
            triple: 339,
            child1: 299
          },
          departureDate: '06/02',
          packagePrice: 730
        },
        {
          name: 'The Alassia Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/alassia-athens.webp',
          location: 'The Alassia Hotel, Athens, Greece',
          prices: {
            double: 365,
            single: 439,
            triple: 339,
            child1: 299
          },
          departureDate: '27/02',
          packagePrice: 730
        },
        {
          name: 'The Alassia Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/alassia-athens.webp',
          location: 'The Alassia Hotel, Athens, Greece',
          prices: {
            double: 365,
            single: 439,
            triple: 339,
            child1: 299
          },
          departureDate: '06/03',
          packagePrice: 730
        },
        {
          name: 'The Alassia Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/alassia-athens.webp',
          location: 'The Alassia Hotel, Athens, Greece',
          prices: {
            double: 365,
            single: 439,
            triple: 339,
            child1: 299
          },
          departureDate: '13/03',
          packagePrice: 730
        },
        {
          name: 'The Alassia Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/alassia-athens.webp',
          location: 'The Alassia Hotel, Athens, Greece',
          prices: {
            double: 365,
            single: 439,
            triple: 339,
            child1: 299
          },
          departureDate: '20/03',
          packagePrice: 730
        },
        {
          name: 'The Lekka Hotel & Spa – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/lekka-hotel-athens.webp',
          location: 'The Lekka Hotel & Spa, Athens, Greece',
          prices: {
            double: 369,
            single: 489
          },
          departureDate: '06/02',
          packagePrice: 738
        },
        {
          name: 'The Lekka Hotel & Spa – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/lekka-hotel-athens.webp',
          location: 'The Lekka Hotel & Spa, Athens, Greece',
          prices: {
            double: 369,
            single: 489
          },
          departureDate: '27/02',
          packagePrice: 738
        },
        {
          name: 'The Lekka Hotel & Spa – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/lekka-hotel-athens.webp',
          location: 'The Lekka Hotel & Spa, Athens, Greece',
          prices: {
            double: 399,
            single: 539,
            triple: 369,
            child1: 349
          },
          departureDate: '06/03',
          packagePrice: 798
        },
        {
          name: 'The Lekka Hotel & Spa – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/lekka-hotel-athens.webp',
          location: 'The Lekka Hotel & Spa, Athens, Greece',
          prices: {
            double: 399,
            single: 539,
            triple: 369,
            child1: 349
          },
          departureDate: '13/03',
          packagePrice: 798
        },
        {
          name: 'The Lekka Hotel & Spa – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/lekka-hotel-athens.webp',
          location: 'The Lekka Hotel & Spa, Athens, Greece',
          prices: {
            double: 399,
            single: 539,
            triple: 369,
            child1: 349
          },
          departureDate: '20/03',
          packagePrice: 798
        },
        {
          name: 'Moxy Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/moxy-athens.webp',
          location: 'Moxy Hotel, Athens, Greece',
          prices: {
            double: 379,
            single: 489,
            triple: 369,
            child1: 309
          },
          departureDate: '06/02',
          packagePrice: 758
        },
        {
          name: 'Moxy Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/moxy-athens.webp',
          location: 'Moxy Hotel, Athens, Greece',
          prices: {
            double: 379,
            single: 489,
            triple: 369,
            child1: 309
          },
          departureDate: '27/02',
          packagePrice: 758
        },
        {
          name: 'Moxy Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/moxy-athens.webp',
          location: 'Moxy Hotel, Athens, Greece',
          prices: {
            double: 379,
            single: 489,
            triple: 369,
            child1: 309
          },
          departureDate: '06/03',
          packagePrice: 758
        },
        {
          name: 'Moxy Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/moxy-athens.webp',
          location: 'Moxy Hotel, Athens, Greece',
          prices: {
            double: 379,
            single: 489,
            triple: 369,
            child1: 309
          },
          departureDate: '13/03',
          packagePrice: 758
        },
        {
          name: 'Moxy Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/moxy-athens.webp',
          location: 'Moxy Hotel, Athens, Greece',
          prices: {
            double: 379,
            single: 489,
            triple: 369,
            child1: 309
          },
          departureDate: '20/03',
          packagePrice: 758
        },
        {
          name: 'Classic by Athens Prime Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/classic-athens-prime.webp',
          location: 'Classic by Athens Prime Hotel, Athens, Greece',
          prices: {
            double: 379,
            single: 489
          },
          departureDate: '06/02',
          packagePrice: 758
        },
        {
          name: 'Classic by Athens Prime Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/classic-athens-prime.webp',
          location: 'Classic by Athens Prime Hotel, Athens, Greece',
          prices: {
            double: 379,
            single: 489
          },
          departureDate: '27/02',
          packagePrice: 758
        },
        {
          name: 'Classic by Athens Prime Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/classic-athens-prime.webp',
          location: 'Classic by Athens Prime Hotel, Athens, Greece',
          prices: {
            double: 379,
            single: 489
          },
          departureDate: '06/03',
          packagePrice: 758
        },
        {
          name: 'Classic by Athens Prime Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/classic-athens-prime.webp',
          location: 'Classic by Athens Prime Hotel, Athens, Greece',
          prices: {
            double: 379,
            single: 489
          },
          departureDate: '13/03',
          packagePrice: 758
        },
        {
          name: 'Classic by Athens Prime Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/classic-athens-prime.webp',
          location: 'Classic by Athens Prime Hotel, Athens, Greece',
          prices: {
            double: 379,
            single: 489
          },
          departureDate: '20/03',
          packagePrice: 758
        },
        {
          name: 'Central Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/central-athens.webp',
          location: 'Central Hotel, Athens, Greece',
          prices: {
            double: 399,
            single: 529,
            triple: 369,
            child1: 309
          },
          departureDate: '06/02',
          packagePrice: 798
        },
        {
          name: 'Central Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/central-athens.webp',
          location: 'Central Hotel, Athens, Greece',
          prices: {
            double: 399,
            single: 529,
            triple: 369,
            child1: 309
          },
          departureDate: '27/02',
          packagePrice: 798
        },
        {
          name: 'Central Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/central-athens.webp',
          location: 'Central Hotel, Athens, Greece',
          prices: {
            double: 399,
            single: 529,
            triple: 369,
            child1: 309
          },
          departureDate: '06/03',
          packagePrice: 798
        },
        {
          name: 'Central Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/central-athens.webp',
          location: 'Central Hotel, Athens, Greece',
          prices: {
            double: 399,
            single: 529,
            triple: 369,
            child1: 309
          },
          departureDate: '13/03',
          packagePrice: 798
        },
        {
          name: 'Central Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/central-athens.webp',
          location: 'Central Hotel, Athens, Greece',
          prices: {
            double: 399,
            single: 529,
            triple: 369,
            child1: 309
          },
          departureDate: '20/03',
          packagePrice: 798
        },
        {
          name: 'Athens Cypria Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/athens-cypria.webp',
          location: 'Athens Cypria Hotel, Athens, Greece',
          prices: {
            double: 409,
            single: 539,
            triple: 389,
            child1: 339
          },
          departureDate: '06/02',
          packagePrice: 818
        },
        {
          name: 'Athens Cypria Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/athens-cypria.webp',
          location: 'Athens Cypria Hotel, Athens, Greece',
          prices: {
            double: 409,
            single: 539,
            triple: 389,
            child1: 339
          },
          departureDate: '27/02',
          packagePrice: 818
        },
        {
          name: 'Athens Cypria Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/athens-cypria.webp',
          location: 'Athens Cypria Hotel, Athens, Greece',
          prices: {
            double: 429,
            single: 569,
            triple: 399,
            child1: 349
          },
          departureDate: '06/03',
          packagePrice: 858
        },
        {
          name: 'Athens Cypria Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/athens-cypria.webp',
          location: 'Athens Cypria Hotel, Athens, Greece',
          prices: {
            double: 429,
            single: 569,
            triple: 399,
            child1: 349
          },
          departureDate: '13/03',
          packagePrice: 858
        },
        {
          name: 'Athens Cypria Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/athens-cypria.webp',
          location: 'Athens Cypria Hotel, Athens, Greece',
          prices: {
            double: 429,
            single: 569,
            triple: 399,
            child1: 349
          },
          departureDate: '20/03',
          packagePrice: 858
        },
        {
          name: 'Elia Ermou Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/elia-ermou.webp',
          location: 'Elia Ermou Hotel, Athens, Greece',
          prices: {
            double: 459,
            single: 649,
            triple: 439
          },
          departureDate: '06/02',
          packagePrice: 918
        },
        {
          name: 'Elia Ermou Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/elia-ermou.webp',
          location: 'Elia Ermou Hotel, Athens, Greece',
          prices: {
            double: 459,
            single: 649,
            triple: 439
          },
          departureDate: '27/02',
          packagePrice: 918
        },
        {
          name: 'Elia Ermou Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/elia-ermou.webp',
          location: 'Elia Ermou Hotel, Athens, Greece',
          prices: {
            double: 459,
            single: 649,
            triple: 439
          },
          departureDate: '06/03',
          packagePrice: 918
        },
        {
          name: 'Elia Ermou Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/elia-ermou.webp',
          location: 'Elia Ermou Hotel, Athens, Greece',
          prices: {
            double: 459,
            single: 649,
            triple: 439
          },
          departureDate: '13/03',
          packagePrice: 918
        },
        {
          name: 'Elia Ermou Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/elia-ermou.webp',
          location: 'Elia Ermou Hotel, Athens, Greece',
          prices: {
            double: 459,
            single: 649,
            triple: 439
          },
          departureDate: '20/03',
          packagePrice: 918
        },
        {
          name: 'Elia Ermou Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/elia-ermou.webp',
          location: 'Elia Ermou Hotel, Athens, Greece',
          prices: {
            double: 489,
            single: 699,
            triple: 459
          },
          departureDate: '06/03',
          packagePrice: 978
        },
        {
          name: 'Elia Ermou Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/elia-ermou.webp',
          location: 'Elia Ermou Hotel, Athens, Greece',
          prices: {
            double: 489,
            single: 699,
            triple: 459
          },
          departureDate: '13/03',
          packagePrice: 978
        },
        {
          name: 'Elia Ermou Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/elia-ermou.webp',
          location: 'Elia Ermou Hotel, Athens, Greece',
          prices: {
            double: 489,
            single: 699,
            triple: 459
          },
          departureDate: '20/03',
          packagePrice: 978
        },
        {
          name: 'Electra Rhythm Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/electra-rhythm-athens.webp',
          location: 'Electra Rhythm Hotel, Athens, Greece',
          prices: {
            double: 479,
            single: 699,
            triple: 449
          },
          departureDate: '06/02',
          packagePrice: 958
        },
        {
          name: 'Electra Rhythm Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/electra-rhythm-athens.webp',
          location: 'Electra Rhythm Hotel, Athens, Greece',
          prices: {
            double: 479,
            single: 699,
            triple: 449
          },
          departureDate: '27/02',
          packagePrice: 958
        },
        {
          name: 'Electra Rhythm Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/electra-rhythm-athens.webp',
          location: 'Electra Rhythm Hotel, Athens, Greece',
          prices: {
            double: 479,
            single: 699,
            triple: 449
          },
          departureDate: '06/03',
          packagePrice: 958
        },
        {
          name: 'Electra Rhythm Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/electra-rhythm-athens.webp',
          location: 'Electra Rhythm Hotel, Athens, Greece',
          prices: {
            double: 479,
            single: 699,
            triple: 449
          },
          departureDate: '13/03',
          packagePrice: 958
        },
        {
          name: 'Electra Rhythm Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/electra-rhythm-athens.webp',
          location: 'Electra Rhythm Hotel, Athens, Greece',
          prices: {
            double: 479,
            single: 699,
            triple: 449
          },
          departureDate: '20/03',
          packagePrice: 958
        },
        {
          name: 'Athens Capital Center Hotel – Athens',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/athens-capital-center.webp',
          location: 'Athens Capital Center Hotel, Athens, Greece',
          prices: {
            double: 529,
            single: 749
          },
          departureDate: '06/02',
          packagePrice: 1058
        },
        {
          name: 'Athens Capital Center Hotel – Athens',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/athens-capital-center.webp',
          location: 'Athens Capital Center Hotel, Athens, Greece',
          prices: {
            double: 529,
            single: 749
          },
          departureDate: '27/02',
          packagePrice: 1058
        },
        {
          name: 'Athens Capital Center Hotel – Athens',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/athens-capital-center.webp',
          location: 'Athens Capital Center Hotel, Athens, Greece',
          prices: {
            double: 529,
            single: 749
          },
          departureDate: '06/03',
          packagePrice: 1058
        },
        {
          name: 'Athens Capital Center Hotel – Athens',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/athens-capital-center.webp',
          location: 'Athens Capital Center Hotel, Athens, Greece',
          prices: {
            double: 529,
            single: 749
          },
          departureDate: '13/03',
          packagePrice: 1058
        },
        {
          name: 'Athens Capital Center Hotel – Athens',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/athens-capital-center.webp',
          location: 'Athens Capital Center Hotel, Athens, Greece',
          prices: {
            double: 529,
            single: 749
          },
          departureDate: '20/03',
          packagePrice: 1058
        },
        {
          name: 'Athens Capital Center Hotel – Athens',
          stars: 5,
          roomType: 'Superior Room',
          image: '/images/hotels/athens-capital-center.webp',
          location: 'Athens Capital Center Hotel, Athens, Greece',
          prices: {
            double: 565,
            single: 815,
            triple: 515,
            child1: 409
          },
          departureDate: '06/02',
          packagePrice: 1130
        },
        {
          name: 'Athens Capital Center Hotel – Athens',
          stars: 5,
          roomType: 'Superior Room',
          image: '/images/hotels/athens-capital-center.webp',
          location: 'Athens Capital Center Hotel, Athens, Greece',
          prices: {
            double: 565,
            single: 815,
            triple: 515,
            child1: 409
          },
          departureDate: '27/02',
          packagePrice: 1130
        },
        {
          name: 'Athens Capital Center Hotel – Athens',
          stars: 5,
          roomType: 'Superior Room',
          image: '/images/hotels/athens-capital-center.webp',
          location: 'Athens Capital Center Hotel, Athens, Greece',
          prices: {
            double: 565,
            single: 815,
            triple: 515,
            child1: 409
          },
          departureDate: '06/03',
          packagePrice: 1130
        },
        {
          name: 'Athens Capital Center Hotel – Athens',
          stars: 5,
          roomType: 'Superior Room',
          image: '/images/hotels/athens-capital-center.webp',
          location: 'Athens Capital Center Hotel, Athens, Greece',
          prices: {
            double: 565,
            single: 815,
            triple: 515,
            child1: 409
          },
          departureDate: '13/03',
          packagePrice: 1130
        },
        {
          name: 'Athens Capital Center Hotel – Athens',
          stars: 5,
          roomType: 'Superior Room',
          image: '/images/hotels/athens-capital-center.webp',
          location: 'Athens Capital Center Hotel, Athens, Greece',
          prices: {
            double: 565,
            single: 815,
            triple: 515,
            child1: 409
          },
          departureDate: '20/03',
          packagePrice: 1130
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Αθήνα – Λάρνακα με πτήσεις της Sky Express',
        'Φόροι αεροδρομίων και επίναυλοι καυσίμων',
        'Δύο διανυκτερεύσεις στο πιο πάνω ξενοδοχείο με πρόγευμα',
        'Μια αποσκευή 20 κιλών και μια χειραποσκευή 8 κιλών',
        'Υπηρεσίες του αντιπροσώπου μας',
        'Μεταφορές από και προς το αεροδρόμιο'
      ],
      notIncluded: [
        'Τοπικός φόρος διαμονής (πληρώνεται στο ξενοδοχείο)',
        'Φαγητό και ποτά στη πτήση'
      ],
      cancellationPolicy: 'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά την ώρα της κράτησης τους. Με την κράτηση των ταξιδιωτικών πακέτων δίνετε προκαταβολή 30% της αξίας. Ακύρωση συμμετοχής μέχρι 45 μέρες πριν την αναχώρηση → €50 διοικητικό τέλος. Ακύρωση συμμετοχής μεταξύ 44 και 31 ημερών πριν την αναχώρηση → 30% χρέωση. Ακύρωση συμμετοχής μεταξύ 30 και 21 ημερών πριν την αναχώρηση → 50% χρέωση. Ακύρωση συμμετοχής 20 μέρες πριν την αναχώρηση → 100% χρέωση. Για τα μέσα ομαδικής ναύλωσης, κρουαζιέρες, συνέδρια & διεθνή εκθέσεις → τα τέλη ακύρωσης μπορεί να φτάσουν το 100%.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά την ώρα της κράτησης τους',
        'Με την κράτηση των ταξιδιωτικών πακέτων δίνετε προκαταβολή 30% της αξίας',
        'Ακύρωση συμμετοχής μέχρι 45 μέρες πριν την αναχώρηση → €50 διοικητικό τέλος',
        'Ακύρωση συμμετοχής μεταξύ 44 και 31 ημερών πριν την αναχώρηση → 30% χρέωση',
        'Ακύρωση συμμετοχής μεταξύ 30 και 21 ημερών πριν την αναχώρηση → 50% χρέωση',
        'Ακύρωση συμμετοχής 20 μέρες πριν την αναχώρηση → 100% χρέωση',
        'Για τα μέσα ομαδικής ναύλωσης, κρουαζιέρες, συνέδρια & διεθνή εκθέσεις → τα τέλη ακύρωσης μπορεί να φτάσουν το 100%'
      ],
      program: {
        introduction: 'Όπου και αν κοιτάξει κανείς, η Αθήνα είναι γεμάτη με μνημεία του αρχαίου αλλά και του νεότερου πολιτισμού. Περιπλανώμενος στην Αθήνα και κάνοντας μια περιήγηση στα αξιοθέατά της, είναι σαν να περπατάς μέσα στην ίδια την ιστορία της. Αν, μάλιστα, έχεις διαβάσει λίγο την ιστορία της, τότε σε πιάνει ένας ρίγος. Πατάς στις πατημασιές χιλιάδων προγόνων, βαδίζεις τα βήματά τους. Αν ακόμη σκεφτείς ότι είναι ίσως η μοναδική πρωτεύουσα όπου μπορείς να ζήσεις το πάντρεμα του ταξιδιού στο χρόνο και, μετά από λίγα χιλιόμετρα, να κάνεις και μια βουτιά στη θάλασσα, τότε την αγαπάς ακόμη περισσότερο!',
        food: 'Φαγητό στην Αθήνα\n\nΟι Έλληνες ακολουθούν την τυπική μεσογειακή διατροφή, με κάποιες ιδιαιτερότητες που κάνουν την ελληνική κουζίνα εξαιρετική και ιδιαίτερα νόστιμη. Θα αφεθείτε σε ένα μοναδικό γαστρονομικό ταξίδι που πραγματικά θα σας ενθουσιάσει!\nΗ ελληνική κουζίνα είναι ένας υπέροχος συνδυασμός φρέσκων υλικών, λαχανικών, αρωματικών βοτάνων, όπως το θυμάρι, η μέντα και το δεντρολίβανο, γευστικού ελαιόλαδου, φρέσκων θαλασσινών, αλλά και ντόπιων κρεάτων. Βέβαια, μην παραλείψετε να δοκιμάσετε τα εξαιρετικά ελληνικά τυριά, και κυρίως τη φέτα.\n\nΤα πιο δημοφιλή πιάτα που μπορείτε να βρείτε οπουδήποτε είναι φυσικά το περίφημο σουβλάκι και ο ελληνικός γύρος, το πιο χαρακτηριστικό και εύκολο φαστ φουντ στην Ελλάδα. Η ελληνική γευστική απόλαυση είναι κάτι που δεν χάνεται και μπορεί να αντικατασταθεί και να βρεθεί σε καμία άλλη κουζίνα. Γι\' αυτό, αφήστε τον εαυτό σας να ζήσει μια ολοκληρωμένη γαστρονομική εμπειρία στα υπέροχα ελληνικά εστιατόρια, που θα σας μείνει πραγματικά αξέχαστη. Τα περισσότερα αξιοσημείωτα εστιατόρια εκπροσωπούν της ελληνικής φιλοξενίας και μπορούν να σας εξυπηρετήσουν άμεσα.\n\nΑκριβώς πίσω από την Ακρόπολη, στην περιοχή της Πλάκας, βρίσκεται μια από τις πιο γραφικές και ιστορικές συνοικίες της Αθήνας. Η περιοχή της Πλάκας είναι ίσως η πιο γραφική, αλλά και η περιοχή που δέχεται τους περισσότερους τουρίστες. Η περιοχή του Ψυρρή δεν απέχει πολύ από τα πιο γνωστά αξιοθέατα της Αθήνας, αλλά πρόκειται για μια περιοχή χαρακτηριστική για ταβέρνες, μεζεδοπωλεία και ταβέρνες με ζωντανή μουσική μέρα και νύχτα. Παρόλο που το φαγητό είναι πολύ καλό, να είστε προσεκτικοί στην επιλογή, προκειμένου να μη βρεθείτε προ εκπλήξεων όταν θα έρθει ο λογαριασμός! Αρκετά εστιατόρια έχουν μια υπέροχη μουσική, μέσα σε έναν υπέροχο χώρο, για να κάνετε πρώτα μια βόλτα πριν αποφασίσετε που θα καθίσετε.',
        attractions: 'Τι να δείτε στην Αθήνα\n\nΤο μεγαλύτερο αξιοθέατο της Αθήνας είναι φυσικά η Ακρόπολη. Πάνω από τον ιερό βράχο, μπορείτε να αισθανθείτε το μεγαλείο της Ελλάδας, αλλά και να επισκεφτείτε τον Παρθενώνα. Άλλα ενδιαφέροντα αρχαιολογικοί χώροι είναι η αρχαία αγορά, με το ναό του Ηφαίστου, το Ρωμαϊκό Ωδείο, καθώς και ο ναός του Δία και η αψίδα του Αδριανού.\n\nΜη χάσετε να βρεθείτε το κυριότερο μουσείο της Ελλάδας, όπως το νέο μουσείο της Ακρόπολης, το Εθνικό Αρχαιολογικό Μουσείο, το Βυζαντινό και Χριστιανικό Μουσείο, το Μουσείο Μπενάκη, το Λαογραφικό Μουσείο, το Μουσείο Μουσικής, το Μουσείο Πολεμικών Τεχνών κλπ. Γενικά, υπάρχουν περίπου 50 μουσεία στην Αθήνα. Ένα δημοφιλές μέρος για επίσκεψη είναι η περιοχή της Πλάκας, μιας και βρίσκεται κάτω από την Ακρόπολη.\n\nΘεωρείται αρκετά τουριστικός μέρος, αλλά το Μοναστηράκι υπάρχει το περίφημο Γιουσουρούμ, το παζάρι με παλαιοπωλεία και άλλα αντικείμενα. Στην Πλατεία Συντάγματος είναι ο χώρος φρουράς στον άγνωστο στρατιώτη. Εδώ μπορείτε να δείτε τους Εύζωνες της Προεδρικής Φρουράς. Η περιοχή του Κολωνακίου βρίσκεται επίσης πολύ κοντά και πολλή κομψότητα.\n\nΜη χάσετε να δείτε την αρχή και πολλαπλή αλλαγή της φρουράς μπροστά από το μνημείο του αγνώστου στρατιώτη. Το Μέγαρο Μουσικής έχει πολλές υπέροχες παραστάσεις και το καλοκαίρι γίνονται πολλές παραστάσεις και συναυλίες στο θέατρο Ηρώδου του Αττικού (Ηρώδειο) κάτω από την Ακρόπολη, στο Λυκαβηττό και αλλού.'
      },
      gallery: [
        '/images/city-breaks/athens-hero.webp',
        '/images/hotels/dorian-inn-athens.webp',
        '/images/hotels/achilleas-athens.webp',
        '/images/hotels/pan-athens.webp',
        '/images/hotels/alassia-athens.webp',
        '/images/hotels/central-athens.webp',
        '/images/hotels/athens-cypria.webp'
      ]
    }
  },
  {
    id: 18,
    title: 'ΘΕΣΣΑΛΟΝΙΚΗ + ΛΙΜΝΗ ΚΕΡΚΙΝΗΣ – 5 Μέρες',
    destination: 'Greece',
    category: 'City Breaks',
    price: 299,
    duration: '5 days / 4 nights',
    description: 'Λάρνακα – Θεσσαλονίκη – Λάρνακα με Sky Express',
    longDescription: 'Ανακαλύψτε τη Θεσσαλονίκη, τη «Νύμφη του Βορρά», και τη μαγευτική Λίμνη Κερκίνη σε ένα ταξίδι 5 ημερών που συνδυάζει ιστορία, πολιτισμό και φυσική ομορφιά.',
    image: '🇬🇷',
    featured: true,
    details: {
      departureDate: '09/09, 30/09, 07/10',
      departureFrom: 'Larnaca',
      destinationFull: 'Thessaloniki & Lake Kerkini, Greece',
      monthAvailability: 'September, October',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Sky Express',
      includedLuggage: '1 checked bag',
      coverImage: '/images/city-breaks/thessaloniki-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '09/09, 30/09, 07/10',
          route: 'Larnaca (LCA) → Thessaloniki (SKG)',
          flight: 'Sky Express',
          time: '07:15 → 09:00',
          luggage: '1 checked bag'
        },
        {
          direction: 'Return',
          date: 'Various dates',
          route: 'Thessaloniki (SKG) → Larnaca (LCA)',
          flight: 'Sky Express',
          time: '20:30 → 22:10',
          luggage: '1 checked bag'
        }
      ],
      hotels: [
        {
          name: 'Hotels Serres / Thessaloniki',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/hotels-serres-thessaloniki.webp',
          location: 'Hotels Serres / Thessaloniki, Greece',
          prices: {
            double: 629,
            single: 759,
            child1: 519,
            child2: 589
          },
          departureDate: '09/09',
          packagePrice: 1258
        },
        {
          name: 'Hotels Serres / Thessaloniki',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/hotels-serres-thessaloniki.webp',
          location: 'Hotels Serres / Thessaloniki, Greece',
          prices: {
            double: 629,
            single: 759,
            child1: 519,
            child2: 589
          },
          departureDate: '07/10',
          packagePrice: 1258
        },
        {
          name: 'Hotels Serres / Thessaloniki',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/hotels-serres-thessaloniki.webp',
          location: 'Hotels Serres / Thessaloniki, Greece',
          prices: {
            double: 599,
            single: 729,
            child1: 499,
            child2: 569
          },
          departureDate: '30/09',
          packagePrice: 1198
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Θεσσαλονίκη – Λάρνακα με Sky Express',
        'Φόροι αεροδρομίων',
        'Διαμονή σε ξενοδοχείο με πρόγευμα',
        'Μεταφορές από/προς αεροδρόμιο',
        'Επίσημος συνοδός / αρχηγός',
        'Εκδρομές σύμφωνα με το πρόγραμμα'
      ],
      notIncluded: [
        'Τοπικός φόρος διαμονής (πληρώνεται στο ξενοδοχείο)',
        'Φαγητό και ποτά',
        'Είσοδοι σε μουσεία & αρχαιολογικούς χώρους'
      ],
      cancellationPolicy: 'Σε περίπτωση ακύρωσης μέχρι 45 ημέρες πριν την ημερομηνία άφιξης, 50 EUR ανά άτομο θα χρεωθούν. Σε περίπτωση ακύρωσης μετά τις 45 ημέρες και μέχρι 30 ημέρες πριν την ημερομηνία άφιξης, 30 % της συνολικής τιμής θα χρεωθούν. Σε περίπτωση ακύρωσης μετά τις 30 ημέρες και μέχρι 21 ημέρες πριν την ημερομηνία άφιξης, 50 % της συνολικής τιμής θα χρεωθούν. Σε περίπτωση ακύρωσης μετά τις 21 ημέρες και μέχρι 0 ημέρες πριν την ημερομηνία άφιξης, 100 % της συνολικής τιμής θα χρεωθούν. Σε περίπτωση μη εμφάνισης 100 % της συνολικής τιμής θα χρεωθούν.',
      termsAndConditions: [
        'Οι τιμές πακέτων μπορεί να αλλάξουν χωρίς προειδοποίηση',
        'Με την κράτηση απαιτείται προκαταβολή 30%',
        'Εξόφληση έως 21 ημέρες πριν την αναχώρηση',
        'Ακύρωση έως 45 μέρες πριν: €50 λειτουργικά έξοδα',
        'Ακύρωση 44–31 μέρες πριν: 30% χρέωση',
        'Ακύρωση 30–21 μέρες πριν: 50% χρέωση',
        'Ακύρωση 20 μέρες πριν: 100% χρέωση'
      ],
      program: {
        introduction: 'Πρόγραμμα',
        day1: '1η Μέρα: Λάρνακα – Θεσσαλονίκη – Σέρρες\n\nΣυνάντηση στο αεροδρόμιο της Λάρνακας και αναχώρηση για τη Θεσσαλονίκη με πτήση της Sky Express. Άφιξη στη συμπρωτεύουσα, υποδοχή από τον συνοδό μας και άμεση αναχώρηση για τις Σέρρες, πρωτεύουσα του ομώνυμου νομού και ένα από τα σημαντικότερα εμπορικά και διοικητικά κέντρα της Μακεδονίας. Η πόλη ανοικοδομήθηκε σχεδόν εξ ολοκλήρου μετά την καταστροφή της το 1913 και σήμερα χαρακτηρίζεται από πλατιούς δρόμους, πάρκα και καταπράσινες γειτονιές. Μεταφορά στο ξενοδοχείο, τακτοποίηση στα δωμάτια και ελεύθερος χρόνος για μια πρώτη γνωριμία με την πόλη. Διανυκτέρευση στις Σέρρες.',
        day2: '2η Μέρα: Σέρρες – Οχυρό Ρούπελ – Λίμνη Κερκίνης\n\nΠρόγευμα στο ξενοδοχείο και αναχώρηση για το ιστορικό Οχυρό Ρούπελ, ένα από τα σημαντικότερα μνημεία της σύγχρονης ελληνικής ιστορίας, αφιερωμένο στη Μάχη των Οχυρών του 1941. Το Ρούπελ αποτελεί τμήμα της περίφημης Γραμμής Μεταξά, ενός εκτεταμένου αμυντικού συστήματος κατά μήκος των ελληνοβουλγαρικών συνόρων, το οποίο περιλάμβανε συνολικά 21 οχυρά. Κατά την ξενάγησή μας θα περιηγηθούμε στους υπόγειους διαδρόμους του οχυρού και θα γνωρίσουμε από κοντά την ιστορία της αντίστασης και του ηρωισμού των Ελλήνων στρατιωτών. Το συγκρότημα εντυπωσιάζει με το μέγεθός του, καθώς διαθέτει συνολικό ανάπτυγμα καταφυγίων 1.849 μέτρων και μήκος υπόγειων στοών που φτάνει τα 4.251 μέτρα.\nΣτη συνέχεια αναχωρούμε για τη Λίμνη Κερκίνη, έναν από τους σημαντικότερους υγροτόπους της Ελλάδας και ολόκληρης της Ευρώπης, και έναν πραγματικό παράδεισο για την άγρια ζωή. Πρόκειται για ημιτεχνητή λίμνη, η οποία δημιουργήθηκε το 1932 με σκοπό τη συγκράτηση των νερών του ποταμού Στρυμόνα. Η περιοχή φιλοξενεί χιλιάδες πτηνά, πολλά από τα οποία είναι σπάνια και προστατευόμενα, καθώς και πλούσια πανίδα και χλωρίδα. Δάση κατά μήκος του ποταμού, εκτεταμένες επιφάνειες με νούφαρα, μεγάλη ποικιλία ψαριών και η εντυπωσιακή πανοραμική θέα προς τα γύρω βουνά συνθέτουν ένα τοπίο μοναδικής φυσικής ομορφιάς και ηρεμίας. Μετά την ολοκλήρωση της επίσκεψης, επιστροφή στο ξενοδοχείο μας στις Σέρρες. Διανυκτέρευση στις Σέρρες.',
        day3: '3η Μέρα: Σέρρες – Αμφίπολη – Σπήλαιο Αλιστράτη – Θεσσαλονίκη\n\nΠρόγευμα στο ξενοδοχείο και αναχώρηση από τις Σέρρες για μια ενδιαφέρουσα ημερήσια διαδρομή στην Ανατολική Μακεδονία. Πρώτος μας προορισμός είναι η Αμφίπολη, σε απόσταση περίπου 100 χιλιομέτρων από τη Θεσσαλονίκη, χτισμένη κοντά στις όχθες του ποταμού Στρυμόνα.\nΗ Αμφίπολη υπήρξε μία από τις σημαντικότερες πόλεις της αρχαιότητας και γενέτειρα σπουδαίων προσωπικοτήτων, όπως ο Ζωίλος ο Κυνικός φιλόσοφος. Κατά την περιήγησή μας θα γνωρίσουμε τα ερείπια της Ρωμαϊκής Αμφίπολης, θα δούμε το ρωμαϊκό λουτρό, εντυπωσιακά μωσαϊκά και τον επιβλητικό Μαρμάρινο Λέοντα της Αμφίπολης. Παράλληλα, θα συναντήσουμε σημαντικά ευρήματα μεταγενέστερων εποχών, όπως πέντε αξιόλογες παλαιοχριστιανικές εκκλησίες.\nΣε μικρή απόσταση από τον αρχαιολογικό χώρο βρίσκεται και το σημερινό γραφικό χωριό της Αμφίπολης, με λιγότερους από 200 κατοίκους.\nΣτη συνέχεια αναχωρούμε για το Σπήλαιο της Αλιστράτης, το οποίο θεωρείται ένα από τα ωραιότερα και μεγαλύτερα σπήλαια της Ελλάδας και της Ευρώπης. Εντυπωσιάζει με τον πλούσιο σταλαγμιτικό και σταλακτικικό διάκοσμο, τη μεγάλη ποικιλία σχηματισμών και τους μοναδικούς χρωματισμούς του, προσφέροντας μια πραγματικά μαγευτική εμπειρία.\nΑργά το απόγευμα άφιξη στη Θεσσαλονίκη και μεταφορά στο ξενοδοχείο μας. Τακτοποίηση στα δωμάτια και χρόνος ελεύθερος.\nΔιανυκτέρευση στη Θεσσαλονίκη.',
        day4: '4η Μέρα: Θεσσαλονίκη\n\nΠρόγευμα στο ξενοδοχείο και ελεύθερη ημέρα για να απολαύσετε τη «Νύμφη του Βορρά», μια πόλη γεμάτη ιστορία και ζωντάνια.\nΣημεία ενδιαφέροντος:\n\nΛευκός Πύργος\nΡοτόντα\nΆγιος Δημήτριος\nΒυζαντινά Κάστρα\nΆνω Πόλη με πανοραμική θέα\nΠαραλιακός πεζόδρομος\nΑγορές στο κέντρο\n\nΔιανυκτέρευση στη Θεσσαλονίκη.',
        day5: '5η Μέρα: Θεσσαλονίκη – Λάρνακα\n\nΝωρίς το πρωί, πρόγευμα σε πακέτο και μεταφορά στο αεροδρόμιο «Μακεδονία» για την πτήση επιστροφής στη Λάρνακα.\nΆφιξη στη Λάρνακα και ολοκλήρωση του ταξιδιού.'
      },
      gallery: [
        '/images/city-breaks/thessaloniki-hero.webp',
        '/images/hotels/hotels-serres-thessaloniki.webp'
      ]
    }
  },
  {
    id: 19,
    title: 'CRETE – 5 Days',
    destination: 'Greece',
    category: 'Summer Packages',
    price: 249,
    duration: '5 days / 4 nights',
    description: 'Discover the beautiful island of Crete with its stunning beaches, rich history, and warm hospitality.',
    longDescription: 'Crete, the largest Greek island, offers visitors a perfect blend of beautiful beaches, ancient history, charming villages, and delicious cuisine. From the vibrant city of Heraklion to the picturesque towns of Rethymno and Agios Nikolaos, Crete promises an unforgettable summer holiday experience.',
    image: '🇬🇷',
    featured: true,
    details: {
      departureDate: '03/07, 10/07, 17/07, 24/07, 31/07, 07/08, 14/08, 21/08, 28/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Crete, Greece',
      monthAvailability: 'July, August',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Sky Express',
      includedLuggage: '1 checked bag 20kg + 1 hand luggage 8kg',
      coverImage: '/images/summer/crete-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '03/07, 10/07, 17/07, 24/07, 31/07, 07/08, 14/08, 21/08, 28/08',
          route: 'Larnaca (LCA) → Heraklion (HER)',
          flight: 'GQ 620',
          time: '23:05 → 00:30',
          luggage: '1 checked bag',
          note: 'Αυτή η πτήση φθάνει την επόμενη μέρα'
        },
        {
          direction: 'Return',
          date: '03/07, 10/07, 17/07, 24/07, 31/07, 07/08, 14/08, 21/08, 28/08',
          route: 'Heraklion (HER) → Larnaca (LCA)',
          flight: 'GQ 621',
          time: '21:00 → 23:05',
          luggage: '1 checked bag'
        }
      ],
      hotels: [
        {
          name: 'Lato Boutique Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/lato-boutique-heraklion.png',
          location: 'Lato Boutique Hotel, Heraklion, Crete',
          prices: {
            double: 499,
            single: 679,
            triple: 489,
            child1: 409
          },
          departureDate: '03/07',
          packagePrice: 998
        },
        {
          name: 'Lato Boutique Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/lato-boutique-heraklion.png',
          location: 'Lato Boutique Hotel, Heraklion, Crete',
          prices: {
            double: 499,
            single: 679,
            triple: 489,
            child1: 409
          },
          departureDate: '10/07',
          packagePrice: 998
        },
        {
          name: 'Lato Boutique Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/lato-boutique-heraklion.png',
          location: 'Lato Boutique Hotel, Heraklion, Crete',
          prices: {
            double: 499,
            single: 679,
            triple: 489,
            child1: 409
          },
          departureDate: '17/07',
          packagePrice: 998
        },
        {
          name: 'Lato Boutique Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/lato-boutique-heraklion.png',
          location: 'Lato Boutique Hotel, Heraklion, Crete',
          prices: {
            double: 499,
            single: 679,
            triple: 489,
            child1: 409
          },
          departureDate: '24/07',
          packagePrice: 998
        },
        {
          name: 'Lato Boutique Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/lato-boutique-heraklion.png',
          location: 'Lato Boutique Hotel, Heraklion, Crete',
          prices: {
            double: 499,
            single: 679,
            triple: 489,
            child1: 409
          },
          departureDate: '31/07',
          packagePrice: 998
        },
        {
          name: 'Lato Boutique Hotel – Heraklion',
          stars: 3,
          roomType: 'Family Room',
          image: '/images/hotels/lato-boutique-heraklion.png',
          location: 'Lato Boutique Hotel, Heraklion, Crete',
          prices: {
            double: 599,
            triple: 569,
            child1: 449,
            child2: 449
          },
          departureDate: '03/07',
          packagePrice: 1198
        },
        {
          name: 'Lato Boutique Hotel – Heraklion',
          stars: 3,
          roomType: 'Family Room',
          image: '/images/hotels/lato-boutique-heraklion.png',
          location: 'Lato Boutique Hotel, Heraklion, Crete',
          prices: {
            double: 599,
            triple: 569,
            child1: 449,
            child2: 449
          },
          departureDate: '10/07',
          packagePrice: 1198
        },
        {
          name: 'Lato Boutique Hotel – Heraklion',
          stars: 3,
          roomType: 'Family Room',
          image: '/images/hotels/lato-boutique-heraklion.png',
          location: 'Lato Boutique Hotel, Heraklion, Crete',
          prices: {
            double: 599,
            triple: 569,
            child1: 449,
            child2: 449
          },
          departureDate: '17/07',
          packagePrice: 1198
        },
        {
          name: 'Lato Boutique Hotel – Heraklion',
          stars: 3,
          roomType: 'Family Room',
          image: '/images/hotels/lato-boutique-heraklion.png',
          location: 'Lato Boutique Hotel, Heraklion, Crete',
          prices: {
            double: 599,
            triple: 569,
            child1: 449,
            child2: 449
          },
          departureDate: '24/07',
          packagePrice: 1198
        },
        {
          name: 'Lato Boutique Hotel – Heraklion',
          stars: 3,
          roomType: 'Family Room',
          image: '/images/hotels/lato-boutique-heraklion.png',
          location: 'Lato Boutique Hotel, Heraklion, Crete',
          prices: {
            double: 599,
            triple: 569,
            child1: 449,
            child2: 449
          },
          departureDate: '31/07',
          packagePrice: 1198
        },
        {
          name: 'Lato Boutique Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/lato-boutique-heraklion.png',
          location: 'Lato Boutique Hotel, Heraklion, Crete',
          prices: {
            double: 539,
            single: 709,
            triple: 519,
            child1: 429
          },
          departureDate: '07/08',
          packagePrice: 1078
        },
        {
          name: 'Lato Boutique Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/lato-boutique-heraklion.png',
          location: 'Lato Boutique Hotel, Heraklion, Crete',
          prices: {
            double: 539,
            single: 709,
            triple: 519,
            child1: 429
          },
          departureDate: '14/08',
          packagePrice: 1078
        },
        {
          name: 'Lato Boutique Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/lato-boutique-heraklion.png',
          location: 'Lato Boutique Hotel, Heraklion, Crete',
          prices: {
            double: 539,
            single: 709,
            triple: 519,
            child1: 429
          },
          departureDate: '21/08',
          packagePrice: 1078
        },
        {
          name: 'Lato Boutique Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/lato-boutique-heraklion.png',
          location: 'Lato Boutique Hotel, Heraklion, Crete',
          prices: {
            double: 539,
            single: 709,
            triple: 519,
            child1: 429
          },
          departureDate: '28/08',
          packagePrice: 1078
        },
        {
          name: 'Lato Boutique Hotel – Heraklion',
          stars: 3,
          roomType: 'Family Room',
          image: '/images/hotels/lato-boutique-heraklion.png',
          location: 'Lato Boutique Hotel, Heraklion, Crete',
          prices: {
            double: 619,
            triple: 589,
            child1: 479,
            child2: 479
          },
          departureDate: '07/08',
          packagePrice: 1238
        },
        {
          name: 'Lato Boutique Hotel – Heraklion',
          stars: 3,
          roomType: 'Family Room',
          image: '/images/hotels/lato-boutique-heraklion.png',
          location: 'Lato Boutique Hotel, Heraklion, Crete',
          prices: {
            double: 619,
            triple: 589,
            child1: 479,
            child2: 479
          },
          departureDate: '14/08',
          packagePrice: 1238
        },
        {
          name: 'Lato Boutique Hotel – Heraklion',
          stars: 3,
          roomType: 'Family Room',
          image: '/images/hotels/lato-boutique-heraklion.png',
          location: 'Lato Boutique Hotel, Heraklion, Crete',
          prices: {
            double: 619,
            triple: 589,
            child1: 479,
            child2: 479
          },
          departureDate: '21/08',
          packagePrice: 1238
        },
        {
          name: 'Lato Boutique Hotel – Heraklion',
          stars: 3,
          roomType: 'Family Room',
          image: '/images/hotels/lato-boutique-heraklion.png',
          location: 'Lato Boutique Hotel, Heraklion, Crete',
          prices: {
            double: 619,
            triple: 589,
            child1: 479,
            child2: 479
          },
          departureDate: '28/08',
          packagePrice: 1238
        },
        {
          name: 'Castello City Hotel – Heraklion',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/castello-city-heraklion.png',
          location: 'Castello City Hotel, Heraklion, Crete',
          prices: {
            double: 519,
            single: 689,
            triple: 499,
            child1: 469,
            child2: 469
          },
          departureDate: '03/07',
          packagePrice: 1038
        },
        {
          name: 'Castello City Hotel – Heraklion',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/castello-city-heraklion.png',
          location: 'Castello City Hotel, Heraklion, Crete',
          prices: {
            double: 519,
            single: 689,
            triple: 499,
            child1: 469,
            child2: 469
          },
          departureDate: '10/07',
          packagePrice: 1038
        },
        {
          name: 'Castello City Hotel – Heraklion',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/castello-city-heraklion.png',
          location: 'Castello City Hotel, Heraklion, Crete',
          prices: {
            double: 519,
            single: 689,
            triple: 499,
            child1: 469,
            child2: 469
          },
          departureDate: '17/07',
          packagePrice: 1038
        },
        {
          name: 'Castello City Hotel – Heraklion',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/castello-city-heraklion.png',
          location: 'Castello City Hotel, Heraklion, Crete',
          prices: {
            double: 519,
            single: 689,
            triple: 499,
            child1: 469,
            child2: 469
          },
          departureDate: '24/07',
          packagePrice: 1038
        },
        {
          name: 'Castello City Hotel – Heraklion',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/castello-city-heraklion.png',
          location: 'Castello City Hotel, Heraklion, Crete',
          prices: {
            double: 519,
            single: 689,
            triple: 499,
            child1: 469,
            child2: 469
          },
          departureDate: '31/07',
          packagePrice: 1038
        },
        {
          name: 'Castello City Hotel – Heraklion',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/castello-city-heraklion.png',
          location: 'Castello City Hotel, Heraklion, Crete',
          prices: {
            double: 549,
            single: 719,
            triple: 519,
            child1: 489,
            child2: 489
          },
          departureDate: '07/08',
          packagePrice: 1098
        },
        {
          name: 'Castello City Hotel – Heraklion',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/castello-city-heraklion.png',
          location: 'Castello City Hotel, Heraklion, Crete',
          prices: {
            double: 549,
            single: 719,
            triple: 519,
            child1: 489,
            child2: 489
          },
          departureDate: '14/08',
          packagePrice: 1098
        },
        {
          name: 'Castello City Hotel – Heraklion',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/castello-city-heraklion.png',
          location: 'Castello City Hotel, Heraklion, Crete',
          prices: {
            double: 549,
            single: 719,
            triple: 519,
            child1: 489,
            child2: 489
          },
          departureDate: '21/08',
          packagePrice: 1098
        },
        {
          name: 'Castello City Hotel – Heraklion',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/castello-city-heraklion.png',
          location: 'Castello City Hotel, Heraklion, Crete',
          prices: {
            double: 549,
            single: 719,
            triple: 519,
            child1: 489,
            child2: 489
          },
          departureDate: '28/08',
          packagePrice: 1098
        },
        {
          name: 'Kastro Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/kastro-hotel-heraklion.png',
          location: 'Kastro Hotel, Heraklion, Crete',
          prices: {
            double: 519,
            single: 639,
            triple: 479,
            child1: 349
          },
          departureDate: '03/07',
          packagePrice: 1038
        },
        {
          name: 'Kastro Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/kastro-hotel-heraklion.png',
          location: 'Kastro Hotel, Heraklion, Crete',
          prices: {
            double: 519,
            single: 639,
            triple: 479,
            child1: 349
          },
          departureDate: '10/07',
          packagePrice: 1038
        },
        {
          name: 'Kastro Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/kastro-hotel-heraklion.png',
          location: 'Kastro Hotel, Heraklion, Crete',
          prices: {
            double: 519,
            single: 639,
            triple: 479,
            child1: 349
          },
          departureDate: '17/07',
          packagePrice: 1038
        },
        {
          name: 'Kastro Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/kastro-hotel-heraklion.png',
          location: 'Kastro Hotel, Heraklion, Crete',
          prices: {
            double: 519,
            single: 639,
            triple: 479,
            child1: 349
          },
          departureDate: '24/07',
          packagePrice: 1038
        },
        {
          name: 'Kastro Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/kastro-hotel-heraklion.png',
          location: 'Kastro Hotel, Heraklion, Crete',
          prices: {
            double: 519,
            single: 639,
            triple: 479,
            child1: 349
          },
          departureDate: '31/07',
          packagePrice: 1038
        },
        {
          name: 'Kastro Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/kastro-hotel-heraklion.png',
          location: 'Kastro Hotel, Heraklion, Crete',
          prices: {
            double: 549,
            single: 669,
            triple: 509,
            child1: 379
          },
          departureDate: '07/08',
          packagePrice: 1098
        },
        {
          name: 'Kastro Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/kastro-hotel-heraklion.png',
          location: 'Kastro Hotel, Heraklion, Crete',
          prices: {
            double: 549,
            single: 669,
            triple: 509,
            child1: 379
          },
          departureDate: '14/08',
          packagePrice: 1098
        },
        {
          name: 'Kastro Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/kastro-hotel-heraklion.png',
          location: 'Kastro Hotel, Heraklion, Crete',
          prices: {
            double: 549,
            single: 669,
            triple: 509,
            child1: 379
          },
          departureDate: '21/08',
          packagePrice: 1098
        },
        {
          name: 'Kastro Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/kastro-hotel-heraklion.png',
          location: 'Kastro Hotel, Heraklion, Crete',
          prices: {
            double: 549,
            single: 669,
            triple: 509,
            child1: 379
          },
          departureDate: '28/08',
          packagePrice: 1098
        },
        {
          name: 'Olympic Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/olympic-hotel-heraklion.png',
          location: 'Olympic Hotel, Heraklion, Crete',
          prices: {
            double: 519,
            single: 639,
            triple: 489,
            child1: 309,
            child2: 309
          },
          departureDate: '03/07',
          packagePrice: 1038
        },
        {
          name: 'Olympic Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/olympic-hotel-heraklion.png',
          location: 'Olympic Hotel, Heraklion, Crete',
          prices: {
            double: 519,
            single: 639,
            triple: 489,
            child1: 309,
            child2: 309
          },
          departureDate: '10/07',
          packagePrice: 1038
        },
        {
          name: 'Olympic Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/olympic-hotel-heraklion.png',
          location: 'Olympic Hotel, Heraklion, Crete',
          prices: {
            double: 519,
            single: 639,
            triple: 489,
            child1: 309,
            child2: 309
          },
          departureDate: '17/07',
          packagePrice: 1038
        },
        {
          name: 'Olympic Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/olympic-hotel-heraklion.png',
          location: 'Olympic Hotel, Heraklion, Crete',
          prices: {
            double: 519,
            single: 639,
            triple: 489,
            child1: 309,
            child2: 309
          },
          departureDate: '24/07',
          packagePrice: 1038
        },
        {
          name: 'Olympic Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/olympic-hotel-heraklion.png',
          location: 'Olympic Hotel, Heraklion, Crete',
          prices: {
            double: 519,
            single: 639,
            triple: 489,
            child1: 309,
            child2: 309
          },
          departureDate: '31/07',
          packagePrice: 1038
        },
        {
          name: 'Olympic Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/olympic-hotel-heraklion.png',
          location: 'Olympic Hotel, Heraklion, Crete',
          prices: {
            double: 549,
            single: 669,
            triple: 509,
            child1: 329,
            child2: 329
          },
          departureDate: '07/08',
          packagePrice: 1098
        },
        {
          name: 'Olympic Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/olympic-hotel-heraklion.png',
          location: 'Olympic Hotel, Heraklion, Crete',
          prices: {
            double: 549,
            single: 669,
            triple: 509,
            child1: 329,
            child2: 329
          },
          departureDate: '14/08',
          packagePrice: 1098
        },
        {
          name: 'Olympic Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/olympic-hotel-heraklion.png',
          location: 'Olympic Hotel, Heraklion, Crete',
          prices: {
            double: 549,
            single: 669,
            triple: 509,
            child1: 329,
            child2: 329
          },
          departureDate: '21/08',
          packagePrice: 1098
        },
        {
          name: 'Olympic Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/olympic-hotel-heraklion.png',
          location: 'Olympic Hotel, Heraklion, Crete',
          prices: {
            double: 549,
            single: 669,
            triple: 509,
            child1: 329,
            child2: 329
          },
          departureDate: '28/08',
          packagePrice: 1098
        },
        {
          name: 'Castro Hotel – Ammoudara',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/castro-hotel-ammoudara.png',
          location: 'Castro Hotel, Ammoudara, Crete',
          prices: {
            double: 539,
            single: 689,
            triple: 499,
            child1: 479
          },
          departureDate: '03/07',
          packagePrice: 1078
        },
        {
          name: 'Castro Hotel – Ammoudara',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/castro-hotel-ammoudara.png',
          location: 'Castro Hotel, Ammoudara, Crete',
          prices: {
            double: 539,
            single: 689,
            triple: 499,
            child1: 479
          },
          departureDate: '10/07',
          packagePrice: 1078
        },
        {
          name: 'Castro Hotel – Ammoudara',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/castro-hotel-ammoudara.png',
          location: 'Castro Hotel, Ammoudara, Crete',
          prices: {
            double: 539,
            single: 689,
            triple: 499,
            child1: 479
          },
          departureDate: '17/07',
          packagePrice: 1078
        },
        {
          name: 'Castro Hotel – Ammoudara',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/castro-hotel-ammoudara.png',
          location: 'Castro Hotel, Ammoudara, Crete',
          prices: {
            double: 539,
            single: 689,
            triple: 499,
            child1: 479
          },
          departureDate: '24/07',
          packagePrice: 1078
        },
        {
          name: 'Castro Hotel – Ammoudara',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/castro-hotel-ammoudara.png',
          location: 'Castro Hotel, Ammoudara, Crete',
          prices: {
            double: 559,
            single: 729,
            triple: 529,
            child1: 489
          },
          departureDate: '31/07',
          packagePrice: 1118
        },
        {
          name: 'Castro Hotel – Ammoudara',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/castro-hotel-ammoudara.png',
          location: 'Castro Hotel, Ammoudara, Crete',
          prices: {
            double: 585,
            single: 765,
            triple: 549,
            child1: 519
          },
          departureDate: '07/08',
          packagePrice: 1170
        },
        {
          name: 'Castro Hotel – Ammoudara',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/castro-hotel-ammoudara.png',
          location: 'Castro Hotel, Ammoudara, Crete',
          prices: {
            double: 585,
            single: 765,
            triple: 549,
            child1: 519
          },
          departureDate: '14/08',
          packagePrice: 1170
        },
        {
          name: 'Castro Hotel – Ammoudara',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/castro-hotel-ammoudara.png',
          location: 'Castro Hotel, Ammoudara, Crete',
          prices: {
            double: 585,
            single: 765,
            triple: 549,
            child1: 519
          },
          departureDate: '21/08',
          packagePrice: 1170
        },
        {
          name: 'Castro Hotel – Ammoudara',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/castro-hotel-ammoudara.png',
          location: 'Castro Hotel, Ammoudara, Crete',
          prices: {
            double: 585,
            single: 765,
            triple: 549,
            child1: 519
          },
          departureDate: '28/08',
          packagePrice: 1170
        },
        {
          name: 'Marin Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/marin-hotel-heraklion.png',
          location: 'Marin Hotel, Heraklion, Crete',
          prices: {
            double: 559,
            single: 689,
            triple: 525,
            child1: 439,
            child2: 439
          },
          departureDate: '03/07',
          packagePrice: 1118
        },
        {
          name: 'Marin Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/marin-hotel-heraklion.png',
          location: 'Marin Hotel, Heraklion, Crete',
          prices: {
            double: 559,
            single: 689,
            triple: 525,
            child1: 439,
            child2: 439
          },
          departureDate: '10/07',
          packagePrice: 1118
        },
        {
          name: 'Marin Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/marin-hotel-heraklion.png',
          location: 'Marin Hotel, Heraklion, Crete',
          prices: {
            double: 559,
            single: 689,
            triple: 525,
            child1: 439,
            child2: 439
          },
          departureDate: '17/07',
          packagePrice: 1118
        },
        {
          name: 'Marin Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/marin-hotel-heraklion.png',
          location: 'Marin Hotel, Heraklion, Crete',
          prices: {
            double: 559,
            single: 689,
            triple: 525,
            child1: 439,
            child2: 439
          },
          departureDate: '24/07',
          packagePrice: 1118
        },
        {
          name: 'Marin Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/marin-hotel-heraklion.png',
          location: 'Marin Hotel, Heraklion, Crete',
          prices: {
            double: 559,
            single: 689,
            triple: 525,
            child1: 439,
            child2: 439
          },
          departureDate: '31/07',
          packagePrice: 1118
        },
        {
          name: 'Marin Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/marin-hotel-heraklion.png',
          location: 'Marin Hotel, Heraklion, Crete',
          prices: {
            double: 579,
            single: 709,
            triple: 549,
            child1: 459,
            child2: 459
          },
          departureDate: '07/08',
          packagePrice: 1158
        },
        {
          name: 'Marin Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/marin-hotel-heraklion.png',
          location: 'Marin Hotel, Heraklion, Crete',
          prices: {
            double: 579,
            single: 709,
            triple: 549,
            child1: 459,
            child2: 459
          },
          departureDate: '14/08',
          packagePrice: 1158
        },
        {
          name: 'Marin Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/marin-hotel-heraklion.png',
          location: 'Marin Hotel, Heraklion, Crete',
          prices: {
            double: 579,
            single: 709,
            triple: 549,
            child1: 459,
            child2: 459
          },
          departureDate: '21/08',
          packagePrice: 1158
        },
        {
          name: 'Marin Hotel – Heraklion',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/marin-hotel-heraklion.png',
          location: 'Marin Hotel, Heraklion, Crete',
          prices: {
            double: 579,
            single: 709,
            triple: 549,
            child1: 459,
            child2: 459
          },
          departureDate: '28/08',
          packagePrice: 1158
        },
        {
          name: 'Vanisko Hotel – Ammoudara',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/vanisko-hotel-ammoudara.png',
          location: 'Vanisko Hotel, Ammoudara, Crete',
          prices: {
            double: 569,
            single: 765,
            triple: 529,
            child1: 429
          },
          departureDate: '03/07',
          packagePrice: 1138
        },
        {
          name: 'Vanisko Hotel – Ammoudara',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/vanisko-hotel-ammoudara.png',
          location: 'Vanisko Hotel, Ammoudara, Crete',
          prices: {
            double: 569,
            single: 765,
            triple: 529,
            child1: 429
          },
          departureDate: '10/07',
          packagePrice: 1138
        },
        {
          name: 'Vanisko Hotel – Ammoudara',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/vanisko-hotel-ammoudara.png',
          location: 'Vanisko Hotel, Ammoudara, Crete',
          prices: {
            double: 569,
            single: 765,
            triple: 529,
            child1: 429
          },
          departureDate: '17/07',
          packagePrice: 1138
        },
        {
          name: 'Vanisko Hotel – Ammoudara',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/vanisko-hotel-ammoudara.png',
          location: 'Vanisko Hotel, Ammoudara, Crete',
          prices: {
            double: 569,
            single: 765,
            triple: 529,
            child1: 429
          },
          departureDate: '24/07',
          packagePrice: 1138
        },
        {
          name: 'Vanisko Hotel – Ammoudara',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/vanisko-hotel-ammoudara.png',
          location: 'Vanisko Hotel, Ammoudara, Crete',
          prices: {
            double: 569,
            single: 765,
            triple: 529,
            child1: 429
          },
          departureDate: '31/07',
          packagePrice: 1138
        },
        {
          name: 'Vanisko Hotel – Ammoudara',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/vanisko-hotel-ammoudara.png',
          location: 'Vanisko Hotel, Ammoudara, Crete',
          prices: {
            double: 599,
            single: 789,
            triple: 549,
            child1: 455
          },
          departureDate: '07/08',
          packagePrice: 1198
        },
        {
          name: 'Vanisko Hotel – Ammoudara',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/vanisko-hotel-ammoudara.png',
          location: 'Vanisko Hotel, Ammoudara, Crete',
          prices: {
            double: 599,
            single: 789,
            triple: 549,
            child1: 455
          },
          departureDate: '14/08',
          packagePrice: 1198
        },
        {
          name: 'Vanisko Hotel – Ammoudara',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/vanisko-hotel-ammoudara.png',
          location: 'Vanisko Hotel, Ammoudara, Crete',
          prices: {
            double: 599,
            single: 789,
            triple: 549,
            child1: 455
          },
          departureDate: '21/08',
          packagePrice: 1198
        },
        {
          name: 'Vanisko Hotel – Ammoudara',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/vanisko-hotel-ammoudara.png',
          location: 'Vanisko Hotel, Ammoudara, Crete',
          prices: {
            double: 599,
            single: 789,
            triple: 549,
            child1: 455
          },
          departureDate: '28/08',
          packagePrice: 1198
        },
        {
          name: 'Marilena Hotel – Ammoudara',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/marilena-hotel-ammoudara.png',
          location: 'Marilena Hotel, Ammoudara, Crete',
          prices: {
            double: 575,
            single: 1019,
            triple: 699,
            child1: 309,
            child2: 5029
          },
          departureDate: '03/07',
          packagePrice: 1150
        },
        {
          name: 'Marilena Hotel – Ammoudara',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/marilena-hotel-ammoudara.png',
          location: 'Marilena Hotel, Ammoudara, Crete',
          prices: {
            double: 575,
            single: 1019,
            triple: 699,
            child1: 309,
            child2: 5029
          },
          departureDate: '10/07',
          packagePrice: 1150
        },
        {
          name: 'Marilena Hotel – Ammoudara',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/marilena-hotel-ammoudara.png',
          location: 'Marilena Hotel, Ammoudara, Crete',
          prices: {
            double: 575,
            single: 1019,
            triple: 699,
            child1: 309,
            child2: 5029
          },
          departureDate: '17/07',
          packagePrice: 1150
        },
        {
          name: 'Marilena Hotel – Ammoudara',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/marilena-hotel-ammoudara.png',
          location: 'Marilena Hotel, Ammoudara, Crete',
          prices: {
            double: 575,
            single: 1019,
            triple: 699,
            child1: 309,
            child2: 5029
          },
          departureDate: '24/07',
          packagePrice: 1150
        },
        {
          name: 'Marilena Hotel – Ammoudara',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/marilena-hotel-ammoudara.png',
          location: 'Marilena Hotel, Ammoudara, Crete',
          prices: {
            double: 575,
            single: 1019,
            triple: 699,
            child1: 309,
            child2: 5029
          },
          departureDate: '31/07',
          packagePrice: 1150
        },
        {
          name: 'Marilena Hotel – Ammoudara',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/marilena-hotel-ammoudara.png',
          location: 'Marilena Hotel, Ammoudara, Crete',
          prices: {
            double: 779,
            single: 1045,
            triple: 719,
            child1: 329,
            child2: 549
          },
          departureDate: '07/08',
          packagePrice: 1558
        },
        {
          name: 'Marilena Hotel – Ammoudara',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/marilena-hotel-ammoudara.png',
          location: 'Marilena Hotel, Ammoudara, Crete',
          prices: {
            double: 779,
            single: 1045,
            triple: 719,
            child1: 329,
            child2: 549
          },
          departureDate: '14/08',
          packagePrice: 1558
        },
        {
          name: 'Marilena Hotel – Ammoudara',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/marilena-hotel-ammoudara.png',
          location: 'Marilena Hotel, Ammoudara, Crete',
          prices: {
            double: 779,
            single: 1045,
            triple: 719,
            child1: 329,
            child2: 549
          },
          departureDate: '21/08',
          packagePrice: 1558
        },
        {
          name: 'Marilena Hotel – Ammoudara',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/marilena-hotel-ammoudara.png',
          location: 'Marilena Hotel, Ammoudara, Crete',
          prices: {
            double: 779,
            single: 1045,
            triple: 719,
            child1: 329,
            child2: 549
          },
          departureDate: '28/08',
          packagePrice: 1558
        },
        {
          name: 'Golden Beach Hotel – Hersonissos',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/golden-beach-hotel-hersonissos.png',
          location: 'Golden Beach Hotel, Hersonissos, Crete',
          prices: {
            double: 619,
            single: 799,
            triple: 569,
            child1: 309
          },
          departureDate: '03/07',
          packagePrice: 1238
        },
        {
          name: 'Golden Beach Hotel – Hersonissos',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/golden-beach-hotel-hersonissos.png',
          location: 'Golden Beach Hotel, Hersonissos, Crete',
          prices: {
            double: 619,
            single: 799,
            triple: 569,
            child1: 309
          },
          departureDate: '10/07',
          packagePrice: 1238
        },
        {
          name: 'Golden Beach Hotel – Hersonissos',
          stars: 4,
          roomType: 'Sea View Room',
          image: '/images/hotels/golden-beach-hotel-hersonissos.png',
          location: 'Golden Beach Hotel, Hersonissos, Crete',
          prices: {
            double: 695,
            triple: 639,
            child1: 309
          },
          departureDate: '03/07',
          packagePrice: 1390
        },
        {
          name: 'Golden Beach Hotel – Hersonissos',
          stars: 4,
          roomType: 'Sea View Room',
          image: '/images/hotels/golden-beach-hotel-hersonissos.png',
          location: 'Golden Beach Hotel, Hersonissos, Crete',
          prices: {
            double: 695,
            triple: 639,
            child1: 309
          },
          departureDate: '10/07',
          packagePrice: 1390
        },
        {
          name: 'Golden Beach Hotel – Hersonissos',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/golden-beach-hotel-hersonissos.png',
          location: 'Golden Beach Hotel, Hersonissos, Crete',
          prices: {
            double: 695,
            single: 909,
            triple: 639,
            child1: 309
          },
          departureDate: '17/07',
          packagePrice: 1390
        },
        {
          name: 'Golden Beach Hotel – Hersonissos',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/golden-beach-hotel-hersonissos.png',
          location: 'Golden Beach Hotel, Hersonissos, Crete',
          prices: {
            double: 695,
            single: 909,
            triple: 639,
            child1: 309
          },
          departureDate: '24/07',
          packagePrice: 1390
        },
        {
          name: 'Golden Beach Hotel – Hersonissos',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/golden-beach-hotel-hersonissos.png',
          location: 'Golden Beach Hotel, Hersonissos, Crete',
          prices: {
            double: 695,
            single: 909,
            triple: 639,
            child1: 309
          },
          departureDate: '31/07',
          packagePrice: 1390
        },
        {
          name: 'Golden Beach Hotel – Hersonissos',
          stars: 4,
          roomType: 'Sea View Room',
          image: '/images/hotels/golden-beach-hotel-hersonissos.png',
          location: 'Golden Beach Hotel, Hersonissos, Crete',
          prices: {
            double: 769,
            triple: 699,
            child1: 309
          },
          departureDate: '17/07',
          packagePrice: 1538
        },
        {
          name: 'Golden Beach Hotel – Hersonissos',
          stars: 4,
          roomType: 'Sea View Room',
          image: '/images/hotels/golden-beach-hotel-hersonissos.png',
          location: 'Golden Beach Hotel, Hersonissos, Crete',
          prices: {
            double: 769,
            triple: 699,
            child1: 309
          },
          departureDate: '24/07',
          packagePrice: 1538
        },
        {
          name: 'Golden Beach Hotel – Hersonissos',
          stars: 4,
          roomType: 'Sea View Room',
          image: '/images/hotels/golden-beach-hotel-hersonissos.png',
          location: 'Golden Beach Hotel, Hersonissos, Crete',
          prices: {
            double: 769,
            triple: 699,
            child1: 309
          },
          departureDate: '31/07',
          packagePrice: 1538
        },
        {
          name: 'Golden Beach Hotel – Hersonissos',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/golden-beach-hotel-hersonissos.png',
          location: 'Golden Beach Hotel, Hersonissos, Crete',
          prices: {
            double: 719,
            single: 939,
            triple: 659,
            child1: 329
          },
          departureDate: '07/08',
          packagePrice: 1438
        },
        {
          name: 'Golden Beach Hotel – Hersonissos',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/golden-beach-hotel-hersonissos.png',
          location: 'Golden Beach Hotel, Hersonissos, Crete',
          prices: {
            double: 719,
            single: 939,
            triple: 659,
            child1: 329
          },
          departureDate: '14/08',
          packagePrice: 1438
        },
        {
          name: 'Golden Beach Hotel – Hersonissos',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/golden-beach-hotel-hersonissos.png',
          location: 'Golden Beach Hotel, Hersonissos, Crete',
          prices: {
            double: 719,
            single: 939,
            triple: 659,
            child1: 329
          },
          departureDate: '21/08',
          packagePrice: 1438
        },
        {
          name: 'Golden Beach Hotel – Hersonissos',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/golden-beach-hotel-hersonissos.png',
          location: 'Golden Beach Hotel, Hersonissos, Crete',
          prices: {
            double: 719,
            single: 939,
            triple: 659,
            child1: 329
          },
          departureDate: '28/08',
          packagePrice: 1438
        },
        {
          name: 'Golden Beach Hotel – Hersonissos',
          stars: 4,
          roomType: 'Sea View Room',
          image: '/images/hotels/golden-beach-hotel-hersonissos.png',
          location: 'Golden Beach Hotel, Hersonissos, Crete',
          prices: {
            double: 789,
            triple: 729,
            child1: 339
          },
          departureDate: '07/08',
          packagePrice: 1578
        },
        {
          name: 'Golden Beach Hotel – Hersonissos',
          stars: 4,
          roomType: 'Sea View Room',
          image: '/images/hotels/golden-beach-hotel-hersonissos.png',
          location: 'Golden Beach Hotel, Hersonissos, Crete',
          prices: {
            double: 789,
            triple: 729,
            child1: 339
          },
          departureDate: '14/08',
          packagePrice: 1578
        },
        {
          name: 'Golden Beach Hotel – Hersonissos',
          stars: 4,
          roomType: 'Sea View Room',
          image: '/images/hotels/golden-beach-hotel-hersonissos.png',
          location: 'Golden Beach Hotel, Hersonissos, Crete',
          prices: {
            double: 789,
            triple: 729,
            child1: 339
          },
          departureDate: '21/08',
          packagePrice: 1578
        },
        {
          name: 'Golden Beach Hotel – Hersonissos',
          stars: 4,
          roomType: 'Sea View Room',
          image: '/images/hotels/golden-beach-hotel-hersonissos.png',
          location: 'Golden Beach Hotel, Hersonissos, Crete',
          prices: {
            double: 789,
            triple: 729,
            child1: 339
          },
          departureDate: '28/08',
          packagePrice: 1578
        },
        {
          name: 'Olympic Palladium Hotel – Rethymno',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/olympic-palladium-rethymno.png',
          location: 'Olympic Palladium Hotel, Rethymno, Crete',
          prices: {
            double: 639,
            single: 845,
            triple: 569,
            child1: 489
          },
          departureDate: '03/07',
          packagePrice: 1278
        },
        {
          name: 'Olympic Palladium Hotel – Rethymno',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/olympic-palladium-rethymno.png',
          location: 'Olympic Palladium Hotel, Rethymno, Crete',
          prices: {
            double: 639,
            single: 845,
            triple: 569,
            child1: 489
          },
          departureDate: '10/07',
          packagePrice: 1278
        },
        {
          name: 'Olympic Palladium Hotel – Rethymno',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/olympic-palladium-rethymno.png',
          location: 'Olympic Palladium Hotel, Rethymno, Crete',
          prices: {
            double: 639,
            single: 845,
            triple: 569,
            child1: 489
          },
          departureDate: '17/07',
          packagePrice: 1278
        },
        {
          name: 'Olympic Palladium Hotel – Rethymno',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/olympic-palladium-rethymno.png',
          location: 'Olympic Palladium Hotel, Rethymno, Crete',
          prices: {
            double: 639,
            single: 845,
            triple: 569,
            child1: 489
          },
          departureDate: '24/07',
          packagePrice: 1278
        },
        {
          name: 'Olympic Palladium Hotel – Rethymno',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/olympic-palladium-rethymno.png',
          location: 'Olympic Palladium Hotel, Rethymno, Crete',
          prices: {
            double: 639,
            single: 845,
            triple: 569,
            child1: 489
          },
          departureDate: '31/07',
          packagePrice: 1278
        },
        {
          name: 'Olympic Palladium Hotel – Rethymno',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/olympic-palladium-rethymno.png',
          location: 'Olympic Palladium Hotel, Rethymno, Crete',
          prices: {
            double: 669,
            single: 869,
            triple: 589,
            child1: 509
          },
          departureDate: '07/08',
          packagePrice: 1338
        },
        {
          name: 'Olympic Palladium Hotel – Rethymno',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/olympic-palladium-rethymno.png',
          location: 'Olympic Palladium Hotel, Rethymno, Crete',
          prices: {
            double: 669,
            single: 869,
            triple: 589,
            child1: 509
          },
          departureDate: '14/08',
          packagePrice: 1338
        },
        {
          name: 'Olympic Palladium Hotel – Rethymno',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/olympic-palladium-rethymno.png',
          location: 'Olympic Palladium Hotel, Rethymno, Crete',
          prices: {
            double: 669,
            single: 869,
            triple: 589,
            child1: 509
          },
          departureDate: '21/08',
          packagePrice: 1338
        },
        {
          name: 'Olympic Palladium Hotel – Rethymno',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/olympic-palladium-rethymno.png',
          location: 'Olympic Palladium Hotel, Rethymno, Crete',
          prices: {
            double: 669,
            single: 869,
            triple: 589,
            child1: 509
          },
          departureDate: '28/08',
          packagePrice: 1338
        },
        {
          name: 'Mistral Bay Hotel – Agios Nikolaos',
          stars: 4,
          roomType: 'Side Sea View Room',
          image: '/images/hotels/mistral-bay-agios-nikolaos.png',
          location: 'Mistral Bay Hotel, Agios Nikolaos, Crete',
          prices: {
            double: 679,
            triple: 609,
            child1: 495
          },
          departureDate: '03/07',
          packagePrice: 1358
        },
        {
          name: 'Mistral Bay Hotel – Agios Nikolaos',
          stars: 4,
          roomType: 'Side Sea View Room',
          image: '/images/hotels/mistral-bay-agios-nikolaos.png',
          location: 'Mistral Bay Hotel, Agios Nikolaos, Crete',
          prices: {
            double: 679,
            triple: 609,
            child1: 495
          },
          departureDate: '10/07',
          packagePrice: 1358
        },
        {
          name: 'Mistral Bay Hotel – Agios Nikolaos',
          stars: 4,
          roomType: 'Side Sea View Room',
          image: '/images/hotels/mistral-bay-agios-nikolaos.png',
          location: 'Mistral Bay Hotel, Agios Nikolaos, Crete',
          prices: {
            double: 679,
            triple: 609,
            child1: 495
          },
          departureDate: '17/07',
          packagePrice: 1358
        },
        {
          name: 'Mistral Bay Hotel – Agios Nikolaos',
          stars: 4,
          roomType: 'Side Sea View Room',
          image: '/images/hotels/mistral-bay-agios-nikolaos.png',
          location: 'Mistral Bay Hotel, Agios Nikolaos, Crete',
          prices: {
            double: 679,
            triple: 609,
            child1: 495
          },
          departureDate: '24/07',
          packagePrice: 1358
        },
        {
          name: 'Mistral Bay Hotel – Agios Nikolaos',
          stars: 4,
          roomType: 'Side Sea View Room',
          image: '/images/hotels/mistral-bay-agios-nikolaos.png',
          location: 'Mistral Bay Hotel, Agios Nikolaos, Crete',
          prices: {
            double: 679,
            triple: 609,
            child1: 495
          },
          departureDate: '31/07',
          packagePrice: 1358
        },
        {
          name: 'Mistral Bay Hotel – Agios Nikolaos',
          stars: 4,
          roomType: 'Side Sea View Room',
          image: '/images/hotels/mistral-bay-agios-nikolaos.png',
          location: 'Mistral Bay Hotel, Agios Nikolaos, Crete',
          prices: {
            double: 699,
            triple: 629,
            child1: 519
          },
          departureDate: '07/08',
          packagePrice: 1398
        },
        {
          name: 'Mistral Bay Hotel – Agios Nikolaos',
          stars: 4,
          roomType: 'Side Sea View Room',
          image: '/images/hotels/mistral-bay-agios-nikolaos.png',
          location: 'Mistral Bay Hotel, Agios Nikolaos, Crete',
          prices: {
            double: 699,
            triple: 629,
            child1: 519
          },
          departureDate: '14/08',
          packagePrice: 1398
        },
        {
          name: 'Mistral Bay Hotel – Agios Nikolaos',
          stars: 4,
          roomType: 'Side Sea View Room',
          image: '/images/hotels/mistral-bay-agios-nikolaos.png',
          location: 'Mistral Bay Hotel, Agios Nikolaos, Crete',
          prices: {
            double: 699,
            triple: 629,
            child1: 519
          },
          departureDate: '21/08',
          packagePrice: 1398
        },
        {
          name: 'Mistral Bay Hotel – Agios Nikolaos',
          stars: 4,
          roomType: 'Side Sea View Room',
          image: '/images/hotels/mistral-bay-agios-nikolaos.png',
          location: 'Mistral Bay Hotel, Agios Nikolaos, Crete',
          prices: {
            double: 699,
            triple: 629,
            child1: 519
          },
          departureDate: '28/08',
          packagePrice: 1398
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 679,
            triple: 619,
            child1: 399
          },
          departureDate: '03/07',
          packagePrice: 1358
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 679,
            triple: 619,
            child1: 399
          },
          departureDate: '10/07',
          packagePrice: 1358
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 679,
            triple: 619,
            child1: 399
          },
          departureDate: '17/07',
          packagePrice: 1358
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 679,
            triple: 619,
            child1: 399
          },
          departureDate: '24/07',
          packagePrice: 1358
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 679,
            triple: 619,
            child1: 399
          },
          departureDate: '31/07',
          packagePrice: 1358
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Sea View Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 769,
            triple: 699,
            child1: 399
          },
          departureDate: '03/07',
          packagePrice: 1538
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Sea View Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 769,
            triple: 699,
            child1: 399
          },
          departureDate: '10/07',
          packagePrice: 1538
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Sea View Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 769,
            triple: 699,
            child1: 399
          },
          departureDate: '17/07',
          packagePrice: 1538
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Sea View Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 769,
            triple: 699,
            child1: 399
          },
          departureDate: '24/07',
          packagePrice: 1538
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Sea View Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 769,
            triple: 699,
            child1: 399
          },
          departureDate: '31/07',
          packagePrice: 1538
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Family Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 909,
            triple: 829,
            child1: 399,
            child2: 669
          },
          departureDate: '03/07',
          packagePrice: 1818
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Family Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 909,
            triple: 829,
            child1: 399,
            child2: 669
          },
          departureDate: '10/07',
          packagePrice: 1818
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Family Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 909,
            triple: 829,
            child1: 399,
            child2: 669
          },
          departureDate: '17/07',
          packagePrice: 1818
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Family Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 909,
            triple: 829,
            child1: 399,
            child2: 669
          },
          departureDate: '24/07',
          packagePrice: 1818
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Family Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 909,
            triple: 829,
            child1: 399,
            child2: 669
          },
          departureDate: '31/07',
          packagePrice: 1818
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Sea View Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 789,
            triple: 719,
            child1: 425
          },
          departureDate: '07/08',
          packagePrice: 1578
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Sea View Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 789,
            triple: 719,
            child1: 425
          },
          departureDate: '14/08',
          packagePrice: 1578
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Sea View Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 789,
            triple: 719,
            child1: 425
          },
          departureDate: '21/08',
          packagePrice: 1578
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Sea View Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 789,
            triple: 719,
            child1: 425
          },
          departureDate: '28/08',
          packagePrice: 1578
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 699,
            triple: 639,
            child1: 425
          },
          departureDate: '07/08',
          packagePrice: 1398
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 699,
            triple: 639,
            child1: 425
          },
          departureDate: '14/08',
          packagePrice: 1398
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 699,
            triple: 639,
            child1: 425
          },
          departureDate: '21/08',
          packagePrice: 1398
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 699,
            triple: 639,
            child1: 425
          },
          departureDate: '28/08',
          packagePrice: 1398
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Family Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 929,
            triple: 849,
            child1: 425,
            child2: 689
          },
          departureDate: '07/08',
          packagePrice: 1858
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Family Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 929,
            triple: 849,
            child1: 425,
            child2: 689
          },
          departureDate: '14/08',
          packagePrice: 1858
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Family Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 929,
            triple: 849,
            child1: 425,
            child2: 689
          },
          departureDate: '21/08',
          packagePrice: 1858
        },
        {
          name: 'Elounda Krini Hotel – Elounda',
          stars: 4,
          roomType: 'Family Room',
          image: '/images/hotels/elounda-krini-elounda.png',
          location: 'Elounda Krini Hotel, Elounda, Crete',
          prices: {
            double: 929,
            triple: 849,
            child1: 425,
            child2: 689
          },
          departureDate: '28/08',
          packagePrice: 1858
        },
        {
          name: 'Galaxy Hotel – Heraklion',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/galaxy-hotel-heraklion.png',
          location: 'Galaxy Hotel, Heraklion, Crete',
          prices: {
            double: 699,
            single: 1019,
            triple: 669,
            child1: 499
          },
          departureDate: '03/07',
          packagePrice: 1398
        },
        {
          name: 'Galaxy Hotel – Heraklion',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/galaxy-hotel-heraklion.png',
          location: 'Galaxy Hotel, Heraklion, Crete',
          prices: {
            double: 699,
            single: 1019,
            triple: 669,
            child1: 499
          },
          departureDate: '10/07',
          packagePrice: 1398
        },
        {
          name: 'Galaxy Hotel – Heraklion',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/galaxy-hotel-heraklion.png',
          location: 'Galaxy Hotel, Heraklion, Crete',
          prices: {
            double: 699,
            single: 1019,
            triple: 669,
            child1: 499
          },
          departureDate: '17/07',
          packagePrice: 1398
        },
        {
          name: 'Galaxy Hotel – Heraklion',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/galaxy-hotel-heraklion.png',
          location: 'Galaxy Hotel, Heraklion, Crete',
          prices: {
            double: 699,
            single: 1019,
            triple: 669,
            child1: 499
          },
          departureDate: '24/07',
          packagePrice: 1398
        },
        {
          name: 'Galaxy Hotel – Heraklion',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/galaxy-hotel-heraklion.png',
          location: 'Galaxy Hotel, Heraklion, Crete',
          prices: {
            double: 699,
            single: 1019,
            triple: 669,
            child1: 499
          },
          departureDate: '31/07',
          packagePrice: 1398
        },
        {
          name: 'Galaxy Hotel – Heraklion',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/galaxy-hotel-heraklion.png',
          location: 'Galaxy Hotel, Heraklion, Crete',
          prices: {
            double: 729,
            single: 1039,
            triple: 689,
            child1: 529
          },
          departureDate: '07/08',
          packagePrice: 1458
        },
        {
          name: 'Galaxy Hotel – Heraklion',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/galaxy-hotel-heraklion.png',
          location: 'Galaxy Hotel, Heraklion, Crete',
          prices: {
            double: 729,
            single: 1039,
            triple: 689,
            child1: 529
          },
          departureDate: '14/08',
          packagePrice: 1458
        },
        {
          name: 'Galaxy Hotel – Heraklion',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/galaxy-hotel-heraklion.png',
          location: 'Galaxy Hotel, Heraklion, Crete',
          prices: {
            double: 729,
            single: 1039,
            triple: 689,
            child1: 529
          },
          departureDate: '21/08',
          packagePrice: 1458
        },
        {
          name: 'Galaxy Hotel – Heraklion',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/galaxy-hotel-heraklion.png',
          location: 'Galaxy Hotel, Heraklion, Crete',
          prices: {
            double: 729,
            single: 1039,
            triple: 689,
            child1: 529
          },
          departureDate: '28/08',
          packagePrice: 1458
        },
        {
          name: 'Aquila Atlantis Hotel – Heraklion',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/aquila-atlantis-heraklion.png',
          location: 'Aquila Atlantis Hotel, Heraklion, Crete',
          prices: {
            double: 699,
            single: 935,
            triple: 639,
            child1: 299
          },
          departureDate: '03/07',
          packagePrice: 1398
        },
        {
          name: 'Aquila Atlantis Hotel – Heraklion',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/aquila-atlantis-heraklion.png',
          location: 'Aquila Atlantis Hotel, Heraklion, Crete',
          prices: {
            double: 699,
            single: 935,
            triple: 639,
            child1: 299
          },
          departureDate: '10/07',
          packagePrice: 1398
        },
        {
          name: 'Aquila Atlantis Hotel – Heraklion',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/aquila-atlantis-heraklion.png',
          location: 'Aquila Atlantis Hotel, Heraklion, Crete',
          prices: {
            double: 699,
            single: 935,
            triple: 639,
            child1: 299
          },
          departureDate: '17/07',
          packagePrice: 1398
        },
        {
          name: 'Aquila Atlantis Hotel – Heraklion',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/aquila-atlantis-heraklion.png',
          location: 'Aquila Atlantis Hotel, Heraklion, Crete',
          prices: {
            double: 699,
            single: 935,
            triple: 639,
            child1: 299
          },
          departureDate: '24/07',
          packagePrice: 1398
        },
        {
          name: 'Aquila Atlantis Hotel – Heraklion',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/aquila-atlantis-heraklion.png',
          location: 'Aquila Atlantis Hotel, Heraklion, Crete',
          prices: {
            double: 699,
            single: 935,
            triple: 639,
            child1: 299
          },
          departureDate: '31/07',
          packagePrice: 1398
        },
        {
          name: 'Aquila Atlantis Hotel – Heraklion',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/aquila-atlantis-heraklion.png',
          location: 'Aquila Atlantis Hotel, Heraklion, Crete',
          prices: {
            double: 729,
            single: 959,
            triple: 665,
            child1: 329
          },
          departureDate: '07/08',
          packagePrice: 1458
        },
        {
          name: 'Aquila Atlantis Hotel – Heraklion',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/aquila-atlantis-heraklion.png',
          location: 'Aquila Atlantis Hotel, Heraklion, Crete',
          prices: {
            double: 729,
            single: 959,
            triple: 665,
            child1: 329
          },
          departureDate: '14/08',
          packagePrice: 1458
        },
        {
          name: 'Aquila Atlantis Hotel – Heraklion',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/aquila-atlantis-heraklion.png',
          location: 'Aquila Atlantis Hotel, Heraklion, Crete',
          prices: {
            double: 729,
            single: 959,
            triple: 665,
            child1: 329
          },
          departureDate: '21/08',
          packagePrice: 1458
        },
        {
          name: 'Aquila Atlantis Hotel – Heraklion',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/aquila-atlantis-heraklion.png',
          location: 'Aquila Atlantis Hotel, Heraklion, Crete',
          prices: {
            double: 729,
            single: 959,
            triple: 665,
            child1: 329
          },
          departureDate: '28/08',
          packagePrice: 1458
        },
        {
          name: 'Hersonissos Maris Hotel – Hersonissos',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/hersonissos-maris-hersonissos.png',
          location: 'Hersonissos Maris Hotel, Hersonissos, Crete',
          prices: {
            double: 719,
            single: 1019,
            triple: 669,
            child1: 509
          },
          departureDate: '03/07',
          packagePrice: 1438
        },
        {
          name: 'Hersonissos Maris Hotel – Hersonissos',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/hersonissos-maris-hersonissos.png',
          location: 'Hersonissos Maris Hotel, Hersonissos, Crete',
          prices: {
            double: 719,
            single: 1019,
            triple: 669,
            child1: 509
          },
          departureDate: '10/07',
          packagePrice: 1438
        },
        {
          name: 'Hersonissos Maris Hotel – Hersonissos',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/hersonissos-maris-hersonissos.png',
          location: 'Hersonissos Maris Hotel, Hersonissos, Crete',
          prices: {
            double: 719,
            single: 1019,
            triple: 669,
            child1: 509
          },
          departureDate: '17/07',
          packagePrice: 1438
        },
        {
          name: 'Hersonissos Maris Hotel – Hersonissos',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/hersonissos-maris-hersonissos.png',
          location: 'Hersonissos Maris Hotel, Hersonissos, Crete',
          prices: {
            double: 719,
            single: 1019,
            triple: 669,
            child1: 509
          },
          departureDate: '24/07',
          packagePrice: 1438
        },
        {
          name: 'Hersonissos Maris Hotel – Hersonissos',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/hersonissos-maris-hersonissos.png',
          location: 'Hersonissos Maris Hotel, Hersonissos, Crete',
          prices: {
            double: 719,
            single: 1019,
            triple: 669,
            child1: 509
          },
          departureDate: '31/07',
          packagePrice: 1438
        },
        {
          name: 'Hersonissos Maris Hotel – Hersonissos',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/hersonissos-maris-hersonissos.png',
          location: 'Hersonissos Maris Hotel, Hersonissos, Crete',
          prices: {
            double: 749,
            single: 1039,
            triple: 689,
            child1: 529
          },
          departureDate: '07/08',
          packagePrice: 1498
        },
        {
          name: 'Hersonissos Maris Hotel – Hersonissos',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/hersonissos-maris-hersonissos.png',
          location: 'Hersonissos Maris Hotel, Hersonissos, Crete',
          prices: {
            double: 749,
            single: 1039,
            triple: 689,
            child1: 529
          },
          departureDate: '14/08',
          packagePrice: 1498
        },
        {
          name: 'Hersonissos Maris Hotel – Hersonissos',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/hersonissos-maris-hersonissos.png',
          location: 'Hersonissos Maris Hotel, Hersonissos, Crete',
          prices: {
            double: 749,
            single: 1039,
            triple: 689,
            child1: 529
          },
          departureDate: '21/08',
          packagePrice: 1498
        },
        {
          name: 'Hersonissos Maris Hotel – Hersonissos',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/hersonissos-maris-hersonissos.png',
          location: 'Hersonissos Maris Hotel, Hersonissos, Crete',
          prices: {
            double: 749,
            single: 1039,
            triple: 689,
            child1: 529
          },
          departureDate: '28/08',
          packagePrice: 1498
        },
        {
          name: 'Jo An Palace Hotel – Rethymno',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/jo-an-palace-rethymno.png',
          location: 'Jo An Palace Hotel, Rethymno, Crete',
          prices: {
            double: 749,
            single: 959,
            triple: 679,
            child1: 349
          },
          departureDate: '03/07',
          packagePrice: 1498
        },
        {
          name: 'Jo An Palace Hotel – Rethymno',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/jo-an-palace-rethymno.png',
          location: 'Jo An Palace Hotel, Rethymno, Crete',
          prices: {
            double: 749,
            single: 959,
            triple: 679,
            child1: 349
          },
          departureDate: '10/07',
          packagePrice: 1498
        },
        {
          name: 'Jo An Palace Hotel – Rethymno',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/jo-an-palace-rethymno.png',
          location: 'Jo An Palace Hotel, Rethymno, Crete',
          prices: {
            double: 749,
            single: 959,
            triple: 679,
            child1: 349
          },
          departureDate: '17/07',
          packagePrice: 1498
        },
        {
          name: 'Jo An Palace Hotel – Rethymno',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/jo-an-palace-rethymno.png',
          location: 'Jo An Palace Hotel, Rethymno, Crete',
          prices: {
            double: 749,
            single: 959,
            triple: 679,
            child1: 349
          },
          departureDate: '24/07',
          packagePrice: 1498
        },
        {
          name: 'Jo An Palace Hotel – Rethymno',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/jo-an-palace-rethymno.png',
          location: 'Jo An Palace Hotel, Rethymno, Crete',
          prices: {
            double: 749,
            single: 959,
            triple: 679,
            child1: 349
          },
          departureDate: '31/07',
          packagePrice: 1498
        },
        {
          name: 'Jo An Palace Hotel – Rethymno',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/jo-an-palace-rethymno.png',
          location: 'Jo An Palace Hotel, Rethymno, Crete',
          prices: {
            double: 775,
            single: 979,
            triple: 699,
            child1: 379
          },
          departureDate: '07/08',
          packagePrice: 1550
        },
        {
          name: 'Jo An Palace Hotel – Rethymno',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/jo-an-palace-rethymno.png',
          location: 'Jo An Palace Hotel, Rethymno, Crete',
          prices: {
            double: 775,
            single: 979,
            triple: 699,
            child1: 379
          },
          departureDate: '14/08',
          packagePrice: 1550
        },
        {
          name: 'Jo An Palace Hotel – Rethymno',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/jo-an-palace-rethymno.png',
          location: 'Jo An Palace Hotel, Rethymno, Crete',
          prices: {
            double: 775,
            single: 979,
            triple: 699,
            child1: 379
          },
          departureDate: '21/08',
          packagePrice: 1550
        },
        {
          name: 'Jo An Palace Hotel – Rethymno',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/jo-an-palace-rethymno.png',
          location: 'Jo An Palace Hotel, Rethymno, Crete',
          prices: {
            double: 775,
            single: 979,
            triple: 699,
            child1: 379
          },
          departureDate: '28/08',
          packagePrice: 1550
        }
      ],
      included: [
        'Αεροπορικό εισιτήριο Λάρνακα - Ηράκλειο - Λάρνακα με πτήσεις της Sky Express',
        'Φόροι αεροδρομίων και επίναυλο καυσίμων',
        'Διαμονή για 4 βράδια σε ξενοδοχείο της επιλογής σας με πρόγευμα ή με ημιδιατροφή ή με πλήρη διατροφή όπου αναφέρεται',
        'Μεταφορές από και προς το αεροδρόμιο',
        'Μία αποσκευή 20kg και μία χειραποσκευή 8kg',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Τοπικός φόρος διαμονής (πληρώνεται επί τόπου)',
        'Φαγητό και ποτό στην πτήση'
      ],
      cancellationPolicy: 'Σε περίπτωση ακύρωσης μέχρι 45 ημέρες πριν την ημερομηνία άφιξης, 50 EUR ανά άτομο θα χρεωθούν. Σε περίπτωση ακύρωσης μετά τις 45 ημέρες και μέχρι 30 ημέρες πριν την ημερομηνία άφιξης, 30% της συνολικής τιμής θα χρεωθούν. Σε περίπτωση ακύρωσης μετά τις 30 ημέρες και μέχρι 21 ημέρες πριν την ημερομηνία άφιξης, 50% της συνολικής τιμής θα χρεωθούν. Σε περίπτωση ακύρωσης μετά τις 21 ημέρες και μέχρι 0 ημέρες πριν την ημερομηνία άφιξης, 100% της συνολικής τιμής θα χρεωθούν. Σε περίπτωση μη εμφάνισης 100% της συνολικής τιμής θα χρεωθούν.',
      termsAndConditions: [
        'Σε περίπτωση ακύρωσης μέχρι 45 ημέρες πριν την ημερομηνία άφιξης, 50 EUR ανά άτομο θα χρεωθούν',
        'Σε περίπτωση ακύρωσης μετά τις 45 ημέρες και μέχρι 30 ημέρες πριν την ημερομηνία άφιξης, 30% της συνολικής τιμής θα χρεωθούν',
        'Σε περίπτωση ακύρωσης μετά τις 30 ημέρες και μέχρι 21 ημέρες πριν την ημερομηνία άφιξης, 50% της συνολικής τιμής θα χρεωθούν',
        'Σε περίπτωση ακύρωσης μετά τις 21 ημέρες και μέχρι 0 ημέρες πριν την ημερομηνία άφιξης, 100% της συνολικής τιμής θα χρεωθούν',
        'Σε περίπτωση μη εμφάνισης 100% της συνολικής τιμής θα χρεωθούν'
      ],
      program: {
        introduction: 'ΗΡΑΚΛΕΙΟ Η ΠΟΛΗ–ΛΙΜΑΝΙ ΤΗΣ ΜΕΣΟΓΕΙΟΥ ΚΑΙ ΤΗΣ ΙΣΤΟΡΙΑΣ\n\nΣφύζει από ζωή, χαρίζοντάς σας πληθώρα απολαύσεων. Μια πόλη γενναιόδωρη και αυθεντική. Το χτες και το σήμερα σε μια αρμονική συνύπαρξη….!!!\n\nΠρωτεύουσα της Κρήτης. Μια πόλη για να ζήσετε και ένα μοναδικό ορμητήριο για να ανακαλύψετε τα διεθνούς φήμης αξιοθέατα του νομού. Το Ηράκλειο του χθες: το ενετικό λιμάνι και τα τείχη, ιδανικά για έναν περίπατο στην ιστορία. Η ζωντανή πόλη του σήμερα: πλατείες και πεζόδρομοι γεμάτοι νεαρόκοσμο, ρακάδικα, ουζερί, γκουρμέ εστιατόρια και πολυτελή ξενοδοχεία. Πλάι σε όλα αυτά, μία σειρά από εξαιρετικά μουσεία και ένα από τα μεγαλύτερα ενυδρεία της Ευρώπης. Λίγο πιο πέρα, η περιλάλητη Κνωσός, από τα σπουδαιότερα αξιοθέατα στο νησί και την Ελλάδα ολόκληρη: το σημαντικότερο κέντρο του Μινωικού πολιτισμού, το ανάκτορο του Μίνωα και ο μύθος του Μινώταυρου.',
        heraklionCity: 'Ηράκλειο: πόλη θαλασσινή, γεμάτη ζωή και ιστορία\n\nΟ ιστορικός Χάνδακας, η πόλη του Ηρακλείου με το ενετικό λιμάνι της, είναι μια σύγχρονη πρωτεύουσα με δεκάδες επιλογές στον τομέα του πολιτισμού, της διαμονής, του φαγητού και της διασκέδασης. Μια πόλη, όπου θα απολαύσετε τις χαρές του σήμερα και την ομορφιά του χθες. Περπατήστε και απολαύστε τα αξιοθέατα: την εντυπωσιακή εκκλησία του Αγίου Τίτου στην πλατεία, αρχικά κτισμένη από τον Νικηφόρο Φωκά το 961, την Αρμερία και τη Λέσχη δίπλα στον Άγιο Τίτο, το Δημαρχείο (Λότζια) με τις 82 μετόπες και τις στοές. Απέναντι βρίσκεται η πλατεία με τα λιοντάρια, γεμάτη ζωή και κίνηση. Στην πλατεία Ελευθερίας ξεχωρίζει το εντυπωσιακό κτήριο της Νομαρχίας, που στεγάζει σήμερα την Περιφέρεια Κρήτης.',
        venetians: 'Οι Ενετοί στον μόλο\n\nΣτην είσοδο του ενετικού λιμανιού του Ηρακλείου ξεχωρίζει ο Κούλες, που τον αποκαλούσαν Castello del Molo ή Rocca al Mare. Κτίστηκε από τους Ενετούς και πήρε την τελική του μορφή μεταξύ 1523-1540. Έχει επισκευαστεί πολλές φορές και επί τουρκοκρατίας υπήρξε φυλακή. Απέναντι από το λιμάνι θα θαυμάσετε τα εντυπωσιακά ενετικά νεώρια.',
        walls: 'Τα τείχη της παλιάς πόλης: μεταίχμιο του σήμερα και του χθες\n\nΠερπατώντας πάνω στα τείχη, θα δείτε όλη την πόλη από ψηλά, θα ξεκουραστείτε σε μικρά σκιερά πάρκα και θα θαυμάσετε την τέχνη του διάσημου μηχανικού της Βενετίας, Michele Sanmicheli, σε σχέδια του οποίου κτίστηκαν, σε διάστημα μεγαλύτερο των 100 ετών. Τα ενετικά τείχη οριοθετούν την παλιά πόλη και ήταν ένα έργο θαυμαστό που ανέδειξε το Ηράκλειο στην καλύτερα οχυρωμένη πόλη της Μεσογείου.',
        knossos: 'Η «μυθική» Κνωσός\n\nΟ μηχανικός Δαίδαλος έφτιαξε τον Λαβύρινθο για λογαριασμό του μυθικού βασιλιά Μίνωα, για να απομονώσει τον Μινώταυρο, ένα φοβερό πλάσμα που ήταν μισός άνθρωπος, μισός ταύρος. Τον σκότωσε ο Θησέας και βρήκε την έξοδο από τον Λαβύρινθο με τη βοήθεια της κόρης του Μίνωα, Αριάδνης και του μίτου της. Το πιο σημαντικό κέντρο του Μινωικού πολιτισμού και ένας από τους πιο δημοφιλείς αρχαιολογικούς χώρους της Ελλάδας απέχει μόλις 5 χλμ. από το Ηράκλειο. Ήταν η έδρα του βασιλιά Μίνωα και η πολύπλοκη αρχιτεκτονική του δομή δικαιολογεί τον μύθο του Λαβύρινθου.\n\nΧάρη στις αναστηλώσεις του Έβανς, που ανέσκαψε την Κνωσό, είναι από τους μοναδικούς αρχαιολογικούς χώρους στην Ελλάδα, όπου ο επισκέπτης μπορεί να βιώσει στη διάρκεια της επίσκεψης την εμπειρία της ζωής μέσα στα ανάκτορα. Η ιστορία πάλλεται. Θα θαυμάσετε την αίθουσα του θρόνου που αποτελείται από τον προθάλαμο και τον κυρίως χώρο του θρόνου. Τον διάδρομο πομπής διακοσμημένο με τοιχογραφίες -χαρακτηριστικότερη από τις οποίες είναι ο «Πρίγκιπας με τα κρίνα».\n\nΤα προπύλαια και τα περίφημα Διπλά Κέρατα, ένα από τα ιερά σύμβολα της μινωικής θρησκείας. Στα βασιλικά διαμερίσματα θα δείτε την αίθουσα των «Διπλών Πελέκεων» και το «Διαμέρισμα της Βασίλισσας» με την τοιχογραφία των «Δελφινιών». Το ανάκτορο της Κνωσού άκμασε στη μινωική εποχή (2000-1350 π.Χ.), τότε που υπήρξε το πιο σημαντικό οικονομικό-κοινωνικό και θρησκευτικό κέντρο της Κρήτης.',
        museum: 'Αρχαιολογικό Μουσείο Ηρακλείου: «πανόραμα» Μινωικής Κρήτης\n\nΤο διάσημο μουσείο θεωρείται από τα σημαντικότερα της Ευρώπης και τα εκθέματά του περιλαμβάνουν αντιπροσωπευτικά δείγματα από όλες τις περιόδους της προϊστορίας και ιστορίας της Κρήτης, καλύπτοντας περίπου 5.500 χρόνια. Θα θαυμάσετε την τοιχογραφία των «Ταυροκαθαψίων», τον «Δίσκο της Φαιστού», τον «Πρίγκιπα με τα κρίνα», τις «Κροκοσυλλέκτριες», το «Γαλάζιο πουλί». Τον Αύγουστο του 2013 εγκαινιάστηκε η νέα πτέρυγα με εκθέματα που ξεκινούν από τα γεωμετρικά, τα αρχαϊκά και τα κλασικά χρόνια και φτάνουν ως τη ρωμαϊκή εποχή.',
        cretaquarium: 'Cretaquarium: υδάτινη κιβωτός της Μεσογείου\n\nΚαρχαρίες, ιππόκαμποι, μέδουσες… Ο θαλάσσιος κόσμος της Μεσογείου παρελαύνει μπροστά στα έκθαμβα μάτια σας στο Cretaquarium, που περιλαμβάνει 60 ενυδρεία με 1.700.000 λίτρα θαλασσινού νερού. Είναι ένα από τα μεγαλύτερα ενυδρεία της Ευρώπης, ενώ στις δεξαμενές φιλοξενούνται περισσότεροι από 4.000 οργανισμοί. Η Κρήτη ξέρει πολύ καλά πώς θα σας εκπλήξει!',
        food: 'Πανδαισία γεύσεων και απολαύσεων\n\nΤσικουδιά χύμα σε καφενεία και ρακάδικα με τη συνοδεία παραδοσιακής μουσικής, πεντανόστιμοι μεζέδες, γκουρμέ πιάτα, εκλεκτά κρασιά, συνταγές της διάσημης κρητικής κουζίνας. Ντιζάιν καφέ, new age μπαρ, έθνικ στέκια της νεολαίας, μεγάλα κλαμπ για χορό μέχρι πρωίας... Οι επιλογές για φαγητό και για διασκέδαση στην πόλη του Ηρακλείου μοιάζουν άπειρες και το ωράριο είναι ιδιαίτερα... ελαστικό. Απολαύστε τα!',
        accommodation: 'Αναρίθμητες επιλογές διαμονής\n\nΣτο Ηράκλειο θα βρείτε μοντέρνα ξενοδοχεία πόλης, μπουτίκ- ξενοδοχεία σε ιστορικά κτίρια του κέντρου, αλλά και εξαιρετικά εστιατόρια και μπαρ με υπέροχη θέα στο ενετικό λιμάνι. Μεγάλες και υπερσύγχρονες ξενοδοχειακές μονάδες σάς περιμένουν στις κοντινές παραλίες του Ηρακλείου.',
        beaches: 'Παραλίες με χαρακτήρα και ομορφιά\n\nΔιαλέξτε: την Αμμουδάρα, δίπλα στην πόλη προς τα δυτικά, που είναι μεγάλη, αμμώδης με πλήρη οργάνωση και δεκάδες ξενοδοχεία. Το Τομπρούκ, προς τα ανατολικά, που έχει ταβέρνες, ξενοδοχεία, καφέ. Την Αρίνα ή το Κοκκίνη Χάνι, που είναι αγαπημένη του νεαρόκοσμου και έχει ξενοδοχεία, μαγαζιά, εστιατόρια και παραλιακά μπαρ που παίζουν δυνατά μουσική.',
        naturalHistory: 'Το Μουσείο Φυσικής Ιστορίας: πλούσιο, δραστήριο, διασκεδαστικό\n\nΛειτουργεί στο πλαίσιο του Πανεπιστημίου Κρήτης. Αποτελείται από πέντε τμήματα -Ζωολογικό, Βοτανικό, Ανθρωπολογικό, Παλαιοντολογικό-Γεωλογικό και Ορυκτολογικό. Οι συλλογές του περιλαμβάνουν δείγματα από την Ελλάδα και τη Μεσόγειο.',
        historicalMuseum: 'Ιστορικό Μουσείο Κρήτης: η Κρήτη της ιστορίας\n\nΣτεγάζεται σε ένα κομψό κτήριο των αρχών του 20ου αιώνα. Είναι μοντέρνο και εντυπωσιακό. Από τις μόνιμες εκθέσεις ξεχωρίζουν η Βυζαντινή και Μεταβυζαντινή Συλλογή, η Νομισματική Συλλογή, οι Συλλογές Κεραμικών και Γλυπτών, οι αίθουσες Νίκου Καζαντζάκη, η Εθνογραφική Συλλογή.',
        cityCenter: 'Στην καρδιά της πόλης\n\nΟ εμπορικός πεζόδρομος της Δαιδάλου, γεμάτος επώνυμα καταστήματα, ενώνει την πλατεία με τα Λιοντάρια με την πλατεία Ελευθερίας. Περπατώντας από τα λιοντάρια προς τα δυτικά, μπαίνετε στον φαρδύ πεζόδρομο της Χάνδακος με τα καταστήματα και τα καφέ.'
      },
      gallery: [
        '/images/summer/crete-hero.webp'
      ]
    }
  },
  {
    id: 20,
    title: 'THESSALONIKI / TRIKALA / ALPINE THESSALY – 6 Days',
    destination: 'Greece',
    category: 'Summer Packages',
    price: 549,
    duration: '6 days / 5 nights',
    description: 'Discover the beauty of Thessaloniki, Trikala, and Alpine Thessaly with this 6-day tour combining city exploration and mountain landscapes.',
    longDescription: 'Experience the perfect blend of urban culture in Thessaloniki, the charm of Trikala, and the breathtaking Alpine landscapes of Thessaly. This 6-day journey takes you through historic monasteries, mountain villages, and the vibrant city life of northern Greece.',
    image: '🇬🇷',
    featured: true,
    details: {
      departureDate: '10/07, 17/07, 24/07, 31/07, 07/08, 14/08, 21/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Thessaloniki, Trikala, Alpine Thessaly, Greece',
      monthAvailability: 'July, August',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Sky Express',
      includedLuggage: '1 checked bag 20kg + 1 hand luggage 8kg',
      coverImage: '/images/summer/skg-thessaloniki-hero.png',
      thumbnailImage: '/images/summer/skg-trikala-thumb.png',
      flights: [
        {
          direction: 'Departure',
          date: '10/07, 17/07, 24/07, 31/07, 07/08, 14/08, 21/08',
          route: 'Larnaca (LCA) → Thessaloniki (SKG)',
          flight: 'GQ 650',
          time: '12:10 → 14:10',
          luggage: '1 checked bag'
        },
        {
          direction: 'Return',
          date: '10/07, 17/07, 24/07, 31/07, 07/08, 14/08, 21/08',
          route: 'Thessaloniki (SKG) → Larnaca (LCA)',
          flight: 'GQ 651',
          time: '09:40 → 11:30',
          luggage: '1 checked bag'
        }
      ],
      hotels: [
        {
          name: '3* Hotel - Trikala & 4* Hotel - Thessaloniki',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/trikala-thessaloniki-hotel.png',
          location: 'Trikala & Thessaloniki, Greece',
          prices: {
            double: 659,
            single: 779,
            child1: 549
          },
          departureDate: '10/07',
          packagePrice: 1318
        },
        {
          name: '3* Hotel - Trikala & 4* Hotel - Thessaloniki',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/trikala-thessaloniki-hotel.png',
          location: 'Trikala & Thessaloniki, Greece',
          prices: {
            double: 659,
            single: 779,
            child1: 549
          },
          departureDate: '17/07',
          packagePrice: 1318
        },
        {
          name: '3* Hotel - Trikala & 4* Hotel - Thessaloniki',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/trikala-thessaloniki-hotel.png',
          location: 'Trikala & Thessaloniki, Greece',
          prices: {
            double: 679,
            single: 799,
            child1: 569
          },
          departureDate: '24/07',
          packagePrice: 1358
        },
        {
          name: '3* Hotel - Trikala & 4* Hotel - Thessaloniki',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/trikala-thessaloniki-hotel.png',
          location: 'Trikala & Thessaloniki, Greece',
          prices: {
            double: 679,
            single: 799,
            child1: 569
          },
          departureDate: '31/07',
          packagePrice: 1358
        },
        {
          name: '3* Hotel - Trikala & 4* Hotel - Thessaloniki',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/trikala-thessaloniki-hotel.png',
          location: 'Trikala & Thessaloniki, Greece',
          prices: {
            double: 679,
            single: 799,
            child1: 569
          },
          departureDate: '07/08',
          packagePrice: 1358
        },
        {
          name: '3* Hotel - Trikala & 4* Hotel - Thessaloniki',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/trikala-thessaloniki-hotel.png',
          location: 'Trikala & Thessaloniki, Greece',
          prices: {
            double: 679,
            single: 799,
            child1: 569
          },
          departureDate: '14/08',
          packagePrice: 1358
        },
        {
          name: '3* Hotel - Trikala & 4* Hotel - Thessaloniki',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/trikala-thessaloniki-hotel.png',
          location: 'Trikala & Thessaloniki, Greece',
          prices: {
            double: 679,
            single: 799,
            child1: 569
          },
          departureDate: '21/08',
          packagePrice: 1358
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Θεσσαλονίκη – Λάρνακα με Sky Express',
        'Φόροι αεροδρομίων',
        '3 διανυκτερεύσεις στα Τρίκαλα σε ξενοδοχείο 3* (Achillion ή παρόμοιο) με πρωινό',
        '2 διανυκτερεύσεις στη Θεσσαλονίκη σε ξενοδοχείο 4* (A.D. Imperial Palace ή παρόμοιο) με πρωινό',
        'Μεταφορές, εκδρομές & περιηγήσεις σύμφωνα με το πρόγραμμα',
        'Τοπικός αρχηγός / συνοδός',
        'Τέλος ανθεκτικότητας στην Κλιματική Κρίση',
        'Μία αποσκευή 20kg + μία χειραποσκευή 8kg',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Είσοδοι σε χώρους και μουσεία (όπου αναφέρεται προαιρετικό)',
        'Οτιδήποτε δεν αναφέρεται ρητά στο πρόγραμμα ή χαρακτηρίζεται «προαιρετικό» ή «προτεινόμενο»'
      ],
      cancellationPolicy: 'Μέχρι 45 ημέρες πριν την αναχώρηση: παρακράτηση €50 για λειτουργικά έξοδα. 44–31 ημέρες πριν: παρακράτηση 30% της αξίας. 30–21 ημέρες πριν: παρακράτηση 50%. 20–0 ημέρες πριν: παρακράτηση 100%. No-show: παρακράτηση 100%. Για charter, κρουαζιέρες, ski trips, εκθέσεις & συνέδρια: ακυρωτικά έως 100% ανεξαρτήτως ημερομηνίας.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά την ώρα της κράτησης',
        'Με την κράτηση απαιτείται προκαταβολή 30%',
        'Η εξόφληση γίνεται 21 ημέρες πριν την αναχώρηση',
        'Μέχρι 45 ημέρες πριν την αναχώρηση: παρακράτηση €50 για λειτουργικά έξοδα',
        '44–31 ημέρες πριν: παρακράτηση 30% της αξίας',
        '30–21 ημέρες πριν: παρακράτηση 50%',
        '20–0 ημέρες πριν: παρακράτηση 100%',
        'No-show: παρακράτηση 100%',
        'Για charter, κρουαζιέρες, ski trips, εκθέσεις & συνέδρια: ακυρωτικά έως 100% ανεξαρτήτως ημερομηνίας'
      ],
      note: 'Το πρόγραμμα ενδέχεται να πραγματοποιηθεί με διαφορετική σειρά, αλλά με παροχή όλων των υπηρεσιών.',
      program: {
        introduction: 'ΘΕΣΣΑΛΟΝΙΚΗ / ΤΡΙΚΑΛΑ / ΑΛΠΙΚΗ ΘΕΣΣΑΛΙΑ – 6 Μέρες\n\nΜια μοναδική εκδρομή που συνδυάζει την αστική ζωή της Θεσσαλονίκης, τη γοητεία των Τρικάλων και την αλπική ομορφιά της Θεσσαλίας. Εξερευνήστε μοναστήρια, ορεινά χωριά και φυσικά τοπία που κόβουν την ανάσα.',
        day1: '1η Μέρα: Λάρνακα – Θεσσαλονίκη – Παλαιός Παντελεήμονας – Τρίκαλα\n\nΣυγκέντρωση στο αεροδρόμιο Λάρνακας και πτήση για Θεσσαλονίκη. Άφιξη και συνάντηση με τον αρχηγό του γκρουπ.\nΑναχώρηση για Τρίκαλα με ενδιάμεση στάση στον γραφικό Παλαιό Παντελεήμονα, έναν από τους πιο όμορφους παραδοσιακούς οικισμούς της Μακεδονίας, σε υψόμετρο περίπου 700 μ., με εξαιρετική θέα προς τον Θερμαϊκό κόλπο και τις ακτές της Πιερίας. Εκεί θα έχουμε χρόνο για καφέ και γεύμα (προαιρετικά).\n\nΣτη συνέχεια αναχώρηση για Τρίκαλα, την πόλη που θα μας φιλοξενήσει τις επόμενες ημέρες. Άφιξη, μεταφορά στο ξενοδοχείο και τακτοποίηση των δωματίων.\nΥπόλοιπη ημέρα ελεύθερη για μια πρώτη γνωριμία με την πόλη.\nΔιανυκτέρευση στα Τρίκαλα.',
        day2: '2η Μέρα: Τρίκαλα – Αλπική Θεσσαλία (Ελάτη – Περτούλι – Νεραϊδοχώρι)\n\nΠρωινό στο ξενοδοχείο και αναχώρηση για μια μοναδική εξόρμηση στην Αλπική Θεσσαλία.\n\nΠρώτη στάση στην Ελάτη, ένα χωριό σαν καρτ ποστάλ, με πέτρινα σπίτια, γραφικά σοκάκια και ατμόσφαιρα γαλήνης. Συνεχίζουμε μέσα από τα πυκνά ελατοδάση του Κόζιακα, όπου η φύση κυριαρχεί και η ηρεμία της ορεινής Ελλάδας μας περιβάλλει.\n\nΠερνάμε από το Πανεπιστημιακό Δάσος Περτουλίου, ένα σημαντικό φυσικό καταφύγιο και χώρο έρευνας. Φτάνουμε στα λιβάδια Περτουλίου (περίπου 1.180 μ.), σε ένα τοπίο αλπικής ομορφιάς.\n\nΜέσα από το αρχοντικό Περτούλι, συνεχίζουμε προς το Νεραϊδοχώρι, ένα παραμυθένιο χωριό, με χαρακτηριστικό σημείο την ιστορική εκκλησία της Αγίας Παρασκευής.\nΣε υψόμετρο περίπου 1.180 μ. ανάμεσα σε Νεραϊδοχώρι και Περτούλι θα έχουμε χρόνο για μεσημεριανό γεύμα (προαιρετικά) σε υπέροχο φυσικό τοπίο.\n\nΕπιστροφή στα Τρίκαλα.\nΔιανυκτέρευση στα Τρίκαλα.',
        day3: '3η Μέρα: Τρίκαλα – Λίμνη Πλαστήρα\n\nΠρωινό και αναχώρηση για την εντυπωσιακή τεχνητή Λίμνη Πλαστήρα, ένα από τα πιο όμορφα ορεινά τοπία της Ελλάδας. Επίσκεψη στο Φράγμα, το μεγάλο έργο – όραμα του Νικολάου Πλαστήρα, και περιήγηση γύρω από τη λίμνη.\n\nΧρόνος για μεσημεριανό γεύμα (προαιρετικά) στις όχθες της λίμνης, σε ειδυλλιακό περιβάλλον.\nΣτη συνέχεια επιστροφή στα Τρίκαλα.\nΔιανυκτέρευση στα Τρίκαλα.',
        day4: '4η Μέρα: Τρίκαλα – Μετέωρα – Παναγία Σουμελά – Βέροια – Θεσσαλονίκη\n\nΜετά το πρωινό, αναχώρηση για τα επιβλητικά Μετέωρα, ένα από τα πιο εντυπωσιακά τοπία της Ελλάδας και Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO. Οι γιγάντιοι βράχοι με τα μοναστήρια στις κορυφές τους δημιουργούν ένα σκηνικό που κόβει την ανάσα.\n\nΕπίσκεψη στην Ιερά Μονή Αγίου Στεφάνου και πανοραμική περιήγηση των υπόλοιπων μονών των Μετεώρων.\n\nΣτη συνέχεια αναχώρηση για προσκύνημα στην Ιερά Μονή Παναγίας Σουμελά, χτισμένη στις πλαγιές του Βερμίου κοντά στο χωριό Καστανιά. Η μονή ιδρύθηκε το 1951 ως συνέχεια της ιστορικής μονής στον Πόντο και αποτελεί σημαντικό σύμβολο του ποντιακού ελληνισμού.\n\nΈπειτα, συνεχίζουμε προς Βέροια, όπου θα έχετε χρόνο για φαγητό (προαιρετικά).\nΑκολούθως, αναχώρηση για Θεσσαλονίκη, άφιξη αργά το απόγευμα, μεταφορά στο ξενοδοχείο και τακτοποίηση δωματίων.\nΔιανυκτέρευση στη Θεσσαλονίκη.',
        day5: '5η Μέρα: Θεσσαλονίκη – Ελεύθερη μέρα\n\nΠρόγευμα και ελεύθερη ημέρα στη «νύμφη του Θερμαϊκού», τη Θεσσαλονίκη.\n\nΠροτάσεις για τη μέρα σας:\n\n• Βόλτα στο ιστορικό κέντρο\n• Επίσκεψη στον Ιερό Ναό Αγίου Δημητρίου, πολιούχο της πόλης\n• Περίπατος στην παραλιακή λεωφόρο Νίκης έως τον Λευκό Πύργο\n• Εξερεύνηση της Άνω Πόλης με πανοραμική θέα, γραφικά δρομάκια και παραδοσιακές ταβέρνες\n• Αγορές στις οδούς Τσιμισκή και Μητροπόλεως\n\nΤο απόγευμα μπορείτε να απολαύσετε καφέ στην παραλία με θέα το ηλιοβασίλεμα ή να δοκιμάσετε τις γεύσεις της πόλης σε ένα από τα πολλά εστιατόρια και ουζερί.\nΔιανυκτέρευση στη Θεσσαλονίκη.',
        day6: '6η Μέρα: Θεσσαλονίκη – Λάρνακα\n\nΠρόγευμα και αναχώρηση για το αεροδρόμιο Θεσσαλονίκης. Πτήση επιστροφής για Λάρνακα, με τις καλύτερες εντυπώσεις από ένα υπέροχο ταξίδι γεμάτο εικόνες, εμπειρίες και αναμνήσεις από Θεσσαλονίκη, Θεσσαλία και την αλπική ελληνική φύση.'
      },
      gallery: [
        '/images/summer/skg-thessaloniki-hero.png'
      ]
    }
  },
  {
    id: 21,
    title: 'THESSALONIKI – KASTORIA – NORTHERN GREECE LAKES',
    destination: 'Greece',
    category: 'Summer Packages',
    price: 549,
    duration: '6 days / 5 nights',
    description: 'Discover the beauty of Thessaloniki, Kastoria, and the stunning lakes of Northern Greece with this 6-day tour.',
    longDescription: 'Experience the perfect blend of urban culture in Thessaloniki, the charm of Kastoria, and the breathtaking natural beauty of the lakes in Northern Greece. This 6-day journey takes you through historic monasteries, mountain villages, and pristine natural landscapes.',
    image: '🇬🇷',
    featured: true,
    details: {
      departureDate: '10/07, 17/07, 24/07, 31/07, 07/08, 14/08, 21/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Thessaloniki, Kastoria, Lakes of Northern Greece',
      monthAvailability: 'July, August',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Sky Express',
      includedLuggage: '1 checked bag 20kg + 1 hand luggage 8kg',
      coverImage: '/images/summer/lefkos-pirgos-thessaloniki-hero.png',
      thumbnailImage: '/images/summer/skg-kastoria-thumb.png',
      flights: [
        {
          direction: 'Departure',
          date: '10/07, 17/07, 24/07, 31/07, 07/08, 14/08, 21/08',
          route: 'Larnaca (LCA) → Thessaloniki (SKG)',
          flight: 'GQ 650',
          time: '12:10 → 14:10',
          luggage: '1 checked bag'
        },
        {
          direction: 'Return',
          date: '10/07, 17/07, 24/07, 31/07, 07/08, 14/08, 21/08',
          route: 'Thessaloniki (SKG) → Larnaca (LCA)',
          flight: 'GQ 651',
          time: '09:40 → 11:30',
          luggage: '1 checked bag'
        }
      ],
      hotels: [
        {
          name: 'Kastoria Hotel – Kastoria',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/skg-kastoria-ioanina-hotel.webp',
          location: 'Kastoria Hotel, Kastoria, Greece',
          prices: {
            double: 699,
            single: 879,
            child1: 519,
            child2: 539
          },
          departureDate: '10/07',
          packagePrice: 1398
        },
        {
          name: 'Kastoria Hotel – Kastoria',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/skg-kastoria-ioanina-hotel.webp',
          location: 'Kastoria Hotel, Kastoria, Greece',
          prices: {
            double: 699,
            single: 879,
            child1: 519,
            child2: 539
          },
          departureDate: '17/07',
          packagePrice: 1398
        },
        {
          name: 'Kastoria Hotel – Kastoria',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/skg-kastoria-ioanina-hotel.webp',
          location: 'Kastoria Hotel, Kastoria, Greece',
          prices: {
            double: 729,
            single: 899,
            child1: 539,
            child2: 569
          },
          departureDate: '24/07',
          packagePrice: 1458
        },
        {
          name: 'Kastoria Hotel – Kastoria',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/skg-kastoria-ioanina-hotel.webp',
          location: 'Kastoria Hotel, Kastoria, Greece',
          prices: {
            double: 729,
            single: 899,
            child1: 539,
            child2: 569
          },
          departureDate: '31/07',
          packagePrice: 1458
        },
        {
          name: 'Kastoria Hotel – Kastoria',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/skg-kastoria-ioanina-hotel.webp',
          location: 'Kastoria Hotel, Kastoria, Greece',
          prices: {
            double: 749,
            single: 949,
            child1: 549,
            child2: 579
          },
          departureDate: '07/08',
          packagePrice: 1498
        },
        {
          name: 'Kastoria Hotel – Kastoria',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/skg-kastoria-ioanina-hotel.webp',
          location: 'Kastoria Hotel, Kastoria, Greece',
          prices: {
            double: 749,
            single: 949,
            child1: 549,
            child2: 579
          },
          departureDate: '14/08',
          packagePrice: 1498
        },
        {
          name: 'Kastoria Hotel – Kastoria',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/skg-kastoria-ioanina-hotel.webp',
          location: 'Kastoria Hotel, Kastoria, Greece',
          prices: {
            double: 729,
            single: 899,
            child1: 539,
            child2: 569
          },
          departureDate: '21/08',
          packagePrice: 1458
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Θεσσαλονίκη – Λάρνακα με Sky Express',
        'Φόροι αεροδρομίων',
        '1 αποσκευή 20kg + 1 χειραποσκευή 8kg',
        '3 διανυκτερεύσεις στην Καστοριά σε ξενοδοχείο 5★ με πρωινό',
        '2 διανυκτερεύσεις στη Θεσσαλονίκη σε ξενοδοχείο 4★ με πρωινό',
        'Μεταφορές, εκδρομές & περιηγήσεις σύμφωνα με το πρόγραμμα',
        'Τοπικός αρχηγός / συνοδός',
        'Καραβάκι στη Μεγάλη Πρέσπα',
        'Τέλος ανθεκτικότητας στην Κλιματική Κρίση',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Δικαιώματα εισόδων',
        'Οτιδήποτε δεν αναφέρεται ρητά στο πρόγραμμα ή χαρακτηρίζεται ως προαιρετικό/προτεινόμενο'
      ],
      cancellationPolicy: 'Μέχρι 45 ημέρες πριν την αναχώρηση: €50 λειτουργικά έξοδα. 44–31 ημέρες πριν: παρακράτηση 30%. 30–21 ημέρες πριν: παρακράτηση 50%. 20–0 ημέρες πριν: παρακράτηση 100%. No-show: παρακράτηση 100%. Για charter, κρουαζιέρες, ski trips, εκθέσεις, συνέδρια: Ακυρωτικά έως 100%, ανεξαρτήτως ημερομηνίας ακύρωσης.',
      termsAndConditions: [
        'Οι τιμές δεν αλλάζουν τη στιγμή της κράτησης',
        'Με την κράτηση απαιτείται 30% προκαταβολή',
        'Η εξόφληση γίνεται 21 ημέρες πριν την αναχώρηση',
        'Μέχρι 45 ημέρες πριν την αναχώρηση: €50 λειτουργικά έξοδα',
        '44–31 ημέρες πριν: παρακράτηση 30%',
        '30–21 ημέρες πριν: παρακράτηση 50%',
        '20–0 ημέρες πριν: παρακράτηση 100%',
        'No-show: παρακράτηση 100%',
        'Για charter, κρουαζιέρες, ski trips, εκθέσεις, συνέδρια: Ακυρωτικά έως 100%, ανεξαρτήτως ημερομηνίας ακύρωσης'
      ],
      program: {
        introduction: 'ΘΕΣΣΑΛΟΝΙΚΗ – ΚΑΣΤΟΡΙΑ – ΛΙΜΝΕΣ ΒΟΡΕΙΑΣ ΕΛΛΑΔΑΣ\n\nΜια μοναδική εκδρομή που συνδυάζει την αστική ζωή της Θεσσαλονίκης, τη γοητεία της Καστοριάς και την αλπική ομορφιά των λιμνών της Βόρειας Ελλάδας. Εξερευνήστε μοναστήρια, ορεινά χωριά και φυσικά τοπία που κόβουν την ανάσα.',
        day1: '1η Μέρα: Λάρνακα – Θεσσαλονίκη – Κοζάνη – Καστοριά\n\nΠτήση από Λάρνακα προς Θεσσαλονίκη.\nΆφιξη, συνάντηση με τον αρχηγό και άμεση αναχώρηση για την πανέμορφη Καστοριά με ενδιάμεση στάση στην Κοζάνη:\n\n• Χρόνος για καφέ/βόλτα στην κεντρική πλατεία\n• Το παλιό Ρολόι & ο Άγιος Νικόλαος\n• Διαδρομή μέσα από τα ορεινά τοπία της Δυτικής Μακεδονίας\n\nΆφιξη στην Καστοριά, τακτοποίηση δωματίων και ξεκούραση.\nΔιανυκτέρευση στην Καστοριά.',
        day2: '2η Μέρα: Καστοριά – Μονή Παναγίας Μαυριώτισσας\n\nΠρωινό και αναχώρηση για την ιστορική Μονή Παναγίας Μαυριώτισσας, χτισμένη δίπλα στη λίμνη, μέσα σε ένα μοναδικό φυσικό τοπίο.\n\nΕπιστροφή στην πόλη και ελεύθερη μέρα για:\n\n• Βόλτα στον παραλίμνιο δρόμο\n• Καφέ/γεύμα με θέα\n• Εξερεύνηση των αρχοντικών και της συνοικίας Ντολτσό\n\nΔιανυκτέρευση στην Καστοριά.',
        day3: '3η Μέρα: Καστοριά – Φλώρινα – Πρέσπες – Βαρκάδα στη Μεγάλη Πρέσπα\n\nΠρωινό και αναχώρηση για Φλώρινα:\n\n• Βόλτα στη γραφική πόλη\n• Καφέ στον ποταμό Σακουλέβα\n• Νεοκλασικά & καλλιτεχνική ατμόσφαιρα\n\nΣυνέχεια προς τις Πρέσπες, προστατευόμενη περιοχή μοναδικής ομορφιάς.\n\nΣτη Μικρή Πρέσπα:\n• Επίσκεψη στο νησάκι Άγιος Αχίλλειος\n• Πλωτή γέφυρα\n• Ερείπια βυζαντινής βασιλικής\n\nΣτους Ψαράδες (Μεγάλη Πρέσπα):\n• Παραδοσιακός οικισμός\n• Τοπική κουζίνα (ψάρια λίμνης, πιπεριές Φλωρίνης, φασόλια Πρεσπών)\n\nΒαρκάδα στη Μεγάλη Πρέσπα:\n• Βραχογραφίες Παναγίας\n• Ασκηταριά\n• Σημείο Τριεθνούς (Ελλάδα – Αλβανία – Βόρεια Μακεδονία)\n\nΕπιστροφή στην Καστοριά.\nΔιανυκτέρευση στην Καστοριά.',
        day4: '4η Μέρα: Καστοριά – Νυμφαίο – Έδεσσα – Θεσσαλονίκη\n\nΠρωινό και αναχώρηση για Νυμφαίο, ένα από τα πιο όμορφα χωριά της Ελλάδας:\n\n• Πέτρινα αρχοντικά\n• Πλακόστρωτα σοκάκια\n• Καφέ στο κεντρικό καλντερίμι\n\nΣτη συνέχεια επίσκεψη στην Έδεσσα, πόλη με τους διάσημους καταρράκτες:\n\n• Καταρράκτες ύψους 70 μ.\n• Βόλτα στο πάρκο\n• Χρόνος για καφέ/γεύμα\n\nΣυνέχεια προς Θεσσαλονίκη.\nΆφιξη & τακτοποίηση στο ξενοδοχείο.\nΔιανυκτέρευση στη Θεσσαλονίκη.',
        day5: '5η Μέρα: Θεσσαλονίκη – Λίμνη Κερκίνη – Οχυρό Ρούπελ\n\nΠρωινό και αναχώρηση για τη Λίμνη Κερκίνη, έναν από τους σημαντικότερους υδροβιότοπους της Ελλάδας:\n\n• Πελεκάνοι, ερωδιοί, κορμοράνοι\n• Βουβάλια στις όχθες\n• Τοπίο μοναδικής ομορφιάς\n• Προαιρετικό γεύμα με θέα τη λίμνη\n\nΣυνέχεια για το ιστορικό Οχυρό Ρούπελ:\n\n• Υπόγειοι διάδρομοι\n• Φυλάκια\n• Ιστορία του Β\' Παγκοσμίου Πολέμου\n• Συγκινητική ξενάγηση στο ηρωικό οχυρό\n\nΑργά το απόγευμα επιστροφή στη Θεσσαλονίκη.\nΔιανυκτέρευση στη Θεσσαλονίκη.',
        day6: '6η Μέρα: Θεσσαλονίκη – Λάρνακα\n\nΠρωινό σε πακέτο και αναχώρηση νωρίς το πρωί για το αεροδρόμιο Θεσσαλονίκης.\nΠτήση επιστροφής για Λάρνακα με τις ωραιότερες αναμνήσεις από:\n\n• Θεσσαλονίκη\n• Καστοριά\n• Φλώρινα\n• Πρέσπες\n• Νυμφαίο\n• Έδεσσα\n• Λίμνη Κερκίνη\n\nΈνα ταξίδι γεμάτο φύση, εικόνες και ιστορία.'
      },
      gallery: [
        '/images/summer/lefkos-pirgos-thessaloniki-hero.png'
      ]
    }
  },
  {
    id: 22,
    title: 'ΒΟΥΚΟΥΡΕΣΤΙ & ΚΑΣΤΡΑ ΤΗΣ ΤΡΑΝΣΥΛΒΑΝΙΑΣ',
    destination: 'Romania',
    category: 'Summer Packages',
    price: 849,
    duration: '5 days / 4 nights',
    description: 'Discover Bucharest, the "Paris of the Balkans", and explore the legendary castles of Transylvania including Bran Castle.',
    longDescription: 'Experience the aristocratic capital of Romania, Bucharest, known as the "Paris of the Balkans", and explore the legendary castles of Transylvania. Visit Bran Castle (Dracula\'s Castle), Peles Palace, and the medieval city of Brasov. This 5-day journey combines history, culture, and stunning mountain landscapes.',
    image: '🇷🇴',
    featured: true,
    details: {
      departureDate: '03/08, 10/08, 17/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Bucharest, Sinaia, Transylvania',
      monthAvailability: 'August',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Anima Wings',
      includedLuggage: '1 checked bag 23kg + 1 hand luggage 8kg',
      coverImage: '/images/destinations/bucharest-transylvania-hero.png',
      thumbnailImage: '/images/destinations/bucharest-transylvania-thumb.png',
      flights: [
        {
          direction: 'Departure',
          date: '03/08, 10/08, 17/08',
          route: 'Larnaca (LCA) → Bucharest (BUH)',
          flight: 'A2 731',
          time: '13:10 → 15:30',
          luggage: '1 checked bag'
        },
        {
          direction: 'Return',
          date: '03/08, 10/08, 17/08',
          route: 'Bucharest (BUH) → Larnaca (LCA)',
          flight: 'A2 730',
          time: '10:10 → 12:25',
          luggage: '1 checked bag'
        }
      ],
      hotels: [
        {
          name: 'Sinaia Hotel – Sinaia',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/bucharest-hotel.png',
          location: 'Sinaia Hotel, Sinaia, Romania',
          prices: {
            double: 849,
            single: 1065,
            child1: 655
          },
          departureDate: '03/08',
          packagePrice: 1698
        },
        {
          name: 'Sinaia Hotel – Sinaia',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/bucharest-hotel.png',
          location: 'Sinaia Hotel, Sinaia, Romania',
          prices: {
            double: 849,
            single: 1065,
            child1: 655
          },
          departureDate: '10/08',
          packagePrice: 1698
        },
        {
          name: 'Sinaia Hotel – Sinaia',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/bucharest-hotel.png',
          location: 'Sinaia Hotel, Sinaia, Romania',
          prices: {
            double: 849,
            single: 1065,
            child1: 655
          },
          departureDate: '17/08',
          packagePrice: 1698
        }
      ],
      included: [
        'Αεροπορικό εισιτήριο Λάρνακα – Βουκουρέστι – Λάρνακα με απευθείας πτήσεις Anima Wings',
        'Φόροι αεροδρομίων',
        'Διαμονή σε ξενοδοχεία 4★ με πρόγευμα',
        'Μεταφορές, εκδρομές, ξεναγήσεις & περιηγήσεις σύμφωνα με το πρόγραμμα',
        'Τοπικός ελληνόφωνος συνοδός / ξεναγός',
        'Τοπικός φόρος διαμονής',
        'Μία αποσκευή 23kg και μία χειραποσκευή 8kg',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Είσοδοι σε χώρους επισκέψεων / μουσεία',
        'Οτιδήποτε δεν αναφέρεται ρητά στο πρόγραμμα ή αναφέρεται ως προαιρετικό ή προτεινόμενο'
      ],
      cancellationPolicy: 'Μέχρι 45 μέρες πριν: παρακράτηση €50 ανά άτομο (λειτουργικά έξοδα). 44–31 μέρες πριν: παρακράτηση 30% της αξίας του ταξιδιού. 30–21 μέρες πριν: παρακράτηση 50% της αξίας του ταξιδιού. 20 μέρες και λιγότερο πριν: παρακράτηση 100% της αξίας. Σε περίπτωση μη εμφάνισης (no-show): 100% χρέωση. Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, σκι, εκθέσεις, συνέδρια & παρεμφερείς διεθνείς εκδηλώσεις, τα ακυρωτικά φθάνουν έως 100% της αξίας, ανεξαρτήτως ημερομηνίας ακύρωσης.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά την ώρα της κράτησης',
        'Με την κράτηση απαιτείται προκαταβολή 30% της αξίας του πακέτου',
        'Η εξόφληση γίνεται περίπου 21 μέρες πριν την αναχώρηση',
        'Μέχρι 45 μέρες πριν: παρακράτηση €50 ανά άτομο (λειτουργικά έξοδα)',
        '44–31 μέρες πριν: παρακράτηση 30% της αξίας του ταξιδιού',
        '30–21 μέρες πριν: παρακράτηση 50% της αξίας του ταξιδιού',
        '20 μέρες και λιγότερο πριν: παρακράτηση 100% της αξίας',
        'Σε περίπτωση μη εμφάνισης (no-show): 100% χρέωση',
        'Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, σκι, εκθέσεις, συνέδρια & παρεμφερείς διεθνείς εκδηλώσεις, τα ακυρωτικά φθάνουν έως 100% της αξίας, ανεξαρτήτως ημερομηνίας ακύρωσης'
      ],
      program: {
        introduction: 'ΒΟΥΚΟΥΡΕΣΤΙ & ΚΑΣΤΡΑ ΤΗΣ ΤΡΑΝΣΥΛΒΑΝΙΑΣ\n\nΜια μοναδική εκδρομή που συνδυάζει την αρχοντική πρωτεύουσα της Ρουμανίας, το Βουκουρέστι, γνωστό ως «Παρίσι των Βαλκανίων», με τα θρυλικά κάστρα της Τρανσυλβανίας. Εξερευνήστε το Κάστρο Μπραν (Δράκουλας), το Παλάτι Πέλες, και τη μεσαιωνική πόλη Μπρασόβ.',
        day1: '1η Μέρα: Λάρνακα – Βουκουρέστι – Σινάια\n\nΣυγκέντρωση στο αεροδρόμιο Λάρνακας και αναχώρηση για Βουκουρέστι, την αρχοντική πρωτεύουσα της Ρουμανίας, γνωστή ως «Παρίσι των Βαλκανίων». Πόλη με πλούσια ιστορία και έντονο ελληνικό στοιχείο στο παρελθόν, που διατηρεί μέχρι σήμερα τη φινέτσα και τη γοητεία της.\n\nΆφιξη στο Βουκουρέστι, υποδοχή από τον αρχηγό της εκδρομής και αναχώρηση για Σινάια, ένα από τα πιο γραφικά θέρετρα της Ρουμανίας, χτισμένο στους πρόποδες των Καρπαθίων.\n\nΆφιξη στο ξενοδοχείο, τακτοποίηση στα δωμάτια.\nΔιανυκτέρευση στη Σινάια.',
        day2: '2η Μέρα: Σινάια – Μπραν – Μπρασόβ (περιήγηση)\n\nΠρωινό στο ξενοδοχείο και αναχώρηση προς Μπραν, για επίσκεψη στο περίφημο Κάστρο Μπραν, συνδεδεμένο με τον θρύλο του Δράκουλα.\n\nΚάστρο χτισμένο σε βράχο ~60 μ.\n• Πύργοι, πολεμίστρες, μυστήριο και μύθος\n• Χρονολογία: 1378 – τελωνειακό και στρατηγικό σημείο μεταξύ Βλαχίας & Τρανσυλβανίας\n• 60 δωμάτια, υπόγειοι διάδρομοι, συλλογές επίπλων, όπλων & πανοπλιών (14ος–19ος αιώνας)\n\nΣτη συνέχεια αναχώρηση για Μπρασόβ, ζωντανή μεσαιωνική πόλη στους πρόποδες των Νότιων Καρπαθίων. Πεζή περιήγηση στο ιστορικό κέντρο:\n\n• Κεντρική πλατεία Piata Sfatului\n• Μαύρη Εκκλησία (Black Church) – η μεγαλύτερη γοτθική εκκλησία της Ρουμανίας\n• Λεωφόρος Republicii με καταστήματα, καφέ, εστιατόρια\n• Περιοχή Schei, η Rope Street (Strada Sforii)\n• Πύργοι & τμήματα των οχυρώσεων\n• Θέα στα βουνά Tampa\n\nΑργά το απόγευμα επιστροφή στη Σινάια.\nΔιανυκτέρευση στη Σινάια.',
        day3: '3η Μέρα: Σινάια – Παλάτι Πέλες – Μονή Σινάια – Βουκουρέστι\n\nΠρόγευμα και ελεύθερος χρόνος στη Σινάια για να απολαύσετε τη φύση και τα βουνά.\n\nΠροτείνεται:\n• Σύντομη πεζοπορία στο Βασιλικό Μονοπάτι (Royal Path) προς τους βράχους Franz Joseph\nή\n• Προαιρετική ανάβαση με τελεφερίκ στα 1.440 μ. & 2.000 μ., με πανοραμική θέα στα Καρπάθια\n\nΈπειτα επίσκεψη στο Παλάτι Πέλες, την ιστορική βασιλική κατοικία και ένα από τα σημαντικότερα μνημεία της Ρουμανίας:\n\n• Χτίστηκε 1875–1883\n• Συνδυασμός αρχιτεκτονικών ρυθμών, με κυρίαρχο τον γερμανικό\n• 160 δωμάτια, σπάνια διακοσμητικά, πίνακες & αντικείμενα\n• Υπέροχες βεράντες & κήποι\n\nΣύντομος περίπατος σε γραφικό μονοπάτι προς τη Μονή Σινάια, από την οποία πήρε το όνομά της η πόλη:\n\n• Χτισμένη το 1695 από τον πρίγκιπα Mihai Cantacuzino\n• Εμπνευσμένη από το προσκύνημά του στο Όρος Σινά στους Αγίους Τόπους\n• Θρησκευτικά κειμήλια, σπάνια βιβλία, έκθεση κεραμικών & πορσελάνης (16ος–19ος αι.)\n\nΑναχώρηση για Βουκουρέστι. Άφιξη και τακτοποίηση στο ξενοδοχείο.\nΔιανυκτέρευση στο Βουκουρέστι.',
        day4: '4η Μέρα: Βουκουρέστι (Ξενάγηση πόλης & Μουσείο Χωριού)\n\nΠρόγευμα και ολοήμερη ξενάγηση στο Βουκουρέστι, τη μεγαλύτερη πόλη και πρωτεύουσα της Ρουμανίας, με δεντροφυτεμένες λεωφόρους και κτίρια Belle Époque.\n\nΚατά την πανοραμική περιήγηση θα δούμε:\n\n• Λεωφόρο Kiseleff\n• Αψίδα του Θριάμβου\n• Σπίτι του Τύπου\n• Λεωφόρο Victoriei & Πλατεία Victoriei\n• Victoria Palace (Κυβερνητικό Μέγαρο)\n• Πλατεία Επανάστασης:\n  - Ρουμανικό Αθηναίο\n  - Βασιλικό Παλάτι\n  - Εκκλησία Kretzulescu\n  - Πρώην αρχηγείο Κομμουνιστικού Κόμματος\n• Πλατεία Unirii\n• Πλατεία Universitate (Εθνικό Θέατρο & Πανεπιστήμιο)\n• Πλατεία Συντάγματος με θέα στο Παλάτι του Κοινοβουλίου\n\nΕπίσκεψη (εξωτερικά/εσωτερικά, ανάλογα το πρόγραμμα) στο Παλάτι του Κοινοβουλίου:\n\n• 2ο μεγαλύτερο κτίριο στον κόσμο σε επιφάνεια (μετά το Πεντάγωνο)\n• 12 όροφοι, περίπου 1.100 δωμάτια\n• 8 υπόγεια επίπεδα, μεταξύ των οποίων πυρηνικό καταφύγιο\n• Πλούσια εσωτερική διακόσμηση: κρύσταλλοι, μωσαϊκά, μάρμαρα, ξύλο, βιτρό, χαλιά\n\nΣτη συνέχεια, γνωριμία με την Παλιά Πόλη:\n\n• Πεζόδρομοι με ονόματα παλιών συντεχνιών\n• Αναγεννησιακή, μπαρόκ & νεοκλασική αρχιτεκτονική\n• Ανακαινισμένα κτίρια – καφέ, bar, εστιατόρια, καταστήματα\n\nΤο απόγευμα, επίσκεψη στο Μουσείο του Χωριού (Village Museum), ένα από τα μεγαλύτερα υπαίθρια εθνογραφικά μουσεία της Ευρώπης (ίδρυση 1936):\n\n• Περισσότερα από 50 παραδοσιακά κτίσματα από όλη τη Ρουμανία\n• Σπίτια, αχυρώνες, ξύλινες καλύβες, εκκλησίες, νερόμυλοι\n• Αναπαράσταση αυθεντικού αγροτικού χωριού δίπλα στη λίμνη Herastrau\n\nΔιανυκτέρευση στο Βουκουρέστι.',
        day5: '5η Μέρα: Βουκουρέστι – Λάρνακα\n\nΠρόγευμα και μεταφορά στο αεροδρόμιο Βουκουρεστίου.\nΠτήση επιστροφής για Λάρνακα, γεμάτοι όμορφες εικόνες και εμπειρίες από τη Ρουμανία.'
      },
      gallery: [
        '/images/destinations/bucharest-transylvania-hero.png'
      ]
    }
  },
  {
    id: 23,
    title: 'ΡΙΒΙΕΡΑ ΔΥΤΙΚΗΣ ΕΛΛΑΔΑΣ & ΣΤΟΛΙΔΙΑ ΚΟΡΙΝΘΙΑΚΟΥ',
    destination: 'Greece',
    category: 'Summer Packages',
    price: 879,
    duration: '7 days / 6 nights',
    description: 'Discover the Western Greece Riviera and the beautiful islands of the Corinthian Gulf with this 7-day tour.',
    longDescription: 'Experience the stunning Western Greece Riviera and the beautiful islands of the Corinthian Gulf. Visit Patra, Preveza, Lefkada, Parga, the Acheron River, and enjoy a cruise to Kefalonia, Ithaca, and Scorpios. This 7-day journey combines coastal beauty, historic sites, and island hopping.',
    image: '🇬🇷',
    featured: true,
    details: {
      departureDate: '11/07, 18/07, 25/07, 01/08, 08/08, 15/08, 22/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Patra, Preveza, Western Greece Riviera, Corinthian Gulf Islands',
      monthAvailability: 'July, August',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Sky Express',
      includedLuggage: '1 checked bag 20kg + 1 hand luggage 8kg',
      coverImage: '/images/destinations/riviera-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '11/07, 18/07, 25/07, 01/08, 08/08, 15/08, 22/08',
          route: 'Larnaca (LCA) → Athens (ATH)',
          flight: 'GQ 601',
          time: '09:30 → 11:15',
          luggage: '1 checked bag'
        },
        {
          direction: 'Return',
          date: '11/07, 18/07, 25/07, 01/08, 08/08, 15/08, 22/08',
          route: 'Athens (ATH) → Larnaca (LCA)',
          flight: 'GQ 606',
          time: '21:55 → 23:40',
          luggage: '1 checked bag'
        }
      ],
      hotels: [
        // Option 1: My Way Hotel 4★ Patra + Preveza City Hotel 3★
        {
          name: 'My Way Hotel – Patra',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/way-hotel.webp',
          location: 'My Way Hotel, Patra, Greece',
          prices: {
            double: 879,
            single: 1199,
            child1: 759,
            child2: 629
          },
          departureDate: '11/07',
          packagePrice: 1758
        },
        {
          name: 'Preveza City Hotel – Preveza',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/preveza-city-hotel.webp',
          location: 'Preveza City Hotel, Preveza, Greece',
          prices: {
            double: 879,
            single: 1199,
            child1: 759,
            child2: 629
          },
          departureDate: '11/07',
          packagePrice: 1758
        },
        {
          name: 'My Way Hotel – Patra',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/way-hotel.webp',
          location: 'My Way Hotel, Patra, Greece',
          prices: {
            double: 879,
            single: 1199,
            child1: 759,
            child2: 629
          },
          departureDate: '18/07',
          packagePrice: 1758
        },
        {
          name: 'Preveza City Hotel – Preveza',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/preveza-city-hotel.webp',
          location: 'Preveza City Hotel, Preveza, Greece',
          prices: {
            double: 879,
            single: 1199,
            child1: 759,
            child2: 629
          },
          departureDate: '18/07',
          packagePrice: 1758
        },
        {
          name: 'My Way Hotel – Patra',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/way-hotel.webp',
          location: 'My Way Hotel, Patra, Greece',
          prices: {
            double: 899,
            single: 1239,
            child1: 759,
            child2: 629
          },
          departureDate: '25/07',
          packagePrice: 1798
        },
        {
          name: 'Preveza City Hotel – Preveza',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/preveza-city-hotel.webp',
          location: 'Preveza City Hotel, Preveza, Greece',
          prices: {
            double: 899,
            single: 1239,
            child1: 759,
            child2: 629
          },
          departureDate: '25/07',
          packagePrice: 1798
        },
        {
          name: 'My Way Hotel – Patra',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/way-hotel.webp',
          location: 'My Way Hotel, Patra, Greece',
          prices: {
            double: 939,
            single: 1279,
            child1: 789,
            child2: 669
          },
          departureDate: '01/08',
          packagePrice: 1878
        },
        {
          name: 'Preveza City Hotel – Preveza',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/preveza-city-hotel.webp',
          location: 'Preveza City Hotel, Preveza, Greece',
          prices: {
            double: 939,
            single: 1279,
            child1: 789,
            child2: 669
          },
          departureDate: '01/08',
          packagePrice: 1878
        },
        {
          name: 'My Way Hotel – Patra',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/way-hotel.webp',
          location: 'My Way Hotel, Patra, Greece',
          prices: {
            double: 939,
            single: 1279,
            child1: 789,
            child2: 669
          },
          departureDate: '08/08',
          packagePrice: 1878
        },
        {
          name: 'Preveza City Hotel – Preveza',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/preveza-city-hotel.webp',
          location: 'Preveza City Hotel, Preveza, Greece',
          prices: {
            double: 939,
            single: 1279,
            child1: 789,
            child2: 669
          },
          departureDate: '08/08',
          packagePrice: 1878
        },
        {
          name: 'My Way Hotel – Patra',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/way-hotel.webp',
          location: 'My Way Hotel, Patra, Greece',
          prices: {
            double: 929,
            single: 1269,
            child1: 779,
            child2: 659
          },
          departureDate: '22/08',
          packagePrice: 1858
        },
        {
          name: 'Preveza City Hotel – Preveza',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/preveza-city-hotel.webp',
          location: 'Preveza City Hotel, Preveza, Greece',
          prices: {
            double: 929,
            single: 1269,
            child1: 779,
            child2: 659
          },
          departureDate: '22/08',
          packagePrice: 1858
        },
        // Option 2: My Way Hotel 4★ Patra + Dioni Hotel 4★ Preveza
        {
          name: 'My Way Hotel – Patra',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/way-hotel.webp',
          location: 'My Way Hotel, Patra, Greece',
          prices: {
            double: 979,
            single: 1369,
            child1: 759,
            child2: 629
          },
          departureDate: '11/07',
          packagePrice: 1958
        },
        {
          name: 'Dioni Hotel – Preveza',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/dioni-preveza.webp',
          location: 'Dioni Hotel, Preveza, Greece',
          prices: {
            double: 979,
            single: 1369,
            child1: 759,
            child2: 629
          },
          departureDate: '11/07',
          packagePrice: 1958
        },
        {
          name: 'My Way Hotel – Patra',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/way-hotel.webp',
          location: 'My Way Hotel, Patra, Greece',
          prices: {
            double: 979,
            single: 1369,
            child1: 759,
            child2: 629
          },
          departureDate: '18/07',
          packagePrice: 1958
        },
        {
          name: 'Dioni Hotel – Preveza',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/dioni-preveza.webp',
          location: 'Dioni Hotel, Preveza, Greece',
          prices: {
            double: 979,
            single: 1369,
            child1: 759,
            child2: 629
          },
          departureDate: '18/07',
          packagePrice: 1958
        },
        {
          name: 'My Way Hotel – Patra',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/way-hotel.webp',
          location: 'My Way Hotel, Patra, Greece',
          prices: {
            double: 1029,
            single: 1459,
            child1: 759,
            child2: 629
          },
          departureDate: '25/07',
          packagePrice: 2058
        },
        {
          name: 'Dioni Hotel – Preveza',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/dioni-preveza.webp',
          location: 'Dioni Hotel, Preveza, Greece',
          prices: {
            double: 1029,
            single: 1459,
            child1: 759,
            child2: 629
          },
          departureDate: '25/07',
          packagePrice: 2058
        },
        {
          name: 'My Way Hotel – Patra',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/way-hotel.webp',
          location: 'My Way Hotel, Patra, Greece',
          prices: {
            double: 1059,
            single: 1489,
            child1: 789,
            child2: 669
          },
          departureDate: '01/08',
          packagePrice: 2118
        },
        {
          name: 'Dioni Hotel – Preveza',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/dioni-preveza.webp',
          location: 'Dioni Hotel, Preveza, Greece',
          prices: {
            double: 1059,
            single: 1489,
            child1: 789,
            child2: 669
          },
          departureDate: '01/08',
          packagePrice: 2118
        },
        {
          name: 'My Way Hotel – Patra',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/way-hotel.webp',
          location: 'My Way Hotel, Patra, Greece',
          prices: {
            double: 1059,
            single: 1489,
            child1: 789,
            child2: 669
          },
          departureDate: '08/08',
          packagePrice: 2118
        },
        {
          name: 'Dioni Hotel – Preveza',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/dioni-preveza.webp',
          location: 'Dioni Hotel, Preveza, Greece',
          prices: {
            double: 1059,
            single: 1489,
            child1: 789,
            child2: 669
          },
          departureDate: '08/08',
          packagePrice: 2118
        },
        {
          name: 'My Way Hotel – Patra',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/way-hotel.webp',
          location: 'My Way Hotel, Patra, Greece',
          prices: {
            double: 1059,
            single: 1489,
            child1: 789,
            child2: 669
          },
          departureDate: '15/08',
          packagePrice: 2118
        },
        {
          name: 'Dioni Hotel – Preveza',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/dioni-preveza.webp',
          location: 'Dioni Hotel, Preveza, Greece',
          prices: {
            double: 1059,
            single: 1489,
            child1: 789,
            child2: 669
          },
          departureDate: '15/08',
          packagePrice: 2118
        },
        {
          name: 'My Way Hotel – Patra',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/way-hotel.webp',
          location: 'My Way Hotel, Patra, Greece',
          prices: {
            double: 1049,
            single: 1479,
            child1: 779,
            child2: 659
          },
          departureDate: '22/08',
          packagePrice: 2098
        },
        {
          name: 'Dioni Hotel – Preveza',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/dioni-preveza.webp',
          location: 'Dioni Hotel, Preveza, Greece',
          prices: {
            double: 1049,
            single: 1479,
            child1: 779,
            child2: 659
          },
          departureDate: '22/08',
          packagePrice: 2098
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Αθήνα – Λάρνακα με Sky Express',
        'Φόροι αεροδρομίων',
        '2 διανυκτερεύσεις σε ξενοδοχείο 4★ με πρωινό στην Πάτρα',
        '4 διανυκτερεύσεις σε ξενοδοχείο 3★ ή 4★ με πρωινό στην Πρέβεζα',
        'Μεταφορές, εκδρομές & περιηγήσεις σύμφωνα με το πρόγραμμα',
        'Τοπικός Αρχηγός / Συνοδός',
        'Εισιτήριο για βαρκάδα στον Αχέροντα & για τα Τριζόνια',
        'Εισιτήριο για κρουαζιέρα Λευκάδα – Κεφαλονιά – Ιθάκη – Σκορπιός',
        'Τέλος ανθεκτικότητας στην Κλιματική Κρίση',
        'Μία αποσκευή 20kg & μία χειραποσκευή έως 8kg',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Δικαιώματα εισόδων / μουσείων (προαιρετικά)',
        'Οτιδήποτε δεν αναφέρεται ρητά στο πρόγραμμα ή αναφέρεται ως προαιρετικό / προτεινόμενο'
      ],
      cancellationPolicy: 'Μέχρι 45 μέρες πριν: παρακράτηση €50 (λειτουργικά έξοδα). 44–31 μέρες πριν: παρακράτηση 30% της αξίας. 30–21 μέρες πριν: παρακράτηση 50% της αξίας. 20 μέρες ή λιγότερο πριν: παρακράτηση 100% της αξίας. Σε περίπτωση μη εμφάνισης (no-show): 100% της συνολικής τιμής. Για charter, κρουαζιέρες, ski, εκθέσεις, συνέδρια & παρεμφερείς εκδηλώσεις: ακυρωτικά έως 100% της αξίας, ανεξαρτήτως ημερομηνίας ακύρωσης.',
      termsAndConditions: [
        'Οι τιμές των πακέτων δεν αλλάζουν κατά την ώρα της κράτησης',
        'Με την κράτηση καταβάλλεται προκαταβολή 30%',
        'Εξόφληση περίπου 21 μέρες πριν την αναχώρηση',
        'Μέχρι 45 μέρες πριν: παρακράτηση €50 (λειτουργικά έξοδα)',
        '44–31 μέρες πριν: παρακράτηση 30% της αξίας',
        '30–21 μέρες πριν: παρακράτηση 50% της αξίας',
        '20 μέρες ή λιγότερο πριν: παρακράτηση 100% της αξίας',
        'Σε περίπτωση μη εμφάνισης (no-show): 100% της συνολικής τιμής',
        'Για charter, κρουαζιέρες, ski, εκθέσεις, συνέδρια & παρεμφερείς εκδηλώσεις: ακυρωτικά έως 100% της αξίας, ανεξαρτήτως ημερομηνίας ακύρωσης'
      ],
      program: {
        introduction: 'ΡΙΒΙΕΡΑ ΔΥΤΙΚΗΣ ΕΛΛΑΔΑΣ & ΣΤΟΛΙΔΙΑ ΚΟΡΙΝΘΙΑΚΟΥ\n\nΜια μοναδική εκδρομή που συνδυάζει τη Ριβιέρα της Δυτικής Ελλάδας με τα όμορφα νησιά του Κορινθιακού. Εξερευνήστε την Πάτρα, την Πρέβεζα, τη Λευκάδα, την Πάργα, τον ποταμό Αχέροντα και απολαύστε κρουαζιέρα στα νησιά Κεφαλονιά, Ιθάκη και Σκορπιός.',
        day1: '1η Μέρα: Λάρνακα – Αθήνα – Ισθμός Κορίνθου – Πάτρα\n\nΣυγκέντρωση στο αεροδρόμιο Λάρνακας και πτήση για Αθήνα.\nΆφιξη, επιβίβαση στο λεωφορείο και αναχώρηση για Πελοπόννησο.\n\nΣτάση στον Ισθμό της Κορίνθου για φωτογραφίες στη διάσημη διώρυγα\n\nΣυνέχεια προς Αχαΐα και την πρωτεύουσα Πάτρα\n\nΆφιξη στο ξενοδοχείο, τακτοποίηση δωματίων και ελεύθερος χρόνος για μια πρώτη γνωριμία με την πόλη.\nΔιανυκτέρευση στην Πάτρα.',
        day2: '2η Μέρα: Πάτρα – Αγία Λαύρα – Μέγα Σπήλαιο – Καλάβρυτα – Πάτρα\n\nΠρόγευμα και αναχώρηση για:\n\nΜονή Αγίας Λαύρας, φορτισμένη ιστορικά, με θέα και ατμόσφαιρα που προκαλούν δέος\n\nΣυνεχίζουμε για το Μέγα Σπήλαιο, χτισμένο στο άνοιγμα φυσικού σπηλαίου της οροσειράς Χελμού, πάνω από τη χαράδρα του Βουραϊκού\n\nΈπειτα αναχώρηση για Καλάβρυτα, ιστορική πόλη σε υψόμετρο 720–840 μ. στους πρόποδες του Χελμού.\n\n• Περιήγηση πόλης\n• Ελεύθερος χρόνος για βόλτα και γεύμα σε ταβέρνες (προαιρετικό)\n\nΕπιστροφή στο ξενοδοχείο στην Πάτρα.\nΔιανυκτέρευση στην Πάτρα.',
        day3: '3η Μέρα: Πάτρα – Μεσολόγγι – Αιτωλικό – Πρέβεζα\n\nΠρόγευμα και αναχώρηση με προορισμό Πρέβεζα, με ενδιάμεσες στάσεις:\n\nΜεσολόγγι – η «ηρωική πόλη» της Εξόδου\n• Επίσκεψη στον Κήπο των Ηρώων\n• Χρόνος για περίπατο στο λιμάνι & καφέ δίπλα στη λιμνοθάλασσα\n• Προαιρετικές επισκέψεις σε μουσεία / εκθέσεις\n\nΑιτωλικό – η «Μικρή Βενετία» της Ελλάδας\n• Χτισμένο πάνω σε νησίδα ανάμεσα σε δύο λιμνοθάλασσες\n• Πέτρινα γεφύρια, παραδοσιακά σπίτια, στενά δρομάκια\n\nΣτη συνέχεια, άφιξη στην Πρέβεζα, πανέμορφη παραθαλάσσια πόλη στο Ιόνιο.\nΤακτοποίηση στο ξενοδοχείο και ελεύθερος χρόνος για ξεκούραση ή βόλτα στην προκυμαία με τα καφέ και τα εστιατόρια.\nΔιανυκτέρευση στην Πρέβεζα.',
        day4: '4η Μέρα: Πρέβεζα – Ι. Μονή Φανερωμένης – Νυδρί – Λευκάδα\n\nΣήμερα εκδρομή στη Λευκάδα.\n\nΠρώτη στάση στην Ιερά Μονή Φανερωμένης (κοντά στο χωριό Φρύνι), που λειτουργεί και ως μουσείο Εκκλησιαστικής Τέχνης\n\nΣυνεχίζουμε προς Νυδρί, το πιο πολυσύχναστο τουριστικό θέρετρο της Λευκάδας:\n\n• Καταπράσινο, ειδυλλιακό τοπίο\n• Αμπελώνες, κήποι, περιβόλια\n\nΜετά την περιήγηση, ελεύθερος χρόνος για να απολαύσετε το νησί.\nΠολλές επιλογές για φαγητό: παραδοσιακές ταβέρνες, ουζερί, ψησταριές, ψαροταβέρνες & εστιατόρια με εθνικές κουζίνες.\nΕπιστροφή και διανυκτέρευση στην Πρέβεζα.',
        day5: '5η Μέρα: Πρέβεζα – Πάργα – Ποταμός Αχέροντας\n\nΠρόγευμα και αναχώρηση για Πάργα:\n\n• Κοσμοπολίτικο θέρετρο, χτισμένο αμφιθεατρικά\n• Πολύχρωμα σπίτια, σοκάκια, καντούνια\n• Ενετικό κάστρο που δεσπόζει πάνω από την πόλη\n\nΕλεύθερος χρόνος για βόλτα στην προκυμαία, καφέ ή ελαφρύ γεύμα με θέα το νησάκι της Παναγιάς και το Ιόνιο.\n\nΣτη συνέχεια, αναχώρηση για τον ποταμό Αχέροντα:\n\n• Βαρκάδα στα γαλαζοπράσινα νερά, ανάμεσα σε πλατάνια και μικρούς καταρράκτες\n• Ο βαρκάρης-ξεναγός αφηγείται μύθους & ιστορίες του Αχέροντα από την αρχαιότητα\n• Χρόνος για περπάτημα στα μονοπάτια ή χαλάρωση δίπλα στο ποτάμι\n\nΕπιστροφή στην Πρέβεζα.\nΔιανυκτέρευση στην Πρέβεζα.',
        day6: '6η Μέρα: Πρέβεζα – Κρουαζιέρα Κεφαλονιά, Ιθάκη, Σκορπιός\n\nΜετά το πρόγευμα, αναχώρηση για ολοήμερη κρουαζιέρα στα νησιά του Ιονίου.\n\n• Πόρτο Κατσίκι (Λευκάδα): από τις πιο διάσημες παραλίες της Ελλάδας, με λευκά βράχια & τιρκουάζ νερά\n• Φισκάρδο (Κεφαλονιά): κοσμοπολίτικο λιμανάκι με νεοκλασικά σπίτια, καφέ & σκάφη – ελεύθερος χρόνος\n• Κιόνι (Ιθάκη): παραδοσιακό ψαροχώρι με αυθεντική γοητεία\n\nΚατά την επιστροφή, θα δούμε:\n• Σκορπίδι\n• Σπηλιά Παπανικολή\n• Μεγανήσι\n• Μαδουρή\n\nΤελικό απογευματινό μπάνιο στα γαλαζοπράσινα νερά του Σκορπιού, του ιστορικού νησιού του Ωνάση.\nΕπιστροφή στην Πρέβεζα και ελεύθερος χρόνος για χαλαρή βραδινή βόλτα.\nΔιανυκτέρευση στην Πρέβεζα.',
        day7: '7η Μέρα: Πρέβεζα – Ναύπακτος – Τριζόνια – Αθήνα – Λάρνακα\n\nΠρόγευμα και αναχώρηση από Πρέβεζα με προορισμό την Αθήνα.\n\nΣτάση στη Ναύπακτο:\n\n• Επίσκεψη στο ενετικό κάστρο με μαγευτική θέα προς Κορινθιακό & λιμάνι\n• Βόλτα στο λιμανάκι\n• Προαιρετικό γεύμα & καφέ σε παραθαλάσσιο περιβάλλον\n\nΣτη συνέχεια, επίσκεψη στα Τριζόνια, το «σμαράγδι του Κορινθιακού»:\n\n• Μετάβαση με καϊκάκια από την ακτή της Φωκίδας (πλωτή διαδρομή ~500 μ.)\n• Μικρό νησί–καταφύγιο ηρεμίας\n• Πλούσια βλάστηση, ελιές, πουρνάρια, ευκάλυπτοι, αμυγδαλιές, φραγκοσυκιές\n• Καταγάλανα νερά & χωρίς αυτοκίνητα – απόλυτη χαλάρωση\n\nΤέλος, αναχώρηση για το αεροδρόμιο της Αθήνας και πτήση επιστροφής για Λάρνακα, γεμάτοι όμορφες εικόνες και αναμνήσεις από τη Δυτική Ελλάδα.'
      },
      gallery: [
        '/images/destinations/riviera-hero.webp'
      ]
    }
  },
  {
    id: 24,
    title: 'THESSALONIKI – KASTORIA – IOANNINA',
    destination: 'Greece',
    category: 'Summer Packages',
    price: 879,
    duration: '7 days / 6 nights',
    description: 'Discover Thessaloniki, Kastoria, and Ioannina with this 7-day tour through Northern Greece.',
    longDescription: 'Experience the beauty of Northern Greece with visits to Thessaloniki, Kastoria, and Ioannina. Explore the Prespes lakes, Vikos Gorge, Metsovo, and the historic island of Kyra Frosyni. This 7-day journey combines natural beauty, historic sites, and traditional Greek culture.',
    image: '🇬🇷',
    featured: true,
    details: {
      departureDate: '13/07, 20/07, 27/07, 10/08, 17/08, 24/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Thessaloniki, Kastoria, Ioannina',
      monthAvailability: 'July, August',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Sky Express',
      includedLuggage: '1 checked bag 20kg + 1 hand luggage 8kg',
      coverImage: '/images/destinations/skg-kastoria-ioanina-hero.webp',
      thumbnailImage: '/images/destinations/salonika-kastoria-boat.webp',
      flights: [
        {
          direction: 'Departure',
          date: '13/07, 20/07, 27/07, 10/08, 17/08, 24/08',
          route: 'Larnaca (LCA) → Thessaloniki (SKG)',
          flight: 'GQ 650',
          time: '11:30 → 13:30',
          luggage: '1 checked bag'
        },
        {
          direction: 'Return',
          date: '13/07, 20/07, 27/07, 10/08, 17/08, 24/08',
          route: 'Thessaloniki (SKG) → Larnaca (LCA)',
          flight: 'GQ 651',
          time: '09:40 → 11:30',
          luggage: '1 checked bag'
        }
      ],
      hotels: [
        {
          name: 'Kastoria Hotel – Kastoria',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/skg-kastoria-ioanina-hotel.webp',
          location: 'Kastoria Hotel, Kastoria, Greece',
          prices: {
            double: 879,
            single: 1159,
            child1: 599,
            child2: 629
          },
          departureDate: '13/07',
          packagePrice: 1758
        },
        {
          name: 'Ioannina Hotel – Ioannina',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/ioannina-hotel.webp',
          location: 'Ioannina Hotel, Ioannina, Greece',
          prices: {
            double: 879,
            single: 1159,
            child1: 599,
            child2: 629
          },
          departureDate: '13/07',
          packagePrice: 1758
        },
        {
          name: 'Thessaloniki Hotel – Thessaloniki',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/thessaloniki-hotel.webp',
          location: 'Thessaloniki Hotel, Thessaloniki, Greece',
          prices: {
            double: 879,
            single: 1159,
            child1: 599,
            child2: 629
          },
          departureDate: '13/07',
          packagePrice: 1758
        },
        {
          name: 'Kastoria Hotel – Kastoria',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/skg-kastoria-ioanina-hotel.webp',
          location: 'Kastoria Hotel, Kastoria, Greece',
          prices: {
            double: 879,
            single: 1159,
            child1: 599,
            child2: 629
          },
          departureDate: '20/07',
          packagePrice: 1758
        },
        {
          name: 'Ioannina Hotel – Ioannina',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/ioannina-hotel.webp',
          location: 'Ioannina Hotel, Ioannina, Greece',
          prices: {
            double: 879,
            single: 1159,
            child1: 599,
            child2: 629
          },
          departureDate: '20/07',
          packagePrice: 1758
        },
        {
          name: 'Thessaloniki Hotel – Thessaloniki',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/thessaloniki-hotel.webp',
          location: 'Thessaloniki Hotel, Thessaloniki, Greece',
          prices: {
            double: 879,
            single: 1159,
            child1: 599,
            child2: 629
          },
          departureDate: '20/07',
          packagePrice: 1758
        },
        {
          name: 'Kastoria Hotel – Kastoria',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/skg-kastoria-ioanina-hotel.webp',
          location: 'Kastoria Hotel, Kastoria, Greece',
          prices: {
            double: 919,
            single: 1189,
            child1: 639,
            child2: 669
          },
          departureDate: '27/07',
          packagePrice: 1838
        },
        {
          name: 'Ioannina Hotel – Ioannina',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/ioannina-hotel.webp',
          location: 'Ioannina Hotel, Ioannina, Greece',
          prices: {
            double: 919,
            single: 1189,
            child1: 639,
            child2: 669
          },
          departureDate: '27/07',
          packagePrice: 1838
        },
        {
          name: 'Thessaloniki Hotel – Thessaloniki',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/thessaloniki-hotel.webp',
          location: 'Thessaloniki Hotel, Thessaloniki, Greece',
          prices: {
            double: 919,
            single: 1189,
            child1: 639,
            child2: 669
          },
          departureDate: '27/07',
          packagePrice: 1838
        },
        {
          name: 'Kastoria Hotel – Kastoria',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/skg-kastoria-ioanina-hotel.webp',
          location: 'Kastoria Hotel, Kastoria, Greece',
          prices: {
            double: 979,
            single: 1279,
            child1: 679,
            child2: 709
          },
          departureDate: '10/08',
          packagePrice: 1958
        },
        {
          name: 'Ioannina Hotel – Ioannina',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/ioannina-hotel.webp',
          location: 'Ioannina Hotel, Ioannina, Greece',
          prices: {
            double: 979,
            single: 1279,
            child1: 679,
            child2: 709
          },
          departureDate: '10/08',
          packagePrice: 1958
        },
        {
          name: 'Thessaloniki Hotel – Thessaloniki',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/thessaloniki-hotel.webp',
          location: 'Thessaloniki Hotel, Thessaloniki, Greece',
          prices: {
            double: 979,
            single: 1279,
            child1: 679,
            child2: 709
          },
          departureDate: '10/08',
          packagePrice: 1958
        },
        {
          name: 'Kastoria Hotel – Kastoria',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/skg-kastoria-ioanina-hotel.webp',
          location: 'Kastoria Hotel, Kastoria, Greece',
          prices: {
            double: 979,
            single: 1279,
            child1: 679,
            child2: 709
          },
          departureDate: '17/08',
          packagePrice: 1958
        },
        {
          name: 'Ioannina Hotel – Ioannina',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/ioannina-hotel.webp',
          location: 'Ioannina Hotel, Ioannina, Greece',
          prices: {
            double: 979,
            single: 1279,
            child1: 679,
            child2: 709
          },
          departureDate: '17/08',
          packagePrice: 1958
        },
        {
          name: 'Thessaloniki Hotel – Thessaloniki',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/thessaloniki-hotel.webp',
          location: 'Thessaloniki Hotel, Thessaloniki, Greece',
          prices: {
            double: 979,
            single: 1279,
            child1: 679,
            child2: 709
          },
          departureDate: '17/08',
          packagePrice: 1958
        },
        {
          name: 'Kastoria Hotel – Kastoria',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/skg-kastoria-ioanina-hotel.webp',
          location: 'Kastoria Hotel, Kastoria, Greece',
          prices: {
            double: 919,
            single: 1189,
            child1: 639,
            child2: 669
          },
          departureDate: '24/08',
          packagePrice: 1838
        },
        {
          name: 'Ioannina Hotel – Ioannina',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/ioannina-hotel.webp',
          location: 'Ioannina Hotel, Ioannina, Greece',
          prices: {
            double: 919,
            single: 1189,
            child1: 639,
            child2: 669
          },
          departureDate: '24/08',
          packagePrice: 1838
        },
        {
          name: 'Thessaloniki Hotel – Thessaloniki',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/thessaloniki-hotel.webp',
          location: 'Thessaloniki Hotel, Thessaloniki, Greece',
          prices: {
            double: 919,
            single: 1189,
            child1: 639,
            child2: 669
          },
          departureDate: '24/08',
          packagePrice: 1838
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Θεσσαλονίκη – Λάρνακα με Sky Express',
        'Φόροι αεροδρομίων',
        '1 αποσκευή 20kg + 1 χειραποσκευή 8kg',
        '2 διανυκτερεύσεις σε ξενοδοχείο 5★ με πρωινό στην Καστοριά',
        '3 διανυκτερεύσεις σε ξενοδοχείο 5★ με πρωινό στα Ιωάννινα',
        '1 διανυκτέρευση σε ξενοδοχείο 4★ με πρωινό στη Θεσσαλονίκη',
        'Μεταφορές, εκδρομές & περιηγήσεις σύμφωνα με το πρόγραμμα',
        'Τοπικός Αρχηγός / Συνοδός',
        'Καραβάκια για το νησί της Κυράς Φροσύνης και τη Μεγάλη Πρέσπα',
        'Τέλος ανθεκτικότητας στην Κλιματική Κρίση',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Δικαιώματα εισόδων (προαιρετικά)',
        'Οτιδήποτε δεν αναφέρεται ρητά στο πρόγραμμα ή αναφέρεται ως προαιρετικό / προτεινόμενο'
      ],
      cancellationPolicy: 'Μέχρι 45 μέρες πριν την αναχώρηση: παρακράτηση €50 ανά άτομο (λειτουργικά έξοδα). 44–31 μέρες πριν: παρακράτηση 30% της αξίας του ταξιδιού. 30–21 μέρες πριν: παρακράτηση 50% της αξίας του ταξιδιού. 20 μέρες πριν την αναχώρηση και λιγότερο: παρακράτηση 100% της αξίας. Σε περίπτωση μη εμφάνισης (no-show): 100% της συνολικής τιμής. Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, ski, εκθέσεις, συνέδρια κ.λπ.: ακυρωτικά έως 100% ανεξαρτήτως ημέρας ακύρωσης.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά την ώρα της κράτησης',
        'Με την κράτηση καταβάλλεται προκαταβολή 30% της αξίας του πακέτου',
        'Η εξόφληση γίνεται περίπου 21 μέρες πριν την αναχώρηση',
        'Μέχρι 45 μέρες πριν την αναχώρηση: παρακράτηση €50 ανά άτομο (λειτουργικά έξοδα)',
        '44–31 μέρες πριν: παρακράτηση 30% της αξίας του ταξιδιού',
        '30–21 μέρες πριν: παρακράτηση 50% της αξίας του ταξιδιού',
        '20 μέρες πριν την αναχώρηση και λιγότερο: παρακράτηση 100% της αξίας',
        'Σε περίπτωση μη εμφάνισης (no-show): 100% της συνολικής τιμής',
        'Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, ski, εκθέσεις, συνέδρια κ.λπ.: ακυρωτικά έως 100% ανεξαρτήτως ημέρας ακύρωσης'
      ],
      program: {
        introduction: 'ΘΕΣΣΑΛΟΝΙΚΗ – ΚΑΣΤΟΡΙΑ – ΙΩΑΝΝΙΝΑ\n\nΜια μοναδική εκδρομή που σας ταξιδεύει στη Βόρεια Ελλάδα, από τη Θεσσαλονίκη στην Καστοριά και τα Ιωάννινα. Εξερευνήστε τις λίμνες των Πρεσπών, το Φαράγγι του Βίκου, το Μέτσοβο και το ιστορικό νησί της Κυράς Φροσύνης.',
        day1: '1η Μέρα: Λάρνακα – Θεσσαλονίκη – Καστοριά\n\nΣυγκέντρωση στο αεροδρόμιο Λάρνακας και πτήση για Θεσσαλονίκη.\nΆφιξη, παραλαβή από την αρχηγό και άμεση αναχώρηση για την πανέμορφη Καστοριά, πόλη γεμάτη φυσική ομορφιά και παραδοσιακή αρχιτεκτονική.\n\n• Μεταφορά στο ξενοδοχείο\n• Τακτοποίηση στα δωμάτια\n• Υπόλοιπη ημέρα ελεύθερη για μια πρώτη γνωριμία με την πόλη\n\nΔιανυκτέρευση στην Καστοριά.',
        day2: '2η Μέρα: Καστοριά – Πρέσπες – Άγιος Αχίλλειος – Ψαράδες – Βαρκάδα στη Μεγάλη Πρέσπα\n\nΠρωινό και αναχώρηση για τις Πρέσπες, μία από τις πιο παρθένες και εντυπωσιακές περιοχές της Ελλάδας, προστατευόμενη λόγω μοναδικής φύσης και πλούσιας χλωρίδας & πανίδας.\n\nΜικρή Πρέσπα:\n• Επίσκεψη στο νησάκι Άγιος Αχίλλειος, συνδεδεμένο με την ξηρά μέσω πλωτής γέφυρας\n• Ερείπια της Βυζαντινής Βασιλικής του Αγίου Αχιλλείου\n• Ηρεμία και γαλήνιο τοπίο\n\nΨαράδες:\n• Παραδοσιακός οικισμός, το μοναδικό ελληνικό χωριό στις όχθες της Μεγάλης Πρέσπας\n• Γαστρονομική εμπειρία με ψάρια λίμνης, πιπεριές Φλωρίνης, φασολάδα Πρεσπών (προαιρετικά)\n\nΒαρκάδα στη Μεγάλη Πρέσπα:\n• Βραχογραφίες της Παναγίας\n• Παλιά ασκηταριά\n• Σημείο Τριεθνούς (Ελλάδα – Αλβανία – Β. Μακεδονία)\n\nΕπιστροφή στο ξενοδοχείο στην Καστοριά το απόγευμα.\nΔιανυκτέρευση στην Καστοριά.',
        day3: '3η Μέρα: Καστοριά – Μονή Παναγίας Μαυριώτισσας – Κόνιτσα – Ιωάννινα\n\nΠρόγευμα και αναχώρηση για:\n\nΙ. Μονή Παναγίας Μαυριώτισσας\n• Ένα από τα σημαντικότερα βυζαντινά μνημεία της Καστοριάς\n• Χτισμένη στις όχθες της λίμνης, μέσα σε μοναδικό φυσικό τοπίο\n• Αφιερωμένη στην Παναγία τη Μαυριώτισσα, θαυματουργή προστάτιδα της περιοχής\n\nΣυνεχίζουμε για Κόνιτσα, το γραφικό χωριό του Αγίου Παϊσίου:\n• Εκεί βρίσκεται το πατρικό του σπίτι\n• Περίπατος στα πέτρινα δρομάκια και αυθεντική ηπειρώτικη ατμόσφαιρα\n\nΑργότερα, άφιξη στα Ιωάννινα.\n• Μεταφορά & τακτοποίηση στο ξενοδοχείο\n• Υπόλοιπη ημέρα ελεύθερη για βόλτα στην λίμνη Παμβώτιδα και στο ιστορικό κέντρο\n\nΔιανυκτέρευση στα Ιωάννινα.',
        day4: '4η Μέρα: Ιωάννινα – Νησάκι Κυράς Φροσύνης – Κάστρο Ιωαννίνων – Μουσείο Βρέλλη\n\nΠρωινό και αναχώρηση για το νησάκι της Κυράς Φροσύνης, το μοναδικό κατοικημένο νησί λίμνης στην Ελλάδα.\n\nΕπίσκεψη στο σπίτι του Αλή Πασά:\n• Σήμερα φιλοξενεί έργα ξυλογλυπτικής του Βαγγέλη Γκόγκου\n• Ιστορικά εκθέματα της εποχής του Αλή Πασά\n\nΣτη συνέχεια επίσκεψη στο Κάστρο Ιωαννίνων:\n• Παλαιότερο βυζαντινό κάστρο της Ελλάδας (528 μ.Χ.), έργο Ιουστινιανού\n• Υπήρξε για αιώνες διοικητικό & πολιτιστικό κέντρο της περιοχής\n• Μεγάλη ακμή στην περίοδο της Τουρκοκρατίας\n\nΑκολουθεί επίσκεψη στο Μουσείο Κέρινων Ομοιωμάτων Παύλου Βρέλλη:\n• Ρεαλιστικά κέρινα ομοιώματα σημαντικών μορφών και στιγμών της ελληνικής ιστορίας\n• Ιδιαίτερη ατμόσφαιρα και συγκίνηση\n\nΕπιστροφή στο ξενοδοχείο.\nΥπόλοιπη ημέρα ελεύθερη.\nΔιανυκτέρευση στα Ιωάννινα.',
        day5: '5η Μέρα: Ιωάννινα – Κήποι – Μονοδένδρι – Φαράγγι Βίκου\n\nΠρωινό και αναχώρηση για τα Ζαγοροχώρια, έναν από τους πιο όμορφους και παραδοσιακούς προορισμούς της Ελλάδας.\n\nΗ περιοχή είναι γνωστή για το Φαράγγι του Βίκου:\n• Μήκος περίπου 12 χλμ.\n• Βάθος έως 900 μ.\n• Ένα από τα βαθύτερα φαράγγια στον κόσμο σε αναλογία με το πλάτος\n\nΣτάσεις:\n\nΚήποι:\n• Όμορφο χωριό με εντυπωσιακό πολύτοξο πέτρινο γεφύρι, χαρακτηριστικό ηπειρώτικης αρχιτεκτονικής\n\nΜονοδένδρι:\n• Καλοδιατηρημένα πέτρινα σπίτια, στενά καλντερίμια\n• Σύντομη πεζοπορία προς τη Μονή Αγίας Παρασκευής με μοναδική θέα στο Φαράγγι Βίκου και την Πίνδο\n\nΕπιστροφή στα Ιωάννινα.\nΔιανυκτέρευση στα Ιωάννινα.',
        day6: '6η Μέρα: Ιωάννινα – Μέτσοβο – Θεσσαλονίκη\n\nΠρωινό και αναχώρηση για το γραφικό Μέτσοβο:\n\n• Ορεινό κεφαλοχώρι της Πίνδου, χτισμένο αμφιθεατρικά\n• Λιθόστρωτα δρομάκια, παραδοσιακά αρχοντικά, ζωντανή πλατεία\n• Ελεύθερος χρόνος για βόλτα, καφέ ή ψώνια παραδοσιακών προϊόντων\n\nΣτη συνέχεια, αναχώρηση για Θεσσαλονίκη.\nΆφιξη, μεταφορά στο ξενοδοχείο και τακτοποίηση.\nΔιανυκτέρευση στη Θεσσαλονίκη.',
        day7: '7η Μέρα: Θεσσαλονίκη – Λάρνακα\n\nΝωρίς το πρωί, πρόγευμα σε πακέτο και αναχώρηση για το αεροδρόμιο Θεσσαλονίκης.\nΠτήση επιστροφής για Λάρνακα, γεμάτοι εικόνες, εμπειρίες και όμορφες αναμνήσεις από τη Βόρεια Ελλάδα.'
      },
      gallery: [
        '/images/summer/thessaloniki-kastoria-ioannina-hero.webp'
      ]
    }
  },
  {
    id: 25,
    title: 'ΠΡΑΓΑ – ΚΑΡΛΟΒΥ ΒΑΡΥ',
    destination: 'Czech Republic',
    category: 'Summer Packages',
    price: 899,
    duration: '5 days / 4 nights',
    description: 'Discover Prague, the "Golden City" of the Czech Republic, and visit the famous spa town of Karlovy Vary.',
    longDescription: 'Experience the fairy-tale capital of the Czech Republic, Prague, built on the banks of the Vltava River. Explore the Castle District, Old Town, and take a full-day excursion to Karlovy Vary, one of Europe\'s most famous spa towns. This 5-day journey combines history, culture, and European elegance.',
    image: '🇨🇿',
    featured: true,
    details: {
      departureDate: '07/07, 14/07, 21/07, 04/08, 11/08, 18/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Prague, Karlovy Vary',
      monthAvailability: 'July, August',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Smartwings',
      includedLuggage: '1 checked bag 23kg + 1 hand luggage 10kg',
      coverImage: '/images/destinations/skg-kastoria-ioanina-hero.webp',
      thumbnailImage: '/images/destinations/skg-kastoria-ioanina-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '07/07, 14/07, 21/07, 04/08, 11/08, 18/08',
          route: 'Larnaca (LCA) → Prague (PRG)',
          flight: 'QS 1109',
          time: '09:15 → 12:00',
          luggage: '1 checked bag'
        },
        {
          direction: 'Return',
          date: '07/07, 14/07, 21/07, 04/08, 11/08, 18/08',
          route: 'Prague (PRG) → Larnaca (LCA)',
          flight: 'QS 1108',
          time: '04:05 → 08:30',
          luggage: '1 checked bag'
        }
      ],
      hotels: [
        {
          name: 'Prague Hotel – Prague',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/skg-kastoria-ioanina-hotel.webp',
          location: 'Prague Hotel, Prague, Czech Republic',
          prices: {
            double: 899,
            single: 1075,
            child1: 879,
            child2: 879
          },
          departureDate: '07/07',
          packagePrice: 1798
        },
        {
          name: 'Prague Hotel – Prague',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/skg-kastoria-ioanina-hotel.webp',
          location: 'Prague Hotel, Prague, Czech Republic',
          prices: {
            double: 899,
            single: 1075,
            child1: 879,
            child2: 879
          },
          departureDate: '14/07',
          packagePrice: 1798
        },
        {
          name: 'Prague Hotel – Prague',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/skg-kastoria-ioanina-hotel.webp',
          location: 'Prague Hotel, Prague, Czech Republic',
          prices: {
            double: 929,
            single: 1095,
            child1: 899,
            child2: 899
          },
          departureDate: '21/07',
          packagePrice: 1858
        },
        {
          name: 'Prague Hotel – Prague',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/skg-kastoria-ioanina-hotel.webp',
          location: 'Prague Hotel, Prague, Czech Republic',
          prices: {
            double: 929,
            single: 1095,
            child1: 899,
            child2: 899
          },
          departureDate: '04/08',
          packagePrice: 1858
        },
        {
          name: 'Prague Hotel – Prague',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/skg-kastoria-ioanina-hotel.webp',
          location: 'Prague Hotel, Prague, Czech Republic',
          prices: {
            double: 929,
            single: 1095,
            child1: 899,
            child2: 899
          },
          departureDate: '11/08',
          packagePrice: 1858
        },
        {
          name: 'Prague Hotel – Prague',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/skg-kastoria-ioanina-hotel.webp',
          location: 'Prague Hotel, Prague, Czech Republic',
          prices: {
            double: 929,
            single: 1095,
            child1: 899,
            child2: 899
          },
          departureDate: '18/08',
          packagePrice: 1858
        }
      ],
      included: [
        'Αεροπορικό εισιτήριο Λάρνακα – Πράγα – Λάρνακα με πτήσεις της Smartwings',
        'Φόροι αεροδρομίων',
        'Διαμονή σε ξενοδοχείο 4★ με πρόγευμα',
        'Μεταφορές, εκδρομές, περιηγήσεις & ξεναγήσεις όπως αναφέρονται στο πρόγραμμα με πολυτελή πούλμαν',
        'Έμπειρος τοπικός ελληνόφωνος αρχηγός / ξεναγός',
        'Κρουαζιέρα στον Μολδάβα με δείπνο',
        'Μία αποσκευή 23kg και μία χειραποσκευή 10kg',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Δικαιώματα εισόδων (προαιρετικά)',
        'Οτιδήποτε δεν αναφέρεται ρητά στο πρόγραμμα ή αναφέρεται ως προαιρετικό ή προτεινόμενο'
      ],
      cancellationPolicy: 'Μέχρι 45 ημέρες πριν την άφιξη: παρακράτηση €50 ανά άτομο (λειτουργικά έξοδα). Από 45 έως 30 ημέρες πριν την άφιξη: παρακράτηση 30% της συνολικής τιμής. Από 30 έως 21 ημέρες πριν την άφιξη: παρακράτηση 50% της συνολικής τιμής. Από 21 ημέρες έως και την ημέρα άφιξης (0 ημέρες): παρακράτηση 100% της συνολικής τιμής. Σε περίπτωση μη εμφάνισης (no-show): παρακράτηση 100% της συνολικής τιμής. Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, ski, εκθέσεις, συνέδρια & παρεμφερείς διεθνείς εκδηλώσεις: ακυρωτικά έως 100%, ανεξαρτήτως ημερομηνίας γνωστοποίησης της ακύρωσης.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά την ώρα της κράτησης',
        'Με την κράτηση καταβάλλεται προκαταβολή 30% της αξίας του πακέτου',
        'Η εξόφληση γίνεται περίπου 21 μέρες πριν την αναχώρηση',
        'Τα οικογενειακά δωμάτια είναι 2 δίκλινα δωμάτια με ενδιάμεση πόρτα',
        'Μέχρι 45 ημέρες πριν την άφιξη: παρακράτηση €50 ανά άτομο (λειτουργικά έξοδα)',
        'Από 45 έως 30 ημέρες πριν την άφιξη: παρακράτηση 30% της συνολικής τιμής',
        'Από 30 έως 21 ημέρες πριν την άφιξη: παρακράτηση 50% της συνολικής τιμής',
        'Από 21 ημέρες έως και την ημέρα άφιξης (0 ημέρες): παρακράτηση 100% της συνολικής τιμής',
        'Σε περίπτωση μη εμφάνισης (no-show): παρακράτηση 100% της συνολικής τιμής',
        'Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, ski, εκθέσεις, συνέδρια & παρεμφερείς διεθνείς εκδηλώσεις: ακυρωτικά έως 100%, ανεξαρτήτως ημερομηνίας γνωστοποίησης της ακύρωσης'
      ],
      program: {
        introduction: 'ΠΡΑΓΑ – ΚΑΡΛΟΒΥ ΒΑΡΥ\n\nΜια μοναδική εκδρομή στην παραμυθένια πρωτεύουσα της Τσεχίας, την Πράγα, χτισμένη στις όχθες του ποταμού Μολδάβα. Εξερευνήστε την Καστρούπολη, την Παλιά Πόλη, και απολαύστε ολοήμερη εκδρομή στο Κάρλοβυ Βάρυ, μία από τις πιο γνωστές θερμαλιστικές πόλεις της Ευρώπης.',
        day1: '1η Μέρα: Λάρνακα – Πράγα – Πανοραμική Ξενάγηση\n\nΣυγκέντρωση στο αεροδρόμιο Λάρνακας και αναχώρηση με απευθείας πτήση για Πράγα, την παραμυθένια πρωτεύουσα της Τσεχίας.\n\nΆφιξη στη «χρυσή πόλη», χτισμένη στις όχθες του ποταμού Μολδάβα, στην καρδιά της κεντρικής Βοημίας. Δεν είναι τυχαίο ότι η Πράγα αποκαλείται και «μητέρα των πόλεων», ενώ από το 1992 το ιστορικό της κέντρο ανήκει στα Μνημεία Παγκόσμιας Κληρονομιάς της UNESCO.\n\nΑκολουθεί πανοραμική ξενάγηση, για μια πρώτη γνωριμία με την ατμόσφαιρα και την αρχιτεκτονική της πόλης, που μας ταξιδεύει μέσα στους αιώνες.\n\nΣτη συνέχεια:\n• Μεταφορά & τακτοποίηση στο ξενοδοχείο\n• Ελεύθερος χρόνος για χαλαρή βόλτα στη γύρω περιοχή\n• Δυνατότητα για καφέ ή τοπική μπύρα σε ένα από τα όμορφα καφέ της Πράγας\n\nΔιανυκτέρευση στην Πράγα.',
        day2: '2η Μέρα: Πράγα – Καστρούπολη – Παλιά Πόλη\n\nΠρόγευμα και αναχώρηση για ολοήμερη γνωριμία με την ατμοσφαιρική Πράγα.\n\nΞεκινάμε από την Καστρούπολη, που απλώνεται στον βράχο της Μάλα Στράνα και αποτελεί το πιο εμβληματικό σημείο της πόλης:\n\n• Επίσκεψη στο Κάστρο Χρατσάνι, ένα από τα μεγαλύτερα συγκροτήματα κάστρων στον κόσμο\n• Επίσκεψη στον γοτθικό Καθεδρικό Ναό του Αγίου Βίτου, σύμβολο της τσεχικής ιστορίας\n• Στάση στη βασιλική του Αγίου Γεωργίου και στο Βασιλικό Παλάτι\n• Βόλτα στο δρομάκι των αλχημιστών, ένα από τα πιο θρυλικά και γραφικά σημεία της περιοχής\n• Στάση στο Λορέττο, σημαντικό τόπο προσκυνήματος με ιδιαίτερη αρχιτεκτονική\n\nΣτη συνέχεια κατηφορίζουμε προς τον ποταμό Μολδάβα και:\n\n• Διασχίζουμε την ιστορική Γέφυρα του Καρόλου, με τα τριάντα αγάλματά της και την μοναδική θέα στην πόλη\n• Περνάμε από την πλατεία των Ιπποτών του Σταυρού και συνεχίζουμε με ξενάγηση στην Παλιά Πόλη:\n  - Το Δημαρχείο με το διάσημο αστρονομικό ρολόι (1420), με την παρέλαση των δώδεκα αποστόλων κάθε ώρα\n  - Η πλατεία της Παλιάς Πόλης, η ζωντανή καρδιά της πόλης, όπου η ιστορία συναντά τη σύγχρονη ζωή\n\nΧρόνος ελεύθερος για:\n• Καφέ & γλυκό σε παραδοσιακά καφέ\n• Βόλτες και αγορές στα γραφικά δρομάκια της Παλιάς Πόλης\n\nΤο βράδυ προτείνεται:\n• Επίσκεψη σε κάποιο jazz club\n• Παραδοσιακές μπυραρίες της Πράγας\n• Ή παράσταση Μαύρου Θεάτρου ή όπερας – αφού βρίσκεστε στην πόλη όπου γεννήθηκε η ιδέα του Μαύρου Θεάτρου\n\nΔιανυκτέρευση στην Πράγα.',
        day3: '3η Μέρα: Πράγα – Κάρλοβυ Βάρυ (Ολοήμερη Εκδρομή)\n\nΠρόγευμα και αναχώρηση για ολοήμερη εκδρομή στην κοσμοπολίτικη λουτρόπολη Κάρλοβυ Βάρυ, μία από τις πιο γνωστές θερμαλιστικές πόλεις της Ευρώπης.\n\nΗ πόλη είναι χτισμένη σε καταπράσινη, δασώδη κοιλάδα με τον ποταμό Τεπλά, δημιουργώντας ειδυλλιακή, ρομαντική ατμόσφαιρα\n\nΤο όνομα «Κάρλοβυ Βάρυ» σημαίνει «Τα λουτρά του Καρόλου», από τον βασιλιά της Βοημίας Κάρολο Δ΄, που πρώτος αναγνώρισε τη φαρμακευτική δύναμη των θερμών πηγών\n\nΚατά την περιήγηση θα δούμε μεταξύ άλλων:\n\n• Το Αυτοκρατορικό θεραπευτήριο\n• Το κομψό Θέατρο της πόλης\n• Τον εντυπωσιακό θερμοπίδακα με το ζεστό νερό που αναβλύζει από τα έγκατα της γης\n• Τη χαρακτηριστική Ρωσική εκκλησία με τους χρυσοστόλιστους τρούλους\n• Το θρυλικό Grandhotel Pupp, ιστορικό ξενοδοχείο που έχει φιλοξενήσει πλήθος προσωπικοτήτων και αποτέλεσε σκηνικό κινηματογραφικών ταινιών\n\nΕλεύθερος χρόνος για:\n• Βόλτες στους πεζόδρομους\n• Δοκιμή των ιαματικών νερών\n• Καφέ ή γλυκό σε παραδοσιακά καφέ\n• Αγορές σε κρυστάλλους Βοημίας, αναμνηστικά και κομψά δώρα\n\nΑργά το απόγευμα επιστροφή στην Πράγα.\nΔιανυκτέρευση στην Πράγα.',
        day4: '4η Μέρα: Πράγα – Ελεύθερη Μέρα & Βραδινή Κρουαζιέρα στον Μολδάβα\n\nΠρόγευμα και ημέρα ελεύθερη για να απολαύσετε την Πράγα όπως εσείς επιθυμείτε:\n\n• Βόλτες στα στενά της Παλιάς Πόλης\n• Επισκέψεις σε μουσεία, γκαλερί, εκθέσεις\n• Χαλάρωση σε ιστορικά καφέ\n• Ψώνια & αναμνηστικά\n\nΤο βράδυ, περίπου στις 20:00, επιβίβαση σε κρουαζιέρα δύο ωρών στον ποταμό Μολδάβα:\n\n• Δείπνο σε μπουφέ στη διάρκεια της κρουαζιέρας\n• Θέα στη φωτισμένη Πράγα, τα μνημεία και τις γέφυρες να καθρεφτίζονται στα νερά του ποταμού\n\nΔιανυκτέρευση στην Πράγα.',
        day5: '5η Μέρα: Πράγα – Λάρνακα\n\nΠρόγευμα (breakfast box) και, λίγο μετά τα μεσάνυχτα, μεταφορά στο αεροδρόμιο της Πράγας για την πτήση επιστροφής στη Λάρνακα.\n\nΕπιστροφή με όμορφες εικόνες, εμπειρίες και αναμνήσεις από την παραμυθένια πρωτεύουσα της Τσεχίας, γεμάτο πολιτισμό, ιστορία και ευρωπαϊκή κομψότητα.'
      },
      gallery: [
        '/images/destinations/skg-kastoria-ioanina-hero.webp'
      ]
    }
  },
  {
    id: 26,
    title: 'ΚΩΝΣΤΑΝΤΙΝΟΥΠΟΛΗ – 5 Μέρες',
    destination: 'Turkey',
    category: 'Summer Packages',
    price: 915,
    duration: '5 days / 4 nights',
    description: 'Discover Istanbul, the historic city that bridges Europe and Asia, with visits to Hagia Sophia, Topkapi Palace, and the Princes\' Islands.',
    longDescription: 'Experience the magic of Istanbul, the city that bridges Europe and Asia. Explore the historic Old City, visit Hagia Sophia and Topkapi Palace, take a Bosphorus cruise, and discover the Princes\' Islands. This 5-day journey combines Byzantine and Ottoman history with modern Turkish culture.',
    image: '🇹🇷',
    featured: true,
    details: {
      departureDate: '13/07, 20/07, 27/07, 03/08, 10/08, 17/08, 24/08, 07/09, 28/09, 12/10',
      departureFrom: 'Larnaca',
      destinationFull: 'Istanbul, Turkey',
      monthAvailability: 'July, August, September, October',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Aegean Airlines',
      includedLuggage: '1 checked bag 23kg + 1 hand luggage 8kg',
      coverImage: '/images/destinations/constanipole-hero.webp',
      thumbnailImage: '/images/destinations/constantinopole-view.webp',
      flights: [
        {
          direction: 'Departure',
          date: '13/07, 20/07, 27/07, 03/08, 10/08, 17/08, 24/08, 07/09, 28/09, 12/10',
          route: 'Larnaca (LCA) → Athens (ATH)',
          flight: 'A3 903',
          time: '10:15 → 12:00',
          luggage: '1 checked bag'
        },
        {
          direction: 'Departure',
          date: '13/07, 20/07, 27/07, 03/08, 10/08, 17/08, 24/08, 07/09, 28/09, 12/10',
          route: 'Athens (ATH) → Istanbul (IST)',
          flight: 'A3 992',
          time: '13:10 → 14:45',
          luggage: '1 checked bag'
        },
        {
          direction: 'Return',
          date: '13/07, 20/07, 27/07, 03/08, 10/08, 17/08, 24/08, 07/09, 28/09, 12/10',
          route: 'Istanbul (IST) → Athens (ATH)',
          flight: 'A3 995',
          time: '20:50 → 22:20',
          luggage: '1 checked bag'
        },
        {
          direction: 'Return',
          date: '13/07, 20/07, 27/07, 03/08, 10/08, 17/08, 24/08, 07/09, 28/09, 12/10',
          route: 'Athens (ATH) → Larnaca (LCA)',
          flight: 'A3 910',
          time: '23:45 → 01:20 (+1)',
          luggage: '1 checked bag'
        }
      ],
      hotels: [
        {
          name: 'The Central Palace Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/conpole-hotel.webp',
          location: 'Lamartin Street No: 18, Talimhane Taksim, Beyoglu, Istanbul, Turkey 34437',
          prices: {
            double: 915,
            single: 1145,
            child1: 665
          },
          departureDate: '13/07',
          packagePrice: 1830
        },
        {
          name: 'The Central Palace Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/conpole-hotel.webp',
          location: 'Lamartin Street No: 18, Talimhane Taksim, Beyoglu, Istanbul, Turkey 34437',
          prices: {
            double: 945,
            single: 1185,
            child1: 685
          },
          departureDate: '20/07',
          packagePrice: 1890
        },
        {
          name: 'The Central Palace Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/conpole-hotel.webp',
          location: 'Lamartin Street No: 18, Talimhane Taksim, Beyoglu, Istanbul, Turkey 34437',
          prices: {
            double: 945,
            single: 1185,
            child1: 685
          },
          departureDate: '27/07',
          packagePrice: 1890
        },
        {
          name: 'The Central Palace Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/conpole-hotel.webp',
          location: 'Lamartin Street No: 18, Talimhane Taksim, Beyoglu, Istanbul, Turkey 34437',
          prices: {
            double: 945,
            single: 1185,
            child1: 685
          },
          departureDate: '03/08',
          packagePrice: 1890
        },
        {
          name: 'The Central Palace Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/conpole-hotel.webp',
          location: 'Lamartin Street No: 18, Talimhane Taksim, Beyoglu, Istanbul, Turkey 34437',
          prices: {
            double: 945,
            single: 1185,
            child1: 685
          },
          departureDate: '10/08',
          packagePrice: 1890
        },
        {
          name: 'The Central Palace Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/conpole-hotel.webp',
          location: 'Lamartin Street No: 18, Talimhane Taksim, Beyoglu, Istanbul, Turkey 34437',
          prices: {
            double: 945,
            single: 1185,
            child1: 685
          },
          departureDate: '17/08',
          packagePrice: 1890
        },
        {
          name: 'The Central Palace Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/conpole-hotel.webp',
          location: 'Lamartin Street No: 18, Talimhane Taksim, Beyoglu, Istanbul, Turkey 34437',
          prices: {
            double: 915,
            single: 1145,
            child1: 665
          },
          departureDate: '24/08',
          packagePrice: 1830
        },
        {
          name: 'The Central Palace Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/conpole-hotel.webp',
          location: 'Lamartin Street No: 18, Talimhane Taksim, Beyoglu, Istanbul, Turkey 34437',
          prices: {
            double: 915,
            single: 1145,
            child1: 665
          },
          departureDate: '07/09',
          packagePrice: 1830
        },
        {
          name: 'The Central Palace Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/conpole-hotel.webp',
          location: 'Lamartin Street No: 18, Talimhane Taksim, Beyoglu, Istanbul, Turkey 34437',
          prices: {
            double: 915,
            single: 1145,
            child1: 665
          },
          departureDate: '28/09',
          packagePrice: 1830
        },
        {
          name: 'The Central Palace Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/conpole-hotel.webp',
          location: 'Lamartin Street No: 18, Talimhane Taksim, Beyoglu, Istanbul, Turkey 34437',
          prices: {
            double: 915,
            single: 1145,
            child1: 665
          },
          departureDate: '12/10',
          packagePrice: 1830
        }
      ],
      included: [
        'Αεροπορικό εισιτήριο Λάρνακα – Αθήνα – Κωνσταντινούπολη – Αθήνα – Λάρνακα με Aegean Airlines',
        'Φόροι αεροδρομίων',
        '4 διανυκτερεύσεις σε κεντρικό ξενοδοχείο 4★ με πρόγευμα',
        'Μεταφορές, εκδρομές & περιηγήσεις όπως αναφέρονται στο αναλυτικό πρόγραμμα',
        'Κρουαζιέρα στον Βόσπορο',
        'Αρχηγός / Συνοδός καθ\' όλη τη διάρκεια του προγράμματος',
        'Εισιτήριο για τα Πριγκηπονήσια',
        'Μία αποσκευή 23kg και μία χειραποσκευή έως 8kg',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Βίζα για την Τουρκία (έκδοση ηλεκτρονικά, κόστος περίπου €50 ανά άτομο)',
        'Οτιδήποτε δεν αναφέρεται ρητά στο πρόγραμμα ή αναφέρεται ως προαιρετικό ή προτεινόμενο'
      ],
      cancellationPolicy: 'Ακύρωση έως 45 ημέρες πριν την αναχώρηση: παρακράτηση €50 ανά άτομο (λειτουργικά έξοδα). Ακύρωση μεταξύ 44 και 31 ημερών: παρακράτηση 30% της αξίας του ταξιδιού. Ακύρωση μεταξύ 30 και 21 ημερών: παρακράτηση 50% της αξίας του ταξιδιού. Ακύρωση 20 ημέρες πριν την αναχώρηση ή λιγότερο: παρακράτηση 100% της αξίας του ταξιδιού. Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, ski, εκθέσεις, συνέδρια & παρεμφερείς διεθνείς εκδηλώσεις, τα ακυρωτικά φθάνουν έως 100%, ανεξαρτήτως ημερομηνίας γνωστοποίησης της ακύρωσης.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά την ώρα της κράτησης',
        'Με την κράτηση καταβάλλεται προκαταβολή 30% της αξίας του πακέτου',
        'Η εξόφληση πραγματοποιείται περίπου 21 ημέρες πριν την αναχώρηση',
        'Η έκδοση βίζας γίνεται υποχρεωτικά από κάθε ταξιδιώτη ηλεκτρονικά μέσω διαδικτύου (www.evisa.gov.tr/en/, κόστος περίπου €50)',
        'Στην Τουρκία ταξιδεύετε μόνο με διαβατήριο, το οποίο πρέπει να έχει ισχύ τουλάχιστον 6 μήνες μετά την είσοδο στη χώρα',
        'Ακύρωση έως 45 ημέρες πριν την αναχώρηση: παρακράτηση €50 ανά άτομο (λειτουργικά έξοδα)',
        'Ακύρωση μεταξύ 44 και 31 ημερών: παρακράτηση 30% της αξίας του ταξιδιού',
        'Ακύρωση μεταξύ 30 και 21 ημερών: παρακράτηση 50% της αξίας του ταξιδιού',
        'Ακύρωση 20 ημέρες πριν την αναχώρηση ή λιγότερο: παρακράτηση 100% της αξίας του ταξιδιού',
        'Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, ski, εκθέσεις, συνέδρια & παρεμφερείς διεθνείς εκδηλώσεις, τα ακυρωτικά φθάνουν έως 100%, ανεξαρτήτως ημερομηνίας γνωστοποίησης της ακύρωσης'
      ],
      program: {
        introduction: 'ΚΩΝΣΤΑΝΤΙΝΟΥΠΟΛΗ – 5 Μέρες\n\nΜια μοναδική εκδρομή στην Κωνσταντινούπολη, την πόλη που ενώνει Ευρώπη και Ασία. Εξερευνήστε την Παλιά Πόλη, επισκεφτείτε την Αγία Σοφία και το Παλάτι Τοπ Καπί, απολαύστε κρουαζιέρα στον Βόσπορο και ανακαλύψτε τα Πριγκηπονήσια.',
        day1: '1η Μέρα: Λάρνακα – Αθήνα – Κωνσταντινούπολη – Πέραν\n\nΣυγκέντρωση στο αεροδρόμιο Λάρνακας και αναχώρηση για Κωνσταντινούπολη με ενδιάμεση στάση στην Αθήνα.\n\nΆφιξη στην Πόλη, υποδοχή από τους τοπικούς συνεργάτες και μεταφορά στο ξενοδοχείο. Τακτοποίηση στα δωμάτια.\n\nΤο απόγευμα ξεκινά η πρώτη γνωριμία με τη σύγχρονη Κωνσταντινούπολη με έναν χαλαρό περίπατο στην θρυλική λεωφόρο Ιστικλάλ, την πιο ζωντανή και κοσμοπολίτικη αρτηρία της πόλης:\n\n• Επίσκεψη στον Ναό της Αγίας Τριάδος, τη μεγαλύτερη ελληνική εκκλησία της Πόλης\n• Θέαση του ιστορικού Ζάππειου Λυκείου\n• Περίπατος κατά μήκος της Μεγάλης Λεωφόρου του Πέραν, με τα επιβλητικά νεοκλασικά κτήρια\n• Σισμανόγλειο Μέγαρο (Ελληνικό Προξενείο), Λύκειο Galatasaray, Καθολική Εκκλησία Αγίου Αντωνίου, Καθεδρικός Ναός Εισοδίων της Θεοτόκου\n• Πέρασμα από τη χαρακτηριστική Στοά των Λουλουδιών\n\nΗ περιήγηση ολοκληρώνεται στο εμβληματικό ξενοδοχείο Pera Palace, αγαπημένο των εκλεκτών ταξιδιωτών του θρυλικού «Orient Express».\n\nΔιανυκτέρευση στην Κωνσταντινούπολη.',
        day2: '2η Μέρα: Κωνσταντινούπολη – Χαλκηδόνα – Εκδρομή στα Πριγκηπονήσια\n\nΠρόγευμα και αναχώρηση προς την ασιατική πλευρά της Κωνσταντινούπολης.\n\nΔιάσχιση της κρεμαστής γέφυρας του Βοσπόρου, της πρώτης που ένωσε Ευρώπη και Ασία, με μοναδική θέα στις δύο ακτές\n\nΠανοραμική θέα στον Πύργο του Λεάνδρου και στο ιστορικό κέντρο της Πόλης\n\nΠρώτη στάση στη Χαλκηδόνα, από τις πιο αυθεντικές συνοικίες της ασιατικής όχθης:\n• Επίσκεψη στον Ναό Αγίας Ευφημίας, όπου πραγματοποιήθηκε η Δ\' Οικουμενική Σύνοδος\n\nΣτη συνέχεια επιβίβαση σε πλοιάριο για τα Πριγκηπονήσια:\n\n• Επίσκεψη στη Χάλκη, γνωστή για τη φημισμένη Θεολογική Σχολή\n• Επίσκεψη στην Πρίγκηπο, το μεγαλύτερο και πιο κοσμοπολίτικο νησί του συμπλέγματος\n\nΕλεύθερος χρόνος για:\n• Προαιρετικό γεύμα σε παραλιακή ταβέρνα\n• Βόλτα στα ήσυχα, νοσταλγικά σοκάκια\n• Θαυμασμό των παλιών αριστοκρατικών επαύλεων, πολλές από τις οποίες ανήκαν σε Έλληνες της Πόλης\n\nΕπιστροφή στην Κωνσταντινούπολη.\nΔιανυκτέρευση.',
        day3: '3η Μέρα: Κωνσταντινούπολη – Παλιά Πόλη – Αγία Σοφία – Τοπ Καπί – Βασιλική Στερνα – Κρουαζιέρα στο Βόσπορο\n\nΠρόγευμα και ολοήμερη γνωριμία με την ιστορική καρδιά της Πόλης.\n\nΣημεία που θα δούμε/επισκεφθούμε:\n\n• Αγία Σοφία, κορυφαίο αρχιτεκτονικό δημιούργημα της Βυζαντινής Αυτοκρατορίας και αιώνιο σύμβολο της Κωνσταντινούπολης\n• Μπλε Τζαμί (Σουλτάνου Αχμέτ), με τα υπέροχα γαλάζια πλακίδια στο εσωτερικό\n• Παλάτι Τοπ Καπί, παλιά κατοικία των Οθωμανών Σουλτάνων για περίπου 400 χρόνια, με μοναδική θέα προς Βόσπορο και Κεράτιο\n• Βασιλική Στέρνα του Ιουστινιανού, εντυπωσιακό υδραυλικό έργο με 336 κίονες και ιδιαίτερη ατμόσφαιρα\n• Θα δούμε και τις διάσημες κεφαλές της Μέδουσας\n\nΚατά τη διάρκεια της ημέρας γίνεται στάση για προαιρετικό γεύμα.\n\nΤο απόγευμα ακολουθεί κρουαζιέρα στον Βόσπορο:\n\n• Πλεύση ανάμεσα σε Ευρώπη & Ασία, στο θαλάσσιο πέρασμα που συνδέει Μαύρη Θάλασσα – Θάλασσα Μαρμαρά\n• Θέα στα κομψά ξύλινα yali, παραθαλάσσιες επαύλεις της παλιάς κωνσταντινουπολίτικης αριστοκρατίας\n• Θέα στον Πύργο του Γαλατά και στις εντυπωσιακές γέφυρες του Βοσπόρου\n\nΕπιστροφή στο ξενοδοχείο.\nΔιανυκτέρευση.',
        day4: '4η Μέρα: Ντολμά Μπαχτσέ – Αιγυπτιακή Αγορά – Κλειστή Αγορά (Καπαλί Τσαρσί)\n\nΠρόγευμα και αναχώρηση για:\n\nΑνάκτορα Ντολμά Μπαχτσέ, ένα από τα λαμπρότερα παλάτια της οθωμανικής περιόδου:\n• 285 δωμάτια, 46 σαλόνια\n• Πάνω από 35 τόνοι χρυσού χρησιμοποιήθηκαν στη διακόσμηση\n\nΣτη συνέχεια, επίσκεψη στην:\n• Αγορά των Μπαχαρικών (Αιγυπτιακή Αγορά)\n• Μπαχαρικά, λουκούμια, αποξηραμένα φρούτα, τσάγια και ανατολίτικες γεύσεις\n\nΈπειτα:\n• Μεταφορά στο θρυλικό Καπαλί Τσαρσί (Σκεπαστό Παζάρι)\n• Περίπου 100 στεγασμένοι δρόμοι\n• Πάνω από 4.000 μαγαζιά με κοσμήματα, κεραμικά, δερμάτινα, χαλιά, υφάσματα, αναμνηστικά κ.ά.\n\nΕπιστροφή στο ξενοδοχείο μετά το τέλος της περιήγησης.\nΔιανυκτέρευση.',
        day5: '5η Μέρα: Πατριαρχείο – Βλαχέρνα – Βαλουκλή – Αθήνα – Λάρνακα\n\nΠρόγευμα και αναχώρηση για μια ημέρα με έντονο ιστορικό και πνευματικό χαρακτήρα:\n\n• Επίσκεψη στο Οικουμενικό Πατριαρχείο\n• Προσκύνημα στον Πατριαρχικό Ναό Αγίου Γεωργίου\n• Θέαση της Κλειστής Πύλης και του χώρου μαρτυρίου του Πατριάρχη Γρηγορίου Ε\'\n• Επίσκεψη στην Παναγία των Βλαχερνών, έναν από τους ιερότερους τόπους της Ορθοδοξίας, όπου σύμφωνα με την παράδοση ψάλθηκε για πρώτη φορά ο Ακάθιστος Ύμνος\n• Επίσκεψη στην Ζωοδόχο Πηγή (Βαλουκλή) και στους Τάφους των Πατριαρχών\n\nΚατά τη διαδρομή θα δούμε:\n• Τα επιβλητικά Θεοδοσιανά Τείχη\n• Τη Χρυσή Πύλη του Βυζαντίου\n\nΣτη συνέχεια, μεταφορά στο αεροδρόμιο της Κωνσταντινούπολης για την πτήση επιστροφής στη Λάρνακα μέσω Αθήνας.'
      },
      gallery: [
        '/images/destinations/constanipole-hero.webp'
      ]
    }
  },
  {
    id: 27,
    title: 'ΒΑΡΣΟΒΙΑ & ΠΑΡΑΜΥΘΕΝΙΑ ΛΟΤΖ – 5 Μέρες',
    destination: 'Poland',
    category: 'Summer Packages',
    price: 965,
    duration: '5 days / 4 nights',
    description: 'Discover Warsaw, the dynamic capital of Poland, and Łódź, a fairy-tale city with industrial heritage transformed into a modern creative hub.',
    longDescription: 'Experience the heart of Poland with visits to Warsaw, the dynamic capital, and Łódź, a fairy-tale city that was once a major textile center. Explore the industrial heritage, modern urban aesthetics, and vibrant cultural life of these two fascinating Polish cities.',
    image: '🇵🇱',
    featured: true,
    details: {
      departureDate: '05/07, 12/07, 19/07, 26/07, 02/08, 09/08, 16/08, 23/08, 30/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Warsaw, Łódź, Poland',
      monthAvailability: 'July, August',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'LOT Polish Airlines',
      includedLuggage: '1 checked bag 23kg + 1 hand luggage 8kg',
      coverImage: '/images/destinations/warsaw-hero.webp',
      thumbnailImage: '/images/destinations/warsaw-thumb.webp',
      flights: [
        {
          direction: 'Departure',
          date: '05/07, 12/07, 19/07, 26/07, 02/08, 09/08, 16/08, 23/08, 30/08',
          route: 'Larnaca (LCA) → Warsaw (WAW)',
          flight: 'LO 172',
          time: '16:05 → 18:40',
          luggage: '1 checked bag'
        },
        {
          direction: 'Return',
          date: '05/07, 12/07, 19/07, 26/07, 02/08, 09/08, 16/08, 23/08, 30/08',
          route: 'Warsaw (WAW) → Larnaca (LCA)',
          flight: 'LO 171',
          time: '10:40 → 15:05',
          luggage: '1 checked bag'
        }
      ],
      hotels: [
        {
          name: 'Łódź Hotel – Łódź',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Łódź Hotel, Łódź, Poland',
          prices: {
            double: 965,
            single: 1139,
            child1: 835
          },
          departureDate: '05/07',
          packagePrice: 1930
        },
        {
          name: 'Warsaw Hotel – Warsaw',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Warsaw Hotel, Warsaw, Poland',
          prices: {
            double: 965,
            single: 1139,
            child1: 835
          },
          departureDate: '05/07',
          packagePrice: 1930
        },
        {
          name: 'Łódź Hotel – Łódź',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Łódź Hotel, Łódź, Poland',
          prices: {
            double: 965,
            single: 1139,
            child1: 835
          },
          departureDate: '12/07',
          packagePrice: 1930
        },
        {
          name: 'Warsaw Hotel – Warsaw',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Warsaw Hotel, Warsaw, Poland',
          prices: {
            double: 965,
            single: 1139,
            child1: 835
          },
          departureDate: '12/07',
          packagePrice: 1930
        },
        {
          name: 'Łódź Hotel – Łódź',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Łódź Hotel, Łódź, Poland',
          prices: {
            double: 965,
            single: 1139,
            child1: 835
          },
          departureDate: '19/07',
          packagePrice: 1930
        },
        {
          name: 'Warsaw Hotel – Warsaw',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Warsaw Hotel, Warsaw, Poland',
          prices: {
            double: 965,
            single: 1139,
            child1: 835
          },
          departureDate: '19/07',
          packagePrice: 1930
        },
        {
          name: 'Łódź Hotel – Łódź',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Łódź Hotel, Łódź, Poland',
          prices: {
            double: 995,
            single: 1169,
            child1: 855
          },
          departureDate: '26/07',
          packagePrice: 1990
        },
        {
          name: 'Warsaw Hotel – Warsaw',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Warsaw Hotel, Warsaw, Poland',
          prices: {
            double: 995,
            single: 1169,
            child1: 855
          },
          departureDate: '26/07',
          packagePrice: 1990
        },
        {
          name: 'Łódź Hotel – Łódź',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Łódź Hotel, Łódź, Poland',
          prices: {
            double: 995,
            single: 1169,
            child1: 855
          },
          departureDate: '02/08',
          packagePrice: 1990
        },
        {
          name: 'Warsaw Hotel – Warsaw',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Warsaw Hotel, Warsaw, Poland',
          prices: {
            double: 995,
            single: 1169,
            child1: 855
          },
          departureDate: '02/08',
          packagePrice: 1990
        },
        {
          name: 'Łódź Hotel – Łódź',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Łódź Hotel, Łódź, Poland',
          prices: {
            double: 995,
            single: 1169,
            child1: 855
          },
          departureDate: '09/08',
          packagePrice: 1990
        },
        {
          name: 'Warsaw Hotel – Warsaw',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Warsaw Hotel, Warsaw, Poland',
          prices: {
            double: 995,
            single: 1169,
            child1: 855
          },
          departureDate: '09/08',
          packagePrice: 1990
        },
        {
          name: 'Łódź Hotel – Łódź',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Łódź Hotel, Łódź, Poland',
          prices: {
            double: 995,
            single: 1169,
            child1: 855
          },
          departureDate: '16/08',
          packagePrice: 1990
        },
        {
          name: 'Warsaw Hotel – Warsaw',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Warsaw Hotel, Warsaw, Poland',
          prices: {
            double: 995,
            single: 1169,
            child1: 855
          },
          departureDate: '16/08',
          packagePrice: 1990
        },
        {
          name: 'Łódź Hotel – Łódź',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Łódź Hotel, Łódź, Poland',
          prices: {
            double: 995,
            single: 1169,
            child1: 855
          },
          departureDate: '23/08',
          packagePrice: 1990
        },
        {
          name: 'Warsaw Hotel – Warsaw',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Warsaw Hotel, Warsaw, Poland',
          prices: {
            double: 995,
            single: 1169,
            child1: 855
          },
          departureDate: '23/08',
          packagePrice: 1990
        },
        {
          name: 'Łódź Hotel – Łódź',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Łódź Hotel, Łódź, Poland',
          prices: {
            double: 965,
            single: 1139,
            child1: 835
          },
          departureDate: '30/08',
          packagePrice: 1930
        },
        {
          name: 'Warsaw Hotel – Warsaw',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Warsaw Hotel, Warsaw, Poland',
          prices: {
            double: 965,
            single: 1139,
            child1: 835
          },
          departureDate: '30/08',
          packagePrice: 1930
        }
      ],
      included: [
        'Αεροπορικό εισιτήριο Λάρνακα – Βαρσοβία – Λάρνακα με πτήσεις των Πολωνικών Αερογραμμών (LOT)',
        'Φόροι αεροδρομίων & επίναυλος καυσίμων',
        '2 διανυκτερεύσεις σε ξενοδοχείο 4★ στη Λοτζ με πρόγευμα',
        '2 διανυκτερεύσεις σε ξενοδοχείο 5★ στη Βαρσοβία με πρόγευμα',
        'Μεταφορές, εκδρομές & περιηγήσεις όπως αναφέρονται στο αναλυτικό πρόγραμμα',
        'Εισιτήριο εισόδου για το Παλάτι Πολιτισμού',
        'Τοπικός έμπειρος ελληνόφωνος αρχηγός / ξεναγός',
        'Μία αποσκευή 23kg και μία χειραποσκευή 8kg ανά άτομο',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Φαγητό & ποτό κατά τη διάρκεια των πτήσεων',
        'Δικαιώματα εισόδων σε χώρους επισκέψεων (όπου δεν αναφέρεται ότι περιλαμβάνονται)',
        'Οτιδήποτε δεν αναφέρεται ρητά στο πρόγραμμα ή αναφέρεται ως προαιρετικό ή προτεινόμενο'
      ],
      cancellationPolicy: 'Ακύρωση έως 45 ημέρες πριν την αναχώρηση: παρακράτηση €50,00 ανά άτομο (λειτουργικά έξοδα). Ακύρωση μεταξύ 44–31 ημερών: παρακράτηση 30% της αξίας του ταξιδιού. Ακύρωση μεταξύ 30–21 ημερών: παρακράτηση 50% της αξίας του ταξιδιού. Ακύρωση από 20 ημέρες πριν την αναχώρηση και έπειτα: παρακράτηση 100% της αξίας του ταξιδιού. Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, σκι, εκθέσεις, συνέδρια & παρεμφερείς διεθνείς εκδηλώσεις, τα ακυρωτικά φθάνουν έως 100%, ανεξαρτήτως ημερομηνίας ακύρωσης.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά την ώρα της κράτησης',
        'Με την κράτηση απαιτείται προκαταβολή 30% της αξίας του πακέτου',
        'Η εξόφληση γίνεται περίπου 21 ημέρες πριν την αναχώρηση',
        'Ακύρωση έως 45 ημέρες πριν την αναχώρηση: παρακράτηση €50,00 ανά άτομο (λειτουργικά έξοδα)',
        'Ακύρωση μεταξύ 44–31 ημερών: παρακράτηση 30% της αξίας του ταξιδιού',
        'Ακύρωση μεταξύ 30–21 ημερών: παρακράτηση 50% της αξίας του ταξιδιού',
        'Ακύρωση από 20 ημέρες πριν την αναχώρηση και έπειτα: παρακράτηση 100% της αξίας του ταξιδιού',
        'Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, σκι, εκθέσεις, συνέδρια & παρεμφερείς διεθνείς εκδηλώσεις, τα ακυρωτικά φθάνουν έως 100%, ανεξαρτήτως ημερομηνίας ακύρωσης'
      ],
      program: {
        introduction: 'ΒΑΡΣΟΒΙΑ & ΠΑΡΑΜΥΘΕΝΙΑ ΛΟΤΖ – 5 Μέρες\n\nΜια μοναδική εκδρομή στην καρδιά της Πολωνίας, ανάμεσα στη βιομηχανική γοητεία της Λοτζ και την αρχοντική, ζωντανή Βαρσοβία. Εξερευνήστε την ιστορική κληρονομιά, τη σύγχρονη αισθητική και τη ζωντανή πολιτιστική ζωή αυτών των δύο συναρπαστικών πολωνικών πόλεων.',
        day1: '1η Μέρα: Λάρνακα – Βαρσοβία – Λοτζ\n\nΚάθε ταξίδι έχει τη δική του ιστορία… και κάποια μένουν βαθιά χαραγμένα στην ψυχή μας. Η Πολωνία είναι σίγουρα ένα από αυτά!\n\nΣυγκέντρωση στο αεροδρόμιο Λάρνακας και αναχώρηση για τη δυναμική πρωτεύουσα της Πολωνίας, τη Βαρσοβία. Άφιξη και άμεση αναχώρηση οδικώς για τη Λοτζ (Łódź).\n\nΆφιξη, μεταφορά στο ξενοδοχείο, τακτοποίηση στα δωμάτια και χρόνος ελεύθερος για ξεκούραση ή μια πρώτη βόλτα στην πόλη.\n\nΔιανυκτέρευση στη Λοτζ.',
        day2: '2η Μέρα: Λοτζ – Ξενάγηση\n\nΠρόγευμα και αναχώρηση για ξενάγηση στη Λοτζ, μια πόλη που μπορεί να μην είναι τόσο γνωστή, αλλά κρύβει έναν μοναδικό χαρακτήρα και συναρπαστική ιστορία.\n\nΓια περισσότερα από 100 χρόνια υπήρξε ένα από τα σημαντικότερα κέντρα κλωστοϋφαντουργίας στην Ευρώπη, με τεράστια βιομηχανική ανάπτυξη και μεγάλα εργοστάσια που διαμόρφωσαν την εικόνα της. Σήμερα, η Λοτζ έχει μεταμορφωθεί σε μια σύγχρονη, δημιουργική πόλη, όπου η βιομηχανική κληρονομιά συνυπάρχει με την urban αισθητική, την τέχνη και τη ζωντανή πολιτιστική ζωή.\n\nΚατά τη διάρκεια της ξενάγησης θα δούμε:\n\n• Την περίφημη οδό Piotrkowska, έναν από τους πιο μακρούς και ζωντανούς εμπορικούς πεζόδρομους της Ευρώπης, γεμάτη καφέ, εστιατόρια, παμπ και όμορφα κτίρια\n• Το Walk of Fame, με αστέρια αφιερωμένα σε σημαντικούς Πολωνούς ηθοποιούς και σκηνοθέτες, που θυμίζει τη στενή σχέση της Λοτζ με τον κινηματογράφο\n• Το εντυπωσιακό Manufaktura, παλιό εργοστάσιο κλωστοϋφαντουργίας που έχει μετατραπεί σε εντυπωσιακό συγκρότημα αγορών και ψυχαγωγίας – παράδειγμα αστικής αναγέννησης\n• Το επιβλητικό Παλάτι του Izrael Poznański, ένα από τα πιο εντυπωσιακά αρχοντικά της Πολωνίας, με πολυτελείς αυθεντικούς εσωτερικούς χώρους που μαρτυρούν τον πλούτο και τη λάμψη της εποχής των μεγάλων βιομηχάνων\n\nΕπιστροφή στο ξενοδοχείο.\nΔιανυκτέρευση στη Λοτζ.',
        day3: '3η Μέρα: Λοτζ – Βαρσοβία (βραδινή περιήγηση)\n\nΠρόγευμα και ελεύθερος χρόνος στη Λοτζ.\n\nΤο μεσημέρι αναχώρηση για Βαρσοβία. Η πόλη μας υποδέχεται με το αναστηλωμένο ιστορικό της κέντρο, τα πολύχρωμα κτίρια, τις φαρδιές λεωφόρους και τα καταπράσινα πάρκα που δίνουν την αίσθηση άνεσης σε μια σύγχρονη ευρωπαϊκή μητρόπολη.\n\nΗ γοητεία της Βαρσοβίας κρύβεται στις αντιθέσεις της: η ιστορία και η μνήμη από τη μία, το νεανικό και σύγχρονο πρόσωπο από την άλλη, με έντονη πολιτιστική ζωή και ζωντανό παλμό.\n\nΆφιξη, μεταφορά στο ξενοδοχείο και τακτοποίηση.\n\nΤο απόγευμα/βράδυ:\n\n• Περιπατητική ξενάγηση στο φωτισμένο κέντρο της πόλης\n• Επίσκεψη στο Multimedia Fountain Park (ανάλογα με τις καιρικές συνθήκες και τη λειτουργία), για να απολαύσουμε παράσταση φωτός, μουσικής και νερού\n• Ανάβαση στον Varso Tower, ένα από τα πιο σύγχρονα ορόσημα της Βαρσοβίας, με πανοραμική θέα της πόλης τη νύχτα – ιδανικό κλείσιμο της ημέρας\n\nΔιανυκτέρευση στη Βαρσοβία.',
        day4: '4η Μέρα: Βαρσοβία – Ξενάγηση Πόλης\n\nΠρόγευμα και αναχώρηση για περιπατητική ξενάγηση στα σημαντικότερα σημεία της πόλης.\n\nΚατά τη διάρκεια της ξενάγησης θα δούμε:\n\n• Βασιλικό Κάστρο & Πλατεία του Κάστρου, με τη Στήλη του Σίγκισμουντ στο κέντρο\n• Το Μεγάλο Θέατρο, έδρα της όπερας και του μπαλέτου\n• Το μπαρόκ Παλάτι Κρασίνσκι, ένα από τα πιο κομψά παλάτια της πρωτεύουσας\n• Τους Βασιλικούς Κήπους\n• Το ιστορικό Εβραϊκό Γκέτο, που κρατά ζωντανή τη μνήμη του Β\' Παγκοσμίου Πολέμου\n• Το σπίτι της Μαρίας Σκλοντόφσκα-Κιουρί\n• Το άγαλμα του Φρεντερίκ Σοπέν, εθνικού συνθέτη της Πολωνίας\n\nΗ περιήγηση ολοκληρώνεται στο πανέμορφο Πάρκο Λαζιένσκι, όπου θα θαυμάσουμε το εμβληματικό Παλάτι πάνω στο Νερό – ένα από τα πιο φωτογραφημένα σημεία της Βαρσοβίας.\n\nΣτον ελεύθερο χρόνο σας προτείνεται:\n• Βόλτα στα στενά της Παλιάς Πόλης με μπαρ, καφέ και εστιατόρια\n• Στάση για ζεστή σοκολάτα στην ιστορική σοκολατερί Wedel\n\nΔιανυκτέρευση στη Βαρσοβία.',
        day5: '5η Μέρα: Βαρσοβία – Λάρνακα\n\nΠρόγευμα και στη συνέχεια μεταφορά στο αεροδρόμιο της Βαρσοβίας για την πτήση επιστροφής στη Λάρνακα.\n\nΑναχώρηση με αποσκευές γεμάτες εικόνες, εμπειρίες και αναμνήσεις από ένα ταξίδι στην καρδιά της Πολωνίας, ανάμεσα στη βιομηχανική γοητεία της Λοτζ και την αρχοντική, ζωντανή Βαρσοβία.'
      },
      gallery: [
        '/images/destinations/warsaw-hero.webp'
      ]
    }
  },
  {
    id: 28,
    title: 'ΒΑΡΚΕΛΩΝΗ & PORT AVENTURA – 5 Μέρες',
    destination: 'Spain',
    category: 'Summer Packages',
    price: 1085,
    duration: '5 days / 4 nights',
    description: 'Discover Barcelona, one of Spain\'s most cosmopolitan and charming cities, and visit the famous PortAventura theme park.',
    longDescription: 'Experience Barcelona, one of Spain\'s most cosmopolitan and charming cities. Explore its unique architecture, rich artistic heritage, historic monuments, and vibrant life. Visit the famous PortAventura theme park, one of Europe\'s largest and most impressive theme parks, ideal for all ages.',
    image: '🇪🇸',
    featured: true,
    details: {
      departureDate: '01/07, 08/07, 15/07, 22/07, 29/07, 05/08, 12/08, 19/08, 26/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Barcelona, PortAventura, Spain',
      monthAvailability: 'July, August',
      roomType: 'Standard Room / Family Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Cyprus Airways',
      includedLuggage: '1 checked bag 23kg + 1 hand luggage 10kg',
      coverImage: '/images/destinations/barcelona-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '01/07, 08/07, 15/07, 22/07, 29/07, 05/08, 12/08, 19/08, 26/08',
          route: 'Larnaca (LCA) → Barcelona (BCN)',
          flight: 'CY 322',
          time: '07:00 → 10:30',
          luggage: '1 checked bag'
        },
        {
          direction: 'Return',
          date: '01/07, 08/07, 15/07, 22/07, 29/07, 05/08, 12/08, 19/08, 26/08',
          route: 'Barcelona (BCN) → Larnaca (LCA)',
          flight: 'CY 323',
          time: '11:30 → 16:20',
          luggage: '1 checked bag'
        }
      ],
      hotels: [
        // Hotel 1: ApartHotel Atenea 4★ - Family Room for 4 Pax
        {
          name: 'ApartHotel Atenea – Barcelona',
          stars: 4,
          roomType: 'Family Room for 4 Pax',
          boardBasis: 'Bed and Breakfast',
          image: '/images/destinations/apartHotel-atene-barcelona.webp',
          location: 'Joan Güell, 207-211 , Barcelona, 08028, Barcelona, Spain',
          prices: {
            double: 1085,
            triple: 1085,
            child1: 1055,
            child2: 1055
          },
          departureDate: '01/07',
          packagePrice: 2170
        },
        {
          name: 'ApartHotel Atenea – Barcelona',
          stars: 4,
          roomType: 'Family Room for 4 Pax',
          boardBasis: 'Bed and Breakfast',
          image: '/images/destinations/apartHotel-atene-barcelona.webp',
          location: 'Joan Güell, 207-211 , Barcelona, 08028, Barcelona, Spain',
          prices: {
            double: 1085,
            triple: 1085,
            child1: 1055,
            child2: 1055
          },
          departureDate: '08/07',
          packagePrice: 2170
        },
        {
          name: 'ApartHotel Atenea – Barcelona',
          stars: 4,
          roomType: 'Family Room for 4 Pax',
          boardBasis: 'Bed and Breakfast',
          image: '/images/destinations/apartHotel-atene-barcelona.webp',
          location: 'Joan Güell, 207-211 , Barcelona, 08028, Barcelona, Spain',
          prices: {
            double: 1085,
            triple: 1085,
            child1: 1055,
            child2: 1055
          },
          departureDate: '22/07',
          packagePrice: 2170
        },
        {
          name: 'ApartHotel Atenea – Barcelona',
          stars: 4,
          roomType: 'Family Room for 4 Pax',
          boardBasis: 'Bed and Breakfast',
          image: '/images/destinations/apartHotel-atene-barcelona.webp',
          location: 'Joan Güell, 207-211 , Barcelona, 08028, Barcelona, Spain',
          prices: {
            double: 1085,
            triple: 1085,
            child1: 1055,
            child2: 1055
          },
          departureDate: '05/08',
          packagePrice: 2170
        },
        {
          name: 'ApartHotel Atenea – Barcelona',
          stars: 4,
          roomType: 'Family Room for 4 Pax',
          boardBasis: 'Bed and Breakfast',
          image: '/images/destinations/apartHotel-atene-barcelona.webp',
          location: 'Joan Güell, 207-211 , Barcelona, 08028, Barcelona, Spain',
          prices: {
            double: 1085,
            triple: 1085,
            child1: 1055,
            child2: 1055
          },
          departureDate: '19/08',
          packagePrice: 2170
        },
        {
          name: 'ApartHotel Atenea – Barcelona',
          stars: 4,
          roomType: 'Family Room for 4 Pax',
          boardBasis: 'Bed and Breakfast',
          image: '/images/destinations/apartHotel-atene-barcelona.webp',
          location: 'Joan Güell, 207-211 , Barcelona, 08028, Barcelona, Spain',
          prices: {
            double: 1085,
            triple: 1085,
            child1: 1055,
            child2: 1055
          },
          departureDate: '26/08',
          packagePrice: 2170
        },
        {
          name: 'ApartHotel Atenea – Barcelona',
          stars: 4,
          roomType: 'Family Room for 4 Pax',
          boardBasis: 'Bed and Breakfast',
          image: '/images/destinations/apartHotel-atene-barcelona.webp',
          location: 'Joan Güell, 207-211 , Barcelona, 08028, Barcelona, Spain',
          prices: {
            double: 1115,
            triple: 1115,
            child1: 1075,
            child2: 1075
          },
          departureDate: '15/07',
          packagePrice: 2230
        },
        {
          name: 'ApartHotel Atenea – Barcelona',
          stars: 4,
          roomType: 'Family Room for 4 Pax',
          boardBasis: 'Bed and Breakfast',
          image: '/images/destinations/apartHotel-atene-barcelona.webp',
          location: 'Joan Güell, 207-211 , Barcelona, 08028, Barcelona, Spain',
          prices: {
            double: 1115,
            triple: 1115,
            child1: 1075,
            child2: 1075
          },
          departureDate: '29/07',
          packagePrice: 2230
        },
        {
          name: 'ApartHotel Atenea – Barcelona',
          stars: 4,
          roomType: 'Family Room for 4 Pax',
          boardBasis: 'Bed and Breakfast',
          image: '/images/destinations/apartHotel-atene-barcelona.webp',
          location: 'Joan Güell, 207-211 , Barcelona, 08028, Barcelona, Spain',
          prices: {
            double: 1115,
            triple: 1115,
            child1: 1075,
            child2: 1075
          },
          departureDate: '12/08',
          packagePrice: 2230
        },
        // Hotel 2: HCC Regente Hotel 4★ - Standard Room
        {
          name: 'HCC Regente Hotel – Barcelona',
          stars: 4,
          roomType: 'Standard Room',
          boardBasis: 'Bed and Breakfast',
          image: '/images/destinations/hcc-regente-hotel-barcelona.webp',
          location: 'Rambla Catalunya, 76 – Barcelona, 08008, Barcelona, Spain',
          prices: {
            double: 1155,
            single: 1465,
            child1: 999
          },
          departureDate: '15/07',
          packagePrice: 2310
        },
        {
          name: 'HCC Regente Hotel – Barcelona',
          stars: 4,
          roomType: 'Standard Room',
          boardBasis: 'Bed and Breakfast',
          image: '/images/destinations/hcc-regente-hotel-barcelona.webp',
          location: 'Rambla Catalunya, 76 – Barcelona, 08008, Barcelona, Spain',
          prices: {
            double: 1155,
            single: 1465,
            child1: 999
          },
          departureDate: '29/07',
          packagePrice: 2310
        },
        {
          name: 'HCC Regente Hotel – Barcelona',
          stars: 4,
          roomType: 'Standard Room',
          boardBasis: 'Bed and Breakfast',
          image: '/images/destinations/hcc-regente-hotel-barcelona.webp',
          location: 'Rambla Catalunya, 76 – Barcelona, 08008, Barcelona, Spain',
          prices: {
            double: 1155,
            single: 1465,
            child1: 999
          },
          departureDate: '12/08',
          packagePrice: 2310
        },
        // Hotel 3: Catalonia Atenas Hotel 4★ - Standard Room
        {
          name: 'Catalonia Atenas Hotel – Barcelona',
          stars: 4,
          roomType: 'Standard Room',
          boardBasis: 'Bed and Breakfast',
          image: '/images/destinations/catalonia-atenas-hotel-barcelona.webp',
          location: 'Avenida Meridiana, 151, Sant Martí, 08026, Barcelona, Spain',
          prices: {
            double: 1195,
            single: 1589,
            child1: 1115
          },
          departureDate: '01/07',
          packagePrice: 2390
        },
        {
          name: 'Catalonia Atenas Hotel – Barcelona',
          stars: 4,
          roomType: 'Standard Room',
          boardBasis: 'Bed and Breakfast',
          image: '/images/destinations/catalonia-atenas-hotel-barcelona.webp',
          location: 'Avenida Meridiana, 151, Sant Martí, 08026, Barcelona, Spain',
          prices: {
            double: 1195,
            single: 1589,
            child1: 1115
          },
          departureDate: '08/07',
          packagePrice: 2390
        },
        {
          name: 'Catalonia Atenas Hotel – Barcelona',
          stars: 4,
          roomType: 'Standard Room',
          boardBasis: 'Bed and Breakfast',
          image: '/images/destinations/catalonia-atenas-hotel-barcelona.webp',
          location: 'Avenida Meridiana, 151, Sant Martí, 08026, Barcelona, Spain',
          prices: {
            double: 1195,
            single: 1589,
            child1: 1115
          },
          departureDate: '22/07',
          packagePrice: 2390
        },
        {
          name: 'Catalonia Atenas Hotel – Barcelona',
          stars: 4,
          roomType: 'Standard Room',
          boardBasis: 'Bed and Breakfast',
          image: '/images/destinations/catalonia-atenas-hotel-barcelona.webp',
          location: 'Avenida Meridiana, 151, Sant Martí, 08026, Barcelona, Spain',
          prices: {
            double: 1195,
            single: 1589,
            child1: 1115
          },
          departureDate: '05/08',
          packagePrice: 2390
        },
        {
          name: 'Catalonia Atenas Hotel – Barcelona',
          stars: 4,
          roomType: 'Standard Room',
          boardBasis: 'Bed and Breakfast',
          image: '/images/destinations/catalonia-atenas-hotel-barcelona.webp',
          location: 'Avenida Meridiana, 151, Sant Martí, 08026, Barcelona, Spain',
          prices: {
            double: 1195,
            single: 1589,
            child1: 1115
          },
          departureDate: '19/08',
          packagePrice: 2390
        },
        {
          name: 'Catalonia Atenas Hotel – Barcelona',
          stars: 4,
          roomType: 'Standard Room',
          boardBasis: 'Bed and Breakfast',
          image: '/images/destinations/catalonia-atenas-hotel-barcelona.webp',
          location: 'Avenida Meridiana, 151, Sant Martí, 08026, Barcelona, Spain',
          prices: {
            double: 1195,
            single: 1589,
            child1: 1115
          },
          departureDate: '26/08',
          packagePrice: 2390
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Βαρκελώνη – Λάρνακα με πτήσεις Cyprus Airways',
        'Φόροι αεροδρομίων',
        'Διαμονή σε ξενοδοχεία ή διαμερίσματα 4★ με πρόγευμα',
        'Μεταφορές, εκδρομές, περιηγήσεις & ξεναγήσεις όπως αναφέρονται στο πρόγραμμα',
        'Έμπειρος τοπικός ελληνόφωνος αρχηγός / συνοδός',
        'Εισιτήριο εισόδου στο πάρκο PortAventura',
        'Μία αποσκευή 23 κιλών και μία χειραποσκευή 10 κιλών ανά άτομο',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Δικαιώματα εισόδων σε προαιρετικά αξιοθέατα / εκδρομές',
        'Αχθοφορικά & φιλοδωρήματα',
        'Ό,τι δεν αναφέρεται ρητά στο πρόγραμμα ή αναφέρεται ως προαιρετικό ή προτεινόμενο'
      ],
      cancellationPolicy: 'Ακύρωση έως 45 ημέρες πριν την αναχώρηση: παρακράτηση €50,00 ανά άτομο (λειτουργικά έξοδα). Ακύρωση μεταξύ 44–31 ημερών: παρακράτηση 30% της αξίας του ταξιδιού. Ακύρωση μεταξύ 30–21 ημερών: παρακράτηση 50% της αξίας του ταξιδιού. Ακύρωση από 20 ημέρες πριν την αναχώρηση και έπειτα: παρακράτηση 100% της αξίας του ταξιδιού. Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, σκι, εκθέσεις, συνέδρια & παρεμφερείς διεθνείς εκδηλώσεις, τα ακυρωτικά φθάνουν έως 100%, ανεξαρτήτως ημερομηνίας ακύρωσης.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά την ώρα της κράτησης',
        'Με την κράτηση απαιτείται προκαταβολή 30% της αξίας του πακέτου',
        'Η εξόφληση γίνεται περίπου 21 ημέρες πριν την αναχώρηση',
        'Προαιρετική εκδρομή στο Μοντσεράτ: €50 ανά άτομο (ελάχιστος αριθμός συμμετοχών: 20 άτομα)',
        'Ακύρωση έως 45 ημέρες πριν την αναχώρηση: παρακράτηση €50,00 ανά άτομο (λειτουργικά έξοδα)',
        'Ακύρωση μεταξύ 44–31 ημερών: παρακράτηση 30% της αξίας του ταξιδιού',
        'Ακύρωση μεταξύ 30–21 ημερών: παρακράτηση 50% της αξίας του ταξιδιού',
        'Ακύρωση από 20 ημέρες πριν την αναχώρηση και έπειτα: παρακράτηση 100% της αξίας του ταξιδιού',
        'Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, σκι, εκθέσεις, συνέδρια & παρεμφερείς διεθνείς εκδηλώσεις, τα ακυρωτικά φθάνουν έως 100%, ανεξαρτήτως ημερομηνίας ακύρωσης'
      ],
      program: {
        introduction: 'ΒΑΡΚΕΛΩΝΗ & PORT AVENTURA – 5 Μέρες\n\nΜια μοναδική εκδρομή στη Βαρκελώνη, μία από τις πιο κοσμοπολίτικες και γοητευτικές πόλεις της Ισπανίας. Εξερευνήστε τη μοναδική αρχιτεκτονική της, την πλούσια καλλιτεχνική κληρονομιά, τα ιστορικά μνημεία και απολαύστε επίσκεψη στο περίφημο θεματικό πάρκο PortAventura.',
        day1: '1η Μέρα: Λάρνακα – Βαρκελώνη\n\nΒαρκελώνη! Μία από τις πιο κοσμοπολίτικες και γοητευτικές πόλεις της Ισπανίας. Η μοναδική αρχιτεκτονική της, η πλούσια καλλιτεχνική κληρονομιά, τα ιστορικά μνημεία και η αστείρευτη ζωντάνια της την καθιστούν πραγματικό στολίδι της Καταλονίας.\n\nΑναχώρηση από το αεροδρόμιο Λάρνακας με απευθείας πτήση της Cyprus Airways προς Βαρκελώνη. Άφιξη, υποδοχή από τους τοπικούς συνεργάτες μας και μεταφορά στο ξενοδοχείο.\n\nΤακτοποίηση στα δωμάτια και χρόνος ελεύθερος για μια πρώτη γνωριμία με την πόλη ή ξεκούραση.\n\nΔιανυκτέρευση στη Βαρκελώνη.',
        day2: '2η Μέρα: Βαρκελώνη – Πανοραμική Ξενάγηση\n\nΠρόγευμα και αναχώρηση για την πανοραμική μας ξενάγηση σε μία πόλη που συνδυάζει αρμονικά ιστορία, τέχνη και σύγχρονη ζωή.\n\nΚατά τη διάρκεια της ξενάγησης θα δούμε:\n\n• Την εντυπωσιακή Plaza España, από τις σημαντικότερες πλατείες της πόλης\n• Τον λόφο Montjuïc, με τις Ολυμπιακές εγκαταστάσεις του 1992 και μοναδική πανοραμική θέα προς την πόλη και το λιμάνι\n• Τον Passeig de Colón και την παραθαλάσσια συνοικία Barceloneta, γνωστή για τις παραλίες και τις παραδοσιακές ψαροταβέρνες\n• Στάση στη διάσημη Sagrada Familia, το αριστούργημα του Αντόνι Γκαουντί\n• Περιήγηση στο ιστορικό Barri Gòtic (Γοτθική συνοικία), με τα μεσαιωνικά σοκάκια και τις γραφικές πλατείες\n• Επίσκεψη στην εκκλησία Santa Maria del Mar (Παναγία της Θάλασσας)\n\nΤο απόγευμα είναι ελεύθερο για βόλτες, καφέ, τάπας ή αγορές στις εμπορικές περιοχές της πόλης.\n\nΔιανυκτέρευση στη Βαρκελώνη.',
        day3: '3η Μέρα: Βαρκελώνη – PortAventura\n\nΠρόγευμα και αναχώρηση για το περίφημο θεματικό πάρκο PortAventura, στο παραθαλάσσιο Σαλού – ένα από τα μεγαλύτερα και πιο εντυπωσιακά θεματικά πάρκα της Ευρώπης, ιδανικό για μικρούς και μεγάλους.\n\nΤο πάρκο είναι χωρισμένο σε πέντε θεματικές ενότητες:\n• Μεσόγειος\n• Πολυνησία\n• Κίνα\n• Μεξικό\n• Άγρια Δύση\n\nΚατά την επίσκεψή σας θα έχετε την ευκαιρία να:\n\n• «Ταξιδέψετε» σε διαφορετικούς πολιτισμούς μέσα από θεματικές περιοχές\n• Απολαύσετε εντυπωσιακά roller coasters (με ταχύτητες έως και 135 km/h)\n• Ζήσετε δυνατές εμπειρίες όπως το Temple of Fire\n• Δείτε θεματικά σόου, παραστάσεις και animators\n• Κάνετε αγορές στα καταστήματα του πάρκου και να δοκιμάσετε γεύσεις στα θεματικά εστιατόρια\n\nΤο απόγευμα επιστροφή στη Βαρκελώνη.\nΔιανυκτέρευση στη Βαρκελώνη.',
        day4: '4η Μέρα: Βαρκελώνη – Μοντσεράτ (προαιρετική εκδρομή)\n\nΠρωινό και ημέρα ελεύθερη στη Βαρκελώνη. Για όσους το επιθυμούν, προαιρετικά:\n\n🔸 Εκδρομή στο επιβλητικό Μοντσεράτ\n\nΜία από τις πιο ξεχωριστές εμπειρίες της Καταλονίας, συνδυασμός φυσικής ομορφιάς και πνευματικότητας.\n\n• Το βουνό Μοντσεράτ ξεχωρίζει για τους εντυπωσιακούς βραχώδεις σχηματισμούς του, που μοιάζουν σμιλευμένοι από καλλιτέχνη της φύσης\n• Απόκρημνες όψεις και κορυφές που θυμίζουν μεσαιωνικό φρούριο, προσφέρουν μοναδικές εικόνες και πανοραμικές φωτογραφίες\n• Σε αυτό το σκηνικό βρίσκεται το φημισμένο Μοναστήρι του Μοντσεράτ (Abadia de Montserrat), ένα από τα σημαντικότερα προσκυνήματα της Ισπανίας (11ος αιώνας), σύμβολο πίστης και πολιτισμού\n• Σήμερα φιλοξενεί περίπου 80 Βενεδικτίνους μοναχούς, με πλούσιο πνευματικό και πολιτιστικό έργο (εκδόσεις, μελέτες, θεολογία)\n\nΚατά την επίσκεψή σας θα έχετε χρόνο να:\n• Περιηγηθείτε στους χώρους του μοναστηριού\n• Απολαύσετε την ιδιαίτερη ατμόσφαιρα του τόπου\n• Χαρείτε την υπέροχη θέα προς την καταλανική ύπαιθρο\n\nΕπιστροφή το μεσημέρι στη Βαρκελώνη και υπόλοιπο ημέρας ελεύθερο.\nΔιανυκτέρευση στη Βαρκελώνη.',
        day5: '5η Μέρα: Βαρκελώνη – Λάρνακα\n\nΠρόγευμα και ελεύθερος χρόνος, ανάλογα με την πτήση. Στη συνέχεια, μεταφορά στο αεροδρόμιο για την πτήση επιστροφής στη Λάρνακα.\n\nΗ εκδρομή ολοκληρώνεται, αφήνοντας υπέροχες αναμνήσεις από τη ζωντανή Βαρκελώνη και το μαγικό κόσμο του PortAventura.'
      },
      gallery: [
        '/images/destinations/barcelona-hero.webp'
      ]
    }
  },
  {
    id: 29,
    title: 'ΠΑΡΙΣΙ & DISNEYLAND – 5 Μέρες',
    destination: 'France',
    category: 'Summer Packages',
    price: 1145,
    duration: '5 days / 4 nights',
    description: 'Discover Paris, the City of Light, and experience the magic of Disneyland Paris with this 5-day tour.',
    longDescription: 'Experience why the French capital has inspired artists and writers throughout the centuries. The iconic landmarks – Eiffel Tower, Notre-Dame, Louvre, Arc de Triomphe – combine with the modern side of the city. Enjoy a Seine cruise, visit Montmartre, and spend a magical day at Disneyland Paris.',
    image: '🇫🇷',
    featured: true,
    details: {
      departureDate: '04/07, 11/07, 18/07, 25/07, 01/08, 08/08, 15/08, 22/08, 29/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Paris, Disneyland, France',
      monthAvailability: 'July, August',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Cyprus Airways',
      includedLuggage: '1 checked bag 23kg + 1 hand luggage 10kg',
      coverImage: '/images/destinations/paris-hero.webp',
      thumbnailImage: '/images/destinations/paris-disneyland.webp',
      flights: [
        {
          direction: 'Departure',
          date: '04/07, 11/07, 18/07, 25/07, 01/08, 08/08, 15/08, 22/08, 29/08',
          route: 'Larnaca (LCA) → Paris (CDG)',
          flight: 'CY 380',
          time: '08:00 → 11:40',
          luggage: '1 checked bag'
        },
        {
          direction: 'Return',
          date: '04/07, 11/07, 18/07, 25/07, 01/08, 08/08, 15/08, 22/08, 29/08',
          route: 'Paris (CDG) → Larnaca (LCA)',
          flight: 'CY 381',
          time: '12:40 → 17:50',
          luggage: '1 checked bag'
        }
      ],
      hotels: [
        // Period 1: 04/07, 29/08 - NOVOTEL LA DEFENSE
        {
          name: 'Novotel La Defense – Paris',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/paris-hotel.webp',
          location: 'Novotel La Defense, Paris, France',
          prices: {
            double: 1199,
            single: 1479,
            child1: 949,
            child2: 949
          },
          departureDate: '04/07',
          packagePrice: 2398
        },
        {
          name: 'Novotel La Defense – Paris',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/paris-hotel.webp',
          location: 'Novotel La Defense, Paris, France',
          prices: {
            double: 1199,
            single: 1479,
            child1: 949,
            child2: 949
          },
          departureDate: '29/08',
          packagePrice: 2398
        },
        // Period 2: 11/07, 18/07, 25/07
        {
          name: 'Novotel La Defense – Paris',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/paris-hotel.webp',
          location: 'Novotel La Defense, Paris, France',
          prices: {
            double: 1145,
            single: 1415,
            child1: 1019,
            child2: 1019
          },
          departureDate: '11/07',
          packagePrice: 2290
        },
        {
          name: 'VOCO Porte de Clichy – Paris',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/paris-vorco-hotel.webp',
          location: 'VOCO Porte de Clichy, Paris, France',
          prices: {
            double: 1145,
            single: 1415,
            child1: 1019,
            child2: 1019
          },
          departureDate: '18/07',
          packagePrice: 2290
        },
        {
          name: 'Novotel La Defense – Paris',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/paris-hotel.webp',
          location: 'Novotel La Defense, Paris, France',
          prices: {
            double: 1145,
            single: 1415,
            child1: 1019,
            child2: 1019
          },
          departureDate: '25/07',
          packagePrice: 2290
        },
        // Period 3: 01/08, 08/08, 15/08, 22/08 - NOVOTEL LA DEFENSE
        {
          name: 'Novotel La Defense – Paris',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/paris-hotel.webp',
          location: 'Novotel La Defense, Paris, France',
          prices: {
            double: 1175,
            single: 1445,
            child1: 1039,
            child2: 1039
          },
          departureDate: '01/08',
          packagePrice: 2350
        },
        {
          name: 'Novotel La Defense – Paris',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/paris-hotel.webp',
          location: 'Novotel La Defense, Paris, France',
          prices: {
            double: 1175,
            single: 1445,
            child1: 1039,
            child2: 1039
          },
          departureDate: '08/08',
          packagePrice: 2350
        },
        {
          name: 'Novotel La Defense – Paris',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/paris-hotel.webp',
          location: 'Novotel La Defense, Paris, France',
          prices: {
            double: 1175,
            single: 1445,
            child1: 1039,
            child2: 1039
          },
          departureDate: '15/08',
          packagePrice: 2350
        },
        {
          name: 'Novotel La Defense – Paris',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/paris-hotel.webp',
          location: 'Novotel La Defense, Paris, France',
          prices: {
            double: 1175,
            single: 1445,
            child1: 1039,
            child2: 1039
          },
          departureDate: '22/08',
          packagePrice: 2350
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Παρίσι – Λάρνακα με απευθείας πτήση Cyprus Airways',
        'Φόροι αεροδρομίων',
        'Μίνι κρουαζιέρα στον Σηκουάνα',
        'Διαμονή 4 βράδια σε ξενοδοχείο 4★ στο Παρίσι με πρόγευμα',
        'Εισιτήριο εισόδου για 1 πάρκο της Disneyland (Disneyland Park ή Walt Disney Studios, ανάλογα με την επιλογή κατά την κράτηση)',
        'Μεταφορές, εκδρομές, περιηγήσεις & ξεναγήσεις όπως αναφέρονται στο πρόγραμμα',
        'Δημοτικός φόρος ξενοδοχείου',
        'Αρχηγός / συνοδός του γραφείου μας',
        'Μία αποσκευή 23 κιλών + μία χειραποσκευή 10 κιλών ανά άτομο',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Δικαιώματα εισόδων σε προαιρετικά αξιοθέατα / μουσεία',
        'Οτιδήποτε δεν αναφέρεται ρητά στο πρόγραμμα ή αναφέρεται ως προαιρετικό ή προτεινόμενο'
      ],
      cancellationPolicy: 'Ακύρωση έως 45 ημέρες πριν: παρακράτηση €50 ανά άτομο (λειτουργικά έξοδα). Ακύρωση μεταξύ 44–31 ημερών: παρακράτηση 30% της αξίας του ταξιδιού. Ακύρωση μεταξύ 30–21 ημερών: παρακράτηση 50% της αξίας του ταξιδιού. Ακύρωση από 20 ημέρες πριν την αναχώρηση και μετά: παρακράτηση 100% της αξίας του ταξιδιού. Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, σκι, εκθέσεις, συνέδρια & παρεμφερείς διεθνείς εκδηλώσεις, τα ακυρωτικά φθάνουν έως 100% ανεξαρτήτως ημερομηνίας ακύρωσης.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά την ώρα της κράτησης',
        'Με την κράτηση απαιτείται προκαταβολή 30% της αξίας του πακέτου',
        'Η εξόφληση γίνεται περίπου 21 ημέρες πριν την αναχώρηση',
        'Σημείωση: Το VOCO Porte de Clichy 4★ (για 18/07) δεν διαθέτει τετράκλινα δωμάτια, οπότε δίνονται δύο δίκλινα δίπλα-δίπλα για οικογένειες',
        'Ακύρωση έως 45 ημέρες πριν: παρακράτηση €50 ανά άτομο (λειτουργικά έξοδα)',
        'Ακύρωση μεταξύ 44–31 ημερών: παρακράτηση 30% της αξίας του ταξιδιού',
        'Ακύρωση μεταξύ 30–21 ημερών: παρακράτηση 50% της αξίας του ταξιδιού',
        'Ακύρωση από 20 ημέρες πριν την αναχώρηση και μετά: παρακράτηση 100% της αξίας του ταξιδιού',
        'Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, σκι, εκθέσεις, συνέδρια & παρεμφερείς διεθνείς εκδηλώσεις, τα ακυρωτικά φθάνουν έως 100% ανεξαρτήτως ημερομηνίας ακύρωσης'
      ],
      program: {
        introduction: 'ΠΑΡΙΣΙ & DISNEYLAND – 5 Μέρες\n\nΑνακαλύψτε γιατί η γαλλική πρωτεύουσα έχει εμπνεύσει καλλιτέχνες και συγγραφείς ανά τους αιώνες. Τα εμβληματικά αξιοθέατα της πόλης – Πύργος του Άιφελ, Παναγία των Παρισίων, Λούβρο, Αψίδα του Θριάμβου – συνδυάζονται με τη μοντέρνα πλευρά της πόλης. Απολαύστε κρουαζιέρα στον Σηκουάνα, επισκεφτείτε τη Μονμάρτη και ζήστε μια μαγική μέρα στη Disneyland Paris.',
        day1: '1η Μέρα: Λάρνακα – Παρίσι\n\nΑνακαλύψτε γιατί η γαλλική πρωτεύουσα έχει εμπνεύσει καλλιτέχνες και συγγραφείς ανά τους αιώνες.\nΤα εμβληματικά αξιοθέατα της πόλης – Πύργος του Άιφελ, Παναγία των Παρισίων, Λούβρο, Αψίδα του Θριάμβου – συνδυάζονται με τη μοντέρνα πλευρά της πόλης και δημιουργούν ένα σκηνικό που δεν αφήνει κανέναν ασυγκίνητο.\n\n• Συγκέντρωση στο αεροδρόμιο Λάρνακας\n• Πτήση για Παρίσι με απευθείας πτήση\n• Άφιξη, υποδοχή από τους συνεργάτες μας\n• Μεταφορά στο ξενοδοχείο & τακτοποίηση\n\nΔιανυκτέρευση στο Παρίσι.',
        day2: '2η Μέρα: Παρίσι – Πανοραμική ξενάγηση πόλης\n\nΠρωινό στο ξενοδοχείο και πανοραμική ξενάγηση στα σημαντικότερα αξιοθέατα της πόλης.\n\nΚατά τη διάρκεια της περιήγησης θα δούμε:\n\n• Παναγία των Παρισίων, αριστούργημα γοτθικής αρχιτεκτονικής\n• Το ιστορικό πανεπιστήμιο Σορβόννη\n• Το Πάνθεον, τόπο ταφής επιφανών Γάλλων (Βίκτωρ Ουγκώ, Εμίλ Ζολά κ.ά.)\n• Τους Κήπους του Λουξεμβούργου, αγαπημένο σημείο καλλιτεχνών\n• Το Μουσείο Ορσέ, με τη σημαντικότερη συλλογή Ιμπρεσιονιστών\n• Τη γέφυρα Αλεξάνδρου Γ\', σύμβολο Γαλλορωσικής φιλίας\n• Το Μέγαρο των Απομάχων και τον τάφο του Ναπολέοντα Α\'\n• Τον Πύργο του Άιφελ, τον οποίο θα απαθανατίσουμε από το Τροκαντερό\n• Την Πλατεία του Αστέρα με την Αψίδα του Θριάμβου και την έναρξη της Λεωφόρου Ηλυσίων Πεδίων\n• Την Πλατεία Ομονοίας (Place de la Concorde) – Γαλλικό Κοινοβούλιο & οβελίσκος Λούξορ\n• Το εμπορικό κέντρο της πόλης με τον Ναό της Αγίας Μαγδαληνής, την Όπερα Γκαρνιέ και την Πλατεία Βαντόμ\n\nΑπόγευμα ελεύθερο για βόλτες, αγορές ή προαιρετικές επισκέψεις σε μουσεία.\n\nΔιανυκτέρευση στο Παρίσι.',
        day3: '3η Μέρα: Κρουαζιέρα στον Σηκουάνα – Μονμάρτη\n\nΜετά το πρωινό:\n\n🔹 Κρουαζιέρα στον Σηκουάνα\n\nΜεταφορά στην προβλήτα και επιβίβαση σε κομψό πλοιάριο του Σηκουάνα για μίνι κρουαζιέρα περίπου μίας ώρας.\nΘα απολαύσετε πανοραμική θέα στα σημαντικότερα μνημεία του Παρισιού από το ποτάμι – ένα από τα πιο χαρακτηριστικά «καρέ» της Πόλης του Φωτός.\n\n🔹 Μονμάρτη\n\nΣτη συνέχεια, επίσκεψη στη γραφική και καλλιτεχνική Μονμάρτη, ιστορική συνοικία καλλιτεχνών:\n\n• Βόλτα στα πλακόστρωτα σοκάκια και στην Πλατεία du Tertre, γεμάτη ζωγράφους και πορτρέτα\n• Επίσκεψη στη Βασιλική της Ιερής Καρδιάς (Sacré-Cœur)\n• Μαγευτική πανοραμική θέα όλου του Παρισιού\n• Χρόνος για φωτογραφίες, καφέ και μικρά καλλιτεχνικά μαγαζιά\n\nΜεσημεριανή επιστροφή στο ξενοδοχείο, γεμάτοι ρομαντισμό και παριζιάνικες εικόνες.\n\nΔιανυκτέρευση στο Παρίσι.',
        day4: '4η Μέρα: Παρίσι – Disneyland\n\nΠρωινό και αναχώρηση για τη μαγική Disneyland Paris.\n\nΜια μέρα αφιερωμένη σε μικρούς και μεγάλους που θέλουν να ζήσουν τον κόσμο της Disney από κοντά:\n\n• Συναντήσεις και φωτογραφίες με τον Μίκυ, τη Μίνι και όλη την παρέα\n• Haunted Mansion, βόλτα με το ατμόπλοιο γύρω από τη λίμνη\n• Εντυπωσιακές παρελάσεις με τους χαρακτήρες της Disney\n• Για τους πιο τολμηρούς: Space Mountain, Big Thunder Mountain, Indiana Jones\n• Εξερεύνηση του Νησιού των Πειρατών\n• Παραμυθένιες διαδρομές με την Κοιμωμένη, τον Πινόκιο, τον Πήτερ Παν, τη Χιονάτη & τους 7 Νάνους\n• Εμπειρία στο ολοκαίνουργιο World of Frozen, όπου η Άρεντελ ζωντανεύει με θεματικά σημεία, συναντήσεις με Έλσα & Άννα και μαγικές φωτογραφίες\n\nΑργά το απόγευμα επιστροφή στο ξενοδοχείο στο Παρίσι.\n\nΔιανυκτέρευση στο Παρίσι.',
        day5: '5η Μέρα: Παρίσι – Λάρνακα\n\nΠρόγευμα και ελεύθερος χρόνος ανάλογα με το πρόγραμμα της πτήσης.\nΜεταφορά στο αεροδρόμιο του Παρισιού και πτήση επιστροφής στη Λάρνακα, με τις καλύτερες αναμνήσεις από Παρίσι & Disneyland.'
      },
      hotelStayNote: 'ΞΕΝΟΔΟΧΕΙΟ ΔΙΑΜΟΝΗΣ ΣΤΟ ΠΑΡΙΣΙ:\nNOVOTEL LA DEFENSE 4* – 04/07, 11/07, 25/07, 01/08, 08/08, 15/08, 22/08 και 29/08\nVOCO PORTE DE CLICHY 4* - 18/07 ( το ξενοδοχείο δεν διαθέτει τετράκλινα δωμάτια οπόταν θα δίνονται δύο δίκλινα δίπλα δίπλα).',
      gallery: [
        '/images/destinations/paris-hero.webp'
      ]
    }
  },
  {
    id: 30,
    title: 'ΚΛΑΣΣΙΚΗ ΠΟΛΩΝΙΑ – 7 Μέρες',
    destination: 'Poland',
    category: 'Summer Packages',
    price: 1175,
    duration: '7 days / 6 nights',
    description: 'Discover Classic Poland with visits to Łódź, Krakow, Zakopane, and Warsaw on this comprehensive 7-day tour.',
    longDescription: 'Experience the heart of Classic Poland with visits to Łódź, the industrial city with rich heritage; Krakow, the former capital and one of Central Europe\'s most atmospheric cities; Zakopane, the "winter capital" at the foot of the Tatra Mountains; and Warsaw, the dynamic capital. This 7-day journey combines history, culture, and natural beauty.',
    image: '🇵🇱',
    featured: true,
    details: {
      departureDate: '09/07, 16/07, 23/07, 30/07, 06/08, 13/08, 20/08, 27/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Łódź, Krakow, Zakopane, Warsaw, Poland',
      monthAvailability: 'July, August',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'LOT Polish Airlines',
      includedLuggage: '1 checked bag 23kg + 1 hand luggage 8kg',
      coverImage: '/images/destinations/poland-clasic-hero.webp',
      thumbnailImage: '/images/destinations/poland.webp',
      flights: [
        {
          direction: 'Departure',
          date: '09/07, 16/07, 23/07, 30/07, 06/08, 13/08, 20/08, 27/08',
          route: 'Larnaca (LCA) → Warsaw (WAW)',
          flight: 'LO 172',
          time: '16:05 → 18:40',
          luggage: '1 checked bag'
        },
        {
          direction: 'Return',
          date: '09/07, 16/07, 23/07, 30/07, 06/08, 13/08, 20/08, 27/08',
          route: 'Warsaw (WAW) → Larnaca (LCA)',
          flight: 'LO 171',
          time: '10:40 → 15:05',
          luggage: '1 checked bag'
        }
      ],
      hotels: [
        // Period A: 27/08
        {
          name: 'Łódź Hotel – Łódź',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Łódź Hotel, Łódź, Poland',
          prices: {
            double: 1175,
            single: 1435,
            child1: 989
          },
          departureDate: '27/08',
          packagePrice: 2350
        },
        {
          name: 'Krakow Hotel – Krakow',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/krakow-hotel.webp',
          location: 'Krakow Hotel, Krakow, Poland',
          prices: {
            double: 1175,
            single: 1435,
            child1: 989
          },
          departureDate: '27/08',
          packagePrice: 2350
        },
        {
          name: 'Warsaw Hotel – Warsaw',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Warsaw Hotel, Warsaw, Poland',
          prices: {
            double: 1175,
            single: 1435,
            child1: 989
          },
          departureDate: '27/08',
          packagePrice: 2350
        },
        // Period B: 09/07, 16/07, 23/07, 30/07, 06/08, 13/08, 20/08
        {
          name: 'Łódź Hotel – Łódź',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Łódź Hotel, Łódź, Poland',
          prices: {
            double: 1205,
            single: 1465,
            child1: 1009
          },
          departureDate: '09/07',
          packagePrice: 2410
        },
        {
          name: 'Krakow Hotel – Krakow',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/krakow-hotel.webp',
          location: 'Krakow Hotel, Krakow, Poland',
          prices: {
            double: 1205,
            single: 1465,
            child1: 1009
          },
          departureDate: '09/07',
          packagePrice: 2410
        },
        {
          name: 'Warsaw Hotel – Warsaw',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Warsaw Hotel, Warsaw, Poland',
          prices: {
            double: 1205,
            single: 1465,
            child1: 1009
          },
          departureDate: '09/07',
          packagePrice: 2410
        },
        {
          name: 'Łódź Hotel – Łódź',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Łódź Hotel, Łódź, Poland',
          prices: {
            double: 1205,
            single: 1465,
            child1: 1009
          },
          departureDate: '16/07',
          packagePrice: 2410
        },
        {
          name: 'Krakow Hotel – Krakow',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/krakow-hotel.webp',
          location: 'Krakow Hotel, Krakow, Poland',
          prices: {
            double: 1205,
            single: 1465,
            child1: 1009
          },
          departureDate: '16/07',
          packagePrice: 2410
        },
        {
          name: 'Warsaw Hotel – Warsaw',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Warsaw Hotel, Warsaw, Poland',
          prices: {
            double: 1205,
            single: 1465,
            child1: 1009
          },
          departureDate: '16/07',
          packagePrice: 2410
        },
        {
          name: 'Łódź Hotel – Łódź',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Łódź Hotel, Łódź, Poland',
          prices: {
            double: 1205,
            single: 1465,
            child1: 1009
          },
          departureDate: '23/07',
          packagePrice: 2410
        },
        {
          name: 'Krakow Hotel – Krakow',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/krakow-hotel.webp',
          location: 'Krakow Hotel, Krakow, Poland',
          prices: {
            double: 1205,
            single: 1465,
            child1: 1009
          },
          departureDate: '23/07',
          packagePrice: 2410
        },
        {
          name: 'Warsaw Hotel – Warsaw',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Warsaw Hotel, Warsaw, Poland',
          prices: {
            double: 1205,
            single: 1465,
            child1: 1009
          },
          departureDate: '23/07',
          packagePrice: 2410
        },
        {
          name: 'Łódź Hotel – Łódź',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Łódź Hotel, Łódź, Poland',
          prices: {
            double: 1205,
            single: 1465,
            child1: 1009
          },
          departureDate: '30/07',
          packagePrice: 2410
        },
        {
          name: 'Krakow Hotel – Krakow',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/krakow-hotel.webp',
          location: 'Krakow Hotel, Krakow, Poland',
          prices: {
            double: 1205,
            single: 1465,
            child1: 1009
          },
          departureDate: '30/07',
          packagePrice: 2410
        },
        {
          name: 'Warsaw Hotel – Warsaw',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Warsaw Hotel, Warsaw, Poland',
          prices: {
            double: 1205,
            single: 1465,
            child1: 1009
          },
          departureDate: '30/07',
          packagePrice: 2410
        },
        {
          name: 'Łódź Hotel – Łódź',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Łódź Hotel, Łódź, Poland',
          prices: {
            double: 1205,
            single: 1465,
            child1: 1009
          },
          departureDate: '06/08',
          packagePrice: 2410
        },
        {
          name: 'Krakow Hotel – Krakow',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/krakow-hotel.webp',
          location: 'Krakow Hotel, Krakow, Poland',
          prices: {
            double: 1205,
            single: 1465,
            child1: 1009
          },
          departureDate: '06/08',
          packagePrice: 2410
        },
        {
          name: 'Warsaw Hotel – Warsaw',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Warsaw Hotel, Warsaw, Poland',
          prices: {
            double: 1205,
            single: 1465,
            child1: 1009
          },
          departureDate: '06/08',
          packagePrice: 2410
        },
        {
          name: 'Łódź Hotel – Łódź',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Łódź Hotel, Łódź, Poland',
          prices: {
            double: 1205,
            single: 1465,
            child1: 1009
          },
          departureDate: '13/08',
          packagePrice: 2410
        },
        {
          name: 'Krakow Hotel – Krakow',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/krakow-hotel.webp',
          location: 'Krakow Hotel, Krakow, Poland',
          prices: {
            double: 1205,
            single: 1465,
            child1: 1009
          },
          departureDate: '13/08',
          packagePrice: 2410
        },
        {
          name: 'Warsaw Hotel – Warsaw',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Warsaw Hotel, Warsaw, Poland',
          prices: {
            double: 1205,
            single: 1465,
            child1: 1009
          },
          departureDate: '13/08',
          packagePrice: 2410
        },
        {
          name: 'Łódź Hotel – Łódź',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Łódź Hotel, Łódź, Poland',
          prices: {
            double: 1205,
            single: 1465,
            child1: 1009
          },
          departureDate: '20/08',
          packagePrice: 2410
        },
        {
          name: 'Krakow Hotel – Krakow',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/krakow-hotel.webp',
          location: 'Krakow Hotel, Krakow, Poland',
          prices: {
            double: 1205,
            single: 1465,
            child1: 1009
          },
          departureDate: '20/08',
          packagePrice: 2410
        },
        {
          name: 'Warsaw Hotel – Warsaw',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/destinations/poland-classic-hotel.webp',
          location: 'Warsaw Hotel, Warsaw, Poland',
          prices: {
            double: 1205,
            single: 1465,
            child1: 1009
          },
          departureDate: '20/08',
          packagePrice: 2410
        }
      ],
      included: [
        'Αεροπορικό εισιτήριο Λάρνακα – Βαρσοβία – Λάρνακα με πτήσεις των Πολωνικών Αερογραμμών (LOT)',
        'Φόροι αεροδρομίων',
        'Διαμονή για 6 βράδια σε ξενοδοχεία 4★ & 5★ με πρόγευμα',
        'Μεταφορές, εκδρομές, περιηγήσεις όπως αναφέρονται στο αναλυτικό πρόγραμμα',
        'Εισιτήριο & ακουστικά για το μουσείο Άουσβιτς – Μπίρκεναου',
        'Τοπικοί ξεναγοί όπου απαιτείται',
        'Τοπικός ελληνόφωνος αρχηγός / συνοδός',
        'Μία αποσκευή 23 κιλών και μία χειραποσκευή 8 κιλών ανά άτομο',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Φαγητό και ποτό κατά τη διάρκεια των πτήσεων',
        'Είσοδος στα Αλατωρυχεία Βιελίτσκα (περίπου €45 / άτομο)',
        'Δικαιώματα εισόδων σε χώρους επισκέψεων / μουσεία, όπου δεν αναφέρεται ρητά ότι περιλαμβάνονται',
        'Οτιδήποτε δεν αναφέρεται ρητά στο πρόγραμμα ή αναφέρεται ως προαιρετικό ή προτεινόμενο'
      ],
      cancellationPolicy: 'Ακύρωση έως 45 ημέρες πριν: παρακράτηση €50 ανά άτομο (λειτουργικά έξοδα). Ακύρωση μεταξύ 44–31 ημερών: παρακράτηση 30% της αξίας του ταξιδιού. Ακύρωση μεταξύ 30–21 ημερών: παρακράτηση 50% της αξίας του ταξιδιού. Ακύρωση από 20 ημέρες πριν την αναχώρηση και μετά: παρακράτηση 100% της αξίας του ταξιδιού. Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, σκι, εκθέσεις, συνέδρια & παρεμφερείς διεθνείς εκδηλώσεις, τα ακυρωτικά φθάνουν έως 100%, ανεξαρτήτως ημερομηνίας ακύρωσης.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά την ώρα της κράτησης',
        'Με την κράτηση απαιτείται προκαταβολή 30% της αξίας του πακέτου',
        'Εξόφληση περίπου 21 μέρες πριν την αναχώρηση',
        'Είσοδος στα Αλατωρυχεία Βιελίτσκα: περίπου €45 ανά άτομο (δεν περιλαμβάνεται)',
        'Ακύρωση έως 45 ημέρες πριν: παρακράτηση €50 ανά άτομο (λειτουργικά έξοδα)',
        'Ακύρωση μεταξύ 44–31 ημερών: παρακράτηση 30% της αξίας του ταξιδιού',
        'Ακύρωση μεταξύ 30–21 ημερών: παρακράτηση 50% της αξίας του ταξιδιού',
        'Ακύρωση από 20 ημέρες πριν την αναχώρηση και μετά: παρακράτηση 100% της αξίας του ταξιδιού',
        'Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, σκι, εκθέσεις, συνέδρια & παρεμφερείς διεθνείς εκδηλώσεις, τα ακυρωτικά φθάνουν έως 100%, ανεξαρτήτως ημερομηνίας ακύρωσης'
      ],
      program: {
        introduction: 'ΚΛΑΣΣΙΚΗ ΠΟΛΩΝΙΑ – 7 Μέρες\n\nΜια μοναδική εκδρομή στην καρδιά της κλασικής Πολωνίας. Εξερευνήστε τη Łódź με την πλούσια βιομηχανική κληρονομιά, την Κρακοβία - την παλαιότερη πρωτεύουσα, το Ζακοπάνε στους πρόποδες των Τάτρα, και τη Βαρσοβία - τη δυναμική πρωτεύουσα. Ένα ταξίδι που συνδυάζει ιστορία, πολιτισμό και φυσική ομορφιά.',
        day1: '1η Μέρα: Λάρνακα – Βαρσοβία – Łódź\n\nΣυγκέντρωση στο αεροδρόμιο Λάρνακας και αναχώρηση για τη δυναμική πρωτεύουσα της Πολωνίας, τη Βαρσοβία.\nΆφιξη και άμεση οδική μεταφορά στη Łódź.\n\nΕλεύθερος χρόνος για ξεκούραση και μια πρώτη γνωριμία με την πόλη.\nΠερπατήστε στην Piotrkowska Street, έναν από τους πιο ζωντανούς και μακρύτερους εμπορικούς πεζοδρόμους της Ευρώπης, γεμάτο καφέ, εστιατόρια και εντυπωσιακά κτίρια.\n\nΔιανυκτέρευση στη Łódź.',
        day2: '2η Μέρα: Łódź – Τσεστοχόβα – Άουσβιτς – Κρακοβία\n\nΠρόγευμα και σύντομη περιήγηση στη Łódź, πόλη με πλούσια βιομηχανική κληρονομιά και έντονη καλλιτεχνική ζωή.\nΘα γνωρίσουμε:\n\n• Την ιστορική Οδό Piotrkowska\n• Τα παλιά εργοστάσια που έχουν μετατραπεί σε πολιτιστικά κέντρα & εμπορικούς χώρους\n\nΣτη συνέχεια:\n\n🔹 Τσεστοχόβα\n\nΑναχώρηση για την ιερή πόλη της Πολωνίας\n• Επίσκεψη στο φημισμένο μοναστήρι Jasna Góra, όπου φυλάσσεται η θαυματουργή εικόνα της Μαύρης Παναγίας, προστάτιδας του πολωνικού έθνους\n\n🔹 Άουσβιτς – Μουσείο Ολοκαυτώματος\n\n• Επίσκεψη στο διαβόητο πρώην στρατόπεδο συγκέντρωσης Auschwitz–Birkenau, σήμερα μουσείο και τόπος μνήμης\n• Ξενάγηση στους χώρους και γνωριμία με τα τραγικά γεγονότα του Β\' Παγκοσμίου Πολέμου\n\nΑργά το απόγευμα άφιξη στην Κρακοβία, την παλαιότερη πρωτεύουσα της Πολωνίας και μία από τις πιο ατμοσφαιρικές πόλεις της Κεντρικής Ευρώπης.\n\nΤακτοποίηση στο ξενοδοχείο.\nΔιανυκτέρευση στην Κρακοβία.',
        day3: '3η Μέρα: Κρακοβία – Περιπατητική ξενάγηση – Αλατωρυχεία Βιελίτσκα\n\nΠρόγευμα και αναχώρηση για περιπατητική ξενάγηση στην Παλιά Πόλη της Κρακοβίας, η οποία έχει χαρακτηριστεί Μνημείο Παγκόσμιας Κληρονομιάς UNESCO.\n\nΚατά τη διάρκεια της ξενάγησης θα δούμε:\n\n• Τη μεσαιωνική Παλιά Πόλη με τα πλακόστρωτα σοκάκια\n• Την επιβλητική κεντρική πλατεία Rynek Główny, μία από τις μεγαλύτερες της Ευρώπης\n• Τη Βασιλική της Αγίας Μαρίας, με τους χαρακτηριστικούς πύργους της\n• Το Κάστρο του Wawel στον ομώνυμο λόφο, ιστορική έδρα των Πολωνών βασιλιάδων, με υπέροχη πανοραμική θέα στην πόλη\n\nΤο απόγευμα:\n\n🔹 Αλατωρυχεία Βιελίτσκα (Wieliczka)\n\n• Επίσκεψη σε ένα από τα πιο εντυπωσιακά υπόγεια αξιοθέατα στον κόσμο\n• Στοές, σπηλιές, παρεκκλήσια και γλυπτά, όλα σκαλισμένα από κρυστάλλους αλατιού\n• Εξαιρετικό παράδειγμα ανθρώπινης δημιουργικότητας και χειροτεχνίας, μοναδική ατμόσφαιρα σε βάθος γης\n\nΕπιστροφή στο ξενοδοχείο στην Κρακοβία.\nΔιανυκτέρευση στην Κρακοβία.',
        day4: '4η Μέρα: Κρακοβία – Ζακοπάνε\n\nΠρόγευμα και ημερήσια εκδρομή στο Ζακοπάνε, τη «χειμερινή πρωτεύουσα της Πολωνίας», στους πρόποδες των Όρεων Τάτρα.\n\n• Γραφική διαδρομή μέσα από καταπράσινα τοπία και χωριά\n• Βόλτα στην κεντρική πεζοδρομημένη Οδό Krupówki, με παραδοσιακά μαγαζιά, τοπικά προϊόντα και τυριά\n• Χρόνος για καφέ, γεύμα ή αγορές τοπικών ειδών\n\nΠροαιρετικά (καιρού επιτρέποντος):\n• Ανάβαση με τελεφερίκ στο Όρος Gubałówka, με πανοραμική θέα στις κορυφές των Τάτρα και στην κοιλάδα\n\nΑργά το απόγευμα επιστροφή στην Κρακοβία.\nΔιανυκτέρευση στην Κρακοβία.',
        day5: '5η Μέρα: Κρακοβία – Βαρσοβία\n\nΠρόγευμα και αναχώρηση για Βαρσοβία.\n\nΆφιξη στην πρωτεύουσα και τακτοποίηση στο ξενοδοχείο.\n\nΕλεύθερος χρόνος για:\n\n• Πρώτη γνωριμία με την πόλη\n• Βόλτα στο ανακαινισμένο ιστορικό κέντρο με τα πολύχρωμα κτίρια\n• Επίσκεψη σε bar mleczny για αυθεντική, απλή πολωνική κουζίνα (pierogi, σούπες κ.λπ.)\n• Επίσκεψη (προαιρετικά) στον Varso Tower, τον ψηλότερο ουρανοξύστη της πόλης, με εντυπωσιακή θέα και σύγχρονη αρχιτεκτονική υπογραφή\n\nΔιανυκτέρευση στη Βαρσοβία.',
        day6: '6η Μέρα: Βαρσοβία – Περιπατητική ξενάγηση\n\nΠρόγευμα και αναχώρηση για περιπατητική ξενάγηση στα σημαντικότερα σημεία της πόλης.\n\nΚατά τη διάρκεια της βόλτας μας θα δούμε:\n\n• Βασιλικό Κάστρο & Πλατεία του Κάστρου με τη Στήλη του Σίγκισμουντ\n• Μεγάλο Θέατρο (όπερα & μπαλέτο)\n• Το μπαρόκ Παλάτι Κρασίνσκι\n• Τους Βασιλικούς Κήπους\n• Το ιστορικό Εβραϊκό Γκέτο\n• Το σπίτι της Μαρίας Σκλοντόφσκα–Κιουρί\n• Το άγαλμα του μεγάλου συνθέτη Φρεντερίκ Σοπέν\n\nΣτη συνέχεια, επίσκεψη στο υπέροχο Πάρκο Łazienki, όπου θα δούμε και το εμβληματικό Παλάτι πάνω στο Νερό, ένα από τα πιο φωτογραφημένα σημεία της πόλης.\n\nΤο βράδυ, προτείνεται:\n• Επίσκεψη στο Multimedia Fountain Park (καιρού επιτρέποντος) για show φωτός, ήχου και νερού\nή\n• Χαλαρή βόλτα στα στενά της Παλιάς Πόλης με τα καφέ, τα bar και τα εστιατόρια\n• Στάση στην ιστορική σοκολατερί Wedel για ζεστή σοκολάτα\n\nΔιανυκτέρευση στη Βαρσοβία.',
        day7: '7η Μέρα: Βαρσοβία – Λάρνακα\n\nΠρόγευμα και μεταφορά στο αεροδρόμιο της Βαρσοβίας.\nΠτήση επιστροφής στη Λάρνακα, με τις αποσκευές και τη μνήμη γεμάτες εμπειρίες από ένα ταξίδι στην κλασική Πολωνία: Łódź, Κρακοβία, Ζακοπάνε, Βαρσοβία.'
      },
      gallery: [
        '/images/destinations/poland-clasic-hero.webp'
      ]
    }
  },
  {
    id: 31,
    title: 'ΚΩΝΣΤΑΝΤΙΝΟΥΠΟΛΗ & ΠΑΡΑΛΙΑ ΜΙΚΡΑΣ ΑΣΙΑΣ',
    destination: 'Turkey',
    category: 'Summer Packages',
    price: 1229,
    duration: '8 days / 7 nights',
    description: 'Discover Istanbul and the Asia Minor coast with visits to Çanakkale, Smyrna, Ephesus, and the Princes\' Islands on this comprehensive 8-day tour.',
    longDescription: 'Experience the magic of Istanbul and explore the Asia Minor coast. Visit historic sites including Troy, Pergamon, Ephesus, and the Princes\' Islands. This 8-day journey combines Byzantine and Ottoman history with the natural beauty of the Turkish coast.',
    image: '🇹🇷',
    featured: true,
    details: {
      departureDate: '10/07, 17/07, 24/07, 31/07, 07/08, 14/08, 21/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Istanbul, Çanakkale, Smyrna, Asia Minor Coast, Turkey',
      monthAvailability: 'July, August',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast / Half Board',
      airline: 'Aegean Airlines',
      includedLuggage: '1 checked bag 23kg + 1 hand luggage 8kg',
      coverImage: '/images/destinations/istanbul-asia-minor-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '10/07, 17/07, 24/07, 31/07, 07/08, 14/08, 21/08',
          route: 'Larnaca (LCA) → Athens (ATH)',
          flight: 'A3 901',
          time: '05:00 → 06:45',
          luggage: '1 checked bag'
        },
        {
          direction: 'Departure',
          date: '10/07, 17/07, 24/07, 31/07, 07/08, 14/08, 21/08',
          route: 'Athens (ATH) → Istanbul (IST)',
          flight: 'A3 990',
          time: '08:15 → 09:50',
          luggage: '1 checked bag'
        },
        {
          direction: 'Return',
          date: '10/07, 17/07, 24/07, 31/07, 07/08, 14/08, 21/08',
          route: 'Izmir (ADB) → Athens (ATH)',
          flight: 'A3 995',
          time: '19:15 → 20:15',
          luggage: '1 checked bag'
        },
        {
          direction: 'Return',
          date: '10/07, 17/07, 24/07, 31/07, 07/08, 14/08, 21/08',
          route: 'Athens (ATH) → Larnaca (LCA)',
          flight: 'A3 910',
          time: '23:45 → 01:20 (+1)',
          luggage: '1 checked bag'
        }
      ],
      hotels: [
        // Period A: 10/07, 21/08
        {
          name: 'Istanbul Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/istanbul-hotel.webp',
          location: 'Istanbul Hotel, Istanbul, Turkey',
          prices: {
            double: 1229,
            single: 1545,
            child1: 999
          },
          departureDate: '10/07',
          packagePrice: 2458
        },
        {
          name: 'Çanakkale Hotel – Çanakkale',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/canakkale-hotel.webp',
          location: 'Çanakkale Hotel, Çanakkale, Turkey',
          prices: {
            double: 1229,
            single: 1545,
            child1: 999
          },
          departureDate: '10/07',
          packagePrice: 2458
        },
        {
          name: 'Smyrna Hotel – Smyrna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/smyrna-hotel.webp',
          location: 'Smyrna Hotel, Smyrna, Turkey',
          prices: {
            double: 1229,
            single: 1545,
            child1: 999
          },
          departureDate: '10/07',
          packagePrice: 2458
        },
        {
          name: 'Istanbul Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/istanbul-hotel.webp',
          location: 'Istanbul Hotel, Istanbul, Turkey',
          prices: {
            double: 1229,
            single: 1545,
            child1: 999
          },
          departureDate: '21/08',
          packagePrice: 2458
        },
        {
          name: 'Çanakkale Hotel – Çanakkale',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/canakkale-hotel.webp',
          location: 'Çanakkale Hotel, Çanakkale, Turkey',
          prices: {
            double: 1229,
            single: 1545,
            child1: 999
          },
          departureDate: '21/08',
          packagePrice: 2458
        },
        {
          name: 'Smyrna Hotel – Smyrna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/smyrna-hotel.webp',
          location: 'Smyrna Hotel, Smyrna, Turkey',
          prices: {
            double: 1229,
            single: 1545,
            child1: 999
          },
          departureDate: '21/08',
          packagePrice: 2458
        },
        // Period B: 17/07, 24/07, 31/07, 07/08, 14/08
        {
          name: 'Istanbul Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/istanbul-hotel.webp',
          location: 'Istanbul Hotel, Istanbul, Turkey',
          prices: {
            double: 1259,
            single: 1585,
            child1: 999
          },
          departureDate: '17/07',
          packagePrice: 2518
        },
        {
          name: 'Çanakkale Hotel – Çanakkale',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/canakkale-hotel.webp',
          location: 'Çanakkale Hotel, Çanakkale, Turkey',
          prices: {
            double: 1259,
            single: 1585,
            child1: 999
          },
          departureDate: '17/07',
          packagePrice: 2518
        },
        {
          name: 'Smyrna Hotel – Smyrna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/smyrna-hotel.webp',
          location: 'Smyrna Hotel, Smyrna, Turkey',
          prices: {
            double: 1259,
            single: 1585,
            child1: 999
          },
          departureDate: '17/07',
          packagePrice: 2518
        },
        {
          name: 'Istanbul Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/istanbul-hotel.webp',
          location: 'Istanbul Hotel, Istanbul, Turkey',
          prices: {
            double: 1259,
            single: 1585,
            child1: 999
          },
          departureDate: '24/07',
          packagePrice: 2518
        },
        {
          name: 'Çanakkale Hotel – Çanakkale',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/canakkale-hotel.webp',
          location: 'Çanakkale Hotel, Çanakkale, Turkey',
          prices: {
            double: 1259,
            single: 1585,
            child1: 999
          },
          departureDate: '24/07',
          packagePrice: 2518
        },
        {
          name: 'Smyrna Hotel – Smyrna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/smyrna-hotel.webp',
          location: 'Smyrna Hotel, Smyrna, Turkey',
          prices: {
            double: 1259,
            single: 1585,
            child1: 999
          },
          departureDate: '24/07',
          packagePrice: 2518
        },
        {
          name: 'Istanbul Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/istanbul-hotel.webp',
          location: 'Istanbul Hotel, Istanbul, Turkey',
          prices: {
            double: 1259,
            single: 1585,
            child1: 999
          },
          departureDate: '31/07',
          packagePrice: 2518
        },
        {
          name: 'Çanakkale Hotel – Çanakkale',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/canakkale-hotel.webp',
          location: 'Çanakkale Hotel, Çanakkale, Turkey',
          prices: {
            double: 1259,
            single: 1585,
            child1: 999
          },
          departureDate: '31/07',
          packagePrice: 2518
        },
        {
          name: 'Smyrna Hotel – Smyrna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/smyrna-hotel.webp',
          location: 'Smyrna Hotel, Smyrna, Turkey',
          prices: {
            double: 1259,
            single: 1585,
            child1: 999
          },
          departureDate: '31/07',
          packagePrice: 2518
        },
        {
          name: 'Istanbul Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/istanbul-hotel.webp',
          location: 'Istanbul Hotel, Istanbul, Turkey',
          prices: {
            double: 1259,
            single: 1585,
            child1: 999
          },
          departureDate: '07/08',
          packagePrice: 2518
        },
        {
          name: 'Çanakkale Hotel – Çanakkale',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/canakkale-hotel.webp',
          location: 'Çanakkale Hotel, Çanakkale, Turkey',
          prices: {
            double: 1259,
            single: 1585,
            child1: 999
          },
          departureDate: '07/08',
          packagePrice: 2518
        },
        {
          name: 'Smyrna Hotel – Smyrna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/smyrna-hotel.webp',
          location: 'Smyrna Hotel, Smyrna, Turkey',
          prices: {
            double: 1259,
            single: 1585,
            child1: 999
          },
          departureDate: '07/08',
          packagePrice: 2518
        },
        {
          name: 'Istanbul Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/istanbul-hotel.webp',
          location: 'Istanbul Hotel, Istanbul, Turkey',
          prices: {
            double: 1259,
            single: 1585,
            child1: 999
          },
          departureDate: '14/08',
          packagePrice: 2518
        },
        {
          name: 'Çanakkale Hotel – Çanakkale',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/canakkale-hotel.webp',
          location: 'Çanakkale Hotel, Çanakkale, Turkey',
          prices: {
            double: 1259,
            single: 1585,
            child1: 999
          },
          departureDate: '14/08',
          packagePrice: 2518
        },
        {
          name: 'Smyrna Hotel – Smyrna',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/smyrna-hotel.webp',
          location: 'Smyrna Hotel, Smyrna, Turkey',
          prices: {
            double: 1259,
            single: 1585,
            child1: 999
          },
          departureDate: '14/08',
          packagePrice: 2518
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Αθήνα – Κωνσταντινούπολη / Σμύρνη – Αθήνα – Λάρνακα με Aegean Airlines',
        'Φόροι αεροδρομίων',
        'Μία αποσκευή 23 kg και μία χειραποσκευή 8 kg ανά άτομο',
        'Διαμονή σε: Κωνσταντινούπολη: ξενοδοχείο 4★ με πρωινό, Τσανάκαλε: ξενοδοχείο 5★ με ημιδιατροφή, Σμύρνη: ξενοδοχείο 4★ με ημιδιατροφή',
        'Ημιδιατροφή όπου αναφέρεται (δείπνα)',
        'Έμπειρος τοπικός Αρχηγός / Συνοδός καθ\' όλη τη διάρκεια του προγράμματος',
        'Μεταφορές, εκδρομές, περιηγήσεις όπως αναφέρονται στο πρόγραμμα με πολυτελή πούλμαν',
        'Κρουαζιέρα στον Βόσπορο',
        'Ακτοπλοϊκά εισιτήρια για τα Πριγκηπονήσια',
        'Φόροι ξενοδοχείων',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Αχθοφορικά & φιλοδωρήματα',
        'Ποτά στα γεύματα',
        'Δικαιώματα εισόδων σε αρχαιολογικούς χώρους / μουσεία (όπου δεν αναφέρεται ρητά ότι περιλαμβάνονται)',
        'Βίζα για την Τουρκία (η οποία εκδίδεται ηλεκτρονικά – κόστος περίπου €50 ανά άτομο)',
        'Οτιδήποτε δεν αναφέρεται ρητά στο πρόγραμμα ή αναφέρεται ως προαιρετικό ή προτεινόμενο'
      ],
      cancellationPolicy: 'Ακύρωση μέχρι 45 μέρες πριν: παρακράτηση €50 ανά άτομο (λειτουργικά έξοδα). Ακύρωση μεταξύ 44–31 ημερών: παρακράτηση 30% της αξίας του ταξιδιού. Ακύρωση μεταξύ 30–21 ημερών: παρακράτηση 50% της αξίας του ταξιδιού. Ακύρωση από 20 μέρες πριν την αναχώρηση και μετά: παρακράτηση 100% της αξίας του ταξιδιού. Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, σκι, εκθέσεις, συνέδρια κ.λπ., τα ακυρωτικά δύνανται να φτάσουν έως 100% ανεξάρτητα από την ημερομηνία ακύρωσης.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά την ώρα της κράτησης',
        'Με την κράτηση απαιτείται προκαταβολή 30% της αξίας του πακέτου',
        'Εξόφληση περίπου 21 μέρες πριν την αναχώρηση',
        'Η έκδοση βίζας γίνεται από τον κάθε ταξιδιώτη online στην ιστοσελίδα: www.evisa.gov.tr/en/ (κόστος περίπου €50 ανά άτομο)',
        'Στην Τουρκία ταξιδεύετε μόνο με διαβατήριο, το οποίο πρέπει να έχει ισχύ τουλάχιστον 6 μήνες μετά την είσοδο στη χώρα',
        'Ακύρωση μέχρι 45 μέρες πριν: παρακράτηση €50 ανά άτομο (λειτουργικά έξοδα)',
        'Ακύρωση μεταξύ 44–31 ημερών: παρακράτηση 30% της αξίας του ταξιδιού',
        'Ακύρωση μεταξύ 30–21 ημερών: παρακράτηση 50% της αξίας του ταξιδιού',
        'Ακύρωση από 20 μέρες πριν την αναχώρηση και μετά: παρακράτηση 100% της αξίας του ταξιδιού',
        'Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, σκι, εκθέσεις, συνέδρια κ.λπ., τα ακυρωτικά δύνανται να φτάσουν έως 100% ανεξάρτητα από την ημερομηνία ακύρωσης'
      ],
      program: {
        introduction: 'ΚΩΝΣΤΑΝΤΙΝΟΥΠΟΛΗ & ΠΑΡΑΛΙΑ ΜΙΚΡΑΣ ΑΣΙΑΣ\n\nΜια μοναδική εκδρομή που συνδυάζει τη μαγεία της Κωνσταντινούπολης με την ομορφιά της παραλίας της Μικράς Ασίας. Εξερευνήστε ιστορικούς τόπους όπως η Τροία, η Πέργαμος, η Έφεσος και τα Πριγκηπονήσια. Ένα ταξίδι που συνδυάζει βυζαντινή και οθωμανική ιστορία με τη φυσική ομορφιά της τουρκικής ακτής.',
        day1: '1η Μέρα: Λάρνακα – Αθήνα – Κωνσταντινούπολη – Μπαλουκλί – Βλαχέρνα – Πατριαρχείο – Πέρα\n\nΣυγκέντρωση στο αεροδρόμιο της Λάρνακας και αναχώρηση για Κωνσταντινούπολη μέσω Αθηνών.\nΆφιξη και συνάντηση με την αρχηγό μας.\n\nΠρώτες επισκέψεις:\n\n• Ζωοδόχος Πηγή – Μπαλουκλί, με το αγίασμα της Παναγίας της Μπαλουκλιώτισσας\n• Παναγία των Βλαχερνών, όπου εψάλη για πρώτη φορά ο Ακάθιστος Ύμνος\n• Οικουμενικό Πατριαρχείο – προσκύνημα στον Πατριαρχικό Ναό του Αγίου Γεωργίου\n\nΜεταφορά στο ξενοδοχείο, τακτοποίηση.\n\nΤο απόγευμα/βράδυ:\n• Βόλτα στη Μεγάλη Οδό του Πέραν (Istiklal), μία από τις πιο ξακουστές λεωφόρους της Πόλης, γεμάτη εμπορικά καταστήματα, καφέ και ζωντανή ατμόσφαιρα.\n\nΔιανυκτέρευση στην Κωνσταντινούπολη.',
        day2: '2η Μέρα: Αγία Σοφία – Ιστορικό Κέντρο – Κλειστή Αγορά – Κρουαζιέρα στο Βόσπορο\n\nΠρόγευμα στο ξενοδοχείο και αναχώρηση για ξενάγηση στην παλαιά πόλη.\n\nΚατά τη διάρκεια της ημέρας θα δούμε:\n\n• Τη μεγαλόπρεπη Αγία Σοφία, κορυφαίο μνημείο της Χριστιανοσύνης\n• Το διάσημο Μπλε Τζαμί, ένα από τα ομορφότερα τεμένη της Πόλης\n• Τον Αιγυπτιακό οβελίσκο και τον χώρο του Βυζαντινού Ιπποδρόμου\n• Τη Βασιλική Κινστέρνα του Ιουστινιανού, μοναδικό δείγμα αρχαίας υδροδοτικής αρχιτεκτονικής\n\nΣτη συνέχεια:\n• Επίσκεψη στο γραφικό και πολύβουο Καπαλί Τσαρσί (Kapali Carsi) – τη διάσημη Σκεπαστή Αγορά, με πάνω από 100 δρόμους και περίπου 4.000 καταστήματα. Χρόνος ελεύθερος για αγορές και βόλτα.\n\nΤο απόγευμα:\n• Κρουαζιέρα στον Βόσπορο – απολαύστε τη μαγευτική διαδρομή ανάμεσα σε Ευρώπη & Ασία, με θέα σε παλάτια, ξύλινα γιαλί, τζαμιά και γέφυρες.\n\nΕπιστροφή στο ξενοδοχείο.\nΔιανυκτέρευση στην Κωνσταντινούπολη.',
        day3: '3η Μέρα: Ντολμά Μπαχτσέ – Πριγκηπονήσια (Χάλκη – Θεολογική Σχολή – Πρίγκηπος) – Αιγυπτιακή Αγορά\n\nΠρόγευμα και αναχώρηση για:\n\n🔹 Παλάτι Ντολμά Μπαχτσέ\n\nΈνα από τα ωραιότερα παλάτια του κόσμου, οι «Βερσαλλίες της Ανατολής» στις όχθες του Βοσπόρου, με αξεπέραστη χλιδή και πλούτο.\n\nΣτη συνέχεια περνάμε στην Ασιατική πλευρά της Πόλης μέσω της μεγάλης κρεμαστής Γέφυρας του Βοσπόρου και επιβιβαζόμαστε στο πλοίο για τα Πριγκηπονήσια:\n\n• Χάλκη – επίσκεψη στη φημισμένη Θεολογική Σχολή\n• Πρίγκηπος – ελεύθερος χρόνος για βόλτα, προαιρετικό γεύμα σε παραλιακή ταβέρνα και περιήγηση ανάμεσα στις παλιές αριστοκρατικές επαύλεις, πολλές από τις οποίες ανήκαν σε Έλληνες της Πόλης\n\nΕπιστροφή στην Κωνσταντινούπολη και επίσκεψη στην Αιγυπτιακή Αγορά (Αγορά Μπαχαρικών) για αγορές τοπικών προϊόντων, μπαχαρικών, γλυκών κ.λπ.\n\nΔιανυκτέρευση στην Κωνσταντινούπολη.',
        day4: '4η Μέρα: Μονή της Χώρας – Τροία – Τσανάκαλε\n\nΠρόγευμα και αναχώρηση:\n\nΠρώτη επίσκεψη:\n• Μονή της Χώρας (Καριγιέ) – φημισμένη για τα θαυμάσια βυζαντινά ψηφιδωτά και τοιχογραφίες που σώζονται στους νάρθηκες.\n\nΣτη συνέχεια κατευθυνόμαστε οδικώς προς τα στενά του Ελλήσποντου.\n\n• Επίσκεψη στην Αρχαία Τροία, έναν από τους πιο εμβληματικούς αρχαιολογικούς χώρους της ανθρωπότητας.\n• Ξενάγηση στον χώρο και επίσκεψη στο Μουσείο της Τροίας, με πλούσια ευρήματα και εντυπωσιακή παρουσίαση της ιστορίας του τόπου.\n\nΆφιξη στην περιοχή Τσανάκαλε, μεταφορά στο ξενοδοχείο, τακτοποίηση.\nΔείπνο στο ξενοδοχείο.\n\nΔιανυκτέρευση στο Τσανάκαλε.',
        day5: '5η Μέρα: Τσανάκαλε – Αϊβαλί – Πέργαμος – Σμύρνη\n\nΠρόγευμα και αναχώρηση για την πατρίδα του Φώτη Κόντογλου, το Αϊβαλί (Κυδωνιές).\n\n• Βόλτα στην ελληνική συνοικία και στην αγορά\n• Επίσκεψη στην εκκλησία του Αγίου Γεωργίου\n• Μετάβαση στο Μοσχονήσι και επίσκεψη στον ναό των Ταξιαρχών\n\nΣτη συνέχεια αναχώρηση για Πέργαμο:\n\n• Επίσκεψη στην επιβλητική Κόκκινη Βασιλική\n• Γνωριμία με τον αρχαιολογικό χώρο και το Ασκληπιείο\n\nΤο απόγευμα αναχώρηση για Σμύρνη.\nΆφιξη, μεταφορά στο ξενοδοχείο, τακτοποίηση, δείπνο.\n\nΔιανυκτέρευση στη Σμύρνη.',
        day6: '6η Μέρα: Σμύρνη – Έφεσος – Κιρκιντζέ – Κουσάντασι – Σμύρνη\n\nΠρόγευμα και αναχώρηση για την Αρχαία Έφεσο, έναν από τους σημαντικότερους αρχαιολογικούς χώρους της Ανατολής:\n\n• Βιβλιοθήκη του Κέλσου\n• Λεωφόρος των Κουρητών\n• Το μεγαλύτερο θέατρο της αρχαιότητας\n• Άλλα σημαντικά μνημεία, με επεξηγήσεις από την αρχηγό μας\n\nΕπίσης:\n• Προσκύνημα στον Τάφο του Αγίου Ιωάννη του Θεολόγου δίπλα από την Έφεσο\n\nΣτη συνέχεια επίσκεψη στο χωριό Κιρκιντζέ, γενέτειρα της Διδώς Σωτηρίου, με την ατμόσφαιρα που περιγράφεται στα «Ματωμένα Χώματα» ως επίγειος παράδεισος.\n\nΑκολούθως μετάβαση στο Κουσάντασι, πρωτεύουσα των αγορών της περιοχής, με χρόνο ελεύθερο για βόλτα και ψώνια.\n\nΤο βράδυ, επιστροφή στη Σμύρνη και στάση για να δούμε την Αγία Φωτεινή.\nΔείπνο στο ξενοδοχείο.\n\nΔιανυκτέρευση στη Σμύρνη.',
        day7: '7η Μέρα: Σμύρνη – Ερυθραία Χερσόνησος – Τσεσμέ – Σμύρνη\n\nΠρόγευμα και αναχώρηση προς:\n\n• Βουρλά, πατρίδα του Γιώργου Σεφέρη – «εκεί όπου βλάστησαν τα παιδικά μου χρόνια»\n• Συνέχεια προς τα πανέμορφα Αλάτσατα, με εξαιρετική φυσική ομορφιά, περιβόλια και μοναδικά παραδοσιακά αρχοντικά\n• Μεταφορά στο λιμάνι του Τσεσμέ, περιήγηση και ελεύθερος χρόνος\n\nΕπιστροφή στη Σμύρνη.\nΔείπνο στο ξενοδοχείο.\n\nΔιανυκτέρευση στη Σμύρνη.',
        day8: '8η Μέρα: Σμύρνη – Αθήνα – Λάρνακα\n\nΠρόγευμα και ξενάγηση στην πόλη της Σμύρνης:\n\nΘα δούμε:\n\n• Το Μπεζεστένι\n• Τη Ρωμαϊκή Αγορά\n• Το Ελληνικό Προξενείο\n• Τα παλιά ελληνικά κτίρια που έχουν διασωθεί\n• Τον Άγιο Πολύκαρπο\n• Το πρώην Παρεναγωγείο\n• Τον Άγιο Βούκολο\n\nΣτη συνέχεια, μεταφορά στο αεροδρόμιο της Σμύρνης για την πτήση επιστροφής μέσω Αθηνών προς Λάρνακα.'
      },
      gallery: [
        '/images/destinations/istanbul-asia-minor-hero.webp'
      ]
    }
  },
  {
    id: 32,
    title: 'ΒΑΛΤΙΚΕΣ ΧΩΡΕΣ – Ρίγα – Ταλίν – Βίλνιους',
    destination: 'Baltic States',
    category: 'Summer Packages',
    price: 1295,
    duration: '8 days / 7 nights',
    description: 'Discover the three Baltic capitals: Riga, Tallinn, and Vilnius on this comprehensive 8-day tour through Latvia, Estonia, and Lithuania.',
    longDescription: 'Experience the charm of the three Baltic capitals: Riga, the elegant capital of Latvia; Tallinn, the "queen" of the Baltic; and Vilnius, the capital of Lithuania. Explore medieval old towns, baroque palaces, and unique cultural heritage across these three fascinating countries.',
    image: '🇱🇻',
    featured: true,
    details: {
      departureDate: '09/07, 16/07, 23/07, 30/07, 06/08, 13/08, 20/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Riga, Tallinn, Vilnius, Baltic States',
      monthAvailability: 'July, August',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Air Baltic',
      includedLuggage: '1 checked bag 23kg + 1 hand luggage 8kg',
      coverImage: '/images/destinations/baltic-states-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '09/07, 16/07, 23/07, 30/07, 06/08, 13/08, 20/08',
          route: 'Larnaca (LCA) → Riga (RIX)',
          flight: 'BT 658',
          time: '15:20 → 19:25',
          luggage: '1 checked bag'
        },
        {
          direction: 'Return',
          date: '09/07, 16/07, 23/07, 30/07, 06/08, 13/08, 20/08',
          route: 'Vilnius (VNO) → Riga (RIX)',
          flight: 'BT 350',
          time: '05:35 → 06:25',
          luggage: '1 checked bag'
        },
        {
          direction: 'Return',
          date: '09/07, 16/07, 23/07, 30/07, 06/08, 13/08, 20/08',
          route: 'Riga (RIX) → Larnaca (LCA)',
          flight: 'BT 657',
          time: '10:40 → 14:40',
          luggage: '1 checked bag'
        }
      ],
      hotels: [
        // Period A: 09/07, 16/07, 20/08
        {
          name: 'Riga Hotel – Riga',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/riga-hotel.webp',
          location: 'Riga Hotel, Riga, Latvia',
          prices: {
            double: 1295,
            single: 1599,
            child1: 1079
          },
          departureDate: '09/07',
          packagePrice: 2590
        },
        {
          name: 'Tallinn Hotel – Tallinn',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/tallinn-hotel.webp',
          location: 'Tallinn Hotel, Tallinn, Estonia',
          prices: {
            double: 1295,
            single: 1599,
            child1: 1079
          },
          departureDate: '09/07',
          packagePrice: 2590
        },
        {
          name: 'Vilnius Hotel – Vilnius',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/vilnius-hotel.webp',
          location: 'Vilnius Hotel, Vilnius, Lithuania',
          prices: {
            double: 1295,
            single: 1599,
            child1: 1079
          },
          departureDate: '09/07',
          packagePrice: 2590
        },
        {
          name: 'Riga Hotel – Riga',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/riga-hotel.webp',
          location: 'Riga Hotel, Riga, Latvia',
          prices: {
            double: 1295,
            single: 1599,
            child1: 1079
          },
          departureDate: '16/07',
          packagePrice: 2590
        },
        {
          name: 'Tallinn Hotel – Tallinn',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/tallinn-hotel.webp',
          location: 'Tallinn Hotel, Tallinn, Estonia',
          prices: {
            double: 1295,
            single: 1599,
            child1: 1079
          },
          departureDate: '16/07',
          packagePrice: 2590
        },
        {
          name: 'Vilnius Hotel – Vilnius',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/vilnius-hotel.webp',
          location: 'Vilnius Hotel, Vilnius, Lithuania',
          prices: {
            double: 1295,
            single: 1599,
            child1: 1079
          },
          departureDate: '16/07',
          packagePrice: 2590
        },
        {
          name: 'Riga Hotel – Riga',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/riga-hotel.webp',
          location: 'Riga Hotel, Riga, Latvia',
          prices: {
            double: 1295,
            single: 1599,
            child1: 1079
          },
          departureDate: '20/08',
          packagePrice: 2590
        },
        {
          name: 'Tallinn Hotel – Tallinn',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/tallinn-hotel.webp',
          location: 'Tallinn Hotel, Tallinn, Estonia',
          prices: {
            double: 1295,
            single: 1599,
            child1: 1079
          },
          departureDate: '20/08',
          packagePrice: 2590
        },
        {
          name: 'Vilnius Hotel – Vilnius',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/vilnius-hotel.webp',
          location: 'Vilnius Hotel, Vilnius, Lithuania',
          prices: {
            double: 1295,
            single: 1599,
            child1: 1079
          },
          departureDate: '20/08',
          packagePrice: 2590
        },
        // Period B: 23/07, 30/07, 06/08, 13/08
        {
          name: 'Riga Hotel – Riga',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/riga-hotel.webp',
          location: 'Riga Hotel, Riga, Latvia',
          prices: {
            double: 1325,
            single: 1629,
            child1: 1099
          },
          departureDate: '23/07',
          packagePrice: 2650
        },
        {
          name: 'Tallinn Hotel – Tallinn',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/tallinn-hotel.webp',
          location: 'Tallinn Hotel, Tallinn, Estonia',
          prices: {
            double: 1325,
            single: 1629,
            child1: 1099
          },
          departureDate: '23/07',
          packagePrice: 2650
        },
        {
          name: 'Vilnius Hotel – Vilnius',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/vilnius-hotel.webp',
          location: 'Vilnius Hotel, Vilnius, Lithuania',
          prices: {
            double: 1325,
            single: 1629,
            child1: 1099
          },
          departureDate: '23/07',
          packagePrice: 2650
        },
        {
          name: 'Riga Hotel – Riga',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/riga-hotel.webp',
          location: 'Riga Hotel, Riga, Latvia',
          prices: {
            double: 1325,
            single: 1629,
            child1: 1099
          },
          departureDate: '30/07',
          packagePrice: 2650
        },
        {
          name: 'Tallinn Hotel – Tallinn',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/tallinn-hotel.webp',
          location: 'Tallinn Hotel, Tallinn, Estonia',
          prices: {
            double: 1325,
            single: 1629,
            child1: 1099
          },
          departureDate: '30/07',
          packagePrice: 2650
        },
        {
          name: 'Vilnius Hotel – Vilnius',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/vilnius-hotel.webp',
          location: 'Vilnius Hotel, Vilnius, Lithuania',
          prices: {
            double: 1325,
            single: 1629,
            child1: 1099
          },
          departureDate: '30/07',
          packagePrice: 2650
        },
        {
          name: 'Riga Hotel – Riga',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/riga-hotel.webp',
          location: 'Riga Hotel, Riga, Latvia',
          prices: {
            double: 1325,
            single: 1629,
            child1: 1099
          },
          departureDate: '06/08',
          packagePrice: 2650
        },
        {
          name: 'Tallinn Hotel – Tallinn',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/tallinn-hotel.webp',
          location: 'Tallinn Hotel, Tallinn, Estonia',
          prices: {
            double: 1325,
            single: 1629,
            child1: 1099
          },
          departureDate: '06/08',
          packagePrice: 2650
        },
        {
          name: 'Vilnius Hotel – Vilnius',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/vilnius-hotel.webp',
          location: 'Vilnius Hotel, Vilnius, Lithuania',
          prices: {
            double: 1325,
            single: 1629,
            child1: 1099
          },
          departureDate: '06/08',
          packagePrice: 2650
        },
        {
          name: 'Riga Hotel – Riga',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/riga-hotel.webp',
          location: 'Riga Hotel, Riga, Latvia',
          prices: {
            double: 1325,
            single: 1629,
            child1: 1099
          },
          departureDate: '13/08',
          packagePrice: 2650
        },
        {
          name: 'Tallinn Hotel – Tallinn',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/tallinn-hotel.webp',
          location: 'Tallinn Hotel, Tallinn, Estonia',
          prices: {
            double: 1325,
            single: 1629,
            child1: 1099
          },
          departureDate: '13/08',
          packagePrice: 2650
        },
        {
          name: 'Vilnius Hotel – Vilnius',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/vilnius-hotel.webp',
          location: 'Vilnius Hotel, Vilnius, Lithuania',
          prices: {
            double: 1325,
            single: 1629,
            child1: 1099
          },
          departureDate: '13/08',
          packagePrice: 2650
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Ρίγα & Βίλνιους – Ρίγα – Λάρνακα με Air Baltic',
        'Φόροι αεροδρομίων',
        '7 διανυκτερεύσεις σε ξενοδοχεία 4★ με πρόγευμα',
        'Μεταφορές, εκδρομές & περιηγήσεις σύμφωνα με το πρόγραμμα',
        'Τοπικοί αγγλόφωνοι ξεναγοί όπου απαιτείται',
        'Έμπειρος ελληνόφωνος αρχηγός / συνοδός καθ\' όλη τη διάρκεια του ταξιδιού',
        '1 γεύμα (όπως αναφέρεται στο πρόγραμμα)',
        'Εισιτήρια εισόδων για: Κάστρο Τουράιντα, Παλάτι Ρούνταλε, Κάστρο Τρακάι',
        'Μία αποσκευή 23 κιλών & μία χειραποσκευή 8 κιλών ανά άτομο',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Πρόσθετα γεύματα & ποτά',
        'Δικαιώματα εισόδων σε αξιοθέατα που δεν αναφέρονται ρητά ως περιλαμβανόμενα',
        'Οτιδήποτε δεν αναφέρεται ρητά στο πρόγραμμα ή αναφέρεται ως προαιρετικό ή προτεινόμενο'
      ],
      cancellationPolicy: 'Ακύρωση μέχρι 45 μέρες πριν την άφιξη: παρακράτηση €50 ανά άτομο (λειτουργικά έξοδα). Ακύρωση 45–30 μέρες πριν: παρακράτηση 30% της συνολικής τιμής. Ακύρωση 30–21 μέρες πριν: παρακράτηση 50% της συνολικής τιμής. Ακύρωση από 21 μέρες έως και την αναχώρηση: παρακράτηση 100% της συνολικής τιμής. Σε περίπτωση μη εμφάνισης (no-show): παρακράτηση 100% της συνολικής τιμής. Για μέσα ολικής ναύλωσης, κρουαζιέρες, σκι, εκθέσεις, συνέδρια κ.λπ. τα ακυρωτικά δύνανται να φθάσουν έως 100% ανεξάρτητα από τον χρόνο ακύρωσης.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά την ώρα της κράτησης',
        'Με την κράτηση απαιτείται προκαταβολή 30% της αξίας του πακέτου',
        'Η εξόφληση γίνεται περίπου 21 μέρες πριν την αναχώρηση',
        'Ακύρωση μέχρι 45 μέρες πριν την άφιξη: παρακράτηση €50 ανά άτομο (λειτουργικά έξοδα)',
        'Ακύρωση 45–30 μέρες πριν: παρακράτηση 30% της συνολικής τιμής',
        'Ακύρωση 30–21 μέρες πριν: παρακράτηση 50% της συνολικής τιμής',
        'Ακύρωση από 21 μέρες έως και την αναχώρηση: παρακράτηση 100% της συνολικής τιμής',
        'Σε περίπτωση μη εμφάνισης (no-show): παρακράτηση 100% της συνολικής τιμής',
        'Για μέσα ολικής ναύλωσης, κρουαζιέρες, σκι, εκθέσεις, συνέδρια κ.λπ. τα ακυρωτικά δύνανται να φθάσουν έως 100% ανεξάρτητα από τον χρόνο ακύρωσης'
      ],
      program: {
        introduction: 'ΒΑΛΤΙΚΕΣ ΧΩΡΕΣ – Ρίγα – Ταλίν – Βίλνιους\n\nΜια μοναδική εκδρομή στις τρεις πρωτεύουσες της Βαλτικής: τη Ρίγα, την κομψή πρωτεύουσα της Λετονίας, το Ταλίν, τη «βασίλισσα» της Βαλτικής, και το Βίλνιους, την πρωτεύουσα της Λιθουανίας. Εξερευνήστε μεσαιωνικές παλιές πόλεις, μπαρόκ παλάτια και μοναδική πολιτιστική κληρονομιά σε αυτές τις τρεις συναρπαστικές χώρες.',
        day1: '1η Μέρα: Λάρνακα – Ρίγα\n\nΣυγκέντρωση στο αεροδρόμιο Λάρνακας και απευθείας πτήση για Ρίγα, την κομψή πρωτεύουσα της Λετονίας, χτισμένη στις όχθες του ποταμού Νταουγκάβα.\n\nΆφιξη, μεταφορά στο ξενοδοχείο και τακτοποίηση στα δωμάτια.\n\nΕλεύθερος χρόνος για:\n\n• Πρώτη γνωριμία με το ιστορικό κέντρο\n• Βόλτα στους εμπορικούς δρόμους\n• Επίσκεψη σε παλαιοπωλεία και boutiques\n• Καφέ ή ποτό σε ατμοσφαιρικά café με έντονο κεντροευρωπαϊκό χαρακτήρα\n\nΔιανυκτέρευση στη Ρίγα.',
        day2: '2η Μέρα: Ρίγα – Περιπατητική ξενάγηση\n\nΠρόγευμα στο ξενοδοχείο και αναχώρηση για περιπατητική ξενάγηση στην καρδιά της παλιάς πόλης της Ρίγας.\n\nΘα δούμε:\n\n• Εκκλησία Αγίου Πέτρου με τον διάσημο πετεινό στο καμπαναριό\n• Εκκλησία Αγίου Ιακώβου\n• Πλατεία Καθεδρικού & Καθεδρικός Ναός, με ένα από τα σημαντικότερα εκκλησιαστικά όργανα στον κόσμο\n• Πύργος της Πυρίτιδας και τμήματα των μεσαιωνικών τειχών\n• Τα ιστορικά πέτρινα σπίτια «Τρεις Αδελφοί»\n• Τις Μεγάλες & Μικρές Συντεχνίες\n• Το οχυρωματικό τείχος με τη Σουηδική Πύλη, τη μοναδική σωζόμενη πύλη της παλιάς πόλης\n• Το Σπίτι της Γάτας και την ιστορία του\n• Την Πλατεία Δημαρχείου με το κομψό Σπίτι των Μαυροκέφαλων\n• Το Κάστρο της Ρίγας, έδρα του Προέδρου και του Κοινοβουλίου\n• Το Μνημείο της Ελευθερίας\n• Την εντυπωσιακή Όπερα της Ρίγας\n\nΣτη συνέχεια, μεταφερόμαστε στην περιοχή Art Nouveau, όπου θα θαυμάσουμε τη μεγαλύτερη και καλύτερα διατηρημένη συλλογή κτιρίων αρ νουβό στον κόσμο – περίπου 800 κτίρια – χαρακτηρισμένα ως Μνημεία Παγκόσμιας Κληρονομιάς UNESCO από το 1997.\n\nΥπόλοιπο της ημέρας ελεύθερο.\nΔιανυκτέρευση στη Ρίγα.',
        day3: '3η Μέρα: Ρίγα – Ταλίν\n\nΠρόγευμα και αναχώρηση οδικώς για το Ταλίν, πρωτεύουσα της Εσθονίας, τη «βασίλισσα» της Βαλτικής.\n\nΆφιξη το μεσημέρι, τακτοποίηση στο ξενοδοχείο.\n\nΤο απόγευμα, περιπατητική ξενάγηση στη μεσαιωνική παλιά πόλη:\n\n• Πλακόστρωτα σοκάκια, μεσαιωνικά τείχη, γοτθικές εκκλησίες και πυργίσκοι\n• Η κεντρική πλατεία με τα πολύχρωμα σπίτια των παλιών εμπόρων\n• Καθεδρικός του Αλεξάντερ Νιέφσκυ\n• Ανάβαση στον λόφο Τομπέα, με επίσκεψη στον μεσαιωνικό Καθεδρικό Ναό της Παρθένου Μαρίας – ιστορική εκκλησία της γερμανικής ευγενικής τάξης\n• Πανοραμική θέα της πόλης από τα σημεία θέας του λόφου\n\nΔιανυκτέρευση στο Ταλίν.',
        day4: '4η Μέρα: Ταλίν – Παλάτι Kadriorg – Πιρίτα\n\nΠρόγευμα και αναχώρηση για:\n\n🔹 Παλάτι Kadriorg\n\n• Χτισμένο το 1718 από τον Μέγα Πέτρο για τη σύζυγό του Αικατερίνη Α\'\n• Σχεδιασμένο από τον Ιταλό αρχιτέκτονα Niccolo Michetti\n• Αντιπροσωπευτικό δείγμα τσαρικής μεγαλοπρέπειας, με πανέμορφους κήπους\n• Σήμερα φιλοξενεί συλλογές ξένης τέχνης\n\nΣτη συνέχεια κατευθυνόμαστε προς την περιοχή Pirita:\n\n• Επίσκεψη στη μαρίνα των Ολυμπιακών Αγώνων του 1980\n• Γνωριμία με την ιστορία του Μοναστηριού της Αγίας Βριγίτας\n• Απόλαυση της λευκής αμμώδους παραλίας της περιοχής\n\nΤο απόγευμα ελεύθερο για να συνεχίσετε τις βόλτες στην ατμοσφαιρική μεσαιωνική πόλη του Ταλίν.\n\nΔιανυκτέρευση στο Ταλίν.',
        day5: '5η Μέρα: Ταλίν – Σιγκούλντα – Εθνικό Πάρκο Γκαούια – Ρίγα\n\nΠρόγευμα και αναχώρηση για τη γραφική Σιγκούλντα και το Εθνικό Πάρκο Γκαούια, μια περιοχή ξεχωριστής φυσικής ομορφιάς, με δάση, φαράγγια, κάστρα και πλούσια άγρια ζωή.\n\nΘα επισκεφθούμε:\n\n• Το Κάστρο Τουράιντα, ένα από τα σημαντικότερα μεσαιωνικά μνημεία της Λετονίας, με ιστορία από τις αρχές του 13ου αιώνα και πλούσιο μουσειακό χαρακτήρα\n• Το σπήλαιο Γκουτμάνις, το βαθύτερο σπήλαιο εσωτερικής διάβρωσης στις βαλτικές χώρες (βάθος 19 μ.), τόπο που περιβάλλεται από μύθους και τοπικούς θρύλους\n\nΑργά το απόγευμα άφιξη ξανά στη Ρίγα, μεταφορά στο ξενοδοχείο.\n\nΔιανυκτέρευση στη Ρίγα.',
        day6: '6η Μέρα: Ρίγα – Ρούνταλε – Λόφος των Σταυρών – Βίλνιους\n\nΠρόγευμα και αναχώρηση για το Ρούνταλε.\n\nΕπίσκεψη στο περίλαμπρο Παλάτι Ρούνταλε με τους θαυμάσιους κήπους, ένα από τα ωραιότερα μπαρόκ/ροκοκό παλάτια της Βαλτικής.\n\nΤο παλάτι σχεδιάστηκε από τον διάσημο αρχιτέκτονα Ραστρέλλι, δημιουργό και του Ερμιτάζ στην Αγία Πετρούπολη, και χτίστηκε για την Τσαρίνα Άννα.\n\nΑκολουθεί γεύμα (περιλαμβάνεται).\n\nΣτη συνέχεια κατευθυνόμαστε προς τον Λόφο των Σταυρών, περίπου 12 χλμ. βόρεια της πόλης Σιαουλιάι:\n\n• Σημείο-σύμβολο της πίστης των Λιθουανών\n• Χιλιάδες σταυροί, αγάλματα και προσευχητάρια έχουν τοποθετηθεί εκεί μέσα στους αιώνες, δημιουργώντας ένα μοναδικό, συγκινητικό τοπίο\n\nΑργά το απόγευμα άφιξη στο Βίλνιους, πρωτεύουσα της Λιθουανίας.\nΜεταφορά στο ξενοδοχείο και τακτοποίηση.\n\nΔιανυκτέρευση στο Βίλνιους.',
        day7: '7η Μέρα: Βίλνιους – Περιπατητική ξενάγηση – Τρακάι\n\nΠρόγευμα και περιπατητική ξενάγηση στο ιστορικό κέντρο του Βίλνιους.\n\nΘα δούμε:\n\n• Την εντυπωσιακή μπαρόκ Εκκλησία Αγίων Πέτρου και Παύλου\n• Τα γραφικά πλακόστρωτα δρομάκια της Παλιάς Πόλης\n• Τον ολόλευκο Καθεδρικό Ναό\n• Τη γοτθική Εκκλησία της Αγίας Άννας\n• Το αρχιτεκτονικό συγκρότημα του Πανεπιστημίου Βίλνιους, από τα παλαιότερα της Ευρώπης\n\nΣτη συνέχεια αναχωρούμε για την παραμυθένια κωμόπολη Τρακάι, πρώτη πρωτεύουσα της Λιθουανίας, χτισμένη στις όχθες της λίμνης Γκάλβε.\n\nΕπίσκεψη στο κάστρο-μουσείο του Βιτάουτας, κτισμένο πάνω σε νησί της λίμνης τον 15ο αιώνα – ένα από τα σημαντικότερα μνημεία της χώρας.\n\nΕπιστροφή στο ξενοδοχείο.\nΔιανυκτέρευση στο Βίλνιους.',
        day8: '8η Μέρα: Βίλνιους – Ρίγα – Λάρνακα\n\nΠρόγευμα (breakfast box).\n\nΜεταφορά στο αεροδρόμιο του Βίλνιους για πτήση προς Ρίγα και στη συνέχεια για Λάρνακα.\n\nΕπιστροφή γεμάτοι εικόνες, ιστορία και εμπειρίες από τρεις υπέροχες πρωτεύουσες της Βαλτικής.'
      },
      gallery: [
        '/images/destinations/baltic-states-hero.webp'
      ]
    }
  },
  {
    id: 33,
    title: 'ΚΩΝΣΤΑΝΤΙΝΟΥΠΟΛΗ – ΚΑΠΠΑΔΟΚΙΑ',
    destination: 'Turkey',
    category: 'Summer Packages',
    price: 1395,
    duration: '8 days / 7 nights',
    description: 'Discover Istanbul and the magical landscapes of Cappadocia with visits to Prusa, underground cities, and fairy chimneys on this comprehensive 8-day tour.',
    longDescription: 'Experience the magic of Istanbul and explore the unique landscapes of Cappadocia. Visit Prusa, the first Ottoman capital, explore underground cities, rock-cut churches, and the famous fairy chimneys. This 8-day journey combines Byzantine and Ottoman history with the natural wonders of Cappadocia.',
    image: '🇹🇷',
    featured: true,
    details: {
      departureDate: '15/07, 22/07, 29/07, 05/08, 12/08, 26/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Istanbul, Prusa, Cappadocia, Turkey',
      monthAvailability: 'July, August',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast / Half Board',
      airline: 'Aegean Airlines / Turkish Airlines',
      includedLuggage: '1 checked bag 23kg + 1 hand luggage 8kg (international), 1 checked bag 20kg + 1 hand luggage 8kg (domestic)',
      coverImage: '/images/destinations/istanbul-cappadocia-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '15/07, 22/07, 29/07, 05/08, 12/08, 26/08',
          route: 'Larnaca (LCA) → Athens (ATH)',
          flight: 'A3 903',
          time: '10:15 → 12:00',
          luggage: '1 checked bag'
        },
        {
          direction: 'Departure',
          date: '15/07, 22/07, 29/07, 05/08, 12/08, 26/08',
          route: 'Athens (ATH) → Istanbul (IST)',
          flight: 'A3 992',
          time: '13:00 → 14:45',
          luggage: '1 checked bag'
        },
        {
          direction: 'Domestic',
          date: '15/07, 22/07, 29/07, 05/08, 12/08, 26/08',
          route: 'Kayseri (ASR) → Istanbul (IST)',
          flight: 'Turkish Airlines',
          time: 'TBA',
          luggage: '1 checked bag 20kg'
        },
        {
          direction: 'Return',
          date: '15/07, 22/07, 29/07, 05/08, 12/08, 26/08',
          route: 'Istanbul (IST) → Athens (ATH)',
          flight: 'A3 995',
          time: '20:50 → 22:20',
          luggage: '1 checked bag'
        },
        {
          direction: 'Return',
          date: '15/07, 22/07, 29/07, 05/08, 12/08, 26/08',
          route: 'Athens (ATH) → Larnaca (LCA)',
          flight: 'A3 910',
          time: '23:45 → 01:20 (+1)',
          luggage: '1 checked bag'
        }
      ],
      hotels: [
        // Period A: 15/07, 29/07, 05/08
        {
          name: 'Prusa Hotel – Prusa',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/prusa-hotel.webp',
          location: 'Prusa Hotel, Prusa, Turkey',
          prices: {
            double: 1395,
            single: 1735,
            child1: 1195
          },
          departureDate: '15/07',
          packagePrice: 2790
        },
        {
          name: 'Cappadocia Hotel – Neapoli',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/cappadocia-hotel.webp',
          location: 'Cappadocia Hotel, Neapoli, Cappadocia, Turkey',
          prices: {
            double: 1395,
            single: 1735,
            child1: 1195
          },
          departureDate: '15/07',
          packagePrice: 2790
        },
        {
          name: 'Istanbul Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/istanbul-hotel.webp',
          location: 'Istanbul Hotel, Istanbul, Turkey',
          prices: {
            double: 1395,
            single: 1735,
            child1: 1195
          },
          departureDate: '15/07',
          packagePrice: 2790
        },
        {
          name: 'Prusa Hotel – Prusa',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/prusa-hotel.webp',
          location: 'Prusa Hotel, Prusa, Turkey',
          prices: {
            double: 1395,
            single: 1735,
            child1: 1195
          },
          departureDate: '29/07',
          packagePrice: 2790
        },
        {
          name: 'Cappadocia Hotel – Neapoli',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/cappadocia-hotel.webp',
          location: 'Cappadocia Hotel, Neapoli, Cappadocia, Turkey',
          prices: {
            double: 1395,
            single: 1735,
            child1: 1195
          },
          departureDate: '29/07',
          packagePrice: 2790
        },
        {
          name: 'Istanbul Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/istanbul-hotel.webp',
          location: 'Istanbul Hotel, Istanbul, Turkey',
          prices: {
            double: 1395,
            single: 1735,
            child1: 1195
          },
          departureDate: '29/07',
          packagePrice: 2790
        },
        {
          name: 'Prusa Hotel – Prusa',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/prusa-hotel.webp',
          location: 'Prusa Hotel, Prusa, Turkey',
          prices: {
            double: 1395,
            single: 1735,
            child1: 1195
          },
          departureDate: '05/08',
          packagePrice: 2790
        },
        {
          name: 'Cappadocia Hotel – Neapoli',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/cappadocia-hotel.webp',
          location: 'Cappadocia Hotel, Neapoli, Cappadocia, Turkey',
          prices: {
            double: 1395,
            single: 1735,
            child1: 1195
          },
          departureDate: '05/08',
          packagePrice: 2790
        },
        {
          name: 'Istanbul Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/istanbul-hotel.webp',
          location: 'Istanbul Hotel, Istanbul, Turkey',
          prices: {
            double: 1395,
            single: 1735,
            child1: 1195
          },
          departureDate: '05/08',
          packagePrice: 2790
        },
        // Period B: 22/07, 12/08, 26/08
        {
          name: 'Prusa Hotel – Prusa',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/prusa-hotel.webp',
          location: 'Prusa Hotel, Prusa, Turkey',
          prices: {
            double: 1449,
            single: 1785,
            child1: 1215
          },
          departureDate: '22/07',
          packagePrice: 2898
        },
        {
          name: 'Cappadocia Hotel – Neapoli',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/cappadocia-hotel.webp',
          location: 'Cappadocia Hotel, Neapoli, Cappadocia, Turkey',
          prices: {
            double: 1449,
            single: 1785,
            child1: 1215
          },
          departureDate: '22/07',
          packagePrice: 2898
        },
        {
          name: 'Istanbul Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/istanbul-hotel.webp',
          location: 'Istanbul Hotel, Istanbul, Turkey',
          prices: {
            double: 1449,
            single: 1785,
            child1: 1215
          },
          departureDate: '22/07',
          packagePrice: 2898
        },
        {
          name: 'Prusa Hotel – Prusa',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/prusa-hotel.webp',
          location: 'Prusa Hotel, Prusa, Turkey',
          prices: {
            double: 1449,
            single: 1785,
            child1: 1215
          },
          departureDate: '12/08',
          packagePrice: 2898
        },
        {
          name: 'Cappadocia Hotel – Neapoli',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/cappadocia-hotel.webp',
          location: 'Cappadocia Hotel, Neapoli, Cappadocia, Turkey',
          prices: {
            double: 1449,
            single: 1785,
            child1: 1215
          },
          departureDate: '12/08',
          packagePrice: 2898
        },
        {
          name: 'Istanbul Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/istanbul-hotel.webp',
          location: 'Istanbul Hotel, Istanbul, Turkey',
          prices: {
            double: 1449,
            single: 1785,
            child1: 1215
          },
          departureDate: '12/08',
          packagePrice: 2898
        },
        {
          name: 'Prusa Hotel – Prusa',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/prusa-hotel.webp',
          location: 'Prusa Hotel, Prusa, Turkey',
          prices: {
            double: 1449,
            single: 1785,
            child1: 1215
          },
          departureDate: '26/08',
          packagePrice: 2898
        },
        {
          name: 'Cappadocia Hotel – Neapoli',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/cappadocia-hotel.webp',
          location: 'Cappadocia Hotel, Neapoli, Cappadocia, Turkey',
          prices: {
            double: 1449,
            single: 1785,
            child1: 1215
          },
          departureDate: '26/08',
          packagePrice: 2898
        },
        {
          name: 'Istanbul Hotel – Istanbul',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/istanbul-hotel.webp',
          location: 'Istanbul Hotel, Istanbul, Turkey',
          prices: {
            double: 1449,
            single: 1785,
            child1: 1215
          },
          departureDate: '26/08',
          packagePrice: 2898
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Αθήνα – Κωνσταντινούπολη – Αθήνα – Λάρνακα με Aegean Airlines',
        'Αεροπορικά εισιτήρια Καισάρεια – Κωνσταντινούπολη (εσωτερική πτήση Turkish Airlines)',
        'Φόροι αεροδρομίων',
        '1 αποσκευή 23kg + 1 χειραποσκευή 8kg για τις διεθνείς πτήσεις',
        '1 αποσκευή 20kg + 1 χειραποσκευή 8kg για την εσωτερική πτήση',
        'Διαμονή σε ξενοδοχεία 4★ & 5★ με πρωινό',
        '4 δείπνα στα ξενοδοχεία Προύσας (1) & Καππαδοκίας (3)',
        'Έμπειρος τοπικός ελληνόφωνος αρχηγός / συνοδός καθ\' όλη τη διάρκεια του προγράμματος',
        'Μεταφορές, εκδρομές & περιηγήσεις όπως αναφέρονται στο πρόγραμμα με πολυτελή πούλμαν',
        'Κρουαζιέρα στον Βόσπορο',
        'Υπηρεσίες των τοπικών αντιπροσώπων'
      ],
      notIncluded: [
        'Βίζα για την Τουρκία (έκδοση ηλεκτρονικά, κόστος περίπου €50 ανά άτομο)',
        'Ποτά στα δείπνα',
        'Δικαιώματα εισόδων σε μουσεία/αρχαιολογικούς χώρους, όπου δεν αναφέρεται ρητά ότι περιλαμβάνονται',
        'Προαιρετικές δραστηριότητες (π.χ. πτήση με αερόστατο)',
        'Οτιδήποτε δεν αναφέρεται ρητά στο πρόγραμμα ή αναφέρεται ως προαιρετικό ή προτεινόμενο'
      ],
      cancellationPolicy: 'Ακύρωση έως 45 μέρες πριν την άφιξη: χρέωση €50 ανά άτομο (λειτουργικά έξοδα). Ακύρωση από 44 έως 31 μέρες: χρέωση 30% της συνολικής τιμής. Ακύρωση από 30 έως 21 μέρες: χρέωση 50% της συνολικής τιμής. Ακύρωση από 20 μέρες έως και την αναχώρηση: χρέωση 100%. Σε περίπτωση μη εμφάνισης (no-show): χρέωση 100% της συνολικής τιμής. Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, σκι, εκθέσεις, συνέδρια και συναφείς διεθνείς εκδηλώσεις, τα ακυρωτικά μπορούν να φτάσουν έως και 100%, ανεξαρτήτως ημερομηνίας ακύρωσης.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά τη στιγμή της κράτησης',
        'Με την κράτηση καταβάλλεται προκαταβολή 30% της αξίας του πακέτου',
        'Η εξόφληση γίνεται περίπου 21 μέρες πριν την αναχώρηση',
        'Η έκδοση βίζας για Τουρκία γίνεται υποχρεωτικά από τον κάθε ταξιδιώτη μέσω διαδικτύου (www.evisa.gov.tr/en/, κόστος περίπου €50 ανά άτομο)',
        'Στην Τουρκία ταξιδεύετε μόνο με διαβατήριο, το οποίο πρέπει να έχει ισχύ τουλάχιστον 6 μήνες μετά την είσοδο στη χώρα',
        'Προαιρετική πτήση με αερόστατο στην Καππαδοκία (δεν περιλαμβάνεται)',
        'Ακύρωση έως 45 μέρες πριν την άφιξη: χρέωση €50 ανά άτομο (λειτουργικά έξοδα)',
        'Ακύρωση από 44 έως 31 μέρες: χρέωση 30% της συνολικής τιμής',
        'Ακύρωση από 30 έως 21 μέρες: χρέωση 50% της συνολικής τιμής',
        'Ακύρωση από 20 μέρες έως και την αναχώρηση: χρέωση 100%',
        'Σε περίπτωση μη εμφάνισης (no-show): χρέωση 100% της συνολικής τιμής',
        'Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, σκι, εκθέσεις, συνέδρια και συναφείς διεθνείς εκδηλώσεις, τα ακυρωτικά μπορούν να φτάσουν έως και 100%, ανεξαρτήτως ημερομηνίας ακύρωσης'
      ],
      program: {
        introduction: 'ΚΩΝΣΤΑΝΤΙΝΟΥΠΟΛΗ – ΚΑΠΠΑΔΟΚΙΑ\n\nΜια μοναδική εκδρομή που συνδυάζει τη μαγεία της Κωνσταντινούπολης με τα μαγευτικά τοπία της Καππαδοκίας. Εξερευνήστε την Προύσα, την πρώτη πρωτεύουσα των Οθωμανών, τις υπόγειες πόλεις, τις λαξευτές εκκλησίες και τις περίφημες «νεραιδένιες καμινάδες». Ένα ταξίδι που συνδυάζει βυζαντινή και οθωμανική ιστορία με τα φυσικά θαύματα της Καππαδοκίας.',
        day1: '1η Μέρα: Λάρνακα – Αθήνα – Κωνσταντινούπολη – Προύσα\n\nΣυγκέντρωση στο αεροδρόμιο Λάρνακας και πτήση για Κωνσταντινούπολη με ενδιάμεση στάση στην Αθήνα.\n\nΆφιξη στην Πόλη, συνάντηση με την αρχηγό και άμεση αναχώρηση οδικώς για την ιστορική Προύσα, την πρώτη πρωτεύουσα των Οθωμανών, χτισμένη στους πρόποδες του όρους Ολύμπου της Βιθυνίας.\n\nΆφιξη – μεταφορά στο ξενοδοχείο – τακτοποίηση δωματίων.\n\nΔείπνο & διανυκτέρευση στην Προύσα.',
        day2: '2η Μέρα: Προύσα – Καππαδοκία\n\nΠρόγευμα και σύντομη περιήγηση στην Προύσα, για μια πρώτη γνωριμία με την πόλη, τα παραδοσιακά κτήρια και την ιδιαίτερη ατμόσφαιρά της.\n\nΈπειτα αναχωρούμε οδικώς για τη μαγευτική Καππαδοκία, στην καρδιά της Ανατολίας.\n\nΚατά τη διαδρομή:\n• Ενδιάμεσες στάσεις για ξεκούραση & φωτογραφίες\n• Σταδιακή γνωριμία με την ενδοχώρα της Τουρκίας\n\nΆφιξη στην Καππαδοκία – μεταφορά στο ξενοδοχείο – τακτοποίηση.\n\nΔείπνο & διανυκτέρευση στην Καππαδοκία.',
        day3: '3η Μέρα: Προκόπι – Άγιος Ιωάννης Ρώσος – Μαλακοπή – Κοιλάδα Περιστρέμματος – Καρβάλη\n\nΠρόγευμα και αναχώρηση για την πόλη του Προκοπίου.\n\nΠρόγραμμα ημέρας:\n\n• Περίπατος στα στενά δρομάκια της παλιάς πόλης με τα αρχοντικά και τα καλοδιατηρημένα κτήρια\n• Ανάβαση στον Πέτρινο Λόφο και προσκύνημα στον Άγιο Ιωάννη τον Ρώσο\n• Επίσκεψη στη Μαλακοπή, την πιο καλοδιατηρημένη υπόγεια πόλη της περιοχής:\n  - Κατάβαση σε υπόγειους διαδρόμους\n  - Πολυεπίπεδες στοές, αποθήκες, χώροι διαβίωσης & παρεκκλήσια\n• Επίσκεψη στην Εκκλησία των Αγίων Θεοδώρων\n• Περιήγηση στην εντυπωσιακή Κοιλάδα του Περιστρέμματος:\n  - Αγιογραφημένες, λαξευτές εκκλησίες\n  - Περίπατος στον ποταμό Μελεντίζ μέσα στο φαράγγι, με πρωτοχριστιανικούς ναούς σκαλισμένους στο βράχο\n• Επίσκεψη στην Καρβάλη:\n  - Γραφικό χωριό με πέτρινα σπίτια\n  - Επίσκεψη στην εκκλησία όπου μόνασε ο Γρηγόριος ο Θεολόγος\n  - Βόλτα στην κεντρική πλατεία του χωριού\n\nΕπιστροφή στο ξενοδοχείο.\nΔείπνο & διανυκτέρευση στην Καππαδοκία.\n\n💡 Πολύ νωρίς το πρωί της 3ης ημέρας (πριν την περιήγηση) υπάρχει δυνατότητα προαιρετικής πτήσης με αερόστατο για να θαυμάσετε από ψηλά το σεληνιακό τοπίο της Καππαδοκίας.',
        day4: '4η Μέρα: Προκόπι – Κοιλάδα Γκόρεμε – Άβανος – Πάσαμπαγ – Ουτσχισάρ\n\nΜετά το πρόγευμα αναχωρούμε για τη βόρεια, πιο εντυπωσιακή περιοχή της Καππαδοκίας.\n\nΣημεία ενδιαφέροντος:\n\n🔹 Κοιλάδα Γκόρεμε (Goreme)\n\n• Υπαίθριο μουσείο φυσικής ομορφιάς και χριστιανικής ιστορίας\n• Κωνικοί σχηματισμοί από πορώδη πέτρα, τα περίφημα "βραχώδη γλυπτά"\n• Λαξευτές εκκλησίες με σπουδαίες τοιχογραφίες:\n  - Εκκλησία του Μεγάλου Βασιλείου\n  - Εκκλησία του Μήλου\n  - Αγία Βαρβάρα\n  - Εκκλησία των Σανδάλων\n  - Σκοτεινή Εκκλησία\n  - Εκκλησία των Κρίνων\n\n🔹 Άβανος\n\n• Πόλη γνωστή για την παράδοση στην κεραμική\n• Επίσκεψη σε μουσείο/εργαστήριο κεραμικής και γνωριμία με την τέχνη αυτή\n\n🔹 Πάσαμπαγ (Pasabag)\n\n• Από τα πιο φωτογραφημένα σημεία της Καππαδοκίας\n• Οι εντυπωσιακές «νεραιδένιες καμινάδες» – σήμα κατατεθέν του τοπίου\n\n🔹 Ουτσχισάρ (Uçhisar)\n\n• Γραφικό χωριό με φυσικό βραχώδες κάστρο\n• Πανοραμική θέα στην Κοιλάδα των Περιστεριών & σε όλη την Καππαδοκία\n\nΕπιστροφή στο ξενοδοχείο.\nΔείπνο & διανυκτέρευση στην Καππαδοκία.',
        day5: '5η Μέρα: Προκόπι – Καισάρεια – Πτήση προς Κωνσταντινούπολη\n\nΠρόγευμα και αναχώρηση για την ιστορική Καισάρεια, από τις σημαντικότερες πόλεις της Καππαδοκίας, με βαθιές ρίζες στον ελληνισμό και τον χριστιανισμό της Μικράς Ασίας.\n\n• Περιήγηση στην πόλη\n• Ελεύθερος χρόνος στην παραδοσιακή αγορά για βόλτα & αγορές\n\nΣτη συνέχεια μεταφορά στο αεροδρόμιο Καισάρειας και πτήση για Κωνσταντινούπολη.\n\nΆφιξη – μεταφορά στο ξενοδοχείο – χρόνος για ξεκούραση.\n\nΤο απόγευμα/βράδυ:\n• Βόλτα στη Μεγάλη Οδό του Πέραν (Istiklal), μία από τις πιο ξακουστές λεωφόρους της Πόλης, περίπου 3 χλμ. γεμάτα καταστήματα, καφέ, παλιά κτήρια και ζωντανή ατμόσφαιρα.\n\nΕπιστροφή στο ξενοδοχείο.\nΔιανυκτέρευση στην Κωνσταντινούπολη.',
        day6: '6η Μέρα: Μπαλουκλί – Παναγία Βλαχερνών – Πατριαρχείο – Κρουαζιέρα Βόσπορο – Αιγυπτιακή Αγορά\n\nΜετά το πρωινό αναχωρούμε για τα σημαντικότερα προσκυνήματα της Πόλης και μια υπέροχη κρουαζιέρα.\n\nΠρόγραμμα:\n\n• Μπαλουκλί – Ζωοδόχος Πηγή\n  - Αγίασμα της Παναγίας Μπαλουκλιώτισσας\n  - Τάφοι Πατριαρχών\n  - Θέα στα Θεοδοσιανά Τείχη & τη Χρυσή Πύλη\n• Παναγία Βλαχερνών\n  - Ιερότατος ναός της Ορθοδοξίας\n  - Σύμφωνα με την παράδοση, εδώ εψάλει πρώτη φορά ο Ακάθιστος Ύμνος\n• Οικουμενικό Πατριαρχείο\n  - Πατριαρχικός Ναός Αγίου Γεωργίου\n  - Κλειστή Πύλη\n  - Χώρος μαρτυρίου του Πατριάρχη Γρηγορίου Ε\'\n• Κρουαζιέρα στον Βόσπορο\n  - Το θρυλικό θαλάσσιο πέρασμα που χωρίζει και ενώνει Ευρώπη & Ασία\n  - Θέα σε παλάτια, yali, γέφυρες και συνοικίες αμφιθεατρικά χτισμένες στις ακτές\n• Αιγυπτιακή Αγορά (Mısır Çarşısı)\n  - Αγορά μπαχαρικών, λουκουμιών, αποξηραμένων φρούτων & τοπικών προϊόντων\n  - Ελεύθερος χρόνος για αγορές\n\nΕπιστροφή στο ξενοδοχείο.\nΔιανυκτέρευση στην Κωνσταντινούπολη.',
        day7: '7η Μέρα: Αγία Σοφία – Μπλε Τζαμί – Βασιλική Στέρνα – Σκεπαστή Αγορά (Καπαλί Τσαρσί)\n\nΠρόγευμα και αναχώρηση για το ιστορικό κέντρο της Πόλης:\n\n• Αγία Σοφία – κορυφαίο μνημείο βυζαντινής αρχιτεκτονικής, σύμβολο της Πόλης\n• Μπλε Τζαμί (Σουλτάν Αχμέτ) – με τα διάσημα γαλάζια πλακίδια\n• Πλατεία Σουλτάν Αχμέτ με:\n  - Αιγυπτιακό Οβελίσκο\n  - Χώρο του Βυζαντινού Ιπποδρόμου\n• Βασιλική Στέρνα του Ιουστινιανού – υπόγεια δεξαμενή με 336 κίονες και τις περίφημες κεφαλές της Μέδουσας\n\nΣτη συνέχεια:\n• Καπαλί Τσαρσί (Grand Bazaar) – Σκεπαστή Αγορά:\n  - Περίπου 100 στεγασμένοι δρόμοι & 4.000 καταστήματα\n  - Κοσμήματα, υφάσματα, δερμάτινα, κεραμικά, μπαχαρικά, αναμνηστικά\n  - Ελεύθερος χρόνος για αγορές & βόλτα.\n\nΔιανυκτέρευση στην Κωνσταντινούπολη.',
        day8: '8η Μέρα: Παλάτι Ντολμαμπαχτσέ – Μονή της Χώρας – Λιμάνι Γαλατά – Λάρνακα\n\nΠρόγευμα και τελευταία ημέρα στην Πόλη.\n\nΠρόγραμμα:\n\n• Επίσκεψη στο Παλάτι Ντολμαμπαχτσέ\n  - Θεωρείται από τα ομορφότερα παλάτια του κόσμου\n  - «Βερσαλλίες της Ανατολής»\n  - Κτισμένο στις όχθες του Βοσπόρου, συνδυάζει οθωμανική πολυτέλεια και ευρωπαϊκή αρχιτεκτονική\n• Επίσκεψη στη Μονή της Χώρας\n  - Από τα σημαντικότερα μνημεία βυζαντινής τέχνης\n  - Υπέροχα ψηφιδωτά & τοιχογραφίες (παλαιολόγεια αναγέννηση)\n• Στάση στο Λιμάνι του Γαλατά\n  - Σύγχρονος ζωντανός χώρος\n  - Ιδανικό σημείο για περίπατο, καφέ & φωτογραφίες με φόντο τον Βόσπορο\n\nΣτη συνέχεια, μεταφορά στο αεροδρόμιο για την πτήση επιστροφής προς Λάρνακα μέσω Αθήνας, με τις καλύτερες αναμνήσεις από ένα ταξίδι γεμάτο ιστορία, πίστη, πολιτισμό και μοναδικά τοπία.'
      },
      gallery: [
        '/images/destinations/istanbul-cappadocia-hero.webp'
      ]
    }
  },
  {
    id: 34,
    title: 'ΠΙΕΣΤΑΝΥ – ΙΑΜΑΤΙΚΑ ΛΟΥΤΡΑ',
    destination: 'Slovakia',
    category: 'Summer Packages',
    price: 1649,
    duration: '9 days / 8 nights',
    description: 'Experience the healing thermal springs and therapeutic treatments of Piešťany, Slovakia\'s renowned spa town, with a comprehensive wellness program at the 4★ Ensana Esplanade Hotel.',
    longDescription: 'Το Πιεστάνυ είναι μια όμορφη λουτρόπολη της Σλοβακίας, χτισμένη στις όχθες του ποταμού Βαχ, περίπου 85 χλμ. από Μπρατισλάβα και 140 χλμ. από Βιέννη. Είναι παγκοσμίως γνωστό για τις ιαματικές θερμές πηγές και τη μοναδική θειούχα λάσπη που χρησιμοποιούνται σε εξειδικευμένα θεραπευτικά προγράμματα, ιδιαίτερα για παθήσεις του κινητικού & νευρικού συστήματος.',
    image: '🇸🇰',
    featured: true,
    details: {
      departureDate: '07/07, 11/08, 06/10',
      departureFrom: 'Larnaca',
      destinationFull: 'Piešťany, Slovakia',
      monthAvailability: 'July, August, October',
      roomType: 'Standard Room',
      boardBasis: 'Full Board',
      airline: 'Austrian Airlines',
      includedLuggage: '1 checked bag 23kg + 1 hand luggage 8kg',
      coverImage: '/images/destinations/piestany-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '07/07, 11/08',
          route: 'Larnaca (LCA) → Vienna (VIE)',
          flight: 'OS 794',
          time: '14:20 → 16:40',
          luggage: '1 checked bag'
        },
        {
          direction: 'Departure',
          date: '11/08',
          route: 'Larnaca (LCA) → Vienna (VIE)',
          flight: 'OS 796',
          time: '17:10 → 19:30',
          luggage: '1 checked bag'
        },
        {
          direction: 'Departure',
          date: '06/10',
          route: 'Larnaca (LCA) → Vienna (VIE)',
          flight: 'OS 794',
          time: '14:20 → 16:40',
          luggage: '1 checked bag'
        },
        {
          direction: 'Return',
          date: '07/07, 11/08, 06/10',
          route: 'Vienna (VIE) → Larnaca (LCA)',
          flight: 'OS 795',
          time: '12:20 → 16:20',
          luggage: '1 checked bag'
        }
      ],
      hotels: [
        // Period 1 - Summer: 07/07, 11/08
        {
          name: 'Ensana Esplanade – Wing Alameda',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/ensana-esplanade-alameda.webp',
          location: 'Ensana Esplanade – Wing Alameda, Piešťany, Slovakia',
          prices: {
            double: 1649,
            single: 1989
          },
          departureDate: '07/07',
          packagePrice: 3298
        },
        {
          name: 'Ensana Esplanade – Wing Alameda',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/ensana-esplanade-alameda.webp',
          location: 'Ensana Esplanade – Wing Alameda, Piešťany, Slovakia',
          prices: {
            double: 1649,
            single: 1989
          },
          departureDate: '11/08',
          packagePrice: 3298
        },
        // Period 2 - Autumn: 06/10
        {
          name: 'Ensana Esplanade – Wing Alameda',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/ensana-esplanade-alameda.webp',
          location: 'Ensana Esplanade – Wing Alameda, Piešťany, Slovakia',
          prices: {
            double: 1549,
            single: 1789
          },
          departureDate: '06/10',
          packagePrice: 3098
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Βιέννη – Λάρνακα με Austrian Airlines',
        'Φόροι αεροδρομίων & επίναυλος καυσίμων',
        '1 αποσκευή 23kg + 1 χειραποσκευή 8kg ανά άτομο',
        'Μεταφορές: Αεροδρόμιο Βιέννης → Πιεστάνυ & Πιεστάνυ → Αεροδρόμιο Βιέννης',
        '8 διανυκτερεύσεις στο Esplanade – Wing Alameda 4★ με πλήρη διατροφή (πρωινό, μεσημεριανό, δείπνο)',
        'Πλήρη ιατρική εξέταση κατά την άφιξη',
        '24 θεραπείες όπως θα υποδειχθούν από τον γιατρό',
        'Καθημερινή θεραπεία (εκτός Κυριακής) σύμφωνα με τις οδηγίες των γιατρών',
        'Έμπειρος ελληνόφωνος συνοδός καθ\' όλη τη διάρκεια του ταξιδιού, που μιλάει άπταιστα Σλοβάκικα'
      ],
      notIncluded: [
        'Τοπικός φόρος Spa tax: €2 ανά ημέρα, πληρωτέος απευθείας στο ξενοδοχείο κατά την αναχώρηση',
        'Φιλοδωρήματα & αχθοφορικά',
        'Προαιρετικές εκδρομές',
        'Οτιδήποτε δεν αναφέρεται ρητά στο πρόγραμμα ως περιλαμβανόμενο ή σημειώνεται ως προαιρετικό / προτεινόμενο'
      ],
      cancellationPolicy: 'Ακύρωση έως 45 μέρες πριν → χρέωση €50 ανά άτομο (λειτουργικά έξοδα). Ακύρωση μεταξύ 44 και 31 ημερών → παρακράτηση 30% της αξίας του ταξιδιού. Ακύρωση μεταξύ 30 και 21 ημερών → παρακράτηση 50%. Ακύρωση από 20 μέρες και κάτω → παρακράτηση 100%. Σε περίπτωση μη εμφάνισης (no show) → παρακράτηση 100%. Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, σκι, εκθέσεις, συνέδρια κ.λπ., τα ακυρωτικά μπορούν να φτάσουν μέχρι 100%, ανεξαρτήτως χρόνου ακύρωσης.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά τη στιγμή της κράτησης',
        'Με την κράτηση απαιτείται προκαταβολή 30% της αξίας του πακέτου',
        'Η εξόφληση γίνεται περίπου 21 μέρες πριν την αναχώρηση',
        'Το ξενοδοχείο Alameda βρίσκεται στο καταπράσινο Spa Island του Πιεστάνυ, στο νησί των ιαματικών πηγών',
        '197 ανακαινισμένα δωμάτια με άμεση πρόσβαση στους κοινόχρηστους χώρους του Esplanade (καφέ, lounges, πισίνα, σάουνα, γυμναστήριο, spa)',
        'Κατά την άφιξη, πραγματοποιείται πλήρης ιατρική εξέταση και ο γιατρός προτείνει προσωποποιημένο πρόγραμμα 24 θεραπειών',
        'Ενδεικτικοί τύποι θεραπειών: Μασάζ, Θειούχα μπάνια, Λασπόλουτρα (θειούχα λάσπη), Παραφάγκο/Παραφίνη, Ηλεκτροθεραπεία, Οξυγονοθεραπεία, Θεραπευτικά μπάνια',
        'Το τελικό πρόγραμμα θεραπειών καθορίζεται ατομικά από τον γιατρό, ανάλογα με τις ιατρικές εξετάσεις και τις ανάγκες κάθε συμμετέχοντα',
        'Προαιρετικές εκδρομές: Μπρατισλάβα (½ μέρα + ψώνια), Φάρμα Ελαφιών με δείπνο, Κυριακάτικη ολοήμερη εκδρομή',
        'Ακύρωση έως 45 μέρες πριν → χρέωση €50 ανά άτομο (λειτουργικά έξοδα)',
        'Ακύρωση μεταξύ 44 και 31 ημερών → παρακράτηση 30% της αξίας του ταξιδιού',
        'Ακύρωση μεταξύ 30 και 21 ημερών → παρακράτηση 50%',
        'Ακύρωση από 20 μέρες και κάτω → παρακράτηση 100%',
        'Σε περίπτωση μη εμφάνισης (no show) → παρακράτηση 100%',
        'Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, σκι, εκθέσεις, συνέδρια κ.λπ., τα ακυρωτικά μπορούν να φτάσουν μέχρι 100%, ανεξαρτήτως χρόνου ακύρωσης'
      ],
      program: {
        introduction: 'ΠΙΕΣΤΑΝΥ – ΙΑΜΑΤΙΚΑ ΛΟΥΤΡΑ\n\nΤο Πιεστάνυ είναι μια όμορφη λουτρόπολη της Σλοβακίας, χτισμένη στις όχθες του ποταμού Βαχ, περίπου 85 χλμ. από Μπρατισλάβα και 140 χλμ. από Βιέννη. Είναι παγκοσμίως γνωστό για τις ιαματικές θερμές πηγές και τη μοναδική θειούχα λάσπη που χρησιμοποιούνται σε εξειδικευμένα θεραπευτικά προγράμματα, ιδιαίτερα για παθήσεις του κινητικού & νευρικού συστήματος (ρευματισμοί, αρθρίτιδα, ορθοπεδικά προβλήματα κ.ά.).',
        hotel: '🏨 ΞΕΝΟΔΟΧΕΙΟ – Ensana Esplanade (Wing Alameda) 4★\n\nΤο Alameda βρίσκεται στο καταπράσινο Spa Island του Πιεστάνυ, στο νησί των ιαματικών πηγών, εκεί όπου αναβλύζουν οι θειούχες θερμές πηγές και επεξεργάζεται η θειούχα λάσπη που χρησιμοποιείται στις θεραπείες.\n\nΕίναι παράρτημα του κεντρικού 4★ ξενοδοχείου Esplanade και προσφέρει:\n• 197 ανακαινισμένα δωμάτια\n• Άμεση πρόσβαση στους κοινόχρηστους χώρους του Esplanade:\n  - καφέ & lounges\n  - εσωτερική/εξωτερική πισίνα\n  - σάουνα\n  - γυμναστήριο\n  - χώρους ευεξίας & spa\n\nΟι πελάτες του Alameda χρησιμοποιούν πλήρως τις εγκαταστάσεις του Esplanade, απολαμβάνοντας ολοκληρωμένη ιαματική & wellness εμπειρία.',
        therapeuticProgram: '💆‍♀️ ΘΕΡΑΠΕΥΤΙΚΟ ΠΡΟΓΡΑΜΜΑ\n\nΚατά την άφιξη, πραγματοποιείται πλήρης ιατρική εξέταση και ο γιατρός:\n• αξιολογεί την υγεία & φυσική κατάσταση\n• προτείνει προσωποποιημένο πρόγραμμα 24 θεραπειών\n• καθορίζει τις καθημερινές θεραπευτικές συνεδρίες (εκτός Κυριακής)\n\nΕνδεικτικοί τύποι θεραπειών:\n\n1. Μασάζ\n• Βελτίωση κυκλοφορίας\n• Ανακούφιση από μυϊκούς πόνους\n• Μείωση στρες & έντασης\n• Αίσθηση γενικής ευεξίας\n\n2. Θειούχα μπάνια\n• Ανακούφιση από μυοσκελετικούς πόνους & ρευματισμούς\n• Χαλάρωση μυών & μείωση άγχους\n• Βελτίωση κυκλοφορίας\n• Ευεργετική επίδραση στο δέρμα\n\n3. Λασπόλουτρα (θειούχα λάσπη)\n• Βοηθούν σε αρθρίτιδα & ρευματισμούς (μείωση πόνου & φλεγμονής)\n• Βελτίωση σε δερματικές παθήσεις (ψωρίαση, έκζεμα κ.λπ.)\n• Αποτοξίνωση μέσω του δέρματος\n• Χαλάρωση & καλύτερη αιμάτωση\n\n4. Παραφάγκο / Παραφίνη\n• Ανακούφιση πόνου & φλεγμονής (ιδανικό για αρθρίτιδα/ρευματισμούς)\n• Βελτίωση κυκλοφορίας\n• Ενυδάτωση & μαλάκωση του δέρματος\n• Βαθιά χαλάρωση\n\n5. Ηλεκτροθεραπεία\n• Μείωση πόνου (τραυματισμοί, χειρουργεία, χρόνιες παθήσεις)\n• Μείωση φλεγμονής\n• Βελτίωση τοπικής κυκλοφορίας\n• Ενδυνάμωση μυών & βελτίωση κινητικότητας\n\n6. Οξυγονοθεραπεία\nΧρησιμοποιείται ενδεικτικά για:\n• ΧΑΠ (Χρόνια Αποφρακτική Πνευμονοπάθεια)\n• Άσθμα\n• Πνευμονία\n• Καρδιακή ανεπάρκεια (βελτίωση οξυγόνωσης & δύσπνοιας)\n• Υπνική άπνοια\n• Κυστική ίνωση\n\n7. Θεραπευτικά μπάνια\n• Βαθιά χαλάρωση & μείωση στρες\n• Τόνωση κυκλοφορίας\n• Ευεργετική δράση στο δέρμα\n\nΤο τελικό πρόγραμμα θεραπειών καθορίζεται ατομικά από τον γιατρό, ανάλογα με τις ιατρικές εξετάσεις και τις ανάγκες κάθε συμμετέχοντα.',
        optionalExcursions: '🌳 ΠΡΟΑΙΡΕΤΙΚΕΣ ΕΚΔΡΟΜΕΣ\n\nΚατά τη διάρκεια της διαμονής στο Πιεστάνυ μπορούν να διοργανωθούν προαιρετικά:\n• Μπρατισλάβα (½ μέρα + ψώνια)\n• Φάρμα Ελαφιών με δείπνο\n• Κυριακάτικη ολοήμερη εκδρομή (ο προορισμός προτείνεται από τον συνοδό)\n\n💶 Οι τιμές των προαιρετικών εκδρομών εξαρτώνται από τον αριθμό συμμετεχόντων.'
      },
      gallery: [
        '/images/destinations/piestany-hero.webp'
      ]
    }
  },
  {
    id: 35,
    title: 'ΠΑΡΙΣΙ / DISNEYLAND / ASTERIX',
    destination: 'France',
    category: 'Summer Packages',
    price: 1555,
    duration: '6 days / 5 nights',
    description: 'A magical family adventure combining Paris, Disneyland® Paris with the new World of Frozen, and Asterix Theme Park. Experience the magic of Disney, explore the City of Light, and enjoy thrilling rides at Asterix.',
    longDescription: 'Ένα ταξίδι γεμάτο μαγεία, δράση και γέλιο για όλη την οικογένεια: Παρίσι, Disneyland® Paris, το ολοκαίνουργιο World of Frozen και το θεματικό Πάρκο Asterix – όλα σε ένα οργανωμένο πακέτο από Λάρνακα με απευθείας πτήση.',
    image: '🇫🇷',
    featured: true,
    details: {
      departureDate: '02/07, 09/07, 16/07, 23/07, 30/07, 06/08, 13/08, 20/08, 27/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Paris, Disneyland Paris, Asterix Park, France',
      monthAvailability: 'July, August',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast (Paris) / Room Only (Disneyland)',
      airline: 'Cyprus Airways',
      includedLuggage: '1 checked bag 23kg + 1 hand luggage 10kg',
      coverImage: '/images/destinations/paris-disneyland-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '02/07, 09/07, 16/07, 23/07, 30/07, 06/08, 13/08, 20/08, 27/08',
          route: 'Larnaca (LCA) → Paris (CDG)',
          flight: 'CY 380',
          time: '08:00 → 11:40',
          luggage: '1 checked bag'
        },
        {
          direction: 'Return',
          date: '02/07, 09/07, 16/07, 23/07, 30/07, 06/08, 13/08, 20/08, 27/08',
          route: 'Paris (CDG) → Larnaca (LCA)',
          flight: 'CY 381',
          time: '12:40 → 18:00',
          luggage: '1 checked bag'
        }
      ],
      hotels: [
        // Disney's Hotel Cheyenne - 09/07, 30/07
        {
          name: 'Disney\'s Hotel Cheyenne',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/disney-cheyenne.webp',
          location: 'Disneyland Paris, Marne-la-Vallée, France',
          prices: {
            double: 1555,
            single: 2027,
            triple: 1425,
            child1: 1099,
            child2: 1099
          },
          departureDate: '09/07',
          packagePrice: 3110,
          boardBasis: 'Room Only',
          nights: 2
        },
        {
          name: 'Disney\'s Hotel Cheyenne',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/disney-cheyenne.webp',
          location: 'Disneyland Paris, Marne-la-Vallée, France',
          prices: {
            double: 1555,
            single: 2027,
            triple: 1425,
            child1: 1099,
            child2: 1099
          },
          departureDate: '30/07',
          packagePrice: 3110,
          boardBasis: 'Room Only',
          nights: 2
        },
        // Disney's Hotel Cheyenne - 16/07, 27/08
        {
          name: 'Disney\'s Hotel Cheyenne',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/disney-cheyenne.webp',
          location: 'Disneyland Paris, Marne-la-Vallée, France',
          prices: {
            double: 1649,
            single: 2165,
            triple: 1515,
            child1: 1199,
            child2: 1199
          },
          departureDate: '16/07',
          packagePrice: 3298,
          boardBasis: 'Room Only',
          nights: 2
        },
        {
          name: 'Disney\'s Hotel Cheyenne',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/disney-cheyenne.webp',
          location: 'Disneyland Paris, Marne-la-Vallée, France',
          prices: {
            double: 1649,
            single: 2165,
            triple: 1515,
            child1: 1199,
            child2: 1199
          },
          departureDate: '27/08',
          packagePrice: 3298,
          boardBasis: 'Room Only',
          nights: 2
        },
        // Disney's Hotel Cheyenne - 23/07, 06/08, 13/08, 20/08
        {
          name: 'Disney\'s Hotel Cheyenne',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/disney-cheyenne.webp',
          location: 'Disneyland Paris, Marne-la-Vallée, France',
          prices: {
            double: 1595,
            single: 2085,
            triple: 1459,
            child1: 1125,
            child2: 1125
          },
          departureDate: '23/07',
          packagePrice: 3190,
          boardBasis: 'Room Only',
          nights: 2
        },
        {
          name: 'Disney\'s Hotel Cheyenne',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/disney-cheyenne.webp',
          location: 'Disneyland Paris, Marne-la-Vallée, France',
          prices: {
            double: 1595,
            single: 2085,
            triple: 1459,
            child1: 1125,
            child2: 1125
          },
          departureDate: '06/08',
          packagePrice: 3190,
          boardBasis: 'Room Only',
          nights: 2
        },
        {
          name: 'Disney\'s Hotel Cheyenne',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/disney-cheyenne.webp',
          location: 'Disneyland Paris, Marne-la-Vallée, France',
          prices: {
            double: 1595,
            single: 2085,
            triple: 1459,
            child1: 1125,
            child2: 1125
          },
          departureDate: '13/08',
          packagePrice: 3190,
          boardBasis: 'Room Only',
          nights: 2
        },
        {
          name: 'Disney\'s Hotel Cheyenne',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/disney-cheyenne.webp',
          location: 'Disneyland Paris, Marne-la-Vallée, France',
          prices: {
            double: 1595,
            single: 2085,
            triple: 1459,
            child1: 1125,
            child2: 1125
          },
          departureDate: '20/08',
          packagePrice: 3190,
          boardBasis: 'Room Only',
          nights: 2
        },
        // Disney's Newport Bay Club - 09/07
        {
          name: 'Disney\'s Newport Bay Club',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/disney-newport-bay.webp',
          location: 'Disneyland Paris, Marne-la-Vallée, France',
          prices: {
            double: 1679,
            single: 2249,
            triple: 1525,
            child1: 1125
          },
          departureDate: '09/07',
          packagePrice: 3358,
          boardBasis: 'Room Only',
          nights: 2
        },
        // Disney's Newport Bay Club - 16/07, 23/07, 30/07, 06/08, 13/08, 20/08, 27/08
        {
          name: 'Disney\'s Newport Bay Club',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/disney-newport-bay.webp',
          location: 'Disneyland Paris, Marne-la-Vallée, France',
          prices: {
            double: 1729,
            single: 2325,
            triple: 1575,
            child1: 1199
          },
          departureDate: '16/07',
          packagePrice: 3458,
          boardBasis: 'Room Only',
          nights: 2
        },
        {
          name: 'Disney\'s Newport Bay Club',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/disney-newport-bay.webp',
          location: 'Disneyland Paris, Marne-la-Vallée, France',
          prices: {
            double: 1729,
            single: 2325,
            triple: 1575,
            child1: 1199
          },
          departureDate: '23/07',
          packagePrice: 3458,
          boardBasis: 'Room Only',
          nights: 2
        },
        {
          name: 'Disney\'s Newport Bay Club',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/disney-newport-bay.webp',
          location: 'Disneyland Paris, Marne-la-Vallée, France',
          prices: {
            double: 1729,
            single: 2325,
            triple: 1575,
            child1: 1199
          },
          departureDate: '30/07',
          packagePrice: 3458,
          boardBasis: 'Room Only',
          nights: 2
        },
        {
          name: 'Disney\'s Newport Bay Club',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/disney-newport-bay.webp',
          location: 'Disneyland Paris, Marne-la-Vallée, France',
          prices: {
            double: 1729,
            single: 2325,
            triple: 1575,
            child1: 1199
          },
          departureDate: '06/08',
          packagePrice: 3458,
          boardBasis: 'Room Only',
          nights: 2
        },
        {
          name: 'Disney\'s Newport Bay Club',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/disney-newport-bay.webp',
          location: 'Disneyland Paris, Marne-la-Vallée, France',
          prices: {
            double: 1729,
            single: 2325,
            triple: 1575,
            child1: 1199
          },
          departureDate: '13/08',
          packagePrice: 3458,
          boardBasis: 'Room Only',
          nights: 2
        },
        {
          name: 'Disney\'s Newport Bay Club',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/disney-newport-bay.webp',
          location: 'Disneyland Paris, Marne-la-Vallée, France',
          prices: {
            double: 1729,
            single: 2325,
            triple: 1575,
            child1: 1199
          },
          departureDate: '20/08',
          packagePrice: 3458,
          boardBasis: 'Room Only',
          nights: 2
        },
        {
          name: 'Disney\'s Newport Bay Club',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/disney-newport-bay.webp',
          location: 'Disneyland Paris, Marne-la-Vallée, France',
          prices: {
            double: 1729,
            single: 2325,
            triple: 1575,
            child1: 1199
          },
          departureDate: '27/08',
          packagePrice: 3458,
          boardBasis: 'Room Only',
          nights: 2
        },
        // Paris Hotels - Novotel La Defense 4★ (most dates)
        {
          name: 'Novotel La Defense',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/novotel-la-defense.webp',
          location: 'Novotel La Defense, Paris, France',
          prices: {
            double: 1555,
            single: 2027,
            triple: 1425,
            child1: 1099,
            child2: 1099
          },
          departureDate: '02/07',
          packagePrice: 3110,
          boardBasis: 'Bed & Breakfast',
          nights: 3
        },
        {
          name: 'Novotel La Defense',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/novotel-la-defense.webp',
          location: 'Novotel La Defense, Paris, France',
          prices: {
            double: 1555,
            single: 2027,
            triple: 1425,
            child1: 1099,
            child2: 1099
          },
          departureDate: '09/07',
          packagePrice: 3110,
          boardBasis: 'Bed & Breakfast',
          nights: 3
        },
        {
          name: 'Novotel La Defense',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/novotel-la-defense.webp',
          location: 'Novotel La Defense, Paris, France',
          prices: {
            double: 1649,
            single: 2165,
            triple: 1515,
            child1: 1199,
            child2: 1199
          },
          departureDate: '23/07',
          packagePrice: 3298,
          boardBasis: 'Bed & Breakfast',
          nights: 3
        },
        {
          name: 'Novotel La Defense',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/novotel-la-defense.webp',
          location: 'Novotel La Defense, Paris, France',
          prices: {
            double: 1555,
            single: 2027,
            triple: 1425,
            child1: 1099,
            child2: 1099
          },
          departureDate: '30/07',
          packagePrice: 3110,
          boardBasis: 'Bed & Breakfast',
          nights: 3
        },
        {
          name: 'Novotel La Defense',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/novotel-la-defense.webp',
          location: 'Novotel La Defense, Paris, France',
          prices: {
            double: 1595,
            single: 2085,
            triple: 1459,
            child1: 1125,
            child2: 1125
          },
          departureDate: '06/08',
          packagePrice: 3190,
          boardBasis: 'Bed & Breakfast',
          nights: 3
        },
        {
          name: 'Novotel La Defense',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/novotel-la-defense.webp',
          location: 'Novotel La Defense, Paris, France',
          prices: {
            double: 1595,
            single: 2085,
            triple: 1459,
            child1: 1125,
            child2: 1125
          },
          departureDate: '13/08',
          packagePrice: 3190,
          boardBasis: 'Bed & Breakfast',
          nights: 3
        },
        {
          name: 'Novotel La Defense',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/novotel-la-defense.webp',
          location: 'Novotel La Defense, Paris, France',
          prices: {
            double: 1595,
            single: 2085,
            triple: 1459,
            child1: 1125,
            child2: 1125
          },
          departureDate: '20/08',
          packagePrice: 3190,
          boardBasis: 'Bed & Breakfast',
          nights: 3
        },
        {
          name: 'Novotel La Defense',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/novotel-la-defense.webp',
          location: 'Novotel La Defense, Paris, France',
          prices: {
            double: 1649,
            single: 2165,
            triple: 1515,
            child1: 1199,
            child2: 1199
          },
          departureDate: '27/08',
          packagePrice: 3298,
          boardBasis: 'Bed & Breakfast',
          nights: 3
        },
        // Paris Hotel - Voco Porte de Clichy 4★ (16/07)
        {
          name: 'Voco Porte de Clichy',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/voco-porte-clichy.webp',
          location: 'Voco Porte de Clichy, Paris, France',
          prices: {
            double: 1649,
            single: 2165,
            triple: 1515,
            child1: 1199,
            child2: 1199
          },
          departureDate: '16/07',
          packagePrice: 3298,
          boardBasis: 'Bed & Breakfast',
          nights: 3,
          note: 'Το ξενοδοχείο δεν διαθέτει τετράκλινα – δίνονται 2 δίκλινα δίπλα-δίπλα.'
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Παρίσι – Λάρνακα με Cyprus Airways',
        'Φόροι αεροδρομίων',
        'Μίνι κρουαζιέρα στον Σηκουάνα',
        '3 διανυκτερεύσεις σε ξενοδοχείο 4★ στο Παρίσι με πρόγευμα',
        '2 διανυκτερεύσεις σε Disney hotel της επιλογής σας (Cheyenne ή Newport Bay Club) χωρίς πρωινό',
        'Εισιτήριο εισόδου 3 ημερών στα πάρκα: Disneyland Park, Walt Disney Studios, πρόσβαση στο World of Frozen',
        'Εισιτήριο εισόδου στο Πάρκο του Αστερίξ',
        'Extra magic hour: 1 ώρα νωρίτερα στα πάρκα πριν την επίσημη έναρξη',
        'Μεταφορές, εκδρομές, περιηγήσεις & ξεναγήσεις όπως στο πρόγραμμα',
        'Δημοτικοί φόροι ξενοδοχείων',
        'Αρχηγός/συνοδός του γραφείου',
        '1 αποσκευή 23kg + 1 χειραποσκευή 10kg',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Δικαιώματα εισόδων σε προαιρετικά αξιοθέατα',
        'Γεύματα/ποτά που δεν αναφέρονται ρητά',
        'Οτιδήποτε δεν αναφέρεται ως περιλαμβανόμενο ή χαρακτηρίζεται ως προαιρετικό / προτεινόμενο'
      ],
      cancellationPolicy: 'Μέχρι 45 μέρες πριν: κράτηση €50/άτομο (λειτουργικά έξοδα). 44–31 μέρες πριν: παρακράτηση 30%. 30–21 μέρες πριν: παρακράτηση 50%. Από 20 μέρες και κάτω: παρακράτηση 100%. Σε περίπτωση no-show: παρακράτηση 100%. Για charters, κρουαζιέρες, σκι, εκθέσεις, συνέδρια κ.λπ., τα ακυρωτικά μπορεί να φτάσουν μέχρι 100%, ανεξαρτήτως χρόνου ακύρωσης.',
      termsAndConditions: [
        'Οι τιμές των πακέτων δεν αλλάζουν τη στιγμή της κράτησης',
        'Με την κράτηση απαιτείται προκαταβολή 30%',
        'Εξόφληση περίπου 21 ημέρες πριν την αναχώρηση',
        'Διαμονή 2 νύχτες στη Disneyland® Paris (χωρίς πρωινό)',
        'Διαμονή 3 νύχτες στο Παρίσι (με πρόγευμα)',
        'Εισιτήρια 3 ημερών για Disneyland Park, Walt Disney Studios & World of Frozen',
        'Εισιτήριο για Πάρκο Asterix',
        'Extra magic hour: 1 ώρα νωρίτερα στα πάρκα',
        'Μέχρι 45 μέρες πριν: κράτηση €50/άτομο (λειτουργικά έξοδα)',
        '44–31 μέρες πριν: παρακράτηση 30%',
        '30–21 μέρες πριν: παρακράτηση 50%',
        'Από 20 μέρες και κάτω: παρακράτηση 100%',
        'Σε περίπτωση no-show: παρακράτηση 100%',
        'Για charters, κρουαζιέρες, σκι, εκθέσεις, συνέδρια κ.λπ., τα ακυρωτικά μπορεί να φτάσουν μέχρι 100%, ανεξαρτήτως χρόνου ακύρωσης'
      ],
      program: {
        introduction: 'ΠΑΡΙΣΙ / DISNEYLAND / ASTERIX\n\nΈνα ταξίδι γεμάτο μαγεία, δράση και γέλιο για όλη την οικογένεια: Παρίσι, Disneyland® Paris, το ολοκαίνουργιο World of Frozen και το θεματικό Πάρκο Asterix – όλα σε ένα οργανωμένο πακέτο από Λάρνακα με απευθείας πτήση.',
        day1: '1η Μέρα: Λάρνακα – Παρίσι – Ντίσνεϋλαντ\n\nΣυγκέντρωση στο αεροδρόμιο Λάρνακας και απευθείας πτήση για Παρίσι.\n\nΆφιξη και άμεση μεταφορά στη Disneyland® Paris.\n\nΤακτοποίηση στο ξενοδοχείο εντός του πάρκου (Cheyenne ή Newport Bay Club).\n\nΧρόνος ελεύθερος για:\n• πρώτη βόλτα στο Disney Village (καταστήματα, εστιατόρια, café)\n• ή είσοδο στα πάρκα (εισιτήρια περιλαμβάνονται).\n\nΠρώτη επαφή με τη μαγεία της Disney: παρελάσεις, φωτισμοί, μουσική, χαρακτήρες Disney.\n\nΔιανυκτέρευση στη Disneyland.',
        day2: '2η Μέρα: Disneyland – World of Frozen\n\nΠρωινή αφύπνιση κυριολεκτικά μέσα στον κόσμο της Disney.\n\nΣυναντήσεις με Mickey, Minnie και την παρέα τους.\n\nΑπόλαυση κλασικών αξιοθέατων:\n• Haunted Mansion (Στοιχειωμένο Σπίτι)\n• Βόλτα με ατμόπλοιο γύρω από τη λίμνη\n• Παρελάσεις με άρματα και ήρωες Disney\n\nΓια τους λάτρεις της δράσης:\n• Space Mountain, Big Thunder Mountain, Indiana Jones κ.ά.\n\nΓια μικρότερα παιδιά:\n• Νησί Πειρατών, Άγρια Δύση, Κοιμωμένη, Πήτερ Παν, Χιονάτη & 7 Νάνοι\n\nΕμπειρία στο World of Frozen:\n• Η Άρεντελ ζωντανεύει με θεματικές διαδρομές, σκηνικά, μουσικές\n• Συναντήσεις με Έλσα & Άννα\n• Μαγικά φωτογραφικά spots.\n\nΗ μέρα είναι γεμάτη φαντασία, συγκίνηση και στιγμές που μένουν αξέχαστες σε μικρούς και μεγάλους.\n\nΔιανυκτέρευση στη Disneyland.',
        day3: '3η Μέρα: Disneyland – Walt Disney Studios – Παρίσι\n\nΕλεύθερος χρόνος στα Walt Disney Studios:\n• εμπειρίες από τον κόσμο του κινηματογράφου & της τηλεόρασης\n• θεματικά rides, shows, σκηνικά παραγωγών\n\nΠροαιρετικά: γεύμα σε θεματικά εστιατόρια, αγορές στο Disney Village.\n\nΚλασικά family rides όπως:\n• It\'s a Small World\n• Dumbo, το ιπτάμενο ελεφαντάκι\n• Περιστρεφόμενα φλιτζάνια\n\nΑργά το απόγευμα αναχώρηση για Παρίσι.\n\nΤακτοποίηση στο ξενοδοχείο και διανυκτέρευση.',
        day4: '4η Μέρα: Παρίσι – Πανοραμική Ξενάγηση & Κρουαζιέρα στον Σηκουάνα\n\nΠρωινό και αναχώρηση για πανοραμική ξενάγηση:\n• Trocadéro – ιδανικό σημείο για φωτογραφίες με τον Πύργο του Άιφελ\n• Αψίδα του Θριάμβου & Ηλύσια Πεδία\n• Grand Palais & Petit Palais\n• Μέγαρο των Απομάχων & Τάφος Ναπολέοντα\n• Γαλλικό Κοινοβούλιο & Place de la Concorde\n• Place Vendôme & Όπερα Garnier\n• Περασμά από το Λούβρο & Pont Neuf\n• Νησί Σιτέ & εξωτερική θέα στην Παναγία των Παρισίων\n• Καρτιέ Λατέν, Σορβόννη, Κήποι Λουξεμβούργου\n\nΣτη συνέχεια, κρουαζιέρα 1 ώρας στον Σηκουάνα με Bateaux Mouches – μια ρομαντική και διαφορετική οπτική της πόλης.\n\nΥπόλοιπη μέρα ελεύθερη.\n\nΔιανυκτέρευση στο Παρίσι.',
        day5: '5η Μέρα: Παρίσι – Πάρκο Asterix\n\nΠρωινό και αναχώρηση για το θεματικό Πάρκο Asterix.\n\n6 θεματικοί κόσμοι εμπνευσμένοι από τις περιπέτειες του Αστερίξ & Οβελίξ.\n\nRoller coasters και παιχνίδια:\n• Tonnerre 2 Zeus\n• Toutatis\n• OzIris\n• Pégase Express, Cétautomatix – ιδανικά και για οικογένειες\n\nΥδάτινες διαδρομές, παιδικές περιοχές, shows & θεάματα όλη την ημέρα.\n\nΤο απόγευμα επιστροφή στο ξενοδοχείο στο Παρίσι.\n\nΔιανυκτέρευση.',
        day6: '6η Μέρα: Παρίσι – Λάρνακα\n\nΠρωινό.\n\nΜεταφορά στο αεροδρόμιο Παρισιού.\n\nΠτήση επιστροφής στη Λάρνακα, με τις βαλίτσες γεμάτες μαγεία, εικόνες και οικογενειακές αναμνήσεις.'
      },
      gallery: [
        '/images/destinations/paris-disneyland-hero.webp'
      ]
    }
  },
  {
    id: 36,
    title: 'ΣΤΑ ΜΟΝΟΠΑΤΙΑ ΤΟΥ ΠΟΝΤΟΥ & ΤΗΣ ΠΟΛΗΣ',
    destination: 'Turkey',
    category: 'Summer Packages',
    price: 1595,
    duration: '8 days / 7 nights',
    description: 'Explore the historic paths of Pontus and Istanbul: Sakarya, Samsun, Trabzon, and Constantinople. A journey through Byzantine history, Pontic culture, and the Black Sea coast.',
    longDescription: 'Στα μονοπάτια του Πόντου & της Πόλης: μια ολοκληρωμένη περιήγηση στις ιστορικές περιοχές του Πόντου (Σαγγάρια, Σαμψούντα, Κερασούντα, Τραπεζούντα) και την Κωνσταντινούπολη. Εξερευνήστε βυζαντινά μνημεία, παραθαλάσσια τοπία και την πλούσια πολιτιστική κληρονομιά της περιοχής.',
    image: '🇹🇷',
    featured: true,
    details: {
      departureDate: '15/07, 22/07, 29/07, 05/08, 12/08, 26/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Sakarya, Samsun, Trabzon, Istanbul, Turkey',
      monthAvailability: 'July, August',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast + 5 Dinners',
      airline: 'Aegean Airlines / Turkish Airlines',
      includedLuggage: '1 checked bag 23kg + 1 hand luggage 8kg (international), 1 checked bag 20kg + 1 hand luggage 8kg (domestic)',
      coverImage: '/images/destinations/pontus-istanbul-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '15/07, 22/07, 29/07, 05/08, 12/08, 26/08',
          route: 'Larnaca (LCA) → Athens (ATH)',
          flight: 'A3 903',
          time: '10:15 → 12:00',
          luggage: '1 checked bag 23kg'
        },
        {
          direction: 'Departure',
          date: '15/07, 22/07, 29/07, 05/08, 12/08, 26/08',
          route: 'Athens (ATH) → Istanbul (IST)',
          flight: 'A3 992',
          time: '13:00 → 14:45',
          luggage: '1 checked bag 23kg'
        },
        {
          direction: 'Domestic',
          date: '15/07, 22/07, 29/07, 05/08, 12/08, 26/08',
          route: 'Trabzon (TZX) → Istanbul (IST)',
          flight: 'Turkish Airlines',
          time: 'TBA',
          luggage: '1 checked bag 20kg'
        },
        {
          direction: 'Return',
          date: '15/07, 22/07, 29/07, 05/08, 12/08, 26/08',
          route: 'Istanbul (IST) → Athens (ATH)',
          flight: 'A3 995',
          time: '20:50 → 22:20',
          luggage: '1 checked bag 23kg'
        },
        {
          direction: 'Return',
          date: '15/07, 22/07, 29/07, 05/08, 12/08, 26/08',
          route: 'Athens (ATH) → Larnaca (LCA)',
          flight: 'A3 910',
          time: '23:45 → 01:20 (+1)',
          luggage: '1 checked bag 23kg'
        }
      ],
      hotels: [
        // Period 1: 15/07, 26/08 - €1,595 double
        {
          name: 'Sakarya Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/sakarya-hotel.webp',
          location: 'Sakarya Hotel, Sakarya, Turkey',
          prices: {
            double: 1595,
            single: 1935,
            child1: 1265
          },
          departureDate: '15/07',
          packagePrice: 3190,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 1
        },
        {
          name: 'Samsun Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/samsun-hotel.webp',
          location: 'Samsun Hotel, Samsun, Turkey',
          prices: {
            double: 1595,
            single: 1935,
            child1: 1265
          },
          departureDate: '15/07',
          packagePrice: 3190,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 2
        },
        {
          name: 'Trabzon Hotel',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/trabzon-hotel.webp',
          location: 'Trabzon Hotel, Trabzon, Turkey',
          prices: {
            double: 1595,
            single: 1935,
            child1: 1265
          },
          departureDate: '15/07',
          packagePrice: 3190,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 2
        },
        {
          name: 'Istanbul Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/istanbul-hotel.webp',
          location: 'Istanbul Hotel, Istanbul, Turkey',
          prices: {
            double: 1595,
            single: 1935,
            child1: 1265
          },
          departureDate: '15/07',
          packagePrice: 3190,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        },
        {
          name: 'Sakarya Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/sakarya-hotel.webp',
          location: 'Sakarya Hotel, Sakarya, Turkey',
          prices: {
            double: 1595,
            single: 1935,
            child1: 1265
          },
          departureDate: '26/08',
          packagePrice: 3190,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 1
        },
        {
          name: 'Samsun Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/samsun-hotel.webp',
          location: 'Samsun Hotel, Samsun, Turkey',
          prices: {
            double: 1595,
            single: 1935,
            child1: 1265
          },
          departureDate: '26/08',
          packagePrice: 3190,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 2
        },
        {
          name: 'Trabzon Hotel',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/trabzon-hotel.webp',
          location: 'Trabzon Hotel, Trabzon, Turkey',
          prices: {
            double: 1595,
            single: 1935,
            child1: 1265
          },
          departureDate: '26/08',
          packagePrice: 3190,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 2
        },
        {
          name: 'Istanbul Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/istanbul-hotel.webp',
          location: 'Istanbul Hotel, Istanbul, Turkey',
          prices: {
            double: 1595,
            single: 1935,
            child1: 1265
          },
          departureDate: '26/08',
          packagePrice: 3190,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        },
        // Period 2: 22/07, 29/07, 05/08, 12/08 - €1,625 double
        {
          name: 'Sakarya Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/sakarya-hotel.webp',
          location: 'Sakarya Hotel, Sakarya, Turkey',
          prices: {
            double: 1625,
            single: 1975,
            child1: 1285
          },
          departureDate: '22/07',
          packagePrice: 3250,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 1
        },
        {
          name: 'Samsun Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/samsun-hotel.webp',
          location: 'Samsun Hotel, Samsun, Turkey',
          prices: {
            double: 1625,
            single: 1975,
            child1: 1285
          },
          departureDate: '22/07',
          packagePrice: 3250,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 2
        },
        {
          name: 'Trabzon Hotel',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/trabzon-hotel.webp',
          location: 'Trabzon Hotel, Trabzon, Turkey',
          prices: {
            double: 1625,
            single: 1975,
            child1: 1285
          },
          departureDate: '22/07',
          packagePrice: 3250,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 2
        },
        {
          name: 'Istanbul Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/istanbul-hotel.webp',
          location: 'Istanbul Hotel, Istanbul, Turkey',
          prices: {
            double: 1625,
            single: 1975,
            child1: 1285
          },
          departureDate: '22/07',
          packagePrice: 3250,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        },
        {
          name: 'Sakarya Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/sakarya-hotel.webp',
          location: 'Sakarya Hotel, Sakarya, Turkey',
          prices: {
            double: 1625,
            single: 1975,
            child1: 1285
          },
          departureDate: '29/07',
          packagePrice: 3250,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 1
        },
        {
          name: 'Samsun Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/samsun-hotel.webp',
          location: 'Samsun Hotel, Samsun, Turkey',
          prices: {
            double: 1625,
            single: 1975,
            child1: 1285
          },
          departureDate: '29/07',
          packagePrice: 3250,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 2
        },
        {
          name: 'Trabzon Hotel',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/trabzon-hotel.webp',
          location: 'Trabzon Hotel, Trabzon, Turkey',
          prices: {
            double: 1625,
            single: 1975,
            child1: 1285
          },
          departureDate: '29/07',
          packagePrice: 3250,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 2
        },
        {
          name: 'Istanbul Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/istanbul-hotel.webp',
          location: 'Istanbul Hotel, Istanbul, Turkey',
          prices: {
            double: 1625,
            single: 1975,
            child1: 1285
          },
          departureDate: '29/07',
          packagePrice: 3250,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        },
        {
          name: 'Sakarya Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/sakarya-hotel.webp',
          location: 'Sakarya Hotel, Sakarya, Turkey',
          prices: {
            double: 1625,
            single: 1975,
            child1: 1285
          },
          departureDate: '05/08',
          packagePrice: 3250,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 1
        },
        {
          name: 'Samsun Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/samsun-hotel.webp',
          location: 'Samsun Hotel, Samsun, Turkey',
          prices: {
            double: 1625,
            single: 1975,
            child1: 1285
          },
          departureDate: '05/08',
          packagePrice: 3250,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 2
        },
        {
          name: 'Trabzon Hotel',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/trabzon-hotel.webp',
          location: 'Trabzon Hotel, Trabzon, Turkey',
          prices: {
            double: 1625,
            single: 1975,
            child1: 1285
          },
          departureDate: '05/08',
          packagePrice: 3250,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 2
        },
        {
          name: 'Istanbul Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/istanbul-hotel.webp',
          location: 'Istanbul Hotel, Istanbul, Turkey',
          prices: {
            double: 1625,
            single: 1975,
            child1: 1285
          },
          departureDate: '05/08',
          packagePrice: 3250,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        },
        {
          name: 'Sakarya Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/sakarya-hotel.webp',
          location: 'Sakarya Hotel, Sakarya, Turkey',
          prices: {
            double: 1625,
            single: 1975,
            child1: 1285
          },
          departureDate: '12/08',
          packagePrice: 3250,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 1
        },
        {
          name: 'Samsun Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/samsun-hotel.webp',
          location: 'Samsun Hotel, Samsun, Turkey',
          prices: {
            double: 1625,
            single: 1975,
            child1: 1285
          },
          departureDate: '12/08',
          packagePrice: 3250,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 2
        },
        {
          name: 'Trabzon Hotel',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/trabzon-hotel.webp',
          location: 'Trabzon Hotel, Trabzon, Turkey',
          prices: {
            double: 1625,
            single: 1975,
            child1: 1285
          },
          departureDate: '12/08',
          packagePrice: 3250,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 2
        },
        {
          name: 'Istanbul Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/istanbul-hotel.webp',
          location: 'Istanbul Hotel, Istanbul, Turkey',
          prices: {
            double: 1625,
            single: 1975,
            child1: 1285
          },
          departureDate: '12/08',
          packagePrice: 3250,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Αθήνα – Κωνσταντινούπολη – Αθήνα – Λάρνακα (Aegean Airlines)',
        'Αεροπορικά εισιτήρια Τραπεζούντα – Κωνσταντινούπολη (εσωτερική πτήση Turkish Airlines)',
        'Φόροι αεροδρομίων',
        'Διαμονή σε ξενοδοχεία 4★ & 5★ με πρωινό',
        '5 δείπνα στα ξενοδοχεία: Σαγγάρια (1), Σαμψούντα (2), Τραπεζούντα (2)',
        'Μεταφορές, εκδρομές & περιηγήσεις όπως στο αναλυτικό πρόγραμμα',
        'Κρουαζιέρα στον Βόσπορο',
        'Τοπικός έμπειρος ελληνόφωνος αρχηγός/ξεναγός',
        '1 αποσκευή 23kg + 1 χειραποσκευή 8kg σε διεθνείς πτήσεις',
        '1 αποσκευή 20kg + 1 χειραποσκευή 8kg για την εσωτερική πτήση',
        'Υπηρεσίες τοπικών αντιπροσώπων'
      ],
      notIncluded: [
        'Βίζα για την Τουρκία (έκδοση ηλεκτρονικά από κάθε ταξιδιώτη – περίπου €50, μέσω www.evisa.gov.tr/en/)',
        'Ποτά στα δείπνα',
        'Δικαιώματα εισόδων σε μουσεία & αξιοθέατα (όπου δεν αναφέρεται ότι περιλαμβάνονται)',
        'Οτιδήποτε δεν αναφέρεται ρητά ως περιλαμβανόμενο ή αναφέρεται ως προαιρετικό / προτεινόμενο'
      ],
      cancellationPolicy: 'Μέχρι 45 μέρες πριν: παρακράτηση €50 ανά άτομο (λειτουργικά έξοδα). 44–31 μέρες πριν: παρακράτηση 30% της αξίας. 30–21 μέρες πριν: παρακράτηση 50% της αξίας. Από 20 μέρες και κάτω: παρακράτηση 100% της αξίας. Σε περίπτωση μη εμφάνισης (no-show): 100% χρέωση. Για charter, κρουαζιέρες, σκι, εκθέσεις, συνέδρια κ.λπ. τα ακυρωτικά μπορεί να φθάσουν έως 100%, ανεξαρτήτως ημερομηνίας ακύρωσης.',
      termsAndConditions: [
        'Οι τιμές των πακέτων δεν αλλάζουν κατά τη στιγμή της κράτησης',
        'Με την κράτηση απαιτείται προκαταβολή 30% της αξίας του πακέτου',
        'Εξόφληση περίπου 21 μέρες πριν την αναχώρηση',
        'Διαμονή: Σαγγάρια (1 νύχτα), Σαμψούντα (2 νύχτες), Τραπεζούντα (2 νύχτες), Κωνσταντινούπολη (2 νύχτες)',
        'Διατροφή: Πρωινό καθημερινά + 5 δείπνα (Σαγγάρια 1, Σαμψούντα 2, Τραπεζούντα 2)',
        'Η έκδοση βίζας για Τουρκία γίνεται υποχρεωτικά από τον κάθε ταξιδιώτη μέσω διαδικτύου (www.evisa.gov.tr/en/, κόστος περίπου €50 ανά άτομο)',
        'Στην Τουρκία ταξιδεύετε μόνο με διαβατήριο, το οποίο πρέπει να έχει ισχύ τουλάχιστον 6 μήνες μετά την είσοδο στη χώρα',
        'Μέχρι 45 μέρες πριν: παρακράτηση €50 ανά άτομο (λειτουργικά έξοδα)',
        '44–31 μέρες πριν: παρακράτηση 30% της αξίας',
        '30–21 μέρες πριν: παρακράτηση 50% της αξίας',
        'Από 20 μέρες και κάτω: παρακράτηση 100% της αξίας',
        'Σε περίπτωση μη εμφάνισης (no-show): 100% χρέωση',
        'Για charter, κρουαζιέρες, σκι, εκθέσεις, συνέδρια κ.λπ. τα ακυρωτικά μπορεί να φθάσουν έως 100%, ανεξαρτήτως ημερομηνίας ακύρωσης'
      ],
      program: {
        introduction: 'ΣΤΑ ΜΟΝΟΠΑΤΙΑ ΤΟΥ ΠΟΝΤΟΥ & ΤΗΣ ΠΟΛΗΣ\n\nΜια ολοκληρωμένη περιήγηση στις ιστορικές περιοχές του Πόντου (Σαγγάρια, Σαμψούντα, Κερασούντα, Τραπεζούντα) και την Κωνσταντινούπολη. Εξερευνήστε βυζαντινά μνημεία, παραθαλάσσια τοπία και την πλούσια πολιτιστική κληρονομιά της περιοχής. Το ταξίδι συνδυάζει ιστορία, πίστη, πολιτισμό και φυσική ομορφιά σε μια μοναδική εμπειρία.',
        day1: '1η Μέρα: Λάρνακα – Αθήνα – Κωνσταντινούπολη – Σαγγάρια\n\nΣυγκέντρωση στο αεροδρόμιο Λάρνακας και πτήση για Κωνσταντινούπολη μέσω Αθήνας.\n\nΆφιξη, υποδοχή από τον αρχηγό και αναχώρηση οδικώς για Σαγγάρια, διασχίζοντας τις όμορφες διαδρομές της βορειοδυτικής Τουρκίας.\n\nΆφιξη, τακτοποίηση στο ξενοδοχείο, χρόνος ελεύθερος για χαλάρωση & πρώτη γνωριμία με την περιοχή.\n\nΔείπνο & διανυκτέρευση.',
        day2: '2η Μέρα: Σαγγάρια – Σαμψούντα\n\nΠρωινό και αναχώρηση για Σαμψούντα, με εντυπωσιακή διαδρομή προς τον Εύξεινο Πόντο, μέσα από καταπράσινες πλαγιές, μικρές πόλεις και παραθαλάσσια τοπία της βόρειας Τουρκίας.\n\nΆφιξη στη Σαμψούντα, σημαντικό λιμάνι της Μαύρης Θάλασσας και ιστορική πόλη του Πόντου.\n\nΧρόνος για μια πρώτη γνωριμία με την παραλία, την προκυμαία και το κέντρο.\n\nΔείπνο & διανυκτέρευση.',
        day3: '3η Μέρα: Σαμψούντα – Ξενάγηση\n\nΜετά το πρόγευμα, περιήγηση στη Σαμψούντα:\n• κέντρο και παραλιακή ζώνη\n• περίπατος στην προκυμαία\n• στάσεις σε χαρακτηριστικά σημεία & σημεία θέας\n\nΕλεύθερος χρόνος για καφέ, βόλτα και αγορές στο κέντρο της πόλης.\n\nΥπόλοιπο ημέρας ελεύθερο ή προαιρετικές δραστηριότητες.\n\nΔείπνο & διανυκτέρευση.',
        day4: '4η Μέρα: Σαμψούντα – Κερασούντα – Τραπεζούντα\n\nΠρόγευμα και αναχώρηση για την Κερασούντα (Κερασούς), ιστορική πόλη του Πόντου.\n\n• Περιήγηση στο κέντρο\n• Επίσκεψη στο Κάστρο της Κερασούντας με πανοραμική θέα στη Μαύρη Θάλασσα\n\nΣτη συνέχεια πορεία προς την ιστορική Τραπεζούντα, πρωτεύουσα των Μεγάλων Κομνηνών.\n\nΆφιξη, πανοραμική γνωριμία με το παραλιακό μέτωπο και μεταφορά στο ξενοδοχείο.\n\nΔείπνο & διανυκτέρευση.',
        day5: '5η Μέρα: Τραπεζούντα – Ξενάγηση\n\nΠρόγευμα και αναχώρηση για ξενάγηση στην ιστορική Τραπεζούντα:\n\n• Αγία Σοφία Τραπεζούντας (βυζαντινό μνημείο 13ου αιώνα)\n• Αρχοντικό Ατατούρκ\n• Πανοραμική διαδρομή από το Ορτάχισαρ και το ιστορικό κέντρο\n• Βόλτα στα παλιά σοκάκια & την τοπική αγορά\n• Ανάβαση στον λόφο Boztepe, το καλύτερο «μπαλκόνι» της πόλης με μοναδική θέα στη Μαύρη Θάλασσα\n\nΕλεύθερος χρόνος για καφέ στην παραλία ή έξοδο με τοπικές γεύσεις.\n\nΔείπνο & διανυκτέρευση.',
        day6: '6η Μέρα: Τραπεζούντα – Παναγία Σουμελά – Κωνσταντινούπολη – Πέρα\n\nΠρωινό και αναχώρηση για την ορεινή ενδοχώρα, μέσα από καταπράσινα ποντιακά τοπία, με προορισμό την Ιερά Μονή Παναγίας Σουμελά.\n\n• Ανάβαση στο μοναστήρι, χτισμένο σε απόκρημνο βράχο\n• Επίσκεψη και χρόνος για προσκύνημα & φωτογραφίες\n\nΣτη συνέχεια μεταφορά στο αεροδρόμιο της Τραπεζούντας και πτήση για Κωνσταντινούπολη.\n\nΆφιξη, μεταφορά στο ξενοδοχείο, τακτοποίηση.\n\nΤο απόγευμα/βράδυ, προαιρετική βόλτα στη Μεγάλη Οδό του Πέραν (Istiklal), με εμπορικά καταστήματα, καφέ & κίνηση όλη την ημέρα.\n\nΔιανυκτέρευση στην Κωνσταντινούπολη.',
        day7: '7η Μέρα: Κωνσταντινούπολη – Αγία Σοφία – Μπλε Τζαμί – Βασιλική Κινστέρνα – Καπαλί Τσαρσί\n\nΠρωινό και αναχώρηση για το ιστορικό κέντρο:\n\n• Αγία Σοφία – αριστούργημα βυζαντινής αρχιτεκτονικής\n• Εξωτερικά το Μπλε Τζαμί\n• Περίπατος στον χώρο του Βυζαντινού Ιπποδρόμου & Αιγυπτιακός Οβελίσκος\n• Επίσκεψη στη Βασιλική Στέρνα (Κινστέρνα) του Ιουστινιανού\n\nΗ μέρα ολοκληρώνεται στο Καπαλί Τσαρσί (Σκεπαστή Αγορά) με ελεύθερο χρόνο για αγορές και βόλτα στους πολύχρωμους στεγασμένους διαδρόμους.\n\nΕπιστροφή στο ξενοδοχείο.\nΔιανυκτέρευση.',
        day8: '8η Μέρα: Μπαλουκλί – Πατριαρχείο – Παναγία Βλαχερνών – Αιγυπτιακή Αγορά – Κρουαζιέρα Βοσπόρου – Αθήνα – Λάρνακα\n\nΠρωινό και ημέρα αφιερωμένη σε προσκυνήματα & εμβληματικές εικόνες της Πόλης:\n\n• Μπαλουκλί – Ζωοδόχος Πηγή & τάφοι Πατριαρχών\n• Θέα στα Θεοδοσιανά Τείχη & τη Χρυσή Πύλη\n• Επίσκεψη στην Παναγία των Βλαχερνών\n• Οικουμενικό Πατριαρχείο – Πατριαρχικός Ναός Αγίου Γεωργίου, Κλειστή Πύλη, χώρος μαρτυρίου Γρηγορίου Ε\'\n\nΣτη συνέχεια:\n\n• Κρουαζιέρα στον Βόσπορο, ανάμεσα σε Ευρώπη & Ασία, με παλάτια, γέφυρες και παραδοσιακά yali\n• Επίσκεψη στην Αιγυπτιακή Αγορά (Mısır Çarşısı) για βόλτα ανάμεσα σε μπαχαρικά, λουκούμια, αποξηραμένα φρούτα\n\nΤο απόγευμα μεταφορά στο αεροδρόμιο Κωνσταντινούπολης για την πτήση επιστροφής μέσω Αθήνας.'
      },
      gallery: [
        '/images/destinations/pontus-istanbul-hero.webp'
      ]
    }
  },
  {
    id: 37,
    title: 'ΜΠΑΝΓΚΟΚ – ΠΑΤΑΓΙΑ – ΖΟΥΓΚΛΑ ΤΑΪΛΑΝΔΗΣ',
    destination: 'Thailand',
    category: 'Summer Packages',
    price: 2135,
    duration: '11 days / 8 nights',
    description: 'Discover the vibrant culture of Bangkok, explore the floating markets, visit ancient Ayutthaya, experience the jungle of Khao Yai National Park, and relax in the beach resort of Pattaya.',
    longDescription: 'Μια ολοκληρωμένη περιήγηση στην Ταϊλάνδη: από την πολύχρωμη Μπανγκόκ και τις πλωτές αγορές, στην ιστορική Αγιουτάγια, τη ζούγκλα του Εθνικού Πάρκου Κάο Γιάι και την παραθαλάσσια Πατάγια. Εξερευνήστε βουδιστικούς ναούς, παραδοσιακές αγορές, άγρια φύση και εξωτικές παραλίες.',
    image: '🇹🇭',
    featured: true,
    details: {
      departureDate: '24/07, 07/08, 14/08, 21/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Bangkok, Khao Yai, Pattaya, Thailand',
      monthAvailability: 'July, August',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Gulf Air',
      includedLuggage: '1 checked bag 23kg + 1 hand luggage 6kg',
      coverImage: '/images/destinations/bangkok-thailand-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '24/07, 07/08, 14/08, 21/08',
          route: 'Larnaca (LCA) → Bahrain (BAH)',
          flight: 'GF 945',
          time: '16:45 → 19:50',
          luggage: '1 checked bag 23kg'
        },
        {
          direction: 'Departure',
          date: '24/07, 07/08, 14/08, 21/08',
          route: 'Bahrain (BAH) → Bangkok (BKK)',
          flight: 'GF 152',
          time: '22:45 → 09:55 (+1)',
          luggage: '1 checked bag 23kg'
        },
        {
          direction: 'Return',
          date: '24/07, 07/08, 14/08, 21/08',
          route: 'Bangkok (BKK) → Bahrain (BAH)',
          flight: 'GF 153',
          time: '20:15 → 22:55',
          luggage: '1 checked bag 23kg'
        },
        {
          direction: 'Return',
          date: '24/07, 07/08, 14/08, 21/08',
          route: 'Bahrain (BAH) → Larnaca (LCA)',
          flight: 'GF 946',
          time: '01:20 → 04:55',
          luggage: '1 checked bag 23kg'
        }
      ],
      hotels: [
        // Period 1: 24/07 - €2,135 double
        {
          name: 'Bangkok Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/bangkok-hotel.webp',
          location: 'Bangkok Hotel, Bangkok, Thailand',
          prices: {
            double: 2135,
            single: 2385
          },
          departureDate: '24/07',
          packagePrice: 4270,
          boardBasis: 'Bed & Breakfast',
          nights: 4
        },
        {
          name: 'Khao Yai Jungle Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/khao-yai-resort.webp',
          location: 'Khao Yai National Park, Thailand',
          prices: {
            double: 2135,
            single: 2385
          },
          departureDate: '24/07',
          packagePrice: 4270,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 2
        },
        {
          name: 'Pattaya Beach Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/pattaya-resort.webp',
          location: 'Pattaya Beach Resort, Pattaya, Thailand',
          prices: {
            double: 2135,
            single: 2385
          },
          departureDate: '24/07',
          packagePrice: 4270,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        },
        // Period 2: 07/08, 14/08, 21/08 - €2,165 double
        {
          name: 'Bangkok Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/bangkok-hotel.webp',
          location: 'Bangkok Hotel, Bangkok, Thailand',
          prices: {
            double: 2165,
            single: 2425
          },
          departureDate: '07/08',
          packagePrice: 4330,
          boardBasis: 'Bed & Breakfast',
          nights: 4
        },
        {
          name: 'Khao Yai Jungle Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/khao-yai-resort.webp',
          location: 'Khao Yai National Park, Thailand',
          prices: {
            double: 2165,
            single: 2425
          },
          departureDate: '07/08',
          packagePrice: 4330,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 2
        },
        {
          name: 'Pattaya Beach Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/pattaya-resort.webp',
          location: 'Pattaya Beach Resort, Pattaya, Thailand',
          prices: {
            double: 2165,
            single: 2425
          },
          departureDate: '07/08',
          packagePrice: 4330,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        },
        {
          name: 'Bangkok Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/bangkok-hotel.webp',
          location: 'Bangkok Hotel, Bangkok, Thailand',
          prices: {
            double: 2165,
            single: 2425
          },
          departureDate: '14/08',
          packagePrice: 4330,
          boardBasis: 'Bed & Breakfast',
          nights: 4
        },
        {
          name: 'Khao Yai Jungle Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/khao-yai-resort.webp',
          location: 'Khao Yai National Park, Thailand',
          prices: {
            double: 2165,
            single: 2425
          },
          departureDate: '14/08',
          packagePrice: 4330,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 2
        },
        {
          name: 'Pattaya Beach Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/pattaya-resort.webp',
          location: 'Pattaya Beach Resort, Pattaya, Thailand',
          prices: {
            double: 2165,
            single: 2425
          },
          departureDate: '14/08',
          packagePrice: 4330,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        },
        {
          name: 'Bangkok Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/bangkok-hotel.webp',
          location: 'Bangkok Hotel, Bangkok, Thailand',
          prices: {
            double: 2165,
            single: 2425
          },
          departureDate: '21/08',
          packagePrice: 4330,
          boardBasis: 'Bed & Breakfast',
          nights: 4
        },
        {
          name: 'Khao Yai Jungle Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/khao-yai-resort.webp',
          location: 'Khao Yai National Park, Thailand',
          prices: {
            double: 2165,
            single: 2425
          },
          departureDate: '21/08',
          packagePrice: 4330,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 2
        },
        {
          name: 'Pattaya Beach Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/pattaya-resort.webp',
          location: 'Pattaya Beach Resort, Pattaya, Thailand',
          prices: {
            double: 2165,
            single: 2425
          },
          departureDate: '21/08',
          packagePrice: 4330,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Μπαχρέιν – Μπανγκόκ – Μπαχρέιν – Λάρνακα με Gulf Air',
        'Φόροι αεροδρομίων',
        'Διαμονή σε επιλεγμένα ξενοδοχεία 4★ με πρόγευμα',
        'Μεταφορές, εκδρομές & περιηγήσεις όπως αναφέρονται στο πρόγραμμα',
        'Νυχτερινή κρουαζιέρα με δείπνο στον ποταμό Chao Phraya',
        '2 δείπνα σε τοπικά εστιατόρια (όπως στο πρόγραμμα)',
        'Τοπικός αγγλόφωνος ξεναγός',
        'Ελληνόφωνος συνοδός του γραφείου σε όλο το ταξίδι',
        'Εισιτήρια εισόδων όπου χρειάζεται (όπως στο πρόγραμμα)',
        'Μία αποσκευή 23kg + μία χειραποσκευή 6kg ανά άτομο',
        'Υπηρεσίες των τοπικών αντιπροσώπων'
      ],
      notIncluded: [
        'Ποτά στα δείπνα',
        'Οτιδήποτε δεν αναφέρεται ρητά ως περιλαμβανόμενο ή αναφέρεται ως προαιρετικό / προτεινόμενο'
      ],
      cancellationPolicy: 'Μέχρι 45 μέρες πριν: €50 ανά άτομο (λειτουργικά έξοδα). 45–30 μέρες πριν: παρακράτηση 30%. 30–21 μέρες πριν: παρακράτηση 50%. Από 21 μέρες έως την αναχώρηση: παρακράτηση 100%. Σε περίπτωση no-show: 100% της συνολικής τιμής.',
      termsAndConditions: [
        'Οι τιμές των πακέτων δεν αλλάζουν κατά τη στιγμή της κράτησης',
        'Με την κράτηση απαιτείται προκαταβολή 30% της αξίας του πακέτου',
        'Εξόφληση περίπου 21 μέρες πριν την αναχώρηση',
        'Διαμονή: Μπανγκόκ (4 νύχτες), Κάο Γιάι (2 νύχτες), Πατάγια (2 νύχτες)',
        'Διατροφή: Πρόγευμα καθημερινά (Bed & Breakfast)',
        'Όλοι οι ταξιδιώτες πρέπει να συμπληρώσουν ηλεκτρονικά την Ψηφιακή Κάρτα Άφιξης Ταϊλάνδης (TDAC): https://tdac.immigration.go.th/arrival-card/#/home',
        'Μέχρι 45 μέρες πριν: €50 ανά άτομο (λειτουργικά έξοδα)',
        '45–30 μέρες πριν: παρακράτηση 30%',
        '30–21 μέρες πριν: παρακράτηση 50%',
        'Από 21 μέρες έως την αναχώρηση: παρακράτηση 100%',
        'Σε περίπτωση no-show: 100% της συνολικής τιμής'
      ],
      program: {
        introduction: 'ΜΠΑΝΓΚΟΚ – ΠΑΤΑΓΙΑ – ΖΟΥΓΚΛΑ ΤΑΪΛΑΝΔΗΣ\n\nΜια ολοκληρωμένη περιήγηση στην Ταϊλάνδη: από την πολύχρωμη Μπανγκόκ και τις πλωτές αγορές, στην ιστορική Αγιουτάγια, τη ζούγκλα του Εθνικού Πάρκου Κάο Γιάι και την παραθαλάσσια Πατάγια. Εξερευνήστε βουδιστικούς ναούς, παραδοσιακές αγορές, άγρια φύση και εξωτικές παραλίες.',
        day1_2: '1η – 2η Μέρα: Λάρνακα – Μπαχρέιν – Μπανγκόκ\n\nΑναχώρηση από Λάρνακα με ενδιάμεση στάση στο Μπαχρέιν και άφιξη την επόμενη ημέρα στην Μπανγκόκ, την πολύχρωμη πρωτεύουσα της Ταϊλάνδης.\n\nΜεταφορά στο ξενοδοχείο, τακτοποίηση στα δωμάτια και χρόνος ελεύθερος (ανάλογα με την ώρα άφιξης) για ξεκούραση ή μια πρώτη βόλτα στην πόλη.\n\n🔸 Προαιρετικά το βράδυ:\nΕπίσκεψη στον ουρανοξύστη Baiyoke Sky – δείπνο μπουφέ στον 76ο όροφο ή ανάβαση στον 84ο όροφο με περιστρεφόμενη πλατφόρμα και 360° θέα της φωτισμένης Μπανγκόκ.\n\nΔιανυκτέρευση στην Μπανγκόκ.',
        day3: '3η Μέρα: Μπανγκόκ – Βουδιστικοί Ναοί & Chinatown\n\nΠρωινό και αναχώρηση για ξενάγηση στην «Πόλη των Αγγέλων»:\n\n• Επίσκεψη στον επιβλητικό Wat Arun (Ναός της Αυγής) στις όχθες του Chao Phraya\n• Επίσκεψη στον Wat Pho με τον γιγάντιο Ξαπλωτό Βούδα (45μ., καλυμμένο με φύλλα χρυσού)\n• Περιήγηση στην ιστορική και πολυσύχναστη Chinatown\n• Επίσκεψη στην εντυπωσιακή Αγορά Λουλουδιών – μια αυθεντική εικόνα της τοπικής καθημερινότητας\n\nΕπιστροφή στο ξενοδοχείο και ελεύθερος χρόνος.\nΔιανυκτέρευση στην Μπανγκόκ.',
        day4: '4η Μέρα: Μπανγκόκ – Ελεύθερος Χρόνος & Κρουαζιέρα στον ποταμό Chao Phraya\n\nΠρωινό στο ξενοδοχείο.\n\n🔸 Πρωί:\nΕλεύθερος χρόνος για βόλτα σε υπαίθριες αγορές, δοκιμή street food (pad thai, καρύδα, εξωτικά φρούτα κ.ά.) και αγορές.\n\n🔸 Απόγευμα / Βράδυ:\nΚρουαζιέρα στον ποταμό Chao Phraya – τον «ποταμό των βασιλιάδων»:\n• Θέα σε παραδοσιακά σπίτια πάνω στο νερό\n• Σύγχρονα κτίρια & πολυτελή ξενοδοχεία\n• Χρυσοί ναοί & κανάλια\n• Το εντυπωσιακό skyline της Μπανγκόκ\n\nΠεριλαμβάνεται νυχτερινή κρουαζιέρα με δείπνο στον Chao Phraya.\n\nΕπιστροφή στο ξενοδοχείο.\nΔιανυκτέρευση στην Μπανγκόκ.',
        day5: '5η Μέρα: Πλωτή Αγορά Damnoen Saduak & Αγορά του Τρένου Maeklong\n\nΜετά το πρωινό, αναχώρηση για ολοήμερη εμπειρία σε δύο από τις πιο ιδιαίτερες αγορές της Ταϊλάνδης:\n\n1️⃣ Πλωτή Αγορά Damnoen Saduak\n• Διαδρομή ~100 χλμ δυτικά της Μπανγκόκ\n• Επιβίβαση σε παραδοσιακές βάρκες\n• Πλωτή διαδρομή ανάμεσα σε βάρκες γεμάτες φρούτα, λαχανικά, τοπικές λιχουδιές & χειροτεχνήματα\n• Αυθεντική εικόνα παραδοσιακής ταϊλανδέζικης αγοράς πάνω στο νερό\n\n2️⃣ Αγορά του Τρένου (Maeklong Railway Market)\n• Αγορά «πάνω στις ράγες»\n• Οι έμποροι μαζεύουν γρήγορα τέντες και πάγκους όταν περνά το τρένο\n• Μοναδικό, εντυπωσιακό θέαμα – από τις πιο φωτογραφημένες αγορές στον κόσμο\n\nΕπιστροφή στο ξενοδοχείο στην Μπανγκόκ και χρόνος για ξεκούραση.\nΔιανυκτέρευση στην Μπανγκόκ.',
        day6: '6η Μέρα: Μπανγκόκ – Αγιουτάγια – Εθνικό Πάρκο Κάο Γιάι\n\nΠρωινό και αναχώρηση για την ιστορική πόλη Αγιουτάγια:\n\n• Πρώην πρωτεύουσα του Βασιλείου του Σιάμ (ιδρύθηκε το 1350)\n• Εντυπωσιακοί ναοί & ερείπια βασιλικών ανακτόρων\n• Prang (πύργοι-λειψανοθήκες), κανάλια & υδραυλικά έργα\n• Αρχαιολογικός χώρος υπό την προστασία της UNESCO\n\nΜετά την ξενάγηση, συνεχίζουμε προς την περιοχή του Εθνικού Πάρκου Κάο Γιάι.\n\nΆφιξη, τακτοποίηση στο ξενοδοχείο μέσα στη φύση.\nΔείπνο & διανυκτέρευση στο Κάο Γιάι.',
        day7: '7η Μέρα: Εθνικό Πάρκο Κάο Γιάι – Ζούγκλα Ταϊλάνδης\n\nΠρωινό και ημέρα αφιερωμένη στην εξερεύνηση της ζούγκλας:\n\nΤο Εθνικό Πάρκο Κάο Γιάι (2.206 τ.χλμ.) είναι από τους σημαντικότερους βιότοπους της Νοτιοανατολικής Ασίας.\n\nΦιλοξενεί περισσότερα από 350 είδη σπάνιων πουλιών και πλούσια άγρια ζωή:\n• Ασιατικοί ελέφαντες\n• μαϊμούδες, ελάφια\n• (και πιο βαθιά στη ζούγκλα, ίχνη από τίγρεις)\n\nΠεζοπορικές διαδρομές, θέα σε καταρράκτες, τροπική βλάστηση και μοναδικό φυσικό τοπίο.\n\n🔸 Προαιρετικά (τοπική οργάνωση / έξτρα κόστος):\n• Jungle tour με τοπικό οδηγό\n• Παρατήρηση άγριας ζωής\n• Rafting σε ποτάμι\n• Νυχτερινό σαφάρι\n\nΤο βράδυ, η ζούγκλα προσφέρει μια μαγική, ήρεμη και ταυτόχρονα μυστηριώδη ατμόσφαιρα.\n\nΔείπνο & διανυκτέρευση στο Κάο Γιάι.',
        day8: '8η Μέρα: Κάο Γιάι – Πατάγια\n\nΠρωινό και αναχώρηση για την Πατάγια, ένα από τα πιο γνωστά παραθαλάσσια θέρετρα της Ταϊλάνδης:\n\n• Εντυπωσιακός κόλπος σε σχήμα μισοφέγγαρου\n• Σύγχρονα κτίρια, πολυτελή ξενοδοχεία & ζωντανή παραλιακή ζώνη\n• Θαλάσσια σπορ, οργανωμένες παραλίες, εμπορικά κέντρα & πλωτές αγορές\n\nΆφιξη στην Πατάγια, τακτοποίηση στο ξενοδοχείο και ελεύθερος χρόνος για πρώτη γνωριμία με την πόλη.\n\nΔιανυκτέρευση στην Πατάγια.',
        day9: '9η Μέρα: Πατάγια – Ελεύθερη Ημέρα\n\nΗμέρα ελεύθερη στην Πατάγια για να την απολαύσετε όπως εσείς επιθυμείτε:\n\nΠροτάσεις:\n• Περίπατος κατά μήκος της παραλίας\n• Επίσκεψη στο Sanctuary of Truth (επιβλητικό ξύλινο μνημείο)\n• Θέα στο Pratumnak Hill Viewpoint\n• Προαιρετική εκδρομή στο νησί Koh Larn για μπάνιο σε εξωτικές παραλίες\n• Επίσκεψη στο Pattaya Floating Market\n• Προαιρετική επίσκεψη στον θεαματικό βοτανικό κήπο Nong Nooch\n• Χρόνος για ψώνια, spa & μασάζ ή απλή χαλάρωση\n\nΤο βράδυ, μπορείτε να απολαύσετε την έντονη νυχτερινή ζωή της Πατάγιας.\n\nΔιανυκτέρευση στην Πατάγια.',
        day10_11: '10η – 11η Μέρα: Πατάγια – Μπανγκόκ – Μπαχρέιν – Λάρνακα\n\nΠρωινό και ελεύθερος χρόνος στην Πατάγια για τελευταίες βόλτες ή αγορές.\n\nΑναχώρηση οδικώς για το αεροδρόμιο της Μπανγκόκ.\n\nΠτήση Μπανγκόκ – Μπαχρέιν – Λάρνακα με Gulf Air.\n\nΆφιξη στη Λάρνακα (11η μέρα) γεμάτοι εικόνες, εμπειρίες και αξέχαστες αναμνήσεις από την Ταϊλάνδη.'
      },
      gallery: [
        '/images/destinations/bangkok-thailand-hero.webp'
      ]
    }
  },
  {
    id: 38,
    title: 'ΜΠΑΝΓΚΟΚ – ΠΑΤΑΓΙΑ – ΖΟΥΓΚΛΑ ΤΑΪΛΑΝΔΗΣ',
    destination: 'Thailand',
    category: 'Exotic Packages',
    price: 2135,
    duration: '11 days / 8 nights',
    description: 'Discover the vibrant culture of Bangkok, explore the floating markets, visit ancient Ayutthaya, experience the jungle of Khao Yai National Park, and relax in the beach resort of Pattaya.',
    longDescription: 'Μια ολοκληρωμένη περιήγηση στην Ταϊλάνδη: από την πολύχρωμη Μπανγκόκ και τις πλωτές αγορές, στην ιστορική Αγιουτάγια, τη ζούγκλα του Εθνικού Πάρκου Κάο Γιάι και την παραθαλάσσια Πατάγια. Εξερευνήστε βουδιστικούς ναούς, παραδοσιακές αγορές, άγρια φύση και εξωτικές παραλίες.',
    image: '🇹🇭',
    featured: true,
    details: {
      departureDate: '24/07, 07/08, 14/08, 21/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Bangkok, Khao Yai, Pattaya, Thailand',
      monthAvailability: 'July, August',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Gulf Air',
      includedLuggage: '1 checked bag 23kg + 1 hand luggage 6kg',
      coverImage: '/images/destinations/bangkok-thailand-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '24/07, 07/08, 14/08, 21/08',
          route: 'Larnaca (LCA) → Bahrain (BAH)',
          flight: 'GF 945',
          time: '16:45 → 19:50',
          luggage: '1 checked bag 23kg'
        },
        {
          direction: 'Departure',
          date: '24/07, 07/08, 14/08, 21/08',
          route: 'Bahrain (BAH) → Bangkok (BKK)',
          flight: 'GF 152',
          time: '22:45 → 09:55 (+1)',
          luggage: '1 checked bag 23kg'
        },
        {
          direction: 'Return',
          date: '24/07, 07/08, 14/08, 21/08',
          route: 'Bangkok (BKK) → Bahrain (BAH)',
          flight: 'GF 153',
          time: '20:15 → 22:55',
          luggage: '1 checked bag 23kg'
        },
        {
          direction: 'Return',
          date: '24/07, 07/08, 14/08, 21/08',
          route: 'Bahrain (BAH) → Larnaca (LCA)',
          flight: 'GF 946',
          time: '01:20 → 04:55',
          luggage: '1 checked bag 23kg'
        }
      ],
      hotels: [
        // Period 1: 24/07 - €2,135 double
        {
          name: 'Bangkok Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/bangkok-hotel.webp',
          location: 'Bangkok Hotel, Bangkok, Thailand',
          prices: {
            double: 2135,
            single: 2385
          },
          departureDate: '24/07',
          packagePrice: 4270,
          boardBasis: 'Bed & Breakfast',
          nights: 4
        },
        {
          name: 'Khao Yai Jungle Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/khao-yai-resort.webp',
          location: 'Khao Yai National Park, Thailand',
          prices: {
            double: 2135,
            single: 2385
          },
          departureDate: '24/07',
          packagePrice: 4270,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 2
        },
        {
          name: 'Pattaya Beach Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/pattaya-resort.webp',
          location: 'Pattaya Beach Resort, Pattaya, Thailand',
          prices: {
            double: 2135,
            single: 2385
          },
          departureDate: '24/07',
          packagePrice: 4270,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        },
        // Period 2: 07/08, 14/08, 21/08 - €2,165 double
        {
          name: 'Bangkok Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/bangkok-hotel.webp',
          location: 'Bangkok Hotel, Bangkok, Thailand',
          prices: {
            double: 2165,
            single: 2425
          },
          departureDate: '07/08',
          packagePrice: 4330,
          boardBasis: 'Bed & Breakfast',
          nights: 4
        },
        {
          name: 'Khao Yai Jungle Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/khao-yai-resort.webp',
          location: 'Khao Yai National Park, Thailand',
          prices: {
            double: 2165,
            single: 2425
          },
          departureDate: '07/08',
          packagePrice: 4330,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 2
        },
        {
          name: 'Pattaya Beach Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/pattaya-resort.webp',
          location: 'Pattaya Beach Resort, Pattaya, Thailand',
          prices: {
            double: 2165,
            single: 2425
          },
          departureDate: '07/08',
          packagePrice: 4330,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        },
        {
          name: 'Bangkok Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/bangkok-hotel.webp',
          location: 'Bangkok Hotel, Bangkok, Thailand',
          prices: {
            double: 2165,
            single: 2425
          },
          departureDate: '14/08',
          packagePrice: 4330,
          boardBasis: 'Bed & Breakfast',
          nights: 4
        },
        {
          name: 'Khao Yai Jungle Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/khao-yai-resort.webp',
          location: 'Khao Yai National Park, Thailand',
          prices: {
            double: 2165,
            single: 2425
          },
          departureDate: '14/08',
          packagePrice: 4330,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 2
        },
        {
          name: 'Pattaya Beach Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/pattaya-resort.webp',
          location: 'Pattaya Beach Resort, Pattaya, Thailand',
          prices: {
            double: 2165,
            single: 2425
          },
          departureDate: '14/08',
          packagePrice: 4330,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        },
        {
          name: 'Bangkok Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/bangkok-hotel.webp',
          location: 'Bangkok Hotel, Bangkok, Thailand',
          prices: {
            double: 2165,
            single: 2425
          },
          departureDate: '21/08',
          packagePrice: 4330,
          boardBasis: 'Bed & Breakfast',
          nights: 4
        },
        {
          name: 'Khao Yai Jungle Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/khao-yai-resort.webp',
          location: 'Khao Yai National Park, Thailand',
          prices: {
            double: 2165,
            single: 2425
          },
          departureDate: '21/08',
          packagePrice: 4330,
          boardBasis: 'Bed & Breakfast + Dinner',
          nights: 2
        },
        {
          name: 'Pattaya Beach Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/pattaya-resort.webp',
          location: 'Pattaya Beach Resort, Pattaya, Thailand',
          prices: {
            double: 2165,
            single: 2425
          },
          departureDate: '21/08',
          packagePrice: 4330,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Μπαχρέιν – Μπανγκόκ – Μπαχρέιν – Λάρνακα με Gulf Air',
        'Φόροι αεροδρομίων',
        'Διαμονή σε επιλεγμένα ξενοδοχεία 4★ με πρόγευμα',
        'Μεταφορές, εκδρομές & περιηγήσεις όπως αναφέρονται στο πρόγραμμα',
        'Νυχτερινή κρουαζιέρα με δείπνο στον ποταμό Chao Phraya',
        '2 δείπνα σε τοπικά εστιατόρια (όπως στο πρόγραμμα)',
        'Τοπικός αγγλόφωνος ξεναγός',
        'Ελληνόφωνος συνοδός του γραφείου σε όλο το ταξίδι',
        'Εισιτήρια εισόδων όπου χρειάζεται (όπως στο πρόγραμμα)',
        'Μία αποσκευή 23kg + μία χειραποσκευή 6kg ανά άτομο',
        'Υπηρεσίες των τοπικών αντιπροσώπων'
      ],
      notIncluded: [
        'Ποτά στα δείπνα',
        'Οτιδήποτε δεν αναφέρεται ρητά ως περιλαμβανόμενο ή αναφέρεται ως προαιρετικό / προτεινόμενο'
      ],
      cancellationPolicy: 'Μέχρι 45 μέρες πριν: €50 ανά άτομο (λειτουργικά έξοδα). 45–30 μέρες πριν: παρακράτηση 30%. 30–21 μέρες πριν: παρακράτηση 50%. Από 21 μέρες έως την αναχώρηση: παρακράτηση 100%. Σε περίπτωση no-show: 100% της συνολικής τιμής.',
      termsAndConditions: [
        'Οι τιμές των πακέτων δεν αλλάζουν κατά τη στιγμή της κράτησης',
        'Με την κράτηση απαιτείται προκαταβολή 30% της αξίας του πακέτου',
        'Εξόφληση περίπου 21 μέρες πριν την αναχώρηση',
        'Διαμονή: Μπανγκόκ (4 νύχτες), Κάο Γιάι (2 νύχτες), Πατάγια (2 νύχτες)',
        'Διατροφή: Πρόγευμα καθημερινά (Bed & Breakfast)',
        'Όλοι οι ταξιδιώτες πρέπει να συμπληρώσουν ηλεκτρονικά την Ψηφιακή Κάρτα Άφιξης Ταϊλάνδης (TDAC): https://tdac.immigration.go.th/arrival-card/#/home',
        'Μέχρι 45 μέρες πριν: €50 ανά άτομο (λειτουργικά έξοδα)',
        '45–30 μέρες πριν: παρακράτηση 30%',
        '30–21 μέρες πριν: παρακράτηση 50%',
        'Από 21 μέρες έως την αναχώρηση: παρακράτηση 100%',
        'Σε περίπτωση no-show: 100% της συνολικής τιμής'
      ],
      program: {
        introduction: 'ΜΠΑΝΓΚΟΚ – ΠΑΤΑΓΙΑ – ΖΟΥΓΚΛΑ ΤΑΪΛΑΝΔΗΣ\n\nΜια ολοκληρωμένη περιήγηση στην Ταϊλάνδη: από την πολύχρωμη Μπανγκόκ και τις πλωτές αγορές, στην ιστορική Αγιουτάγια, τη ζούγκλα του Εθνικού Πάρκου Κάο Γιάι και την παραθαλάσσια Πατάγια. Εξερευνήστε βουδιστικούς ναούς, παραδοσιακές αγορές, άγρια φύση και εξωτικές παραλίες.',
        day1_2: '1η – 2η Μέρα: Λάρνακα – Μπαχρέιν – Μπανγκόκ\n\nΑναχώρηση από Λάρνακα με ενδιάμεση στάση στο Μπαχρέιν και άφιξη την επόμενη ημέρα στην Μπανγκόκ, την πολύχρωμη πρωτεύουσα της Ταϊλάνδης.\n\nΜεταφορά στο ξενοδοχείο, τακτοποίηση στα δωμάτια και χρόνος ελεύθερος (ανάλογα με την ώρα άφιξης) για ξεκούραση ή μια πρώτη βόλτα στην πόλη.\n\n🔸 Προαιρετικά το βράδυ:\nΕπίσκεψη στον ουρανοξύστη Baiyoke Sky – δείπνο μπουφέ στον 76ο όροφο ή ανάβαση στον 84ο όροφο με περιστρεφόμενη πλατφόρμα και 360° θέα της φωτισμένης Μπανγκόκ.\n\nΔιανυκτέρευση στην Μπανγκόκ.',
        day3: '3η Μέρα: Μπανγκόκ – Βουδιστικοί Ναοί & Chinatown\n\nΠρωινό και αναχώρηση για ξενάγηση στην «Πόλη των Αγγέλων»:\n\n• Επίσκεψη στον επιβλητικό Wat Arun (Ναός της Αυγής) στις όχθες του Chao Phraya\n• Επίσκεψη στον Wat Pho με τον γιγάντιο Ξαπλωτό Βούδα (45μ., καλυμμένο με φύλλα χρυσού)\n• Περιήγηση στην ιστορική και πολυσύχναστη Chinatown\n• Επίσκεψη στην εντυπωσιακή Αγορά Λουλουδιών – μια αυθεντική εικόνα της τοπικής καθημερινότητας\n\nΕπιστροφή στο ξενοδοχείο και ελεύθερος χρόνος.\nΔιανυκτέρευση στην Μπανγκόκ.',
        day4: '4η Μέρα: Μπανγκόκ – Ελεύθερος Χρόνος & Κρουαζιέρα στον ποταμό Chao Phraya\n\nΠρωινό στο ξενοδοχείο.\n\n🔸 Πρωί:\nΕλεύθερος χρόνος για βόλτα σε υπαίθριες αγορές, δοκιμή street food (pad thai, καρύδα, εξωτικά φρούτα κ.ά.) και αγορές.\n\n🔸 Απόγευμα / Βράδυ:\nΚρουαζιέρα στον ποταμό Chao Phraya – τον «ποταμό των βασιλιάδων»:\n• Θέα σε παραδοσιακά σπίτια πάνω στο νερό\n• Σύγχρονα κτίρια & πολυτελή ξενοδοχεία\n• Χρυσοί ναοί & κανάλια\n• Το εντυπωσιακό skyline της Μπανγκόκ\n\nΠεριλαμβάνεται νυχτερινή κρουαζιέρα με δείπνο στον Chao Phraya.\n\nΕπιστροφή στο ξενοδοχείο.\nΔιανυκτέρευση στην Μπανγκόκ.',
        day5: '5η Μέρα: Πλωτή Αγορά Damnoen Saduak & Αγορά του Τρένου Maeklong\n\nΜετά το πρωινό, αναχώρηση για ολοήμερη εμπειρία σε δύο από τις πιο ιδιαίτερες αγορές της Ταϊλάνδης:\n\n1️⃣ Πλωτή Αγορά Damnoen Saduak\n• Διαδρομή ~100 χλμ δυτικά της Μπανγκόκ\n• Επιβίβαση σε παραδοσιακές βάρκες\n• Πλωτή διαδρομή ανάμεσα σε βάρκες γεμάτες φρούτα, λαχανικά, τοπικές λιχουδιές & χειροτεχνήματα\n• Αυθεντική εικόνα παραδοσιακής ταϊλανδέζικης αγοράς πάνω στο νερό\n\n2️⃣ Αγορά του Τρένου (Maeklong Railway Market)\n• Αγορά «πάνω στις ράγες»\n• Οι έμποροι μαζεύουν γρήγορα τέντες και πάγκους όταν περνά το τρένο\n• Μοναδικό, εντυπωσιακό θέαμα – από τις πιο φωτογραφημένες αγορές στον κόσμο\n\nΕπιστροφή στο ξενοδοχείο στην Μπανγκόκ και χρόνος για ξεκούραση.\nΔιανυκτέρευση στην Μπανγκόκ.',
        day6: '6η Μέρα: Μπανγκόκ – Αγιουτάγια – Εθνικό Πάρκο Κάο Γιάι\n\nΠρωινό και αναχώρηση για την ιστορική πόλη Αγιουτάγια:\n\n• Πρώην πρωτεύουσα του Βασιλείου του Σιάμ (ιδρύθηκε το 1350)\n• Εντυπωσιακοί ναοί & ερείπια βασιλικών ανακτόρων\n• Prang (πύργοι-λειψανοθήκες), κανάλια & υδραυλικά έργα\n• Αρχαιολογικός χώρος υπό την προστασία της UNESCO\n\nΜετά την ξενάγηση, συνεχίζουμε προς την περιοχή του Εθνικού Πάρκου Κάο Γιάι.\n\nΆφιξη, τακτοποίηση στο ξενοδοχείο μέσα στη φύση.\nΔείπνο & διανυκτέρευση στο Κάο Γιάι.',
        day7: '7η Μέρα: Εθνικό Πάρκο Κάο Γιάι – Ζούγκλα Ταϊλάνδης\n\nΠρωινό και ημέρα αφιερωμένη στην εξερεύνηση της ζούγκλας:\n\nΤο Εθνικό Πάρκο Κάο Γιάι (2.206 τ.χλμ.) είναι από τους σημαντικότερους βιότοπους της Νοτιοανατολικής Ασίας.\n\nΦιλοξενεί περισσότερα από 350 είδη σπάνιων πουλιών και πλούσια άγρια ζωή:\n• Ασιατικοί ελέφαντες\n• μαϊμούδες, ελάφια\n• (και πιο βαθιά στη ζούγκλα, ίχνη από τίγρεις)\n\nΠεζοπορικές διαδρομές, θέα σε καταρράκτες, τροπική βλάστηση και μοναδικό φυσικό τοπίο.\n\n🔸 Προαιρετικά (τοπική οργάνωση / έξτρα κόστος):\n• Jungle tour με τοπικό οδηγό\n• Παρατήρηση άγριας ζωής\n• Rafting σε ποτάμι\n• Νυχτερινό σαφάρι\n\nΤο βράδυ, η ζούγκλα προσφέρει μια μαγική, ήρεμη και ταυτόχρονα μυστηριώδη ατμόσφαιρα.\n\nΔείπνο & διανυκτέρευση στο Κάο Γιάι.',
        day8: '8η Μέρα: Κάο Γιάι – Πατάγια\n\nΠρωινό και αναχώρηση για την Πατάγια, ένα από τα πιο γνωστά παραθαλάσσια θέρετρα της Ταϊλάνδης:\n\n• Εντυπωσιακός κόλπος σε σχήμα μισοφέγγαρου\n• Σύγχρονα κτίρια, πολυτελή ξενοδοχεία & ζωντανή παραλιακή ζώνη\n• Θαλάσσια σπορ, οργανωμένες παραλίες, εμπορικά κέντρα & πλωτές αγορές\n\nΆφιξη στην Πατάγια, τακτοποίηση στο ξενοδοχείο και ελεύθερος χρόνος για πρώτη γνωριμία με την πόλη.\n\nΔιανυκτέρευση στην Πατάγια.',
        day9: '9η Μέρα: Πατάγια – Ελεύθερη Ημέρα\n\nΗμέρα ελεύθερη στην Πατάγια για να την απολαύσετε όπως εσείς επιθυμείτε:\n\nΠροτάσεις:\n• Περίπατος κατά μήκος της παραλίας\n• Επίσκεψη στο Sanctuary of Truth (επιβλητικό ξύλινο μνημείο)\n• Θέα στο Pratumnak Hill Viewpoint\n• Προαιρετική εκδρομή στο νησί Koh Larn για μπάνιο σε εξωτικές παραλίες\n• Επίσκεψη στο Pattaya Floating Market\n• Προαιρετική επίσκεψη στον θεαματικό βοτανικό κήπο Nong Nooch\n• Χρόνος για ψώνια, spa & μασάζ ή απλή χαλάρωση\n\nΤο βράδυ, μπορείτε να απολαύσετε την έντονη νυχτερινή ζωή της Πατάγιας.\n\nΔιανυκτέρευση στην Πατάγια.',
        day10_11: '10η – 11η Μέρα: Πατάγια – Μπανγκόκ – Μπαχρέιν – Λάρνακα\n\nΠρωινό και ελεύθερος χρόνος στην Πατάγια για τελευταίες βόλτες ή αγορές.\n\nΑναχώρηση οδικώς για το αεροδρόμιο της Μπανγκόκ.\n\nΠτήση Μπανγκόκ – Μπαχρέιν – Λάρνακα με Gulf Air.\n\nΆφιξη στη Λάρνακα (11η μέρα) γεμάτοι εικόνες, εμπειρίες και αξέχαστες αναμνήσεις από την Ταϊλάνδη.'
      },
      gallery: [
        '/images/destinations/bangkok-thailand-hero.webp'
      ]
    }
  },
  {
    id: 39,
    title: 'ΜΠΑΝΓΚΟΚ / ΠΟΥΚΕΤ / ΝΗΣΙ JAMES BOND',
    destination: 'Thailand',
    category: 'Summer Packages',
    price: 2369,
    duration: '10 days / 7 nights',
    description: 'Experience tropical beaches, jungle adventures, and exotic excursions in Phuket and Bangkok. Visit James Bond Island, explore floating markets, and discover the vibrant culture of Thailand.',
    longDescription: 'Μια ολοκληρωμένη περιήγηση στο Πουκέτ και την Μπανγκόκ: τροπικές παραλίες, ζούγκλα, κρουαζιέρα στο διάσημο νησί James Bond, βουδιστικοί ναοί, πλωτές αγορές και εξωτικές εκδρομές. Απολαύστε 5 νύχτες στο Πουκέτ και 2 νύχτες στην Μπανγκόκ.',
    image: '🇹🇭',
    featured: true,
    details: {
      departureDate: '20/07, 10/08, 17/08, 14/09, 19/10',
      departureFrom: 'Larnaca',
      destinationFull: 'Phuket, Bangkok, James Bond Island, Thailand',
      monthAvailability: 'July, August, September, October',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Emirates',
      includedLuggage: '1 checked bag 30kg + 1 hand luggage 7kg (Emirates), 1 checked bag 23kg + 1 hand luggage 7kg (domestic)',
      coverImage: '/images/destinations/phuket-james-bond-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '20/07, 10/08, 17/08, 14/09, 19/10',
          route: 'Larnaca (LCA) → Dubai (DXB)',
          flight: 'EK 110',
          time: '20:10 → 01:05 (+1)',
          luggage: '1 checked bag 30kg'
        },
        {
          direction: 'Departure',
          date: '20/07, 10/08, 17/08, 14/09, 19/10',
          route: 'Dubai (DXB) → Phuket (HKT)',
          flight: 'EK 378',
          time: '02:30 → 12:00',
          luggage: '1 checked bag 30kg'
        },
        {
          direction: 'Domestic',
          date: '20/07, 10/08, 17/08, 14/09, 19/10',
          route: 'Phuket (HKT) → Bangkok (BKK)',
          flight: 'TBA',
          time: 'TBA',
          luggage: '1 checked bag 23kg'
        },
        {
          direction: 'Return',
          date: '20/07, 10/08, 17/08, 14/09, 19/10',
          route: 'Bangkok (BKK) → Dubai (DXB)',
          flight: 'EK 371',
          time: '03:40 → 06:50',
          luggage: '1 checked bag 30kg'
        },
        {
          direction: 'Return',
          date: '20/07, 10/08, 17/08, 14/09, 19/10',
          route: 'Dubai (DXB) → Larnaca (LCA)',
          flight: 'EK 109',
          time: '08:00 → 11:10',
          luggage: '1 checked bag 30kg'
        }
      ],
      hotels: [
        // Period 1: 20/07 - €2,369 double
        {
          name: 'Phuket Beach Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/phuket-resort.webp',
          location: 'Phuket Beach Resort, Phuket, Thailand',
          prices: {
            double: 2369,
            single: 2739
          },
          departureDate: '20/07',
          packagePrice: 4738,
          boardBasis: 'Bed & Breakfast',
          nights: 5
        },
        {
          name: 'Bangkok Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/bangkok-hotel.webp',
          location: 'Bangkok Hotel, Bangkok, Thailand',
          prices: {
            double: 2369,
            single: 2739
          },
          departureDate: '20/07',
          packagePrice: 4738,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        },
        // Period 2: 10/08, 17/08 - €2,399 double
        {
          name: 'Phuket Beach Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/phuket-resort.webp',
          location: 'Phuket Beach Resort, Phuket, Thailand',
          prices: {
            double: 2399,
            single: 2789
          },
          departureDate: '10/08',
          packagePrice: 4798,
          boardBasis: 'Bed & Breakfast',
          nights: 5
        },
        {
          name: 'Bangkok Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/bangkok-hotel.webp',
          location: 'Bangkok Hotel, Bangkok, Thailand',
          prices: {
            double: 2399,
            single: 2789
          },
          departureDate: '10/08',
          packagePrice: 4798,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        },
        {
          name: 'Phuket Beach Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/phuket-resort.webp',
          location: 'Phuket Beach Resort, Phuket, Thailand',
          prices: {
            double: 2399,
            single: 2789
          },
          departureDate: '17/08',
          packagePrice: 4798,
          boardBasis: 'Bed & Breakfast',
          nights: 5
        },
        {
          name: 'Bangkok Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/bangkok-hotel.webp',
          location: 'Bangkok Hotel, Bangkok, Thailand',
          prices: {
            double: 2399,
            single: 2789
          },
          departureDate: '17/08',
          packagePrice: 4798,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        },
        // Period 3: 14/09, 19/10 - €2,279 double
        {
          name: 'Phuket Beach Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/phuket-resort.webp',
          location: 'Phuket Beach Resort, Phuket, Thailand',
          prices: {
            double: 2279,
            single: 2689
          },
          departureDate: '14/09',
          packagePrice: 4558,
          boardBasis: 'Bed & Breakfast',
          nights: 5
        },
        {
          name: 'Bangkok Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/bangkok-hotel.webp',
          location: 'Bangkok Hotel, Bangkok, Thailand',
          prices: {
            double: 2279,
            single: 2689
          },
          departureDate: '14/09',
          packagePrice: 4558,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        },
        {
          name: 'Phuket Beach Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/phuket-resort.webp',
          location: 'Phuket Beach Resort, Phuket, Thailand',
          prices: {
            double: 2279,
            single: 2689
          },
          departureDate: '19/10',
          packagePrice: 4558,
          boardBasis: 'Bed & Breakfast',
          nights: 5
        },
        {
          name: 'Bangkok Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/bangkok-hotel.webp',
          location: 'Bangkok Hotel, Bangkok, Thailand',
          prices: {
            double: 2279,
            single: 2689
          },
          departureDate: '19/10',
          packagePrice: 4558,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Ντουμπάι – Πουκέτ & Μπανγκόκ – Ντουμπάι – Λάρνακα με Emirates Airlines',
        'Αεροπορικό εισιτήριο Πουκέτ – Μπανγκόκ',
        'Φόροι αεροδρομίων & επίναυλοι καυσίμων',
        'Διαμονή σε ξενοδοχεία 4★ με πρόγευμα',
        'Μεταφορές, εκδρομές & περιηγήσεις όπως στο πρόγραμμα',
        '2 γεύματα όπως αναφέρονται στο πρόγραμμα',
        'Βόλτα με παραδοσιακές σχεδίες από μπαμπού (bamboo rafting)',
        'Κρουαζιέρα στο νησί James Bond στον κόλπο Phang Nga',
        'Τοπικός αγγλόφωνος ξεναγός στις εκδρομές',
        'Ελληνόφωνος συνοδός του γραφείου από Κύπρο',
        'Εισιτήρια εισόδων όπου χρειάζεται',
        'Πτήσεις Emirates: 1 αποσκευή 30kg + 1 χειραποσκευή 7kg',
        'Εσωτερική πτήση: 1 αποσκευή 23kg + 1 χειραποσκευή 7kg',
        'Υπηρεσίες τοπικών αντιπροσώπων'
      ],
      notIncluded: [
        'Αχθοφορικά & φιλοδωρήματα',
        'Ποτά στα γεύματα',
        'Οτιδήποτε δεν αναφέρεται ρητά ως περιλαμβανόμενο ή αναφέρεται ως προαιρετικό / προτεινόμενο',
        'Προαιρετική κρουαζιέρα στα νησιά Πι Πι (περίπου €70 το άτομο)',
        'Προαιρετική εκδρομή σε πλωτή αγορά & αγορά τρένου'
      ],
      cancellationPolicy: 'Μέχρι 45 μέρες πριν την άφιξη: παρακράτηση €100 ανά άτομο για λειτουργικά έξοδα. Από 45 έως 30 μέρες πριν: παρακράτηση 30% της συνολικής τιμής. Από 30 έως 21 μέρες πριν: παρακράτηση 50% της συνολικής τιμής. Από 21 μέρες έως την ημέρα άφιξης: παρακράτηση 100% της συνολικής τιμής. Σε περίπτωση μη εμφάνισης (no-show): παρακράτηση 100% της συνολικής τιμής.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά την ώρα της κράτησης',
        'Με την κράτηση απαιτείται προκαταβολή 30% της αξίας του πακέτου',
        'Εξόφληση περίπου 21 μέρες πριν την αναχώρηση',
        'Διαμονή: Πουκέτ (5 νύχτες), Μπανγκόκ (2 νύχτες)',
        'Διατροφή: Πρόγευμα καθημερινά (Bed & Breakfast)',
        'Όλοι οι ταξιδιώτες πρέπει να συμπληρώσουν ηλεκτρονικά την Ψηφιακή Κάρτα Άφιξης Ταϊλάνδης (TDAC): https://tdac.immigration.go.th/arrival-card/#/home',
        'Μέχρι 45 μέρες πριν την άφιξη: παρακράτηση €100 ανά άτομο για λειτουργικά έξοδα',
        'Από 45 έως 30 μέρες πριν: παρακράτηση 30% της συνολικής τιμής',
        'Από 30 έως 21 μέρες πριν: παρακράτηση 50% της συνολικής τιμής',
        'Από 21 μέρες έως την ημέρα άφιξης: παρακράτηση 100% της συνολικής τιμής',
        'Σε περίπτωση μη εμφάνισης (no-show): παρακράτηση 100% της συνολικής τιμής'
      ],
      program: {
        introduction: 'ΜΠΑΝΓΚΟΚ / ΠΟΥΚΕΤ / ΝΗΣΙ JAMES BOND\n\nΜια ολοκληρωμένη περιήγηση στο Πουκέτ και την Μπανγκόκ: τροπικές παραλίες, ζούγκλα, κρουαζιέρα στο διάσημο νησί James Bond, βουδιστικοί ναοί, πλωτές αγορές και εξωτικές εκδρομές. Απολαύστε 5 νύχτες στο Πουκέτ και 2 νύχτες στην Μπανγκόκ.',
        day1_2: '1η – 2η Μέρα: Λάρνακα – Ντουμπάι – Πουκέτ\n\nΑναχώρηση από Λάρνακα με ενδιάμεση στάση στο Ντουμπάι και άφιξη την επόμενη ημέρα στο Πουκέτ, το πιο κοσμοπολίτικο νησί της Ταϊλάνδης.\n\nΥποδοχή από τον αρχηγό, μεταφορά στο ξενοδοχείο και τακτοποίηση στα δωμάτια.\n\nΕλεύθερος χρόνος για ξεκούραση, πρώτη βόλτα ή δείπνο με ταϊλανδέζικες γεύσεις.\n\nΔιανυκτέρευση στο Πουκέτ.',
        day3: '3η Μέρα: Πουκέτ – Ξενάγηση Πόλης & Ζούγκλα\n\nΜετά το πρόγευμα:\n\n• Επίσκεψη στον σημαντικότερο ναό του νησιού Wat Chalong\n• Ανάβαση στους λόφους Nakkerd για τον επιβλητικό Big Buddha με μοναδική πανοραμική θέα\n• Περιήγηση στην Παλιά Πόλη Πουκέτ με σινοπορτογαλική αρχιτεκτονική και γραφικά στενά\n\nΣτη συνέχεια κατευθυνόμαστε προς την καταπράσινη περιοχή Phang Nga:\n\n• Επίσκεψη στο Monkey Cave Temple – ναός μέσα σε σπηλιά, με ελεύθερους πιθήκους\n• Bamboo rafting σε ήρεμα τροπικά ποτάμια με παραδοσιακές σχεδίες από μπαμπού\n• Σύντομη πεζοπορία μέσα στη ζούγκλα και στάση σε καταρράκτη για ξεκούραση & φωτογραφίες\n• Παραδοσιακό ταϊλανδέζικο γεύμα σε τοπικό εστιατόριο\n\nΕπιστροφή στο ξενοδοχείο.\nΔιανυκτέρευση στο Πουκέτ.',
        day4: '4η Μέρα: Κρουαζιέρα στον κόλπο Phang Nga – Νησί James Bond – Koh Panyi – Naka\n\nΠρόγευμα και αναχώρηση για την προβλήτα. Ελαφρύ ταϊλανδέζικο πρωινό και επιβίβαση στο σκάφος.\n\nΚρουαζιέρα στον εντυπωσιακό κόλπο Phang Nga μέσα στο Εθνικό Πάρκο, ανάμεσα σε:\n• τροπικά νησάκια\n• επιβλητικούς ασβεστολιθικούς βράχους που υψώνονται από τη θάλασσα\n\nΣτη διάρκεια της εκδρομής:\n\n• Κανό σε κρυφές λιμνοθάλασσες & θαλάσσιες «σπηλιές»\n• Στάση στο ειδυλλιακό νησί Hong\n• Επίσκεψη στο διάσημο James Bond Island, γνωστό από την ταινία «Ο άνθρωπος με το χρυσό πιστόλι»\n• Στάση στο πλωτό χωριό Koh Panyi, χτισμένο πάνω σε πασσάλους – παραδοσιακό γεύμα σε τοπικό εστιατόριο\n• Χρόνος για χαλάρωση, κολύμπι & θαλάσσιες δραστηριότητες στο νησί Naka\n\nΕπιστροφή στην προβλήτα και μεταφορά στο ξενοδοχείο.\nΔιανυκτέρευση στο Πουκέτ.',
        day5: '5η Μέρα: Πουκέτ – Ελεύθερη Μέρα (Προαιρετική κρουαζιέρα στα νησιά Πι Πι)\n\nΗμέρα ελεύθερη για να απολαύσετε το Πουκέτ με τον δικό σας ρυθμό:\n\n• Χαλάρωση στην παραλία ή στην πισίνα\n• Επίσκεψη σε night markets, δοκιμή street food & αγορές\n• Παραδοσιακό ταϊλανδέζικο μασάζ\n\n🔸 Προαιρετικά (έξτρα κόστος – ενδεικτικά €70/άτομο):\nΟλοήμερη κρουαζιέρα στα νησιά Πι Πι με γεύμα:\n• Επίσκεψη στη Maya Bay (The Beach – Leonardo DiCaprio)\n• Στάσεις σε Viking Caves & Bamboo Island για κολύμπι & snorkeling\n• Επίσκεψη στη Monkey Beach με τις φιλικές μαϊμούδες\n\nΔιανυκτέρευση στο Πουκέτ.',
        day6: '6η Μέρα: Πουκέτ – Ελεύθερη Μέρα / Προαιρετικές Δραστηριότητες\n\nΕλεύθερη ημέρα για:\n\n• Απόλαυση των παραλίων (Karon, Kata, Patong κ.ά.)\n• Επιπλέον θαλάσσιες εκδρομές (Coral Island, Similan για καταδύσεις)\n• Δραστηριότητες περιπέτειας (ATV στη ζούγκλα, zipline στο Hanuman World)\n• Βραδινή διασκέδαση, δείπνο & shows (π.χ. Siam Niramit, Phuket Fantasea)\n\nΔιανυκτέρευση στο Πουκέτ.',
        day7: '7η Μέρα: Πουκέτ – Μπανγκόκ\n\nΠρωινό και μεταφορά στο αεροδρόμιο Πουκέτ για την πτήση προς Μπανγκόκ.\n\nΆφιξη στην πρωτεύουσα, υποδοχή από τους αντιπροσώπους και μεταφορά στο ξενοδοχείο.\n\nΤακτοποίηση στα δωμάτια και ελεύθερος χρόνος για πρώτη γνωριμία με την «Βενετία της Ανατολής»:\n• Βόλτες σε κανάλια & παραποτάμους\n• Εμπορικά κέντρα και night markets\n• Δείπνο σε τοπικό εστιατόριο με αυθεντική ταϊλανδέζικη κουζίνα\n\nΔιανυκτέρευση στην Μπανγκόκ.',
        day8: '8η Μέρα: Μπανγκόκ – Βουδιστικοί Ναοί & Chinatown\n\nΜετά το πρόγευμα, πανοραμική και πολιτιστική ξενάγηση:\n\n• Επίσκεψη στον Wat Arun (Ναός της Αυγής) στις όχθες του Chao Phraya\n• Επίσκεψη στον Wat Pho με τον γιγάντιο Ξαπλωτό Βούδα (45μ., καλυμμένος με φύλλα χρυσού)\n• Περιήγηση στη ζωντανή και πολύχρωμη Chinatown\n• Επίσκεψη στην Αγορά Λουλουδιών, γεμάτη χρώματα & αρώματα\n\nΕπιστροφή στο ξενοδοχείο και χρόνος ελεύθερος για αγορές, βόλτες ή έξοδο.\nΔιανυκτέρευση στην Μπανγκόκ.',
        day9_10: '9η – 10η Μέρα: Μπανγκόκ – (Προαιρετική Πλωτή Αγορά & Αγορά Τρένου) – Ντουμπάι – Λάρνακα\n\nΠρωινό και ελεύθερη μέρα στην Μπανγκόκ. Check-out γύρω στις 11:00–12:00, με δυνατότητα φύλαξης αποσκευών στο ξενοδοχείο.\n\n🔸 Προαιρετικά:\nΕκδρομή στην πλωτή αγορά Damnoen Saduak & στην Αγορά του Τρένου Maeklong:\n• Παραδοσιακές μακρόστενες βάρκες ανάμεσα σε βάρκες γεμάτες φρούτα, λαχανικά & τοπικά εδέσματα\n• Αυθεντική εικόνα παραδοσιακής πλωτής αγοράς\n• Στάση στην διάσημη Railway Market, όπου το τρένο περνά κυριολεκτικά μέσα από την αγορά\n\nΕπιστροφή στην Μπανγκόκ. Το βράδυ/λίγο μετά τα μεσάνυχτα μεταφορά στο αεροδρόμιο για την πτήση Μπανγκόκ – Ντουμπάι – Λάρνακα.\n\nΆφιξη στη Λάρνακα, γεμάτοι εμπειρίες από ένα πλήρες ταξίδι σε Πουκέτ & Μπανγκόκ.'
      },
      gallery: [
        '/images/destinations/phuket-james-bond-hero.webp'
      ]
    }
  },
  {
    id: 40,
    title: 'ΜΠΑΝΓΚΟΚ / ΠΟΥΚΕΤ / ΝΗΣΙ JAMES BOND',
    destination: 'Thailand',
    category: 'Exotic Packages',
    price: 2369,
    duration: '10 days / 7 nights',
    description: 'Experience tropical beaches, jungle adventures, and exotic excursions in Phuket and Bangkok. Visit James Bond Island, explore floating markets, and discover the vibrant culture of Thailand.',
    longDescription: 'Μια ολοκληρωμένη περιήγηση στο Πουκέτ και την Μπανγκόκ: τροπικές παραλίες, ζούγκλα, κρουαζιέρα στο διάσημο νησί James Bond, βουδιστικοί ναοί, πλωτές αγορές και εξωτικές εκδρομές. Απολαύστε 5 νύχτες στο Πουκέτ και 2 νύχτες στην Μπανγκόκ.',
    image: '🇹🇭',
    featured: true,
    details: {
      departureDate: '20/07, 10/08, 17/08, 14/09, 19/10',
      departureFrom: 'Larnaca',
      destinationFull: 'Phuket, Bangkok, James Bond Island, Thailand',
      monthAvailability: 'July, August, September, October',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Emirates',
      includedLuggage: '1 checked bag 30kg + 1 hand luggage 7kg (Emirates), 1 checked bag 23kg + 1 hand luggage 7kg (domestic)',
      coverImage: '/images/destinations/phuket-james-bond-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '20/07, 10/08, 17/08, 14/09, 19/10',
          route: 'Larnaca (LCA) → Dubai (DXB)',
          flight: 'EK 110',
          time: '20:10 → 01:05 (+1)',
          luggage: '1 checked bag 30kg'
        },
        {
          direction: 'Departure',
          date: '20/07, 10/08, 17/08, 14/09, 19/10',
          route: 'Dubai (DXB) → Phuket (HKT)',
          flight: 'EK 378',
          time: '02:30 → 12:00',
          luggage: '1 checked bag 30kg'
        },
        {
          direction: 'Domestic',
          date: '20/07, 10/08, 17/08, 14/09, 19/10',
          route: 'Phuket (HKT) → Bangkok (BKK)',
          flight: 'TBA',
          time: 'TBA',
          luggage: '1 checked bag 23kg'
        },
        {
          direction: 'Return',
          date: '20/07, 10/08, 17/08, 14/09, 19/10',
          route: 'Bangkok (BKK) → Dubai (DXB)',
          flight: 'EK 371',
          time: '03:40 → 06:50',
          luggage: '1 checked bag 30kg'
        },
        {
          direction: 'Return',
          date: '20/07, 10/08, 17/08, 14/09, 19/10',
          route: 'Dubai (DXB) → Larnaca (LCA)',
          flight: 'EK 109',
          time: '08:00 → 11:10',
          luggage: '1 checked bag 30kg'
        }
      ],
      hotels: [
        // Period 1: 20/07 - €2,369 double
        {
          name: 'Phuket Beach Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/phuket-resort.webp',
          location: 'Phuket Beach Resort, Phuket, Thailand',
          prices: {
            double: 2369,
            single: 2739
          },
          departureDate: '20/07',
          packagePrice: 4738,
          boardBasis: 'Bed & Breakfast',
          nights: 5
        },
        {
          name: 'Bangkok Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/bangkok-hotel.webp',
          location: 'Bangkok Hotel, Bangkok, Thailand',
          prices: {
            double: 2369,
            single: 2739
          },
          departureDate: '20/07',
          packagePrice: 4738,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        },
        // Period 2: 10/08, 17/08 - €2,399 double
        {
          name: 'Phuket Beach Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/phuket-resort.webp',
          location: 'Phuket Beach Resort, Phuket, Thailand',
          prices: {
            double: 2399,
            single: 2789
          },
          departureDate: '10/08',
          packagePrice: 4798,
          boardBasis: 'Bed & Breakfast',
          nights: 5
        },
        {
          name: 'Bangkok Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/bangkok-hotel.webp',
          location: 'Bangkok Hotel, Bangkok, Thailand',
          prices: {
            double: 2399,
            single: 2789
          },
          departureDate: '10/08',
          packagePrice: 4798,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        },
        {
          name: 'Phuket Beach Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/phuket-resort.webp',
          location: 'Phuket Beach Resort, Phuket, Thailand',
          prices: {
            double: 2399,
            single: 2789
          },
          departureDate: '17/08',
          packagePrice: 4798,
          boardBasis: 'Bed & Breakfast',
          nights: 5
        },
        {
          name: 'Bangkok Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/bangkok-hotel.webp',
          location: 'Bangkok Hotel, Bangkok, Thailand',
          prices: {
            double: 2399,
            single: 2789
          },
          departureDate: '17/08',
          packagePrice: 4798,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        },
        // Period 3: 14/09, 19/10 - €2,279 double
        {
          name: 'Phuket Beach Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/phuket-resort.webp',
          location: 'Phuket Beach Resort, Phuket, Thailand',
          prices: {
            double: 2279,
            single: 2689
          },
          departureDate: '14/09',
          packagePrice: 4558,
          boardBasis: 'Bed & Breakfast',
          nights: 5
        },
        {
          name: 'Bangkok Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/bangkok-hotel.webp',
          location: 'Bangkok Hotel, Bangkok, Thailand',
          prices: {
            double: 2279,
            single: 2689
          },
          departureDate: '14/09',
          packagePrice: 4558,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        },
        {
          name: 'Phuket Beach Resort',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/phuket-resort.webp',
          location: 'Phuket Beach Resort, Phuket, Thailand',
          prices: {
            double: 2279,
            single: 2689
          },
          departureDate: '19/10',
          packagePrice: 4558,
          boardBasis: 'Bed & Breakfast',
          nights: 5
        },
        {
          name: 'Bangkok Hotel',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/bangkok-hotel.webp',
          location: 'Bangkok Hotel, Bangkok, Thailand',
          prices: {
            double: 2279,
            single: 2689
          },
          departureDate: '19/10',
          packagePrice: 4558,
          boardBasis: 'Bed & Breakfast',
          nights: 2
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Ντουμπάι – Πουκέτ & Μπανγκόκ – Ντουμπάι – Λάρνακα με Emirates Airlines',
        'Αεροπορικό εισιτήριο Πουκέτ – Μπανγκόκ',
        'Φόροι αεροδρομίων & επίναυλοι καυσίμων',
        'Διαμονή σε ξενοδοχεία 4★ με πρόγευμα',
        'Μεταφορές, εκδρομές & περιηγήσεις όπως στο πρόγραμμα',
        '2 γεύματα όπως αναφέρονται στο πρόγραμμα',
        'Βόλτα με παραδοσιακές σχεδίες από μπαμπού (bamboo rafting)',
        'Κρουαζιέρα στο νησί James Bond στον κόλπο Phang Nga',
        'Τοπικός αγγλόφωνος ξεναγός στις εκδρομές',
        'Ελληνόφωνος συνοδός του γραφείου από Κύπρο',
        'Εισιτήρια εισόδων όπου χρειάζεται',
        'Πτήσεις Emirates: 1 αποσκευή 30kg + 1 χειραποσκευή 7kg',
        'Εσωτερική πτήση: 1 αποσκευή 23kg + 1 χειραποσκευή 7kg',
        'Υπηρεσίες τοπικών αντιπροσώπων'
      ],
      notIncluded: [
        'Αχθοφορικά & φιλοδωρήματα',
        'Ποτά στα γεύματα',
        'Οτιδήποτε δεν αναφέρεται ρητά ως περιλαμβανόμενο ή αναφέρεται ως προαιρετικό / προτεινόμενο',
        'Προαιρετική κρουαζιέρα στα νησιά Πι Πι (περίπου €70 το άτομο)',
        'Προαιρετική εκδρομή σε πλωτή αγορά & αγορά τρένου'
      ],
      cancellationPolicy: 'Μέχρι 45 μέρες πριν την άφιξη: παρακράτηση €100 ανά άτομο για λειτουργικά έξοδα. Από 45 έως 30 μέρες πριν: παρακράτηση 30% της συνολικής τιμής. Από 30 έως 21 μέρες πριν: παρακράτηση 50% της συνολικής τιμής. Από 21 μέρες έως την ημέρα άφιξης: παρακράτηση 100% της συνολικής τιμής. Σε περίπτωση μη εμφάνισης (no-show): παρακράτηση 100% της συνολικής τιμής.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά την ώρα της κράτησης',
        'Με την κράτηση απαιτείται προκαταβολή 30% της αξίας του πακέτου',
        'Εξόφληση περίπου 21 μέρες πριν την αναχώρηση',
        'Διαμονή: Πουκέτ (5 νύχτες), Μπανγκόκ (2 νύχτες)',
        'Διατροφή: Πρόγευμα καθημερινά (Bed & Breakfast)',
        'Όλοι οι ταξιδιώτες πρέπει να συμπληρώσουν ηλεκτρονικά την Ψηφιακή Κάρτα Άφιξης Ταϊλάνδης (TDAC): https://tdac.immigration.go.th/arrival-card/#/home',
        'Μέχρι 45 μέρες πριν την άφιξη: παρακράτηση €100 ανά άτομο για λειτουργικά έξοδα',
        'Από 45 έως 30 μέρες πριν: παρακράτηση 30% της συνολικής τιμής',
        'Από 30 έως 21 μέρες πριν: παρακράτηση 50% της συνολικής τιμής',
        'Από 21 μέρες έως την ημέρα άφιξης: παρακράτηση 100% της συνολικής τιμής',
        'Σε περίπτωση μη εμφάνισης (no-show): παρακράτηση 100% της συνολικής τιμής'
      ],
      program: {
        introduction: 'ΜΠΑΝΓΚΟΚ / ΠΟΥΚΕΤ / ΝΗΣΙ JAMES BOND\n\nΜια ολοκληρωμένη περιήγηση στο Πουκέτ και την Μπανγκόκ: τροπικές παραλίες, ζούγκλα, κρουαζιέρα στο διάσημο νησί James Bond, βουδιστικοί ναοί, πλωτές αγορές και εξωτικές εκδρομές. Απολαύστε 5 νύχτες στο Πουκέτ και 2 νύχτες στην Μπανγκόκ.',
        day1_2: '1η – 2η Μέρα: Λάρνακα – Ντουμπάι – Πουκέτ\n\nΑναχώρηση από Λάρνακα με ενδιάμεση στάση στο Ντουμπάι και άφιξη την επόμενη ημέρα στο Πουκέτ, το πιο κοσμοπολίτικο νησί της Ταϊλάνδης.\n\nΥποδοχή από τον αρχηγό, μεταφορά στο ξενοδοχείο και τακτοποίηση στα δωμάτια.\n\nΕλεύθερος χρόνος για ξεκούραση, πρώτη βόλτα ή δείπνο με ταϊλανδέζικες γεύσεις.\n\nΔιανυκτέρευση στο Πουκέτ.',
        day3: '3η Μέρα: Πουκέτ – Ξενάγηση Πόλης & Ζούγκλα\n\nΜετά το πρόγευμα:\n\n• Επίσκεψη στον σημαντικότερο ναό του νησιού Wat Chalong\n• Ανάβαση στους λόφους Nakkerd για τον επιβλητικό Big Buddha με μοναδική πανοραμική θέα\n• Περιήγηση στην Παλιά Πόλη Πουκέτ με σινοπορτογαλική αρχιτεκτονική και γραφικά στενά\n\nΣτη συνέχεια κατευθυνόμαστε προς την καταπράσινη περιοχή Phang Nga:\n\n• Επίσκεψη στο Monkey Cave Temple – ναός μέσα σε σπηλιά, με ελεύθερους πιθήκους\n• Bamboo rafting σε ήρεμα τροπικά ποτάμια με παραδοσιακές σχεδίες από μπαμπού\n• Σύντομη πεζοπορία μέσα στη ζούγκλα και στάση σε καταρράκτη για ξεκούραση & φωτογραφίες\n• Παραδοσιακό ταϊλανδέζικο γεύμα σε τοπικό εστιατόριο\n\nΕπιστροφή στο ξενοδοχείο.\nΔιανυκτέρευση στο Πουκέτ.',
        day4: '4η Μέρα: Κρουαζιέρα στον κόλπο Phang Nga – Νησί James Bond – Koh Panyi – Naka\n\nΠρόγευμα και αναχώρηση για την προβλήτα. Ελαφρύ ταϊλανδέζικο πρωινό και επιβίβαση στο σκάφος.\n\nΚρουαζιέρα στον εντυπωσιακό κόλπο Phang Nga μέσα στο Εθνικό Πάρκο, ανάμεσα σε:\n• τροπικά νησάκια\n• επιβλητικούς ασβεστολιθικούς βράχους που υψώνονται από τη θάλασσα\n\nΣτη διάρκεια της εκδρομής:\n\n• Κανό σε κρυφές λιμνοθάλασσες & θαλάσσιες «σπηλιές»\n• Στάση στο ειδυλλιακό νησί Hong\n• Επίσκεψη στο διάσημο James Bond Island, γνωστό από την ταινία «Ο άνθρωπος με το χρυσό πιστόλι»\n• Στάση στο πλωτό χωριό Koh Panyi, χτισμένο πάνω σε πασσάλους – παραδοσιακό γεύμα σε τοπικό εστιατόριο\n• Χρόνος για χαλάρωση, κολύμπι & θαλάσσιες δραστηριότητες στο νησί Naka\n\nΕπιστροφή στην προβλήτα και μεταφορά στο ξενοδοχείο.\nΔιανυκτέρευση στο Πουκέτ.',
        day5: '5η Μέρα: Πουκέτ – Ελεύθερη Μέρα (Προαιρετική κρουαζιέρα στα νησιά Πι Πι)\n\nΗμέρα ελεύθερη για να απολαύσετε το Πουκέτ με τον δικό σας ρυθμό:\n\n• Χαλάρωση στην παραλία ή στην πισίνα\n• Επίσκεψη σε night markets, δοκιμή street food & αγορές\n• Παραδοσιακό ταϊλανδέζικο μασάζ\n\n🔸 Προαιρετικά (έξτρα κόστος – ενδεικτικά €70/άτομο):\nΟλοήμερη κρουαζιέρα στα νησιά Πι Πι με γεύμα:\n• Επίσκεψη στη Maya Bay (The Beach – Leonardo DiCaprio)\n• Στάσεις σε Viking Caves & Bamboo Island για κολύμπι & snorkeling\n• Επίσκεψη στη Monkey Beach με τις φιλικές μαϊμούδες\n\nΔιανυκτέρευση στο Πουκέτ.',
        day6: '6η Μέρα: Πουκέτ – Ελεύθερη Μέρα / Προαιρετικές Δραστηριότητες\n\nΕλεύθερη ημέρα για:\n\n• Απόλαυση των παραλίων (Karon, Kata, Patong κ.ά.)\n• Επιπλέον θαλάσσιες εκδρομές (Coral Island, Similan για καταδύσεις)\n• Δραστηριότητες περιπέτειας (ATV στη ζούγκλα, zipline στο Hanuman World)\n• Βραδινή διασκέδαση, δείπνο & shows (π.χ. Siam Niramit, Phuket Fantasea)\n\nΔιανυκτέρευση στο Πουκέτ.',
        day7: '7η Μέρα: Πουκέτ – Μπανγκόκ\n\nΠρωινό και μεταφορά στο αεροδρόμιο Πουκέτ για την πτήση προς Μπανγκόκ.\n\nΆφιξη στην πρωτεύουσα, υποδοχή από τους αντιπροσώπους και μεταφορά στο ξενοδοχείο.\n\nΤακτοποίηση στα δωμάτια και ελεύθερος χρόνος για πρώτη γνωριμία με την «Βενετία της Ανατολής»:\n• Βόλτες σε κανάλια & παραποτάμους\n• Εμπορικά κέντρα και night markets\n• Δείπνο σε τοπικό εστιατόριο με αυθεντική ταϊλανδέζικη κουζίνα\n\nΔιανυκτέρευση στην Μπανγκόκ.',
        day8: '8η Μέρα: Μπανγκόκ – Βουδιστικοί Ναοί & Chinatown\n\nΜετά το πρόγευμα, πανοραμική και πολιτιστική ξενάγηση:\n\n• Επίσκεψη στον Wat Arun (Ναός της Αυγής) στις όχθες του Chao Phraya\n• Επίσκεψη στον Wat Pho με τον γιγάντιο Ξαπλωτό Βούδα (45μ., καλυμμένος με φύλλα χρυσού)\n• Περιήγηση στη ζωντανή και πολύχρωμη Chinatown\n• Επίσκεψη στην Αγορά Λουλουδιών, γεμάτη χρώματα & αρώματα\n\nΕπιστροφή στο ξενοδοχείο και χρόνος ελεύθερος για αγορές, βόλτες ή έξοδο.\nΔιανυκτέρευση στην Μπανγκόκ.',
        day9_10: '9η – 10η Μέρα: Μπανγκόκ – (Προαιρετική Πλωτή Αγορά & Αγορά Τρένου) – Ντουμπάι – Λάρνακα\n\nΠρωινό και ελεύθερη μέρα στην Μπανγκόκ. Check-out γύρω στις 11:00–12:00, με δυνατότητα φύλαξης αποσκευών στο ξενοδοχείο.\n\n🔸 Προαιρετικά:\nΕκδρομή στην πλωτή αγορά Damnoen Saduak & στην Αγορά του Τρένου Maeklong:\n• Παραδοσιακές μακρόστενες βάρκες ανάμεσα σε βάρκες γεμάτες φρούτα, λαχανικά & τοπικά εδέσματα\n• Αυθεντική εικόνα παραδοσιακής πλωτής αγοράς\n• Στάση στην διάσημη Railway Market, όπου το τρένο περνά κυριολεκτικά μέσα από την αγορά\n\nΕπιστροφή στην Μπανγκόκ. Το βράδυ/λίγο μετά τα μεσάνυχτα μεταφορά στο αεροδρόμιο για την πτήση Μπανγκόκ – Ντουμπάι – Λάρνακα.\n\nΆφιξη στη Λάρνακα, γεμάτοι εμπειρίες από ένα πλήρες ταξίδι σε Πουκέτ & Μπανγκόκ.'
      },
      gallery: [
        '/images/destinations/phuket-james-bond-hero.webp'
      ]
    }
  },
  {
    id: 41,
    title: 'ΜΠΑΛΙ – 10 Μέρες',
    destination: 'Indonesia',
    category: 'Summer Packages',
    price: 2325,
    duration: '10 days / 7 nights',
    description: 'Experience the "Island of the Gods" with 5★ accommodation in Bali and Ubud. Discover ancient temples, rice terraces, traditional arts, and the spiritual heart of Indonesia.',
    longDescription: 'Μια μαγευτική περιήγηση στο Μπαλί, το «Νησί των Θεών». Απολαύστε 4 νύχτες στο Μπαλί και 3 νύχτες στο Ουμπούντ, με 5★ διαμονή. Εξερευνήστε αρχαίους ναούς, αναβαθμίδες ρυζιού, παραδοσιακές τέχνες και το πνευματικό κέντρο της Ινδονησίας.',
    image: '🇮🇩',
    featured: true,
    details: {
      departureDate: '09/06, 21/07, 18/08, 08/09',
      departureFrom: 'Larnaca',
      destinationFull: 'Bali, Ubud, Indonesia',
      monthAvailability: 'June, July, August, September',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Emirates',
      includedLuggage: '1 checked bag 30kg + 1 hand luggage 7kg',
      coverImage: '/images/destinations/bali-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '09/06, 21/07, 18/08, 08/09',
          route: 'Larnaca (LCA) → Dubai (DXB)',
          flight: 'EK 110',
          time: '20:25 → 00:50 (+1)',
          luggage: '1 checked bag 30kg'
        },
        {
          direction: 'Departure',
          date: '09/06, 21/07, 18/08, 08/09',
          route: 'Dubai (DXB) → Denpasar Bali (DPS)',
          flight: 'EK 368',
          time: '03:10 → 16:35',
          luggage: '1 checked bag 30kg'
        },
        {
          direction: 'Return',
          date: '09/06, 21/07, 18/08, 08/09',
          route: 'Denpasar Bali (DPS) → Dubai (DXB)',
          flight: 'EK 399',
          time: '00:35 → 05:35',
          luggage: '1 checked bag 30kg'
        },
        {
          direction: 'Return',
          date: '09/06, 21/07, 18/08, 08/09',
          route: 'Dubai (DXB) → Larnaca (LCA)',
          flight: 'EK 109',
          time: '07:55 → 10:40',
          luggage: '1 checked bag 30kg'
        }
      ],
      hotels: [
        // Period 1: 09/06, 08/09 - €2,325 double
        {
          name: 'Bali 5★ Resort',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/bali-resort.webp',
          location: 'Bali 5★ Resort, Bali, Indonesia',
          prices: {
            double: 2325,
            single: 2759
          },
          departureDate: '09/06',
          packagePrice: 4650,
          boardBasis: 'Bed & Breakfast',
          nights: 4
        },
        {
          name: 'Ubud 5★ Resort',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/ubud-resort.webp',
          location: 'Ubud 5★ Resort, Ubud, Indonesia',
          prices: {
            double: 2325,
            single: 2759
          },
          departureDate: '09/06',
          packagePrice: 4650,
          boardBasis: 'Bed & Breakfast',
          nights: 3
        },
        {
          name: 'Bali 5★ Resort',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/bali-resort.webp',
          location: 'Bali 5★ Resort, Bali, Indonesia',
          prices: {
            double: 2325,
            single: 2759
          },
          departureDate: '08/09',
          packagePrice: 4650,
          boardBasis: 'Bed & Breakfast',
          nights: 4
        },
        {
          name: 'Ubud 5★ Resort',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/ubud-resort.webp',
          location: 'Ubud 5★ Resort, Ubud, Indonesia',
          prices: {
            double: 2325,
            single: 2759
          },
          departureDate: '08/09',
          packagePrice: 4650,
          boardBasis: 'Bed & Breakfast',
          nights: 3
        },
        // Period 2: 21/07 - €2,695 double
        {
          name: 'Bali 5★ Resort',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/bali-resort.webp',
          location: 'Bali 5★ Resort, Bali, Indonesia',
          prices: {
            double: 2695,
            single: 3239
          },
          departureDate: '21/07',
          packagePrice: 5390,
          boardBasis: 'Bed & Breakfast',
          nights: 4
        },
        {
          name: 'Ubud 5★ Resort',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/ubud-resort.webp',
          location: 'Ubud 5★ Resort, Ubud, Indonesia',
          prices: {
            double: 2695,
            single: 3239
          },
          departureDate: '21/07',
          packagePrice: 5390,
          boardBasis: 'Bed & Breakfast',
          nights: 3
        },
        // Period 3: 18/08 - €2,855 double
        {
          name: 'Bali 5★ Resort',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/bali-resort.webp',
          location: 'Bali 5★ Resort, Bali, Indonesia',
          prices: {
            double: 2855,
            single: 3395
          },
          departureDate: '18/08',
          packagePrice: 5710,
          boardBasis: 'Bed & Breakfast',
          nights: 4
        },
        {
          name: 'Ubud 5★ Resort',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/ubud-resort.webp',
          location: 'Ubud 5★ Resort, Ubud, Indonesia',
          prices: {
            double: 2855,
            single: 3395
          },
          departureDate: '18/08',
          packagePrice: 5710,
          boardBasis: 'Bed & Breakfast',
          nights: 3
        }
      ],
      included: [
        'Αεροπορικό εισιτήριο Λάρνακα – Ντουμπάι – Denpasar – Ντουμπάι – Λάρνακα με Emirates Airlines',
        'Φόροι αεροδρομίων & επίναυλοι καυσίμων',
        '4 διανυκτερεύσεις στο Μπαλί (5⭐) με πρόγευμα',
        '3 διανυκτερεύσεις στο Ουμπούντ (5⭐) με πρόγευμα',
        '2 γεύματα όπως στο πρόγραμμα',
        'Όλες οι μεταφορές, εκδρομές & ξεναγήσεις όπως αναφέρονται',
        'Τοπικοί αγγλόφωνοι ξεναγοί',
        'Τουριστικός φόρος Μπαλί',
        'Εισιτήρια εισόδων σε χώρους επισκέψεων',
        '1 αποσκευή 30kg + 1 χειραποσκευή 7kg ανά άτομο',
        'Υπηρεσίες τοπικών αντιπροσώπων'
      ],
      notIncluded: [
        'Ποτά στα γεύματα',
        'Αχθοφορικά & φιλοδωρήματα',
        'Έκδοση βίζας κατά την άφιξη (περίπου 30 USD)',
        'Οτιδήποτε δεν αναφέρεται ρητά ως περιλαμβανόμενο ή αναφέρεται ως προαιρετικό / προτεινόμενο'
      ],
      cancellationPolicy: 'Μέχρι 45 ημέρες πριν την άφιξη: €50 ανά άτομο. 45–30 ημέρες πριν: 30% της συνολικής τιμής. 30–21 ημέρες πριν: 50% της συνολικής τιμής. 21–0 ημέρες πριν: 100% της συνολικής τιμής. Σε περίπτωση μη εμφάνισης (no-show): 100% της συνολικής τιμής.',
      termsAndConditions: [
        'Οι τιμές δεν αλλάζουν κατά την ώρα της κράτησης',
        'Προκαταβολή 30% με την κράτηση',
        'Εξόφληση περίπου 21 μέρες πριν την αναχώρηση',
        'Διαμονή: Μπαλί (4 νύχτες), Ουμπούντ (3 νύχτες)',
        'Διατροφή: Πρόγευμα καθημερινά (Bed & Breakfast)',
        'Έκδοση βίζας κατά την άφιξη (περίπου 30 USD)',
        'Μέχρι 45 ημέρες πριν την άφιξη: €50 ανά άτομο',
        '45–30 ημέρες πριν: 30% της συνολικής τιμής',
        '30–21 ημέρες πριν: 50% της συνολικής τιμής',
        '21–0 ημέρες πριν: 100% της συνολικής τιμής',
        'Σε περίπτωση μη εμφάνισης (no-show): 100% της συνολικής τιμής'
      ],
      program: {
        introduction: 'ΜΠΑΛΙ – 10 Μέρες\n\nΜια μαγευτική περιήγηση στο Μπαλί, το «Νησί των Θεών». Απολαύστε 4 νύχτες στο Μπαλί και 3 νύχτες στο Ουμπούντ, με 5★ διαμονή. Εξερευνήστε αρχαίους ναούς, αναβαθμίδες ρυζιού, παραδοσιακές τέχνες και το πνευματικό κέντρο της Ινδονησίας.',
        day1_2: '1η – 2η Μέρα: Λάρνακα – Ντουμπάι – Μπαλί\n\nΣυνάντηση στο αεροδρόμιο Λάρνακας και αναχώρηση για Μπαλί με ενδιάμεση αλλαγή αεροσκάφους στο Ντουμπάι.\n\nΆφιξη τη 2η ημέρα στο εξωτικό Μπαλί, υποδοχή από τους τοπικούς μας συνεργάτες και μεταφορά στο ξενοδοχείο.\n\nΤακτοποίηση & ελεύθερος χρόνος για ξεκούραση.\n\nΔιανυκτέρευση στο Μπαλί.',
        day3: '3η Μέρα: Μπαλί – Ελεύθερη Ημέρα\n\nΠρόγευμα & ελεύθερος χρόνος.\n\nΕνδεικτικά μπορείτε να:\n• Χαλαρώσετε σε παραλία / πισίνα\n• Επισκεφθείτε τοπικές αγορές & καταστήματα με χειροποίητα αντικείμενα\n• Απολαύσετε μασάζ & θεραπείες ευεξίας\n\nΤο βράδυ:\n• Κοκτέιλ & δείπνο σε Κούτα / παραθαλάσσια εστιατόρια με ηλιοβασίλεμα.\n\nΔιανυκτέρευση στο Μπαλί.',
        day4: '4η Μέρα: Μπαλί – Μενγκουί – Ulun Danu – Tanah Lot\n\nΜετά το πρωινό:\n\n• Επίσκεψη στο Mengwi και στον βασιλικό ναό Taman Ayun (17ος αιώνας) με τάφρους & κήπους\n• Συνέχεια στον ναό Ulun Danu στη λίμνη Beratan, μέσα σε κρατήρα παλιού ηφαιστείου\n• Γεύμα σε τοπικό εστιατόριο\n• Επίσκεψη στον διάσημο ναό Tanah Lot, χτισμένο πάνω σε βράχο μέσα στη θάλασσα – ιδανικό σημείο για ηλιοβασίλεμα\n\nΕπιστροφή στο ξενοδοχείο.\nΔιανυκτέρευση στο Μπαλί.',
        day5: '5η Μέρα: Μπαλί – Ελεύθερη Ημέρα\n\nΠρόγευμα και μέρα ελεύθερη για:\n\n• Χαλάρωση στο θέρετρο\n• Χρήση spa & εγκαταστάσεων\n• Βόλτες & αγορές\n\nΒράδυ με προτάσεις για δείπνο σε παραλιακά εστιατόρια.\n\nΔιανυκτέρευση στο Μπαλί.',
        day6: '6η Μέρα: Μπαλί – Τοχπάτι – Batuan – Mas – Ουμπούντ\n\nΠρόγευμα & αναχώρηση για Ουμπούντ.\n\nΣτη διαδρομή:\n\n• Tohpati – παραδοσιακή τέχνη batik (υφάσματα)\n• Batuan – χωριό με παραδοσιακή ζωγραφική\n• Mas – διεθνώς γνωστό για τα ξυλόγλυπτα\n\nΆφιξη στο Ουμπούντ, μεταφορά & τακτοποίηση στο ξενοδοχείο.\n\nΔιανυκτέρευση στο Ουμπούντ.',
        day7: '7η Μέρα: Ουμπούντ – Δάσος των Πιθήκων – Ubud Palace – Tegalalang – Goa Gajah\n\nΜετά το πρόγευμα:\n\n• Επίσκεψη στο Ιερό Δάσος των Πιθήκων (Monkey Forest)\n• Επίσκεψη στο Ubud Royal Palace\n• Βόλτα & αγορές στην παραδοσιακή Ubud Market\n• Στάση στις διάσημες αναβαθμίδες ρυζιού Tegalalang Rice Terraces\n• Γεύμα σε τοπικό εστιατόριο\n• Επίσκεψη στο Goa Gajah (Σπηλιά του Ελέφαντα)\n\nΕπιστροφή στο ξενοδοχείο.\nΔιανυκτέρευση στο Ουμπούντ.',
        day8: '8η Μέρα: Ουμπούντ – Ελεύθερη Ημέρα\n\nΠρόγευμα & ελεύθερη ημέρα στο πνευματικό περιβάλλον του Ουμπούντ.\n\nΠροαιρετικά:\n• Rafting στον ποταμό Ayung\n• Μαθήματα γιόγκα\n• Τελετουργίες spa\n• Ή ελεύθερος χρόνος για αγορές & χαλαρές βόλτες.\n\nΔιανυκτέρευση στο Ουμπούντ.',
        day9_10: '9η – 10η Μέρα: Ουμπούντ – Ντουμπάι – Λάρνακα\n\nΠρόγευμα & χρόνος ελεύθερος.\n\nCheck-out το μεσημέρι & φύλαξη αποσκευών στο ξενοδοχείο\n\nΠροαιρετικό μασάζ ή spa πριν την αναχώρηση\n\nΑργά το απόγευμα μεταφορά στο αεροδρόμιο για την πτήση Denpasar – Dubai – Larnaca.\n\nΆφιξη στη Λάρνακα την 10η ημέρα.'
      },
      gallery: [
        '/images/destinations/bali-hero.webp'
      ]
    }
  },
  {
    id: 42,
    title: 'ΜΠΑΛΙ – 10 Μέρες',
    destination: 'Indonesia',
    category: 'Exotic Packages',
    price: 2325,
    duration: '10 days / 7 nights',
    description: 'Experience the "Island of the Gods" with 5★ accommodation in Bali and Ubud. Discover ancient temples, rice terraces, traditional arts, and the spiritual heart of Indonesia.',
    longDescription: 'Μια μαγευτική περιήγηση στο Μπαλί, το «Νησί των Θεών». Απολαύστε 4 νύχτες στο Μπαλί και 3 νύχτες στο Ουμπούντ, με 5★ διαμονή. Εξερευνήστε αρχαίους ναούς, αναβαθμίδες ρυζιού, παραδοσιακές τέχνες και το πνευματικό κέντρο της Ινδονησίας.',
    image: '🇮🇩',
    featured: true,
    details: {
      departureDate: '09/06, 21/07, 18/08, 08/09',
      departureFrom: 'Larnaca',
      destinationFull: 'Bali, Ubud, Indonesia',
      monthAvailability: 'June, July, August, September',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Emirates',
      includedLuggage: '1 checked bag 30kg + 1 hand luggage 7kg',
      coverImage: '/images/destinations/bali-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '09/06, 21/07, 18/08, 08/09',
          route: 'Larnaca (LCA) → Dubai (DXB)',
          flight: 'EK 110',
          time: '20:25 → 00:50 (+1)',
          luggage: '1 checked bag 30kg'
        },
        {
          direction: 'Departure',
          date: '09/06, 21/07, 18/08, 08/09',
          route: 'Dubai (DXB) → Denpasar Bali (DPS)',
          flight: 'EK 368',
          time: '03:10 → 16:35',
          luggage: '1 checked bag 30kg'
        },
        {
          direction: 'Return',
          date: '09/06, 21/07, 18/08, 08/09',
          route: 'Denpasar Bali (DPS) → Dubai (DXB)',
          flight: 'EK 399',
          time: '00:35 → 05:35',
          luggage: '1 checked bag 30kg'
        },
        {
          direction: 'Return',
          date: '09/06, 21/07, 18/08, 08/09',
          route: 'Dubai (DXB) → Larnaca (LCA)',
          flight: 'EK 109',
          time: '07:55 → 10:40',
          luggage: '1 checked bag 30kg'
        }
      ],
      hotels: [
        // Period 1: 09/06, 08/09 - €2,325 double
        {
          name: 'Bali 5★ Resort',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/bali-resort.webp',
          location: 'Bali 5★ Resort, Bali, Indonesia',
          prices: {
            double: 2325,
            single: 2759
          },
          departureDate: '09/06',
          packagePrice: 4650,
          boardBasis: 'Bed & Breakfast',
          nights: 4
        },
        {
          name: 'Ubud 5★ Resort',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/ubud-resort.webp',
          location: 'Ubud 5★ Resort, Ubud, Indonesia',
          prices: {
            double: 2325,
            single: 2759
          },
          departureDate: '09/06',
          packagePrice: 4650,
          boardBasis: 'Bed & Breakfast',
          nights: 3
        },
        {
          name: 'Bali 5★ Resort',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/bali-resort.webp',
          location: 'Bali 5★ Resort, Bali, Indonesia',
          prices: {
            double: 2325,
            single: 2759
          },
          departureDate: '08/09',
          packagePrice: 4650,
          boardBasis: 'Bed & Breakfast',
          nights: 4
        },
        {
          name: 'Ubud 5★ Resort',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/ubud-resort.webp',
          location: 'Ubud 5★ Resort, Ubud, Indonesia',
          prices: {
            double: 2325,
            single: 2759
          },
          departureDate: '08/09',
          packagePrice: 4650,
          boardBasis: 'Bed & Breakfast',
          nights: 3
        },
        // Period 2: 21/07 - €2,695 double
        {
          name: 'Bali 5★ Resort',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/bali-resort.webp',
          location: 'Bali 5★ Resort, Bali, Indonesia',
          prices: {
            double: 2695,
            single: 3239
          },
          departureDate: '21/07',
          packagePrice: 5390,
          boardBasis: 'Bed & Breakfast',
          nights: 4
        },
        {
          name: 'Ubud 5★ Resort',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/ubud-resort.webp',
          location: 'Ubud 5★ Resort, Ubud, Indonesia',
          prices: {
            double: 2695,
            single: 3239
          },
          departureDate: '21/07',
          packagePrice: 5390,
          boardBasis: 'Bed & Breakfast',
          nights: 3
        },
        // Period 3: 18/08 - €2,855 double
        {
          name: 'Bali 5★ Resort',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/bali-resort.webp',
          location: 'Bali 5★ Resort, Bali, Indonesia',
          prices: {
            double: 2855,
            single: 3395
          },
          departureDate: '18/08',
          packagePrice: 5710,
          boardBasis: 'Bed & Breakfast',
          nights: 4
        },
        {
          name: 'Ubud 5★ Resort',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/ubud-resort.webp',
          location: 'Ubud 5★ Resort, Ubud, Indonesia',
          prices: {
            double: 2855,
            single: 3395
          },
          departureDate: '18/08',
          packagePrice: 5710,
          boardBasis: 'Bed & Breakfast',
          nights: 3
        }
      ],
      included: [
        'Αεροπορικό εισιτήριο Λάρνακα – Ντουμπάι – Denpasar – Ντουμπάι – Λάρνακα με Emirates Airlines',
        'Φόροι αεροδρομίων & επίναυλοι καυσίμων',
        '4 διανυκτερεύσεις στο Μπαλί (5⭐) με πρόγευμα',
        '3 διανυκτερεύσεις στο Ουμπούντ (5⭐) με πρόγευμα',
        '2 γεύματα όπως στο πρόγραμμα',
        'Όλες οι μεταφορές, εκδρομές & ξεναγήσεις όπως αναφέρονται',
        'Τοπικοί αγγλόφωνοι ξεναγοί',
        'Τουριστικός φόρος Μπαλί',
        'Εισιτήρια εισόδων σε χώρους επισκέψεων',
        '1 αποσκευή 30kg + 1 χειραποσκευή 7kg ανά άτομο',
        'Υπηρεσίες τοπικών αντιπροσώπων'
      ],
      notIncluded: [
        'Ποτά στα γεύματα',
        'Αχθοφορικά & φιλοδωρήματα',
        'Έκδοση βίζας κατά την άφιξη (περίπου 30 USD)',
        'Οτιδήποτε δεν αναφέρεται ρητά ως περιλαμβανόμενο ή αναφέρεται ως προαιρετικό / προτεινόμενο'
      ],
      cancellationPolicy: 'Μέχρι 45 ημέρες πριν την άφιξη: €50 ανά άτομο. 45–30 ημέρες πριν: 30% της συνολικής τιμής. 30–21 ημέρες πριν: 50% της συνολικής τιμής. 21–0 ημέρες πριν: 100% της συνολικής τιμής. Σε περίπτωση μη εμφάνισης (no-show): 100% της συνολικής τιμής.',
      termsAndConditions: [
        'Οι τιμές δεν αλλάζουν κατά την ώρα της κράτησης',
        'Προκαταβολή 30% με την κράτηση',
        'Εξόφληση περίπου 21 μέρες πριν την αναχώρηση',
        'Διαμονή: Μπαλί (4 νύχτες), Ουμπούντ (3 νύχτες)',
        'Διατροφή: Πρόγευμα καθημερινά (Bed & Breakfast)',
        'Έκδοση βίζας κατά την άφιξη (περίπου 30 USD)',
        'Μέχρι 45 ημέρες πριν την άφιξη: €50 ανά άτομο',
        '45–30 ημέρες πριν: 30% της συνολικής τιμής',
        '30–21 ημέρες πριν: 50% της συνολικής τιμής',
        '21–0 ημέρες πριν: 100% της συνολικής τιμής',
        'Σε περίπτωση μη εμφάνισης (no-show): 100% της συνολικής τιμής'
      ],
      program: {
        introduction: 'ΜΠΑΛΙ – 10 Μέρες\n\nΜια μαγευτική περιήγηση στο Μπαλί, το «Νησί των Θεών». Απολαύστε 4 νύχτες στο Μπαλί και 3 νύχτες στο Ουμπούντ, με 5★ διαμονή. Εξερευνήστε αρχαίους ναούς, αναβαθμίδες ρυζιού, παραδοσιακές τέχνες και το πνευματικό κέντρο της Ινδονησίας.',
        day1_2: '1η – 2η Μέρα: Λάρνακα – Ντουμπάι – Μπαλί\n\nΣυνάντηση στο αεροδρόμιο Λάρνακας και αναχώρηση για Μπαλί με ενδιάμεση αλλαγή αεροσκάφους στο Ντουμπάι.\n\nΆφιξη τη 2η ημέρα στο εξωτικό Μπαλί, υποδοχή από τους τοπικούς μας συνεργάτες και μεταφορά στο ξενοδοχείο.\n\nΤακτοποίηση & ελεύθερος χρόνος για ξεκούραση.\n\nΔιανυκτέρευση στο Μπαλί.',
        day3: '3η Μέρα: Μπαλί – Ελεύθερη Ημέρα\n\nΠρόγευμα & ελεύθερος χρόνος.\n\nΕνδεικτικά μπορείτε να:\n• Χαλαρώσετε σε παραλία / πισίνα\n• Επισκεφθείτε τοπικές αγορές & καταστήματα με χειροποίητα αντικείμενα\n• Απολαύσετε μασάζ & θεραπείες ευεξίας\n\nΤο βράδυ:\n• Κοκτέιλ & δείπνο σε Κούτα / παραθαλάσσια εστιατόρια με ηλιοβασίλεμα.\n\nΔιανυκτέρευση στο Μπαλί.',
        day4: '4η Μέρα: Μπαλί – Μενγκουί – Ulun Danu – Tanah Lot\n\nΜετά το πρωινό:\n\n• Επίσκεψη στο Mengwi και στον βασιλικό ναό Taman Ayun (17ος αιώνας) με τάφρους & κήπους\n• Συνέχεια στον ναό Ulun Danu στη λίμνη Beratan, μέσα σε κρατήρα παλιού ηφαιστείου\n• Γεύμα σε τοπικό εστιατόριο\n• Επίσκεψη στον διάσημο ναό Tanah Lot, χτισμένο πάνω σε βράχο μέσα στη θάλασσα – ιδανικό σημείο για ηλιοβασίλεμα\n\nΕπιστροφή στο ξενοδοχείο.\nΔιανυκτέρευση στο Μπαλί.',
        day5: '5η Μέρα: Μπαλί – Ελεύθερη Ημέρα\n\nΠρόγευμα και μέρα ελεύθερη για:\n\n• Χαλάρωση στο θέρετρο\n• Χρήση spa & εγκαταστάσεων\n• Βόλτες & αγορές\n\nΒράδυ με προτάσεις για δείπνο σε παραλιακά εστιατόρια.\n\nΔιανυκτέρευση στο Μπαλί.',
        day6: '6η Μέρα: Μπαλί – Τοχπάτι – Batuan – Mas – Ουμπούντ\n\nΠρόγευμα & αναχώρηση για Ουμπούντ.\n\nΣτη διαδρομή:\n\n• Tohpati – παραδοσιακή τέχνη batik (υφάσματα)\n• Batuan – χωριό με παραδοσιακή ζωγραφική\n• Mas – διεθνώς γνωστό για τα ξυλόγλυπτα\n\nΆφιξη στο Ουμπούντ, μεταφορά & τακτοποίηση στο ξενοδοχείο.\n\nΔιανυκτέρευση στο Ουμπούντ.',
        day7: '7η Μέρα: Ουμπούντ – Δάσος των Πιθήκων – Ubud Palace – Tegalalang – Goa Gajah\n\nΜετά το πρόγευμα:\n\n• Επίσκεψη στο Ιερό Δάσος των Πιθήκων (Monkey Forest)\n• Επίσκεψη στο Ubud Royal Palace\n• Βόλτα & αγορές στην παραδοσιακή Ubud Market\n• Στάση στις διάσημες αναβαθμίδες ρυζιού Tegalalang Rice Terraces\n• Γεύμα σε τοπικό εστιατόριο\n• Επίσκεψη στο Goa Gajah (Σπηλιά του Ελέφαντα)\n\nΕπιστροφή στο ξενοδοχείο.\nΔιανυκτέρευση στο Ουμπούντ.',
        day8: '8η Μέρα: Ουμπούντ – Ελεύθερη Ημέρα\n\nΠρόγευμα & ελεύθερη ημέρα στο πνευματικό περιβάλλον του Ουμπούντ.\n\nΠροαιρετικά:\n• Rafting στον ποταμό Ayung\n• Μαθήματα γιόγκα\n• Τελετουργίες spa\n• Ή ελεύθερος χρόνος για αγορές & χαλαρές βόλτες.\n\nΔιανυκτέρευση στο Ουμπούντ.',
        day9_10: '9η – 10η Μέρα: Ουμπούντ – Ντουμπάι – Λάρνακα\n\nΠρόγευμα & χρόνος ελεύθερος.\n\nCheck-out το μεσημέρι & φύλαξη αποσκευών στο ξενοδοχείο\n\nΠροαιρετικό μασάζ ή spa πριν την αναχώρηση\n\nΑργά το απόγευμα μεταφορά στο αεροδρόμιο για την πτήση Denpasar – Dubai – Larnaca.\n\nΆφιξη στη Λάρνακα την 10η ημέρα.'
      },
      gallery: [
        '/images/destinations/bali-hero.webp'
      ]
    }
  },
  {
    id: 43,
    title: 'ΝΤΟΥΜΠΑΪ – ΑΜΠΟΥ ΝΤΑΜΠΙ – ΣΑΦΑΡΙ ΣΤΗΝ ΕΡΗΜΟ',
    destination: 'UAE',
    category: 'Exotic Packages',
    price: 789,
    duration: '5 days / 4 nights',
    description: 'Συνδυασμός Ντουμπάι, Άμπου Ντάμπι και αξέχαστου σαφάρι στην έρημο με 4★ διαμονή, ξεναγήσεις και εμπειρίες που θα θυμάστε για πάντα.',
    longDescription: 'Ζήστε την απόλυτη αραβική εμπειρία σε ένα ταξίδι 5 ημερών με βάση το Ντουμπάι. Ανακαλύψτε τα σύγχρονα θαύματα της πόλης, περιηγηθείτε στην παραδοσιακή πλευρά της, απολαύστε σαφάρι στην έρημο με δείπνο σε βεδουίνικες σκηνές και επισκεφθείτε την κοσμοπολίτικη πρωτεύουσα των Η.Α.Ε., το Άμπου Ντάμπι, με το εμβληματικό Τζαμί Sheikh Zayed και το μουσείο Louvre Abu Dhabi.',
    image: '🇦🇪',
    featured: true,
    details: {
      departureDate: '09/09, 16/09, 23/09, 30/09, 07/10, 14/10, 21/10',
      departureFrom: 'Larnaca',
      destinationFull: 'Dubai & Abu Dhabi, United Arab Emirates',
      monthAvailability: 'September, October',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Cyprus Airways',
      includedLuggage: '1 αποσκευή 23kg + χειραποσκευή 10kg ανά άτομο (σύμφωνα με την πολιτική της Cyprus Airways)',
      coverImage: '/images/destinations/dubai-desert-hero.webp',
      flights: [
        {
          direction: 'Departure',
          route: 'Larnaca (LCA) → Dubai (DXB)',
          flight: 'CY 106',
          time: '07:45 → 12:35',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Return',
          route: 'Dubai (DXB) → Larnaca (LCA)',
          flight: 'CY 107',
          time: '13:40 → 17:00',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        }
      ],
      hotels: [
        // Option 1 - Departure dates: 09/09, 16/09, 23/09
        {
          name: '4★ Hotel Dubai – Option 1',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/dubai-4star-option1.webp',
          location: 'Dubai, United Arab Emirates',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 789,
            single: 985
          },
          packagePrice: 1578,
          departureDate: '09/09',
          nights: 4
        },
        {
          name: '4★ Hotel Dubai – Option 1',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/dubai-4star-option1.webp',
          location: 'Dubai, United Arab Emirates',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 789,
            single: 985
          },
          packagePrice: 1578,
          departureDate: '16/09',
          nights: 4
        },
        {
          name: '4★ Hotel Dubai – Option 1',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/dubai-4star-option1.webp',
          location: 'Dubai, United Arab Emirates',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 789,
            single: 985
          },
          packagePrice: 1578,
          departureDate: '23/09',
          nights: 4
        },
        // Option 2 - Departure dates: 30/09, 07/10, 14/10, 21/10
        {
          name: '4★ Hotel Dubai – Option 2',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/dubai-4star-option2.webp',
          location: 'Dubai, United Arab Emirates',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 919,
            single: 1225
          },
          packagePrice: 1838,
          departureDate: '30/09',
          nights: 4
        },
        {
          name: '4★ Hotel Dubai – Option 2',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/dubai-4star-option2.webp',
          location: 'Dubai, United Arab Emirates',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 919,
            single: 1225
          },
          packagePrice: 1838,
          departureDate: '07/10',
          nights: 4
        },
        {
          name: '4★ Hotel Dubai – Option 2',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/dubai-4star-option2.webp',
          location: 'Dubai, United Arab Emirates',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 919,
            single: 1225
          },
          packagePrice: 1838,
          departureDate: '14/10',
          nights: 4
        },
        {
          name: '4★ Hotel Dubai – Option 2',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/dubai-4star-option2.webp',
          location: 'Dubai, United Arab Emirates',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 919,
            single: 1225
          },
          packagePrice: 1838,
          departureDate: '21/10',
          nights: 4
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Ντουμπάι – Λάρνακα με Cyprus Airways',
        'Φόροι αεροδρομίων',
        'Διαμονή σε 4★ ξενοδοχείο στο Ντουμπάι με πρωινό',
        'Μεταφορές αεροδρόμιο ↔ ξενοδοχείο',
        'Πανοραμική ξενάγηση Ντουμπάι με αγγλόφωνο ξεναγό',
        'Ολοήμερη εκδρομή στο Άμπου Ντάμπι με επίσκεψη στο Μεγάλο Τζαμί Sheikh Zayed & στο Louvre Abu Dhabi',
        'Σαφάρι στην έρημο με 4x4, στάσεις για φωτογραφίες & παραδοσιακό δείπνο σε βεδουίνικες σκηνές',
        'Εισιτήριο εισόδου στο Louvre Abu Dhabi',
        '1 χειραποσκευή 10kg ανά άτομο',
        'Υπηρεσίες τοπικού αντιπροσώπου'
      ],
      notIncluded: [
        'Δημοτικός φόρος περίπου AED 20 ανά δωμάτιο/διανυκτέρευση (πληρωμή απευθείας στο ξενοδοχείο)',
        'Προαιρετικές δραστηριότητες & εκδρομές που δεν αναφέρονται ως περιλαμβανόμενες',
        'Γεύματα & ποτά που δεν αναφέρονται στο πρόγραμμα',
        'Ασφάλεια ταξιδιού',
        'Οτιδήποτε δεν αναφέρεται ρητά στα περιλαμβανόμενα'
      ],
      cancellationPolicy: 'Μέχρι 45 ημέρες πριν την ημερομηνία άφιξης: χρέωση €50 ανά άτομο. Από 45 έως 30 ημέρες πριν την άφιξη: χρέωση 30% της συνολικής τιμής. Από 30 έως 21 ημέρες πριν: χρέωση 50% της συνολικής τιμής. Από 21 ημέρες έως και την ημέρα άφιξης: χρέωση 100% της συνολικής τιμής. Σε περίπτωση μη εμφάνισης (no-show): χρέωση 100% της συνολικής τιμής.',
      termsAndConditions: [
        'Προκαταβολή 30% με την κράτηση',
        'Εξόφληση περίπου 21 μέρες πριν την αναχώρηση',
        'Ακυρωτικά βάσει ημερών πριν την αναχώρηση, όπως αναφέρονται στους όρους ακύρωσης',
        'Οι τιμές υπόκεινται σε διαθεσιμότητα κατά τη στιγμή της κράτησης',
        'Οι ώρες πτήσεων και οι αεροπορικές εταιρείες μπορεί να αλλάξουν από την αεροπορική εταιρεία'
      ],
      program: {
        introduction: '5ήμερο πακέτο στο Ντουμπάι με εκδρομή στο Άμπου Ντάμπι και συναρπαστικό σαφάρι στην έρημο. Ιδανικό για όσους θέλουν να συνδυάσουν κοσμοπολίτικη ατμόσφαιρα, πολιτισμό και αυθεντική αραβική εμπειρία.',
        day1: '1η Μέρα — Λάρνακα → Ντουμπάι\n\nΑναχώρηση από Λάρνακα και άφιξη στο κοσμοπολίτικο Ντουμπάι. Μεταφορά στο ξενοδοχείο και τακτοποίηση στα δωμάτια.\nΕλεύθερος χρόνος για μια πρώτη βόλτα στην πόλη ή προαιρετική επίσκεψη στο Burj Khalifa & Dubai Fountain.\nΔιανυκτέρευση στο Ντουμπάι.',
        day2: '2η Μέρα — Πανοραμική Ξενάγηση Ντουμπάι\n\nΠρωινό στο ξενοδοχείο και αναχώρηση για πανοραμική ξενάγηση στη σύγχρονη και παραδοσιακή πλευρά της πόλης:\n• Λεωφόρος Sheikh Zayed\n• Burj Khalifa (εξωτερική φωτογράφιση ή προαιρετική ανάβαση)\n• Παραδοσιακές αγορές Gold Souk & Spice Souk\n• Βόλτα με παραδοσιακό abra boat στο Dubai Creek\n• Φρούριο Al Fahidi & παλιά συνοικία\n• Στάση για φωτογραφίες στο εμβληματικό Burj Al Arab & επίσκεψη στο Madinat Jumeirah\nΕπιστροφή στο ξενοδοχείο και ελεύθερος χρόνος.\nΔιανυκτέρευση.',
        day3: '3η Μέρα — Σαφάρι στην Έρημο & Δείπνο Βεδουίνων\n\nΠρωινό και ελεύθερο πρωινό για αγορές ή προαιρετικές δραστηριότητες.\nΤο απόγευμα αναχώρηση για το εντυπωσιακό σαφάρι στην έρημο με 4x4:\n• Διαδρομή πάνω στους αμμόλοφους\n• Στάσεις για φωτογραφίες & ηλιοβασίλεμα\n• Επίσκεψη σε φάρμα με καμήλες\n• Δραστηριότητες όπως sandboard, αραβικός καφές & χουρμάδες\nΣτο τέλος της ημέρας παραδοσιακό δείπνο σε βεδουίνικες σκηνές με μουσική και ανατολίτικη ατμόσφαιρα.\nΕπιστροφή στο ξενοδοχείο.\nΔιανυκτέρευση.',
        day4: '4η Μέρα — Εκδρομή στο Άμπου Ντάμπι\n\nΠρωινό και αναχώρηση για ολοήμερη εκδρομή στην πρωτεύουσα των Η.Α.Ε., το Άμπου Ντάμπι:\n• Επίσκεψη στο εντυπωσιακό Μεγάλο Τζαμί Sheikh Zayed\n• Στάση & είσοδος στο μουσείο Louvre Abu Dhabi\n• Περιήγηση στο Heritage Village & την παραλιακή Corniche\n• Στάση φωτογραφίας στο Ferrari World – Yas Island\nΑργά το απόγευμα επιστροφή στο Ντουμπάι.\nΔιανυκτέρευση.',
        day5: '5η Μέρα — Ντουμπάι → Λάρνακα\n\nΠρωινό και ελεύθερος χρόνος για τις τελευταίες αγορές ή βόλτες.\nΣτη συνέχεια μεταφορά στο αεροδρόμιο για την πτήση επιστροφής Ντουμπάι – Λάρνακα.\nΆφιξη στη Λάρνακα γεμάτοι εικόνες από τον αραβικό κόσμο.'
      },
      gallery: [
        '/images/destinations/dubai-desert-hero.webp'
      ]
    }
  },
  {
    id: 44,
    title: 'ΑΥΤΟΚΡΑΤΟΡΙΚΟ ΜΑΡΟΚΟ ΜΕ ΤΑΓΓΕΡΗ',
    destination: 'Morocco',
    category: 'Exotic Packages',
    price: 1789,
    duration: '8 days / 7 nights',
    description: 'Ανακαλύψτε τις αυτοκρατορικές πόλεις του Μαρόκου με διαμονή σε 4★ & 5★ ξενοδοχεία, ξεναγήσεις σε Καζαμπλάνκα, Ραμπάτ, Ταγγέρη, Φεζ και Μαρακές, με έμπειρο ελληνόφωνο συνοδό.',
    longDescription: 'Ένα ολοκληρωμένο ταξίδι 8 ημερών στο αυτοκρατορικό Μαρόκο με Ταγγέρη. Από την κοσμοπολίτικη Καζαμπλάνκα και την πρωτεύουσα Ραμπάτ, στην «μπλε πόλη» Σεφσαουέν, την πνευματική Φεζ και την ατμοσφαιρική Μαρακές. Περιλαμβάνονται πτήσεις με Aegean μέσω Αθήνας, ξεναγήσεις, είσοδοι σε επιλεγμένα αξιοθέατα και διαμονή σε επιλεγμένα 4★ & 5★ ξενοδοχεία.',
    image: '🇲🇦',
    featured: true,
    details: {
      departureDate: '14/05, 15/09, 06/10, 01/10',
      departureFrom: 'Larnaca',
      destinationFull: 'Casablanca, Rabat, Tangier, Chefchaouen, Meknes, Fes, Marrakech – Morocco',
      monthAvailability: 'May, September, October',
      roomType: 'Standard Room',
      boardBasis: 'Half Board',
      airline: 'Aegean Airlines',
      includedLuggage: '1 αποσκευή 23kg + 1 χειραποσκευή 8kg ανά άτομο',
      coverImage: '/images/destinations/morocco-imperial-hero.webp',
      flights: [
        {
          direction: 'Departure',
          route: 'Larnaca (LCA) → Athens (ATH)',
          flight: 'A3 901',
          time: '05:00 → 06:45',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Departure',
          route: 'Athens (ATH) → Marrakech (RAK)',
          flight: 'A3 738',
          time: '08:55 → 11:25',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Return',
          route: 'Marrakech (RAK) → Athens (ATH)',
          flight: 'A3 739',
          time: '12:25 → 18:30',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Return',
          route: 'Athens (ATH) → Larnaca (LCA)',
          flight: 'A3 914',
          time: '21:20 → 23:00',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        }
      ],
      hotels: [
        // Option 1 – double €1,789, single €2,419 (departures: 14/05, 15/09, 06/10)
        {
          name: '4★ & 5★ Hotels – Imperial Morocco Option 1',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/morocco-imperial-option1.webp',
          location: 'Casablanca / Tangier / Fes / Marrakech, Morocco',
          boardBasis: 'Half Board',
          prices: {
            double: 1789,
            single: 2419
          },
          packagePrice: 3578,
          departureDate: '14/05',
          nights: 7
        },
        {
          name: '4★ & 5★ Hotels – Imperial Morocco Option 1',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/morocco-imperial-option1.webp',
          location: 'Casablanca / Tangier / Fes / Marrakech, Morocco',
          boardBasis: 'Half Board',
          prices: {
            double: 1789,
            single: 2419
          },
          packagePrice: 3578,
          departureDate: '15/09',
          nights: 7
        },
        {
          name: '4★ & 5★ Hotels – Imperial Morocco Option 1',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/morocco-imperial-option1.webp',
          location: 'Casablanca / Tangier / Fes / Marrakech, Morocco',
          boardBasis: 'Half Board',
          prices: {
            double: 1789,
            single: 2419
          },
          packagePrice: 3578,
          departureDate: '06/10',
          nights: 7
        },
        // Option 2 – double €1,869, single €2,495 (departure: 01/10)
        {
          name: '4★ & 5★ Hotels – Imperial Morocco Option 2',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/morocco-imperial-option2.webp',
          location: 'Casablanca / Tangier / Fes / Marrakech, Morocco',
          boardBasis: 'Half Board',
          prices: {
            double: 1869,
            single: 2495
          },
          packagePrice: 3738,
          departureDate: '01/10',
          nights: 7
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Αθήνα – Μαρακές – Αθήνα – Λάρνακα με Aegean Airlines',
        'Φόροι αεροδρομίων',
        '7 διανυκτερεύσεις σε επιλεγμένα ξενοδοχεία 4★ & 5★ σε Καζαμπλάνκα, Ταγγέρη, Φεζ και Μαρακές',
        'Ημιδιατροφή (πρωινό & δείπνο) καθημερινά',
        'Τοπικοί αγγλόφωνοι ξεναγοί',
        'Ελληνόφωνος αρχηγός / συνοδός',
        'Μεταφορές, εκδρομές & περιηγήσεις όπως στο πρόγραμμα',
        'Εισιτήρια εισόδου σε επιλεγμένα αξιοθέατα (Κορανική Σχολή Μπου Ινανία, Παλάτι Μπαχία, Κήποι Μαζορέλ)',
        '1 αποσκευή 23kg & 1 χειραποσκευή 8kg ανά άτομο',
        'Υπηρεσίες τοπικών αντιπροσώπων'
      ],
      notIncluded: [
        'Αχθοφορικά & φιλοδωρήματα',
        'Είσοδοι που δεν αναφέρονται ρητά στα περιλαμβανόμενα',
        'Ποτά κατά τα δείπνα',
        'Προαιρετικές εκδρομές & δραστηριότητες',
        'Ασφάλεια ταξιδιού',
        'Οτιδήποτε δεν αναφέρεται ή αναφέρεται ως προαιρετικό / προτεινόμενο'
      ],
      note: 'Το διαβατήριό σας πρέπει να έχει ισχύ τουλάχιστον 6 μήνες μετά την είσοδό σας στο Μαρόκο. Για Κυπριακά & Βρετανικά διαβατήρια δεν απαιτείται βίζα.',
      cancellationPolicy: 'Σε περίπτωση ακύρωσης μέχρι 45 ημέρες πριν την ημερομηνία άφιξης: 50 EUR ανά άτομο. 45–30 ημέρες πριν: 30% της συνολικής τιμής. 30–21 ημέρες πριν: 50% της συνολικής τιμής. 21–0 ημέρες πριν: 100% της συνολικής τιμής. Σε περίπτωση μη εμφάνισης (no-show): 100% της συνολικής τιμής.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων ισχύουν τη στιγμή της κράτησης',
        'Με την κράτηση καταβάλλεται προκαταβολή 30% της αξίας του πακέτου',
        'Η εξόφληση γίνεται περίπου 21 μέρες πριν την αναχώρηση',
        'Ακυρωτικά βάσει ημερών πριν την αναχώρηση, σύμφωνα με την πολιτική ακύρωσης',
        'Για μέσα ολικής ναύλωσης (charter), κρουαζιέρες, σκι, εκθέσεις, συνέδρια & παρεμφερείς διεθνείς εκδηλώσεις, τα ακυρωτικά μπορεί να φτάσουν έως 100% ανεξαρτήτως ημερομηνίας ακύρωσης'
      ],
      program: {
        introduction: 'Αυτοκρατορικό Μαρόκο με Ταγγέρη σε ένα ταξίδι 8 ημερών. Από την Καζαμπλάνκα και τη Ραμπάτ, στην «μπλε πόλη» Σεφσαουέν, την αυτοκρατορική Φεζ και την ατμοσφαιρική Μαρακές, ανακαλύπτοντας την ιστορία, την παράδοση και την ανατολίτικη μαγεία του Μαρόκου.',
        day1: '1η μέρα – Λάρνακα → Αθήνα → Μαρακές → Καζαμπλάνκα\n\nΣυγκέντρωση στο αεροδρόμιο Λάρνακας και αναχώρηση με πτήσεις της Aegean μέσω Αθήνας με τελικό προορισμό το μαγευτικό Μαρακές, την πόλη των αισθήσεων και των χρωμάτων.\nΥποδοχή από τον τοπικό μας αντιπρόσωπο και άμεση αναχώρηση οδικώς για την κοσμοπολίτικη Καζαμπλάνκα, τη μεγαλύτερη και πιο σύγχρονη πόλη του Μαρόκου, χτισμένη στις ακτές του Ατλαντικού.\nΆφιξη, μεταφορά στο ξενοδοχείο, τακτοποίηση, δείπνο και διανυκτέρευση.',
        day2: '2η μέρα – Καζαμπλάνκα → Ραμπάτ → Ταγγέρη\n\nΠρόγευμα και πανοραμική ξενάγηση στην Καζαμπλάνκα:\n• Πλατεία Μοχάμεντ Ε΄ με τα εντυπωσιακά διοικητικά κτίρια\n• Πλατεία Ηνωμένων Εθνών & κεντρική αγορά\n• Παραλιακή λεωφόρος Κορνίς με θέα στον Ατλαντικό\n• Εξωτερική επίσκεψη στο επιβλητικό Τζαμί του Χασάν Β΄\n• Συνοικία Άνφα, η πιο αριστοκρατική περιοχή της πόλης\n\nΣτη συνέχεια αναχώρηση για Ραμπάτ, πρωτεύουσα του Μαρόκου:\n• Παλάτι του βασιλιά\n• Μαυσωλείο Μοχάμεντ Ε΄\n• Πύργος του Χασάν\n• Κάσμπα Ουντάγια\n\nΑκολούθως συνεχίζουμε οδικώς για την μυστηριώδη Ταγγέρη, στρατηγικά χτισμένη στο σταυροδρόμι Αφρικής και Ευρώπης, στα δυτικά του στενού του Γιβραλτάρ.\nΆφιξη, τακτοποίηση στο ξενοδοχείο, δείπνο και διανυκτέρευση.',
        day3: '3η μέρα – Ταγγέρη → Σεφσαουέν → Μεκνές → Φεζ\n\nΠρωινή αναχώρηση προς το εσωτερικό της χώρας.\nΠρώτη στάση στην παγκοσμίως διάσημη «μπλε πόλη» Σεφσαουέν, χτισμένη στους πρόποδες των βουνών Ριφ, με τα χαρακτηριστικά μπλε σοκάκια και την αυθεντική ατμόσφαιρα – μία από τις πιο φωτογενείς πόλεις του Μαρόκου.\n\nΣυνεχίζουμε για την αυτοκρατορική πόλη Μεκνές:\n• Ερείπια από το παλάτι του Μουλάι Ισμαήλ\n• Επιβλητικά τείχη και αυλές\n• Η εντυπωσιακή πύλη Μπαμπ Ελ Μανσούρ (17ος αιώνας)\n\nΑργά το απόγευμα άφιξη στη Φεζ, την «αυτοκράτειρα» των πόλεων και πνευματική καρδιά του Μαρόκου.\nΜεταφορά στο ξενοδοχείο, τακτοποίηση, δείπνο και διανυκτέρευση.',
        day4: '4η μέρα – Φεζ (Ξενάγηση)\n\nΠρόγευμα και αναχώρηση για ξενάγηση στην ιστορική Φεζ, μια πόλη-θρύλο που διατηρεί τον μεσαιωνικό της χαρακτήρα και θεωρείται ζωντανό μουσείο:\n• Η πρώτη μουσουλμανική Μεντίνα του αραβικού κόσμου με 9.202 σοκάκια\n• Σουκς, εργαστήρια τεχνιτών και παραδοσιακά καταστήματα\n• Κορανική σχολή Μπου Ινανία\n• Εβραϊκή συνοικία Μελλάχ\n\nΘα δούμε επίσης εξωτερικά:\n• Το παλάτι των Μερενιδών\n• Το τζαμί Καραουίν, ένα από τα σημαντικότερα πνευματικά κέντρα του αραβικού κόσμου\n• Το Μαυσωλείο του Μουλάι Ιντρίς\n• Τα ερείπια της νεκρόπολης των Μερενιδών\n\nΕφόσον το επιτρέπει ο χρόνος, επίσκεψη στα φημισμένα βυρσοδεψεία της Φεζ.\nΑπόγευμα ελεύθερο για βόλτες, αγορές και προσωπική εξερεύνηση.\nΔείπνο και διανυκτέρευση.',
        day5: '5η μέρα – Φεζ → Ιφράν → Μπένι Μελλάλ → Μαρακές\n\nΠρόγευμα και αναχώρηση για το Μαρακές μέσω μιας εντυπωσιακής διαδρομής από περιοχές του Άτλαντα σε μεγάλο υψόμετρο, με καταπράσινα τοπία και ορεινά περάσματα.\nΣτάση στο Ιφράν, με τη χαρακτηριστική αρχιτεκτονική του, και συνέχιση μέσω Μπενί Μελλάλ, περιοχής γνωστής για το φυσικό της κάλλος.\nΆφιξη στο Μαρακές αργά το απόγευμα, μεταφορά στο ξενοδοχείο, τακτοποίηση, δείπνο και διανυκτέρευση.',
        day6: '6η μέρα – Μαρακές (Ξενάγηση)\n\nΠρόγευμα και έναρξη ξενάγησης στη ζωντανή καρδιά του Μαρόκου, το Μαρακές:\n• Εξωτερικά το τζαμί Κουτούμπια, σύμβολο της πόλης\n• Παλάτι Ελ Μπαχία, με περίτεχνες διακοσμήσεις και όμορφες αυλές\n• Η περίφημη πλατεία Τζεμαά Ελ Φνα, η «πλατεία των θαυμάτων», με παραμυθάδες, γητευτές φιδιών, μουσικούς και υπαίθριους πάγκους\n\nΕπιστροφή στο ξενοδοχείο, δείπνο και διανυκτέρευση.',
        day7: '7η μέρα – Μαρακές (Προαιρετική εκδρομή στην Εσσαουίρα)\n\nΗμέρα ελεύθερη στο Μαρακές ή προαιρετική ολοήμερη εκδρομή στην παραθαλάσσια Εσσαουίρα, μία από τις πιο ατμοσφαιρικές πόλεις του Μαρόκου.\n• Χαρακτηριστικά λευκά και μπλε κτίρια\n• Περιοχή γνωστή για τις αργανιές και το πολύτιμο έλαιο Argan\n• Σημαντικό κέντρο καλλιτεχνικής δημιουργίας\n• Παλιά πόλη και λιμάνι με αυθεντικές εικόνες\n• Ανάβαση στο πορτογαλικό κάστρο για πανοραμική θέα στον Ατλαντικό\n\nΕπιστροφή στο Μαρακές, δείπνο και διανυκτέρευση.',
        day8: '8η μέρα – Μαρακές → Αθήνα → Λάρνακα\n\nΜεταφορά στο αεροδρόμιο για την πτήση επιστροφής μέσω Αθήνας.\nΈνα μοναδικό ταξίδι στην καρδιά του Μαρόκου ολοκληρώνεται, γεμάτο εικόνες, αντιθέσεις, ιστορία, παράδοση και ανατολίτικη μαγεία.'
      },
      gallery: [
        '/images/destinations/morocco-imperial-hero.webp'
      ]
    }
  },
  {
    id: 45,
    title: 'ΑΥΤΟΚΡΑΤΟΡΙΚΟΣ ΓΥΡΟΣ ΜΑΡΟΚΟΥ',
    destination: 'Morocco',
    category: 'Exotic Packages',
    price: 1789,
    duration: '8 days / 7 nights',
    description: 'Ανακαλύψτε τις αυτοκρατορικές πόλεις και την έρημο του Μαρόκου με διαμονή σε 4★ & 5★ ξενοδοχεία, ξεναγήσεις σε Καζαμπλάνκα, Ραμπάτ, Μεκνές, Φεζ, Ερφούντ, Ουαρζαζάτ και Μαρακές, με έμπειρο ελληνόφωνο συνοδό.',
    longDescription: 'Ένα ολοκληρωμένο ταξίδι 8 ημερών στο αυτοκρατορικό Μαρόκο με έρημο. Από την κοσμοπολίτικη Καζαμπλάνκα και την πρωτεύουσα Ραμπάτ, στην πνευματική Φεζ, την έρημο Ερφούντ, την Ουαρζαζάτ και την ατμοσφαιρική Μαρακές. Περιλαμβάνονται πτήσεις με Aegean μέσω Αθήνας, ξεναγήσεις, είσοδοι σε επιλεγμένα αξιοθέατα και διαμονή σε επιλεγμένα 4★ & 5★ ξενοδοχεία.',
    image: '🇲🇦',
    featured: true,
    details: {
      departureDate: '14/05, 15/09, 06/10, 01/10',
      departureFrom: 'Larnaca',
      destinationFull: 'Casablanca, Rabat, Meknes, Fes, Erfoud, Ouarzazate, Marrakech – Morocco',
      monthAvailability: 'May, September, October',
      roomType: 'Standard Room',
      boardBasis: 'Half Board',
      airline: 'Aegean Airlines',
      includedLuggage: '1 αποσκευή 23kg + 1 χειραποσκευή 8kg ανά άτομο',
      coverImage: '/images/destinations/morocco-imperial-tour-hero.webp',
      flights: [
        {
          direction: 'Departure',
          route: 'Larnaca (LCA) → Athens (ATH)',
          flight: 'A3 901',
          time: '05:00 → 06:45',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Departure',
          route: 'Athens (ATH) → Marrakech (RAK)',
          flight: 'A3 738',
          time: '08:55 → 11:25',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Return',
          route: 'Marrakech (RAK) → Athens (ATH)',
          flight: 'A3 739',
          time: '12:25 → 18:30',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Return',
          route: 'Athens (ATH) → Larnaca (LCA)',
          flight: 'A3 914',
          time: '21:20 → 23:00',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        }
      ],
      hotels: [
        // Option 1 – double €1,789, single €2,419 (departures: 14/05, 15/09, 06/10)
        {
          name: '4★ & 5★ Hotels - Marrakesh / Erfoud / Ouarzazate / Casablanca / Fes (Option 1)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/morocco-imperial-tour-option1.webp',
          location: 'Casablanca / Fes / Erfoud / Ouarzazate / Marrakech, Morocco',
          boardBasis: 'Half Board',
          prices: {
            double: 1789,
            single: 2419
          },
          packagePrice: 3578,
          departureDate: '14/05',
          nights: 7
        },
        {
          name: '4★ & 5★ Hotels - Marrakesh / Erfoud / Ouarzazate / Casablanca / Fes (Option 1)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/morocco-imperial-tour-option1.webp',
          location: 'Casablanca / Fes / Erfoud / Ouarzazate / Marrakech, Morocco',
          boardBasis: 'Half Board',
          prices: {
            double: 1789,
            single: 2419
          },
          packagePrice: 3578,
          departureDate: '15/09',
          nights: 7
        },
        {
          name: '4★ & 5★ Hotels - Marrakesh / Erfoud / Ouarzazate / Casablanca / Fes (Option 1)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/morocco-imperial-tour-option1.webp',
          location: 'Casablanca / Fes / Erfoud / Ouarzazate / Marrakech, Morocco',
          boardBasis: 'Half Board',
          prices: {
            double: 1789,
            single: 2419
          },
          packagePrice: 3578,
          departureDate: '06/10',
          nights: 7
        },
        // Option 2 – double €1,869, single €2,495 (departure: 01/10)
        {
          name: '4★ & 5★ Hotels - Marrakesh / Erfoud / Ouarzazate / Casablanca / Fes (Option 2)',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/morocco-imperial-tour-option2.webp',
          location: 'Casablanca / Fes / Erfoud / Ouarzazate / Marrakech, Morocco',
          boardBasis: 'Half Board',
          prices: {
            double: 1869,
            single: 2495
          },
          packagePrice: 3738,
          departureDate: '01/10',
          nights: 7
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Αθήνα – Μαρακές – Αθήνα – Λάρνακα με πτήσεις Aegean',
        'Φόροι αεροδρομίων',
        '7 διανυκτερεύσεις σε ξενοδοχεία 4★ & 5★ με ημιδιατροφή',
        'Τοπικοί αγγλόφωνοι ξεναγοί',
        'Ελληνόφωνος αρχηγός / συνοδός',
        'Μεταφορές, εκδρομές & περιηγήσεις όπως αναφέρονται στο πρόγραμμα',
        'Εισιτήρια εισόδου: Σχολή Μπου Ανάνια, Κήποι Μαζορέλ, Παλάτι Μπαχία, Στούντιο Atlas',
        '1 αποσκευή 23kg + 1 χειραποσκευή 8kg ανά άτομο',
        'Υπηρεσίες των τοπικών αντιπροσώπων μας'
      ],
      notIncluded: [
        'Αχθοφορικά & φιλοδωρήματα',
        'Είσοδοι που δεν αναφέρονται στα περιλαμβανόμενα',
        'Ποτά κατά τα δείπνα',
        'Οτιδήποτε δεν αναφέρεται ρητά ή καταγράφεται ως προαιρετικό / προτεινόμενο'
      ],
      note: 'Το διαβατήριο πρέπει να έχει ισχύ τουλάχιστον 6 μήνες μετά την είσοδο στη χώρα. Κυπριακά & Βρετανικά διαβατήρια: δεν απαιτείται βίζα.',
      cancellationPolicy: 'Σε περίπτωση ακύρωσης μέχρι 45 ημέρες πριν την ημερομηνία άφιξης: 50 EUR ανά άτομο. 45–30 ημέρες πριν: 30% της συνολικής τιμής. 30–21 ημέρες πριν: 50% της συνολικής τιμής. 21–0 ημέρες πριν: 100% της συνολικής τιμής. Σε περίπτωση μη εμφάνισης (no-show): 100% της συνολικής τιμής.',
      termsAndConditions: [
        'Οι τιμές των πακέτων ισχύουν τη στιγμή της κράτησης',
        'Προκαταβολή 30% με την κράτηση',
        'Εξόφληση περίπου 21 μέρες πριν την αναχώρηση',
        'Ακυρωτικά βάσει ημερών πριν την αναχώρηση, σύμφωνα με την πολιτική ακύρωσης',
        'Για charter, κρουαζιέρες, ski, εκθέσεις, συνέδρια κ.ά.: ακυρωτικά έως 100% ανεξάρτητα από την ημερομηνία'
      ],
      program: {
        introduction: 'Αυτοκρατορικός γύρος του Μαρόκου σε ένα ταξίδι 8 ημερών. Από την Καζαμπλάνκα και τη Ραμπάτ, στην πνευματική Φεζ, την έρημο Ερφούντ, την Ουαρζαζάτ και την ατμοσφαιρική Μαρακές, ανακαλύπτοντας την ιστορία, την παράδοση, την έρημο και την ανατολίτικη μαγεία του Μαρόκου.',
        day1: '1η Μέρα – Λάρνακα → Αθήνα → Μαρακές → Καζαμπλάνκα\n\nΣυγκέντρωση στο αεροδρόμιο Λάρνακας και αναχώρηση με πτήσεις της Aegean μέσω Αθήνας, με τελικό προορισμό το μαγευτικό Μαρακές, την πόλη των αισθήσεων και των χρωμάτων.\nΜε την άφιξη στο Μαρακές, υποδοχή από τους τοπικούς αντιπροσώπους και άμεση αναχώρηση οδικώς για την κοσμοπολίτικη Καζαμπλάνκα, τη μεγαλύτερη και πιο σύγχρονη πόλη του Μαρόκου, χτισμένη στις ακτές του Ατλαντικού.\n\nΞεκινάμε αμέσως την πρώτη μας γνωριμία με την πόλη με πανοραμική ξενάγηση, κατά την οποία θα δούμε:\n• Την Κεντρική Αγορά, γεμάτη αρώματα, μπαχαρικά και χρώματα\n• Την επιβλητική Πλατεία Μοχάμεντ Ε΄ με τη χαρακτηριστική αρχιτεκτονική\n• Την Πλατεία των Ηνωμένων Εθνών\n• Την παραλιακή λεωφόρο Corniche, με χρόνο για καφέ ή περίπατο δίπλα στη θάλασσα\n• Εξωτερική επίσκεψη στο εντυπωσιακό Τζαμί του Χασάν Β΄, ένα από τα μεγαλύτερα τζαμιά του κόσμου\n• Την αριστοκρατική συνοικία Άνφα, με πολυτελείς βίλες, ιππόδρομο και γήπεδα γκολφ\n\nΜεταφορά στο ξενοδοχείο, τακτοποίηση, δείπνο και διανυκτέρευση.',
        day2: '2η Μέρα – Καζαμπλάνκα → Ραμπάτ → Μεκνές → Φες\n\nΠρόγευμα και αναχώρηση για το Ραμπάτ, την πρωτεύουσα του Μαρόκου, με έντονο βασιλικό χαρακτήρα. Εκεί θα δούμε εξωτερικά:\n• Το Παλάτι του Βασιλιά\n• Το Μαυσωλείο του Μωχάμεντ Ε΄\n• Τον Πύργο του Χασάν\n• Την πανέμορφη κάσμπα Ουντάγια, με γραφικά στενά και πανοραμική θέα στον Ατλαντικό\n\nΣτη συνέχεια κατευθυνόμαστε προς την αυτοκρατορική πόλη Μεκνές, γνωστή και ως «Βερσαλλίες του Μαρόκου»:\n• Ερείπια από το παλάτι του Μουλάι Ισμαήλ\n• Μεγαλοπρεπή τείχη και αυλές με σιντριβάνια\n• Η περίφημη πύλη Μπαμπ Ελ Μανσούρ (17ος αιώνας)\n\nΑργά το απόγευμα άφιξη στη Φεζ, μία από τις πιο ιστορικές και σημαντικές πόλεις του Μαρόκου.\nΜεταφορά στο ξενοδοχείο, τακτοποίηση, δείπνο και διανυκτέρευση.',
        day3: '3η Μέρα – Φες (Ξενάγηση)\n\nΠρόγευμα και ολοήμερη ξενάγηση στη Φεζ, την ιερή και πνευματική καρδιά του Μαρόκου, που θεωρείται ζωντανό μουσείο αραβικής παράδοσης.\n\nΚατά τη διάρκεια της περιήγησης θα γνωρίσουμε:\n• Τη φημισμένη Μεντίνα, την πρώτη μουσουλμανική Μεντίνα του αραβικού κόσμου, με πάνω από 9.000 σοκάκια, εργαστήρια τεχνιτών και πολύχρωμα σουκς\n• Την κορανική σχολή Μπου Ινανία\n• Την ιστορική εβραϊκή συνοικία Μελλάχ\n\nΘα δούμε επίσης εξωτερικά:\n• Το παλάτι των Μερινιδών\n• Το τζαμί Καραουίν, που υπήρξε ένα από τα σημαντικότερα πανεπιστημιακά κέντρα του αραβικού κόσμου\n• Το Μαυσωλείο του Μουλάι Ιντρίς\n• Θα έχουμε πανοραμική θέα προς τα ερείπια της νεκρόπολης των Μερινιδών και, εφόσον το επιτρέψει ο χρόνος, θα επισκεφθούμε τα παραδοσιακά βυρσοδεψία – μία από τις πιο χαρακτηριστικές εικόνες της πόλης.\n\nΑπόγευμα ελεύθερο για προσωπικές βόλτες και αγορές.\nΕπιστροφή στο ξενοδοχείο, δείπνο και διανυκτέρευση.',
        day4: '4η Μέρα – Φες → Ιφρεν → Μιντελτ → Ερασιντία → Ερφούντ\n\nΜετά το πρωινό αναχωρούμε από τη Φεζ και διασχίζουμε την εντυπωσιακή περιοχή του Μέσου Άτλαντα, ακολουθώντας μια όμορφη διαδρομή ανάμεσα σε βουνά, δάση και παραδοσιακούς οικισμούς.\n\nΠρώτη στάση στο Ιφρεν, γνωστό και ως «Ελβετία του Μαρόκου» λόγω της ιδιαίτερης αρχιτεκτονικής και της καθαρής ατμόσφαιρας. Συνεχίζουμε μέσω Μιντελτ και Ερασιντία, περιοχών που μας οδηγούν σταδιακά στην περιοχή της Σαχάρας.\n\nΤο απόγευμα άφιξη στην Ερφούντ, πόλη διάσημη για τις οάσεις και την έντονη «αύρα ερήμου».\nΤακτοποίηση στο ξενοδοχείο, δείπνο και διανυκτέρευση.',
        day5: '5η Μέρα – Ερφούντ → Μερζούγκα (προαιρετικά) → Φαράγγια Τόντρα → Ουαρζαζάτ\n\nΝωρίς το πρωί υπάρχει προαιρετική εκδρομή στους αμμόλοφους της Μερζούγκα με jeep 4x4 για να απολαύσουμε την ανατολή του ήλιου μέσα στην έρημο – μια μαγική εμπειρία με απόλυτη ηρεμία και απέραντους αμμόλοφους.\n\nΕπιστροφή, πρωινό στο ξενοδοχείο και αναχώρηση για τα εντυπωσιακά Φαράγγια Τόντρα, ένα από τα πιο επιβλητικά φυσικά τοπία του Μαρόκου, με κάθετους βράχους που κόβουν την ανάσα.\n\nΣυνεχίζουμε περνώντας από:\n• Την περιοχή M\'Gouna, γνωστή ως «Πόλη των Ρόδων»\n• Τη Σκούρα και τις οάσεις της κοιλάδας\n• Τον διάσημο «δρόμο με τις χίλιες κάσμπες», με συνεχείς εικόνες παραδοσιακών οχυρωμένων οικισμών\n\nΆφιξη στην Ουαρζαζάτ, γνωστή ως «Πύλη της Ερήμου» και διάσημη για τα κινηματογραφικά στούντιο και τα γυρίσματα ταινιών.\nΤακτοποίηση στο ξενοδοχείο, δείπνο και διανυκτέρευση.',
        day6: '6η Μέρα – Ουαρζαζάτ → Κάσμπα Ταουρίρτ → Κάσμπα Αϊτ Μπενχαντού → Μαρακές\n\nΠρόγευμα και γνωριμία με την Ουαρζαζάτ, πόλη με έντονο παραδοσιακό χαρακτήρα.\nΘα πραγματοποιήσουμε εξωτερική επίσκεψη στην κάσμπα Ταουρίρτ, πρώην κατοικία του Πασά Γκλάουι, με τους ψηλούς πύργους της να δεσπόζουν πάνω από τα παραδοσιακά σπίτια.\n\nΣτη συνέχεια αναχωρούμε για την εντυπωσιακή κάσμπα Αϊτ Μπενχαντού, έναν μοναδικό οχυρωμένο οικισμό από πηλό, ανακηρυγμένο μνημείο παγκόσμιας πολιτιστικής κληρονομιάς της UNESCO – σκηνικό για πολλές γνωστές ταινίες.\n\nΑκολουθεί αναχώρηση για το Μαρακές μέσω του περάσματος Τίσκα σε υψόμετρο 2.260 μέτρων, απολαμβάνοντας μοναδικές εναλλαγές τοπίων καθώς διασχίζουμε τον Άτλαντα.\nΆφιξη στο Μαρακές, μεταφορά στο ξενοδοχείο, τακτοποίηση, δείπνο και διανυκτέρευση.',
        day7: '7η Μέρα – Μαρακές (Ξενάγηση)\n\nΠρόγευμα και αναχώρηση για ξενάγηση στην περίφημη «Κόκκινη Πόλη», το Μαρακές, που μαγεύει με την ανατολίτικη ατμόσφαιρα, τις μυρωδιές των μπαχαρικών και τους ζωντανούς ρυθμούς της.\n\nΚατά τη διάρκεια της ξενάγησης θα δούμε:\n• Εξωτερικά το τζαμί Κουτούμπια, το σημαντικότερο σύμβολο της πόλης\n• Το παλάτι Ελ Μπαχία, με τις εντυπωσιακές αυλές και τα περίτεχνα δωμάτια\n• Την πασίγνωστη πλατεία Τζεμαά Ελ Φνα, την «Πλατεία των Θαυμάτων», με μουσικούς, γητευτές φιδιών, παραμυθάδες και υπαίθριους πάγκους\n\nΠροαιρετικά, μπορεί να γίνει επίσκεψη στους πανέμορφους κήπους Μαζορέλ, που συνδέονται με τον Yves Saint Laurent.\nΕπιστροφή στο ξενοδοχείο, δείπνο και διανυκτέρευση.\nΓια το βράδυ προτείνεται προαιρετικό φολκλορικό show με ποτό στο Chez Ali.',
        day8: '8η Μέρα – Μαρακές → Αθήνα → Λάρνακα\n\nΠρωινό στο ξενοδοχείο και μεταφορά στο αεροδρόμιο του Μαρακές για την πτήση επιστροφής προς Λάρνακα, με ενδιάμεση στάση στην Αθήνα.\nΤο ταξίδι μας στο Μαρόκο ολοκληρώνεται γεμάτο εικόνες, αρώματα, χρώματα και εμπειρίες – ένα σκηνικό βγαλμένο από τις «Χίλιες και Μία Νύχτες», που μένει αξέχαστο σε κάθε ταξιδιώτη.'
      },
      gallery: [
        '/images/destinations/morocco-imperial-tour-hero.webp'
      ]
    }
  },
  {
    id: 46,
    title: 'ΧΡΥΣΟ ΤΡΙΓΩΝΟ ΙΝΔΙΑΣ',
    destination: 'India',
    category: 'Exotic Packages',
    price: 1869,
    duration: '9 days / 6 nights',
    description: 'Ανακαλύψτε το Χρυσό Τρίγωνο της Ινδίας: Δελχί, Άγκρα και Τζαϊπούρ. Επισκεφτείτε το Ταζ Μαχάλ, τα παλάτια των Μαχαραγιάδων και τα ιστορικά μνημεία με διαμονή σε 5★ ξενοδοχεία.',
    longDescription: 'Ένα μοναδικό ταξίδι 9 ημερών στο Χρυσό Τρίγωνο της Ινδίας. Από το Δελχί στην Άγκρα για το θρυλικό Ταζ Μαχάλ, και στη «Ροζ Πόλη» Τζαϊπούρ με τα παλάτια των Μαχαραγιάδων. Περιλαμβάνονται πτήσεις με Emirates μέσω Ντουμπάι, ξεναγήσεις, είσοδοι σε επιλεγμένα αξιοθέατα και διαμονή σε επιλεγμένα 5★ ξενοδοχεία.',
    image: '🇮🇳',
    featured: true,
    details: {
      departureDate: '17/09, 18/10',
      departureFrom: 'Larnaca',
      destinationFull: 'Delhi, Agra, Jaipur – India',
      monthAvailability: 'September, October',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Emirates Airlines',
      includedLuggage: '1 αποσκευή 30kg + 1 χειραποσκευή 7kg ανά άτομο',
      coverImage: '/images/destinations/india-golden-triangle-hero.webp',
      flights: [
        {
          direction: 'Departure',
          route: 'Larnaca (LCA) → Dubai (DXB)',
          flight: 'EK 110',
          time: '20:10 → 01:05 (επόμενη μέρα)',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Departure',
          route: 'Dubai (DXB) → Delhi (DEL)',
          flight: 'EK 510',
          time: '03:55 → 09:05',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Return',
          route: 'Delhi (DEL) → Dubai (DXB)',
          flight: 'EK 513',
          time: '04:15 → 06:20',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Return',
          route: 'Dubai (DXB) → Larnaca (LCA)',
          flight: 'EK 109',
          time: '08:00 → 11:10',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        }
      ],
      hotels: [
        // Departure 17/09 – double €1,869, single €2,179
        {
          name: '5★ Hotels - Delhi / Agra / Jaipur (17/09)',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/india-golden-triangle-option1.webp',
          location: 'Delhi / Agra / Jaipur, India',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 1869,
            single: 2179
          },
          packagePrice: 3738,
          departureDate: '17/09',
          nights: 6
        },
        // Departure 18/10 – double €2,109, single €2,445
        {
          name: '5★ Hotels - Delhi / Agra / Jaipur (18/10)',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/india-golden-triangle-option2.webp',
          location: 'Delhi / Agra / Jaipur, India',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 2109,
            single: 2445
          },
          packagePrice: 4218,
          departureDate: '18/10',
          nights: 6
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Νέο Δελχί – Λάρνακα μέσω Ντουμπάι με Emirates Airlines',
        'Φόροι αεροδρομίων & επίναυλος καυσίμων',
        '6 διανυκτερεύσεις σε ξενοδοχεία 5★ με πρόγευμα',
        '7 δείπνα όπως στο πρόγραμμα',
        'Μεταφορές, εκδρομές & ξεναγήσεις όπως αναφέρονται',
        'Είσοδοι στα αξιοθέατα όπως στο πρόγραμμα',
        'Βόλτα με παραδοσιακά τρίκυκλα (ρίκσο)',
        'Ανάβαση με ελέφαντες στο φρούριο Άμερ στην Τζαϊπούρ (ανάλογα με διαθεσιμότητα)',
        'Έμπειρος τοπικός αγγλόφωνος ξεναγός',
        'Έμπειρος ελληνόφωνος αρχηγός / συνοδός',
        '1 αποσκευή 30kg + 1 χειραποσκευή 7kg ανά άτομο',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Αχθοφορικά & φιλοδωρήματα',
        'Ποτά στα φαγητά',
        'Έξοδα για έκδοση Βίζας Ινδίας',
        'Οτιδήποτε δεν αναφέρεται ή αναφέρεται ως προαιρετικό / προτεινόμενο'
      ],
      note: 'Το διαβατήριο πρέπει να έχει ισχύ τουλάχιστον 6 μήνες μετά το ταξίδι. Η διαδικασία βίζας γίνεται online από τον ταξιδιώτη (ή από το γραφείο μας, κατόπιν συνεννόησης). Επίσημη ιστοσελίδα: www.indianvisaonline.gov.in',
      cancellationPolicy: 'Σε περίπτωση ακύρωσης έως 45 ημέρες πριν: €50 για λειτουργικά έξοδα. 44–31 ημέρες: παρακράτηση 30% της αξίας. 30–21 ημέρες: παρακράτηση 50% της αξίας. Από 20 μέρες έως την αναχώρηση: παρακράτηση 100% της αξίας. Για charter, κρουαζιέρες, ski, εκθέσεις, συνέδρια κ.λπ.: ακυρωτικά έως 100%, ανεξαρτήτως ημερομηνίας ακύρωσης.',
      termsAndConditions: [
        'Οι τιμές των πακέτων ισχύουν τη στιγμή της κράτησης',
        'Προκαταβολή 30% με την κράτηση',
        'Εξόφληση περίπου 21 μέρες πριν την αναχώρηση',
        'Ακυρωτικά βάσει ημερών πριν την αναχώρηση, σύμφωνα με την πολιτική ακύρωσης',
        'Για charter, κρουαζιέρες, ski, εκθέσεις, συνέδρια κ.λπ.: ακυρωτικά έως 100%, ανεξαρτήτως ημερομηνίας ακύρωσης'
      ],
      program: {
        introduction: 'Το Χρυσό Τρίγωνο της Ινδίας – Δελχί, Άγκρα, Τζαϊπούρ – είναι η ιδανική πρώτη γνωριμία με τη μαγεία, τη μυσταγωγία και την ποικιλομorphία της χώρας. Ένα έθνος, αμέτρητοι προορισμοί. Η Ινδία, με ιστορία 5.000 ετών, φιλοσοφία, θρησκείες και μνημεία παγκόσμιας κληρονομιάς, προσφέρει ένα μοναδικό, πολύχρωμο μωσαϊκό εμπειριών.',
        day1: '1η – 2η Μέρα: Λάρνακα – Ντουμπάι – Δελχί – Άγκρα\n\nΣυγκέντρωση στο αεροδρόμιο Λάρνακας και αναχώρηση για Δελχί με ενδιάμεση στάση στο Ντουμπάι.\nΆφιξη την επόμενη ημέρα, υποδοχή από τον αρχηγό και άμεση μεταφορά στην Άγκρα.\nΤακτοποίηση στο ξενοδοχείο και χρόνος για ξεκούραση.\n\nΤο απόγευμα:\n• Επίσκεψη στο θρυλικό Ταζ Μαχάλ, μαυσωλείο από λευκό μάρμαρο, σύμβολο αιώνιας αγάπης, που έκτισε ο Σάχ Τζαχάν για τη σύζυγό του.\n• Χρόνος για να θαυμάσετε τη λεπτομέρεια της αρχιτεκτονικής και να βγάλετε μοναδικές φωτογραφίες στους κήπους, ειδικά στο φως του απογεύματος.\n\nΔείπνο και διανυκτέρευση στην Άγκρα.',
        day2: '3η Μέρα: Άγκρα – Φατεχπούρ Σίκρι – Αμπχανέρι – Τζαϊπούρ\n\nΠρόγευμα και επίσκεψη στο εντυπωσιακό Κόκκινο Φρούριο, μια καστροπολιτεία με τείχη, παλάτια και αυλές της εποχής των Μουγκάλ.\n\nΣυνεχίζουμε προς:\n• Φατεχπούρ Σίκρι, την «πόλη-φάντασμα» του αυτοκράτορα Ακμπάρ, με παλάτια, αίθουσες ακροάσεων και αυλές που συνδυάζουν ισλαμικά και ινδουιστικά στοιχεία.\n• Αμπχανέρι, γνωστό για τα διάσημα σκαλιστά πηγάδια, πραγματικά αρχιτεκτονικά θαύματα με χιλιάδες πέτρινα σκαλοπάτια, ιδανικά για φωτογραφίες.\n\nΆφιξη στην Τζαϊπούρ, τη «Ροζ Πόλη».\nΜεταφορά στο ξενοδοχείο, τακτοποίηση, δείπνο και διανυκτέρευση.',
        day3: '4η Μέρα: Τζαϊπούρ – Κάστρο Άμερ & ρίκσο tour\n\nΠρόγευμα και αναχώρηση για το επιβλητικό Κάστρο Άμερ, χτισμένο αμφιθεατρικά με θέα στη λίμνη Μαότα:\n• Ανάβαση στο κάστρο με ελέφαντες (ανάλογα με διαθεσιμότητα)\n• Κατάβαση με οχήματα τύπου Jeep\n• Ξενάγηση στις αυλές, τις αίθουσες και τα διακοσμημένα δωμάτια που αποτυπώνουν τη μεγαλοπρέπεια των Μαχαραγιάδων\n\nΤο απόγευμα:\n• Βόλτα με παραδοσιακά τρίκυκλα ρίκσο στους πολύχρωμους δρόμους της Τζαϊπούρ\n• Ελεύθερος χρόνος στην αγορά Μπαμπού, γνωστή για: Παραδοσιακά υποδήματα Μότζρι, Μεταξωτά υφάσματα, Ξυλόγλυπτα και χειροτεχνίες\n\nΕπιστροφή στο ξενοδοχείο, δείπνο και διανυκτέρευση.',
        day4: '5η Μέρα: Τζαϊπούρ – Σίτι Πάλας, Χάουα Μαχάλ, Ναός Μπίρλα\n\nΠρόγευμα και επίσκεψη στο εντυπωσιακό Σίτι Πάλας, το ιστορικό παλάτι των Μαχαραγιάδων, όπου συνδυάζονται αρμονικά ρατζασθανική και μουγκάλ αρχιτεκτονική.\nΘα δούμε εσωτερικά αυλές, παλάτια και μουσεία με συλλογές βασιλικών ενδυμάτων και αντικειμένων.\n\nΑκολουθεί στάση για φωτογραφίες στο εμβληματικό Χάουα Μαχάλ (Παλάτι των Ανέμων) με την ροζ πρόσοψη και τα εκατοντάδες μικρά παράθυρα.\n\nΑπόγευμα ελεύθερο για βόλτες, αγορές ή χαλάρωση.\n\nΤο βράδυ:\n• Επίσκεψη στον Ναό Μπίρλα και συμμετοχή στην τελετή Άαρτι, με ψαλμωδίες και φως.\n• Προαιρετική συνάντηση με Ινδό αστρολόγο στο ξενοδοχείο (με απευθείας πληρωμή).\n\nΔείπνο και διανυκτέρευση.',
        day5: '6η Μέρα: Τζαϊπούρ – Νέο Δελχί\n\nΠρόγευμα και αναχώρηση οδικώς για Νέο Δελχί, διασχίζοντας την ενδοχώρα του Ρατζαστάν με τα χαρακτηριστικά τοπία, χωριά και εικόνες της καθημερινής ζωής.\nΕνδιάμεση στάση για ξεκούραση.\n\nΆφιξη στο Δελχί, μεταφορά στο ξενοδοχείο, τακτοποίηση.\nΕλεύθερος χρόνος για αγορές στα πολύχρωμα παζάρια (υφάσματα, μπαχαρικά, κοσμήματα, χειροτεχνίες).\nΔείπνο και διανυκτέρευση.',
        day6: '7η Μέρα: Παλιό Δελχί\n\nΠρόγευμα και ξενάγηση στο Παλιό Δελχί, την αυθεντική ιστορική καρδιά της πόλης, που χτίστηκε από τον Σαχ Τζαχάν.\n\n• Πανοραμική θέα στο Κόκκινο Φρούριο\n• Θέα στο μεγαλοπρεπές Τζαμά Μαστζίντ, το μεγαλύτερο τζαμί της Ινδίας\n• Επίσκεψη στο Σιςγκούντζ Γκουρντουάρα, σημαντικό ιερό των Σιχ\n• Βόλτα με ρίκσο στην πολύχρωμη περιοχή Τσαντνί Τσόουκ, γεμάτη παζάρια και μπαχαρικά\n• Επίσκεψη στο Ρατζ Γκατ, μνημείο αφιερωμένο στον Μαχάτμα Γκάντι, στο σημείο της αποτέφρωσής του\n\nΕπιστροφή στο ξενοδοχείο, δείπνο και διανυκτέρευση.',
        day7: '8η – 9η Μέρα: Νέο Δελχί – Ντουμπάι – Λάρνακα\n\nΠρόγευμα και πρωινό ελεύθερο.\nΜεσημεριανό check-out και ξενάγηση στο Νέο Δελχί:\n\n• Ίντια Γκέιτ, μνημείο για τους Ινδούς στρατιώτες\n• Πανοραμική θέα στο Προεδρικό Μέγαρο και τα κυβερνητικά κτίρια\n• Εθνικό Μουσείο & Μουσείο Ίντιρα Γκάντι\n• Μαυσωλείο Χουμαγιούν (UNESCO), πρόδρομος του Ταζ Μαχάλ\n• Ναός του Λωτού, σύμβολο ειρήνης και αρμονίας\n• Κουτάμπ Μινάρ, ο ψηλότερος μιναρές από τούβλο στον κόσμο\n• Ναός Ακσάρνταμ, από τα πιο εντυπωσιακά θρησκευτικά συγκροτήματα της χώρας\n\nΑκολουθεί δείπνο σε τοπικό εστιατόριο.\nΜετάβαση στο αεροδρόμιο Νέου Δελχί για την πτήση επιστροφής προς Λάρνακα, με ενδιάμεση στάση στο Ντουμπάι.\nΆφιξη στην Κύπρο με τις καλύτερες αναμνήσεις από την Ινδία.'
      },
      gallery: [
        '/images/destinations/india-golden-triangle-hero.webp'
      ]
    }
  },
  {
    id: 47,
    title: 'ΜΠΑΝΓΚΟΚ – ΠΑΤΑΓΙΑ – ΖΟΥΓΚΛΑ ΤΑΪΛΑΝΔΗΣ',
    destination: 'Thailand',
    category: 'Exotic Packages',
    price: 2135,
    duration: '11 days',
    description: 'Ανακαλύψτε τη μαγεία της Ταϊλάνδης: Μπανγκόκ, Πατάγια και τη ζούγκλα του Κάο Γιάϊ. Επισκεφτείτε βουδιστικούς ναούς, πλωτές αγορές, ιστορική Αγιουτάγια και απολαύστε παραλίες με διαμονή σε 4★ ξενοδοχεία.',
    longDescription: 'Ένα ολοκληρωμένο ταξίδι 11 ημερών στην Ταϊλάνδη. Από τη πολύχρωμη Μπανγκόκ με τους ναούς και τις αγορές της, στην ιστορική Αγιουτάγια, το Εθνικό Πάρκο Κάο Γιάϊ με τη ζούγκλα, και την παραθαλάσσια Πατάγια. Περιλαμβάνονται πτήσεις με Gulf Air μέσω Μπαχρέιν, ξεναγήσεις, είσοδοι σε επιλεγμένα αξιοθέατα και διαμονή σε επιλεγμένα 4★ ξενοδοχεία.',
    image: '🇹🇭',
    featured: true,
    details: {
      departureDate: '24/07, 07/08, 14/08, 21/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Bangkok, Ayutthaya, Khao Yai, Pattaya – Thailand',
      monthAvailability: 'July, August',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Gulf Air',
      includedLuggage: '1 αποσκευή 23kg + 1 χειραποσκευή 6kg ανά άτομο',
      coverImage: '/images/destinations/thailand-bangkok-pattaya-hero.webp',
      flights: [
        {
          direction: 'Departure',
          route: 'Larnaca (LCA) → Bahrain (BAH)',
          flight: 'GF 945',
          time: '16:45 → 19:50',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Departure',
          route: 'Bahrain (BAH) → Bangkok (BKK)',
          flight: 'GF 152',
          time: '22:45 → 09:55 (επόμενη μέρα)',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Return',
          route: 'Bangkok (BKK) → Bahrain (BAH)',
          flight: 'GF 153',
          time: '20:15 → 22:55',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Return',
          route: 'Bahrain (BAH) → Larnaca (LCA)',
          flight: 'GF 946',
          time: '01:20 → 04:55',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        }
      ],
      hotels: [
        // Departure 24/07 – double €2,135, single €2,385
        {
          name: '4★ Hotels - Bangkok / Pattaya (24/07)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/thailand-bangkok-pattaya-option1.webp',
          location: 'Bangkok / Khao Yai / Pattaya, Thailand',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 2135,
            single: 2385
          },
          packagePrice: 4270,
          departureDate: '24/07',
          nights: 8
        },
        // Departures 07/08, 14/08, 21/08 – double €2,165, single €2,425
        {
          name: '4★ Hotels - Bangkok / Pattaya (07/08)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/thailand-bangkok-pattaya-option2.webp',
          location: 'Bangkok / Khao Yai / Pattaya, Thailand',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 2165,
            single: 2425
          },
          packagePrice: 4330,
          departureDate: '07/08',
          nights: 8
        },
        {
          name: '4★ Hotels - Bangkok / Pattaya (14/08)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/thailand-bangkok-pattaya-option2.webp',
          location: 'Bangkok / Khao Yai / Pattaya, Thailand',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 2165,
            single: 2425
          },
          packagePrice: 4330,
          departureDate: '14/08',
          nights: 8
        },
        {
          name: '4★ Hotels - Bangkok / Pattaya (21/08)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/thailand-bangkok-pattaya-option2.webp',
          location: 'Bangkok / Khao Yai / Pattaya, Thailand',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 2165,
            single: 2425
          },
          packagePrice: 4330,
          departureDate: '21/08',
          nights: 8
        }
      ],
      included: [
        'Αεροπορικό εισιτήριο Λάρνακα – Μπαχρέιν – Μπανγκόκ – Μπαχρέιν – Λάρνακα με GULF AIR',
        'Φόροι αεροδρομίων',
        'Διαμονή σε επιλεγμένα ξενοδοχεία 4★ με πρόγευμα',
        'Μεταφορές, εκδρομές και περιηγήσεις όπως αναφέρονται στο πρόγραμμα',
        'Νυχτερινή κρουαζιέρα με δείπνο στον ποταμό Chao Phraya',
        'Δύο δείπνα σε τοπικά εστιατόρια όπως αναφέρονται στο πρόγραμμα',
        'Τοπικός αγγλόφωνος ξεναγός',
        'Ελληνόφωνος συνοδός του γραφείου μας',
        'Εισιτήρια εισόδων όπου χρειάζεται',
        'Μία αποσκευή 23 κιλών και μία χειραποσκευή 6 κιλών',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Τα ποτά στα δείπνα',
        'Ό,τι δεν αναφέρεται ρητά στο πρόγραμμα ή αναφέρεται ως προαιρετικό / προτεινόμενο'
      ],
      note: 'Όλοι οι ταξιδιώτες που εισέρχονται στη χώρα πρέπει να συμπληρώσουν ηλεκτρονικά μια Ψηφιακή Κάρτα Άφιξης Ταϊλάνδης (TDAC): https://tdac.immigration.go.th/arrival-card/#/home',
      cancellationPolicy: 'Σε περίπτωση ακύρωσης μέχρι 45 ημέρες πριν την ημερομηνία άφιξης: €50 ανά άτομο. 45–30 ημέρες πριν: 30% της συνολικής τιμής. 30–21 ημέρες πριν: 50% της συνολικής τιμής. 21–0 ημέρες πριν: 100% της συνολικής τιμής. Σε περίπτωση μη εμφάνισης (no-show): 100% της συνολικής τιμής.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά την ώρα της κράτησης',
        'Με την κράτηση δίνεται προκαταβολή 30% της αξίας του πακέτου',
        'Η εξόφληση γίνεται περίπου 21 ημέρες πριν την αναχώρηση',
        'Υπάρχει δυνατότητα ακύρωσης βάσει των όρων και κανονισμών'
      ],
      program: {
        introduction: 'Η Ταϋλάνδη παραμένει σταθερά ένας από τους πιο αγαπημένους και δημοφιλείς προορισμούς για όσους θέλουν να γνωρίσουν έναν κόσμο διαφορετικό από τα ευρωπαϊκά συνηθισμένα. Ένας τόπος γεμάτος αντιθέσεις και χρώματα, όπου οι εξωτικές γεύσεις, οι παραδοσιακές αγορές, οι λαμπεροί ναοί και οι μοναδικές εμπειρίες συνδυάζονται αρμονικά, δημιουργώντας αναμνήσεις που μένουν για πάντα.',
        day1: '1η – 2η Μέρα: Λάρνακα – Μπαχρέιν – Μπανγκόκ\n\nΗ ταξιδιωτική σας περιπέτεια ξεκινά με αναχώρηση από τη Λάρνακα με προορισμό τη Μπανγκόκ, με ενδιάμεσο σταθμό στο Μπαχρέιν. Άφιξη στην πολύχρωμη πρωτεύουσα της Ταϋλάνδης και μεταφορά στο ξενοδοχείο. Τακτοποίηση στα δωμάτια και χρόνος ελεύθερος για ξεκούραση ή για μια πρώτη γνωριμία με την πόλη, ανάλογα με την ώρα άφιξης.\n\nΤο βράδυ, σας προτείνουμε προαιρετικά μια εντυπωσιακή εμπειρία: επίσκεψη στον εμβληματικό ουρανοξύστη Baiyoke Sky. Εκεί μπορείτε να απολαύσετε πλούσιο μπουφέ δείπνο στον 76ο όροφο με θέα που κόβει την ανάσα ή να ανεβείτε μέχρι τον 84ο όροφο, όπου η περιστρεφόμενη πλατφόρμα προσφέρει 360° πανοραμική εικόνα της φωτισμένης πόλης — μια μοναδική στιγμή που αναδεικνύει όλη τη μαγεία της Μπανγκόκ από ψηλά.',
        day2: '3η Μέρα: Μπανγκόκ – Βουδιστικοί Ναοί\n\nΜετά το πρόγευμα, ξεκινάμε την ξενάγησή μας στην «Πόλη των Αγγέλων», όπως αποκαλείται η Μπανγκόκ — μια πρωτεύουσα γεμάτη ενέργεια, αντιθέσεις και εικόνες που σε συνεπαίρνουν από την πρώτη στιγμή.\n\nΠρώτη μας στάση ο επιβλητικός Ναός της Αυγής (Wat Arun), ένα από τα πιο εμβληματικά αξιοθέατα της Ταϋλάνδης. Η εντυπωσιακή σιλουέτα των πανύψηλων πύργων του, στις όχθες του ποταμού Chao Phraya, αποτελεί ένα από τα πιο αναγνωρίσιμα σύμβολα της Νοτιοανατολικής Ασίας.\n\nΣτη συνέχεια επισκεπτόμαστε τον περίφημο Wat Pho, γνωστό για το γιγάντιο άγαλμα του Ξαπλωτού Βούδα, μήκους 45 μέτρων, καλυμμένο εξ ολοκλήρου με φύλλα χρυσού.\n\nΑκολουθεί περιήγηση στη θρυλική Chinatown, μία από τις παλαιότερες και πιο ζωντανές περιοχές της πόλης.\n\nΗ ξενάγησή μας ολοκληρώνεται με επίσκεψη στην εντυπωσιακή Αγορά Λουλουδιών, ένα σημείο γεμάτο χρώματα και αρώματα. Επιστροφή στο ξενοδοχείο και χρόνος ελεύθερος.',
        day3: '4η Μέρα: Μπανγκόκ – Κρουαζιέρα στον ποταμό Chao Phraya\n\nΤο πρωί, μετά το πρόγευμα, η Μπανγκόκ είναι δική σας! Ελεύθερος χρόνος για να περιπλανηθείτε σε μία από τις διάσημες υπαίθριες αγορές της πόλης και να νιώσετε από κοντά τον αυθεντικό παλμό της.\n\nΤο απόγευμα, σας περιμένει μία από τις πιο χαρακτηριστικές εμπειρίες της Ταϊλάνδης: κρουαζιέρα στον ποταμό Chao Phraya, τον «ποταμό των βασιλιάδων». Καθώς πλέετε, η πόλη ξετυλίγεται μπροστά σας σαν ταινία: από τη μία πλευρά παραδοσιακές κατοικίες πάνω στο νερό και μικρές προβλήτες, από την άλλη σύγχρονα κτίρια και πολυτελή ξενοδοχεία.\n\nΜετά την κρουαζιέρα, επιστροφή στο ξενοδοχείο για ξεκούραση. Εναλλακτικά, μπορείτε να απολαύσετε μια απογευματινή/βραδινή βόλτα στην πόλη.',
        day4: '5η Μέρα: Μπανγκόκ – Πλωτή Αγορά & Αγορά του Τρένου\n\nΜετά το πρωινό, αναχωρούμε για μια από τις πιο εμβληματικές εμπειρίες της Ταϊλάνδης: την επίσκεψη στη φημισμένη πλωτή αγορά Damnoen Saduak, τη γνωστότερη του είδους της παγκοσμίως. Επιβίβαση σε παραδοσιακές μακρόστενες βάρκες και αρχίζει μια μαγευτική πλωτή διαδρομή ανάμεσα σε δεκάδες άλλες βάρκες, φορτωμένες με φρούτα, λαχανικά, τοπικά εδέσματα και πολύχρωμα προϊόντα.\n\nΣτη συνέχεια, κατευθυνόμαστε προς μία από τις πιο εντυπωσιακές και ιδιόμορφες αγορές της χώρας: την περίφημη Αγορά του Τρένου (Maeklong Railway Market). Εκεί, κυριολεκτικά πάνω στις σιδηροδρομικές γραμμές, ξεδιπλώνεται καθημερινά μια ολόκληρη αγορά. Όταν το τρένο πλησιάζει, οι έμποροι με απίστευτη ταχύτητα μαζεύουν τους πάγκους και τις τέντες τους, αφήνοντας μόλις τον απαραίτητο χώρο για να περάσει το τρένο… ξυστά.\n\nΜετά από αυτή την ξεχωριστή και αξέχαστη ημέρα, επιστροφή στο ξενοδοχείο μας στην Μπανγκόκ.',
        day5: '6η Μέρα: Μπανγκόκ – Αγιουτάγια – Εθνικό Πάρκο Κάο Γιάϊ\n\nΜετά το πρωινό, αναχωρούμε από τη Μπανγκόκ με προορισμό την ιστορική πόλη της Αγιουτάγια, ένα από τα σημαντικότερα κεφάλαια της ταϊλανδέζικης ιστορίας. Ιδρυμένη το 1350, υπήρξε η δεύτερη πρωτεύουσα του Βασιλείου του Σιάμ και, από τον 14ο έως τον 18ο αιώνα, γνώρισε εντυπωσιακή ακμή.\n\nΚατά την ξενάγησή μας, θα θαυμάσουμε εντυπωσιακά βουδιστικά μοναστήρια, μεγαλοπρεπή αγάλματα, τα χαρακτηριστικά prang — τους επιβλητικούς πύργους που χρησίμευαν ως λειψανοθήκες — καθώς και τα ερείπια των βασιλικών ανακτόρων.\n\nΜετά την ολοκληρωμένη ξενάγηση, συνεχίζουμε προς την ευρύτερη περιοχή του Εθνικού Πάρκου Κάο Γιάϊ. Άφιξη και τακτοποίηση στο ξενοδοχείο μας, μέσα σε ένα καταπράσινο φυσικό περιβάλλον. Δείπνο και διανυκτέρευση.',
        day6: '7η Μέρα: Εθνικό Πάρκο Κάο Γιάϊ\n\nΗ ημέρα ξεκινά με εξερεύνηση στο Εθνικό Πάρκο Κάο Γιάϊ, ένα από τα σημαντικότερα φυσικά καταφύγια της Ταϊλάνδης και από τους σπουδαιότερους βιότοπους της Νοτιοανατολικής Ασίας. Το πάρκο απλώνεται σε μια τεράστια έκταση 2.206 τετρ. χλμ. και φιλοξενεί εντυπωσιακή βιοποικιλότητα, με περισσότερα από 350 είδη σπάνιων και απειλούμενων πουλιών.\n\nΔεν αποκλείεται να συναντήσετε Ασιατικούς ελέφαντες, ινδοβούβαλους, μαϊμούδες υλοβατίδες, μακάκες, ελάφια και πλήθος άλλων ειδών. Για όσους θέλουν κάτι πιο έντονο, υπάρχει η δυνατότητα συμμετοχής σε οργανωμένη περιήγηση στη ζούγκλα με τοπικό οδηγό, ράφτινγκ ή νυχτερινό σαφάρι. Δείπνο και διανυκτέρευση.',
        day7: '8η Μέρα: Κάο Γιάϊ – Πατάγια\n\nΜετά το πρωινό, αναχώρηση για την Πατάγια. Άφιξη, τακτοποίηση στο ξενοδοχείο και ελεύθερος χρόνος. Διανυκτέρευση.',
        day8: '9η Μέρα: Πατάγια – Ελεύθερη Ημέρα\n\nΕλεύθερη ημέρα στην Πατάγια με δυνατότητα προαιρετικών δραστηριοτήτων: Sanctuary of Truth, Pratumnak Hill Viewpoint, Koh Larn, Pattaya Floating Market, spa, shopping, Nong Nooch. Διανυκτέρευση.',
        day9: '10η – 11η Μέρα: Πατάγια – Μπανγκόκ – Μπαχρέιν – Λάρνακα\n\nΠρωινό και ελεύθερος χρόνος στην Πατάγια για τις τελευταίες βόλτες ή αγορές. Μεταφορά στο αεροδρόμιο της Μπανγκόκ και πτήση επιστροφής με ενδιάμεση στάση στο Μπαχρέιν. Άφιξη στη Λάρνακα το πρωί της επόμενης ημέρας.'
      },
      gallery: [
        '/images/destinations/thailand-bangkok-pattaya-hero.webp'
      ]
    }
  },
  {
    id: 48,
    title: 'ΙΑΠΩΝΙΑ',
    destination: 'Japan',
    category: 'Exotic Packages',
    price: 4799,
    duration: '12 days',
    description: 'Ανακαλύψτε τη μαγεία της Ιαπωνίας: Οσάκα, Κιότο, Ματσουμότο και Τόκιο. Επισκεφτείτε βουδιστικούς ναούς, παραδοσιακά κάστρα, το Όρος Φούτζι, και απολαύστε πολιτιστικές εμπειρίες με διαμονή σε 4★ ξενοδοχεία.',
    longDescription: 'Ένα ολοκληρωμένο ταξίδι 12 ημερών στην Ιαπωνία. Από την Οσάκα και το Κιότο με τους ναούς και τους κήπους, στο Ματσουμότο με το ιστορικό κάστρο, και το Τόκιο με τη σύγχρονη κουλτούρα. Περιλαμβάνονται πτήσεις με Emirates μέσω Ντουμπάι, ξεναγήσεις, είσοδοι σε επιλεγμένα αξιοθέατα, εμπειρία Σούμο και διαμονή σε επιλεγμένα 4★ ξενοδοχεία.',
    image: '🇯🇵',
    featured: true,
    details: {
      departureDate: '13/05, 15/07, 12/08, 16/09, 14/10',
      departureFrom: 'Larnaca',
      destinationFull: 'Osaka, Kyoto, Nara, Matsumoto, Mount Fuji, Tokyo, Nikko – Japan',
      monthAvailability: 'May, July, August, September, October',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Emirates Airlines',
      includedLuggage: '1 αποσκευή 30kg + 1 χειραποσκευή 7kg ανά άτομο',
      coverImage: '/images/destinations/japan-hero.webp',
      flights: [
        {
          direction: 'Departure',
          route: 'Larnaca (LCA) → Dubai (DXB)',
          flight: 'EK 110',
          time: '20:10 → 01:05 (επόμενη μέρα)',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Departure',
          route: 'Dubai (DXB) → Osaka (KIX)',
          flight: 'EK 316',
          time: '03:00 → 17:15',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Return',
          route: 'Tokyo (NRT) → Dubai (DXB)',
          flight: 'EK 319',
          time: '22:30 → 04:50 (επόμενη μέρα)',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Return',
          route: 'Dubai (DXB) → Larnaca (LCA)',
          flight: 'EK 109',
          time: '08:00 → 11:10',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        }
      ],
      hotels: [
        // Departures 13/05, 15/07 – double €4,799, single €5,829
        {
          name: '4★ Hotels - Osaka / Kyoto / Matsumoto / Tokyo (13/05)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/japan-option1.webp',
          location: 'Osaka / Kyoto / Matsumoto / Tokyo, Japan',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 4799,
            single: 5829
          },
          packagePrice: 9598,
          departureDate: '13/05',
          nights: 9
        },
        {
          name: '4★ Hotels - Osaka / Kyoto / Matsumoto / Tokyo (15/07)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/japan-option1.webp',
          location: 'Osaka / Kyoto / Matsumoto / Tokyo, Japan',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 4799,
            single: 5829
          },
          packagePrice: 9598,
          departureDate: '15/07',
          nights: 9
        },
        // Departure 12/08 – double €4,849, single €5,879
        {
          name: '4★ Hotels - Osaka / Kyoto / Matsumoto / Tokyo (12/08)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/japan-option2.webp',
          location: 'Osaka / Kyoto / Matsumoto / Tokyo, Japan',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 4849,
            single: 5879
          },
          packagePrice: 9698,
          departureDate: '12/08',
          nights: 9
        },
        // Departure 16/09 – double €4,895, single €6,049
        {
          name: '4★ Hotels - Osaka / Kyoto / Matsumoto / Tokyo (16/09)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/japan-option3.webp',
          location: 'Osaka / Kyoto / Matsumoto / Tokyo, Japan',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 4895,
            single: 6049
          },
          packagePrice: 9790,
          departureDate: '16/09',
          nights: 9
        },
        // Departure 14/10 – double €4,945, single €6,099
        {
          name: '4★ Hotels - Osaka / Kyoto / Matsumoto / Tokyo (14/10)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/japan-option4.webp',
          location: 'Osaka / Kyoto / Matsumoto / Tokyo, Japan',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 4945,
            single: 6099
          },
          packagePrice: 9890,
          departureDate: '14/10',
          nights: 9
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Ντουμπάι – Οσάκα – Ντουμπάι – Λάρνακα με Emirates',
        'Φόροι αεροδρομίων και επίναυλο καυσίμων',
        'Διαμονή για 9 βράδια σε ξενοδοχεία 4★ με πρόγευμα',
        'Μεταφορές, ξεναγήσεις και εκδρομές όπως αναφέρονται στο πρόγραμμα',
        'Είσοδοι στα διάφορα αξιοθέατα όπως αναφέρονται στο πρόγραμμα',
        '3 γεύματα σε τοπικά εστιατόρια όπως αναφέρονται στο πρόγραμμα',
        'Εμπειρία Σούμο με γεύμα',
        'Τοπικοί αγγλόφωνοι ξεναγοί',
        'Εισιτήριο τελεφερίκ',
        'Εισιτήρια τρένου Κιότο – Ναγκόγια – Ματσουμότο',
        'Εισιτήρια τρένου JR super express (τουριστική θέση) Ματσουμότο – Τόκιο',
        'Έμπειρος ελληνόφωνος αρχηγός / συνοδός από Κύπρο',
        'Μία αποσκευή 30 κιλών και μία χειραποσκευή 7 κιλών',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Αχθοφορικά και φιλοδωρήματα',
        'Ποτά στα γεύματα',
        'Ασφάλεια ταξιδιού',
        'Ό,τι δεν αναφέρεται ρητά στο πρόγραμμα ή αναφέρεται ως προαιρετικό / προτεινόμενο'
      ],
      note: 'Την 6η μέρα, για το ταξίδι σας με τα τρένα, θα πρέπει να έχετε μαζί σας μόνο μια μικρή τσάντα με τα απαραίτητα. Οι αποσκευές θα σταλούν στο Τόκιο και θα τις παραλάβετε την 7η μέρα με την άφιξή σας στο ξενοδοχείο.',
      cancellationPolicy: 'Σε περίπτωση ακύρωσης μέχρι 45 ημέρες πριν την ημερομηνία άφιξης: €50 ανά άτομο. 45–30 ημέρες πριν: 30% της συνολικής τιμής. 30–21 ημέρες πριν: 50% της συνολικής τιμής. 21–0 ημέρες πριν: 100% της συνολικής τιμής. Σε περίπτωση μη εμφάνισης (no-show): 100% της συνολικής τιμής.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά την ώρα της κράτησης τους',
        'Με την κράτηση των ταξιδιωτικών πακέτων δίνετε προκαταβολή 30% της αξίας των πακέτων',
        'Η εξόφλησή τους γίνεται 21 μέρες περίπου πριν την αναχώρηση',
        'Ακυρωτικά βάσει ημερών πριν την αναχώρηση, σύμφωνα με την πολιτική ακύρωσης',
        'Για charter, κρουαζιέρες, σκι, εκθέσεις, συνέδρια και παρεμφερείς διεθνείς εκδηλώσεις: ακυρωτικά έως 100% ανεξαρτήτως ημερομηνίας ακύρωσης'
      ],
      program: {
        introduction: 'Η Ιαπωνία, ένας μοναδικός κόσμος όπου η παράδοση και η σύγχρονη τεχνολογία συνυπάρχουν αρμονικά. Από τους βουδιστικούς ναούς του Κιότο και τα ιστορικά κάστρα, στο σύγχρονο Τόκιο και το εμβληματικό Όρος Φούτζι, ανακαλύψτε έναν πολιτισμό που συνδυάζει την αρχαία σοφία με την καινοτομία.',
        day1: '1η – 2η Μέρα: Λάρνακα – Ντουμπάι – Οσάκα\n\nΣυγκέντρωση στο αεροδρόμιο Λάρνακας και αναχώρηση για το Οσάκα με ενδιάμεση αλλαγή αεροσκάφους. Άφιξη, υποδοχή από τους αντιπροσώπους μας και μεταφορά στο ξενοδοχείο μας. Τακτοποίηση δωματίων και αναχώρηση με τα πόδια για την πρώτη μας γνωριμία με την πόλη. Διανυκτέρευση.',
        day2: '3η Μέρα: Οσάκα (Ξενάγηση) – Κιότο\n\nΠρωινό και ακολουθεί ξενάγηση. Πρώτη μας επίσκεψη στο εμβληματικό Umeda Sky Building, ένα αρχιτεκτονικό αριστούργημα που ξεχωρίζει για τον εντυπωσιακό σχεδιασμό του. Η είσοδος στο παρατηρητήριο περιλαμβάνεται και προσφέρει μοναδική πανοραμική θέα της πόλης.\n\nΣτη συνέχεια κατευθυνόμαστε προς το ιστορικό Κάστρο της Οσάκα, σύμβολο της πόλης και σημαντικό μνημείο της ιαπωνικής ιστορίας.\n\nΑκολουθεί επίσκεψη στη φημισμένη περιοχή Dotonbori, την καρδιά της ψυχαγωγίας της Οσάκα. Ελεύθερος χρόνος για περίπατο ανάμεσα στις εντυπωσιακές φωτεινές επιγραφές και τα παραδοσιακά και μοντέρνα καταστήματα.\n\nΣυνεχίζουμε προς τη γραφική συνοικία Shinsekai, μια περιοχή με αυθεντική ατμόσφαιρα παλιάς Ιαπωνίας, γνωστή για τον χαρακτηριστικό πύργο Tsutenkaku.\n\nΜετά την ολοκλήρωση της ξενάγησης, αναχώρηση για το Κιότο, την παλιά αυτοκρατορική πρωτεύουσα της Ιαπωνίας. Άφιξη στο ξενοδοχείο και τακτοποίηση. Διανυκτέρευση.',
        day3: '4η Μέρα: Κιότο (Ξενάγηση)\n\nΜετά το πρωινό, αναχώρηση για ολοήμερη ξενάγηση στα σημαντικότερα αξιοθέατα της πόλης.\n\nΠρώτη επίσκεψη στον εντυπωσιακό ναό Kiyomizudera, Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO. Ο ναός είναι χτισμένος πάνω σε ξύλινες κολώνες και προσφέρει μοναδική θέα στην πόλη του Κιότο.\n\nΣτη συνέχεια ακολουθεί τελετή τσαγιού, μια αυθεντική πολιτιστική εμπειρία που επιτρέπει στους επισκέπτες να γνωρίσουν τις παραδοσιακές ιαπωνικές τελετουργίες.\n\nΕπόμενη στάση στο παγκοσμίου φήμης Kinkakuji (Χρυσό Περίπτερο), ένα από τα πιο εμβληματικά αξιοθέατα της Ιαπωνίας. Ο ναός εντυπωσιάζει με τη χρυσή του πρόσοψη και τον αρμονικό κήπο που τον περιβάλλει.\n\nΑκολουθεί μετάβαση στην περιοχή Arashiyama, γνωστή για το μαγευτικό δάσος από μπαμπού, όπου οι επισκέπτες μπορούν να απολαύσουν έναν χαλαρό περίπατο μέσα στη φύση.\n\nΣτην ίδια περιοχή επισκεπτόμαστε τον ναό Tenryuji, επίσης Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO, με τους εντυπωσιακούς κήπους του.\n\nΕπιστροφή στο ξενοδοχείο για ξεκούραση και ελεύθερος χρόνος.',
        day4: '5η Μέρα: Κιότο – Νάρα – Κιότο\n\nΠρωινό και αναχώρηση για τη μαγευτική Νάρα, την πρώτη μόνιμη αυτοκρατορική πρωτεύουσα της Ιαπωνίας.\n\nΜε την άφιξη, περίπατος στο φημισμένο Πάρκο Ελαφιών Νάρα, έναν εκτεταμένο καταπράσινο χώρο όπου τα ιερά ελάφια κινούνται ελεύθερα, δημιουργώντας μια μοναδική και αυθεντική εμπειρία.\n\nΣτη συνέχεια επίσκεψη στον επιβλητικό ναό Todaiji, Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO. Το μεγαλοπρεπές Daibutsuden Hall στεγάζει τον εμβληματικό Μεγάλο Βούδα, ένα από τα μεγαλύτερα χάλκινα αγάλματα παγκοσμίως.\n\nΑκολουθεί επίσκεψη στον κομψό κήπο Isuien, έναν παραδοσιακό ιαπωνικό κήπο εξαιρετικής αισθητικής.\n\nΕφόσον το επιτρέπει ο χρόνος, επίσκεψη στον ιερό χώρο του Kasuga Taisha, με περίπατο στον εξωτερικό περιβάλλοντα χώρο, γνωστό για τα χιλιάδες πέτρινα φανάρια.\n\nΕπιστροφή στο Κιότο με στάση στο εμβληματικό Fushimi Inari Taisha, έναν από τους σημαντικότερους σιντοϊστικούς ναούς της Ιαπωνίας. Περίπατος μέσα από τις αμέτρητες κόκκινες πύλες torii, που σχηματίζουν ένα εντυπωσιακό μονοπάτι προς το όρος Inari.\n\nΆφιξη στο ξενοδοχείο και διανυκτέρευση.',
        day5: '6η Μέρα: Κιότο – Ματσουμότο\n\nΠρόγευμα και μεταφορά στο σιδηροδρομικό σταθμό και αναχώρηση για Ναγκόγια. Με την άφιξη, μετεπιβίβαση και συνέχιση προς Matsumoto, απολαμβάνοντας τα γραφικά τοπία της ιαπωνικής υπαίθρου.\n\nΆφιξη και επίσκεψη σε παραδοσιακή ζυθοποιία sake, όπου περιλαμβάνεται εμπειρία γευσιγνωσίας.\n\nΣτη συνέχεια, επίσκεψη στο επιβλητικό Κάστρο της Matsumoto, ένα από τα παλαιότερα και καλύτερα διατηρημένα κάστρα της Ιαπωνίας, γνωστό και ως «Μαύρο Κάστρο». Εξερεύνηση των ιστορικών χώρων και θέα προς τις Ιαπωνικές Άλπεις.\n\nΆφιξη στο ξενοδοχείο και διανυκτέρευση.',
        day6: '7η Μέρα: Ματσουμότο – Όρος Φούτζι – Τόκιο\n\nΜετά το πρωινό, αναχώρηση προς την περιοχή του Όρους Φούτζι, σε διαδρομή με εντυπωσιακά φυσικά τοπία.\n\nΠρώτη στάση στο παραδοσιακό χωριό Oshino Hakkai, γνωστό για τις κρυστάλλινες πηγές του που τροφοδοτούνται από τα λιωμένα χιόνια του Όρους Φούτζι.\n\nΣτη συνέχεια στάση στο Oishi Park στη λίμνη Kawaguchi, για φωτογραφική στάση με φόντο το Όρος Φούτζι.\n\nΑκολουθεί επιβίβαση στο τελεφερίκ, με εντυπωσιακή εναέρια θέα στη λίμνη και στο Όρος Φούτζι.\n\nΕφόσον το επιτρέπει ο χρόνος και οι καιρικές συνθήκες, επίσκεψη στο Arakurayama Sengen Shrine Park, ένα από τα πιο φωτογραφημένα σημεία της Ιαπωνίας.\n\nΜετά την ολοκλήρωση της ξενάγησης, μεταφορά στον σιδηροδρομικό σταθμό και αναχώρηση για το Τόκιο. Άφιξη και μεταφορά στο ξενοδοχείο.',
        day7: '8η Μέρα: Τόκιο (Ξενάγηση) – Εμπειρία Σούμο με γεύμα\n\nΠρωινό και ακολουθεί ξενάγηση (κάποιες μετακινήσεις θα γίνουν με τη χρήση των μέσων μαζικής μεταφοράς).\n\nΠρώτη επίσκεψη στο ιστορικό Ueno Park, έναν από τους σημαντικότερους δημόσιους χώρους της πόλης.\n\nΣτη συνέχεια επίσκεψη στον εμβληματικό ναό Sensoji, τον παλαιότερο βουδιστικό ναό του Τόκιο, και περίπατος στην παραδοσιακή Nakamise Street.\n\nΑκολουθεί μοναδική πολιτιστική εμπειρία Sumo Wrestling, με συμμετοχή σε οργανωμένη παράσταση και παραδοσιακό γεύμα.\n\nΣυνεχίζουμε με επίσκεψη στο Tokyo Skytree, τον ψηλότερο πύργο της Ιαπωνίας, με πανοραμική θέα της μητρόπολης.\n\nΗ ημέρα συνεχίζεται με επίσκεψη στην περιοχή Akihabara, παγκοσμίως γνωστή για την κουλτούρα της τεχνολογίας, των anime και των ηλεκτρονικών καταστημάτων. Χρόνος για περίπατο και εξερεύνηση.\n\nΕπιστροφή στο ξενοδοχείο για ξεκούραση.',
        day8: '9η Μέρα: Τόκιο (Ελεύθερη Μέρα)\n\nΗ ημέρα είναι ελεύθερη για να εξερευνήσετε το Τόκιο με τον δικό σας ρυθμό. Προτείνονται επισκέψεις σε εμβληματικές περιοχές όπως η κομψή Ginza για αγορές, το ζωντανό Shibuya και Shinjuku, η παραδοσιακή Asakusa με τον ναό Sensoji, καθώς και το Ueno με τα πάρκα και τα μουσεία του. Για χαλάρωση, ιδανικές επιλογές αποτελούν οι ιαπωνικοί κήποι ή η παραθαλάσσια Odaiba, ενώ οι λάτρεις της σύγχρονης κουλτούρας μπορούν να επισκεφθούν την Harajuku και την Akihabara.',
        day9: '10η Μέρα: Τόκιο – Νίκκο – Καταρράκτης Κεγκόν – Λίμνη Τσουζέντζι\n\nΠρωινό και αναχώρηση για ολοήμερη εκδρομή στο Νίκκο, μία από τις σημαντικότερες ιστορικές και φυσικές περιοχές της Ιαπωνίας.\n\nΠρώτος σταθμός το εντυπωσιακό Ιερό Toshogu, Μνημείο Παγκόσμιας Πολιτιστικής Κληρονομιάς της UNESCO, γνωστό για τον πλούσιο διάκοσμό του και τη μοναδική αρχιτεκτονική του.\n\nΣτη συνέχεια, διαδρομή από τον ορεινό δρόμο Irohazaka, με πανοραμική θέα στο φυσικό τοπίο.\n\nΑκολουθεί επίσκεψη στον επιβλητικό Καταρράκτη Κεγκόν, έναν από τους πιο εντυπωσιακούς καταρράκτες της Ιαπωνίας.\n\nΗ εκδρομή συνεχίζεται στη γραφική Λίμνη Τσουζέντζι, στους πρόποδες του όρους Νάνταϊ, για να απολαύσουμε το γαλήνιο φυσικό τοπίο.\n\nΕπιστροφή στο ξενοδοχείο. Διανυκτέρευση.',
        day10: '11η – 12η Μέρα: Τόκιο – Ντουμπάι – Λάρνακα\n\nΠρωινό και χρόνος ελεύθερος έως την αναχώρηση, ώστε να αξιοποιήσετε τις τελευταίες σας ώρες στο Τόκιο για ξεκούραση, αγορές ή μια τελευταία βόλτα στην πόλη.\n\nΤο απόγευμα μεταφορά στο αεροδρόμιο για να πάρουμε την πτήση της επιστροφής για Λάρνακα μέσω Ντουμπάι, ολοκληρώνοντας ένα μοναδικό ταξίδι γεμάτο εικόνες, εμπειρίες και αξέχαστες αναμνήσεις από την Ιαπωνία.'
      },
      gallery: [
        '/images/destinations/japan-hero.webp'
      ]
    }
  },
  {
    id: 49,
    title: 'ΙΣΛΑΝΔΙΑ – Η ΓΗ ΤΗΣ ΦΩΤΙΑΣ ΚΑΙ ΤΟΥ ΠΑΓΟΥ',
    destination: 'Iceland',
    category: 'Exotic Packages',
    price: 3649,
    duration: '9 days',
    description: 'Ανακαλύψτε τη μαγεία της Ισλανδίας: Ρέικιαβικ, Χρυσός Κύκλος, Νότια Ακτή, Σνάιφελσνες και Γαλάζια Λίμνη. Επισκεφτείτε καταρράκτες, γευσίρους, παγετώνες και γεωθερμικές πηγές με διαμονή σε 3★ & 4★ ξενοδοχεία.',
    longDescription: 'Ένα ολοκληρωμένο ταξίδι 9 ημερών στην Ισλανδία, τη «Γη της Φωτιάς και του Πάγου». Από το Ρέικιαβικ και τον Χρυσό Κύκλο, στη Νότια Ακτή με τους καταρράκτες, τη Χερσόνησο Σνάιφελσνες και τη διάσημη Γαλάζια Λίμνη. Περιλαμβάνονται πτήσεις με LOT Airlines μέσω Βαρσοβίας, ξεναγήσεις, είσοδοι σε επιλεγμένα αξιοθέατα και διαμονή σε επιλεγμένα 3★ & 4★ ξενοδοχεία.',
    image: '🇮🇸',
    featured: true,
    details: {
      departureDate: '04/07, 01/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Reykjavik, Borgarnes, Hella, Snæfellsnes, Golden Circle, South Coast – Iceland',
      monthAvailability: 'July, August',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'LOT Polish Airlines',
      includedLuggage: '1 αποσκευή συμπεριλαμβάνεται',
      coverImage: '/images/destinations/iceland-fire-ice-hero.webp',
      flights: [
        {
          direction: 'Departure',
          route: 'Larnaca (LCA) → Warsaw (WAW)',
          flight: 'LO 172',
          time: '16:05 → 18:40',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Departure',
          route: 'Warsaw (WAW) → Reykjavik (KEF)',
          flight: 'LO 499',
          time: '21:35 → 23:55',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Return',
          route: 'Reykjavik (KEF) → Warsaw (WAW)',
          flight: 'LO 500',
          time: '00:45 → 06:45',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Return',
          route: 'Warsaw (WAW) → Larnaca (LCA)',
          flight: 'LO 171',
          time: '10:40 → 15:05',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        }
      ],
      hotels: [
        // Departure 04/07 – double €3,649, single €4,949
        {
          name: '3★ & 4★ Hotels - Iceland (04/07)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/iceland-option1.webp',
          location: 'Reykjavik / Borgarnes / Hella, Iceland',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 3649,
            single: 4949
          },
          packagePrice: 7298,
          departureDate: '04/07',
          nights: 7
        },
        // Departure 01/08 – double €3,855, single €5,155
        {
          name: '3★ & 4★ Hotels - Iceland (01/08)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/iceland-option2.webp',
          location: 'Reykjavik / Borgarnes / Hella, Iceland',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 3855,
            single: 5155
          },
          packagePrice: 7710,
          departureDate: '01/08',
          nights: 7
        }
      ],
      included: [
        'Αεροπορικό εισιτήριο Λάρνακα – Βαρσοβία – Ρέικιαβικ και Ρέικιαβικ – Βαρσοβία – Λάρνακα με πτήσεις της LOT Airlines',
        'Τέσσερις διανυκτερεύσεις σε ξενοδοχείο 4★ με πρόγευμα στο Ρέικιαβικ',
        'Δυο διανυκτερεύσεις σε ξενοδοχείο 3★ με πρόγευμα στο Borgarnes',
        'Μία διανυκτέρευση σε ξενοδοχείο 4★ με πρόγευμα στη Hella',
        'Φόροι διαμονής στα ξενοδοχεία',
        'Εισιτήρια εισόδων για Σπήλαιο Βάτνσχελιρ, Γεωθερμικό Θερμοκήπιο & Στάβλοι Αλόγων, Κέντρο LAVA, Μουσείο Πέρλαν και Γαλάζια Λίμνη',
        'Μεταφορές, εκδρομές και περιηγήσεις σύμφωνα με το πρόγραμμα',
        'Τοπικοί αγγλόφωνοι ξεναγοί',
        'Ελληνόφωνας αρχηγός/συνοδός',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Φιλοδωρήματα και αχθοφορικά',
        'Οτιδήποτε δεν αναφέρεται στο πρόγραμμα ή αναφέρεται ως προαιρετικό ή προτεινόμενο'
      ],
      note: '',
      cancellationPolicy: 'Σε περίπτωση ακύρωσης μέχρι 45 ημέρες πριν την ημερομηνία άφιξης: €50 ανά άτομο. 45–30 ημέρες πριν: 30% της συνολικής τιμής. 30–21 ημέρες πριν: 50% της συνολικής τιμής. 21–0 ημέρες πριν: 100% της συνολικής τιμής. Σε περίπτωση μη εμφάνισης (no-show): 100% της συνολικής τιμής.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά την ώρα της κράτησης τους',
        'Με την κράτηση των ταξιδιωτικών πακέτων δίνετε προκαταβολή 30% της αξίας των πακέτων',
        'Η εξόφληση τους γίνεται 21 μέρες περίπου πριν την αναχώρηση',
        'Ακυρωτικά βάσει ημερών πριν την αναχώρηση, σύμφωνα με την πολιτική ακύρωσης',
        'Για charter, κρουαζιέρες, σκι, εκθέσεις, συνέδρια και παρεμφερείς διεθνείς εκδηλώσεις: ακυρωτικά έως 100% ανεξαρτήτως ημερομηνίας γνωστοποίησης ακύρωσης'
      ],
      program: {
        introduction: 'Η Ισλανδία, η «Γη της Φωτιάς και του Πάγου», προσφέρει ένα μοναδικό ταξίδι σε έναν κόσμο όπου ηφαίστεια, παγετώνες, γευσίρους και μαύρες παραλίες συνδυάζονται για να δημιουργήσουν ένα από τα πιο εντυπωσιακά φυσικά τοπία στον κόσμο.',
        day1: '1η ημέρα: Λάρνακα – Βαρσοβία – Ρέικιαβικ\n\nΣυνάντηση στο αεροδρόμιο της Λάρνακας και αναχώρηση για την πρωτεύουσα της Ισλανδίας και ταυτόχρονα την βορειότερη πρωτεύουσα της Ευρώπης, το Ρέικιαβικ, μέσω ενδιάμεσου σταθμού. Άφιξη και υποδοχή από τον συνοδό μας. Μεταφορά και τακτοποίηση στο ξενοδοχείο. Διανυκτέρευση.',
        day2: '2η ημέρα: Ρέικιαβικ (περιήγηση) – Γκράμπροκ – Ντέιλνταρτουνγκουχβερ – Καταρράκτες Χράουνφοσαρ και Μπάρναφος – Μπόργκαρνες\n\nΜετά το πρωινό μας, ακολουθεί περιήγηση στην πόλη του Ρέικιαβικ, με την ιδιαίτερη αρχιτεκτονική και το μοναδικό φυσικό τοπίο που την περιβάλλει. Κατά τη διάρκειά της θα γνωρίσουμε τα σημαντικότερα σημεία της ισλανδικής πρωτεύουσας, την ιστορία και την καθημερινή ζωή των κατοίκων της. Ανάμεσα στα αξιοθέατα που συναντάμε περιλαμβάνονται η επιβλητική Χαλγκρίμσκιρκια, το εντυπωσιακό Μέγαρο Συναυλιών Χάρπα, το γλυπτό Σαν Βόγιατζερ και το παλιό λιμάνι.\n\nΣτη συνέχεια επισκεπτόμαστε τον κρατήρα Γκράμπροκ, που σχηματίστηκε πριν από περίπου 3.400 χρόνια και αποτελεί μέρος του ηφαιστειακού πεδίου Γκράμπροκαρχράουν.\n\nΗ μέρα συνεχίζεται στη θερμή πηγή Deildartunguhver, μία από τις ισχυρότερες στην Ευρώπη, με θερμοκρασία που φτάνει τους 100°C.\n\nΑκολουθεί επίσκεψη στους καταρράκτες Χράουνφοσαρ, όπου τα νερά αναβλύζουν μέσα από τις σχισμές του ηφαιστειακού πεδίου, δημιουργώντας έναν εντυπωσιακό σχηματισμό μήκους περίπου 1 χιλιομέτρου. Πολύ κοντά βρίσκεται και ο καταρράκτης Μπάρναφος, που κυλά μέσα σε στενό φαράγγι.\n\nΣυνεχίζουμε για το Μπόργκαρνες, όπου και θα διανυκτερεύσουμε. Άφιξη στο ξενοδοχείο και τακτοποίηση στα δωμάτια. Διανυκτέρευση.',
        day3: '3η ημέρα: Μπόργκαρνες – Σνάιφελσνες – Γκρούνταρφιόρδουρ – Κίρκιουφελ – Σπήλαιο Βάτνσχελιρ – Χέλναρ – Άρναρσταπι\n\nΜετά το πρωινό, η σημερινή ημέρα είναι αφιερωμένη στη μαγευτική Χερσόνησο Σνάιφελσνες, μια περιοχή που συχνά αποκαλείται «Ισλανδία σε μικρογραφία».\n\nΠρώτος μας σταθμός το γραφικό Γκρούνταρφιόρδουρ, παραθαλάσσιο ψαροχώρι στη βόρεια πλευρά της χερσονήσου.\n\nΛίγο πιο πέρα δεσπόζει το εμβληματικό βουνό Κίρκιουφελ, ίσως το πιο φωτογραφημένο βουνό της Ισλανδίας, με το χαρακτηριστικό του σχήμα.\n\nΣυνεχίζουμε με μια ιδιαίτερη εμπειρία στον υπόγειο κόσμο της Ισλανδίας, μέσα από την οργανωμένη ξενάγηση στο Σπήλαιο Βάτνσχελιρ, έναν ηφαιστειακό σωλήνα ηλικίας περίπου 8.000 ετών.\n\nΈπειτα επισκεπτόμαστε τα ήσυχα παράλια του Χέλναρ, ένα μικρό χωριό που προσφέρει μοναδικές παραθαλάσσιες διαδρομές. Λίγο πιο δίπλα βρίσκεται το Άρναρσταπι, ένα από τα ομορφότερα ψαροχώρια της περιοχής.\n\nΣτο τέλος της ημέρας επιστρέφουμε στο ξενοδοχείο.',
        day4: '4η ημέρα: Μπόργκαρνες – Εθνικό Πάρκο Θίνγκβελιρ – Καταρράκτης Γκούλφος – Φρίντχαϊμαρ – Χέλα\n\nΜετά το πρωινό, η μέρα μας ξεκινά με επίσκεψη στο Εθνικό Πάρκο Θίνγκβελιρ, έναν από τους σημαντικότερους φυσικούς και ιστορικούς τόπους της Ισλανδίας. Εκεί, όπου οι τεκτονικές πλάκες της Βόρειας Αμερικής και της Ευρασίας απομακρύνονται, σχηματίζονται εντυπωσιακά ρήγματα, ηφαιστειακά πεδία και η μεγαλύτερη φυσική λίμνη της χώρας. Ο χώρος περιλαμβάνεται στον Κατάλογο Παγκόσμιας Κληρονομιάς της UNESCO.\n\nΣτη συνέχεια κατευθυνόμαστε προς τη γεωθερμική περιοχή Γκάισιρ, έναν από τους πιο διάσημους σταθμούς του «Χρυσού Κύκλου». Το τοπίο, γεμάτο ατμίδες, θερμές πηγές και έντονα γεωθερμικά χρώματα, προσφέρει μια μοναδική εικόνα της ισλανδικής φύσης. Εκεί βρίσκεται και ο ενεργός Στρόκουρ, που εκτοξεύει στήλη ζεστού νερού κάθε λίγα λεπτά.\n\nΑκολουθεί επίσκεψη στον θρυλικό καταρράκτη Γκούλφος, έναν από τους πιο εντυπωσιακούς της χώρας. Το «Χρυσό Νερό» πέφτει σε δύο επίπεδα μέσα σε βαθιά χαράδρα, δημιουργώντας μια συγκλονιστική εικόνα δύναμης και ομορφιάς.\n\nΗ μέρα συνεχίζεται στο Φρίντχαϊμαρ, όπου θα γνωρίσουμε τη γεωθερμική θερμοκηπιακή καλλιέργεια ντομάτας.\n\nΣυνεχίζουμε για την πόλη Χέλα, όπου και θα διανυκτερεύσουμε. Άφιξη στο ξενοδοχείο και τακτοποίηση στα δωμάτια. Διανυκτέρευση.',
        day5: '5η ημέρα: Χέλα – Κέντρο Λάβα – Σέλιαλαντσφος – Σκόγκαφος – Σολχέιματζοκούλ – Ρέινισφιαρα – Βικ – Ρέικιαβικ\n\nΜετά το πρωινό, αναχώρηση με κατεύθυνση τη μαγευτική Νότια Ακτή της Ισλανδίας, μία από τις εντυπωσιακότερες διαδρομές της χώρας.\n\nΠρώτη στάση στο LAVA Centre στο Hvolsvöllur, ένα σύγχρονο και διαδραστικό κέντρο που παρουσιάζει τη γεωλογική ιστορία και την ηφαιστειακή δραστηριότητα της Ισλανδίας.\n\nΣτη συνέχεια επισκεπτόμαστε τον εμβληματικό καταρράκτη Σέλιαλαντσφος, έναν από τους πιο γνωστούς της χώρας, με δυνατότητα περιπάτου και πέρασμα πίσω από την υδάτινη «κουρτίνα».\n\nΑκολουθεί ο εντυπωσιακός Σκόγκαφος, με την επιβλητική πτώση νερού και το συχνά ορατό ουράνιο τόξο.\n\nΗ διαδρομή συνεχίζεται προς το Σολχέιματζοκούλ, μία εντυπωσιακή γλώσσα παγετώνα, όπου θα έχουμε χρόνο για περίπατο μέχρι το σημείο θέας.\n\nΈπειτα κατευθυνόμαστε προς τη διάσημη Ρέινισφιαρα, την εντυπωσιακή παραλία μαύρης ηφαιστειακής άμμου, γνωστή για τους βασαλτικούς σχηματισμούς.\n\nΤελική στάση στο γραφικό χωριό Βικ, το νοτιότερο κατοικημένο σημείο της Ισλανδίας.\n\nΕπιστροφή και άφιξη στο Ρέικιαβικ. Διανυκτέρευση.',
        day6: '6η ημέρα: Ρέικιαβικ – Fly Over Iceland – Μουσείο Πέρλαν\n\nΜετά το πρωινό, αναχώρηση για μία μοναδική εμπειρία στο FlyOver Iceland, μία καθηλωτική προσομοίωση πτήσης που «ταξιδεύει» τους επισκέπτες πάνω από τα πιο εντυπωσιακά και απομακρυσμένα τοπία της Ισλανδίας.\n\nΣτη συνέχεια ακολουθεί επίσκεψη στο Μουσείο Πέρλαν, ένα από τα πιο σύγχρονα και δημοφιλή αξιοθέατα της πόλης, όπου θα γνωρίσουμε τη μοναδική φύση και γεωλογία της χώρας. Ξεχωρίζει η εμπειρία του τεχνητού παγετώνα, οι ενότητες για τα ηφαιστειακά φαινόμενα και τις γεωθερμικές δυνάμεις.\n\nΤο απόγευμα είναι ελεύθερο για να απολαύσουμε την πόλη με τον δικό μας ρυθμό.',
        day7: '7η ημέρα: Ρέικιαβικ – Γέφυρα ανάμεσα στις Ηπείρους – Φάρος Ρέικιανεςβίτι – Γκούνουβερ – Γαλάζια Λίμνη (Blue Lagoon)\n\nΜετά το πρωινό θα κατευθυνθούμε προς τη χερσόνησο Ρέικιανες, μία περιοχή ιδιαίτερης φυσικής ομορφιάς και μεγάλης γεωλογικής σημασίας.\n\nΠρώτη μας στάση στη διάσημη Γέφυρα ανάμεσα στις Ηπείρους (Bridge Between Continents), τη συμβολική γέφυρα που «ενώνει» την Ευρασιατική με τη Βορειοαμερικανική τεκτονική πλάκα.\n\nΣτη συνέχεια συνεχίζουμε προς το Ρέικιανεςβίτι, τον παλαιότερο φάρο της Ισλανδίας, σε ένα εντυπωσιακό παράκτιο τοπίο.\n\nΑκολουθεί επίσκεψη στο Γκούνουβερ, μία από τις πιο εντυπωσιακές γεωθερμικές περιοχές της Ισλανδίας, όπου θα δούμε από κοντά λασπόλακκους που κοχλάζουν, θερμές πηγές και έντονους ατμούς.\n\nΗ εκδρομή ολοκληρώνεται με χαλάρωση στη Γαλάζια Λίμνη (Blue Lagoon), το πιο διάσημο γεωθερμικό σπα της Ισλανδίας, όπου θα έχουμε χρόνο για ξεκούραση και αναζωογόνηση στα γαλαζοπράσινα νερά.\n\nΕπιστροφή στο Ρέικιαβικ.',
        day8: '8η & 9η ημέρα: Ρέικιαβικ – Βαρσοβία – Λάρνακα\n\nΜετά το πρωινό, η μέρα είναι ελεύθερη μέχρι το απόγευμα, προσφέροντάς σας την ευκαιρία να απολαύσετε το Ρέικιαβικ με τον δικό σας ρυθμό. Μπορείτε να περπατήσετε στους πολύχρωμους δρόμους της πόλης, να επισκεφθείτε κάποια από τα μουσεία, να κάνετε τα τελευταία σας ψώνια ή απλώς να χαλαρώσετε σε ένα από τα πολλά καφέ της πρωτεύουσας.\n\nΓύρω στις 21:00 αναχωρούμε με κατεύθυνση το αεροδρόμιο για την πτήση της επιστροφής μας. Άφιξη στην Κύπρο το απόγευμα της 9ης ημέρας, έχοντας μαζί μας μοναδικές εικόνες, εμπειρίες και αναμνήσεις από ένα ανεπανάληπτο ταξίδι στην Ισλανδία.'
      },
      gallery: [
        '/images/destinations/iceland-fire-ice-hero.webp'
      ]
    }
  },
  {
    id: 50,
    title: 'ΝΕΑ ΥΟΡΚΗ — 9 Μέρες',
    destination: 'United States',
    category: 'Exotic Packages',
    price: 3349,
    duration: '9 days',
    description: 'Ανακαλύψτε τη μαγεία της Νέας Υόρκης: Μανχάταν, Μπρόντγουεϊ, Central Park, Statue of Liberty, Brooklyn Bridge και πολλά άλλα. Επισκεφτείτε μουσεία, γειτονιές και αξιοθέατα με διαμονή σε 4★ ξενοδοχείο στην Times Square.',
    longDescription: 'Ένα ολοκληρωμένο ταξίδι 9 ημερών στη Νέα Υόρκη, το «Μεγάλο Μήλο». Από το Μανχάταν και τη Μπρόντγουεϊ, στο Central Park, τη Γέφυρα του Μπρούκλιν, το One World Trade Center και τη Hudson Yards. Περιλαμβάνονται πτήσεις με Emirates μέσω Αθήνας, ξεναγήσεις, κρουαζιέρα, είσοδοι σε επιλεγμένα αξιοθέατα και διαμονή σε πολυτελές 4★ ξενοδοχείο στην Times Square.',
    image: '🇺🇸',
    featured: true,
    details: {
      departureDate: '03/07, 02/08, 13/08, 21/08, 10/10, 23/10',
      departureFrom: 'Larnaca',
      destinationFull: 'New York City, United States',
      monthAvailability: 'July, August, October',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Emirates Airlines',
      includedLuggage: '1 αποσκευή 23kg (Larnaca-Athens) + 2 αποσκευές 23kg (Athens-New York-Athens) + 1 χειραποσκευή ανά άτομο',
      coverImage: '/images/destinations/new-york-hero.webp',
      flights: [
        {
          direction: 'Departure',
          route: 'Larnaca (LCA) → Athens (ATH)',
          flight: 'Aegean / Olympic',
          time: 'Ενδεικτικά',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Departure',
          route: 'Athens (ATH) → New York (JFK/EWR)',
          flight: 'Emirates',
          time: 'Ενδεικτικά',
          luggage: '2 αποσκευές συμπεριλαμβάνονται'
        },
        {
          direction: 'Return',
          route: 'New York (JFK/EWR) → Athens (ATH)',
          flight: 'Emirates',
          time: 'Ενδεικτικά',
          luggage: '2 αποσκευές συμπεριλαμβάνονται'
        },
        {
          direction: 'Return',
          route: 'Athens (ATH) → Larnaca (LCA)',
          flight: 'Aegean / Olympic',
          time: 'Ενδεικτικά',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        }
      ],
      hotels: [
        // Option 1 – 03/07: double €3,349, single €4,429
        {
          name: '4★ Hotel New York – Marriott Marquis / Shelburne Sonesta (03/07)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/new-york-option1.webp',
          location: 'Times Square, New York, United States',
          boardBasis: 'Room Only',
          prices: {
            double: 3349,
            single: 4429
          },
          packagePrice: 6698,
          departureDate: '03/07',
          nights: 7
        },
        // Option 2 – 02/08: double €3,819, single €5,025
        {
          name: '4★ Hotel New York – Marriott Marquis / Shelburne Sonesta (02/08)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/new-york-option2.webp',
          location: 'Times Square, New York, United States',
          boardBasis: 'Room Only',
          prices: {
            double: 3819,
            single: 5025
          },
          packagePrice: 7638,
          departureDate: '02/08',
          nights: 7
        },
        // Option 3 – 13/08: double €3,479, single €4,685
        {
          name: '4★ Hotel New York – Marriott Marquis / Shelburne Sonesta (13/08)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/new-york-option3.webp',
          location: 'Times Square, New York, United States',
          boardBasis: 'Room Only',
          prices: {
            double: 3479,
            single: 4685
          },
          packagePrice: 6958,
          departureDate: '13/08',
          nights: 7
        },
        // Option 4 – 21/08: double €3,585, single €4,789
        {
          name: '4★ Hotel New York – Marriott Marquis / Shelburne Sonesta (21/08)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/new-york-option4.webp',
          location: 'Times Square, New York, United States',
          boardBasis: 'Room Only',
          prices: {
            double: 3585,
            single: 4789
          },
          packagePrice: 7170,
          departureDate: '21/08',
          nights: 7
        },
        // Option 5 – 10/10: double €3,745, single €5,195
        {
          name: '4★ Hotel New York – Marriott Marquis / Shelburne Sonesta (10/10)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/new-york-option5.webp',
          location: 'Times Square, New York, United States',
          boardBasis: 'Room Only',
          prices: {
            double: 3745,
            single: 5195
          },
          packagePrice: 7490,
          departureDate: '10/10',
          nights: 7
        },
        // Option 6 – 23/10: double €3,725, single €5,169
        {
          name: '4★ Hotel New York – Marriott Marquis / Shelburne Sonesta (23/10)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/new-york-option6.webp',
          location: 'Times Square, New York, United States',
          boardBasis: 'Room Only',
          prices: {
            double: 3725,
            single: 5169
          },
          packagePrice: 7450,
          departureDate: '23/10',
          nights: 7
        }
      ],
      included: [
        'Αεροπορικό εισιτήριο Λάρνακα – Αθήνα – Λάρνακα',
        'Αεροπορικά εισιτήρια με Emirates για Αθήνα – Νέα Υόρκη – Αθήνα',
        'Φόροι αεροδρομίων & επίναυλοι',
        'Μία (1) αποσκευή 23 κιλά στην πτήση Λάρνακα – Αθήνα και δύο (2) παραδοτέες αποσκευές κατ\' άτομο, μέχρι 23 κιλά η κάθε μία στις πτήσεις της Emirates',
        '7 βράδια διαμονή πάνω στην TIMES SQUARE στο πολυτελές MARRIOTT MARQUIS 4* sup. ή στο Shelburne Sonesta 4*',
        'ΔΩΡΕΑΝ Wi-Fi και στα δωμάτια',
        'Τοπικοί φόροι Ξενοδοχείων (City taxes)',
        'Τρεις πολυδιάστατες Ξεναγήσεις με έμπειρους και εξειδικευμένους Ελληνόφωνους ξεναγούς',
        'Ελληνόφωνη Ξενάγηση με πούλμαν στο Βόρειο Μανχάταν',
        'Ελληνόφωνη Ξενάγηση με πούλμαν στο Νότιο Μανχάταν',
        'ΔΩΡΟ: Κρουαζιέρα για φωτογράφηση αγάλματος Ελευθερίας, Νησί Ellis κλπ',
        'Βόλτα σε Chelsea Market, γέφυρα του Μπρούκλιν και Hudson Yards',
        'ΔΩΡΟ: Επίσκεψη στο Αμερικανικό Μουσείο Φυσικής Ιστορίας (American Museum of Natural History)',
        'Μεταφορά από και προς αεροδρόμιο/ξενοδοχείο στην Αμερική',
        'Έμπειρος Ελληνόφωνος αρχηγός-ξεναγός καθημερινά',
        'Αχθοφορικά μιας αποσκευής κατ\' άτομο στα ξενοδοχεία & αποθήκευσης την τελευταία μέρα',
        'Ασφάλεια αστικής ευθύνης',
        'Δικαίωμα συμμέτοχης στις προαιρετικές εκδρομές σε Ουάσινγκτον, Βοστόνη και Εκπτωτικό Χωριό Woodbury Common'
      ],
      notIncluded: [
        'Τοπικοί φόροι-Αχθοφορικά-Φιλοδωρήματα (ΟΧΙ Ξεναγών/Αρχηγών) υποχρεωτικά $50, πληρωτέα με την άφιξη',
        'Κόστος έκδοσης βίζας',
        'Ό,τι δεν αναγράφεται στα περιλαμβανόμενα'
      ],
      note: 'Η προ-επιλογή θέσεων στα γκρουπ δεν είναι πάντα εγγυημένη και στις περισσότερες αεροπορικές εταιρείες υπάρχει επιπλέον κόστος. Το πρόγραμμα πραγματοποιείται σε συνεργασία με το γραφείο Manessis στην Αθήνα. Οι πτήσεις Λάρνακα – Αθήνα – Λάρνακα που αναγράφονται είναι ενδεικτικές.',
      cancellationPolicy: 'Ακύρωση συμμετοχής μέχρι 45 μέρες πριν την αναχώρηση: παρακράτηση €50.00 για λειτουργικά έξοδα. 44–31 μέρες πριν: παρακράτηση 30% της αξίας. 30–21 μέρες πριν: παρακράτηση 50% της αξίας. 20 μέρες πριν: παρακράτηση 100%. Για charter, κρουαζιέρες, σκι, εκθέσεις, συνέδρια: ακυρωτικά έως 100% ανεξαρτήτως ημερομηνίας.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά την ώρα της κράτησης τους',
        'Με την κράτηση των ταξιδιωτικών πακέτων δίνετε προκαταβολή 30% της αξίας των πακέτων',
        'Η εξόφληση τους γίνεται 21 μέρες περίπου πριν την αναχώρηση',
        'Υπάρχει δυνατότητα ακύρωση των ταξιδιωτικών πακέτων βάσει των όρων και κανονισμών'
      ],
      program: {
        introduction: 'Καλωσορίσατε στο «Μεγάλο Μήλο»! Η Νέα Υόρκη αποτελείται από πέντε δήμους: Μανχάταν, Staten Island, Queens, Brooklyn και Bronx. Κάθε ουρανοξύστης είναι ένα μοναδικό δείγμα αρχιτεκτονικής, κάθε γειτονιά έχει το δικό της χρώμα και κουλτούρα, δημιουργώντας ένα μωσαϊκό εμπειριών που μένει αξέχαστο.',
        day1: '1η μέρα: Λάρνακα - Αθήνα - Νέα Υόρκη\n\nΣυνάντηση στο αεροδρόμιο και πτήση για Αθήνα. Παραλαβή αποσκευών και αναχώρηση για Νέα Υόρκη. Καλωσορίσατε στο «Μεγάλο Μήλο»! Η πρώτη γνωριμία μας με την πόλη ξεκινά με τη διαδρομή από το αεροδρόμιο προς το Μανχάταν. Η Νέα Υόρκη αποτελείται από πέντε δήμους: Μανχάταν, Staten Island, Queens, Brooklyn και Bronx. Τα νησιά συνδέονται με γέφυρες, σήραγγες και πορθμεία.\n\nΤακτοποίηση στο ξενοδοχείο μας, που βρίσκεται στην «καρδιά» του Μανχάταν. Όσοι το επιθυμούν (ανάλογα με την ώρα) μπορούν να βγουν για έναν πρώτο περίπατο στην πόλη, συνοδευόμενοι από τον ξεναγό μας.',
        day2: '2η μέρα: Νέα Υόρκη, Ξενάγηση: Βόρειο Μανχάταν\n\nΑρχίζουμε σήμερα την ξενάγησή μας από τον Οργανισμό Ηνωμένων Εθνών (ΟΗΕ). Βασικοί σκοποί του Οργανισμού αυτού είναι η διατήρηση της διεθνούς ειρήνης και ασφάλειας, η ανάπτυξη, η συνεργασία μεταξύ των Εθνών για την επίλυση διεθνών κρίσεων και η προώθηση της προστασίας των ανθρωπίνων δικαιωμάτων.\n\nΑκολουθεί η κυκλική πλατεία με το άγαλμα του Χριστόφορου Κολόμβου και το Λίνκολν Σέντερ, ένα συγκρότημα κτιρίων που στεγάζουν καλλιτεχνικούς οργανισμούς, όπως τη Φιλαρμονική της Νέας Υόρκης, τη Μητροπολιτική Όπερα και το φημισμένο Σχολείο Τεχνών Julliard.\n\nΣυνεχίζουμε προς το Central Park, τον σημαντικότερο πνεύμονα πρασίνου της αμερικανικής μεγαλούπολης, με τεχνητές λίμνες, περιποιημένους χώρους, παιδικές χαρές, γήπεδα αθλοπαιδιών και ζωολογικό κήπο.\n\nΑκολουθεί το Πανεπιστήμιο Columbia, τον μεγαλοπρεπέστερο «ναό» των ανθρωπιστικών σπουδών του κόσμου.\n\nΣυνεχίζουμε με το μνημείο του στρατηγού Ulysses Grant, τον ποταμό Χάντσον (Hudson) και το Χάρλεμ με το περίφημο Apollo Theatre.\n\nΑκολουθεί η ξακουστή 5η Λεωφόρος με το Μουσείο Guggenheim, το Μητροπολιτικό Μουσείο Τέχνης, τον Πύργο Trump, όλους τους Ευρωπαϊκούς οίκους μόδας και πολλά λαμπερά κοσμηματοπωλεία.\n\nΠροχωρούμε προς το Ροκφέλερ Σέντερ, ένα συγκρότημα 19 κτιρίων με καταστήματα, εστιατόρια και το Παρατηρητήριο Top of the Rock.\n\nΟλοκληρώνουμε την ξενάγησή μας στην Μπρόντγουεϊ, την «καρδιά» των θεάτρων. Το βράδυ ακολουθήστε τις προτάσεις του ξεναγού σας.',
        day3: '3η μέρα: Νέα Υόρκη, Συνέχεια Ξενάγησης: Νότιο Μανχάταν, Κρουαζιέρα\n\nΗ σημερινή μέρα ξεκινά με μια Κρουαζιέρα, κατά τη διάρκεια της οποίας θα θαυμάσουμε και θα φωτογραφίσουμε από το πλοιάριο τις αναπαλαιωμένες προβλήτες, το ιστορικό Ellis Island - χώρο υποδοχής των μεταναστών παλαιότερα - το Άγαλμα της Ελευθερίας, καθώς και το Στέιτεν Άιλαντ και το New Jersey.\n\nΑκολουθεί η επίσκεψή μας στο υπέροχο Chelsea Market, το «Food Mall» της Νέας Υόρκης, με δεκάδες διαφορετικές επιλογές, εισόδους, εξόδους και επιπλέον επιλογές για shopping και καλλιτεχνικές δραστηριότητες.\n\nΕπόμενος σταθμός μας το Χάι Λάιν (The High Line), ένα μακρόστενο πάρκο εγκατεστημένο πάνω σε εγκαταλελειμμένες υπερυψωμένες γραμμές τραίνου.\n\nΣυνεχίζοντας προς το νότιο άκρο του Μανχάταν (Lower Manhattan), θα δούμε την πασίγνωστη Wall Street, η οποία λειτουργεί ως καρδιά των μεγάλων επιχειρήσεων και είναι η έδρα του Χρηματιστηρίου της Νέας Υόρκης.\n\nΣτο «Σημείο Μηδέν» ορθώνεται σήμερα ο ουρανοξύστης «One World Trade Center», το ψηλότερο κτίριο της Νέας Υόρκης. Στον χώρο έχει επίσης ανεγερθεί το συγκρότημα «National September 11th Memorial and Museum», που περιλαμβάνει ένα υπόγειο μουσείο και δύο πισίνες-μνημεία.\n\nΣτη συνέχεια θα δούμε τον ολόλευκο σταθμό του Μετρό στο Παγκόσμιο Κέντρο Εμπορίου, τον επιβλητικό Oculus, ένα ορόσημο αρχιτεκτονικής που σχεδίασε ο διάσημος Ισπανός αρχιτέκτονας Σαντιάγο Καλατράβα.\n\nΤέλος θα δούμε την καινούργια γειτονιά Hudson Yards, την μεγαλύτερη ανάπτυξη ακινήτων από ιδιώτη στην ιστορία των ΗΠΑ μετά το Rockefeller Center. Στο κέντρο δεσπόζει το εντυπωσιακό «Vessel».',
        day4: '4η μέρα: Νέα Υόρκη, Συνέχεια Ξενάγησης, Γέφυρα του Μπρούκλιν, Hudson Yards\n\nΠρώτη επίσκεψη της σημερινής ημέρας ο Σιδηροδρομικός Σταθμός Γκραντ Σέντραλ (Grand Central) της Νέας Υόρκης, που άρχισε να λειτουργεί από το 1913 και έγινε σήμα κατατεθέν της πόλης.\n\nΛίγο πιο κάτω βλέπουμε το Flatiron Building, ένας πρωτοποριακός ουρανοξύστης κτισμένος σε τριγωνικό μπλοκ μεταξύ 5ης Λεωφόρου και Broadway.\n\nΈπεται το Πανεπιστήμιο της Νέας Υόρκης (NYU), που ιδρύθηκε το 1831 και έχει προσελκύσει για σπουδές συγγραφείς, μουσικούς, καλλιτέχνες και διανοούμενους.\n\nΗ περιήγησή μας συνεχίζεται σε γνωστές γειτονιές του Μανχάταν όπως το Γκρίνουιτς Βίλατζ και το Σόχο, τη γειτονιά του 19ου αιώνα που είναι γεμάτη γκαλερί, μπουτίκ και εστιατόρια.\n\nΦθάνουμε στην «Μικρή Ιταλία», με πολλά Ιταλικά εστιατόρια και καταστήματα. Προχωρούμε προς την Τσάιναταουν, μία από τις μεγαλύτερες περιοχές Ασιατών που ζουν εκτός Ασίας.\n\nΣυνεχίζουμε με την μαγική Γέφυρα του Μπρούκλιν (Brooklyn). Είναι η πρώτη κρεμαστή με χαλύβδινα καλώδια γέφυρα στον κόσμο και συνδέει από το 1883 το Μανχάταν με το Μπρούκλιν. Περπατώντας, αγναντεύουμε τη θέα και στο μυαλό μας έρχονται αμέτρητες εικόνες από ταινίες και τηλεοπτικές σειρές.\n\nΤέλος, θα δούμε σήμερα από κοντά την Hudson Yards, την μεγαλύτερη ιδιωτική επένδυση σε ανοικοδόμηση (25 δισ. δολάρια) στην ιστορία των ΗΠΑ μετά το κέντρο Ροκφέλερ. Στο κέντρο του βρίσκεται το Vessel, το εντυπωσιακό κτίριο-γλυπτό, που μοιάζει με τεράστια κυψέλη.',
        day5: '5η μέρα: Νέα Υόρκη, Εκπτωτικό Χωριό Woodbury Common Outlets (Προαιρετικό)\n\nΣήμερα μπορούμε να περάσουμε την ημέρα μας στο Woodbury Common, έναν «παράδεισο» καταστημάτων, μόλις 1,15\' από το Μανχάταν. Το Woodbury Common Premium Outlets διαθέτει πάνω από 220 μπουτίκ και καταστήματα, που προσφέρουν τη μεγαλύτερη συλλογή των καλύτερων σχεδιαστών και εμπορικών σημάτων στον κόσμο, με προσφορές που κυμαίνονται από 20% έως και 70%.\n\nΕναλλακτικά, σας προτείνουμε να επισκεφθείτε το Metropolitan Museum of Art (The MET), ένα από τα μεγαλύτερα και σημαντικότερα μουσεία τέχνης στον κόσμο. Οι συλλογές του περιλαμβάνουν περίπου δύο εκατομμύρια έργα τέχνης, που καλύπτουν περισσότερα από 5.000 χρόνια ιστορίας.\n\nΤο απόγευμα σας προτείνουμε να κάνετε μια βόλτα στην Tribeca και κυρίως στο Soho. Το βράδυ το East, το West και το Greenwich Village είναι από τις γειτονιές που καταγράφονται στους οδηγούς ως must - ειδικά για τη νυχτερινή τους ζωή.',
        day6: '6η μέρα: Νέα Υόρκη, Ουάσινγκτον DC (Προαιρετικό)\n\nΓια τη σημερινή ελεύθερη μέρα σας προτείνουμε μια ολοήμερη εκδρομή στην Washington D.C., την πρωτεύουσα των Ηνωμένων Πολιτειών της Αμερικής. Είναι η έδρα της κυβέρνησης των ΗΠΑ και εκεί βρίσκονται ο Λευκός Οίκος, το Κογκρέσο και το Ανώτατο Δικαστήριο.\n\nΒλέπουμε το Καπιτώλιο, τον Λευκό Οίκο, το Κοιμητήριο του Άρλινγκτον με τα μνήματα των Κένεντι, το Λίνκολν Μεμόριαλ και άλλα αξιοθέατα.\n\nΌσοι προτιμήσετε να παραμείνετε στη Νέα Υόρκη, σας προτείνουμε να επισκεφθείτε το μουσείο «Solomon R. Guggenheim», το «Museum of Modern Art» (MoMA), ή τη μεγαλοπρεπή Δημόσια Βιβλιοθήκη της Νέας Υόρκης.',
        day7: '7η μέρα: Νέα Υόρκη, Βοστόνη (Προαιρετικό)\n\nΗμέρα ελεύθερη για όσους θέλουν να επισκεφθούν μουσεία και διάφορα αξιοθέατα της πόλης ή να συνδυάσουν βόλτες και ψώνια στην πλούσια αγορά της.\n\nΕμείς σας προτείνουμε μια ολοήμερη εκδρομή σε μία από τις αρχαιότερες πόλεις των ΗΠΑ: τη Βοστόνη. Η πόλη ιδρύθηκε το 1630 από τους Άγγλους και αποτέλεσε τον τόπο όπου έλαβαν χώρα πολλά σημαντικά γεγονότα της Αμερικανικής Επανάστασης.\n\nΘα επισκεφθούμε Πανεπιστήμια διεθνούς φήμης, όπως το Harvard και το MIT, θα δούμε τον πύργο Prudential και διάφορα Βικτωριανά κτίρια, θα περάσουμε από το Symphony Hall, έδρα της Συμφωνικής Ορχήστρας της Βοστόνης.',
        day8: '8η-9η μέρα: Νέα Υόρκη – Αθήνα – Λάρνακα\n\nΤελευταία μέρα της εκδρομής σήμερα και σας ΠΡΟΣΦΕΡΟΥΜΕ ΔΩΡΕΑΝ επίσκεψη στο Αμερικανικό Μουσείο Φυσικής Ιστορίας (American Museum of Natural History). Το Αμερικανικό Μουσείο Φυσικής Ιστορίας είναι ένας «υποχρεωτικός προορισμός» για όσους ενδιαφέρονται για τον φυσικό κόσμο. Εκτείνεται σε τέσσερα οικοδομικά τετράγωνα και αποτελείται από 28 ενωμένα μεταξύ τους κτίρια, καθιστώντας το, το μεγαλύτερο μουσείο φυσικής ιστορίας στον κόσμο.\n\nΣτο μουσείο φιλοξενεί περισσότερα από 33 εκατομμύρια δείγματα φυτών, ζώων, απολιθωμάτων, ορυκτών και πετρωμάτων, μετεωριτών, ανθρώπινων οστών, αλλά και ανθρώπινων πολιτισμικών τέχνεργων. Επίσης, διαθέτει πλανητάριο και βιβλιοθήκη.\n\nΜεταφορά στο αεροδρόμιο και πτήση για την Αθήνα. Άφιξη την επόμενη μέρα παραλαβή αποσκευών και πτήση για Λάρνακα.'
      },
      gallery: [
        '/images/destinations/new-york-hero.webp'
      ]
    }
  },
  {
    id: 51,
    title: 'ΑΡΓΕΝΤΙΝΗ – ΒΡΑΖΙΛΙΑ – ΚΑΤΑΡΡΑΚΤΕΣ ΙΓΚΟΥΑΣΟΥ',
    destination: 'Argentina, Brazil',
    category: 'Exotic Packages',
    price: 4349,
    duration: '12 days',
    description: 'Ανακαλύψτε την Αργεντινή και τη Βραζιλία: Μπουένος Άιρες, Καταρράκτες Ιγκουασού και Ρίο Ντε Τζανέιρο. Επισκεφτείτε το Άγαλμα του Χριστού Λυτρωτή, το Sugarloaf Mountain, παραδοσιακά ράντζο και απολαύστε σόου Τάνγκο με διαμονή σε 4★ ξενοδοχεία.',
    longDescription: 'Ένα ολοκληρωμένο ταξίδι 12 ημερών στην Αργεντινή και τη Βραζιλία. Από το Μπουένος Άιρες με το σόου Τάνγκο και τα ράντζο, στους Καταρράκτες Ιγκουασού (ένα από τα Επτά Θαύματα της Φύσης), και το Ρίο Ντε Τζανέιρο με το Άγαλμα του Χριστού Λυτρωτή και το Sugarloaf Mountain. Περιλαμβάνονται πτήσεις με Lufthansa μέσω Φρανκφούρτης, εσωτερικές πτήσεις, ξεναγήσεις, είσοδοι σε επιλεγμένα αξιοθέατα και διαμονή σε επιλεγμένα 4★ ξενοδοχεία.',
    image: '🇦🇷🇧🇷',
    featured: true,
    details: {
      departureDate: '21/07, 06/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Buenos Aires, Iguazu Falls, Rio de Janeiro – Argentina & Brazil',
      monthAvailability: 'July, August',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Lufthansa',
      includedLuggage: '1 αποσκευή 23kg + 1 χειραποσκευή 7kg (εσωτερικές πτήσεις: 15kg)',
      coverImage: '/images/destinations/argentina-brazil-iguazu-hero.webp',
      flights: [
        {
          direction: 'Departure',
          route: 'Larnaca (LCA) → Frankfurt (FRA)',
          flight: 'Lufthansa',
          time: '16:50 → (ενδεικτικά)',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Departure',
          route: 'Frankfurt (FRA) → Buenos Aires (EZE)',
          flight: 'Lufthansa',
          time: '→ 06:25 (επόμενη μέρα)',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Internal',
          route: 'Buenos Aires → Iguazu',
          flight: 'Internal',
          time: 'Εσωτερική πτήση',
          luggage: '15kg συμπεριλαμβάνεται'
        },
        {
          direction: 'Internal',
          route: 'Iguazu → Rio de Janeiro (GIG)',
          flight: 'Internal',
          time: 'Εσωτερική πτήση',
          luggage: '15kg συμπεριλαμβάνεται'
        },
        {
          direction: 'Return',
          route: 'Rio de Janeiro (GIG) → Frankfurt (FRA)',
          flight: 'Lufthansa',
          time: '16:15 → (ενδεικτικά)',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Return',
          route: 'Frankfurt (FRA) → Larnaca (LCA)',
          flight: 'Lufthansa',
          time: '→ 15:45',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        }
      ],
      hotels: [
        // Option 1 – 21/07: double €4,349, single €5,085
        {
          name: '4★ Hotels - Buenos Aires / Iguazu / Rio de Janeiro (21/07)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/argentina-brazil-option1.webp',
          location: 'Buenos Aires / Iguazu / Rio de Janeiro, Argentina & Brazil',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 4349,
            single: 5085
          },
          packagePrice: 8698,
          departureDate: '21/07',
          nights: 9
        },
        // Option 2 – 06/08: double €4,399, single €5,135
        {
          name: '4★ Hotels - Buenos Aires / Iguazu / Rio de Janeiro (06/08)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/argentina-brazil-option2.webp',
          location: 'Buenos Aires / Iguazu / Rio de Janeiro, Argentina & Brazil',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 4399,
            single: 5135
          },
          packagePrice: 8798,
          departureDate: '06/08',
          nights: 9
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Μπουένος Άιρες & Ρίο Ντε Τζανέιρο – Λάρνακα με Lufthansa',
        'Εσωτερικές πτήσεις Μπουένος Άιρες – Ιγκουασού – Ρίο Ντε Τζανέιρο',
        'Φόροι αεροδρομίων & επίναυλοι καυσίμων',
        'Διαμονή σε ξενοδοχεία 4* με πρόγευμα',
        'Early check-in & πρόγευμα κατά την άφιξη στο Μπουένος Άιρες',
        'Σόου Τάνγκο με δείπνο & ποτό',
        'Μεταφορές, εκδρομές & ξεναγήσεις όπως στο πρόγραμμα',
        'Εισιτήρια εισόδων: Recoleta, Iguazu Parks, Sugarloaf, Corcovado',
        'Έμπειρος αρχηγός / συνοδός',
        '1 αποσκευή 23kg + 1 χειραποσκευή 7kg',
        'Υπηρεσίες τοπικών αντιπροσώπων'
      ],
      notIncluded: [
        'Φιλοδωρήματα & αχθοφορικά',
        'Προαιρετικές εκδρομές (Estancia El Ombú de Areco – €170, Samba Experience – €70)',
        'Ό,τι δεν αναφέρεται ρητά'
      ],
      note: 'Σε εσωτερικές πτήσεις επιτρέπονται 15kg αποσκευής. Οι ώρες πτήσεων είναι ενδεικτικές και ενδέχεται να διαφοροποιηθούν από την αεροπορική εταιρεία.',
      cancellationPolicy: 'Σε περίπτωση ακύρωσης έως 45 ημέρες πριν την αναχώρηση: €50 ανά άτομο. 44–31 ημέρες πριν: 30% της συνολικής τιμής. 30–21 ημέρες πριν: 50% της συνολικής τιμής. 20–0 ημέρες πριν: 100% της συνολικής τιμής. Σε περίπτωση μη εμφάνισης (no-show): 100% της συνολικής τιμής.',
      termsAndConditions: [
        'Προκαταβολή 30% με την κράτηση',
        'Εξόφληση 21 ημέρες πριν την αναχώρηση',
        'Ακυρωτικά βάσει ημερών πριν την αναχώρηση, σύμφωνα με την πολιτική ακύρωσης'
      ],
      program: {
        introduction: 'Ένα μοναδικό ταξίδι στην Αργεντινή και τη Βραζιλία, από το Μπουένος Άιρες με το σόου Τάνγκο και την πολιτιστική κληρονομιά, στους Καταρράκτες Ιγκουασού (ένα από τα Επτά Θαύματα της Φύσης), και το Ρίο Ντε Τζανέιρο με τα εμβληματικά αξιοθέατα και τη ζωντανή κουλτούρα της Σάμπα.',
        day1: '1η – 2η Μέρα: Λάρνακα – Φρανκφούρτη – Μπουένος Άιρες\n\nΣυγκέντρωση στο αεροδρόμιο Λάρνακας και αναχώρηση για το Μπουένος Άιρες με ενδιάμεση αλλαγή αεροσκάφους στη Φρανκφούρτη. Άφιξη την επόμενη ημέρα νωρίς το πρωί. Υποδοχή από τους τοπικούς μας αντιπροσώπους και μεταφορά στο ξενοδοχείο. Πρόγευμα και άμεση παραλαβή δωματίων για ξεκούραση μετά το υπερατλαντικό ταξίδι. Ελεύθερος χρόνος για πρώτη γνωριμία με την πόλη. Διανυκτέρευση.',
        day2: '3η Μέρα: Μπουένος Άιρες (Ξενάγηση) – Σόου Τάνγκο\n\nΞενάγηση στα σημαντικότερα αξιοθέατα της πόλης: Plaza de Mayo, Casa Rosada, Μητροπολιτικός Καθεδρικός Ναός, περιοχές Palermo, Recoleta και Retiro, Κοιμητήριο Recoleta με τον τάφο της Evita Peron, Puerto Madero, San Telmo και La Boca (Caminito).\n\nΤο βράδυ δείπνο και εντυπωσιακό σόου Τάνγκο στο Café de los Angelitos με ποτό. Διανυκτέρευση.',
        day3: '4η Μέρα: Μπουένος Άιρες – Ράντζο Estancia El Ombú de Areco (Προαιρετικό)\n\nΠροαιρετική ολοήμερη εκδρομή στο San Antonio de Areco και στο παραδοσιακό ράντζο Estancia El Ombú de Areco. Εμπειρία ζωής γκάουτσος με ιππασία ή άμαξα, παραδοσιακές empanadas, αυθεντικό αργεντίνικο asado BBQ, φολκλορική μουσική και επίδειξη δεξιοτήτων. Επιστροφή στο Μπουένος Άιρες. Διανυκτέρευση.',
        day4: '5η Μέρα: Μπουένος Άιρες – Καταρράκτες Ιγκουασού\n\nΜεταφορά στο αεροδρόμιο και πτήση για Ιγκουασού. Άφιξη, υποδοχή και μεταφορά στο ξενοδοχείο. Χρόνος ελεύθερος. Διανυκτέρευση.',
        day5: '6η Μέρα: Καταρράκτες Ιγκουασού (Αργεντινή πλευρά)\n\nΞενάγηση στο Εθνικό Πάρκο Ιγκουασού: Κάτω Διαδρομή, Άνω Διαδρομή και το εντυπωσιακό «Λαρύγγι του Διαβόλου». Ένα από τα Επτά Θαύματα της Φύσης και Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO. Επιστροφή στο ξενοδοχείο. Διανυκτέρευση.',
        day6: '7η Μέρα: Καταρράκτες Ιγκουασού (Βραζιλία πλευρά) – Ρίο Ντε Τζανέιρο\n\nΕπίσκεψη στο Εθνικό Πάρκο Ιγκουασού από τη βραζιλιάνικη πλευρά με πανοραμικές διαδρομές, ανελκυστήρα και εξέδρες θέας. Μεταφορά στο αεροδρόμιο και πτήση για Ρίο Ντε Τζανέιρο. Άφιξη και μεταφορά στο ξενοδοχείο. Διανυκτέρευση.',
        day7: '8η Μέρα: Ρίο Ντε Τζανέιρο – Ξενάγηση – Χριστός Λυτρωτής\n\nΠανοραμική ξενάγηση στο Ρίο με ανάβαση στον λόφο Κορκοβάδο με οδοντωτό τρένο και επίσκεψη στο Άγαλμα του Χριστού Λυτρωτή. Πανοραμική θέα της πόλης. Γεύμα σε τοπικό εστιατόριο. Διανυκτέρευση.',
        day8: '9η Μέρα: Ρίο Ντε Τζανέιρο – Ζαχαρόψωμο\n\nΑνάβαση με τελεφερίκ στο Πάο ντε Ασούκαρ (Sugarloaf Mountain) μέσω Morro da Urca. Πανοραμική θέα 360°. Διανυκτέρευση.',
        day9: '10η Μέρα: Ρίο Ντε Τζανέιρο – Samba Experience (Προαιρετικό)\n\nΠροαιρετική εμπειρία «Ψυχή της Σάμπα» στη Cidade do Samba με κοστούμια, ιστορία Καρναβαλιού και caipirinha. Διανυκτέρευση.',
        day10: '11η – 12η Μέρα: Ρίο Ντε Τζανέιρο – Φρανκφούρτη – Λάρνακα\n\nΕλεύθερος χρόνος στο Ρίο. Μεταφορά στο αεροδρόμιο και πτήση επιστροφής μέσω Φρανκφούρτης. Άφιξη στη Λάρνακα την 12η ημέρα.'
      },
      gallery: [
        '/images/destinations/argentina-brazil-iguazu-hero.webp'
      ]
    }
  },
  {
    id: 52,
    title: 'ΝΟΤΙΑ ΑΦΡΙΚΗ',
    destination: 'South Africa',
    category: 'Exotic Packages',
    price: 4655,
    duration: '12 days',
    description: 'Ανακαλύψτε τη Νότια Αφρική: Γιοχάνεσμπουργκ, Σαν Σίτυ, Εθνικό Πάρκο Pilansberg με σαφάρι, και Κέιπ Τάουν με το Table Mountain. Επισκεφτείτε πολιτιστικά χωριά, παρατηρήστε άγρια ζώα και απολαύστε τα Winelands με διαμονή σε 4★ & 5★ ξενοδοχεία.',
    longDescription: 'Ένα ολοκληρωμένο ταξίδι 12 ημερών στη Νότια Αφρική. Από το Γιοχάνεσμπουργκ και το Σαν Σίτυ, στο Εθνικό Πάρκο Pilansberg με σαφάρι για παρατήρηση ελεφάντων, λιονταριών και ρινόκερων, και το Κέιπ Τάουν με το Table Mountain, Cape Point και τα Winelands. Περιλαμβάνονται πτήσεις με Emirates μέσω Ντουμπάι, εσωτερική πτήση, σαφάρι, ξεναγήσεις, είσοδοι σε επιλεγμένα αξιοθέατα και διαμονή σε επιλεγμένα 4★ & 5★ ξενοδοχεία.',
    image: '🇿🇦',
    featured: true,
    details: {
      departureDate: '10/08, 12/10',
      departureFrom: 'Larnaca',
      destinationFull: 'Johannesburg, Sun City, Pilansberg Game Reserve, Cape Town – South Africa',
      monthAvailability: 'August, October',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Emirates Airlines',
      includedLuggage: '1 αποσκευή 30kg (διεθνείς πτήσεις) + 1 αποσκευή 23kg (εσωτερική πτήση) + 1 χειραποσκευή ανά άτομο',
      coverImage: '/images/destinations/south-africa-hero.webp',
      flights: [
        {
          direction: 'Departure',
          route: 'Larnaca (LCA) → Dubai (DXB)',
          flight: 'EK 110',
          time: '20:10 → 01:05',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Departure',
          route: 'Dubai (DXB) → Johannesburg (JNB)',
          flight: 'EK 761',
          time: '04:05 → 10:15',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Internal',
          route: 'Johannesburg (JNB) → Cape Town (CPT)',
          flight: 'Internal',
          time: 'Εσωτερική πτήση',
          luggage: '1 αποσκευή 23kg συμπεριλαμβάνεται'
        },
        {
          direction: 'Return',
          route: 'Cape Town (CPT) → Dubai (DXB)',
          flight: 'EK 771',
          time: '18:25 → 05:50 (επόμενη μέρα)',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Return',
          route: 'Dubai (DXB) → Larnaca (LCA)',
          flight: 'EK 109',
          time: '07:55 → 11:00',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        }
      ],
      hotels: [
        // Departure 10/08 – double €4,655, single €5,515, triple €4,655
        {
          name: '4★ & 5★ Hotels - South Africa (10/08)',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/south-africa-option1.webp',
          location: 'Johannesburg / Sun City / Pilansberg / Cape Town, South Africa',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 4655,
            single: 5515,
            triple: 4655
          },
          packagePrice: 9310,
          departureDate: '10/08',
          nights: 9
        },
        // Departure 12/10 – double €4,919, single €5,875, triple €4,919
        {
          name: '4★ & 5★ Hotels - South Africa (12/10)',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/south-africa-option2.webp',
          location: 'Johannesburg / Sun City / Pilansberg / Cape Town, South Africa',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 4919,
            single: 5875,
            triple: 4919
          },
          packagePrice: 9838,
          departureDate: '12/10',
          nights: 9
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Emirates',
        'Εσωτερική πτήση Johannesburg – Cape Town',
        'Διαμονή σε ξενοδοχεία 4* & 5* με πρόγευμα',
        'Σαφάρι στο Pilansberg (2 απογευματινά & 1 πρωινό)',
        'Μεταφορές, εκδρομές & ξεναγήσεις',
        '3 γεύματα/δείπνα',
        'Ελληνόφωνος ξεναγός & αρχηγός από Κύπρο',
        'Αποσκευές: 30kg διεθνείς / 23kg εσωτερική πτήση'
      ],
      notIncluded: [
        'Ό,τι δεν αναφέρεται ρητά στο πρόγραμμα'
      ],
      note: '',
      cancellationPolicy: 'Σε περίπτωση ακύρωσης έως 45 ημέρες πριν την αναχώρηση: €50 ανά άτομο. 44–31 ημέρες πριν: 30% της συνολικής τιμής. 30–21 ημέρες πριν: 50% της συνολικής τιμής. 20–0 ημέρες πριν / No show: 100% της συνολικής τιμής.',
      termsAndConditions: [
        'Προκαταβολή 30% με την κράτηση',
        'Εξόφληση 21 ημέρες πριν την αναχώρηση',
        'Ακυρωτικά βάσει ημερών πριν την αναχώρηση, σύμφωνα με την πολιτική ακύρωσης'
      ],
      program: {
        introduction: 'Ταξιδεύοντας σήμερα στη Δημοκρατία της Νοτίου Αφρικής, θα γνωρίσετε μια χώρα με ιδιαίτερη φυσική κληρονομιά. Ένας τόπος γεμάτος αντιθέσεις, που συνδυάζει το μεσογειακό κλίμα με τις θαυμάσιες παραλίες, τους υπέροχους αμπελώνες της επαρχίας του Ακρωτηρίου με το ξηρό και άνυδρο τοπίο της σαβάνας.',
        day1: '1η & 2η Μέρα: Λάρνακα – Γιοχάνεσμπουργκ\n\nΣυγκέντρωση στο αεροδρόμιο Λάρνακας και αναχώρηση με πτήση της Emirates προς Γιοχάνεσμπουργκ με ενδιάμεση στάση στο Ντουμπάι. Άφιξη στο Γιοχάνεσμπουργκ και υποδοχή από τον τοπικό μας αντιπρόσωπο/ξεναγό. Πανοραμική ξενάγηση καθ\' οδόν προς το ξενοδοχείο. Τακτοποίηση στο ξενοδοχείο, το οποίο συνδέεται απευθείας με το Sandton City Mall. Ελεύθερος χρόνος στο Nelson Mandela Square. Διανυκτέρευση.',
        day2: '3η Μέρα: Γιοχάνεσμπουργκ – Πολιτιστικό Χωριό Lesedi & Πάρκο Λιονταριών\n\nΟλοήμερη εμπειρία πολιτισμού και άγριας ζωής. Επίσκεψη στο Πολιτιστικό Χωριό Lesedi με παραστάσεις και γνωριμία φυλών Ζουλού, Κόζα, Πέντι, Μπασόθο και Ντεμπέλε. Συνεχίζουμε σε πάρκο λιονταριών για παρατήρηση άγριων ζώων. Επιστροφή στο ξενοδοχείο. Διανυκτέρευση.',
        day3: '4η Μέρα: Γιοχάνεσμπουργκ – Πρετόρια – Αφρικανική Αγορά – Σαν Σίτυ\n\nΠανοραμική ξενάγηση στην Πρετόρια και στάση στα Union Buildings. Επίσκεψη σε παραδοσιακή αφρικανική αγορά και συνέχεια για το Σαν Σίτυ. Τακτοποίηση στο ξενοδοχείο και ελεύθερος χρόνος στο resort. Διανυκτέρευση.',
        day4: '5η Μέρα: Σαν Σίτυ (Ελεύθερη Ημέρα)\n\nΕλεύθερη ημέρα στο Σαν Σίτυ. Προαιρετικές δραστηριότητες: Valley of Waves, σαφάρι με αερόστατο, καζίνο, spa, golf, segway. Διανυκτέρευση.',
        day5: '6η Μέρα: Σαν Σίτυ – Εθνικό Πάρκο Pilansberg (Απογευματινό Σαφάρι)\n\nΜεταφορά στο Pilansberg Game Reserve. Τακτοποίηση στο lodge. Απογευματινό σαφάρι 4x4 διάρκειας 3 ωρών με έμπειρους rangers για παρατήρηση ελεφάντων, λιονταριών, ρινόκερων και άλλων ειδών. Δείπνο & διανυκτέρευση.',
        day6: '7η Μέρα: Pilansberg – Πρωινό & Απογευματινό Σαφάρι\n\nΠρωινό σαφάρι στις 06:00. Επιστροφή για πρόγευμα και ελεύθερος χρόνος στο lodge. Το απόγευμα νέο σαφάρι 4x4. Δείπνο & διανυκτέρευση.',
        day7: '8η Μέρα: Πτήση για Κέιπ Τάουν\n\nΜεταφορά στο αεροδρόμιο και πτήση για Κέιπ Τάουν. Εφόσον το επιτρέπουν οι καιρικές συνθήκες, επίσκεψη στο Table Mountain. Τακτοποίηση στο ξενοδοχείο και βόλτα στο V&A Waterfront. Διανυκτέρευση.',
        day8: '9η Μέρα: Κέιπ Τάουν – Cape Point\n\nΟλοήμερη εκδρομή στο Cape Point μέσω Camps Bay, Hout Bay και Chapman\'s Peak Drive. Επίσκεψη στο Cape of Good Hope Nature Reserve και στην παραλία Boulders με τους αφρικανικούς πιγκουίνους. Επιστροφή στο ξενοδοχείο. Διανυκτέρευση.',
        day9: '10η Μέρα: Κέιπ Τάουν – Winelands\n\nΕκδρομή στα Winelands με στάσεις σε Franschhoek και Stellenbosch. Επίσκεψη σε οινοποιείο με γευσιγνωσία και ελαφρύ γεύμα. Επιστροφή στο Κέιπ Τάουν. Διανυκτέρευση.',
        day10: '11η & 12η Μέρα: Κέιπ Τάουν – Λάρνακα\n\nΞενάγηση στην πόλη με επίσκεψη στη συνοικία Bo-Kaap και στον Βοτανικό Κήπο Kirstenbosch. Μεταφορά στο αεροδρόμιο και πτήση επιστροφής μέσω Ντουμπάι. Άφιξη στη Λάρνακα την 12η ημέρα.'
      },
      gallery: [
        '/images/destinations/south-africa-hero.webp'
      ]
    }
  },
  {
    id: 53,
    title: 'ΑΥΣΤΡΑΛΙΑ – ΜΙΑ ΗΠΕΙΡΟΣ, ΑΠΕΙΡΕΣ ΕΜΠΕΙΡΙΕΣ',
    destination: 'Australia',
    category: 'Exotic Packages',
    price: 5295,
    duration: '12 days',
    description: 'Ανακαλύψτε την Αυστραλία: Μελβούρνη και Σίδνεϋ. Επισκεφτείτε το Great Ocean Road, τους Δώδεκα Απόστολους, Phillip Island με πιγκουίνους, Blue Mountains, και απολαύστε κρουαζιέρα στο λιμάνι του Σίδνεϋ με διαμονή σε 4★ ξενοδοχεία.',
    longDescription: 'Ένα ολοκληρωμένο ταξίδι 12 ημερών στην Αυστραλία. Από τη Μελβούρνη με το Great Ocean Road, τους Δώδεκα Απόστολους και το Phillip Island, στο Σίδνεϋ με το Opera House, Harbour Bridge, Blue Mountains και κρουαζιέρα παρακολούθησης φαλαινών. Περιλαμβάνονται πτήσεις με Emirates μέσω Ντουμπάι, εσωτερική πτήση, ξεναγήσεις, κρουαζιέρες, είσοδοι σε επιλεγμένα αξιοθέατα και διαμονή σε επιλεγμένα 4★ ξενοδοχεία.',
    image: '🇦🇺',
    featured: true,
    details: {
      departureDate: '17/10, 05/11',
      departureFrom: 'Larnaca',
      destinationFull: 'Melbourne, Great Ocean Road, Phillip Island, Sydney, Blue Mountains – Australia',
      monthAvailability: 'October, November',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Emirates Airlines',
      includedLuggage: '1 αποσκευή 23kg + 1 χειραποσκευή 10kg ανά άτομο',
      coverImage: '/images/destinations/australia-hero.webp',
      flights: [
        {
          direction: 'Departure',
          route: 'Larnaca (LCA) → Dubai (DXB)',
          flight: 'EK 110',
          time: '20:10 → 01:05 (επόμενη μέρα)',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Departure',
          route: 'Dubai (DXB) → Melbourne (MEL)',
          flight: 'EK 408',
          time: '03:00 → 23:20 (επόμενη μέρα)',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Internal',
          route: 'Melbourne (MEL) → Sydney (SYD)',
          flight: 'Internal',
          time: 'Εσωτερική πτήση',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Return',
          route: 'Sydney (SYD) → Dubai (DXB)',
          flight: 'EK 413',
          time: '21:45 → 05:15 (επόμενη μέρα)',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        },
        {
          direction: 'Return',
          route: 'Dubai (DXB) → Larnaca (LCA)',
          flight: 'EK 109',
          time: '07:35 → 09:40',
          luggage: '1 αποσκευή συμπεριλαμβάνεται'
        }
      ],
      hotels: [
        // Departure 17/10 – double €5,295, single €6,269
        {
          name: '4★ Hotels - Melbourne / Sydney (17/10)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/australia-option1.webp',
          location: 'Melbourne / Sydney, Australia',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 5295,
            single: 6269
          },
          packagePrice: 10590,
          departureDate: '17/10',
          nights: 9
        },
        // Departure 05/11 – double €5,375, single €6,409
        {
          name: '4★ Hotels - Melbourne / Sydney (05/11)',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/australia-option2.webp',
          location: 'Melbourne / Sydney, Australia',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 5375,
            single: 6409
          },
          packagePrice: 10750,
          departureDate: '05/11',
          nights: 9
        }
      ],
      included: [
        'Διεθνείς & εσωτερικές πτήσεις',
        'Διαμονή σε ξενοδοχεία 4* με πρόγευμα',
        'Όλες οι μεταφορές & ξεναγήσεις',
        'Κρουαζιέρα με δείπνο στο Σίδνεϋ',
        'Κρουαζιέρα παρακολούθησης φαλαινών',
        'Εισιτήρια σε όλα τα αξιοθέατα',
        'Αρχηγός/συνοδός γραφείου',
        '1 αποσκευή 23kg & 1 χειραποσκευή 10kg'
      ],
      notIncluded: [
        'Ποτά στα γεύματα',
        'Φιλοδωρήματα & προσωπικά έξοδα',
        'Προαιρετικές δραστηριότητες'
      ],
      note: '',
      cancellationPolicy: 'Σε περίπτωση ακύρωσης έως 45 ημέρες πριν την αναχώρηση: €50 ανά άτομο. 44–31 ημέρες πριν: 30% της συνολικής τιμής. 30–21 ημέρες πριν: 50% της συνολικής τιμής. <20 ημέρες ή no-show: 100% της συνολικής τιμής.',
      termsAndConditions: [
        'Προκαταβολή 30% με την κράτηση',
        'Εξόφληση 21 ημέρες πριν την αναχώρηση',
        'Ακυρωτικά βάσει ημερών πριν την αναχώρηση, σύμφωνα με την πολιτική ακύρωσης'
      ],
      program: {
        introduction: 'Η Αυστραλία, μια ήπειρος γεμάτη φυσική ομορφιά, μοναδική άγρια ζωή, πολυπολιτισμικές πόλεις και απέραντες παραλίες. Από τη Μελβούρνη με το Great Ocean Road και τους Δώδεκα Απόστολους, στο Σίδνεϋ με το Opera House, Harbour Bridge και τα Blue Mountains, ανακαλύψτε έναν κόσμο γεμάτο εμπειρίες.',
        day1: '1η & 2η Μέρα: Λάρνακα – Ντουμπάι – Μελβούρνη\n\nΣυνάντηση στο αεροδρόμιο της Λάρνακας και αναχώρηση με πτήση της Emirates προς Μελβούρνη με ενδιάμεση στάση στο Ντουμπάι. Άφιξη την επόμενη ημέρα στην Αυστραλία, υποδοχή από τους τοπικούς μας αντιπροσώπους και μεταφορά στο ξενοδοχείο. Τακτοποίηση στα δωμάτια και χρόνος για ξεκούραση μετά το πολύωρο ταξίδι. Διανυκτέρευση στη Μελβούρνη.',
        day2: '3η Μέρα: Μελβούρνη (Ξενάγηση Πόλης)\n\nΜετά το πρωινό ξεκινά η ξενάγησή μας στην κοσμοπολίτικη πρωτεύουσα της Πολιτείας της Βικτώριας. Πρώτη στάση στο Federation Square, σύγχρονο πολιτιστικό κέντρο της πόλης. Συνεχίζουμε με το St Paul\'s Cathedral, τους Fitzroy Gardens και το ιστορικό Cook\'s Cottage. Επίσκεψη στον Καθεδρικό Ναό του Αγίου Πατρικίου, στο Queen Victoria Market και στη συνέχεια διαδρομή προς το St Kilda και το Albert Park, όπου βρίσκεται η πίστα της Formula 1. Η ημέρα ολοκληρώνεται με πανοραμική διαδρομή κατά μήκος του ποταμού Yarra. Επιστροφή στο ξενοδοχείο. Διανυκτέρευση.',
        day3: '4η Μέρα: Μεγάλος Δρόμος του Ωκεανού & Δώδεκα Απόστολοι\n\nΟλοήμερη εκδρομή στον εντυπωσιακό Great Ocean Road. Στάση στο Memorial Arch, διέλευση από Lorne και Apollo Bay και κορύφωση της ημέρας στους Δώδεκα Απόστολους, ένα από τα πιο εμβληματικά φυσικά τοπία της Αυστραλίας. Επίσκεψη στο Loch Ard Gorge και στα Gibson Steps. Επιστροφή στη Μελβούρνη το απόγευμα. Διανυκτέρευση.',
        day4: '5η Μέρα: Phillip Island & Παρέλαση Πιγκουίνων\n\nΑναχώρηση για το Phillip Island. Στάση στο Maru Wildlife Park για γνωριμία με καγκουρό, κοάλα και άλλα ενδημικά ζώα. Επίσκεψη στο Nobbies Centre και το απόγευμα παρακολούθηση της μοναδικής Παρέλασης των Πιγκουίνων. Επιστροφή αργά το βράδυ στη Μελβούρνη. Διανυκτέρευση.',
        day5: '6η Μέρα: Μελβούρνη – Σίδνεϋ\n\nΜεταφορά στο αεροδρόμιο και πτήση προς Σίδνεϋ. Άφιξη, μεταφορά στο ξενοδοχείο και χρόνος ελεύθερος. Προτείνεται απογευματινή βόλτα στο Darling Harbour, Barangaroo και Circular Quay. Διανυκτέρευση.',
        day6: '7η Μέρα: Σίδνεϋ (Ξενάγηση) & Νυχτερινή Κρουαζιέρα\n\nΞενάγηση στο ιστορικό The Rocks, Circular Quay, Sydney Opera House (εξωτερικά), Harbour Bridge και Mrs Macquarie\'s Chair. Στάση στη διάσημη Bondi Beach. Το βράδυ, νυχτερινή κρουαζιέρα με δείπνο στο λιμάνι του Σίδνεϋ. Διανυκτέρευση.',
        day7: '8η Μέρα: Μπλε Βουνά & Featherdale Wildlife Park\n\nΟλοήμερη εκδρομή στα Μπλε Βουνά. Στάση στο Echo Point και θέα στις Three Sisters. Προαιρετική επίσκεψη στο Scenic World. Επίσκεψη στο Featherdale Wildlife Park και επιστροφή στο Σίδνεϋ με φέρι μέσω Parramatta River. Διανυκτέρευση.',
        day8: '9η Μέρα: Κρουαζιέρα Παρακολούθησης Φαλαινών\n\nΣυμμετοχή σε κρουαζιέρα παρακολούθησης φαλαινών διάρκειας περίπου 2,5 ωρών στα νερά του Ειρηνικού. Πιθανότητα παρατήρησης φαλαινών Humpback, δελφινιών και θαλάσσιων λιονταριών. Υπόλοιπος χρόνος ελεύθερος. Διανυκτέρευση.',
        day9: '10η Μέρα: Σίδνεϋ (Ημέρα Ελεύθερη)\n\nΕλεύθερη ημέρα για αγορές, περιπάτους, επίσκεψη σε μουσεία, Botanic Gardens, Taronga Zoo ή προαιρετική εμπειρία BridgeClimb. Διανυκτέρευση.',
        day10: '11η & 12η Μέρα: Σίδνεϋ – Ντουμπάι – Λάρνακα\n\nΕλεύθερος χρόνος και μεταφορά στο αεροδρόμιο για την πτήση επιστροφής με ενδιάμεση στάση στο Ντουμπάι. Άφιξη στη Λάρνακα την 12η ημέρα.'
      },
      gallery: [
        '/images/destinations/australia-hero.webp'
      ]
    }
  },
  {
    id: 54,
    title: 'ΑΝΑΤΟΛΙΚΕΣ ΗΠΑ / ΚΑΝΑΔΑΣ',
    destination: 'America',
    category: 'Exotic Packages',
    price: 4145,
    duration: '10 days',
    description: 'Ανακαλύψτε τη Νέα Υόρκη, τους Καταρράκτες Νιαγάρα, το Τορόντο, την Ουάσιγκτον DC, τη Βαλτιμόρη και τη Φιλαδέλφεια. Μια ολοκληρωμένη περιήγηση στις Ανατολικές ΗΠΑ και τον Καναδά με ελληνόφωνες ξεναγήσεις.',
    longDescription: 'Μια ολοκληρωμένη περιήγηση στις Ανατολικές ΗΠΑ και τον Καναδά: από τη Νέα Υόρκη και το Μανχάταν, στους Καταρράκτες Νιαγάρα, το Τορόντο, την Ουάσιγκτον DC, τη Βαλτιμόρη και τη Φιλαδέλφεια. Εξερευνήστε ουρανοξύστες, ιστορικά μνημεία, φυσικά θαύματα και πολυπολιτισμικές πόλεις.',
    image: '🇺🇸',
    featured: true,
    details: {
      departureDate: '31/07, 08/08, 21/08, 25/09, 10/10',
      departureFrom: 'Larnaca',
      destinationFull: 'New York, Niagara Falls, Toronto, Washington DC, Baltimore, Philadelphia – USA & Canada',
      monthAvailability: 'July, August, September, October',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Aegean Airlines & Emirates',
      includedLuggage: '1 αποσκευή 23kg (LCA–ATH) & 2 x 23kg ανά άτομο στις πτήσεις Emirates',
      coverImage: '/images/destinations/usa.webp',
      flights: [
        {
          direction: 'Departure',
          date: '31/07, 08/08, 21/08, 25/09, 10/10',
          route: 'Larnaca (LCA) → Athens (ATH)',
          flight: 'A3 903',
          time: '10:15 → 12:00',
          luggage: '1 αποσκευή 23kg'
        },
        {
          direction: 'Departure',
          date: '31/07, 08/08, 21/08, 25/09, 10/10',
          route: 'Athens (ATH) → New York JFK',
          flight: 'EK 209',
          time: '17:35 → 21:20',
          luggage: '2 x 23kg ανά άτομο'
        },
        {
          direction: 'Return',
          date: '31/07, 08/08, 21/08, 25/09, 10/10',
          route: 'New York JFK → Athens (ATH)',
          flight: 'EK 210',
          time: '23:55 → 16:05 (+1)',
          luggage: '2 x 23kg ανά άτομο'
        },
        {
          direction: 'Return',
          date: '31/07, 08/08, 21/08, 25/09, 10/10',
          route: 'Athens (ATH) → Larnaca (LCA)',
          flight: 'A3 914',
          time: '21:20 → 23:00',
          luggage: '1 αποσκευή 23kg'
        }
      ],
      hotels: [
        // Departure 31/07 & 25/09 – double €4,145, single €5,469
        {
          name: '4* Hotel – New York',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/new-york-hotel.webp',
          location: 'New York, USA',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 4145,
            single: 5469
          },
          packagePrice: 8290,
          departureDate: '31/07',
          nights: 8
        },
        {
          name: '4* Hotel – New York',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/new-york-hotel.webp',
          location: 'New York, USA',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 4145,
            single: 5469
          },
          packagePrice: 8290,
          departureDate: '25/09',
          nights: 8
        },
        // Departure 08/08 & 21/08 – double €4,465, single €5,795
        {
          name: '4* Hotel – New York',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/new-york-hotel.webp',
          location: 'New York, USA',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 4465,
            single: 5795
          },
          packagePrice: 8930,
          departureDate: '08/08',
          nights: 8
        },
        {
          name: '4* Hotel – New York',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/new-york-hotel.webp',
          location: 'New York, USA',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 4465,
            single: 5795
          },
          packagePrice: 8930,
          departureDate: '21/08',
          nights: 8
        },
        // Departure 10/10 – double €4,109, single €5,435
        {
          name: '4* Hotel – New York',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/new-york-hotel.webp',
          location: 'New York, USA',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 4109,
            single: 5435
          },
          packagePrice: 8218,
          departureDate: '10/10',
          nights: 8
        }
      ],
      included: [
        'Αεροπορικό εισιτήριο Λάρνακα – Αθήνα – Λάρνακα',
        'Αεροπορικά εισιτήρια με Emirates από Αθήνα για Νέα Υόρκη',
        '1 αποσκευή 23kg (LCA–ATH) & 2 x 23kg ανά άτομο στις πτήσεις Emirates',
        'Φόροι αεροδρομίων & επίναυλοι καυσίμων',
        'Διαμονή 8 νύχτες σε ξενοδοχεία 4* (χωρίς πρωινό)',
        'City taxes ξενοδοχείων',
        '3 Ελληνόφωνες ξεναγήσεις στη Νέα Υόρκη (Βόρειο/Νότιο Μανχάταν + έξτρα σημεία)',
        'ΔΩΡΟ: Κρουαζιέρα για φωτογράφηση Statue of Liberty / Ellis Island',
        'Βόλτα σε Chelsea Market, Brooklyn Bridge & Hudson Yards',
        'Ξενάγηση στο Τορόντο',
        'Ξενάγηση στους Καταρράκτες Νιαγάρα & ΔΩΡΟ: Κρουαζιέρα Maid of the Mist',
        'Ξενάγηση στην Ουάσιγκτον DC',
        'Επίσκεψη στη Βαλτιμόρη',
        'Έμπειρος Ελληνόφωνος αρχηγός-ξεναγός καθημερινά',
        'Ταξιδιωτική ασφάλιση & Covid-19',
        'Ταξιδιωτικός φάκελος, ασφάλεια αστικής ευθύνης'
      ],
      notIncluded: [
        'Ό,τι δεν αναγράφεται στα περιλαμβανόμενα',
        'Κόστος έκδοσης βίζας',
        'Φιλοδωρήματα/Αχθοφορικά/Τοπικοί φόροι (ΟΧΙ ξεναγών/αρχηγών): $125'
      ],
      note: 'Η προ-επιλογή θέσεων στα γκρουπ δεν είναι πάντα εγγυημένη (ενδέχεται επιπλέον κόστος). Το πρόγραμμα πραγματοποιείται σε συνεργασία με το γραφείο Manessis στην Αθήνα. Οι πτήσεις Λάρνακα–Αθήνα–Λάρνακα είναι ενδεικτικές και επιβεβαιώνονται βάσει διαθεσιμότητας.',
      cancellationPolicy: 'Έως 45 ημέρες πριν: €50 ανά άτομο. 45–30 ημέρες πριν: 30% της συνολικής τιμής. 30–21 ημέρες πριν: 50% της συνολικής τιμής. 21–0 ημέρες πριν: 100% της συνολικής τιμής. No-show: 100% της συνολικής τιμής.',
      termsAndConditions: [
        'Προκαταβολή 30% με την κράτηση',
        'Εξόφληση 21 ημέρες περίπου πριν την αναχώρηση',
        'Δυνατότητα ακύρωσης βάσει όρων & κανονισμών'
      ],
      program: {
        introduction: 'ΑΝΑΤΟΛΙΚΕΣ ΗΠΑ / ΚΑΝΑΔΑΣ - 10 Μέρες\n\nΜια ολοκληρωμένη περιήγηση στις Ανατολικές ΗΠΑ και τον Καναδά: από τη Νέα Υόρκη και το Μανχάταν, στους Καταρράκτες Νιαγάρα, το Τορόντο, την Ουάσιγκτον DC, τη Βαλτιμόρη και τη Φιλαδέλφεια. Εξερευνήστε ουρανοξύστες, ιστορικά μνημεία, φυσικά θαύματα και πολυπολιτισμικές πόλεις.',
        day1: '1η Μέρα: Λάρνακα – Αθήνα – Νέα Υόρκη\n\nΣυνάντηση στο αεροδρόμιο και πτήση για την Αθήνα. Άφιξη, παραλαβή αποσκευών και αναχώρηση με απευθείας πτήση για Νέα Υόρκη. Καλωσορίσατε στο "Μεγάλο Μήλο"! Η πρώτη γνωριμία μας με την πόλη ξεκινά με τη διαδρομή από το αεροδρόμιο προς το Μανχάταν. Η Νέα Υόρκη αποτελείται από πέντε δήμους: Μανχάταν, Staten Island, Queens, Brooklyn και Bronx. Τα νησιά συνδέονται με γέφυρες, σήραγγες και πορθμεία. Κάποια από αυτά θα τα διασχίσουμε για να φθάσουμε στον προορισμό μας - την πόλη όπου ο κάθε ουρανοξύστης είναι κι ένα μοναδικό δείγμα αρχιτεκτονικής.\n\nΤακτοποίηση στο ξενοδοχείο μας, που βρίσκεται στην "καρδιά" του Μανχάταν. Όσοι το επιθυμούν (ανάλογα με την ώρα) μπορούν να βγουν για έναν πρώτο περίπατο στην πόλη, συνοδευόμενοι από τον ξεναγό μας. Τακτοποίηση δωματίων και χρόνος ελεύθερος.\n\nΓια το βράδυ σας προτείνουμε μια βόλτα στην Georgetown. Η περιοχή δίπλα στον Ποτόμακ είναι πανέμορφη, με το γνωστό Πανεπιστήμιο, τα πολλά μικρά και μεγάλα καταστήματα, τα μαγαζιά αλλά και τα κέντρα στα οποία μπορεί κάνεις να φάει. Εδώ μπορείτε επίσης να διασκεδάσετε στα διάφορα Jazz bars της περιοχής.',
        day2: '2η Μέρα: Νέα Υόρκη – Ξενάγηση (Βόρειο Μανχάταν)\n\nΞεκινάμε την ξενάγηση από τον Οργανισμό Ηνωμένων Εθνών (ΟΗΕ) και συνεχίζουμε με Columbus Circle, Lincoln Center και τη Νομική Σχολή του Fordham. Κατόπιν κατευθυνόμαστε στο Central Park, όπου θα απολαύσουμε εικόνες από τον πιο διάσημο πνεύμονα πρασίνου της πόλης. Στη δυτική πλευρά του πάρκου βλέπουμε το ιστορικό κτίριο Dakota (συνδεδεμένο με τον Τζον Λένον).\n\nΣυνεχίζουμε στο Πανεπιστήμιο Columbia και έπειτα διασχίζουμε περιοχές όπως ο ποταμός Hudson και το Harlem με το Apollo Theatre. Ακολουθεί η 5η Λεωφόρος με το Guggenheim, το Metropolitan Museum, τον Πύργο Trump, μεγάλους οίκους μόδας και κοσμηματοπωλεία. Περνάμε από το Rockefeller Center και ολοκληρώνουμε στην Broadway, την "καρδιά" των θεάτρων. Το βράδυ ακολουθήστε τις προτάσεις του ξεναγού σας.',
        day3: '3η Μέρα: Νέα Υόρκη – Ξενάγηση (Νότιο Μανχάταν) & Κρουαζιέρα\n\nΗ μέρα ξεκινά με κρουαζιέρα, όπου θα θαυμάσουμε Ellis Island, το Άγαλμα της Ελευθερίας, το Staten Island και το New Jersey, με μοναδική θέα προς το Μανχάταν. Συνεχίζουμε με επίσκεψη στο Chelsea Market και στο High Line, το υπερυψωμένο πάρκο πάνω σε παλιές γραμμές τρένου.\n\nΣτο Lower Manhattan θα δούμε Wall Street, Federal Hall, Battery Park και το "Σημείο Μηδέν" με το One World Trade Center. Επίσκεψη στο 9/11 Memorial, καθώς και στον εντυπωσιακό σταθμό Oculus. Περνάμε από τον ελληνορθόδοξο ναό του Αγίου Νικολάου και ολοκληρώνουμε στην Hudson Yards, τη μεγαλύτερη ιδιωτική ανάπτυξη ακινήτων στη Νέα Υόρκη, με το εντυπωσιακό Vessel και πολυτελείς αγορές.',
        day4: '4η Μέρα: Νέα Υόρκη – Γέφυρα Μπρούκλιν & Hudson Yards\n\nΠρώτη στάση ο Grand Central Station (1913), ένα από τα σήματα κατατεθέντα της πόλης. Συνεχίζουμε με το Flatiron Building, το NYU και γνωστές γειτονιές όπως Greenwich Village και SoHo. Περνάμε από Little Italy και Chinatown.\n\nΈπειτα κατευθυνόμαστε στη θρυλική Γέφυρα του Μπρούκλιν (Brooklyn Bridge) και ολοκληρώνουμε με επίσκεψη στη Hudson Yards, όπου δεσπόζει το Vessel και το σύμπλεγμα εμπορικών καταστημάτων και εστιατορίων.',
        day5: '5η Μέρα: Νέα Υόρκη – Καταρράκτες Νιαγάρα (649 χλμ)\n\nΑναχώρηση και οδική διαδρομή περνώντας από New Jersey και Pennsylvania, μέσα από τα βουνά Pocono και περιοχές των Απαλαχίων. Άφιξη στα σύνορα ΗΠΑ/Καναδά και διανυκτέρευση στην καναδική πλευρά των Καταρρακτών.\n\nΤο βράδυ θα απολαύσουμε το φαντασμαγορικό σόου φωτισμών των Καταρρακτών Νιαγάρα, με πολύχρωμα LED και (όταν πραγματοποιούνται) πυροτεχνήματα.',
        day6: '6η Μέρα: Καταρράκτες Νιαγάρα – Τορόντο\n\nΞενάγηση στους Καταρράκτες: θα δούμε το "Πέταλο" (Horseshoe Falls) και τα σημεία θέασης από την πλευρά του Καναδά, καθώς και Clifton Hill, Skylon Tower κ.ά. Καιρού επιτρέποντος, επιβίβαση στο καραβάκι Hornblower / Maid of the Mist για να πλησιάσουμε τους καταρράκτες.\n\nΣτη συνέχεια διαδρομή δίπλα στον ποταμό προς το γραφικό Niagara-on-the-Lake και έπειτα άφιξη στο Τορόντο. Πανοραμική ξενάγηση με CN Tower, Rogers Centre, Δημαρχείο, Eaton Centre, Harbourfront και βασικά σημεία της πόλης. Επιστροφή στο ξενοδοχείο μας στους Καταρράκτες. Διανυκτέρευση.',
        day7: '7η Μέρα: Καταρράκτες Νιαγάρα – Ουάσιγκτον (655 χλμ)\n\nΟδική διαδρομή μέσα από τα Απαλάχια και την ενδοχώρα της Pennsylvania (περίπου 8 ώρες με στάσεις). Άφιξη στην Ουάσιγκτον DC, την πρωτεύουσα των ΗΠΑ, την πόλη των μνημείων, των μουσείων και της ιστορίας. Για το βράδυ προτείνεται έξοδος στη Georgetown, με jazz bars και ωραία εστιατόρια. Διανυκτέρευση.',
        day8: '8η Μέρα: Ουάσιγκτον – Ξενάγηση\n\nΞενάγηση στην Ουάσιγκτον: Union Station, Καπιτώλιο, Βιβλιοθήκη του Κογκρέσου, Ανώτατο Δικαστήριο, National Mall, Οβελίσκος, Μνημείο Βετεράνων Βιετνάμ, Μνημείο Λίνκολν, Tidal Basin, μνημεία Roosevelt και Jefferson. Επίσκεψη στο Arlington Cemetery (τάφοι Κένεντι) και στο μνημείο του στρατηγού Lee. Στάση στον Λευκό Οίκο. Ελεύθερος χρόνος το βράδυ.',
        day9_10: '9η – 10η Μέρα: Ουάσιγκτον – Βαλτιμόρη – Φιλαδέλφεια – Πτήση επιστροφής\n\nΑναχώρηση για Βαλτιμόρη, στάση στο Inner Harbor και ελεύθερος χρόνος. Συνεχίζουμε για Φιλαδέλφεια, την πρώτη ιστορική πρωτεύουσα των ΗΠΑ, όπου υπογράφηκε η Διακήρυξη της Ανεξαρτησίας (1776), διαβάστηκε το πρώτο Σύνταγμα και αποφασίστηκε το σχέδιο της αμερικανικής σημαίας.\n\nΜεταφορά στο αεροδρόμιο και πτήση για Αθήνα. Άφιξη την επόμενη ημέρα, παραλαβή αποσκευών και πτήση για Λάρνακα.'
      },
      gallery: [
        '/images/destinations/usa.webp'
      ]
    }
  },
  {
    id: 55,
    title: 'ΠΡΩΤΟΜΑΓΙΑ – ΘΕΣΣΑΛΟΝΙΚΗ - 5 ΜΕΡΕΣ',
    destination: 'Greece',
    category: 'Easter Packages',
    price: 499,
    duration: '5 days / 4 nights',
    description: 'Ανακαλύψτε τη Θεσσαλονίκη, τη "Νύφη του Θερμαϊκού", για ένα ανοιξιάτικο city break γεμάτο ιστορία, γαστρονομία και έντονη νυχτερινή ζωή. Περιλαμβάνει πτήσεις, διαμονή σε επιλεγμένα ξενοδοχεία 4★ με πρόγευμα.',
    longDescription: 'Η «Νύφη του Θερμαϊκού» σας υποδέχεται για ένα ανοιξιάτικο city break γεμάτο ιστορία, γαστρονομία και έντονη νυχτερινή ζωή. Απολαύστε τη βόλτα σας στον Λευκό Πύργο, τον καφέ σας στα παραλιακά καφέ της Νέας Παραλίας και τα ψώνια σας στις κομψές μπουτίκ της Τσιμισκή. Τα βράδια, τα Λαδάδικα σας περιμένουν για διασκέδαση μέχρι το πρωί.',
    image: '🇬🇷',
    featured: true,
    details: {
      departureDate: '29/04',
      departureFrom: 'Larnaca',
      destinationFull: 'Thessaloniki, Greece',
      monthAvailability: 'April',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Sky Express',
      includedLuggage: '1 αποσκευή 20kg + 1 χειραποσκευή 8kg',
      coverImage: '/images/destinations/greece-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '29/04',
          route: 'Larnaca (LCA) → Thessaloniki (SKG)',
          flight: 'GQ 650',
          time: '20:25 → 22:25',
          luggage: '1 αποσκευή 20kg + 1 χειραποσκευή 8kg'
        },
        {
          direction: 'Return',
          date: '29/04',
          route: 'Thessaloniki (SKG) → Larnaca (LCA)',
          flight: 'GQ 651',
          time: '08:55 → 10:55',
          luggage: '1 αποσκευή 20kg + 1 χειραποσκευή 8kg'
        }
      ],
      hotels: [
        {
          name: 'Imperial Palace Hotel – Thessaloniki',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/imperial-palace-thessaloniki.webp',
          location: 'Andigonidon 13, 54630, Thessaloniki',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 499,
            single: 619,
            triple: 499,
            child: 379
          },
          packagePrice: 998,
          departureDate: '29/04',
          nights: 4
        },
        {
          name: 'Imperial Plus Urban Smart Hotel – Thessaloniki',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/imperial-plus-thessaloniki.webp',
          location: 'Egnatia Str. 8, 54626, Thessaloniki',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 519,
            single: 665,
            triple: 479,
            child: 379
          },
          packagePrice: 1038,
          departureDate: '29/04',
          nights: 4
        },
        {
          name: 'Egnatia Palace Hotel – Thessaloniki',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/egnatia-palace-thessaloniki.webp',
          location: 'Egnatia Str. 61, 54631, Thessaloniki',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 539,
            single: 739,
            triple: 499,
            child: 379
          },
          packagePrice: 1078,
          departureDate: '29/04',
          nights: 4
        },
        {
          name: 'Elisabeth Boutique Hotel – Thessaloniki',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/elisabeth-boutique-thessaloniki.webp',
          location: 'Katholikon 2, 54625, Thessaloniki',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 569,
            single: 835
          },
          packagePrice: 1138,
          departureDate: '29/04',
          nights: 4
        },
        {
          name: 'NYX Hotel – Thessaloniki',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/nyx-thessaloniki.webp',
          location: 'Tsimiski 1, 54625, Thessaloniki',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 619,
            single: 959,
            triple: 599,
            child: 579
          },
          packagePrice: 1238,
          departureDate: '29/04',
          nights: 4
        },
        {
          name: 'Electra Palace Hotel – Thessaloniki',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/electra-palace-thessaloniki.webp',
          location: 'Aristotelous Square 9, 54624, Thessaloniki',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 769,
            single: 1219,
            triple: 649,
            child: 399
          },
          packagePrice: 1538,
          departureDate: '29/04',
          nights: 4
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Θεσσαλονίκη – Λάρνακα',
        'Φόροι αεροδρομίων',
        '4 διανυκτερεύσεις σε επιλεγμένο ξενοδοχείο',
        'Πρόγευμα καθημερινά',
        'Μεταφορές από/προς αεροδρόμιο',
        'Αποσκευές (20kg + 8kg)',
        'Υπηρεσίες τοπικών αντιπροσώπων'
      ],
      notIncluded: [
        'Τοπικός φόρος διαμονής (πληρωτέος στο ξενοδοχείο)',
        'Οτιδήποτε δεν αναφέρεται ρητά στα περιλαμβανόμενα'
      ],
      note: '',
      cancellationPolicy: 'Έως 45 ημέρες πριν: €50 ανά άτομο. 44–31 ημέρες πριν: 30% της αξίας. 30–21 ημέρες πριν: 50% της αξίας. 20 ημέρες ή λιγότερο: 100% της αξίας. Μη εμφάνιση (No-show): 100% της αξίας.',
      termsAndConditions: [
        'Προκαταβολή 30% με την κράτηση',
        'Εξόφληση έως 21 ημέρες πριν την αναχώρηση',
        'Ακυρώσεις: Έως 45 ημέρες πριν: €50 ανά άτομο',
        '44–31 ημέρες πριν: 30% της αξίας',
        '30–21 ημέρες πριν: 50% της αξίας',
        '20 ημέρες ή λιγότερο: 100% της αξίας',
        'Μη εμφάνιση (No-show): 100% της αξίας'
      ],
      program: {
        introduction: 'ΠΡΩΤΟΜΑΓΙΑ – ΘΕΣΣΑΛΟΝΙΚΗ - 5 Μέρες\n\nΗ «Νύφη του Θερμαϊκού» σας υποδέχεται για ένα ανοιξιάτικο city break γεμάτο ιστορία, γαστρονομία και έντονη νυχτερινή ζωή. Απολαύστε τη βόλτα σας στον Λευκό Πύργο, τον καφέ σας στα παραλιακά καφέ της Νέας Παραλίας και τα ψώνια σας στις κομψές μπουτίκ της Τσιμισκή. Τα βράδια, τα Λαδάδικα σας περιμένουν για διασκέδαση μέχρι το πρωί.',
        whatToSee: '👀 ΤΙ ΝΑ ΔΕΙΤΕ ΣΤΗ ΘΕΣΣΑΛΟΝΙΚΗ\n\n• Λευκός Πύργος – το σήμα κατατεθέν της πόλης\n• Αψίδα Γαλερίου & Ροτόντα\n• Εκκλησία Αγίου Δημητρίου (Πολιούχος της πόλης)\n• Ρωμαϊκή Αγορά & αρχαιολογικοί χώροι\n• Βυζαντινά λουτρά, χαμάμ & Μπεζεστέν\n• Μουσεία, πινακοθήκες και πολιτιστικά κέντρα\n\nΕκτός πόλης:\n• Επανωμή – αρχαιολογικοί οικισμοί & παραλίες\n• Λαγκαδάς – Νυμφόπετρα, λίμνη & ιαματικά λουτρά',
        food: '🍽 ΦΑΓΗΤΟ ΣΤΗ ΘΕΣΣΑΛΟΝΙΚΗ\n\nΠαραδοσιακές ταβέρνες και μαγειρεία σε κάθε γειτονιά. Μην παραλείψετε:\n• Μπουγάτσα\n• Λουκουμάδες\n• Πατσά\n• Μεζεδάκια στα Λαδάδικα',
        entertainment: '🎶 ΔΙΑΣΚΕΔΑΣΗ\n\nΗ Θεσσαλονίκη δεν κοιμάται ποτέ. Καφέ, μπαρ, club, μπουζούκια και ζωντανή μουσική:\n• Λαδάδικα\n• Λεωφόρος Νίκης\n• Πλατεία Αριστοτέλους\n• Πλατεία Ναυαρίνου\n• Περιοχή Αεροδρομίου (μεγάλες πίστες)'
      },
      gallery: [
        '/images/destinations/greece-hero.webp'
      ]
    }
  },
  {
    id: 56,
    title: '25Η ΜΑΡΤΙΟΥ – ΑΘΗΝΑ',
    destination: 'Greece',
    category: 'Easter Packages',
    price: 479,
    duration: '5 days / 4 nights',
    description: 'Ανακαλύψτε την Αθήνα, όπου κι αν στρέψει κανείς το βλέμμα του, είναι γεμάτη μνημεία του αρχαίου αλλά και του νεότερου πολιτισμού. Μια βόλτα στο ιστορικό της κέντρο είναι ένα αληθινό ταξίδι στον χρόνο.',
    longDescription: 'Όπου κι αν στρέψει κανείς το βλέμμα του, η Αθήνα είναι γεμάτη μνημεία του αρχαίου αλλά και του νεότερου πολιτισμού. Μια βόλτα στο ιστορικό της κέντρο είναι ένα αληθινό ταξίδι στον χρόνο. Περπατώντας στους δρόμους της, πατάτε κυριολεκτικά πάνω στα ίχνη χιλιάδων χρόνων ιστορίας, ενώ μέσα σε λίγα χιλιόμετρα μπορείτε να απολαύσετε πολιτισμό, σύγχρονη ζωή και θάλασσα.',
    image: '🇬🇷',
    featured: true,
    details: {
      departureDate: '21/03',
      departureFrom: 'Larnaca',
      destinationFull: 'Athens, Greece',
      monthAvailability: 'March',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Cyprus Airways',
      includedLuggage: '1 αποσκευή 20kg + 1 χειραποσκευή 8kg',
      coverImage: '/images/destinations/greece-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '21/03',
          route: 'Larnaca (LCA) → Athens (ATH)',
          flight: 'CY 310',
          time: '08:05 → 10:00',
          luggage: '1 αποσκευή 20kg + 1 χειραποσκευή 8kg'
        },
        {
          direction: 'Return',
          date: '21/03',
          route: 'Athens (ATH) → Larnaca (LCA)',
          flight: 'CY 313',
          time: '20:55 → 22:35',
          luggage: '1 αποσκευή 20kg + 1 χειραποσκευή 8kg'
        }
      ],
      hotels: [
        {
          name: 'The Alassia Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/alassia-athens.webp',
          location: 'Socratous Str. 50, 10431, Athens',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 479,
            single: 639,
            triple: 429,
            child: 339
          },
          packagePrice: 958,
          departureDate: '21/03',
          nights: 4
        },
        {
          name: 'Moxy Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/moxy-athens.webp',
          location: 'Stadiou Str. 65, 10551, Athens',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 509,
            single: 709
          },
          packagePrice: 1018,
          departureDate: '21/03',
          nights: 4
        },
        {
          name: 'Metis Urbane Living Spaces – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/metis-athens.webp',
          location: 'Diomeias 8, 10563, Athens',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 539,
            single: 829
          },
          packagePrice: 1078,
          departureDate: '21/03',
          nights: 4
        },
        {
          name: 'Central Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/central-athens.webp',
          location: 'Apollonos 21, Plaka, 10557, Athens',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 559,
            single: 809
          },
          packagePrice: 1118,
          departureDate: '21/03',
          nights: 4
        },
        {
          name: 'The Lekka Hotel & Spa – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/lekka-athens.webp',
          location: 'Lekka Str. 31, 10562, Athens',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 559,
            single: 849,
            triple: 499
          },
          packagePrice: 1118,
          departureDate: '21/03',
          nights: 4
        },
        {
          name: 'Amalia Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/amalia-athens.webp',
          location: 'Amalias Ave. 10, 10557, Athens',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 569,
            single: 889,
            triple: 495,
            child: 349
          },
          packagePrice: 1138,
          departureDate: '21/03',
          nights: 4
        },
        {
          name: 'Pure by Athens Prime Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/pure-athens.webp',
          location: 'Nikiou 8, 10560, Athens',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 569,
            single: 879,
            triple: 519,
            child: 429
          },
          packagePrice: 1138,
          departureDate: '21/03',
          nights: 4
        },
        {
          name: 'Classic by Athens Prime Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/classic-athens-prime.webp',
          location: 'Chavriou Str. 7, 10562, Athens',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 569,
            single: 879
          },
          packagePrice: 1138,
          departureDate: '21/03',
          nights: 4
        },
        {
          name: 'Arethusa Hotel – Athens',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/arethusa-athens.webp',
          location: 'Mitropoleos & Nikis Str., 10563, Athens',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 579,
            single: 909
          },
          packagePrice: 1158,
          departureDate: '21/03',
          nights: 4
        },
        {
          name: 'Astor Hotel – Athens',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/astor-athens.webp',
          location: 'Karageorgi Servias Str. 16, 10562, Athens',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 599,
            single: 939,
            triple: 519,
            child: 355
          },
          packagePrice: 1198,
          departureDate: '21/03',
          nights: 4
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Αθήνα – Λάρνακα',
        'Φόροι αεροδρομίων',
        '4 διανυκτερεύσεις σε επιλεγμένο ξενοδοχείο',
        'Πρόγευμα καθημερινά',
        'Μεταφορές από/προς το αεροδρόμιο',
        'Αποσκευές (20kg + 8kg)',
        'Υπηρεσίες τοπικών αντιπροσώπων'
      ],
      notIncluded: [
        'Τοπικός φόρος διαμονής (πληρωτέος στο ξενοδοχείο)',
        'Οτιδήποτε δεν αναφέρεται ρητά στα περιλαμβανόμενα'
      ],
      note: '',
      cancellationPolicy: 'Έως 45 ημέρες πριν: €50 ανά άτομο. 44–31 ημέρες πριν: 30% της αξίας. 30–21 ημέρες πριν: 50% της αξίας. 20 ημέρες ή λιγότερο: 100% της αξίας. Μη εμφάνιση (No-show): 100% της αξίας.',
      termsAndConditions: [
        'Προκαταβολή 30% με την κράτηση',
        'Εξόφληση έως 21 ημέρες πριν την αναχώρηση',
        'Ακυρώσεις: Έως 45 ημέρες πριν: €50 ανά άτομο',
        '44–31 ημέρες πριν: 30% της αξίας',
        '30–21 ημέρες πριν: 50% της αξίας',
        '20 ημέρες ή λιγότερο: 100% της αξίας',
        'Μη εμφάνιση (No-show): 100% της αξίας'
      ],
      program: {
        introduction: '25Η ΜΑΡΤΙΟΥ – ΑΘΗΝΑ - 5 Μέρες\n\nΌπου κι αν στρέψει κανείς το βλέμμα του, η Αθήνα είναι γεμάτη μνημεία του αρχαίου αλλά και του νεότερου πολιτισμού. Μια βόλτα στο ιστορικό της κέντρο είναι ένα αληθινό ταξίδι στον χρόνο. Περπατώντας στους δρόμους της, πατάτε κυριολεκτικά πάνω στα ίχνη χιλιάδων χρόνων ιστορίας, ενώ μέσα σε λίγα χιλιόμετρα μπορείτε να απολαύσετε πολιτισμό, σύγχρονη ζωή και θάλασσα.',
        whatToSee: '👀 ΤΙ ΝΑ ΔΕΙΤΕ ΣΤΗΝ ΑΘΗΝΑ\n\n• Ακρόπολη & Παρθενώνας\n• Αρχαία Αγορά & Ναός Ηφαίστου\n• Ναός Διός & Αψίδα Αδριανού\n• Μουσείο Ακρόπολης\n• Εθνικό Αρχαιολογικό Μουσείο\n• Μουσείο Μπενάκη\n• Πλάκα & Μοναστηράκι\n• Σύνταγμα & Αλλαγή Φρουράς Ευζώνων\n• Λυκαβηττός & Θέα πόλης',
        food: '🍽 ΦΑΓΗΤΟ ΣΤΗΝ ΑΘΗΝΑ\n\nΗ ελληνική κουζίνα αποτελεί έναν μοναδικό συνδυασμό φρέσκων υλικών, αρωματικών βοτάνων, εξαιρετικού ελαιόλαδου, θαλασσινών και ντόπιων κρεάτων. Μην παραλείψετε:\n• Σουβλάκι & γύρο\n• Παραδοσιακούς μεζέδες\n• Ελληνικά τυριά, με πρωταγωνίστρια τη φέτα\n\nΟι περιοχές Πλάκα, Μοναστηράκι και Ψυρρή είναι γεμάτες εστιατόρια, ταβέρνες και μεζεδοπωλεία, με ζωντανή ατμόσφαιρα όλη μέρα και νύχτα.'
      },
      gallery: [
        '/images/destinations/greece-hero.webp'
      ]
    }
  },
  {
    id: 57,
    title: 'ΜΑΓΙΚΟ ΠΑΣΧΑ ΣΤΟ ΗΡΑΚΛΕΙΟ',
    destination: 'Greece',
    category: 'Easter Packages',
    price: 599,
    duration: '4 days / 3 nights',
    description: 'Ζήστε το μαγικό Πάσχα στην Κρήτη! Ανακαλύψτε το Ηράκλειο, την Ελούντα, τη Σπιναλόγκα και τον Άγιο Νικόλαο. Συμμετέχετε στις πασχαλινές τελετές, απολαύστε το Αναστάσιμο Δείπνο και το Πασχαλινό Γεύμα σε παραδοσιακό εστιατόριο.',
    longDescription: 'Το Ηράκλειο, πρωτεύουσα της Κρήτης και μεγαλύτερη πόλη του νησιού, είναι ένας ζωντανός προορισμός που συνδυάζει ιστορία, πολιτισμό και σύγχρονη καθημερινότητα. Χτισμένο στη βόρεια ακτή της Κρήτης, με θέα το γαλάζιο Κρητικό Πέλαγος, αποτελεί σημαντικό λιμάνι και κέντρο ζωής. Ζήστε το μαγικό Πάσχα με τις πασχαλινές τελετές, το Αναστάσιμο Δείπνο και το Πασχαλινό Γεύμα.',
    image: '🇬🇷',
    featured: true,
    details: {
      departureDate: '10/04',
      departureFrom: 'Larnaca',
      destinationFull: 'Heraklion, Elounda, Spinalonga, Agios Nikolaos – Crete, Greece',
      monthAvailability: 'April',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Cyprus Airways',
      includedLuggage: '1 αποσκευή 20kg + 1 χειραποσκευή 8kg',
      coverImage: '/images/destinations/greece-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '10/04',
          route: 'Larnaca (LCA) → Heraklion (HER)',
          flight: 'CY 460',
          time: '14:00 → 15:30',
          luggage: '1 αποσκευή 20kg + 1 χειραποσκευή 8kg'
        },
        {
          direction: 'Return',
          date: '10/04',
          route: 'Heraklion (HER) → Larnaca (LCA)',
          flight: 'CY 461',
          time: '16:30 → 18:00',
          luggage: '1 αποσκευή 20kg + 1 χειραποσκευή 8kg'
        }
      ],
      hotels: [
        {
          name: '4★ Hotel – Heraklion',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/heraklion-hotel.webp',
          location: 'Heraklion, Crete, Greece',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 599,
            single: 739,
            child: 415
          },
          packagePrice: 1198,
          departureDate: '10/04',
          nights: 3
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Ηράκλειο – Λάρνακα (Cyprus Airways)',
        'Φόροι αεροδρομίων',
        '3 διανυκτερεύσεις σε ξενοδοχείο 4★ με πρωινό',
        'Τοπικός φόρος διαμονής',
        'Μεταφορές, εκδρομές και περιηγήσεις σύμφωνα με το πρόγραμμα',
        'Αναστάσιμο Δείπνο σε τοπικό εστιατόριο',
        'Πασχαλινό Γεύμα Κυριακής',
        'Εισιτήριο πλοιαρίου για Σπιναλόγκα',
        'Τοπικός αρχηγός / συνοδός',
        '1 αποσκευή 20kg & 1 χειραποσκευή 8kg',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Δικαιώματα εισόδων σε προαιρετικά αξιοθέατα',
        'Οτιδήποτε δεν αναφέρεται ρητά στο πρόγραμμα'
      ],
      note: '',
      cancellationPolicy: 'Έως 45 ημέρες πριν: €50 ανά άτομο. 44–31 ημέρες πριν: 30% της αξίας. 30–21 ημέρες πριν: 50% της αξίας. 20–0 ημέρες πριν: 100% της αξίας. Μη εμφάνιση (No-show): 100%.',
      termsAndConditions: [
        'Προκαταβολή 30% με την κράτηση',
        'Εξόφληση ~21 ημέρες πριν την αναχώρηση',
        'Ακυρώσεις: Έως 45 ημέρες πριν: €50 ανά άτομο',
        '44–31 ημέρες πριν: 30% της αξίας',
        '30–21 ημέρες πριν: 50% της αξίας',
        '20–0 ημέρες πριν: 100% της αξίας',
        'Μη εμφάνιση (No-show): 100%'
      ],
      program: {
        introduction: 'ΜΑΓΙΚΟ ΠΑΣΧΑ ΣΤΟ ΗΡΑΚΛΕΙΟ - 4 Μέρες\n\nΤο Ηράκλειο, πρωτεύουσα της Κρήτης και μεγαλύτερη πόλη του νησιού, είναι ένας ζωντανός προορισμός που συνδυάζει ιστορία, πολιτισμό και σύγχρονη καθημερινότητα. Χτισμένο στη βόρεια ακτή της Κρήτης, με θέα το γαλάζιο Κρητικό Πέλαγος, αποτελεί σημαντικό λιμάνι και κέντρο ζωής. Ζήστε το μαγικό Πάσχα με τις πασχαλινές τελετές, το Αναστάσιμο Δείπνο και το Πασχαλινό Γεύμα.',
        day1: '1η Μέρα – Μεγάλη Παρασκευή: Λάρνακα – Ηράκλειο\n\nΣυγκέντρωση στο αεροδρόμιο Λάρνακας και αναχώρηση με απευθείας πτήση για το Ηράκλειο. Άφιξη στο αεροδρόμιο "Νίκος Καζαντζάκης", υποδοχή από τον αρχηγό/συνοδό μας και μεταφορά στο ξενοδοχείο.\n\nΤο Ηράκλειο, πρωτεύουσα της Κρήτης και μεγαλύτερη πόλη του νησιού, είναι ένας ζωντανός προορισμός που συνδυάζει ιστορία, πολιτισμό και σύγχρονη καθημερινότητα. Χτισμένο στη βόρεια ακτή της Κρήτης, με θέα το γαλάζιο Κρητικό Πέλαγος, αποτελεί σημαντικό λιμάνι και κέντρο ζωής.\n\nΤο βράδυ θα βιώσουμε τη βαθιά κατανυκτική ατμόσφαιρα της Μεγάλης Παρασκευής, παρακολουθώντας την περιφορά του Επιταφίου σε μία από τις εκκλησίες της πόλης. Μια μοναδική εμπειρία πίστης και συγκίνησης που σηματοδοτεί την έναρξη των πασχαλινών εορτών.\n\nΕπιστροφή στο ξενοδοχείο – Διανυκτέρευση.',
        day2: '2η Μέρα – Μεγάλο Σάββατο: Ηράκλειο – Ελούντα – Σπιναλόγκα – Άγιος Νικόλαος – Ηράκλειο\n\nΠρωινό στο ξενοδοχείο και αναχώρηση για την Ελούντα, έναν από τους πιο κομψούς και ειδυλλιακούς προορισμούς της Κρήτης. Η γαλήνια θάλασσα, το φυσικό τοπίο και η παραδοσιακή αρχιτεκτονική δημιουργούν μια εικόνα απόλυτης ηρεμίας.\n\nΑπό την Πλάκα επιβιβαζόμαστε σε πλοιάριο με προορισμό τη Σπιναλόγκα, το ιστορικό νησί-σύμβολο του κόλπου Μιραμπέλλου. Χρόνος ελεύθερος για περιήγηση στο βενετσιάνικο φρούριο (1579), στα λιθόστρωτα δρομάκια και στα ερείπια που μαρτυρούν τη συγκλονιστική ιστορία του νησιού, το οποίο υπήρξε για δεκαετίες τόπος απομόνωσης των λεπρών και σήμερα αποτελεί μνημείο μνήμης, δύναμης και ανθρώπινης αξιοπρέπειας.\n\nΕπιστροφή και συνέχεια προς τον Άγιο Νικόλαο, τη γραφική πόλη που απλώνεται γύρω από τη λίμνη Βουλισμένη. Χρόνος για βόλτα, καφέ ή γεύμα δίπλα στη θάλασσα.\n\nΕπιστροφή στο Ηράκλειο το απόγευμα.\n\nΑργά το βράδυ, μετάβαση σε εκκλησία για την Ακολουθία της Αναστάσεως. Υποδοχή του Αγίου Φωτός και το χαρμόσυνο «Χριστός Ανέστη».\n\nΑκολουθεί Αναστάσιμο Δείπνο σε τοπικό εστιατόριο με παραδοσιακή μαγειρίτσα, τοπικά εδέσματα και πασχαλινά γλυκά, σε ατμόσφαιρα γιορτής και κρητικής φιλοξενίας.\n\nΔιανυκτέρευση.',
        day3: '3η Μέρα – Κυριακή του Πάσχα\n\nΕλεύθερο πρωινό και χαλαρό ξεκίνημα της ημέρας.\n\nΤο μεσημέρι θα απολαύσουμε Πασχαλινό Γεύμα σε παραδοσιακό εστιατόριο στην περιοχή της Αμμουδάρας.\n\nΗ Κυριακή του Πάσχα στο Ηράκλειο είναι γεμάτη φως, χαρά και ζωντάνια. Οι καμπάνες ηχούν χαρμόσυνα, οι δρόμοι γεμίζουν ευχές και τα τραπέζια στρώνονται με αρνί στη σούβλα, κοκορέτσι, σαλάτες και άφθονο κρασί και ρακή. Η μουσική, οι κρητικοί χοροί και η αυθεντική φιλοξενία δημιουργούν ένα σκηνικό γιορτής που μένει αξέχαστο.\n\nΑπόγευμα ελεύθερο και επιστροφή στο ξενοδοχείο για ξεκούραση.\n\nΔιανυκτέρευση.',
        day4: '4η Μέρα – Δευτέρα του Πάσχα: Ηράκλειο – Λάρνακα\n\nΕλεύθερος χρόνος μέχρι τη μεταφορά μας στο αεροδρόμιο Ηρακλείου για την πτήση επιστροφής στη Λάρνακα, γεμάτοι εικόνες, συναισθήματα και μοναδικές πασχαλινές εμπειρίες από την Κρήτη.'
      },
      gallery: [
        '/images/destinations/greece-hero.webp'
      ]
    }
  },
  {
    id: 58,
    title: 'ΠΑΣΧΑ ΣΤΟ ΡΕΘΥΜΝΟ',
    destination: 'Greece',
    category: 'Easter Packages',
    price: 625,
    duration: '4 days / 3 nights',
    description: 'Ζήστε το Πάσχα στο Ρέθυμνο, μία από τις πιο γραφικές πόλεις της Κρήτης! Ανακαλύψτε τα Χανιά, τη Μονή Αρκαδίου και απολαύστε τις πασχαλινές τελετές, το Αναστάσιμο Δείπνο και το Πασχαλινό Γεύμα.',
    longDescription: 'Το Ρέθυμνο είναι από τις πιο γραφικές πόλεις της Κρήτης, με έντονο ενετικό χαρακτήρα, λιθόστρωτα σοκάκια, αρχοντικά, και τη μεγαλοπρεπή Φορτέτζα να δεσπόζει πάνω από την Παλιά Πόλη. Η παραλιακή ζώνη σφύζει από ζωή και αποτελεί ιδανικό σημείο για βόλτα και χαλάρωση. Ζήστε το Πάσχα με τις πασχαλινές τελετές, το Αναστάσιμο Δείπνο και το Πασχαλινό Γεύμα.',
    image: '🇬🇷',
    featured: true,
    details: {
      departureDate: '10/04',
      departureFrom: 'Larnaca',
      destinationFull: 'Rethymno, Chania, Arkadi Monastery – Crete, Greece',
      monthAvailability: 'April',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Cyprus Airways',
      includedLuggage: '1 αποσκευή 20kg + 1 χειραποσκευή 8kg',
      coverImage: '/images/destinations/greece-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '10/04',
          route: 'Larnaca (LCA) → Heraklion (HER)',
          flight: 'CY 460',
          time: '14:00 → 15:30',
          luggage: '1 αποσκευή 20kg + 1 χειραποσκευή 8kg'
        },
        {
          direction: 'Return',
          date: '10/04',
          route: 'Heraklion (HER) → Larnaca (LCA)',
          flight: 'CY 461',
          time: '16:30 → 18:00',
          luggage: '1 αποσκευή 20kg + 1 χειραποσκευή 8kg'
        }
      ],
      hotels: [
        {
          name: '5★ Hotel – Rethymno',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/rethymno-hotel.webp',
          location: 'Rethymno, Crete, Greece',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 625,
            single: 795,
            child: 515
          },
          packagePrice: 1250,
          departureDate: '10/04',
          nights: 3
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Ηράκλειο – Λάρνακα (Cyprus Airways)',
        'Φόροι αεροδρομίων',
        '3 διανυκτερεύσεις σε ξενοδοχείο 5★ στο Ρέθυμνο με πρωινό',
        'Τοπικός φόρος διαμονής',
        'Μεταφορές, εκδρομές και περιηγήσεις σύμφωνα με το πρόγραμμα',
        'Αναστάσιμο Δείπνο σε τοπικό εστιατόριο',
        'Πασχαλινό Γεύμα Κυριακής',
        'Τοπικός αρχηγός / ξεναγός',
        '1 αποσκευή 20kg & 1 χειραποσκευή 8kg',
        'Υπηρεσίες των αντιπροσώπων μας'
      ],
      notIncluded: [
        'Δικαιώματα εισόδων σε μουσεία/αξιοθέατα (προαιρετικά)',
        'Οτιδήποτε δεν αναφέρεται ρητά στο πρόγραμμα'
      ],
      note: '',
      cancellationPolicy: 'Έως 45 ημέρες πριν: €50 ανά άτομο. 44–31 ημέρες πριν: 30% της αξίας. 30–21 ημέρες πριν: 50% της αξίας. 20–0 ημέρες πριν: 100% της αξίας. Μη εμφάνιση (No-show): 100%.',
      termsAndConditions: [
        'Προκαταβολή 30% με την κράτηση',
        'Εξόφληση ~21 ημέρες πριν την αναχώρηση',
        'Ακυρώσεις: Έως 45 ημέρες πριν: €50 ανά άτομο',
        '44–31 ημέρες πριν: 30% της αξίας',
        '30–21 ημέρες πριν: 50% της αξίας',
        '20–0 ημέρες πριν: 100% της αξίας',
        'Μη εμφάνιση (No-show): 100%'
      ],
      program: {
        introduction: 'ΠΑΣΧΑ ΣΤΟ ΡΕΘΥΜΝΟ - 4 Μέρες\n\nΤο Ρέθυμνο είναι από τις πιο γραφικές πόλεις της Κρήτης, με έντονο ενετικό χαρακτήρα, λιθόστρωτα σοκάκια, αρχοντικά, και τη μεγαλοπρεπή Φορτέτζα να δεσπόζει πάνω από την Παλιά Πόλη. Η παραλιακή ζώνη σφύζει από ζωή και αποτελεί ιδανικό σημείο για βόλτα και χαλάρωση. Ζήστε το Πάσχα με τις πασχαλινές τελετές, το Αναστάσιμο Δείπνο και το Πασχαλινό Γεύμα.',
        day1: '1η Μέρα – Μεγάλη Παρασκευή: Λάρνακα – Ηράκλειο – Ρέθυμνο\n\nΣυγκέντρωση στο αεροδρόμιο της Λάρνακας και αναχώρηση με απευθείας πτήση για το Ηράκλειο. Άφιξη στο αεροδρόμιο «Νίκος Καζαντζάκης», υποδοχή από τον αρχηγό/συνοδό μας και άμεση αναχώρηση για το Ρέθυμνο.\n\nΆφιξη στο ξενοδοχείο, τακτοποίηση στα δωμάτια και ελεύθερος χρόνος για μια πρώτη γνωριμία με την πόλη. Το Ρέθυμνο είναι από τις πιο γραφικές πόλεις της Κρήτης, με έντονο ενετικό χαρακτήρα, λιθόστρωτα σοκάκια, αρχοντικά, και τη μεγαλοπρεπή Φορτέτζα να δεσπόζει πάνω από την Παλιά Πόλη. Η παραλιακή ζώνη σφύζει από ζωή και αποτελεί ιδανικό σημείο για βόλτα και χαλάρωση.\n\nΤο βράδυ, θα ζήσουμε τη βαθιά κατανυκτική ατμόσφαιρα της Μεγάλης Παρασκευής, παρακολουθώντας την περιφορά του Επιταφίου σε μία από τις εκκλησίες της πόλης. Επιστροφή στο ξενοδοχείο γεμάτοι εικόνες, ήχους και συναισθήματα μιας μοναδικής μέρας.\n\nΔιανυκτέρευση.',
        day2: '2η Μέρα – Μεγάλο Σάββατο: Ρέθυμνο – Χανιά – Ρέθυμνο\n\nΜετά το πρωινό στο ξενοδοχείο, αναχωρούμε για τα Χανιά, μία από τις ομορφότερες πόλεις της Ελλάδας. Η περιήγησή μας ξεκινά από την Παλιά Πόλη, με τα στενά σοκάκια, τα ενετικά και οθωμανικά κτίρια και την ιδιαίτερη ατμόσφαιρα που μαρτυρά το πολυπολιτισμικό παρελθόν της.\n\nΘα επισκεφθούμε το Ενετικό Λιμάνι με τον χαρακτηριστικό Φάρο, το Γιαλί Τζαμισί και τα Νεώρια, ενώ θα υπάρξει χρόνος για βόλτα στη Δημοτική Αγορά (εφόσον είναι ανοιχτή) για γνωριμία με τα τοπικά προϊόντα της κρητικής γης. Στη συνέχεια περνάμε από τη συνοικία της Χαλέπας, με τα ιστορικά νεοκλασικά αρχοντικά.\n\nΗ ξενάγηση ολοκληρώνεται με επίσκεψη στους Τάφους των Βενιζέλων, σημείο μεγάλης ιστορικής σημασίας και μοναδικής πανοραμικής θέας προς τα Χανιά και το Κρητικό Πέλαγος.\n\nΕπιστροφή στο Ρέθυμνο το απόγευμα.\n\nΑργά το βράδυ, μετάβαση στην εκκλησία για την Ακολουθία της Αναστάσεως, υποδοχή του Αγίου Φωτός και το χαρμόσυνο «Χριστός Ανέστη».\n\nΑκολουθεί Αναστάσιμο Δείπνο σε τοπικό εστιατόριο με παραδοσιακή μαγειρίτσα, τοπικά εδέσματα και γλυκά, μέσα σε ατμόσφαιρα γιορτής και κρητικής φιλοξενίας.\n\nΔιανυκτέρευση.',
        day3: '3η Μέρα – Κυριακή του Πάσχα: Ρέθυμνο – Πασχαλινό Γλέντι\n\nΠρωινό και ελεύθερος χρόνος μέχρι το μεσημέρι για ξεκούραση ή χαλαρή βόλτα στην Παλιά Πόλη και την παραλία του Ρεθύμνου.\n\nΣτη συνέχεια, θα απολαύσουμε Πασχαλινό Γεύμα σε τοπικό εστιατόριο, με αυθεντικές κρητικές γεύσεις, αρνί στη σούβλα, αντικριστό, κοκορέτσι, σαλάτες, κρασί και άφθονη ρακή.\n\nΗ Κυριακή του Πάσχα στο Ρέθυμνο είναι γεμάτη φως, μουσική και ζωντάνια. Οι καμπάνες ηχούν χαρμόσυνα, οι δρόμοι γεμίζουν ευχές και χαμόγελα και η κρητική παράδοση ζωντανεύει μέσα από χορούς, τραγούδια και αυθεντική φιλοξενία. Μια μέρα γεμάτη χαρά, συναισθήματα και όμορφες στιγμές που μένουν αξέχαστες.\n\nΑπόγευμα ελεύθερο – Διανυκτέρευση.',
        day4: '4η Μέρα – Δευτέρα του Πάσχα: Ρέθυμνο – Μονή Αρκαδίου – Ηράκλειο – Λάρνακα\n\nΠρωινό στο ξενοδοχείο και αναχώρηση για το αεροδρόμιο Ηρακλείου με ενδιάμεση στάση στη Μονή Αρκαδίου, ένα από τα σημαντικότερα ιστορικά και θρησκευτικά μνημεία της Κρήτης.\n\nΗ Μονή Αρκαδίου είναι άρρηκτα συνδεδεμένη με το Ολοκαύτωμα του 1866, μία από τις πιο ηρωικές στιγμές της κρητικής ιστορίας, σύμβολο ελευθερίας, αυτοθυσίας και αγώνα. Θα επισκεφθούμε το καθολικό, την ιστορική πυριτιδαποθήκη, τα κελιά των μοναχών και το μικρό μουσείο με κειμήλια της εποχής.\n\nΣτη συνέχεια αναχώρηση για το αεροδρόμιο Ηρακλείου και πτήση επιστροφής στη Λάρνακα, γεμάτοι εικόνες, παραδόσεις και μοναδικές πασχαλινές εμπειρίες.'
      },
      gallery: [
        '/images/destinations/greece-hero.webp'
      ]
    }
  },
  {
    id: 59,
    title: 'ΑΝΟΙΞΙΑΤΙΚΗ ΑΠΟΔΡΑΣΗ ΣΤΗΝ ΚΡΗΤΗ',
    destination: 'Greece',
    category: 'Easter Packages',
    price: 659,
    duration: '5 days / 4 nights',
    description: 'Ανακαλύψτε την Κρήτη με αυτό το ανοιξιάτικο πακέτο! Επισκεφτείτε τα Χανιά, το Ηράκλειο, την Ελούντα, τη Σπιναλόγκα, τον Άγιο Νικόλαο, τη Λίμνη Κουρνά, το Ρέθυμνο και πολλά άλλα αξιοθέατα.',
    longDescription: 'Μια ανοιξιάτικη αποδράση στην Κρήτη που σας οδηγεί στα πιο όμορφα σημεία του νησιού. Από τα Χανιά με το ενετικό λιμάνι και την Παλιά Πόλη, στο Ηράκλειο, την Ελούντα, τη Σπιναλόγκα, τον Άγιο Νικόλαο και τη Λίμνη Κουρνά. Ανακαλύψτε την ιστορία, τη φύση και την κρητική παράδοση σε ένα ταξίδι 5 ημερών.',
    image: '🇬🇷',
    featured: true,
    details: {
      departureDate: '13/04',
      departureFrom: 'Larnaca',
      destinationFull: 'Chania, Heraklion, Elounda, Spinalonga, Agios Nikolaos, Lake Kournas, Rethymno – Crete, Greece',
      monthAvailability: 'April',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Cyprus Airways',
      includedLuggage: '1 αποσκευή 23kg + 1 χειραποσκευή 10kg',
      coverImage: '/images/destinations/greece-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '13/04',
          route: 'Larnaca (LCA) → Heraklion (HER)',
          flight: 'CY 460',
          time: '14:00 → 15:30',
          luggage: '1 αποσκευή 23kg + 1 χειραποσκευή 10kg'
        },
        {
          direction: 'Return',
          date: '13/04',
          route: 'Heraklion (HER) → Larnaca (LCA)',
          flight: 'CY 461',
          time: '20:00 → 21:30',
          luggage: '1 αποσκευή 23kg + 1 χειραποσκευή 10kg'
        }
      ],
      hotels: [
        {
          name: '4★ Hotel – Chania',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/chania-hotel.webp',
          location: 'Chania, Crete, Greece',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 659,
            single: 855,
            child: 385
          },
          packagePrice: 1318,
          departureDate: '13/04',
          nights: 3
        },
        {
          name: '4★ Hotel – Heraklion',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/heraklion-hotel.webp',
          location: 'Heraklion, Crete, Greece',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 659,
            single: 855,
            child: 385
          },
          packagePrice: 1318,
          departureDate: '13/04',
          nights: 1
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Ηράκλειο – Λάρνακα (Cyprus Airways)',
        'Φόροι αεροδρομίων',
        '3 διανυκτερεύσεις σε ξενοδοχείο 4★ στα Χανιά με πρωινό',
        '1 διανυκτέρευση σε ξενοδοχείο 4★ στο Ηράκλειο με πρωινό',
        'Τοπικός φόρος διαμονής',
        'Μεταφορές, εκδρομές και περιηγήσεις σύμφωνα με το πρόγραμμα',
        'Τοπικός αρχηγός / συνοδός',
        'Εισιτήριο καραβιού για Σπιναλόγκα',
        'Αποσκευή 23kg + χειραποσκευή 10kg',
        'Υπηρεσίες αντιπροσώπων'
      ],
      notIncluded: [
        'Είσοδοι σε μουσεία/αξιοθέατα (προαιρετικά)',
        'Ό,τι δεν αναφέρεται ρητά στο πρόγραμμα ή αναφέρεται ως προαιρετικό'
      ],
      note: '',
      cancellationPolicy: 'Έως 45 ημέρες πριν: €50 ανά άτομο. 45–30 ημέρες πριν: 30% της αξίας. 30–21 ημέρες πριν: 50% της αξίας. 21–0 ημέρες πριν: 100% της αξίας. No-show: 100%. Για charter/κρουαζιέρες/σκι/εκδηλώσεις: έως 100% ανεξαρτήτως ημερομηνίας.',
      termsAndConditions: [
        'Προκαταβολή 30% με την κράτηση',
        'Εξόφληση ~21 ημέρες πριν την αναχώρηση',
        'Ακυρώσεις: Έως 45 ημέρες πριν: €50 ανά άτομο',
        '45–30 ημέρες πριν: 30% της αξίας',
        '30–21 ημέρες πριν: 50% της αξίας',
        '21–0 ημέρες πριν: 100% της αξίας',
        'No-show: 100%',
        'Για charter/κρουαζιέρες/σκι/εκδηλώσεις: έως 100% ανεξαρτήτως ημερομηνίας'
      ],
      program: {
        introduction: 'ΑΝΟΙΞΙΑΤΙΚΗ ΑΠΟΔΡΑΣΗ ΣΤΗΝ ΚΡΗΤΗ - 5 Μέρες\n\nΜια ανοιξιάτικη αποδράση στην Κρήτη που σας οδηγεί στα πιο όμορφα σημεία του νησιού. Από τα Χανιά με το ενετικό λιμάνι και την Παλιά Πόλη, στο Ηράκλειο, την Ελούντα, τη Σπιναλόγκα, τον Άγιο Νικόλαο και τη Λίμνη Κουρνά. Ανακαλύψτε την ιστορία, τη φύση και την κρητική παράδοση σε ένα ταξίδι 5 ημερών.',
        day1: '1η Μέρα: Λάρνακα – Ηράκλειο – Χανιά\n\nΣυγκέντρωση στο αεροδρόμιο Λάρνακας και αναχώρηση με απευθείας πτήση για Ηράκλειο. Άφιξη, υποδοχή από τον αρχηγό/συνοδό μας και άμεση αναχώρηση για Χανιά. Άφιξη και μεταφορά στο ξενοδοχείο. Χρόνος ελεύθερος για πρώτη βόλτα στην Παλιά Πόλη και στο Ενετικό Λιμάνι. Διανυκτέρευση στα Χανιά.',
        day2: '2η Μέρα: Χανιά – Κολυμπάρι – Σπήλαιο Αγ. Ιωάννη Ερημίτη – Θέρισσος – Χανιά\n\nΠρωινό και ξεκινάμε με περιήγηση στα Χανιά: γραφικά σοκάκια, βενετσιάνικα αρχοντικά και το ιστορικό λιμάνι. Στη συνέχεια αναχωρούμε προς Κολυμπάρι, έναν ήσυχο παραθαλάσσιο οικισμό με όμορφη φύση και χαλαρή ατμόσφαιρα.\n\nΑκολουθεί επίσκεψη στο Σπήλαιο Αγ. Ιωάννη Ερημίτη, ένα εντυπωσιακό φυσικό μνημείο με ιδιαίτερη ατμόσφαιρα.\n\nΣυνεχίζουμε για Θέρισσο, περιοχή με έντονη ιστορική σημασία και παραδοσιακό κρητικό χαρακτήρα. Χρόνος για βόλτα/γεύμα (προαιρετικά) και επιστροφή το απόγευμα στα Χανιά. Διανυκτέρευση.',
        day3: '3η Μέρα: Χανιά – Μονή Τιμίου Προδρόμου – Τάφοι Βενιζέλων – Χανιά\n\nΠρωινό και αναχώρηση για τους Τάφους των Βενιζέλων, σημείο ιστορικής και εθνικής σημασίας με πανοραμική θέα.\n\nΣτη συνέχεια επίσκεψη στη Μονή Τιμίου Προδρόμου, ένα ήσυχο πνευματικό σημείο με έντονο τοπικό χρώμα. Επιστροφή στα Χανιά το απόγευμα. Ελεύθερος χρόνος. Διανυκτέρευση.',
        day4: '4η Μέρα: Χανιά – Λίμνη Κουρνά – Ρέθυμνο (περιήγηση) – Ηράκλειο\n\nΜετά το πρόγευμα αναχώρηση για Ηράκλειο.\n\n1η στάση: Λίμνη Κουρνά, η μοναδική φυσική γλυκιά λίμνη της Κρήτης, ιδανική για χαλαρή βόλτα και φωτογραφίες.\n\nΣυνεχίζουμε για Ρέθυμνο και ακολουθεί περιήγηση στην Παλιά Πόλη: γραφικά σοκάκια, ενετικό λιμάνι και εξωτερική θέα της Φορτέτζας. Χρόνος για καφέ/βόλτα (προαιρετικά).\n\nΆφιξη στο Ηράκλειο και τακτοποίηση στο ξενοδοχείο. Διανυκτέρευση στο Ηράκλειο.',
        day5: '5η Μέρα: Ηράκλειο – Ελούντα – Σπιναλόγκα – Άγιος Νικόλαος – Ηράκλειο – Λάρνακα\n\nΜετά το πρωινό, αναχώρηση για Ελούντα, έναν από τους πιο γνωστούς και όμορφους προορισμούς της Κρήτης.\n\nΕπιβίβαση σε πλοιάριο προς Σπιναλόγκα. Ελεύθερος χρόνος στο νησί και επιστροφή στην Πλάκα.\n\nΣυνεχίζουμε για Άγιο Νικόλαο, με χρόνο για βόλτα στη λίμνη Βουλισμένη και στην παραλία.\n\nΣτη συνέχεια μεταφορά στο αεροδρόμιο Ηρακλείου για την πτήση επιστροφής στη Λάρνακα.'
      },
      gallery: [
        '/images/destinations/greece-hero.webp'
      ]
    }
  },
  {
    id: 60,
    title: 'ΠΑΣΧΑ ΣΤΗ ΜΑΛΤΑ',
    destination: 'Europe',
    category: 'Easter Packages',
    price: 745,
    duration: '5 days / 4 nights',
    description: 'Ανακαλύψτε τη Μάλτα, το νησί των Ιπποτών! Επισκεφτείτε τη Βαλέτα, την Καλκάρα, το Χωριό του Πόπαϋ, τη Μόστα, τη Μεδίνα, το Τα Άλι, το Gozo και πολλά άλλα αξιοθέατα.',
    longDescription: 'Η Μάλτα, το νησί των Ιπποτών, είναι ένας μοναδικός προορισμός που συνδυάζει πλούσια ιστορία, αρχιτεκτονική και φυσική ομορφιά. Από τη Βαλέτα με τα επιβλητικά τείχη και τους Κήπους Upper Barrakka, στην Καλκάρα, το Χωριό του Πόπαϋ, τη Μόστα, τη Μεδίνα, το Τα Άλι και το Gozo. Μια εμπειρία 5 ημερών γεμάτη αξιοθέατα, πολιτισμό και διασκέδαση.',
    image: '🇲🇹',
    featured: true,
    details: {
      departureDate: '14/04',
      departureFrom: 'Larnaca',
      destinationFull: 'Valletta, Kalkara, Popeye Village, Mosta, Mdina, Ta\' Qali, Gozo – Malta',
      monthAvailability: 'April',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Emirates Airlines',
      includedLuggage: '1 αποσκευή έως 25kg & 1 χειραποσκευή έως 7kg ανά άτομο',
      coverImage: '/images/destinations/malta-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '14/04',
          route: 'Larnaca (LCA) → Malta (MLA)',
          flight: 'EK 109',
          time: '12:15 → 14:00',
          luggage: '1 αποσκευή έως 25kg & 1 χειραποσκευή έως 7kg'
        },
        {
          direction: 'Return',
          date: '14/04',
          route: 'Malta (MLA) → Larnaca (LCA)',
          flight: 'EK 110',
          time: '15:30 → 18:55',
          luggage: '1 αποσκευή έως 25kg & 1 χειραποσκευή έως 7kg'
        }
      ],
      hotels: [
        {
          name: 'Alexandra Hotel – Malta',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/alexandra-malta.webp',
          location: 'Schreiber Street, Malta',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 745,
            single: 895,
            child1: 725,
            child2: 685
          },
          packagePrice: 1490,
          departureDate: '14/04',
          nights: 4
        },
        {
          name: 'Mercure Hotel – Malta',
          stars: 4,
          roomType: 'Standard Room',
          image: '/images/hotels/mercure-malta.webp',
          location: 'Qaliet Street, St. Julian\'s',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 865,
            single: 1155,
            child1: 585
          },
          packagePrice: 1730,
          departureDate: '14/04',
          nights: 4
        },
        {
          name: 'InterContinental Hotel & Resort – Malta',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/intercontinental-malta.webp',
          location: 'St George\'s Bay, St Julian\'s',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 1155,
            single: 1645,
            child1: 585,
            child2: 585
          },
          packagePrice: 2310,
          departureDate: '14/04',
          nights: 4
        },
        {
          name: 'Malta Marriott Hotel & Spa – Malta',
          stars: 5,
          roomType: 'Standard Room',
          image: '/images/hotels/marriott-malta.webp',
          location: 'Balluta Bay, St Julian\'s',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 1155,
            single: 1645,
            child1: 585,
            child2: 585
          },
          packagePrice: 2310,
          departureDate: '14/04',
          nights: 4
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Μάλτα – Λάρνακα με Emirates Airlines',
        'Φόροι αεροδρομίων & επίναυλος καυσίμων',
        '4 διανυκτερεύσεις στο ξενοδοχείο επιλογής με πρόγευμα',
        'Μεταφορές, εκδρομές & περιηγήσεις με πολυτελή πούλμαν',
        'Εισιτήρια εισόδου: Playmobil, Χωριό του Πόπαϋ & Esplora',
        'Τοπικός ελληνόφωνος ξεναγός στις εκδρομές',
        'Τοπικός ελληνόφωνος συνοδός στα πάρκα',
        '1 αποσκευή έως 25kg & 1 χειραποσκευή έως 7kg ανά άτομο',
        'Υπηρεσίες αντιπροσώπων'
      ],
      notIncluded: [
        'Αχθοφορικά & φιλοδωρήματα',
        'Ασφάλεια ταξιδιού',
        'Δικαιώματα εισόδων όπου δεν αναφέρεται ρητά',
        'Τοπικός φόρος ξενοδοχείου (€0,50/άτομο/βράδυ – πληρώνεται επιτόπου)',
        'Οτιδήποτε δεν αναφέρεται ρητά ή είναι προαιρετικό'
      ],
      note: 'Ελάχιστη συμμετοχή: 20 άτομα. Η σειρά του προγράμματος ενδέχεται να αλλάξει χωρίς απώλεια υπηρεσιών.',
      cancellationPolicy: 'Έως 45 ημέρες πριν: €50/άτομο. 44–31 ημέρες πριν: 30% της αξίας. 30–21 ημέρες πριν: 50% της αξίας. 20–0 ημέρες πριν: 100% της αξίας. No-show: 100%.',
      termsAndConditions: [
        'Ελάχιστη συμμετοχή: 20 άτομα',
        'Η σειρά του προγράμματος ενδέχεται να αλλάξει χωρίς απώλεια υπηρεσιών',
        'Προκαταβολή 30% με την κράτηση',
        'Εξόφληση ~21 ημέρες πριν την αναχώρηση',
        'Ακυρώσεις: Έως 45 ημέρες πριν: €50/άτομο',
        '44–31 ημέρες πριν: 30%',
        '30–21 ημέρες πριν: 50%',
        '20–0 ημέρες πριν: 100%',
        'No-show: 100%'
      ],
      program: {
        introduction: 'ΠΑΣΧΑ ΣΤΗ ΜΑΛΤΑ - 5 Μέρες\n\nΗ Μάλτα, το νησί των Ιπποτών, είναι ένας μοναδικός προορισμός που συνδυάζει πλούσια ιστορία, αρχιτεκτονική και φυσική ομορφιά. Από τη Βαλέτα με τα επιβλητικά τείχη και τους Κήπους Upper Barrakka, στην Καλκάρα, το Χωριό του Πόπαϋ, τη Μόστα, τη Μεδίνα, το Τα Άλι και το Gozo. Μια εμπειρία 5 ημερών γεμάτη αξιοθέατα, πολιτισμό και διασκέδαση.',
        day1: '1η Μέρα: Λάρνακα – Μάλτα\n\nΑναχώρηση από το αεροδρόμιο Λάρνακας με προορισμό τη Μάλτα, το νησί των Ιπποτών. Άφιξη στο αεροδρόμιο Luqa, υποδοχή και μεταφορά στο ξενοδοχείο. Τακτοποίηση στα δωμάτια και ελεύθερος χρόνος για μια πρώτη γνωριμία με το νησί. Διανυκτέρευση.',
        day2: '2η Μέρα: Esplora Science Centre – Βαλέτα (Ξενάγηση)\n\nΜετά το πρόγευμα αναχώρηση για την Καλκάρα, όπου θα επισκεφθούμε το διαδραστικό επιστημονικό κέντρο Esplora. Με περισσότερα από 200 εσωτερικά και εξωτερικά εκθέματα, προσφέρει μια μοναδική εμπειρία μάθησης και διασκέδασης για όλες τις ηλικίες.\n\nΣτη συνέχεια αναχώρηση για τη Βαλέτα, την ιστορική πρωτεύουσα της Μάλτας. Περιήγηση στην πόλη των Ιπποτών με τα επιβλητικά τείχη, επίσκεψη στους Κήπους Upper Barrakka με πανοραμική θέα στο Μεγάλο Λιμάνι και τις Τρεις Πόλεις (Σένγκλεα, Βιτοριόζα, Κοσπίκουα). Θα δούμε τον Καθεδρικό Ναό του Αγίου Ιωάννη, το Κοινοβούλιο, το Προεδρικό Μέγαρο και το Παλάτι των Ιπποτών. Επιστροφή στο ξενοδοχείο. Διανυκτέρευση.',
        day3: '3η Μέρα: Χωριό του Πόπαϋ – Μόστα – Μεδίνα – Τα Άλι\n\nΜετά το πρόγευμα αναχώρηση για το διάσημο Χωριό του Πόπαϋ, ένα υπαίθριο θεματικό πάρκο και μουσείο, ιδανικό για οικογένειες, με δραστηριότητες, σπιτάκια και παιχνίδια.\n\nΣυνεχίζουμε για τη Μόστα, όπου θα επισκεφθούμε τον καθεδρικό ναό της Κοιμήσεως της Θεοτόκου με τον τρίτο μεγαλύτερο τρούλο στην Ευρώπη.\n\nΕπόμενη στάση η Μεδίνα, η παλιά πρωτεύουσα της Μάλτας, γνωστή ως «Σιωπηλή Πόλη». Περιπλάνηση στα μεσαιωνικά σοκάκια, ανάμεσα σε παλάτια και κτίρια που παραμένουν σχεδόν αναλλοίωτα εδώ και αιώνες.\n\nΣτη συνέχεια επίσκεψη στο εργαστήριο φυσητού γυαλιού στο Τα Άλι, όπου θα δούμε από κοντά την παραδοσιακή τεχνική κατασκευής γυάλινων αντικειμένων από την εποχή των Φοινίκων. Επιστροφή στο ξενοδοχείο. Διανυκτέρευση.',
        day4: '4η Μέρα: Μάλτα (Ελεύθερη Μέρα)\n\nΗμέρα ελεύθερη. Προαιρετικά προτείνεται εκδρομή στο νησί Gozo, το δεύτερο μεγαλύτερο νησί του αρχιπελάγους της Μάλτας. Επίσκεψη στους Μεγαλιθικούς Ναούς Ggantija (παλαιότερους από τις Πυραμίδες της Αιγύπτου), την οχυρωμένη πόλη Βικτώρια, το χωριό Φοντάνα και το γραφικό ψαροχώρι Σλέντι. Επιστροφή και διανυκτέρευση.',
        day5: '5η Μέρα: Μάλτα – Playmobil – Λάρνακα\n\nΠρόγευμα και αναχώρηση για το πάρκο διασκέδασης Playmobil. Το πάρκο διαθέτει θεματικές ενότητες όπως Πειρατές, Αστυνομία και Ιππότες, όπου τα παιδιά μπορούν να παίξουν ελεύθερα με τα παιχνίδια Playmobil. Χρόνος για φαγητό (προαιρετικά) και μεταφορά στο αεροδρόμιο για την πτήση επιστροφής στη Λάρνακα.'
      },
      gallery: [
        '/images/destinations/malta-hero.webp'
      ]
    }
  },
  {
    id: 62,
    title: 'ΜΑΓΕΥΤΙΚΗ ΓΕΩΡΓΙΑ',
    destination: 'Georgia',
    category: 'Summer Packages',
    price: 795,
    duration: '5 days / 4 nights',
    description: '5ήμερο οργανωμένο ταξίδι στην Τιφλίδα και την Καχέτι με ξεναγήσεις, οινογνωσία και παραδοσιακό δείπνο με μουσική.',
    longDescription: 'Ανακαλύψτε τη Γεωργία σε 5 ημέρες: Τιφλίδα, Μτσχέτα, Γκόρι, Ουπλιστσικέ, Μποντμπέ, Σιγκνάγκι και Καχέτι. Ένα πρόγραμμα που συνδυάζει ιστορία, πολιτισμό, γαστρονομία και αυθεντική φιλοξενία.',
    image: '🇬🇪',
    featured: true,
    details: {
      departureDate: '04/08, 11/08, 18/08',
      departureFrom: 'Larnaca',
      destinationFull: 'Tbilisi, Mtskheta, Gori, Uplistsikhe, Kakheti, Georgia',
      monthAvailability: 'August',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Georgian Airways',
      includedLuggage: '1 checked bag 23kg + 1 hand luggage 8kg',
      coverImage: '/images/categories/summer-travel-package-cover.webp',
      flights: [
        {
          direction: 'Departure',
          date: '04/08, 11/08, 18/08',
          route: 'Larnaca International Airport (LCA) → Tbilisi International Airport (TBS)',
          flight: 'A9 774',
          time: '19:00 → 21:50',
          luggage: '1 checked bag included'
        },
        {
          direction: 'Return',
          date: '08/08, 15/08, 22/08',
          route: 'Tbilisi International Airport (TBS) → Larnaca International Airport (LCA)',
          flight: 'A9 773',
          time: '17:00 → 18:10',
          luggage: '1 checked bag included'
        }
      ],
      hotels: [
        {
          name: '3* Hotel Tbilisi',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/categories/summer-travel-package-cover.webp',
          location: 'Tbilisi, Georgia',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 795,
            single: 935,
            child1: 775
          },
          packagePrice: 1590,
          departureDate: '04/08',
          nights: 4
        },
        {
          name: '3* Hotel Tbilisi',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/categories/summer-travel-package-cover.webp',
          location: 'Tbilisi, Georgia',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 839,
            single: 955,
            child1: 819
          },
          packagePrice: 1678,
          departureDate: '11/08',
          nights: 4
        },
        {
          name: '3* Hotel Tbilisi',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/categories/summer-travel-package-cover.webp',
          location: 'Tbilisi, Georgia',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 865,
            single: 979,
            child1: 845
          },
          packagePrice: 1730,
          departureDate: '18/08',
          nights: 4
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Τιφλίδα – Λάρνακα με απευθείας πτήση της Georgian Airways',
        'Φόροι αεροδρομίων',
        'Μεταφορές, εκδρομές, περιηγήσεις και ξεναγήσεις σύμφωνα με το πρόγραμμα',
        'Διαμονή 4 διανυκτερεύσεις σε ξενοδοχείο 3* με πρόγευμα',
        'Δείπνο με παραδοσιακή μουσική',
        'Εισιτήρια εισόδων: Εθνικό Μουσείο, Ουπλιστσικέ, Μουσείο Στάλιν, κτήμα Τσιναντάλι',
        'Γευσιγνωσία οίνου σε τοπικό οινοποιείο',
        'Ελληνόφωνος ξεναγός / αρχηγός',
        'Μία αποσκευή 23kg και μία χειραποσκευή 8kg',
        'Υπηρεσίες αντιπροσώπων'
      ],
      notIncluded: [
        'Δικαιώματα εισόδων προαιρετικά',
        'Οτιδήποτε δεν αναφέρεται ρητά στο πρόγραμμα ή αναφέρεται ως προαιρετικό / προτεινόμενο'
      ],
      cancellationPolicy: 'Σε περίπτωση ακύρωσης μέχρι 45 ημέρες πριν την άφιξη: χρέωση €50/άτομο. Από 45 έως 30 ημέρες: 30% της συνολικής τιμής. Από 30 έως 21 ημέρες: 50% της συνολικής τιμής. Από 21 έως 0 ημέρες: 100% της συνολικής τιμής. Σε περίπτωση μη εμφάνισης: 100%.',
      termsAndConditions: [
        'Οι τιμές των ταξιδιωτικών πακέτων δεν αλλάζουν κατά την ώρα της κράτησης',
        'Με την κράτηση δίνεται προκαταβολή 30% της αξίας',
        'Η εξόφληση γίνεται περίπου 21 μέρες πριν την αναχώρηση',
        'Ακύρωση έως 45 μέρες πριν: παρακράτηση €50 ανά άτομο',
        'Ακύρωση 44–31 μέρες πριν: παρακράτηση 30%',
        'Ακύρωση 30–21 μέρες πριν: παρακράτηση 50%',
        'Ακύρωση 20 μέρες πριν την αναχώρηση: παρακράτηση 100%',
        'Για charter, κρουαζιέρες, σκι, εκθέσεις, συνέδρια και συναφείς διεθνείς εκδηλώσεις, τα ακυρωτικά μπορεί να φτάνουν έως 100% ασχέτως ημερομηνίας γνωστοποίησης'
      ],
      program: {
        introduction: 'ΜΑΓΕΥΤΙΚΗ ΓΕΩΡΓΙΑ - 5 Μέρες\n\nΈνα πλούσιο ταξίδι στη Γεωργία με βάση την ατμοσφαιρική Τιφλίδα. Ανακαλύψτε ιστορικές πόλεις, μοναστήρια, αρχαιολογικούς χώρους και την περίφημη οινική περιοχή της Καχέτι.',
        day1: '1η Μέρα: Λάρνακα – Τιφλίδα\n\nΣυγκέντρωση στο αεροδρόμιο Λάρνακας και αναχώρηση για την πρωτεύουσα της Γεωργίας, την ατμοσφαιρική Τιφλίδα. Άφιξη και μεταφορά στο ξενοδοχείο. Τακτοποίηση στα δωμάτια και ελεύθερος χρόνος για πρώτη γνωριμία με την πόλη. Διανυκτέρευση.',
        day2: '2η Μέρα: Τιφλίδα (ξενάγηση)\n\nΠρωινό και ξενάγηση στην Τιφλίδα: Μετέχι, φρούριο Ναρίκαλα, Αμπανοτούμπανι, Παλιά Πόλη, οδός Shardeni, Συναγωγή, Sioni, Anchiskhati, Γέφυρα της Ειρήνης και επίσκεψη στο Εθνικό Μουσείο της Γεωργίας.',
        day3: '3η Μέρα: Τιφλίδα – Μτσχέτα – Γκόρι – Ουπλιστσικέ – Τιφλίδα\n\nΕκδρομή στη Μτσχέτα (UNESCO), επίσκεψη στη Μονή Jvari και τον Καθεδρικό Svetitskhoveli. Συνεχίζουμε στο Γκόρι με επίσκεψη στο Μουσείο Στάλιν και στην αρχαία λαξευτή πόλη Ουπλιστσικέ. Επιστροφή στην Τιφλίδα.',
        day4: '4η Μέρα: Τιφλίδα – Μποντμπέ – Σιγκνάγκι – Οινοποιείο Khareba – Τσιναντάλι – Τιφλίδα\n\nΑναχώρηση για Καχέτι: Μονή Μποντμπέ, περιήγηση στη «Πόλη της Αγάπης» Σιγκνάγκι, επίσκεψη και γευσιγνωσία στο οινοποιείο Khareba, επίσκεψη στο ιστορικό Τσιναντάλι. Επιστροφή στην Τιφλίδα. Αποχαιρετιστήριο δείπνο με παραδοσιακή μουσική και χορούς.',
        day5: '5η Μέρα: Τιφλίδα – Λάρνακα\n\nΠρωινό και ελεύθερος χρόνος για τελευταία βόλτα ή αγορές (π.χ. λεωφόρος Rustaveli, Dry Bridge market). Μεταφορά στο αεροδρόμιο και πτήση επιστροφής για Λάρνακα.'
      },
      gallery: [
        '/images/categories/summer-travel-package-cover.webp'
      ]
    }
  },
  {
    id: 61,
    title: 'ΘΗΣΑΥΡΟΙ ΠΕΛΟΠΟΝΝΗΣΟΥ / ΝΑΥΠΑΚΤΟΣ',
    destination: 'Greece',
    category: 'Easter Packages',
    price: 679,
    duration: '5 days / 4 nights',
    description: 'Ανακαλύψτε τους θησαυρούς της Πελοποννήσου! Επισκεφτείτε την Πάτρα, τη Ναύπακτο, τα Τριζόνια, την Ορεινή Αρκαδία, τη Σπάρτη, τη Μονεμβασιά και το Ναύπλιο.',
    longDescription: 'Μια περιήγηση στην Πελοπόννησο που σας οδηγεί στα πιο όμορφα και ιστορικά σημεία της. Από την Πάτρα και τη Ναύπακτο, στα Τριζόνια, την Ορεινή Αρκαδία, τη Σπάρτη, τη Μονεμβασιά και το Ναύπλιο. Ανακαλύψτε την ιστορία, τη φύση και την παραδοσιακή αρχιτεκτονική της Πελοποννήσου.',
    image: '🇬🇷',
    featured: true,
    details: {
      departureDate: '29/04',
      departureFrom: 'Larnaca',
      destinationFull: 'Patra, Nafpaktos, Trizonia, Mountainous Arcadia, Sparta, Monemvasia, Nafplio – Peloponnese, Greece',
      monthAvailability: 'April',
      roomType: 'Standard Room',
      boardBasis: 'Bed & Breakfast',
      airline: 'Cyprus Airways',
      includedLuggage: '1 αποσκευή 20kg & 1 χειραποσκευή 8kg',
      coverImage: '/images/destinations/greece-hero.webp',
      flights: [
        {
          direction: 'Departure',
          date: '29/04',
          route: 'Larnaca (LCA) → Athens (ATH)',
          flight: 'CY 310',
          time: '07:45 → 09:40',
          luggage: '1 αποσκευή 20kg & 1 χειραποσκευή 8kg'
        },
        {
          direction: 'Return',
          date: '29/04',
          route: 'Athens (ATH) → Larnaca (LCA)',
          flight: 'CY 313',
          time: '20:55 → 22:40',
          luggage: '1 αποσκευή 20kg & 1 χειραποσκευή 8kg'
        }
      ],
      hotels: [
        {
          name: 'Galaxy Hotel – Patra',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/destinations/patra-hotel.webp',
          location: 'Patra, Greece',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 679,
            single: 819,
            triple: 649,
            child: 589
          },
          packagePrice: 1358,
          departureDate: '29/04',
          nights: 2,
          description: 'Ανακαινισμένο city hotel, κοντά στο λιμάνι. Μοντέρνα δωμάτια, δωρεάν Wi-Fi, αμερικανικό πρωινό σε μπουφέ, άνετοι κοινόχρηστοι χώροι.'
        },
        {
          name: 'Menelaion Hotel – Sparta',
          stars: 3,
          roomType: 'Standard Room',
          image: '/images/hotels/menelaion-sparta.webp',
          location: 'Sparta, Greece',
          boardBasis: 'Bed & Breakfast',
          prices: {
            double: 679,
            single: 819,
            triple: 649,
            child: 589
          },
          packagePrice: 1358,
          departureDate: '29/04',
          nights: 2,
          description: 'Κεντρικό ξενοδοχείο με εξωτερική πισίνα, εστιατόριο, μπαρ, 24ωρη ρεσεψιόν και δωρεάν Wi-Fi. Άνετα δωμάτια με κλιματισμό και ιδιωτικό μπάνιο.'
        }
      ],
      included: [
        'Αεροπορικά εισιτήρια Λάρνακα – Αθήνα – Λάρνακα (Cyprus Airways)',
        'Φόροι αεροδρομίων',
        '2 διανυκτερεύσεις σε ξενοδοχείο 3★ στην Πάτρα με πρωινό',
        '2 διανυκτερεύσεις σε ξενοδοχείο 3★ στη Σπάρτη με πρωινό',
        'Μεταφορές, εκδρομές & περιηγήσεις σύμφωνα με το πρόγραμμα',
        'Καραβάκι για Τριζόνια',
        'Αρχηγός / συνοδός γραφείου',
        'Τέλος ανθεκτικότητας στην κλιματική κρίση',
        '1 αποσκευή 20kg & 1 χειραποσκευή 8kg',
        'Υπηρεσίες αντιπροσώπων'
      ],
      notIncluded: [
        'Είσοδοι σε αρχαιολογικούς χώρους & μουσεία (προαιρετικά)',
        'Ό,τι δεν αναφέρεται ρητά στο πρόγραμμα'
      ],
      note: '',
      cancellationPolicy: 'Έως 45 ημέρες πριν: €50 ανά άτομο. 44–31 ημέρες πριν: 30% της αξίας. 30–21 ημέρες πριν: 50% της αξίας. 21–0 ημέρες πριν: 100% της αξίας. No-show: 100%.',
      termsAndConditions: [
        'Προκαταβολή 30% με την κράτηση',
        'Εξόφληση ~21 ημέρες πριν την αναχώρηση',
        'Ακυρώσεις: Έως 45 ημέρες πριν: €50 ανά άτομο',
        '44–31 ημέρες πριν: 30%',
        '30–21 ημέρες πριν: 50%',
        '21–0 ημέρες πριν: 100%',
        'No-show: 100%'
      ],
      program: {
        introduction: 'ΘΗΣΑΥΡΟΙ ΠΕΛΟΠΟΝΝΗΣΟΥ / ΝΑΥΠΑΚΤΟΣ - 5 Μέρες\n\nΜια περιήγηση στην Πελοπόννησο που σας οδηγεί στα πιο όμορφα και ιστορικά σημεία της. Από την Πάτρα και τη Ναύπακτο, στα Τριζόνια, την Ορεινή Αρκαδία, τη Σπάρτη, τη Μονεμβασιά και το Ναύπλιο. Ανακαλύψτε την ιστορία, τη φύση και την παραδοσιακή αρχιτεκτονική της Πελοποννήσου.',
        day1: '1η Μέρα: Λάρνακα – Αθήνα – Πάτρα\n\nΑναχώρηση από το αεροδρόμιο Λάρνακας για Αθήνα με πτήση της Cyprus Airways. Άφιξη και υποδοχή από τον αρχηγό μας. Αναχώρηση με πολυτελές πούλμαν για Πάτρα, με ενδιάμεση στάση για καφέ. Κατά τη διαδρομή απολαμβάνουμε εικόνες από τη Στερεά Ελλάδα και διέλευση από τη γέφυρα Ρίου–Αντιρρίου, ένα από τα σημαντικότερα σύγχρονα τεχνικά έργα της χώρας.\n\nΆφιξη στην Πάτρα, ζωντανή παραλιακή πόλη με έντονο εμπορικό και πολιτιστικό χαρακτήρα, γνωστή για το Πατρινό Καρναβάλι. Τακτοποίηση στο ξενοδοχείο και ελεύθερος χρόνος για ξεκούραση ή περίπατο στην παραλιακή ζώνη. Διανυκτέρευση.',
        day2: '2η Μέρα: Πάτρα – Ναύπακτο – Τριζόνια\n\nΠρωινό και αναχώρηση για τη Ναύπακτο, μία από τις πιο γραφικές πόλεις της Ελλάδας. Περιήγηση στο ενετικό λιμάνι και το καλοδιατηρημένο κάστρο με την πανοραμική θέα στον Κορινθιακό κόλπο. Χρόνος ελεύθερος για καφέ (προαιρετικά).\n\nΣυνεχίζουμε προς το χωριό Χάνια, απ\' όπου θα πάρουμε το καραβάκι για τα Τριζόνια, το μοναδικό κατοικημένο νησί της Ελλάδας χωρίς αυτοκίνητα. Περίπατος στα γραφικά σοκάκια και χρόνος για προαιρετικό γεύμα σε παραθαλάσσια ταβέρνα. Επιστροφή στην Πάτρα. Διανυκτέρευση.',
        day3: '3η Μέρα: Πάτρα – Βυτίνα – Ορεινή Αρκαδία – Σπάρτη\n\nΜετά το πρωινό αναχώρηση για την Ορεινή Αρκαδία, περιοχή μοναδικής φυσικής ομορφιάς. Στάση στη γραφική Βυτίνα με την παραδοσιακή αρχιτεκτονική και το καταπράσινο τοπίο. Χρόνος για βόλτα και καφέ.\n\nΣυνεχίζουμε για Δημητσάνα, παραδοσιακό οικισμό με πέτρινα αρχοντικά και πλούσια ιστορία. Δυνατότητα επίσκεψης στο Υπαίθριο Μουσείο Υδροκίνησης (προαιρετικά). Περνάμε από τη Στεμνίτσα, γνωστή για την παράδοση στην αργυροχρυσοχοΐα.\n\nΆφιξη στη Σπάρτη, τακτοποίηση στο ξενοδοχείο και ελεύθερος χρόνος για βόλτα στην κεντρική πλατεία. Διανυκτέρευση.',
        day4: '4η Μέρα: Σπάρτη – Μονεμβασιά\n\nΠρωινό και αναχώρηση για τη μαγευτική Μονεμβασιά, την «πέτρινη καστροπολιτεία». Περιήγηση στην Κάτω Πόλη με τα λιθόστρωτα σοκάκια, τα πέτρινα αρχοντικά, τις βυζαντινές εκκλησίες και το σπίτι του Γιάννη Ρίτσου. Χρόνος ελεύθερος για φαγητό ή καφέ (προαιρετικά). Επιστροφή στη Σπάρτη. Διανυκτέρευση.',
        day5: '5η Μέρα: Σπάρτη – Ναύπλιο – Αθήνα – Λάρνακα\n\nΠρωινό και αναχώρηση για το Ναύπλιο, την πρώτη πρωτεύουσα της σύγχρονης Ελλάδας. Επίσκεψη στο Παλαμήδι με τη μοναδική θέα στον Αργολικό κόλπο. Περιήγηση στην Παλιά Πόλη με την Ακροναυπλία, την πλατεία Συντάγματος και τα ιστορικά κτίρια.\n\nΧρόνος ελεύθερος για γεύμα ή καφέ (προαιρετικά). Αναχώρηση για το αεροδρόμιο Αθηνών και πτήση επιστροφής στη Λάρνακα, γεμάτοι εικόνες και εμπειρίες από την Πελοπόννησο.'
      },
      gallery: [
        '/images/destinations/greece-hero.webp'
      ]
    }
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






