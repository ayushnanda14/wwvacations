'use client';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

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
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const contactInfo = [
  {
    icon: FiMail,
    title: 'Email Us',
    details: 'info@wwvacations.com',
    description: 'Get in touch via email',
  },
  {
    icon: FiPhone,
    title: 'Call Us',
    details: '+91 99388 34989',
    description: 'Speak with our travel experts',
  },
  {
    icon: FiMapPin,
    title: 'Visit Us',
    details: '123 Travel Street, City',
    description: 'Drop by our office anytime',
  },
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-30 to-gray-50" />
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-full mb-4"
            variants={itemVariants}
          >
            Get In Touch
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight"
            variants={itemVariants}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Have questions about our packages or need help planning your next adventure? 
            We're here to help make your travel dreams come true.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-900"
              variants={itemVariants}
            >
              Let's Connect
            </motion.h3>
            <motion.p
              className="text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Our travel experts are ready to help you plan the perfect trip. 
              Reach out to us through any of the channels below.
            </motion.p>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{contact.title}</h4>
                    <p className="text-primary font-medium">{contact.details}</p>
                    <p className="text-sm text-gray-600 mt-1">{contact.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Send us a Message
            </motion.h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your travel plans..."
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiSend className="w-4 h-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Elegant gradient fade to footer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 via-gray-50/50 to-transparent" />
    </section>
  );
} 