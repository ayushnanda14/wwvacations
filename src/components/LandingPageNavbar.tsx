'use client';

import Image from 'next/image';
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const LandingPageNavbar: React.FC = () => {
  return (
    // Hidden on mobile, visible from lg screens
    <header className="hidden lg:block w-full bg-white border-b">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/images/journey-to-gujarat-logo.png"
            alt="Journey to Gujarat"
            width={220}
            height={70}
            priority
          />
        </div>

        {/* Contact Info */}
        <div className="flex items-center gap-6 text-black font-medium">
          
          {/* Phone */}
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center">
              <Phone size={18} className="text-black" />
            </span>
            <span>+91-95553-56669</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center">
              <Mail size={18} className="text-black" />
            </span>
            <span>info@journeytogujarat.com</span>
          </div>

        </div>
      </div>
    </header>
  );
};

export default LandingPageNavbar;
