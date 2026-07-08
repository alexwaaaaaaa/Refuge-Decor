"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Lazy-load the 3D canvas component with SSR disabled
const HeroCanvas = dynamic(() => import("./canvas/HeroCanvas"), {
  ssr: false,
});

export default function Hero() {
  const [is3DReady, setIs3DReady] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const headingText = "Your Space, Refined.";
  const words = headingText.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.9,
        ease: [0.16, 1, 0.3, 1] as const, // premium expo ease
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.9,
        delay: shouldReduceMotion ? 0 : 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 md:pt-0 bg-[#FAF5F2] overflow-hidden">
      {/* 3D Scene / Poster Background */}
      <div className="absolute inset-0 z-0">
        {/* Fallback Static Poster Image */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 z-10 ${
            is3DReady ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Image
            src="/images/hero_ranch_living_room.png"
            alt="Warm minimalist ranch living room staging - Refuge Decor"
            fill
            priority
            className="object-cover"
          />
          {/* Subtle overlay for layout blend */}
          <div className="absolute inset-0 bg-[#FAF5F2]/20" />
        </div>

        {/* Dynamic 3D canvas */}
        <div 
          className={`w-full h-full transition-opacity duration-1000 ${
            is3DReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <HeroCanvas onCreated={() => setIs3DReady(true)} />
        </div>
        
        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF5F2] via-transparent to-[#FAF5F2]/10 pointer-events-none z-10" />
      </div>

      {/* Main Hero Content Overlay */}
      <div className="container-custom flex-1 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 py-16 relative z-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="lg:col-span-6 flex flex-col justify-center items-start text-left max-w-xl"
        >
          {/* Section Eyebrow */}
          <motion.p
            variants={wordVariants}
            className="text-xs uppercase tracking-eyebrow text-[#6B7051] font-semibold mb-6 font-sans"
          >
            REAL ESTATE STAGING · INTERIOR DESIGN
          </motion.p>

          {/* H1: Staggered Word Reveal */}
          <motion.h1 
            className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#1C1C1C] font-normal leading-[1.15] mb-6"
          >
            {words.map((word, idx) => (
              <span key={idx} className="inline-block overflow-hidden mr-3 sm:mr-4">
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
            <a
              href="#contact"
              className="text-center font-sans font-semibold text-xs uppercase tracking-wider bg-[#1C1C1C] text-[#FAF5F2] hover:bg-[#6B7051] px-8 py-4.5 rounded-full hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-md"
              style={{ minWidth: 200, minHeight: 44, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Request Private Consultation
            </a>
            <a
              href="#portfolio"
              className="text-center font-sans font-semibold text-xs uppercase tracking-wider text-[#1C1C1C] hover:text-[#6B7051] px-8 py-4.5 rounded-full border border-[#D8CBB8] hover:border-[#6B7051]/40 hover:bg-[#F5EFE9]/30 active:scale-[0.98] transition-all duration-300"
              style={{ minWidth: 150, minHeight: 44, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              View Portfolio
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="w-full flex justify-center pb-8 relative z-20 pointer-events-none"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-[#78716C]/60 hover:text-[#6B7051] transition-colors pointer-events-auto group"
          aria-label="Scroll to About Section"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] pl-[0.25em] font-semibold">
            Discover
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown size={20} className="stroke-[1.5] group-hover:stroke-[2]" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
