// components/WhyChooseSection.tsx

import React from "react";
const features = [
  {
    icon: "📞",
    title: "WhatsApp Ordering Made Easy",
    description:
      "No complex apps needed — just WhatsApp your list and we’ll deliver it! Fast, simple, and user-friendly for Hodal residents.",
    Imgurl: "/images/whatsapp.jpg",
  },
  {
    icon: "🛒",
    title: "Trusted Local Hodal Stores",
    description:
      "We proudly serve Hodal by sourcing directly from your favorite local kirana stores — ensuring freshness and authenticity in every order.",
    Imgurl: "/images/trust.jpg",
  },
  {
    icon: "⏱",
    title: "Fast Delivery – Within 20 Minutes",
    description:
      "We know Hodal's streets and shops like home. That’s why your essentials reach your doorstep in a flash — with no hidden charges.",
    Imgurl: "/images/fastdelivery.jpg",
  },
  {
    icon: "⭐",
    title: "Wide Product Range for Every Home",
    description:
      "From groceries to household items, KiranaJet covers all your daily needs in Hodal with care, quality, and convenience.",
    Imgurl: "/images/WideRange.jpg",
  },
];
const WhyChooseSection = () => {
  return (
    <div className="flex">
      <div className="grid rounded-xl grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-[948px] mx-auto ml-20">
        {features.map((item, index) => (
          <div
            key={index}
            className={`bg-cover bg-center h-74 rounded-xl hover:shadow-lg hover:-translate-y-2 transition-all duration-300`}
            style={{ backgroundImage: `url(${item.Imgurl})` }}
          >
            <div className="bg-black/50 rounded-xl w-full h-full">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-4xl font-semibold text-blue-200 ml-6 mb-2">
                {item.title}
              </h3>
              <p className="text-lg text-blue-100 mx-8 font-semibold my-4">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

       <div className="max-w-6xl mx-auto text-center py-40 px-15 mb-12">
        <h2 className="text-7xl font-bold mb-4 text-gray-900">
          Why Choose
          <br />
          <span className="text-green-600">KiranaJet?</span>
        </h2>
        <p className="text-xl text-black">
          Experience convenience and reliability
          <br />
          <span>like never before. Here's why Hodal trusts us:</span>
        </p>
      </div>
    </div>
  );
};

export default WhyChooseSection;
