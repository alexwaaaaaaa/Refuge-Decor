"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, Search, Filter, ChevronDown, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

const categories = ["All", "Staging", "Interiors", "Before & After"];
const roomTypes = ["All", "Kitchen", "Bathroom", "Living Room", "Bedroom", "Entryway", "Outdoor"];
const styles = ["All", "Ranch", "Modern", "Traditional", "Minimalist", "Eclectic"];
const locations = ["All", "Marfa", "Alpine", "Terlingua", "Fort Davis", "Davis Mountains"];

const portfolioItems = [
  {
    id: 1,
    title: "Prairie Ranch Kitchen",
    category: "Interiors",
    roomType: "Kitchen",
    style: "Ranch",
    location: "Marfa",
    image: "/images/portfolio_kitchen.png",
    desc: "Limestone walls, custom white oak cabinetry, and soapstone surfaces styled to celebrate local Texas textures.",
    aspect: "aspect-[3/4]",
  },
  {
    id: 2,
    title: "Brazos River Bath",
    category: "Staging",
    roomType: "Bathroom",
    style: "Modern",
    location: "Alpine",
    image: "/images/portfolio_bathroom.png",
    desc: "Luxury master bath staging featuring natural stone tile walls and a white oak floating vanity.",
    aspect: "aspect-square",
  },
  {
    id: 3,
    title: "Canyon Reading Nook",
    category: "Interiors",
    roomType: "Living Room",
    style: "Minimalist",
    location: "Davis Mountains",
    image: "/images/portfolio_nook.png",
    desc: "Warm leather and natural light curation, overlooking peaceful West Texas plains.",
    aspect: "aspect-[4/5]",
  },
  {
    id: 4,
    title: "The Adobe Entryway",
    category: "Staging",
    roomType: "Entryway",
    style: "Traditional",
    location: "Fort Davis",
    image: "/images/portfolio_entryway.png",
    desc: "Tactile minimalist ranch entry styling featuring local dried flora and neutral styling objects.",
    aspect: "aspect-[3/2]",
  },
  {
    id: 5,
    title: "Terlingua Great Room",
    category: "Before & After",
    roomType: "Living Room",
    style: "Ranch",
    location: "Terlingua",
    image: "/images/slider_after.png",
    desc: "Renovated and staged living area showing warm plaster walls and modern ranch furnishings.",
    aspect: "aspect-square",
  },
  {
    id: 6,
    title: "Terlingua Room (Raw)",
    category: "Before & After",
    roomType: "Living Room",
    style: "Ranch",
    location: "Terlingua",
    image: "/images/slider_before.png",
    desc: "The original state of the Terlingua Great Room prior to styling and interior edits.",
    aspect: "aspect-[4/3]",
  },
];

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  roomType: string;
  style: string;
  location: string;
  image: string;
  desc: string;
  aspect: string;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeRoomType, setActiveRoomType] = useState("All");
  const [activeStyle, setActiveStyle] = useState("All");
  const [activeLocation, setActiveLocation] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const galleryRef = useRef(null);
  const isInView = useInView(galleryRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
        setZoomLevel(1);
      }
      if (selectedItem) {
        if (e.key === "ArrowLeft") {
          navigateToItem(-1);
        }
        if (e.key === "ArrowRight") {
          navigateToItem(1);
        }
        if (e.key === "+" || e.key === "=") {
          setZoomLevel(Math.min(zoomLevel + 0.25, 3));
        }
        if (e.key === "-" || e.key === "_") {
          setZoomLevel(Math.max(zoomLevel - 0.25, 1));
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, zoomLevel]);

  const navigateToItem = (direction: number) => {
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem?.id);
    const newIndex = (currentIndex + direction + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[newIndex]);
    setZoomLevel(1);
  };

  const filteredItems = portfolioItems.filter((item) => {
    const categoryMatch = activeCategory === "All" || item.category === activeCategory;
    const roomTypeMatch = activeRoomType === "All" || item.roomType === activeRoomType;
    const styleMatch = activeStyle === "All" || item.style === activeStyle;
    const locationMatch = activeLocation === "All" || item.location === activeLocation;
    return categoryMatch && roomTypeMatch && styleMatch && locationMatch;
  });

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#F7F3EC]">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="text-left max-w-xl">
            <span className="eyebrow block mb-4">
              PORTFOLIO
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#201D18] font-normal leading-tight">
              Selected Works
            </h2>
            <p className="font-sans font-light text-[#78716C] mt-4 text-base">
              Explore our project archive showcasing cozy ranch luxury and strategic real estate staging.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-end">
            <div className="flex flex-wrap gap-2 border-b border-[#D8CBB8]/20 pb-2 md:pb-0 font-sans">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-colors duration-300 ${
                    activeCategory === category
                      ? "text-[#201D18] cursor-default"
                      : "text-[#78716C] hover:text-[#201D18]"
                  }`}
                  style={{ minWidth: 44, minHeight: 44 }}
                >
                  <span className="relative z-10">{category}</span>
                  {activeCategory === category && (
                    <motion.div
                      layoutId="activeCategoryUnderline"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#201D18]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#78716C] hover:text-[#201D18] transition-colors"
            >
              <Filter size={16} />
              Advanced Filters
              <ChevronDown size={16} className={`transition-transform ${showAdvancedFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showAdvancedFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#D8CBB8]/20"
              >
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#78716C] mb-3 font-semibold">Room Type</label>
                  <div className="flex flex-wrap gap-2">
                    {roomTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setActiveRoomType(type)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                          activeRoomType === type
                            ? "bg-[#201D18] text-[#F7F3EC]"
                            : "bg-[#EFE7D8] text-[#78716C] hover:bg-[#D8CBB8]"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#78716C] mb-3 font-semibold">Style</label>
                  <div className="flex flex-wrap gap-2">
                    {styles.map((style) => (
                      <button
                        key={style}
                        onClick={() => setActiveStyle(style)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                          activeStyle === style
                            ? "bg-[#201D18] text-[#F7F3EC]"
                            : "bg-[#EFE7D8] text-[#78716C] hover:bg-[#D8CBB8]"
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#78716C] mb-3 font-semibold">Location</label>
                  <div className="flex flex-wrap gap-2">
                    {locations.map((location) => (
                      <button
                        key={location}
                        onClick={() => setActiveLocation(location)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                          activeLocation === location
                            ? "bg-[#201D18] text-[#F7F3EC]"
                            : "bg-[#EFE7D8] text-[#78716C] hover:bg-[#D8CBB8]"
                        }`}
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
                className={`break-inside-avoid relative rounded-2xl overflow-hidden cursor-zoom-in group border border-[#D8CBB8]/25 shadow-sm hover:shadow-md transition-all duration-500 ${item.aspect} bg-[#EFE7D8] mb-6 focus-visible:ring-2 focus-visible:ring-[#6B6F4C] focus-visible:outline-none w-full text-left`}
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
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC3g//2Q=="
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </motion.div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#201D18]/90 via-[#201D18]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <span className="text-[9px] uppercase tracking-widest text-[#D8CBB8] font-sans font-semibold mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg text-[#F7F3EC] font-normal flex items-center gap-2">
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
              className="fixed inset-0 z-50 bg-[#201D18]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedItem(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 text-[#F7F3EC] hover:text-[#D8CBB8] transition-colors p-2 z-10 focus:ring-2 focus:ring-[#D8CBB8] rounded-full"
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
                className="max-w-6xl w-full bg-[#F7F3EC] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-[#D8CBB8]/20"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Left: Image Container with Shared Layout ID */}
                <div className="md:w-3/5 bg-[#EFE7D8] relative aspect-square md:aspect-auto md:min-h-[500px] overflow-hidden">
                  <motion.div
                    layoutId={`portfolio-image-${selectedItem.id}`}
                    className="absolute inset-0 w-full h-full"
                    style={{ transform: `scale(${zoomLevel})`, transformOrigin: "center" }}
                  >
                    <Image
                      src={selectedItem.image}
                      alt={selectedItem.desc}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => navigateToItem(-1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#201D18]/80 hover:bg-[#201D18] text-[#F7F3EC] p-3 rounded-full transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() => navigateToItem(1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#201D18]/80 hover:bg-[#201D18] text-[#F7F3EC] p-3 rounded-full transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Zoom Controls */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-[#201D18]/80 backdrop-blur-sm rounded-full p-2">
                    <button
                      onClick={() => setZoomLevel(Math.max(zoomLevel - 0.25, 1))}
                      className="text-[#F7F3EC] hover:text-white p-2 transition-colors"
                      aria-label="Zoom out"
                    >
                      <ZoomOut size={20} />
                    </button>
                    <span className="text-[#F7F3EC] text-sm font-medium px-2 flex items-center">
                      {Math.round(zoomLevel * 100)}%
                    </span>
                    <button
                      onClick={() => setZoomLevel(Math.min(zoomLevel + 0.25, 3))}
                      className="text-[#F7F3EC] hover:text-white p-2 transition-colors"
                      aria-label="Zoom in"
                    >
                      <ZoomIn size={20} />
                    </button>
                  </div>
                </div>

                {/* Right: Info */}
                <div className="md:w-2/5 p-8 md:p-10 flex flex-col justify-between text-left">
                  <div>
                    <span className="eyebrow block mb-2">
                      {selectedItem.category}
                    </span>
                    <h3 className="font-serif text-2xl text-[#201D18] font-normal mb-4">
                      {selectedItem.title}
                    </h3>
                    <p className="font-sans font-light text-[#78716C] text-sm leading-relaxed mb-4">
                      {selectedItem.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-2 py-1 bg-[#EFE7D8] text-xs text-[#78716C] rounded-full">
                        {selectedItem.roomType}
                      </span>
                      <span className="px-2 py-1 bg-[#EFE7D8] text-xs text-[#78716C] rounded-full">
                        {selectedItem.style}
                      </span>
                      <span className="px-2 py-1 bg-[#EFE7D8] text-xs text-[#78716C] rounded-full">
                        {selectedItem.location}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      setZoomLevel(1);
                    }}
                    className="mt-8 font-sans font-semibold text-xs uppercase tracking-wider bg-[#201D18] text-[#F7F3EC] hover:bg-[#6B6F4C] py-4.5 rounded-full transition-colors duration-300 text-center"
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
