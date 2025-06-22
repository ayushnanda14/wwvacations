'use client';
import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiMapPin, FiClock, FiStar, FiUsers } from 'react-icons/fi';
import { packagesData, getUniqueDestinations, getUniqueCategories, getUniqueTypes } from '@/data/packagesData';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import ContactButton from '@/components/ContactButton';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

type SortOption = 'name' | 'price' | 'duration' | 'rating';
type FilterType = 'destination' | 'category' | 'type' | 'difficulty';

export default function PackagesClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [filters, setFilters] = useState<Record<FilterType, string>>({
    destination: '',
    category: '',
    type: '',
    difficulty: ''
  });
  
  const isInitialLoad = useRef(true);
  const updateTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const destinations = getUniqueDestinations();
  const categories = getUniqueCategories();
  const types = getUniqueTypes();
  const difficulties = ['Easy', 'Moderate', 'Challenging'];

  // Function to update URL with current filters
  const updateURL = useCallback((newFilters: Record<FilterType, string>, newSearchQuery: string, newSortBy: SortOption) => {
    // Clear any existing timeout
    if (updateTimeoutRef.current) {
      clearTimeout(updateTimeoutRef.current);
    }
    
    // Debounce URL updates to prevent too frequent updates
    updateTimeoutRef.current = setTimeout(() => {
      const params = new URLSearchParams();
      
      if (newSearchQuery) params.set('search', newSearchQuery);
      if (newFilters.destination) params.set('destination', newFilters.destination);
      if (newFilters.category) params.set('category', newFilters.category);
      if (newFilters.type) params.set('type', newFilters.type);
      if (newFilters.difficulty) params.set('difficulty', newFilters.difficulty);
      if (newSortBy !== 'name') params.set('sort', newSortBy);
      
      const newURL = params.toString() ? `${pathname}?${params.toString()}` : pathname;
      router.push(newURL, { scroll: false });
    }, 300);
  }, [pathname, router]);

  // Handle URL parameters for destination filtering
  useEffect(() => {
    const destinationParam = searchParams.get('destination');
    const searchParam = searchParams.get('search');
    const categoryParam = searchParams.get('category');
    const typeParam = searchParams.get('type');
    const difficultyParam = searchParams.get('difficulty');
    const sortParam = searchParams.get('sort') as SortOption;
    
    if (destinationParam) {
      // Map destination names from destinationsData to packagesData destinations
      const destinationMapping: Record<string, string> = {
        'Bali (Indonesia)': 'Bali, Indonesia',
        'Baku (Azerbaijan)': 'Baku, Azerbaijan',
        'Bhutan': 'Bhutan',
        'Darjeeling & North East India': 'Sikkim & Darjeeling, India',
        'Dubai (UAE)': 'Dubai, UAE',
        'Golden Triangle & Rajasthan (India)': 'Delhi, Agra, Jaipur & Udaipur, India',
        'Japan': 'Japan',
        'Kazakhstan': 'Kazakhstan',
        'Malaysia & Singapore': 'Malaysia & Singapore',
        'Maldives': 'Maldives',
        'Nepal': 'Nepal',
        'Sri Lanka': 'Sri Lanka',
        'Thailand': 'Thailand',
        'Vietnam': 'Vietnam'
      };
      
      // Try exact match first, then try partial match
      let mappedDestination = destinationMapping[destinationParam];
      
      if (!mappedDestination) {
        // Try to find a partial match
        const packagesDestinations = getUniqueDestinations();
        const partialMatch = packagesDestinations.find(dest => 
          dest.toLowerCase().includes(destinationParam.toLowerCase()) ||
          destinationParam.toLowerCase().includes(dest.toLowerCase())
        );
        mappedDestination = partialMatch || destinationParam;
      }
      
      setFilters(prev => ({ 
        ...prev, 
        destination: mappedDestination,
        category: categoryParam || '',
        type: typeParam || '',
        difficulty: difficultyParam || ''
      }));
    } else {
      // Set all filters from URL params
      setFilters({
        destination: destinationParam || '',
        category: categoryParam || '',
        type: typeParam || '',
        difficulty: difficultyParam || ''
      });
    }
    
    if (searchParam) setSearchQuery(searchParam);
    if (sortParam && ['name', 'price', 'duration', 'rating'].includes(sortParam)) {
      setSortBy(sortParam);
    }
    
    isInitialLoad.current = false;
  }, [searchParams]);

  // Update URL when filters change (but not on initial load)
  useEffect(() => {
    if (!isInitialLoad.current) {
      updateURL(filters, searchQuery, sortBy);
    }
  }, [filters, searchQuery, sortBy, updateURL]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (updateTimeoutRef.current) {
        clearTimeout(updateTimeoutRef.current);
      }
    };
  }, []);

  // Filter and sort packages
  const filteredPackages = useMemo(() => {
    const filtered = packagesData.filter(pkg => {
      const matchesSearch = pkg.packageName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           pkg.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           pkg.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // More flexible destination matching
      const matchesDestination = !filters.destination || 
        pkg.destination.toLowerCase().includes(filters.destination.toLowerCase()) ||
        filters.destination.toLowerCase().includes(pkg.destination.toLowerCase());
      
      const matchesCategory = !filters.category || pkg.category === filters.category;
      const matchesType = !filters.type || pkg.type === filters.type;
      const matchesDifficulty = !filters.difficulty || pkg.difficulty === filters.difficulty;

      return matchesSearch && matchesDestination && matchesCategory && matchesType && matchesDifficulty;
    });

    // Sort packages
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          const priceA = parseInt(a.price?.replace(/[^\d]/g, '') || '0');
          const priceB = parseInt(b.price?.replace(/[^\d]/g, '') || '0');
          return priceA - priceB;
        case 'duration':
          const durationA = parseInt(a.duration.match(/\d+/)?.[0] || '0');
          const durationB = parseInt(b.duration.match(/\d+/)?.[0] || '0');
          return durationA - durationB;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return a.packageName.localeCompare(b.packageName);
      }
    });

    return filtered;
  }, [searchQuery, filters, sortBy]);

  const clearFilters = () => {
    setFilters({
      destination: '',
      category: '',
      type: '',
      difficulty: ''
    });
    setSearchQuery('');
    setSortBy('name');
  };

  const hasActiveFilters = Object.values(filters).some(filter => filter !== '') || searchQuery !== '';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 pt-48 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 md:px-12 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Explore Our Packages
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Discover handcrafted travel experiences designed to create unforgettable memories
          </motion.p>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search packages, destinations, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="duration">Sort by Duration</option>
                <option value="rating">Sort by Rating</option>
              </select>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Filter Chips */}
          <div className="mt-6 flex flex-wrap gap-3">
            {/* Destination Filter */}
            <select
              value={filters.destination}
              onChange={(e) => setFilters(prev => ({ ...prev, destination: e.target.value }))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
            >
              <option value="">All Destinations</option>
              {destinations.map(dest => (
                <option key={dest} value={dest}>{dest}</option>
              ))}
            </select>

            {/* Category Filter */}
            <select
              value={filters.category}
              onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
            >
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Type Filter */}
            <select
              value={filters.type}
              onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
            >
              <option value="">All Types</option>
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            {/* Difficulty Filter */}
            <select
              value={filters.difficulty}
              onChange={(e) => setFilters(prev => ({ ...prev, difficulty: e.target.value }))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
            >
              <option value="">All Difficulties</option>
              {difficulties.map(diff => (
                <option key={diff} value={diff}>{diff}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredPackages.length} of {packagesData.length} packages
              {filters.destination && (
                <span className="ml-2 text-primary font-medium">
                  for {filters.destination}
                </span>
              )}
            </p>
          </div>

          {/* Packages Grid */}
          <AnimatePresence mode="popLayout">
            {filteredPackages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPackages.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
                  >
                    {/* Package Image and Basic Info */}
                    <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => window.location.href = `/package/${pkg.id}`}>
                      <Image
                        src={pkg.imageUrl}
                        alt={pkg.packageName}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                        width={400}
                        height={300}
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          pkg.type === 'International' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-green-500 text-white'
                        }`}>
                          {pkg.type}
                        </span>
                      </div>
                      {pkg.rating && (
                        <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                          <FiStar className="w-4 h-4 fill-yellow-400" />
                          <span>{pkg.rating}</span>
                        </div>
                      )}
                    </div>

                    {/* Card Content (flexible, not scrollable) */}
                    <div className="flex-1 flex flex-col p-6">
                      <div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <FiMapPin className="w-4 h-4" />
                          <span>{pkg.destination}</span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 cursor-pointer hover:text-primary transition-colors" onClick={() => window.location.href = `/package/${pkg.id}`}>
                          {pkg.packageName}
                        </h3>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {pkg.description}
                        </p>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <FiClock className="w-4 h-4" />
                              <span>{pkg.duration}</span>
                            </div>
                            {pkg.groupSize && (
                              <div className="flex items-center gap-1">
                                <FiUsers className="w-4 h-4" />
                                <span>{pkg.groupSize}</span>
                              </div>
                            )}
                          </div>
                          {pkg.difficulty && (
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              pkg.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                              pkg.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {pkg.difficulty}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div className="text-xl font-bold text-primary">
                            {pkg.price}
                          </div>
                          <button 
                            onClick={() => window.location.href = `/package/${pkg.id}`}
                            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                          >
                            View Details
                          </button>
                        </div>

                        {/* Highlights */}
                        {pkg.highlights && pkg.highlights.length > 0 && (
                          <div className="mb-4 pt-4 border-t border-gray-100">
                            <div className="flex flex-wrap gap-2">
                              {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                >
                                  {highlight}
                                </span>
                              ))}
                              {pkg.highlights.length > 3 && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                  +{pkg.highlights.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Contact Button fixed at bottom with mt-auto */}
                      <div className="mt-auto pt-4">
                        <ContactButton packageName={pkg.packageName} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-gray-400 mb-4">
                  <FiSearch className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No packages found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search criteria or filters
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
} 