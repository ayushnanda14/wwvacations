'use client';

import React, { useState } from 'react';

const TourEnquiryForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      city: formData.get('city'),
      travelDate: formData.get('travelDate'),
      persons: formData.get('persons'),
    };

    try {
      const res = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed');

      setStatus('success');
      e.currentTarget.reset();
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-white w-full max-w-md shadow-lg overflow-hidden"
      id="tour-enquiry-form"
    >
      {/* Header */}
      <div className="bg-[#001e68] text-white text-center py-4 font-bold relative">
        PLAN YOUR TRIP WITH US !
        <span className="absolute left-1/2 -bottom-3 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#001e68] -translate-x-1/2" />
      </div>

      {/* Form */}
      <form className="p-6 space-y-4" onSubmit={handleSubmit}>
        <input
          name="name"
          required
          placeholder="Name"
          className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-blue-600"
        />

        <input
          name="phone"
          type="tel"
          required
          placeholder="Mobile No."
          className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-blue-600"
        />

        <input
          name="city"
          required
          placeholder="City"
          className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-blue-600"
        />

        <input
          name="travelDate"
          type="date"
          required
          className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-blue-600"
        />

        <input
          name="persons"
          type="number"
          min={1}
          max={20}
          required
          placeholder="No. of Person"
          className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-blue-600"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#001e68] text-white py-3 font-semibold hover:bg-[#a50000] transition disabled:opacity-60"
        >
          {loading ? 'SENDING...' : 'SEND ENQUIRY'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-sm text-center">
            ✅ Enquiry sent successfully!
          </p>
        )}

        {status === 'error' && (
          <p className="text-red-600 text-sm text-center">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default TourEnquiryForm;
