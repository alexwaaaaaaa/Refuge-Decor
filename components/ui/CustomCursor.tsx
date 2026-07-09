"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className="fixed top-0 left-0 w-4 h-4 rounded-full bg-[#6B6F4C] pointer-events-none z-50 mix-blend-difference"
            animate={{
              x: mousePosition.x - 8,
              y: mousePosition.y - 8,
              scale: isHovering ? 3 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 28,
            }}
          />
          <motion.div
            className="fixed top-0 left-0 w-12 h-12 rounded-full border border-[#6B6F4C] pointer-events-none z-50 mix-blend-difference"
            animate={{
              x: mousePosition.x - 24,
              y: mousePosition.y - 24,
              scale: isHovering ? 1.5 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
