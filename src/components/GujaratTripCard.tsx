'use client';

import Image from 'next/image';
import React from 'react';
import TripImg from '@/best-shimla-manali.jpg';
import OffImg from '@/25off.png';

const BestDealSection: React.FC = () => {
  return (
    <section id="best-deal" className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative bg-white border rounded-lg overflow-hidden">

          {/* Images */}
          <div className="relative w-full">
            {/* Desktop Image */}
            <Image
              src={TripImg}
              alt="Gujarat Trip"
              width={1200}
              height={500}
              className="hidden md:block w-full object-cover"
              priority
            />

            {/* Mobile Image */}
            <Image
              src={TripImg}
              alt="Gujarat Trip Mobile"
              width={600}
              height={600}
              className="block md:hidden w-full object-cover"
              priority
            />
          </div>

          {/* Package Details */}
          <div className="absolute inset-0 flex items-center">
            <div className="relative bg-white/90 backdrop-blur-sm 
              p-6 md:p-10 max-w-md ml-0 md:ml-12">

              <h2 className="text-3xl font-extrabold text-orange-600">
                Gujarat Trip
              </h2>

              <h3 className="flex items-center gap-2 mt-2 text-lg font-semibold">
                ⏱ 04 Nights / 05 Days
              </h3>

              <p className="mt-4 text-blue-800 font-semibold">
                Starting From
              </p>

              <div className="text-4xl font-extrabold mt-1">
                ₹9,999<span className="text-xl"> /-</span>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* Offer Badge */}
              <div className="absolute -left-6 bottom-0">
                <Image
                  src={OffImg}
                  alt="25% Off"
                  width={200}
                  height={120}
                />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestDealSection;
