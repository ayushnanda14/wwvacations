'use client';
import { motion, Variants } from 'framer-motion';
import { FiShield, FiLock, FiEye, FiMail, FiPhone, FiGlobe } from 'react-icons/fi';
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
      ease: 'easeOut',
    },
  },
};

export default function PrivacyPolicyClient() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <motion.section
          className="relative py-20 px-6 sm:px-8 md:px-12 bg-gradient-to-br from-blue-600 to-purple-700"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-block mb-6"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <FiShield className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Privacy Policy
            </motion.h1>
            
            <motion.p
              className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto"
              variants={itemVariants}
            >
              At World Wide Vacations, we are committed to safeguarding your personal information and ensuring your trust in how we handle it.
            </motion.p>
          </div>
        </motion.section>

        {/* Content Section */}
        <motion.section
          className="py-16 px-6 sm:px-8 md:px-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              variants={itemVariants}
            >
              <motion.p
                className="text-lg text-gray-700 leading-relaxed mb-8"
                variants={itemVariants}
              >
                This policy outlines how we collect, use, and protect your data while you interact with our website or services.
              </motion.p>

              {/* Information Collection & Usage */}
              <motion.div className="mb-8" variants={itemVariants}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <FiEye className="w-6 h-6 text-blue-600" />
                  Information Collection & Usage
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you access our website or use our services, we may collect certain personal information such as your name, email address, phone number, and travel preferences. In addition, technical details like IP addresses, browser type, device specifications, pages visited, and time spent on the site may also be stored for statistical, security, and analytical purposes.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We assure you that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>We do not sell or rent your personal information to any third party.</li>
                  <li>Information is only shared with relevant travel service providers (e.g., hotels, airlines, and transportation partners) strictly for the purpose of completing your bookings or improving your travel experience.</li>
                  <li>All data shared with us is handled in accordance with applicable data protection regulations and only for intended use.</li>
                </ul>
              </motion.div>

              {/* Security Measures */}
              <motion.div className="mb-8" variants={itemVariants}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <FiLock className="w-6 h-6 text-green-600" />
                  Security Measures
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  While no system can guarantee absolute security, World Wide Vacations uses industry-standard technology and procedures to safeguard your personal data. This includes secure servers, encryption, firewalls, and strict internal access controls.
                </p>
              </motion.div>

              {/* Changes to the Policy */}
              <motion.div className="mb-8" variants={itemVariants}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Changes to the Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  This Privacy Policy may be updated periodically to reflect changes in our practices or legal requirements. We encourage users to check this page from time to time to stay informed.
                </p>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="bg-blue-50 rounded-xl p-6 border border-blue-200"
                variants={itemVariants}
              >
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  Need Help?
                </h3>
                <p className="text-blue-800 mb-4">
                  For questions or concerns related to privacy, feel free to contact us:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-blue-800">
                    <FiMail className="w-4 h-4" />
                    <span>info@worldwidevacations.in</span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-800">
                    <FiPhone className="w-4 h-4" />
                    <span>+91-7855966158 / +91-9348997368</span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-800">
                    <FiGlobe className="w-4 h-4" />
                    <span>www.worldwidevacations.in</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
} 