"use client";

import { useTranslations } from "next-intl";
import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
export default function ContactUs() {
  const t = useTranslations("Contact");

  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          {t("heading")}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-10 sm:mb-12 font-medium max-w-2xl mx-auto">
          {t("description")}
        </p>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left mb-14">
          {/* Phone */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-all">
            <FaPhoneAlt className="text-green-600 text-2xl sm:text-3xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {t("phone.title")}
            </h3>
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              {t("phone.value")}
            </p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-all">
            <FaEnvelope className="text-green-600 text-2xl sm:text-3xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {t("email.title")}
            </h3>
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              {t("email.value")}
            </p>
          </div>

          {/* Instagram */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-all">
            <FaInstagram className="text-pink-500 text-2xl sm:text-3xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {t("instagram.title")}
            </h3>
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              {t("instagram.value")}
            </p>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mb-12">
          <a
            href="https://wa.me/919588508988"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-full text-base sm:text-lg font-semibold hover:bg-green-700 transition"
          >
            <FaWhatsapp className="text-xl sm:text-2xl" /> {t("whatsappCta")}
          </a>
        </div>

        {/* Contact Form */}
        <form className="text-left bg-white rounded-2xl shadow-md p-6 sm:p-8 max-w-3xl mx-auto space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              {t("form.nameLabel")}
            </label>
            <input
              type="text"
              placeholder={t("form.namePlaceholder")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              {t("form.emailLabel")}
            </label>
            <input
              type="email"
              placeholder={t("form.emailPlaceholder")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              {t("form.messageLabel")}
            </label>
            <textarea
              placeholder={t("form.messagePlaceholder")}
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-green-700 transition"
          >
            {t("form.submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
