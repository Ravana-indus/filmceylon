---
name: Kinetic Brutalism
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#5d4038'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#916f66'
  outline-variant: '#e6bdb2'
  surface-tint: '#af3000'
  primary: '#ab2f00'
  on-primary: '#ffffff'
  primary-container: '#d63d00'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb59f'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#5b5c5a'
  on-tertiary: '#ffffff'
  tertiary-container: '#747572'
  on-tertiary-container: '#fdfdf9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb59f'
  on-primary-fixed: '#3a0a00'
  on-primary-fixed-variant: '#862300'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e2e3df'
  tertiary-fixed-dim: '#c6c7c3'
  on-tertiary-fixed: '#1a1c1a'
  on-tertiary-fixed-variant: '#454745'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
  vermilion: '#FF4A00'
  bone: '#F4F4F0'
  ink: '#111111'
  muted-text: '#737373'
  border-dark: '#262626'
typography:
  display-hero:
    fontFamily: Public Sans
    fontSize: 12vw
    fontWeight: '900'
    lineHeight: '0.85'
    letterSpacing: -0.05em
  display-hero-mobile:
    fontFamily: Public Sans
    fontSize: 15vw
    fontWeight: '900'
    lineHeight: '0.85'
    letterSpacing: -0.05em
  headline-lg:
    fontFamily: Public Sans
    fontSize: 8rem
    fontWeight: '900'
    lineHeight: '0.9'
    letterSpacing: -0.05em
  headline-lg-mobile:
    fontFamily: Public Sans
    fontSize: 4rem
    fontWeight: '900'
    lineHeight: '0.9'
    letterSpacing: -0.05em
  headline-md:
    fontFamily: Public Sans
    fontSize: 2rem
    fontWeight: '900'
    lineHeight: '1'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Public Sans
    fontSize: 1.25rem
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: '0'
  body-sm:
    fontFamily: Public Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-caps:
    fontFamily: Public Sans
    fontSize: 0.875rem
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter-desk: 3rem
  gutter-mob: 1.5rem
  section-v-space: 8rem
  stack-overlap: -6rem
---

## Brand & Style

The design system embodies a **Kinetic Brutalist** aesthetic—a synthesis of raw, industrial strength and high-end cinematic sophistication. It is designed for brands that want to project authority, precision, and an unapologetic sense of modernism. 

The visual language is characterized by high-contrast color pairings, aggressive "Black" weight typography, and massive physical scaling. The "Section Stacking" philosophy uses layered surfaces and extreme corner radii to create a tactile sense of depth, as if heavy tectonic plates of content are sliding over one another. This is a system of "controlled loudness," where bold headlines and vivid accents are balanced by expansive negative space and precise, fluid motion.

**Design Movements:**
- **Brutalism:** Heavy borders, massive type, and high-contrast color blocks.
- **Minimalism:** Stripped-back UI elements and focused functionality.
- **Cinematic:** Dramatic use of viewport-relative typography and custom cubic-bezier easings.

## Colors

This design system operates on a high-contrast foundation. **Bone (#F4F4F0)** serves as the primary canvas, providing a warmer, more sophisticated alternative to pure white. **Ink (#111111)** acts as the dominant force for typography and dark surfaces, ensuring maximum legibility and impact.

**Vermilion (#FF4A00)** is the singular action color. It is used exclusively for interactive states, critical brand moments, and primary calls to action. It should never be used for body text, but rather as a surgical strike of color to guide the eye. 

In dark-mode sections, use **Ink** as the surface and **Bone** for primary text, with **muted-text (Neutral-400/500)** used for secondary information to maintain hierarchy within high-contrast environments.

## Typography

Typography is the structural backbone of this design system. It utilizes **Public Sans** across all roles to maintain a clean, institutional, yet aggressive look.

**Headline Rules:**
- All headlines must be **Uppercase**.
- Tracking is set to `tighter` (-0.05em) for display sizes to create the "opening credit" effect.
- Line heights are intentionally tight (leading-none or 0.85) to force visual density.
- Use `vw` (viewport width) units for the primary Hero display to ensure it always commands the full width of the screen.

**Body Rules:**
- Body text should remain sentence case for legibility.
- Use a **Medium (500)** weight for standard descriptions to ensure they aren't "washed out" by the massive headlines.

## Layout & Spacing

The layout philosophy uses a **12-column fluid grid** with significant horizontal padding. The defining characteristic is "Section Stacking"—where new sections slide vertically over the previous ones using negative margins and high z-index layering.

- **Desktop:** 48px (3rem) side margins.
- **Mobile:** 24px (1.5rem) side margins.
- **Vertical Rhythm:** A standard 128px (8rem) padding is used between sections to allow the brutalist elements room to breathe.
- **Stacking Effect:** Use negative top margins (e.g., `-6rem` or `-mt-24`) on large container cards to create a layered, overlapping depth.

## Elevation & Depth

This system avoids traditional shadows in favor of **Tonal Layering** and **Negative Space Depth**. Depth is perceived through the physical movement of layers.

**Key Techniques:**
1. **Mix-Blend-Difference:** Navigation elements use `mix-blend-difference` to maintain visibility as they pass over shifting background colors (e.g., moving from Bone to Ink).
2. **Stacking Shadows:** Only use shadows when a section physically "floats" over another. In these cases, use a `shadow-2xl` with a low-opacity black tint to create a soft but clear lift.
3. **Z-Index Tiers:** 
   - `0-10`: Base background content.
   - `20-30`: "Sliding" content plates.
   - `50+`: Global Navigation and Overlays.

## Shapes

The shape language is a study in extremes. While the grid is rigid and brutalist, the containers are softened by **massive, pill-shaped corner radii**.

- **Containers:** Large section plates use `5rem` (80px) corner radii on top edges to emphasize the "stacking" effect.
- **Images:** Hero images and featured list items use a `rounded-full` (pill) or `2rem` radius to provide a organic contrast to the sharp typography.
- **Interactive:** Buttons and tags are always `rounded-full` (Pill-shaped).
- **Dividers:** Use `4px` borders for high-impact elements like marquees, and `1px` or `2px` for subtle content separation.

## Components

### Buttons
- **Primary:** Black background, white text, `rounded-full`. On hover, the background shifts to Vermilion.
- **Iconography:** Include an `ArrowUpRight` that translates +4px on both axes during hover.

### Navigation
- **Fixed Nav:** Minimalist, uses `mix-blend-difference`.
- **Mobile Menu:** Full-screen Ink (#111) overlay with massive `12vw` Uppercase links in Bone (#F4F4F0).

### Cards & Sections
- **Content Plates:** Use massive top-only border radii.
- **Interactive Lists:** When hovering over a list item (e.g., "Regions"), reveal a `rounded-2xl` floating image that follows the cursor or appears in a fixed preview area.

### Marquee
- **Infinite Scroll:** Used for "Standards" or "Brand" messaging. Black text on Bone, wrapped in `4px` top/bottom borders. Linear animation at a slow, readable pace (15s loop).

### Inputs & Forms
- **Style:** Underlined fields only (`border-b-2`). Labels are `label-caps` positioned above the line. Focus state shifts the border color to Vermilion.