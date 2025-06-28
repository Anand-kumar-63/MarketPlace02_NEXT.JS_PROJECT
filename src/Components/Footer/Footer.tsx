// components/Footer.tsx

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-gray-800 font-sans px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Service Area */}
        <div className="bg-white shadow-md p-4 rounded-xl border border-blue-50">
          <h3 className="text-lg font-semibold text-green-600 mb-2">📍 Service Area</h3>
          <p>Currently serving <span className="font-medium text-blue-600">Hodal</span> – More locations coming soon!</p>
        </div>

        {/* Social Media */}
        <div className="bg-white shadow-md p-4 rounded-xl border border-blue-50">
          <h3 className="text-lg font-semibold text-green-600 mb-2">📱 Follow Us</h3>
          <p>
            📸 <a href="https://instagram.com/KiranaJet_Hodal" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@KiranaJet_Hodal</a><br />
            👍 <a href="https://facebook.com/KiranaJetHodal" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">KiranaJet Hodal</a>
          </p>
        </div>

        {/* About */}
        <div className="bg-white shadow-md p-4 rounded-xl border border-blue-50">
          <h3 className="text-lg font-semibold text-green-600 mb-2">🏡 About Us</h3>
          <p className="text-blue-700 font-medium">KiranaJet – When Your Local Store Comes to You! 🛒</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-600 mt-8 border-t pt-4 border-blue-200">
        © 2025 <span className="font-semibold text-green-600">KiranaJet</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
