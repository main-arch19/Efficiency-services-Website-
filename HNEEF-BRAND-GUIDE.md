# HNeef Efficiency Services — Brand Guide

> **FOR CLAUDE CODE**: Read this file FIRST. Load `hneef-brand-tokens.json` for all values. Place `hneef-logo.jpeg` into `/public/images/`. Use images from "photo assets" folder. Follow every rule below.

---

## Brand Overview

**HNeef Efficiency Services (HES Jamaica)** is a Kingston, Jamaica-based company combining physical maintenance (cleaning, landscaping, outdoor work) with digital automation (Google Sheets, Excel systems, workflow optimization). The tagline is **"Streamline Your Success."** The default theme is **dark mode** with deep navy backgrounds.

**The #1 goal of the website is to get visitors to BOOK A FREE CONSULTATION.** Every section drives toward this action.

---

## Logo

The logo is a **3D geometric "H" made of two interlocking arrows** — a **blue arrow** pointing upward-right (growth/efficiency) and a **red arrow/chevron** below (action/reliability). Below: "HNeef" in dark grey, "Efficiency Services" in red, and "Streamline Your Success" in italic blue script.

### Logo Rules
- Always display on dark backgrounds (#0B0F1A or #131929)
- On light backgrounds, ensure sufficient contrast with a dark container
- Maintain clear space equal to the arrow icon height on all sides
- Minimum width: 120px
- NEVER stretch, rotate, recolor, add effects, or place on busy backgrounds without dark overlay

---

## Color System

### Two-Accent System (mirrors the logo)
The logo uses **blue and red** — so does the entire site. These two colors work as a pair:
- **Blue (#0D47A1)** = Primary accent. Navigation highlights, links, section borders, primary buttons for general actions, card hover glows, progress indicators
- **Red (#D32F2F)** = Action accent. The "Book Consultation" CTA button, urgent highlights, the "Efficiency Services" text treatment, hover emphasis on key conversion elements, the floating mobile CTA bar

### Color Hierarchy
- **Blue (#0D47A1)** = The dominant brand color — used 80% of the time for accents
- **Red (#D32F2F)** = Reserved for HIGH-IMPACT conversion elements — the consultation CTA button, the floating booking bar, and small highlight moments. Used 20% of the time
- **Navy (#0B0F1A)** = Primary dark background
- **Dark Navy (#131929)** = Secondary/alternating section backgrounds
- **Slate (#1C2333)** = Cards, inputs, elevated surfaces
- **Border (#2A3344)** = Card borders, dividers
- **Grey (#94A3B8)** = Secondary text
- **White (#FFFFFF)** = Primary text on dark

### Key Rule
The "Book Consultation" CTA is ALWAYS red (#D32F2F) — this makes it visually distinct from all other blue interactive elements. When a user sees red, they know it's the booking action.

### Accessible Pairings
- White on Navy Black ✓ (contrast 18.5:1)
- White on Blue ✓ (contrast 7.8:1)
- White on Red ✓ (contrast 5.6:1)
- Blue on White ✓ (contrast 7.8:1)
- Red on White ✓ (contrast 5.6:1)

---

## Typography

- **Space Grotesk** = All headings (h1–h4), display text — modern, geometric, technical
- **Inter** = Body, buttons, labels, nav, inputs — clean and readable
- **DM Serif Display** = Pull quotes, tagline, testimonials, mission statement — italic, adds warmth (mirrors the logo's script tagline)
- Min body size: 16px. Headings: 1.05–1.3 line-height. Body: 1.5–1.6

---

## Services (4 Categories)

### Digital Services (Blue-accented sections)
1. **System Development & Automation** ⚙️ — Automated Worksheets & Forms, Workflow Optimization, Smart Document Solutions, Custom Business Integrations

### Physical Services (Red-accented sections)
2. **Awning & Outdoor Maintenance** 🏡 — Awning Assembly & Installation, Shade & Style Setup, Weed Wacker & Chainsaw, Yard & Tree Maintenance
3. **General Residential Cleaning** 🧹 — Kitchen/Bathroom/Living, Deep Cleaning & Sanitization, Washing & Ironing, Move-In/Out Cleaning
4. **Window & Glass Cleaning** ✨ — Interior & Exterior Windows, Glass Doors & Mirrors, Grills, Blinds & Mesh Screens

**Visual differentiation**: Digital services get blue accent borders/icons. Physical services get red accent borders/icons. This mirrors the blue/red arrows in the logo and reinforces the company's unique dual offering.

---

## Consultation Booking

CTA must appear in: navbar (red button), hero, after services, after Why HES, floating mobile bar, CTA banner, footer.

### Form Fields
- Full Name (required)
- Phone Number (required — Jamaica +1-876 context, WhatsApp preferred)
- Email (required)
- Service Interest (dropdown: System Development, Awning & Outdoor, Residential Cleaning, Window & Glass, Multiple Services, Not Sure)
- Preferred Date (date picker)
- Brief Description (textarea, optional)
- Button: **"Book My Free Consultation"** — Red (#D32F2F), large, full-width on mobile

### Confirmation
- Animated checkmark
- "We'll contact you within 24 hours"
- Summary of submission

---

## Components

### Buttons
- **Primary (Blue)**: #0D47A1 bg, white text. General actions (Learn More, Explore, etc.)
- **CTA (Red)**: #D32F2F bg, white text, subtle red glow on hover. ONLY for booking consultation
- **Ghost**: Transparent + border, white text. Secondary actions
- All: Inter 600, 44px min touch target, 10px radius

### Cards
- Background: #1C2333, border: 1px solid #2A3344, radius: 16px
- Hover: translateY(-4px) + shadow + subtle blue or red border glow depending on service category
- Digital service cards → blue glow. Physical service cards → red glow

### Inputs
- Background: #1C2333, border: #2A3344, focus → blue ring (#0D47A1)
- Height: 48px, font: 16px, labels above in grey uppercase 12px

---

## Animation
- Scroll fade-up on every section (500ms ease-out, 100ms stagger)
- Parallax on hero + CTA banner (disabled on mobile)
- Hover micro-interactions on all elements (150–300ms)
- Respect prefers-reduced-motion
- Simple logo fade-in loading screen

---

## Mobile-First
- Build 375px first, enhance with md: / lg:
- 44px min tap targets, 48px inputs, 16px font
- 100dvh, safe-area-inset-bottom on fixed elements
- Zero horizontal overflow
- Floating red "Book Consultation" bar on mobile bottom
- WhatsApp click-to-chat link prominent (floating icon bottom-left)

---

## Voice & Tone
- Professional but approachable, results-focused
- Lead with benefits: ✓ "Reclaim your weekends" ✗ "Our cleaning services"
- Show transformation: ✓ "From spreadsheet chaos to automated clarity" ✗ "We do Excel"
- CTA: "Book Your Free Consultation", "Get Started Today", "Let's Streamline Your Success"
- NEVER: "Click Here", "Submit", "Send"
