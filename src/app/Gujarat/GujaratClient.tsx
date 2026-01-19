'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GujaratClient() {

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17514037101/EksMCJ2ykKUbEO3-q59B',
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <h1>Gujarat Landing Page</h1>
      <Footer />
    </>
  );
}
