import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Refuge Decor & Designs, our philosophy, our story, and our approach to luxury interior design with West Texas authenticity.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#F7F3EC] text-[#201D18]">
      <Navbar />
      <main className="container-custom py-24">
        <h1 className="font-serif text-5xl md:text-6xl mb-8">About Refuge Decor</h1>
        <p className="text-xl text-muted-text max-w-3xl mb-12">
          Our philosophy, our story, and our approach to luxury interior design with West Texas authenticity.
        </p>
        <div className="prose prose-lg max-w-none">
          <section className="mb-16">
            <h2 className="font-serif text-3xl mb-4">Our Philosophy</h2>
            <p className="text-muted-text">
              We believe that great design should feel like home—warm, quiet, organic, architectural, and timeless.
              Our approach honors the West Texas landscape and ranch aesthetic while creating spaces that function beautifully for modern living.
            </p>
          </section>
          <section className="mb-16">
            <h2 className="font-serif text-3xl mb-4">Our Story</h2>
            <p className="text-muted-text">
              Founded with a deep appreciation for West Texas architecture and landscape, Refuge Decor & Designs brings
              a unique perspective to luxury interior design. We specialize in ranch renovations, home staging, and
              full-service interior design that honors tradition while embracing contemporary comfort.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl mb-4">Our Process</h2>
            <p className="text-muted-text">
              Every project begins with understanding your lifestyle, aspirations, and the unique character of your space.
              We develop custom design plans, select materials and furnishings, manage contractors, and oversee installation
              to ensure every detail reflects your vision.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
