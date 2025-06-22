'use client';
import { useState } from 'react';
import ContactPopup from './ContactPopup';
import { Package } from '@/data/packagesData';

interface PackageDetailClientProps {
  pkg: Package;
  children: React.ReactNode;
}

export default function PackageDetailClient({ pkg, children }: PackageDetailClientProps) {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const openContactPopup = () => {
    setIsContactPopupOpen(true);
  };

  const closeContactPopup = () => {
    setIsContactPopupOpen(false);
  };

  return (
    <>
      {/* Render the children (package detail content) with the contact button functionality */}
      <div 
        dangerouslySetInnerHTML={{ 
          __html: children as string 
        }}
        onClick={(e) => {
          // Find and replace the contact button functionality
          const target = e.target as HTMLElement;
          if (target.textContent?.includes('Contact Us') && target.tagName === 'BUTTON') {
            e.preventDefault();
            openContactPopup();
          }
        }}
      />
      
      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={closeContactPopup}
        packageName={pkg.packageName}
      />
    </>
  );
} 