import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import HorizonDivider from "@/components/HorizonDivider";
import Services from "@/components/Services";
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
