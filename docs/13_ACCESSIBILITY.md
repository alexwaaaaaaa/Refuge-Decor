# Accessibility: Refuge Decor & Designs LLC

## WCAG AA Compliance

### Compliance Level
- **Target Level**: WCAG 2.1 AA
- **Conformance**: Full compliance across all pages
- **Testing**: Regular accessibility testing
- **Documentation**: Accessibility documentation for all components

### WCAG 2.1 AA Requirements
- **Perceivable**: Information and UI components must be presentable to users in ways they can perceive
- **Operable**: UI components and navigation must be operable
- **Understandable**: Information and the operation of the UI must be understandable
- **Robust**: Content must be robust enough to be interpreted by a wide variety of user agents

## Keyboard Navigation

### Keyboard Strategy
- **Tab Order**: Logical tab order (navigation → content → footer)
- **Skip Links**: Skip to content link for keyboard users
- **Focus Indicators**: Visible focus indicators on all interactive elements
- **Keyboard Traps**: No keyboard traps (users can always navigate away)
- **Shortcuts**: No custom keyboard shortcuts (avoid conflicts with assistive technology)

### Keyboard Navigation Implementation
```typescript
// Skip to content link
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-accent focus:text-white"
    >
      Skip to main content
    </a>
  );
}

// Focus management in modals
useEffect(() => {
  const handleTab = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      // Trap focus within modal
    }
  };
  document.addEventListener('keydown', handleTab);
  return () => document.removeEventListener('keydown', handleTab);
}, []);
```

### Keyboard Navigation Requirements
- **Tab**: Navigate through interactive elements
- **Shift+Tab**: Navigate backwards
- **Enter/Space**: Activate buttons and links
- **Escape**: Close modals and menus
- **Arrow Keys**: Navigate within widgets (menus, carousels)

## Focus Management

### Focus Strategy
- **Focus Visible**: Always show focus indicator
- **Focus Order**: Logical focus order
- **Focus Restoration**: Restore focus after closing modals
- **Focus Trapping**: Trap focus within modals
- **Auto-Focus**: Don't auto-focus (unless necessary)

### Focus Management Implementation
```typescript
// Focus restoration after modal close
const previousFocusRef = useRef<HTMLElement>(null);

const openModal = () => {
  previousFocusRef.current = document.activeElement as HTMLElement;
  // Open modal and focus first interactive element
};

const closeModal = () => {
  // Close modal
  previousFocusRef.current?.focus();
};

// Focus trapping within modal
const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });
};
```

## ARIA

### ARIA Strategy
- **Semantic HTML**: Use semantic HTML first, ARIA second
- **ARIA Labels**: Use ARIA labels when native HTML is insufficient
- **ARIA Roles**: Use ARIA roles to clarify element purpose
- **ARIA States**: Use ARIA states to communicate element state
- **ARIA Live Regions**: Use ARIA live regions for dynamic content

### ARIA Implementation
```typescript
// ARIA labels for icons
<button aria-label="Close modal">
  <XIcon />
</button>

// ARIA roles for custom components
<div role="navigation" aria-label="Main navigation">
  {/* Navigation links */}
</div>

// ARIA states for interactive elements
<button aria-expanded={isOpen} aria-controls="menu">
  Menu
</button>

// ARIA live regions for dynamic content
<div aria-live="polite" aria-atomic="true">
  {successMessage}
</div>
```

### ARIA Best Practices
- **No Redundant ARIA**: Don't add ARIA if native HTML suffices
- **Descriptive Labels**: Use descriptive ARIA labels
- **Consistent Roles**: Use consistent ARIA roles
- **Accurate States**: Keep ARIA states accurate
- **Live Regions**: Use appropriate live region politeness

## Color Contrast

### Contrast Requirements
- **Normal Text**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio (18px+ or 14px+ bold)
- **Interactive Elements**: Minimum 3:1 contrast ratio
- **Graphics**: Minimum 3:1 contrast ratio for important information

### Color Contrast Testing
- **Tool**: WebAIM Contrast Checker
- **Testing**: Test all color combinations
- **Documentation**: Document all color combinations
- **Monitoring**: Monitor contrast in CI/CD

### Color Contrast Implementation
```css
/* Good contrast (4.5:1) */
.text-primary {
  color: #2A2A2A; /* on #FAF8F5 background */
}

/* Good contrast for large text (3:1) */
.text-large {
  color: #666666; /* on #FAF8F5 background, 18px+ */
}

/* Good contrast for interactive elements (3:1) */
.button-primary {
  background-color: #8B7355;
  color: #FAF8F5;
}
```

### Color Contrast Documentation
- **Primary Text**: #2A2A2A on #FAF8F5 (contrast ratio: 14.6:1)
- **Secondary Text**: #666666 on #FAF8F5 (contrast ratio: 7.2:1)
- **Accent Button**: #8B7355 background, #FAF8F5 text (contrast ratio: 4.8:1)
- **Link Text**: #8B7355 on #FAF8F5 (contrast ratio: 4.8:1)

## Reduced Motion

### Reduced Motion Strategy
- **Detect Preference**: Check `prefers-reduced-motion` media query
- **Disable Animations**: Disable all animations when reduced motion preferred
- **Instant Transitions**: Replace smooth transitions with instant changes
- **No Parallax**: Disable parallax effects
- **Respect Preference**: Always respect user preference

### Reduced Motion Implementation
```typescript
// Detect reduced motion preference
const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Disable animations when reduced motion preferred
const animationConfig = {
  transition: {
    duration: prefersReducedMotion() ? 0 : 0.3,
    ease: prefersReducedMotion() ? 'linear' : 'easeOut',
  },
};

// CSS media query
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Reduced Motion Requirements
- **Disable Animations**: All animations disabled
- **Instant Transitions**: No smooth transitions
- **No Parallax**: No parallax effects
- **No Auto-Play**: No auto-playing content
- **Respect Preference**: Always check and respect preference

## Screen Reader Behavior

### Screen Reader Strategy
- **Semantic HTML**: Use semantic HTML for structure
- **Heading Hierarchy**: Logical heading hierarchy (single H1 per page)
- **Alt Text**: Descriptive alt text for all images
- **ARIA Labels**: ARIA labels for non-text content
- **Live Regions**: ARIA live regions for dynamic content

### Screen Reader Implementation
```typescript
// Semantic HTML
<main id="main-content">
  <h1>Page Title</h1>
  <section>
    <h2>Section Title</h2>
    <p>Content...</p>
  </section>
</main>

// Alt text for images
<img
  src="/images/project.jpg"
  alt="Modern living room with warm wood accents and large windows"
/>

// ARIA labels for icons
<button aria-label="Share on Instagram">
  <InstagramIcon />
</button>

// ARIA live regions for dynamic content
<div aria-live="polite" aria-atomic="true">
  {formStatus}
</div>
```

### Screen Reader Testing
- **Tools**: NVDA (Windows), VoiceOver (Mac), JAWS (Windows)
- **Testing**: Test with multiple screen readers
- **Documentation**: Document screen reader behavior
- **Regular Testing**: Regular screen reader testing

## Forms

### Form Accessibility
- **Labels**: Every form field has a visible label
- **Error Messages**: Inline error messages associated with fields
- **Required Fields**: Clearly marked with asterisk
- **Validation**: Real-time validation with clear error messages
- **Success Messages**: Clear confirmation after successful submission

### Form Implementation
```typescript
// Form with labels and error messages
<form>
  <div>
    <label htmlFor="email">Email Address *</label>
    <input
      id="email"
      type="email"
      required
      aria-invalid={errors.email ? 'true' : 'false'}
      aria-describedby={errors.email ? 'email-error' : undefined}
    />
    {errors.email && (
      <span id="email-error" role="alert">
        {errors.email}
      </span>
    )}
  </div>
  <button type="submit">Submit</button>
</form>
```

### Form Requirements
- **Labels**: Visible labels for all fields
- **Error Messages**: Inline error messages
- **Required Fields**: Marked with asterisk
- **Validation**: Clear validation messages
- **Success Messages**: Clear success confirmation

## Dialogs

### Dialog Accessibility
- **Role**: Use `role="dialog"` or `<dialog>` element
- **Label**: Descriptive label for dialog
- **Focus Trap**: Trap focus within dialog
- **Escape Key**: Close dialog on Escape key
- **Focus Restoration**: Restore focus after closing

### Dialog Implementation
```typescript
<dialog
  ref={dialogRef}
  aria-labelledby="dialog-title"
  aria-describedby="dialog-description"
  onClose={handleClose}
>
  <h2 id="dialog-title">Dialog Title</h2>
  <p id="dialog-description">Dialog description...</p>
  <button onClick={handleClose}>Close</button>
</dialog>
```

### Dialog Requirements
- **Role**: Dialog role or dialog element
- **Label**: Descriptive label
- **Focus Trap**: Trap focus within dialog
- **Escape Key**: Close on Escape
- **Focus Restoration**: Restore focus after close

## Slider

### Slider Accessibility
- **Label**: Descriptive label for slider
- **Value**: Announce current value
- **Keyboard**: Keyboard accessible (arrow keys)
- **ARIA**: ARIA attributes for state
- **Visual**: Visual indication of value

### Slider Implementation
```typescript
<div role="slider" aria-label="Price range" aria-valuemin="0" aria-valuemax="100" aria-valuenow={value}>
  <input
    type="range"
    min="0"
    max="100"
    value={value}
    onChange={handleChange}
    aria-label="Price range"
  />
  <span>{value}</span>
</div>
```

### Slider Requirements
- **Label**: Descriptive label
- **Value**: Announce current value
- **Keyboard**: Arrow key navigation
- **ARIA**: ARIA attributes for state
- **Visual**: Visual value indication

## Gallery

### Gallery Accessibility
- **Alt Text**: Descriptive alt text for all images
- **Keyboard**: Keyboard navigation (arrow keys)
- **Lightbox**: Accessible lightbox (keyboard, screen reader)
- **Focus Management**: Focus management in lightbox
- **Escape Key**: Close lightbox on Escape

### Gallery Implementation
```typescript
// Gallery with keyboard navigation
<div role="grid" aria-label="Project gallery">
  {images.map((image, index) => (
    <button
      key={index}
      onClick={() => openLightbox(index)}
      aria-label={`View ${image.title}`}
    >
      <img src={image.src} alt={image.alt} />
    </button>
  ))}
</div>

// Accessible lightbox
<dialog ref={lightboxRef} aria-label="Image viewer">
  <img src={currentImage.src} alt={currentImage.alt} />
  <button onClick={closeLightbox} aria-label="Close lightbox">
    Close
  </button>
</dialog>
```

### Gallery Requirements
- **Alt Text**: Descriptive alt text
- **Keyboard**: Arrow key navigation
- **Lightbox**: Accessible lightbox
- **Focus Management**: Focus management
- **Escape Key**: Close on Escape

## Lightbox

### Lightbox Accessibility
- **Role**: Dialog role for lightbox
- **Label**: Descriptive label for lightbox
- **Focus Trap**: Trap focus within lightbox
- **Keyboard**: Keyboard navigation (arrows, Escape)
- **Focus Restoration**: Restore focus after close

### Lightbox Implementation
```typescript
<dialog
  ref={lightboxRef}
  aria-label="Image viewer"
  onClose={handleClose}
>
  <img src={currentImage.src} alt={currentImage.alt} />
  <button onClick={previousImage} aria-label="Previous image">
    Previous
  </button>
  <button onClick={nextImage} aria-label="Next image">
    Next
  </button>
  <button onClick={handleClose} aria-label="Close lightbox">
    Close
  </button>
</dialog>
```

### Lightbox Requirements
- **Role**: Dialog role
- **Label**: Descriptive label
- **Focus Trap**: Trap focus
- **Keyboard**: Keyboard navigation
- **Focus Restoration**: Restore focus

## Canvas Accessibility

### Canvas Accessibility
- **Fallback**: Provide fallback content
- **ARIA**: ARIA labels for canvas
- **Keyboard**: Keyboard alternatives for canvas interactions
- **Screen Reader**: Screen reader alternatives
- **Focus**: Focus management for canvas

### Canvas Implementation
```typescript
<canvas
  ref={canvasRef}
  aria-label="3D model viewer"
  role="img"
  aria-describedby="canvas-description"
>
  Fallback content for users who cannot access the canvas
</canvas>
<div id="canvas-description" className="sr-only">
  Interactive 3D model. Use arrow keys to rotate, plus and minus to zoom.
</div>
```

### Canvas Requirements
- **Fallback**: Fallback content
- **ARIA**: ARIA labels
- **Keyboard**: Keyboard alternatives
- **Screen Reader**: Screen reader alternatives
- **Focus**: Focus management

## Accessibility Testing

### Testing Strategy
- **Automated Testing**: Automated accessibility testing (Lighthouse, axe)
- **Manual Testing**: Manual keyboard and screen reader testing
- **User Testing**: Accessibility user testing
- **Regular Testing**: Regular accessibility testing

### Testing Tools
- **Lighthouse**: Automated accessibility auditing
- **axe DevTools**: Automated accessibility testing
- **WAVE**: Web accessibility evaluation tool
- **Screen Readers**: NVDA, VoiceOver, JAWS
- **Keyboard**: Keyboard navigation testing

### Testing Frequency
- **Development**: Test during development
- **Pre-Deployment**: Test before deployment
- **Post-Deployment**: Test after deployment
- **Regular**: Test weekly

## Accessibility Documentation

### Component Documentation
Each component must document:
- Accessibility features
- Keyboard interaction
- Screen reader behavior
- ARIA attributes used
- Testing performed

### Accessibility Checklist
- [ ] Semantic HTML used
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast sufficient
- [ ] Alt text descriptive
- [ ] Forms have labels
- [ ] Error messages associated with fields
- [ ] Reduced motion respected
- [ ] Screen reader tested
- [ ] Accessibility tools passed

## Accessibility Best Practices

### Do's
- Use semantic HTML
- Provide alt text for images
- Ensure keyboard navigation
- Test with screen readers
- Respect reduced motion preferences

### Don'ts
- Don't rely on color alone
- Don't use auto-playing content
- Don't trap keyboard focus
- Don't skip heading levels
- Don't ignore accessibility
