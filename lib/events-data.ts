export interface LEADSEventEdition {
  id: string;
  title: string;
  date: string;
  location: string;
  attendees: string;
  photo: string;
  overview: string;
  keyTopics: string[];
  keySpeakers: string[];
  outcomes: string[];
}

export interface LEADSEvent {
  id: string;
  name: string;
  seriesName: string;
  category: "Summit" | "Workshop" | "Roundtable" | "Conclave";
  tagline: string;
  date: string;
  location: string;
  attendees: string;
  badgeColor: string;
  logoSvg: string;
  photo: string;
  gallery: string[];
  description: string;
  seriesHighlights: string[];
  outcomes: string[];
  speakers: string[];
  externalLink?: string;
  featured?: boolean;
  editions: LEADSEventEdition[];
}

export const EVENTS_DATA: LEADSEvent[] = [
  {
    id: "catalyst-series",
    name: "Catalyst: Non-Technical Skill Upliftment Series",
    seriesName: "Catalyst Series",
    category: "Workshop",
    tagline: "Transforming Technical Expertise into High-Impact Strategic Leadership",
    date: "Monthly Cohorts · Next: Nov 08, 2025",
    location: "LEADS Centre Campus & Regional Hubs, Bengaluru",
    attendees: "2,500+ Participants Across Cohorts",
    badgeColor: "bg-[#9C1256]/20 text-white border-[#DE3F11]/40",
    logoSvg: "zap",
    photo: "/events/catalyst-workshop.jpg",
    gallery: [
      "/events/catalyst-workshop.jpg",
      "/events/founders-sprint.jpg",
      "/events/roundtable-exec.jpg",
    ],
    featured: true,
    description:
      "Catalyst is LEADS Next Gen Centre's flagship multi-cohort workshop initiative created to bridge the critical gap between technical capability and executive excellence. Through intensive, simulation-driven sessions, participants develop indispensable non-technical competencies including high-stakes negotiation, executive presence, conflict de-escalation, behavioral psychology, and boardroom communication.",
    seriesHighlights: [
      "Simulated real-time crisis leadership drills",
      "Executive 360-degree non-technical capability mapping",
      "Mastery in investor pitching and venture storytelling",
      "Direct 1-on-1 mentorship with proven corporate CEOs and senior civil servants",
    ],
    outcomes: [
      "Personalized 360 leadership competency baseline certification",
      "Mastery in high-stakes negotiations and board-level persuasion",
      "Cross-functional communication frameworks for multidisciplinary teams",
      "Active enrollment in the LEADS Alumni Leadership Exchange",
    ],
    speakers: [
      "Dr. M. S. Ramaiah Faculty Mentors",
      "Senior Corporate Executives & CHROs",
      "Accredited Behavioral Psychologists",
      "Venture Capital Principals",
    ],
    editions: [
      {
        id: "catalyst-vol-1",
        title: "Catalyst Vol. 1: Strategic Decision Making & Crisis Leadership",
        date: "May 14, 2025",
        location: "RUAS Main Auditorium, Bengaluru",
        attendees: "320 Engineers & Mid-Level Managers",
        photo: "/events/catalyst-workshop.jpg",
        overview:
          "The inaugural edition focused on moving beyond purely analytical thinking into strategic, intuitive decision-making in ambiguous environments.",
        keyTopics: [
          "Cognitive Biases in Engineering Management",
          "Scenario Planning Under High Uncertainty",
          "De-escalation of Multi-stakeholder Conflict",
        ],
        keySpeakers: ["Prof. K. Venkatesh (FMC)", "Ananya Sharma (VP Strategy, TechCorp)"],
        outcomes: [
          "Trained 320 participants in scenario-based leadership simulations",
          "Generated individual 20-page capability audit reports for each attendee",
        ],
      },
      {
        id: "catalyst-vol-2",
        title: "Catalyst Vol. 2: Executive Presence, Storytelling & Negotiation",
        date: "August 22, 2025",
        location: "LEADS Executive Training Wing, Bengaluru",
        attendees: "280 Founders & Tech Leads",
        photo: "/events/founders-sprint.jpg",
        overview:
          "Intensive masterclasses designed to refine physical, vocal, and conceptual presence during high-value enterprise pitches and board meetings.",
        keyTopics: [
          "The Anatomy of Boardroom Persuasion",
          "Venture Storytelling vs. Technical Reporting",
          "Non-verbal Signaling & Executive Authority",
        ],
        keySpeakers: ["Rajesh Nambiar (Leadership Coach)", "Dr. Preeti Rao (Behavioral Scientist)"],
        outcomes: [
          "Live recorded 3-minute pitch audits with instantaneous feedback",
          "Structured negotiation rubric adopted by 40 participating startups",
        ],
      },
      {
        id: "catalyst-vol-3",
        title: "Catalyst Vol. 3: Advanced Organizational Psychology & Culture",
        date: "November 08, 2025",
        location: "LEADS Convention Centre, Bengaluru",
        attendees: "400+ Registered Delegates",
        photo: "/events/roundtable-exec.jpg",
        overview:
          "Upcoming cohort zeroing in on team dynamics, psychological safety, and organizational design for fast-scaling enterprises.",
        keyTopics: [
          "Constructing High-Trust Team Cultures",
          "Managing Hyper-Growth Burnout",
          "Performance Alignment Across Generational Cohorts",
        ],
        keySpeakers: ["Deans of RUAS Management", "Invited Public Policy Officers"],
        outcomes: [
          "Release of the 2025 LEADS Workplace Dynamics Handbook",
          "Direct enterprise consulting clinics for team leads",
        ],
      },
    ],
  },
  {
    id: "bls-summit",
    name: "Bharath Leadership Summit (BLS)",
    seriesName: "Bharath Leadership Summit",
    category: "Summit",
    tagline: "India's Premier Gathering of National Leaders, Policy Architects & Industry Pioneers",
    date: "Annual Flagship · Oct 14–15, 2025",
    location: "RUAS Convention Grand Hall, Bengaluru",
    attendees: "1,500+ National Delegates",
    badgeColor: "bg-[#9C1256]/20 text-white border-[#DE3F11]/40",
    logoSvg: "crown",
    photo: "/events/bharath-summit.jpg",
    gallery: [
      "/events/bharath-summit.jpg",
      "/events/roundtable-exec.jpg",
      "/events/catalyst-workshop.jpg",
    ],
    featured: true,
    externalLink: "https://www.bharatleadsummit.com/",
    description:
      "The Bharath Leadership Summit (BLS) is the nation's premier leadership convention organized by LEADS Next Gen Centre. BLS gathers Union & State policymakers, Unicorn founders, Fortune 500 executives, academic scholars, and student changemakers to formulate actionable blueprints for nation building and institutional leadership excellence.",
    seriesHighlights: [
      "Keynote addresses from senior cabinet ministers and national advisors",
      "Annual National Non-Technical Skill Gap Empirical Report unveiling",
      "High-stakes policy debate panels on education, deep-tech, and governance",
      "Exclusive national networking suites and institutional delegation signings",
    ],
    outcomes: [
      "Formal adoption of the National Leadership Upliftment Charter",
      "Inter-state institutional leadership collaboration agreements signed",
      "Publication of national research papers on non-technical capability indexes",
      "Over 1,500 senior leaders aligned on public-private training roadmaps",
    ],
    speakers: [
      "Senior Union & State Government Leaders",
      "Fortune 500 CEOs & Board Members",
      "Distinguished Vice-Chancellors & Academicians",
      "Founders of India's Leading Unicorns",
    ],
    editions: [
      {
        id: "bls-2024",
        title: "Bharath Leadership Summit 2024: The Inaugural Assembly",
        date: "October 18–19, 2024",
        location: "RUAS Convention Centre, Bengaluru",
        attendees: "1,200 Delegates",
        photo: "/events/bharath-summit.jpg",
        overview:
          "The inaugural edition that launched LEADS Next Gen Centre onto the national stage with representation from 18 Indian states.",
        keyTopics: [
          "India's Non-Technical Skill Deficit: A National Challenge",
          "Public-Private Synergies in Leadership Development",
          "Fostering Ethical Governance in Tech Enterprises",
        ],
        keySpeakers: ["State IT & Higher Education Ministers", "Vice-Chancellor MSRUAS", "Prominent Tech CEOs"],
        outcomes: [
          "Official inauguration of LEADS Next Gen Centre",
          "Release of the Year 1 Action Whitepaper",
        ],
      },
      {
        id: "bls-2025",
        title: "Bharath Leadership Summit 2025: Scaling National Human Capital",
        date: "October 14–15, 2025",
        location: "RUAS Convention Grand Hall, Bengaluru",
        attendees: "1,500+ Confirmed Delegates",
        photo: "/events/bharath-summit.jpg",
        overview:
          "The flagship national summit with expanded multi-track agendas, investor showcases, and institutional policy drafting sessions.",
        keyTopics: [
          "Non-Technical Acumen as India's Global Competitive Edge",
          "Women in Strategic National Governance",
          "Bridging Technical R&D with Business Acumen",
        ],
        keySpeakers: ["National Policy Advisors", "International Industry Delegations", "RUAS FMC Deans"],
        outcomes: [
          "Sign-off of 10+ Institutional Mentorship Frameworks",
          "Direct student delegation sponsorship by top enterprises",
        ],
      },
    ],
  },
  {
    id: "exec-governance-roundtables",
    name: "Executive Leadership & Governance Roundtables",
    seriesName: "Executive Governance Series",
    category: "Roundtable",
    tagline: "Bridging Policy, Higher Education, and Corporate Executive Strategy",
    date: "Quarterly Closed-Door Sessions · Next: Dec 02, 2025",
    location: "Grand Ballroom & Private Suites, Bengaluru",
    attendees: "80+ C-Suite & Government Leaders per Session",
    badgeColor: "bg-[#9C1256]/20 text-white border-[#DE3F11]/40",
    logoSvg: "shield",
    photo: "/events/roundtable-exec.jpg",
    gallery: [
      "/events/roundtable-exec.jpg",
      "/events/bharath-summit.jpg",
      "/events/catalyst-workshop.jpg",
    ],
    featured: true,
    description:
      "A curated series of high-level, closed-door policy and governance roundtables that convene IAS/IPS officers, higher education chancellors, enterprise Managing Directors, and venture partners. These intimate working roundtables address systemic governance challenges and formulate actionable frameworks for institutional and corporate reform.",
    seriesHighlights: [
      "Strict Chatham House Rule for completely candid deliberation",
      "Executive summaries delivered straight to policy think tanks",
      "Bespoke peer-matching between corporate executives and public servants",
      "Institutional policy roadmap drafting and advisory whitepapers",
    ],
    outcomes: [
      "Draft policy recommendations submitted to state and national bodies",
      "Direct MOU sign-offs for industry-academic collaborative research",
      "Establishment of executive advisory boards across participating institutions",
    ],
    speakers: [
      "University Deans & Research Chairs",
      "Senior Civil Servants & Policy Advisors",
      "Enterprise Managing Directors & Board Chairs",
    ],
    editions: [
      {
        id: "rt-q2-2025",
        title: "Q2 Executive Roundtable: Higher Education & Industry Alignment",
        date: "June 20, 2025",
        location: "Private Executive Boardroom, Bengaluru",
        attendees: "65 Selected C-Level & Academic Officers",
        photo: "/events/roundtable-exec.jpg",
        overview:
          "Addressed the disconnect between traditional MBA/engineering curricula and practical real-world corporate leadership needs.",
        keyTopics: [
          "Curriculum Modernization for Soft Capability Mastery",
          "Corporate Residency Frameworks for Faculty",
        ],
        keySpeakers: ["FMC Leadership Deans", "Enterprise VPs of Talent"],
        outcomes: [
          "Formulated the 5-point non-technical capability rubric for universities",
        ],
      },
      {
        id: "rt-q4-2025",
        title: "Q4 Executive Roundtable: Strategic Corporate Governance in AI Era",
        date: "December 02, 2025",
        location: "Grand Ballroom Suites, Bengaluru",
        attendees: "80+ Invited Executive Leaders",
        photo: "/events/roundtable-exec.jpg",
        overview:
          "Examining human leadership, board oversight, ethics, and non-technical decision making in algorithm-driven organizations.",
        keyTopics: [
          "Board Oversight & Ethical Risk Management",
          "Human Judgment in Automated Decision Systems",
        ],
        keySpeakers: ["Chief Risk Officers", "Public Sector Directors"],
        outcomes: [
          "Release of the 2026 Board Governance Advisory Brief",
        ],
      },
    ],
  },
  {
    id: "startup-founders-sprint",
    name: "Startup Founders Leadership & Venture Sprint",
    seriesName: "Founders Sprint Series",
    category: "Conclave",
    tagline: "Empowering Early & Growth-Stage Founders to Master Organizational Leadership",
    date: "Bi-Annual Conclaves · Next: Jan 18, 2026",
    location: "LEADS Innovation Hub & Tech Spaces, Bengaluru",
    attendees: "500+ Startup Founders & Investors",
    badgeColor: "bg-[#9C1256]/20 text-white border-[#DE3F11]/40",
    logoSvg: "rocket",
    photo: "/events/founders-sprint.jpg",
    gallery: [
      "/events/founders-sprint.jpg",
      "/events/catalyst-workshop.jpg",
      "/events/bharath-summit.jpg",
    ],
    featured: false,
    description:
      "A high-velocity conclave and sprint series created for startup founders, venture partners, and innovation ecosystem leaders. Unlike traditional tech hackathons, Founders Sprint focuses purely on human organizational architecture: hiring executives, fundraising psychology, board management, founder conflict resolution, and scaling culture under extreme pressure.",
    seriesHighlights: [
      "1-on-1 pitch clinics and negotiation audits with tier-1 venture capitalists",
      "Executive recruitment and equity structuring masterclasses",
      "Founder mental health, resilience, and high-pressure decision toolkits",
      "Live teardowns of real board decks and term sheet negotiations",
    ],
    outcomes: [
      "Over 120 startups successfully restructured their executive hiring playbooks",
      "Accelerated term sheet negotiations for 30+ participating ventures",
      "Permanent founder peer-mentorship circles established across India",
    ],
    speakers: [
      "Unicorn & Growth-Stage Founders",
      "Managing Partners at Top Tier VCs",
      "Organizational Design & People Scientists",
    ],
    editions: [
      {
        id: "sprint-2025",
        title: "Founders Sprint 2025: From Product Builder to Executive CEO",
        date: "July 12, 2025",
        location: "LEADS Innovation Hub, Bengaluru",
        attendees: "350 Founders",
        photo: "/events/founders-sprint.jpg",
        overview:
          "Deep dive into the transition from a technical developer founder into a strategic executive and team leader.",
        keyTopics: [
          "Managing People Older & More Experienced Than You",
          "Fundraising Psychology & Pitch Mechanics",
        ],
        keySpeakers: ["Growth-Stage Tech Founders", "Early-Stage VC Partners"],
        outcomes: [
          "Conducted 60 rapid-fire pitch audits with feedback scores",
        ],
      },
      {
        id: "sprint-2026",
        title: "Founders Sprint 2026: Scaling Governance & Global Expansion",
        date: "January 18, 2026",
        location: "LEADS Innovation Hub, Bengaluru",
        attendees: "500+ Registered Founders & Angel Investors",
        photo: "/events/founders-sprint.jpg",
        overview:
          "Navigating cross-border hiring, international investor relations, and resilient organizational design.",
        keyTopics: [
          "Cross-Border Executive Leadership",
          "Building Anti-Fragile Team Cultures",
        ],
        keySpeakers: ["Global Enterprise Strategists", "FMC Entrepreneurship Faculty"],
        outcomes: [
          "Launch of the LEADS Startup Leadership Fellowship 2026",
        ],
      },
    ],
  },
];
