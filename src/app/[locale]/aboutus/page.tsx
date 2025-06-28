'use client';
import React from 'react';

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          About <span className="text-green-600">GreenCart</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 font-medium">
          GreenCart is your trusted neighborhood shopping partner — born out of the need to simplify daily shopping 
          for residents of <strong>Hodal</strong>. We believe in bridging the gap between your favorite local stores and your doorstep 
          through a familiar, easy-to-use platform — <span className="font-semibold text-green-700">WhatsApp</span>.
        </p>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🚀 Our Mission</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              We aim to redefine how shopping is done in small towns by eliminating the need for apps, long queues,
              and big commitments. From a ₹10 item to a full grocery list — GreenCart delivers it all, 
              straight from your trusted local vendors.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🤝 What We Offer</h3>
            <ul className="list-disc list-inside text-gray-600 font-medium space-y-2">
              <li>WhatsApp-based ordering system — no app required</li>
              <li>Delivery from Hodal’s trusted local kirana shops</li>
              <li>Groceries, cleaning items, stationery, beverages & more</li>
              <li>Lightning-fast delivery in 20–30 minutes</li>
              <li>Friendly, local support team</li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <a
            href="https://wa.me/919588508988"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white py-3 px-8 text-lg rounded-full font-semibold hover:bg-green-700 transition"
          >
            Get Started on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
