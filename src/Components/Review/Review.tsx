import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/Components/ui/carousel";

const Review = () => {
  return (
    <div className="flex pt-30">
      <div className="px-10 font-bold">
        <h1 className="text-7xl text-blue-50">
          Some Reviews Given <br />
          <span className="text-blue-400">by Our Customers</span>
        </h1>
      </div>

      {/* carousal */}
      <div className="w-full">
        <Carousel className="w-[90%] h-max-[400px] pr-[50px]">
          <CarouselContent className="px-10 py-10 gap-4">
            <CarouselItem className="flex flex-col justify-evenly items-center border-2 border-black h-80 w-[360px] rounded-2xl">
                <h1 className="text-2xl">Rishi Raj Gupta</h1>
               <div className="border-2 border-blue-500 h-[70%] w-[90%] rounded-2xl">

               </div>
            </CarouselItem>
            <CarouselItem className="border-2 border-black h-80 rounded-2xl">...</CarouselItem>
            <CarouselItem className="border-2 border-black h-80 rounded-2xl px-5">...</CarouselItem>
            <CarouselItem className="border-2 border-black h-80 rounded-2xl">...</CarouselItem>
            <CarouselItem className="border-2 border-black h-80 rounded-2xl">...</CarouselItem>
            <CarouselItem className="border-2 border-black h-80 rounded-2xl px-5">...</CarouselItem>
          </CarouselContent>
        
          <CarouselPrevious />
          <CarouselNext />  
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
