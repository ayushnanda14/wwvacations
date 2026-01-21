'use client';

import LandingPageNavbar from '@/components/LandingPageNavbar';
import Footer from '@/components/Footer';
import GujaratHeroSec from '@/components/GujaratHeroSec';

export default function GujaratClient() {

  return (
    <>
      <LandingPageNavbar />
      <main className="relative bg-white">
        <GujaratHeroSec />
      </main>
      <Footer />
    </>
  );
}
