'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative bg-white">
        {/* Background container */}
        <div className="absolute inset-x-0 top-0 h-[150vh] w-full">
          <Image
            src="/images/hero.jpg"
            alt="Scenic mountain road"
            fill
            priority
            className="object-cover"
          />
          {/* Gradient overlay for fade effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-white" />
        </div>

        {/* Content sits on top */}
        <div className="relative">
          <Hero />
          <Services />
          {/* ↓ further sections will go here */}
        </div>
      </main>
    </>
  );
}
