'use client';

import { Menu, X, Search, MapPin, Package as PackageIcon, Star, Clock } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { packagesData } from '@/data/packagesData';
import { destinationsData } from '@/data/destinationsData';
import Image from 'next/image';

const navItems = ['Home', 'Services', 'Destinations', 'Packages', 'About Us'];

interface SearchResult {
  type: 'package' | 'destination';
  id: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
  rating?: number;
  duration?: string;
  price?: string;
  highlights?: string[];
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isInDestinationsSection, setIsInDestinationsSection] = useState(false);
  const [isAboutPage, setIsAboutPage] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Check if we're on the About Us page
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkAboutPage = () => {
        setIsAboutPage(window.location.pathname === '/about');
      };
      
      checkAboutPage();
      
      // Listen for route changes
      window.addEventListener('popstate', checkAboutPage);
      
      return () => {
        window.removeEventListener('popstate', checkAboutPage);
      };
    }
  }, []);

  // Search functionality
  const performSearch = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    const results: SearchResult[] = [];

    // Search in packages
    packagesData.forEach(pkg => {
      const matchesName = pkg.packageName.toLowerCase().includes(query);
      const matchesDestination = pkg.destination.toLowerCase().includes(query);
      const matchesDescription = pkg.description.toLowerCase().includes(query);
      const matchesHighlights = pkg.highlights?.some(h => h.toLowerCase().includes(query));
      const matchesCategory = pkg.category.toLowerCase().includes(query);

      if (matchesName || matchesDestination || matchesDescription || matchesHighlights || matchesCategory) {
        results.push({
          type: 'package',
          id: pkg.id,
          title: pkg.packageName,
          subtitle: pkg.destination,
          imageUrl: pkg.imageUrl,
          rating: pkg.rating,
          duration: pkg.duration,
          price: pkg.price,
          highlights: pkg.highlights
        });
      }
    });

    // Search in destinations
    destinationsData.forEach(category => {
      category.destinations.forEach(dest => {
        const matchesName = dest.name.toLowerCase().includes(query);
        const matchesPackages = dest.packages.some(pkg => 
          pkg.packageName.toLowerCase().includes(query) ||
          pkg.description.toLowerCase().includes(query)
        );

        if (matchesName || matchesPackages) {
          results.push({
            type: 'destination',
            id: dest.name,
            title: dest.name,
            subtitle: `${dest.packages.length} packages available`,
            imageUrl: dest.packages[0]?.imageUrl,
            highlights: dest.packages[0]?.highlights
          });
        }
      });
    });

    // Remove duplicates and limit results
    const uniqueResults = results.filter((result, index, self) => 
      index === self.findIndex(r => r.id === result.id)
    );

    return uniqueResults.slice(0, 8);
  }, [searchQuery]);

  useEffect(() => {
    setSearchResults(performSearch);
  }, [performSearch]);

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close search dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSearchFocused(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (throttleTimeout) return;

      throttleTimeout = setTimeout(() => {
        const scrollY = window.scrollY;
        const destinationsSection = document.getElementById('destinations');
        
        // Check if we're in the destinations section
        let isInDestinationsSection = false;
        if (destinationsSection) {
          const destTop = destinationsSection.offsetTop;
          const destBottom = destTop + destinationsSection.offsetHeight;
          isInDestinationsSection = scrollY >= destTop - 100 && scrollY <= destBottom - 100;
        }

        // Update destinations section state
        setIsInDestinationsSection(isInDestinationsSection);

        // Keep transparent if in destinations section, otherwise use scroll threshold
        setIsScrolled(!isInDestinationsSection && scrollY > 50);

        const sections = navItems.map(item => document.getElementById(item.toLowerCase().replace(' ', '-')));
        const scrollPosition = scrollY + window.innerHeight / 2;

        for (const section of sections) {
          if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            setActiveItem(navItems.find(item => item.toLowerCase().replace(' ', '-') === section.id) || 'Home');
            break;
          }
        }
        
        throttleTimeout = null;
      }, 100);
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

  const getNavLink = (item: string) => {
    if (item === 'Packages') {
      return '/packages';
    }
    if (item === 'About Us') {
      return '/about';
    }
    return `/#${item.toLowerCase().replace(' ', '-')}`;
  };

  const handleSearchResultClick = (result: SearchResult) => {
    if (result.type === 'package') {
      window.location.href = `/package/${result.id}`;
    } else {
      window.location.href = `/packages?destination=${encodeURIComponent(result.title)}`;
    }
    setIsSearchFocused(false);
    setSearchQuery('');
  };

  const handleNavClick = (item: string, e: React.MouseEvent) => {
    if (item === 'Packages' || item === 'About Us') {
      return; // Let the default Link behavior handle this
    }
    
    // If we're on the packages page, navigate to home page with hash
    if (typeof window !== 'undefined' && window.location.pathname === '/packages') {
      e.preventDefault();
      window.location.href = `/#${item.toLowerCase().replace(' ', '-')}`;
    }
  };

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-40 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
        (isScrolled && !isMenuOpen) || isAboutPage || isSearchFocused
          ? 'bg-white/90 backdrop-blur-md shadow-sm' 
          : (isInDestinationsSection)
            ? 'bg-gradient-to-b from-white/50 to-white/0 backdrop-blur-[1px]'
            : 'bg-white/0 backdrop-blur-[2px]'
      }`}>
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
          <div className={`h-full w-full rounded-full ring-1 grid place-items-center transition-colors ${
            (isScrolled && !isMenuOpen) || isAboutPage || isSearchFocused
              ? 'bg-white ring-black/10' 
              : 'bg-white/90 ring-white/20'
          }`}>
            <img src="images/world-wide-vacations.png" alt="logo" className="w-12 object-contain" />
          </div>
          <span className={`text-xl transition-colors ${
            (isScrolled && !isMenuOpen) || isAboutPage || isSearchFocused
              ? 'text-gray-900' 
              : 'text-white'
          }`}>wwvacations</span>
        </Link>

        {/* Desktop Nav links */}
        <ul className="hidden lg:flex gap-6 ml-10">
          {navItems.map(item => (
            <li key={item}>
              <Link 
                href={getNavLink(item)} 
                className={`font-medium px-3 py-2 rounded-full transition-all ${
                  (isScrolled && !isMenuOpen) || isInDestinationsSection || isAboutPage || isSearchFocused
                    ? 'text-gray-900 hover:bg-gray-100/80 hover:backdrop-blur-sm' 
                    : 'text-white hover:bg-white/20 hover:backdrop-blur-sm'
                }`}
                onClick={(e) => handleNavClick(item, e)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Search + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative" ref={searchRef}>
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors z-10 ${
                (isScrolled && !isMenuOpen) || isInDestinationsSection || isAboutPage || isSearchFocused ? 'text-gray-500' : 'text-white/80'
              }`} />
              <input
                type="text"
                placeholder={isSearchFocused ? "Search destinations, packages..." : "Search"}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                className={`transition-all duration-300 rounded-full pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                  (isScrolled && !isMenuOpen) || isInDestinationsSection || isAboutPage || isSearchFocused
                    ? 'bg-gray-100 text-gray-900 placeholder:text-gray-500' 
                    : 'bg-white/20 text-white placeholder:text-white/70'
                } ${isSearchFocused ? 'w-96' : 'w-40'} h-11`}
              />
            </div>

            {/* Search Dropdown */}
            <AnimatePresence>
              {isSearchFocused && searchQuery.trim() && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute top-full left-0 right-0 mt-2 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl overflow-hidden w-96 bg-white/90"
                >
                  <div className="max-h-96 overflow-y-auto">
                    {searchResults.length > 0 ? (
                      <div className="p-2">
                        {searchResults.map((result, index) => (
                          <motion.div
                            key={`${result.type}-${result.id}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => handleSearchResultClick(result)}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition-all cursor-pointer group"
                          >
                            {/* Image */}
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-gray-200">
                              {result.imageUrl ? (
                                <Image 
                                  src={result.imageUrl} 
                                  alt={result.title}
                                  className="w-full h-full object-cover"
                                  width={12}
                                  height={12}
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  {result.type === 'package' ? (
                                    <PackageIcon className="w-6 h-6 text-gray-400" />
                                  ) : (
                                    <MapPin className="w-6 h-6 text-gray-400" />
                                  )}
                                </div>
                              )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold text-gray-900 truncate group-hover:text-primary transition-colors">
                                  {result.title}
                                </h4>
                                {result.type === 'package' && result.rating && (
                                  <div className="flex items-center gap-1 bg-yellow-500/20 px-2 py-1 rounded-full">
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    <span className="text-xs text-yellow-600">{result.rating}</span>
                                  </div>
                                )}
                              </div>
                              <p className="text-sm text-gray-600 truncate">
                                {result.subtitle}
                              </p>
                              
                              {/* Additional info */}
                              <div className="flex items-center gap-3 mt-2">
                                {result.duration && (
                                  <div className="flex items-center gap-1 text-xs text-gray-500">
                                    <Clock className="w-3 h-3" />
                                    <span>{result.duration}</span>
                                  </div>
                                )}
                                {/* {result.price && (
                                  <span className="text-xs font-medium text-primary">{result.price}</span>
                                )} */}
                              </div>

                              {/* Highlights */}
                              {result.highlights && result.highlights.length > 0 && (
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {result.highlights.slice(0, 2).map((highlight, idx) => (
                                    <span
                                      key={idx}
                                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                    >
                                      {highlight}
                                    </span>
                                  ))}
                                  {result.highlights.length > 2 && (
                                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                      +{result.highlights.length - 2}
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>

                            {/* Type indicator */}
                            <div className={`flex-shrink-0 px-2 py-1 rounded-full text-xs font-medium ${
                              result.type === 'package' 
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-green-100 text-green-700'
                            }`}>
                              {result.type === 'package' ? 'Package' : 'Destination'}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-6 text-center">
                        <Search className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600 text-sm">
                          No results found for &quot;{searchQuery}&quot;
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          Try searching for destinations or package names
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="#contact"
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
              (isScrolled && !isMenuOpen) || isInDestinationsSection || isAboutPage || isSearchFocused
                ? 'border-primary text-primary hover:bg-primary hover:text-white' 
                : 'border-white/40 text-white hover:bg-white hover:text-gray-900'
            } hover:backdrop-blur-sm transition-all cursor-pointer`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className={`lg:hidden p-2 rounded-md transition-colors ${
            (isScrolled && !isMenuOpen) || isInDestinationsSection || isAboutPage || isSearchFocused
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
                      href={getNavLink(item)} 
                      onClick={(e) => {
                        handleNavClick(item, e);
                        toggleMenu();
                      }}
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
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70" />
                  <input
                    type="text"
                    placeholder="Search destinations, packages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-10 rounded-full pl-10 pr-4 text-sm bg-white/40 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-primary border border-white/20"
                  />
                </div>
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
