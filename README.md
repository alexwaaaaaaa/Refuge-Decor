# Refuge Decor & Designs LLC

Luxury interior design and home staging with West Texas soul. A Next.js 15 website featuring warm minimalism, ranch aesthetic, and modern web technologies.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **3D**: React Three Fiber, Drei, Postprocessing
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Testing**: Jest, React Testing Library, Playwright
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x LTS or 20.x LTS
- npm or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Copy environment variables:

```bash
cp .env.example .env.local
```

4. Update environment variables in `.env.local` with your actual values

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build for production:

```bash
npm run build
```

### Testing

Run unit tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Run E2E tests:

```bash
npm run test:e2e
```

Run E2E tests with UI:

```bash
npm run test:e2e:ui
```

### Linting

Run ESLint:

```bash
npm run lint
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── work/              # Portfolio pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Sitemap
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── Navbar.tsx         # Navigation
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section
│   ├── Philosophy.tsx     # Philosophy section
│   ├── Services.tsx       # Services section
│   ├── Portfolio.tsx      # Portfolio section
│   ├── Testimonials.tsx   # Testimonials section
│   ├── Contact.tsx        # Contact section
│   └── canvas/            # 3D components
├── docs/                  # Documentation (18 phases)
├── public/                # Static assets
├── tests/                 # E2E tests
└── lib/                   # Utility functions
```

## Features

- **Responsive Design**: Mobile-first approach with breakpoints
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO**: Optimized metadata, sitemap, robots.txt, structured data
- **Performance**: Image optimization, code splitting, lazy loading
- **3D Elements**: Interactive 3D scenes with React Three Fiber
- **Animations**: Smooth animations with Framer Motion
- **Reduced Motion**: Respects user motion preferences

## Deployment

### Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Environment Variables

Required environment variables:

- `NEXT_PUBLIC_SITE_URL`: Site URL
- `NEXT_PUBLIC_CONTACT_EMAIL`: Contact email
- `NEXT_PUBLIC_PHONE`: Phone number

Optional environment variables:

- `NEXT_PUBLIC_GA_ID`: Google Analytics ID
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`: Plausible domain
- `SENTRY_DSN`: Sentry DSN for error tracking

## Documentation

Complete documentation is available in the `/docs` directory:

1. 01_PROJECT_BRIEF.md - Project brief and goals
2. 02_COMPETITOR_RESEARCH.md - Competitor analysis
3. 03_BRAND_GUIDELINES.md - Brand guidelines
4. 04_INFORMATION_ARCHITECTURE.md - Sitemap and navigation
5. 05_USER_EXPERIENCE.md - UX wireframes and interactions
6. 06_DESIGN_SYSTEM.md - Design tokens and system
7. 07_COMPONENT_LIBRARY.md - Component specifications
8. 08_MOTION_SYSTEM.md - Animation system
9. 09_3D_SYSTEM.md - 3D architecture
10. 10_CONTENT_STRATEGY.md - Content strategy
11. 11_TECHNICAL_ARCHITECTURE.md - Technical architecture
12. 12_PERFORMANCE.md - Performance optimization
13. 13_ACCESSIBILITY.md - Accessibility compliance
14. 14_SEO.md - SEO strategy
15. 15_TESTING.md - Testing strategy
16. 16_DEPLOYMENT.md - Deployment strategy
17. 17_IMPLEMENTATION_PLAN.md - Implementation milestones
18. 18_FINAL_ACCEPTANCE_CRITERIA.md - Acceptance criteria

## License

Copyright © 2024 Refuge Decor & Designs LLC. All rights reserved.

