# Component Library: Refuge Decor & Designs LLC

## Button

### Purpose
Interactive element that triggers actions or navigation.

### Variants
- **Primary**: Accent background, white text, primary CTAs
- **Secondary**: Transparent background, accent border, secondary CTAs
- **Ghost**: Transparent background, no border, tertiary actions

### Sizes
- **Small**: 32px height, 14px text, 24px horizontal padding
- **Medium**: 40px height, 16px text, 32px horizontal padding
- **Large**: 48px height, 18px text, 40px horizontal padding

### Props
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string; // If provided, renders as link
}
```

### States
- **Default**: Base styling
- **Hover**: Color change + subtle scale (1.05)
- **Active**: Scale down (0.98)
- **Focus**: 2px accent outline, 2px offset
- **Disabled**: Gray background, gray text, not-allowed cursor
- **Loading**: Spinner animation, text change to "Loading..."

### Accessibility
- Keyboard accessible (Enter, Space)
- Focus visible indicator
- ARIA attributes for disabled state
- Sufficient color contrast (4.5:1)
- Touch target minimum 44x44px

### Usage
```tsx
<Button variant="primary" size="medium" onClick={handleClick}>
  Start Your Project
</Button>

<Button variant="secondary" href="/work">
  View Our Work
</Button>
```

### Composition
- Can contain text and icons
- Can be used as button or link
- Can be loading or disabled
- Can be full-width on mobile

## Section

### Purpose
Container for major page sections with consistent spacing and background.

### Variants
- **Default**: White background, standard padding
- **Alternate**: Light gray background, standard padding
- **Accent**: Accent background, white text
- **Dark**: Dark background, white text

### Props
```typescript
interface SectionProps {
  variant?: 'default' | 'alternate' | 'accent' | 'dark';
  padding?: 'none' | 'small' | 'medium' | 'large';
  children: React.ReactNode;
  id?: string; // For anchor links
}
```

### Spacing
- **None**: No padding
- **Small**: 64px vertical padding
- **Medium**: 96px vertical padding
- **Large**: 128px vertical padding

### Accessibility
- Landmark region (`<section>` with `aria-labelledby`)
- Proper heading hierarchy
- Sufficient color contrast

### Usage
```tsx
<Section variant="alternate" padding="large" id="philosophy">
  <h2>Our Philosophy</h2>
  <p>Philosophy content...</p>
</Section>
```

### Composition
- Contains headings, components, content
- Can be nested (but avoid deep nesting)
- Can have background color variants
- Can have ID for anchor navigation

## Container

### Purpose
Responsive container that constrains content width and centers it.

### Variants
- **Default**: Max-width 1200px
- **Narrow**: Max-width 640px
- **Wide**: Max-width 1400px
- **Full**: 100% width (no max-width)

### Props
```typescript
interface ContainerProps {
  variant?: 'default' | 'narrow' | 'wide' | 'full';
  children: React.ReactNode;
}
```

### Responsive Behavior
- **Mobile**: 100% width with 16px padding
- **Tablet**: 100% width with 24px padding
- **Desktop**: Max-width with 32px padding
- **Large Desktop**: Max-width with 48px padding

### Accessibility
- No specific accessibility requirements
- Helps with content organization

### Usage
```tsx
<Container variant="default">
  <h1>Page Title</h1>
  <p>Page content...</p>
</Container>
```

### Composition
- Wraps page content
- Can be nested (but avoid deep nesting)
- Can be combined with Section
- Provides consistent content width

## Hero

### Purpose
Full-screen hero section with background image, headline, and CTA.

### Variants
- **Default**: Full-screen image with overlay
- **Minimal**: Minimal overlay, more image visible
- **Dark**: Darker overlay for white text

### Props
```typescript
interface HeroProps {
  image: string;
  headline: string;
  subheadline?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  variant?: 'default' | 'minimal' | 'dark';
}
```

### Components
- Background image (full-screen, cover)
- Overlay (dark gradient for text readability)
- Headline (H1, serif, large)
- Subheadline (optional, sans-serif, medium)
- Primary CTA (button)
- Secondary CTA (optional, button)

### Accessibility
- Alt text for background image
- Sufficient color contrast for text
- Semantic heading structure
- Keyboard accessible CTAs

### Usage
```tsx
<Hero
  image="/images/hero-ranch.jpg"
  headline="Design That Feels Like Home"
  subheadline="Luxury interior design with West Texas soul"
  primaryCTA={{ text: "Start Your Project", href: "/contact" }}
  secondaryCTA={{ text: "View Our Work", href: "/work" }}
/>
```

### Composition
- Stands alone at top of page
- Contains text and buttons
- Has background image
- Full viewport height (100vh)

## Gallery

### Purpose
Grid of images with lightbox functionality.

### Variants
- **Grid**: Standard grid layout
- **Masonry**: Masonry layout (varying heights)
- **Carousel**: Horizontal scroll carousel

### Props
```typescript
interface GalleryProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  variant?: 'grid' | 'masonry' | 'carousel';
  columns?: number;
}
```

### Components
- Image grid/masonry/carousel
- Lightbox (modal for full-size images)
- Image captions (optional)
- Navigation arrows (carousel)

### States
- **Default**: Grid of images
- **Hover**: Image zoom + dark overlay
- **Lightbox Open**: Modal with full-size image
- **Lightbox Navigation**: Arrow keys or on-screen arrows

### Accessibility
- Alt text for all images
- Keyboard navigation (arrow keys)
- Focus management in lightbox
- Escape key to close lightbox
- ARIA labels for interactive elements

### Usage
```tsx
<Gallery
  variant="grid"
  columns={3}
  images={[
    { src: '/images/project1-1.jpg', alt: 'Living room', caption: 'Main living space' },
    { src: '/images/project1-2.jpg', alt: 'Kitchen', caption: 'Chef\'s kitchen' },
  ]}
/>
```

### Composition
- Contains multiple images
- Has lightbox functionality
- Can be grid, masonry, or carousel
- Responsive columns

## Card

### Purpose
Container for related content with hover effects.

### Variants
- **Default**: White background, light border
- **Elevated**: White background, shadow
- **Bordered**: White background, medium border
- **Image**: Image top, content bottom

### Props
```typescript
interface CardProps {
  variant?: 'default' | 'elevated' | 'bordered' | 'image';
  image?: string;
  title: string;
  description?: string;
  link?: string;
  children?: React.ReactNode;
}
```

### Components
- Card container
- Image (optional)
- Title
- Description (optional)
- Link/CTA (optional)
- Hover effects

### States
- **Default**: Base styling
- **Hover**: Subtle lift + shadow increase
- **Focus**: 2px accent outline

### Accessibility
- Keyboard accessible (if interactive)
- Focus visible indicator
- Alt text for images
- Sufficient color contrast

### Usage
```tsx
<Card variant="image" image="/images/project.jpg" title="Project Name" link="/work/project">
  Project description...
</Card>
```

### Composition
- Contains related content
- Can be interactive (link) or static
- Can have image
- Hover effects for engagement

## Input

### Purpose
Form input for user data entry.

### Variants
- **Default**: White background, medium border
- **Underlined**: No background, bottom border
- **Filled**: Light gray background, no border

### Props
```typescript
interface InputProps {
  type?: 'text' | 'email' | 'tel' | 'textarea';
  label: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}
```

### Components
- Label
- Input field (text, email, tel, or textarea)
- Error message (optional)
- Required indicator (asterisk)

### States
- **Default**: Base styling
- **Focus**: Accent border color
- **Error**: Red border + error message
- **Success**: Green border (optional)
- **Disabled**: Gray background, not-allowed cursor

### Accessibility
- Label associated with input
- Error message associated with input
- Required field clearly marked
- Keyboard accessible
- ARIA attributes for error state

### Usage
```tsx
<Input
  type="email"
  label="Email Address"
  placeholder="you@example.com"
  required
  error={errors.email}
  value={values.email}
  onChange={handleChange}
/>
```

### Composition
- Used in forms
- Has label and error message
- Can be various input types
- Validates on blur/change

## Accordion

### Purpose
Expandable/collapsible content sections.

### Variants
- **Default**: Standard accordion
- **Bordered**: Bordered sections

### Props
```typescript
interface AccordionProps {
  items: Array<{
    title: string;
    content: React.ReactNode;
  }>;
  variant?: 'default' | 'bordered';
  multipleOpen?: boolean;
}
```

### Components
- Accordion container
- Item headers (clickable)
- Item content (expandable)
- Chevron icon (rotation on open)

### States
- **Closed**: Header visible, content hidden
- **Open**: Header visible, content expanded
- **Hover**: Header background change

### Accessibility
- Keyboard navigation (Enter, Space)
- ARIA expanded state
- Focus management
- Screen reader announcements

### Usage
```tsx
<Accordion
  items={[
    { title: 'Question 1', content: 'Answer 1...' },
    { title: 'Question 2', content: 'Answer 2...' },
  ]}
/>
```

### Composition
- Contains multiple items
- Only one open at a time (unless multipleOpen)
- Smooth expand/collapse animation
- Chevron icon indicates state

## Slider

### Purpose
Before/after image comparison slider.

### Variants
- **Default**: Standard horizontal slider
- **Vertical**: Vertical slider (rarely used)

### Props
```typescript
interface SliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  variant?: 'default' | 'vertical';
}
```

### Components
- Before image
- After image
- Slider handle
- Labels (optional)

### States
- **Default**: 50/50 split
- **Dragging**: Handle follows mouse/touch
- **Hover**: Handle highlight

### Accessibility
- Keyboard accessible (arrow keys)
- ARIA labels for images
- Focus management
- Touch-friendly handle

### Usage
```tsx
<Slider
  beforeImage="/images/before.jpg"
  afterImage="/images/after.jpg"
  beforeLabel="Before"
  afterLabel="After"
/>
```

### Composition
- Two images layered
- Slider handle in middle
- Drag to compare
- Labels for clarity

## Footer

### Purpose
Page footer with navigation, contact, and social links.

### Variants
- **Default**: 4-column layout
- **Simple**: 2-column layout

### Props
```typescript
interface FooterProps {
  variant?: 'default' | 'simple';
}
```

### Components
- Navigation links
- Service links
- Contact information
- Social media links
- Copyright information
- Legal links (Privacy, Terms)

### Accessibility
- Semantic footer element
- Proper heading structure
- Keyboard accessible links
- Sufficient color contrast

### Usage
```tsx
<Footer variant="default" />
```

### Composition
- 4 columns (Navigation, Services, Contact, Social)
- Dark background
- Light text
- Links to all major sections

## Navbar

### Purpose
Site navigation with logo, links, and CTA.

### Variants
- **Desktop**: Fixed top navigation bar
- **Mobile**: Hamburger menu with overlay

### Props
```typescript
interface NavbarProps {
  logo: string;
  links: Array<{ text: string; href: string }>;
  cta?: { text: string; href: string };
}
```

### Components
- Logo (links to home)
- Navigation links
- CTA button (optional)
- Hamburger menu (mobile)
- Mobile menu overlay

### States
- **Desktop**: Always visible
- **Mobile**: Hamburger menu, overlay on click
- **Scroll**: Semi-transparent background on scroll

### Accessibility
- Skip to content link
- Keyboard navigation
- Focus management
- ARIA labels for mobile menu
- Semantic nav element

### Usage
```tsx
<Navbar
  logo="/images/logo.svg"
  links={[
    { text: 'Work', href: '/work' },
    { text: 'Services', href: '/services' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
  ]}
  cta={{ text: 'Start Your Project', href: '/contact' }}
/>
```

### Composition
- Fixed position
- Logo on left
- Links in center
- CTA on right
- Mobile hamburger menu

## Motion Wrappers

### FadeIn
Purpose: Fade element in when it enters viewport.

```typescript
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}
```

### SlideUp
Purpose: Slide element up when it enters viewport.

```typescript
interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}
```

### ScaleIn
Purpose: Scale element in when it enters viewport.

```typescript
interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}
```

### Accessibility
- Respect `prefers-reduced-motion`
- Disable animations when reduced motion preferred
- No content hidden behind animations

### Usage
```tsx
<FadeIn delay={0} duration={600}>
  <h2>Section Title</h2>
</FadeIn>

<SlideUp delay={200} duration={600}>
  <p>Section content...</p>
</SlideUp>
```

## Shared Utilities

### Spacing Utilities
- `p-1` to `p-6`: Padding scale
- `m-1` to `m-6`: Margin scale
- `py-1` to `py-6`: Vertical padding
- `px-1` to `px-6`: Horizontal padding

### Text Utilities
- `text-h1` to `text-caption`: Typography scale
- `text-primary`: Primary text color
- `text-secondary`: Secondary text color
- `text-center`: Center alignment
- `text-left`: Left alignment
- `text-right`: Right alignment

### Color Utilities
- `bg-primary`: Primary background
- `bg-secondary`: Secondary background
- `bg-accent`: Accent background
- `text-accent`: Accent text color

### Display Utilities
- `flex`: Flex container
- `grid`: Grid container
- `hidden`: Hidden element
- `block`: Block element
- `inline-block`: Inline block element

### Accessibility Utilities
- `sr-only`: Screen reader only
- `focus-visible`: Focus visible only
- `not-sr-only`: Not screen reader only

## Component Documentation Standards

Each component must document:
- Purpose and usage
- Props with types and descriptions
- Variants and when to use each
- States and transitions
- Accessibility considerations
- Code examples
- Do's and don'ts
- Related components

## Component Testing Standards

Each component must have:
- Unit tests for props and states
- Accessibility tests (keyboard, screen reader)
- Visual regression tests
- Responsive tests
- Interaction tests
