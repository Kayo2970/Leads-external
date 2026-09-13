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
  subCategory: "Institutional Ceremonies" | "Outreach" | "Catalyst Leadership Talk Series" | "Expert Talks" | "Fireside Talks" | "Boardroom Battles" | "Sustainability";
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
  // 1. Institutional Ceremonies
  {
    id: "leads-inaugural-function",
    placeholderId: 58,
    name: "LEADS Next Gen Centre – Inauguration (Official Launch & Plenary Sessions)",
    seriesName: "Official Launch & Plenary Sessions",
    category: "Conclave",
    subCategory: "Institutional Ceremonies",
    tagline: "Formally opened by Dr. C. N. Manjunath & Mr. Ramanan Ramanathan under theme Sankalp Se Siddhi",
    date: "31 Jul 2025",
    location: "Ramaiah University Campus, Bengaluru",
    attendees: "100 Students • 12 Faculty Benefited",
    badgeColor: "bg-purple-100 text-[#9C1256] border-purple-200",
    logoSvg: "graduation-cap",
    photo: "/images/gallery/g11.webp",
    gallery: ["/images/gallery/g11.webp", "/images/gallery/g1.webp", "/images/gallery/g2.webp"],
    featured: true,
    description:
      "Formally opened by Dr. C. N. Manjunath and Mr. Ramanan Ramanathan under the theme Sankalp Se Siddhi, the Bharat Lead Summit 2026 kicked off with a dedicated badging ceremony that officially inducted the core student committee and established its functional roadmap. The event featured strategic addresses from Prof. Dr. K. M. Sharath Kumar and Dr. Subhadeep Mukherjee, setting the stage for four comprehensive plenary sessions centered on deep-tech revolutions, sustainable innovation, and leadership paradigms for Viksit Bharat 2047. Throughout these sessions, students interacted directly with prominent industry leaders: Dr. Kishore Rao (CEO, Aequs INFRA SEZ) discussed individual goal-setting in business ecosystems; Mr. Shaju Mangalam (Head & Director, FICCI Karnataka) explored structured thinking and policy impacts; Mr. Balvir Talwar (Former ED, BHEL) highlighted financial literacy and corporate sustainability; and Dr. Charles Chow (Managing Director, East-West Group, Singapore) examined global leadership trends and cross-cultural competencies. By anchoring discussions in AI governance and capability-based evaluations, the summit bridged academia and industry, empowering future-ready professionals with real-world readiness, a growth mindset, and a strong commitment to purposeful, ethical leadership.",
    seriesHighlights: [
      "Keynote addresses by Dr. C. N. Manjunath (Padma Shri) & Mr. Ramanan Ramanathan (Former Mission Director, AIM)",
      "Official badging ceremony inducting the student leadership core committee and establishing its functional roadmap",
      "Strategic addresses by Prof. Dr. K. M. Sharath Kumar and Dr. Subhadeep Mukherjee",
      "Four plenary sessions on deep-tech revolutions, sustainable innovation, and leadership paradigms for Viksit Bharat 2047",
      "Industry interactions with Dr. Kishore Rao (Aequs INFRA), Mr. Shaju Mangalam (FICCI Karnataka), Mr. Balvir Talwar (BHEL), and Dr. Charles Chow (East-West Group, Singapore)"
    ],
    outcomes: [
      "Hands-On Leadership: The badging ceremony empowered the student committee with real-world experience managing an operational roadmap, teamwork, and crisis problem-solving.",
      "Executive Mentorship & Skills: Direct interaction with global leaders bridged academic theory with corporate reality, building crucial skills in structured thinking, financial literacy, and cross-cultural competence.",
      "Official launch and operational charter establishment for LEADS Next Gen Centre"
    ],
    speakers: [
      "Dr. C. N. Manjunath (Padma Shri & Renowned Healthcare Stalwart)",
      "Mr. Ramanan Ramanathan (Former Mission Director, AIM & Chairperson, DST GoI)",
      "Prof. Dr. K. M. Sharath Kumar (Dean, FMC, RUAS & Chief Advisor, LEADS)",
      "Dr. Subhadeep Mukherjee (Centre Head, LEADS)",
      "Dr. Kishore Rao (CEO, Aequs INFRA SEZ)",
      "Mr. Shaju Mangalam (Head & Director, FICCI Karnataka)",
      "Mr. Balvir Talwar (Former ED, BHEL)",
      "Dr. Charles Chow (Managing Director, East-West Group, Singapore)"
    ],
    editions: []
  },
  {
    id: "vanguard-leadership-retreat",
    placeholderId: 59,
    name: "Vanguard Leadership Retreat 2026",
    seriesName: "Executive Retreat Series",
    category: "Conclave",
    subCategory: "Institutional Ceremonies",
    tagline: "Elite Experiential Governance, Off-Campus Team Dynamics & Leadership Initiative",
    date: "1 Mar 2026",
    location: "Off-Campus Executive Retreat Venue, Karnataka",
    attendees: "25 Students • 5 Faculty Benefited",
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
      "Prof. (Dr.) K. M. Sharath Kumar (Dean, FMC, RUAS & Chief Advisor, LEADS)",
      "Dr. Subhadeep Mukherjee (Centre Head, LEADS)",
      "Senior Corporate Advisory Board Members"
    ],
    editions: []
  },
  {
    id: "national-leadership-day-badging",
    placeholderId: 59,
    name: "National Leadership Day – Badging Ceremony",
    seriesName: "Induction & Badging Ceremony",
    category: "Conclave",
    subCategory: "Institutional Ceremonies",
    tagline: "Official Induction of LEADS Student Council & Pinned Badging by National Stalwarts",
    date: "20 Feb 2026",
    location: "Ramaiah University Campus, Bengaluru",
    attendees: "200 Students • 10 Faculty Benefited",
    badgeColor: "bg-purple-100 text-[#9C1256] border-purple-200",
    logoSvg: "award",
    photo: "/images/gallery/g3.webp",
    gallery: ["/images/gallery/g3.webp", "/images/gallery/g4.webp"],
    featured: true,
    description: "Prestigious celebratory event marking National Leadership Day, highlighted by a formal Badging Ceremony that officially inducted the LEADS Student Council and core committee members. Graced by Chief Guest Padmashree Dr. Vijayalakshmi Deshmane, Mr. Kumar Ravi (Senior VP, BCIC), and Dr. Naganagouda S J (Honorary Secretary, NHRD Bengaluru) who personally pinned badges on student leaders.",
    seriesHighlights: [
      "Formal pinned Badging Ceremony for student council leaders",
      "Keynote by Padmashree Dr. Vijayalakshmi Deshmane on values-based, compassionate leadership",
      "Industry leadership insights by Mr. Kumar Ravi (BCIC) & Dr. Naganagouda S J (NHRD)",
      "Bridging corporate expectations with youth leadership ethics"
    ],
    outcomes: [
      "Formal induction of LEADS Student Council and operational charter",
      "Direct mentorship channels with BCIC and NHRD executive boards"
    ],
    speakers: [
      "Padmashree Dr. Vijayalakshmi Deshmane (Former Director, Kidwai Memorial)",
      "Mr. Kumar Ravi (Senior Vice President, BCIC Karnataka)",
      "Dr. Naganagouda S J (Honorary Secretary, NHRD Bengaluru)"
    ],
    editions: []
  },

  // 2. Outreach Events
  {
    id: "aims-south-region-conference-2025",
    placeholderId: 64,
    name: "AIMS South Zone Regional Conference 2025",
    seriesName: "Emerging Trends in AI & Sustainability",
    category: "Outreach",
    subCategory: "Outreach",
    tagline: "Industry-Academia Perspectives on AI, Sustainability & Global Capability Centres",
    date: "12 Sep 2025",
    location: "St. Joseph college , Banglore",
    attendees: "7 Students • 1 Faculty Benefited",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    logoSvg: "users",
    photo: "/images/gallery/g5.webp",
    gallery: ["/images/gallery/g5.webp", "/images/gallery/g6.webp"],
    featured: true,
    description:
      "A student delegation successfully represented their institution at the 'Emerging Trends in AI & Sustainability' regional conference, actively seeking out best practices to integrate disruptive technologies and sustainable corporate frameworks into their professional development. By actively participating in core panel discussions centered on industry-academia collaborations, the students gained direct, high-level perspectives from prominent keynote experts representing NASSCOM and IBM India. These industry leaders provided the delegation with critical, real-world insights regarding AI's current market impact, the expanding strategic role of Global Capability Centres (GCCs), and the essential 21st-century skill sets expected of modern management graduates entering a tech-driven workforce. Ultimately, this immersive participation served a dual purpose: it facilitated deep student knowledge acquisition regarding the rapid, cutting-edge developments in artificial intelligence and corporate sustainability, while simultaneously providing the delegation with invaluable, strategic networking opportunities to connect directly with regional academics, policy influencers, and top-tier industry executives.",
    seriesHighlights: [
      "Keynote perspectives from prominent industry leaders representing NASSCOM and IBM India",
      "Analysis of AI's current market impact and expanding role of Global Capability Centres (GCCs)",
      "Exploration of sustainable corporate frameworks and 21st-century workforce expectations",
      "Direct strategic networking with regional academics, policy influencers, and executive directors"
    ],
    outcomes: [
      "Cutting-Edge Technological Exposure: Experts from NASSCOM and IBM India provided practical insights into AI governance, sustainability, and Global Capability Centres (GCCs), connecting classroom learning with evolving corporate strategies.",
      "Strategic Professional Networking: Panel discussions enabled students to connect with industry leaders and academics while gaining clarity on the key 21st-century skills needed for successful management careers."
    ],
    speakers: [
      "Keynote Experts (NASSCOM)",
      "Industry Leaders (IBM India)",
      "AIMS Regional Leadership Board",
      "Senior Faculty, St. Joseph's College"
    ],
    editions: []
  },
  {
    id: "9th-state-level-seminar",
    placeholderId: 60,
    name: "9th State Level Seminar – Transformation for the Nation",
    seriesName: "Outreach Programmes",
    category: "Outreach",
    subCategory: "Outreach",
    tagline: "State-Wide Administrative Transformation & Youth Leadership Forum",
    date: "14 Aug 2025",
    location: "Convention Hall, Bengaluru",
    attendees: "40 Students • 5 Faculty Benefited",
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
    name: "Educational & Cultural Visit to New Delhi",
    seriesName: "Outreach Programmes",
    category: "Outreach",
    subCategory: "Outreach",
    tagline: "Experiential Learning Delegation to Rashtrapati Bhavan & Bharat Mandapam",
    date: "3–6 Sep 2025",
    location: "Rashtrapati Bhavan, IITF & Bharat Mandapam, New Delhi",
    attendees: "6 Students • 1 Faculty Benefited",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    logoSvg: "users",
    photo: "/images/gallery/g3.webp",
    gallery: ["/images/gallery/g3.webp", "/images/gallery/g4.webp"],
    featured: false,
    description: "Experiential delegation visit to New Delhi, providing student delegates with direct exposure to national governance at Rashtrapati Bhavan, international trade at IITF, and industrial technology at MachTech Expo in Bharat Mandapam.",
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
    name: "NHRD Bangalore Chapter – Thought Leadership Meet",
    seriesName: "Outreach Programmes",
    category: "Outreach",
    subCategory: "Outreach",
    tagline: "Future-Ready Talent Management & Organisational Culture",
    date: "30 Apr 2026",
    location: "Bengaluru",
    attendees: "2 Students • 1 Faculty Benefited",
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
    name: "BMA Roundtable – Generative Economy \"Ushering the AI-Driven Industrial Era\"",
    seriesName: "Outreach Programmes",
    category: "Outreach",
    subCategory: "Outreach",
    tagline: "Ushering the AI-Driven Industrial Era with Dassault Systèmes & BMA",
    date: "10 May 2026",
    location: "Dassault Systèmes / BMA, Bengaluru",
    attendees: "10 Students • 4 Faculty Benefited",
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
    name: "FKCCI Global MSME Conclave 2026",
    seriesName: "Outreach Programmes",
    category: "Outreach",
    subCategory: "Outreach",
    tagline: "Scaling MSME Competitiveness, Export Policy & Financial Infrastructure",
    date: "29–31 May 2026",
    location: "FKCCI Convention Center, Bengaluru",
    attendees: "8 Students • 2 Faculty Benefited",
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
    id: "anvaya-innovation-summit-2026",
    placeholderId: 65,
    name: "Anvaya Innovation Summit 2026",
    seriesName: "Outreach Programmes",
    category: "Outreach",
    subCategory: "Outreach",
    tagline: "Innovation for Impact - From Vision to Action",
    date: "22 Jan 2026",
    location: "NIMHANS Convention Centre, Bengaluru",
    attendees: "25 Students • 5 Faculty Benefited",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    logoSvg: "users",
    photo: "/images/gallery/g6.webp",
    gallery: ["/images/gallery/g6.webp", "/images/gallery/g7.webp"],
    featured: true,
    description: "LEADS Next Gen Centre attended the Anvaya Innovation Summit 2026 at NIMHANS Convention Centre on 22nd January 2026, structured across four tracks examining how innovation ecosystems transform through the convergence of policy, corporate engagement, and academic leadership. Included the witnessing of an MOA signing between Vision Karnataka Foundation and Kishkinda University.",
    seriesHighlights: [
      "Inaugural plenary framing innovation-led governance for societal outcomes",
      "Policy track reframing regulation as a platform for growth",
      "Corporate Panel on AI-driven business rebirth & ethical progress",
      "Academic Panel with RUAS Vice Chancellor Prof. K. K. Raina on university innovation ecosystems",
      "MOA signing ceremony witnessed by 25-student LEADS delegation"
    ],
    outcomes: [
      "Direct visibility into institutional partnership-building and MOA signing",
      "Insights into AI-driven business transformation and ethical leadership"
    ],
    speakers: ["Prof. K. K. Raina (Vice Chancellor, RUAS)", "Vision Karnataka Foundation Stalwarts"],
    editions: []
  },
  {
    id: "bcic-esg-awards",
    placeholderId: 65,
    name: "BCIC EHS & Sustainability Awards, 3rd Edition",
    seriesName: "Outreach Programmes",
    category: "Outreach",
    subCategory: "Outreach",
    tagline: "Recognizing Excellence in Corporate Climate Action & Social Responsibility",
    date: "14 May 2026",
    location: "BCIC Auditorium, Bengaluru",
    attendees: "8 Students • 1 Faculty Benefited",
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
    name: "Catalyst Insight: Leadership Talk Series 3.0",
    seriesName: "Catalyst Series",
    category: "Catalyst",
    subCategory: "Catalyst Leadership Talk Series",
    tagline: "Executive Capability, Ethics & Structured Business Thinking",
    date: "29 Aug 2025",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "90 Students • 5 Faculty Benefited",
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
    name: "Catalyst Insight: Leadership Talk Series 4.0",
    seriesName: "Catalyst Series",
    category: "Catalyst",
    subCategory: "Catalyst Leadership Talk Series",
    tagline: "Strategic Agility, Personal Branding & Corporate Adaptability",
    date: "18 Nov 2025",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "98 Students • 5 Faculty Benefited",
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
    name: "Catalyst Insight: Leadership Talk Series 5.0",
    seriesName: "Catalyst Series",
    category: "Catalyst",
    subCategory: "Catalyst Leadership Talk Series",
    tagline: "Attitude Development for Sustainability with Mr. Hemanth K",
    date: "23 Jan 2026",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "92 Students • 8 Faculty Benefited",
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
    name: "Catalyst Insight: Leadership Talk Series 6.0",
    seriesName: "Catalyst Series",
    category: "Catalyst",
    subCategory: "Catalyst Leadership Talk Series",
    tagline: "Digital Leadership & Corporate Intrapreneurship",
    date: "30 Jan 2026",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "89 Students • 7 Faculty Benefited",
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
    name: "Catalyst Insight: Leadership Talk Series 7.0",
    seriesName: "Catalyst Series",
    category: "Catalyst",
    subCategory: "Catalyst Leadership Talk Series",
    tagline: "Technology Leadership & Engineering Management with IEEE",
    date: "9 May 2026",
    location: "LEADS & IEEE SB RUAS",
    attendees: "250 Students • 16 Faculty Benefited",
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
    name: "Catalyst Insight: Leadership Talk Series 8.0",
    seriesName: "Catalyst Series",
    category: "Catalyst",
    subCategory: "Catalyst Leadership Talk Series",
    tagline: "Sustainable Business Models & ESG Compliance",
    date: "25 June 2026",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "50 Students • 6 Faculty Benefited",
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

  // 4. Expert Talks & Case Cracker
  {
    id: "case-cracker-nmc",
    placeholderId: 72,
    name: "Case Cracker – NMC Healthcare Case Study",
    seriesName: "Expert Talks",
    category: "Expert Talk",
    subCategory: "Expert Talks",
    tagline: "Clinical Governance, Hospital Administration & Healthcare Case Analysis",
    date: "03 Sep 2025",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "67 Students • 5 Faculty Benefited",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-200",
    logoSvg: "file-text",
    photo: "/images/gallery/g4.webp",
    gallery: ["/images/gallery/g4.webp"],
    featured: false,
    description: "Analytical case-cracking workshop focusing on NMC Healthcare, clinical enterprise turnaround strategies, healthcare operations, and financial auditing.",
    seriesHighlights: [
      "Empirical case dissection of NMC Healthcare operational model",
      "Hospital administration & financial restructuring insights",
      "Interactive group case presentation and juror review"
    ],
    outcomes: ["Healthcare case analysis certification", "Analytical thinking toolkit"],
    speakers: ["Healthcare Management Experts", "LEADS Case Faculty"],
    editions: []
  },
  {
    id: "expert-talks-python",
    placeholderId: 73,
    name: "Expert Talk – Data Science with Python",
    seriesName: "Expert Talks",
    category: "Expert Talk",
    subCategory: "Expert Talks",
    tagline: "Data-Driven Insights, Python Analytics & ML Workflows",
    date: "04 Sep 2025",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "80 Students • 4 Faculty Benefited",
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
    name: "Fireside Talks – Global to Local Changemakers",
    seriesName: "Fireside Talks",
    category: "Fireside Talk",
    subCategory: "Fireside Talks",
    tagline: "Interactive Dialogue with International & Grassroots Leaders",
    date: "10 Oct 2025",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "96 Students • 8 Faculty Benefited",
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
    name: "Pravrutti – Boardroom Battles",
    seriesName: "Boardroom Battles",
    category: "Boardroom Battle",
    subCategory: "Boardroom Battles",
    tagline: "Executive Crisis Management & Boardroom Strategy Simulation",
    date: "16 Oct 2025",
    location: "RUAS Campus",
    attendees: "10 Students • 1 Faculty Benefited",
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
    name: "Green Leader's Circle – NGO Visit (Janani Sevashrama)",
    seriesName: "Sustainability Events",
    category: "Sustainability",
    subCategory: "Sustainability",
    tagline: "Community Impact, Social Welfare & Environmental Outreach",
    date: "22 Nov 2025",
    location: "Janani Sevashrama, Bengaluru",
    attendees: "20 Students • 3 Faculty Benefited",
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
