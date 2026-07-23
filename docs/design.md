# LUMA — Design System Reference

> "Messaging should disappear into the background. People should remember the conversation, not the interface."

---

## Philosophy

Luma is **not another Discord clone**.  
It is **not another Slack clone.**

It is a messaging platform that feels calm, premium, cinematic, and engineered — not crowded with notifications and colour.

Three values govern every visual decision:

1. **Simplicity** — remove before adding
2. **Focus** — the conversation is the product
3. **Speed** — nothing should feel slow or heavy

The interface should become almost invisible.

---

## Signature Identity

> **Deep black backgrounds, cinematic full-bleed video or iridescent gradient, oversized trackered type, and Ghost Pill controls.**

Luma sits at the intersection of:
- editorial magazine design (large typography, generous whitespace, monochrome restraint)
- and cinematic product design (full-bleed video, atmospheric lighting, dramatic contrast)

The background is not decoration — it is the first message.

---

## Color System

Luma uses an extreme monochrome palette with a single chromatic gesture reserved for hero backgrounds only.

### Core Palette

| Token | Value | Role |
|---|---|---|
| `--color-obsidian` | `#000000` | Primary background surface |
| `--color-paper` | `#ffffff` | Primary foreground, text, button fill |
| `--color-inkstone` | `#181818` | Secondary dark surface (panels, cards) |
| `--color-felt-gray` | `#6d6d6d` | Muted text, labels, captions |
| `--color-ash-mist` | `#9a9a9a` | Disabled states, secondary info |

### Atmospheric (Hero use only)

The only chromatic color in the system lives exclusively behind headlines and video — never on UI controls.

```
linear-gradient(135deg,
  rgb(160, 224, 171),   /* sage green */
  rgb(255, 172, 46) 40%, /* molten amber */
  rgb(165, 45, 37) 100%  /* deep oxblood */
)
```

> [!IMPORTANT]
> Never use this gradient on buttons, badges, inputs, or any interface control. It is atmospheric media only.

### Opacity Scale (applied to white on dark surfaces)

| Role | Value |
|---|---|
| Primary text | `rgba(255,255,255,0.90)` |
| Secondary text | `rgba(255,255,255,0.60)` |
| Muted / labels | `rgba(255,255,255,0.40)` |
| Hints / placeholders | `rgba(255,255,255,0.20)` |
| Hairline borders | `rgba(255,255,255,0.08)` |

---

## Typography

Typography carries the editorial identity. It should feel like a premium magazine, not a SaaS tool.

### Typefaces

| Role | Face | Substitute |
|---|---|---|
| Display / Body | Inter | System UI |
| Mono | JetBrains Mono | Courier New |

### Type Scale

| Name | Size | Weight | Line Height |
|---|---|---|---|
| Display | 18–20vw | 400 | 0.95 |
| Heading LG | 94px | 300 | 0.76 |
| Heading | 78px | 300 | 1.10 |
| Heading SM | 54px | 300–400 | 1.39 |
| Subheading | 39–45px | 400 | 1.15 |
| Body | 16–18px | 300–400 | 1.58 |
| Caption | 12px | 400 | 1.19 |
| Label | 10–11px | 400 | 1.36 |

> **Rule:** At sizes above 45px, maximum weight is 400. At display sizes (78px+), use 300 for an editorial "whisper" effect. Never shout.

---

## Spacing

Base unit: **8px**

| Name | Value |
|---|---|
| xs | 8px |
| sm | 16px |
| md | 32px |
| lg | 48px |
| xl | 64px |
| 2xl | 96px |
| 3xl | 152px |

Section gaps: **46px** (editorial rhythm between content blocks).

---

## Border Radius

The system uses a binary radius — either razor-sharp or full pill. No intermediate values.

| Element | Radius |
|---|---|
| Buttons | 75px (full pill) |
| Tags / badges | 75px (full pill) |
| Cards / panels | 0px (sharp) |
| Inputs | 0px (sharp, underline-only) |
| Images | 0px (sharp) |

> [!WARNING]
> Never use intermediate radii (2px–74px). The design contrast is between absolute sharpness (0px) and absolute softness (75px). Nothing in between.

---

## Component Specifications

### Ghost Pill Button (Dark Surface)
The primary CTA on dark/video backgrounds.

```
background: transparent
border: 1px solid rgba(255,255,255,0.30)
color: rgba(255,255,255,0.90)
border-radius: 75px
padding: 12px 24px
font: Inter 14px weight 400

hover:
  background: #ffffff
  color: #000000
  border-color: #ffffff
  transition: 0.8s cubic-bezier(0.19, 1, 0.22, 1)
```

### Filled Pill Button (Primary action on dark surface)
Used as the primary "Sign Up" / "Create Account" action only.

```
background: #ffffff
color: #000000
border: 1px solid transparent
border-radius: 75px
padding: 12px 24px

hover:
  background: transparent
  color: #ffffff
  border-color: rgba(255,255,255,0.50)
  transition: 0.8s cubic-bezier(0.19, 1, 0.22, 1)
```

### Underline Input (Auth forms)
Auth forms use bare underline inputs — no box, no radius. The border animates on focus.

```
background: transparent
border-top: none
border-left: none
border-right: none
border-bottom: 1px solid rgba(255,255,255,0.15)
color: #ffffff
font: Inter 14px weight 400
padding: 12px 0

focus:
  border-bottom: 1px solid rgba(255,255,255,0.80)
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1)
```

### Navigation (Home page, Video Overlay)
The navigation sits over the video hero. It is lightweight and transparent.

```
position: fixed / absolute top-0
height: 66px
padding: 0 40px
display: flex
justify-content: space-between

links:
  font: Inter 11px weight 400
  text-transform: uppercase
  letter-spacing: 0.15em
  color: rgba(255,255,255,0.70)
  hover underline: 1px solid currentColor, width 0→100% over 0.4s
```

### LUMA Display Title (Hero mix-blend-difference)
The hero title uses `mix-blend-mode: difference` directly against the video.

```
position: fixed
font: Inter (or display serif) ~18–20vw weight 400
color: #ffffff
mix-blend-mode: difference
isolation: isolate
pointer-events: none
/* NO z-index — must NOT create an isolated stacking context */
```

> [!IMPORTANT]
> The title element must be a **sibling**, not a child, of any `z-index` wrapper. Creating a stacking context on the wrapper isolates the blend and makes it invisible. The `fixed` positioning keeps it blending against the actual video pixels.

---

## Page Architecture

### Home (`/`)
Full-viewport cinematic experience.

```
Layer 0: <video> — full screen, muted, loop
Layer 1: Vignette gradient (top 30%, bottom 30% only)
Layer 2: LUMA title (fixed, mix-blend-difference)
Layer 3: UI — nav (top), description + CTA pills (bottom)
Layer 4: Rotating scroll badge (bottom-right, fixed)
```

### Auth (`/login`, `/signup`)
Dark centered form. Minimal and premium.

```
Layer 0: Black background
Layer 1: Subtle ambient radial glows (white, very low opacity)
Layer 2: Full nav bar (66px, borderless)
Layer 3: Centered form (max-width 400px)
Layer 4: Footer rule (52px, borderless)
```

### About (`/about`)
Editorial gallery page. Full iridescent hero, then black-and-white content rows.

```
Section 1: Full-viewport iridescent gradient + headline (78px weight 300)
Section 2+: Max-width 1078px content rows, 46px gaps, border-t separators
Footer: Black bar, Felt Gray text, caption scale
```

### Dashboard (`/app`)
Three-column app layout. Strict monochrome. No gradients.

```
Left  : 280px — Conversation list
Center: fluid — Active conversation
Right : 320px — Context panel
```

---

## Motion

> Motion is expressive but patient. Nothing should feel abrupt.

### Timing Curve
```css
cubic-bezier(0.19, 1, 0.22, 1)  /* signature glide — used for transform, color, border */
ease                              /* 0.4s — micro interactions, opacity */
```

### Durations
| Use | Duration |
|---|---|
| Micro (hover opacity, underline) | 0.3–0.4s |
| Standard (button color, border) | 0.8s |
| Dramatic (page reveals) | 1.25s |

### Allowed Animations
- Fade, slide, scale (subtle)
- Hover elevation (`translateY(-1px)`)
- Underline expansion (width 0 → 100%)
- Rotating badge (continuous, slow)
- Ambient aura drift (large blur, very subtle)

### Prohibited
- Bounce, elastic, spin (except badge)
- Delays longer than 0.2s on interactive elements
- Animations that compete with content

---

## Glassmorphism (Restrained)

Glass effects are reserved for controls that float above atmospheric media only.

```css
background: rgba(255,255,255,0.05);
backdrop-filter: blur(18px);
border: 1px solid rgba(255,255,255,0.08);
```

Never used on: auth forms, dashboard panels, body cards.

---

## Layout Rules

- **Max content width:** 1078px, centered
- **Full-bleed exceptions:** hero video/gradient sections, dark footer bands
- **Whitespace is a feature.** Never fill every pixel.
- **Desktop-first.** Mobile collapses sidebars to drawers.

---

## Implementation Notes

### Tailwind v4 Theme Tokens
```css
@theme {
  --color-obsidian: #000000;
  --color-paper: #ffffff;
  --color-inkstone: #181818;
  --color-felt-gray: #6d6d6d;
  --color-ash-mist: #9a9a9a;
  --font-roobert: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --text-display: 20vw;
  --radius-full: 75px;
  --radius-sharp: 0px;
}
```

### Semantic HTML First
Use `header`, `nav`, `main`, `section`, `aside`, `footer`. Avoid unnecessary div nesting.

### Progressive Enhancement
The site must remain navigable without JavaScript. JS is responsible for:
- Password visibility toggle
- Theme switching (future)
- WebSocket real-time updates

---

## Design Mantra

> Build interfaces that disappear.

People should remember:
- the conversation
- the speed  
- the clarity

— never the framework used to build it.
