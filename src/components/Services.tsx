import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const services = [
  {
    tag: 'Our Service',
    title: 'Travel Made Simple, Adventures Made Amazing',
    description: 'Whether it\'s a relaxing getaway or an adrenaline-filled adventure, we make every moment unforgettable.',
    imageUrl: '/images/services/service-1.jpg',
  },
  {
    tag: 'Gallery',
    title: 'Explore Breathtaking Locations Worldwide',
    description: 'From serene beaches to majestic mountains, we offer a curated selection of destinations to satisfy your wanderlust.',
    imageUrl: '/images/services/service-2.jpg',
  },
  {
    tag: 'Package',
    title: 'All-Inclusive Packages for a Hassle-Free Trip',
    description: 'Enjoy seamless travel with our packages that cover everything from flights and accommodations to guided tours.',
    imageUrl: '/images/services/service-3.jpg',
  },
];

const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const textItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const imageVariants = (isOdd: boolean): Variants => ({
  hidden: { opacity: 0, x: isOdd ? 100 : -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
});

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      {/* Background connecting line */}
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-[90%] w-0.5 bg-gray-200" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative">
        <div className="space-y-20 md:space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div 
                className="hidden md:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full ring-8 ring-white z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
              <motion.div 
                className={`text-left ${index % 2 !== 0 ? 'md:order-2 md:pl-16' : 'md:pr-16'}`}
                variants={textContainerVariants}
              >
                <motion.span 
                  className="inline-block px-4 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-full mb-4"
                  variants={textItemVariants}
                >
                  {service.tag}
                </motion.span>
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight"
                  variants={textItemVariants}
                >
                  {service.title}
                </motion.h2>
                <motion.p 
                  className="mt-6 text-lg text-gray-600 leading-relaxed"
                  variants={textItemVariants}
                >
                  {service.description}
                </motion.p>
              </motion.div>
              <motion.div 
                className="w-full h-96 relative"
                variants={imageVariants(index % 2 !== 0)}
              >
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover rounded-2xl shadow-xl"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 