'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import DestinationCard from './DestinationCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { destinationsData } from '@/data/destinationsData';

export interface Package {
  packageName: string;
  duration: string;
  type: string;
  imageUrl: string;
  description: string;
  highlights: string[];
}

export interface Destination {
  id: number;
  name: string;
  packages: Package[];
}

// Transform the raw data into a flat array of destinations with unique IDs
let destinationIdCounter = 0;
const allDestinations: Destination[] = destinationsData.flatMap(category =>
  category.destinations.map(dest => ({
    id: destinationIdCounter++,
    name: dest.name,
    packages: dest.packages,
  }))
);

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

export default function Destinations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(allDestinations[0].packages[0].imageUrl);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Preload images
  useEffect(() => {
    const imagePromises = allDestinations.map(dest => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = dest.packages[0].imageUrl;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  useEffect(() => {
    setBackgroundImage(allDestinations[activeCardIndex].packages[0].imageUrl);
  }, [activeCardIndex]);

  const handleButtonClick = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next'
      ? Math.min(activeCardIndex + 1, allDestinations.length - 1)
      : Math.max(activeCardIndex - 1, 0);

    if (window.innerWidth < 768 && mobileContainerRef.current) {
        const cardElements = Array.from(mobileContainerRef.current.children);
        const cardElement = cardElements[newIndex] as HTMLElement;
        if(cardElement) {
            mobileContainerRef.current.scrollTo({
                left: cardElement.offsetLeft - mobileContainerRef.current.offsetLeft,
                behavior: 'smooth'
            });
        }
    }
    
    setActiveCardIndex(newIndex);
  };
  
  // Handle mobile scroll to update active index
  useEffect(() => {
    const container = mobileContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.scrollWidth / allDestinations.length;
        const newIndex = Math.round(scrollLeft / cardWidth);
        if(newIndex !== activeCardIndex) {
            setActiveCardIndex(newIndex);
        }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeCardIndex]);

  return (
    <section 
      ref={sectionRef}
      id="destinations" 
      className="relative py-16 md:py-24 bg-gray-50 overflow-x-hidden" 
    >
      {/* Elegant gradient fade from services section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-50 via-gray-50/50 to-transparent z-10" />
      
      <div 
        className="absolute inset-0 transition-all duration-1000"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: imagesLoaded ? 'none' : 'blur(20px) brightness(0.9)',
          transform: imagesLoaded ? 'scale(1)' : 'scale(1.1)',
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-white/20 backdrop-blur-xs rounded-xl p-4 shadow-sm">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-satoshi" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.2)'}}>
              Destinations
            </h2>
          </div>
        </motion.div>
        
        {/* Navigation Buttons */}
        <AnimatePresence>
          {isInView && (
            <>
              <motion.button 
                onClick={() => handleButtonClick('prev')}
                disabled={activeCardIndex === 0}
                className="absolute left-0 md:left-2 lg:left-4 top-1/2 -translate-y-1/2 z-40 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous Destination"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.3 }}
              >
                <FiChevronLeft size={24} />
              </motion.button>
              <motion.button 
                onClick={() => handleButtonClick('next')}
                disabled={activeCardIndex === allDestinations.length - 1}
                className="absolute right-0 md:right-2 lg:right-4 top-1/2 -translate-y-1/2 z-40 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next Destination"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.3 }}
              >
                <FiChevronRight size={24} />
              </motion.button>
            </>
          )}
        </AnimatePresence>

        <div className="min-h-[70vh] flex items-center justify-center mt-20">
          {/* Mobile Carousel */}
          <div 
            ref={mobileContainerRef} 
            className="md:hidden w-full flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {allDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                className="flex-shrink-0 w-[100%] m:w-[90%] snap-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <DestinationCard destination={destination} isActive={index === activeCardIndex} />
              </motion.div>
            ))}
          </div>

          {/* Desktop Stack */}
          <div className="hidden md:block w-full h-[550px]">
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                {allDestinations.map((destination, index) => {
                  const offset = index - activeCardIndex;
                  const isVisible = Math.abs(offset) <= 2;
                  const isActive = index === activeCardIndex;
                  
                  return (
                    <motion.div
                      key={destination.id}
                      className="absolute"
                      style={{ width: 'clamp(320px, 30vw, 420px)' }}
                      initial={{ scale: 0, y: 100, opacity: 0 }}
                      animate={{
                        x: isVisible ? offset * 80 : 0,
                        y: isVisible ? Math.abs(offset) * 20 : 0,
                        scale: isVisible ? 1 - Math.abs(offset) * 0.1 : 1,
                        rotate: isVisible ? offset * -3 : 0,
                        opacity: isVisible ? 1 - Math.abs(offset) * 0.3 : 0,
                        zIndex: allDestinations.length - Math.abs(offset),
                      }}
                      transition={{ 
                        type: 'spring', 
                        stiffness: 260, 
                        damping: 20,
                        duration: 0.6 
                      }}
                    >
                      <motion.div
                        animate={isActive ? floatingAnimation : {}}
                      >
                        <DestinationCard destination={destination} isActive={isActive} />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
