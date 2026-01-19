'use client';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { FiGlobe, FiHeart, FiShield, FiUsers, FiAward, FiCheckCircle, FiStar, FiCompass, FiMapPin, FiNavigation } from 'react-icons/fi';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      ease: "easeOut",
    },
  },
};

const worldWideJourney = [
  { letter: 'W', word: 'Worldwide Destinations', icon: FiGlobe },
  { letter: 'O', word: 'Outstanding Experiences', icon: FiStar },
  { letter: 'R', word: 'Reliable Services', icon: FiShield },
  { letter: 'L', word: 'Luxury & Leisure', icon: FiHeart },
  { letter: 'D', word: 'Dedicated Support', icon: FiUsers },
  { letter: 'W', word: 'Wonderfully Planned Itineraries', icon: FiCompass },
  { letter: 'I', word: 'Impeccable Management', icon: FiAward },
  { letter: 'D', word: 'Dreamful Escapes', icon: FiStar },
  { letter: 'E', word: 'Enduring Memories', icon: FiHeart },
];

const coreServices = [
  'Domestic & International Tour Packages',
  'Tailor-Made Itineraries',
  'Group & Corporate Travel',
  'Honeymoon & Luxury Holidays',
  'Pilgrimage & Spiritual Tours',
  'Student & Educational Tours',
  'Medical Tourism',
  'Hotel Reservations & Air Ticketing',
  'Car & Coach Rentals',
  '24/7 Customer Assistance',
];

const strengths = [
  'Transparent and ethical practices',
  'Tailor-made experiences for every budget',
  'Deep cultural understanding and hospitality',
  'Full-service travel solutions under one roof',
];

const whyChooseUs = [
  'We listen to your needs',
  'We plan with passion',
  'We execute with precision',
  'We deliver with heart',
];

export default function GujaratClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <>
      <Navbar />
      
      <Footer />
    </>
  );
} 
