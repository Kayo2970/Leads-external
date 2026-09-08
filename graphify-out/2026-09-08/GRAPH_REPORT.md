# Graph Report - Leads-external  (2026-09-08)

## Corpus Check
- 40 files · ~18,199 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 243 nodes · 252 edges · 26 communities (23 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `24b2e0b0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_compilerOptions|compilerOptions]]
- [[_COMMUNITY_PART 2 — COMPANY PROFILE|PART 2 — COMPANY PROFILE]]
- [[_COMMUNITY_Post-Launch Maintenance Guide|Post-Launch Maintenance Guide]]
- [[_COMMUNITY_Technical Specification|Technical Specification]]
- [[_COMMUNITY_page.tsx|page.tsx]]
- [[_COMMUNITY_Nav.tsx|Nav.tsx]]
- [[_COMMUNITY_package.json|package.json]]
- [[_COMMUNITY_Competitor Research Brief|Competitor Research Brief]]
- [[_COMMUNITY_Design System Document|Design System Document]]
- [[_COMMUNITY_Social Media Kit Brief|Social Media Kit Brief]]
- [[_COMMUNITY_Project Requirements Document (PRD)|Project Requirements Document (PRD)]]
- [[_COMMUNITY_Launch Checklist|Launch Checklist]]
- [[_COMMUNITY_Analytics & Tracking Plan|Analytics & Tracking Plan]]
- [[_COMMUNITY_Sitemap & URL Structure|Sitemap & URL Structure]]
- [[_COMMUNITY_devDependencies|devDependencies]]
- [[_COMMUNITY_page.tsx|page.tsx]]
- [[_COMMUNITY_layout.tsx|layout.tsx]]
- [[_COMMUNITY_graphify|graphify.md]]
- [[_COMMUNITY_graphify|graphify.md]]
- [[_COMMUNITY_next.config.js|next.config.js]]

## God Nodes (most connected - your core abstractions)
1. `Post-Launch Maintenance Guide` - 17 edges
2. `compilerOptions` - 16 edges
3. `Technical Specification` - 16 edges
4. `Design System Document` - 12 edges
5. `Social Media Kit Brief` - 12 edges
6. `Project Requirements Document (PRD)` - 11 edges
7. `PART 2 — COMPANY PROFILE` - 10 edges
8. `Launch Checklist` - 10 edges
9. `Analytics & Tracking Plan` - 9 edges
10. `Competitor Research Brief` - 8 edges

## Surprising Connections (you probably didn't know these)
- `EventCardProps` --references--> `LEADSEvent`  [EXTRACTED]
  components/EventCard.tsx → lib/events-data.ts
- `EventModalProps` --references--> `LEADSEvent`  [EXTRACTED]
  components/EventModal.tsx → lib/events-data.ts
- `BoardMemberCardProps` --references--> `BoardMember`  [EXTRACTED]
  components/BoardMemberCard.tsx → lib/board-data.ts
- `ReportCardProps` --references--> `ImpactReport`  [EXTRACTED]
  components/ReportCard.tsx → lib/reports-data.ts
- `ThemeToggle()` --calls--> `getInitialTheme()`  [EXTRACTED]
  components/ThemeToggle.tsx → lib/theme.ts

## Import Cycles
- None detected.

## Communities (26 total, 3 thin omitted)

### Community 0 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 1 - "PART 2 — COMPANY PROFILE"
Cohesion: 0.11
Nodes (17): About Us (`/about`), Back Cover, By the Numbers, Clients & Partners, Contact, Contact Us (`/contact`), Content Document, Cover Page (+9 more)

### Community 2 - "Post-Launch Maintenance Guide"
Cohesion: 0.11
Nodes (17): 10. Security Checks, 11. Domain & Hosting Renewal, 12. Monthly Content Calendar (ties to Social Media Kit), 13. The Monthly Health Triangle, 14. When to Think About a Redesign, 15. AI Prompt Library (Quick Reference), 1. If Something Breaks (Quick Steps), 2. Weekly Tasks (+9 more)

### Community 3 - "Technical Specification"
Cohesion: 0.12
Nodes (16): 10. Environment Variables, 11. Performance Checklist, 12. Accessibility Checklist, 13. SEO Checklist, 14. Deployment Guide, 15. Open Technical Questions, 1. Project Overview, 2. Recommended Tech Stack (+8 more)

### Community 4 - "page.tsx"
Cohesion: 0.25
Nodes (7): EventCard(), EventCardProps, EventModalProps, Threads(), ThreadsProps, EVENTS_DATA, LEADSEvent

### Community 5 - "Nav.tsx"
Cohesion: 0.23
Nodes (8): ReportCard(), ReportCardProps, ThemeToggle(), ImpactReport, REPORTS_DATA, getInitialTheme(), setThemeAttr(), Theme

### Community 6 - "package.json"
Cohesion: 0.12
Nodes (15): dependencies, framer-motion, lucide-react, next, react, react-dom, name, private (+7 more)

### Community 7 - "Competitor Research Brief"
Cohesion: 0.15
Nodes (12): 1. Market Overview, 2. Competitor Profiles, 3. Gap Analysis, 4. Audience Sentiment, 5. Design Patterns to Break, 6. Content Opportunities, 7. Strategic Recommendations, Ashank Desai Centre for Leadership and Organisational Development (IIM Ahmedabad) (+4 more)

### Community 8 - "Design System Document"
Cohesion: 0.15
Nodes (12): 10. Design Principles, 11. Dark / Light Mode Toggle, 1. Project Overview, 2. Site Map, 3. Page-by-Page Summary, 4. Layout Principles, 5. Components Preview (described), 6. Colour Palette — Light Mode (+4 more)

### Community 9 - "Social Media Kit Brief"
Cohesion: 0.15
Nodes (12): 10. Paid Ads Primer, 11. How to Measure Success, 1. Your Social Media Goal, 2. Platform Recommendations, 3. Profile Setup Checklist, 4. Bio Copy (Ready to Use), 5. Content Pillars, 6. Visual Layout Guide (+4 more)

### Community 10 - "Project Requirements Document (PRD)"
Cohesion: 0.17
Nodes (11): 10. Open Questions, 1. Project Summary, 2. Goals, 3. Who Uses This Site, 4. Pages Overview, 5. Must-Have Features, 6. Out of Scope (Version 1), 7. How It Should Look and Feel (+3 more)

### Community 11 - "Launch Checklist"
Cohesion: 0.18
Nodes (10): 1. Launch Basics, 2. Content Checks (per page, from the Sitemap), 3. Form Testing, 4. Cross-Device & Cross-Browser Testing, 5. Interactive Elements, 6. Performance & Technical Checks, 7. SEO & Analytics, 8. Legal & Trust (+2 more)

### Community 12 - "Analytics & Tracking Plan"
Cohesion: 0.20
Nodes (9): 1. What Success Looks Like, 2. Recommended Tools, 3. Key Events to Track, 4. Conversion Goals, 5. Monthly Reporting Checklist, 6. Red Flags to Watch For, 7. 90-Day Review Plan, 8. Setup Instructions (Plain English) (+1 more)

### Community 13 - "Sitemap & URL Structure"
Cohesion: 0.22
Nodes (8): 1. Site Architecture, 2. Full URL Map, 3. Navigation Structure, 4. URL Rules, 5. Redirect Map, 6. XML Sitemap Plan, 7. Internal Linking Plan, Sitemap & URL Structure

### Community 14 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, autoprefixer, postcss, tailwindcss, @types/node, @types/react, @types/react-dom, typescript (+1 more)

### Community 15 - "page.tsx"
Cohesion: 0.43
Nodes (4): BoardMemberCard(), BoardMemberCardProps, BOARD_MEMBERS_DATA, BoardMember

### Community 16 - "layout.tsx"
Cohesion: 0.33
Nodes (4): inter, metadata, playfair, Footer()

## Knowledge Gaps
- **157 isolated node(s):** `inter`, `playfair`, `metadata`, `ThreadsProps`, `nextConfig` (+152 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **What connects `inter`, `playfair`, `metadata` to the rest of the system?**
  _157 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `PART 2 — COMPANY PROFILE` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `Post-Launch Maintenance Guide` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `Technical Specification` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._