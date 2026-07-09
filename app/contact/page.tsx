import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Refuge Decor & Designs to discuss your interior design or home staging project. Schedule a consultation today.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#F7F3EC] text-[#201D18]">
      <Navbar />
      <main className="container-custom py-24">
        <h1 className="font-serif text-5xl md:text-6xl mb-8">Contact Us</h1>
        <p className="text-xl text-muted-text max-w-3xl mb-16">
          Get in touch with Refuge Decor & Designs to discuss your interior design or home staging project.
          Schedule a consultation today.
        </p>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
