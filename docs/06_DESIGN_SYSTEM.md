# Design System: Refuge Decor & Designs LLC

## Color Tokens

### Primary Colors
```css
--color-neutral-dark: #2A2A2A;
--color-neutral-medium: #666666;
--color-neutral-light: #E8E4DE;
--color-neutral-white: #FAF8F5;
--color-accent: #8B7355;
```

### Secondary Colors (Contextual)
```css
--color-terracotta: #C17B5F;
--color-sage: #8B9A7D;
--color-slate: #5A6A7A;
--color-sand: #D4C4A8;
```

### Functional Colors
```css
--color-success: #4A7C59;
--color-error: #C1440E;
--color-warning: #D4952A;
--color-info: #2A6F97;
```

### Semantic Colors
```css
--color-text-primary: var(--color-neutral-dark);
--color-text-secondary: var(--color-neutral-medium);
--color-text-inverse: var(--color-neutral-white);
--color-background-primary: var(--color-neutral-white);
--color-background-secondary: var(--color-neutral-light);
--color-background-accent: var(--color-accent);
--color-border: var(--color-neutral-medium);
--color-border-light: #E0E0E0;
--color-border-dark: #1A1A1A;
```

### Color Usage Rules
- **Primary Backgrounds**: Use `--color-background-primary` for main content areas
- **Secondary Backgrounds**: Use `--color-background-secondary` for alternate sections
- **Accent Backgrounds**: Use `--color-background-accent` for CTAs and highlights
- **Primary Text**: Use `--color-text-primary` for headings and body text
- **Secondary Text**: Use `--color-text-secondary` for metadata and captions
- **Inverse Text**: Use `--color-text-inverse` on dark backgrounds
- **Borders**: Use `--color-border` for standard borders, `--color-border-light` for subtle borders

### Color Accessibility
- **Text on Light**: Minimum 4.5:1 contrast ratio
- **Text on Dark**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio (18px+ or 14px+ bold)
- **Interactive Elements**: Clear focus states with color change
- **Color Independence**: Never rely on color alone to convey meaning

## Typography

### Font Families
```css
--font-serif: 'Playfair Display', Georgia, serif;
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'Source Code Pro', monospace;
```

### Font Weights
```css
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Type Scale (Modular Scale: Major Third 1.25)
```css
--font-size-h1: 48px; /* 3rem */
--font-size-h2: 38px; /* 2.375rem */
--font-size-h3: 30px; /* 1.875rem */
--font-size-h4: 24px; /* 1.5rem */
--font-size-body-large: 18px; /* 1.125rem */
--font-size-body: 16px; /* 1rem */
--font-size-body-small: 14px; /* 0.875rem */
--font-size-caption: 12px; /* 0.75rem */
```

### Line Heights
```css
--line-height-tight: 1.1;
--line-height-snug: 1.25;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;
--line-height-loose: 2;
```

### Letter Spacing
```css
--letter-spacing-tight: -0.02em;
--letter-spacing-normal: 0;
--letter-spacing-wide: 0.02em;
--letter-spacing-wider: 0.05em;
```

### Typography Tokens
```css
/* Headings */
--typography-h1: var(--font-size-h1) / var(--line-height-tight) var(--font-serif);
--typography-h2: var(--font-size-h2) / var(--line-height-tight) var(--font-serif);
--typography-h3: var(--font-size-h3) / var(--line-height-snug) var(--font-serif);
--typography-h4: var(--font-size-h4) / var(--line-height-snug) var(--font-serif);

/* Body */
--typography-body-large: var(--font-size-body-large) / var(--line-height-normal) var(--font-sans);
--typography-body: var(--font-size-body) / var(--line-height-normal) var(--font-sans);
--typography-body-small: var(--font-size-body-small) / var(--line-height-normal) var(--font-sans);

/* Captions */
--typography-caption: var(--font-size-caption) / var(--line-height-normal) var(--font-sans);
```

### Typography Usage
- **H1**: Page titles, hero headlines (serif, 48px, tight line height)
- **H2**: Section titles (serif, 38px, tight line height)
- **H3**: Subsection titles (serif, 30px, snug line height)
- **H4**: Component titles (serif, 24px, snug line height)
- **Body Large**: Lead paragraphs, emphasized text (sans-serif, 18px, normal line height)
- **Body**: Standard content (sans-serif, 16px, normal line height)
- **Body Small**: Captions, metadata (sans-serif, 14px, normal line height)
- **Caption**: Fine print, labels (sans-serif, 12px, normal line height)

## Spacing

### Spacing Scale (8px Base Unit)
```css
--spacing-0: 0;
--spacing-1: 8px;
--spacing-2: 16px;
--spacing-3: 24px;
--spacing-4: 32px;
--spacing-5: 40px;
--spacing-6: 48px;
--spacing-8: 64px;
--spacing-10: 80px;
--spacing-12: 96px;
--spacing-16: 128px;
--spacing-20: 160px;
--spacing-24: 192px;
```

### Spacing Tokens
```css
/* Component Padding */
--padding-xs: var(--spacing-1); /* 8px */
--padding-sm: var(--spacing-2); /* 16px */
--padding-md: var(--spacing-3); /* 24px */
--padding-lg: var(--spacing-4); /* 32px */
--padding-xl: var(--spacing-5); /* 40px */
--padding-2xl: var(--spacing-6); /* 48px */

/* Component Margin */
--margin-xs: var(--spacing-1); /* 8px */
--margin-sm: var(--spacing-2); /* 16px */
--margin-md: var(--spacing-3); /* 24px */
--margin-lg: var(--spacing-4); /* 32px */
--margin-xl: var(--spacing-5); /* 40px */
--margin-2xl: var(--spacing-6); /* 48px */

/* Section Spacing */
--section-spacing-sm: var(--spacing-8); /* 64px */
--section-spacing-md: var(--spacing-10); /* 80px */
--section-spacing-lg: var(--spacing-12); /* 96px */
--section-spacing-xl: var(--spacing-16); /* 128px */
```

### Spacing Usage
- **Text Padding**: 16px-24px around body text
- **Section Margins**: 96px-128px between sections
- **Card Padding**: 24px-32px internal padding
- **Grid Gaps**: 24px-32px between grid items
- **Button Padding**: 16px vertical, 32px horizontal
- **Form Field Padding**: 12px vertical, 16px horizontal

## Border Radius

### Radius Scale
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-2xl: 16px;
--radius-full: 9999px;
```

### Radius Usage
- **Buttons**: 4px (subtle rounding)
- **Cards**: 8px (noticeable but not dramatic)
- **Inputs**: 4px (subtle rounding)
- **Images**: 0 (no rounding for architectural photography)
- **Badges**: 12px (pill shape)
- **Avatars**: 9999px (circular)

## Elevation

### Elevation Scale (Box Shadows)
```css
--elevation-none: none;
--elevation-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--elevation-md: 0 4px 6px rgba(0, 0, 0, 0.07);
--elevation-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--elevation-xl: 0 20px 25px rgba(0, 0, 0, 0.12);
--elevation-2xl: 0 25px 50px rgba(0, 0, 0, 0.15);
```

### Elevation Usage
- **Default**: No elevation (flat design)
- **Cards**: Small elevation on hover (md)
- **Dropdowns**: Medium elevation (lg)
- **Modals**: High elevation (xl)
- **Tooltips**: High elevation (lg)

## Shadows

### Shadow Types
```css
--shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.06);
--shadow-focus: 0 0 0 2px var(--color-accent);
--shadow-glow: 0 0 20px rgba(139, 115, 85, 0.3);
```

### Shadow Usage
- **Focus States**: Use `--shadow-focus` for keyboard focus
- **Active States**: Use `--shadow-inner` for pressed buttons
- **Special Effects**: Use `--shadow-glow` for accent elements

## Grid

### Container Widths
```css
--container-xs: 320px;
--container-sm: 480px;
--container-md: 640px;
--container-lg: 960px;
--container-xl: 1200px;
--container-2xl: 1400px;
```

### Grid System
```css
--grid-columns: 12;
--grid-gutter: 24px;
--grid-gutter-sm: 16px;
--grid-gutter-lg: 32px;
```

### Grid Usage
- **Mobile**: 1 column (100% width)
- **Tablet**: 2 columns (50% width each)
- **Desktop**: 3 columns (33.33% width each)
- **Large Desktop**: 4 columns (25% width each)

### Container Usage
- **Mobile**: 100% width with 16px padding
- **Tablet**: 100% width with 24px padding, max-width 960px
- **Desktop**: 100% width with 32px padding, max-width 1200px
- **Large Desktop**: 100% width with 48px padding, max-width 1400px

## Component Tokens

### Button Tokens
```css
/* Primary Button */
--button-primary-bg: var(--color-accent);
--button-primary-text: var(--color-neutral-white);
--button-primary-border: transparent;
--button-primary-hover-bg: #7A654A;
--button-primary-active-bg: #6D5A42;

/* Secondary Button */
--button-secondary-bg: transparent;
--button-secondary-text: var(--color-accent);
--button-secondary-border: var(--color-accent);
--button-secondary-hover-bg: var(--color-accent);
--button-secondary-hover-text: var(--color-neutral-white);

/* Ghost Button */
--button-ghost-bg: transparent;
--button-ghost-text: var(--color-text-primary);
--button-ghost-border: transparent;
--button-ghost-hover-bg: var(--color-neutral-light);
```

### Input Tokens
```css
--input-bg: var(--color-neutral-white);
--input-text: var(--color-text-primary);
--input-border: var(--color-border);
--input-border-focus: var(--color-accent);
--input-placeholder: var(--color-text-secondary);
--input-error: var(--color-error);
--input-success: var(--color-success);
```

### Card Tokens
```css
--card-bg: var(--color-neutral-white);
--card-border: var(--color-border-light);
--card-shadow: var(--elevation-sm);
--card-shadow-hover: var(--elevation-md);
--card-radius: var(--radius-lg);
```

## Focus Styles

### Focus Indicators
```css
--focus-ring: 0 0 0 2px var(--color-accent);
--focus-ring-offset: 2px;
--focus-ring-inset: inset 0 0 0 2px var(--color-accent);
```

### Focus Usage
- **Buttons**: 2px accent color outline, 2px offset
- **Links**: 2px accent color underline
- **Inputs**: 2px accent color border
- **Cards**: 2px accent color outline on focus
- **Custom Focus**: Always visible, high contrast

## States

### Button States
```css
/* Default */
--button-default: var(--button-primary-bg) var(--button-primary-text);

/* Hover */
--button-hover: var(--button-primary-hover-bg) var(--button-primary-text);

/* Active */
--button-active: var(--button-primary-active-bg) var(--button-primary-text);

/* Focus */
--button-focus: var(--focus-ring);

/* Disabled */
--button-disabled: var(--color-neutral-light) var(--color-text-secondary);
--button-disabled-cursor: not-allowed;
```

### Input States
```css
/* Default */
--input-default: var(--input-bg) var(--input-text) var(--input-border);

/* Focus */
--input-focus: var(--input-bg) var(--input-text) var(--input-border-focus);

/* Error */
--input-error: var(--input-bg) var(--input-text) var(--input-error);

/* Success */
--input-success: var(--input-bg) var(--input-text) var(--input-success);

/* Disabled */
--input-disabled: var(--color-neutral-light) var(--color-text-secondary) var(--color-border-light);
```

### Card States
```css
/* Default */
--card-default: var(--card-bg) var(--card-border) var(--card-shadow);

/* Hover */
--card-hover: var(--card-bg) var(--card-border) var(--card-shadow-hover);

/* Focus */
--card-focus: var(--card-bg) var(--card-border) var(--focus-ring);
```

## Variants

### Button Variants
- **Primary**: Accent background, white text
- **Secondary**: Transparent background, accent border and text
- **Ghost**: Transparent background, dark text, no border
- **Sizes**: Small (32px height), Medium (40px height), Large (48px height)

### Card Variants
- **Default**: White background, light border, small shadow
- **Elevated**: White background, no border, medium shadow
- **Bordered**: White background, medium border, no shadow
- **Sizes**: Small, Medium, Large

### Input Variants
- **Default**: White background, medium border
- **Underlined**: No background, bottom border only
- **Filled**: Light gray background, no border
- **Sizes**: Small (32px height), Medium (40px height), Large (48px height)

## Dark Mode Decision

### Decision: No Dark Mode
**This website will not include a dark mode.**

### Rationale
1. **Brand Alignment**: The brand is built on warmth, light, and natural materials—dark mode contradicts this
2. **Photography Priority**: Portfolio photography is best viewed on light backgrounds
3. **Simplicity**: Reduces complexity and maintenance burden
4. **User Expectation**: Luxury interior design sites traditionally use light backgrounds
5. **Accessibility**: Light backgrounds provide better contrast for architectural photography

### Alternative Approach
- Use subtle background color variations (neutral white, neutral light gray) for section differentiation
- Maintain high contrast for text readability
- Ensure all color combinations meet WCAG AA standards
- Use accent color strategically for highlights and CTAs

## Design Tokens Implementation

### CSS Custom Properties
All design tokens will be implemented as CSS custom properties (variables) for:
- Easy theming and updates
- Consistent usage across components
- Runtime customization (if needed)
- Better developer experience

### Token Organization
Tokens will be organized by category:
- Colors (primary, secondary, functional, semantic)
- Typography (fonts, sizes, weights, line heights, letter spacing)
- Spacing (scale, component, section)
- Borders (radius, widths, colors)
- Shadows (elevation, types)
- Grid (containers, columns, gutters)

### Token Usage
Components will reference tokens by name, never by hard-coded values:
- ✅ `background-color: var(--color-background-primary);`
- ❌ `background-color: #FAF8F5;`

## Design System Documentation

### Component Documentation
Each component will document:
- Purpose and usage
- Props/variants available
- Accessibility considerations
- Code examples
- Do's and don'ts

### Token Documentation
Each token will document:
- Purpose and usage
- When to use
- When not to use
- Accessibility implications
- Related tokens

## Design System Maintenance

### Version Control
- Design tokens will be versioned with the codebase
- Breaking changes will be documented in changelog
- Deprecation warnings will be provided before removal

### Updates
- Token updates will follow semantic versioning
- Major updates will require component updates
- Minor updates will be backward compatible
- Patch updates will be bug fixes only

### Governance
- Design system changes will be reviewed by design team
- Breaking changes will require stakeholder approval
- New tokens will be added through pull requests
- Deprecated tokens will be marked before removal
