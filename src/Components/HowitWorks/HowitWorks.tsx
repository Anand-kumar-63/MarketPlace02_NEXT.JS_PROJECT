"use client";
import React from "react";
import { useTranslations } from "next-intl";

const HowItWorks = () => {
  const t = useTranslations("HowItWorks");

  return (
    <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 select-none">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        {t("heading")}
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 sm:mb-14 max-w-3xl mx-auto font-medium">
        
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 cursor-pointer">
        {/* Step 1 */}
        <div className="bg-white h-[380px] sm:h-[400px] md:h-[420px] rounded-2xl shadow-lg hover:shadow-xl p-6 sm:p-8 hover:-translate-y-2 transition duration-200">
          <div
            className="text-5xl mb-2 bg-cover bg-center h-2/3 rounded-xl"
            style={{ backgroundImage: `url('/images/listHIW.jpg')` }}
          >
            📝
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
            {t("step1.title")}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
            {t("step1.description")}
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white h-[380px] sm:h-[400px] md:h-[420px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 hover:-translate-y-2">
          <div
            className="text-5xl mb-2 bg-cover bg-center h-2/3 rounded-xl"
            style={{ backgroundImage: `url('/images/whatsappHIW.jpg')` }}
          ></div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
            {t("step2.title")}
          </h3>
          <p
            className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium"
            dangerouslySetInnerHTML={{ __html: t.raw("step2.description") }}
          />
        </div>

        {/* Step 3 */}
        <div className="bg-white h-[380px] sm:h-[400px] md:h-[420px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 hover:-translate-y-2">
          <div
            className="text-5xl bg-cover bg-center h-2/3 mb-2 rounded-xl"
            style={{ backgroundImage: `url('/images/DeliveryHIW.jpg')` }}
          >
            🚚
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
            {t("step3.title")}
          </h3>
          <p
            className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium"
            dangerouslySetInnerHTML={{ __html: t.raw("step3.description") }}
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
