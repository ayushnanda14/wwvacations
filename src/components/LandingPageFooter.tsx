'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const LandingPageFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white px-6 py-14">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-extrabold mb-4 tracking-tight">
            WW Vacations
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Making your travel dreams come true with unforgettable experiences
            and personalized service. Your journey starts with us.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>

          <div className="flex items-center gap-3 text-gray-300">
            <span className="text-white flex items-center justify-center">
              <Mail size={18} />
            </span>
            <Link href="mailto:info@wwvacations.com">
              info@wwvacations.com
            </Link>
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <span className="text-white flex items-center justify-center">
              <Phone size={18} />
            </span>
            <Link href="tel:+919337597368">
              +91-93375 97368
            </Link>
          </div>

          <div className="flex items-start gap-3 text-gray-300">
            <span className="text-white flex items-center justify-center mt-1">
              <MapPin size={18} />
            </span>
            <span>
              Grand Bazaar, Phulnakhara, NH 16, Bhubaneswar – Cuttack Highway,
              Bhubaneswar, India, 754001
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-400">
        © {currentYear} WW Vacations. All rights reserved.
      </div>
    </footer>
  );
};

export default LandingPageFooter;
