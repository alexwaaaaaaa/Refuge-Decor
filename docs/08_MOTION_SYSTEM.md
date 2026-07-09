# Motion System: Refuge Decor & Designs LLC

## Global Animation Philosophy

### Core Principles
1. **Purpose-Driven**: Every animation must serve a functional purpose
2. **Subtle**: Motion should be barely noticeable, never distracting
3. **Natural**: Use easing curves that feel physical and organic
4. **Fast**: Keep durations short (200-600ms)
5. **Respectful**: Honor user preferences for reduced motion

### Brand Alignment
- **Warm**: Smooth, organic easing (not mechanical)
- **Quiet**: Subtle motion (not flashy or attention-grabbing)
- **Organic**: Natural easing curves (not linear)
- **Architectural**: Precise, intentional motion (not random)
- **Minimal**: Only animate what's necessary

### Anti-Principles
- No animations without purpose
- No slow or sluggish animations
- No flashy or attention-grabbing effects
- No animations that interfere with usability
- No animations that cause motion sickness

## Motion Principles

### Timing
- **Micro-interactions**: 200-300ms (button hover, link hover)
- **Component transitions**: 300-400ms (card hover, modal open)
- **Page transitions**: 400-600ms (route changes)
- **Scroll animations**: 600ms (fade in on scroll)
- **Loading animations**: 1000-2000ms (initial load)

### Duration Guidelines
- **Too Fast**: < 150ms (feels jarring)
- **Fast**: 150-300ms (micro-interactions)
- **Medium**: 300-500ms (component transitions)
- **Slow**: 500-800ms (page transitions)
- **Too Slow**: > 800ms (feels sluggish)

### Easing Curves
- **Ease-Out**: Fast start, slow end (most common)
- **Ease-In-Out**: Slow start and end (page transitions)
- **Ease-Out-Back**: Slight overshoot (playful, rare use)
- **Linear**: Constant speed (rare, only for loading)

### Recommended Easing
```css
--ease-out: cubic-bezier(0.215, 0.61, 0.355, 1);
--ease-in-out: cubic-bezier(0.645, 0.045, 0.355, 1);
--ease-out-back: cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

## Spring Configuration

### Spring Physics
Using Framer Motion's spring configuration for natural-feeling animations.

### Default Spring
```typescript
const defaultSpring = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
  mass: 1,
};
```

### Gentle Spring
```typescript
const gentleSpring = {
  type: "spring" as const,
  stiffness: 150,
  damping: 20,
  mass: 1,
};
```

### Snappy Spring
```typescript
const snappySpring = {
  type: "spring" as const,
  stiffness: 500,
  damping: 40,
  mass: 0.8,
};
```

### Spring Usage
- **Default Spring**: Most animations (hover, focus, transitions)
- **Gentle Spring**: Subtle animations (fade in, slide up)
- **Snappy Spring**: Quick interactions (button press, toggle)

## Scroll Choreography

### Scroll Animation Strategy
- **Fade In**: Elements fade in when entering viewport
- **Slide Up**: Elements slide up when entering viewport
- **Scale In**: Elements scale up when entering viewport
- **Stagger**: Multiple elements animate in sequence

### Scroll Trigger
- **Threshold**: 10-20% of element visible
- **Root Margin**: -50px (trigger slightly before element enters)
- **Once**: True (animate only once, not on scroll up)

### Scroll Animation Components
```typescript
// Fade in on scroll
<FadeInOnScroll threshold={0.2} once={true}>
  <h2>Section Title</h2>
</FadeInOnScroll>

// Slide up on scroll
<SlideUpOnScroll threshold={0.2} once={true} delay={0}>
  <p>Section content...</p>
</SlideUpOnScroll>

// Stagger children
<StaggerChildren delay={100}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</StaggerChildren>
```

### Scroll Animation Timing
- **First Element**: 0ms delay
- **Second Element**: 100ms delay
- **Third Element**: 200ms delay
- **Fourth Element**: 300ms delay
- **Fifth Element**: 400ms delay

## Shared Animation Utilities

### Animation Variants
```typescript
// Fade variants
const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Slide up variants
const slideUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Scale variants
const scaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

// Stagger variants
const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
```

### Animation Hooks
```typescript
// Use animation on scroll
const useScrollAnimation = () => {
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
};
```

## Reduced Motion Behavior

### Detecting Reduced Motion
```typescript
const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
```

### Reduced Motion Strategy
- **Disable All Animations**: When reduced motion is preferred
- **Instant Transitions**: Replace smooth transitions with instant changes
- **No Parallax**: Disable parallax effects
- **No Auto-Play**: Disable auto-playing carousels or videos
- **Respect Preference**: Always check and respect user preference

### Reduced Motion Implementation
```typescript
const animationConfig = {
  transition: {
    duration: prefersReducedMotion() ? 0 : 0.3,
    ease: prefersReducedMotion() ? 'linear' : 'easeOut',
  },
};
```

## Framer Motion Architecture

### Installation
```bash
npm install framer-motion
```

### Configuration
```typescript
// framer-motion.config.ts
import { MotionConfig } from 'framer-motion';

export const motionConfig = {
  reducedMotion: 'user',
};
```

### Usage Pattern
```typescript
import { motion } from 'framer-motion';

<motion.div
  initial="hidden"
  animate="visible"
  variants={slideUpVariants}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  Content...
</motion.div>
```

### Component Wrappers
```typescript
// FadeIn component
export const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeVariants}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

// SlideUp component
export const SlideUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideUpVariants}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};
```

## Page Transitions

### Transition Strategy
- **Fade Out**: Current page fades out
- **Fade In**: New page fades in
- **Duration**: 400ms total (200ms out, 200ms in)
- **Easing**: Ease-in-out

### Implementation
```typescript
// Page transition component
export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};
```

### Layout Transitions
```typescript
// Layout transition for shared elements
<motion.layout
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
>
  Shared element content...
</motion.layout>
```

## Hover Interactions

### Button Hover
```typescript
const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.3, ease: 'easeOut' },
};
```

### Card Hover
```typescript
const cardHover = {
  y: -4,
  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
  transition: { duration: 0.3, ease: 'easeOut' },
};
```

### Link Hover
```typescript
const linkHover = {
  textDecoration: 'underline',
  transition: { duration: 0.3, ease: 'easeOut' },
};
```

### Image Hover
```typescript
const imageHover = {
  scale: 1.1,
  transition: { duration: 0.3, ease: 'easeOut' },
};
```

## Loading Animations

### Initial Load Animation
```typescript
const loadingAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};
```

### Skeleton Loading
```typescript
const skeletonAnimation = {
  animate: {
    opacity: [0.5, 1, 0.5],
  },
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};
```

### Spinner Animation
```typescript
const spinnerAnimation = {
  animate: {
    rotate: 360,
  },
  transition: {
    duration: 1,
    repeat: Infinity,
    ease: 'linear',
  },
};
```

## Animation Performance

### GPU Acceleration
- Use `transform` and `opacity` for animations (GPU accelerated)
- Avoid animating `width`, `height`, `top`, `left` (CPU intensive)
- Use `will-change` sparingly (only when necessary)
- Test animations on low-end devices

### Performance Optimization
```typescript
// Good (GPU accelerated)
<motion.div
  animate={{ x: 100, opacity: 0.5 }}
  transition={{ duration: 0.3 }}
>
  Content...
</motion.div>

// Bad (CPU intensive)
<motion.div
  animate={{ width: '100%', height: '100%' }}
  transition={{ duration: 0.3 }}
>
  Content...
</motion.div>
```

### Animation Cleanup
- Clean up animations when components unmount
- Cancel animations when no longer needed
- Use `useEffect` cleanup functions
- Avoid memory leaks

## Animation Documentation

### Component Animation Documentation
Each component with animations must document:
- What animates and why
- Animation duration and easing
- Reduced motion behavior
- Performance considerations
- Accessibility implications

### Animation Pattern Documentation
Common animation patterns must be documented:
- Fade in on scroll (when to use)
- Slide up on scroll (when to use)
- Hover effects (when to use)
- Page transitions (when to use)
- Loading states (when to use)

## Animation Testing

### Animation Tests
- Test animations with reduced motion enabled
- Test animations on low-end devices
- Test animations for performance (60fps)
- Test animations for accessibility (keyboard, screen reader)
- Test animations for visual regression

### Animation Performance Tests
- Measure frame rate during animations
- Measure animation duration
- Test on mobile devices
- Test on slow connections
- Test with CPU throttling

## Animation Best Practices

### Do's
- Animate with purpose
- Keep animations short (200-600ms)
- Use natural easing curves
- Respect reduced motion preferences
- Test on low-end devices
- Document animation decisions

### Don'ts
- Animate without purpose
- Use slow animations (>800ms)
- Use linear easing (except for loading)
- Ignore reduced motion preferences
- Animate expensive properties (width, height)
- Over-animate (too many animations at once)
