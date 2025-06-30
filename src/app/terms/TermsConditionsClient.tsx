'use client';
import { motion, Variants } from 'framer-motion';
import { FiFileText, FiCreditCard, FiShield, FiAlertTriangle, FiMail, FiPhone, FiGlobe, FiClock, FiMapPin } from 'react-icons/fi';
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

export default function TermsConditionsClient() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <motion.section
          className="relative py-20 px-6 sm:px-8 md:px-12 bg-gradient-to-br from-orange-600 to-red-700"
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
                <FiFileText className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Terms & Conditions
            </motion.h1>
            
            <motion.p
              className="text-xl text-orange-100 leading-relaxed max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Inbound & Outbound Travel - Important information for your journey
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
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Booking & Contract */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FiFileText className="w-6 h-6 text-orange-600" />
                Booking & Contract
              </h2>
              <p className="text-gray-700 leading-relaxed">
                All bookings made with World Wide Vacations constitute a contract between the customer and the agency. Once we confirm your booking and receive the deposit amount, the contract is considered valid and enforceable.
              </p>
            </motion.div>

            {/* Visa Requirements */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FiShield className="w-6 h-6 text-blue-600" />
                Visa Requirements
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All foreign nationals (including NRI, PIO, and OCI cardholders) visiting India must possess a valid Tourist Visa. Visit{' '}
                <a href="https://indianvisaonline.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  https://indianvisaonline.gov.in
                </a>{' '}
                for more details. We assist with documentation guidance but visa issuance is subject to government approval.
              </p>
            </motion.div>

            {/* Payments */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FiCreditCard className="w-6 h-6 text-green-600" />
                Payments
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-semibold">•</span>
                  <span><strong>Initial Deposit:</strong> A minimum of 25% of the total package cost must be paid at the time of booking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-semibold">•</span>
                  <span><strong>Airfare:</strong> Full payment is required if flights are included.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-semibold">•</span>
                  <span><strong>Balance Payment:</strong> The remaining amount must be paid no later than 15 days prior to departure. For last-minute bookings (within 15 days), full payment is required upfront.</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-800 mb-2">Special Season Payments</h3>
                <p className="text-yellow-700">
                  For peak season bookings (e.g., Christmas, New Year, festive holidays), full payment is required at the time of booking to confirm services.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Accepted Payment Methods</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Credit/Debit Cards (Visa, MasterCard, AmEx, etc.)</li>
                  <li>• UPI or Net Banking</li>
                  <li>• Bank Transfers (NEFT/RTGS)</li>
                </ul>
                <p className="text-gray-600 mt-3 text-sm">
                  All payments must be made free from any withholding taxes or transfer fees. Bank charges, if applicable, will be borne by the payer.
                </p>
              </div>
            </motion.div>

            {/* Cancellation Policy */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FiAlertTriangle className="w-6 h-6 text-red-600" />
                Cancellation / No Show / Early Departure Policy
              </h2>
              <p className="text-gray-700 mb-4">
                In case of cancellation, a written notice must be sent to our office. Cancellation fees are as follows:
              </p>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>60 days or more before arrival</span>
                  <span className="font-semibold text-red-600">25% of the package cost</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>30–59 days before arrival</span>
                  <span className="font-semibold text-red-600">35% of the package cost</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>15–29 days before arrival</span>
                  <span className="font-semibold text-red-600">40% of the package cost</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>08–14 days before arrival</span>
                  <span className="font-semibold text-red-600">60% of the package cost</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>07 days or less / No Show</span>
                  <span className="font-semibold text-red-600">No Refund</span>
                </div>
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                <strong>Note:</strong> In case of card payments, an additional 3% bank charge will apply.
              </p>
            </motion.div>

            {/* Refund Policy */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Refund Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Refunds for unused or cancelled services (where applicable) will be processed within 2–4 weeks, subject to banking and vendor procedures. Refunds will only be made to the original payer.
              </p>
            </motion.div>

            {/* Check-In / Check-Out Policy */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FiClock className="w-6 h-6 text-blue-600" />
                Check-In / Check-Out Policy
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Check-In Time</h3>
                  <p className="text-blue-800">12:00 PM to 3:00 PM</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Check-Out Time</h3>
                  <p className="text-green-800">10:00 AM to 12:00 PM</p>
                </div>
              </div>
              <p className="text-gray-700 mt-4">
                Early check-in and late check-out are subject to availability and may incur additional charges.
              </p>
            </motion.div>

            {/* Vehicle Use & Additional Costs */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FiMapPin className="w-6 h-6 text-purple-600" />
                Vehicle Use & Additional Costs
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Unless specified in your package, additional usage of vehicles outside the agreed itinerary (including overtime or extra distance) will be charged separately.
              </p>
            </motion.div>

            {/* Liabilities & Limitations */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Liabilities & Limitations
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li>• World Wide Vacations acts as an intermediary between travelers and third-party vendors (hotels, transporters, airlines, etc.).</li>
                <li>• We are not liable for delays, accidents, loss, damage, or unforeseen events arising from third-party service providers or natural causes.</li>
                <li>• If government taxes, monument fees, or fuel costs increase after confirmation, the difference will be charged extra.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We reserve the right to modify any itinerary or service in the interest of traveler safety and convenience, without prior notice.
              </p>
            </motion.div>

            {/* Important Legal Note */}
            <motion.div
              className="bg-red-50 rounded-2xl shadow-xl p-8 border border-red-200"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-red-900 mb-4">
                Important Legal Note
              </h2>
              <p className="text-red-800 leading-relaxed">
                As per Indian tax regulations (Finance Bill 2017), we do not accept cash payments above ₹2,00,000. Non-compliance will attract penalties.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-xl p-8 text-white"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold mb-6">
                Need Assistance?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <FiMail className="w-5 h-5" />
                  <span>info@wwvacations.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiPhone className="w-5 h-5" />
                  <span>+91-7855966158 / +91-9348997368</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiGlobe className="w-5 h-5" />
                  <span>www.wwvacations.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
} 