'use client';
import { useState } from 'react';
import ContactPopup from './ContactPopup';

interface ContactButtonProps {
  packageName?: string;
}

export default function ContactButton({ packageName }: ContactButtonProps) {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const openContactPopup = () => {
    setIsContactPopupOpen(true);
  };

  const closeContactPopup = () => {
    setIsContactPopupOpen(false);
  };

  return (
    <>
      <button 
        onClick={openContactPopup}
        className="w-full border border-primary text-primary py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors cursor-pointer"
      >
        Contact Us
      </button>
      
      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={closeContactPopup}
        packageName={packageName}
      />
    </>
  );
} 