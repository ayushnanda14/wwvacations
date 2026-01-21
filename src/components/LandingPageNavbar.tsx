'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import image from '@/logo.png';
import { Phone, Mail } from 'lucide-react';

const LandingPageNavbar: React.FC = () => {
  return (
    // Hidden on mobile, visible from lg screens
    <header className="hidden lg:block w-full bg-white border-b">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
          <div className={`h-full w-full rounded-full ring-1 grid place-items-center transition-colors ${
            (isScrolled && !isMenuOpen) || isAboutPage || isSearchFocused
              ? 'bg-white ring-black/10' 
              : 'bg-white/90 ring-white/20'
          }`}>
            <Image width={100} height={100} alt='WW Vacation Image' src={image.src} className="w-12 object-contain"/>
          </div>
          <span className={`text-xl transition-colors ${
            (isScrolled && !isMenuOpen) || isAboutPage || isSearchFocused
              ? 'text-gray-900' 
              : 'text-white'
          }`}>wwvacations</span>
        </Link>

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
