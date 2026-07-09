import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description: "View our portfolio of luxury interior design projects, including residential, ranch, and staging projects throughout West Texas.",
};

export default function WorkPage() {
  return (
    <div className="relative min-h-screen bg-[#F7F3EC] text-[#201D18]">
      <Navbar />
      <main>
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
