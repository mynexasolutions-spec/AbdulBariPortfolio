"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ArrowUp } from "lucide-react";

import {
  WhatsAppIcon,
  InstagramIcon,
  LinkedInIcon,
  GmailIcon,
  SOCIAL_CHANNELS,
} from "./SocialIcons";

export { WhatsAppIcon, InstagramIcon, LinkedInIcon, GmailIcon };

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".footer-header-block",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, clearProps: "all" }
      )
        .fromTo(
          ".footer-social-btn",
          { opacity: 0, scale: 0.85 },
          {
            opacity: 1,
            scale: 1,
            stagger: 0.06,
            duration: 0.45,
            ease: "back.out(1.5)",
            clearProps: "all",
          },
          "-=0.35"
        )
        .fromTo(
          ".footer-aligarh-card",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, clearProps: "all" },
          "-=0.35"
        )
        .fromTo(
          ".footer-direct-card",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.5,
            clearProps: "all",
          },
          "-=0.3"
        )
        .fromTo(
          ".footer-wordmark",
          { opacity: 0, scale: 0.98 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            clearProps: "all",
          },
          "-=0.25"
        );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative bg-[#07060D] text-foreground pt-8 sm:pt-12 lg:pt-14 pb-4 sm:pb-6 border-t border-border/10 overflow-hidden"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-accent/5 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary/5 rounded-full blur-[110px] sm:blur-[150px] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5 sm:space-y-7">
        {/* ============================================================== */}
        {/* ROW 1: CONNECT & FOLLOW + 4 SOCIAL CARDS + ALIGARH PHOTO CARD */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center text-center lg:text-left">
          {/* Header Block */}
          <div className="footer-header-block lg:col-span-4">
            <span className="inline-block text-primary text-xs sm:text-base font-bold font-Syne tracking-wide mb-1.5 sm:mb-2">
              Featured
            </span>
            <h2 className="font-Syne font-bold text-2xl sm:text-4xl text-foreground leading-tight tracking-tight">
              Connect & Follow
            </h2>
            <p className="font-sans text-muted text-xs sm:text-sm mt-1.5 sm:mt-2 leading-relaxed max-w-md mx-auto lg:mx-0">
              Follow my journey, get updates and see what we&apos;re building.
            </p>
          </div>

          {/* Social Icons (5 Channels: LinkedIn, Instagram, WhatsApp, Nexa Email, Meagle Email) */}
          <div className="lg:col-span-5 flex items-center justify-center flex-wrap gap-2.5 sm:gap-3.5">
            {/* 1. LinkedIn */}
            <a
              href="https://linkedin.com/in/barixl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn: barixl"
              className="footer-social-btn w-11 h-11 sm:w-14 sm:h-14 rounded-xl border border-white/10 bg-gradient-to-br from-[#120E22]/95 via-[#0E0B1A]/95 to-[#1A1333]/85 shadow-lg hover:border-accent/60 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 flex items-center justify-center group shrink-0"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <LinkedInIcon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
            </a>

            {/* 2. Instagram */}
            <a
              href="https://www.instagram.com/bxrixl?stkn=dmViZHRxc3oxcTR3&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              title="Instagram: @bxrixl"
              className="footer-social-btn w-11 h-11 sm:w-14 sm:h-14 rounded-xl border border-white/10 bg-gradient-to-br from-[#120E22]/95 via-[#0E0B1A]/95 to-[#1A1333]/85 shadow-lg hover:border-accent/60 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 flex items-center justify-center group shrink-0"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <InstagramIcon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
            </a>

            {/* 3. WhatsApp */}
            <a
              href="https://wa.me/918077313241"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Chat"
              title="WhatsApp: +91 80773 13241"
              className="footer-social-btn w-11 h-11 sm:w-14 sm:h-14 rounded-xl border border-white/10 bg-gradient-to-br from-[#120E22]/95 via-[#0E0B1A]/95 to-[#1A1333]/85 shadow-lg hover:border-accent/60 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 flex items-center justify-center group shrink-0"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
            </a>

            {/* 4. Nexa Solutions Email */}
            <a
              href="mailto:contact@nexa-solutions.in"
              aria-label="Nexa Solutions Email"
              title="Email: contact@nexa-solutions.in"
              className="footer-social-btn w-11 h-11 sm:w-14 sm:h-14 rounded-xl border border-white/10 bg-gradient-to-br from-[#120E22]/95 via-[#0E0B1A]/95 to-[#1A1333]/85 shadow-lg hover:border-accent/60 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 flex items-center justify-center group shrink-0"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GmailIcon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
            </a>

            {/* 5. Meagle 360 Email */}
            <a
              href="mailto:info@meagle360.com"
              aria-label="Meagle 360 Email"
              title="Email: info@meagle360.com"
              className="footer-social-btn w-11 h-11 sm:w-14 sm:h-14 rounded-xl border border-white/10 bg-gradient-to-br from-[#120E22]/95 via-[#0E0B1A]/95 to-[#1A1333]/85 shadow-lg hover:border-accent/60 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 flex items-center justify-center group shrink-0"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GmailIcon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
            </a>
          </div>

          {/* Aligarh Panoramic Photo Card */}
          <div className="lg:col-span-3">
            <div className="footer-aligarh-card group relative rounded-xl overflow-hidden border border-white/10 shadow-xl bg-surface/50 h-[85px] sm:h-[110px] w-full">
              <Image
                src="/aligarh_sunset.jpg"
                alt="Aligarh City"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 px-2.5 sm:px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center gap-1.5 text-xs text-white font-medium shadow-md">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Aligarh</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* DIRECT CONTACT CARDS: 2 EMAILS & WHATSAPP PHONE */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 pt-2">
          {/* Card 1: Nexa Solutions Email */}
          <a
            href="mailto:contact@nexa-solutions.in"
            className="footer-direct-card group relative rounded-xl border border-white/10 bg-gradient-to-br from-[#120E22]/90 via-[#0E0B1A]/90 to-[#181328]/90 p-4 sm:p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 flex items-center gap-3.5 overflow-hidden"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-white/10 bg-surface/80 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-primary/40 transition-all">
              <GmailIcon className="w-6 h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary font-Syne">
                  Nexa Solutions
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/15 text-primary-light font-medium">
                  Official
                </span>
              </div>
              <p className="text-foreground text-xs sm:text-sm font-semibold truncate group-hover:text-primary transition-colors mt-0.5">
                contact@nexa-solutions.in
              </p>
            </div>
          </a>

          {/* Card 2: Meagle 360 Email */}
          <a
            href="mailto:info@meagle360.com"
            className="footer-direct-card group relative rounded-xl border border-white/10 bg-gradient-to-br from-[#120E22]/90 via-[#0E0B1A]/90 to-[#181328]/90 p-4 sm:p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 flex items-center gap-3.5 overflow-hidden"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-white/10 bg-surface/80 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-accent/40 transition-all">
              <GmailIcon className="w-6 h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent-light font-Syne">
                  Meagle 360
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent/15 text-accent-light font-medium">
                  Official
                </span>
              </div>
              <p className="text-foreground text-xs sm:text-sm font-semibold truncate group-hover:text-accent-light transition-colors mt-0.5">
                info@meagle360.com
              </p>
            </div>
          </a>

          {/* Card 3: WhatsApp / Phone */}
          <a
            href="https://wa.me/918077313241"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-direct-card group relative rounded-xl border border-white/10 bg-gradient-to-br from-[#120E22]/90 via-[#0E0B1A]/90 to-[#181328]/90 p-4 sm:p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/50 hover:shadow-xl hover:shadow-[#25D366]/10 flex items-center gap-3.5 overflow-hidden sm:col-span-2 lg:col-span-1"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-white/10 bg-surface/80 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#25D366]/40 transition-all">
              <WhatsAppIcon className="w-6 h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#25D366] font-Syne">
                  Direct Line & WhatsApp
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#25D366]/15 text-[#25D366] font-medium">
                  Active
                </span>
              </div>
              <p className="text-foreground text-xs sm:text-sm font-semibold truncate group-hover:text-[#25D366] transition-colors mt-0.5">
                +91 80773 13241
              </p>
            </div>
          </a>
        </div>

        {/* ============================================================== */}
        {/* BIG STYLIZED "ABDUL BARI" GRAPHIC WORDMARK */}
        {/* ============================================================== */}
        <div className="!mt-3 sm:!mt-5 pt-2 pb-0 sm:pt-3 sm:pb-0 border-t border-border/10 text-center overflow-hidden select-none">
          <div className="footer-wordmark font-Syne font-black text-3xl xs:text-5xl sm:text-6xl md:text-[80px] lg:text-[140px] leading-none text-[#3E3950]/60 hover:text-primary/30 transition-colors uppercase tracking-tight">
            ABDUL BARI
          </div>
        </div>

        {/* ============================================================== */}
        {/* ROW 3: FOOTER BAR (ABDUL BARI + ALIGARH + SOCIALS + COPYRIGHT) */}
        {/* ============================================================== */}
        <div className="!mt-1 sm:!mt-2 pt-2.5 sm:pt-3.5 pb-0 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-6 border-t border-border/10 text-center md:text-left">
          {/* Brand & Subtitle */}
          <div>
            <h4 className="font-Syne font-bold text-lg sm:text-2xl text-foreground">
              Abdul Bari
            </h4>
            <p className="text-muted text-xs sm:text-sm font-medium mt-0.5">
              Co-Founder — Nexa Solutions | Meagle 360
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-1.5 text-muted text-xs sm:text-sm font-medium">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Aligarh, India</span>
          </div>

          {/* Mini Social Icons, Copyright & Back to Top */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com/in/barixl"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-border bg-surface/80 flex items-center justify-center hover:border-primary hover:scale-105 transition-all"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/bxrixl?stkn=dmViZHRxc3oxcTR3&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-border bg-surface/80 flex items-center justify-center hover:border-primary hover:scale-105 transition-all"
                aria-label="Instagram"
                title="Instagram: @bxrixl"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918077313241"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-border bg-surface/80 flex items-center justify-center hover:border-primary hover:scale-105 transition-all"
                aria-label="WhatsApp"
                title="WhatsApp: +91 80773 13241"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@nexa-solutions.in"
                className="w-8 h-8 rounded-full border border-border bg-surface/80 flex items-center justify-center hover:border-primary hover:scale-105 transition-all"
                aria-label="Nexa Solutions Email"
                title="Email: contact@nexa-solutions.in"
              >
                <GmailIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@meagle360.com"
                className="w-8 h-8 rounded-full border border-border bg-surface/80 flex items-center justify-center hover:border-primary hover:scale-105 transition-all"
                aria-label="Meagle 360 Email"
                title="Email: info@meagle360.com"
              >
                <GmailIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-muted/70 text-xs font-medium">
              © {new Date().getFullYear()} Abdul Bari. All rights reserved.
            </p>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-xs font-bold uppercase tracking-wider group sm:ml-2"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <span className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
