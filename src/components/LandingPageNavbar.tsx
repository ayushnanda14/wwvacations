'use client';

import Image from 'next/image';
import React from 'react';
import { Phone, Mail } from 'lucide-react';
import logo from '@/logo.png';

const LandingPageNavbar: React.FC = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-40 px-6 py-4 flex items-center justify-between transition-all duration-300 bg-white/90 backdrop-blur-[2px]">
      <div className="container mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
          <div className="h-full w-full rounded-full ring-1 grid place-items-center transition-colors bg-white/90 ring-black/10">
            <Image width={100} height={100} alt='WW Vacation Image' src={logo} className="w-12 object-contain"/>
          </div>
          <span className="text-xl transition-colors text-gray">wwvacations</span>
        </div>

        {/* Contact Info */}
        <div className="flex items-center justify-between gap-6 text-black font-medium hidden lg:flex">
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full bg-[#001e68] text-white flex items-center justify-center">
              <Phone size={18} />
            </span>
            <Link href="tel:9555356669"><span>+91-93375 97368</span></Link>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full bg-[#001e68] text-white flex items-center justify-center">
              <Mail size={18} />
            </span>
            <Link href="mailto:info@wwvacations.com"><span>info@wwvacations.com</span></Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default LandingPageNavbar;
