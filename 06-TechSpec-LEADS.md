# Technical Specification
**LEADS Next Gen Centre — Website** · v1.0

---

## 1. Project Overview

A responsive, dynamic marketing website for LEADS Next Gen Centre with five in-app pages (Home, Events, About, Reports, Contact) plus two external nav links (BLS, LEADS Portal). Built custom-code, currently targeting local development, with an animated WebGL/Canvas hero background ("Threads") and a full light/dark theme system.

## 2. Recommended Tech Stack

| Layer | Technology | Why This Choice |
|---|---|---|
| Frontend framework | Next.js 14+ (App Router) + TypeScript *(recommended)* | Matches the React-based "Threads" component already provided; strong performance defaults, easy static/SSR mix |
| Styling | Tailwind CSS *(recommended)* | Fast, consistent theming via CSS variables; matches the pasted component's Tailwind variant |
| Hero background | `ogl` (WebGL) via the supplied `Threads` component | Already provided by the team; lightweight WebGL line renderer suited to the "dynamic and immersive" brief |
| Animations (non-hero) | Framer Motion + CSS | Page transitions and card hover states without heavy dependencies |
| Icons | Lucide React | Tree-shakeable, consistent icon set |
| Forms | Native React state + server action / API route | Keeps the Contact form simple and framework-native |
| Backend/API | Next.js API routes *(recommended)* | Sufficient for form submission handling; no separate backend needed for v1 |
| Data storage (leads) | Google Sheets or a simple database (e.g. Supabase) *(recommended — pending team decision)* | Either integrates cleanly with a Next.js API route; final choice depends on who reviews leads day-to-day |
| Hosting (once ready to go live) | Vercel *(recommended)* | Zero-config deploys for Next.js; free tier suitable for this project's scale |
| Local development | `localhost` (current stage, per team) | Matches current team setup; migrate to Vercel/production domain closer to launch |

## 3. Project File Structure

```
/app
  /page.tsx              → Home
  /events/page.tsx        → Events (grid + pop-up modal logic)
  /about/page.tsx         → About Us (incl. Leadership/Board section)
  /reports/page.tsx       → Reports listing (also surfaced via nav dropdown)
  /contact/page.tsx       → Contact Us (lead form)
  /api/contact/route.ts   → Handles form submission
/components
  /Threads.tsx             → Provided hero background component
  /Nav.tsx
  /Footer.tsx
  /EventCard.tsx
  /EventModal.tsx
  /ReportCard.tsx
  /BoardMemberCard.tsx
  /ContactForm.tsx
  /ThemeToggle.tsx
/lib
  /theme.ts                → Colour tokens, light/dark logic
  /events-data.ts          → Event content (name, description, dates, logo asset)
  /reports-data.ts         → Report list (title, year, PDF URL)
  /board-data.ts           → Leadership/Board member list
/public
  /events/[event-logos]
  /reports/[pdf-files]
  /board/[member-photos]
```

## 4. Page & Route Map

| URL | Page | Auth Required | Component File | Notes |
|---|---|---|---|---|
| `/` | Home | No | `app/page.tsx` | Hosts the Threads hero background |
| `/events` | Events | No | `app/events/page.tsx` | Modal pop-up per event, no unique URL per event |
| `/about` | About Us | No | `app/about/page.tsx` | Includes Leadership/Board of Members grid |
| `/reports` | Reports | No | `app/reports/page.tsx` | Also linked via nav dropdown items directly to PDFs |
| `/contact` | Contact Us | No | `app/contact/page.tsx` | Posts to `/api/contact` |
| *external* | BLS | No | Nav link only | `target="_blank" rel="noopener noreferrer"` |
| *external* | LEADS Portal | No (login handled by the portal itself) | Nav link only | Activate once portal domain is confirmed |

## 5. Colour Token System

```css
:root {
  --color-primary: #361B6A;      /* Royal Violet */
  --color-secondary: #7A4DD2;    /* Soft Violet */
  --color-accent: #D4A537;       /* Warm Gold */
  --color-bg: #FFFFFF;
  --color-surface: rgba(54,27,106,0.04);
  --color-card: rgba(54,27,106,0.08);
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #4A4A4A;
  --color-text-muted: #8A8A8A;
}
[data-theme="dark"] {
  --color-bg: #140B29;
  --color-surface: rgba(54,27,106,0.12);
  --color-card: rgba(54,27,106,0.16);
  --color-text-primary: #F0F0F0;
  --color-text-secondary: #A0A0A0;
  --color-text-muted: #606060;
}
```
File location: `/lib/theme.ts` + Tailwind `theme.extend.colors` mapped to these CSS variables.

## 6. Background & Animation Implementation

| Page | Technique | File | Responsive Behaviour | Reduced-Motion Fallback |
|---|---|---|---|---|
| Home hero | `Threads` (ogl/WebGL) | `components/Threads.tsx` | Reduced `amplitude`/pixel density on mobile; capped render resolution (already built into the provided component) | Renders a single still frame; component already pauses on tab/visibility change |
| Events, About | Category 1 — CSS animated gradient, low amplitude | Tailwind utility classes / a small `Background.tsx` wrapper | Simplified to static gradient on mobile | Static gradient |
| Reports, Contact | Static only | Plain background colour/token | N/A | N/A |

All animated elements wrapped in `@media (prefers-reduced-motion: reduce)` fallbacks per project standard.

## 7. Dark / Light Mode Implementation

- Toggle component (`ThemeToggle.tsx`) sets `data-theme` attribute on `<html>`.
- Preference persisted in `localStorage`; on first visit, falls back to `prefers-color-scheme` system setting.
- No flash-of-wrong-theme: theme resolved via an inline script in `<head>` before hydration.

## 8. Data Models

**Event**
| Field | Type | Required | Notes |
|---|---|---|---|
| id | string | Yes | Slug-like identifier |
| name | string | Yes | e.g. "Bharath Leadership Summit" |
| logoUrl | string | Yes | Event-specific branding asset |
| description | string | Yes | Shown inside the pop-up |
| date | string | Yes | Display date |
| externalLink | string | No | Optional link out (e.g. registration) |

**Report**
| Field | Type | Required | Notes |
|---|---|---|---|
| id | string | Yes | |
| title | string | Yes | |
| year | string | Yes | |
| summary | string | No | One-line description |
| fileUrl | string | Yes | PDF path |

**BoardMember**
| Field | Type | Required | Notes |
|---|---|---|---|
| id | string | Yes | |
| name | string | Yes | |
| title | string | Yes | e.g. "Chairperson," "Board Member" |
| photoUrl | string | No | Falls back to initials avatar if missing |
| bio | string | No | One to two lines |

**LeadSubmission**
| Field | Type | Required | Notes |
|---|---|---|---|
| name | string | Yes | |
| email | string | Yes | Validated format |
| organisation | string | No | |
| interestArea | string | No | e.g. "Events," "Partnerships," "General" |
| message | string | No | |
| submittedAt | timestamp | Yes | Auto-generated |

## 9. Third-Party Integrations

| Service | Purpose | Package | Notes |
|---|---|---|---|
| Google Analytics 4 | Traffic and event tracking | `@next/third-parties` or GTM | See Analytics Plan |
| Google Tag Manager | Central tag management | GTM snippet | Add all future tags here |
| Hotjar | Heatmaps/session recordings | Hotjar snippet via GTM | Free plan |
| Lead storage (Sheets or Supabase) | Store Contact form submissions | `googleapis` or `@supabase/supabase-js` | Final choice pending team decision (see PRD Open Questions) |

## 10. Environment Variables

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID | Yes (once live) |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID | Yes (once live) |
| `LEAD_STORAGE_API_KEY` | Credential for chosen lead storage (Sheets/Supabase) | Yes |
| `LEAD_STORAGE_ENDPOINT` | Endpoint/Sheet ID/Supabase URL for lead storage | Yes |
| `NEXT_PUBLIC_BLS_URL` | External BLS website URL | Yes |
| `NEXT_PUBLIC_PORTAL_URL` | External LEADS Portal URL | No — until portal is deployed |

## 11. Performance Checklist

1. Lighthouse Performance ≥ 90 on mobile.
2. Largest Contentful Paint ≤ 2.5s.
3. Cumulative Layout Shift ≤ 0.1.
4. Interaction to Next Paint ≤ 200ms.
5. All images WebP, lazy-loaded below the fold, explicit width/height set.
6. Fonts preloaded with `font-display: swap`.
7. Tailwind purge/JIT enabled — no unused CSS shipped.
8. Threads WebGL canvas resolution capped (already implemented in the provided component) to protect performance on large/high-DPI screens.
9. Third-party scripts (GA4, GTM, Hotjar) loaded `async`/`defer`.

## 12. Accessibility Checklist

1. WCAG 2.2 AA compliance target.
2. All images have descriptive alt text (event logos, board member photos).
3. All interactive elements keyboard-navigable, including the Events pop-up (must be closable via Escape key and trap focus while open).
4. Visible focus indicators throughout.
5. Colour contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text (validated against the violet/gold palette in both modes).
6. `prefers-reduced-motion` respected for the Threads background and all other animation.
7. Contact form fields have visible labels, not placeholder-only text.

## 13. SEO Checklist

1. `next/metadata` used for titles/descriptions on every page.
2. Open Graph tags on all public pages (especially Home and Events, for social sharing).
3. Canonical URLs set.
4. `sitemap.xml` generated via `next-sitemap`, matching Section 6 of the Sitemap document.
5. `robots.txt` configured to allow indexing of all public pages.

## 14. Deployment Guide

1. **Local setup:** `npm install`, run `npm run dev`, confirm all pages render at `localhost:3000`.
2. **Staging:** Deploy to a Vercel preview environment once a domain/hosting decision is made; test all forms and links there before going further.
3. **Production:** Point the final domain to Vercel, enable HTTPS (automatic on Vercel), set all environment variables from Section 10, then run through the full Launch Checklist before announcing publicly.

## 15. Open Technical Questions

1. Final choice of lead-storage backend (Google Sheets vs. Supabase vs. other) — affects Section 9/10.
2. Domain name and hosting timeline, given the team is currently on localhost.
3. Whether the LEADS Portal (ERP) will be a fully separate application or share authentication with this site in future.
4. Source and format of event logos/artwork for the Events pop-ups (final assets vs. placeholders at launch).
