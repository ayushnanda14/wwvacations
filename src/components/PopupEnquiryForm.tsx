'use client';

import React, { useEffect, useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const PopupEnquiryForm: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');

  // Show popup once per user (CLIENT ONLY)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const shown = window.localStorage.getItem('popup_enquiry_shown');
    if (!shown) {
      const timer = setTimeout(() => {
        setOpen(true);
        window.localStorage.setItem('popup_enquiry_shown', 'true');
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

    // 🔥 FIREBASE FUNCTION URL
    const API_URL =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:5001/wwvacations-1f976/us-central1/sendEnquiry'
        : 'https://us-central1/wwvacations-1f976.cloudfunctions.net/sendEnquiry';

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('success');
      form.reset();
      setTimeout(() => setOpen(false), 1500);
    } catch {
      setStatus('error');
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative bg-white w-full max-w-md rounded-xl shadow-xl p-6">

        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-extrabold text-center text-[#001e68]">
          Enquire Now
        </h2>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input name="name" required placeholder="Name" className="input" />
          <input name="phone" required placeholder="Mobile No." className="input" />
          <input name="city" required placeholder="City" className="input" />
          <input name="travelDate" type="date" required className="input" />
          <input
            name="persons"
            type="number"
            min={1}
            required
            placeholder="No. of Person"
            className="input"
          />

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-[#001e68] text-white py-3 rounded"
          >
            {status === 'loading' ? 'SENDING...' : 'SEND ENQUIRY'}
          </button>

          {status === 'success' && (
            <p className="text-green-600 text-center text-sm">
              Enquiry sent successfully!
            </p>
          )}

          {status === 'error' && (
            <p className="text-red-600 text-center text-sm">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PopupEnquiryForm;
