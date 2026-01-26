'use client';

import React, { useEffect, useState } from 'react';

const PopupEnquiryForm: React.FC = () => {
  const [open, setOpen] = useState(false);

  // Open popup when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 800); // delay for better UX

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      {/* Modal */}
      <div className="relative bg-white w-full max-w-md rounded-xl shadow-xl p-6">

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold"
        >
          ×
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-extrabold text-[#001e68] text-center">
          Enquire Now
        </h2>
        <p className="text-sm text-gray-600 text-center mt-1">
          Get the best deals for your next trip
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#001e68]"
            required
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#001e68]"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#001e68]"
          />

          <select
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#001e68]"
            required
          >
            <option value="">Select Destination</option>
            <option>Gujarat</option>
            <option>Himachal</option>
            <option>Kashmir</option>
            <option>Kerala</option>
          </select>

          <textarea
            rows={3}
            placeholder="Your Message"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#001e68]"
          />

          <button
            type="submit"
            className="w-full bg-[#001e68] text-white py-3 rounded-lg font-semibold hover:bg-[#001855] transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupEnquiryForm;
