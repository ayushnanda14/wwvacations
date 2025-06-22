'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navItems = ['Home', 'Destination', 'Gallery', 'Package', 'About Us'];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      {/* Logo */}
      <Link href="/" className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
        <span className="sr-only">WW Vacations</span>
        <div className={`h-8 w-8 rounded-full ring-1 grid place-items-center transition-colors ${
          isScrolled 
            ? 'bg-white ring-black/10' 
            : 'bg-white/90 ring-white/20'
        }`}>
          <span className="text-xl">🗺️</span>
        </div>
        <span className="text-xl text-white">wwvacations</span>
      </Link>

      {/* Nav links */}
      <ul className="hidden lg:flex gap-6 ml-10">
        {navItems.map(item => (
          <li key={item}>
            <Link 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className={`font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Search + language + CTA */}
      <div className="hidden lg:flex items-center gap-4">
        <input
          type="text"
          placeholder="Search Destination"
          className={`h-9 rounded-full px-4 text-sm backdrop-blur placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all cursor-pointer ${
            isScrolled 
              ? 'bg-gray-100 text-gray-900' 
              : 'bg-white/20 text-white placeholder:text-white/70'
          }`}
        />
        {/* <select className={`h-9 rounded-full px-3 text-sm backdrop-blur transition-colors ${
          isScrolled 
            ? 'bg-gray-100 text-gray-900' 
            : 'bg-white/20 text-white'
        }`}>
          <option>ENG</option>
          <option>SPA</option>
        </select> */}
        <Link
          href="#contact"
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
            isScrolled 
              ? 'border-primary text-primary hover:bg-primary hover:text-white' 
              : 'border-white/40 text-white hover:bg-white/10'
          } hover:backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer`}
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile menu button */}
      <button className={`lg:hidden p-2 rounded-md transition-colors ${
        isScrolled 
          ? 'hover:bg-gray-100 text-gray-900' 
          : 'hover:bg-white/20 text-white'
      }`}>
        <Menu size={24} />
      </button>
    </nav>
  );
} 