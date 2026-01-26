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
          placeholder="Name"
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <input
          type="tel"
          placeholder="Mobile No."
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <input
          type="text"
          placeholder="City"
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <input
          type="date"
          placeholder="When are you planning to visit Gujarat?"
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <input
          type="number" min="1" max="5" placeholder="No. of Person"
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <button
          type="submit"
          className="w-full bg-[#001e68] text-white py-3 font-semibold hover:bg-[#a50000] transition"
        >
          SEND ENQUIRY
        </button>
        </form>
      </div>
    </div>
  );
};

export default PopupEnquiryForm;
