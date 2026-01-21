'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Phone, Mail } from 'lucide-react';
import logo from '@/logo.png';

const LandingPageNavbar: React.FC = () => {
  return (
    <header className="hidden lg:block w-full bg-white border-b">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Journey to Gujarat"
            width={180}
            height={70}
            priority
            className="object-contain"
          />
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
    </header>
  );
};

export default LandingPageNavbar;
