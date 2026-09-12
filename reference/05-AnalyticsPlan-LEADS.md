# Analytics & Tracking Plan
**LEADS Next Gen Centre** · v1.0

---

## 1. What Success Looks Like

1. A steady stream of visitors reaching Contact Us and submitting the lead form.
2. Visitors actively exploring the Events page and opening individual event pop-ups.
3. Impact Reports being downloaded regularly — a sign the centre's credibility content is landing.
4. Visitors clicking through to BLS and the LEADS Portal at meaningful rates once each is live.
5. Healthy time-on-site and low bounce rate on the homepage — a sign the hero and story are landing.

## 2. Recommended Tools

| Tool | Purpose | Cost | Install Complexity |
|---|---|---|---|
| Google Analytics 4 *(recommended)* | Understand who visits, from where, and what they do | Free | Low |
| Google Search Console *(recommended)* | See how the site performs in Google search, fix indexing issues | Free | Low |
| Google Tag Manager *(recommended)* | Add new tracking in future without touching code | Free | Low |
| Hotjar (free plan) *(recommended)* | Heatmaps and session recordings — see exactly how people use the site | Free (paid tiers optional later) | Low |
| LinkedIn Insight Tag *(recommended, given B2B/government/industry audience)* | Understand professional-audience engagement, enable future LinkedIn outreach | Free | Low |

## 3. Key Events to Track

| Event Name | What Triggers It | Why It Matters |
|---|---|---|
| Contact Form Submitted | Visitor completes and submits the lead form | This is the primary conversion — the whole funnel exists for this |
| Event Pop-up Opened | Visitor clicks an event card | Shows which events generate the most interest |
| Report Downloaded | Visitor clicks a Download button in Reports | Measures interest in the centre's credibility/impact content |
| BLS Link Clicked | Visitor clicks the BLS nav item | Measures interest in the flagship summit |
| LEADS Portal Link Clicked | Visitor clicks the Portal nav item | Measures readiness for the future login system |
| Scroll Depth 75%+ on Home | Visitor scrolls through most of the homepage | Shows the story is engaging enough to read fully |
| Outbound Link Clicks | Any click leaving the site | General outbound interest tracking |

## 4. Conversion Goals

- **Primary conversion:** Contact form submission (Contact Us page).
- **Micro-conversions:** Report download; event pop-up opened; BLS or LEADS Portal link clicked; 75%+ homepage scroll.

## 5. Monthly Reporting Checklist

1. Total visitors and where they came from (search, social, direct, referral).
2. Number of Contact form submissions and conversion rate.
3. Most-viewed event(s) this month.
4. Most-downloaded report(s) this month.
5. Bounce rate on the homepage.
6. Any pages with unusually high drop-off.
7. Mobile vs. desktop visitor split.
8. Search Console: any new search queries bringing in visitors, and any indexing errors.
9. Heatmap check on the homepage hero and Contact form (Hotjar).
10. BLS / LEADS Portal click-through counts.

## 6. Red Flags to Watch For

- **Sudden drop in Contact form submissions:** check if the form is broken or a recent design change hurt clarity.
- **High bounce rate spike on Home:** check if the hero message or load time has changed.
- **Zero report downloads over a month:** the Reports dropdown may not be discoverable enough — consider surfacing it on the homepage.
- **Search Console errors (404s, indexing issues):** fix immediately, as these directly hurt visibility.

## 7. 90-Day Review Plan

- **Day 30:** Confirm all tracking is firing correctly; establish baseline numbers for traffic and conversions.
- **Day 60:** Compare event and report engagement against baseline; identify which content resonates most with which audience segment.
- **Day 90:** Full review against the PRD goals (Section 2) — decide whether messaging, event presentation, or the lead form need adjustment.

## 8. Setup Instructions (Plain English)

1. Create a free Google Analytics 4 property for the site and add the provided tracking snippet via Google Tag Manager.
2. Verify site ownership in Google Search Console and submit the sitemap.xml once the site is live.
3. Install Google Tag Manager once, then add GA4, Hotjar, and LinkedIn Insight tags through it — no further code changes needed for future tools.
4. Sign up for Hotjar's free plan and add its tracking snippet via Tag Manager.
5. Confirm each Key Event (Section 3) fires correctly using GA4's real-time report before considering setup complete.
