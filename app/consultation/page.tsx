import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationForm from "./ConsultationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Consultation | Refuge Decor",
  description: "Schedule a virtual consultation with Refuge Decor & Designs to discuss your interior design or staging project.",
};

export default function ConsultationPage() {
  return (
    <div className="relative min-h-screen bg-[#F7F3EC] text-[#201D18]">
      <Navbar />
      <main className="container-custom py-24">
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
}
