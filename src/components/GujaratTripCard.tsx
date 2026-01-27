'use client';

import Image from 'next/image';
import React from 'react';
import TripImg from '@/best-shimla-manali.jpg';
import OffImg from '@/25off.png';

const BestDealSection: React.FC = () => {
  return (
    <section id="best-deal" className="py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Card */}
        <div className="relative bg-white border rounded-xl overflow-hidden shadow-md">

          {/* Layout */}
          <div className="flex flex-col md:flex-row-reverse">

            {/* Image */}
            <div className="relative w-full md:w-2/3 h-44 md:h-[300px]">
              <Image
                src={TripImg}
                alt="Gujarat Trip"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="relative w-full md:w-1/3 bg-white p-5 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-orange-600">
                Gujarat Trip
              </h2>

              <h3 className="flex items-center gap-2 mt-2 text-sm md:text-lg font-semibold">
                ⏱ 04 Nights / 05 Days
              </h3>

              <p className="mt-3 md:mt-4 text-blue-800 font-semibold">
                Starting From
              </p>

              <div className="text-3xl md:text-4xl font-extrabold mt-1">
                ₹9,999<span className="text-lg md:text-xl"> /-</span>
              </div>
            </div>
          </div>

          {/* Offer Badge */}
          <div className="absolute right-4 md:right-0 bottom-4 md:bottom-0 z-10">
            <Image
              src={OffImg}
              alt="25% Off"
              width={140}
              height={90}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default BestDealSection;
