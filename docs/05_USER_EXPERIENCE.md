# User Experience: Refuge Decor & Designs LLC

## Wireframes

### Home Page - Desktop (1920x1080)

**Hero Section (100vh)**
- Full-screen background image (ranch project)
- Minimal overlay: Logo (top left), Navigation (top right), CTA (bottom center)
- Headline: "Design That Feels Like Home" (centered, serif, large)
- Subheadline: "Luxury interior design and home staging with West Texas soul" (centered, sans-serif, medium)
- Primary CTA: "Start Your Project" (bottom center, accent button)
- Secondary CTA: "View Our Work" (bottom center, outline button)

**Philosophy Preview (80vh)**
- Split layout: Text (left, 50%), Image (right, 50%)
- Text section: H2 "Our Philosophy", 2-paragraph description, "Learn More" link
- Image: Architectural detail shot (stone, wood, light)
- Background: Neutral light gray

**Services Preview (80vh)**
- Three-column grid
- Each card: Icon, Service name, 2-sentence description, "Learn More" link
- Services: Interior Design, Home Staging, Ranch Aesthetic
- Background: Neutral white
- Hover effect: Subtle lift + shadow increase

**Featured Projects (100vh)**
- Large project showcase (horizontal scroll or grid)
- Featured project: Full-width image, project name, location, "View Project" button
- Secondary projects: 2-column grid below featured
- Background: Neutral white
- Hover effect: Image zoom + dark overlay + project name reveal

**Testimonials Preview (60vh)**
- Single testimonial carousel
- Large quote (serif, italic), client name, project type
- Background: Neutral medium gray
- Navigation: Dots or arrows

**Contact CTA (40vh)**
- Centered layout
- H2 "Ready to Transform Your Space?"
- Subheadline: "Schedule a consultation to discuss your project"
- Primary CTA: "Schedule a Consultation"
- Background: Accent color (warm brown)
- Text: White

### Home Page - Tablet (768x1024)

**Hero Section (100vh)**
- Full-screen background image
- Logo (top left), Hamburger menu (top right)
- Headline: "Design That Feels Like Home" (centered, large)
- Subheadline: "Luxury interior design with West Texas soul" (centered, medium)
- Primary CTA: "Start Your Project" (centered, full-width button)

**Philosophy Preview (60vh)**
- Stacked layout: Image (top, 50%), Text (bottom, 50%)
- Text section: H2 "Our Philosophy", 1-paragraph description, "Learn More" link
- Image: Architectural detail shot

**Services Preview (80vh)**
- Single column stack
- Each card: Icon, Service name, description, "Learn More" link
- Cards stacked vertically with 24px spacing

**Featured Projects (80vh)**
- Single column stack
- Featured project: Full-width image, project name, "View Project" button
- Secondary projects: Horizontal scroll below

**Testimonials Preview (50vh)**
- Single testimonial (static, no carousel)
- Large quote, client name, project type

**Contact CTA (40vh)**
- Centered layout
- H2 "Ready to Transform Your Space?"
- Primary CTA: "Schedule a Consultation" (full-width button)

### Home Page - Mobile (375x812)

**Hero Section (100vh)**
- Full-screen background image
- Logo (top left), Hamburger menu (top right)
- Headline: "Design That Feels Like Home" (centered, medium)
- Subheadline: "Luxury interior design with West Texas soul" (centered, small)
- Primary CTA: "Start Your Project" (centered, full-width button)

**Philosophy Preview (50vh)**
- Stacked layout: Image (top, 40%), Text (bottom, 60%)
- Text section: H2 "Our Philosophy", 1-paragraph description, "Learn More" link

**Services Preview (60vh)**
- Single column stack
- Each card: Icon, Service name, 1-sentence description, "Learn More" link

**Featured Projects (60vh)**
- Single column stack
- Featured project: Full-width image, project name, "View Project" button
- Swipe for more projects

**Testimonials Preview (40vh)**
- Single testimonial (static)
- Quote (small), client name, project type

**Contact CTA (30vh)**
- Centered layout
- H2 "Ready to Transform Your Space?" (small)
- Primary CTA: "Schedule a Consultation" (full-width button)

### Work Page - Desktop

**Header (20vh)**
- H1 "Our Work" (left aligned)
- Filter bar (right aligned): All, Residential, Ranch & Estate, Staging
- Background: Neutral white

**Project Grid (80vh)**
- 3-column grid
- Each card: Full-width image, project name, location, "View Project" link
- Hover effect: Image zoom + dark overlay + project name reveal
- Load more button at bottom (if more than 12 projects)

### Work Page - Tablet

**Header (15vh)**
- H1 "Our Work" (left aligned)
- Filter bar (below H1, horizontal scroll): All, Residential, Ranch & Estate, Staging

**Project Grid (85vh)**
- 2-column grid
- Each card: Full-width image, project name, location, "View Project" link

### Work Page - Mobile

**Header (15vh)**
- H1 "Our Work" (centered)
- Filter bar (below H1, horizontal scroll): All, Residential, Ranch & Estate, Staging

**Project Grid (85vh)**
- Single column stack
- Each card: Full-width image, project name, location, "View Project" link

### Project Page - Desktop

**Project Overview (30vh)**
- Split layout: Project info (left, 40%), Featured image (right, 60%)
- Project info: Project name, location, date, square footage, project type
- Description: 2-paragraph project story
- Background: Neutral white

**Gallery (50vh)**
- Masonry grid or horizontal scroll
- 6-8 images showing different rooms and details
- Lightbox on click
- Background: Neutral light gray

**Before/After (20vh, if applicable)**
- Slider comparison
- Before image on left, after image on right
- Slider handle in center
- Background: Neutral white

**Details (15vh)**
- Two-column grid
- Left: Materials list, specifications
- Right: Team, timeline, budget range
- Background: Neutral white

**Related Projects (15vh)**
- 3-column grid
- Each card: Image, project name, location
- Background: Neutral light gray

**CTA (10vh)**
- Centered
- "Inquire About Similar Project" button
- Background: Neutral white

### Contact Page - Desktop

**Contact Form (40vh)**
- Centered form, max-width 600px
- Fields: Name, Email, Phone, Project Type, Message
- Submit button: "Send Message"
- Background: Neutral white

**Contact Information (30vh)**
- Three-column grid
- Email, Phone, Address
- Icons + text
- Background: Neutral light gray

**Service Areas (15vh)**
- Map visualization
- List of service areas
- Background: Neutral white

**FAQ (15vh)**
- Accordion style
- 5-8 common questions
- Background: Neutral light gray

## Interaction Decisions

### Navigation Interactions
- **Desktop Hover**: Links underline from left to right (300ms)
- **Mobile Tap**: Menu slides in from right (300ms ease-out)
- **Scroll**: Navigation becomes semi-transparent after scrolling 100px
- **Active State**: Current page link has accent color underline

### Button Interactions
- **Hover**: Color change + subtle scale (1.05) + shadow increase (300ms)
- **Active**: Scale down (0.98) for tactile feedback
- **Focus**: 2px accent color outline, 2px offset
- **Loading**: Button shows spinner, text changes to "Sending..."

### Card Interactions
- **Hover**: Subtle lift (translateY -4px) + shadow increase (300ms)
- **Focus**: 2px accent color outline
- **Image Hover**: Zoom (scale 1.1) + dark overlay (rgba(0,0,0,0.3)) + text reveal (300ms)

### Form Interactions
- **Field Focus**: Border color changes to accent, label animates up (300ms)
- **Field Error**: Red border + error message appears below field
- **Field Success**: Green border + checkmark icon
- **Submit**: Validation runs, shows errors or success message

### Image Interactions
- **Gallery Click**: Opens lightbox with full-size image
- **Lightbox Navigation**: Arrow keys or on-screen arrows
- **Lightbox Close**: X button or click outside image
- **Before/After Slider**: Drag handle left/right to compare

### Scroll Interactions
- **Smooth Scroll**: Anchor links scroll smoothly (500ms ease-in-out)
- **Scroll Animations**: Elements fade in when entering viewport (opacity 0 → 1, translateY 20px → 0, 600ms)
- **Parallax**: Hero image has subtle parallax effect (0.3 speed)
- **Back to Top**: Button appears after scrolling 500px, scrolls to top on click

## Navigation Behavior

### Desktop Navigation
- **Position**: Fixed top, 80px height
- **Background**: Transparent at top, semi-transparent white (rgba(255,255,255,0.95)) on scroll
- **Logo**: Left side, 40px height, links to home
- **Links**: Work, Services, About, Contact (24px spacing)
- **CTA**: Right side, "Start Your Project" button
- **Shadow**: Subtle shadow on scroll

### Mobile Navigation
- **Position**: Fixed top, 60px height
- **Background**: Semi-transparent white
- **Logo**: Left side, 30px height, links to home
- **Hamburger**: Right side, 24x24px
- **Menu Overlay**: Full-screen, slides from right
- **Menu Items**: Home, Work, Services, About, Contact (48px height each)
- **Close Button**: X in top right corner

### Footer Navigation
- **Position**: Bottom of page, 200px height
- **Background**: Dark neutral (#2A2A2A)
- **Columns**: 4 columns (Navigation, Services, Contact, Social)
- **Links**: Light neutral text, hover effect (accent color)

## Reading Flow

### Desktop Reading Flow
- **F-Pattern**: Users scan in F-shape (horizontal top, horizontal middle, vertical left)
- **Content Priority**: Hero → Philosophy → Services → Projects → Testimonials → Contact
- **Line Length**: 65-75 characters per line (optimal for reading)
- **Paragraph Spacing**: 24px between paragraphs
- **Heading Spacing**: 32px before headings, 16px after

### Mobile Reading Flow
- **Single Column**: Content stacks vertically
- **Content Priority**: Same as desktop, but condensed
- **Line Length**: 40-50 characters per line
- **Paragraph Spacing**: 16px between paragraphs
- **Touch Targets**: Minimum 44x44px for interactive elements

### Typography Hierarchy
- **H1**: 48px desktop, 32px tablet, 24px mobile
- **H2**: 38px desktop, 28px tablet, 22px mobile
- **H3**: 30px desktop, 24px tablet, 20px mobile
- **Body**: 16px desktop, 16px tablet, 16px mobile
- **Small**: 14px all devices

## Accessibility Considerations

### Keyboard Navigation
- **Tab Order**: Logical tab order (navigation → content → footer)
- **Skip Links**: "Skip to content" link visible on focus
- **Focus Indicators**: 2px accent color outline, 2px offset
- **Focus Traps**: None (no modal dialogs that trap focus)
- **Keyboard Shortcuts**: None (to avoid conflicts with assistive technology)

### Screen Reader Support
- **Semantic HTML**: Proper use of headings, landmarks, lists
- **ARIA Labels**: Where native HTML is insufficient (icons, dynamic content)
- **Alt Text**: Descriptive alt text for all images
- **Live Regions**: ARIA live regions for dynamic content (form errors, success messages)
- **Heading Structure**: Single H1 per page, logical hierarchy

### Color Contrast
- **Text on Light**: Minimum 4.5:1 contrast ratio
- **Text on Dark**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio
- **Interactive Elements**: Clear focus states with color change
- **Color Independence**: Never rely on color alone to convey meaning

### Reduced Motion
- **Respect Preference**: Check `prefers-reduced-motion` media query
- **Disable Animations**: All animations disabled when reduced motion is preferred
- **Instant Transitions**: Replace smooth transitions with instant changes
- **No Parallax**: Disable parallax effects
- **No Auto-Play**: Disable auto-playing carousels or videos

### Touch Targets
- **Minimum Size**: 44x44px for all interactive elements
- **Spacing**: Minimum 8px between touch targets
- **Feedback**: Visual feedback on touch (scale, color change)
- **No Hover-Only**: No content that only appears on hover

### Form Accessibility
- **Labels**: Every form field has a visible label
- **Error Messages**: Inline error messages associated with fields
- **Required Fields**: Clearly marked with asterisk
- **Validation**: Real-time validation with clear error messages
- **Success Messages**: Clear confirmation after successful submission

## Micro-Interactions

### Button Micro-Interactions
- **Hover**: Color transition (300ms ease-out)
- **Active**: Scale down (0.98, 100ms)
- **Loading**: Spinner animation, text change
- **Success**: Checkmark animation, color change to green

### Link Micro-Interactions
- **Hover**: Underline animation (left to right, 300ms)
- **Active**: Color change to accent
- **External Links**: Icon indicator (arrow)

### Form Micro-Interactions
- **Field Focus**: Border color transition (300ms), label animation (300ms)
- **Field Error**: Shake animation (300ms), error message fade in (300ms)
- **Field Success**: Checkmark fade in (300ms), border color change to green (300ms)
- **Submit**: Button loading state, success message slide up (300ms)

### Image Micro-Interactions
- **Hover**: Zoom (scale 1.1, 300ms), overlay fade in (300ms)
- **Lightbox Open**: Fade in (300ms), scale up (300ms)
- **Lightbox Close**: Fade out (300ms), scale down (300ms)
- **Before/After Slider**: Smooth drag, instant update

### Scroll Micro-Interactions
- **Element Fade In**: Opacity 0 → 1, translateY 20px → 0 (600ms)
- **Navigation Scroll**: Background opacity change (300ms)
- **Back to Top**: Fade in (300ms) when scrolling past 500px

### Navigation Micro-Interactions
- **Mobile Menu Open**: Slide in from right (300ms ease-out)
- **Mobile Menu Close**: Slide out to right (300ms ease-in)
- **Dropdown Open**: Fade in (200ms), slide down (200ms)
- **Dropdown Close**: Fade out (200ms), slide up (200ms)

## Loading States

### Initial Page Load
- **Loading Screen**: Minimal logo animation (subtle pulse)
- **Progress**: Simple progress bar at top
- **Duration**: Maximum 2 seconds (optimize for faster)
- **Transition**: Fade out loading screen (300ms)

### Image Loading
- **Placeholder**: Low-resolution blur placeholder
- **Progressive**: Load low-res first, then high-res
- **Fade In**: Image fades in when loaded (300ms)
- **Error**: Fallback image or icon if load fails

### Form Submission
- **Button State**: Spinner appears, text changes to "Sending..."
- **Duration**: 1-2 seconds (simulate network request)
- **Success**: Checkmark animation, success message
- **Error**: Error message, retry option

### Gallery Loading
- **Skeleton**: Skeleton screens for gallery items
- **Progressive**: Images load progressively
- **Lazy Load**: Images load as user scrolls
- **Error**: Fallback icon if image fails to load

## Error States

### Form Errors
- **Validation**: Real-time validation on blur
- **Error Message**: Red text below field, specific to error
- **Visual Indicator**: Red border around field
- **Recovery**: Clear instructions on how to fix
- **Focus**: Focus moves to first error field

### Image Errors
- **Fallback**: Placeholder image or icon
- **Alt Text**: Descriptive alt text still present
- **User Notification**: Optional toast message
- **Retry**: Option to retry loading

### Network Errors
- **Message**: "Connection error. Please check your internet and try again."
- **Retry**: Retry button
- **Offline**: Cached content if available
- **Recovery**: Clear instructions

### 404 Errors
- **Message**: "Page not found"
- **Navigation**: Link to home page
- **Search**: Optional search box
- **Design**: Consistent with brand design

## Responsive Behavior

### Breakpoints
- **Mobile**: 375px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1919px
- **Large Desktop**: 1920px+

### Mobile Adaptations
- **Navigation**: Hamburger menu
- **Layout**: Single column stack
- **Typography**: Smaller headings
- **Images**: Full-width images
- **Touch**: Larger touch targets
- **Performance**: Optimized for mobile networks

### Tablet Adaptations
- **Navigation**: Hamburger menu or horizontal scroll
- **Layout**: 2-column grid where appropriate
- **Typography**: Medium headings
- **Images**: Responsive images
- **Touch**: Larger touch targets
- **Performance**: Optimized for tablet networks

### Desktop Adaptations
- **Navigation**: Full navigation bar
- **Layout**: Multi-column grids
- **Typography**: Full-size headings
- **Images**: High-resolution images
- **Hover**: Hover effects enabled
- **Performance**: Optimized for desktop bandwidth

## Performance Considerations

### Load Performance
- **Critical CSS**: Inline critical CSS for above-fold content
- **Deferred CSS**: Load non-critical CSS asynchronously
- **JavaScript**: Defer non-critical JavaScript
- **Images**: Lazy load below-fold images
- **Fonts**: Display font swap strategy

### Interaction Performance
- **Animations**: Use CSS transforms and opacity (GPU accelerated)
- **Scroll**: Use requestAnimationFrame for scroll handlers
- **Debounce**: Debounce scroll and resize handlers
- **Throttle**: Throttle expensive operations
- **Memory**: Clean up event listeners and timers

### Mobile Performance
- **Images**: Serve appropriately sized images
- **JavaScript**: Minimize JavaScript bundle size
- **Network**: Optimize for slow mobile networks
- **Battery**: Avoid expensive animations that drain battery
- **CPU**: Avoid expensive computations on main thread
