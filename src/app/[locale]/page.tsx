"use client";
import React from "react";
import { Button } from "@/Components/ui/button";

// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/Components/ui/card";
import Footer from "@/Components/Footer/Footer";
import WhyChooseSection from "@/Components/WhyChooseUs/WhyChooseus";
import WideRange from "@/Components/WideRange/WideRange";
import HowItWorks from "@/Components/HowitWorks/HowitWorks";
import { useTranslations } from "next-intl";

const page = () => {
  const translate = useTranslations();

  return (
    <>
      {/* hero section */}
      <section className="flex mt-10 bg-gray-200 font-sans bg-[url('/images/homepageimg.jpg')] bg-cover bg-center h-[84vh]">
        <div className="w-[1800px] bg-linear-to-r from-transparent via-30% via-black/30 to-black/50">
          <div className="flex items-start justify-center flex-col gap-4 w-full max-w-8xl mx-auto h-full">
            <h1 className="text-7xl font-bold text-white px-8">
              {translate("HeroSection.title")} <br className="hidden md:inline" />
              <span className="text-green-400">{translate("HeroSection.highlight")}</span>
            </h1>
            <Button
              onClick={() =>
                (window.location.href = "https://wa.me/919588508988")
              }
              className="m-10 px-12 py-8 text-xl bg-green-500 text-gray-800 font-sans font-semibold rounded-xl hover:bg-green-600 hover:opacity-100 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <h3>{translate("HeroSection.button_heading")}</h3>
              <br className="hidden md:inline" />
              <span className="text-white">{translate("HeroSection.button_subtext")}</span>
            </Button>
          </div>
        </div>
      </section>

      {/* change we are bringing */}
      <section className="p-4 flex flex-row items-center justify-between py-20 bg-linear-to-r from-blue-50 to-blue-200 min-h-screen">
        <div className="flex flex-row justify-between w-full">
          <div className="px-16">
            <h1 className="text-7xl font-bold text-black">
              Transforming Everyday
              <br className="hidden md:inline" />
              <span className="text-green-500">Shopping with Quality</span>
            </h1>
            <p className="py-10 px-2 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eum
              <br className="sm:hidden md:inline" />
              necessitatibus similique ea totam sint, odio hic dolor a? Eos!
            </p>
          </div>

          <div className="flex justify-end-safe px-20">
  
            <div
              className="h-[300px] w-[450px] bg-amber-200 rounded-2xl mt-45 bg-cover bg-center border-4 border-gray-300"
              style={{ backgroundImage: `url('/images/trust.jpg')` }}
            ></div>
            <div className="grid grid-cols-1 p-5">
              <div
                className="h-[250px] w-[280px] bg-cover bg-center rounded-2xl border-4 border-gray-200"
                style={{ backgroundImage: `url('/images/deliveryone.jpg')` }}
              ></div>

              <div className="bg-gray-300 h-[180px] w-[280px] flex justify-center items-center rounded-2xl px-2 mt-10 border-4 border-gray-200">
                <h1 className="text-5xl font-semibold">
                  Kirana 
                  <br />
                  <span className="text-green-500">Jet</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
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
