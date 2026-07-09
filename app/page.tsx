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
    <div className="relative min-h-screen bg-[#F7F3EC] text-[#201D18]">
      <Navbar />
      <Hero />
      <HorizonDivider />
      <Philosophy />
      <Services />
      <HorizonDivider flip />
      <BeforeAfterSlider />
      <Portfolio />
      <HorizonDivider />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
