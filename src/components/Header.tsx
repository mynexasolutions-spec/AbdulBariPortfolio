"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SOCIAL_CHANNELS } from "./SocialIcons";

const MENU_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Education & Vision", href: "#education" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Header Start */}
      <header
        id="sticky-header"
        className={`fixed left-0 top-0 w-full z-40 transition-all duration-300 xl:pl-12 ${
          isScrolled
            ? "bg-[#08070D] shadow-lg shadow-black/50 border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex items-stretch pl-4 sm:pl-6 xl:pl-0">
          <div className="flex-1 flex items-center justify-between border-b-[0.010em] border-foreground/30 pr-3 sm:pr-6">
            <Link
              href="/"
              className="flex items-center py-2.5 sm:py-3.5 shrink-0"
              aria-label="Abdul Bari Portfolio Home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/logo/logo.png"
                alt="Abdul Bari"
                className="h-10 sm:h-12 md:h-12 lg:h-14 w-auto max-w-[170px] sm:max-w-[180px] md:max-w-[220px] object-contain transition-transform duration-300 hover:scale-105"
              />
            </Link>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className={`flex items-center py-2 px-2.5 sm:px-4 text-xs sm:text-[18px] font-bold leading-none transition-colors duration-300 hover:text-primary group shrink-0 ${
                isScrolled ? "text-white" : "sm:text-black text-white"
              }`}
            >
              <span>Let’s Talk</span>
              <span className="inline-block ml-1.5 sm:ml-2.5 group-hover:animate-arrow-move-up">
                <svg
                  width="18"
                  height="18"
                  className="sm:w-5 sm:h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="currentColor"
                    strokeOpacity="0.9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 7H17V17"
                    stroke="currentColor"
                    strokeOpacity="0.9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Offcanvas Toggle Button */}
          <div
            id="offcanvas-toggle"
            onClick={() => setIsOpen(true)}
            className="flex-none bg-black flex items-center justify-center py-4 sm:py-6 px-4 sm:px-8 cursor-pointer hover:bg-accent-dark sm:border-l border-b border-border-light transition-colors"
          >
            <button aria-label="Open offcanvas menu">
              <svg
                width="22"
                height="22"
                className="sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="8" width="18" height="2" fill="white" />
                <rect x="3" y="14" width="18" height="2" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      {/* Header End */}

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-300"
        />
      )}

      {/* Offcanvas Drawer Menu */}
      <aside
        id="offcanvas"
        className={`offcanvas right-0 top-0 bottom-0 z-50 fixed h-full w-[310px] sm:w-[380px] md:w-[440px] transition-transform ease-out duration-300 bg-[#07060D] border-l border-white/10 px-6 sm:px-8 py-6 sm:py-8 flex flex-col justify-between overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div>
          {/* Drawer Top Header (Logo & Close Button) */}
          <div className="flex items-center justify-between pb-5 sm:pb-6 border-b border-white/10 mb-2">
            <Link href="/" onClick={() => setIsOpen(false)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/logo/offcanvas-logo.png"
                alt="logo"
                className="h-12 sm:h-14 object-contain"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-primary flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 group"
              aria-label="Close menu"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:rotate-90 transition-transform duration-300"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items with Arrows matching screenshot */}
          <nav className="divide-y divide-white/10">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-2.5 sm:py-3 group transition-colors"
              >
                <span className="font-Syne text-[16px] sm:text-[18px] font-bold text-white group-hover:text-primary transition-colors tracking-tight">
                  {item.label}
                </span>
                <span className="text-white/60 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Footer with Footer Bottom Socials */}
        <div className="pt-6 sm:pt-8 mt-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            {SOCIAL_CHANNELS.map((channel) => (
              <a
                key={channel.name}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={channel.label}
                title={`${channel.name}: ${channel.handle}`}
                className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-primary/60 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center transition-all duration-300 group"
              >
                <div className="w-5 h-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <channel.Icon className="w-5 h-5" />
                </div>
              </a>
            ))}
          </div>
          <p className="text-xs text-muted/60 mt-4 font-medium">
            © {new Date().getFullYear()} Abdul Bari. All rights reserved.
          </p>
        </div>
      </aside>
    </>
  );
}
