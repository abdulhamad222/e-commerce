'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    });

    setLoading(false);

    if (res.ok) {
      setSuccess('Your message has been sent!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSuccess('Something went wrong.');
    }
  };

  return (
    <div>
        <Navbar />
  
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-[#222831] p-6 rounded shadow-md space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-[#DFD0B8] p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-[#DFD0B8] p-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border text-gray-800 border-[#DFD0B8] p-2 rounded h-32"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#DFD0B8] text-[#222831] py-2 px-4 rounded hover:bg-[#948979] transition"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {success && <p className="text-center text-green-600">{success}</p>}
      </form>
    </div>

        <Footer />
    </div>
  )
}

export default Contact
