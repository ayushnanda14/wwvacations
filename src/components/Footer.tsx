'use client';
import { motion, Variants } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

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
      ease: 'easeOut',
    },
  },
};

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Careers', href: '#careers' },
    { name: 'Press', href: '#press' },
  ],
  services: [
    { name: 'Tour Packages', href: 'packages' },
    // { name: 'Custom Tours', href: '#custom' },
    // { name: 'Group Travel', href: '#group' },
    // { name: 'Corporate Events', href: '#corporate' },
  ],
  support: [
    { name: 'Help Center', href: '#help' },
    { name: 'Contact Us', href: '#contact' },
    // { name: 'Travel Insurance', href: '#insurance' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ],
  destinations: [
    { name: 'Asia', href: '#asia' },
    { name: 'Europe', href: '#europe' },
    { name: 'Americas', href: '#americas' },
    { name: 'Africa', href: '#africa' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: FiFacebook, href: 'https://facebook.com' },
  { name: 'Twitter', icon: FiTwitter, href: 'https://twitter.com' },
  { name: 'Instagram', icon: FiInstagram, href: 'https://instagram.com' },
  { name: 'LinkedIn', icon: FiLinkedin, href: 'https://linkedin.com' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Company Info */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">WW Vacations</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Making your travel dreams come true with unforgettable experiences 
              and personalized service. Your journey starts with us.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <FiMail className="w-4 h-4" />
                <span>info@wwvacations.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <FiPhone className="w-4 h-4" />
                <span>+91-7855966158</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <FiMapPin className="w-4 h-4" />
                <span>BMC Bhawani Mall, Sahid Nagar, Bhubaneswar, Odisha – 751007</span>
              </div>
            </div>

            {/* Social Links */}
            {/* <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div> */}
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter Signup */}
        {/* <motion.div
          className="mt-12 pt-8 border-t border-gray-800"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for travel tips and exclusive offers
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div> */}

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} WW Vacations. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms & Conditions
            </a>
            <a href="#cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>

      {/* Elegant top gradient fade */}
      {/* <div className="absolute top-0 left-0 right-0 h-32 bg-gray-50" /> */}
    </footer>
  );
} 