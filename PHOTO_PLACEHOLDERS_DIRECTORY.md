# LEADS Photo Placeholder & Image Asset Directory

> Complete reference of all placeholder IDs (`ph1` through `ph89`), source code locations, public storage paths, target pages, and UI components across the platform.

---

## Storage & Directory Conventions

- **Base Public Directory**: `public/images/`
- **Leadership & Faculty**: `public/images/leadership/`
- **Student Committee & Council**: `public/images/committee/`
- **Events & Gallery**: `public/images/gallery/` (e.g. `ph55.jpg`, `ph58.jpg`, `g1.webp` – `g16.webp`)
- **Partner & Institutional Logos**: `public/images/partners/`
- **Brand & Core Assets**: `public/images/core/`
- **Placeholder Generator**: `lib/placeholders.ts` -> `generateNumberedPlaceholderSvg({ id: X })`

---

## 1. Leadership & Faculty Advisors (`/about`)

| ID | Name / Title | Designation / Subtitle | Category | Page | Component | Storage Path | Code Reference |
|:---|:---|:---|:---|:---|:---|:---|:---|
| **ph1** | Prof. Kuldeep Kumar Raina | Patron / Vice Chancellor | Leadership | `/about` | `BoardMemberCard` | `/images/leadership/kuldeep-raina.webp` | `app/about/page.tsx`, `lib/placeholders.ts` |
| **ph2** | Dr. K. M. Sharath Kumar | Chief Advisor / Dean FMC | Leadership | `/about` | `BoardMemberCard` | `/images/leadership/sharath-kumar.webp` | `app/about/page.tsx`, `lib/placeholders.ts` |
| **ph3** | Dr. Subhadeep Mukherjee | Centre Head | Leadership | `/about` | `BoardMemberCard` | `/images/leadership/subhadeep-mukherjee.webp` | `app/about/page.tsx`, `lib/placeholders.ts` |
| **ph4** | Dr. Pallabi Mund | Event Head (GG Campus) | Faculty Leads | `/about` | `BoardMemberCard` | `/images/leadership/pallabi-mund.webp` | `app/about/page.tsx` |
| **ph5** | Dr. Kiran Kumar B.M. | Event Head (RTC Campus) | Faculty Leads | `/about` | `BoardMemberCard` | `/images/leadership/kiran-kumar.webp` | `app/about/page.tsx` |
| **ph6** | Ms. Sujata Bijwe | Head Industry Collaboration | Faculty Leads | `/about` | `BoardMemberCard` | `/images/leadership/sujata-bijwe.webp` | `app/about/page.tsx` |
| **ph7** | Dr. Ajay R | Head Finance | Faculty Leads | `/about` | `BoardMemberCard` | `/images/leadership/ajay-r.webp` | `app/about/page.tsx` |
| **ph8** | Dr. Tapas Kumar Sahoo | Faculty Lead - Research & Academics | Faculty Leads | `/about` | `BoardMemberCard` | `/images/leadership/tapas-kumar-sahoo.webp` | `app/about/page.tsx` |
| **ph35** | Mr. Ramanan Ramanathan | Governing Advisory Board | Governing & Advisory | `/about` | `BoardMemberCard` | `/images/speakers/ramanan-ramanathan.webp` | `app/about/page.tsx` |
| **ph36** | Dr. C. N. Manjunath | Governing Advisory Board | Governing & Advisory | `/about` | `BoardMemberCard` | `/images/speakers/cn-manjunath.webp` | `app/about/page.tsx` |
| **ph37** | Mr. Kishore Rao | Governing Advisory Board | Governing & Advisory | `/about` | `BoardMemberCard` | `/images/speakers/kishore-rao.webp` | `app/about/page.tsx` |
| **ph38** | Mr. Shaju Mangalam | Governing Advisory Board | Governing & Advisory | `/about` | `BoardMemberCard` | `/images/speakers/shaju-mangalam.webp` | `app/about/page.tsx` |
| **ph39** | Mr. Balvir Talwar | Governing Advisory Board | Governing & Advisory | `/about` | `BoardMemberCard` | `/images/speakers/balvir-talwar.webp` | `app/about/page.tsx` |
| **ph40** | Dr. Charles Chow | Governing Advisory Board | Governing & Advisory | `/about` | `BoardMemberCard` | `/images/speakers/charles-chow.webp` | `app/about/page.tsx` |

---

## 2. Student Core Council & Committee (`/about`)

| ID | Name / Title | Role / Subtitle | Category | Page | Component | Storage Path | Code Reference |
|:---|:---|:---|:---|:---|:---|:---|:---|
| **ph8** | Mr. Gurutejas C | Sr. President | Student Core Council | `/about` | `BoardMemberCard` | `/images/committee/gurutejas-c.webp` | `app/about/page.tsx` |
| **ph9** | Mr. Abhijit Arya | Sr. Vice President | Student Core Council | `/about` | `BoardMemberCard` | `/images/committee/abhijit-arya.webp` | `app/about/page.tsx` |
| **ph10** | Mr. Laksh Soorya Singh | Sr. Events & Operations Head | Student Core Council | `/about` | `BoardMemberCard` | `/images/committee/laksh-soorya-singh.webp` | `app/about/page.tsx` |
| **ph11** | Mr. Bhawen Maroo | Sr. Events & Operations Head | Student Core Council | `/about` | `BoardMemberCard` | `/images/committee/bhawen-maroo.webp` | `app/about/page.tsx` |
| **ph12** | Ms. Shreesha S.N | Sr. Social Media & Design Head | Student Core Council | `/about` | `BoardMemberCard` | `/images/committee/shreesha-sn.webp` | `app/about/page.tsx` |
| **ph13** | Ms. Bharvi A Padia | Sr. PR Head | Student Core Council | `/about` | `BoardMemberCard` | `/images/committee/bharvi-padia.webp` | `app/about/page.tsx` |
| **ph14** | Mr. Arvind Rakshith G | Sr. Finance & Sponsorship Head | Student Core Council | `/about` | `BoardMemberCard` | `/images/committee/arvind-rakshith.webp` | `app/about/page.tsx` |
| **ph15** | Mr. Syed Furqaan Ahmed | Sr. Research & Development Head | Student Core Council | `/about` | `BoardMemberCard` | `/images/committee/syed-furqaan.webp` | `app/about/page.tsx` |
| **ph16** | Nuthan H | President | Core Committee | `/about` | `BoardMemberCard` | `/images/committee/nuthan-h.webp` | `app/about/page.tsx` |
| **ph17** | Kunal Bhadauria | Vice President | Core Committee | `/about` | `BoardMemberCard` | `/images/committee/kunal-bhadauria.webp` | `app/about/page.tsx` |
| **ph18** | Kayomarz Pavri | Head - Design & Digital Media | Core Committee | `/about` | `BoardMemberCard` | `/images/committee/kayomarz-pavri.webp` | `app/about/page.tsx` |
| **ph19** | Shwetha S | Head - Design & Social Media | Core Committee | `/about` | `BoardMemberCard` | `/images/committee/shwetha-s.webp` | `app/about/page.tsx` |
| **ph20** | Sudev Mitra | Chief Coordinator | Core Committee | `/about` | `BoardMemberCard` | `/images/committee/sudev-mitra.webp` | `app/about/page.tsx` |
| **ph21** | Jyotsna Karn | Chief Coordinator | Core Committee | `/about` | `BoardMemberCard` | `/images/committee/jyotsna-karn.webp` | `app/about/page.tsx` |
| **ph22** | Pranav P J | Chief Coordinator | Core Committee | `/about` | `BoardMemberCard` | `/images/committee/pranav-pj.webp` | `app/about/page.tsx` |
| **ph23** | Shravya T | Chief Coordinator | Core Committee | `/about` | `BoardMemberCard` | `/images/committee/shravya-t.webp` | `app/about/page.tsx` |
| **ph24** | Shriram SG | General Secretary | Core Committee | `/about` | `BoardMemberCard` | `/images/committee/shriram-sg.webp` | `app/about/page.tsx` |
| **ph25** | S Bhavya Shree | General Secretary | Core Committee | `/about` | `BoardMemberCard` | `/images/committee/s-bhavya-shree.webp` | `app/about/page.tsx` |
| **ph26** | Manoj Petakamsetty | General Secretary | Core Committee | `/about` | `BoardMemberCard` | `/images/committee/manoj-petakamsetty.webp` | `app/about/page.tsx` |
| **ph27** | Yash Chandak | Head - Operations & Logistics | Core Committee | `/about` | `BoardMemberCard` | `/images/committee/yash-chandak.webp` | `app/about/page.tsx` |
| **ph28** | Niyati Chawra | Head - Leadership & Development | Core Committee | `/about` | `BoardMemberCard` | `/images/committee/niyati-chawra.webp` | `app/about/page.tsx` |
| **ph29** | Sadiya Sawood | Head - Leadership & Development | Alumni Student Council | `/about` | `BoardMemberCard` | `/images/committee/sadiya-sawood.webp` | `app/about/page.tsx` |
| **ph30** | Nimisha K M | Head - Sustainability & Innovation | Alumni Student Council | `/about` | `BoardMemberCard` | `/images/committee/nimisha-km.webp` | `app/about/page.tsx` |
| **ph31** | Kishan KP | Head - Marketing & Branding | Core Committee | `/about` | `BoardMemberCard` | `/images/committee/kishan-kp.webp` | `app/about/page.tsx` |
| **ph32** | Aravind Manashetti | Head - Finance & Sponsorship | Core Committee | `/about` | `BoardMemberCard` | `/images/committee/aravind-manashetti.webp` | `app/about/page.tsx` |
| **ph33** | Sahana Mahadev | Senior Student Advisor | Student Advisory Council | `/about` | `BoardMemberCard` | `/images/committee/sahana-mahadev.webp` | `app/about/page.tsx` |
| **ph34** | Anurag Pandey | Senior Student Advisor | Student Advisory Council | `/about` | `BoardMemberCard` | `/images/committee/anurag-pandey.webp` | `app/about/page.tsx` |
| **ph53** | Pruthvi Arya Singh | Student Trainee Associate | Core Committee | `/about` | `BoardMemberCard` | `/images/committee/pruthvi-arya.webp` | `app/about/page.tsx` |
| **ph54** | Siddharth Gupta | Student Trainee Associate | Core Committee | `/about` | `BoardMemberCard` | `/images/committee/siddharth-gupta.webp` | `app/about/page.tsx` |
| **ph55** | Rohit Kumar Raj | Student Trainee Associate | Core Committee | `/about` | `BoardMemberCard` | `/images/committee/rohit-kumar.webp` | `app/about/page.tsx` |
| **ph56** | P Koushik Reddy | Chief Coordinator | Core Committee | `/about` | `BoardMemberCard` | `/images/committee/koushik-reddy.webp` | `app/about/page.tsx` |
| **ph57** | Jagannadh R Krishna | Student Trainee Associate | Core Committee | `/about` | `BoardMemberCard` | `/images/committee/jagannadh-krishna.webp` | `app/about/page.tsx` |

---

## 3. Home Featured Leadership Cards (`/`)

| ID | Name / Title | Description | Category | Page | Component | Storage Path | Code Reference |
|:---|:---|:---|:---|:---|:---|:---|:---|
| **ph41** | Prof. Kuldeep Kumar Raina | Patron Card | Home Hero | `/` | `ChromaGrid` | `/images/leadership/kuldeep-raina.webp` | `app/page.tsx`, `components/ChromaGrid.tsx` |
| **ph42** | Dr. K. M. Sharath Kumar | Chief Advisor Card | Home Hero | `/` | `ChromaGrid` | `/images/leadership/sharath-kumar.webp` | `app/page.tsx`, `components/ChromaGrid.tsx` |
| **ph43** | Dr. Subhadeep Mukherjee | Centre Head Card | Home Hero | `/` | `ChromaGrid` | `/images/leadership/subhadeep-mukherjee.webp` | `app/page.tsx`, `components/ChromaGrid.tsx` |

---

## 4. Events & Editions (`/events`)

| ID | Event Name / Edition | Category / Type | Page | Component | Current Image Path | Code Reference |
|:---|:---|:---|:---|:---|:---|:---|
| **ph44** | Catalyst Leadership Talk Series 3.0 | Catalyst Series | `/events` | `EventCard` | `/events/Catalyst Insight Leadership Talk Series 3.0.jpg` | `lib/events-data.ts` (`catalyst-3`) |
| **ph45** | Catalyst Leadership Talk Series 4.0 | Catalyst Series | `/events` | `EventModal` | `/events/Catalyst Insight Leadership Talk Series 4.0.jpg` | `lib/events-data.ts` (`catalyst-4`) |
| **ph46** | Catalyst Leadership Talk Series 5.0 | Catalyst Series | `/events` | `EventModal` | `/events/Catalyst Insight Leadership Talk Series 5.0.jpg` | `lib/events-data.ts` (`catalyst-5`) |
| **ph47** | Catalyst Leadership Talk Series 6.0 | Catalyst Series | `/events` | `EventModal` | `/events/Catalyst Insight Leadership Talk Series 6.0.jpg` | `lib/events-data.ts` (`catalyst-6`) |
| **ph48** | Catalyst Leadership Talk Series 7.0 | Catalyst Series | `/events` | `EventModal` | `/events/Catalyst Insight Leadership Talk Series 7.0.jpg` | `lib/events-data.ts` (`catalyst-7`) |
| **ph49** | Catalyst Leadership Talk Series 8.0 | Catalyst Series | `/events` | `EventModal` | `/events/Catalyst Insight Leadership Talk Series 8.0.jpg` | `lib/events-data.ts` (`catalyst-8`) |
| **ph50** | International Workshop Mindful Leadership in HEIs | Expert Talks | `/events` | `EventCard` / `EventModal` | `/events/International Workshop Mindful Leadership and Well-Being in HEIs.jpg` | `lib/events-data.ts` (`mindful-leadership-heis-workshop`) |
| **ph51** | Expert Talk – Exploring Data Science with Python | Expert Talks | `/events` | `EventCard` / `EventModal` | `/events/Expert Talk – Exploring Data Science with Python.jpg` | `lib/events-data.ts` (`expert-talks-python`) |
| **ph52** | Fireside Talk Global to Local Changemakers | Fireside Talks | `/events` | `EventCard` / `EventModal` | `/events/Fireside Talk Global to Local Changemakers.jpg` | `lib/events-data.ts` (`fireside-talks-change-makers`) |
| **ph53** | Pravrutti – Boardroom Battles | Boardroom Battles | `/events` | `EventCard` / `EventModal` | `/events/Pravrutti – Boardroom Battles.jpg` | `lib/events-data.ts` (`pragati-boardroom-battles`) |
| **ph54** | Leadership Green Circle: NGO Outreach | Sustainability | `/events` | `EventCard` / `EventModal` | `/events/Leadership Green Circle NGO Outreach At JananiSevashrama.jpg` | `lib/events-data.ts` (`green-leaders-circle`) |
| **ph55** | Annual Impact Meet 2025 (Transformation) | Event Edition | `/events` | `EventModal` | `/images/gallery/ph55.webp` | `lib/events-data.ts` |
| **ph58** | **LEADS Next Gen Centre – Inauguration** | **Institutional Ceremonies** | `/events` | `EventCard` / `EventModal` | `/images/gallery/leads-inaugural-function.webp` | `lib/events-data.ts` (`leads-inaugural-function`) |
| **ph59** | **Vanguard Leadership Retreat 2026** | **Institutional Ceremonies / Programs** | `/events` / `/programs` | `EventCard` / `EventModal` | `/images/gallery/vanguard-leadership-retreat-2026.webp` | `lib/events-data.ts` (`vanguard-leadership-retreat`) |
| **ph60** | **National Leadership Day – Badging Ceremony** | **Institutional Ceremonies** | `/events` | `EventCard` / `EventModal` | `/images/gallery/national-leadership-day-badging.webp` | `lib/events-data.ts` (`national-leadership-day-badging`) |
| **ph61** | **AIMS South Zone Regional Conference 2025** | **Outreach Programmes** | `/events` | `EventCard` / `EventModal` | `/images/gallery/aims-south-zone-conference-2025.webp` | `lib/events-data.ts` (`aims-south-region-conference-2025`) |
| **ph62** | **9th State Level Seminar** | **Outreach Programmes** | `/events` | `EventCard` / `EventModal` | `/images/gallery/9th-state-level-seminar.webp` | `lib/events-data.ts` (`9th-state-level-seminar`) |
| **ph63** | **Educational & Cultural Visit to New Delhi** | **Outreach Programmes** | `/events` | `EventCard` / `EventModal` | `/images/gallery/educational-cultural-visit-delhi.webp` | `lib/events-data.ts` (`new-delhi-visit`) |
| **ph64** | **NHRD Bangalore Chapter – Thought Leadership Meet** | **Outreach Programmes** | `/events` | `EventCard` / `EventModal` | `/images/gallery/nhrd-bangalore-thought-leadership.webp` | `lib/events-data.ts` (`nhrd-bangalore-chapter`) |
| **ph65** | **BCIC Roundtable Discussion on Generative Economy** | **Outreach Programmes** | `/events` | `EventCard` / `EventModal` | `/images/gallery/bcic-roundtable-generative-economy.webp` | `lib/events-data.ts` (`bma-generative-economies`) |
| **ph66** | **FKCCI Global MSME Conclave 2026** | **Outreach Programmes** | `/events` | `EventCard` / `EventModal` | `/images/gallery/fkcci-global-msme-conclave-2026.webp` | `lib/events-data.ts` (`fkcci-msme-conclave`) |
| **ph67** | **Anvaya Innovation Summit 2026** | **Outreach Programmes** | `/events` | `EventCard` / `EventModal` | `/images/gallery/anvaya-innovation-summit-2026.webp` | `lib/events-data.ts` (`anvaya-innovation-summit-2026`) |
| **ph80** | **IISc & Adelaide Deep-Tech Startups Conference** | **Conclave / Outreach** | `/events` | `EventCard` / `EventModal` | `/images/gallery/iisc-adelaide-deep-tech-conference.webp` | `lib/events-data.ts` (`iisc-adelaide-deep-tech-conference`) |
| **ph66b** | **ANQ Congress 2025** | **Outreach Programmes** | `/events` / `/programs` | `EventCard` / `EventModal` | `/images/gallery/anq-congress-2025.webp` | `lib/events-data.ts` (`anq-congress-2025`) |
| **ph67b** | **BMA Symposium – AI & Future of Management** | **Outreach Programmes** | `/events` / `/programs` | `EventCard` / `EventModal` | `/images/gallery/bma-symposium.webp` | `lib/events-data.ts` (`bma-symposium-ai-management`) |
| **ph68** | **Two-Day National Conference – GST Reforms 2.0** | **Outreach Programmes** | `/events` / `/programs` | `EventCard` / `EventModal` | `/images/gallery/two-day-gst-reforms-conference.webp` | `lib/events-data.ts` (`icssr-national-conference-gst-reforms`) |
| **ph72** | **Case Cracker  NMC Healthcare’s Billion-Dollar Secret** | **Expert Talks** | `/events` | `EventCard` / `EventModal` | `/images/gallery/case-cracker-nmc.webp` | `lib/events-data.ts` (`case-cracker-nmc`) |
| **ph77** | **Case Craft 5.0 – Five-Day FDP** | **Workshop / FDP** | `/events` / `/programs` | `EventCard` / `EventModal` | `/images/gallery/case-craft-5-fdp.webp` | `lib/events-data.ts` (`case-craft-5-fdp`) |

---

## 5. Event Gallery Grid (`/events`)

| ID | Title / Slot | Subtitle / Focus | Page | Component | Storage Path |
|:---|:---|:---|:---|:---|:---|
| **ph57** | Event Gallery Photo 1 | Catalyst Workshop | `/events` | `GalleryGrid` | `/images/gallery/g1.webp` |
| **ph58** | **Event Gallery Photo 2** | **Inaugural Plenary & Launch** | `/events` | `GalleryGrid` | `/images/gallery/leads-inaugural-function.webp` *(Updated)* |
| **ph59** | **Event Gallery Photo 3** | **Vanguard Leadership Retreat 2026** | `/events` | `GalleryGrid` | `/images/gallery/vanguard-leadership-retreat-2026.webp` *(Updated)* |
| **ph60** | **Event Gallery Photo 4** | **National Leadership Day & Badging Ceremony** | `/events` | `GalleryGrid` | `/images/gallery/national-leadership-day-badging.webp` *(Updated)* |
| **ph61** | **Event Gallery Photo 5** | **AIMS South Zone Regional Conference** | `/events` | `GalleryGrid` | `/images/gallery/aims-south-zone-conference-2025.webp` *(Updated)* |
| **ph62** | **Event Gallery Photo 6** | **9th State Level Seminar** | `/events` | `GalleryGrid` | `/images/gallery/9th-state-level-seminar.webp` *(Updated)* |
| **ph63** | **Event Gallery Photo 7** | **Educational & Cultural Visit to New Delhi** | `/events` | `GalleryGrid` | `/images/gallery/educational-cultural-visit-delhi.webp` *(Updated)* |
| **ph64** | **Event Gallery Photo 8** | **NHRD Bangalore Chapter Thought Leadership** | `/events` | `GalleryGrid` | `/images/gallery/nhrd-bangalore-thought-leadership.webp` *(Updated)* |
| **ph65** | **Event Gallery Photo 9** | **BCIC Roundtable Discussion on Generative Economy** | `/events` | `GalleryGrid` | `/images/gallery/bcic-roundtable-generative-economy.webp` *(Updated)* |
| **ph66** | **Event Gallery Photo 10** | **FKCCI Global MSME Conclave 2026** | `/events` | `GalleryGrid` | `/images/gallery/fkcci-global-msme-conclave-2026.webp` *(Updated)* |
| **ph67** | **Event Gallery Photo 11** | **Anvaya Innovation Summit 2026** | `/events` | `GalleryGrid` | `/images/gallery/anvaya-innovation-summit-2026.webp` *(Updated)* |
| **ph67** | Event Gallery Photo 11 | Fireside Q&A | `/events` | `GalleryGrid` | `/images/gallery/g11.webp` |
| **ph68** | Event Gallery Photo 12 | National Delegates | `/events` | `GalleryGrid` | `/images/gallery/g12.webp` |
| **ph69** | Event Gallery Photo 13 | Student Core Team | `/events` | `GalleryGrid` | `/images/gallery/g13.webp` |
| **ph70** | Event Gallery Photo 14 | Certificate Distribution | `/events` | `GalleryGrid` | `/images/gallery/g14.webp` |
| **ph71** | Event Gallery Photo 15 | Keynote Address | `/events` | `GalleryGrid` | `/images/gallery/g15.webp` |
| **ph72** | Event Gallery Photo 16 | Closing Plenary | `/events` | `GalleryGrid` | `/images/gallery/g16.webp` |

---

## 6. Partner & Institutional Logos (`/partners`)

| ID | Partner Name | Partner Type / Subtitle | Page | Component | Storage Path |
|:---|:---|:---|:---|:---|:---|
| **ph73** | Faculty of Management & Commerce (FMC) | Academic Partner Logo | `/partners` | `PartnerCard` | `/images/partners/ruas-fmc.png` |
| **ph74** | Ramaiah Tech Business Incubator (RTBI) | Incubation Partner Logo | `/partners` | `PartnerCard` | `/images/partners/rtbi.png` |
| **ph75** | Government of Karnataka | State Strategic Partner Logo | `/partners` | `PartnerCard` | `/images/partners/govt-karnataka.png` |
| **ph76** | K-TECH Society | Innovation Partner Logo | `/partners` | `PartnerCard` | `/images/partners/k-tech.png` |
| **ph77** | FICCI | Apex Industry Partner Logo | `/partners` | `PartnerCard` | `/images/partners/ficci.webp` |
| **ph78** | BCIC | Regional Industry Logo | `/partners` | `PartnerCard` | `/images/partners/bcic.png` |
| **ph79** | ISTD | HR & Training Partner Logo | `/partners` | `PartnerCard` | `/images/partners/istd.png` |
| **ph80** | BMA | Management Association Logo | `/partners` | `PartnerCard` | `/images/partners/bma.webp` |
| **ph81** | NHRD | Human Capital Network Logo | `/partners` | `PartnerCard` | `/images/partners/nhrd.png` |
| **ph82** | AIMS | B-School Association Logo | `/partners` | `PartnerCard` | `/images/partners/aims.png` |
| **ph83** | AIMA | Apex National Management Logo | `/partners` | `PartnerCard` | `/images/partners/aima.webp` |

---

## 7. Site & System Logos (`Global / Header / Footer`)

| ID | Brand Asset Name | Placement / Description | Page | Component | Storage Path |
|:---|:---|:---|:---|:---|:---|
| **ph84** | Hero Curtain Logo | Main LEADS Expandable Mask Logo | `/` | `LogoScrollExpand` | `public/images/core/logo.webp` / SVG inline |
| **ph85** | Header Navigation Logo | LEADS Primary Navbar Logo | Global | `Nav` | `public/images/partners/leads-logo.png` |
| **ph86** | Header BLS Summit Logo | BLS Summit Header Badge | Global | `Nav` | `public/images/core/bls-logo.webp` |
| **ph87** | Footer LEADS Logo | LEADS Footer Emblem | Global | `Footer` | `public/images/partners/leads-logo.png` |
| **ph88** | Footer BLS Logo | BLS Summit Footer Emblem | Global | `Footer` | `public/images/core/bls-logo.webp` |
| **ph89** | Footer FMC Logo | FMC RUAS White Logo | Global | `Footer` | `public/images/partners/ruas-fmc.png` |

---

## Quick Guide: How to Upload & Replace Any Photo

1. **Save New Image**: Place the new image in the relevant subfolder under `public/images/` (e.g. `public/images/gallery/phXX.jpg` or `.webp`).
2. **Update Data/Code Reference**:
   - For **Events**: Update `photo` and `gallery` fields in `lib/events-data.ts`.
   - For **Team/Committee**: Update the `image` field in `app/about/page.tsx`.
   - For **Partners**: Update `logo` in `app/partners/page.tsx`.
3. **Verify Build**: Run `npm run build` to confirm static paths and images compile cleanly.
