'use client';

import React, { useEffect, useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const PopupEnquiryForm: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');

  // Show popup once per user
  useEffect(() => {
    const alreadyShown = localStorage.getItem('popup_enquiry_shown');

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem('popup_enquiry_shown', 'true');
      }, 800);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;

    const payload = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value || '',
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value || '',
      city: (form.elements.namedItem('city') as HTMLInputElement)?.value || '',
      travelDate:
        (form.elements.namedItem('travelDate') as HTMLInputElement)?.value || '',
      persons: Number(
        (form.elements.namedItem('persons') as HTMLInputElement)?.value || 0
      ),
    };

    // Validation
    if (
      !payload.name ||
      !payload.phone ||
      !payload.city ||
      !payload.travelDate ||
      payload.persons <= 0
    ) {
      setStatus('error');
      return;
    }

    try {
      const res = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed');

      setStatus('success');
      form.reset();

      // Auto close after success
      setTimeout(() => setOpen(false), 1500);
    } catch {
      setStatus('error');
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      {/* Modal */}
      <div className="relative bg-white w-full max-w-md rounded-xl shadow-xl p-6">

        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold"
          aria-label="Close popup"
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
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
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
            disabled={status === 'loading'}
            className="w-full bg-[#001e68] text-white py-3 font-semibold hover:bg-[#a50000] transition disabled:opacity-60"
          >
            {status === 'loading' ? 'SENDING...' : 'SEND ENQUIRY'}
          </button>

          {status === 'success' && (
            <p className="text-green-600 text-sm text-center">
              Enquiry sent successfully!
            </p>
          )}

          {status === 'error' && (
            <p className="text-red-600 text-sm text-center">
              Please fill all details correctly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PopupEnquiryForm;
