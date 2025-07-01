"use client";
import React from "react";
import HeroSection from "@/Components/HeroSection/HeroSection";
import Footer from "@/Components/Footer/Footer";
import WhyChooseSection from "@/Components/WhyChooseUs/WhyChooseus";
import WideRange from "@/Components/WideRange/WideRange";
import HowItWorks from "@/Components/HowitWorks/HowitWorks";
import TransformSection from "@/Components/WhatweareBringing/WhatweareBringing";
import Review from "@/Components/Review/Review";

const Page = () => {
  return (
    <>
      {/* hero section */}
      <section className="flex mt-10 bg-gray-200 font-sans bg-[url('/images/HeroSection.jpg')] bg-cover bg-center min-h-[84vh]">
        <HeroSection />
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
      <section className="bg-linear-to-r from-blue-200 to-blue-50 relative text-gray-800 px-6 py-16 flex flex-row shadow-inner min-h-screen">
        <WhyChooseSection />
      </section>
      {/* Review  */}
      <section className="flex flex-row bg-blue-200 md:w-full md:h-screen">
        <Review />
      </section>
      {/* footer */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Page;
