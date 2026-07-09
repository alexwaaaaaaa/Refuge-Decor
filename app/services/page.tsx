import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Full-service interior design, home staging, and West Texas ranch aesthetic services. From concept to completion, we create spaces that feel like home.",
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#F7F3EC] text-[#201D18]">
      <Navbar />
      <main className="container-custom py-24">
        <h1 className="font-serif text-5xl md:text-6xl mb-8">Our Services</h1>
        <p className="text-xl text-muted-text max-w-3xl mb-16">
          Full-service interior design, home staging, and West Texas ranch aesthetic services.
          From concept to completion, we create spaces that feel like home.
        </p>
        <Services />
      </main>
      <Footer />
    </div>
  );
}
