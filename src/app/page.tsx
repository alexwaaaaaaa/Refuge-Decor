import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import HorizonDivider from "@/components/HorizonDivider";
import Services from "@/components/Services";
import ScrollVideoReveal from "@/components/ScrollVideoReveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FAF5F2] text-[#1C1C1C]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Section Divider - Signature West Texas Horizon */}
      <HorizonDivider />

      {/* About / Philosophy Section */}
      <Philosophy />

      {/* Services Section */}
      <Services />

      {/* Section Divider - Signature West Texas Horizon flipped for variety */}
      <HorizonDivider flip />

      {/* Scroll-Scrubbed Video Reveal */}
      <ScrollVideoReveal
        videoSrc="/videos/walkthrough-loop.mp4"
        overlayText={[
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
        ]}
      />

      {/* Second Scroll-Scrubbed Video — Texture Macro */}
      <ScrollVideoReveal
        videoSrc="/videos/texture-macro-loop.mp4"
        overlayText={[
          {
            eyebrow: "MATERIALITY",
            heading: "Close enough to touch.",
          },
          {
            eyebrow: "CRAFT",
            heading: "Every texture, a story.",
          },
          {
            eyebrow: "EXPLORE",
            heading: "Feel the details.",
            cta: "View Our Process",
          },
        ]}
      />

      {/* Before/After Interactive Comparison */}
      <BeforeAfterSlider />

      {/* Portfolio Masonry Gallery */}
      <Portfolio />

      {/* Section Divider - Signature West Texas Horizon */}
      <HorizonDivider />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Contact Form & Studio Details */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
