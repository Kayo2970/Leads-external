# LEADS Next-Gen Centre — External Web Platform & Governance Portal

> **Centre for Leadership Empowering Attitude Development for Sustainability (LEADS)**  
> *Faculty of Management and Commerce (FMC) · M. S. Ramaiah University of Applied Sciences (RUAS), Bengaluru, India*

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat-square&logo=greensock)](https://greensock.com/gsap/)

---

## 📌 Overview

The **LEADS External Web Platform** is the flagship public-facing web presence and governance showcase for the **LEADS Next-Gen Centre** at Ramaiah University of Applied Sciences. 

Designed with an ultra-premium executive aesthetic (Deep Royal Purples `#241147`, Imperial Violet `#361C6A`, Crimson Rose `#9C1256`, and Radiant Orange `#DE3F11`), the platform bridges empirical academic rigor with real-world executive empowerment and multidisciplinary non-technical leadership.

---

## ✨ Key Features & Architecture

### 1. 🎬 Cinematic Hero with Logo Scroll Mask (`LogoScrollExpand`)
- **Custom Vector Mask**: Incorporates the official LEADS insignia as an SVG alpha channel mask (`public/leads-mask.svg`).
- **GSAP Scroll-Triggered Zoom**: As users scroll down the hero section, the logo dynamically zooms and opens up from a centered icon to reveal full-stage campus media and institutional headlines.

### 2. 🏛️ Interactive Institutional Organogram (`OrganogramChart`)
- **Full-Width Visual Hierarchy**: Spans 4 distinct governance tiers:
  - **Tier 01: University Patronage & Advisory** (Honourable Vice-Chancellor & Dean FMC).
  - **Tier 02: Centre Leadership & Faculty Heads** (Centre Head, Campus Event Leads, Industry Relations, Fiscal Governance).
  - **Tier 03: Governing & Corporate Advisory Board** (Dignitaries from AIM, NSDC, MeitY, INDIAai, and industry leaders).
  - **Tier 04: Student Executive Wings** (Student Core Council, Student Advisory Council, Student Trainee Associates).
- **Interactive Deep Linking**: Clicking any governance level in the organogram smoothly navigates to and filters the directory below.

### 3. 👥 Interactive Dynamic Member Cards (`ChromaGrid`)
- **Cursor-Tracking Spotlight**: Interactive GSAP quickSetter spotlighting that tracks pointer coordinates across cards.
- **Portrait Executive Format**: Optimized `3:3.8` portrait vertical ratio cards for all university patrons, faculty heads, advisors, and student council members.
- **Partitioned Councils**: Organized governance tiers with filter tabs and LinkedIn links.

### 4. 📅 Chronological Alternating Events Engine (`/events`)
- **Alternating Zigzag Layout**: High-impact event cards alternating content and event photographs (Item 1: Content Left / Photo Right; Item 2: Photo Left / Content Right).
- **Comprehensive Metadata**: Date, venue, attendee statistics, keynote dignitaries, and registration pathways.

### 5. 🔐 Streamlined LEADS Member ERP Portal Gateway (`/portal`)
- **Production-Ready Enterprise Portal**: Dedicated gateway for LEADS executive council, faculty leads, and student officers.
- **Direct Single Launch**: Direct authentication launcher to access event management, task engines, budget tracking, minutes archive, and design asset approvals.

### 6. 📊 Institutional Reports & Publications (`/reports`)
- **Audits & Whitepapers**: Central repository for annual governance reports, leadership summits, student development reviews, and policy documents with live downloadable briefs.

### 7. 🚀 Production SEO & Search Indexing
- **Dynamic XML Sitemap**: Generated via `app/sitemap.ts` mapping all static and dynamic routes.
- **Robots Protocol**: Managed via `app/robots.ts` configured for search crawler indexing.
- **4K Ultra-Wide Optimized**: Layout utilities spanning up to `4xl` breakpoints (3840px) to prevent empty margins on large display monitors.

---

## 🗂️ Project Directory Structure

```text
Leads-external/
├── app/
│   ├── layout.tsx              # Root Layout with Navbar, Footer, and Fonts
│   ├── page.tsx                # Home Page with LogoScrollExpand Hero & Flagships
│   ├── sitemap.ts              # Automated XML Sitemap generation for SEO
│   ├── robots.ts               # Robots.txt crawler configuration
│   ├── about/
│   │   └── page.tsx            # Vision, Mission, Organogram & Partitioned Members Directory
│   ├── events/
│   │   └── page.tsx            # Chronological Alternating Event Showcase
│   ├── reports/
│   │   └── page.tsx            # Annual Audits, Whitepapers, and Impact Publications
│   ├── portal/
│   │   └── page.tsx            # LEADS Members ERP Portal Gateway
│   ├── contact/
│   │   └── page.tsx            # Executive Communication Desk & Campus Maps
│   ├── privacy/page.tsx        # Privacy Policy
│   ├── terms/page.tsx          # Terms of Service
│   ├── cookies/page.tsx        # Cookie Policy
│   └── accessibility/page.tsx  # Digital Accessibility Statement
├── components/
│   ├── LogoScrollExpand.tsx    # GSAP Scroll-triggered SVG Logo Mask Opening
│   ├── LogoScrollExpand.css    # Responsive styles for logo mask transformation
│   ├── ChromaGrid.tsx          # GSAP Spotlight Interactive Portrait Member Grid
│   ├── ChromaGrid.css          # Dynamic lighting & portrait styling
│   ├── OrganogramChart.tsx     # 4-Tier Interactive Governance Structure
│   ├── BorderGlow.tsx          # Multi-color animated glowing borders
│   ├── Nav.tsx                 # Responsive executive navigation bar
│   └── Footer.tsx              # Comprehensive footer with official FMC & RUAS affiliations
├── lib/
│   ├── board-data.ts           # Comprehensive member database & roles
│   └── events-data.ts          # Summit, masterclass, and workshop records
├── public/
│   ├── leads-mask.svg          # Official vector alpha-channel mask
│   ├── leads-header-logo.png   # Centre logo asset
│   ├── fmc-logo-white.png      # FMC institutional logo
│   └── images/                 # Leadership, summit, and event visual assets
├── tailwind.config.js          # Custom theme tokens, colors, and 4K breakpoints
└── package.json                # Project dependencies & scripts
```

---

## 🎨 Color Palette & Design System

| Token | Hex | Role |
| :--- | :--- | :--- |
| **Deep Royal Purple** | `#241147` | Background foundation & Dark Mode Sections |
| **Imperial Violet** | `#361C6A` | Hero sections, cards, and primary containers |
| **Crimson Rose** | `#9C1256` | Primary accents, gradients, and badge highlights |
| **Radiant Orange** | `#DE3F11` | Action accents, glow highlights, and CTA buttons |
| **Soft Lilac Light** | `#FDFBFF` / `#F7F4FC` | Light content section backdrops |
| **Crisp White** | `#FFFFFF` | Primary headings and container surfaces |

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js**: `v18.17.0` or later
- **npm** or **pnpm** / **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Kayo2970/Leads-external.git
   cd Leads-external
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the assigned port) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Start production server**:
   ```bash
   npm start
   ```

---

## 🏛️ Institutional Governance

**LEADS Next-Gen Centre** operates under the academic deanship of the **Faculty of Management and Commerce (FMC)** at **M. S. Ramaiah University of Applied Sciences (RUAS)**, Bengaluru.

For administrative inquiries and official correspondence:
- **Email**: `leads@msruas.ac.in`
- **Location**: Gnanagangothri & Ramaiah Technology Campuses, Bengaluru, Karnataka, India.


---

© 2026 LEADS Next-Gen Centre · Faculty of Management and Commerce · RUAS. All Rights Reserved.

---

## 🔧 Pending Configuration

> **For AI / Developer**: The following items are intentionally left as placeholders and must be updated before the next deployment.

### ERP Portal External Link

The **"Login for Members"** button on the `/portal` page currently points to a placeholder URL (`#`).  
When the ERP portal URL is available, update the constant at the **top of this file**:

```
File: app/portal/page.tsx
Line: const ERP_PORTAL_URL = "#";
```

Replace `"#"` with the actual external ERP portal URL, for example:

```ts
const ERP_PORTAL_URL = "https://erp.leadsnextgen.in"; // ← set this
```

The button already opens in a new tab (`target="_blank"`) and has the correct styling. No other changes are needed.
