"use client";

import React, { useState } from "react";
import { Globe, ArrowRight, Check } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#EFE7D8] border-t border-[#D8CBB8]/30 py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start mb-16">
          {/* Brand Col */}
          <div className="md:col-span-4 text-left">
            <a href="#" className="font-serif text-2xl tracking-[0.25em] text-[#201D18] font-bold">
              REFUGE
            </a>
            <p className="font-sans text-[10px] uppercase tracking-widest text-[#78716C] mt-2 font-semibold">
              Decor & Designs LLC
            </p>
            <p className="font-sans font-light text-sm text-[#78716C] mt-6 max-w-sm leading-relaxed">
              Crafting warm, quiet sanctuaries across Marfa, Alpine, Fort Davis, and the West Texas Hill Country.
            </p>
          </div>

          {/* Links Col */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#6B6F4C] mb-6">
              Studio Navigation
            </h4>
            <div className="flex flex-col gap-4 text-sm font-sans">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#78716C] hover:text-[#6B6F4C] transition-colors duration-300 w-fit"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Col */}
          <div className="md:col-span-5 text-left">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#6B6F4C] mb-6">
              Subscribe to Journal
            </h4>
            <p className="font-sans font-light text-sm text-[#78716C] mb-6 leading-relaxed">
              Receive updates on design restraint, Texas material curation, and recent staging work.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full bg-[#F7F3EC] border border-[#D8CBB8]/40 focus:border-[#6B6F4C] focus:ring-1 focus:ring-[#6B6F4C] py-3.5 pl-5 pr-14 rounded-full text-sm font-sans placeholder-[#78716C]/50 text-[#201D18] focus:outline-none transition-all duration-300"
              />
              <button
                type="submit"
                disabled={subscribed}
                className="absolute right-1.5 p-2.5 rounded-full bg-[#201D18] text-[#F7F3EC] hover:bg-[#6B6F4C] disabled:bg-[#6B6F4C] transition-colors duration-300"
                aria-label="Subscribe"
                style={{ minWidth: 36, minHeight: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {subscribed ? <Check size={16} /> : <ArrowRight size={16} />}
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-[#6B6F4C] mt-3 font-sans font-medium">
                Thank you for subscribing to our journal.
              </p>
            )}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-[#D8CBB8]/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-sans text-xs text-[#78716C]/80">
            &copy; {currentYear} Refuge Decor & Designs LLC. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-[#78716C]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#6B6F4C] transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#6B6F4C] transition-colors duration-300"
              aria-label="Pinterest"
            >
              <Globe size={18} className="stroke-[1.5]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
