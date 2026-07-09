# Performance: Refuge Decor & Designs LLC

## Performance Budget

### Budget Targets
- **Total Page Size**: < 1MB compressed
- **JavaScript Bundle**: < 200KB compressed
- **CSS Bundle**: < 50KB compressed
- **Image Size**: < 500KB per image (WebP)
- **Font Size**: < 100KB per font family
- **Initial Load**: < 2 seconds on 4G
- **Time to Interactive**: < 3 seconds on 4G

### Budget Breakdown
- **HTML**: < 20KB
- **CSS**: < 50KB
- **JavaScript**: < 200KB
- **Images**: < 500KB (critical), < 1MB (total)
- **Fonts**: < 100KB
- **Other**: < 130KB

## Core Web Vitals

### LCP (Largest Contentful Paint)
- **Target**: < 2.5 seconds
- **Measurement**: Largest image or text block visible in viewport
- **Optimization**: Optimize hero image, preload critical resources
- **Monitoring**: Track LCP for each page

### FID (First Input Delay)
- **Target**: < 100 milliseconds
- **Measurement**: Time from first user interaction to response
- **Optimization**: Minimize JavaScript execution, use code splitting
- **Monitoring**: Track FID for interactive elements

### CLS (Cumulative Layout Shift)
- **Target**: < 0.1
- **Measurement**: Unexpected layout shifts during page load
- **Optimization**: Reserve space for images and dynamic content
- **Monitoring**: Track CLS for each page

### Other Metrics
- **FCP (First Contentful Paint)**: < 1.8 seconds
- **TTFB (Time to First Byte)**: < 600 milliseconds
- **SI (Speed Index)**: < 3.4 seconds

## Image Optimization

### Image Format Strategy
- **Primary Format**: WebP (modern, efficient)
- **Fallback Format**: JPEG (compatibility)
- **Future Format**: AVIF (when browser support improves)
- **SVG**: Icons and simple graphics

### Image Optimization Techniques
- **Compression**: Compress images to target file size
- **Responsive Images**: Serve appropriately sized images
- **Lazy Loading**: Load images as they enter viewport
- **Progressive Loading**: Load low-res first, then high-res
- **CDN**: Serve images from CDN

### Image Optimization Implementation
```typescript
// Next.js Image component
import Image from 'next/image';

<Image
  src="/images/project.jpg"
  alt="Project description"
  width={1200}
  height={800}
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Image Sizing Strategy
- **Hero Images**: 1920x1080 (desktop), 768x1024 (mobile)
- **Project Images**: 1200x800 (desktop), 600x400 (mobile)
- **Thumbnail Images**: 400x300 (all devices)
- **Detail Images**: 800x600 (all devices)

### Image Quality Settings
- **WebP Quality**: 80-85%
- **JPEG Quality**: 80-85%
- **Compression**: Aggressive compression for thumbnails
- **Progressive**: Enable progressive JPEGs

## Video Optimization

### Video Strategy
- **Format**: MP4 (H.264) for compatibility
- **Alternative Format**: WebM (VP9) for better compression
- **Resolution**: 1080p maximum, 720p for mobile
- **Bitrate**: 5 Mbps for 1080p, 2.5 Mbps for 720p

### Video Optimization Techniques
- **Compression**: Compress videos to target bitrate
- **Lazy Loading**: Load videos only when needed
- **Autoplay**: Disable autoplay (respect user preferences)
- **Muted**: Mute autoplaying videos
- **Poster**: Use poster image for video placeholder

### Video Optimization Implementation
```typescript
// Video component with lazy loading
import { useRef, useEffect, useState } from 'react';

export function Video({ src, poster }: { src: string; poster: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
        }
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={isLoaded ? src : undefined}
      poster={poster}
      controls
      preload="none"
    />
  );
}
```

## Font Optimization

### Font Strategy
- **Font Format**: WOFF2 (modern, efficient)
- **Fallback Format**: WOFF (compatibility)
- **Font Loading**: Font display: swap
- **Font Subsetting**: Subset fonts to include only needed characters

### Font Optimization Techniques
- **Self-Hosting**: Host fonts locally (avoid external requests)
- **Preloading**: Preload critical fonts
- **Subsetting**: Subset fonts to reduce file size
- **Variable Fonts**: Use variable fonts when possible
- **Font Display**: Use font-display: swap

### Font Optimization Implementation
```typescript
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/playfair-display.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

// globals.css
@font-face {
  font-family: 'Playfair Display';
  src: url('/fonts/playfair-display.woff2') format('woff2');
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter.woff2') format('woff2');
  font-display: swap;
}
```

### Font File Size Targets
- **Playfair Display**: < 50KB (subsetted)
- **Inter**: < 30KB (subsetted)
- **Total Fonts**: < 100KB

## Lazy Loading

### Lazy Loading Strategy
- **Images**: Lazy load below-fold images
- **Videos**: Lazy load all videos
- **Components**: Lazy load heavy components
- **Routes**: Lazy load less important routes

### Lazy Loading Implementation
```typescript
// Image lazy loading (Next.js Image component)
<Image
  src="/images/project.jpg"
  alt="Project"
  loading="lazy"
/>

// Component lazy loading
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSkeleton />,
});

// Route lazy loading (automatic with Next.js)
// Next.js automatically code-splits routes
```

### Lazy Loading Triggers
- **Images**: Intersection Observer (threshold: 0.25)
- **Components**: Intersection Observer (threshold: 0.1)
- **Videos**: Intersection Observer (threshold: 0.25)

## Code Splitting

### Code Splitting Strategy
- **Route Splitting**: Automatic with Next.js
- **Component Splitting**: Dynamic imports for heavy components
- **Vendor Splitting**: Separate vendor bundles
- **Feature Splitting**: Split by feature, not by file

### Code Splitting Implementation
```typescript
// Dynamic import for heavy components
const Gallery = dynamic(() => import('@/components/ui/Gallery'), {
  loading: () => <GallerySkeleton />,
});

const Scene3D = dynamic(() => import('@/components/three/Scene3D'), {
  loading: () => <LoadingSpinner />,
  ssr: false, // Client-side only
});

// Dynamic import for routes (automatic with Next.js)
// Next.js automatically code-splits by route
```

### Code Splitting Benefits
- **Reduced Initial Bundle**: Smaller initial JavaScript payload
- **Faster Load Times**: Faster page load and time to interactive
- **Better Caching**: Better cache hit rates for unchanged code
- **On-Demand Loading**: Load code only when needed

## Dynamic Imports

### Dynamic Import Strategy
- **Heavy Components**: Dynamic import for components > 50KB
- **3D Components**: Dynamic import for 3D components
- **Admin Components**: Dynamic import for admin features
- **Optional Features**: Dynamic import for optional features

### Dynamic Import Implementation
```typescript
// Dynamic import with loading state
const Component = dynamic(() => import('./Component'), {
  loading: () => <LoadingSpinner />,
  ssr: false, // Client-side only
});

// Dynamic import with error boundary
const Component = dynamic(() => import('./Component'), {
  loading: () => <LoadingSpinner />,
  onError: (error) => <ErrorFallback error={error} />,
});
```

## Bundle Budgets

### Bundle Budget Configuration
```json
{
  "budgets": [
    {
      "type": "initial",
      "maximumWarning": "200kb",
      "maximumError": "300kb"
    },
    {
      "type": "script",
      "maximumWarning": "200kb",
      "maximumError": "300kb"
    },
    {
      "type": "stylesheet",
      "maximumWarning": "50kb",
      "maximumError": "75kb"
    }
  ]
}
```

### Bundle Analysis
- **Tool**: webpack-bundle-analyzer or @next/bundle-analyzer
- **Frequency**: Analyze bundle size weekly
- **Action**: Remove unused dependencies, optimize large bundles
- **Monitoring**: Track bundle size over time

## Three.js Optimization

### 3D Performance Strategy
- **Low Poly Models**: Use low-poly models for performance
- **Texture Compression**: Compress textures for faster loading
- **LOD (Level of Detail)**: Use simpler models at distance
- **Instancing**: Reuse geometry where possible
- **Frustum Culling**: Don't render what's not visible

### Three.js Optimization Implementation
```typescript
// Use instancing for repeated objects
import { InstancedMesh } from '@react-three/drei';

<InstancedMesh
  args={[geometry, material, count]}
  geometry={boxGeometry}
  material={woodMaterial}
/>

// Use LOD for distance-based detail
import { LOD } from '@react-three/drei';

<LOD>
  <mesh geometry={highDetailGeometry} distance={[0, 5]} />
  <mesh geometry={mediumDetailGeometry} distance={[5, 10]} />
  <mesh geometry={lowDetailGeometry} distance={[10, 20]} />
</LOD>
```

### 3D Performance Targets
- **Frame Rate**: 60fps on desktop, 30fps on mobile
- **Draw Calls**: < 100
- **Triangles**: < 100,000
- **Textures**: < 50MB total
- **Load Time**: < 3 seconds

## Memory Usage

### Memory Strategy
- **Image Caching**: Cache images in browser
- **Component Unmounting**: Clean up on component unmount
- **Event Listeners**: Remove event listeners on unmount
- **3D Scene**: Dispose of 3D resources when not needed

### Memory Optimization Implementation
```typescript
// Clean up on unmount
useEffect(() => {
  const handleResize = () => {
    // Handle resize
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

// Dispose of 3D resources
useEffect(() => {
  return () => {
    geometry.dispose();
    material.dispose();
  };
}, [geometry, material]);
```

### Memory Targets
- **Initial Memory**: < 50MB
- **Peak Memory**: < 200MB
- **Memory Growth**: < 10MB per minute

## GPU Optimization

### GPU Strategy
- **GPU Acceleration**: Use CSS transforms and opacity
- **Avoid Layout Thrashing**: Avoid animating layout properties
- **Will Change**: Use will-change sparingly
- **Composite Layers**: Promote elements to composite layers

### GPU Optimization Implementation
```css
/* Good (GPU accelerated) */
.animate {
  transform: translateX(100px);
  opacity: 0.5;
}

/* Bad (CPU intensive) */
.animate {
  width: 100px;
  height: 100px;
}

/* Use will-change sparingly */
.animate {
  will-change: transform;
}
```

### GPU Targets
- **Frame Rate**: 60fps on desktop, 30fps on mobile
- **GPU Memory**: < 100MB
- **Draw Calls**: < 100

## Performance Monitoring

### Monitoring Tools
- **Lighthouse**: Automated performance auditing
- **WebPageTest**: Detailed performance analysis
- **Chrome DevTools**: Real-time performance monitoring
- **Vercel Analytics**: Production performance monitoring

### Monitoring Strategy
- **Development**: Monitor during development
- **Staging**: Monitor before production deployment
- **Production**: Monitor continuously
- **Regression Testing**: Test for performance regressions

### Performance Budget Enforcement
- **CI/CD**: Fail build if budget exceeded
- **Pull Requests**: Check performance in PRs
- **Deployment**: Block deployment if performance degraded
- **Alerts**: Alert if performance degrades in production

## Performance Testing

### Testing Strategy
- **Lighthouse**: Run Lighthouse on all pages
- **WebPageTest**: Run WebPageTest on critical pages
- **Real User Monitoring**: Monitor real user performance
- **Synthetic Monitoring**: Monitor synthetic performance

### Testing Frequency
- **Development**: Test performance during development
- **Pre-Deployment**: Test performance before deployment
- **Post-Deployment**: Test performance after deployment
- **Regular**: Test performance weekly

## Performance Best Practices

### Do's
- Optimize images and videos
- Use code splitting and lazy loading
- Monitor performance regularly
- Test on slow connections
- Use performance budgets

### Don'ts
- Don't ignore performance warnings
- Don't load unnecessary resources
- Don't use large images without optimization
- Don't block the main thread
- Don't forget mobile performance
