"use client";
import React from "react";
import { useTranslations } from "next-intl";

const products = [
  { image: "/images/vegetables.png", bg: "bg-orange-100" },
  { image: "/images/meat.jpg", bg: "bg-rose-100" },
  { image: "/images/utensils.png", bg: "bg-blue-100" },
  { image: "/images/juices.jpg", bg: "bg-yellow-100" },
  { image: "/images/cleaning.jpg", bg: "bg-green-100" },
  { image: "/images/stationary.jpg", bg: "bg-pink-100" }
];

export default function ProductsPage() {
  const t = useTranslations("ProductsPage");

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-100 to-blue-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 text-gray-900">
          {t("heading")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-all ${product.bg}`}
            >
              <div
                className="w-full h-48 sm:h-56 bg-cover bg-center rounded-xl mb-4"
                style={{ backgroundImage: `url(${product.image})` }}
              ></div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {t(`products.${idx}.title`)}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-1.5">
                {t(`products.${idx}.description`)}
              </p>
              <p className="mt-2 text-sm sm:text-base text-green-600 font-medium">
                {t(`products.${idx}.items`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="https://wa.me/919588508988"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white font-semibold py-2.5 sm:py-3 px-6 rounded-full text-base sm:text-lg hover:bg-green-700 transition"
          >
            {t("buttonText")}
          </a>
        </div>
      </div>
    </section>
  );
}
