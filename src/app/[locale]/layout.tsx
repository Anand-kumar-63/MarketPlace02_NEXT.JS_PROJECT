import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale, useLocale } from "next-intl";
// import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
// import { locales } from '@/app/i18n/routing'; // You can export this from routing.ts
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import { routing } from "../../i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kirana Jet",
  description: "Redefine local shopping with ease.",
};

export default async function LocaleLayout({
  children,
  params:{
    locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // const {locale} = useLocale();

  // console.log("Locale:", locale);
  // if (!hasLocale(routing.locales, locale)) {
  //   notFound();
  // }

  return (
    <html lang="hi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
