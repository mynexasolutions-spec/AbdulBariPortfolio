"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

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
        ".testimonial-left",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, clearProps: "all" }
      ).fromTo(
        cardRef.current,
        { opacity: 0, y: 20, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          clearProps: "all",
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      name: "John Smith",
      role: "CEO at Fintech Labs",
      quote:
        "“Abdul is an exceptional builder with rare precision. He transformed our vision into a high-performance web platform that exceeded all benchmarks.”",
      rating: 5,
    },
    {
      name: "Sarah Jenkins",
      role: "VP Product at Streamline",
      quote:
        "“Collaborating with Abdul and Nexa Solutions was seamless. Their attention to UX and performance boosted our conversions by 140%.”",
      rating: 5,
    },
    {
      name: "Marcus Aurelius",
      role: "Founder at Nova Media",
      quote:
        "“Strategic vision, rapid execution, and top-tier technical craftsmanship. Abdul consistently builds products that scale under pressure.”",
      rating: 5,
    },
  ];

  const animateCard = () => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0.4, y: 8 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out", clearProps: "all" }
      );
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    animateCard();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    animateCard();
  };

  const current = testimonials[currentIndex];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="bg-background py-8 sm:py-10 lg:py-12 overflow-hidden border-b border-border/5"
    >
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Left Title */}
          <div className="testimonial-left lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="text-primary text-xs uppercase tracking-widest font-bold font-Syne block mb-1">
              Testimonial
            </span>
            <h2 className="relative font-Syne font-bold text-2xl sm:text-3xl lg:text-[38px] text-foreground leading-tight">
              <span className="relative inline-block">
                <span className="absolute -top-1 -left-2 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-accent/25 -z-10" />
                Client Feedback
              </span>
            </h2>
            <p className="text-muted text-xs sm:text-sm lg:text-[15px] mt-2 sm:mt-2.5 max-w-sm leading-relaxed mx-auto lg:mx-0">
              What founders & partners say about collaborating with Abdul Bari.
            </p>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mt-4 sm:mt-5">
              <button
                onClick={handlePrev}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border bg-surface/60 flex items-center justify-center text-foreground hover:bg-surface-hover hover:text-white hover:border-accent/40 transition-all shadow-sm active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent border border-accent text-white flex items-center justify-center hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25 transition-all shadow-sm active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold text-muted ml-2">
                0{currentIndex + 1} / 0{testimonials.length}
              </span>
            </div>
          </div>

          {/* Right Testimonial Card */}
          <div className="lg:col-span-7 w-full">
            <div
              ref={cardRef}
              className="p-4 sm:p-6 lg:p-7 bg-surface/90 rounded-xl border border-white/10 relative shadow-lg hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                {/* Star Rating */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
              </div>

              {/* Quote text */}
              <blockquote className="font-Syne font-medium text-sm sm:text-base lg:text-[17px] text-foreground leading-relaxed mb-4 sm:mb-5 min-h-[60px] sm:min-h-[70px]">
                {current.quote}
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-border/50">
                <div className="w-6 sm:w-8 h-0.5 bg-primary" />
                <div>
                  <h4 className="font-Syne font-bold text-sm sm:text-base text-foreground leading-tight">
                    {current.name}
                  </h4>
                  <span className="text-xs text-muted font-medium">
                    {current.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
