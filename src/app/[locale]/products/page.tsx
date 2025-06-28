"use client";
import React from "react";

const products = [
  {
    title: "Fruits & Vegetables",
    description:
      "Fresh from local farms — tomatoes, bananas, greens, and more.",
    items: "2 items",
    image: "/images/vegetables.png",
    bg: "bg-orange-100",
  },
  {
    title: "Meat & Fish",
    description:
      "Locally sourced meats and fresh fish, cleaned and packed hygienically.",
    items: "15 items",
    image: "/images/meat.jpg",
    bg: "bg-rose-100",
  },
  {
    title: "Cooking Essentials",
    description:
      "Atta, rice, oils, spices, and all your kitchen basics in one place.",
    items: "252 items",
    image: "/images/utensils.png",
    bg: "bg-blue-100",
  },
  {
    title: "Beverages",
    description: "Cold drinks, juices, energy drinks — stay refreshed anytime.",
    items: "35 items",
    image: "/images/juices.jpg",
    bg: "bg-yellow-100",
  },
  {
    title: "Home Cleaning",
    description:
      "Everything to keep your home sparkling — mops, brushes, disinfectants.",
    items: "80 items",
    image: "/images/cleaning.jpg",
    bg: "bg-green-100",
  },
  {
    title: "Stationery & Office",
    description:
      "School and office supplies — from notebooks to pens and more.",
    items: "62 items",
    image: "/images/stationary.jpg",
    bg: "bg-pink-100",
  },
];

export default function ProductsPage() {
  return (
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-900">
            Explore Our Product Categories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 shadow-md hover:shadow-lg transition-all ${product.bg}`}
              >
                <div
                  className="w-full h-56 bg-cover bg-center rounded-xl mb-4"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {product.description}
                </p>
                <p className="mt-2 text-sm text-green-600 font-medium">
                  {product.items}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://wa.me/919588508988"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-full text-lg hover:bg-green-700 transition"
            >
              Order Now on WhatsApp
            </a>
          </div>
        </div>
      </section>
  );
}
