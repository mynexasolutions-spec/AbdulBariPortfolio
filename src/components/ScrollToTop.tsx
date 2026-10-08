"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    // Check initial position
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-8 scale-75 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to top"
        className="relative group w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#140F26] via-[#1D1636] to-[#2E2055] border border-primary/40 text-foreground hover:text-white shadow-xl shadow-primary/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 active:scale-90"
      >
        {/* Ambient pulse ring on hover */}
        <span className="absolute inset-0 rounded-full bg-primary/20 group-hover:scale-125 transition-transform duration-500 opacity-0 group-hover:opacity-100 blur-sm pointer-events-none" />

        {/* Up arrow icon */}
        <ArrowUp className="w-5 h-5 text-primary group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-300" />
      </button>
    </div>
  );
}
