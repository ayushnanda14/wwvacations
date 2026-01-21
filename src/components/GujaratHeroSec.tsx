'use client';

import React from 'react';
import TourEnquiryForm from './TourEnquiryForm';

const GujaratHeroSec: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden min-h-screen lg:h-[90vh]">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/gujarat-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center text-white pt-24 lg:pt-0">
            
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight 
              bg-[#001e68]/90 inline-block px-6 py-3 w-fit">
              Explore the Vibrant Culture of Gujarat
            </h1>

            {/* Destinations */}
            <p className="mt-4 bg-[#a50000] text-white font-semibold 
              px-4 py-2 w-fit text-sm sm:text-base">
              DWARKA | SOMNATH | PORBANDAR | AHMEDABAD | STATUE OF UNITY | KUTCH
            </p>

            {/* Pricing Highlight */}
            <p className="mt-6 text-lg sm:text-xl font-semibold 
              bg-[#001e68]/80 inline-block px-4 py-2 w-fit">
              Best Value at Competitive Prices
            </p>
          </div>

          {/* Right Form – Desktop Only */}
          <div className="lg:flex justify-end items-center">
            <TourEnquiryForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default GujaratHeroSec;
