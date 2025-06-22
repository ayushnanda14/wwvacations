'use client';
import { motion, Variants } from 'framer-motion';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className="relative h-[95vh] w-full">
      <div className="relative z-10 flex flex-col justify-center h-full w-full md:max-w-7xl mx-auto px-6 sm:px-8 md:px-12 text-white">
        <motion.div 
          className="w-full md:max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-6xl leading-tight font-medium tracking-tight"
            variants={itemVariants}
          >
            Pack Your Bags, Let&apos;s Go Somewhere Amazing
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg text-white/90 leading-relaxed"
            variants={itemVariants}
          >
            Whether you&apos;re chasing adventure, relaxation, or something in between,
            your next incredible journey starts here. Let&apos;s make it happen!
          </motion.p>

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
          <motion.div variants={itemVariants}>
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 