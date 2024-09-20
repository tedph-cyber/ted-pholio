"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      duration: 500,
      smooth: "easeInOutQuad",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full shadow-md ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={ScrollToTop}
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
};
export default ScrollToTopButton;