'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        {/* pushes content below fixed navbar */}
        <Hero />
        {/* ↓ further sections will go here */}
      </main>
    </>
  );
}
