"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "Refuge Decor completely transformed our ranch property listing. Their West Texas aesthetic felt authentic, clean, and warm. We had multiple offers within 5 days of staging.",
    author: "Sarah & David L.",
    location: "Marfa, TX",
  },
  {
    quote: "Their team understands scale and restraint. Every piece of furniture, every ceramic vase, and the linen throw felt highly considered. A truly professional design experience.",
    author: "Marcus G.",
    location: "Alpine, TX",
  },
  {
    quote: "The virtual 3D design phase gave us so much confidence. We could see the layout, wood finishes, and limestone detailing beforehand. The execution surpassed all expectations.",
    author: "Elena R.",
    location: "Midland, TX",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 bg-[#EFE7D8]/40 border-t border-[#D8CBB8]/20"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow block mb-4">
            KIND WORDS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#201D18] font-normal">
            Client Stories
          </h2>
        </div>

        {/* Testimonial Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto relative bg-[#F7F3EC] border border-[#D8CBB8]/20 rounded-3xl p-8 md:p-16 shadow-sm text-left flex flex-col justify-between min-h-[300px]"
        >
          {/* Decorative Quotation Mark */}
          <span className="font-serif text-8xl text-[#D8CBB8]/30 absolute top-4 left-8 pointer-events-none select-none">
            “
          </span>

          {/* Slide Animating Content */}
          <div className="relative z-10 flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <p className="font-serif italic text-[#78716C] text-lg sm:text-xl md:text-2xl leading-relaxed mt-4">
                  {testimonials[activeIndex].quote}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Author info and slider controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-[#D8CBB8]/20 pt-8 mt-6">
            <div>
              <h4 className="font-sans font-bold text-sm text-[#201D18]">
                {testimonials[activeIndex].author}
              </h4>
              <p className="font-sans text-xs text-[#78716C] mt-0.5">
                {testimonials[activeIndex].location}
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-3 self-end sm:self-auto font-sans">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full border border-[#D8CBB8]/30 hover:border-[#6B6F4C] text-[#201D18] hover:text-[#6B6F4C] bg-[#F7F3EC] hover:bg-[#EFE7D8]/20 transition-all duration-300"
                aria-label="Previous Testimonial"
                style={{ minWidth: 44, minHeight: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full border border-[#D8CBB8]/30 hover:border-[#6B6F4C] text-[#201D18] hover:text-[#6B6F4C] bg-[#F7F3EC] hover:bg-[#EFE7D8]/20 transition-all duration-300"
                aria-label="Next Testimonial"
                style={{ minWidth: 44, minHeight: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
