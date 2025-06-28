'use client';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function AboutUs() {
  const t = useTranslations('About');

  return (
    <section className="bg-gradient-to-b from-green-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          {t('heading')}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
          {t('description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 text-left">
          {/* Mission */}
          <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              {t('mission.title')}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
              {t('mission.description')}
            </p>
          </div>

          {/* What We Offer */}
          <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              {t('offer.title')}
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 font-medium space-y-2">
              <li>{t('offer.item1')}</li>
              <li>{t('offer.item2')}</li>
              <li>{t('offer.item3')}</li>
              <li>{t('offer.item4')}</li>
              <li>{t('offer.item5')}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 sm:mt-16">
          <a
            href="https://wa.me/919588508988"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white py-3 px-6 sm:px-8 text-base sm:text-lg rounded-full font-semibold hover:bg-green-700 transition"
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
