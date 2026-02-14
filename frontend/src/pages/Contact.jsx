import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('');
    // Honeypot check
    if (form._gotcha.value) {
      setStatus('ERROR');
      return;
    }
    const data = new FormData(form);
    const res = await fetch('https://formspree.io/f/mwkgyyqg', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });
    if (res.ok) {
      setStatus('SUCCESS');
      form.reset();
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <div className="min-w-[900px] max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Contact Me</h1>
      <p className="text-neutral-600 dark:text-espresso-muted text-sm mb-6">
        For freelance, collaboration, or <a href="https://theiamgroup.org" target="_blank" rel="noopener noreferrer" className="text-espresso-leaf dark:text-espresso-leaf underline hover:no-underline">iAM Studios</a> (calm, privacy-first software for real-world complexity) — reach out below.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-espresso-bg p-6 rounded-lg shadow" autoComplete="off">
        {/* Honeypot field for bots */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <label htmlFor="_gotcha">Leave this field blank</label>
          <input type="text" id="_gotcha" name="_gotcha" tabIndex="-1" autoComplete="off" />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-espresso-leaf dark:text-white dark:bg-espresso-bg" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-espresso-leaf dark:text-white dark:bg-espresso-bg" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <textarea id="message" name="message" rows={5} required className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-espresso-leaf dark:text-white dark:bg-espresso-bg"></textarea>
        </div>
        <button type="submit" className="bg-espresso-leaf text-white px-6 py-2 rounded hover:bg-espresso-leaf/90 transition">Send</button>
        {status === 'SUCCESS' && <p className="text-green-600 mt-2">Thank you! Your message has been sent.</p>}
        {status === 'ERROR' && <p className="text-red-600 mt-2">Oops! Something went wrong. Please try again.</p>}
      </form>
    </div>
  );
} 