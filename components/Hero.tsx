"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import TextReveal from "./ui/TextReveal";

export default function Hero() {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Single useScroll listener for the entire Hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform 1: Headline translate up and fade on scroll
  const yHeadline = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacityHeadline = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // Transform 2: Video parallax and scale
  const yVideo = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scaleVideo = useTransform(scrollYProgress, [0, 1], [1.0, 1.08]);

  // Transform 3: Horizon line rotates/settles into position
  const rotateHorizon = useTransform(scrollYProgress, [0, 0.3], [-3, 0]);
  const yHorizon = useTransform(scrollYProgress, [0, 0.3], [15, 0]);

  const headingText = "Your Space, Refined.";
  const words = headingText.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.8,
        delay: shouldReduceMotion ? 0 : 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#F7F3EC] overflow-hidden flex flex-col justify-between"
    >
      {/* Full-viewport split layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 w-full items-stretch">
        
        {/* Left Column: Narrative Content */}
        <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center bg-[#F7F3EC] px-6 sm:px-12 lg:px-20 xl:px-24 py-16 lg:py-24 relative z-20">
          <motion.div
            style={shouldReduceMotion ? {} : { y: yHeadline, opacity: opacityHeadline }}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-xl"
          >
            {/* Section Eyebrow */}
            <motion.p
              variants={wordVariants}
              className="text-xs uppercase tracking-[0.2em] text-[#6B6F4C] font-semibold mb-6 font-sans"
            >
              REAL ESTATE STAGING · INTERIOR DESIGN
            </motion.p>

            {/* H1: Staggered Word Reveal */}
            <motion.h1 
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#201D18] font-normal leading-[1.12] mb-6"
            >
              {words.map((word, idx) => (
                <span key={idx} className="inline-block overflow-hidden mr-3">
                  <motion.span variants={wordVariants} className="inline-block">
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={contentVariants}
              className="text-[#78716C] text-base md:text-lg leading-relaxed mb-10 font-sans font-light"
            >
              Transforming West Texas spaces into warm, considered sanctuaries through a quiet palette, organic textures, and intentional restraint.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={contentVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <MagneticButton
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-center font-sans font-semibold text-xs uppercase tracking-wider bg-[#201D18] text-[#F7F3EC] hover:bg-[#6B6F4C] px-8 py-4 rounded-full transition-all duration-300 shadow-sm"
                style={{ minHeight: 44, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                Request Consultation
              </MagneticButton>
              <MagneticButton
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-center font-sans font-semibold text-xs uppercase tracking-wider text-[#201D18] hover:text-[#6B6F4C] px-8 py-4 rounded-full border border-[#D8CBB8] hover:border-[#6B6F4C]/45 hover:bg-[#EFE7D8]/30 transition-all duration-300"
                style={{ minHeight: 44, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                Explore Services
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column: Visual (Video / Image) */}
        <div className="lg:col-span-6 order-1 lg:order-2 relative overflow-hidden min-h-[40vh] lg:min-h-screen z-10 bg-[#EFE7D8]">
          <motion.div
            style={shouldReduceMotion ? {} : { y: yVideo, scale: scaleVideo }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Fallback Static Poster Image */}
            <div 
              className={`absolute inset-0 transition-opacity duration-1000 z-10 ${
                isVideoReady ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <Image
                src="/images/hero_ranch_living_room.png"
                alt="Warm minimalist ranch living room staging - Refuge Decor"
                fill
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC3g//2Q=="
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#201D18]/10" />
            </div>

            <video
              className={`h-full w-full object-cover transition-opacity duration-1000 ${
                isVideoReady ? "opacity-100" : "opacity-0"
              }`}
              poster="/images/hero_ranch_living_room.png"
              autoPlay={!shouldReduceMotion}
              muted
              loop
              playsInline
              preload="auto"
              onCanPlay={() => setIsVideoReady(true)}
            >
              <source
                src="/images/videos/hero-ranch-living-room-optimized.mp4"
                type="video/mp4"
              />
            </video>
            
            {/* Vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#201D18]/15 via-transparent to-transparent pointer-events-none z-10" />
          </motion.div>
        </div>
      </div>

      {/* Signature Element: Horizon line SVG at the section seam */}
      <motion.div
        style={shouldReduceMotion ? {} : { rotate: rotateHorizon, y: yHorizon, originX: 0.5, originY: 1 }}
        className="absolute bottom-0 left-0 w-full z-30 pointer-events-none"
      >
        <svg
          viewBox="0 0 1200 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto text-[#D8CBB8] stroke-current"
        >
          <path
            d="M0 45 C 280 45, 380 20, 520 38 C 660 55, 880 15, 1200 42"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-none hidden lg:block">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-[#78716C]/60 hover:text-[#201D18] transition-colors pointer-events-auto group"
          aria-label="Scroll to About Section"
        >
          <span className="font-sans text-[9px] uppercase tracking-[0.25em] pl-[0.25em] font-semibold">
            Discover
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown size={16} className="stroke-[1.5] group-hover:stroke-[2]" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
