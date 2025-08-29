'use client';

import { FiMapPin, FiClock, FiStar, FiUsers, FiCheck, FiX, FiCalendar, FiShield, FiTruck } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactPopup from '@/components/ContactPopup';
import Image from 'next/image';
import { useState } from 'react';
import { Package } from '@/data/packagesData';

interface PackageDetailClientProps {
  pkg: Package;
}

export default function PackageDetailClient({ pkg }: PackageDetailClientProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleEnquireClick = () => {
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Image */}
      <section className="relative h-[70vh] min-h-[500px]">
        <div className="absolute inset-0">
          <Image
            src={pkg.imageUrl}
            alt={pkg.packageName}
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        
        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pb-12 text-white">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FiMapPin className="w-5 h-5" />
                <span className="text-lg">{pkg.destination}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                {pkg.packageName}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-lg">
                <div className="flex items-center gap-2">
                  <FiClock className="w-5 h-5" />
                  <span>{pkg.duration}</span>
                </div>
                
                {pkg.rating && (
                  <div className="flex items-center gap-2">
                    <FiStar className="w-5 h-5 fill-yellow-400" />
                    <span>{pkg.rating} Rating</span>
                  </div>
                )}
                
                {pkg.groupSize && (
                  <div className="flex items-center gap-2">
                    <FiUsers className="w-5 h-5" />
                    <span>{pkg.groupSize}</span>
                  </div>
                )}
                
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  pkg.type === 'International' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-green-500 text-white'
                }`}>
                  {pkg.type}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Highlights */}
              {pkg.highlights && pkg.highlights.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pkg.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                        <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Itinerary */}
              {pkg.itinerary && pkg.itinerary.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Itinerary</h2>
                  <div className="space-y-6">
                    {pkg.itinerary.map((day, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                            {day.day}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">{day.title}</h3>
                        </div>
                        <p className="text-gray-600 mb-4">{day.description}</p>
                        <div className="space-y-2">
                          {day.activities.map((activity, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-gray-700">{activity}</span>
                            </div>
                          ))}
                        </div>
                        {(day.accommodation || day.meals) && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              {day.accommodation && (
                                <div>
                                  <span className="font-medium text-gray-900">Accommodation:</span>
                                  <span className="text-gray-600 ml-2">{day.accommodation}</span>
                                </div>
                              )}
                              {day.meals && day.meals.length > 0 && (
                                <div>
                                  <span className="font-medium text-gray-900">Meals:</span>
                                  <span className="text-gray-600 ml-2">{day.meals.join(', ')}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Inclusions */}
                {pkg.inclusions && pkg.inclusions.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Included</h2>
                    <div className="space-y-3">
                      {pkg.inclusions.map((inclusion, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{inclusion}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Exclusions */}
                {pkg.exclusions && pkg.exclusions.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Not Included</h2>
                    <div className="space-y-3">
                      {pkg.exclusions.map((exclusion, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <FiX className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <span className="text-gray-700">{exclusion}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Terms & Conditions */}
              {pkg.terms && pkg.terms.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms & Conditions</h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <ul className="space-y-2">
                      {pkg.terms.map((term, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{term}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Price Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <div className="text-center mb-6">
                    {/* <div className="text-4xl font-bold text-primary mb-2">
                      {pkg.price}
                    </div> */}
                    {/* <div className="text-gray-600">per person</div> */}
                  </div>
                  
                  {/* Contact Us Button */}
                  <button 
                    className="w-full bg-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary/90 transition-colors mb-4 flex items-center justify-center gap-2 cursor-pointer" 
                    onClick={handleEnquireClick}
                  >
                    <FiCalendar className="w-5 h-5" />
                    Enquire Now
                  </button>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Get instant quotes and personalized assistance
                    </p>
                  </div>
                </div>

                {/* Package Details */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Package Details</h3>
                  <div className="space-y-4">
                    {pkg.difficulty && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Difficulty</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          pkg.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                          pkg.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {pkg.difficulty}
                        </span>
                      </div>
                    )}
                    
                    {pkg.bestTime && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Best Time</span>
                        <span className="text-gray-900">{pkg.bestTime}</span>
                      </div>
                    )}
                    
                    {pkg.accommodation && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Accommodation</span>
                        <span className="text-gray-900">{pkg.accommodation}</span>
                      </div>
                    )}
                    
                    {pkg.meals && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Meals</span>
                        <span className="text-gray-900">{pkg.meals}</span>
                      </div>
                    )}
                    
                    {pkg.transportation && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Transportation</span>
                        <span className="text-gray-900">{pkg.transportation}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Quick Info */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <FiCalendar className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">Duration: {pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FiMapPin className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">{pkg.destination}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FiShield className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">Travel Insurance Available</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FiTruck className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">Pickup & Drop Included</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>

      {/* Contact Popup */}
      {isContactOpen && (
        <ContactPopup
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          packageName={pkg.packageName}
        />
      )}
    </div>
  );
}
