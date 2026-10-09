"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

interface Venture {
  name: string;
  category: string;
  description: string;
  founded: string;
  role: string;
  buttonText: string;
  link: string;
  logoType: "image" | "svg";
  imageSrc?: string;
}

export default function Ventures() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 92%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".venture-header",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, clearProps: "all" }
      ).fromTo(
        ".venture-card",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          clearProps: "all",
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const ventures: Venture[] = [
    {
      name: "Nexa Solutions",
      category: "Digital Solutions & Web Development",
      description:
        "Building modern websites, web applications and custom digital solutions for businesses worldwide.",
      founded: "2025",
      role: "Co-Founder",
      buttonText: "Visit Website",
      link: "https://www.nexa-solutions.de/",
      logoType: "image",
      imageSrc: "/nex_soltuions.png",
    },
    {
      name: "Meagle 360",
      category: "Technology / SaaS / Digital Products",
      description:
        "Creating innovative digital products and SaaS solutions for modern automation and smarter tomorrow.",
      founded: "2026",
      role: "Co-Founder",
      buttonText: "Visit Website",
      link: "https://www.meagle360.com/",
      logoType: "svg",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="ventures"
      className="relative bg-background py-10 sm:py-14 lg:py-16 border-b border-border/5 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-accent/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="venture-header mb-8 sm:mb-12 text-center md:text-left">
          <h2 className="font-Syne font-bold text-3xl sm:text-4xl lg:text-[44px] text-foreground leading-tight tracking-tight">
             My Ventures
          </h2>
        </div>

        {/* 2 Ventures Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {ventures.map((venture, idx) => (
            <div
              key={idx}
              className="venture-card group relative rounded-xl border border-white/10 bg-gradient-to-br from-[#120E22]/95 via-[#0E0B1A]/95 to-[#1A1333]/85 p-5 sm:p-7 lg:p-8 shadow-xl backdrop-blur-xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 flex flex-col justify-between"
            >
              {/* Corner radial atmospheric lighting */}
              <div className="absolute -top-20 -right-20 w-48 sm:w-52 h-48 sm:h-52 bg-accent/15 rounded-full blur-3xl pointer-events-none transition-transform duration-500 group-hover:scale-125" />

              <div>
                {/* Logo and Headings Row: Responsive flex layout */}
                <div className="flex flex-row items-center gap-3.5 sm:gap-5 mb-4">
                  {/* Logo Container */}
                  {venture.logoType === "image" && venture.imageSrc ? (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-surface/60 border border-white/10 p-2 sm:p-2.5 flex items-center justify-center shrink-0 shadow-md group-hover:border-accent/40 transition-colors">
                      <Image
                        src={venture.imageSrc}
                        alt={`${venture.name} logo`}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        priority
                      />
                    </div>
                  ) : (
                    /* Meagle 360 Metallic Crest Logo */
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/20 bg-gradient-to-br from-[#1E1838] via-[#100D1C] to-[#0A0713] flex items-center justify-center shrink-0 p-2.5 sm:p-3 shadow-md relative overflow-hidden group-hover:border-accent/50 transition-colors">
                      <div className="absolute inset-0 bg-accent/10 rounded-full blur-sm" />
                      <svg
                        viewBox="0 0 48 48"
                        className="w-full h-full relative z-10 transition-transform duration-300 group-hover:scale-110"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="22"
                          stroke="url(#meagleBorder)"
                          strokeWidth="1.5"
                        />
                        {/* Stylized M crest */}
                        <path
                          d="M13 35V17L24 28L35 17V35"
                          stroke="url(#meagleGrad)"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18 33L24 27L30 33"
                          stroke="#9C93FF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient
                            id="meagleGrad"
                            x1="13"
                            y1="17"
                            x2="35"
                            y2="35"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" />
                            <stop offset="0.5" stopColor="#B8B0FF" />
                            <stop offset="1" stopColor="#695DFF" />
                          </linearGradient>
                          <linearGradient
                            id="meagleBorder"
                            x1="2"
                            y1="2"
                            x2="46"
                            y2="46"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="rgba(255,255,255,0.4)" />
                            <stop offset="0.5" stopColor="rgba(105,93,255,0.4)" />
                            <stop offset="1" stopColor="rgba(255,255,255,0.1)" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )}

                  {/* Title and Category */}
                  <div className="space-y-0.5">
                    <h3 className="font-Syne font-bold text-xl sm:text-2xl lg:text-3xl text-foreground group-hover:text-primary transition-colors">
                      {venture.name}
                    </h3>
                    <p className="text-muted text-xs sm:text-sm font-medium leading-snug">
                      {venture.category}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted/90 text-sm sm:text-[15px] leading-relaxed mb-6">
                  {venture.description}
                </p>
              </div>

              {/* Footer: Metadata & Action Button */}
              <div className="space-y-4 pt-2 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-Inter text-muted">
                  <span className="text-foreground/90 font-semibold">
                    Founded in {venture.founded}
                  </span>
                  <span className="text-muted/40">•</span>
                  <span className="text-primary font-semibold">{venture.role}</span>
                </div>

                <div>
                  <a
                    href={venture.link}
                    target={venture.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      venture.link.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    className="group/btn inline-flex items-center justify-between gap-2 px-5 sm:px-6 py-3 rounded-lg bg-accent hover:bg-accent-dark text-white text-sm sm:text-[15px] font-bold font-Syne transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-accent/30 w-full"
                  >
                    <span>{venture.buttonText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
