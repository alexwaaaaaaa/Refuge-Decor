"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface OverlayText {
  eyebrow: string;
  heading: string;
  body?: string;
  cta?: string;
}

interface ScrollVideoRevealProps {
  videoSrc: string;
  aspectRatio?: "16/9";
  overlayText?: OverlayText[];
}

// Helper to compute text overlay opacity ranges for a given segment index
function getOpacityRange(
  idx: number,
  total: number
): { input: number[]; output: number[] } {
  const segmentSize = 1 / total;
  const segmentStart = idx * segmentSize;
  const segmentEnd = segmentStart + segmentSize;
  const fadeInEnd = segmentStart + segmentSize * 0.15;
  const fadeOutStart = segmentEnd - segmentSize * 0.15;
  return {
    input: [segmentStart, fadeInEnd, fadeOutStart, segmentEnd],
    output: [0, 1, 1, 0],
  };
}

/**
 * ScrollVideoReveal — Apple.com-style scroll-scrubbed video section.
 *
 * IMPORTANT PERFORMANCE NOTE:
 * For smooth scrubbing, the source video should be re-encoded with:
 *   - H.264 codec
 *   - Keyframe interval of ~1 frame (or as close as file size allows)
 *   - Reasonable bitrate for web delivery
 *
 * Without dense keyframes, seeks will visibly jump between keyframes
 * instead of scrubbing smoothly.
 */
export default function ScrollVideoReveal({
  videoSrc,
  aspectRatio = "16/9",
  overlayText = [
    {
      eyebrow: "THE PROCESS",
      heading: "Every Room, Considered.",
    },
    {
      eyebrow: "MATERIALITY",
      heading: "Texture, restraint, and the warmth of real things.",
    },
    {
      eyebrow: "SEE MORE",
      heading: "Explore the full portfolio.",
      cta: "See the Full Portfolio",
    },
  ],
}: ScrollVideoRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Track video duration once metadata loads
  const [videoDuration, setVideoDuration] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Track mount for SSR-safe client-only logic
  useEffect(() => {
    setMounted(true);
  }, []);

  // Detect reduced motion preference (client-only)
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mql.matches);

    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Detect mobile viewport (below md breakpoint = 768px)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Determine scrub mode: only on desktop with no reduced-motion preference
  const useScrubMode = mounted && !isReducedMotion && !isMobile;

  // Scroll tracking — only active when scrub mode is enabled
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: useScrubMode ? ["start start", "end end"] : undefined,
  });

  // Map scroll progress to video time
  const scrubTime = useTransform(
    scrollYProgress,
    [0, 1],
    [0, videoDuration || 10]
  );

  // Ken Burns zoom effect — subtle scale from 100% to 115% over scroll
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Pause video on mount (we drive playback manually in scrub mode)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      setVideoDuration(video.duration);
      setIsVideoLoaded(true);
      video.pause();
    };

    const handleError = () => {
      setVideoError(true);
      setIsVideoLoaded(false);
    };

    video.addEventListener("loadedmetadata", handleLoaded);
    video.addEventListener("error", handleError);

    // If metadata already loaded (cached), handle it
    if (video.readyState >= 1) {
      handleLoaded();
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
      video.removeEventListener("error", handleError);
    };
  }, [videoSrc]);

  // Scrub video currentTime on scroll — wrapped in rAF for smooth updates
  useMotionValueEvent(scrubTime, "change", (latest) => {
    const video = videoRef.current;
    if (!video || !useScrubMode || videoDuration === 0) return;

    requestAnimationFrame(() => {
      video.currentTime = latest;
    });
  });

  // Fallback: autoplay + loop for reduced motion / mobile
  useEffect(() => {
    if (useScrubMode) return;
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {
      // Autoplay blocked by browser — silent fallback
    });
  }, [useScrubMode]);

  // Cleanup video on unmount
  useEffect(() => {
    const video = videoRef.current;
    return () => {
      if (video) {
        video.pause();
        video.removeAttribute("src");
        video.load();
      }
    };
  }, []);

  // Build text overlay opacity transforms (called unconditionally, not in map)
  const overlay0 = useTransform(
    scrollYProgress,
    getOpacityRange(0, overlayText.length).input,
    getOpacityRange(0, overlayText.length).output
  );
  const overlay1 = useTransform(
    scrollYProgress,
    getOpacityRange(1, overlayText.length).input,
    getOpacityRange(1, overlayText.length).output
  );
  const overlay2 = useTransform(
    scrollYProgress,
    getOpacityRange(2, overlayText.length).input,
    getOpacityRange(2, overlayText.length).output
  );
  const overlayTransforms = [overlay0, overlay1, overlay2];

  return (
    <section
      ref={containerRef}
      className="relative bg-[#201D18]"
      style={{ height: useScrubMode ? "300vh" : "auto" }}
    >
      {/* Sticky video container — pinned while outer section scrolls */}
      <div
        className={
          useScrubMode
            ? "sticky top-0 h-screen w-full overflow-hidden"
            : "relative w-full overflow-hidden"
        }
        style={useScrubMode ? { aspectRatio } : undefined}
      >
        {/* Loading spinner */}
        {!isVideoLoaded && !videoError && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#201D18]">
            <div className="w-10 h-10 border-2 border-[#F7F3EC]/20 border-t-[#F7F3EC] rounded-full animate-spin" />
          </div>
        )}

        {/* Fallback image when video fails to load */}
        {videoError && (
          <Image
            src="/images/hero_ranch_living_room.png"
            alt="Interior design walkthrough"
            className="absolute inset-0 w-full h-full object-cover"
            fill
            sizes="100vw"
          />
        )}

        {/* Video with Ken Burns zoom */}
        {!videoError && (
          <motion.video
            ref={videoRef}
            src={videoSrc}
            muted
            playsInline
            preload="auto"
            loop={!useScrubMode}
            autoPlay={!useScrubMode}
            className="absolute inset-0 w-full h-full object-cover origin-center"
            style={{ scale: useScrubMode ? videoScale : 1 }}
            aria-label="Scroll-driven video walkthrough of staged interior spaces"
          />
        )}

        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* Text overlays */}
        {overlayText.map((text, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
            style={{ opacity: overlayTransforms[idx] }}
          >
            {text.eyebrow && (
              <span className="eyebrow text-[#D8CBB8] mb-4 block">
                {text.eyebrow}
              </span>
            )}
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F7F3EC] font-normal leading-tight max-w-3xl">
              {text.heading}
            </h2>
            {text.body && (
              <p className="font-sans font-light text-[#D8CBB8] mt-6 text-base md:text-lg max-w-xl">
                {text.body}
              </p>
            )}
            {text.cta && (
              <Link
                href="#portfolio"
                className="mt-8 pointer-events-auto inline-flex items-center gap-2 px-6 py-3 border border-[#F7F3EC]/30 rounded-full text-[#F7F3EC] font-sans font-semibold text-xs uppercase tracking-wider hover:bg-[#F7F3EC]/10 transition-colors"
              >
                {text.cta}
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
