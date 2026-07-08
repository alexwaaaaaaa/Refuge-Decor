# Design System Master File - Refuge Decor

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Refuge Decor
**Generated:** 2026-07-08 13:53:00 (Customized)
**Category:** Real Estate/Property/Interior Design
**Design Dials:** Variance 6/10 (Balanced / Modern) | Motion 5/10 (Standard) | Density 3/10 (Spacious)

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable | Description |
|------|-----|--------------|-------------|
| Background | `#FAF5F2` | `--color-background` | Primary canvas (warm neutral cream) |
| Card/Surface | `#F5EFE9` | `--color-surface` | Slightly darker warm neutral cream |
| Text Dark | `#1C1C1C` | `--color-foreground` | Charcoal black for typography / primary CTAs |
| Text Light/Muted | `#78716C` | `--color-muted-text` | Warm grey for body copy & subtext |
| Leather Accent | `#8C5A3C` | `--color-leather` | Muted leather accent (signature highlights, divider accents) |
| Olive Accent | `#6B7051` | `--color-olive` | Desaturated olive green (eyebrows, secondary visual labels) |
| Border | `#D8CBB8` | `--color-border` | Beige-muted for borders, grids, and dividers |
| On-Dark Background | `#1C1C1C` | `--color-on-dark-bg` | Charcoal black background for dark sections |
| On-Dark Foreground | `#FAF5F2` | `--color-on-dark-fg` | Warm cream text for dark sections |

### Typography

- **Heading Font:** Cinzel (Serif, Roman-inspired headlines, bold & medium weights)
- **Body Font:** Josefin Sans (Sans-serif, clean geometric body copy & subheads)
- **Google Fonts Import Link:**
  `https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;500;600;700&display=swap`

### Spacing Variables

*Density: 3/10 — Spacious*

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `24px` / `1.5rem` | Standard padding |
| `--space-lg` | `32px` / `2rem` | Section padding |
| `--space-xl` | `48px` / `3rem` | Large gaps |
| `--space-2xl` | `64px` / `4rem` | Section margins |
| `--space-3xl` | `96px` / `6rem` | Hero padding / huge whitespace |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.03)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(28,28,28,0.05)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(28,28,28,0.08)` | Modals, dropdowns |

---

## Motion Rules

- Standard spring easing for interactive components.
- Auto-rotation and parallax effects in 3D should listen to `prefers-reduced-motion` and pause entirely if active.
- Page load stagger animations: 150-300ms delay increments.

---

## Anti-Patterns (Do NOT Use)

- ❌ **No emojis as icons** — Use Lucide React SVGs only.
- ❌ **No layout-shifting hovers** — Keep hover effects clean and non-disruptive.
- ❌ **No hardcoded HEX values** — Always use Tailwind custom config mapped to semantic tokens.
- ❌ **No default gray/untextured WebGL elements** — All Three.js elements must use custom PBR materials (matte clay, linen, warm stone, dark steel).
