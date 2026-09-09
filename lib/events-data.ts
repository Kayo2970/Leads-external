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
    name: "Catalyst: Leadership Talk Series",
    seriesName: "Catalyst Leadership Talk Series",
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
    photo: "/images/gallery/g1.webp",
    gallery: [
      "/images/gallery/g1.webp",
      "/images/gallery/g2.webp",
      "/images/gallery/g5.webp",
      "/images/gallery/g7.webp",
      "/images/gallery/g11.webp",
    ],
    featured: true,
    externalLink: "https://www.bharatleadsummit.com/",
    description:
      "The Bharath Leadership Summit (BLS) is the nation's premier leadership convention organized by LEADS Next Gen Centre at RUAS. BLS convenes Union & State policymakers, Unicorn founders, Fortune 500 executives, academic scholars, and emerging leaders to formulate actionable blueprints for nation building, deep-tech leadership, and institutional excellence.",
    seriesHighlights: [
      "Keynote addresses by national leaders and AI Mission board members",
      "Annual National Non-Technical Skill Gap & Leadership Index unveiling",
      "High-stakes panels on Deep-Tech, Sustainable Innovation, and Defence Leadership",
      "Collaborative ecosystem sessions with BMA, IIC, and industry partners",
    ],
    outcomes: [
      "Formal adoption of the National Leadership Upliftment Charter",
      "Inter-sectoral leadership collaboration frameworks established",
      "Publication of national research on executive capability indexes",
      "Over 1,500 delegates aligned on sustainable Indian industry growth",
    ],
    speakers: [
      "Mr. Ramanan Ramanathan (Mission Governing Board Member - India AI Mission, DST)",
      "Prof. (Dr.) K.K. Raina (Vice Chancellor, RUAS)",
      "Prof. (Dr.) K.M. Sharath Kumar (Director, LEADS Next Gen Centre)",
      "Dr. Subhadeep Mukherjee (Head, LEADS Next Gen Centre)",
      "Mr. Prateek Madhav (Co-Founder & CEO, AssisTech Foundation)",
      "Dr. Abhay Tiwari (CEO, Spatiality.ai)",
      "Mr. Nishant Niranjan (Co-founder & CEO, SolvusAI Technologies)",
      "Dr. Roy (CEO & Co-Founder, Racehorse Business Consulting)",
      "Ms. Padmaja Narsipur (Founder, Clearly Blue Digital)",
      "Mr. Sandeep Ohri (Strategy & Venture Mentor, That Strategy Guy)",
    ],
    editions: [
      {
        id: "bls-2024",
        title: "Bharath Leadership Summit 2024: The Inaugural Assembly",
        date: "October 18–19, 2024",
        location: "RUAS Convention Centre, Bengaluru",
        attendees: "1,200 Delegates",
        photo: "/images/gallery/g2.webp",
        overview:
          "The inaugural assembly establishing LEADS Next Gen Centre on the national stage, bringing together academic institutions and industry stalwarts from 18 Indian states.",
        keyTopics: [
          "India's Non-Technical Skill Deficit: A Strategic Imperative",
          "Public-Private Synergies in Leadership Development",
          "Fostering Ethical Governance in Scaling Enterprises",
        ],
        keySpeakers: [
          "Mr. Ramanan Ramanathan (India AI Mission, DST)",
          "Prof. (Dr.) K.K. Raina (Vice Chancellor)",
          "Prof. (Dr.) K.M. Sharath Kumar (Director LEADS)",
        ],
        outcomes: [
          "Official national unveiling of LEADS Next Gen Centre",
          "Release of the Year 1 Leadership Charter & Whitepaper",
        ],
      },
      {
        id: "bls-2026",
        title: "Bharath Leadership Summit 2026: Sustainable Innovation & Deep-Tech",
        date: "April 10–11, 2026",
        location: "University House, Mathikere, Bengaluru",
        attendees: "1,500+ Confirmed Delegates",
        photo: "/images/gallery/g1.webp",
        overview:
          "The flagship national summit featuring multi-track keynotes, deep-tech panels, fireside chats, and venture mentorship sessions across 2 days.",
        keyTopics: [
          "Leading the Deep-Tech Revolution in India",
          "Leadership for Sustainable Innovation",
          "Next-Generation Strategic & Defence Leadership",
          "Transforming CSR into High-Impact Growth",
        ],
        keySpeakers: [
          "Mr. Ramanan Ramanathan (DST India)",
          "Mr. Prateek Madhav (CEO, ATF)",
          "Dr. Abhay Tiwari (CEO, Spatiality.ai)",
          "Mr. Nishant Niranjan (CEO, SolvusAI)",
          "Mr. Sandeep Ohri (That Strategy Guy)",
        ],
        outcomes: [
          "10+ Institutional Mentorship & Collaboration MoUs",
          "Industry-backed non-technical leadership scholarships",
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
  {
    id: "annual-day",
    name: "LEADS Annual Day",
    seriesName: "LEADS Annual Day",
    category: "Conclave",
    tagline: "Honouring Excellence, Inspiring Legacy & Celebrating the LEADS Spirit",
    date: "Annual Flagship · April 2026",
    location: "RUAS University House, Mathikere Campus, Bengaluru",
    attendees: "800+ Members, Alumni, Faculty & Industry Partners",
    badgeColor: "bg-[#9C1256]/20 text-white border-[#DE3F11]/40",
    logoSvg: "star",
    photo: "/images/gallery/g6.webp",
    gallery: [
      "/images/gallery/g6.webp",
      "/images/gallery/g8.webp",
      "/images/gallery/g9.webp",
      "/images/gallery/g3.webp",
    ],
    featured: true,
    description:
      "The LEADS Annual Day is the Centre's flagship year-end celebration — a prestigious gala evening that honours the outstanding contributions of students, faculty mentors, and industry partners across the academic year. The event culminates with the formal induction of the incoming LEADS Executive Student Council, the public release of the Year-in-Review Impact Report, and a cultural showcase that reflects the values and vision of LEADS Next Gen Centre.",
    seriesHighlights: [
      "LEADS Excellence Awards honouring top performers across all cohorts",
      "Annual Impact Report public release and year-in-review showcase",
      "Incoming Executive Student Council oath-taking & formal handover",
      "Cultural performances, alumni keynotes & institutional highlights reel",
    ],
    outcomes: [
      "Annual recognition of outstanding students, faculty mentors & industry partners",
      "Public release of the LEADS Year-in-Review Impact Report",
      "Formal induction of the incoming LEADS Executive Student Council",
      "Strengthened alumni-industry-institution network across RUAS ecosystem",
    ],
    speakers: [
      "Prof. (Dr.) K.M. Sharath Kumar (Director, LEADS Next Gen Centre)",
      "Dr. Subhadeep Mukherjee (Head, LEADS Next Gen Centre)",
      "Dean, Faculty of Management and Commerce (FMC)",
      "LEADS Alumni Distinguished Speakers",
      "Outgoing & Incoming Executive Council Representatives",
    ],
    editions: [
      {
        id: "annual-day-2025",
        title: "LEADS Annual Day 2025: A Year of Impact",
        date: "April 2025",
        location: "University House, Mathikere Campus, RUAS, Bengaluru",
        attendees: "800+ Members, Alumni, Faculty & Industry Partners",
        photo: "/images/gallery/g6.webp",
        overview:
          "The first Annual Day celebration of LEADS Next Gen Centre — a gala evening commemorating one full year of transformative programmes, honouring top achievers, welcoming a new executive council, and unveiling the Centre's Year 1 Impact Report.",
        keyTopics: [
          "Year 1 Impact: Programmes, Milestones & National Reach",
          "LEADS Excellence Awards Ceremony",
          "Incoming Executive Council Oath-Taking & Handover",
        ],
        keySpeakers: [
          "Prof. (Dr.) K.M. Sharath Kumar (Director, LEADS)",
          "Distinguished Alumni Speaker",
          "Dean FMC (Chief Guest)",
        ],
        outcomes: [
          "2,500+ beneficiaries acknowledged across all LEADS programmes",
          "25 Excellence Awards presented across student, faculty & partner categories",
          "Successful induction of the 2025–26 LEADS Student Executive Council",
        ],
      },
    ],
  },
  {
    id: "inauguration-function",
    name: "LEADS Inauguration Function",
    seriesName: "LEADS Inauguration",
    category: "Conclave",
    tagline: "Marking the Formal Establishment of India's Premier Leadership Centre",
    date: "October 14, 2024",
    location: "RUAS Main Auditorium, Gnanagangothri Campus, Bengaluru",
    attendees: "600+ Faculty, Students & Invited Dignitaries",
    badgeColor: "bg-[#9C1256]/20 text-white border-[#DE3F11]/40",
    logoSvg: "sparkles",
    photo: "/images/gallery/g4.webp",
    gallery: [
      "/images/gallery/g4.webp",
      "/images/gallery/g3.webp",
      "/images/gallery/g5.webp",
      "/images/gallery/g7.webp",
    ],
    featured: false,
    description:
      "The LEADS Inauguration Function was the historic founding ceremony that formally established LEADS Next Gen Centre under the Faculty of Management and Commerce at M. S. Ramaiah University of Applied Sciences. Attended by the Vice-Chancellor, senior faculty, industry dignitaries, and over 600 delegates, the inauguration marked the beginning of India's first dedicated Centre for non-technical leadership and executive skill development.",
    seriesHighlights: [
      "Formal lamp-lighting ceremony presided over by the Vice-Chancellor, RUAS",
      "Launch of the Centre's founding charter, vision statement & strategic roadmap",
      "MoU signing with 3 inaugural industry partners",
      "Official unveiling of the LEADS brand identity and flagship programmes",
    ],
    outcomes: [
      "Official national launch of LEADS Next Gen Centre before 600+ attendees",
      "First academic year programme calendar formally unveiled",
      "Formal MoU signing with 3 founding industry and academic partners",
      "Centre positioned as India's first dedicated non-technical leadership institution",
    ],
    speakers: [
      "Prof. (Dr.) K.K. Raina (Vice Chancellor, RUAS)",
      "Prof. (Dr.) K.M. Sharath Kumar (Director, LEADS Next Gen Centre)",
      "Dr. Subhadeep Mukherjee (Head, LEADS Next Gen Centre)",
      "Dean, Faculty of Management and Commerce (FMC)",
      "Invited Industry & Academic Dignitaries",
    ],
    editions: [
      {
        id: "inauguration-2024",
        title: "LEADS Founding Inauguration Ceremony 2024",
        date: "October 14, 2024",
        location: "RUAS Main Auditorium, Gnanagangothri Campus, Bengaluru",
        attendees: "600+ Faculty, Students & Invited Dignitaries",
        photo: "/images/gallery/g4.webp",
        overview:
          "The historic founding inauguration of LEADS Next Gen Centre — marking the formal establishment of India's first dedicated institution for non-technical leadership and executive skill development under the Faculty of Management and Commerce, RUAS.",
        keyTopics: [
          "Vision & Mission of LEADS Next Gen Centre",
          "Non-Technical Skill Development as a National Priority",
          "Launch of the Centre's flagship programmes & strategic roadmap",
        ],
        keySpeakers: [
          "Prof. (Dr.) K.K. Raina (Vice Chancellor, RUAS)",
          "Prof. (Dr.) K.M. Sharath Kumar (Director, LEADS)",
          "Dr. Subhadeep Mukherjee (Head, LEADS)",
        ],
        outcomes: [
          "Official inauguration of LEADS Next Gen Centre before 600+ attendees",
          "Launch of the Centre's first academic year charter and programme calendar",
          "Formal MoU signing with 3 founding industry partners",
        ],
      },
    ],
  },
];
