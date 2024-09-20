"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Header() {
  const [darkMode, setDarkMode] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // the state for menu visibility

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // to collapse and xpand menu
  }

  return (
    <div className="bg-white flex justify-evenly dark:bg-neutral-800 max-w-screen w-full border-b border-b-[#e8e6e5] dark:border-b-[#403d39] py-4 px-8">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Image
          src="/images/image.png"
          alt="TeD"
          width={40}
          height={40}
          className="aspect-square rounded-md md:block"
          priority
        />
        <button
          className="md:hidden text-black dark:text-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* navbar remnants */}
      <div className="hidden md:flex items-center gap-6">
        <Link
          className="inline-block text-black dark:text-white"
          href="/#about"
        >
          Home
        </Link>
        <Link
          className="inline-block text-black dark:text-white"
          href="/#tools"
        >
          Tools
        </Link>
        <Link
          className="inline-block text-black dark:text-white"
          href="/#project"
        >
          Projects
        </Link>
        <a href="https://wa.me/+2349036011196" className="text-black">
          <AiOutlineUser className="mx-2 text-black dark:text-white" />
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
      </div>
      <div className="items-center md:flex hidden gap-6">
        <a
          className="bg-gradient-to-r from-cyan-500 to-green-500 text-white px-4 py-2 rounded-md ml-8"
          download
          href="/files/Theophilus_Oyekola_Resume.pdf"
        >
          Resume
        </a>
      </div>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: menuOpen ? "0%" : "100%", opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 right-0 bg-white dark:bg-neutral-800 w-64 h-full shadow-lg z-50 md:hidden`}
      >
        <div className="flex flex-col p-4 h-full">
          <button
            onClick={toggleMenu}
            className="flex justify-between items-center mb-4"
          >
            {/* Close icon within menu */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-black dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link
            onClick={toggleMenu}
            href="/#about"
            className="py-2 text-black dark:text-white"
          >
            Home
          </Link>
          <Link
            onClick={toggleMenu}
            href="/#tools"
            className="py-2 text-black dark:text-white"
          >
            Tools
          </Link>
          <Link
            onClick={toggleMenu}
            href="/#project"
            className="py-2 text-black dark:text-white"
          >
            Projects
          </Link>
          <a
            onClick={toggleMenu}
            href="https://wa.me/+2349036011196"
            className="py-2 text-black dark:text-white flex items-center gap-2"
          >
            <AiOutlineUser /> Contact me
          </a>
          <button
            onClick={toggleDarkMode}
            className="py-2 text-black dark:text-white"
          >
            {darkMode === "dark" ? (
              <BsFillSunFill size={30} />
            ) : (
              <BsFillMoonStarsFill size={30} />
            )}
          </button>
          <a
            href="/files/Theophilus_Oyekola_Resume.pdf"
            download
            className="bg-gradient-to-r from-cyan-500 to-green-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
}
