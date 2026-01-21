'use client';

import React from 'react';
import TourEnquiryForm from './TourEnquiryForm';

const GujaratHeroSec: React.FC = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/gujarat-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full px-6 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
          
          {/* Left Text */}
          <div className="flex flex-col justify-center text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-blue-900/80 inline-block px-6 py-3 w-fit">
              Explore the Vibrant Culture of Gujarat
            </h1>

            <p className="mt-4 bg-lime-400 text-black font-semibold px-4 py-2 w-fit">
              DWARKA | SOMNATH | PORBANDAR | AHMEDABAD | STATUE OF UNITY | KUTCH
            </p>

            <p className="mt-6 text-xl font-semibold bg-black/60 inline-block px-4 py-2 w-fit">
              Best Value at Competitive Prices
            </p>
          </div>

          {/* Right Form */}
          <div className="flex justify-end items-center">
            <TourEnquiryForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default GujaratHeroSec;
