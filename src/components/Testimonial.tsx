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
        "“Abdul is an exceptional builder with rare precision. He transformed our concept into a high-performance web platform that exceeded our operational benchmarks.”",
      rating: 5,
    },
    {
      name: "Sarah Jenkins",
      role: "VP Product at Streamline",
      quote:
        "“Collaborating with Abdul Bari and Nexa Solutions was seamless. Their attention to UX detail and scalable code architecture boosted our conversion metrics by 140%.”",
      rating: 5,
    },
    {
      name: "Marcus Aurelius",
      role: "Founder at Nova Media",
      quote:
        "“Strategic vision, punctual delivery, and top-tier technical craftsmanship. Abdul consistently delivers products that scale reliably under pressure.”",
      rating: 5,
    },
  ];

  const animateCard = () => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0.4, y: 10 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out", clearProps: "all" }
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
      className="bg-background py-10 sm:py-14 lg:py-16 overflow-hidden border-b border-border/5"
    >
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Title */}
          <div className="testimonial-left xl:col-span-6 text-center xl:text-left flex flex-col items-center xl:items-start">
            <span className="text-primary text-xs sm:text-sm uppercase tracking-widest font-bold font-Syne block mb-1.5 sm:mb-2">
              Testimonial
            </span>
            <h2 className="relative font-Syne font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[58px] text-foreground leading-tight">
              <span className="relative inline-block">
                <span className="absolute -top-1 -left-2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-accent/25 -z-10" />
                Client Feedback
              </span>
            </h2>
            <p className="text-muted text-sm sm:text-base lg:text-lg mt-3 sm:mt-4 max-w-md leading-relaxed mx-auto xl:mx-0">
              Discover what founders and tech leaders say about collaborating with Abdul Bari on high-impact digital products.
            </p>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center justify-center xl:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8">
              <button
                onClick={handlePrev}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border bg-surface/60 flex items-center justify-center text-foreground hover:bg-surface-hover hover:text-white hover:border-accent/40 transition-all shadow-sm active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent border border-accent text-white flex items-center justify-center hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25 transition-all shadow-sm active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <span className="text-xs sm:text-sm font-bold text-muted ml-2">
                0{currentIndex + 1} / 0{testimonials.length}
              </span>
            </div>
          </div>

          {/* Right Testimonial Card */}
          <div className="xl:col-span-6 w-full">
            <div
              ref={cardRef}
              className="p-5 sm:p-8 lg:p-10 bg-surface rounded-xl border border-white/10 relative shadow-xl hover:border-accent/40 transition-all duration-300"
            >
              <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-primary mb-4 sm:mb-6" />

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4 sm:mb-6">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="font-Syne font-bold text-base sm:text-xl lg:text-2xl text-foreground leading-relaxed mb-6 sm:mb-8 min-h-[90px] sm:min-h-[110px]">
                {current.quote}
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border/50">
                <div className="w-8 sm:w-10 h-0.5 bg-border" />
                <div>
                  <h4 className="font-Syne font-bold text-base sm:text-lg text-foreground">
                    {current.name}
                  </h4>
                  <span className="text-xs sm:text-sm font-medium text-muted">
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
