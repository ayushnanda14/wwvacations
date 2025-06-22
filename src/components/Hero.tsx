'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative isolate h-[95vh] w-full overflow-hidden p-[10em]">
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="Scenic mountain road"
        fill
        priority
        className="object-cover"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 text-white">
        <div className="max-w-2xl">
          <h1 className="text-[7em] md:text-6xl leading-tight font-medium tracking-tight">
            Pack Your Bags, Let's Go Somewhere Amazing
          </h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Whether you're chasing adventure, relaxation, or something in between,
            your next incredible journey starts here. Let's make it happen!
          </p>

          {/* Email capture */}
          {/* <form className="mt-8 flex flex-wrap gap-4 max-w-lg">
            <input
              type="email"
              placeholder="Enter your email…"
              required
              className="flex-grow h-12 rounded-full px-4 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-primary px-8 font-medium text-white hover:bg-primary/90 transition"
            >
              Subscribe
            </button>
          </form> */}

          {/* Explore CTA */}
          <button
            className="mt-8 inline-flex items-center gap-2 text-sm group text-white/90 hover:text-white transition-all cursor-pointer border border-white/30 rounded-full px-6 py-3 hover:bg-white/10 hover:backdrop-blur-sm"
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            Explore More
            <span className="inline-block transition-transform group-hover:translate-y-1">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
} 