"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Briefcase, GraduationCap, Quote, CheckCircle2 } from "lucide-react";

export default function AboutMe() {
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
        ".about-header",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, clearProps: "all" }
      )
        .fromTo(
          ".about-bio",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, clearProps: "all" },
          "-=0.4"
        )
        .fromTo(
          ".about-stat-card",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.5,
            ease: "back.out(1.4)",
            clearProps: "all",
          },
          "-=0.4"
        )
        .fromTo(
          ".about-quote-card",
          { opacity: 0, y: 20, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            clearProps: "all",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-background py-10 sm:py-14 lg:py-16 border-b border-border/5 overflow-hidden"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-accent/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Bio & Metadata Info */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="about-header">
              <span className="inline-block text-primary text-sm sm:text-base font-bold font-Syne tracking-wide mb-1.5 sm:mb-2">
                About Me
              </span>
              <h2 className="font-Syne font-bold text-3xl sm:text-4xl lg:text-[44px] text-foreground leading-tight tracking-tight">
                Who I Am
              </h2>
            </div>

            <div className="about-bio space-y-2.5 max-w-2xl mx-auto lg:mx-0">
              <p className="font-Syne font-bold text-lg sm:text-xl lg:text-[22px] tracking-tight bg-gradient-to-r from-foreground via-primary-light to-primary bg-clip-text text-transparent">
                Founder. Builder. Occasional overthinker.
              </p>
              <p className="font-sans text-foreground/90 font-medium text-sm sm:text-base lg:text-[17px] leading-relaxed">
                I turn ideas into products and products into businesses.
              </p>
              <p className="font-sans text-muted text-sm sm:text-base lg:text-[16px] leading-relaxed">
                Currently running <span className="text-foreground font-semibold">Nexa Solutions</span> — but mostly just trying to make cool stuff that matters.
              </p>
            </div>

            {/* 4 Metadata Cards with mobile responsive grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 pt-3 sm:pt-6 w-full">
              {/* 1. Location */}
              <div className="about-stat-card flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-0 rounded-lg bg-surface/30 sm:bg-transparent border border-white/5 sm:border-0 group cursor-default">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border bg-surface/90 flex items-center justify-center text-primary shrink-0 transition-all duration-300 ease-out group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-lg group-hover:shadow-primary/25">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </div>
                <div className="text-left">
                  <span className="block text-xs sm:text-[15px] font-bold text-foreground font-Syne leading-tight group-hover:text-primary transition-colors">
                    Aligarh, India
                  </span>
                  <span className="block text-[10px] sm:text-xs text-muted font-medium">
                    Base
                  </span>
                </div>
              </div>

              {/* 2. Experience */}
              <div className="about-stat-card flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-0 rounded-lg bg-surface/30 sm:bg-transparent border border-white/5 sm:border-0 group cursor-default">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border bg-surface/90 flex items-center justify-center text-primary shrink-0 transition-all duration-300 ease-out group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-lg group-hover:shadow-primary/25">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </div>
                <div className="text-left">
                  <span className="block text-xs sm:text-[15px] font-bold text-foreground font-Syne leading-tight group-hover:text-primary transition-colors">
                    6+ Years
                  </span>
                  <span className="block text-[10px] sm:text-xs text-muted font-medium">
                    Experience
                  </span>
                </div>
              </div>

              {/* 3. Projects Delivered */}
              <div className="about-stat-card flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-0 rounded-lg bg-surface/30 sm:bg-transparent border border-white/5 sm:border-0 group cursor-default">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border bg-surface/90 flex items-center justify-center text-primary shrink-0 transition-all duration-300 ease-out group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-lg group-hover:shadow-primary/25">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </div>
                <div className="text-left">
                  <span className="block text-xs sm:text-[15px] font-bold text-foreground font-Syne leading-tight group-hover:text-primary transition-colors">
                    200+
                  </span>
                  <span className="block text-[10px] sm:text-xs text-muted font-medium">
                    Projects Delivered
                  </span>
                </div>
              </div>

              {/* 4. Education */}
              <div className="about-stat-card flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-0 rounded-lg bg-surface/30 sm:bg-transparent border border-white/5 sm:border-0 sm:border-l sm:border-border/60 sm:pl-4 group cursor-default">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border bg-surface/90 flex items-center justify-center text-primary shrink-0 transition-all duration-300 ease-out group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-lg group-hover:shadow-primary/25">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </div>
                <div className="text-left">
                  <span className="block text-xs sm:text-[15px] font-bold text-foreground font-Syne leading-tight group-hover:text-primary transition-colors">
                    MBA
                  </span>
                  <span className="block text-[10px] sm:text-xs text-muted font-medium">
                    AMU FMSR
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Card with Glassmorphism & Atmospheric Glow */}
          <div className="lg:col-span-5 relative group w-full">
            {/* Ambient card back glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/25 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />

            {/* Card surface */}
            <div className="about-quote-card relative rounded-[5px] border border-white/10 bg-gradient-to-br from-[#161226]/95 via-[#130E20]/95 to-[#1F173B]/85 p-6 sm:p-8 lg:p-12 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:border-accent/40 group-hover:shadow-2xl group-hover:shadow-accent/10">
              {/* Corner radial atmospheric lighting */}
              <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-accent/25 rounded-full blur-3xl pointer-events-none transition-transform duration-500 group-hover:scale-125" />

              {/* Quotation mark */}
              <div className="mb-4 sm:mb-6 inline-flex">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary fill-primary/30 rotate-180 transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Quote text */}
              <blockquote className="font-Syne font-bold text-lg sm:text-2xl text-foreground leading-snug sm:leading-relaxed mb-6 sm:mb-8">
                Technology is not just a tool, it&apos;s a bridge to better opportunities.
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-2 text-muted text-xs sm:text-sm md:text-base font-Inter font-medium">
                <span className="w-12 sm:w-16 h-[0.10em] bg-primary/70 inline-block" />
                <span className="text-foreground/90 font-semibold"> Abdul Bari</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
