"use client";
import React from "react";
import { useTranslations } from "next-intl";

const WhyChooseSection = () => {
  const t = useTranslations("WhyChoose");

  const features = [
    {
      icon: "📞",
      title: t("features.0.title"),
      description: t("features.0.description"),
      Imgurl: "/images/whatsapp.jpg",
    },
    {
      icon: "🛒",
      title: t("features.1.title"),
      description: t("features.1.description"),
      Imgurl: "/images/trust.jpg",
    },
    {
      icon: "⏱",
      title: t("features.2.title"),
      description: t("features.2.description"),
      Imgurl: "/images/fastdelivery.jpg",
    },
    {
      icon: "⭐",
      title: t("features.3.title"),
      description: t("features.3.description"),
      Imgurl: "/images/WideRange.jpg",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full px-4 sm:px-6 lg:px-12 gap-10">
      {/* Left: Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-cover bg-center h-64 sm:h-72 md:h-80 rounded-xl hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            style={{ backgroundImage: `url(${item.Imgurl})` }}
          >
            <div className="bg-black/50 rounded-xl w-full h-full p-4 flex flex-col justify-end">
              <div className="text-2xl sm:text-3xl mb-2 text-white">
                {item.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-blue-200 mb-1">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-blue-100 font-semibold">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Title Section */}
      <div className="w-full lg:w-[40%] text-center lg:text-left py-10 sm:py-20 px-2 sm:px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
          {t("heading1")}
          <br />
          <span className="text-blue-500">{t("brand")}</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-black font-medium">
          {t("subtext1")}
          <br />
          <span>{t("subtext2")}</span>
        </p>
      </div>
    </div>
  );
};

export default WhyChooseSection;
