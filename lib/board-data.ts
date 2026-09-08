export interface BoardMember {
  id: string;
  name: string;
  title: string;
  roleGroup: "Leadership" | "Advisory Board" | "Faculty Mentors";
  initials: string;
  photoUrl?: string;
  bio: string;
  affiliation: string;
}

export const BOARD_MEMBERS_DATA: BoardMember[] = [
  {
    id: "kayomarz-pavri",
    name: "Kayomarz Pavri",
    title: "Lead Coordinator & Strategist",
    roleGroup: "Leadership",
    initials: "KP",
    bio: "Pioneering the vision of LEADS Next Gen Centre to bridge non-technical skill gaps across India through summits, workshops, and institutional partnerships.",
    affiliation: "LEADS Next Gen Centre / RUAS",
  },
  {
    id: "prof-management-head",
    name: "Dr. K. R. Sharma",
    title: "Chairperson & Executive Dean",
    roleGroup: "Leadership",
    initials: "KS",
    bio: "Senior Academician and strategist guiding the integration of leadership frameworks within higher education and industry skill upliftment.",
    affiliation: "Faculty of Management and Commerce, RUAS",
  },
  {
    id: "dr-ananya-sen",
    name: "Dr. Ananya Sen",
    title: "Director of Research & Skill Policy",
    roleGroup: "Leadership",
    initials: "AS",
    bio: "Expert in organizational behavior and leadership analytics, leading national research reports and competency mapping frameworks.",
    affiliation: "LEADS Next Gen Centre",
  },
  {
    id: "col-rajesh-verma",
    name: "Col. Rajesh Verma (Retd.)",
    title: "Board Member — Public Sector & Governance",
    roleGroup: "Advisory Board",
    initials: "RV",
    bio: "Former defence strategist advisor bringing military leadership precision, strategic communication, and crisis management into civilian training programs.",
    affiliation: "National Leadership Council",
  },
  {
    id: "meera-nair",
    name: "Meera Nair",
    title: "Board Member — Industry Alliances & Enterprise",
    roleGroup: "Advisory Board",
    initials: "MN",
    bio: "Former HR Director at Global Tech Enterprise, championing executive coaching, corporate mentorship, and industry-ready leadership development.",
    affiliation: "Enterprise Leadership Forum",
  },
  {
    id: "siddharth-rao",
    name: "Siddharth Rao",
    title: "Board Member — Startup & Entrepreneurship",
    roleGroup: "Advisory Board",
    initials: "SR",
    bio: "Serial entrepreneur and venture investor mentoring young founders on leadership, venture negotiation, and team building.",
    affiliation: "Bengaluru Innovation Collective",
  },
];
