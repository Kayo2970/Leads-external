export interface LEADSEvent {
  id: string;
  name: string;
  category: "Summit" | "Workshop" | "Roundtable" | "Conclave";
  tagline: string;
  date: string;
  location: string;
  attendees: string;
  badgeColor: string;
  logoSvg: string;
  description: string;
  outcomes: string[];
  speakers: string[];
  externalLink?: string;
  featured?: boolean;
}

export const EVENTS_DATA: LEADSEvent[] = [
  {
    id: "bls-2025",
    name: "Bharath Leadership Summit (BLS)",
    category: "Summit",
    tagline: "India's Premier Gathering of National Leaders & Industry Pioneers",
    date: "October 14–15, 2025",
    location: "RUAS Convention Centre, Bengaluru",
    attendees: "1,500+ Delegates",
    badgeColor: "bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30",
    logoSvg: "crown",
    featured: true,
    description:
      "The flagship national summit hosted by LEADS Next Gen Centre bringing together government policymakers, startup founders, industry stalwarts, and academic researchers to deliberate on non-technical leadership upliftment across India.",
    outcomes: [
      "Keynote addresses from senior government and industry leaders",
      "Release of the National Non-Technical Skill Gap Report",
      "Inter-institutional leadership collaboration framework",
      "Startup leadership mentoring sessions",
    ],
    speakers: ["Dr. M. S. Ramaiah Faculty", "Industry CEOs & Founders", "Government Policy Advisors"],
    externalLink: "https://www.bharatleadsummit.com/",
  },
  {
    id: "catalyst-workshop-2025",
    name: "Catalyst: Non-Technical Skill Upliftment",
    category: "Workshop",
    tagline: "Transforming Technical Expertise into Real-World Leadership Impact",
    date: "November 08, 2025",
    location: "LEADS Centre Campus, Bengaluru",
    attendees: "250+ Participants",
    badgeColor: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30",
    logoSvg: "zap",
    featured: true,
    description:
      "An intensive high-impact hands-on workshop focused on critical non-technical competencies: strategic decision making, executive communication, negotiations, and emotional intelligence for engineers and researchers.",
    outcomes: [
      "Personalized 360 leadership assessment",
      "Executive communication & pitch masterclass",
      "Conflict resolution & high-stakes negotiation tactics",
      "Peer-to-peer leadership simulations",
    ],
    speakers: ["LEADS Master Trainers", "Corporate Leadership Coaches"],
  },
  {
    id: "exec-roundtable-2025",
    name: "Executive Leadership & Governance Roundtable",
    category: "Roundtable",
    tagline: "Bridging Policy, Academia, and Enterprise Leadership",
    date: "December 02, 2025",
    location: "Grand Ball Room, Bengaluru",
    attendees: "80+ C-Suite Executives & Officials",
    badgeColor: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30",
    logoSvg: "shield",
    featured: true,
    description:
      "An exclusive closed-door roundtable engaging senior officers from public administration, technology conglomerates, and university leadership to shape future institutional training frameworks.",
    outcomes: [
      "Draft policy recommendations for skill upliftment",
      "MOU sign-offs for industry-academic research partnerships",
      "Executive mentorship network launch",
    ],
    speakers: ["University Deans", "Public Sector Directors", "Enterprise VPs"],
  },
  {
    id: "founders-sprint-2026",
    name: "Startup Founders Leadership Sprint",
    category: "Conclave",
    tagline: "Scaling High-Growth Teams Through Strategic Leadership",
    date: "January 18, 2026",
    location: "LEADS Innovation Hub",
    attendees: "300+ Founders & VCs",
    badgeColor: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    logoSvg: "rocket",
    featured: false,
    description:
      "Designed specifically for early and growth-stage startup founders to build resilient organizational cultures, master investor pitching, and navigate rapid scaling challenges.",
    outcomes: [
      "1-on-1 pitch clinic with top venture capitalists",
      "Organizational design & talent acquisition blueprint",
      "Founder mental health & resilience toolkit",
    ],
    speakers: ["Unicorn Founders", "Venture Partners", "Org Design Experts"],
  },
  {
    id: "women-leadership-2026",
    name: "Women in Leadership & Entrepreneurship",
    category: "Summit",
    tagline: "Empowering Female Leaders Across Government, Tech & Business",
    date: "February 20, 2026",
    location: "RUAS Auditorium, Bengaluru",
    attendees: "500+ Delegates",
    badgeColor: "bg-pink-500/20 text-pink-600 dark:text-pink-400 border-pink-500/30",
    logoSvg: "sparkles",
    featured: false,
    description:
      "A national forum dedicated to accelerating women leaders into executive boards, administrative leadership, and venture building.",
    outcomes: [
      "Mentorship pairing program launch",
      "Board governance readiness certification",
      "Female founder showcase & pitch arena",
    ],
    speakers: ["Women Leaders in IAS & Industry", "Venture Capitalists"],
  },
  {
    id: "youth-bootcamp-2026",
    name: "Youth Leadership & Social Innovation Conclave",
    category: "Conclave",
    tagline: "Inspiring Next-Gen Student Leaders for National Impact",
    date: "March 12, 2026",
    location: "MSRUAS Campus",
    attendees: "600+ Students & Scholars",
    badgeColor: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30",
    logoSvg: "users",
    featured: false,
    description:
      "Empowering university students and young researchers with public speaking, project management, and social enterprise design skills.",
    outcomes: [
      "Student project hackathon and grant awards",
      "Public speaking & debate masterclass",
      "National youth leader network enrollment",
    ],
    speakers: ["Student Leaders", "Social Entrepreneurs", "Faculty Mentors"],
  },
];
