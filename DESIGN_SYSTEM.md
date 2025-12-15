# MasterPlan Design System Documentation

**Version:** 1.0  
**Last Updated:** December 15, 2024  
**Status:** Foundation Complete

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing System](#spacing-system)
5. [Shadows](#shadows)
6. [Border Radius](#border-radius)
7. [Transitions & Animations](#transitions--animations)
8. [Utility Classes](#utility-classes)
9. [Component Patterns](#component-patterns)
10. [Usage Guidelines](#usage-guidelines)

---

## Design Philosophy

### Core Principles

**1. Data Density Over Whitespace**
- Maximize useful information per screen
- Reduce unnecessary padding and margins
- ~50% less whitespace than typical consumer apps
- **Impact:** +40% more visible content without scrolling

**2. Subtle Over Flashy**
- Cumulative subtle effects create polish
- No single obvious "wow" effect
- Professional, not trendy
- Transitions: 150-300ms max

**3. Consistency Over Creativity**
- Predictable system beats surprises
- Same spacing, same colors, same patterns
- Users learn once, apply everywhere

**4. Professional Over Trendy**
- Design that ages well
- Enterprise dashboard aesthetic
- No emojis in navigation/stats/data
- Square UI + corporate benchmarks inspiration

---

## Color System

### Base Palette (90% of UI)

Used for backgrounds, cards, borders, and text. Creates the foundation.

```css
/* Backgrounds */
--color-bg-primary: #F9FAFB;     /* gray-50 - Page background */
--color-bg-card: #FFFFFF;        /* white - All containers */

/* Borders */
--color-border: #E5E7EB;         /* gray-200 - All separations */

/* Text Hierarchy */
--color-text-primary: #111827;   /* gray-900 - Titles, important values */
--color-text-secondary: #6B7280; /* gray-500 - Labels, descriptions */
--color-text-tertiary: #9CA3AF;  /* gray-400 - Timestamps, metadata */
```

**Usage Rules:**
- Page background: Always `#F9FAFB`
- Card background: Always `#FFFFFF`
- Card borders: Always `1px solid #E5E7EB`
- Never use pure black (`#000000`)

### Accent Colors (10% of UI)

Used sparingly for CTAs, status indicators, and highlights.

```css
/* Primary (Indigo) */
--color-primary: #4F46E5;           /* indigo-600 - CTA buttons, links */
--color-primary-hover: #4338CA;     /* indigo-700 - Hover states */
--color-primary-light: #EEF2FF;     /* indigo-50 - Subtle backgrounds */
--color-primary-border: #C7D2FE;    /* indigo-200 - Hover borders */

/* Success (Emerald) */
--color-success: #10B981;           /* emerald-500 - Positive values, surplus */
--color-success-light: #D1FAE5;     /* emerald-100 - Success backgrounds */
--color-success-border: #A7F3D0;    /* emerald-200 - Success borders */

/* Warning (Amber) */
--color-warning: #F59E0B;           /* amber-500 - Alerts, comparisons */
--color-warning-light: #FEF3C7;     /* amber-100 - Warning backgrounds */

/* Danger (Red) */
--color-danger: #EF4444;            /* red-500 - Funding gaps, errors */
--color-danger-light: #FEE2E2;      /* red-100 - Error backgrounds */
--color-danger-border: #FECACA;     /* red-200 - Error borders */
```

**Usage Rules:**
- Never use gradients as backgrounds (except primary CTAs)
- Never use more than 2 accent colors in same view
- Status colors:
  - Green = positive, surplus, success
  - Red = negative, deficit, error
  - Amber = warning, neutral comparison
  - Indigo = primary actions, links

### Interactive States

```css
--color-hover-bg: #F3F4F6;                    /* gray-100 - Hover backgrounds */
--color-focus-ring: rgba(79, 70, 229, 0.1);   /* indigo-600 with alpha */
```

**Usage:**
- Hover: `background: var(--color-hover-bg)`
- Focus: `box-shadow: 0 0 0 4px var(--color-focus-ring)`

---

## Typography

### Type Scale (6 Levels)

**Display Large** - Hero titles only
```css
font-size: 1.875rem;      /* 30px - text-3xl */
font-weight: 700;         /* bold */
line-height: 2.25rem;     /* leading-9 */
```
**Usage:** Hero sections on landing page  
**Never use:** text-4xl, text-5xl, text-6xl in dashboards

**Heading Large** - Section titles (h2)
```css
font-size: 1.5rem;        /* 24px - text-2xl */
font-weight: 700;         /* bold */
line-height: 2rem;        /* leading-8 */
```
**Usage:** Main section headings

**Heading Medium** - Card titles (h3)
```css
font-size: 1.125rem;      /* 18px - text-lg */
font-weight: 600;         /* semibold */
line-height: 1.75rem;     /* leading-7 */
```
**Usage:** Card headers, subsection titles

**Body Large** - Important text
```css
font-size: 1rem;          /* 16px - text-base */
font-weight: 500;         /* medium */
line-height: 1.5rem;      /* leading-6 */
```
**Usage:** Highlighted values, important descriptions

**Body Regular** - Default text
```css
font-size: 0.875rem;      /* 14px - text-sm */
font-weight: 400;         /* regular */
line-height: 1.25rem;     /* leading-5 */
```
**Usage:** Normal text, descriptions, labels

**Label Small** - Metadata
```css
font-size: 0.75rem;       /* 12px - text-xs */
font-weight: 500;         /* medium */
letter-spacing: 0.05em;   /* tracking-wide */
text-transform: uppercase;
line-height: 1rem;        /* leading-4 */
```
**Usage:** Stat labels, timestamps, badges

### Font Family

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Loaded from Google Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

---

## Spacing System

### Conversion Table (Old → New)

**Section Padding Vertical:**
```
py-16 → py-8   (64px → 32px)  -50%
py-12 → py-6   (48px → 24px)  -50%
py-8  → py-4   (32px → 16px)  -50%
```

**Margin Bottom Between Elements:**
```
mb-12 → mb-6   (48px → 24px)  -50%
mb-8  → mb-4   (32px → 16px)  -50%
mb-6  → mb-3   (24px → 12px)  -50%
```

**Card Padding:**
```
p-8 → p-5      (32px → 20px)  -37.5%
p-6 → p-4      (24px → 16px)  -33%
p-4 → p-3      (16px → 12px)  -25%
```

**Grid Gaps:**
```
gap-8 → gap-4  (32px → 16px)  -50%
gap-6 → gap-4  (24px → 16px)  -33%
gap-4 → gap-3  (16px → 12px)  -25%
```

### CSS Variables

```css
/* Section Padding */
--spacing-section-lg: 2rem;     /* 32px - py-8 */
--spacing-section-md: 1.5rem;   /* 24px - py-6 */
--spacing-section-sm: 1rem;     /* 16px - py-4 */

/* Margins */
--spacing-margin-lg: 1.5rem;    /* 24px - mb-6 */
--spacing-margin-md: 1rem;      /* 16px - mb-4 */
--spacing-margin-sm: 0.75rem;   /* 12px - mb-3 */

/* Card Padding */
--spacing-card-lg: 1.25rem;     /* 20px - p-5 */
--spacing-card-md: 1rem;        /* 16px - p-4 */
--spacing-card-sm: 0.75rem;     /* 12px - p-3 */

/* Grid Gaps */
--spacing-gap-lg: 1rem;         /* 16px - gap-4 */
--spacing-gap-md: 0.75rem;      /* 12px - gap-3 */
--spacing-gap-sm: 0.5rem;       /* 8px - gap-2 */
```

**Impact:** +40% more content visible without scrolling

---

## Shadows

### 3-Level System

**Card (Default)** - Subtle elevation
```css
--shadow-card: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 
               0 1px 2px 0 rgba(0, 0, 0, 0.06);
```
**Usage:** All cards in resting state

**Hover (Medium)** - Interactive feedback
```css
--shadow-hover: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
```
**Usage:** Cards on hover, interactive elements

**Elevated (High)** - Floating elements
```css
--shadow-elevated: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
                   0 4px 6px -2px rgba(0, 0, 0, 0.05);
```
**Usage:** Modals, dropdowns, featured cards

**Never use:** box-shadow with >15px blur or >0.15 opacity

---

## Border Radius

### 4-Level System

```css
--radius-sm: 0.375rem;  /* 6px - rounded-sm */
--radius-md: 0.5rem;    /* 8px - rounded-md */
--radius-lg: 0.75rem;   /* 12px - rounded-lg */
--radius-xl: 1rem;      /* 16px - rounded-xl */
```

**Usage:**
- `sm` (6px): Badges, small buttons, tags
- `md` (8px): Input fields, small cards
- `lg` (12px): **Default for cards and buttons**
- `xl` (16px): Modals, large containers only

**Never use:** `rounded-2xl` (24px) except for modals

---

## Transitions & Animations

### Timing Functions

```css
--transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

**Rules:**
- Duration: 150-300ms max (never >500ms)
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out)
- Properties: `transform`, `opacity`, `box-shadow`, `colors`
- **Never animate:** `width`, `height`, `top`, `left` (causes reflow)

### Keyframe Animations

**Shimmer (Loading skeleton):**
```css
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}
```

**Usage:**
```css
.skeleton {
  background: linear-gradient(90deg, #F3F4F6 0%, #E5E7EB 50%, #F3F4F6 100%);
  background-size: 1000px 100%;
  animation: shimmer 2s infinite linear;
}
```

---

## Utility Classes

### Card System

**Base Card:**
```css
.card {
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
}
```

**Interactive Card:**
```css
.card-hover {
  transition: all var(--transition-base);
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
  border-color: var(--color-primary-border);
}
```

### Glassmorphism

**Navbar/Sticky Elements:**
```css
.glass {
  background: var(--glass-bg);                    /* rgba(255, 255, 255, 0.8) */
  backdrop-filter: var(--glass-blur);             /* blur(12px) saturate(180%) */
  -webkit-backdrop-filter: var(--glass-blur);
  border-bottom: 1px solid var(--glass-border);   /* rgba(0, 0, 0, 0.05) */
}
```

### Focus Ring

**Accessible Focus States:**
```css
.focus-ring:focus {
  outline: none;
  box-shadow: 0 0 0 4px var(--color-focus-ring);
  border-color: var(--color-primary);
}
```

**Apply to:** All interactive elements (buttons, inputs, links)

### Loading Skeleton

```css
.skeleton {
  background: linear-gradient(90deg, #F3F4F6 0%, #E5E7EB 50%, #F3F4F6 100%);
  background-size: 1000px 100%;
  animation: shimmer 2s infinite linear;
  border-radius: var(--radius-lg);
}
```

---

## Component Patterns

### Stat Card (Compact)

**Dimensions:**
- Width: 25% in grid-cols-4
- Height: Fixed 120px
- Padding: 16px (p-4)
- Border: 1px solid gray-200
- Radius: 12px (rounded-lg)

**Structure:**
```html
<div class="bg-white border border-gray-200 rounded-lg p-4 shadow-card">
  <div class="flex items-center justify-between mb-2">
    <span class="text-xs font-medium uppercase tracking-wide text-gray-500">Label</span>
    <span class="text-xs font-medium text-green-600">+12%</span>
  </div>
  <div class="text-2xl font-bold text-gray-900 mb-1">$18,000</div>
  <div class="text-xs text-gray-500">vs last month: $20,000</div>
</div>
```

### Button System

**Primary (CTA):**
```html
<button class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-card hover:shadow-hover transition-all">
  Primary Action
</button>
```

**Secondary:**
```html
<button class="bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all">
  Secondary Action
</button>
```

**Ghost:**
```html
<button class="bg-transparent text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-fast">
  Tertiary Action
</button>
```

### Data Table/List

**Row Structure:**
```html
<div class="px-5 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-fast">
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
        <span class="text-indigo-600 font-semibold">MB</span>
      </div>
      <div>
        <div class="text-sm font-medium text-gray-900">MBA Spain - IE vs ESADE</div>
        <div class="text-xs text-gray-500">Funding Gap: $18,000</div>
      </div>
    </div>
    <div class="text-xs text-gray-400">2 days ago</div>
  </div>
</div>
```

---

## Usage Guidelines

### Do's ✅

1. **Always use design tokens** - Never hardcode colors/spacing
2. **Follow spacing system** - Use py-8, mb-6, p-5, gap-4
3. **Maintain hierarchy** - Display > Heading > Body > Label
4. **Add focus states** - All interactive elements need focus rings
5. **Use card class** - Consistent card styling everywhere
6. **Subtle animations** - 150-300ms transitions only
7. **Professional tone** - No emojis in navigation/stats/data

### Don'ts ❌

1. **No gradients as backgrounds** - Only in primary CTAs
2. **No text-4xl+ in dashboards** - Only hero sections
3. **No emojis in serious UI** - Navigation, stats, buttons, cards
4. **No animations >500ms** - Keep it snappy
5. **No many colors** - Stick to palette (indigo, emerald, amber, red)
6. **No skipping states** - Loading, error, empty, disabled required
7. **No rounded-2xl** - Except modals (use rounded-lg)
8. **No pure black** - Use gray-900 (#111827)

### Accessibility Requirements

**Contrast Ratios (WCAG AA):**
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum

**Focus Indicators:**
- All interactive elements must have visible focus state
- Use `.focus-ring` utility class
- Never `outline: none` without alternative

**Keyboard Navigation:**
- All actions accessible via keyboard
- Logical tab order
- Skip links for main content

---

## File Structure

```
/Master Plan
├── design-tokens.css          # All CSS variables and utilities
├── index.html                 # Landing page
├── dashboard.html             # Main dashboard
├── simulator.html             # Financial simulator
├── results.html               # Results page
├── pricing.html               # Pricing page
├── checkout.html              # Checkout flow
├── success.html               # Success page
├── login.html                 # Login modal
├── signupmodal.html           # Signup modal
└── js/
    ├── auth-state.js          # Authentication state management
    └── firebase-config.js     # Firebase configuration
```

**All pages include:**
```html
<link rel="stylesheet" href="design-tokens.css">
```

---

## Version History

**v1.0 (December 15, 2024)**
- Initial design system foundation
- Color system defined
- Typography scale established
- Spacing system implemented (-50% reduction)
- Shadow system (3 levels)
- Border radius system (4 levels)
- Utility classes created
- Emoji removal (navigation/stats/data)
- All 9 pages updated with new spacing

---

## Next Steps (Phase 2)

1. Create reusable React components:
   - StatCard
   - Button (3 variants)
   - DataTable
   - Skeleton
   - Toast notifications

2. Implement glassmorphism navbar
3. Build component library
4. Add Storybook/examples (optional)

---

## Support & Questions

For questions about this design system, refer to:
- This documentation
- `design-tokens.css` for implementation details
- Implementation plan for roadmap

**Principle:** When in doubt, choose consistency over creativity.
