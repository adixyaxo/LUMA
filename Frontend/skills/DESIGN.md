# LUMA Design System

This document serves as the single source of truth for the design language, UI/UX principles, and decision-making framework of the LUMA project. It is intended to guide both human developers and AI agents in building interfaces that are modern, minimal, highly usable, and visually refined.

---

## 1. Overall Design Philosophy

The LUMA application must feel:
- **Minimal** without feeling empty.
- **Modern** without following short-lived trends.
- **Clean and professional**.
- **Purposeful** rather than visually busy.
- **Fast, responsive, and easy to navigate.**

Every design decision must have a clear purpose. Before introducing any UI element, ask:
- Does this improve usability?
- Does it simplify the interface?
- Does it reduce cognitive load?
- Is it necessary?
- Does it align with the product's purpose?

If the answer is **no**, omit it.

---

## 2. Animation Policy (CRITICAL)

**All reveal animations are PROHIBITED.**

Content must be immediately visible when the page renders. This is a strict architectural constraint derived from our reference benchmark (khasiyev.com structural adaptation).

**Do NOT use:**
- Scroll-triggered reveal effects
- Fade-in-on-scroll behavior
- Slide-in-on-scroll behavior
- Staggered reveal animations
- Viewport/intersection-observer based entrance animations
- Loading states that exist merely to delay content display
- GSAP, Framer Motion, Shery.js, or similar animation libraries for layout reveals

**Allowed Motion (Interaction Feedback Only):**
- Hover states (buttons, links, rows, cards)
- Focus rings for accessibility
- Pressed/active states
- Subtle transitions on color or border changes (max 0.2s duration)
- Video playback controls

---

## 3. Design Tokens & Primitives

### Typography Scale
- **Display (`text-display`):** `clamp(48px, 8vw, 96px)` | Weight 300 | Inter — *Used for Hero headings.*
- **Heading 2 (`text-3xl md:text-5xl`):** Weight 300 | Inter — *Used for Section headings.*
- **Heading 3 (`text-2xl`):** Weight 300 | Inter — *Used for Subsection/Card headings.*
- **Body (`text-base`):** Weight 300 | Inter — *Used for standard text.*
- **Small (`text-sm`):** Weight 300 | Inter — *Used for secondary descriptions.*
- **Labels (`text-[10px]` to `text-xs`):** Weight 500 | Fragment Mono | Uppercase + Tracking — *Used for metadata, section labels.*
- **Emphasis:** Instrument Serif (italic) — *Used selectively for single words within headings.*

### Color Palette
- **Background (`--bg`):** `#02040a`
- **Surface (`--surface`):** `#0a0a0f`
- **Border (`--border`):** `rgba(255,255,255,0.08)`
- **Text Primary (`--text-primary`):** `#f0f0f5`
- **Text Secondary (`--text-secondary`):** `rgba(255,255,255,0.5)`
- **Text Muted (`--text-muted`):** `rgba(255,255,255,0.3)`
- **Accent (`--accent`):** `#5f61ed`

### Layout Primitives
- **`.page-container`:** Max width `1200px`, horizontally centered, responsive padding (`clamp(16px, 4vw, 48px)`).
- **`.section`:** Vertical padding block (`clamp(80px, 12vw, 160px)`).

---

## 4. UI Patterns & Components

### Section Architecture
Public pages are built by stacking `.section` blocks.
Most sections begin with the `<SectionHead />` component:
- A small monospaced uppercase label.
- A large lightweight heading (`h2`), optionally featuring an italicized serif emphasis word.

### Features / Lists
Use the `.index-row` pattern for listing capabilities or structured data.
- Row flex layout.
- Bottom border divider.
- Numbering/metadata on the left (monospaced), description in the center, optional metadata on the right.
- Subtle text-brighten effect on hover.

### Cards
Cards (`.card`) are minimal surface containers (`bg-surface`, `border-white/5`).
- **No glassmorphism.**
- **No grain/noise textures.**
- **No drop shadows.**
- Subtle scale-up on hover (interaction feedback).

### Buttons
Buttons use a strict pure black + cool white palette.
- **`.btn-ghost` (Primary Public):** Transparent background, white border. Inverts to white bg/black text on hover.
- **`.btn-filled` (Primary Auth):** White background, black text. Inverts to black bg/white text on hover.
- Must be pill-shaped (`rounded-full`).

### Header & Footer
- **Header:** Fixed at top, transparent background, wordmark left, navigation right.
- **Footer:** Large display heading on the left, grouped navigation/contact links on the right.

---

## 5. Responsive Behavior

- **Mobile First:** Layouts stack vertically by default.
- **Breakpoints:** Rely on Tailwind's default `md` (768px) and `lg` (1024px) for structural shifts.
- **Grids:** 1 column on mobile, transitioning to 2 or 3 columns on tablet/desktop.
- **Navigation:** Must remain usable on small screens.
- **Typography:** Fluid typography (`clamp()`) handles scaling automatically between mobile and desktop without rigid breakpoints.

---

## 6. Accessibility

- Maintain semantic HTML (`header`, `main`, `section`, `nav`, `footer`).
- Ensure all interactive elements are focusable and display a clear focus ring.
- Use sufficient color contrast (e.g., `#f0f0f5` on `#02040a`).
- As reveal animations are prohibited, content is naturally available to screen readers immediately upon load.
