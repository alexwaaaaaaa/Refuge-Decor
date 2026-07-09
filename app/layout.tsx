import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import CustomCursor from "@/components/ui/CustomCursor";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

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
  title: {
    default: "Refuge Decor & Designs | Luxury Interior Design West Texas",
    template: "%s | Refuge Decor & Designs"
  },
  description: "Luxury interior design and home staging with West Texas soul. We create spaces that feel like home—warm, quiet, organic, architectural, and timeless.",
  keywords: ["luxury interior design", "West Texas", "home staging", "ranch aesthetic", "interior designer Texas"],
  authors: [{ name: "Refuge Decor & Designs LLC" }],
  creator: "Refuge Decor & Designs LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://refugedecor.com",
    title: "Refuge Decor & Designs | Luxury Interior Design West Texas",
    description: "Luxury interior design and home staging with West Texas soul. We create spaces that feel like home—warm, quiet, organic, architectural, and timeless.",
    siteName: "Refuge Decor & Designs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refuge Decor & Designs | Luxury Interior Design West Texas",
    description: "Luxury interior design and home staging with West Texas soul.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Refuge Decor & Designs LLC',
  url: 'https://refugedecor.com',
  logo: 'https://refugedecor.com/favicon.svg',
  description: 'Luxury interior design and home staging with West Texas soul.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    areaServed: 'West Texas',
  },
  sameAs: [
    'https://instagram.com/refugedecor',
    'https://pinterest.com/refugedecor',
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Refuge Decor & Designs LLC',
  description: 'Luxury interior design and home staging with West Texas soul.',
  url: 'https://refugedecor.com',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  priceRange: '$$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
};

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Refuge Decor & Designs',
  url: 'https://refugedecor.com',
  description: 'Luxury interior design and home staging with West Texas soul.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://refugedecor.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${inter.variable} bg-[#F7F3EC] text-[#201D18] font-sans antialiased overflow-x-hidden`}
      >
        <GoogleAnalytics />
        <CustomCursor />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-[#201D18] focus:text-[#F7F3EC] focus:rounded-lg"
        >
          Skip to main content
        </a>
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
