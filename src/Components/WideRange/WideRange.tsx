"use client";

import React from "react";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const WideRange = () => {
  const t = useTranslations("WideRange");

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full p-4 sm:p-8 md:p-10 gap-10">
      {/* Left: Carousel Section */}
      <div className="w-full lg:w-2/3 px-2 sm:px-6">
        <Carousel className="rounded-2xl transition-all duration-200">
          <CarouselContent className="flex flex-row gap-6 sm:gap-8 md:gap-10">
            {/* pulses */}

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 p-1 bg-pink-500 h-[450px] sm:h-[500px] rounded-2xl">
              <div
                style={{ backgroundImage: `url('/images/BeautyProducts.jpg')` }}
                className="relative h-full w-full bg-cover bg-center rounded-2xl"
              >
                <div className="absolute h-[140px] bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-2xl">
                  <h3 className="text-lg font-bold">
                    {t("Beauty Products.title")}
                  </h3>
                  <p className="text-sm sm:text-md">
                    {t("Beauty Products.desc")}
                  </p>
                  <p className="text-lg sm:text-md text-yellow-200">
                    {t(`Beauty Products.availability`)}
                  </p>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 p-1 bg-blue-500 h-[450px] sm:h-[500px] rounded-2xl">
              <div
                style={{ backgroundImage: `url('/images/pulses.jpg')` }}
                className="relative h-full w-full bg-cover bg-center rounded-2xl"
              >
                <div className="absolute h-[140px] bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-2xl">
                  <h3 className="text-lg font-bold">{t("Pulses.title")}</h3>
                  <p className="text-sm sm:text-md">{t("Pulses.desc")}</p>
                  <p className="text-lg sm:text-md text-yellow-200">
                    {t(`Pulses.availability`)}
                  </p>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 p-1 bg-green-500 h-[450px] sm:h-[500px] rounded-2xl">
              <div
                style={{ backgroundImage: `url('/images/Cookingoil.jpg')` }}
                className="relative h-full w-full bg-cover bg-center rounded-2xl"
              >
                <div className="absolute h-[140px] bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-2xl">
                  <h3 className="text-lg font-bold">
                    {t("Cooking oil.title")}
                  </h3>
                  <p className="text-sm sm:text-md">{t("Cooking oil.desc")}</p>
                  <p className="text-lg sm:text-md text-yellow-200">
                    {t(`Cooking oil.availability`)}
                  </p>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 p-1 bg-yellow-500 h-[450px] sm:h-[500px] rounded-2xl">
              <div
                style={{ backgroundImage: `url('/images/spices.jpg')` }}
                className="relative h-full w-full bg-cover bg-center rounded-2xl"
              >
                <div className="absolute h-[140px] bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-2xl">
                  <h3 className="text-lg font-bold">{t("Spices.title")}</h3>
                  <p className="text-sm sm:text-md">{t("Spices.desc")}</p>
                  <p className="text-lg sm:text-md text-yellow-200">
                    {t(`Spices.availability`)}
                  </p>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 p-1 bg-yellow-500 h-[450px] sm:h-[500px] rounded-2xl">
              <div
                style={{ backgroundImage: `url('/images/vegetables.png')` }}
                className="relative h-full w-full bg-cover bg-center rounded-2xl"
              >
                <div className="absolute h-[140px] bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-2xl">
                  <h3 className="text-lg font-bold">{t("vegetables.title")}</h3>
                  <p className="text-sm sm:text-md">{t("vegetables.desc")}</p>
                  <p className="text-lg sm:text-md text-yellow-200">
                    {t(`vegetables.availability`)}
                  </p>
                </div>
              </div>
            </CarouselItem>

            {/* Biscuits */}
            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 p-1 bg-green-400 h-[450px] sm:h-[500px] rounded-2xl">
              <div
                style={{ backgroundImage: `url('/images/biscuits.jpg')` }}
                className="relative h-full w-full bg-cover bg-center rounded-2xl"
              >
                <div className="absolute h-[140px] bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-2xl">
                  <h3 className="text-xl font-bold">{t("biscuits.title")}</h3>
                  <p className="text-sm sm:text-md">{t("biscuits.desc")}</p>
                  <p className="text-lg sm:text-md text-yellow-200">
                    {t(`biscuits.availability`)}
                  </p>
                </div>
              </div>
            </CarouselItem>

            {/* Juices */}
            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 p-1 bg-gray-400 h-[450px] sm:h-[500px] rounded-2xl">
              <div
                style={{ backgroundImage: `url('/images/juices.jpg')` }}
                className="relative h-full w-full bg-cover bg-center rounded-2xl"
              >
                <div className="absolute h-[140px] bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-2xl">
                  <h3 className="text-xl font-bold">{t("juices.title")}</h3>
                  <p className="text-sm sm:text-md">{t("juices.desc")}</p>
                  <p className="text-lg sm:text-md text-yellow-200">
                    {t(`juices.availability`)}
                  </p>
                </div>
              </div>
            </CarouselItem>

            {/* Home Cleaning */}
            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 p-1 bg-green-500 h-[450px] sm:h-[500px] rounded-2xl">
              <div
                style={{ backgroundImage: `url('/images/cleaning.jpg')` }}
                className="relative h-full w-full bg-cover bg-center rounded-2xl"
              >
                <div className="absolute h-[140px] bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-2xl">
                  <h3 className="text-xl font-bold">{t("cleaning.title")}</h3>
                  <p className="text-sm sm:text-md">{t("cleaning.desc")}</p>
                  <p className="text-lg sm:text-md text-yellow-200">
                    {t(`cleaning.availability`)}
                  </p>
                </div>
              </div>
            </CarouselItem>

            {/* Stationery 2 */}
            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 p-1 bg-pink-500 h-[450px] sm:h-[500px] rounded-2xl">
              <div
                style={{ backgroundImage: `url('/images/stationary.jpg')` }}
                className="relative h-full w-full bg-cover bg-center rounded-2xl"
              >
                <div className="absolute h-[140px] bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-2xl">
                  <h3 className="text-lg font-bold">
                    {t("stationery2.title")}
                  </h3>
                  <p className="text-sm sm:text-md">{t("stationery2.desc")}</p>
                  <p className="text-lg sm:text-md text-yellow-200">
                    {t(`stationery2.availability`)}
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className=" sm:p-6 rounded-full" />
          <CarouselNext className=" sm:p-6 rounded-full" />
        </Carousel>
      </div>

      {/* Right: Text Section */}
      <div className="w-full lg:w-1/3 px-2 sm:px-6 text-center lg:text-left">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-black">
          {t("heading.title")}
          <br className="hidden md:inline" />
          <span className="text-blue-500">{t("heading.highlight")}</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl py-5 font-semibold">
          {t("description")}
        </p>
      </div>
    </div>
  );
};

export default WideRange;
