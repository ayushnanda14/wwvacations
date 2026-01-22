'use client';

import React from 'react';
import TourEnquiryForm from './TourEnquiryForm';
import MobileBottomCTA from './MobileBottomCTA';

const GujaratHeroSec: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden py-8 min-h-[600px] md:h-[600px] lg:h-[600px]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/gujarat-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 h-full container mx-auto mt-6 sm:mt-0 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center gap-10">

          {/* LEFT CONTENT */}
          <div className="text-white">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl 
              font-extrabold leading-tight
              bg-[#001e68]/90 px-6 py-3 w-fit">
              Explore the Vibrant Culture of Gujarat
            </h1>

            <p className="bg-[#a50000] text-white font-semibold 
              px-4 py-2 w-fit text-sm sm:text-base">
              DWARKA | SOMNATH | PORBANDAR | AHMEDABAD | STATUE OF UNITY | KUTCH
            </p>

            <p className="text-lg sm:text-xl font-semibold
              bg-[#001e68]/80 px-4 py-2 w-fit">
              Best Value at Competitive Prices
            </p>

          </div>

          {/* RIGHT FORM */}
          <div className="lg:flex justify-end">
            <TourEnquiryForm />
          </div>

        </div>
      </div>
      {/* MobileBottomCTA */}
      <MobileBottomCTA />
    </section>
  );
};

export default GujaratHeroSec;
