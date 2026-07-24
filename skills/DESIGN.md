# LUMA Design System

This document serves as the single source of truth for the design language, UI/UX principles, and decision-making framework of the LUMA project. It is intended to guide both human developers and AI agents in building interfaces that are modern, minimal, highly usable, and visually refined.

---

## 1. Overall Design Philosophy

The LUMA application must feel:
- **Minimal** without feeling empty.
- **Modern** without following short-lived trends.
- **Premium** without unnecessary decoration.
- **Clean and professional**.
- **Purposeful** rather than visually busy.
- **Human-designed** rather than AI-generated.
- **Fast, responsive, and easy to navigate.**

Every design decision must have a clear purpose. Before introducing any UI element, ask:
- Does this improve usability?
- Does it simplify the interface?
- Does it reduce cognitive load?
- Is it necessary?
- Does it align with the product's purpose?

If the answer is **no**, omit it.

---

## 2. Design Principles

### Rounded Corners
Use rounded corners consistently across the application.
- **Soft, modern radius:** Avoid harsh, sharp edges unless intentionally required for a specific component.
- **Consistent scale:** Cards, dialogs, buttons, inputs, dropdowns, and structural containers should follow the same harmonious radius system.

### Visual Balance
Maintain a delicate balance between minimalism, usability, whitespace, hierarchy, and personality.
**Avoid:**
- Overly flat interfaces
- Excessive gradients or glow effects
- Heavy, excessive shadows
- Unnecessary animations
- Decorative elements without purpose

### Anti-AI Slop
The interface must never resemble generic AI-generated dashboards or sloppy prototypes.
**Avoid:**
- Repeated, monotonous card layouts
- Random gradients and oversized headings
- Excessive use of glassmorphism where it doesn't aid context
- Inconsistent spacing, typography, and border radii
- Decorative icons placed everywhere without meaning
- Meaningless statistics and unnecessary widgets

**Focus on:**
- Strong visual hierarchy
- Intentional, generous spacing
- Consistent rhythm
- Thoughtful typography
- Meaningful interactions

*Every screen should appear intentionally crafted by a human designer.*

### Responsiveness
Every component must work seamlessly on Mobile, Tablet, and Desktop. Layouts should adapt naturally to screen sizes without breaking the visual rhythm or requiring massive structural shifts.

### Motion
Increase the thoughtful use of `Shery.js` and CSS transitions, but use them *only* where they enhance the user experience.
- **Suitable areas:** Hero interactions, hover effects, cursor interactions, image reveals, navigation/section transitions, and scroll-based interactions.
- **Constraint:** Avoid excessive, jarring, or distracting animations. Motion should support usability and provide feedback, not dominate the interface.

---

## 3. Application Design Language

The internal application (dashboard) should feel similar in quality to products like WhatsApp—not by copying its exact appearance, but by adopting its core product principles:
- **Clean and Lightweight**
- **Efficient and Fast**
- **Familiar**
- **Focused entirely on content**

This means utilizing minimal UI chrome, high readability, excellent spacing, intuitive micro-interactions, low cognitive load, and predictable navigation.

---

## 4. Login Experience

The login and authentication experience must emphasize extreme simplicity and focus.
- **Characteristics:** Minimal visual elements, generous whitespace ("breathing room"), clear visual hierarchy, fast comprehension, and a strong focus on the primary action (logging in/signing up).
- **Avoid:** Unnecessary illustrations, excessive marketing copy, decorative backgrounds, and complicated multi-step layouts.
- **Goal:** The page should instantly communicate trust, clarity, and efficiency.

---

## 5. Content & Context

Always use `docs/about.md` as the absolute primary reference for:
- Product identity
- Messaging and terminology
- Tone of voice
- Visual personality
- Overall design language

Generated UI and text content must strictly align with the product context and terminology defined in `about.md`.

---

## 6. Agent Decision Framework

Before implementing any new component, interaction, or layout, AI agents must evaluate the following:
1. Is it necessary?
2. Does it improve usability?
3. Can an existing component or pattern be reused?
4. Does it maintain strict visual consistency?
5. Does it simplify the experience?
6. Is there a more minimal solution?
7. Does it align with the established design language?

*When in doubt, choose the simpler, more minimal solution.*

---

## 7. Success Criteria

By following this document, any interface built for LUMA must be:
- Visually cohesive and accessible
- Modern yet timeless
- Minimal without being empty
- Premium without excess
- Clearly human-designed
- Fully responsive and fast
- Consistent across all pages
- Easy to extend
- Faithful to the product's identity and design language
