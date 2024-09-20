// to create the dark mode switch after the tailwindcss config
"use client";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

// apparently be sure to nest this function only once, if not it wont work eventually
export default function Toggler() {
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
      };
      
      return (
        <button
          className="rounded-full p-2 aspect-square justify-center items-center flex dark:text-white dark:bg-blue-500 bg-red-500 text-neutral-800"
          onClick={toggleDarkMode}
        >
          {darkMode ? BsFillSunFill : BsFillMoonStarsFill}
        </button>
      );
}