# Design System Document
**LEADS Next Gen Centre** · v1.0

---

## 1. Project Overview

**LEADS Next Gen Centre** — India's first leadership and non-technical skill upliftment centre, showcasing its events, achievements, and initiatives to a national audience of government, industry, founders, students, and researchers. Primary goal: help visitors understand the centre's initiatives and convert into leads.

## 2. Site Map

| Page | What It's For | Login Needed | Complexity |
|---|---|---|---|
| Home | Hero introduction + highlights | 🔓 No | Medium |
| Events | Browse events; pop-up detail per event | 🔓 No | Complex |
| About Us | Story, numbers, Leadership/Board section | 🔓 No | Medium |
| Reports | Dropdown list of downloadable PDF reports | 🔓 No | Simple |
| Contact Us | Lead capture form | 🔓 No | Simple |
| BLS / LEADS Portal | External links only | 🔓 No (portal itself will require login) | Simple |

## 3. Page-by-Page Summary

**Home** — Sections: nav, hero (statement + key stat + primary CTA), "What is LEADS" intro, achievements strip (e.g. 30+ events), events preview, about teaser, footer. Background: animated Threads visual behind the hero only.

**Events** — Sections: nav, page intro, filterable grid of event cards, pop-up modal per event (name, event logo/branding, description, date, outcomes, optional external link), footer. Background: calm, mostly-still gradient.

**About Us** — Sections: nav, mission/story, "by the numbers," **Leadership / Board of Members grid** (photo, name, title, one-line bio per member), affiliation note (MSRUAS), footer. Background: calm, mostly-still gradient.

**Reports** — Accessible via nav dropdown rather than a standalone hero page; when landed on directly, shows a simple list of report cards (title, year, one-line summary, Download button). Background: static.

**Contact Us** — Sections: nav, short intro, lead form (name, email, organisation/role, area of interest, message), footer. Background: static, no distraction.

## 4. Layout Principles

- Content area capped at a comfortable reading width on interior pages; the homepage hero is allowed to run full-width for visual impact.
- Generous vertical spacing between sections so the site never feels crowded — this reads as "premium," not sparse.
- Visual priority: hero statement and key stats first, then proof (events/achievements), then story (about), then action (contact). Every page funnels toward either exploring more of the centre or reaching Contact Us.
- Event cards and Leadership/Board cards use a consistent card format across the site for visual coherence.

## 5. Components Preview (described)

- **Navigation bar:** Fixed top bar, centre logo left, primary links centre/right, "Contact Us" styled as a distinct gold button, external links (BLS, LEADS Portal) marked with a small external-link icon.
- **Hero section:** Large heading over the animated Threads background, one-line mission statement, primary CTA button.
- **Cards:** Rounded corners, soft shadow, violet-tinted border on hover — used for events, reports, and board members.
- **Buttons:** Primary = solid gold fill (main actions like "Get in Touch"); Secondary = outlined violet (e.g. "Learn More"); Ghost = text-only violet (used for nav-style links).
- **Form fields:** Clean, generous padding, violet focus ring, clear labels above each field (never placeholder-only).
- **Footer:** Deep violet background, white/gold text, organised into link columns plus the MSRUAS affiliation line.

## 6. Colour Palette — Light Mode

| Colour | Name | Used For | Why It Works |
|---|---|---|---|
| `#361B6A` | Royal Violet | Primary buttons, nav, headings accents | Conveys authority and premium credibility for government/industry visitors |
| `#7A4DD2` | Soft Violet | Secondary elements, hover states | Adds warmth and approachability without losing the violet identity |
| `#D4A537` | Warm Gold | CTAs, key stats, highlights | Draws the eye to action and achievement — keeps the site from feeling flat |
| `#FFFFFF` | Clean White | Page background | Keeps content legible and premium, not busy |
| `#1A1A1A` / `#4A4A4A` | Charcoal / Grey | Body text / secondary text | High legibility for long-form reading |

## 7. Colour Palette — Dark Mode

| Colour | Name | Used For |
|---|---|---|
| `#140B29` | Deep Violet Night | Page background |
| `#361B6A` | Royal Violet | Cards, surfaces at low opacity |
| `#D4A537` | Warm Gold | CTAs, highlights (unchanged — gold reads well on dark) |
| `#F0F0F0` / `#A0A0A0` | Off-White / Grey | Body text / secondary text |

Toggle switches instantly between modes; system preference is respected by default.

## 8. Typography

- **Page titles:** Bold, large serif or confident sans-serif (e.g. a strong grotesk) — projects authority.
- **Section headings:** Same family, medium weight, clearly smaller than titles.
- **Body text:** Clean, highly legible sans-serif at comfortable line height for long reading (about-us story, event descriptions).
- **Captions/labels:** Smaller, slightly muted colour, used for stat labels and form hints.

*Rationale:* A confident, slightly formal typeface pairing signals credibility to government/industry visitors while remaining clean enough not to feel stiff to students.

## 9. Background Design

- **Home (hero):** The "Threads" flowing-line animation, rendered in violet tones at low opacity — soft, moving lines that suggest connection and momentum. Communicates: "a living, growing ecosystem of leaders," directly echoing LEADS' mission of connecting people into a leadership network. Static fallback: a still, single frame of the same line pattern.
- **Events / About:** A much subtler, largely static gradient in the same violet family — keeps focus on content while maintaining brand continuity.
- **Reports / Contact Us:** Fully static, clean background — nothing competes with downloading a report or completing a form.
- All animated elements respect reduced-motion preferences and simplify on mobile.

## 10. Design Principles

1. Credibility first — every design choice should read as premium and trustworthy to a government or industry visitor.
2. Motion with purpose — animation appears only where it reinforces the brand story (the hero), never as decoration elsewhere.
3. One clear next step per page — every page should make it obvious what to do next.
4. Consistency over novelty — the same card, button, and colour language repeats everywhere so the site feels like one coherent centre, not a patchwork of pages.
5. Respect every visitor's context — accessible, fast, and legible on any device, for any audience.

## 11. Dark / Light Mode Toggle

- Lives in the top navigation bar, always visible.
- The visitor's choice is remembered for future visits; if no choice has been made, the site follows their device's system preference automatically.
