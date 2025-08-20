'use client';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiPhone, FiSend, FiClock, FiHome } from 'react-icons/fi';

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
    icon: FiPhone,
    title: '24×7 Helpline',
    details: '+91-7855966158',
    description: 'For New Bookings',
  },
  {
    icon: FiPhone,
    title: 'Existing Bookings',
    details: '+91-9348997368',
    description: 'Support for current bookings',
  },
  {
    icon: FiMail,
    title: 'Email Us',
    details: 'info@wwvacations.com',
    description: 'Get in touch via email',
  },
];

const officeInfo = [
  // {
  //   icon: FiHome,
  //   title: 'Head Office',
  //   details: 'BMC Bhawani Mall, Sahid Nagar',
  //   city: 'Bhubaneswar, Odisha – 751007',
  //   phone: '+91-7855966158',
  // },
  {
    icon: FiHome,
    title: 'Office Address',
    details: 'Pijuli Bagicha, Korian',
    city: 'Dhenkanal, Odisha - 759001',
    phone: '+91-9348997368',
  },
];

const operationalHours = [
  { day: 'Monday to Friday', hours: '10:00 AM – 5:00 PM IST' },
  { day: 'Saturday', hours: '10:00 AM – 5:00 PM IST' },
  { day: 'Online Support & Helpline', hours: 'Available 24×7' },
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<null | { type: 'success' | 'error'; message: string }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFeedback({ type: 'success', message: 'Message sent successfully! We will get back to you shortly.' });
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await res.json();
        setFeedback({ type: 'error', message: data.error || 'Something went wrong. Please try again later.' });
      }
    } catch {
      setFeedback({ type: 'error', message: 'Failed to send message. Please check your internet connection and try again.' });
    } finally {
      setLoading(false);
    }
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
            Contact Us – World Wide Vacations
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight"
            variants={itemVariants}
          >
            24×7 Assistance for All Your Travel Needs
          </motion.h2>
          <motion.p
            className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
            variants={itemVariants}
          >
            At World Wide Vacations, we are committed to providing round-the-clock service to ensure your travel planning and journey are smooth and stress-free. Whether you&apos;re booking a new trip or seeking assistance for an existing one, our team is always ready to help you with professional support and personalized care.
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
              Let&apos;s Connect
            </motion.h3>
            <motion.p
              className="text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              You can contact us directly via phone or by filling out the quick enquiry form on our website. Once we receive your query, our representatives will promptly get in touch, understand your requirements, and guide you with the best travel options.
            </motion.p>

            {/* Helpline Numbers */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Helpline Numbers</h4>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">{contact.title}</h5>
                      <p className="text-primary font-medium">{contact.details}</p>
                      <p className="text-sm text-gray-600 mt-1">{contact.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Office Locations */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Offices</h4>
              <div className="space-y-4">
                {officeInfo.map((office, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <office.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-gray-900">{office.title}</h5>
                        <p className="text-gray-700">{office.details}</p>
                        <p className="text-gray-600 text-sm">{office.city}</p>
                        <p className="text-primary font-medium mt-1">{office.phone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Operational Hours */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Operational Hours</h4>
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <FiClock className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-blue-900">In-Office Support</span>
                </div>
                <div className="space-y-2">
                  {operationalHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className="font-medium text-gray-900">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
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
                disabled={loading}
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed hover:bg-primary/90"
                variants={itemVariants}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"></path>
                  </svg>
                ) : (
                  <>
                    <FiSend className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            {feedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 p-4 rounded-lg text-center text-sm font-medium ${feedback.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}
              >
                {feedback.message}
              </motion.div>
            )}

            <motion.div 
              className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200"
              variants={itemVariants}
            >
              <p className="text-sm text-green-800 text-center font-medium">
                World Wide Vacations – Delivering Destinations, Creating Memories.
              </p>
              <p className="text-xs text-green-700 text-center mt-1">
                Contact us today to begin your journey!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Elegant gradient fade to footer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 via-gray-50/50 to-transparent" />
    </section>
  );
} 