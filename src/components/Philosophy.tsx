"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1.6; // seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const currentCount = progress * value;
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-serif text-4xl md:text-5xl text-[#1C1C1C] font-normal">
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Philosophy() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const stats = [
    { value: 150, suffix: "+", label: "Homes Staged" },
    { value: 12, suffix: " Days", label: "Avg. on Market" },
    { value: 5.0, suffix: "/5", label: "Client Rating", decimals: 1 },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 md:py-32 bg-[#FAF5F2] border-t border-[#D8CBB8]/20 overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Tactical Video Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Elegant framing border background */}
            <div className="absolute -inset-4 border border-[#D8CBB8]/30 rounded-3xl translate-x-2.5 translate-y-2.5 pointer-events-none" />
            
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#F5EFE9] shadow-md">
              <video
                src="/images/videos/erasio_Rug_candle_quilt_textures_202607080219.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Soft tint blend */}
              <div className="absolute inset-0 bg-[#FAF5F2]/5 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left flex flex-col justify-center"
          >
            <span className="eyebrow mb-4 block">
              OUR STORIES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1C1C1C] font-normal mb-8 leading-tight">
              A Labor of Love
            </h2>

            <div className="space-y-6 text-[#78716C] font-sans font-light leading-relaxed text-base md:text-lg">
              <p>
                Every space starts the same way: too full, too loud, and not quite anyone&apos;s. We don&apos;t add until it feels finished — we take away until it feels true. A worn linen throw. One deliberate lamp. The grain of real wood left alone.
              </p>
              <p>
                That restraint is the work. It&apos;s slower, and it&apos;s harder to photograph in a rush — but it&apos;s the difference between a house that is staged and a home that is remembered. Inspired by the West Texas landscape, we marry warm minimalism with cozy ranch luxury to create spaces that breathe.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-[#D8CBB8]/30 pt-10 mt-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                  />
                  <span className="font-sans text-xs uppercase tracking-wider text-[#78716C]/60 font-semibold mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
