import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const WideRange = () => {
  return (
    <div className="p-10 w-full flex flex-row justify-between ">
      <div className="px-10 flex flex-row justify-center items-center gap-6 rounded-2xl">
        <Carousel className="rounded-2xl transition-all duration-200">
          <CarouselContent className="w-[900px] flex flex-row gap-10 rounded-2xl">
            {/* Stationery 1 */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/2 w-[300px] p-1 bg-blue-500 h-[500px] rounded-2xl">
              <div
                style={{ backgroundImage: `url('/images/stationary2.jpg')` }}
                className="relative h-full w-full bg-cover bg-center rounded-2xl"
              >
                <div className="absolute h-[140px] bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-2xl">
                  <h3 className="text-xl font-bold">Stationery</h3>
                  <p className="text-md">
                    Organize your workspace with high-quality notebooks, pens,
                    calculators, and more. Perfect for students and
                    professionals.
                  </p>
                </div>
              </div>
            </CarouselItem>

            {/* Biscuits */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/2 w-[300px] p-1 bg-green-400 h-[500px] rounded-2xl">
              <div
                style={{ backgroundImage: `url('/images/biscuits.jpg')` }}
                className="relative h-full w-full bg-cover bg-center rounded-2xl"
              >
                <div className="absolute bottom-0 left-0 right-0 h-[140px] bg-black/60 text-white p-4 rounded-b-2xl">
                  <h3 className="text-xl font-bold">Biscuits</h3>
                  <p className="text-md">
                    Crunchy, sweet, and savory biscuits from top brands
                    delivered fresh to your home.
                  </p>
                </div>
              </div>
            </CarouselItem>

            {/* Juices */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/2 w-[300px] p-1 bg-gray-400 h-[500px] rounded-2xl">
              <div
                style={{ backgroundImage: `url('/images/juices.jpg')` }}
                className="relative h-full w-full bg-cover bg-center rounded-2xl"
              >
                <div className="absolute h-[140px] bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-2xl">
                  <h3 className="text-xl font-bold">Juices</h3>
                  <p className="text-md">
                    Refresh your day with a wide range of fruit juices and
                    health drinks — sealed, chilled, and delivered quickly.
                  </p>
                </div>
              </div>
            </CarouselItem>

            {/* Vegetables */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/2 w-[300px] p-1 bg-yellow-500 h-[500px] rounded-2xl">
              <div
                style={{ backgroundImage: `url('/images/vegetables.png')` }}
                className="relative h-full w-full bg-cover bg-center rounded-2xl"
              >
                <div className="absolute h-[140px] bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-2xl">
                  <h3 className="text-lg font-bold">Vegetables</h3>
                  <p className="text-md">
                    Farm-fresh vegetables sourced locally and delivered within
                    minutes. No compromise on quality.
                  </p>
                </div>
              </div>
            </CarouselItem>

            {/* Home Cleaning */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/2 w-[300px] p-1 bg-green-500 h-[500px] rounded-2xl">
              <div
                style={{ backgroundImage: `url('/images/cleaning.jpg')` }}
                className="relative h-full w-full bg-cover bg-center rounded-2xl"
              >
                <div className="absolute h-[140px] bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-2xl">
                  <h3 className="text-xl font-bold">Home Cleaning</h3>
                  <p className="text-md">
                    Everything you need to keep your home sparkling clean —
                    mops, brushes, detergents, and disinfectants.
                  </p>
                </div>
              </div>
            </CarouselItem>

            {/* Stationery 2 */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/2 w-[300px] p-1 bg-pink-500 h-[500px] rounded-2xl">
              <div
                style={{ backgroundImage: `url('/images/stationary.jpg')` }}
                className="relative h-full w-full bg-cover bg-center rounded-2xl"
              >
                <div className="absolute h-[140px] bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-2xl">
                  <h3 className="text-lg font-bold">Stationery</h3>
                  <p className="text-md">
                    From daily school supplies to office tools — find everything
                    at one place, fast and affordable.
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="p-10" />
          <CarouselNext className="p-10" />
        </Carousel>
      </div>

      <div className="flex flex-col items-center px-5">
        <h1 className="text-7xl font-bold text-black">
          Discover GreenCart's wide <br className="hidden md:inline" />
          <span className="text-blue-500">Product Range</span>{" "}
        </h1>
        <p className="text-[20px] py-5 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          veritatis, incidunt aliquam voluptatem explicabo deleniti quidem
          cupiditate beatae voluptatum accusamus rerum,
          <br /> aut enim officia praesentium illum, porro ratione assumenda.
          Atque.
        </p>
      </div>
    </div>
  );
};

export default WideRange;
