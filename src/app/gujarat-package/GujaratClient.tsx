'use client';

import PopupEnquiryForm from '@/components/PopupEnquiryForm';
import LandingPageNavbar from '@/components/LandingPageNavbar';
import LandingPageFooter from '@/components/LandingPageFooter';
import GujaratHeroSec from '@/components/GujaratHeroSec';
import GujaratTripCard from '@/components/GujaratTripCard';
import GujaratTourPackages from '@/components/GujaratTourPackages';
import TourEnquiryForm from '@/components/TourEnquiryForm';

export default function GujaratClient() {

  return (
    <>
      <PopupEnquiryForm />
      <LandingPageNavbar />
      <main className="relative bg-white">
        <GujaratHeroSec />
        <GujaratTripCard />
        <GujaratTourPackages />
        <div className="max-w-7xl mx-auto px-4 block md:hidden">
          <TourEnquiryForm />
        </div>
      </main>
      <LandingPageFooter />
    </>
  );
}
