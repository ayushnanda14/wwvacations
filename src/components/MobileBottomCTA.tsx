'use client';

import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';

const MobileBottomCTA: React.FC = () => {
  return (
    <div
      className="fixed bottom-0 left-0 w-full z-[999] 
      flex lg:hidden bg-transparent"
      role="navigation"
      aria-label="Mobile CTA"
    >

      {/* CALL BUTTON */}
      <Link
        href="tel:9337597368"
        className="w-1/4 bg-[#001e68] flex items-center 
        justify-center py-4"
      >
        <Phone className="text-white w-6 h-6" />
      </Link>

      {/* SEND ENQUIRY BUTTON */}
      <button
        type="button"
        onClick={() => {
          document
            .getElementById('tour-enquiry-form')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="w-3/4 bg-yellow-400 text-black 
        font-bold text-sm tracking-wide py-4"
      >
        SEND ENQUIRY
      </button>

    </div>
  );
};

export default MobileBottomCTA;
