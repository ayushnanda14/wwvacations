export interface Package {
  id: string;
  packageName: string;
  duration: string;
  type: 'Domestic' | 'International';
  imageUrl: string;
  description: string;
  highlights: string[];
  destination: string;
  category: string;
  price?: string;
  rating?: number;
  difficulty?: 'Easy' | 'Easy to Moderate' | 'Moderate' | 'Challenging';
  bestTime?: string;
  groupSize?: string;
  accommodation?: string;
  meals?: string;
  transportation?: string;
  activities?: string[];
  itinerary?: DayItinerary[];
  inclusions?: string[];
  exclusions?: string[];
  terms?: string[];
}

export interface DayItinerary {
  day: number;
  title: string;
  description: string;
  activities: string[];
  accommodation?: string;
  meals?: string[];
}


export const packagesData: Package[] =
  [
    {
      "id": "package_1",
      "packageName": "Exotic Bali Tour (5 Nights / 6 Days)",
      "duration": "5 Nights / 6 Days",
      "type": "International",
      "imageUrl": "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "description": "A perfect blend of Bali's stunning nature, thrilling adventure, and rich culture. This tour offers stays in handpicked resorts and is ideal for couples, families, and adventure seekers looking for a paradise escape.",
      "highlights": [
        "Sunsets & Beaches",
        "Ubud & Rice Terraces",
        "Nusa Penida Island Hopping",
        "Balinese Culture & Cuisine"
      ],
      "destination": "Bali, Indonesia",
      "category": "Beach & Island Getaways",
      "price": "Starts from ₹XX,XXX per person",
      "difficulty": "Easy",
      "bestTime": "April to October",
      "accommodation": "4-star hotels",
      "meals": "Daily Breakfast",
      "transportation": "Private vehicle",
      "activities": [
        "Beach visits",
        "Volcano tour",
        "Rice terrace exploration",
        "Island hopping",
        "Temple tours",
        "Water sports (optional)"
      ],
      "inclusions": [
        "5 Nights Accommodation in 4-star hotels",
        "Daily Breakfast at the hotel",
        "Airport Transfers & Private Transport",
        "Ubud & Kintamani Sightseeing Tour",
        "Nusa Penida Island Day Trip with Lunch",
        "Tanah Lot & Uluwatu Temple Tour",
        "English-Speaking Guide & Assistance"
      ],
      "exclusions": [
        "International Flights",
        "Bali Visa Fee",
        "Personal expenses",
        "Travel Insurance",
        "Optional Activities (Water Sports, Spa, Nightlife)"
      ],
      "terms": [
        "50% advance payment required at booking",
        "Remaining 50% to be paid upon arrival",
        "Cancellation charges apply based on the timeframe",
        "Valid passport with 6 months validity required"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Bali & Sunset at Seminyak Beach",
          "description": "Arrive in Denpasar, transfer to your hotel, and spend the evening enjoying the famous sunset at Seminyak Beach.",
          "activities": [
            "Airport pickup",
            "Hotel check-in",
            "Visit Seminyak Beach"
          ],
          "accommodation": "Kuta",
          "meals": [
            "None"
          ]
        },
        {
          "day": 2,
          "title": "Kintamani Volcano & Ubud Sightseeing",
          "description": "A full day exploring the cultural heart of Bali, including an active volcano, iconic rice terraces, and the famous Monkey Forest.",
          "activities": [
            "Visit Kintamani Highland (Mount Batur & Lake Batur)",
            "Explore Tegallalang Rice Terraces",
            "Visit Sacred Monkey Forest",
            "Stroll through Ubud Art Market & Palace"
          ],
          "accommodation": "Ubud",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 3,
          "title": "Nusa Penida Island Adventure",
          "description": "Take a speedboat to the stunning island of Nusa Penida to discover its famous T-Rex shaped cliff, natural rock formations, and crystal-clear snorkeling spots.",
          "activities": [
            "Speedboat to Nusa Penida",
            "Visit Kelingking Beach",
            "Explore Broken Beach & Angel's Billabong",
            "Swim/snorkel at Crystal Bay"
          ],
          "accommodation": "Kuta",
          "meals": [
            "Breakfast",
            "Lunch"
          ]
        },
        {
          "day": 4,
          "title": "Spiritual Temple Tour",
          "description": "Explore Bali's most iconic sea temples, Tanah Lot and Uluwatu, and witness the dramatic Kecak Fire Dance performance at sunset.",
          "activities": [
            "Visit Tanah Lot Temple",
            "Explore Uluwatu Temple",
            "Watch Kecak Fire Dance"
          ],
          "accommodation": "Kuta",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 5,
          "title": "Water Sports & Beach Relaxation",
          "description": "Enjoy a day of thrilling water activities at Tanjung Benoa beach, followed by relaxation at the scenic Padang Padang Beach.",
          "activities": [
            "Water Sports at Tanjung Benoa Beach (optional)",
            "Relax at Padang Padang Beach",
            "Balinese Spa & Massage (optional)"
          ],
          "accommodation": "Kuta",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 6,
          "title": "Shopping & Departure",
          "description": "Enjoy some last-minute souvenir shopping before being transferred to the airport for your departure.",
          "activities": [
            "Shopping at Krisna Souvenir Market",
            "Airport transfer"
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },
    {
      "id": "package_2",
      "packageName": "Exotic Bali Tour Package (7 Nights / 8 Days)",
      "duration": "7 Nights / 8 Days",
      "type": "International",
      "imageUrl": "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      "description": "An extended and immersive journey through Bali's best, combining nature, adventure, and culture. Perfect for those who want to experience everything from iconic sunsets and temples to thrilling water sports and the famous Bali Swing.",
      "highlights": [
        "Iconic Sunsets & Beaches",
        "Ubud & Rice Terraces",
        "Nusa Penida Snorkeling",
        "Bali Swing Experience"
      ],
      "destination": "Bali, Indonesia",
      "category": "Beach & Island Getaways",
      "price": "Starts from ₹XX,XXX per person",
      "difficulty": "Easy",
      "bestTime": "April to October",
      "accommodation": "4-star hotels",
      "meals": "Daily Breakfast",
      "transportation": "Private vehicle",
      "activities": [
        "Beach visits",
        "Volcano tour",
        "Island hopping",
        "Temple tours",
        "Water sports",
        "Bali Swing"
      ],
      "inclusions": [
        "7 Nights Accommodation in 4-star hotels",
        "Daily Breakfast at the hotel",
        "Airport Transfers & Private Transport",
        "Ubud & Kintamani Sightseeing Tour",
        "Nusa Penida Island Day Trip with Lunch",
        "Tanah Lot & Uluwatu Temple Tour",
        "Water Sports Activity at Tanjung Benoa Beach",
        "Bali Swing Experience",
        "English-Speaking Guide & Assistance"
      ],
      "exclusions": [
        "International Flights",
        "Bali Visa Fee",
        "Personal expenses",
        "Travel Insurance",
        "Optional Activities (Spa, Nightlife)"
      ],
      "terms": [
        "50% advance payment required at booking",
        "Remaining 50% to be paid upon arrival",
        "Cancellation charges apply based on the timeframe",
        "Valid passport with 6 months validity required"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Bali & Sunset at Seminyak",
          "description": "Arrive in Denpasar, transfer to your hotel, and relax at Seminyak Beach while enjoying its famous sunset views.",
          "activities": [
            "Airport pickup",
            "Hotel check-in",
            "Visit Seminyak Beach"
          ],
          "accommodation": "Kuta",
          "meals": [
            "None"
          ]
        },
        {
          "day": 2,
          "title": "Ubud & Kintamani Volcano Tour",
          "description": "Explore the scenic Kintamani volcano, lush Tegallalang Rice Terraces, and the cultural heart of Ubud.",
          "activities": [
            "Visit Mount Batur & Lake Batur",
            "Explore Tegallalang Rice Terraces",
            "Visit Sacred Monkey Forest",
            "Explore Ubud Art Market & Palace"
          ],
          "accommodation": "Ubud",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 3,
          "title": "Nusa Penida Island Adventure",
          "description": "A full-day speedboat trip to Nusa Penida to visit its stunning beaches, natural rock formations, and enjoy snorkeling.",
          "activities": [
            "Speedboat to Nusa Penida",
            "Visit Kelingking Beach",
            "Explore Broken Beach & Angel's Billabong",
            "Swim/snorkel at Crystal Bay"
          ],
          "accommodation": "Kuta",
          "meals": [
            "Breakfast",
            "Lunch"
          ]
        },
        {
          "day": 4,
          "title": "Tanah Lot & Uluwatu Temple Tour",
          "description": "Discover Bali's spiritual side with visits to the dramatic sea temples of Tanah Lot and Uluwatu, topped off with a Kecak Fire Dance.",
          "activities": [
            "Visit Tanah Lot Temple",
            "Explore Uluwatu Temple",
            "Watch Kecak Fire Dance"
          ],
          "accommodation": "Kuta",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 5,
          "title": "Water Sports & Beach Relaxation",
          "description": "A day of fun and relaxation with thrilling water sports at Tanjung Benoa and leisure time at Padang Padang Beach.",
          "activities": [
            "Water Sports at Tanjung Benoa Beach",
            "Relax at Padang Padang Beach",
            "Traditional Balinese Spa (optional)"
          ],
          "accommodation": "Kuta",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 6,
          "title": "Bali Swing & Tegenungan Waterfall",
          "description": "Get your adrenaline pumping on the famous Bali Swing for panoramic jungle views and cool off with a dip at Tegenungan Waterfall.",
          "activities": [
            "Experience the Bali Swing",
            "Visit Tegenungan Waterfall"
          ],
          "accommodation": "Kuta",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 7,
          "title": "Free Day for Shopping & Leisure",
          "description": "A full day to explore Bali at your own pace, shop for souvenirs at local markets, or opt for a romantic sunset dinner cruise.",
          "activities": [
            "Leisure time",
            "Shopping at Krisna Souvenir Market",
            "Sunset dinner cruise (optional)"
          ],
          "accommodation": "Kuta",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 8,
          "title": "Departure from Bali",
          "description": "Enjoy a final Balinese breakfast before checking out and being transferred to the airport for your flight home.",
          "activities": [
            "Hotel check-out",
            "Airport transfer"
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },
    {
      "id": "package_3",
      "packageName": "Best of Dubai Package",
      "duration": "6 Nights / 7 Days",
      "type": "International",
      "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "description": "The ultimate Dubai experience that covers all top attractions in one trip. This package combines luxury and adventure, from skyscrapers and desert thrills to theme parks and world-class shopping.",
      "highlights": [
        "Burj Khalifa",
        "Desert Safari",
        "Abu Dhabi Tour",
        "Atlantis Aquaventure"
      ],
      "destination": "Dubai, UAE",
      "category": "Middle East",
      "price": "Customizable",
      "difficulty": "Easy",
      "bestTime": "November to March",
      "accommodation": "4-star / 5-star hotel",
      "meals": "Daily Breakfast",
      "transportation": "Private AC vehicle",
      "activities": [
        "City tours",
        "Desert safari",
        "Theme park visits",
        "Shopping"
      ],
      "inclusions": [
        "6 Nights Accommodation in a 4-star / 5-star hotel",
        "Daily Breakfast",
        "Private AC vehicle for all tours",
        "Dubai City Tour",
        "Burj Khalifa At The Top (124th Floor)",
        "Dhow Cruise Dinner",
        "Desert Safari with BBQ Dinner",
        "Abu Dhabi City Tour",
        "Miracle Garden & Global Village tickets",
        "Atlantis Aquaventure & Lost Chambers tickets"
      ],
      "exclusions": [
        "Flight Tickets",
        "UAE Tourist Visa",
        "Travel Insurance",
        "Lunch & Dinner (unless mentioned)",
        "Personal Expenses",
        "Optional Tours"
      ],
      "terms": [
        "50% advance payment required at booking",
        "Cancellation charges apply",
        "Visa approval is subject to UAE Immigration Policies",
        "Valid passport with 6 months validity required"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Dubai & Dhow Cruise Dinner",
          "description": "Arrive in Dubai, check into your hotel, and enjoy a relaxing evening Dhow Cruise with buffet dinner and entertainment.",
          "activities": [
            "Airport pickup",
            "Hotel check-in",
            "Dhow Cruise with dinner"
          ],
          "accommodation": "Dubai",
          "meals": [
            "Dinner"
          ]
        },
        {
          "day": 2,
          "title": "Dubai City Tour & Burj Khalifa",
          "description": "Explore the iconic landmarks of Dubai, including Palm Jumeirah and the Dubai Mall, followed by breathtaking views from the 124th floor of the Burj Khalifa.",
          "activities": [
            "Dubai City Tour (Burj Al Arab, Palm Jumeirah)",
            "Visit Dubai Mall & Fountain Show",
            "Burj Khalifa At The Top (124th Floor)"
          ],
          "accommodation": "Dubai",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 3,
          "title": "Abu Dhabi City Tour",
          "description": "A full-day tour to the capital of the UAE to witness the architectural masterpiece of Sheikh Zayed Grand Mosque and other landmarks.",
          "activities": [
            "Visit Sheikh Zayed Grand Mosque",
            "Explore Emirates Palace & Heritage Village",
            "Ferrari World (Optional)"
          ],
          "accommodation": "Dubai",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 4,
          "title": "Desert Safari Adventure",
          "description": "Experience an adrenaline-pumping dune bashing ride in a 4x4, followed by an evening of desert activities, live entertainment, and a BBQ dinner.",
          "activities": [
            "Dune Bashing",
            "Camel Riding & Sandboarding",
            "BBQ Dinner with Belly Dance & Fire Show"
          ],
          "accommodation": "Dubai",
          "meals": [
            "Breakfast",
            "Dinner"
          ]
        },
        {
          "day": 5,
          "title": "Miracle Garden & Global Village",
          "description": "Spend the day amazed by the world's largest floral garden at Miracle Garden and experience international culture and shopping at Global Village.",
          "activities": [
            "Visit Miracle Garden",
            "Visit Global Village"
          ],
          "accommodation": "Dubai",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 6,
          "title": "Atlantis Aquaventure & Shopping",
          "description": "Enjoy a day of thrilling slides and marine exhibits at Atlantis The Palm's Aquaventure Waterpark and The Lost Chambers Aquarium.",
          "activities": [
            "Visit Aquaventure Waterpark",
            "Explore The Lost Chambers Aquarium",
            "Shopping at Dubai Mall / Souks"
          ],
          "accommodation": "Dubai",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 7,
          "title": "Departure from Dubai",
          "description": "Enjoy a final breakfast in Dubai before being transferred to the airport for your departure.",
          "activities": [
            "Hotel check-out",
            "Airport Transfer"
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },
    {
      "id": "package_4",
      "packageName": "Ultimate Luxury Dubai Tour",
      "duration": "8 Nights / 9 Days",
      "type": "International",
      "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "description": "An ultra-luxury VIP experience of the UAE, featuring stays in the world's most luxurious hotels, private yacht cruises, helicopter rides, fine dining, and exclusive access to premium attractions.",
      "highlights": [
        "VIP Burj Khalifa (148th Floor)",
        "Private Yacht Cruise",
        "Helicopter Ride",
        "Luxury Desert Safari"
      ],
      "destination": "Dubai, UAE",
      "category": "Middle East",
      "price": "Customizable",
      "difficulty": "Easy",
      "bestTime": "November to March",
      "accommodation": "5-Star / 7-Star Hotel (Burj Al Arab, Atlantis The Royal, or similar)",
      "meals": "Daily Gourmet Breakfast & Select Dinners",
      "transportation": "Private Luxury Transfers & Chauffeur Service",
      "activities": [
        "Private Yachting",
        "Helicopter Tours",
        "Fine Dining",
        "VIP Shopping",
        "Adventure Sports"
      ],
      "inclusions": [
        "Accommodation in 5-Star/7-Star Hotel",
        "Daily Gourmet Breakfast & Select Dinners",
        "Private Luxury Transfers",
        "VIP Access to Attractions",
        "Helicopter Tour",
        "Luxury Yacht Cruise",
        "Private Abu Dhabi Tour",
        "La Perle VIP Show",
        "Desert Safari with Private Majlis",
        "24/7 Personal Concierge"
      ],
      "exclusions": [
        "Flight Tickets",
        "UAE Tourist Visa",
        "Travel Insurance",
        "Personal Expenses",
        "Optional Tours Not Mentioned"
      ],
      "terms": [
        "50% advance payment required at booking",
        "Cancellation charges apply",
        "Visa approval is subject to UAE Immigration Policies",
        "Valid passport with 6 months validity required"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival & Private Yacht Experience",
          "description": "Receive a VIP welcome at Dubai airport, transfer to your luxury hotel, and spend the evening on a private yacht cruise with fine dining.",
          "activities": [
            "VIP Airport Meet & Greet",
            "Luxury Hotel Check-in",
            "Private Luxury Yacht Cruise"
          ],
          "accommodation": "Dubai (Luxury Hotel)",
          "meals": [
            "Dinner"
          ]
        },
        {
          "day": 2,
          "title": "VIP Burj Khalifa & La Perle Show",
          "description": "Experience Dubai from its highest point with VIP Lounge access at the Burj Khalifa, followed by an evening of spectacular entertainment at the La Perle show with VIP seating.",
          "activities": [
            "Burj Khalifa VIP Lounge Access (148th Floor)",
            "Sky Views Observatory",
            "La Perle Show (VIP Seating)"
          ],
          "accommodation": "Dubai (Luxury Hotel)",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 3,
          "title": "Luxury Desert Safari",
          "description": "An exclusive desert experience with private dune bashing in a 4x4, a falcon show, and a gourmet BBQ dinner in a VIP Majlis.",
          "activities": [
            "Private Dune Bashing",
            "Camel Ride & Falcon Show",
            "VIP Majlis with Gourmet BBQ Dinner"
          ],
          "accommodation": "Dubai (Luxury Hotel)",
          "meals": [
            "Breakfast",
            "Dinner"
          ]
        },
        {
          "day": 4,
          "title": "Private Abu Dhabi Tour",
          "description": "A private, full-day tour of Abu Dhabi including VIP entry to the Sheikh Zayed Grand Mosque and an exclusive tour of the Louvre Abu Dhabi.",
          "activities": [
            "Visit Sheikh Zayed Grand Mosque (VIP Entry)",
            "Tour Louvre Abu Dhabi",
            "Fine Dining at Emirates Palace"
          ],
          "accommodation": "Dubai (Luxury Hotel)",
          "meals": [
            "Breakfast",
            "Dinner"
          ]
        },
        {
          "day": 5,
          "title": "Atlantis The Royal & VIP Shopping",
          "description": "A day of fun and luxury at Atlantis The Royal, with access to Aquaventure Waterpark and a luxury beach club, followed by a VIP shopping experience.",
          "activities": [
            "Visit Aquaventure Waterpark & The Lost Chambers",
            "Luxury Beach Club Access",
            "Shopping at Dubai Mall (VIP Lounge Access)"
          ],
          "accommodation": "Dubai (Luxury Hotel)",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 6,
          "title": "Helicopter Tour & Dubai Parks",
          "description": "See Dubai from a new perspective with a helicopter ride over the skyline, then enjoy VIP fast-track access to Dubai Parks & Resorts.",
          "activities": [
            "Helicopter Ride Over Dubai",
            "Dubai Parks & Resorts (VIP Fast Track Access)"
          ],
          "accommodation": "Dubai (Luxury Hotel)",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 7,
          "title": "Al Ain Oasis Tour",
          "description": "A day trip to UAE's heritage city, Al Ain, to explore its lush oasis, hot springs, and drive up the scenic Jebel Hafeet mountain.",
          "activities": [
            "Visit Al Ain Oasis & Hot Springs",
            "Jebel Hafeet Mountain Drive"
          ],
          "accommodation": "Dubai (Luxury Hotel)",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 8,
          "title": "Ras Al Khaimah Adventure",
          "description": "An adventurous day trip to Ras Al Khaimah to experience the world's longest zipline at Jebel Jais.",
          "activities": [
            "Jebel Jais Zipline Experience",
            "Relax at a Beachfront Resort"
          ],
          "accommodation": "Dubai (Luxury Hotel)",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 9,
          "title": "Departure from Dubai",
          "description": "Enjoy a final gourmet breakfast before your private transfer to the airport for departure.",
          "activities": [
            "Hotel check-out",
            "Private Airport Transfer"
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },
    {
      "id": "package_5",
      "packageName": "Baku Tour Package (5 Nights / 6 Days)",
      "duration": "5 Nights / 6 Days",
      "type": "International",
      "imageUrl": "https://images.unsplash.com/photo-1596306499398-8d88944a5ec4?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "A perfect mix of history, culture, and adventure. This tour covers all major attractions, from Baku's UNESCO-listed Old City to unique natural wonders like Mud Volcanoes and a scenic trip to the Gabala mountains.",
      "highlights": [
        "Historic & Modern Baku",
        "Gobustan & Mud Volcanoes",
        "Fire Temple & Burning Mountain",
        "Gabala Mountain Resort"
      ],
      "destination": "Baku, Azerbaijan",
      "category": "Central Asia",
      "price": "Starts from ₹XX,XXX per person",
      "difficulty": "Easy",
      "bestTime": "April to June, September to October",
      "accommodation": "3-star / 4-star / 5-star options available",
      "meals": "Daily Breakfast",
      "transportation": "Comfortable Private Transport",
      "activities": [
        "City tours",
        "Historical site visits",
        "Natural wonder exploration",
        "Mountain resort visit"
      ],
      "inclusions": [
        "5 Nights Accommodation in Baku",
        "Daily Breakfast",
        "Airport Transfers",
        "Baku City Tour",
        "Gobustan National Park & Mud Volcanoes Tour",
        "Absheron Peninsula Tour",
        "Gabala Day Trip",
        "English/Hindi-Speaking Guide"
      ],
      "exclusions": [
        "International Flights",
        "Azerbaijan Visa Fee",
        "Meals other than breakfast",
        "Personal expenses",
        "Travel Insurance"
      ],
      "terms": [
        "50% advance payment required at booking",
        "E-Visa assistance provided",
        "Cancellation charges apply",
        "Valid passport with 6 months validity required"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Baku & City Tour",
          "description": "Arrive in Baku, check into your hotel, and get a panoramic introduction to the city from Highland Park and the famous Nizami Street.",
          "activities": [
            "Airport pickup",
            "Hotel check-in",
            "Visit Highland Park",
            "Explore Nizami Street & Fountain Square"
          ],
          "accommodation": "Baku",
          "meals": [
            "None"
          ]
        },
        {
          "day": 2,
          "title": "Old City Tour & Modern Baku",
          "description": "A full-day tour exploring the UNESCO Heritage site of Icherisheher (Old City), including the Maiden Tower and Shirvanshah's Palace.",
          "activities": [
            "Tour Icherisheher (Old City)",
            "Visit Maiden Tower & Shirvanshah's Palace",
            "Stroll along Baku Boulevard"
          ],
          "accommodation": "Baku",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 3,
          "title": "Gobustan & Mud Volcanoes Adventure",
          "description": "Journey back in time at Gobustan National Park to see ancient rock petroglyphs, and witness the unique natural phenomenon of mud volcanoes.",
          "activities": [
            "Visit Gobustan National Park",
            "See ancient Rock Petroglyphs",
            "Explore Mud Volcanoes",
            "Visit Bibi-Heybat Mosque"
          ],
          "accommodation": "Baku",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 4,
          "title": "Absheron Peninsula Tour",
          "description": "Explore the mystical sites of the Absheron Peninsula, including the Zoroastrian Fire Temple and the eternally burning hillside of Yanardag.",
          "activities": [
            "Visit Ateshgah Fire Temple",
            "See Yanardag (Burning Mountain)",
            "Photo stop at Heydar Aliyev Center"
          ],
          "accommodation": "Baku",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 5,
          "title": "Day Trip to Gabala",
          "description": "Escape to the mountains with a scenic day trip to Gabala, where you'll enjoy a cable car ride at Tufandag Mountain Resort and relax by Nohur Lake.",
          "activities": [
            "Cable car ride at Tufandag Mountain Resort",
            "Visit Nohur Lake",
            "Gabala Shooting Club (Optional)"
          ],
          "accommodation": "Baku",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 6,
          "title": "Departure from Baku",
          "description": "Enjoy a final breakfast in Azerbaijan before your transfer to the airport for your flight home.",
          "activities": [
            "Hotel check-out",
            "Airport transfer"
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },
    {
      "id": "package_6",
      "packageName": "Baku Tour (7 Nights / 8 Days)",
      "duration": "7 Nights / 8 Days",
      "type": "International",
      "imageUrl": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "description": "An in-depth cultural journey through Azerbaijan's treasures, including Baku's modern architecture, ancient petroglyphs, the historic Silk Road city of Sheki, and scenic mountain regions.",
      "highlights": [
        "Baku Old & New",
        "Gobustan National Park",
        "Sheki Khan's Palace",
        "Gabala Cable Car"
      ],
      "destination": "Baku, Azerbaijan",
      "category": "Central Asia",
      "price": "Starts from ₹XX,XXX per person",
      "difficulty": "Easy",
      "bestTime": "April to June, September to October",
      "accommodation": "3-star / 4-star / 5-star options available",
      "meals": "Daily Breakfast",
      "transportation": "Comfortable Private Transport",
      "activities": [
        "City tours",
        "Historical site visits",
        "Natural wonder exploration",
        "Cultural heritage tours"
      ],
      "inclusions": [
        "7 Nights Accommodation",
        "Daily Breakfast",
        "Airport Transfers",
        "All sightseeing tours as per itinerary",
        "English/Hindi-Speaking Guide"
      ],
      "exclusions": [
        "International Flights",
        "Azerbaijan Visa Fee",
        "Meals other than breakfast",
        "Personal expenses",
        "Optional Caspian Sea Cruise"
      ],
      "terms": [
        "50% advance payment required at booking",
        "E-Visa assistance provided",
        "Cancellation charges apply",
        "Valid passport with 6 months validity required"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Baku",
          "description": "Arrive in Baku and get your first taste of the city with a visit to Highland Park for panoramic views and a stroll down the lively Nizami Street.",
          "activities": [
            "Airport pickup",
            "Hotel check-in",
            "Visit Highland Park",
            "Explore Nizami Street"
          ],
          "accommodation": "Baku",
          "meals": [
            "None"
          ]
        },
        {
          "day": 2,
          "title": "Baku Old & New City Tour",
          "description": "Discover the blend of ancient and modern in Baku, from the UNESCO-listed Old City to the scenic Caspian Sea promenade.",
          "activities": [
            "Tour Icherisheher (Old City)",
            "Visit Maiden Tower & Shirvanshah's Palace",
            "Stroll along Baku Boulevard"
          ],
          "accommodation": "Baku",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 3,
          "title": "Gobustan & Mud Volcanoes",
          "description": "Explore Azerbaijan's ancient past at Gobustan National Park with its 40,000-year-old rock carvings, followed by the unique spectacle of bubbling mud volcanoes.",
          "activities": [
            "Visit Gobustan National Park",
            "See ancient Rock Petroglyphs",
            "Explore Mud Volcanoes"
          ],
          "accommodation": "Baku",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 4,
          "title": "Absheron Peninsula Tour",
          "description": "A tour dedicated to fire and architecture, visiting the Zoroastrian Fire Temple, the eternally burning Yanardag, and the modern marvel of the Heydar Aliyev Center.",
          "activities": [
            "Visit Ateshgah Fire Temple",
            "See Yanardag (Burning Mountain)",
            "Visit Heydar Aliyev Center"
          ],
          "accommodation": "Baku",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 5,
          "title": "Day Trip to Gabala",
          "description": "A scenic escape to the mountainous region of Gabala for breathtaking views from the Tufandag Mountain Resort cable car and leisure time at Nohur Lake.",
          "activities": [
            "Cable car ride at Tufandag Mountain Resort",
            "Visit Nohur Lake"
          ],
          "accommodation": "Baku",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 6,
          "title": "Explore Sheki - The Historical Gem",
          "description": "Travel to the cultural treasure of Sheki to visit the stunning 18th-century Khan's Palace with its colourful stained glass and explore a historic Silk Road caravanserai.",
          "activities": [
            "Visit Sheki Khan's Palace",
            "Explore a historic Caravanserai",
            "Visit Sheki Fortress"
          ],
          "accommodation": "Baku",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 7,
          "title": "Free Day or Optional Caspian Sea Cruise",
          "description": "Enjoy a day of leisure in Baku to explore at your own pace, go shopping at modern malls, or take an optional scenic boat cruise on the Caspian Sea.",
          "activities": [
            "Leisure time",
            "Shopping",
            "Caspian Sea Boat Cruise (Optional)"
          ],
          "accommodation": "Baku",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 8,
          "title": "Departure from Baku",
          "description": "Have a final breakfast before being transferred to the airport for your departure.",
          "activities": [
            "Hotel check-out",
            "Airport transfer"
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },
    {
      "id": "package_7",
      "packageName": "Golden Triangle Tour",
      "duration": "5 Nights / 6 Days",
      "type": "Domestic",
      "imageUrl": "https://images.unsplash.com/photo-1667849357658-16bfaec30885?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "Experience India's most iconic journey, witnessing the grandeur of Mughal, Rajput, and British architecture. This tour covers the bustling streets of Delhi, the romantic legacy of Agra, and the royal charm of Jaipur.",
      "highlights": [
        "Taj Mahal at Sunrise",
        "Delhi's UNESCO sites",
        "Jaipur's Royal Forts",
        "Rich Heritage"
      ],
      "destination": "Delhi, Agra & Jaipur, India",
      "category": "Cultural & Heritage",
      "price": "Customizable",
      "difficulty": "Easy",
      "bestTime": "October to March",
      "accommodation": "3-star / 4-star hotels",
      "meals": "Daily breakfast",
      "transportation": "Private AC vehicle",
      "activities": [
        "Historical site tours",
        "Cultural experiences",
        "Market visits",
        "Architectural exploration"
      ],
      "inclusions": [
        "Accommodation in 3-star/4-star hotels",
        "Daily breakfast",
        "Private AC vehicle for transfers & sightseeing",
        "Professional English/Hindi-speaking driver",
        "Toll, parking, driver charges, and fuel costs"
      ],
      "exclusions": [
        "Monument entry fees",
        "Meals (except breakfast)",
        "Personal expenses (shopping, tips, etc.)",
        "Optional activities"
      ],
      "terms": [
        "50% advance payment required at booking",
        "Cancellation charges apply",
        "Valid ID proof required for all travelers"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Delhi & Exploring the Capital",
          "description": "Arrive in Delhi and begin your tour by exploring iconic landmarks like India Gate, Humayun's Tomb, and the towering Qutub Minar.",
          "activities": [
            "Airport/Station pickup",
            "Visit India Gate, Humayun's Tomb, Qutub Minar, Lotus Temple",
            "Explore Connaught Place",
            "Rickshaw ride in Chandni Chowk"
          ],
          "accommodation": "Delhi",
          "meals": [
            "None"
          ]
        },
        {
          "day": 2,
          "title": "Delhi Sightseeing - Old & New",
          "description": "Discover the contrast of Delhi by visiting the grand Red Fort and Jama Masjid in Old Delhi, and the spiritual complex of Akshardham Temple.",
          "activities": [
            "Visit Red Fort (Lal Qila)",
            "Visit Jama Masjid & Raj Ghat",
            "Explore Akshardham Temple",
            "Shopping at Dilli Haat / Khan Market"
          ],
          "accommodation": "Delhi",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 3,
          "title": "Delhi to Agra & Taj Mahal Visit",
          "description": "Drive to Agra and witness the world's most famous symbol of love, the Taj Mahal. Also, explore the historic Agra Fort and the exquisite 'Baby Taj'.",
          "activities": [
            "Drive to Agra",
            "Visit Taj Mahal",
            "Explore Agra Fort",
            "Visit Itimad-ud-Daulah (Baby Taj)"
          ],
          "accommodation": "Agra",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 4,
          "title": "Agra to Jaipur via Fatehpur Sikri",
          "description": "Travel to Jaipur, stopping en-route at the magnificent abandoned Mughal city of Fatehpur Sikri, a UNESCO World Heritage site.",
          "activities": [
            "Visit Fatehpur Sikri (Buland Darwaza, Jama Masjid)",
            "Continue drive to Jaipur",
            "Optional visit to Chokhi Dhani for cultural evening"
          ],
          "accommodation": "Jaipur",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 5,
          "title": "Jaipur Sightseeing - The Pink City",
          "description": "A full day dedicated to the royal charm of Jaipur. Enjoy an elephant ride at Amber Fort and visit landmarks like Hawa Mahal and the City Palace.",
          "activities": [
            "Visit Amber Fort (with elephant/jeep ride)",
            "Photo stop at Hawa Mahal",
            "Explore City Palace & Jantar Mantar",
            "Shopping at Johri Bazaar & Bapu Bazaar"
          ],
          "accommodation": "Jaipur",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 6,
          "title": "Jaipur - Departure",
          "description": "Enjoy a final breakfast in the Pink City before being transferred to the airport or railway station for your departure.",
          "activities": [
            "Hotel check-out",
            "Airport/Station transfer"
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },
    {
      "id": "package_8",
      "packageName": "Sri Lanka Tour",
      "duration": "6 Nights / 7 Days",
      "type": "International",
      "imageUrl": "https://images.unsplash.com/photo-1596306499398-8d88944a5ec4?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "A comprehensive tour exploring Sri Lanka's best attractions, from ancient cities and lush tea plantations to pristine beaches and wildlife. This hassle-free experience includes stays in handpicked hotels and private guided tours.",
      "highlights": [
        "Cultural Kandy",
        "Nuwara Eliya Tea Plantations",
        "Bentota Beaches",
        "Galle Dutch Fort"
      ],
      "destination": "Sri Lanka",
      "category": "Beach & Island Getaways",
      "price": "Customizable",
      "difficulty": "Easy",
      "bestTime": "December to April",
      "accommodation": "4-star/5-star hotels",
      "meals": "Daily Breakfast",
      "transportation": "Private vehicle",
      "activities": [
        "City tours",
        "Cultural shows",
        "Tea plantation visits",
        "Beach relaxation",
        "River safari"
      ],
      "inclusions": [
        "Accommodation in 4-star/5-star hotels",
        "Daily Breakfast",
        "Airport Transfers & Private Transport",
        "Sightseeing with English-Speaking Guide",
        "Entry Fees to Attractions",
        "Madu River Safari & Turtle Hatchery Visit"
      ],
      "exclusions": [
        "Flight Tickets",
        "Sri Lanka Visa (ETA)",
        "Personal Expenses",
        "Optional Tours (e.g., Yala National Park Safari)"
      ],
      "terms": [
        "50% advance payment required at booking",
        "Cancellation charges apply",
        "Online ETA visa required for most nationalities"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Colombo & City Tour",
          "description": "Arrive in Colombo, check into your hotel, and explore the city's key landmarks including Gangaramaya Temple and Galle Face Green.",
          "activities": [
            "Airport pickup",
            "Hotel check-in",
            "Colombo City Tour (Gangaramaya Temple, Pettah Market)"
          ],
          "accommodation": "Colombo",
          "meals": [
            "None"
          ]
        },
        {
          "day": 2,
          "title": "Colombo to Kandy - Cultural Tour",
          "description": "Drive to the cultural capital, Kandy. Visit the Pinnawala Elephant Orphanage en route and later the sacred Temple of the Tooth Relic.",
          "activities": [
            "Visit Pinnawala Elephant Orphanage",
            "Explore Temple of the Sacred Tooth Relic",
            "Watch a traditional Sri Lankan Cultural Dance Show"
          ],
          "accommodation": "Kandy",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 3,
          "title": "Kandy to Nuwara Eliya - Tea Country",
          "description": "Take a scenic drive into the heart of Sri Lanka's tea country, Nuwara Eliya. Visit a tea factory, see stunning waterfalls, and enjoy the colonial architecture.",
          "activities": [
            "Tour a Tea Factory & Plantation",
            "Visit Ramboda Waterfalls & Gregory Lake",
            "Explore a Strawberry Farm"
          ],
          "accommodation": "Nuwara Eliya",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 4,
          "title": "Nuwara Eliya to Bentota - Beach Escape",
          "description": "Travel from the cool highlands to the sunny coast of Bentota. Enjoy a boat safari on the Madu River and relax on the beach.",
          "activities": [
            "See St. Clair's & Devon Waterfalls",
            "Madu River Boat Safari",
            "Relax at Bentota Beach"
          ],
          "accommodation": "Bentota",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 5,
          "title": "Bentota - Galle & Turtle Hatchery Visit",
          "description": "A day trip to the historic city of Galle to explore the Dutch Fort, followed by a visit to a turtle hatchery and conservation center.",
          "activities": [
            "Explore Galle Dutch Fort & Lighthouse",
            "Visit a Turtle Hatchery",
            "Relax at Unawatuna Beach"
          ],
          "accommodation": "Bentota",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 6,
          "title": "Bentota to Colombo - Shopping & Leisure",
          "description": "Drive back to Colombo for a day of relaxation and last-minute shopping at modern malls or opt for a rejuvenating spa treatment.",
          "activities": [
            "Shopping at One Galle Face & ODEL",
            "Spa & Ayurveda Treatment (Optional)"
          ],
          "accommodation": "Colombo",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 7,
          "title": "Departure from Sri Lanka",
          "description": "Enjoy a final breakfast before your transfer to the airport for your departure.",
          "activities": [
            "Hotel check-out",
            "Airport transfer"
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },
    {
      "id": "package_9",
      "packageName": "Sri Lanka Cruise Tour",
      "duration": "7 Nights / 8 Days",
      "type": "International",
      "imageUrl": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "description": "Experience the beauty of Sri Lanka from the sea on a luxury cruise. This tour allows you to visit multiple destinations like Galle, Trincomalee, and Jaffna hassle-free, with onboard fine dining and entertainment.",
      "highlights": [
        "Luxury Cruise Stay",
        "Multi-Destination Trip",
        "Whale Watching",
        "Yala National Park Safari"
      ],
      "destination": "Sri Lanka",
      "category": "Cruise & Maritime",
      "price": "Customizable",
      "difficulty": "Easy",
      "bestTime": "Varies by cruise itinerary (often November to April)",
      "accommodation": "Luxury Cruise Cabins",
      "meals": "All Meals Onboard",
      "transportation": "Cruise Ship & Coaches for shore excursions",
      "activities": [
        "Shore excursions",
        "Whale watching",
        "Wildlife safari",
        "Snorkeling",
        "Water sports"
      ],
      "inclusions": [
        "Accommodation in Luxury Cruise Cabins",
        "All Meals Onboard",
        "Onboard Entertainment & Activities",
        "Shore Excursions with Guided Tours",
        "Water Sports & Wildlife Safari"
      ],
      "exclusions": [
        "Sri Lanka Visa",
        "Personal Expenses",
        "Optional Tours",
        "Alcoholic Beverages"
      ],
      "terms": [
        "50% advance payment required at booking",
        "Remaining 50% to be paid before departure",
        "Booking confirmed after advance payment"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Departure from Colombo Port",
          "description": "Check into your luxury cruise cabin, get a safety briefing, and enjoy your first dinner and live music as you set sail from Colombo.",
          "activities": [
            "Cruise Check-in",
            "Ship Tour & Safety Briefing",
            "Onboard Dinner & Entertainment"
          ],
          "accommodation": "Cruise",
          "meals": [
            "Dinner"
          ]
        },
        {
          "day": 2,
          "title": "Galle - Dutch Heritage & Beach",
          "description": "Dock at Galle to explore the historic Dutch Fort and Lighthouse, then relax at the beautiful Unawatuna Beach.",
          "activities": [
            "Visit Galle Dutch Fort & Lighthouse",
            "Relax at Unawatuna Beach",
            "Scuba Diving & Snorkeling (Optional)"
          ],
          "accommodation": "Cruise",
          "meals": [
            "Breakfast",
            "Lunch",
            "Dinner"
          ]
        },
        {
          "day": 3,
          "title": "Trincomalee - Whale Watching & Temples",
          "description": "An early start for a whale watching tour, followed by an exploration of the Koneswaram Temple and relaxation at Nilaveli Beach.",
          "activities": [
            "Whale watching tour",
            "Explore Koneswaram Temple & Hot Springs",
            "Relax at Nilaveli Beach"
          ],
          "accommodation": "Cruise",
          "meals": [
            "Breakfast",
            "Lunch",
            "Dinner"
          ]
        },
        {
          "day": 4,
          "title": "Jaffna - Explore Northern Sri Lanka",
          "description": "Discover the unique culture of Northern Sri Lanka by visiting the Nallur Kandaswamy Temple, Jaffna Fort, and tasting authentic local cuisine.",
          "activities": [
            "Visit Nallur Kandaswamy Temple",
            "Explore Jaffna Fort & Market",
            "Taste Authentic Jaffna Cuisine"
          ],
          "accommodation": "Cruise",
          "meals": [
            "Breakfast",
            "Lunch",
            "Dinner"
          ]
        },
        {
          "day": 5,
          "title": "Relax at Sea",
          "description": "A full day to enjoy the amenities of the cruise ship. Indulge in spa treatments, relax by the pool, or participate in onboard activities like cooking classes.",
          "activities": [
            "Spa & Wellness Treatments",
            "Pool & Sunbathing",
            "Onboard Cooking Classes & Live Shows"
          ],
          "accommodation": "Cruise",
          "meals": [
            "Breakfast",
            "Lunch",
            "Dinner"
          ]
        },
        {
          "day": 6,
          "title": "Hambantota - Safari Adventure",
          "description": "Dock at Hambantota for an exciting wildlife safari in Yala National Park to spot elephants, leopards, and other animals in their natural habitat.",
          "activities": [
            "Wildlife Safari in Yala National Park",
            "Explore Bundala Bird Sanctuary"
          ],
          "accommodation": "Cruise",
          "meals": [
            "Breakfast",
            "Lunch",
            "Dinner"
          ]
        },
        {
          "day": 7,
          "title": "Bentota - Water Adventures",
          "description": "A day of adventure in Bentota with thrilling water sports like jet skiing and parasailing, followed by a serene boat safari on the Madu River.",
          "activities": [
            "Jet Skiing, Banana Boat Rides & Parasailing",
            "Madu River Boat Safari & Mangroves",
            "Sunset Cruise & Beach Party"
          ],
          "accommodation": "Cruise",
          "meals": [
            "Breakfast",
            "Lunch",
            "Dinner"
          ]
        },
        {
          "day": 8,
          "title": "Return to Colombo & Disembarkation",
          "description": "Enjoy a final breakfast on board before disembarking at Colombo and transferring to the airport for your departure.",
          "activities": [
            "Final Breakfast & Check-out",
            "Airport Transfer"
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },
    {
      "id": "package_10",
      "packageName": "Darjeeling Tour",
      "duration": "4 Nights / 5 Days",
      "type": "Domestic",
      "imageUrl": "https://images.unsplash.com/photo-1545324367-8997ba3b801e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "A charming tour of the 'Queen of Hills', featuring the majestic Kanchenjunga sunrise from Tiger Hill, a UNESCO heritage Toy Train ride, and visits to serene monasteries and lush tea estates.",
      "highlights": [
        "Tiger Hill Sunrise",
        "Himalayan Railway (Toy Train)",
        "Tea Estate Visit",
        "Panoramic Views"
      ],
      "destination": "Darjeeling, India",
      "category": "Himalayan & Mountain",
      "price": "Customizable",
      "difficulty": "Easy",
      "bestTime": "March to May, September to November",
      "accommodation": "3-star / 4-star hotels",
      "meals": "Daily breakfast",
      "transportation": "Private AC vehicle",
      "activities": [
        "Sunrise viewing",
        "Heritage train ride",
        "Tea tasting",
        "Monastery visits",
        "Market exploration"
      ],
      "inclusions": [
        "Accommodation in 3-star/4-star hotels",
        "Daily breakfast",
        "Private AC vehicle for transfers & sightseeing",
        "Professional English/Hindi-speaking driver",
        "Toll, parking, driver charges, and fuel costs"
      ],
      "exclusions": [
        "Monument entry fees",
        "Meals (except breakfast)",
        "Personal expenses",
        "Optional activities (Toy Train ride, Ropeway)"
      ],
      "terms": [
        "50% advance payment required at booking",
        "Cancellation charges apply",
        "Valid ID proof required for all travelers"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Darjeeling",
          "description": "Arrive at Bagdogra Airport or NJP Station and take a scenic drive up to Darjeeling. Check in and enjoy a relaxing evening stroll on the famous Mall Road.",
          "activities": [
            "Airport/Station pickup",
            "Drive to Darjeeling",
            "Hotel check-in",
            "Stroll at Mall Road & Chowrasta Market"
          ],
          "accommodation": "Darjeeling",
          "meals": [
            "None"
          ]
        },
        {
          "day": 2,
          "title": "Darjeeling Sunrise & Local Sightseeing",
          "description": "An early morning trip to Tiger Hill for a spectacular sunrise over Mt. Kanchenjunga, followed by a full day of visiting Darjeeling's key attractions.",
          "activities": [
            "Visit Tiger Hill for sunrise",
            "Explore Batasia Loop & War Memorial",
            "Visit Ghoom Monastery",
            "Tour Himalayan Mountaineering Institute & Zoological Park",
            "Experience Darjeeling Ropeway"
          ],
          "accommodation": "Darjeeling",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 3,
          "title": "Darjeeling Tea Gardens & Leisure",
          "description": "Immerse yourself in the world of Darjeeling tea with a visit to a tea estate. Later, explore the beautiful Rock Garden and the Tibetan Refugee Center.",
          "activities": [
            "Visit Happy Valley Tea Estate",
            "Explore Rock Garden & Ganga Maya Park",
            "Visit Tibetan Refugee Center",
            "Shopping at Chowrasta & Bhutia Market"
          ],
          "accommodation": "Darjeeling",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 4,
          "title": "Optional Excursion to Mirik",
          "description": "Take an optional day trip to the serene hill station of Mirik. Enjoy boating on the lake and shop for goods at the Indo-Nepal border market.",
          "activities": [
            "Boating on Mirik Lake (Sumendu Lake)",
            "Shopping at Pashupati Market (Indo-Nepal Border)",
            "Explore Tea Gardens & Orange Orchards"
          ],
          "accommodation": "Darjeeling",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 5,
          "title": "Departure from Darjeeling",
          "description": "Enjoy a final breakfast in the hills before your transfer to the airport or railway station for your journey home.",
          "activities": [
            "Hotel check-out",
            "Airport/Station transfer"
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },

    {
      "id": "package_11",
      "packageName": "Golden Triangle with Lakes Tour",
      "duration": "Customizable (Typically 7-8 Days)",
      "type": "Domestic",
      "imageUrl": "https://images.unsplash.com/photo-1686603707626-5c3cf4d9ea4b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "This tour offers a perfect blend of heritage and serenity, combining India's most iconic historical sites in Delhi, Agra, and Jaipur with the stunning beauty of Udaipur's lakes and palaces. ",
      "highlights": [
        "Heritage & Serenity",
        "Taj Mahal at Sunrise",
        "Udaipur - City of Lakes",
        "Royal Jaipur"
      ],
      "destination": "Delhi, Agra, Jaipur & Udaipur, India",
      "category": "Cultural & Heritage",
      "price": "Customizable",
      "difficulty": "Easy",
      "bestTime": "October to March",
      "accommodation": "Not specified, customizable",
      "meals": "Not specified, customizable",
      "transportation": "Private AC vehicle ",
      "activities": [
        "Historical fort visits",
        "Palace tours",
        "Romantic boat rides",
        "Local market shopping"
      ],
      "inclusions": [
        "Private AC vehicle for travel",
        "Experienced driver",
        "Accommodation (as per customization)",
        "Meals (as per customization)"
      ],
      "exclusions": [
        "Monument entry fees",
        "Personal expenses",
        "Optional activities",
        "Flights"
      ],
      "terms": [
        "Standard booking and cancellation policies apply.",
        "Itinerary is customizable."
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Delhi",
          "description": "Arrive in India's capital, check into your hotel, and begin exploring the historical landmarks of New Delhi.",
          "activities": [
            "Airport pickup",
            "Hotel check-in",
            "Visit Humayun's Tomb & Qutub Minar"
          ],
          "accommodation": "Delhi",
          "meals": [
            "None"
          ]
        },
        {
          "day": 2,
          "title": "Delhi to Agra",
          "description": "Explore Old Delhi's bustling streets before driving to Agra, the city of the Taj Mahal.",
          "activities": [
            "Visit Jama Masjid & Chandni Chowk",
            "Drive to Agra",
            "Visit Agra Fort"
          ],
          "accommodation": "Agra",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 3,
          "title": "Agra to Jaipur",
          "description": "Witness the breathtaking beauty of the Taj Mahal at sunrise, then travel to the Pink City, Jaipur. ",
          "activities": [
            "Sunrise visit to Taj Mahal ",
            "Drive to Jaipur",
            "Visit Fatehpur Sikri (en-route)"
          ],
          "accommodation": "Jaipur",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 4,
          "title": "Jaipur City Tour",
          "description": "Experience the royal grandeur of Jaipur with visits to its majestic forts and palaces. ",
          "activities": [
            "Visit Amber Fort ",
            "Explore City Palace",
            "Photo stop at Hawa Mahal "
          ],
          "accommodation": "Jaipur",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 5,
          "title": "Jaipur to Udaipur",
          "description": "Travel from the Pink City to the City of Lakes, Udaipur, and enjoy a relaxing evening by the water.",
          "activities": [
            "Drive to Udaipur",
            "Hotel check-in",
            "Evening at leisure by the lake"
          ],
          "accommodation": "Udaipur",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 6,
          "title": "Udaipur Sightseeing",
          "description": "Discover the romantic city of Udaipur, visit its grand City Palace, and enjoy a serene boat ride on Lake Pichola. ",
          "activities": [
            "Visit Udaipur City Palace ",
            "Explore Saheliyon Ki Bari",
            "Boat ride on Lake Pichola "
          ],
          "accommodation": "Udaipur",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 7,
          "title": "Departure from Udaipur",
          "description": "Enjoy a final breakfast before being transferred to the airport for your departure.",
          "activities": [
            "Hotel check-out",
            "Airport transfer"
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },
    {
      "id": "package_12",
      "packageName": "Golden Triangle with Mathura",
      "duration": "6 Nights / 7 Days",
      "type": "Domestic",
      "imageUrl": "https://images.unsplash.com/photo-1661096143891-82d6d72700fc?q=80&w=2146&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "A journey that combines the iconic heritage of India's Golden Triangle with a spiritual pilgrimage to Mathura and Vrindavan, the birthplace of Lord Krishna. ",
      "highlights": [
        "Heritage & Spirituality",
        "Taj Mahal & Mughal Grandeur",
        "Krishna's Birthplace",
        "Royal Pink City"
      ],
      "destination": "Delhi, Agra, Mathura & Jaipur, India",
      "category": "Cultural & Pilgrimage",
      "price": "₹21,000 per person",
      "difficulty": "Easy",
      "bestTime": "October to March",
      "accommodation": "3-star / 4-star hotels ",
      "meals": "Daily breakfast ",
      "transportation": "Private AC vehicle ",
      "activities": [
        "Historical site tours",
        "Temple visits",
        "Cultural experiences",
        "Rickshaw Ride "
      ],
      "inclusions": [
        "Accommodation in 3-star / 4-star hotels ",
        "Daily breakfast ",
        "Private AC vehicle for transfers & sightseeing ",
        "Professional English/Hindi-speaking driver ",
        "Toll, parking, driver charges, and fuel costs "
      ],
      "exclusions": [
        "Monument entry fees ",
        "Meals (except breakfast) ",
        "Personal expenses (shopping, tips, etc.) ",
        "Optional activities (Rickshaw ride, Elephant ride) "
      ],
      "terms": [
        "50% advance payment required at booking ",
        "Remaining 50% to be paid upon arrival ",
        "Cancellation charges apply based on timeframe ",
        "Valid ID proof required for all travelers "
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Delhi",
          "description": "Arrive in Delhi and begin your tour by exploring the capital's iconic political landmarks and UNESCO-listed Mughal masterpieces. ",
          "activities": [
            "Airport/Station pickup ",
            "Visit India Gate, Qutub Minar, Lotus Temple, Humayun's Tomb ",
            "Evening at leisure in Connaught Place "
          ],
          "accommodation": "Delhi",
          "meals": [
            "None"
          ]
        },
        {
          "day": 2,
          "title": "Delhi to Agra",
          "description": "Explore the bustling bazaars of Old Delhi with a rickshaw ride before driving to the city of Agra. ",
          "activities": [
            "Visit Jama Masjid & Raj Ghat ",
            "Rickshaw ride in Chandni Chowk ",
            "Drive to Agra "
          ],
          "accommodation": "Agra",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 3,
          "title": "Agra to Mathura",
          "description": "Witness the magnificent Taj Mahal at sunrise, explore Agra Fort, and then drive to the holy city of Mathura. ",
          "activities": [
            "Sunrise visit to Taj Mahal ",
            "Explore Agra Fort ",
            "Drive to Mathura "
          ],
          "accommodation": "Mathura",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 4,
          "title": "Mathura & Vrindavan to Jaipur",
          "description": "Embark on a spiritual journey to the birthplace of Lord Krishna and other revered temples before continuing to Jaipur. ",
          "activities": [
            "Visit Shri Krishna Janmabhoomi Temple ",
            "Explore Banke Bihari Temple & Prem Mandir ",
            "Drive to Jaipur "
          ],
          "accommodation": "Jaipur",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 5,
          "title": "Jaipur - The Pink City Tour",
          "description": "A full day exploring the stunning Rajput architecture of Jaipur, including Amber Fort, City Palace, and the iconic Hawa Mahal. ",
          "activities": [
            "Visit Amber Fort ",
            "Explore City Palace & Jantar Mantar ",
            "Photo stop at Hawa Mahal ",
            "Shopping at local markets "
          ],
          "accommodation": "Jaipur",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 6,
          "title": "Jaipur to Delhi",
          "description": "Enjoy some final sightseeing in Jaipur before driving back to Delhi for the night. ",
          "activities": [
            "Visit Birla Temple (Optional) ",
            "Drive back to Delhi "
          ],
          "accommodation": "Delhi",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 7,
          "title": "Delhi Departure",
          "description": "Enjoy a final breakfast before being transferred to the airport or railway station for your departure. ",
          "activities": [
            "Hotel check-out",
            "Airport/Station transfer "
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },
    {
      "id": "package_13",
      "packageName": "Jaipur, Ajmer, Pushkar & Udaipur Tour",
      "duration": "5 Nights / 6 Days",
      "type": "Domestic",
      "imageUrl": "https://images.unsplash.com/photo-1667849357658-16bfaec30885?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "Experience the vibrant culture and royal heritage of Rajasthan on this tour covering the majestic Pink City of Jaipur, the spiritual charm of Ajmer & Pushkar, and the romantic City of Lakes, Udaipur. ",
      "highlights": [
        "Jaipur Forts & Palaces",
        "Ajmer & Pushkar Spirituality",
        "Udaipur's Lakes & Palaces",
        "Rajasthani Culture"
      ],
      "destination": "Rajasthan, India",
      "category": "Cultural & Heritage",
      "price": "Starts from 15000 INR",
      "difficulty": "Easy",
      "bestTime": "October to March",
      "accommodation": "3-star / 4-star hotels",
      "meals": "Breakfast/All Meals option available ",
      "transportation": "Private Basis Desire/Tempo Traveller/Innova ",
      "activities": [
        "Fort and palace tours",
        "Temple and Dargah visits",
        "Lake boat rides",
        "Local market shopping"
      ],
      "inclusions": [
        "Accommodation in 3-star / 4-star hotels",
        "Daily breakfast",
        "Private AC vehicle for transfers & sightseeing",
        "Professional English/Hindi-speaking driver",
        "Toll, parking, driver charges, and fuel costs"
      ],
      "exclusions": [
        "Monument entry fees",
        "Meals (except breakfast, unless all meals plan is chosen)",
        "Personal expenses (shopping, tips, etc.)",
        "Camel safari / Jeep safari / Boat ride (can be added on request)"
      ],
      "terms": [
        "50% advance payment required at booking ",
        "Remaining 50% to be paid upon arrival ",
        "Cancellation charges apply based on timeframe ",
        "Valid ID proof required for all travelers "
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Jaipur - The Pink City Tour",
          "description": "Arrive in Jaipur and dive straight into its royal history with visits to its grand forts and palaces, including Amber Fort and the iconic Hawa Mahal. ",
          "activities": [
            "Visit Amber Fort, Jaigarh Fort, Nahargarh Fort ",
            "Explore City Palace & Jantar Mantar ",
            "Photo stop at Hawa Mahal ",
            "Optional visit to Chokhi Dhani "
          ],
          "accommodation": "Jaipur",
          "meals": [
            "None"
          ]
        },
        {
          "day": 2,
          "title": "Jaipur Local Sightseeing",
          "description": "Discover more of Jaipur's charm with visits to the unique Monkey Temple and the beautiful white marble Birla Temple. ",
          "activities": [
            "Visit Galta Ji Temple (Monkey Temple) ",
            "Explore Birla Temple ",
            "See Royal Gaitor cenotaphs ",
            "Shopping & Café Hopping "
          ],
          "accommodation": "Jaipur",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 3,
          "title": "Jaipur to Ajmer & Pushkar",
          "description": "Journey to the holy cities of Ajmer and Pushkar. Seek blessings at the Ajmer Sharif Dargah and visit one of the world's few Brahma Temples. ",
          "activities": [
            "Visit Ajmer Sharif Dargah ",
            "Explore Adhai Din Ka Jhopra ",
            "Visit Brahma Temple in Pushkar ",
            "Relax by Pushkar Lake "
          ],
          "accommodation": "Pushkar",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 4,
          "title": "Pushkar to Udaipur",
          "description": "Travel to the 'City of Lakes', Udaipur, with an optional stop at the magnificent Chittorgarh Fort, a UNESCO World Heritage site. ",
          "activities": [
            "Optional visit to Chittorgarh Fort ",
            "Drive to Udaipur ",
            "Evening boat ride on Lake Pichola "
          ],
          "accommodation": "Udaipur",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 5,
          "title": "Udaipur Sightseeing",
          "description": "Explore the romantic city of Udaipur, visiting the largest palace complex in Rajasthan, the City Palace, and the beautiful Saheliyon Ki Bari garden. ",
          "activities": [
            "Visit City Palace Udaipur ",
            "Explore Jagdish Temple ",
            "Visit Saheliyon Ki Bari ",
            "Enjoy Fateh Sagar Lake ",
            "Visit Bagore Ki Haveli Museum "
          ],
          "accommodation": "Udaipur",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 6,
          "title": "Udaipur - Departure",
          "description": "Enjoy a final breakfast in Rajasthan before your transfer to the airport or railway station for departure. ",
          "activities": [
            "Hotel check-out",
            "Airport/Station transfer "
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },
    {
      "id": "package_14",
      "packageName": "Bhutan 5 Nights & 6 Days Package",
      "duration": "5 Nights / 6 Days",
      "type": "International",
      "imageUrl": "https://images.pexels.com/photos/1078779/pexels-photo-1078779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "description": "A well-blended tour of nature, culture, and adventure in the serene kingdom of Bhutan. This package covers iconic landmarks like Tiger's Nest Monastery and Punakha Dzong, offering a hassle-free and sustainable travel experience. ",
      "highlights": [
        "Tiger's Nest Monastery",
        "Punakha Dzong",
        "Dochula Pass Views",
        "Buddhist Culture"
      ],
      "destination": "Bhutan",
      "category": "Himalayan & Mountain",
      "price": "Starting from $XXX per person",
      "difficulty": "Moderate",
      "bestTime": "March to May, September to November",
      "accommodation": "3-star / 4-star / 5-star hotel ",
      "meals": "Daily meals (Breakfast, Lunch & Dinner) ",
      "transportation": "Private vehicle ",
      "activities": [
        "Monastery visits",
        "Fortress (Dzong) exploration",
        "Mountain pass scenic drives",
        "Cultural sightseeing",
        "Hiking"
      ],
      "inclusions": [
        "Hotel accommodation ",
        "Daily meals (Breakfast, Lunch & Dinner) ",
        "Private vehicle for sightseeing & transfers ",
        "Experienced English-speaking guide ",
        "Bhutan Sustainable Development Fee (SDF) ",
        "All monument entrance fees "
      ],
      "exclusions": [
        "International airfare ",
        "Personal expenses ",
        "Travel insurance ",
        "Tips for guides & drivers ",
        "Alcoholic beverages "
      ],
      "terms": [
        "50% advance payment required at booking ",
        "Visa required for most nationalities, assistance provided ",
        "Cancellation charges apply based on timeframe ",
        "Valid passport or Voter ID (for Indian tourists) required "
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Paro & Transfer to Thimphu",
          "description": "Arrive in Bhutan and take a scenic drive to the capital city, Thimphu, for an evening of leisure and exploration. ",
          "activities": [
            "Arrival at Paro International Airport ",
            "Transfer to Thimphu ",
            "Explore Clock Tower Square "
          ],
          "accommodation": "Thimphu",
          "meals": [
            "Lunch",
            "Dinner"
          ]
        },
        {
          "day": 2,
          "title": "Thimphu Sightseeing",
          "description": "A full day exploring Thimphu's major attractions, from the giant golden Buddha statue to the national animal, the Takin, and the impressive Tashichho Dzong. ",
          "activities": [
            "Visit Buddha Dordenma Statue ",
            "Explore Memorial Chorten ",
            "Visit Motithang Takin Preserve ",
            "See Tashichho Dzong "
          ],
          "accommodation": "Thimphu",
          "meals": [
            "Breakfast",
            "Lunch",
            "Dinner"
          ]
        },
        {
          "day": 3,
          "title": "Drive to Punakha via Dochula Pass",
          "description": "Travel to Punakha via the stunning Dochula Pass, with its 108 stupas and Himalayan views, and visit the majestic Punakha Dzong. ",
          "activities": [
            "Drive over Dochula Pass (3,100m) ",
            "Visit Punakha Dzong ",
            "Walk across Bhutan's longest Suspension Bridge "
          ],
          "accommodation": "Punakha",
          "meals": [
            "Breakfast",
            "Lunch",
            "Dinner"
          ]
        },
        {
          "day": 4,
          "title": "Drive to Paro & Sightseeing",
          "description": "Drive back to Paro and visit one of Bhutan's oldest temples and the National Museum, which showcases the country's rich history. ",
          "activities": [
            "Drive to Paro ",
            "Visit Kyichu Lhakhang ",
            "Explore National Museum of Bhutan "
          ],
          "accommodation": "Paro",
          "meals": [
            "Breakfast",
            "Lunch",
            "Dinner"
          ]
        },
        {
          "day": 5,
          "title": "Hike to Tiger's Nest Monastery",
          "description": "Embark on an early morning hike to Bhutan's most iconic and spiritual landmark, the Paro Taktsang, famously known as the Tiger's Nest. ",
          "activities": [
            "Hike to Paro Taktsang (Tiger's Nest Monastery) "
          ],
          "accommodation": "Paro",
          "meals": [
            "Breakfast",
            "Lunch",
            "Dinner"
          ]
        },
        {
          "day": 6,
          "title": "Departure from Paro",
          "description": "Enjoy a final Bhutanese breakfast before being transferred to Paro International Airport for your departure. ",
          "activities": [
            "Hotel check-out",
            "Airport transfer "
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },
    {
      "id": "package_15",
      "packageName": "Bhutan 7 Nights & 8 Days Tour Package",
      "duration": "7 Nights / 8 Days",
      "type": "International",
      "imageUrl": "https://images.pexels.com/photos/18983633/pexels-photo-18983633/free-photo-of-punakha-dzong-monastery-in-bhutan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "description": "An extended tour exploring Bhutan's top destinations, including the peaceful Phobjikha Valley, home of the rare Black-Necked Cranes, and the breathtaking Himalayan views from Chele La Pass. ",
      "highlights": [
        "Tiger's Nest Monastery",
        "Phobjikha Valley",
        "Chele La Pass Views",
        "Rich Culture & Monasteries"
      ],
      "destination": "Bhutan",
      "category": "Himalayan & Mountain",
      "price": "Starting from $XXX per person",
      "difficulty": "Moderate",
      "bestTime": "March to May, September to November",
      "accommodation": "3-star / 4-star / 5-star hotel ",
      "meals": "Daily meals (Breakfast, Lunch & Dinner) ",
      "transportation": "Private vehicle ",
      "activities": [
        "Monastery visits",
        "Nature hikes",
        "High-altitude pass drives",
        "Cultural sightseeing",
        "Wildlife viewing"
      ],
      "inclusions": [
        "Hotel accommodation ",
        "Daily meals (Breakfast, Lunch & Dinner) ",
        "Private vehicle for sightseeing & transfers ",
        "Experienced English-speaking guide ",
        "Bhutan Sustainable Development Fee (SDF) ",
        "All monument entrance fees "
      ],
      "exclusions": [
        "International airfare ",
        "Personal expenses ",
        "Travel insurance ",
        "Tips for guides & drivers ",
        "Alcoholic beverages "
      ],
      "terms": [
        "50% advance payment required at booking ",
        "Visa required for most nationalities, assistance provided ",
        "Cancellation charges apply based on timeframe ",
        "Valid passport or Voter ID (for Indian tourists) required "
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Paro & Transfer to Thimphu",
          "description": "Fly into the Paro valley and drive to the capital city, Thimphu, for check-in and an evening of market exploration. ",
          "activities": [
            "Arrival at Paro International Airport ",
            "Transfer to Thimphu ",
            "Explore Clock Tower Square "
          ],
          "accommodation": "Thimphu",
          "meals": [
            "Lunch",
            "Dinner"
          ]
        },
        {
          "day": 2,
          "title": "Thimphu Sightseeing",
          "description": "Explore the capital's highlights, including the giant Buddha Dordenma statue and the impressive fortress, Tashichho Dzong. ",
          "activities": [
            "Visit Buddha Dordenma, Memorial Chorten, Tashichho Dzong ",
            "Explore National Folk Heritage Museum & Motithang Takin Preserve "
          ],
          "accommodation": "Thimphu",
          "meals": [
            "Breakfast",
            "Lunch",
            "Dinner"
          ]
        },
        {
          "day": 3,
          "title": "Thimphu to Punakha",
          "description": "Enjoy a scenic drive to Punakha over the Dochula Pass and visit the stunning Punakha Dzong, located at the confluence of two rivers. ",
          "activities": [
            "Drive via Dochula Pass (3,100m) ",
            "Visit Punakha Dzong & Suspension Bridge "
          ],
          "accommodation": "Punakha",
          "meals": [
            "Breakfast",
            "Lunch",
            "Dinner"
          ]
        },
        {
          "day": 4,
          "title": "Punakha to Gangtey (Phobjikha Valley)",
          "description": "Drive to the beautiful and serene Phobjikha Valley, a protected nature area and the winter home of the rare Black-Necked Cranes. ",
          "activities": [
            "Drive to Phobjikha Valley ",
            "Visit Gangtey Monastery ",
            "Nature Trail Hike "
          ],
          "accommodation": "Gangtey",
          "meals": [
            "Breakfast",
            "Lunch",
            "Dinner"
          ]
        },
        {
          "day": 5,
          "title": "Gangtey to Paro",
          "description": "Travel back to Paro and spend the afternoon visiting one of Bhutan's oldest temples and the National Museum. ",
          "activities": [
            "Drive back to Paro ",
            "Visit Kyichu Lhakhang & National Museum of Bhutan "
          ],
          "accommodation": "Paro",
          "meals": [
            "Breakfast",
            "Lunch",
            "Dinner"
          ]
        },
        {
          "day": 6,
          "title": "Hike to Tiger's Nest Monastery",
          "description": "A highlight of any trip to Bhutan, today you will trek up to the iconic Taktsang Monastery, perched cliffside with breathtaking views. ",
          "activities": [
            "Trek to Taktsang (Tiger's Nest Monastery) "
          ],
          "accommodation": "Paro",
          "meals": [
            "Breakfast",
            "Lunch",
            "Dinner"
          ]
        },
        {
          "day": 7,
          "title": "Excursion to Chele La Pass",
          "description": "Drive up to Chele La Pass, the highest motorable pass in Bhutan, for stunning views of the Himalayas and the Paro and Haa valleys. ",
          "activities": [
            "Visit Chele La Pass (3,988m) "
          ],
          "accommodation": "Paro",
          "meals": [
            "Breakfast",
            "Lunch",
            "Dinner"
          ]
        },
        {
          "day": 8,
          "title": "Departure from Paro",
          "description": "Enjoy one last Bhutanese breakfast before your transfer to the airport for your departure. ",
          "activities": [
            "Hotel check-out",
            "Transfer to Paro International Airport "
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },
    {
      "id": "package_16",
      "packageName": "Japan Tour Package",
      "duration": "7 Nights / 8 Days",
      "type": "International",
      "imageUrl": "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "description": "Experience the perfect blend of modern cities, ancient traditions, and breathtaking landscapes, from Tokyo's futuristic cityscapes and Kyoto's iconic temples to the natural beauty of Hokkaido. ",
      "highlights": [
        "Futuristic Tokyo",
        "Bullet Train (Shinkansen)",
        "Kyoto & Nara Temples",
        "Hokkaido's Nature"
      ],
      "destination": "Japan",
      "category": "Cultural & Modern",
      "price": "Starting from $XXX per person",
      "difficulty": "Easy",
      "bestTime": "March to May (Spring), September to November (Autumn)",
      "accommodation": "3-star / 4-star / 5-star hotel ",
      "meals": "Daily Breakfast ",
      "transportation": "Private/shared transport, Bullet Train, Domestic Flight ",
      "activities": [
        "City exploration",
        "Temple and shrine visits",
        "High-speed train travel",
        "Theme park visits (optional)",
        "Nature and landscape tours"
      ],
      "inclusions": [
        "Hotel accommodation ",
        "Daily Breakfast ",
        "Airport Transfers & Sightseeing ",
        "Bullet Train (Tokyo to Kyoto) ",
        "Domestic Flight (Osaka to Hokkaido) ",
        "English-speaking guide ",
        "Entrance fees to major attractions "
      ],
      "exclusions": [
        "International airfare ",
        "Personal expenses ",
        "Travel insurance ",
        "Lunch & Dinner ",
        "Ski equipment rental (winter) "
      ],
      "terms": [
        "50% advance payment required at booking ",
        "Japan Tourist Visa required for Indian Passport Holders ",
        "Cancellation charges apply based on timeframe ",
        "Valid passport with 6 months validity required "
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Tokyo",
          "description": "Arrive in Japan's bustling capital and spend the evening exploring the vibrant districts of Shinjuku and the world-famous Shibuya Crossing. ",
          "activities": [
            "Arrival at Tokyo Airport ",
            "Hotel check-in",
            "Explore Shinjuku, Shibuya Crossing "
          ],
          "accommodation": "Tokyo",
          "meals": [
            "None"
          ]
        },
        {
          "day": 2,
          "title": "Tokyo City Tour",
          "description": "A full-day tour of Tokyo's highlights, from the peaceful Meiji Shrine and historic Senso-ji Temple to panoramic city views from the Tokyo Skytree. ",
          "activities": [
            "Visit Meiji Shrine ",
            "Explore Asakusa & Senso-ji Temple ",
            "Visit Tokyo Skytree ",
            "Stroll through Ginza Shopping Street "
          ],
          "accommodation": "Tokyo",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 3,
          "title": "Tokyo Disneyland or Mount Fuji Excursion",
          "description": "Choose between a fun-filled day at Tokyo Disneyland or a scenic day trip to the iconic Mount Fuji and Hakone region. ",
          "activities": [
            "Option 1: Tokyo Disneyland or DisneySea ",
            "Option 2: Mount Fuji & Hakone day trip "
          ],
          "accommodation": "Tokyo",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 4,
          "title": "Tokyo to Kyoto by Bullet Train",
          "description": "Experience Japan's famous Shinkansen (Bullet Train) as you travel to the cultural capital, Kyoto, and explore its thousands of red torii gates and traditional geisha district. ",
          "activities": [
            "Travel by Bullet Train to Kyoto ",
            "Visit Fushimi Inari Shrine ",
            "Explore Kiyomizu-dera Temple ",
            "Walk through Gion District "
          ],
          "accommodation": "Kyoto",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 5,
          "title": "Nara Day Tour & Osaka",
          "description": "Take a day trip to Nara to see the giant Buddha and friendly deer, then continue to Japan's foodie capital, Osaka, to visit its castle and vibrant Dotonbori district. ",
          "activities": [
            "Visit Nara's Todaiji Temple & deer park ",
            "Travel to Osaka",
            "Explore Dotonbori & Osaka Castle "
          ],
          "accommodation": "Osaka",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 6,
          "title": "Flight to Hokkaido & Otaru",
          "description": "Fly to the northern island of Hokkaido and explore the charming canal town of Otaru with its European-style buildings and famous music box museum. ",
          "activities": [
            "Fly to Sapporo (Hokkaido) ",
            "Explore Otaru Canal ",
            "Visit the Music Box Museum "
          ],
          "accommodation": "Sapporo",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 7,
          "title": "Hokkaido Adventure",
          "description": "Enjoy a day trip to Furano to see beautiful flower fields in summer or Niseko for world-class skiing in winter. ",
          "activities": [
            "Visit Furano Flower Fields (Summer) ",
            "Visit Niseko Ski Resort (Winter) ",
            "Explore Furano Cheese Factory & Lavender Farms "
          ],
          "accommodation": "Sapporo",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 8,
          "title": "Departure from Hokkaido",
          "description": "Enjoy a final breakfast in Japan before your transfer to New Chitose Airport for your departure. ",
          "activities": [
            "Hotel check-out",
            "Transfer to New Chitose Airport "
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },
    {
      "id": "package_17",
      "packageName": "Kazakhstan Tour (5 Nights / 6 Days)",
      "duration": "5 Nights / 6 Days",
      "type": "International",
      "imageUrl": "https://images.unsplash.com/photo-1722318899399-b8e5b7d4b6e9?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "A perfect blend of nature, adventure, and city life, this tour explores Almaty's landmarks and breathtaking natural attractions like Big Almaty Lake, Charyn Canyon, and the Shymbulak Ski Resort. ",
      "highlights": [
        "Big Almaty Lake",
        "Charyn Canyon",
        "Medeu & Shymbulak Resort",
        "Falconry & Eagle Hunting Show"
      ],
      "destination": "Kazakhstan",
      "category": "Adventure & Nature",
      "price": "Starting from ₹XX,XXX per person",
      "difficulty": "Easy to Moderate",
      "bestTime": "April to October",
      "accommodation": "3-star / 4-star / 5-star options ",
      "meals": "Daily Breakfast ",
      "transportation": "Comfortable Private Transport ",
      "activities": [
        "City tours",
        "Mountain resort visits",
        "Canyon exploration",
        "Lake excursions",
        "Cultural shows"
      ],
      "inclusions": [
        "5 Nights Accommodation in Almaty ",
        "Daily Breakfast ",
        "Airport Transfers ",
        "Almaty City Tour ",
        "Charyn Canyon Adventure ",
        "Medeu & Shymbulak Ski Resort Visit ",
        "Big Almaty Lake & Falconry Show ",
        "English/Hindi-Speaking Guide "
      ],
      "exclusions": [
        "International Flights ",
        "Kazakhstan Visa Fee ",
        "Meals other than breakfast ",
        "Personal expenses ",
        "Travel Insurance "
      ],
      "terms": [
        "50% advance payment required at booking ",
        "E-Visa assistance provided ",
        "Cancellation charges apply based on timeframe ",
        "Valid passport with 6 months validity required "
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Almaty & City Exploration",
          "description": "Arrive in Almaty and get acquainted with the city through a tour of its main square, a historic wooden cathedral, and the vibrant Green Bazaar. ",
          "activities": [
            "Airport pickup ",
            "Hotel check-in",
            "Visit Panfilov Park & Zenkov Cathedral ",
            "Explore Green Bazaar & Republic Square "
          ],
          "accommodation": "Almaty",
          "meals": [
            "None"
          ]
        },
        {
          "day": 2,
          "title": "Medeu & Shymbulak Ski Resort",
          "description": "Visit the world's highest skating rink at Medeu and take a scenic cable car ride up to Shymbulak Ski Resort for stunning mountain views. ",
          "activities": [
            "Visit Medeu Ice Rink ",
            "Cable car ride to Shymbulak Ski Resort ",
            "Optional adventure activities "
          ],
          "accommodation": "Almaty",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 3,
          "title": "Charyn Canyon Adventure",
          "description": "Explore Kazakhstan's 'Mini Grand Canyon', with its unique 'Valley of Castles' rock formations and scenic hiking trails. ",
          "activities": [
            "Day trip to Charyn Canyon ",
            "Explore The Valley of Castles ",
            "Hiking and photography "
          ],
          "accommodation": "Almaty",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 4,
          "title": "Big Almaty Lake & Falcon Show",
          "description": "Visit the stunning turquoise Big Almaty Lake nestled in the mountains and witness a traditional Kazakh Eagle Hunting and Falconry demonstration. ",
          "activities": [
            "Visit Big Almaty Lake ",
            "Experience Kazakh Eagle Hunting & Falcon Show "
          ],
          "accommodation": "Almaty",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 5,
          "title": "Kok Tobe & Free Day",
          "description": "Take a cable car ride to Kok Tobe Hill for panoramic views of Almaty, and enjoy the rest of the day at your leisure for shopping or relaxation. ",
          "activities": [
            "Cable car to Kok Tobe Hill ",
            "Explore souvenir markets ",
            "Leisure time "
          ],
          "accommodation": "Almaty",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 6,
          "title": "Departure from Almaty",
          "description": "Enjoy a final breakfast in Kazakhstan before being transferred to the airport for your flight home. ",
          "activities": [
            "Hotel check-out",
            "Airport transfer "
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },
    {
      "id": "package_18",
      "packageName": "Kazakhstan Tour (7 Nights / 8 Days)",
      "duration": "7 Nights / 8 Days",
      "type": "International",
      "imageUrl": "https://images.unsplash.com/photo-1671779262081-ec54ae211f6d?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "A comprehensive tour that blends nature, adventure, and history. Explore Almaty's modern landmarks, marvel at Charyn Canyon, and walk through ancient Silk Road cities like Turkestan. ",
      "highlights": [
        "Silk Road Heritage",
        "Charyn Canyon",
        "Big Almaty Lake",
        "Medeu & Shymbulak Resort"
      ],
      "destination": "Kazakhstan",
      "category": "History, Culture & Adventure",
      "price": "Starting from ₹XX,XXX per person",
      "difficulty": "Moderate",
      "bestTime": "April to October",
      "accommodation": "3-star / 4-star / 5-star options ",
      "meals": "Daily Breakfast ",
      "transportation": "Comfortable Private Transport ",
      "activities": [
        "City tours",
        "Historical site exploration",
        "Canyon hiking",
        "Mountain resort visits",
        "Cultural shows"
      ],
      "inclusions": [
        "7 Nights Accommodation ",
        "Daily Breakfast ",
        "Airport Transfers ",
        "Almaty City Tour ",
        "Charyn Canyon Adventure ",
        "Medeu & Shymbulak Visit ",
        "Big Almaty Lake & Falconry Show ",
        "Shymkent & Turkestan Historical Tour ",
        "English/Hindi-Speaking Guide "
      ],
      "exclusions": [
        "International Flights ",
        "Kazakhstan Visa Fee ",
        "Meals other than breakfast ",
        "Personal expenses ",
        "Travel Insurance "
      ],
      "terms": [
        "50% advance payment required at booking ",
        "E-Visa assistance provided ",
        "Cancellation charges apply based on timeframe ",
        "Valid passport with 6 months validity required "
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Almaty",
          "description": "Arrive in Almaty and start your journey by exploring the city's key landmarks, including the beautiful wooden Zenkov Cathedral and the bustling Green Bazaar. ",
          "activities": [
            "Airport pickup ",
            "Hotel check-in",
            "Visit Panfilov Park & Zenkov Cathedral ",
            "Explore Green Bazaar & Republic Square "
          ],
          "accommodation": "Almaty",
          "meals": [
            "None"
          ]
        },
        {
          "day": 2,
          "title": "Medeu & Shymbulak",
          "description": "A day in the mountains visiting the world's highest ice skating rink and taking a cable car to Shymbulak Ski Resort for spectacular views. ",
          "activities": [
            "Visit Medeu Ice Skating Rink ",
            "Cable car ride to Shymbulak Ski Resort "
          ],
          "accommodation": "Almaty",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 3,
          "title": "Charyn Canyon Adventure",
          "description": "Explore Kazakhstan's 'Mini Grand Canyon', known for its unique 'Valley of Castles' rock formations and scenic hiking trails. ",
          "activities": [
            "Day trip to Charyn Canyon ",
            "Explore The Valley of Castles ",
            "Hiking and photography "
          ],
          "accommodation": "Almaty",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 4,
          "title": "Big Almaty Lake & Falcon Show",
          "description": "Visit the stunning, turquoise-colored Big Almaty Lake and witness a traditional Kazakh eagle hunting and falconry demonstration. ",
          "activities": [
            "Visit Big Almaty Lake ",
            "Experience Kazakh Eagle Hunting & Falcon Show "
          ],
          "accommodation": "Almaty",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 5,
          "title": "Kok Tobe & Free Day",
          "description": "Take a cable car to Kok Tobe Hill for panoramic views of Almaty, then enjoy a free day or an optional tour to the Tamgaly Petroglyphs UNESCO site. ",
          "activities": [
            "Visit Kok Tobe Hill ",
            "Explore Souvenir Markets ",
            "Optional tour to Tamgaly Petroglyphs "
          ],
          "accommodation": "Almaty",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 6,
          "title": "Shymkent & Turkestan Tour",
          "description": "Travel to one of Kazakhstan's oldest cities, Shymkent, and visit the UNESCO-listed Mausoleum of Khoja Ahmed Yasawi in Turkestan. ",
          "activities": [
            "Travel to Shymkent ",
            "Visit Arystan Bab Mausoleum ",
            "Explore Mausoleum of Khoja Ahmed Yasawi "
          ],
          "accommodation": "Turkestan",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 7,
          "title": "Otrar & Ancient Ruins",
          "description": "Explore the ancient Silk Road city ruins of Otrar before returning to Almaty in the evening. ",
          "activities": [
            "Explore the ruins of Otrar ",
            "Visit Shymkent's Central Market ",
            "Return to Almaty "
          ],
          "accommodation": "Almaty",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 8,
          "title": "Departure from Almaty",
          "description": "Have a final breakfast before your transfer to the airport for your flight home. ",
          "activities": [
            "Hotel check-out",
            "Airport transfer "
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },
    {
      "id": "package_19",
      "packageName": "Malaysia & Singapore Tour",
      "duration": "4 Nights / 5 Days",
      "type": "International",
      "imageUrl": "https://images.unsplash.com/photo-1722704656660-6c6be0b90eec?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "A perfect blend of Malaysia's cultural richness and Singapore's modern charm. This tour covers iconic landmarks, a thrilling theme park, a nocturnal zoo, and the entertainment hub of Sentosa Island. ",
      "highlights": [
        "Kuala Lumpur & Petronas Towers",
        "Genting Highlands",
        "Singapore City Tour",
        "Sentosa Island & Night Safari"
      ],
      "destination": "Malaysia & Singapore",
      "category": "City & Leisure",
      "price": "Starting from 50000 INR per person",
      "difficulty": "Easy",
      "bestTime": "Year-round (with November-January being wetter)",
      "accommodation": "3-star / 4-star / 5-star options ",
      "meals": "Daily Breakfast ",
      "transportation": "Private transfers, Flight/Bus between countries ",
      "activities": [
        "City sightseeing",
        "Theme park visits",
        "Cable car rides",
        "Cultural exploration",
        "Wildlife encounters"
      ],
      "inclusions": [
        "Hotel Accommodation ",
        "Daily Breakfast ",
        "Airport Transfers ",
        "City Tours in Kuala Lumpur & Singapore ",
        "Genting Highlands Excursion with cable car ",
        "Sentosa Island Tour (Cable Car, Madame Tussauds, Wings of Time) ",
        "Night Safari Singapore "
      ],
      "exclusions": [
        "International Flights ",
        "Malaysia & Singapore Visa Fees ",
        "Lunch & Dinner ",
        "Personal Expenses ",
        "Travel Insurance "
      ],
      "terms": [
        "50% advance payment required at booking ",
        "E-Visa required for both countries, assistance provided ",
        "Cancellation charges apply based on timeframe ",
        "Valid passport with 6 months validity required "
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Kuala Lumpur & City Tour",
          "description": "Arrive in Malaysia's capital, check in, and proceed for a city tour covering the iconic Petronas Twin Towers and the sacred Batu Caves. ",
          "activities": [
            "Airport pickup ",
            "Visit Petronas Twin Towers & Batu Caves ",
            "Explore Merdeka Square "
          ],
          "accommodation": "Kuala Lumpur",
          "meals": [
            "None"
          ]
        },
        {
          "day": 2,
          "title": "Genting Highlands Excursion",
          "description": "Take a scenic cable car ride up to Genting Highlands, a hilltop resort with an indoor theme park, shopping mall, and casino. ",
          "activities": [
            "Cable car ride to Genting Highlands ",
            "Visit First World Indoor Theme Park & Sky Avenue Mall ",
            "Casino & Shopping (optional) "
          ],
          "accommodation": "Kuala Lumpur",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 3,
          "title": "Kuala Lumpur to Singapore & Night Safari",
          "description": "Travel from Kuala Lumpur to Singapore and spend the evening at the world's first nocturnal zoo, the Night Safari. ",
          "activities": [
            "Transfer to Singapore (flight/bus) ",
            "Hotel check-in ",
            "Visit Night Safari "
          ],
          "accommodation": "Singapore",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 4,
          "title": "Singapore City Tour & Sentosa Island",
          "description": "Explore Singapore's famous landmarks like Merlion Park, then head to Sentosa Island for a cable car ride and the Wings of Time light show. ",
          "activities": [
            "Singapore City Tour (Merlion Park, Marina Bay Sands) ",
            "Cable Car Ride to Sentosa ",
            "Visit Madame Tussauds Wax Museum ",
            "Watch Wings of Time Light Show "
          ],
          "accommodation": "Singapore",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 5,
          "title": "Departure from Singapore",
          "description": "Enjoy a final breakfast before your transfer to Singapore's Changi Airport for your flight home. ",
          "activities": [
            "Hotel check-out",
            "Airport transfer "
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },
    {
      "id": "package_20",
      "packageName": "Malaysia & Singapore Tour",
      "duration": "5 Nights / 6 Days",
      "type": "International",
      "imageUrl": "https://images.unsplash.com/photo-1506320775314-84c60bff00ff?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "An exciting tour of Southeast Asia's icons, from Malaysia's Petronas Towers and Genting Highlands to Singapore's thrilling Universal Studios and entertainment hub, Sentosa Island. ",
      "highlights": [
        "Universal Studios Singapore",
        "Petronas Twin Towers",
        "Genting Highlands",
        "Sentosa Island"
      ],
      "destination": "Malaysia & Singapore",
      "category": "City & Leisure",
      "price": "Starting from ₹XX,XXX per person",
      "difficulty": "Easy",
      "bestTime": "Year-round (with November-January being wetter)",
      "accommodation": "3-star / 4-star / 5-star options ",
      "meals": "Daily Breakfast ",
      "transportation": "Private transfers, Flight/Bus between countries ",
      "activities": [
        "Theme park adventure",
        "City sightseeing",
        "Cultural exploration",
        "Modern architecture tours",
        "Shopping"
      ],
      "inclusions": [
        "Hotel Accommodation ",
        "Daily Breakfast ",
        "Airport Transfers ",
        "City Tours (Kuala Lumpur & Singapore) ",
        "Genting Highlands Excursion with Cable Car ",
        "Putrajaya Tour ",
        "Sentosa Island Tour (Cable Car, Madame Tussauds, Wings of Time) ",
        "Universal Studios Singapore Ticket "
      ],
      "exclusions": [
        "International Flights ",
        "Malaysia & Singapore Visa Fees ",
        "Lunch & Dinner ",
        "Personal Expenses ",
        "Travel Insurance "
      ],
      "terms": [
        "50% advance payment required at booking ",
        "E-Visa required for both countries, assistance provided ",
        "Cancellation charges apply based on timeframe ",
        "Valid passport with 6 months validity required "
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Kuala Lumpur & City Tour",
          "description": "Arrive in Kuala Lumpur and start your tour with visits to the iconic Petronas Twin Towers and the sacred Hindu site of Batu Caves. ",
          "activities": [
            "Airport pickup ",
            "Visit Petronas Twin Towers ",
            "Explore Batu Caves ",
            "See Merdeka Square "
          ],
          "accommodation": "Kuala Lumpur",
          "meals": [
            "None"
          ]
        },
        {
          "day": 2,
          "title": "Genting Highlands & Batu Caves Excursion",
          "description": "Enjoy a scenic cable car ride to the cool hilltop resort of Genting Highlands, a hub for entertainment, shopping, and casino gaming. ",
          "activities": [
            "Cable car ride to Genting Highlands ",
            "Visit First World Indoor Theme Park ",
            "Casino & Shopping (optional) "
          ],
          "accommodation": "Kuala Lumpur",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 3,
          "title": "Putrajaya Tour & Transfer to Singapore",
          "description": "Visit Malaysia's smart administrative city, Putrajaya, to see its stunning pink-domed mosque before transferring to Singapore. ",
          "activities": [
            "Visit Putrajaya (Putra Mosque) ",
            "Transfer to Singapore (flight/bus) "
          ],
          "accommodation": "Singapore",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 4,
          "title": "Singapore City Tour & Sentosa Island",
          "description": "Explore Singapore's vibrant cultural hubs and iconic landmarks, then take a cable car to Sentosa Island for an evening of entertainment. ",
          "activities": [
            "Singapore City Tour (Merlion Park, Chinatown) ",
            "Cable Car Ride to Sentosa ",
            "Visit Madame Tussauds ",
            "Watch Wings of Time Light Show "
          ],
          "accommodation": "Singapore",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 5,
          "title": "Universal Studios Singapore",
          "description": "Spend a full day enjoying world-class rides and attractions at Universal Studios Singapore, from Jurassic Park to Transformers. ",
          "activities": [
            "Full-day at Universal Studios Singapore ",
            "Enjoy rides like Transformers and Jurassic Park Rapids Adventure "
          ],
          "accommodation": "Singapore",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 6,
          "title": "Departure from Singapore",
          "description": "Enjoy a final breakfast before your transfer to Singapore's award-winning Changi Airport for your flight home. ",
          "activities": [
            "Hotel check-out",
            "Airport transfer "
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },
    {
      "id": "package_21",
      "packageName": "Thrilling Dubai Adventure",
      "duration": "3 Nights / 4 Days",
      "type": "International",
      "imageUrl": "https://images.unsplash.com/photo-1684453728323-a8c2e5b615eb?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "A perfect blend of adventure and luxury, this tour combines the thrill of a desert safari with the elegance of Burj Khalifa and a scenic Dhow cruise, all in one short trip.  It's ideal for adventure seekers, luxury travelers, and culture enthusiasts. ",
      "highlights": [
        "Dhow Cruise with Dinner ",
        "Desert Safari with BBQ Dinner & Live Entertainment ",
        "Burj Khalifa At The Top - 124th Floor View ",
        "Adventure at Atlantis: Lost Chambers & Aquaventure "
      ],
      "destination": "Dubai, UAE",
      "category": "Middle East",
      "price": "Customizable as per requirements ",
      "difficulty": "Easy",
      "bestTime": "November to March",
      "accommodation": "4-star / 5-star hotel ",
      "meals": "Daily Breakfast & 2 Dinners ",
      "transportation": "Private AC Vehicle ",
      "activities": [
        "Dhow Cruise ",
        "City sightseeing ",
        "Desert Safari ",
        "Dune Bashing ",
        "Camel Riding "
      ],
      "inclusions": [
        "3 Nights Accommodation in a 4-star / 5-star hotel ",
        "Daily Breakfast ",
        "Airport Transfers & Sightseeing in a Private AC Vehicle ",
        "Dubai City Tour ",
        "Burj Khalifa Entry - 124th Floor ",
        "Dhow Cruise with Dinner ",
        "Desert Safari with BBQ Dinner & Entertainment "
      ],
      "exclusions": [
        "Flight Tickets ",
        "Personal Expenses & Tips ",
        "Travel Insurance ",
        "Additional Activities & Meals Not Mentioned "
      ],
      "terms": [
        "50% advance payment required at booking. ",
        "Remaining 50% to be paid upon arrival. ",
        "Cancellation charges apply based on timeframe. ",
        "Valid passport & visa required for international trips. "
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Dubai & Dhow Cruise Dinner",
          "description": "Arrive in Dubai, transfer to your hotel, and enjoy an evening on a traditional wooden boat with skyline views and a buffet dinner. ",
          "activities": [
            "Airport pickup and transfer ",
            "Hotel check-in ",
            "Dhow Cruise with buffet dinner and entertainment "
          ],
          "accommodation": "Dubai ",
          "meals": [
            "Dinner "
          ]
        },
        {
          "day": 2,
          "title": "Dubai City Tour & Burj Khalifa",
          "description": "Explore Dubai's iconic landmarks including Jumeirah Mosque and Palm Jumeirah, and then ascend the Burj Khalifa for breathtaking views. ",
          "activities": [
            "Half-Day Dubai City Tour ",
            "Photo Stop at Burj Al Arab ",
            "Visit Jumeirah Mosque & Jumeirah Beach ",
            "Visit Dubai Mall & Fountain Show ",
            "Burj Khalifa At The Top (124th Floor Visit) "
          ],
          "accommodation": "Dubai ",
          "meals": [
            "Breakfast "
          ]
        },
        {
          "day": 3,
          "title": "Desert Safari Adventure",
          "description": "Experience a heart-pounding 4x4 dune bashing ride across golden dunes, followed by traditional desert activities and a BBQ dinner with live entertainment. ",
          "activities": [
            "Dune Bashing in a 4x4 SUV ",
            "Camel Riding ",
            "Sandboarding ",
            "BBQ Dinner with Belly dance & fire show "
          ],
          "accommodation": "Dubai ",
          "meals": [
            "Breakfast ",
            "Dinner "
          ]
        },
        {
          "day": 4,
          "title": "Atlantis (Optional) & Departure",
          "description": "Enjoy breakfast and an optional visit to Atlantis Aquaventure Waterpark before being transferred to the airport for your departure. ",
          "activities": [
            "Visit Atlantis Aquaventure Waterpark & Lost Chambers (Optional) ",
            "Transfer to Dubai International Airport "
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast "
          ]
        }
      ]
    },
    {
      "id": "package_22",
      "packageName": "Maldives Getaway",
      "duration": "4 Nights / 5 Days",
      "type": "International",
      "imageUrl": "https://images.unsplash.com/photo-1586495985096-787fb4a54ac0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "The perfect escape for honeymooners and luxury travelers, featuring stays in luxurious overwater bungalows, snorkeling in crystal-clear waters, and romantic sunset cruises. ",
      "highlights": [
        "Luxurious overwater bungalows or beachfront villas ",
        "Snorkeling & diving in crystal-clear waters ",
        "Scenic speedboat or seaplane transfers ",
        "Sunset cruises & dolphin-watching tours "
      ],
      "destination": "Maldives",
      "category": "Beach & Island Getaways",
      "price": "Starting from ₹XX,XXX per person ",
      "difficulty": "Easy",
      "bestTime": "November to April",
      "accommodation": "Maldives Beach Resort (Beach Villa / Overwater Bungalow) ",
      "meals": "Daily Breakfast & Dinner ",
      "transportation": "Speedboat or Seaplane ",
      "activities": [
        "Snorkeling ",
        "Diving ",
        "Sunset Cruises ",
        "Dolphin-watching ",
        "Island Hopping "
      ],
      "inclusions": [
        "4 Nights Accommodation in Maldives Beach Resort ",
        "Daily Breakfast & Dinner ",
        "Roundtrip Airport Transfers via speedboat/seaplane ",
        "Water Activities: Snorkeling gear, kayaking, paddleboarding ",
        "Sunset Cruise & Dolphin Watching Tour (in select packages) ",
        "Honeymoon Special: Flower bed decoration, candlelight dinner "
      ],
      "exclusions": [
        "International Flights ",
        "Lunch (can be included based on meal plan) ",
        "Personal expenses (spa treatments, private dining) ",
        "Travel Insurance ",
        "Optional Activities: Scuba Diving, Night Fishing "
      ],
      "terms": [
        "50% advance payment required at booking. ",
        "Remaining 50% to be paid upon arrival. ",
        "Free On-Arrival Visa for most nationalities. ",
        "Cancellation charges apply based on timeframe. ",
        "Valid passport with 6 months validity required. "
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Maldives & Resort Check-in",
          "description": "Arrive at Male airport and take a breathtaking transfer via speedboat or seaplane to your resort to check into your beach villa or overwater bungalow. ",
          "activities": [
            "Airport pickup ",
            "Speedboat or seaplane transfer to resort ",
            "Check-in to beach villa / overwater bungalow ",
            "Enjoy resort amenities like private beach and infinity pools "
          ],
          "accommodation": "Maldives Resort ",
          "meals": [
            "Dinner "
          ]
        },
        {
          "day": 2,
          "title": "Relaxation & Water Activities",
          "description": "Spend the day enjoying the serene beachside, indulging in a spa session, or trying out water activities like paddleboarding and jet skiing. ",
          "activities": [
            "Snorkeling, paddleboarding, or jet skiing (optional) ",
            "Relax at the beachside spa ",
            "Sunset cruise or dolphin-watching tour (optional) "
          ],
          "accommodation": "Maldives Resort ",
          "meals": [
            "Breakfast ",
            "Dinner "
          ]
        },
        {
          "day": 3,
          "title": "Island Hopping & Adventure",
          "description": "Visit local islands to experience Maldivian culture, explore pristine sandbanks, and have the option for a private beach picnic. ",
          "activities": [
            "Visit local islands ",
            "Explore sandbanks & hidden beaches ",
            "Private beach picnic (optional) ",
            "Night fishing or glow-in-the-dark plankton tour (optional) "
          ],
          "accommodation": "Maldives Resort ",
          "meals": [
            "Breakfast ",
            "Dinner "
          ]
        },
        {
          "day": 4,
          "title": "Scuba Diving & Marine Life",
          "description": "Explore the vibrant underwater world with a scuba diving session to see coral reefs and marine life, followed by a romantic candlelight dinner. ",
          "activities": [
            "Scuba diving or snorkeling ",
            "Romantic candlelight dinner by the beach ",
            "Experience traditional Maldivian Bodu Beru music & dance show "
          ],
          "accommodation": "Maldives Resort ",
          "meals": [
            "Breakfast ",
            "Dinner "
          ]
        },
        {
          "day": 5,
          "title": "Departure from Maldives",
          "description": "Enjoy a final breakfast at your resort before taking a speedboat or seaplane back to Male Airport for your departure. ",
          "activities": [
            "Hotel check-out ",
            "Transfer to Male Airport via speedboat/seaplane "
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast "
          ]
        }
      ]
    },
    {
      "id": "package_23",
      "packageName": "Nepal Tour",
      "duration": "5 Nights / 6 Days",
      "type": "International",
      "imageUrl": "https://images.unsplash.com/photo-1611516491426-03025e6043c8?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "An affordable and customizable package that explores Nepal's cultural heart in Kathmandu, the serene lakeside city of Pokhara, and offers breathtaking sunrise views over the Himalayas from Sarangkot. ",
      "highlights": [
        "Himalayan sunrise view from Sarangkot ",
        "Cultural experience in Kathmandu ",
        "Adventure-filled activities in Pokhara ",
        "Exploration of ancient Durbar Squares "
      ],
      "destination": "Nepal",
      "category": "Himalayan & Mountain",
      "price": "Starting from $XXX per person ",
      "difficulty": "Easy",
      "bestTime": "October to December, March to April",
      "accommodation": "Premium hotels ",
      "meals": "Daily breakfast ",
      "transportation": "Private transportation ",
      "activities": [
        "Temple and Stupa visits ",
        "Sunrise viewing ",
        "Boating ",
        "Cave exploration ",
        "Cultural sightseeing "
      ],
      "inclusions": [
        "Accommodation in premium hotels ",
        "Daily breakfast ",
        "Private transportation ",
        "Entrance fees "
      ],
      "exclusions": [
        "International airfare ",
        "Personal expenses ",
        "Travel insurance ",
        "Tips for guides/drivers "
      ],
      "terms": [
        "50% advance payment required at booking. ",
        "Remaining 50% to be paid upon arrival. ",
        "Visa on Arrival available for most nationalities. ",
        "Indian citizens do not require a visa. ",
        "Cancellation charges apply based on timeframe. "
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Kathmandu",
          "description": "Arrive at Tribhuvan International Airport, transfer to your hotel, and spend the evening exploring the famous Thamel Market. ",
          "activities": [
            "Airport pickup",
            "Hotel check-in",
            "Explore Thamel Market"
          ],
          "accommodation": "Kathmandu ",
          "meals": [
            "None"
          ]
        },
        {
          "day": 2,
          "title": "Kathmandu Sightseeing Tour",
          "description": "A full-day sightseeing tour covering Kathmandu's sacred Hindu and Buddhist sites, including Pashupatinath, Boudhanath, and the ancient Durbar Square. ",
          "activities": [
            "Visit Pashupatinath Temple ",
            "Explore Boudhanath Stupa ",
            "Visit Swayambhunath Stupa (Monkey Temple) ",
            "Explore Kathmandu Durbar Square "
          ],
          "accommodation": "Kathmandu ",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 3,
          "title": "Drive to Pokhara",
          "description": "Embark on a scenic drive to the beautiful city of Pokhara, passing through hills and countryside, and enjoy an evening boat ride on Phewa Lake. ",
          "activities": [
            "Scenic drive to Pokhara ",
            "Hotel check-in",
            "Boat ride on Phewa Lake "
          ],
          "accommodation": "Pokhara ",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 4,
          "title": "Pokhara Sightseeing Tour",
          "description": "Witness a breathtaking sunrise over the Himalayas from Sarangkot, followed by a full day exploring Pokhara's natural wonders like Davis Falls and Gupteshwor Cave. ",
          "activities": [
            "Sarangkot sunrise tour ",
            "Visit Davis Falls & Gupteshwor Cave ",
            "Explore Bindhyabasini Temple ",
            "Visit World Peace Pagoda "
          ],
          "accommodation": "Pokhara ",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 5,
          "title": "Return to Kathmandu via Bhaktapur & Patan",
          "description": "Drive back to Kathmandu, stopping en-route to explore the ancient cities of Bhaktapur and Patan with their historic Durbar Squares. ",
          "activities": [
            "Drive back to Kathmandu",
            "Visit Bhaktapur Durbar Square ",
            "Visit Patan Durbar Square "
          ],
          "accommodation": "Kathmandu ",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 6,
          "title": "Departure from Kathmandu",
          "description": "Enjoy some free time for last-minute shopping before being transferred to the airport for your departure. ",
          "activities": [
            "Last-minute shopping",
            "Airport transfer"
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },
    {
      "id": "package_24",
      "packageName": "Nepal Tour",
      "duration": "7 Nights / 8 Days",
      "type": "International",
      "imageUrl": "https://images.unsplash.com/photo-1511215579272-6192432f83bc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "A comprehensive journey through Nepal covering the cultural sites of Kathmandu, the adventure-filled city of Pokhara, and a thrilling jungle safari in Chitwan National Park. ",
      "highlights": [
        "Kathmandu, Pokhara & Chitwan in one trip ",
        "Chitwan Jungle Safari ",
        "Himalayan sunrise view from Sarangkot ",
        "Tharu Cultural Dance Performance "
      ],
      "destination": "Nepal",
      "category": "Himalayan & Wildlife",
      "price": "Starting from $XXX per person ",
      "difficulty": "Easy to Moderate",
      "bestTime": "October to December, March to April",
      "accommodation": "Premium hotels ",
      "meals": "Daily breakfast ",
      "transportation": "Private transportation ",
      "activities": [
        "Cultural sightseeing ",
        "Jungle Safari ",
        "Canoeing ",
        "Bird Watching ",
        "Sunrise viewing "
      ],
      "inclusions": [
        "7 nights accommodation in premium hotels ",
        "Daily breakfast ",
        "Private transportation ",
        "Jungle safari & canoe ride in Chitwan ",
        "Manakamana Temple Cable Car ride ",
        "Entrance fees "
      ],
      "exclusions": [
        "International airfare ",
        "Personal expenses ",
        "Travel insurance ",
        "Tips for guides/drivers "
      ],
      "terms": [
        "50% advance payment required at booking. ",
        "Remaining 50% to be paid upon arrival. ",
        "Visa on Arrival available for most nationalities. ",
        "Indian citizens do not require a visa. ",
        "Cancellation charges apply based on timeframe. "
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Kathmandu",
          "description": "Arrive in Kathmandu and spend the evening exploring the traveler's hub of Thamel Market. ",
          "activities": [
            "Airport pickup and transfer",
            "Hotel check-in",
            "Explore Thamel Market "
          ],
          "accommodation": "Kathmandu ",
          "meals": [
            "None"
          ]
        },
        {
          "day": 2,
          "title": "Kathmandu Sightseeing Tour",
          "description": "A full-day tour of Kathmandu's UNESCO World Heritage sites, including Pashupatinath, Boudhanath, and Swayambhunath. ",
          "activities": [
            "Visit Pashupatinath Temple ",
            "Explore Boudhanath Stupa ",
            "Visit Swayambhunath (Monkey Temple) ",
            "Explore Kathmandu Durbar Square "
          ],
          "accommodation": "Kathmandu ",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 3,
          "title": "Drive to Pokhara via Manakamana Temple",
          "description": "Take a scenic drive to Pokhara, stopping en route to visit the wish-fulfilling Manakamana Temple via a cable car ride. ",
          "activities": [
            "Drive to Pokhara",
            "Visit Manakamana Temple (Cable Car ride included) "
          ],
          "accommodation": "Pokhara ",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 4,
          "title": "Pokhara Sightseeing Tour",
          "description": "An early morning trip to Sarangkot for sunrise views over the Himalayas, followed by exploring Pokhara's waterfalls, caves, and a boat ride on Phewa Lake. ",
          "activities": [
            "Sarangkot sunrise tour ",
            "Visit Davis Falls & Gupteshwor Cave ",
            "Phewa Lake Boat Ride ",
            "Visit World Peace Pagoda "
          ],
          "accommodation": "Pokhara ",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 5,
          "title": "Drive to Chitwan National Park",
          "description": "Travel to Chitwan National Park, check into a jungle resort, and enjoy a cultural evening with a Tharu Dance Show. ",
          "activities": [
            "Scenic drive to Chitwan National Park ",
            "Check-in at Jungle Resort ",
            "Watch Tharu Cultural Dance Show "
          ],
          "accommodation": "Chitwan ",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 6,
          "title": "Chitwan Jungle Safari",
          "description": "A full day of jungle activities including an elephant or jeep safari to spot rhinos, a canoe ride on the Rapti River, and a visit to an elephant breeding center. ",
          "activities": [
            "Elephant Safari or Jeep Safari ",
            "Canoe Ride on Rapti River ",
            "Bird Watching Tour ",
            "Visit Elephant Breeding Center "
          ],
          "accommodation": "Chitwan ",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 7,
          "title": "Drive back to Kathmandu",
          "description": "Travel from the jungles of Chitwan back to the capital city of Kathmandu for a final evening of shopping or relaxation. ",
          "activities": [
            "Drive back to Kathmandu ",
            "Free evening for shopping or relaxation "
          ],
          "accommodation": "Kathmandu ",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 8,
          "title": "Departure from Kathmandu",
          "description": "Enjoy a final breakfast in Nepal before your transfer to the airport for departure. ",
          "activities": [
            "Hotel check-out",
            "Airport transfer "
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast"
          ]
        }
      ]
    },
    {
      "id": "package_25",
      "packageName": "North East Himalayan Trip",
      "duration": "8 Nights / 9 Days",
      "type": "Domestic",
      "imageUrl": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "description": "An unforgettable journey through the unspoiled natural beauty of Sikkim and Darjeeling, from the high-altitude Gurudongmar Lake and Yumthang Valley to the ancient monasteries of Pelling and the tea estates of Darjeeling. ",
      "highlights": [
        "Gurudongmar Lake - One of the World's Highest Lakes ",
        "Yumthang Valley - The Valley of Flowers ",
        "Pelling - Ancient Monasteries & Stunning Views ",
        "Darjeeling - The Queen of Hills "
      ],
      "destination": "Sikkim & Darjeeling, India",
      "category": "Himalayan & Mountain",
      "price": "Customizable",
      "difficulty": "Moderate",
      "bestTime": "March to May, October to December",
      "accommodation": "3-star / 4-star hotels ",
      "meals": "Daily breakfast & dinner ",
      "transportation": "Private AC vehicle ",
      "activities": [
        "High-altitude lake visits ",
        "Monastery tours ",
        "Scenic drives ",
        "Sunrise viewing ",
        "Tea estate visits "
      ],
      "inclusions": [
        "Accommodation in 3-star / 4-star hotels ",
        "Daily breakfast & dinner ",
        "Private AC vehicle for transfers & sightseeing ",
        "Professional English/Hindi-speaking driver ",
        "Toll, parking, driver charges, and fuel costs "
      ],
      "exclusions": [
        "Monument entry fees ",
        "Meals (except breakfast & dinner) ",
        "Personal expenses (shopping, tips, etc.) ",
        "Optional activities (Toy Train ride, Zero Point visit) "
      ],
      "terms": [
        "50% advance payment required at booking. ",
        "Remaining 50% to be paid upon arrival. ",
        "Cancellation charges apply based on timeframe. ",
        "Valid Local ID proof required for domestic travelers. "
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Gangtok",
          "description": "Arrive at Bagdogra Airport or NJP Station and take a scenic 4-5 hour drive to Gangtok, the gateway to Sikkim. ",
          "activities": [
            "Airport/Station pickup ",
            "Transfer to Gangtok ",
            "Hotel check-in "
          ],
          "accommodation": "Gangtok ",
          "meals": [
            "Dinner "
          ]
        },
        {
          "day": 2,
          "title": "Gangtok Local Sightseeing",
          "description": "A day trip to the stunning glacial Tsomgo Lake and the sacred Baba Harbhajan Singh Mandir, followed by an evening at MG Marg. ",
          "activities": [
            "Visit Tsomgo Lake ",
            "Visit Baba Harbhajan Singh Mandir ",
            "Explore MG Marg "
          ],
          "accommodation": "Gangtok ",
          "meals": [
            "Breakfast ",
            "Dinner "
          ]
        },
        {
          "day": 3,
          "title": "Gangtok to Lachen",
          "description": "Drive to the pristine Himalayan village of Lachen, passing by scenic waterfalls along the way. ",
          "activities": [
            "Drive to Lachen ",
            "View Seven Sisters Waterfalls & Naga Waterfalls "
          ],
          "accommodation": "Lachen ",
          "meals": [
            "Breakfast ",
            "Dinner "
          ]
        },
        {
          "day": 4,
          "title": "Lachen to Gurudongmar Lake to Lachung",
          "description": "An early morning drive to one of the world's highest lakes, Gurudongmar Lake, followed by a transfer to the village of Lachung. ",
          "activities": [
            "Drive to Gurudongmar Lake (17,800 ft) ",
            "Enjoy the high-altitude lake view ",
            "Drive to Lachung "
          ],
          "accommodation": "Lachung ",
          "meals": [
            "Breakfast",
            "Lunch ",
            "Dinner "
          ]
        },
        {
          "day": 5,
          "title": "Lachung to Yumthang Valley to Gangtok",
          "description": "Visit the beautiful Yumthang Valley, also known as the Valley of Flowers, before driving back to Gangtok. ",
          "activities": [
            "Visit Yumthang Valley (11,800 ft) ",
            "Visit Hot Spring & Zero Point (Optional) ",
            "Drive back to Gangtok "
          ],
          "accommodation": "Gangtok ",
          "meals": [
            "Breakfast ",
            "Dinner "
          ]
        },
        {
          "day": 6,
          "title": "Gangtok to Pelling",
          "description": "Travel to Pelling, stopping en route to visit the giant Buddha statue at Ravangla Buddha Park. ",
          "activities": [
            "Drive to Pelling ",
            "Visit Namchi & Ravangla Buddha Park (en-route) "
          ],
          "accommodation": "Pelling ",
          "meals": [
            "Breakfast ",
            "Dinner "
          ]
        },
        {
          "day": 7,
          "title": "Pelling Sightseeing",
          "description": "Explore Pelling's famous sights, including a 17th-century monastery, a sacred wish-fulfilling lake, and the thrilling Sky Walk. ",
          "activities": [
            "Visit Pemayangtse Monastery ",
            "Visit Khecheopalri Lake ",
            "See Rimbi Waterfalls & Kanchenjunga Falls ",
            "Experience Sky Walk & Rabdentse Ruins "
          ],
          "accommodation": "Pelling ",
          "meals": [
            "Breakfast ",
            "Dinner "
          ]
        },
        {
          "day": 8,
          "title": "Pelling to Darjeeling",
          "description": "A scenic drive from Pelling to the 'Queen of Hills', Darjeeling. ",
          "activities": [
            "Drive to Darjeeling "
          ],
          "accommodation": "Darjeeling ",
          "meals": [
            "Breakfast ",
            "Dinner "
          ]
        },
        {
          "day": 9,
          "title": "Darjeeling Sightseeing & Departure",
          "description": "Witness a breathtaking sunrise over Mt. Kanchenjunga from Tiger Hill and visit key Darjeeling landmarks before departing. ",
          "activities": [
            "Visit Tiger Hill for sunrise ",
            "Explore Batasia Loop & Ghoom Monastery ",
            "Visit Happy Valley Tea Estate ",
            "Transfer to Bagdogra Airport / NJP Railway Station "
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast "
          ]
        }
      ]
    },
    {
      "id": "package_26",
      "packageName": "Thailand Tour",
      "duration": "3 Nights / 4 Days",
      "type": "International",
      "imageUrl": "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=839&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "A short and exciting getaway that offers a perfect blend of city life in Bangkok and beach relaxation in Pattaya, featuring the world-famous Alcazar show and a tour of iconic temples. ",
      "highlights": [
        "Bangkok & Pattaya Combo ",
        "Coral Island Tour ",
        "Alcazar Cabaret Show ",
        "Bangkok Temple Tour "
      ],
      "destination": "Thailand",
      "category": "Beach & City",
      "price": "Customizable as per requirements ",
      "difficulty": "Easy",
      "bestTime": "November to April",
      "accommodation": "4-star & 5-star Hotels ",
      "meals": "Daily Breakfast & Selected Dinners ",
      "transportation": "Private & Group Transfers ",
      "activities": [
        "Island hopping ",
        "Cabaret shows ",
        "Temple tours ",
        "Beach activities ",
        "Shopping "
      ],
      "inclusions": [
        "Accommodation in 4-star & 5-star Hotels ",
        "Daily Breakfast & Selected Dinners ",
        "Private & Group Transfers ",
        "Fully guided excursions & sightseeing ",
        "Island Hopping & Water Activities ",
        "Airport Transfers "
      ],
      "exclusions": [
        "International Flights ",
        "Thailand Visa Fee ",
        "Personal Expenses & Optional Tours "
      ],
      "terms": [
        "50% advance payment required at booking. ",
        "Remaining 50% to be paid upon arrival. ",
        "Visa on Arrival (VOA) available for many nationalities. ",
        "Cancellation charges apply based on timeframe. "
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival & Transfer to Pattaya | Alcazar Show",
          "description": "Arrive in Bangkok, transfer to Pattaya, and in the evening, witness the dazzling and world-famous Alcazar Cabaret Show. ",
          "activities": [
            "Airport transfer to Pattaya ",
            "Hotel check-in ",
            "Watch Alcazar Cabaret Show "
          ],
          "accommodation": "Pattaya ",
          "meals": [
            "Dinner "
          ]
        },
        {
          "day": 2,
          "title": "Coral Island Tour",
          "description": "Take a speedboat to Coral Island (Koh Larn) for a day of beach relaxation and optional water sports like snorkeling and parasailing. ",
          "activities": [
            "Speedboat ride to Coral Island ",
            "Water sports (optional) ",
            "Explore Walking Street nightlife "
          ],
          "accommodation": "Pattaya ",
          "meals": [
            "Breakfast "
          ]
        },
        {
          "day": 3,
          "title": "Pattaya to Bangkok - City Tour",
          "description": "Transfer to Bangkok and visit the city's iconic temples, including Wat Arun and Wat Phra Kaew, followed by free time for shopping. ",
          "activities": [
            "Transfer to Bangkok ",
            "Visit Wat Arun, Wat Phra Kaew & Grand Palace ",
            "Shopping at Indra Market or MBK Mall "
          ],
          "accommodation": "Bangkok ",
          "meals": [
            "Breakfast "
          ]
        },
        {
          "day": 4,
          "title": "Departure",
          "description": "Enjoy a final breakfast in Bangkok before being transferred to the airport for your return flight. ",
          "activities": [
            "Hotel check-out",
            "Airport transfer "
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast "
          ]
        }
      ]
    },
    {
      "id": "package_27",
      "packageName": "Thailand Tour",
      "duration": "5 Nights / 6 Days",
      "type": "International",
      "imageUrl": "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "Enjoy the perfect mix of beach relaxation and city exploration with a speedboat trip to Coral Island, a visit to Safari World & Marine Park, and a mesmerizing cultural performance at the Alcazar show. ",
      "highlights": [
        "Bangkok & Pattaya Combo ",
        "Coral Island Tour with Speedboat ",
        "Safari World & Marine Park ",
        "Alcazar Cabaret Show "
      ],
      "destination": "Thailand",
      "category": "Beach & Wildlife",
      "price": "Customizable as per requirements ",
      "difficulty": "Easy",
      "bestTime": "November to April",
      "accommodation": "4-star & 5-star hotels ",
      "meals": "Daily Breakfast & 2 Lunches ",
      "transportation": "Private & Shared Transfers ",
      "activities": [
        "Island hopping ",
        "Wildlife safari ",
        "Cabaret shows ",
        "Temple tours ",
        "Floating market visit "
      ],
      "inclusions": [
        "5 Nights Hotel Accommodation (3N Bangkok + 2N Pattaya) ",
        "Daily Breakfast & 2 Lunches ",
        "Airport Pick-up & Drop-off ",
        "Coral Island Tour with Speedboat & Lunch ",
        "Bangkok City Tour (Wat Arun, Grand Palace & Floating Market) ",
        "Alcazar Cabaret Show ",
        "Safari World & Marine Park Entry + Shows "
      ],
      "exclusions": [
        "International Flights ",
        "Thailand Visa Fee ",
        "Personal Expenses & Optional Tours "
      ],
      "terms": [
        "50% advance payment required at booking. ",
        "Remaining 50% to be paid upon arrival. ",
        "Visa on Arrival (VOA) available for many nationalities. ",
        "Cancellation charges apply based on timeframe. "
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival & Transfer to Pattaya | Alcazar Show",
          "description": "Arrive at Bangkok airport and transfer to Pattaya. In the evening, enjoy the spectacular Alcazar Cabaret Show. ",
          "activities": [
            "Airport transfer to Pattaya ",
            "Hotel check-in ",
            "Watch Alcazar Cabaret Show "
          ],
          "accommodation": "Pattaya ",
          "meals": [
            "None"
          ]
        },
        {
          "day": 2,
          "title": "Coral Island Tour with Lunch",
          "description": "A day of sun and sea with a speedboat tour to Coral Island (Koh Larn), including lunch and optional water sports, followed by an evening exploring Walking Street. ",
          "activities": [
            "Coral Island Tour by speedboat ",
            "Water sports (optional) ",
            "Explore Walking Street nightlife "
          ],
          "accommodation": "Pattaya ",
          "meals": [
            "Breakfast",
            "Lunch "
          ]
        },
        {
          "day": 3,
          "title": "Pattaya to Bangkok, Floating Market & City Tour",
          "description": "Travel to Bangkok, visiting the vibrant Floating Market en route. Upon arrival, tour the city's iconic temples like Wat Arun and the Grand Palace. ",
          "activities": [
            "Visit the Floating Market ",
            "Bangkok City Tour (Wat Arun, Grand Palace) ",
            "Shopping at MBK Mall or Siam Paragon "
          ],
          "accommodation": "Bangkok ",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 4,
          "title": "Safari World & Marine Park Tour",
          "description": "A fun-filled day at Safari World & Marine Park, where you can drive through a safari park spotting wildlife and watch entertaining dolphin and stunt shows. ",
          "activities": [
            "Safari Park Drive ",
            "Watch Marine Park Shows (dolphin, sea lion) ",
            "Explore Bangkok's nightlife (optional) "
          ],
          "accommodation": "Bangkok ",
          "meals": [
            "Breakfast",
            "Lunch "
          ]
        },
        {
          "day": 5,
          "title": "Free Day for Shopping & Leisure",
          "description": "Enjoy a full day to explore Bangkok at your own pace, with recommendations for shopping at Chatuchak Market or enjoying a dinner cruise. ",
          "activities": [
            "Shopping at Chatuchak Weekend Market or Terminal 21 ",
            "Visit Asiatique The Riverfront ",
            "Chao Phraya Dinner Cruise (optional) "
          ],
          "accommodation": "Bangkok ",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 6,
          "title": "Departure from Bangkok",
          "description": "Have a final breakfast in Thailand before checking out and transferring to the airport for your return flight. ",
          "activities": [
            "Hotel check-out ",
            "Transfer to Bangkok Airport "
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast "
          ]
        }
      ]
    },
    {
      "id": "package_28",
      "packageName": "Thailand Tour",
      "duration": "8 Nights / 9 Days",
      "type": "International",
      "imageUrl": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "description": "An extensive tour covering Thailand's prime destinations from the bustling cities of Bangkok and Pattaya to the stunning southern islands of Phuket and Krabi, filled with adventure, beach relaxation, and sightseeing. ",
      "highlights": [
        "Bangkok & Pattaya Fun ",
        "Phuket & Krabi Beaches ",
        "Phi Phi Island Tour ",
        "Krabi Four Islands Tour "
      ],
      "destination": "Thailand",
      "category": "Beach & Island Hopping",
      "price": "Customizable as per requirements ",
      "difficulty": "Easy to Moderate",
      "bestTime": "November to April",
      "accommodation": "Hotel Accommodation in 4 cities ",
      "meals": "Daily Breakfast & 3 Lunches ",
      "transportation": "Private & Shared Transfers, Domestic Flight ",
      "activities": [
        "Island hopping ",
        "Snorkeling and swimming ",
        "Cultural shows ",
        "Wildlife parks ",
        "City tours "
      ],
      "inclusions": [
        "8 Nights Hotel Accommodation (2N Bangkok + 2N Pattaya + 2N Phuket + 2N Krabi) ",
        "Daily Breakfast & 3 Lunches ",
        "Airport Pick-up & Drop-off ",
        "Domestic Flight from Bangkok to Phuket ",
        "All Private & Shared Transfers ",
        "Bangkok City Tour & Floating Market ",
        "Coral Island Tour with Speedboat ",
        "Phi Phi Island Tour ",
        "Krabi Four Islands Tour by Speedboat "
      ],
      "exclusions": [
        "International Flights ",
        "Thailand Visa Fee ",
        "Personal Expenses ",
        "Optional Tours & Activities "
      ],
      "terms": [
        "50% advance payment required at booking. ",
        "Remaining 50% to be paid upon arrival. ",
        "Visa on Arrival (VOA) available for many nationalities. ",
        "Cancellation charges apply based on timeframe. "
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival & Transfer to Pattaya | Alcazar Show",
          "description": "Arrive in Bangkok, transfer to Pattaya, and enjoy the world-class Alcazar Cabaret Show in the evening. ",
          "activities": [
            "Airport transfer to Pattaya ",
            "Watch Alcazar Cabaret Show "
          ],
          "accommodation": "Pattaya ",
          "meals": [
            "None"
          ]
        },
        {
          "day": 2,
          "title": "Coral Island Tour with Lunch",
          "description": "A speedboat trip to Coral Island (Koh Larn) for a day of water activities and relaxing on the beach, complete with lunch. ",
          "activities": [
            "Speedboat to Coral Island ",
            "Water activities like snorkeling (optional) ",
            "Relax on the beaches "
          ],
          "accommodation": "Pattaya ",
          "meals": [
            "Breakfast",
            "Lunch "
          ]
        },
        {
          "day": 3,
          "title": "Pattaya to Bangkok - Floating Market & City Tour",
          "description": "Drive to Bangkok, visiting a vibrant floating market en route, then tour the city's magnificent Grand Palace and temples. ",
          "activities": [
            "Visit the Floating Market ",
            "Bangkok city tour (Wat Arun, Grand Palace) "
          ],
          "accommodation": "Bangkok ",
          "meals": [
            "Breakfast"
          ]
        },
        {
          "day": 4,
          "title": "Safari World & Marine Park Tour",
          "description": "A full day of fun at Safari World & Marine Park, featuring a drive-through safari to see wild animals and entertaining dolphin shows. ",
          "activities": [
            "Safari Park Drive ",
            "Watch dolphin & stunt shows at Marine Park "
          ],
          "accommodation": "Bangkok ",
          "meals": [
            "Breakfast",
            "Lunch "
          ]
        },
        {
          "day": 5,
          "title": "Fly to Phuket & City Tour",
          "description": "Take a domestic flight to Phuket. After checking in, explore the island's landmarks including the Big Buddha and the charming Phuket Old Town. ",
          "activities": [
            "Domestic flight to Phuket ",
            "Phuket city tour (Big Buddha, Wat Chalong) ",
            "Explore Patong Beach & Bangla Road nightlife "
          ],
          "accommodation": "Phuket ",
          "meals": [
            "Breakfast "
          ]
        },
        {
          "day": 6,
          "title": "Phi Phi Island Tour with Lunch",
          "description": "Embark on a speedboat tour to the famous Phi Phi Islands, visit Maya Bay, and enjoy snorkeling in the clear blue waters. ",
          "activities": [
            "Speedboat tour to Phi Phi Islands ",
            "Visit Maya Bay ",
            "Snorkeling & swimming ",
            "Relax at Monkey Beach "
          ],
          "accommodation": "Phuket ",
          "meals": [
            "Breakfast ",
            "Lunch "
          ]
        },
        {
          "day": 7,
          "title": "Phuket to Krabi - Four Islands Tour",
          "description": "A scenic drive to Krabi, followed by the famous Four Islands speedboat tour to see unique rock formations and beautiful beaches. ",
          "activities": [
            "Transfer to Krabi by road ",
            "Four Islands Tour by speedboat (Phra Nang, Chicken Island) "
          ],
          "accommodation": "Krabi ",
          "meals": [
            "Breakfast ",
            "Lunch "
          ]
        },
        {
          "day": 8,
          "title": "Krabi - Free Day or Optional Tours",
          "description": "Enjoy a leisure day in Krabi to relax, or choose from optional tours like visiting the Hong Islands or kayaking through mangrove forests. ",
          "activities": [
            "Leisure day ",
            "Hong Islands Tour (Optional) ",
            "Kayaking at Ao Thalane (Optional) ",
            "Explore Ao Nang Beach "
          ],
          "accommodation": "Krabi ",
          "meals": [
            "Breakfast "
          ]
        },
        {
          "day": 9,
          "title": "Departure from Krabi",
          "description": "Have a final breakfast in Thailand before your transfer to Krabi Airport for your return flight. ",
          "activities": [
            "Hotel check-out ",
            "Transfer to Krabi Airport "
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast "
          ]
        }
      ]
    },
    {
      "id": "package_29",
      "packageName": "Vietnam Tour",
      "duration": "5 Nights / 6 Days",
      "type": "International",
      "imageUrl": "https://plus.unsplash.com/premium_photo-1730145749791-28fc538d7203?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "A perfect mix of history, nature, and adventure, this tour explores Hanoi's cultural landmarks, the UNESCO World Heritage site of Halong Bay on a luxury cruise, and the historic Cu Chi Tunnels. ",
      "highlights": [
        "Cruise through Halong Bay - UNESCO World Heritage Site ",
        "Explore Hanoi's Historic & Cultural Landmarks ",
        "Experience the Cu Chi Tunnels ",
        "Discover Ninh Binh's Natural Beauty "
      ],
      "destination": "Vietnam",
      "category": "Cultural & Adventure",
      "price": "Starting from ₹XX,XXX per person ",
      "difficulty": "Easy",
      "bestTime": "March to April, October to November",
      "accommodation": "Hotels and 1 Night on Halong Bay Luxury Cruise ",
      "meals": "Daily Breakfast & meals on cruise ",
      "transportation": "Private Transportation, Cruise ",
      "activities": [
        "City tours ",
        "Overnight cruising ",
        "Kayaking ",
        "Cave exploration ",
        "Historical tunnel tours "
      ],
      "inclusions": [
        "5 Nights Accommodation (Hanoi, Halong Bay Cruise, Ho Chi Minh City) ",
        "Daily Breakfast ",
        "Halong Bay Luxury Cruise with onboard meals & activities ",
        "Hanoi & Ho Chi Minh City Guided Tours ",
        "Cu Chi Tunnels & Mekong Delta Excursions ",
        "Airport Transfers & Private Transportation ",
        "English-Speaking Tour Guide "
      ],
      "exclusions": [
        "International & Domestic Flights ",
        "Vietnam Visa Fee ",
        "Personal expenses ",
        "Travel Insurance ",
        "Optional Tours & Activities "
      ],
      "terms": [
        "50% advance payment required at booking. ",
        "Remaining 50% to be paid upon arrival. ",
        "E-Visa / On-Arrival Visa assistance provided. ",
        "Cancellation charges apply based on timeframe. ",
        "Valid passport with 6 months validity required. "
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Hanoi & City Tour",
          "description": "Arrive in Hanoi and explore its cultural highlights, including a cyclo tour of the Old Quarter and a traditional Water Puppet Show. ",
          "activities": [
            "Airport pickup ",
            "Visit Hoan Kiem Lake & Ngoc Son Temple ",
            "Old Quarter Cyclo Tour ",
            "Watch Water Puppet Show "
          ],
          "accommodation": "Hanoi ",
          "meals": [
            "None"
          ]
        },
        {
          "day": 2,
          "title": "Halong Bay Cruise & Kayaking",
          "description": "Travel to the UNESCO World Heritage site of Halong Bay, board a luxury cruise, and spend the day kayaking and visiting the Sung Sot Cave. ",
          "activities": [
            "Transfer to Halong Bay ",
            "Board luxury cruise ",
            "Kayaking & Swimming ",
            "Visit Sung Sot Cave "
          ],
          "accommodation": "Onboard Halong Bay Cruise ",
          "meals": [
            "Breakfast ",
            "Lunch ",
            "Dinner "
          ]
        },
        {
          "day": 3,
          "title": "Ninh Binh - Tam Coc Boat Tour",
          "description": "After a morning Tai Chi session on the cruise, travel to Ninh Binh, the 'Halong Bay on land,' for a scenic boat ride through caves and limestone peaks. ",
          "activities": [
            "Tai Chi session on cruise deck ",
            "Transfer to Ninh Binh ",
            "Tam Coc Boat Ride ",
            "Visit Bich Dong Pagoda & Hoa Lu Ancient Capital "
          ],
          "accommodation": "Hanoi ",
          "meals": [
            "Breakfast "
          ]
        },
        {
          "day": 4,
          "title": "Flight to Ho Chi Minh City - City Tour",
          "description": "Fly to Ho Chi Minh City and explore its French colonial landmarks like the Notre Dame Cathedral and the bustling Ben Thanh Market. ",
          "activities": [
            "Flight to Ho Chi Minh City ",
            "Visit Notre Dame Cathedral & Central Post Office ",
            "Explore Ben Thanh Market "
          ],
          "accommodation": "Ho Chi Minh City ",
          "meals": [
            "Breakfast "
          ]
        },
        {
          "day": 5,
          "title": "Cu Chi Tunnels & Mekong Delta Excursion",
          "description": "Delve into Vietnam's war history at the Cu Chi Tunnels, then experience local life with a boat ride through the coconut-lined canals of the Mekong Delta. ",
          "activities": [
            "Visit Cu Chi Tunnels ",
            "Explore underground tunnels & trapdoors ",
            "Mekong Delta boat ride "
          ],
          "accommodation": "Ho Chi Minh City ",
          "meals": [
            "Breakfast "
          ]
        },
        {
          "day": 6,
          "title": "Departure from Vietnam",
          "description": "Enjoy a final breakfast in Ho Chi Minh City before your transfer to the airport for departure. ",
          "activities": [
            "Hotel check-out ",
            "Transfer to Tan Son Nhat International Airport "
          ],
          "accommodation": "None",
          "meals": [
            "Breakfast "
          ]
        }
      ]
    }
  ];

// Helper functions for filtering and sorting
export const getPackagesByDestination = (destination: string): Package[] => {
  return packagesData.filter(pkg => pkg.destination === destination);
};

export const getPackagesByCategory = (category: string): Package[] => {
  return packagesData.filter(pkg => pkg.category === category);
};

export const getPackageById = (id: string): Package | undefined => {
  return packagesData.find(pkg => pkg.id === id);
};

export const getUniqueDestinations = (): string[] => {
  return [...new Set(packagesData.map(pkg => pkg.destination))];
};

export const getUniqueCategories = (): string[] => {
  return [...new Set(packagesData.map(pkg => pkg.category))];
};

export const getUniqueTypes = (): string[] => {
  return [...new Set(packagesData.map(pkg => pkg.type))];
}; 
