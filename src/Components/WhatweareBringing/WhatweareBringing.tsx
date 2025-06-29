'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function TransformSection() {
  const translate = useTranslations('TransformSection');

  return (
   
      <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-10">
        {/* Left Text Section */}
        <div className="px-4 sm:px-10 md:px-16 max-w-xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black">
            {translate('heading')}
            <br className="hidden md:inline" />
            <span className="text-blue-500">{translate('subheading')}</span>
          </h1>
          <p className="py-6 sm:py-10 px-0 sm:px-2 text-base sm:text-lg">
            {translate('description.line1')}
            <br className="hidden sm:hidden md:inline" />
            {translate('description.line2')}
          </p>
        </div>

        {/* Right Image Section */}
        <div className="flex flex-col md:flex-row w-[250px] md:w-auto justify-center items-center gap-6 px-4 sm:px-10 md:px-16">
       
          <div
            className="h-48 sm:h-64 md:h-[300px] w-full sm:w-[450px] bg-amber-200 rounded-2xl bg-cover bg-center border-4 border-white"
            style={{ backgroundImage: `url('/images/trust.jpg')` }}
          ></div>

          <div className="grid grid-cols-1 w-full md:w-auto gap-6">
            <div
              className="h-40 sm:h-52 md:h-[250px] w-full sm:w-[280px] bg-cover bg-center rounded-2xl border-4 border-white"
              style={{ backgroundImage: `url('/images/deliveryone.jpg')` }}
            ></div>

            <div className="bg-gray-300 h-32 sm:h-44 md:h-[180px] w-full sm:w-[280px] flex justify-center items-center rounded-2xl px-2 border-4 border-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center">
                Kirana
                <br />
                <span className="text-green-500">Jet</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

  );
}
