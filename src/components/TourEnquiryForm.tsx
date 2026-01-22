'use client';

import React from 'react';

const TourEnquiryForm: React.FC = () => {
  return (
    <div className="bg-white w-full max-w-md rounded shadow-lg overflow-hidden">
      
      {/* Form Header */}
      <div className="bg-[#001e68] text-white text-center py-4 font-bold relative">
        PLAN YOUR TRIP WITH US !
        <span className="absolute left-1/2 -bottom-3 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#001e68] -translate-x-1/2" />
      </div>

      {/* Form Body */}
      <form className="p-6 space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <input
          type="tel"
          placeholder="Mobile No."
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <input
          type="date"
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <textarea
          rows={3}
          placeholder="Your Tour Requirements"
          className="w-full border border-gray-300 px-4 py-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <button
          type="submit"
          className="w-full bg-[#001e68] text-white py-3 rounded font-semibold hover:bg-[#a50000] transition"
        >
          SEND ENQUIRY
        </button>
      </form>
    </div>
  );
};

export default TourEnquiryForm;
