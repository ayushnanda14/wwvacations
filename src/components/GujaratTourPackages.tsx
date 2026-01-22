'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const packages = [
  {
    title: 'Gujarat Trip (Temple Special)',
    image: '/images/package-1.jpg',
    badge: 'Special Offer',
    duration: '04 Nights / 05 Days',
    destination: 'Dwarka - Porbandar - Somnath - Ahmedabad',
    price: '₹ 9,999/-',
  },
  {
    title: 'Gujarat Package Tour With Diu',
    image: '/images/package-2.jpg',
    badge: '35% Off',
    duration: '05 Nights / 06 Days',
    destination: 'Dwarka - Porbandar - Somnath - Diu - Ahmedabad',
    price: '₹ 12,600/-',
  },
  {
    title: 'Panch Dwarka Tour',
    image: '/images/package-3.jpg',
    badge: 'Special Offer',
    duration: '07 Nights / 08 Days',
    destination:
      'Dwarka - Porbandar - Somnath - Ahmedabad - Bhavnagar - Dakor - Kakrol - Nathdwara',
    price: '₹ 17,500/-',
  },
];

const GujaratTourPackages: React.FC = () => {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#001e68]">
            Gujarat Tour Packages - India No. 1 Destination
          </h2>
          <p className="mt-2 text-gray-700">
            From the Rann of Kutch to the Somnath Temple, let Gujarat&apos;s splendor amaze you.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
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

                {/* Badge */}
                <span className="absolute top-3 right-3 bg-yellow-400 text-black 
                  text-xs font-bold px-3 py-1 rounded-full">
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

                {/* Price */}
                <div className="bg-yellow-300 text-black font-bold px-3 py-2 mt-4">
                  Starting From: {pkg.price} <span className="text-sm font-medium">Per Person</span>
                </div>

                {/* Icons */}
                <div className="grid grid-cols-4 gap-3 text-center text-xs mt-4 text-[#001e68]">
                  <div>🚗<p>Transport</p></div>
                  <div>🏨<p>Hotels</p></div>
                  <div>🌴<p>Sightseeing</p></div>
                  <div>🍽️<p>Meals</p></div>
                </div>

                {/* Inclusion */}
                <div className="mt-4">
                  <p className="font-bold text-[#001e68]">Package Inclusion:</p>
                  <ul className="text-sm mt-2 space-y-1">
                    <li>➤ A/c accommodation on dbl & Triple sharing</li>
                    <li>➤ Meal Plan Breakfast</li>
                  </ul>
                  <p className="text-sm text-red-600 mt-2 cursor-pointer">
                    [+] Read More
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-2 mt-5">
                  <Link
                    href="https://wa.me/9337597368"
                    target="_blank"
                    className="bg-green-500 text-white text-xs py-2 rounded text-center"
                  >
                    WhatsApp
                  </Link>

                  <Link
                    href="tel:9337597368"
                    className="bg-[#001e68] text-white text-xs py-2 rounded text-center"
                  >
                    Call Now
                  </Link>

                  <Link
                    href="#tour-enquiry-form"
                    className="bg-[#a50000] text-white text-xs py-2 rounded text-center"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GujaratTourPackages;
