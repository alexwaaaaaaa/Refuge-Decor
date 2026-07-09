"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Home, Layers, Box, ArrowRight } from "lucide-react";
import RoomPreview3DLoader from "./RoomPreview3D.loader";

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-24 md:py-32 bg-[#F7F3EC]"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16 md:mb-20">
          <span className="eyebrow block mb-4">
            OUR OFFERINGS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#201D18] font-normal leading-tight">
            Curated Services
          </h2>
          <p className="font-sans font-light text-[#78716C] mt-4 text-base md:text-lg max-w-xl">
            From empty spaces to luxury ranch estates, we introduce warmth, alignment, and texture to elevate everyday living.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 items-stretch"
        >
          {/* Service 1: Real Estate Staging */}
          <motion.div
            variants={cardVariants}
            className="group flex flex-col h-full bg-[#EFE7D8]/25 hover:bg-[#EFE7D8]/60 border border-[#D8CBB8]/20 hover:border-[#D8CBB8]/50 rounded-2xl p-5 transition-all duration-500 shadow-sm hover:shadow-md"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-[#EFE7D8]">
              <Image
                src="/images/service_staging.png"
                alt="Warm staged ranch living room with white oak chairs, a rustic wooden coffee table, and textured neutral linen elements"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#F7F3EC]/5 pointer-events-none" />
            </div>

            <div className="flex-1 flex flex-col text-left">
              <div className="flex items-center gap-3 text-[#6B6F4C] mb-4">
                <div className="p-2 rounded-lg bg-[#6B6F4C]/10">
                  <Home size={18} className="stroke-[1.5]" />
                </div>
                <span className="font-sans font-semibold text-[10px] tracking-wider uppercase">
                  Property Staging
                </span>
              </div>

              <h3 className="font-serif text-xl text-[#201D18] font-normal mb-3">
                Real Estate Staging
              </h3>

              <p className="font-sans font-light text-[#78716C] text-sm leading-relaxed mb-6 flex-1">
                Sell faster and at premium valuations with curated, high-end spaces that highlight architectural volumes and West Texas ranch context.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-sans font-semibold text-xs uppercase tracking-wider text-[#201D18] hover:text-[#6B6F4C] transition-colors group-hover:gap-3"
              >
                Inquire Staging
                <ArrowRight size={14} className="stroke-[1.5]" />
              </a>
            </div>
          </motion.div>

          {/* Service 2: Interior Decorating */}
          <motion.div
            variants={cardVariants}
            className="group flex flex-col h-full bg-[#EFE7D8]/25 hover:bg-[#EFE7D8]/60 border border-[#D8CBB8]/20 hover:border-[#D8CBB8]/50 rounded-2xl p-5 transition-all duration-500 shadow-sm hover:shadow-md"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-[#EFE7D8]">
              <Image
                src="/images/service_decor.png"
                alt="Interior styled bed featuring layered neutral washed linens, throw pillows, and soft studio lighting"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#F7F3EC]/5 pointer-events-none" />
            </div>

            <div className="flex-1 flex flex-col text-left">
              <div className="flex items-center gap-3 text-[#6B6F4C] mb-4">
                <div className="p-2 rounded-lg bg-[#6B6F4C]/10">
                  <Layers size={18} className="stroke-[1.5]" />
                </div>
                <span className="font-sans font-semibold text-[10px] tracking-wider uppercase">
                  Residential Design
                </span>
              </div>

              <h3 className="font-serif text-xl text-[#201D18] font-normal mb-3">
                Interior Decorating
              </h3>

              <p className="font-sans font-light text-[#78716C] text-sm leading-relaxed mb-6 flex-1">
                Warm, restraint-based design crafted for comfort, narrative, and quiet luxury. We source organic, local textures that stand the test of time.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-sans font-semibold text-xs uppercase tracking-wider text-[#201D18] hover:text-[#6B6F4C] transition-colors group-hover:gap-3"
              >
                Inquire Design
                <ArrowRight size={14} className="stroke-[1.5]" />
              </a>
            </div>
          </motion.div>

          {/* Service 3: Virtual 3D Spatial Design (Concept Preview) */}
          <motion.div
            variants={cardVariants}
            className="group flex flex-col h-full bg-[#EFE7D8]/25 hover:bg-[#EFE7D8]/60 border border-[#D8CBB8]/20 hover:border-[#D8CBB8]/50 rounded-2xl p-5 transition-all duration-500 shadow-sm hover:shadow-md"
          >
            {/* Interactive room preview */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-[#EFE7D8]">
              <RoomPreview3DLoader />
              <div className="absolute inset-0 bg-[#F7F3EC]/5 pointer-events-none" />
            </div>

            <div className="flex-1 flex flex-col text-left">
              <div className="flex items-center gap-3 text-[#8C5A3C] mb-4">
                <div className="p-2 rounded-lg bg-[#8C5A3C]/10">
                  <Box size={18} className="stroke-[1.5]" />
                </div>
                <span className="font-sans font-semibold text-[10px] tracking-wider uppercase">
                  Spatial Concept Design
                </span>
              </div>

              <h3 className="font-serif text-xl text-[#201D18] font-normal mb-3">
                Virtual 3D Spatial Design
              </h3>

              <p className="font-sans font-light text-[#78716C] text-sm leading-relaxed mb-6 flex-1">
                A rendered concept preview — see the room&apos;s layout and mood before a single piece of furniture moves.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-sans font-semibold text-xs uppercase tracking-wider text-[#201D18] hover:text-[#6B6F4C] transition-colors group-hover:gap-3"
              >
                Inquire Design
                <ArrowRight size={14} className="stroke-[1.5]" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
