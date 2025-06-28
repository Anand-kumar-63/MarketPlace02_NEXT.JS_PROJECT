"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";




import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";
const Navbar = () => {
  const [darkmode, setdarkmode] = useState(false);
  const [language, setlanguage] = useState(true);
  return (
    <nav className="flex flex-row justify-between font-sans select-none cursor-pointer mt-4 font-semibold h-[40px]">
      <div className="flex flex-row gap-8 px-16">
        {/* icon */}
        <div className="flex items-center gap-1 ml-4 mt-4 text-green-500">
          {/* <Link href={"/home"}> */}
            <Icon icon="mdi:cart" width="28" height="28"/>
            <h2 className="text-2xl font-sans">Kirana Jet</h2>
          {/* </Link> */}
        </div>
        {/* other list elements */}
        <div className="flex items-center gap-7 mt-4 text-lg font-sans">
          <span className={"hover:"}>
            <Link href={"/home"}>
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
      <div className="mt-4 flex flex-row gap-3 px-5">
        <Select>
          <SelectTrigger className="w-[180px] rounded-4xl text-md text-gray-700">
            <SelectValue placeholder="Change Language" />
          </SelectTrigger>
          {language && (
            <SelectContent>
              <SelectItem value="light">Hindi</SelectItem>
              <SelectItem value="dark">English</SelectItem>
            </SelectContent>
          )}
        </Select>
        <Button className="bg-gray-500 rounded-4xl p-1 px-4 font-sans">
          {darkmode ? "Lightmode" : "Darkmode"}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
