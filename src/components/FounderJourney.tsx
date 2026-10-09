"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Laptop } from "lucide-react";

interface JourneyItem {
  id: string;
  year: string;
  title: string;
  role: string;
  category: string;
  subtitle?: string;
  tags: string[];
  logoType: "image" | "meagle" | "laptop";
  imageSrc?: string;
  accentColor: string;
  glowColor: string;
  nodeColor: string;
  link: string;
}

export default function FounderJourney() {
  const sectionRef = useRef<HTMLElement>(null);

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
        ".journey-header",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, clearProps: "all" }
      )
        .fromTo(
          ".journey-timeline-line",
          { opacity: 0 },
          { opacity: 1, duration: 0.6, clearProps: "all" },
          "-=0.3"
        )
        .fromTo(
          ".journey-item-row",
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.6,
            clearProps: "all",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const journeyData: JourneyItem[] = [

    {
      id: "meagle",
      year: "2026",
      title: "Meagle 360",
      role: "Co-Founder",
      category: "Technology / SaaS / Digital Products",
      tags: ["SaaS", "Product Strategy", "Tech Innovation", "Digital Growth"],
      logoType: "meagle",
      accentColor: "#695DFF",
      glowColor: "rgba(105, 93, 255, 0.4)",
      nodeColor: "from-[#695DFF] to-[#443ACC]",
      link: "https://www.meagle360.com/",
    },
        {
      id: "nexa",
      year: "2025",
      title: "Nexa Solutions",
      role: "Co-Founder",
      category: "Digital Solutions & Web Development",
      tags: ["Next.js", "React", "Tailwind CSS", "Web Development"],
      logoType: "image",
      imageSrc: "/nex_soltuions.png",
      accentColor: "#7C71FF",
      glowColor: "rgba(124, 113, 255, 0.4)",
      nodeColor: "from-[#7C71FF] to-[#5548E0]",
      link: "https://www.nexa-solutions.de/",
    },
    {
      id: "it-business",
      year: "6+ Years",
      title: "IT / Technology / Business",
      role: "Co-Founder & Builder",
      category: "Innovation & Continuous Learning",
      subtitle: "Exploring, building and growing digital products",
      tags: ["Problem Solving", "Teamwork", "Innovation", "Continuous Learning"],
      logoType: "laptop",
      accentColor: "#7C71FF",
      glowColor: "rgba(124, 113, 255, 0.4)",
      nodeColor: "from-[#7C71FF] to-[#5548E0]",
      link: "#contact",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative bg-background py-10 sm:py-14 lg:py-16 border-b border-border/5 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-accent/5 rounded-full blur-[120px] sm:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary/5 rounded-full blur-[110px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="journey-header mb-8 sm:mb-12 text-center md:text-left">
          <h2 className="font-Syne font-bold text-3xl sm:text-4xl lg:text-[44px] text-foreground leading-tight tracking-tight">
            My Journey
          </h2>
          <p className="font-sans text-muted text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-2xl mt-2 sm:mt-3 mx-auto md:mx-0">
            Building ideas, creating digital solutions and growing with every step of the journey.
          </p>
        </div>

        {/* Timeline & Experience Items Layout */}
        <div className="journey-timeline-container relative space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Vertical connecting line through node centers (visible on desktop) */}
          <div className="journey-timeline-line hidden lg:block absolute left-[27px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-primary via-accent to-primary/20 pointer-events-none origin-top" />

          {journeyData.map((item) => {
            return (
              <div
                key={item.id}
                className="journey-item-row grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-10 items-center"
              >
                {/* Left Side: Timeline Node & Year Metric */}
                <div className="lg:col-span-3 flex items-center justify-start gap-3 sm:gap-4 relative z-10">
                  {/* Glowing Node */}
                  <div className="relative flex items-center justify-center shrink-0">
                    <div
                      className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-surface border border-white/10 flex items-center justify-center relative transition-transform duration-500 shadow-md"
                      style={{
                        boxShadow: `0 0 20px ${item.glowColor}`,
                      }}
                    >
                      <div
                        className={`w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br ${item.nodeColor} shadow-sm`}
                      />
                    </div>
                  </div>

                  {/* Year & Period */}
                  <div>
                    <h3 className="font-Syne font-bold text-xl sm:text-2xl lg:text-[30px] text-foreground leading-tight">
                      {item.year}
                    </h3>
                  </div>
                </div>

                {/* Right Side: Experience Card */}
                <div className="lg:col-span-9">
                  <div
                    className="group relative rounded-xl border border-white/10 bg-gradient-to-br from-[#120E22]/95 via-[#0E0B1A]/95 to-[#1A1333]/85 p-4 sm:p-6 shadow-xl backdrop-blur-xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/15 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6"
                    style={{
                      borderLeftColor: item.accentColor,
                      borderLeftWidth: "3px",
                    }}
                  >
                    {/* Hover Glow in card corner */}
                    <div
                      className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 opacity-20 group-hover:opacity-40"
                      style={{ backgroundColor: item.accentColor }}
                    />

                    {/* Logo & Content Area */}
                    <div className="flex flex-row items-center sm:items-start gap-3.5 sm:gap-5 flex-1 min-w-0">
                      {/* Logo Container */}
                      {item.logoType === "image" && item.imageSrc ? (
                        <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-surface/60 border border-white/10 p-2 sm:p-2.5 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 group-hover:border-primary/50 transition-all duration-300">
                          <Image
                            src={item.imageSrc}
                            alt={`${item.title} logo`}
                            width={72}
                            height={72}
                            className="w-full h-full object-contain"
                            priority
                          />
                        </div>
                      ) : item.logoType === "meagle" ? (
                        <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full border border-white/20 bg-gradient-to-br from-[#1E1838] via-[#100D1C] to-[#0A0713] flex items-center justify-center shrink-0 p-2.5 sm:p-3 shadow-md relative overflow-hidden group-hover:scale-105 group-hover:border-accent/50 transition-all duration-300">
                          <div className="absolute inset-0 bg-accent/15 rounded-full blur-sm" />
                          <svg
                            viewBox="0 0 48 48"
                            className="w-full h-full relative z-10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="24"
                              cy="24"
                              r="22"
                              stroke="url(#journeyMeagleBorder)"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M13 35V17L24 28L35 17V35"
                              stroke="url(#journeyMeagleGrad)"
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
                                id="journeyMeagleGrad"
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
                                id="journeyMeagleBorder"
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
                      ) : (
                        <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full border border-white/10 bg-gradient-to-br from-[#1E1838] via-[#100D1C] to-[#0A0713] flex items-center justify-center shrink-0 p-2.5 sm:p-3 shadow-md group-hover:scale-105 group-hover:border-primary/50 transition-all duration-300">
                          <Laptop className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                        </div>
                      )}

                      {/* Content & Tag Row */}
                      <div className="space-y-1.5 flex-1 min-w-0">
                        {/* Title */}
                        <h4 className="font-Syne font-bold text-lg sm:text-xl lg:text-2xl text-foreground leading-snug group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>

                        {/* Co-Founder | Category */}
                        {item.category ? (
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-Inter">
                            <span className="font-semibold text-foreground/90">
                              {item.role}
                            </span>
                            <span className="text-muted/40">•</span>
                            <span className="font-medium text-primary">
                              {item.category}
                            </span>
                          </div>
                        ) : (
                          <p className="text-xs sm:text-sm text-muted font-medium">
                            {item.subtitle}
                          </p>
                        )}

                        {/* Technology / Skill Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] sm:text-xs font-Inter font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-surface/90 border border-border text-muted group-hover:border-primary/30 group-hover:text-foreground transition-all duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Arrow Button */}
                    <div className="flex justify-end md:justify-center shrink-0 pt-1 md:pt-0">
                      <a
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel={
                          item.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-border bg-surface/90 hover:bg-accent hover:border-accent hover:text-white flex items-center justify-center text-foreground transition-all duration-300 group/btn shadow-sm hover:shadow-lg hover:shadow-accent/25 hover:scale-105"
                        aria-label={`View details for ${item.title}`}
                      >
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
