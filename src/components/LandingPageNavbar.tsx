'use client';

import Image from 'next/image';
import image from '@/logo.png';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

export default function LandingPageNavbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

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
        <div className="hidden md:flex items-center gap-6">

          {/* Phone */}
          <Link
            href="tel:+919555356669"
            className="flex items-center gap-3 text-gray-800 hover:text-black transition"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400">
              <Phone className="h-4 w-4 text-black" />
            </span>
            <span className="font-medium text-sm">
              +91-95553-56669
            </span>
          </Link>

          {/* Email */}
          <Link
            href="mailto:info@journeytogujarat.com"
            className="flex items-center gap-3 text-gray-800 hover:text-black transition"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400">
              <Mail className="h-4 w-4 text-black" />
            </span>
            <span className="font-medium text-sm">
              info@journeytogujarat.com
            </span>
          </Link>

        </div>
      </div>
    </header>
  );
}
