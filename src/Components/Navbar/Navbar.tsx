"use client";

import React from "react";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const Navbar = () => {
  // const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  // const [darkmode, setdarkmode] = useState(false);

  const handleLocaleChange = (newLocale: string) => {
    window.location.href = pathname.replace(
      "/" + currentLocale,
      "/" + newLocale
    );
  };

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center font-sans select-none cursor-pointer mt-4 font-semibold sm:h-[40px] px-4 sm:px-8 md:px-12 lg:px-16">
      {/* Left side (logo and links) */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full sm:w-auto">
        {/* Logo */}
        <Link href={"/"}>
          <div className="flex items-center gap-1 mt-2 sm:mt-4 text-green-500">
            <Icon icon="mdi:cart" width="28" height="28" />
            <h2 className="text-xl sm:text-2xl font-sans">Kirana Jet</h2>
          </div>
        </Link>
        {/* Nav Links */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-7 mt- sm:mt-4 text-sm sm:text-lg font-sans">
          <span>
            <Link href={"/"}>
              <p>Home</p>
            </Link>
          </span>
          <span>
            <Link href={"/aboutus"}>
              <p>About Us</p>
            </Link>
          </span>
          <span>
            <Link href={"/products"}>
              <p>Products</p>
            </Link>
          </span>
          <span>
            <Link href={"/contactus"}>
              <p>Contact Us</p>
            </Link>
          </span>
        </div>
      </div>

      {/* Right side (language and darkmode) */}
      <div className="mt-8 sm:mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
        <Select defaultValue={currentLocale} onValueChange={handleLocaleChange}>
          <SelectTrigger className="w-full sm:w-[180px] rounded-4xl text-md text-gray-700">
            <SelectValue placeholder="Change Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="hi">हिन्दी</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </nav>
  );
};

export default Navbar;
