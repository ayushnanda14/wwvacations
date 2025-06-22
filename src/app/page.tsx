'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Image from 'next/image';
import Destinations from '@/components/Destinations';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative bg-white">
        {/* Background container */}
        <div className="absolute inset-x-0 top-0 h-[150vh] w-full">
          <Image
            src="https://images.unsplash.com/photo-1638886540342-240980f60d25?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ooty Beauty"
            fill
            priority
            quality={70}
            className="object-cover"
          />
          {/* Gradient overlay for fade effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-white" />
        </div>

        {/* Content sits on top */}
        <div className="relative">
          <Hero />
          <Services />
          <Destinations />
          {/* ↓ further sections will go here */}
        </div>
      </main>
    </>
  );
}
