'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const About = () => {
  return (
    <div>
        <Navbar />
        <div className="min-h-screen px-6 py-12 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          About Us
        </h1>

        <p className="text-lg text-gray-400 leading-relaxed mb-6">
          Welcome to <strong>ShopVerse</strong>, your one-stop destination for the latest fashion, electronics, and lifestyle products. Our mission is to bring you high-quality products at unbeatable prices, delivered right to your doorstep.
        </p>

        <p className="text-lg text-gray-400 leading-relaxed mb-6">
          Founded in 2025, we started with a small team and a big dream — to make online shopping accessible, secure, and enjoyable for everyone. Today, we proudly serve thousands of customers nationwide, thanks to your trust and support.
        </p>

        <p className="text-lg text-gray-400 leading-relaxed mb-6">
          Our team is passionate about customer satisfaction, constantly sourcing new products, improving our logistics, and offering responsive support. Whether you're looking for everyday essentials or something special, we’ve got you covered.
        </p>

        <p className="text-lg text-gray-400 leading-relaxed">
          Thank you for choosing ShopVerse. We’re here to serve you — always.
        </p>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-2">Need Help?</h2>
          <p className="text-gray-400">Contact our support team at <a href="/contact" className="text-[#DFD0B8] underline">Contact Us</a></p>
        </div>
      </div>
    </div>

        <Footer />
    </div>
  )
}

export default About
