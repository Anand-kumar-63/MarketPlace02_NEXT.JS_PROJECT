import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
const HeroSection = () => {
  const translate = useTranslations();
  return (
    <div className="w-full flex flex-row px-2 md:px-20 relative bg-gradient-to-r from-black/20 via-black/40 to-black/20">
      <div className="flex flex-col items-start justify-center gap-4 w-full max-w-screen-xl mx-auto h-full px-4 sm:px-8 md:px-12 lg:px-16 py-8">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white">
          {translate("HeroSection.title")} <br />
          <br className="hidden md:inline" />
          <span className="text-blue-500">
            {translate("HeroSection.highlight")} <br />
            <span className="text-yellow-400 text-6xl">
              {translate("HeroSection.StoreName")}
            </span>
          </span>
        </h1>

        <Button
          onClick={() => (window.location.href = "https://wa.me/919588508988")}
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
        <div className="w-[300px] h-[400px] md:w-[400px] md:h-[600px]">
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
              <span className="text-blue-400">
                {translate(`HeroSection.Video_div1_line3`)}{" "}
              </span>
            </h1>
            <p className="mt-5 font-medium text-xl font-sans text-white rounded-2xl p-3 pr-10 bg-gray-700/50">
              {translate(`HeroSection.Video_div2_line1`)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
