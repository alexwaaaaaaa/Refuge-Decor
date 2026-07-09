"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleMouseUp]);

  // Fade thresholds for before/after labels
  const beforeOpacity = Math.max(0, Math.min(1, (sliderPosition - 15) / 20));
  const afterOpacity = Math.max(0, Math.min(1, ((100 - sliderPosition) - 15) / 20));

  // Dynamically interpolate background color from surface (#EFE7D8) to canvas (#F7F3EC) as user drags from center (50%)
  const ratio = Math.abs(50 - sliderPosition) / 50; // 0 at center, 1 at edges
  const r = Math.round(239 + (247 - 239) * ratio);
  const g = Math.round(231 + (243 - 231) * ratio);
  const b = Math.round(216 + (236 - 216) * ratio);
  const bgStyle = { backgroundColor: `rgba(${r}, ${g}, ${b}, 0.3)` };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <section
      id="comparison"
      ref={sectionRef}
      className="py-24 md:py-32 border-t border-[#D8CBB8]/20 transition-colors duration-150"
      style={bgStyle}
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow block mb-4">
            THE TRANSFORMATION
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#201D18] font-normal mb-6">
            Seeing is Believing
          </h2>
          <p className="font-sans font-light text-[#78716C] text-base md:text-lg">
            Slide to see how professional staging edits, refines, and infuses cozy ranch luxury into a cluttered space.
          </p>
        </div>

        {/* Draggable Slider Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          ref={containerRef}
          className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden shadow-xl select-none cursor-ew-resize border border-[#D8CBB8]/30 bg-[#EFE7D8]"
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* AFTER Image (Bottom Layer) */}
          <Image
            src="/images/slider_after.png"
            alt="After staging - clean, minimalist, high-end ranch living room"
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover pointer-events-none"
            draggable={false}
          />
          <div className="absolute inset-0 bg-[#F7F3EC]/5 pointer-events-none" />

          {/* BEFORE Image (Top Layer, Clipped) */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
          >
            <Image
              src="/images/slider_before.png"
              alt="Before staging - dark, outdated, cluttered living room"
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover pointer-events-none"
              draggable={false}
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>

          {/* BEFORE Label */}
          <div
            className="absolute top-6 left-6 bg-[#201D18]/80 backdrop-blur-sm text-[#F7F3EC] px-4 py-2 rounded-lg text-[10px] uppercase tracking-widest font-semibold pointer-events-none transition-opacity duration-150 font-sans"
            style={{ opacity: beforeOpacity }}
          >
            Before
          </div>

          {/* AFTER Label */}
          <div
            className="absolute top-6 right-6 bg-[#6B6F4C]/95 backdrop-blur-sm text-[#F7F3EC] px-4 py-2 rounded-lg text-[10px] uppercase tracking-widest font-semibold pointer-events-none transition-opacity duration-150 font-sans"
            style={{ opacity: afterOpacity }}
          >
            After
          </div>

          {/* Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-[1.5px] bg-[#F7F3EC] shadow-md pointer-events-none z-10"
            style={{ left: `${sliderPosition}%` }}
          />

          {/* Drag Handle featuring the Signature Horizon Line Motif inside the circle */}
          <div
            tabIndex={0}
            role="slider"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Staging transformation slider"
            onKeyDown={handleKeyDown}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#F7F3EC] text-[#201D18] border border-[#D8CBB8]/40 shadow-2xl flex flex-col items-center justify-center cursor-ew-resize hover:scale-105 active:scale-95 transition-transform z-20 focus-visible:ring-2 focus-visible:ring-[#6B6F4C] focus-visible:outline-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* The West Texas Horizon shape, miniature size */}
            <svg
              viewBox="0 0 100 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-auto text-[#8C5A3C] stroke-current mb-0.5"
            >
              <path
                d="M5 25 C 25 25, 35 5, 50 20 C 65 35, 75 10, 95 22"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-[6px] uppercase tracking-wider text-[#78716C] font-sans font-bold leading-none select-none">
              Slide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
