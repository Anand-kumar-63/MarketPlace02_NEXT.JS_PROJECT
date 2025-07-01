import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/Components/ui/carousel";
import { useTranslations } from "next-intl";

const Review = () => {
  const t = useTranslations("Review Section");
  const transalate = useTranslations("Review Section.Curousal-Content");

  const reviews = [
    "Review7",
    "Review8",
    "Review9",
    "Review10",
    "Review11",
    "Review12",
  ];

  return (
    <div className="flex flex-col md:flex-row pt-10 md:pt-30 w-full gap-3">
     
     <div className="px-10 font-bold mx-10 md:max-w-1/3">
        <h1 className="text-4xl md:text-7xl text-black">
          {t(`heading`)} <br />
          <span className="text-blue-400">{t(`subheading`)}</span>
        </h1>
      </div>

      {/* carousal */}
      <div className="w-[350px] md:w-[850px] pb-10 md:p-0 block md:m-0 ">
        <Carousel
          className="md:ml-10 h-auto md:h-max-[500px] md:pr-[50px] cursor-pointer select-none"
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent className="mx-10 h-[600px] md:px-10 py-2 md:py-10 gap-2 md:gap-4">
            
            <CarouselItem className="flex flex-col justify-evenly items-center border-2 border-white bg-white/20 h-auto md:h-80 w-auto md:w-[360px] rounded-2xl px-5 mx-10 md:mx-5">
              <h1 className="text-sm md:text-2xl text-black">
                {t(`Curousal-Content.Review6.name`)}
              </h1>
              <div className="border-2 border-white h-[60%] md:h-[70%] w-[100%] md:w-[90%] overflow-hidden rounded-2xl flex flex-col justify-center items-center text-center p-4">
                <p className="text-sm md:text-lg text-gray-700">
                  {t(`Curousal-Content.Review6.desc`)}
                </p>
                <p className="mt-3 text-yellow-500 text-lg">★★★★☆</p>
              </div>
            </CarouselItem>

            <CarouselItem className="flex flex-col justify-evenly items-center border-2 border-white bg-white/20 h-auto md:h-80 w-auto md:w-[360px] rounded-2xl px-5 mx-10 md:mx-5">
              <h1 className="text-sm md:text-2xl text-black">{t(`Curousal-Content.Review1.name`)}</h1>
              <div className="border-2 border-white h-[60%] md:h-[70%] w-[100%] md:w-[90%] overflow-hidden rounded-2xl flex flex-col justify-center items-center text-center p-4">
                <p className="text-sm md:text-lg text-gray-700">
                  {t(`Curousal-Content.Review1.desc`)}
                </p>
                <p className="mt-3 text-yellow-500 text-lg">★★★★★</p>
              </div>
            </CarouselItem>

            <CarouselItem className="flex flex-col justify-evenly items-center border-2 border-white bg-white/20 h-auto md:h-80 w-auot md:w-[360px] rounded-2xl px-5 mx-10 md:mx-5">
              <h1 className="text-sm md:text-2xl">{t(`Curousal-Content.Review2.name`)}</h1>
              <div className="border-2 border-white h-[60%] md:h-[70%] w-[100%] md:w-[90%] overflow-hidden rounded-2xl flex flex-col justify-center items-center text-center p-4">
                <p className="text-sm md:text-lg text-gray-700">
                  {t(`Curousal-Content.Review2.desc`)}
                </p>
                <p className="mt-3 text-yellow-500 text-lg">★★★★☆</p>
              </div>
            </CarouselItem>

            <CarouselItem className="flex flex-col justify-evenly items-center border-2 border-white bg-white/20 h-auto md:h-80 w-auot md:w-[360px] rounded-2xl px-5 mx-10 md:mx-5">
              <h1 className="text-sm md:text-2xl">{t(`Curousal-Content.Review3.name`)}</h1>
              <div className="border-2 border-white h-[60%] md:h-[70%] w-[100%] md:w-[90%] overflow-hidden rounded-2xl flex flex-col justify-center items-center text-center p-4">
                <p className="text-sm md:text-lg text-gray-700">
                  {t(`Curousal-Content.Review3.desc`)}
                </p>
                <p className="mt-3 text-yellow-500 text-lg">★★★★★</p>
              </div>
            </CarouselItem>

            <CarouselItem className="flex flex-col justify-evenly items-center border-2 border-white bg-white/20 h-auto md:h-80 w-auot md:w-[360px] rounded-2xl px-5 mx-10 md:mx-5">
              <h1 className="text-sm md:text-2xl">{t(`Curousal-Content.Review4.name`)}</h1>
              <div className="border-2 border-white h-[60%] md:h-[70%] w-[100%] md:w-[90%] overflow-hidden rounded-2xl flex flex-col justify-center items-center text-center p-4">
                <p className="text-sm md:text-lg text-gray-700">
                  {t(`Curousal-Content.Review4.desc`)}
                </p>
                <p className="mt-3 text-yellow-500 text-lg">★★★★☆</p>
              </div>
            </CarouselItem>

            <CarouselItem className="flex flex-col justify-evenly items-center border-2 border-white bg-white/20 h-auto md:h-80 w-auot md:w-[360px] rounded-2xl px-5 mx-10 md:mx-5">
              <h1 className="text-sm md:text-2xl">{t(`Curousal-Content.Review5.name`)}</h1>
              <div className="border-2 border-white h-[60%] md:h-[70%] w-[100%] md:w-[90%] overflow-hidden rounded-2xl flex flex-col justify-center items-center text-center p-4">
                <p className="text-sm md:text-lg text-gray-700">
                  {t(`Curousal-Content.Review5.desc`)}
                </p>
                <p className="mt-3 text-yellow-500 text-lg">★★★★★</p>
              </div>
            </CarouselItem>

            {reviews.map((key, index) => (
              <CarouselItem
              key={index}
                className="flex flex-col justify-evenly items-center border-2 border-white bg-white/20 h-auto md:h-80 w-auot md:w-[360px] rounded-2xl px-5 mx-10 md:mx-5"
              >
                <h1 className="text-sm md:text-2xl">{transalate(`${key}.name`)}</h1>
                <div className="border-2 border-white h-[60%] md:h-[70%] w-[100%] md:w-[90%] overflow-hidden rounded-2xl flex flex-col justify-center items-center text-center p-4">
                  <p className="text-sm md:text-lg text-gray-700">
                    {transalate(`${key}.desc`)}
                  </p>
                  <p className="mt-3 text-yellow-500 text-lg">★★★★☆</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
  };

export default Review;
