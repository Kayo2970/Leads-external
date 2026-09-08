# Sitemap & URL Structure
**LEADS Next Gen Centre** · v1.0

---

## 1. Site Architecture

```
Level 1 (Primary Pages)
├── Home                          /
├── Events                        /events
├── About Us                      /about
├── Reports (dropdown)            /reports
│     └── Individual report links → direct PDF downloads (no sub-pages)
├── Contact Us                    /contact
├── BLS (external link)           → opens https://[bls-website] in a new tab
└── LEADS Portal (external link)  → opens https://[portal-domain] in a new tab (live once portal is deployed)

Level 2 (In-page, not URLs)
├── Events → event pop-ups (Catalyst, Bharath Leadership Summit, etc.) — rendered as modals over /events, no unique URL
└── About Us → Leadership / Board of Members section — in-page anchor, not a separate page
```

## 2. Full URL Map

| Page Name | URL Slug | Parent Page | Page Type | Auth Required | Priority |
|---|---|---|---|---|---|
| Home | `/` | — | Landing | No | High |
| Events | `/events` | Home | Content | No | High |
| About Us | `/about` | Home | Content | No | Medium |
| Reports | `/reports` | Home | Content | No | Medium |
| Contact Us | `/contact` | Home | Form | No | High |
| BLS (external) | *external URL* | Home (nav only) | External | No | — |
| LEADS Portal (external) | *external URL* | Home (nav only) | External | Yes (on portal side) | — |

## 3. Navigation Structure

**Primary nav (top bar):** Home · Events · About Us · Reports (dropdown) · Contact Us
**Nav-only external items:** BLS · LEADS Portal (visually distinguished, e.g. with a small "external link" icon)
**Reports dropdown contents:** List of available Impact Report PDFs, each opening/downloading directly
**Footer nav:** About Us · Events · Reports · Contact Us · BLS · LEADS Portal · (social links, if applicable) · Affiliation line (MSRUAS)

## 4. URL Rules

- Always lowercase: `/about`, not `/About`
- Hyphens, not underscores, for any multi-word slugs (e.g. `/impact-reports` if renamed later)
- Keyword-first, short slugs — no unnecessary nesting
- No dates in permanent page URLs
- Maximum depth: 1 level below the homepage (no page should sit deeper than `/section/sub`)

## 5. Redirect Map

Not applicable — this is a new site with no prior public URLs to migrate. *(Revisit this section if LEADS previously had any published web pages.)*

## 6. XML Sitemap Plan

| Page Type | Priority | Change Frequency |
|---|---|---|
| Home | 1.0 | Weekly |
| Events | 0.9 | Weekly (new events added often) |
| Reports | 0.7 | Monthly |
| About Us | 0.6 | Monthly |
| Contact Us | 0.8 | Yearly |

External links (BLS, LEADS Portal) are excluded from the sitemap.xml as they are not part of this site.

## 7. Internal Linking Plan

| From Page | Links To | Why |
|---|---|---|
| Home | Events, About Us, Contact Us | Core homepage CTAs |
| Home | Reports (dropdown) | Surface achievements/proof early |
| Events | Contact Us | After viewing an event pop-up, invite visitors to get in touch |
| About Us | Events | Show the centre's story is backed by real activity |
| Reports | Contact Us | Report downloads are a strong lead-nurture moment |
| Contact Us | BLS | For visitors interested in the flagship summit specifically |
