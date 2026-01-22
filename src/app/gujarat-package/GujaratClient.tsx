'use client';

import LandingPageNavbar from '@/components/LandingPageNavbar';
import Footer from '@/components/Footer';
import GujaratHeroSec from '@/components/GujaratHeroSec';
import GujaratTripCard from '@/components/GujaratTripCard';
import GujaratTourPackages from '@/components/GujaratTourPackages';

export default function GujaratClient() {

  return (
    <>
      <LandingPageNavbar />
      <main className="relative bg-white">
        <GujaratHeroSec />
        <GujaratTripCard />
        <GujaratTourPackages />
      </main>
      <Footer />
    </>
  );
}
