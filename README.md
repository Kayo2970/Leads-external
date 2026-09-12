# LEADS Next-Gen Centre — External Web Platform & Governance Hub

> **Centre for Leadership Empowering Attitude Development for Sustainability (LEADS)**  
> *Faculty of Management and Commerce (FMC) · M. S. Ramaiah University of Applied Sciences (RUAS), Bengaluru, India*

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat-square&logo=greensock)](https://greensock.com/gsap/)
[![Production Ready](https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=flat-square)](#)

---

## 📌 Overview

The **LEADS External Web Platform** is the flagship public-facing digital platform and governance showcase for the **LEADS Next-Gen Centre** at Ramaiah University of Applied Sciences (RUAS). 

Designed with an ultra-premium executive aesthetic (Deep Royal Purples `#241147`, Imperial Violet `#361C6A`, Crimson Rose `#9C1256`, and Radiant Orange `#DE3F11`), the platform bridges empirical academic rigor with real-world executive empowerment and multidisciplinary non-technical leadership.

---

## ✨ Key Features & Architecture

### 1. 🧭 Rounded Floating Glassmorphic Navigation (`Nav.tsx`)
- **Floating Pill Header**: Modern floating navigation bar with rounded borders (`rounded-2xl lg:rounded-full`), saturated backdrop blur, and 360° glassmorphic border highlights.
- **Dynamic Dropdowns**: Instant access to LEADS Initiatives, Summits (BHARAT LEAD SUMMIT 2026), and Official Impact Publications.
- **Responsive Mobile Drawer**: Matching rounded drawer menu with direct access to all flagship programs and documents.

### 2. 🎬 Cinematic Hero with Logo Scroll Mask (`LogoScrollExpand.tsx`)
- **Custom Vector Mask**: Official LEADS insignia SVG alpha-channel mask (`public/leads-mask.svg`).
- **GSAP Scroll-Triggered Zoom**: As visitors scroll, the logo dynamically zooms and expands to reveal campus media, video reels, and institutional headlines.

### 3. 🏛️ Interactive Governance Organogram (`OrganogramChart.tsx`)
- **Full-Width Hierarchy**: Multi-tier flowchart connecting:
  - **Patron & Chief Advisory**: Vice-Chancellor, Dean FMC & Strategic Leadership.
  - **Centre Leadership & Faculty Leads**: Centre Head, Campus Event Leads, Industry Relations & Fiscal Governance.
  - **Governing & Corporate Advisory Board**: Dignitaries from AIM, NSDC, MeitY, INDIAai, and industry captains.
  - **Student Councils**: Student Core Council, Advisory Council, and Student Trainees.
- **Deep-Linked Interactions**: Clicking any governance level smoothly highlights the corresponding directory section.

### 4. 👥 Interactive Executive Member Cards (`ChromaGrid.tsx` & `BoardMemberCard.tsx`)
- **Cursor-Tracking Spotlight**: GSAP quickSetter spotlight lighting following the user's cursor across cards.
- **Portrait Executive Format**: Optimized `3:3.8` portrait vertical ratio cards for all patrons, faculty heads, advisors, and student council members.
- **Verified Metadata**: Categorized role badges, designations, campus affiliations, and direct LinkedIn profile integration.

### 5. 📅 Alternating Events Engine & Modal Showcase (`/events`)
- **Chronological Alternating Grid**: Alternating layout with high-resolution event media, date/venue metadata, and attendee metrics.
- **Rich Event Modal (`EventModal.tsx`)**: Fullscreen inspection modals with multi-photo carousels, schedule breakdowns, and registration pathways.

### 6. 🎓 Comprehensive Capability Programs (`/programs`)
- **Flagship Modules**: Comprehensive review of Executive FDP (Faculty Development), LDP (Leadership Development), MDP (Management Development), Vanguard Series, and SDP (Student Development).
- **BHARAT LEAD SUMMIT 2026**: Direct integration with India's premier annual leadership convention.

### 7. 🤝 Institutional & Industry Partners (`/partners`)
- **Multi-Tier Alliances**: Academic collaborations, corporate partners, industry apex bodies (FICCI, NHRD, AIMS), and government missions.
- **Interactive Alliances Directory**: Filterable catalog of partner organizations with partnership scopes and verification details.

### 8. 📊 Verified Impact Publications & Interactive Reader (`/reports`)
- **Official Annual Impact Report**: Showcases the verified **`LEADS Impact Report 2025–2026`** (12.4 MB PDF).
- **Interactive Central Reader**: Embedded live PDF reader with fullscreen modal inspection, page jump, and direct verified downloads.

### 9. 🔐 LEADS Member ERP Gateway (`/portal`)
- **Internal System Hub**: Access point for executive council members, event managers, attendance registers, and resource vaults.

### 10. 🚀 Performance, Accessibility & SEO
- **Automated Sitemap & Robots**: Generated dynamically via `app/sitemap.ts` and `app/robots.ts`.
- **4K Ultra-Wide Screen Optimization**: Dedicated layout utilities up to `4xl` breakpoints (3840px) to prevent empty margins on ultra-wide displays.
- **Full Legal Compliance**: Integrated Cookie Consent Banner, Privacy Policy, Terms of Service, and Accessibility Statement.

---

## 🗂️ Project Directory Structure

```text
Leads-external/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata, navbar, and footer
│   ├── page.tsx                # Home page with hero, values, pillars & flagships
│   ├── about/page.tsx          # Vision, mission, organogram & leadership directory
│   ├── events/page.tsx         # Chronological events showcase & modal triggers
│   ├── programs/page.tsx       # Capability programs (FDP, LDP, MDP, Vanguard, SDP)
│   ├── partners/page.tsx       # Academic, industry & government alliances directory
│   ├── reports/page.tsx        # Official annual impact report & interactive reader
│   ├── portal/page.tsx         # LEADS internal ERP member portal gateway
│   ├── contact/page.tsx        # Executive communication desk, inquiry form & campus maps
│   ├── privacy/page.tsx        # Privacy Policy
│   ├── terms/page.tsx          # Terms of Service
│   ├── cookies/page.tsx        # Cookie Policy
│   ├── accessibility/page.tsx  # Accessibility Statement
│   ├── sitemap.ts              # Automated XML sitemap generation
│   └── robots.ts               # Web crawler search configuration
├── components/
│   ├── Nav.tsx                 # Rounded floating glassmorphic navigation bar
│   ├── Footer.tsx              # Comprehensive footer with official FMC & RUAS affiliations
│   ├── LogoScrollExpand.tsx    # GSAP scroll-triggered SVG logo zoom mask
│   ├── OrganogramChart.tsx     # Multi-tier interactive governance tree
│   ├── ChromaGrid.tsx          # Cursor-tracking spotlight member directory
│   ├── BoardMemberCard.tsx     # Executive portrait profile card
│   ├── EventCard.tsx           # Alternating event showcase card
│   ├── EventModal.tsx          # Rich modal viewer for event details and media
│   ├── ReportCard.tsx          # Verified publication highlight card
│   ├── PdfViewerModal.tsx      # Fullscreen interactive PDF viewer modal
│   ├── CookieBanner.tsx        # GDPR/India compliance cookie banner
│   └── BorderGlow.tsx          # Hardware-accelerated glowing gradient borders
├── lib/
│   ├── board-data.ts           # Complete leadership and governance registry
│   ├── events-data.ts          # Summits, masterclasses, and workshop archives
│   ├── reports-data.ts         # Verified impact report catalog
│   └── placeholders.ts         # Numbered visual placeholder system
├── public/
│   ├── leads-short-logo.png    # LEADS insignia logo
│   ├── ruas-logo.png           # Ramaiah University official seal
│   ├── bls-logo.webp           # BHARAT LEAD SUMMIT 2026 emblem
│   ├── reports/                # Official verified PDF publications
│   └── images/                 # Committee portraits, summits, and campus assets
├── tailwind.config.js          # Extended brand colors, shadows, and breakpoints
└── package.json                # Project dependencies and build scripts
```

---

## 🎨 Color Palette & Visual System

| Color Name | Hex Code | Purpose & Usage |
| :--- | :--- | :--- |
| **Deep Royal Purple** | `#1E0C3D` / `#241147` | Primary background foundation & dark mode sections |
| **Imperial Violet** | `#361C6A` | Hero headers, card backgrounds, and primary containers |
| **Crimson Rose** | `#9C1256` | Primary accents, gradients, badges, and brand highlights |
| **Radiant Orange** | `#DE3F11` | Action accents, glow effects, and primary CTA buttons |
| **Lilac Mist** | `#E2D9F3` | Secondary text, subtle descriptions, and borders |
| **Pure White** | `#FFFFFF` | Primary headlines and high-contrast surfaces |

---

## 🛠️ Getting Started & Local Development

### Prerequisites
- **Node.js**: `v18.17.0` or higher
- **npm**, **pnpm**, or **yarn**

### Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Kayo2970/Leads-external.git
   cd Leads-external
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3001](http://localhost:3001) in your browser.

4. **Build production bundle**:
   ```bash
   npm run build
   ```

5. **Run production build**:
   ```bash
   npm start
   ```

---

## 🏛️ Institutional Governance

**LEADS Next-Gen Centre** operates under the academic deanship of the **Faculty of Management and Commerce (FMC)** at **M. S. Ramaiah University of Applied Sciences (RUAS)**, Bengaluru.

- **Official Email**: `leads@msruas.ac.in`
- **Campuses**: 
  - Gnanagangothri Campus (GG Campus), New BEL Road, Bengaluru
  - Ramaiah Technology Campus (RTC Campus), Peenya, Bengaluru

---

© 2026 LEADS Next-Gen Centre · Faculty of Management and Commerce · RUAS. All Rights Reserved.
