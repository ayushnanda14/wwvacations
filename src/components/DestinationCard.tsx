'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Destination } from './Destinations'; // Updated import
import { FiGlobe, FiMapPin, FiBox, FiClock, FiStar } from 'react-icons/fi';

interface DestinationCardProps {
  destination: Destination; // Updated prop
  isActive: boolean;
}

export default function DestinationCard({ destination, isActive }: DestinationCardProps) {
  const { name, packages } = destination;
  const mainPackage = packages[0]; // Use the first package for primary info

  const isInternational = mainPackage.type === 'International';

  return (
    <motion.div
      className="w-full max-w-md md:max-w-lg mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-lg overflow-hidden flex flex-col flex-shrink-0 snap-center"
      layout
    >
      <div className="relative h-72 w-full">
        <Image
          src={mainPackage.imageUrl}
          alt={`${name} photo`}
          fill
          loading={isActive ? "eager" : "lazy"}
          priority={isActive}
          quality={isActive ? 75 : 50}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div 
          className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 ${
            isInternational ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
          }`}
        >
          {isInternational ? <FiGlobe /> : <FiMapPin />}
          <span>{mainPackage.type}</span>
        </div>
        <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-3xl font-bold text-white" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{name}</h3>
        </div>
      </div>
      
      <div className="flex-grow p-6 pt-4 flex flex-col justify-between">
        <div className="space-y-4">
          {/* Description */}
          <div>
            <p className="text-gray-600 leading-relaxed text-sm">{mainPackage.description}</p>
          </div>
          
          {/* Highlights */}
          <div>
            <h4 className="font-semibold text-sm text-gray-800 flex items-center gap-2 mb-2">
              <FiStar className="text-yellow-500"/> Highlights
            </h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1">
              {mainPackage.highlights.slice(0, 4).map((item, index) => (
                <span key={index} className="text-gray-600 text-xs flex items-center">
                  <FiStar className="inline mr-1.5 text-yellow-500 flex-shrink-0 text-xs"/>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Available Packages */}
          <div>
            <h4 className="font-semibold text-sm text-gray-800 flex items-center gap-2 mb-2">
              <FiBox className="text-blue-500" /> Available Packages
            </h4>
            <div className="space-y-2 max-h-20 overflow-y-auto pr-2">
                {packages.map((pkg, index) => (
                    <div key={index} className="bg-gray-50 p-2 rounded-lg border border-gray-200">
                        <p className="font-semibold text-gray-800 text-xs">{pkg.packageName}</p>
                        <div className="flex items-center text-xs text-gray-500 mt-0.5">
                            <FiClock className="mr-1 text-xs"/>
                            <span>{pkg.duration}</span>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label={`Show details for ${name}`}
          >
            Check Packages
          </button>
          <button className="flex-1 px-6 py-3 bg-transparent border border-gray-300 text-gray-800 font-semibold rounded-xl hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label={`Bookmark ${name}`}
          >
            Bookmark
          </button>
        </div>
      </div>
    </motion.div>
  );
}
