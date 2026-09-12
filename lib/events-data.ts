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
  category: "Summit" | "Workshop" | "Roundtable" | "Conclave" | "Outreach" | "Catalyst" | "Expert Talk" | "Fireside Talk" | "Boardroom Battle" | "Sustainability";
  subCategory: "Stand-alone" | "Outreach" | "Catalyst Leadership Talk Series" | "Expert Talks" | "Fireside Talks" | "Boardroom Battles" | "Sustainability";
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
  // 1. Stand-alone Events
  {
    id: "leads-inaugural-function",
    placeholderId: 58,
    name: "LEADS Next Gen Centre Inaugural Function",
    seriesName: "Official Launch & Plenary Sessions",
    category: "Conclave",
    subCategory: "Stand-alone",
    tagline: "Formally opened by Dr. C. N. Manjunath & Mr. Ramanan Ramanathan under theme Sankalp Se Siddhi",
    date: "January 2026",
    location: "Ramaiah University Campus, Bengaluru",
    attendees: "300+ Dignitaries & Student Delegates",
    badgeColor: "bg-purple-100 text-[#9C1256] border-purple-200",
    logoSvg: "graduation-cap",
    photo: "/images/gallery/g11.webp",
    gallery: ["/images/gallery/g11.webp", "/images/gallery/g1.webp", "/images/gallery/g2.webp"],
    featured: true,
    description: "Formally opened by Dr. C. N. Manjunath and Mr. Ramanan Ramanathan under the theme Sankalp Se Siddhi, the Bharat Lead Summit 2026 kicked off with a dedicated badging ceremony that officially inducted the core student committee. Featured four strategic plenary sessions centered on deep-tech, sustainable innovation, and leadership paradigms for Viksit Bharat 2047.",
    seriesHighlights: [
      "Keynote addresses by Dr. C. N. Manjunath & Mr. Ramanan Ramanathan",
      "Student Council official badging ceremony & operational roadmap",
      "Plenary sessions with Dr. Kishore Rao (Aequs INFRA) & Mr. Shaju Mangalam (FICCI)",
      "Global leadership insights by Dr. Charles Chow (East-West Group, Singapore)"
    ],
    outcomes: [
      "Official launch of LEADS Next Gen Centre charter",
      "Induction of student leadership core committee",
      "Direct executive mentorship across 4 plenary tracks"
    ],
    speakers: [
      "Dr. C. N. Manjunath (Padma Shri)",
      "Mr. Ramanan Ramanathan (Former Mission Director, AIM)",
      "Dr. Kishore Rao (CEO, Aequs INFRA SEZ)",
      "Mr. Shaju Mangalam (Head & Director, FICCI Karnataka)",
      "Mr. Balvir Talwar (Former ED, BHEL)",
      "Dr. Charles Chow (MD, East-West Group, Singapore)"
    ],
    editions: []
  },
  {
    id: "vanguard-leadership-retreat",
    placeholderId: 59,
    name: "Vanguard Leadership Retreat",
    seriesName: "Executive Retreat Series",
    category: "Conclave",
    subCategory: "Stand-alone",
    tagline: "Elite Experiential Governance, Off-Campus Team Dynamics & Leadership Initiative",
    date: "2025",
    location: "Off-Campus Executive Retreat Venue, Karnataka",
    attendees: "50+ Senior Directors & C-Suite Executives",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
    logoSvg: "award",
    photo: "/images/gallery/g1.webp",
    gallery: ["/images/gallery/g1.webp", "/images/gallery/g2.webp"],
    featured: true,
    description: "An elite executive vanguard track empowering C-suite executives, directors, and institutional stalwarts to master board governance, strategic realignment, high-stakes negotiation, and disruptive venture stewardship.",
    seriesHighlights: [
      "Boardroom dynamics & strategic governance masterclasses",
      "Enterprise resilience, ethics, & crisis scenario navigation",
      "Peer-to-peer executive roundtables & global benchmarking",
      "Exclusive access to LEADS senior advisory & policy networks"
    ],
    outcomes: [
      "Executive governance certification for senior fellows",
      "Strategic realignment framework for enterprise leaders",
      "High-stakes negotiation simulations"
    ],
    speakers: [
      "Prof. (Dr.) K. M. Sharath Kumar (Director, LEADS)",
      "Dr. Subhadeep Mukherjee (Head, LEADS)",
      "Senior Corporate Advisory Board Members"
    ],
    editions: []
  },

  // 2. Outreach Events
  {
    id: "9th-state-level-seminar",
    placeholderId: 60,
    name: "9th State Level Seminar for Transforming the Nation",
    seriesName: "Outreach Programmes",
    category: "Outreach",
    subCategory: "Outreach",
    tagline: "State-Wide Administrative Transformation & Youth Leadership Forum",
    date: "September 2025",
    location: "Convention Hall, Bengaluru",
    attendees: "500+ Youth Delegates & Public Officials",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    logoSvg: "users",
    photo: "/images/gallery/g2.webp",
    gallery: ["/images/gallery/g2.webp", "/images/gallery/g3.webp"],
    featured: false,
    description: "State-level seminar bringing together administrative leaders, policy scholars, and student delegates to discuss nation-building, administrative efficiency, and public sector governance.",
    seriesHighlights: [
      "State-level governance & nation-building panels",
      "Interactive sessions with public service administrators",
      "Youth policy whitepaper presentations"
    ],
    outcomes: [
      "State-wide student delegate representation",
      "Youth governance recommendations submitted to policy boards"
    ],
    speakers: ["State Administration Stalwarts", "LEADS Policy Mentors"],
    editions: []
  },
  {
    id: "new-delhi-visit",
    placeholderId: 61,
    name: "Education and Cultural Visit to New Delhi",
    seriesName: "Outreach Programmes",
    category: "Outreach",
    subCategory: "Outreach",
    tagline: "Experiential Learning Delegation to Rashtrapati Bhavan & Bharat Mandapam",
    date: "September 14–16, 2025",
    location: "Rashtrapati Bhavan, IITF & Bharat Mandapam, New Delhi",
    attendees: "40 Student Delegates & Faculty Mentors",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    logoSvg: "users",
    photo: "/images/gallery/g3.webp",
    gallery: ["/images/gallery/g3.webp", "/images/gallery/g4.webp"],
    featured: false,
    description: "Three-day experiential delegation visit to New Delhi, providing student delegates with direct exposure to national governance at Rashtrapati Bhavan, international trade at IITF, and industrial technology at MachTech Expo in Bharat Mandapam.",
    seriesHighlights: [
      "Guided delegation tour of Rashtrapati Bhavan & national landmarks",
      "Industrial technology study at MachTech Expo, Bharat Mandapam",
      "Interaction with central trade & policy officials"
    ],
    outcomes: [
      "Firsthand exposure to national policy and industrial exhibitions",
      "Delegation report presented to university chancellor"
    ],
    speakers: ["Rashtrapati Bhavan Officers", "IITF Trade Delegation Leads"],
    editions: []
  },
  {
    id: "nhrd-bangalore-chapter",
    placeholderId: 62,
    name: "NHRD Bangalore Chapter - Joint HR Leadership Session",
    seriesName: "Outreach Programmes",
    category: "Outreach",
    subCategory: "Outreach",
    tagline: "Future-Ready Talent Management & Organisational Culture",
    date: "2025",
    location: "Bengaluru",
    attendees: "150+ HR Directors & Corporate Leaders",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    logoSvg: "users",
    photo: "/images/gallery/g4.webp",
    gallery: ["/images/gallery/g4.webp"],
    featured: false,
    description: "Collaborative HR leadership session organized with National HRD Network (NHRD) Bangalore Chapter, addressing non-technical skills gap, modern corporate culture, and workforce agility.",
    seriesHighlights: [
      "Bridging university talent with corporate HR expectations",
      "Panel on 21st-century non-technical skill requirements",
      "Networking session with NHRD Bangalore executive board"
    ],
    outcomes: [
      "Joint HR certification initiative",
      "Corporate mentorship allocations for student leaders"
    ],
    speakers: ["NHRD Chapter President", "Corporate HR Directors"],
    editions: []
  },
  {
    id: "bma-generative-economies",
    placeholderId: 63,
    name: "BMA Roundtable: Generative Economies",
    seriesName: "Outreach Programmes",
    category: "Outreach",
    subCategory: "Outreach",
    tagline: "Ushering the AI-Driven Industrial Era with Dassault Systèmes",
    date: "2025",
    location: "Dassault Systèmes / BMA, Bengaluru",
    attendees: "80+ Enterprise Directors & AI Technologists",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    logoSvg: "users",
    photo: "/images/gallery/g5.webp",
    gallery: ["/images/gallery/g5.webp"],
    featured: false,
    description: "Industry roundtable co-hosted with Bangalore Management Association and Dassault Systèmes, exploring AI-driven industrial transformation, smart manufacturing, and generative economic models.",
    seriesHighlights: [
      "Generative AI applications in industrial engineering",
      "Dassault Systèmes 3DEXPERIENCE platform showcase",
      "Executive panel on digital twins & industrial automation"
    ],
    outcomes: [
      "Strategic industry-academia partnership roadmap",
      "Executive consensus paper on AI in manufacturing"
    ],
    speakers: ["Dassault Systèmes Directors", "BMA Executive Committee Members"],
    editions: []
  },
  {
    id: "fkcci-msme-conclave",
    placeholderId: 64,
    name: "FKCCI Global MSME Conclave",
    seriesName: "Outreach Programmes",
    category: "Outreach",
    subCategory: "Outreach",
    tagline: "Scaling MSME Competitiveness, Export Policy & Financial Infrastructure",
    date: "2025",
    location: "FKCCI Convention Center, Bengaluru",
    attendees: "300+ MSME Founders & Trade Delegates",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    logoSvg: "users",
    photo: "/images/gallery/g6.webp",
    gallery: ["/images/gallery/g6.webp"],
    featured: false,
    description: "High-level MSME policy conclave organized by FKCCI with LEADS delegation participating in panels on export competitiveness, credit facilitation, and digital adoption for small enterprises.",
    seriesHighlights: [
      "MSME credit facility & government subsidy masterclasses",
      "Export competitiveness & global market access strategies",
      "LEADS delegation engagement with FKCCI office bearers"
    ],
    outcomes: [
      "MSME internship pipeline for university students",
      "Policy recommendations for state trade boards"
    ],
    speakers: ["FKCCI President", "Ministry of MSME Representatives"],
    editions: []
  },
  {
    id: "bcic-esg-awards",
    placeholderId: 65,
    name: "BCIC ESG and Sustainability Awards 3.0",
    seriesName: "Outreach Programmes",
    category: "Outreach",
    subCategory: "Outreach",
    tagline: "Recognizing Excellence in Corporate Climate Action & Social Responsibility",
    date: "2025",
    location: "BCIC Auditorium, Bengaluru",
    attendees: "200+ Corporate Sustainability Heads",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    logoSvg: "users",
    photo: "/images/gallery/g7.webp",
    gallery: ["/images/gallery/g7.webp"],
    featured: false,
    description: "3rd annual BCIC Sustainability Awards recognizing enterprise leaders across climate action, water stewardship, circular economy, ESG compliance, and community impact.",
    seriesHighlights: [
      "Felicitation of top corporate ESG achievers in Karnataka",
      "Best practices in corporate carbon neutrality & waste management",
      "LEADS student delegation benchmarking corporate ESG frameworks"
    ],
    outcomes: [
      "Student council ESG auditing exposure",
      "Corporate sustainability networking for research fellows"
    ],
    speakers: ["Mr. Prashant Gokhale (President, BCIC)", "ESG Committee Chairs"],
    editions: []
  },

  // 3. Catalyst Leadership Talk Series (Restarts at 3.0!)
  {
    id: "catalyst-3",
    placeholderId: 66,
    name: "Catalyst Insights Leadership Talk Series 3.0",
    seriesName: "Catalyst Series",
    category: "Catalyst",
    subCategory: "Catalyst Leadership Talk Series",
    tagline: "Executive Capability, Ethics & Structured Business Thinking",
    date: "2025",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "200+ Students & Faculty",
    badgeColor: "bg-[#DE3F11]/10 text-[#DE3F11] border-[#DE3F11]/20",
    logoSvg: "zap",
    photo: "/images/gallery/g8.webp",
    gallery: ["/images/gallery/g8.webp"],
    featured: true,
    description: "3rd edition of the Catalyst Insights Talk Series empowering student leaders with executive insights, ethical governance, and structured business problem-solving.",
    seriesHighlights: [
      "Structured thinking & analytical decision frameworks",
      "Ethical governance in high-growth enterprises",
      "Interactive Q&A with industry masterclass speakers"
    ],
    outcomes: ["Practical business problem-solving toolkit", "Student certificate of attendance"],
    speakers: ["Industry Keynote Masters", "LEADS Faculty Leads"],
    editions: []
  },
  {
    id: "catalyst-4",
    placeholderId: 67,
    name: "Catalyst Insights Leadership Talk Series 4.0",
    seriesName: "Catalyst Series",
    category: "Catalyst",
    subCategory: "Catalyst Leadership Talk Series",
    tagline: "Strategic Agility, Personal Branding & Corporate Adaptability",
    date: "2025",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "220+ Students",
    badgeColor: "bg-[#DE3F11]/10 text-[#DE3F11] border-[#DE3F11]/20",
    logoSvg: "zap",
    photo: "/images/gallery/g9.webp",
    gallery: ["/images/gallery/g9.webp"],
    featured: false,
    description: "4th edition of the Catalyst series exploring personal branding, executive presence, and cross-functional team dynamics for career growth.",
    seriesHighlights: [
      "Personal branding for career advancement",
      "Executive communication & presence masterclass",
      "Cross-functional team collaboration dynamics"
    ],
    outcomes: ["Executive presence handbook", "Student career positioning strategies"],
    speakers: ["Corporate Brand Strategists", "LEADS Trainers"],
    editions: []
  },
  {
    id: "catalyst-5",
    placeholderId: 68,
    name: "Catalyst Insights Leadership Talk Series 5.0",
    seriesName: "Catalyst Series",
    category: "Catalyst",
    subCategory: "Catalyst Leadership Talk Series",
    tagline: "Attitude Development for Sustainability with Mr. Hemanth K",
    date: "2025",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "250+ Students",
    badgeColor: "bg-[#DE3F11]/10 text-[#DE3F11] border-[#DE3F11]/20",
    logoSvg: "zap",
    photo: "/images/gallery/g10.webp",
    gallery: ["/images/gallery/g10.webp"],
    featured: false,
    description: "5th edition featuring Mr. Hemanth K on attitude development, personal sustainability, career resilience, and navigating corporate change.",
    seriesHighlights: [
      "Attitude development & growth mindset principles",
      "Personal sustainability & emotional wellbeing in corporate life",
      "Interactive Q&A session with Mr. Hemanth K"
    ],
    outcomes: ["Attitude development roadmap", "Mindset transformation tools"],
    speakers: ["Mr. Hemanth K", "LEADS Mentors"],
    editions: []
  },
  {
    id: "catalyst-6",
    placeholderId: 69,
    name: "Catalyst Insights Leadership Talk Series 6.0",
    seriesName: "Catalyst Series",
    category: "Catalyst",
    subCategory: "Catalyst Leadership Talk Series",
    tagline: "Digital Leadership & Corporate Intrapreneurship",
    date: "2025",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "240+ Participants",
    badgeColor: "bg-[#DE3F11]/10 text-[#DE3F11] border-[#DE3F11]/20",
    logoSvg: "zap",
    photo: "/images/gallery/g1.webp",
    gallery: ["/images/gallery/g1.webp"],
    featured: false,
    description: "6th edition focusing on digital leadership, intrapreneurial mindset in corporate organizations, and managing high-performance teams.",
    seriesHighlights: [
      "Intrapreneurship: Driving innovation within established firms",
      "Managing remote & hybrid high-performance teams",
      "Digital transformation leadership strategies"
    ],
    outcomes: ["Intrapreneurship project framework", "Digital leadership badge"],
    speakers: ["Corporate Innovation Directors", "LEADS Faculty"],
    editions: []
  },
  {
    id: "catalyst-7",
    placeholderId: 70,
    name: "Catalyst Insights Leadership Talk Series 7.0",
    seriesName: "Catalyst Series",
    category: "Catalyst",
    subCategory: "Catalyst Leadership Talk Series",
    tagline: "Technology Leadership & Engineering Management with IEEE",
    date: "2025",
    location: "LEADS & IEEE SB RUAS",
    attendees: "280+ IEEE Members",
    badgeColor: "bg-[#DE3F11]/10 text-[#DE3F11] border-[#DE3F11]/20",
    logoSvg: "zap",
    photo: "/images/gallery/g2.webp",
    gallery: ["/images/gallery/g2.webp"],
    featured: false,
    description: "7th edition organized in collaboration with IEEE Bangalore Section on technology management, engineering ethics, and deep-tech innovation.",
    seriesHighlights: [
      "Joint session with IEEE Bangalore Section stalwarts",
      "Engineering ethics & AI technology governance",
      "Transitioning from engineer to tech executive"
    ],
    outcomes: ["IEEE joint participation certificate", "Engineering management guide"],
    speakers: ["IEEE Bangalore Officers", "Tech Executives"],
    editions: []
  },
  {
    id: "catalyst-8",
    placeholderId: 71,
    name: "Catalyst Insights Leadership Talk Series 8.0",
    seriesName: "Catalyst Series",
    category: "Catalyst",
    subCategory: "Catalyst Leadership Talk Series",
    tagline: "Sustainable Business Models & ESG Compliance",
    date: "2025",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "260+ Delegates",
    badgeColor: "bg-[#DE3F11]/10 text-[#DE3F11] border-[#DE3F11]/20",
    logoSvg: "zap",
    photo: "/images/gallery/g3.webp",
    gallery: ["/images/gallery/g3.webp"],
    featured: false,
    description: "8th edition focusing on sustainable business models, corporate social responsibility, ESG reporting, and ethical governance for young leaders.",
    seriesHighlights: [
      "Building circular economy business models",
      "ESG reporting metrics for modern enterprises",
      "Corporate social responsibility impact cases"
    ],
    outcomes: ["ESG compliance introduction badge", "Sustainability model canvas"],
    speakers: ["Sustainability Consultants", "LEADS ESG Faculty"],
    editions: []
  },
  {
    id: "catalyst-9",
    placeholderId: 72,
    name: "Catalyst Insights Leadership Talk Series 9.0",
    seriesName: "Catalyst Series",
    category: "Catalyst",
    subCategory: "Catalyst Leadership Talk Series",
    tagline: "Startup Leadership, Venture Capital & High-Growth Strategy",
    date: "2026",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "300+ Students",
    badgeColor: "bg-[#DE3F11]/10 text-[#DE3F11] border-[#DE3F11]/20",
    logoSvg: "zap",
    photo: "/images/gallery/g4.webp",
    gallery: ["/images/gallery/g4.webp"],
    featured: false,
    description: "9th edition exploring startup leadership, pitch deck readiness, venture capital ecosystem navigation, and decision-making under uncertainty.",
    seriesHighlights: [
      "VC pitch deck creation & investor negotiation",
      "Navigating pre-seed and seed stage funding in India",
      "Founder resilience and crisis management"
    ],
    outcomes: ["Venture pitch deck template", "Angel network connection guide"],
    speakers: ["Venture Capital Investors", "LEADS Startup Mentors"],
    editions: []
  },

  // 4. Expert Talks
  {
    id: "expert-talks-python",
    placeholderId: 73,
    name: "Expert Talks on Data Science with Python",
    seriesName: "Expert Talks",
    category: "Expert Talk",
    subCategory: "Expert Talks",
    tagline: "Data-Driven Insights, Python Analytics & ML Workflows",
    date: "2025",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "180+ Data Science Scholars",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-200",
    logoSvg: "file-text",
    photo: "/images/gallery/g5.webp",
    gallery: ["/images/gallery/g5.webp"],
    featured: false,
    description: "Technical masterclass on data science applications, Python data manipulation libraries, predictive analytics, and data-driven corporate strategy.",
    seriesHighlights: [
      "Hands-on Python analytics for business decision making",
      "Machine learning model evaluation in enterprise settings",
      "Data visualization & statistical storytelling"
    ],
    outcomes: ["Python data science code repository", "Analytics masterclass certificate"],
    speakers: ["Lead Data Scientists", "RUAS Analytics Faculty"],
    editions: []
  },

  // 5. Fireside Talks
  {
    id: "fireside-talks-change-makers",
    placeholderId: 74,
    name: "Fireside Talks: Global to Local Change Makers",
    seriesName: "Fireside Talks",
    category: "Fireside Talk",
    subCategory: "Fireside Talks",
    tagline: "Interactive Dialogue with International & Grassroots Leaders",
    date: "2025",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "200+ Student Founders",
    badgeColor: "bg-orange-100 text-orange-900 border-orange-200",
    logoSvg: "users",
    photo: "/images/gallery/g6.webp",
    gallery: ["/images/gallery/g6.webp"],
    featured: false,
    description: "Dynamic interactive dialogue series connecting international changemakers with local youth leaders, discussing social impact, startup journeys, and community transformation.",
    seriesHighlights: [
      "Unfiltered fireside Q&A with international founders",
      "Lessons in scaling grassroots social enterprises",
      "Cross-cultural mentorship for student leaders"
    ],
    outcomes: ["Global changemaker network access", "Social impact project canvas"],
    speakers: ["International Changemakers", "Social Enterprise Founders"],
    editions: []
  },

  // 6. Boardroom Battles
  {
    id: "pragati-boardroom-battles",
    placeholderId: 75,
    name: "Pragati Boardroom Battles",
    seriesName: "Boardroom Battles",
    category: "Boardroom Battle",
    subCategory: "Boardroom Battles",
    tagline: "Executive Crisis Management & Boardroom Strategy Simulation",
    date: "2025",
    location: "RUAS Campus",
    attendees: "120+ Student Strategists",
    badgeColor: "bg-rose-100 text-rose-900 border-rose-200",
    logoSvg: "award",
    photo: "/images/gallery/g7.webp",
    gallery: ["/images/gallery/g7.webp"],
    featured: false,
    description: "High-stakes crisis management competition simulating executive boardroom decisions, shareholder conflict resolution, and strategic risk management.",
    seriesHighlights: [
      "Real-time corporate crisis case simulations",
      "Shareholder negotiation & board voting exercises",
      "Evaluation by senior corporate directors"
    ],
    outcomes: ["Boardroom crisis simulation awards", "Executive strategy portfolio"],
    speakers: ["Corporate Board Directors", "LEADS Competition Jury"],
    editions: []
  },

  // 7. Sustainability
  {
    id: "green-leaders-circle",
    placeholderId: 76,
    name: "Green Leaders Circle - NGO Visit",
    seriesName: "Sustainability Events",
    category: "Sustainability",
    subCategory: "Sustainability",
    tagline: "Community Impact, Social Welfare & Environmental Outreach",
    date: "2025",
    location: "Janani Sevashrama, Bengaluru",
    attendees: "50 Student Volunteers",
    badgeColor: "bg-teal-100 text-teal-900 border-teal-200",
    logoSvg: "users",
    photo: "/images/gallery/g8.webp",
    gallery: ["/images/gallery/g8.webp"],
    featured: false,
    description: "Community outreach initiative by the LEADS Student Council engaging in social welfare, environmental cleanup, and community care at Janani Sevashrama.",
    seriesHighlights: [
      "On-site community service at Janani Sevashrama",
      "Environmental awareness & waste segregation drive",
      "Direct social impact by student volunteers"
    ],
    outcomes: ["Community impact audit report", "Green Leader service badge"],
    speakers: ["Janani Sevashrama Directors", "LEADS Sustainability Leads"],
    editions: []
  }
];
