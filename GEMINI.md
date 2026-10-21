# Altavoxel Agent Guidelines & Design System

## Project Context & Brand Identity
Altavoxel specializes in bespoke 3D-printed event awards, podium trophies, and custom athlete keepsakes derived from GPX/elevation data and custom event branding.

---

## 🔒 Theme & Color Scheme Rules (Strict Constraint)
**DO NOT CHANGE OR OVERRIDE** the established theme, brand colors, or design aesthetic. Any new pages, sections, components, modals, or updates must strictly adhere to the following color palette and typography rules:

### Core Color Palette (CSS Custom Properties)
```css
:root {
  --primary: #0d4187;        /* Brand Primary Blue */
  --primary-dark: #07254f;   /* Deep Navy / Dark Header & Heading Color */
  --primary-light: #2d82d6;  /* Vibrant Accent Blue */
  --accent: #1351a3;         /* Medium Blue */
  --bg-light: #f8fafc;       /* Clean Light Background */
  --surface: #ffffff;        /* Card & Container Surface */
  --text-main: #0f172a;      /* Primary Body & Headline Text (Slate 900) */
  --text-muted: #64748b;     /* Subtitles & Descriptions (Slate 500) */
  --border: #e2e8f0;         /* Subtle Dividers & Card Outlines (Slate 200) */
  
  /* Additional Token / Keepsake Accents */
  --accent-gold: #fbbf24;    /* Gold / Amber Highlights */
  --accent-gold-dark: #d97706; /* Trophy Accent Bronze / Gold */
  --surface-dark: #0f172a;   /* Dark Preview Surface */
}
```

### Typography Guidelines
- **Main Font**: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`
- **Monospace / Technical Data**: `'JetBrains Mono', monospace` (used for GPX metrics, elevation stats, specs, token coordinates)
- **Logo / Wordmark**: `ALTA` in `var(--primary)` + `VOXEL` in `var(--primary-light)` with uppercase tracking (`letter-spacing: 1.5px`–`2px`).

---

## Implementation Guidelines for Agents
1. **Always Use CSS Variables**: Use the predefined CSS variables (`var(--primary)`, `var(--primary-dark)`, `var(--bg-light)`, etc.) rather than hardcoding ad-hoc arbitrary hex colors.
2. **Preserve Visual Style**: Keep the clean, modern engineering & athletic aesthetic (card-based layout, subtle elevation/shadows on hover, clear typographic contrast).
3. **No Tailwind / Utility Bloat**: Maintain the lightweight vanilla CSS structure used in [index.html](file:///Users/jay/altavoxel-site/index.html) and [event.html](file:///Users/jay/altavoxel-site/event.html).
4. **Responsive & Accessible**: Ensure all additions remain mobile-friendly and accessible.
5. **Terminology Constraint**: **DO NOT USE** the term "hardware" to refer to awards, trophies, or keepsakes. Use terms such as "awards", "podium trophies", "finisher tokens", "keepsakes", or "custom awards".
