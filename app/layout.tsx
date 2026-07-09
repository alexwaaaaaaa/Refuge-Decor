import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
        className={`${fraunces.variable} ${inter.variable} bg-[#F7F3EC] text-[#201D18] font-sans antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
