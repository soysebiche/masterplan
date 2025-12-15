# MasterPlan Components Library

Professional, reusable UI components for the MasterPlan dashboard.

## Installation

All components are included via the main components CSS file:

```html
<link rel="stylesheet" href="components/components.css">
```

For Toast notifications, also install the JavaScript library:

```bash
npm install react-hot-toast
```

## Components

### 1. StatCard

Compact stat card with trend indicators and optional sparklines.

**Features:**
- Fixed 120px height for consistency
- Trend indicators (+/-%)
- Sparkline chart support
- 4 color variants (primary, success, warning, danger)
- Loading skeleton states
- Hover effects

**Usage:**
```html
<div class="stat-card stat-card-primary">
  <div class="stat-card-header">
    <div class="stat-card-icon">
      <svg>...</svg>
    </div>
    <span class="stat-card-label">Total Plans</span>
    <span class="stat-card-trend stat-card-trend-positive">+12%</span>
  </div>
  <div class="stat-card-value">$18,000</div>
  <div class="stat-card-comparison">vs last month: $20,000</div>
  <div class="stat-card-sparkline">
    <!-- Sparkline chart -->
  </div>
</div>
```

### 2. Button

Comprehensive button system with multiple variants and states.

**Variants:**
- `btn-primary` - Gradient CTA button
- `btn-secondary` - Outline button
- `btn-ghost` - Transparent button
- `btn-icon` - Icon-only button
- `btn-danger` - Danger action
- `btn-success` - Success action

**Sizes:**
- `btn-sm` - Small
- Default - Medium
- `btn-lg` - Large

**States:**
- `disabled` - Disabled state
- `btn-loading` - Loading with spinner

**Usage:**
```html
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-secondary">Secondary Action</button>
<button class="btn btn-ghost">Tertiary Action</button>
<button class="btn btn-primary btn-loading">Loading...</button>
```

### 3. DataTable

Professional data table/list component.

**Features:**
- Header with title and actions
- Hoverable rows
- Avatar/icon support with gradients
- Status badges (success, warning, danger, info)
- Empty state
- Loading skeleton
- Responsive (hides meta on mobile)

**Usage:**
```html
<div class="data-table">
  <div class="data-table-header">
    <h3 class="data-table-title">Recent Plans</h3>
    <button class="btn btn-ghost btn-sm">View All</button>
  </div>
  <div class="data-table-body">
    <div class="data-table-row">
      <div class="data-table-avatar">MB</div>
      <div class="data-table-content">
        <div class="data-table-primary">MBA Spain - IE vs ESADE</div>
        <div class="data-table-secondary">Funding Gap: $18,000</div>
      </div>
      <div class="data-table-meta">2 days ago</div>
    </div>
  </div>
</div>
```

### 4. Skeleton

Loading state placeholders with shimmer animation.

**Variants:**
- `skeleton-text` - Text line
- `skeleton-title` - Title/heading
- `skeleton-avatar` - Circular avatar
- `skeleton-button` - Button shape
- `skeleton-card` - Card shape
- `skeleton-image` - Image placeholder

**Usage:**
```html
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-title"></div>
<div class="skeleton skeleton-avatar"></div>
```

### 5. Navbar (Glassmorphism)

Modern navigation bar with backdrop blur effect.

**Features:**
- Sticky positioning
- Backdrop blur (glassmorphism)
- Dropdown menu
- Mobile menu
- Active link indicators
- User profile section

**Usage:**
```html
<nav class="navbar-glass">
  <div class="navbar-container">
    <a href="/" class="navbar-logo">MasterPlan</a>
    <div class="navbar-links">
      <a href="/dashboard" class="navbar-link">Dashboard</a>
      <a href="/simulator" class="navbar-link navbar-link-active">Simulator</a>
    </div>
    <div class="navbar-user">
      <!-- User profile -->
    </div>
  </div>
</nav>
```

### 6. Toast Notifications

Toast notification system using react-hot-toast.

**Setup:**
```javascript
import toast, { Toaster } from 'react-hot-toast';
import { showToast } from './components/toast-helper.js';

// In your root component
<Toaster position="bottom-right" />
```

**Usage:**
```javascript
// Using helper functions
showToast.success('Plan saved successfully!');
showToast.error('Error saving plan');
showToast.info('Processing your request');
showToast.loading('Calculating...');

// Promise-based
showToast.promise(
  savePlan(),
  {
    loading: 'Saving plan...',
    success: 'Plan saved!',
    error: 'Failed to save'
  }
);
```

## Design Tokens

All components use CSS custom properties from `design-tokens.css`:

- Colors: `--color-primary`, `--color-success`, etc.
- Spacing: `--spacing-card-md`, `--spacing-gap-lg`, etc.
- Typography: `--font-size-body`, `--font-weight-label`, etc.
- Shadows: `--shadow-card`, `--shadow-hover`, `--shadow-elevated`
- Radius: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`
- Transitions: `--transition-fast`, `--transition-base`, `--transition-slow`

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS Safari 12+, Chrome Android latest

**Note:** Glassmorphism (backdrop-filter) requires modern browsers. Fallback to solid background on older browsers.

## Accessibility

All components follow WCAG AA standards:

- Focus indicators on all interactive elements
- Proper color contrast ratios
- Keyboard navigation support
- ARIA attributes where applicable
- Semantic HTML structure

## License

Part of the MasterPlan project.
