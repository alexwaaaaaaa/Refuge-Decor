import type { Metadata } from "next";
import { Cinzel, Josefin_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Refuge Decor & Designs LLC | Staging & Interior Design",
  description: "Refuge Decor & Designs LLC is a premier West Texas ranch aesthetic interior design and real estate staging studio. Warm minimalism meets cozy ranch luxury.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${josefin.variable} bg-[#FAF5F2] text-[#1C1C1C] font-sans antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
