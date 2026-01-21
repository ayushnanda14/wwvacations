'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Phone, Mail } from 'lucide-react';
import logo from '@/logo.png';

const LandingPageNavbar: React.FC = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 px-6 py-4 flex items-center justify-between transition-all duration-300 bg-white/0 backdrop-blur-[2px]">
      <div className="container mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight flex items-center gap-2"
        >
        <div className="h-full w-full rounded-full ring-1 grid place-items-center transition-colors bg-white/90 ring-white/20">
          <Image
            src={logo}
            alt="WW Vacation Image"
            width={100}
            height={100}
            className="w-12 object-contain"
            priority
          />
        </div>
        <span className="text-xl transition-colors text-white">
          wwvacations
        </span>
      </Link>

        {/* Contact Info */}
        <div className="flex items-center gap-6 text-black font-medium">
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center">
              <Phone size={18} />
            </span>
            <span>+91-95553-56669</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center">
              <Mail size={18} />
            </span>
            <span>info@journeytogujarat.com</span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default LandingPageNavbar;
