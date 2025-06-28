'use client';
import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-10 px-6 ">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Contact <span className="text-green-600">Us</span>
        </h1>
        <p className="text-lg text-gray-700 mb-12 font-medium max-w-2xl mx-auto">
          Have questions or suggestions? We’re here to help. Reach us directly or send us a message using the form below.
        </p>

        {/* Contact Info Section */}
        <div className="grid md:grid-cols-3 gap-6 text-left mb-14">
          {/* Phone */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
            <FaPhoneAlt className="text-green-600 text-3xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
            <p className="text-gray-600 font-medium">+91 98765 43210</p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
            <FaEnvelope className="text-green-600 text-3xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
            <p className="text-gray-600 font-medium">admin@greencart.in</p>
          </div>

          {/* Instagram */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
            <FaInstagram className="text-pink-500 text-3xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Instagram</h3>
            <p className="text-gray-600 font-medium">@greencart_hodal</p>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mb-12">
          <a
            href="https://wa.me/919588508988"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-700 transition"
          >
            <FaWhatsapp className="text-2xl" /> Chat with Us on WhatsApp
          </a>
        </div>

        {/* Contact Form */}
        <form className="text-left bg-white rounded-2xl shadow-md p-8 max-w-3xl mx-auto space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Your Message</label>
            <textarea
              placeholder="Write your message..."
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition"
          >
            Submit Message
          </button>
        </form>
      </div>
    </section>
  );
}
