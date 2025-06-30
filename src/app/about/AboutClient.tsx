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

export default function AboutClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <>
      <Navbar />
      <div ref={containerRef} className="min-h-screen relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="fixed inset-0 -z-10"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000" />
        </motion.div>

        {/* Hero Section */}
        <motion.section
          className="relative py-32 px-6 sm:px-8 md:px-12 min-h-screen flex items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-yellow-500/10" />
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
          
          <div className="relative max-w-4xl mx-auto text-center z-10">
            <motion.div
              className="inline-block mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                <FiHeart className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Namaste!
            </motion.h1>
            
            <motion.p
              className="text-2xl md:text-3xl text-primary font-semibold mb-8 italic"
              variants={itemVariants}
            >
              "Atithi Devo Bhava" – The Guest is God
            </motion.p>
            
            <motion.p
              className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              At World Wide Vacations, we believe every journey is a blessing, and every traveler is a reflection of the divine. 
              In Indian culture, time is considered a gift – the "present" – not for its material value, but for the emotions 
              and memories it carries. We honor this spirit by turning your travel dreams into cherished, unforgettable experiences.
            </motion.p>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-20 left-10 text-4xl opacity-20"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiNavigation className="w-12 h-12 text-blue-600" />
            </motion.div>
            <motion.div
              className="absolute top-40 right-20 text-3xl opacity-20"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <FiMapPin className="w-10 h-10 text-green-600" />
            </motion.div>
            <motion.div
              className="absolute bottom-20 left-20 text-3xl opacity-20"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <FiStar className="w-10 h-10 text-yellow-600" />
            </motion.div>
          </div>
        </motion.section>

        {/* World Wide Journey Section */}
        <motion.section
          className="relative py-20 px-6 sm:px-8 md:px-12 bg-white/80 backdrop-blur-sm"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
          
          <div className="relative max-w-6xl mx-auto z-10">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
              variants={itemVariants}
            >
              And here begins the{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                WORLD WIDE
              </span>{' '}
              journey...
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 gap-6">
              {worldWideJourney.map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  <div className="relative text-center p-6 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-xl border border-blue-200/50 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <motion.div
                      className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-3"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.letter}
                    </motion.div>
                    <item.icon className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-sm text-gray-700 font-medium leading-tight">{item.word}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Who We Are Section */}
        <motion.section
          className="relative py-20 px-6 sm:px-8 md:px-12 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative max-w-4xl mx-auto z-10">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
              variants={itemVariants}
            >
              Who We Are
            </motion.h2>
            
            <motion.div
              className="text-xl text-gray-700 leading-relaxed space-y-8"
              variants={itemVariants}
            >
              <motion.p
                className="p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                World Wide Vacations is a destination management company offering all-inclusive tour packages, 
                events, and curated experiences across India and to select international destinations. We specialize 
                in both inbound and outbound travel, including serene journeys to Nepal, spiritual retreats to Bhutan, 
                scenic adventures in Sri Lanka, and tailor-made domestic holidays covering every corner of India.
              </motion.p>
              
              <motion.p
                className="p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                From solo travelers and couples to family groups and corporate teams, we cater to all – delivering 
                highly personalized services with a focus on comfort, quality, and cultural depth. With our headquarters 
                based in Bhubaneswar, Odisha, and a network of associate offices pan India and abroad, we ensure 
                seamless travel support from start to finish.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Vision, Mission, Motto Section */}
        <motion.section
          className="relative py-20 px-6 sm:px-8 md:px-12 bg-white/90 backdrop-blur-sm"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5" />
          
          <div className="relative max-w-6xl mx-auto z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="group relative"
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative text-center p-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FiGlobe className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be the most trusted and creative travel partner that transforms dreams into destinations 
                    and memories into legacies.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="group relative"
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative text-center p-10 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FiHeart className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To deliver excellence and authenticity in travel by blending modern comfort with cultural richness. 
                    Our team of seasoned professionals is committed to crafting journeys that reflect each traveler's 
                    unique needs, desires, and expectations.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="group relative"
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative text-center p-10 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FiShield className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Motto</h3>
                  <p className="text-gray-700 italic leading-relaxed">
                    "Personalized service at the best price – with honesty, heart, and hospitality."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Strengths Section */}
        <motion.section
          className="relative py-20 px-6 sm:px-8 md:px-12 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative max-w-4xl mx-auto z-10">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
              variants={itemVariants}
            >
              Our Strengths
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center space-x-6 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FiCheckCircle className="w-6 h-6 text-white" />
                    </motion.div>
                    <span className="text-lg text-gray-700 font-medium">{strength}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Core Services Section */}
        <motion.section
          className="relative py-20 px-6 sm:px-8 md:px-12 bg-white/90 backdrop-blur-sm"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5" />
          
          <div className="relative max-w-4xl mx-auto z-10">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
              variants={itemVariants}
            >
              Our Core Services
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center space-x-4 p-4 bg-gray-50/80 backdrop-blur-sm rounded-lg border border-indigo-200 hover:shadow-lg transition-all duration-300">
                    <motion.div
                      className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-md"
                      whileHover={{ scale: 1.3, rotate: 180 }}
                      transition={{ duration: 0.4 }}
                    >
                      <FiCheckCircle className="w-4 h-4 text-white" />
                    </motion.div>
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          className="relative py-20 px-6 sm:px-8 md:px-12 bg-gradient-to-br from-primary/10 via-blue-500/10 to-purple-500/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative max-w-4xl mx-auto text-center z-10">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-16"
              variants={itemVariants}
            >
              Why Choose{' '}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                World Wide Vacations
              </span>
              ?
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center space-x-4 p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-primary/20 hover:shadow-xl transition-all duration-300">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FiAward className="w-6 h-6 text-white" />
                    </motion.div>
                    <span className="text-lg text-gray-700 font-semibold">{reason}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-primary/20"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p>
                Come, travel with us, and let's create stories that last forever. At World Wide Vacations, 
                your journey is not just a trip – it's an experience woven with care, culture, and commitment.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
} 