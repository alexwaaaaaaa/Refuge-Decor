"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, Search } from "lucide-react";

const categories = ["All", "Staging", "Interiors", "Before & After"];

const portfolioItems = [
  {
    id: 1,
    title: "Prairie Ranch Kitchen",
    category: "Interiors",
    image: "/images/portfolio_kitchen.png",
    desc: "Limestone walls, custom white oak cabinetry, and soapstone surfaces styled to celebrate local Texas textures.",
    aspect: "aspect-[3/4]",
  },
  {
    id: 2,
    title: "Brazos River Bath",
    category: "Staging",
    image: "/images/portfolio_bathroom.png",
    desc: "Luxury master bath staging featuring natural stone tile walls and a white oak floating vanity.",
    aspect: "aspect-square",
  },
  {
    id: 3,
    title: "Canyon Reading Nook",
    category: "Interiors",
    image: "/images/portfolio_nook.png",
    desc: "Warm leather and natural light curation, overlooking peaceful West Texas plains.",
    aspect: "aspect-[4/5]",
  },
  {
    id: 4,
    title: "The Adobe Entryway",
    category: "Staging",
    image: "/images/portfolio_entryway.png",
    desc: "Tactile minimalist ranch entry styling featuring local dried flora and neutral styling objects.",
    aspect: "aspect-[3/2]",
  },
  {
    id: 5,
    title: "Terlingua Great Room",
    category: "Before & After",
    image: "/images/slider_after.png",
    desc: "Renovated and staged living area showing warm plaster walls and modern ranch furnishings.",
    aspect: "aspect-square",
  },
  {
    id: 6,
    title: "Terlingua Room (Raw)",
    category: "Before & After",
    image: "/images/slider_before.png",
    desc: "The original state of the Terlingua Great Room prior to styling and interior edits.",
    aspect: "aspect-[4/3]",
  },
];

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  desc: string;
  aspect: string;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const galleryRef = useRef(null);
  const isInView = useInView(galleryRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#FAF5F2]">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="text-left max-w-xl">
            <span className="eyebrow block mb-4">
              PORTFOLIO
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1C1C1C] font-normal leading-tight">
              Selected Works
            </h2>
            <p className="font-sans font-light text-[#78716C] mt-4 text-base">
              Explore our project archive showcasing cozy ranch luxury and strategic real estate staging.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 border-b border-[#D8CBB8]/20 pb-2 md:pb-0 font-sans">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-colors duration-300 ${
                  activeCategory === category
                    ? "text-[#1C1C1C] cursor-default"
                    : "text-[#78716C] hover:text-[#1C1C1C]"
                }`}
                style={{ minWidth: 44, minHeight: 44 }}
              >
                <span className="relative z-10">{category}</span>
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategoryUnderline"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#1C1C1C]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Gallery */}
        <motion.div
          ref={galleryRef}
          layout
          className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
                }
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedItem(item)}
                className={`break-inside-avoid relative rounded-2xl overflow-hidden cursor-zoom-in group border border-[#D8CBB8]/25 shadow-sm hover:shadow-md transition-all duration-500 ${item.aspect} bg-[#F5EFE9] mb-6 focus-visible:ring-2 focus-visible:ring-[#6B7051] focus-visible:outline-none w-full text-left`}
              >
                {/* Image Container with Shared Layout ID */}
                <motion.div
                  layoutId={`portfolio-image-${item.id}`}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={item.image}
                    alt={item.desc}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </motion.div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/90 via-[#1C1C1C]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <span className="text-[9px] uppercase tracking-widest text-[#D8CBB8] font-sans font-semibold mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg text-[#FAF5F2] font-normal flex items-center gap-2">
                    {item.title}
                    <Search size={14} className="stroke-[2] text-[#D8CBB8]" />
                  </h3>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#1C1C1C]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedItem(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 text-[#FAF5F2] hover:text-[#D8CBB8] transition-colors p-2 z-10 focus:ring-2 focus:ring-[#D8CBB8] rounded-full"
                aria-label="Close Lightbox"
                style={{ minWidth: 44, minHeight: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <X size={28} />
              </button>

              {/* Modal Box */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl w-full bg-[#FAF5F2] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-[#D8CBB8]/20"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Left: Image Container with Shared Layout ID */}
                <div className="md:w-3/5 bg-[#F5EFE9] relative aspect-square md:aspect-auto md:min-h-[500px] overflow-hidden">
                  <motion.div
                    layoutId={`portfolio-image-${selectedItem.id}`}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={selectedItem.image}
                      alt={selectedItem.desc}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </div>

                {/* Right: Info */}
                <div className="md:w-2/5 p-8 md:p-10 flex flex-col justify-between text-left">
                  <div>
                    <span className="eyebrow block mb-2">
                      {selectedItem.category}
                    </span>
                    <h3 className="font-serif text-2xl text-[#1C1C1C] font-normal mb-4">
                      {selectedItem.title}
                    </h3>
                    <p className="font-sans font-light text-[#78716C] text-sm leading-relaxed">
                      {selectedItem.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedItem(null)}
                    className="mt-8 font-sans font-semibold text-xs uppercase tracking-wider bg-[#1C1C1C] text-[#FAF5F2] hover:bg-[#6B7051] py-4.5 rounded-full transition-colors duration-300 text-center"
                    style={{ minHeight: 44 }}
                  >
                    Back to Gallery
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
