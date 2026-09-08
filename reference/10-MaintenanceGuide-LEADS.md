# Post-Launch Maintenance Guide
**LEADS Next Gen Centre** · v1.0 · Written for a non-technical team member — assumes no developer is on standby day-to-day.

---

## Emergency Contacts
Fill this in before launch and keep it at the top of your printed/shared copy:
- Primary developer/team contact: ______________
- Hosting provider support: ______________
- Domain registrar support: ______________

## 1. If Something Breaks (Quick Steps)
1. Note exactly what's broken and on which page/device.
2. Check if it's a content issue (a typo, missing image) — these you can likely fix yourself via the codebase/CMS with a developer's help, or by asking Claude/an AI assistant with the relevant file.
3. If the whole site is down, check the hosting provider's status page first — it may be a provider-side issue, not your site.
4. Contact the developer/team contact above with a screenshot and a description of the issue.
5. AI Prompt: *"The [page name] on our website is showing [describe issue]. Here's the relevant code file: [paste]. What's wrong and how do I fix it?"*

## 2. Weekly Tasks
- Check the Contact form is still receiving submissions (send yourself a test message monthly).
- Skim the Events page to confirm upcoming events are still accurate.

## 3. Monthly Tasks
- Review Google Analytics: traffic, form submissions, most-viewed events/reports (see Analytics Plan Section 5).
- Confirm all Impact Report download links still work.
- Check for and update any outdated event information.

## 4. Adding a New Event
1. Prepare the event's name, description, date, and logo/artwork.
2. Add these details to the events data file (or CMS entry, if one is added later).
3. AI Prompt: *"Here's our events data file: [paste]. Add a new event called [name] with this description: [text], date: [date], and logo file: [filename]. Keep the same format as the existing events."*

## 5. Adding a New Impact Report
1. Prepare the final PDF file and its title, year, and one-line summary.
2. Upload the PDF and add its details to the reports list.
3. AI Prompt: *"Here's our reports data file: [paste]. Add a new report titled [title], year [year], summary [text], linking to [filename]. Keep the same format."*

## 6. Updating the Leadership / Board of Members Section
1. Prepare the new member's name, title, photo, and short bio (or removal details for an outgoing member).
2. Update the board members data file.
3. AI Prompt: *"Here's our board members data file: [paste]. Add/update/remove [name] with title [title] and bio [text]. Keep the same format as the rest."*

## 7. Editing Website Copy
For any text change (homepage wording, About Us story, etc.), locate the relevant page file and update the text directly, or ask an AI assistant:
> *"Here's the content of our [page name] page: [paste]. Please change [old text] to [new text], keeping the same tone and formatting."*

## 8. Managing the Contact Form Leads
- Check wherever submissions are routed (inbox/spreadsheet/CRM, per the Tech Spec) at least weekly.
- Respond to enquiries promptly — this is your primary conversion point.

## 9. Backups
For a custom-coded site like this one: automated weekly backups to the code repository (e.g. GitHub), plus a snapshot taken before any major update. Confirm with your developer that this is set up.

## 10. Security Checks
- Monthly: run a free scan via Sucuri SiteCheck to catch obvious issues.
- Annually: confirm the SSL certificate has renewed automatically (most hosts like Vercel handle this automatically).
- Rotate any admin passwords periodically.

## 11. Domain & Hosting Renewal
| Item | Renewal Date | Auto-Renew? |
|---|---|---|
| Domain | ______________ | ______________ |
| Hosting (Vercel or other) | ______________ | ______________ |

Set a calendar reminder 30 days before each renewal date. If a renewal is missed, act immediately — contact the registrar/host support to reinstate before the domain/site goes offline publicly.

## 12. Monthly Content Calendar (ties to Social Media Kit)
| Week | Website Update | Social Posts (3/week) |
|---|---|---|
| 1 | Check for new event/report to add | Per Social Kit content pillar rotation |
| 2 | Review Contact form leads | Per Social Kit content pillar rotation |
| 3 | Update any outdated event info | Per Social Kit content pillar rotation |
| 4 | Monthly analytics review | Per Social Kit content pillar rotation |

## 13. The Monthly Health Triangle
- **Rank:** Check Google Search Console — is the site moving up in search results?
- **Retain:** Check the GA4 bounce rate — are people staying on the site?
- **Retain (good):** Bounce rate steady or improving. **(act now):** Bounce rate rising sharply month over month.
- **Convert:** Check GA4 goals — are people submitting the Contact form, downloading reports?
- **Convert (good):** Steady or growing conversions. **(act now):** Conversions dropping for two consecutive months.

## 14. When to Think About a Redesign
Consider a redesign when: (1) the site is more than 2 years old and starting to feel dated relative to competitors, (2) three consecutive months of declining health-triangle metrics, or (3) the Analytics Plan's goals (Section 2) are missed for two quarters running. Raise this with your developer as a planned project, not an emergency fix.

## 15. AI Prompt Library (Quick Reference)
- Fixing a bug: *"The [page] is showing [issue]. Here's the code: [paste]. What's wrong?"*
- Adding an event: see Section 4
- Adding a report: see Section 5
- Updating board members: see Section 6
- Editing copy: see Section 7
