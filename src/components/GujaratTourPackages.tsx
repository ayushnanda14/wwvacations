'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface Package {
  title: string;
  image: string;
  badge: string;
  duration: string;
  destination: string;
  price: string;
  inclusions: string[];
}

const packages: Package[] = [
  {
    title: 'Dwarka – Somnath – Ahmedabad Divine Journey',
    image: '/images/package-1.jpg',
    badge: 'Special Offer',
    duration: '04 Nights / 05 Days',
    destination: 'Ahmedabad - Dwarka - Somnath - Ahmedabad',
    price: '₹ 9,999/- Per Pax',
    inclusions: [
      'Accommodation in budget hotels',
      'Daily Breakfast only',
      'Sightseeing as per itinerary',
      'Private transportation by Sedan / Innova',
      'Driver allowance, fuel, toll & parking',
      'All applicable hotel taxes',
    ],
  },
  {
    title: 'Dwarka – Somnath –Divine Journey',
    image: '/images/package-2.jpg',
    badge: '35% Off',
    duration: '03 Nights / 04 Days',
    destination: 'Dwarka - Nageshwar Jyotirlinga - Gomti Ghat Aarti - Rukmini Temple & Bet Dwarka - Somnath',
    price: '₹ 5,999/- Per Pax',
    inclusions: [
      'Accommodation in budget hotels',
      'Daily breakfast only',
      'Sightseeing as per itinerary',
      'Private transportation by Sedan / Innova',
      'Driver allowance, fuel, toll & parking',
      'All applicable hotel taxes',
    ],
  },
  {
    title: 'Gujarat Spiritual & Scenic Escape',
    image: '/images/package-3.jpg',
    badge: 'Special Offer',
    duration: '06 Nights / 07 Days',
    destination:
      'Dwarka - Dwarka Sightseeing - Somnath - Gir - Diu - Statue of Unity - Ahmedabad',
    price: '₹ 13,999/-Per Pax',
    inclusions: [
      'Accommodation in budget hotels',
      'Daily breakfast only',
      'Sightseeing as per itinerary',
      'Private transportation by Sedan / Innova',
      'Driver allowance, fuel, toll & parking',
      'All applicable hotel taxes',
    ],
  },
  {
    title: 'Grand Gujarat Darshan Tour',
    image: '/images/package-4.jpg',
    badge: 'Special Offer',
    duration: '04 Nights / 05 Days',
    destination: 'Ahmedabad - Dwarka - Dwarka Sightseeing - Somnath - Gir - Diu - Vadodara - Statue of Unity - Bhuj (Kutch) - Rann of Kutch',
    price: '₹ 24,999/- Per Person',
    inclusions: [
      'Accommodation in budget hotels',
      'Daily Breakfast only',
      'Sightseeing as per itinerary',
      'Private transportation by Sedan / Innova / Tempo (as per group size)',
      'Driver allowance, fuel, toll & parking',
      'All applicable hotel taxes',
    ],
  },
];

const GujaratTourPackages: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleReadMore = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#001e68]">
            Gujarat Tour Packages - India's No. 1 Travel Destination
          </h2>
          <p className="mt-2 text-gray-700">
            From the Rann of Kutch to the Somnath Temple, let Gujarat&apos;s splendor amaze you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const isExpanded = expandedIndex === index;
            const visibleInclusions = isExpanded
              ? pkg.inclusions
              : pkg.inclusions.slice(0, 2);

            return (
              <div
                key={index}
                className="border border-dashed border-gray-400 p-4 relative"
              >
                {/* Image */}
                <div className="relative">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    width={400}
                    height={250}
                    className="w-full h-[220px] object-cover"
                  />

                  <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {pkg.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-[#001e68]">
                    {pkg.title}
                  </h3>

                  <p className="text-sm mt-2">
                    <span className="font-semibold text-[#001e68]">Duration:</span>{' '}
                    {pkg.duration}
                  </p>

                  <p className="text-sm">
                    <span className="font-semibold text-[#001e68]">Destination:</span>{' '}
                    {pkg.destination}
                  </p>

                  <div className="bg-yellow-300 text-black font-bold px-3 py-2 mt-4">
                    Starting From: {pkg.price}
                  </div>

                  {/* Inclusions */}
                  <div className="mt-4">
                    <p className="font-bold text-[#001e68]">Package Inclusion:</p>

                    <ul className="text-sm mt-2 space-y-1">
                      {visibleInclusions.map((item, idx) => (
                        <li key={idx}>➤ {item}</li>
                      ))}
                    </ul>

                    {pkg.inclusions.length > 2 && (
                      <button
                        onClick={() => toggleReadMore(index)}
                        className="text-sm text-red-600 mt-2 font-semibold"
                      >
                        {isExpanded ? '− Read Less' : '+ Read More'}
                      </button>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-3 gap-2 mt-5">
                    <Link
                      href="https://wa.me/9337597368"
                      target="_blank"
                      className="bg-green-500 text-white font-semibold text-sm py-3 rounded text-center"
                    >
                      WhatsApp
                    </Link>

                    <Link
                      href="tel:9337597368"
                      className="bg-[#001e68] text-white font-semibold text-sm py-3 rounded text-center"
                    >
                      Call Now
                    </Link>

                    <Link
                      href="#tour-enquiry-form"
                      className="bg-[#a50000] text-white font-semibold text-sm py-3 rounded text-center"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default GujaratTourPackages;
