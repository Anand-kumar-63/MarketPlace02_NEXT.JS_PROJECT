"use client";
import React from "react";
import { Button } from "@/Components/ui/button";

import Footer from "@/Components/Footer/Footer";
import WhyChooseSection from "@/Components/WhyChooseUs/WhyChooseus";
import WideRange from "@/Components/WideRange/WideRange";
import HowItWorks from "@/Components/HowitWorks/HowitWorks";
import { useTranslations } from "next-intl";
import TransformSection from "@/Components/WhatweareBringing/WhatweareBringing";

const Page = () => {
  const translate = useTranslations();

  return (
    <>
      {/* hero section */}
      <section className="flex mt-10 bg-gray-200 font-sans bg-[url('/images/HeroSection.jpg')] bg-cover bg-center min-h-[84vh]">
        <div className="w-full flex flex-row px-20 relative bg-gradient-to-r from-black/20 via-black/40 to-black/20">
          <div className="flex flex-col items-start justify-center gap-4 w-full max-w-screen-xl mx-auto h-full px-4 sm:px-8 md:px-12 lg:px-16 py-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              {translate("HeroSection.title")}
              <br className="hidden md:inline" />
              <span className="text-blue-500">
                {translate("HeroSection.highlight")}<span className="text-yellow-400">{translate("HeroSection.StoreName")}</span>
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
          {/* Wrapped for responsiveness */}
          <div className="hidden md:block">
            <div className="w-[500px] h-[600px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-1/2 -translate-y-1/2 right-20 w-[400px] h-[559px] rounded-2xl object-cover bg-cover bg-center z-0 border-4 border-gray-100"
              >
                <source src="/videos/shoppingCart.mp4" type="video/mp4" />
              </video>
              <div className="absolute top-1/2 -translate-y-1/2 right-20 h-[559px] rounded-2xl w-[400px] bg-black/30 z-10"></div>
              <div className="absolute top-1/2 p-10 right-20 h-[459px] w-[400px] z-20">
                <h1 className="font-semibold text-4xl text-white bg-gray-700/50 px-2 rounded-2xl">
                  {translate(`HeroSection.Video_div1_line1`)} <br />
                  {translate(`HeroSection.Video_div1_line2`)} 
                  <br className="hidden md:inline" />
                  <span className="text-blue-400">{translate(`HeroSection.Video_div1_line3`)} </span>
                </h1>
                <p className="mt-5 font-medium text-xl font-sans text-white rounded-2xl p-3 pr-10 bg-gray-700/50">
                  {translate(`HeroSection.Video_div2_line1`)} 
                </p>
              </div>
            </div>
          </div>
          1
        </div>
      </section>

      {/* change we are bringing */}
      <section className="p-4 py-10 sm:py-20 bg-gradient-to-r from-blue-50 to-blue-200 min-h-[90vh]">
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

export default Page;
