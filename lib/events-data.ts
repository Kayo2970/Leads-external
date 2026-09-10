export interface LEADSEventEdition {
  id: string;
  placeholderId?: number;
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
  placeholderId?: number;
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
    placeholderId: 44,
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
        placeholderId: 45,
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
        placeholderId: 46,
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
        placeholderId: 47,
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
    id: "mdp-series",
    placeholderId: 48,
    name: "Management Development Programs (MDP)",
    seriesName: "Management Development Programs",
    category: "Workshop",
    tagline: "Empowering Executives, Managers & Policy Officers with Advanced Leadership Capability",
    date: "Quarterly Executive Cohorts · Next: Nov 15, 2025",
    location: "LEADS Executive Centre & Enterprise Venues, Bengaluru",
    attendees: "600+ Senior Managers & Enterprise Executives",
    badgeColor: "bg-[#9C1256]/20 text-white border-[#DE3F11]/40",
    logoSvg: "shield",
    photo: "/events/roundtable-exec.jpg",
    gallery: [
      "/events/roundtable-exec.jpg",
      "/events/catalyst-workshop.jpg",
      "/events/founders-sprint.jpg",
    ],
    featured: true,
    description:
      "Management Development Programs (MDP) at LEADS Next Gen Centre offer intensive executive training, strategic governance simulations, and customized capability-building masterclasses for corporate leaders, PSU executives, and public sector administrators.",
    seriesHighlights: [
      "Customized in-company and open-enrollment executive modules",
      "Executive decision-making and cross-functional leadership drills",
      "Non-technical financial, strategic, and governance masterclasses",
      "Certification endorsed by RUAS Faculty of Management & Commerce",
    ],
    outcomes: [
      "Certified executive management skill upgrades across enterprises",
      "Direct MOU sign-offs for industry-academic collaborative research",
      "Customized leadership playbooks delivered to partner corporations",
    ],
    speakers: [
      "FMC Senior Deans & Management Faculty",
      "Corporate Vice Presidents & CHROs",
      "Public Policy Advisors & Governance Mentors",
    ],
    editions: [
      {
        id: "mdp-q3-2025",
        placeholderId: 49,
        title: "MDP Cohort 2025: Strategic Enterprise Leadership & Governance",
        date: "September 12–14, 2025",
        location: "LEADS Executive Suite, Bengaluru",
        attendees: "120 Executive Delegates",
        photo: "/events/roundtable-exec.jpg",
        overview:
          "Intensive 3-day executive training equipping mid-to-senior managers with strategic foresight, team alignment, and conflict management tools.",
        keyTopics: [
          "Strategic Scenario Planning & Crisis Management",
          "Executive Presence & Stakeholder Communication",
          "Non-Technical Capability Frameworks",
        ],
        keySpeakers: ["FMC Senior Faculty", "Corporate VPs"],
        outcomes: [
          "Trained 120 senior executives across 15 enterprise organizations",
        ],
      },
    ],
  },
  {
    id: "vanguard-series",
    placeholderId: 50,
    name: "Vanguard: Off-Campus Outreach & Experiential Leadership",
    seriesName: "Vanguard Outreach Series",
    category: "Workshop",
    tagline: "Immersive Off-Campus Expeditions, Outdoor Leadership Drills & Community Empowerment",
    date: "Bi-Annual Expeditions · Next: Dec 10, 2025",
    location: "Off-Campus Outpost Hubs & Field Sites, Karnataka",
    attendees: "300+ Outdoor Expedition Participants",
    badgeColor: "bg-[#9C1256]/20 text-white border-[#DE3F11]/40",
    logoSvg: "compass",
    photo: "/images/gallery/g5.webp",
    gallery: [
      "/images/gallery/g5.webp",
      "/images/gallery/g7.webp",
      "/images/gallery/g11.webp",
    ],
    featured: true,
    description:
      "Vanguard is LEADS Next Gen Centre's signature off-campus experiential leadership and community outreach program. Participants step outside campus walls onto field expeditions, rural empowerment missions, and outdoor strategy retreats designed to build real-world resilience, tactical teamwork, and social impact.",
    seriesHighlights: [
      "Off-campus leadership expeditions and survival strategy drills",
      "Grassroots community development & rural governance clinics",
      "High-stress physical and mental team problem-solving challenges",
      "Experiential mentorship with veteran field leaders and military strategists",
    ],
    outcomes: [
      "Empowered 300+ participants with field-level leadership resilience",
      "Direct community impact projects established in rural districts",
      "Creation of the Vanguard Field Leadership Logbook & Certification",
    ],
    speakers: [
      "Vanguard Field Expedition Leaders",
      "Community Development Directors",
      "Veteran Defense & Strategic Officers",
    ],
    editions: [
      {
        id: "vanguard-expedition-1",
        placeholderId: 51,
        title: "Vanguard Expedition 2025: Western Ghats Leadership Challenge",
        date: "January 24–26, 2025",
        location: "Western Ghats Outdoor Base, Karnataka",
        attendees: "150 Field Delegates",
        photo: "/images/gallery/g5.webp",
        overview:
          "Off-campus experiential leadership immersion testing team trust, navigation, and crisis decision-making under outdoor wilderness conditions.",
        keyTopics: [
          "Tactical Decision-Making Under Physical Fatigue",
          "Grassroots Community Stakeholder Engagement",
          "Team Synergy in Unstructured Environments",
        ],
        keySpeakers: ["Vanguard Field Mentors", "Rural Development Officers"],
        outcomes: [
          "Completed 3 community outreach missions in regional villages",
        ],
      },
    ],
  },
  {
    id: "startup-founders-sprint",
    placeholderId: 52,
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
      "/events/roundtable-exec.jpg",
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
        placeholderId: 53,
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
    ],
  },
  {
    id: "annual-impact-meet",
    placeholderId: 54,
    name: "LEADS Annual Impact Meet",
    seriesName: "Annual Impact Meet",
    category: "Conclave",
    tagline: "Demonstrating Our Yearly Achievements, Honouring Leadership Excellence & Unveiling Impact Milestones",
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
      "The LEADS Annual Impact Meet is the Centre's flagship year-end assembly — a prestigious gathering that demonstrates the tangible impacts, research outcomes, and leadership milestones achieved across the academic year. The event features the unveiling of the Annual Impact Report, induction of student council leads, and recognition of partner excellence.",
    seriesHighlights: [
      "Public release of the LEADS Year-in-Review Annual Impact Report",
      "LEADS Leadership & Innovation Excellence Awards ceremony",
      "Incoming Executive Student Council oath-taking & formal induction",
      "Institutional showcases & strategic partnership milestones review",
    ],
    outcomes: [
      "Annual recognition of outstanding students, faculty mentors & industry partners",
      "Public release of the LEADS Year-in-Review Impact Report",
      "Formal induction of the incoming LEADS Executive Student Council",
    ],
    speakers: [
      "Prof. (Dr.) K.M. Sharath Kumar (Director, LEADS Next Gen Centre)",
      "Dr. Subhadeep Mukherjee (Head, LEADS Next Gen Centre)",
      "Dean, Faculty of Management and Commerce (FMC)",
      "Distinguished Alumni & Partner Representatives",
    ],
    editions: [
      {
        id: "annual-impact-meet-2025",
        placeholderId: 55,
        title: "LEADS Annual Impact Meet 2025: A Year of Transformation",
        date: "April 2025",
        location: "University House, Mathikere Campus, RUAS, Bengaluru",
        attendees: "800+ Members, Alumni, Faculty & Industry Partners",
        photo: "/images/gallery/g6.webp",
        overview:
          "The inaugural Annual Impact Meet commemorating one full year of transformative leadership programmes, showcasing key metrics, and unveiling the Year 1 Impact Report.",
        keyTopics: [
          "Year 1 Impact Metrics & National Footprint",
          "LEADS Leadership Excellence Awards",
          "Executive Student Council Handover",
        ],
        keySpeakers: [
          "Prof. (Dr.) K.M. Sharath Kumar (Director, LEADS)",
          "Dean FMC (Chief Guest)",
        ],
        outcomes: [
          "2,500+ beneficiaries acknowledged across all LEADS programmes",
          "Public release of the Year 1 Impact Report",
        ],
      },
    ],
  },
  {
    id: "leads-outreach",
    placeholderId: 56,
    name: "LEADS Outreach Activities & Field Initiatives",
    seriesName: "LEADS Outreach Series",
    category: "Workshop",
    tagline: "Social Impact Missions, Skill Upliftment Drive & Community Empowerment",
    date: "Ongoing Community Initiatives · Year-Round",
    location: "Regional Districts, Schools & Partner Outposts, Karnataka",
    attendees: "1,200+ Beneficiaries Reached",
    badgeColor: "bg-[#9C1256]/20 text-white border-[#DE3F11]/40",
    logoSvg: "users",
    photo: "/images/gallery/g3.webp",
    gallery: [
      "/images/gallery/g3.webp",
      "/images/gallery/g5.webp",
      "/images/gallery/g8.webp",
    ],
    featured: true,
    description:
      "LEADS Outreach Activities bring non-technical leadership training, youth mentoring, and strategic governance awareness directly to regional communities, public institutions, and rural innovation centers across Karnataka and South India.",
    seriesHighlights: [
      "Youth leadership workshops in tier-2 and tier-3 colleges",
      "Public sector governance & citizen engagement clinics",
      "Non-technical skill workshops for women entrepreneurs and SHGs",
      "Collaborative social impact projects with state departments",
    ],
    outcomes: [
      "1,200+ regional youth and community leaders trained",
      "State-wide outreach partnerships established across 8 districts",
    ],
    speakers: [
      "LEADS Faculty Mentors & Student Associates",
      "District Administration Officers",
      "Social Innovation Specialists",
    ],
    editions: [
      {
        id: "outreach-2025",
        placeholderId: 57,
        title: "LEADS Youth Leadership & Skill Outreach Drive 2025",
        date: "March 15, 2025",
        location: "Mandya & Ramanagara Regional Centers",
        attendees: "450 Students & Community Leads",
        photo: "/images/gallery/g3.webp",
        overview:
          "Field outreach drive delivering interactive non-technical communication and leadership workshops for rural degree college students.",
        keyTopics: [
          "Confidence Building & Career Storytelling",
          "Digital Literacy & Governance Awareness",
        ],
        keySpeakers: ["LEADS Outreach Fellows", "FMC Mentor Faculty"],
        outcomes: [
          "450 certificates of completion awarded across 4 participating colleges",
        ],
      },
    ],
  },
  {
    id: "leads-conferences",
    placeholderId: 58,
    name: "LEADS Academic & National Policy Conferences",
    seriesName: "National Policy Conferences",
    category: "Conclave",
    tagline: "National Research Symposia, Governance Benchmarking & Multi-Disciplinary Policy Exchanges",
    date: "Annual Conference · Next: May 18, 2026",
    location: "RUAS Convention Centre & Virtual Symposia, Bengaluru",
    attendees: "1,000+ Scholars, Deans & Policy Architects",
    badgeColor: "bg-[#9C1256]/20 text-white border-[#DE3F11]/40",
    logoSvg: "graduation-cap",
    photo: "/images/gallery/g11.webp",
    gallery: [
      "/images/gallery/g11.webp",
      "/images/gallery/g1.webp",
      "/images/gallery/g2.webp",
    ],
    featured: true,
    description:
      "Annual national and international academic conferences convening researchers, deans, corporate strategists, and policy architects to publish peer-reviewed research, deliberate on governance frameworks, and establish benchmarks for non-technical leadership.",
    seriesHighlights: [
      "Peer-reviewed paper presentations & whitepaper releases",
      "Keynotes by international management scholars and policy leaders",
      "Special symposia on Higher Education Governance & Ethics",
      "Publication of conference proceedings in indexed academic journals",
    ],
    outcomes: [
      "Over 50 peer-reviewed paper presentations per conference edition",
      "Formal release of the National Non-Technical Leadership Policy Draft",
    ],
    speakers: [
      "International B-School Deans",
      "Central & State Higher Education Officers",
      "Lead Editors of Management Journals",
    ],
    editions: [
      {
        id: "conference-2025",
        placeholderId: 59,
        title: "1st National Conference on Non-Technical Leadership & Governance",
        date: "February 20, 2025",
        location: "RUAS Convention Centre, Bengaluru",
        attendees: "600 Academic Delegates",
        photo: "/images/gallery/g11.webp",
        overview:
          "Inaugural national conference presenting empirical studies on leadership skill gaps in engineering and professional graduates across India.",
        keyTopics: [
          "Empirical Metrics for Non-Technical Skill Assessment",
          "Institutional Governance & Academic Deanship",
        ],
        keySpeakers: ["Vice Chancellor RUAS", "Senior Policy Researchers"],
        outcomes: [
          "Published 42 research whitepapers in official proceedings",
        ],
      },
    ],
  },
];
