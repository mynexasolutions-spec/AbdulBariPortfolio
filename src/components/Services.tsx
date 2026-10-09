"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Cloud, Cog, TrendingUp, Target, Layers } from "lucide-react";

interface ExpertiseItem {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export default function Services() {
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
        ".services-header",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, clearProps: "all" }
      ).fromTo(
        ".service-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: "power2.out",
          clearProps: "all",
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const expertiseList: ExpertiseItem[] = [
    {
      title: "Web Development",
      subtitle: "Modern, high-performance & responsive web applications",
      icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "SaaS Development",
      subtitle: "Scalable, secure and user-focused digital SaaS products",
      icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "IT Solutions",
      subtitle: "Custom business software, API integrations & workflows",
      icon: <Cog className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "Digital Products",
      subtitle: "Transforming concepts into market-ready digital assets",
      icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "Entrepreneurship",
      subtitle: "Building, launching & scaling high-growth tech ventures",
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "Ads Specialist",
      subtitle: "Targeted Meta & Google Ads campaigns driving high ROI, conversions & revenue",
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-background py-10 sm:py-14 lg:py-16 border-b border-border/5 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-accent/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="services-header mb-8 sm:mb-12 text-center md:text-left">
          <span className="inline-block text-primary text-sm sm:text-base font-bold font-Syne tracking-wide mb-1.5 sm:mb-2">
            What I Do
          </span>
          <h2 className="font-Syne font-bold text-3xl sm:text-4xl lg:text-[44px] text-foreground leading-tight tracking-tight">
            My Expertise
          </h2>
        </div>

        {/* 6 Expertise Cards Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5 lg:gap-6">
          {expertiseList.map((item, index) => (
            <div
              key={index}
              className="service-card group relative rounded-xl border border-white/10 bg-gradient-to-br from-[#130E24]/90 via-[#0E0A1A]/95 to-[#090612]/95 p-4 sm:p-6 flex flex-row sm:flex-col sm:justify-between items-start gap-4 sm:gap-0 sm:min-h-[190px] shadow-lg backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/15 overflow-hidden"
            >
              {/* Corner radial atmospheric lighting */}
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-accent/15 rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-125" />

              {/* Icon Bubble */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-border bg-surface/80 flex items-center justify-center text-primary sm:mb-5 shrink-0 transition-all duration-300 ease-out group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-lg group-hover:shadow-primary/25">
                {item.icon}
              </div>

              {/* Text content */}
              <div className="flex-1 sm:flex-none">
                <h3 className="font-Syne font-bold text-base sm:text-lg lg:text-[19px] text-foreground group-hover:text-primary transition-colors leading-snug sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-muted text-xs sm:text-[13px] leading-relaxed mt-1 sm:mt-0">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
