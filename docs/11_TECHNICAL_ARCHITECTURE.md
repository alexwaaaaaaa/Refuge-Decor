# Technical Architecture: Refuge Decor & Designs LLC

## Next.js 15

### Version & Configuration
- **Next.js Version**: 15.x (latest stable)
- **React Version**: 18.x (compatible with Next.js 15)
- **Node.js Version**: 18.x LTS or 20.x LTS
- **Package Manager**: npm or pnpm

### Installation
```bash
npx create-next-app@latest refuge-decor
cd refuge-decor
npm install framer-motion three @react-three/fiber @react-three/drei @react-three/postprocessing
npm install -D @types/three
```

## Folder Structure

### App Directory Structure
```
app/
├── layout.tsx              # Root layout
├── page.tsx                # Home page
├── about/
│   ├── page.tsx            # About page
│   └── layout.tsx          # About layout (optional)
├── services/
│   └── page.tsx            # Services page
├── work/
│   ├── page.tsx            # Work page
│   └── [slug]/
│       └── page.tsx        # Individual project page
├── contact/
│   └── page.tsx            # Contact page
├── api/
│   └── contact/
│       └── route.ts        # Contact form API route
├── globals.css             # Global styles
├── robots.ts               # Robots.txt
└── sitemap.ts              # Sitemap.xml
```

### Components Directory Structure
```
components/
├── layout/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   └── Container.tsx       # Container component
├── sections/
│   ├── Hero.tsx            # Hero section
│   ├── Philosophy.tsx      # Philosophy section
│   ├── Services.tsx        # Services section
│   ├── Projects.tsx        # Projects section
│   ├── Testimonials.tsx   # Testimonials section
│   └── Contact.tsx         # Contact section
├── ui/
│   ├── Button.tsx          # Button component
│   ├── Card.tsx            # Card component
│   ├── Input.tsx           # Input component
│   ├── Gallery.tsx         # Gallery component
│   ├── Accordion.tsx       # Accordion component
│   └── Slider.tsx          # Before/after slider
├── motion/
│   ├── FadeIn.tsx          # Fade in animation
│   ├── SlideUp.tsx         # Slide up animation
│   └── ScaleIn.tsx         # Scale in animation
└── three/
    ├── Scene3D.tsx         # 3D scene component
    └── Model3D.tsx         # 3D model component
```

### Lib Directory Structure
```
lib/
├── utils.ts                # Utility functions
├── constants.ts            # Constants (design tokens)
├── types.ts                # TypeScript types
└── data.ts                 # Static data (projects, services)
```

### Public Directory Structure
```
public/
├── images/
│   ├── hero/               # Hero images
│   ├── projects/           # Project images
│   ├── services/           # Service images
│   └── general/            # General images
├── models/                 # 3D models (future)
├── textures/               # 3D textures (future)
└── favicon.ico             # Favicon
```

## Server Components

### Server Component Strategy
- **Default**: All components are Server Components by default
- **Data Fetching**: Server Components handle data fetching
- **SEO**: Server Components handle metadata and SEO
- **Performance**: Server Components reduce client-side JavaScript

### Server Component Examples
```typescript
// app/page.tsx (Server Component)
export default function Home() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <Services />
      <Projects />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}

// app/work/page.tsx (Server Component)
export default function WorkPage() {
  const projects = getProjects(); // Data fetching on server
  return (
    <main>
      <WorkFilter />
      <ProjectGrid projects={projects} />
    </main>
  );
}
```

### When to Use Server Components
- **Static Content**: Content that doesn't change
- **Data Fetching**: Fetching data from APIs or databases
- **SEO**: Pages that need SEO metadata
- **Performance**: Reducing client-side JavaScript
- **Security**: Keeping sensitive logic on server

## Client Components

### Client Component Strategy
- **Interactivity**: Components with user interaction
- **State Management**: Components with React state
- **Browser APIs**: Components using browser APIs
- **Animations**: Components with Framer Motion
- **3D**: Components with React Three Fiber

### Client Component Examples
```typescript
// components/ui/Button.tsx (Client Component)
'use client';

import { motion } from 'framer-motion';

export function Button({ children, onClick }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

// components/three/Scene3D.tsx (Client Component)
'use client';

import { Canvas } from '@react-three/fiber';

export function Scene3D() {
  return (
    <Canvas>
      <SceneContent />
    </Canvas>
  );
}
```

### When to Use Client Components
- **User Interaction**: Buttons, forms, interactive elements
- **State**: Components with useState, useReducer
- **Effects**: Components with useEffect
- **Browser APIs**: Components using window, document
- **Animations**: Components with Framer Motion
- **3D**: Components with React Three Fiber

### Client Component Optimization
- **Minimize Client Components**: Use only where necessary
- **Component Boundaries**: Keep client components small
- **Props Passing**: Pass data from server to client via props
- **Code Splitting**: Dynamic imports for large client components

## Data Flow

### Data Fetching Strategy
- **Server Components**: Fetch data on server using fetch or API routes
- **Static Data**: Import from lib/data.ts for static content
- **Dynamic Data**: Fetch from API routes or external APIs
- **Caching**: Use Next.js caching for performance

### Data Fetching Examples
```typescript
// Static data import
import { projects } from '@/lib/data';

// Server-side fetch
async function getProjects() {
  const res = await fetch('/api/projects', {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });
  return res.json();
}

// API route (app/api/projects/route.ts)
export async function GET() {
  const projects = await db.projects.findMany();
  return Response.json(projects);
}
```

### State Management Strategy
- **Server State**: Server Components handle server state
- **Client State**: React useState for local component state
- **Form State**: React Hook Form for form state
- **Global State**: React Context for global state (if needed)
- **No Redux**: Avoid Redux unless absolutely necessary

### State Management Examples
```typescript
// Local state
const [isOpen, setIsOpen] = useState(false);

// Form state
import { useForm } from 'react-hook-form';
const { register, handleSubmit } = useForm();

// Context (if needed)
const ThemeContext = createContext<ThemeContextType | null>(null);
```

## Rendering Strategy

### Static Rendering
- **Default**: Static rendering for all pages
- **Build Time**: Pages built at build time
- **Performance**: Fast page loads, no server processing
- **SEO**: Excellent SEO, content available at build time

### Dynamic Rendering
- **Dynamic Routes**: [slug] routes for dynamic content
- **ISR**: Incremental Static Regeneration for periodic updates
- **SSR**: Server-Side Rendering for real-time data (if needed)

### Rendering Strategy Examples
```typescript
// Static rendering (default)
export default function Page() {
  return <div>Static content</div>;
}

// Dynamic rendering with ISR
export const revalidate = 3600; // Revalidate every hour

export default function DynamicPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  return <div>{project.title}</div>;
}
```

## Suspense Boundaries

### Suspense Strategy
- **Loading States**: Use Suspense for loading states
- **Code Splitting**: Use Suspense for dynamic imports
- **Data Fetching**: Use Suspense for async components
- **3D Loading**: Use Suspense for 3D model loading

### Suspense Examples
```typescript
import { Suspense } from 'react';

// Loading fallback
<Suspense fallback={<LoadingSpinner />}>
  <AsyncComponent />
</Suspense>

// Dynamic import with Suspense
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSpinner />,
});

// 3D scene with Suspense
<Suspense fallback={<LoadingSpinner />}>
  <Scene3D />
</Suspense>
```

## Loading UI

### Loading States
- **Global Loading**: app/loading.tsx for global loading state
- **Route Loading**: Suspense boundaries for route segments
- **Component Loading**: Suspense boundaries for async components
- **Image Loading**: Image component with loading states

### Loading UI Examples
```typescript
// app/loading.tsx (Global loading)
export default function Loading() {
  return <LoadingSpinner />;
}

// Component loading
<Suspense fallback={<CardSkeleton />}>
  <ProjectCard project={project} />
</Suspense>

// Image loading
<Image
  src="/images/project.jpg"
  alt="Project"
  loading="lazy"
  placeholder="blur"
/>
```

## Error Boundaries

### Error Handling Strategy
- **Global Error**: app/error.tsx for global error handling
- **Route Error**: error.tsx for route-level error handling
- **Component Error**: Error boundaries for component-level errors
- **API Errors**: Try-catch in API routes

### Error Boundary Examples
```typescript
// app/error.tsx (Global error)
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}

// Component error boundary
import { ErrorBoundary } from 'react-error-boundary';

<ErrorBoundary fallback={<ErrorFallback />}>
  <Component />
</ErrorBoundary>
```

## TypeScript Rules

### TypeScript Configuration
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### TypeScript Best Practices
- **Strict Mode**: Enable strict mode for type safety
- **No Any**: Avoid using `any` type
- **Explicit Types**: Explicitly type function parameters and return types
- **Interfaces**: Use interfaces for object shapes
- **Types**: Use types for unions, intersections, primitives
- **Generics**: Use generics for reusable components

### TypeScript Examples
```typescript
// Interface for props
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
}

// Type for data
type Project = {
  id: string;
  title: string;
  location: string;
  type: 'residential' | 'ranch' | 'staging';
  images: string[];
};

// Generic component
function Card<T>({ data }: { data: T }) {
  return <div>{JSON.stringify(data)}</div>;
}
```

## Hooks

### Custom Hooks
- **useScrollAnimation**: Hook for scroll-triggered animations
- **useMediaQuery**: Hook for responsive breakpoints
- **useLocalStorage**: Hook for local storage
- **useFormValidation**: Hook for form validation

### Custom Hook Examples
```typescript
// useScrollAnimation
export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// useMediaQuery
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}
```

## Utilities

### Utility Functions
- **cn**: Class name utility (clsx + tailwind-merge)
- **formatDate**: Date formatting utility
- **slugify**: URL slug generation
- **truncate**: Text truncation

### Utility Examples
```typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}
```

## Naming Conventions

### File Naming
- **Components**: PascalCase (Button.tsx, Navbar.tsx)
- **Utilities**: camelCase (utils.ts, formatDate.ts)
- **Types**: camelCase (types.ts, projectTypes.ts)
- **Constants**: camelCase (constants.ts, designTokens.ts)
- **Hooks**: camelCase with 'use' prefix (useScrollAnimation.ts)

### Variable Naming
- **Components**: PascalCase (Button, Navbar)
- **Functions**: camelCase (formatDate, slugify)
- **Constants**: UPPER_SNAKE_CASE (API_URL, MAX_ITEMS)
- **Types/Interfaces**: PascalCase (Project, ButtonProps)
- **Booleans**: camelCase with 'is' prefix (isVisible, isLoading)

### Imports
- **Absolute Imports**: Use @/ alias for internal imports
- **External Imports**: Group external imports together
- **Type Imports**: Use `import type` for type-only imports
- **Order**: External imports → Internal imports → Type imports

### Import Examples
```typescript
// External imports
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Internal imports
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

// Type imports
import type { Project } from '@/lib/types';
```

## Project Structure

### Root Level Files
```
/
├── app/                    # Next.js app directory
├── components/             # React components
├── lib/                    # Utility functions and types
├── public/                 # Static assets
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore file
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

### Configuration Files
- **next.config.ts**: Next.js configuration
- **tailwind.config.ts**: Tailwind CSS configuration
- **tsconfig.json**: TypeScript configuration
- **.eslintrc.json**: ESLint configuration
- **postcss.config.mjs**: PostCSS configuration

### Environment Variables
- **.env.local**: Local environment variables
- **.env.production**: Production environment variables
- **.env.example**: Example environment variables

### Environment Variable Examples
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=hello@refugedecor.com

# .env.production
NEXT_PUBLIC_SITE_URL=https://refugedecor.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@refugedecor.com
```

## Performance Considerations

### Code Splitting
- **Dynamic Imports**: Use dynamic() for large components
- **Route Splitting**: Automatic route-based code splitting
- **Component Splitting**: Split components by feature
- **Vendor Splitting**: Separate vendor bundles

### Tree Shaking
- **Unused Code**: Remove unused code automatically
- **Import Optimization**: Import only what you need
- **Bundle Analysis**: Analyze bundle size regularly

### Caching Strategy
- **Static Assets**: Cache static assets with long TTL
- **API Responses**: Cache API responses with appropriate TTL
- **Build Cache**: Use Next.js build cache
- **CDN**: Use CDN for static assets

## Security Considerations

### Security Best Practices
- **Environment Variables**: Never expose secrets in client code
- **API Routes**: Validate and sanitize all inputs
- **CSRF Protection**: Use CSRF tokens for forms
- **XSS Protection**: Sanitize user-generated content
- **HTTPS**: Always use HTTPS in production

### Security Examples
```typescript
// API route validation
export async function POST(request: Request) {
  const body = await request.json();
  const { email, message } = contactSchema.parse(body); // Zod validation
  // Process validated data
}

// Environment variables (server-side only)
const API_KEY = process.env.API_KEY; // Not exposed to client
```

## Monitoring & Analytics

### Monitoring Strategy
- **Error Tracking**: Use error tracking service (Sentry)
- **Performance Monitoring**: Use performance monitoring (Vercel Analytics)
- **User Analytics**: Use analytics (Google Analytics or Plausible)
- **Uptime Monitoring**: Use uptime monitoring service

### Monitoring Implementation
```typescript
// Error tracking
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

// Analytics
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```
