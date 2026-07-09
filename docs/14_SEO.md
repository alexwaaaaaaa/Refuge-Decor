# SEO: Refuge Decor & Designs LLC

## Metadata

### Page Metadata Strategy
- **Unique Titles**: Unique title tags for each page
- **Unique Descriptions**: Unique meta descriptions for each page
- **Optimized Length**: Titles 50-60 characters, descriptions 150-160 characters
- **Keywords**: Include primary keywords naturally
- **Brand Name**: Include brand name in titles

### Metadata Implementation
```typescript
// app/layout.tsx (Root metadata)
export const metadata: Metadata = {
  title: {
    default: 'Refuge Decor & Designs | Luxury Interior Design West Texas',
    template: '%s | Refuge Decor & Designs'
  },
  description: 'Luxury interior design and home staging with West Texas soul. We create spaces that feel like home—warm, quiet, organic, architectural, and timeless.',
  keywords: ['luxury interior design', 'West Texas', 'home staging', 'ranch aesthetic', 'interior designer Texas'],
};

// app/page.tsx (Page-specific metadata)
export const metadata: Metadata = {
  title: 'Home',
  description: 'Luxury interior design and home staging with West Texas soul. We create spaces that feel like home—warm, quiet, organic, architectural, and timeless.',
};
```

### Metadata Requirements
- **Title**: 50-60 characters, unique per page
- **Description**: 150-160 characters, unique per page
- **Keywords**: 5-10 relevant keywords
- **Brand**: Include brand name in titles

## OpenGraph

### OpenGraph Strategy
- **OG Title**: Optimized for social sharing
- **OG Description**: Compelling description for social sharing
- **OG Image**: High-quality image for social sharing (1200x630)
- **OG Type**: Website type
- **OG URL**: Canonical URL

### OpenGraph Implementation
```typescript
export const metadata: Metadata = {
  openGraph: {
    title: 'Refuge Decor & Designs | Luxury Interior Design West Texas',
    description: 'Luxury interior design and home staging with West Texas soul.',
    url: 'https://refugedecor.com',
    siteName: 'Refuge Decor & Designs',
    images: [
      {
        url: 'https://refugedecor.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Refuge Decor & Designs - Luxury Interior Design',
      },
    ],
    type: 'website',
  },
};
```

### OpenGraph Requirements
- **Title**: 50-60 characters
- **Description**: 150-160 characters
- **Image**: 1200x630 pixels, < 5MB
- **URL**: Canonical URL
- **Type**: Website

## Twitter

### Twitter Card Strategy
- **Card Type**: Large card with image
- **Title**: Optimized for Twitter sharing
- **Description**: Compelling description for Twitter
- **Image**: High-quality image (1200x630)
- **URL**: Canonical URL

### Twitter Card Implementation
```typescript
export const metadata: Metadata = {
  twitter: {
    card: 'summary_large_image',
    title: 'Refuge Decor & Designs | Luxury Interior Design West Texas',
    description: 'Luxury interior design and home staging with West Texas soul.',
    images: ['https://refugedecor.com/images/og-image.jpg'],
  },
};
```

### Twitter Card Requirements
- **Card Type**: summary_large_image
- **Title**: 50-60 characters
- **Description**: 150-160 characters
- **Image**: 1200x630 pixels
- **URL**: Canonical URL

## JSON-LD

### JSON-LD Strategy
- **Organization**: Organization schema
- **LocalBusiness**: Local business schema
- **Service**: Service schema
- **Article**: Article schema (for blog posts, future)
- **BreadcrumbList**: Breadcrumb schema

### JSON-LD Implementation
```typescript
// Organization schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Refuge Decor & Designs LLC',
  url: 'https://refugedecor.com',
  logo: 'https://refugedecor.com/images/logo.png',
  description: 'Luxury interior design and home staging with West Texas soul.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[Address]',
    addressLocality: '[City]',
    addressRegion: 'TX',
    postalCode: '[Zip]',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '[Phone]',
    contactType: 'customer service',
  },
  sameAs: [
    'https://instagram.com/refugedecor',
    'https://linkedin.com/company/refugedecor',
  ],
};

// Local business schema
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Refuge Decor & Designs LLC',
  image: 'https://refugedecor.com/images/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[Address]',
    addressLocality: '[City]',
    addressRegion: 'TX',
    postalCode: '[Zip]',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '[Latitude]',
    longitude: '[Longitude]',
  },
  url: 'https://refugedecor.com',
  telephone: '[Phone]',
  priceRange: '$$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
};

// Service schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Interior Design Services',
  description: 'Full-service interior design, home staging, and West Texas ranch aesthetic services.',
  provider: {
    '@type': 'Organization',
    name: 'Refuge Decor & Designs LLC',
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: '[Latitude]',
      longitude: '[Longitude]',
    },
    geoRadius: '100000',
  },
};

// Breadcrumb schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://refugedecor.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Work',
      item: 'https://refugedecor.com/work',
    },
  ],
};
```

### JSON-LD Requirements
- **Organization**: Complete organization schema
- **LocalBusiness**: Complete local business schema
- **Service**: Service schema for each service
- **Breadcrumb**: Breadcrumb schema for each page
- **Validation**: Validate JSON-LD with Google's Structured Data Testing Tool

## Schema

### Schema Strategy
- **Structured Data**: Use structured data for rich snippets
- **Validation**: Validate all structured data
- **Relevance**: Use relevant schema types
- **Completeness**: Complete all required fields
- **Accuracy**: Ensure accurate information

### Schema Types
- **Organization**: Organization information
- **LocalBusiness**: Local business information
- **Service**: Service information
- **Article**: Article information (future blog)
- **BreadcrumbList**: Breadcrumb information

## Robots

### Robots.txt Strategy
- **Allow**: Allow all bots
- **Sitemap**: Include sitemap URL
- **Disallow**: Disallow admin and private areas
- **Crawl-Delay**: No crawl delay (allow efficient crawling)

### Robots.txt Implementation
```typescript
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://refugedecor.com/sitemap.xml',
  };
}
```

### Robots.txt Requirements
- **Allow**: Allow all pages
- **Disallow**: Disallow private areas
- **Sitemap**: Include sitemap URL
- **User-Agent**: Apply to all bots

## Sitemap

### Sitemap Strategy
- **XML Sitemap**: XML sitemap for all pages
- **Dynamic Sitemap**: Dynamic sitemap generated by Next.js
- **Priority**: Prioritize important pages
- **Frequency**: Set appropriate change frequencies
- **Submission**: Submit to Google Search Console

### Sitemap Implementation
```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://refugedecor.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
```

### Sitemap Requirements
- **URLs**: All important pages
- **Last Modified**: Accurate last modified dates
- **Change Frequency**: Appropriate change frequencies
- **Priority**: Appropriate priorities
- **Validation**: Validate sitemap with Google Search Console

## Canonical

### Canonical Strategy
- **Self-Referencing**: Canonical URLs self-referencing
- **Consistent**: Consistent canonical URLs
- **Parameters**: Handle URL parameters correctly
- **HTTPS**: Use HTTPS for canonical URLs
- **WWW**: Decide on www or non-www

### Canonical Implementation
```typescript
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://refugedecor.com',
  },
};
```

### Canonical Requirements
- **Self-Referencing**: Canonical URL points to itself
- **Consistent**: Consistent across all pages
- **HTTPS**: Use HTTPS
- **No Parameters**: No unnecessary parameters

## Structured Data

### Structured Data Strategy
- **JSON-LD**: Use JSON-LD format
- **Validation**: Validate with Google's Structured Data Testing Tool
- **Relevance**: Use relevant structured data
- **Completeness**: Complete all required fields
- **Testing**: Use Google Search Console to monitor

### Structured Data Types
- **Organization**: Organization information
- **LocalBusiness**: Local business information
- **Service**: Service information
- **BreadcrumbList**: Breadcrumb information
- **Article**: Article information (future)

## Local SEO

### Local SEO Strategy
- **Google Business Profile**: Complete Google Business Profile
- **NAP Consistency**: Consistent Name, Address, Phone across web
- **Local Keywords**: Target local keywords
- **Local Content**: Create local content
- **Local Links**: Get local backlinks

### Local SEO Implementation
- **Google Business Profile**: Claim and complete profile
- **NAP**: Ensure consistent NAP across all directories
- **Local Keywords**: Target "luxury interior design West Texas", "home staging Marfa", etc.
- **Local Content**: Create content about West Texas design
- **Local Links**: Get links from local businesses

### Local SEO Requirements
- **Google Business Profile**: Complete and verified
- **NAP Consistency**: Consistent across all platforms
- **Local Keywords**: Target relevant local keywords
- **Reviews**: Encourage customer reviews
- **Local Citations**: List in local directories

## Performance SEO

### Performance SEO Strategy
- **Page Speed**: Fast page load times
- **Mobile-Friendly**: Mobile-friendly design
- **Core Web Vitals**: Meet Core Web Vitals thresholds
- **HTTPS**: Use HTTPS
- **Structured Data**: Use structured data

### Performance SEO Implementation
- **Page Speed**: Optimize images, minify CSS/JS, use CDN
- **Mobile-Friendly**: Responsive design, mobile-first approach
- **Core Web Vitals**: Monitor and optimize Core Web Vitals
- **HTTPS**: Use HTTPS for all pages
- **Structured Data**: Implement structured data

### Performance SEO Requirements
- **Page Speed**: < 2 seconds load time
- **Mobile-Friendly**: Mobile-friendly design
- **Core Web Vitals**: Meet all thresholds
- **HTTPS**: HTTPS for all pages
- **Structured Data**: Valid structured data

## SEO Monitoring

### Monitoring Strategy
- **Google Search Console**: Monitor search performance
- **Analytics**: Monitor organic traffic
- **Rank Tracking**: Track keyword rankings
- **Backlink Monitoring**: Monitor backlinks
- **Technical SEO**: Monitor technical SEO issues

### Monitoring Tools
- **Google Search Console**: Search performance and issues
- **Google Analytics**: Organic traffic and user behavior
- **SEMrush/Ahrefs**: Keyword rankings and backlinks
- **Screaming Frog**: Technical SEO auditing
- **PageSpeed Insights**: Page speed monitoring

### Monitoring Frequency
- **Weekly**: Check Google Search Console
- **Monthly**: Check keyword rankings
- **Monthly**: Check backlinks
- **Quarterly**: Full SEO audit
- **As Needed**: Address issues as they arise

## SEO Best Practices

### Do's
- Create unique, descriptive title tags
- Write compelling meta descriptions
- Use descriptive alt text for images
- Create quality content
- Build quality backlinks

### Don'ts
- Don't keyword stuff
- Don't use duplicate content
- Don't ignore mobile SEO
- Don't neglect technical SEO
- Don't buy backlinks
