"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/work" },
    { name: "Blog", href: "/blog" },
    { name: "Quiz", href: "/quiz" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#F7F3EC]/95 backdrop-blur-md py-4 shadow-sm border-b border-[#D8CBB8]/20"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-[#201D18] font-bold transition-colors group-hover:text-[#6B6F4C]">
              REFUGE
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans font-medium text-sm text-[#78716C] hover:text-[#6B6F4C] transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#6B6F4C] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/consultation"
              className="hidden sm:inline-block font-sans font-semibold text-xs uppercase tracking-wider bg-[#201D18] text-[#F7F3EC] hover:bg-[#6B6F4C] hover:text-[#F7F3EC] px-6 py-3 rounded-full hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-sm"
              style={{ minWidth: 44, minHeight: 44, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Book Consultation
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#201D18] hover:text-[#6B6F4C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6B6F4C] rounded-lg"
              aria-label="Toggle Menu"
              style={{ minWidth: 44, minHeight: 44 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#F7F3EC] md:hidden flex flex-col justify-between pt-32 pb-16 px-8"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl text-[#201D18] hover:text-[#6B6F4C] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              <Link
                href="/consultation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center font-sans font-semibold text-sm uppercase tracking-wider bg-[#201D18] text-[#F7F3EC] hover:bg-[#6B6F4C] py-4 rounded-full transition-colors duration-300"
                style={{ minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                Book Consultation
              </Link>
              <span className="font-serif text-sm tracking-[0.2em] text-[#D8CBB8] font-semibold">
                REFUGE DECOR & DESIGNS
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
