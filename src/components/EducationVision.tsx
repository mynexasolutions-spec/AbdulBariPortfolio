"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, BookOpen, ArrowRight } from "lucide-react";

export default function EducationVision() {
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
        ".edu-header",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, clearProps: "all" }
      )
        .fromTo(
          ".edu-card",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.5,
            ease: "back.out(1.4)",
            clearProps: "all",
          },
          "-=0.4"
        )
        .fromTo(
          ".vision-header",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, clearProps: "all" },
          "-=0.4"
        )
        .fromTo(
          ".vision-text",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, clearProps: "all" },
          "-=0.3"
        )
        .fromTo(
          ".vision-image-card",
          { opacity: 0, y: 20, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            clearProps: "all",
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative bg-background py-10 sm:py-14 lg:py-16 border-b border-border/5 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-accent/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-stretch">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: EDUCATION (50% Width on Desktop) */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 flex flex-col justify-start lg:border-r lg:border-border/30 lg:pr-8 xl:pr-10">
            {/* Header */}
            <div className="edu-header mb-6 sm:mb-8 text-center sm:text-left">
              <span className="inline-block text-primary text-sm sm:text-base font-bold font-Syne tracking-wide mb-1.5 sm:mb-2">
                Education
              </span>
              <h2 className="font-Syne font-bold text-2xl sm:text-3xl lg:text-[38px] text-foreground leading-tight tracking-tight">
                My Education
              </h2>
            </div>

            {/* 2 Education Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5 sm:mt-4">
              
              {/* Card 1: MBA */}
              <div className="edu-card group relative rounded-xl border border-white/10 bg-gradient-to-br from-[#120E22]/95 via-[#0E0B1A]/95 to-[#1A1333]/85 p-4 sm:p-6 shadow-xl backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 flex flex-col justify-between overflow-hidden">
                {/* Atmospheric hover glow */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-accent/15 rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-125" />

                <div className="flex items-start gap-3.5 sm:gap-4">
                  {/* Icon Circle */}
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-border bg-surface/90 flex items-center justify-center text-primary shrink-0 transition-all duration-300 ease-out group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-lg group-hover:shadow-primary/25">
                    <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  </div>

                  {/* Details */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-Syne font-bold text-base sm:text-xl text-foreground group-hover:text-primary transition-colors leading-snug">
                      MBA
                    </h3>
                    <p className="text-muted text-xs sm:text-sm font-medium mt-0.5 sm:mt-1 leading-normal">
                      AMU FMSR
                    </p>
                    <p className="text-muted/70 text-[11px] sm:text-xs mt-0.5 leading-snug">
                      (Faculty of Management Studies & Research)
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Bachelors in Economics */}
              <div className="edu-card group relative rounded-xl border border-white/10 bg-gradient-to-br from-[#120E22]/95 via-[#0E0B1A]/95 to-[#1A1333]/85 p-4 sm:p-6 shadow-xl backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 flex flex-col justify-between overflow-hidden">
                {/* Atmospheric hover glow */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-accent/15 rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-125" />

                <div className="flex items-start gap-3.5 sm:gap-4">
                  {/* Icon Circle */}
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-border bg-surface/90 flex items-center justify-center text-primary shrink-0 transition-all duration-300 ease-out group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-lg group-hover:shadow-primary/25">
                    <BookOpen className="w-5 h-5 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  </div>

                  {/* Details */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-Syne font-bold text-base sm:text-xl text-foreground group-hover:text-primary transition-colors leading-snug">
                      Bachelors in Economics
                    </h3>
                    <p className="text-muted text-xs sm:text-sm font-medium mt-0.5 sm:mt-1 leading-normal">
                      Completed
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: ENTREPRENEURSHIP / VISION (50% Width on Desktop) */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 flex flex-col justify-between lg:pl-4 xl:pl-6 pt-6 sm:pt-8 lg:pt-0 border-t border-border/30 lg:border-t-0">
            {/* Header */}
            <div className="vision-header mb-6 sm:mb-8 text-center sm:text-left">
              <span className="inline-block text-primary text-sm sm:text-base font-bold font-Syne tracking-wide mb-1.5 sm:mb-2">
                Entrepreneurship / Vision
              </span>
              <h2 className="font-Syne font-bold text-2xl sm:text-3xl lg:text-[38px] text-foreground leading-tight tracking-tight">
                Building for a Better Tomorrow
              </h2>
            </div>

            {/* Split layout: Text & CTA on left, Workspace Image on right */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center flex-1">
              {/* Text description and Journey CTA */}
              <div className="vision-text sm:col-span-6 lg:col-span-6 space-y-4 sm:space-y-5 text-center sm:text-left flex flex-col items-center sm:items-start">
                <p className="font-sans text-muted text-sm sm:text-[15px] leading-relaxed">
                  I believe in the power of technology, collaboration and consistent effort to create
                  meaningful change. My goal is to build businesses that solve real problems and empower
                  people for a better future.
                </p>

                <div>
                  <a
                    href="#experience"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-lg border border-primary/50 text-foreground font-Syne font-bold text-xs sm:text-sm tracking-wide bg-accent hover:bg-surface/50 hover:border-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-accent/25 group/btn"
                  >
                    <span>My Journey</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Image Card: Desk with Laptop & "Better Ideas Bigger Goals" */}
              <div className="sm:col-span-6 lg:col-span-6">
                <div className="vision-image-card group relative rounded-xl overflow-hidden border border-white/10 bg-surface/40 shadow-xl transition-all duration-300 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/15">
                  <div className="aspect-[16/10] sm:aspect-[5/3] w-full relative overflow-hidden">
                    <Image
                      src="/vision_workspace.jpg"
                      alt="Building for a Better Tomorrow - Better Ideas Bigger Goals"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 35vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      priority
                    />
                    {/* Subtle ambient darkening vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
