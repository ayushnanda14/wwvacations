'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = ['Home', 'Services', 'Destinations', 'Packages', 'About Us'];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (throttleTimeout) return;

      throttleTimeout = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);

        const sections = navItems.map(item => document.getElementById(item.toLowerCase().replace(' ', '-')));
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (const section of sections) {
          if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            setActiveItem(navItems.find(item => item.toLowerCase().replace(' ', '-') === section.id) || 'Home');
            break;
          }
        }
        
        throttleTimeout = null;
      }, 100); // Run this at most every 100ms
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-40 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
        (isScrolled && !isMenuOpen)
          ? 'bg-white/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}>
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
          <span className="sr-only">WW Vacations</span>
          <div className={`h-8 w-8 rounded-full ring-1 grid place-items-center transition-colors ${
            (isScrolled && !isMenuOpen) 
              ? 'bg-white ring-black/10' 
              : 'bg-white/90 ring-white/20'
          }`}>
            <span className="text-xl">🗺️</span>
          </div>
          <span className={`text-xl transition-colors ${(isScrolled && !isMenuOpen) ? 'text-gray-900' : 'text-white'}`}>wwvacations</span>
        </Link>

        {/* Desktop Nav links */}
        <ul className="hidden lg:flex gap-6 ml-10">
          {navItems.map(item => (
            <li key={item}>
              <Link 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className={`font-medium transition-colors hover:text-primary ${
                  (isScrolled && !isMenuOpen) ? 'text-gray-900' : 'text-white'
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Search + language + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <input
            type="text"
            placeholder="Search Destination"
            className={`h-9 rounded-full px-4 text-sm backdrop-blur placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all cursor-pointer ${
              (isScrolled && !isMenuOpen)
                ? 'bg-gray-100 text-gray-900' 
                : 'bg-white/20 text-white placeholder:text-white/70'
            }`}
          />
          <Link
            href="#contact"
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
              (isScrolled && !isMenuOpen)
                ? 'border-primary text-primary hover:bg-primary hover:text-white' 
                : 'border-white/40 text-white hover:bg-white/10'
            } hover:backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className={`lg:hidden p-2 rounded-md transition-colors ${
            (isScrolled && !isMenuOpen)
              ? 'hover:bg-gray-100 text-gray-900' 
              : 'hover:bg-white/20 text-white'
          }`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 backdrop-blur-sm lg:hidden"
            onClick={toggleMenu}
          >
            <motion.div 
              className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-gray-900/30 backdrop-blur-xl shadow-xl p-6 pt-20"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col gap-2">
                {navItems.map(item => (
                  <li key={item}>
                    <Link 
                      href={`#${item.toLowerCase().replace(' ', '-')}`} 
                      onClick={toggleMenu}
                      className={`text-2xl font-medium transition-all px-4 py-2 block rounded-lg ${
                        activeItem === item
                          ? 'bg-primary/80 text-white hover:bg-primary/70'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-white/20 pt-6 flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Search Destination"
                  className="h-10 rounded-full px-4 text-sm bg-white/40 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary border border-white/20"
                />
                <Link
                  href="#contact"
                  onClick={toggleMenu}
                  className="rounded-full bg-black text-white hover:bg-black/40 hover:backdrop-blur-sm text-center py-2 text-sm font-medium transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 