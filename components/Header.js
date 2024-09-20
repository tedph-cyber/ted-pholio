"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

export default function Header() {
  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode("dark");
    } else {
      setDarkMode("light");
    }
  }, []);

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(darkMode === "dark" ? "light" : "dark");
    console.log("theme suppose change now");
  };

  return (
    <div className="bg-white flex justify-center dark:bg-neutral-800 max-w-screen w-full border-b border-b-[#e8e6e5] dark:border-b-[#403d39]">
      <div className="md:container flex items-center justify-around space-x-5 py-4 px-8">
        <div className="flex items-center gap-5 md:gap-6">
          <Image
            src="/images/image.png"
            alt="TeD"
            width={40}
            height={40}
            className="aspect-square rounded-md hidden md:block"
            priority
          />
          <Link
            className="inline-block text-black dark:text-white"
            href="/#about"
          >
            Home
          </Link>
          <Link
            className="inline-block text-black dark:text-white"
            href="/#project"
          >
            Projects
          </Link>
          <Link
            className="inline-block text-black dark:text-white"
            href="/#tools"
          >
            Tools
          </Link>
        </div>
        <div className="flex items-center gap-5 md:gap-6">
          <a href="wa.me/+2349036011196" className="text-black">
            <AiOutlineUser className="mx-2 text-black" />
            Contact me
          </a>
          <button
            className="rounded-full px-2 text-black aspect-square items-center flex dark:text-white border-black dark:border-white"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <BsFillSunFill size={30} />
            ) : (
              <BsFillMoonStarsFill size={30} />
            )}
          </button>
          <a
            className="bg-gradient-to-r from-cyan-500 to-green-500 text-white px-4 py-2 rounded-md ml-8"
            download
            href="/files/Theophilus_Oyekola_Resume.pdf"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
