"use client";
import React, { useEffect } from "react";
import { Button } from "@/Components/ui/button";

import Footer from "@/Components/Footer/Footer";
import WhyChooseSection from "@/Components/WhyChooseUs/WhyChooseus";
import WideRange from "@/Components/WideRange/WideRange";
import HowItWorks from "@/Components/HowitWorks/HowitWorks";
import { useTranslations } from "next-intl";
import TransformSection from "@/Components/WhatweareBringing/WhatweareBringing";

const page = () => {
  const translate = useTranslations();

  return (
    <>
      {/* hero section */}
      <section className="flex mt-10 bg-gray-200 font-sans bg-[url('/images/Shop.jpg')] bg-cover bg-center min-h-[84vh]">
        <div className="w-full bg-gradient-to-r from-transparent via-black/40 to-black/50">
          <div className="flex flex-col items-start justify-center gap-4 w-full max-w-screen-xl mx-auto h-full px-4 sm:px-8 md:px-12 lg:px-16 py-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              {translate("HeroSection.title")}
              <br className="hidden md:inline" />
              <span className="text-blue-500">
                {translate("HeroSection.highlight")}
              </span>
            </h1>

            <Button
              onClick={() =>
                (window.location.href = "https://wa.me/919588508988")
              }
              className="mt-4 sm:mt-6 px-6 sm:px-10 md:px-12 py-4 sm:py-6 md:py-8 text-lg sm:text-xl md:text-2xl bg-blue-400 text-gray-800 font-sans font-semibold rounded-xl hover:bg-blue-500 hover:opacity-100 transition-all duration-300 cursor-pointer animate-bounce"
            >
              {translate("HeroSection.button_heading")}
              <br className="hidden md:inline" />
              <span className="text-white">
                {translate("HeroSection.button_subtext")}
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* change we are bringing */}
      <section className="p-4 py-10 sm:py-20 bg-gradient-to-r from-blue-50 to-blue-200 min-h-screen">
        <TransformSection />
      </section>

      {/* wide product range  */}
      <section className="p-4 flex items-center py-5 bg-linear-to-l min-h-screen via-blue-100 to-blue-200">
        <WideRange />
      </section>

      {/* how it works */}
      <section className="py-20 px-4 bg-linear-to-r from-blue-50 to-blue-200 min-h-screen">
        <HowItWorks />
      </section>

      {/* what we are offering  */}
      <section className="bg-linear-to-r from-blue-200 to-blue-50 relative text-gray-800 font-sans px-6 py-16 flex flex-row shadow-inner min-h-screen">
        <WhyChooseSection />
      </section>

      {/* footer */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default page;
