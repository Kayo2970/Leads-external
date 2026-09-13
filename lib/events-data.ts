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
    tagline: "Experiential Governance, Team Dynamics & Adventure-Based Leadership Development",
    date: "1 Mar 2026",
    location: "RR Retreat, Bengaluru",
    attendees: "25 Students • 5 Faculty Benefited",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
    logoSvg: "award",
    photo: "/images/gallery/g1.webp",
    gallery: ["/images/gallery/g1.webp", "/images/gallery/g2.webp"],
    featured: true,
    description: "The Vanguard Leadership Retreat 2026 at RR Retreat, Bengaluru brought together student leaders for a day designed to develop a strong leadership mindset, encourage teamwork through collaboration and communication, and promote self-discovery around individual strengths and values. Team-building exercises and group discussions built cooperation and conflict-resolution skills in applied settings, while guided reflective sessions pushed students to articulate clear personal goals, ethics, and a sense of purpose. Adventure activities — including swimming and a series of fun games reduced stress while deepening trust and bonding between council members in an informal setting that complemented the day's more structured leadership work, deliberately designed to push students out of their comfort zones and prepare them for genuinely impactful, responsible leadership roles.",
    seriesHighlights: [
      "Team-building exercises and group discussions building applied cooperation and conflict-resolution skills",
      "Guided reflective sessions empowering student leaders to articulate personal goals, ethics, and core purpose",
      "Adventure activities and fun games including swimming to reduce stress and deepen council trust",
      "Experiential leadership design pushing students out of comfort zones for responsible executive readiness"
    ],
    outcomes: [
      "Personal Vision & Core Values: Students gained clarity on their personal vision, goals, and core values through guided reflective sessions distinct from the day's recreational activities.",
      "Interpersonal Trust & Coordination: Participants strengthened trust and interpersonal bonds through adventure-based team activities, directly supporting future coordination on LEADS-led initiatives."
    ],
    speakers: [
      "Prof. (Dr.) K. M. Sharath Kumar (Dean, FMC, RUAS & Chief Advisor, LEADS)",
      "Dr. Subhadeep Mukherjee (Centre Head, LEADS)",
      "LEADS Executive Student Council Mentors"
    ],
    editions: []
  },
  {
    id: "national-leadership-day-badging",
    placeholderId: 59,
    name: "National Leadership Day – Badging Ceremony & Distinguished Guest Talks",
    seriesName: "Induction & Badging Ceremony",
    category: "Conclave",
    subCategory: "Institutional Ceremonies",
    tagline: "Official Induction of LEADS Advisory & Core Council by Padmashree Awardee Dr. Vijayalakshmi Deshmane",
    date: "20 Feb 2026",
    location: "Ramaiah University Campus, Bengaluru",
    attendees: "200 Students • 10 Faculty Benefited",
    badgeColor: "bg-purple-100 text-[#9C1256] border-purple-200",
    logoSvg: "award",
    photo: "/images/gallery/g3.webp",
    gallery: ["/images/gallery/g3.webp", "/images/gallery/g4.webp"],
    featured: true,
    description: "The LEADS Next Gen Centre at Ramaiah University of Applied Sciences successfully hosted a highly prestigious celebratory event to mark National Leadership Day, highlighted by a formal Badging Ceremony that officially recognized the leadership potential of the Centre's advisory and core student committee members. Formally inducting these emerging student leaders into their vital roles, the milestone event was graced by an elite panel of industry and medical stalwarts who personally pinned the badges on the student leaders, establishing a powerful baseline of accountability and service-oriented dedication. The ceremony was led by Chief Guest and 2025 Padmashree Awardee Dr. Vijayalakshmi Deshmane, the former Director of the Kidwai Memorial Institute of Oncology, who delivered a profound keynote addressing the absolute necessity of values-based, compassionate leadership in high-stakes environments. She was joined by Mr. Kumar Ravi, Senior Vice President of BCIC Karnataka, and Dr. Naganagouda S J, Honorary Secretary of NHRD Bengaluru, both of whom offered deep, strategic inspiration regarding contemporary corporate demands and relationship-centered leadership frameworks. By bridging theoretical leadership concepts with practical, real-world business ethics, this landmark celebration instilled a profound sense of responsibility and strategic foresight within the student leadership core.",
    seriesHighlights: [
      "Formal pinned Badging Ceremony inducting LEADS Student Council and Core Committee members",
      "Keynote address by 2025 Padmashree Awardee Dr. Vijayalakshmi Deshmane on values-based, compassionate leadership",
      "Strategic corporate insights by Mr. Kumar Ravi (Senior VP, BCIC) & Dr. Naganagouda S J (Honorary Secretary, NHRD)",
      "Direct reflective interactions establishing elite long-term mentorship and sustained professional networking",
      "Commitment to value-driven initiatives elevating peer collaboration and ethical nation-building"
    ],
    outcomes: [
      "Successfully inducted and badged all advisory and core members by Chief Guest Dr. Vijayalakshmi Deshmane, increasing overall accountability.",
      "Enhanced student motivation and established strong professional networks by facilitating direct interaction with high-profile corporate and medical leaders."
    ],
    speakers: [
      "Dr. Vijayalakshmi Deshmane (2025 Padmashree Awardee & Former Director, Kidwai Memorial Institute of Oncology)",
      "Mr. Kumar Ravi (Senior Vice President, BCIC Karnataka)",
      "Dr. Naganagouda S J (Honorary Secretary, NHRD Bengaluru)",
      "Prof. (Dr.) K. M. Sharath Kumar (Dean, FMC, RUAS & Chief Advisor, LEADS)",
      "Dr. Subhadeep Mukherjee (Centre Head, LEADS)"
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
    name: "9th State Level Seminar – \"Transformation for the Nation\"",
    seriesName: "Outreach Programmes",
    category: "Outreach",
    subCategory: "Outreach",
    tagline: "Youth Leadership, Personal Transformation & Civic Responsibility for National Progress",
    date: "14 Aug 2025",
    location: "Convention Hall, Bengaluru",
    attendees: "40 Students • 5 Faculty Benefited",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    logoSvg: "users",
    photo: "/images/gallery/g2.webp",
    gallery: ["/images/gallery/g2.webp", "/images/gallery/g3.webp"],
    featured: false,
    description: "The 9th State-Level Seminar on 'Transformation for the Nation', held on 14th August 2025 and co-organised by Vishwamanava Yuva Vedike and Queen's Global Management Solutions, was moderated by Dr. Madhurani Gowda across five sessions focused on personal transformation as the foundation of national progress. Sri Ullas Kamath highlighted higher education's role in fostering critical thinking and entrepreneurship, Dr. C. Somasekhara, IAS emphasized continuous self-reinvention and societal contribution, and Sri Mahesh Masal explored citizen responsibility through the 'I' factor. A cultural segment celebrating resilience and patriotism preceded the closing panel featuring ACP Dr. Priyadarshini Sanikopp, Dr. Varunmurthy (Rebuild India Foundation), Ms. Gangavva Neelappa Harijana, and Dr. Manjunath (Baby Science), who reinforced the importance of civic responsibility, resilience, innovation, and grassroots development in shaping India's transformation.",
    seriesHighlights: [
      "Five focused seminar sessions on personal transformation as the core engine of national progress",
      "Keynote by Sri Ullas Kamath on higher education fostering critical thinking and entrepreneurship",
      "Administrative leadership address by Dr. C. Somasekhara, IAS on continuous self-reinvention and societal contribution",
      "Citizen responsibility masterclass by Sri Mahesh Masal on the personal 'I' factor in civic duty",
      "Closing panel with ACP Dr. Priyadarshini Sanikopp, Dr. Varunmurthy, Ms. Gangavva Neelappa Harijana, and Dr. Manjunath"
    ],
    outcomes: [
      "National Thought Leadership Exposure: Students gained direct exposure to national thought leaders, strengthening their understanding of self-leadership and national development.",
      "Social Responsibility and Civic Action: Participants were inspired to apply transformation principles toward social responsibility, grassroots innovation, and nation-building."
    ],
    speakers: [
      "Sri Ullas Kamath (Corporate Leader & Entrepreneurship Advocate)",
      "Dr. C. Somasekhara, IAS (Distinguished Administrator)",
      "Sri Mahesh Masal (Civic Thought Leader)",
      "ACP Dr. Priyadarshini Sanikopp (Assistant Commissioner of Police)",
      "Dr. Varunmurthy (Rebuild India Foundation)",
      "Ms. Gangavva Neelappa Harijana (Grassroots Leader)",
      "Dr. Manjunath (Baby Science)",
      "Dr. Madhurani Gowda (Seminar Moderator)"
    ],
    editions: []
  },
  {
    id: "new-delhi-visit",
    placeholderId: 61,
    name: "Educational & Cultural Visit to New Delhi",
    seriesName: "Outreach Programmes",
    category: "Outreach",
    subCategory: "Outreach",
    tagline: "Experiential Learning Delegation to Rashtrapati Bhavan, iPHEX 2025 & Bharat Mandapam",
    date: "3–6 Sep 2025",
    location: "Rashtrapati Bhavan, IITF & Key Landmarks, New Delhi",
    attendees: "6 Students • 1 Faculty Benefited",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    logoSvg: "users",
    photo: "/images/gallery/g3.webp",
    gallery: ["/images/gallery/g3.webp", "/images/gallery/g4.webp"],
    featured: false,
    description: "Six students from the Faculty of Management & Commerce, MSRUAS, undertook a three-day educational and cultural visit to New Delhi from 3rd to 6th September 2025, designed to deliver experiential learning, global industry exposure, and cultural enrichment together. The journey opened with a guided tour of Rashtrapati Bhavan, taking in Durbar Hall where national honours such as the Padma Bhushan and Bharat Ratna are conferred, the Presidential diplomatic rooms, the State Banquet Hall, and a ground-floor tribal heritage exhibition, before moving to Akshardham Temple for reflection. Day two combined the Pharma Med 2025 Expo with visits to the Lotus Temple, the Supreme Court, and ministerial residences across the capital. The final day brought the group to the 11th edition of iPHEX 2025 at Bharat Mandapam, where students engaged directly with international healthcare delegates, before visiting the Pradhan Mantri Sangrahalaya where they experienced an AI-generated photograph with the Hon'ble Prime Minister and closing at India Gate with the tiranga light show, a tribute to India's soldiers that brought the trip's blend of professional exposure and national pride full circle.",
    seriesHighlights: [
      "Guided tour of Rashtrapati Bhavan including Durbar Hall, Presidential diplomatic rooms, and tribal heritage gallery",
      "Supreme Court of India and ministerial residence educational visit",
      "Industry networking at Pharma Med 2025 Expo and 11th edition of iPHEX 2025 at Bharat Mandapam",
      "Interactive digital visit to Pradhan Mantri Sangrahalaya and India Gate tiranga light tribute"
    ],
    outcomes: [
      "Global Industry Exposure: Students gained global industry exposure across two major expos (Pharma Med and iPHEX 2025), building direct professional connections with international healthcare delegates.",
      "National Heritage & Governance Insight: Participants developed a sharper sense of India's governance and heritage through first-hand access to Rashtrapati Bhavan, the Supreme Court, and the Prime Ministers' Museum."
    ],
    speakers: [
      "Rashtrapati Bhavan Protocol Officers",
      "iPHEX 2025 International Healthcare Delegates",
      "Pharma Med 2025 Industrial Leads",
      "FMC RUAS Faculty Escort"
    ],
    editions: []
  },
  {
    id: "nhrd-bangalore-chapter",
    placeholderId: 62,
    name: "NHRD Bangalore Chapter – Thought Leadership Meet",
    seriesName: "Outreach Programmes",
    category: "Outreach",
    subCategory: "Outreach",
    tagline: "\"Getting Market Benchmarking Right: What Works, What Fails, What Matters\" with Mercer India",
    date: "30 Apr 2026",
    location: "SJIM's Loyola Auditorium, Bangalore",
    attendees: "2 Students • 1 Faculty Benefited",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    logoSvg: "users",
    photo: "/images/gallery/g4.webp",
    gallery: ["/images/gallery/g4.webp"],
    featured: false,
    description: "LEADS Next Gen Centre attended the NHRD Bangalore Chapter's Thought Leadership Meet on 30th April 2026 at SJIM's Loyola Auditorium, where a pre-session networking hour gave students direct access to HR practitioners before the keynote by Ms. Malathi KS, Director of Rewards Consulting at Mercer India and a career practitioner across Bosch, Nestlé, Volvo, Infosys, HCL, and Xerox. Her central argument distinguished 'confidence without clarity' from genuine strategic insight, illustrated through four anonymised client cases: a Pune manufacturing firm losing engineers to a nearby IT park paying 35–40% more, costing roughly ₹8 crore over two years against an unquestioned peer group; and a bank that invested ₹22 crore moving roles to the 75th percentile only to see attrition unchanged. The session introduced a three-dimension skill-based pay model: availability, criticality, and replaceability alongside the new Labour Code's 50% basic-wage requirement, closing with a ten-question checklist for evaluating any compensation survey and the framing of benchmarking as 'a compass, not a crutch.'",
    seriesHighlights: [
      "Keynote address by Ms. Malathi KS (Director of Rewards Consulting, Mercer India) on market benchmarking",
      "Real-world forensic analysis of ₹8 crore and ₹22 crore compensation misallocation case studies",
      "Introduction of three-dimension skill-based pay model: availability, criticality, and replaceability",
      "Navigating the new Labour Code's 50% basic-wage requirement and ten-question survey evaluation checklist",
      "Pre-session executive networking hour giving direct access to senior HR practitioners"
    ],
    outcomes: [
      "Compensation & Attrition Dynamics: Students gained practical insights into how compensation decisions influence attrition and business outcomes.",
      "Skill-Based Pay Framework: Participants gained a practical evaluation checklist and a skill-based pay framework applicable beyond the classroom."
    ],
    speakers: [
      "Ms. Malathi KS (Director of Rewards Consulting, Mercer India)",
      "NHRD Bangalore Chapter Executive Committee",
      "Senior HR Leaders across Bosch, Volvo, and Infosys"
    ],
    editions: []
  },
  {
    id: "bma-generative-economies",
    placeholderId: 63,
    name: "BCIC Roundtable Discussion on Generative Economy",
    seriesName: "Outreach Programmes",
    category: "Roundtable",
    subCategory: "Outreach",
    tagline: "\"Ushering the AI-Driven Industrial Era\" Hosted by Dassault Systèmes",
    date: "10 May 2026",
    location: "Dassault Systèmes, Bengaluru",
    attendees: "10 Students • 4 Faculty Benefited",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    logoSvg: "users",
    photo: "/images/gallery/g5.webp",
    gallery: ["/images/gallery/g5.webp"],
    featured: false,
    description: "The Bangalore Chamber of Industry and Commerce (BCIC) organized an exclusive Expert Committee roundtable titled 'Generative Economy – Ushering the AI-Driven Industrial Era'. Hosted by Dassault Systèmes, the session brought together 35 manufacturing, aerospace, and robotics delegates to analyze digital twins and smart value chains. Following a keynote delivered via an AI voice interface by Chairman G. Prakash, tech leaders from Rolls Royce (IAMPL), Bosch, and ANSCER Robotics addressed rising cost pressures and compressed timelines. The forum successfully enhanced Industry 4.0 readiness among local MSMEs, establishing intelligent, data-driven automation as a core benchmark for sustainable growth and industrial innovation across the regional manufacturing ecosystem.",
    seriesHighlights: [
      "Exclusive BCIC Expert Committee roundtable hosted at Dassault Systèmes with 35 industry delegates",
      "Keynote delivered via an innovative AI voice interface by Chairman G. Prakash",
      "High-level panel featuring tech leaders from Rolls Royce (IAMPL), Bosch, and ANSCER Robotics",
      "Strategies for digital twins, smart value chains, rising cost pressures, and compressed delivery cycles",
      "Enhancing Industry 4.0 readiness and intelligent automation among regional MSMEs"
    ],
    outcomes: [
      "Digital Twin Strategy: Delegates and students mapped actionable approaches to manage product complexity and time-to-market constraints using digital twinning.",
      "Ecosystem Collaboration: Strengthened structural networks between corporate tech providers and local MSMEs to accelerate AI integration."
    ],
    speakers: [
      "Chairman G. Prakash (BCIC Expert Committee)",
      "Executive Leaders from Dassault Systèmes",
      "Tech Leaders from Rolls Royce (IAMPL)",
      "Senior Representatives from Bosch & ANSCER Robotics"
    ],
    editions: []
  },
  {
    id: "fkcci-msme-conclave",
    placeholderId: 64,
    name: "FKCCI Global MSME Conclave 2026",
    seriesName: "Outreach Programmes",
    category: "Conclave",
    subCategory: "Outreach",
    tagline: "\"Sankalp to Siddhi – From Local Resolve to Global Realization\" at Palace Grounds",
    date: "29–31 May 2026",
    location: "Tripuravasini, Palace Grounds, Bangalore",
    attendees: "8 Students • 2 Faculty Benefited",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    logoSvg: "users",
    photo: "/images/gallery/g6.webp",
    gallery: ["/images/gallery/g6.webp"],
    featured: false,
    description: "LEADS Next Gen Centre attended the FKCCI Global MSME Conclave 2026 at Tripuravasini, Palace Grounds, conceived to strengthen MSMEs' contribution toward India's vision of a USD 10 trillion economy through knowledge-sharing on finance, technology, and global market access. Technical sessions moved across operational challenges, finance and cash-flow planning, and an Operations and Technology track on automation and Industry 4.0 practices, while dedicated sessions on succession planning and IPO readiness equipped enterprises with frameworks for capital-raising and leadership continuity. Vendor Development Master Classes created direct interaction between MSMEs and corporate buyers, while an exhibition spanning engineering, automation, robotics, and renewable energy gave the delegation floor-level access to India's manufacturing ecosystem, culminating in the MSME Excellence Awards recognising standout enterprises for innovation and sustainable growth.",
    seriesHighlights: [
      "Strategic conclave aligning MSMEs with India's vision of a USD 10 trillion economy",
      "Operations & Technology track on automation, robotics, and Industry 4.0 practices",
      "Masterclasses on cash-flow planning, succession frameworks, and IPO readiness for capital-raising",
      "Vendor Development Master Classes enabling direct interaction between MSMEs and corporate buyers",
      "Exhibition floor access and MSME Excellence Awards ceremony"
    ],
    outcomes: [
      "Entrepreneurial & Operational Mastery: LEADS Next Gen Centre members and student delegates gained practical insights into entrepreneurship, MSME business challenges, digital transformation, finance management, export readiness and succession planning.",
      "Supply Chain & IPO Readiness: Exposure to vendor development, IPO readiness and global supply chain integration; strengthened entrepreneurial mindset and industry awareness."
    ],
    speakers: [
      "FKCCI Office Bearers & Trade Committee Chairs",
      "Ministry of Micro, Small & Medium Enterprises (MSME) Representatives",
      "Corporate Supply Chain Directors & Financial Structuring Leads"
    ],
    editions: []
  },
  {
    id: "anvaya-innovation-summit-2026",
    placeholderId: 65,
    name: "Anvaya Innovation Summit 2026",
    seriesName: "Outreach Programmes",
    category: "Summit",
    subCategory: "Outreach",
    tagline: "\"Innovation for Impact – From Vision to Action\" at NIMHANS Convention Centre",
    date: "22 Jan 2026",
    location: "NIMHANS Convention Centre, Bengaluru",
    attendees: "25 Students • 5 Faculty Benefited",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    logoSvg: "users",
    photo: "/images/gallery/g6.webp",
    gallery: ["/images/gallery/g6.webp", "/images/gallery/g7.webp"],
    featured: true,
    description: "LEADS Next Gen Centre attended the Anvaya Innovation Summit 2026 at NIMHANS Convention Centre on 22nd January 2026, structured across four tracks designed to examine how innovation ecosystems transform through the convergence of policy, corporate engagement, and academic leadership. The inaugural plenary framed innovation-led governance as a tool for measurable societal outcomes, the Policy Track reframed regulation as a platform rather than a constraint, and the Corporate Panel turned to AI-driven business rebirth, stressing that technological progress must be paired with ethics and purpose-driven leadership. The Academic Panel proved a particular highlight, with RUAS Vice Chancellor Prof. K. K. Raina arguing that universities must function as full innovation ecosystems rather than knowledge-dissemination centres. The day closed with the signing of an MOA between Vision Karnataka Foundation and Kishkinda University, witnessed directly by the 25-student LEADS delegation, followed by a valedictory session reinforcing the collective commitment to sustained, real-world action.",
    seriesHighlights: [
      "Four thematic tracks spanning innovation governance, policy platforms, corporate rebirth, and academia",
      "Academic Panel keynote by RUAS Vice Chancellor Prof. K. K. Raina on universities as complete innovation ecosystems",
      "Corporate panel exploring ethical frameworks and purpose-driven leadership in AI transformations",
      "Witnessed the historic MOA signing between Vision Karnataka Foundation and Kishkinda University",
      "25-student LEADS delegation engaging in cross-sectoral dialogues and valedictory resolutions"
    ],
    outcomes: [
      "Institutional Partnership Visibility: Participants gained direct visibility into institutional partnership-building, witnessing the MOA signing as a live collaborative model for sustainable growth.",
      "Cross-Sectoral Ecosystem Literacy: Students engaged in cross-sectoral dialogue spanning policy, corporate, and academic perspectives, strengthening their understanding of inclusive innovation ecosystems."
    ],
    speakers: [
      "Prof. K. K. Raina (Vice Chancellor, Ramaiah University of Applied Sciences - RUAS)",
      "Vision Karnataka Foundation Leadership",
      "Kishkinda University Chancellery & Academic Leaders",
      "Corporate Innovation & Policy Track Panelists"
    ],
    editions: []
  },
  {
    id: "bcic-esg-awards",
    placeholderId: 65,
    name: "BCIC Annual EHS & Sustainability Awards – 3rd Edition",
    seriesName: "Outreach Programmes",
    category: "Sustainability",
    subCategory: "Outreach",
    tagline: "\"Advancing Sustainability Towards Net Zero\" Recognizing Corporate Climate Leadership",
    date: "14 May 2026",
    location: "Bengaluru",
    attendees: "8 Students • 1 Faculty Benefited",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    logoSvg: "users",
    photo: "/images/gallery/g7.webp",
    gallery: ["/images/gallery/g7.webp"],
    featured: false,
    description: "LEADS Next Gen Centre attended the 3rd Edition of the BCIC Annual EHS & Sustainability Awards, recognising companies across five categories: climate action, water management, circularity, employee diversity, and well-being from over 50 applications spanning Karnataka and beyond. TTK Prestige's Chief Manufacturing Officer detailed a programme tying 20% of employee pay to plant-specific KPIs, anchored by 6.7 MW of installed rooftop solar, a 55% emission cut against 2020 baseline, and a 60.6% improvement in water efficiency, backed by ₹79 crore in sustainability capital expenditure. An IIM Bangalore researcher presented the new India BRSR Index, built on AI-analysed data from all 1,000 top-listed Indian companies, designed to correct global ESG frameworks that measure risk to companies rather than harm caused by them. A major IT firm closed by describing its Global Energy Command Centre, monitoring energy across 90% of 21 campuses at an efficiency index roughly 50% better than industry average, reinforcing sustainability as a measurable business discipline rather than a compliance checkbox.",
    seriesHighlights: [
      "Recognition of sustainability leaders across climate action, water management, circularity, and employee diversity",
      "Case presentation by TTK Prestige on ₹79 crore sustainability capex and tying 20% employee pay to green KPIs",
      "Presentation of the new AI-powered India BRSR Index benchmarking top 1,000 listed Indian corporations",
      "Showcase of Global Energy Command Centre monitoring 21 enterprise campuses with 50% higher efficiency",
      "Benchmarking sustainability as a core operational discipline versus routine compliance checkmarking"
    ],
    outcomes: [
      "Frontiers of Sustainable Business Practice: LEADS students gained exposure to frontiers of sustainable business practice; insights into BRSR reporting, ESG rating frameworks, circular economy, Scope 3 supply chain engagement and climate action.",
      "Embedded Business Discipline: Reinforced that sustainability is an embedded business discipline, not merely a compliance exercise.",
      "Sustainability Leadership Orientation: Strengthened sustainability-conscious leadership orientation among participating students."
    ],
    speakers: [
      "Chief Manufacturing Officer, TTK Prestige",
      "IIM Bangalore BRSR Index Research Team",
      "Global IT Enterprise Sustainability Directors",
      "BCIC EHS & Sustainability Committee Office Bearers"
    ],
    editions: []
  },
  {
    id: "pre-summit-india-ai-impact-2026",
    placeholderId: 79,
    name: "Pre-Summit: India AI Impact Summit 2026",
    seriesName: "AI Policy & Impact Summits",
    category: "Roundtable",
    subCategory: "Outreach",
    tagline: "\"AI Guidelines and Pathways: Shaping a Human-Centric and Responsible AI Future\"",
    date: "15 Jan 2026",
    location: "Ramaiah Medical College Board Room, Bangalore",
    attendees: "45 Industry Leaders & Academic Experts",
    badgeColor: "bg-purple-100 text-[#9C1256] border-purple-200",
    logoSvg: "award",
    photo: "/images/gallery/g1.webp",
    gallery: ["/images/gallery/g1.webp", "/images/gallery/g2.webp"],
    featured: true,
    description: "The Pre-Summit Knowledge Session for the India AI Impact Summit 2026, held at the Ramaiah Medical College Board Room, was structured around four thematic roundtables spanning Industry Skill Demand & Deployment, the Research & Innovation Ecosystem, the National Security Framework, and Academic Transformation. Roundtable 1 was convened directly by LEADS Centre Head Dr. Subhadeep Mukherjee alongside FMC's Dr. Pallabi Mund and Dr. Jitendra Kumar, under the theme 'AI Guidelines and Pathways: Shaping a Human-Centric and Responsible AI Future for Industries in India.' Moderated by [24]7.ai's Dr. Ganesaraman, the roundtable convened panelists spanning startups, healthcare, HR, and academia, with outcomes designed to feed directly into the main India AI Impact Summit 2026. Deliberations addressed building critical thinking alongside AI fluency, healthcare access beyond metro hubs, auditing data veracity, pure science foundations, disciplined AI adoption via the 4Ds framework, and algorithm-monitoring practices to prevent bias in AI-driven HR recruitment.",
    seriesHighlights: [
      "Four thematic roundtables on Industry Skill Demand, Research Innovation, National Security, and Academic Transformation",
      "Roundtable 1 convened by LEADS Centre Head Dr. Subhadeep Mukherjee, Dr. Pallabi Mund & Dr. Jitendra Kumar",
      "Moderated by Dr. Ganesaraman ([24]7.ai) with panelists across healthcare, tech startups, HR, and academia",
      "Expert contributions from SeedlingLabs, BHIVE, RaceHorse Consulting, KrutiBimb, East-West Group, and Alstom",
      "Strategic policy roadmap designed to directly feed the national India AI Impact Summit 2026"
    ],
    outcomes: [
      "AI-Driven Skill Transitions: Participants developed a shared understanding of AI-driven skill transitions and identified critical priority skill clusters for emerging roles.",
      "Policy & Curricular Roadmaps: Generated specific, actionable policy inputs and strategic roadmaps for curriculum redesign to be taken forward at the main summit."
    ],
    speakers: [
      "Dr. Ganesaraman (Moderator, [24]7.ai)",
      "Ms. Shanti Kuropati (SeedlingLabs)",
      "Mr. Vijetha Shastry (BHIVE)",
      "Dr. Roy (RaceHorse Consulting)",
      "Dr. Muthukumaraswamy (KrutiBimb)",
      "Mr. Charles Chow (East-West Group, Singapore)",
      "Ms. Nikki Parihar (Alstom)",
      "Dr. Subhadeep Mukherjee (Centre Head, LEADS)",
      "Dr. Pallabi Mund & Dr. Jitendra Kumar (FMC, RUAS)"
    ],
    editions: []
  },
  {
    id: "iisc-adelaide-deep-tech-conference",
    placeholderId: 80,
    name: "International Conference on Innovation & Entrepreneurship for Deep-Tech Startups",
    seriesName: "IISc & Adelaide University Conference",
    category: "Conclave",
    subCategory: "Outreach",
    tagline: "\"Role of Entrepreneurial Universities\" in Collaboration with IISc, Adelaide University & ICSSR",
    date: "20–22 Feb 2026",
    location: "JN Tata Auditorium, IISc Bengaluru",
    attendees: "621 Delegates • 46 Expert Speakers",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    logoSvg: "award",
    photo: "/images/gallery/g3.webp",
    gallery: ["/images/gallery/g3.webp", "/images/gallery/g4.webp"],
    featured: true,
    description: "The International Conference on 'Innovation and Entrepreneurship for Deep-Tech Startups: Role of Entrepreneurial Universities' was held at the JN Tata Auditorium, IISc Bengaluru. Jointly organised by the Indian Institute of Science (IISc) and Adelaide University, and sponsored by the Indian Council of Social Science Research (ICSSR), the conference brought together 621 delegates and 46 expert speakers from academia, venture capital, and industry. Chaired by Padma Shri Dr. Prahlada Ramarao with Dr. Sujai Shivakumar as Chief Guest, the event featured insights from international experts including Prof. Noel J. Lindsay, Prof. Rishikesha T. Krishnan, Prof. M. P. Gupta, Prof. Debabrata Das, and Prof. Milind Atrey. The conference examined the growing importance of deep-tech startups, emphasizing the need for universities to evolve into Entrepreneurial Universities by integrating translational research, flexible IP frameworks, open innovation, and global collaboration. Drawing on models from Stanford, Oxford, and IIT Bombay, technical sessions explored AI deep learning, automation, digital twins across healthcare, logistics, and PropTech, alongside financial sessions mapping funding continuums from government prototype grants and iDEX to corporate venture capital (CVC). Concluding with a roadmap for Viksit Bharat 2047, Shri Ramanan Ramanathan and Dr. Anshuman Awasthi highlighted how domestic corporations must evolve into early-stage innovation partners for indigenous technologies.",
    seriesHighlights: [
      "International conference co-organised by IISc Bengaluru and Adelaide University, sponsored by ICSSR",
      "Chaired by Padma Shri Dr. Prahlada Ramarao with Dr. Sujai Shivakumar as Chief Guest",
      "46 expert speakers from Stanford, Oxford, IIT Bombay, IIM Bangalore, and IIIT Bangalore",
      "Technical sessions on AI deep learning, digital twins, automation, asset protection, and PropTech",
      "Funding continuum masterclasses covering prototype grants, corporate venture capital, and iDEX",
      "Strategic Viksit Bharat 2047 closing roadmap by Shri Ramanan Ramanathan and Dr. Anshuman Awasthi"
    ],
    outcomes: [
      "Global Innovation Frameworks: Students explored international innovation models and learned how India's strengths can complement global technology and entrepreneurship ecosystems.",
      "Venture-Building & TRLs: Students learned to transform research into market-ready innovations by understanding Technology Readiness Levels (TRLs) and commercialization pathways.",
      "Valuation & Pitch Skills: Students developed practical skills in commercialization, IP positioning, and presenting research and venture ideas across technical sessions.",
      "Multi-Stakeholder Collaboration: Student coordinators managed event logistics while building professional connections with industry leaders, policymakers, and international academic institutions."
    ],
    speakers: [
      "Dr. Prahlada Ramarao (Padma Shri, Conference Chair)",
      "Dr. Sujai Shivakumar (Chief Guest)",
      "Prof. Noel J. Lindsay (Adelaide University)",
      "Prof. Rishikesha T. Krishnan (Director, IIM Bangalore)",
      "Prof. M. P. Gupta (IIT Delhi)",
      "Prof. Debabrata Das (Director, IIIT Bangalore)",
      "Prof. Milind Atrey (IIT Bombay)",
      "Shri Ramanan Ramanathan (Former Mission Director, AIM)",
      "Dr. Anshuman Awasthi"
    ],
    editions: []
  },
  {
    id: "anq-congress-2025",
    placeholderId: 66,
    name: "ANQ Congress 2025 \"Quality Innovations Forging a Path to a Sustainable Future\"",
    seriesName: "Asian Network for Quality (ISQ)",
    category: "Outreach",
    subCategory: "Outreach",
    tagline: "Quality Innovations Forging a Path to a Sustainable Future with Indian Society for Quality (ISQ)",
    date: "18–19 Sep 2025",
    location: "Bengaluru (Indian Society for Quality - ISQ)",
    attendees: "16 Students • 2 Faculty Benefited",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    logoSvg: "users",
    photo: "/images/gallery/g1.webp",
    gallery: ["/images/gallery/g1.webp", "/images/gallery/g2.webp"],
    featured: true,
    description: "The LEADS Next Gen Centre Student Council provided critical frontline logistical and collaborative support for the international ANQ Congress 2025, hosted by the Indian Society for Quality (ISQ) under the theme 'Quality Innovations Forging a Path to a Sustainable Future.' Deployed across eight parallel presentation halls, students managed on-site registration, guided global delegates from over 20 countries, and directly assisted prominent Session Chairs like Dr. K. V. S. Rajkumar and Dr. V. Swaminathan. By handling technical projector setups and facilitating high-level Q&A interactions, students actively immersed themselves in global academic discourses covering sustainable quality, green manufacturing, digital twin frameworks, and AI-driven management. Ultimately, this comprehensive involvement enabled the student council to gain invaluable, practical event coordination skills by managing a large-scale international congress, while simultaneously exposing them to cutting-edge global research, sustainable manufacturing practices, and modern digital transformation methodologies.",
    seriesHighlights: [
      "Critical frontline logistical and collaborative support for international ANQ Congress 2025 with ISQ",
      "Student deployment across eight parallel presentation halls managing on-site registration for 20+ countries",
      "Direct assistance to prominent Session Chairs Dr. K. V. S. Rajkumar and Dr. V. Swaminathan",
      "Handling technical projector setups and facilitating high-level academic Q&A interactions",
      "Exposure to cutting-edge global research on sustainable quality, green manufacturing, and digital twins"
    ],
    outcomes: [
      "Global Logistics & Event Operations: Managing frontline tasks across eight parallel halls for delegates from over 20 countries provided the student council with hands-on experience in large-scale international event execution, high-pressure problem solving, and professional hospitality.",
      "Immersive Research & Industry Insights: Assisting prominent Session Chairs and facilitating technical Q&A segments gave students front-row exposure to cutting-edge global discussions on sustainable quality, green manufacturing, digital twin frameworks, and AI-driven management ecosystems."
    ],
    speakers: [
      "Dr. K. V. S. Rajkumar (Session Chair & Quality Management Stalwart)",
      "Dr. V. Swaminathan (Prominent Session Chair, ANQ Congress)",
      "Indian Society for Quality (ISQ) Executive Leadership",
      "Global Delegates & Academic Chairs from 20+ Countries"
    ],
    editions: []
  },
  {
    id: "bma-symposium-ai-management",
    placeholderId: 67,
    name: "BMA Symposium – \"AI and the Future of Management Education & Practice\"",
    seriesName: "Bangalore Management Association (BMA)",
    category: "Outreach",
    subCategory: "Outreach",
    tagline: "Addressing Curricula Gaps & Tech Disruption with VTU, Cyware & Government Leadership",
    date: "24 Oct 2025",
    location: "KTPO, Bangalore",
    attendees: "12 Students • 2 Faculty Benefited",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    logoSvg: "users",
    photo: "/images/gallery/g4.webp",
    gallery: ["/images/gallery/g4.webp", "/images/gallery/g5.webp"],
    featured: true,
    description: "LEADS Next Gen Centre representatives attended the BMA symposium, 'AI and the Future of Management Education & Practice,' addressing the gap between curricula and tech disruption. The delegation joined discussions with dignitaries including Prof. Vidyashankar S (VTU), Mr. Ashwin Hegde Karkala (Cyware), and Sri Pankaj Kumar Pandey, IAS. Participation focused on identifying AI's corporate and educational impacts, fostering industry-academia collaboration, and defining the 'human-in-the-loop' skills recruiters demand. The event emphasized establishing AI as a foundational literacy to prepare graduates for tech-driven environments with ethical clarity.",
    seriesHighlights: [
      "High-level delegation addressing the gap between university curricula and technological disruption",
      "Strategic discussions with Prof. Vidyashankar S (VTU), Mr. Ashwin Hegde Karkala (Cyware), and Sri Pankaj Kumar Pandey, IAS",
      "Identifying corporate and educational AI impacts and defining 'human-in-the-loop' workforce competencies",
      "Establishing AI as a foundational literacy to prepare graduates for tech-driven environments with ethical clarity"
    ],
    outcomes: [
      "AI-Driven Business Modeling Literacy: Student delegates developed a sophisticated understanding of generative AI's strategic application across diverse management functions, identifying key methods to integrate AI tools as productivity partners.",
      "Strategic Capability Assessment: Participating student cohorts established clear insights into recruiter expectations, learning to prioritize critical human-in-the-loop competencies like emotional intelligence and creative problem-solving over rigid technical knowledge."
    ],
    speakers: [
      "Prof. Vidyashankar S (Vice-Chancellor, Visvesvaraya Technological University - VTU)",
      "Sri Pankaj Kumar Pandey, IAS (Secretary, Government of Karnataka)",
      "Mr. Ashwin Hegde Karkala (Cyware)",
      "Bangalore Management Association (BMA) Leadership Panel"
    ],
    editions: []
  },
  {
    id: "icssr-national-conference-gst-reforms",
    placeholderId: 68,
    name: "Two-Day National Conference on Next-Generation GST Reforms 2.0 (ICSSR)",
    seriesName: "National Policy & RegTech Conference",
    category: "Outreach",
    subCategory: "Outreach",
    tagline: "In Collaboration with ICSSR: 'Next-Generation GST Reforms 2.0 – A Way towards Viksit Bharat 2047'",
    date: "12–13 Dec 2025",
    location: "Ramaiah University Campus, Bengaluru",
    attendees: "150 Students • 18 Faculty Benefited",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    logoSvg: "users",
    photo: "/images/gallery/g2.webp",
    gallery: ["/images/gallery/g2.webp", "/images/gallery/g3.webp"],
    featured: true,
    description: "The LEADS Next Gen Centre, in collaboration with the Indian Council of Social Science Research (ICSSR), co-hosted the two-day National Conference on 'Next-Generation GST Reforms 2.0.' The conference brought together policymakers, tax administrators, industry leaders, academicians, and researchers to discuss India's evolving GST framework under the vision of 'One Nation, One Tax.' Distinguished speakers, including Smt. Kajal Singh, IRS (Chief Commissioner of Central Tax), Mr. Prashant Gokhale (President, BCIC), and Prof. K.K. Raina (Vice-Chancellor, RUAS), addressed key themes such as AI-driven tax administration, fiscal federalism, GST rate rationalization, and the expansion of India's taxpayer base beyond 1.5 crore. The conference examined the impact of recent GST reforms on MSMEs, industrial growth, and ease of doing business, while exploring technology-enabled compliance and AI in digital taxation. Through 78 research paper presentations, participants contributed evidence-based policy recommendations. Discussions also highlighted India's strong GST performance, including an average monthly revenue collection of ₹1.84 lakh crore, reinforcing GST 2.0 as a key pillar in achieving the vision of Viksit Bharat.",
    seriesHighlights: [
      "Two-day national conference co-hosted in collaboration with Indian Council of Social Science Research (ICSSR)",
      "Keynotes by Smt. Kajal Singh, IRS (Chief Commissioner of Central Tax) & Mr. Prashant Gokhale (President, BCIC)",
      "78 research paper presentations delivering evidence-based fiscal policy recommendations",
      "Deliberations on AI-driven tax administration, GST rate rationalization, and fiscal federalism for Viksit Bharat 2047",
      "Analysis of India's GST performance and ₹1.84 lakh crore average monthly revenue milestone"
    ],
    outcomes: [
      "Fiscal Policy and Legislative Literacy: Student participants developed a deep, working knowledge of India's dual GST architecture, rate rationalizations, and the constitutional balance of fiscal federalism by directly analyzing tax administration case studies alongside senior IRS tax administrators.",
      "AI-Enabled RegTech Competency: Students gained practical insights into how AI, machine learning, and automated compliance systems enhance audit processes and streamline digital tax administration.",
      "Public Policy Synthesis and Advocacy: Student delegates developed advanced competency in cross-disciplinary synthesis, learning to translate dense academic data from 78 national research presentations into concise, actionable executive briefs aimed at improving MSME ease of doing business."
    ],
    speakers: [
      "Smt. Kajal Singh, IRS (Chief Commissioner of Central Tax)",
      "Mr. Prashant Gokhale (President, Bangalore Chamber of Industry and Commerce - BCIC)",
      "Prof. K. K. Raina (Vice-Chancellor, Ramaiah University of Applied Sciences - RUAS)",
      "Prof. (Dr.) K. M. Sharath Kumar (Dean, FMC, RUAS & Chief Advisor, LEADS)",
      "Dr. Subhadeep Mukherjee (Centre Head, LEADS)"
    ],
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
    tagline: "Breaking Down Barriers to Success with Ms. Iti Rawat (Founder, WEFT Foundation)",
    date: "29 Aug 2025",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "90 Students • 5 Faculty Benefited",
    badgeColor: "bg-[#DE3F11]/10 text-[#DE3F11] border-[#DE3F11]/20",
    logoSvg: "zap",
    photo: "/images/gallery/g8.webp",
    gallery: ["/images/gallery/g8.webp"],
    featured: true,
    description: "The LEADS Next Gen Centre successfully organized an inspiring edition of its prestigious Catalyst Insight Leadership Talk Series, featuring Ms. Iti Rawat, the visionary founder of WEFT (Women Entrepreneurship for Transformation) Foundation. Centered on the critical theme of 'Breaking Down Barriers to Success,' Ms. Rawat communicated transformational insights on overcoming systemic gender biases, navigating resource limitations, and building resilience in the professional landscape. Drawing from her comprehensive experience transforming lives through the Red Dot Initiative, she emphasized the fundamental importance of building supportive, inclusive ecosystems rather than narrowly focusing on individual success. The strategic objectives of this high-level session were to inspire young professionals by sharing real-life entrepreneurial pathways for breaking systemic social barriers, and to actively promote true inclusivity and women empowerment within modern corporate leadership. The highly interactive session empowered students to actively challenge societal stereotypes and emerge as confident, value-oriented leaders within their peer groups and future organizations.",
    seriesHighlights: [
      "Masterclass on overcoming systemic gender biases and navigating resource limitations in business",
      "Real-life entrepreneurial pathways and insights from the Red Dot Initiative by Ms. Iti Rawat",
      "Frameworks for building supportive, inclusive corporate ecosystems over narrow individual success",
      "Promoting active inclusivity, women empowerment, and value-oriented leadership"
    ],
    outcomes: [
      "Empathetic Leadership and Systemic Awareness: Student participants developed actionable frameworks for identifying and dismantling systemic gender biases and resource limitations within student organizations and future workspaces.",
      "Resilience and Confidence Building: Participating students cultivated personal leadership identities focused on emotional resilience, self-leadership, and the construction of supportive corporate peer networks."
    ],
    speakers: [
      "Ms. Iti Rawat (Visionary Founder, WEFT Foundation & Red Dot Initiative)",
      "LEADS Faculty & Student Executive Council"
    ],
    editions: []
  },
  {
    id: "catalyst-4",
    placeholderId: 67,
    name: "Catalyst Insight: Leadership Talk Series 4.0",
    seriesName: "Catalyst Series",
    category: "Catalyst",
    subCategory: "Catalyst Leadership Talk Series",
    tagline: "Leadership in the Age of AI with Ms. Candida Andrade Halgekar (Accenture)",
    date: "18 Nov 2025",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "98 Students • 5 Faculty Benefited",
    badgeColor: "bg-[#DE3F11]/10 text-[#DE3F11] border-[#DE3F11]/20",
    logoSvg: "zap",
    photo: "/images/gallery/g9.webp",
    gallery: ["/images/gallery/g9.webp"],
    featured: false,
    description: "The LEADS Next Gen Centre hosted the Catalyst Insight Leadership Talk Series 4.0, featuring Ms. Candida Andrade Halgekar, an Inclusion and Diversity Leader at Accenture. Centred on the highly relevant theme 'Leadership in the Age of AI', she delivered a profound exploration of how artificial intelligence is transforming conventional leadership paradigms. She expertly highlighted the critical role of predictive analytics and advanced assistive technologies in building universally inclusive corporate environments, emphasizing that AI cannot replace essential human capabilities like intuition, emotional intelligence, and empathy. The strategic objectives of this engaging talk were to demonstrate how emerging leaders can strategically leverage assistive technologies and predictive analysis to enhance inclusivity while highlighting the critical importance of human-centric skills and professional adaptability in an AI-enabled environment. The session perfectly empowered students to strategically leverage digital tools to accelerate learning while simultaneously strengthening their personal branding and robust networking skills.",
    seriesHighlights: [
      "Exploration of how AI and predictive analytics are transforming conventional leadership paradigms",
      "Deploying assistive technologies to build universally inclusive and accessible corporate environments",
      "Emphasizing irreplaceable human capabilities: intuition, emotional intelligence, and empathy",
      "Personal branding, digital tool acceleration, and professional adaptability for the AI era"
    ],
    outcomes: [
      "Balanced Human-AI Synergy: Students learned to use AI for data analysis while strengthening essential human skills such as empathy, creativity, and problem-solving.",
      "Inclusive Workplace Design Literacy: Students gained practical insights into using predictive analytics and assistive technologies to create accessible and inclusive workplace environments."
    ],
    speakers: [
      "Ms. Candida Andrade Halgekar (Inclusion & Diversity Leader, Accenture)",
      "LEADS Faculty Leads & Student Organising Team"
    ],
    editions: []
  },
  {
    id: "catalyst-5",
    placeholderId: 68,
    name: "Catalyst Insight: Leadership Talk Series 5.0",
    seriesName: "Catalyst Series",
    category: "Catalyst",
    subCategory: "Catalyst Leadership Talk Series",
    tagline: "From Campus to Corporate with Mr. Hemanth Kumar V (CEO, Bharat Careerconnect)",
    date: "23 Jan 2026",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "92 Students • 8 Faculty Benefited",
    badgeColor: "bg-[#DE3F11]/10 text-[#DE3F11] border-[#DE3F11]/20",
    logoSvg: "zap",
    photo: "/images/gallery/g10.webp",
    gallery: ["/images/gallery/g10.webp"],
    featured: false,
    description: "The LEADS Next Gen Centre hosted the Catalyst Insight Leadership Talk Series 5.0, featuring Mr. Hemanth Kumar V, CEO of Bharat Careerconnect Solutions LLP. Centered around the theme 'From Campus to Corporate,' Mr. Kumar provided an inspiring, pragmatic roadmap for bridging the gap between academic learning and corporate expectations. Drawing from his extensive experience in leading national skilling initiatives, he emphasized the profound importance of professional adaptability, ethical leadership, and continuous learning. The strategic objectives of this highly engaging session were to prepare the student body for transitioning into corporate life by sharing real-world skills demand, and to expose them to contemporary corporate communication frameworks and professional ethics. The talk challenged students to look beyond standard academic qualifications, encouraging them to actively pursue internships, networking opportunities, and real-world problem-solving challenges to emerge as highly confident, purpose-driven professional leaders today.",
    seriesHighlights: [
      "Pragmatic roadmap for bridging the gap between academic education and corporate expectations",
      "National skilling insights on professional adaptability, ethical leadership, and continuous learning",
      "Masterclass on contemporary corporate communication frameworks and professional conduct protocols",
      "Actionable strategies for internships, networking opportunities, and real-world problem-solving"
    ],
    outcomes: [
      "Strategic Professional Transitioning: Student participants developed a concrete personal upskilling and career roadmap, aligning their academic learning with contemporary industry competency benchmarks.",
      "Ethical Professional Conduct and Adaptability: Participating students established a deep understanding of corporate ethics, professional communication protocols, and the adaptability required to navigate shifting industrial workspaces."
    ],
    speakers: [
      "Mr. Hemanth Kumar V (CEO, Bharat Careerconnect Solutions LLP)",
      "LEADS Industry Connect Team"
    ],
    editions: []
  },
  {
    id: "catalyst-6",
    placeholderId: 69,
    name: "Catalyst Insight: Leadership Talk Series 6.0",
    seriesName: "Catalyst Series",
    category: "Catalyst",
    subCategory: "Catalyst Leadership Talk Series",
    tagline: "The Strategic Leadership Shift in Talent Acquisition with Mr. Ananth Mallya (CEO, Quan Tech Origin)",
    date: "30 Jan 2026",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "89 Students • 7 Faculty Benefited",
    badgeColor: "bg-[#DE3F11]/10 text-[#DE3F11] border-[#DE3F11]/20",
    logoSvg: "zap",
    photo: "/images/gallery/g1.webp",
    gallery: ["/images/gallery/g1.webp"],
    featured: false,
    description: "The LEADS Next Gen Centre hosted the Catalyst Insight Leadership Talk Series 6.0, featuring Mr. Ananth Mallya, CEO of Quan Tech Origin. Focusing on 'The Strategic Leadership Shift in Talent Acquisition,' he illuminated the rapid corporate transition from rigid role-based hiring to dynamic capability-based evaluation. Through highly interactive mock aptitude evaluations and real-time feedback, he demonstrated how modern recruiters prioritize lateral thinking, adaptability, and conceptual clarity over fixed academic knowledge. The strategic objectives of this highly interactive talk were to provide students with a thorough, practical understanding of the modern industry shift in recruitment methodologies, and to encourage the effective, conceptually grounded use of AI tools and regional innovation platforms for career acceleration. The session provided invaluable strategies for navigating modern interviews, using artificial intelligence as a smart support system rather than a shortcut, and inspired students to cultivate a highly strategic, growth-oriented professional mindset.",
    seriesHighlights: [
      "Analysis of corporate recruitment shift from role-based hiring to capability-based evaluation",
      "Interactive mock aptitude evaluations with real-time recruiter feedback",
      "Prioritizing lateral thinking, adaptability, and conceptual clarity in modern competitive interviews",
      "Strategic, grounded use of AI tools as career acceleration support systems"
    ],
    outcomes: [
      "Aptitude and Cognitive Skills: Students built practical competence in tackling modern aptitude and cognitive assessments through live mock simulations.",
      "Capability-Based Profile Positioning: Students learned to effectively showcase critical thinking, adaptability, and technology skills during competitive recruitment processes."
    ],
    speakers: [
      "Mr. Ananth Mallya (CEO, Quan Tech Origin)",
      "LEADS Career Acceleration Leads"
    ],
    editions: []
  },
  {
    id: "catalyst-7",
    placeholderId: 70,
    name: "Catalyst Insight: Leadership Talk Series 7.0",
    seriesName: "Catalyst Series",
    category: "Catalyst",
    subCategory: "Catalyst Leadership Talk Series",
    tagline: "Catalysing Innovation and Leadership for Viksit Bharat with Prof. Udaya Raghunath Birje & IEEE",
    date: "9 May 2026",
    location: "MSRUAS RTC Campus, Bengaluru",
    attendees: "250 Students • 16 Faculty Benefited",
    badgeColor: "bg-[#DE3F11]/10 text-[#DE3F11] border-[#DE3F11]/20",
    logoSvg: "zap",
    photo: "/images/gallery/g2.webp",
    gallery: ["/images/gallery/g2.webp"],
    featured: false,
    description: "The LEADS Next Gen Centre, in collaboration with the IEEE Bangalore Section and IEEE SB RUAS, successfully organized Catalyst Leadership Talk 7.0 at the MSRUAS RTC Campus. Featuring an inspiring, multi-dimensional session by Prof. Udaya Raghunath Birje, Co-Founder & Director of ThinkStreet Technologies, the event focused on the theme 'Catalysing Innovation and Leadership for Viksit Bharat.' The interactive 2.5 hour engagement combined an expert lecture with workshop-style activities, introducing over 250 participants to emerging technological opportunities in AI, semiconductors, quantum missions, and smart green corridors. The strategic objectives of this national-facing talk were to inspire youth innovators to build future-ready leadership mindsets contributing directly to India's vision of Viksit Bharat 2047, and to create strategic awareness regarding emerging opportunities within national semiconductor, quantum, and AI missions. By encouraging the development of critical skills like creative problem-solving and emotional intelligence, the forum empowered student innovators to build ethical, sovereign technology solutions for national self-reliance.",
    seriesHighlights: [
      "2.5-hour expert lecture and interactive workshop co-hosted with IEEE Bangalore Section & IEEE SB RUAS",
      "Keynote by Prof. Udaya Raghunath Birje on emerging opportunities in AI, semiconductors, and quantum missions",
      "Deep-dive into smart green corridors and India's sovereign technological roadmap for Viksit Bharat 2047",
      "Developing creative problem-solving, emotional intelligence, and ethical technology governance"
    ],
    outcomes: [
      "Strategic National Missions Literacy: Student innovators established deep conceptual knowledge of India's sovereign missions in AI, semiconductors, and quantum systems, identifying concrete spaces for personal and academic contributions.",
      "Academic-Industry Venture Pipeline: Participating student cohorts initiated strong collaborative networks, motivating student project groups to transition classroom research into scalable, tech-focused startup ventures."
    ],
    speakers: [
      "Prof. Udaya Raghunath Birje (Co-Founder & Director, ThinkStreet Technologies)",
      "IEEE Bangalore Section Executive Officers",
      "IEEE SB RUAS Leadership"
    ],
    editions: []
  },
  {
    id: "catalyst-8",
    placeholderId: 71,
    name: "Catalyst Insight: Leadership Talk Series 8.0",
    seriesName: "Catalyst Series",
    category: "Catalyst",
    subCategory: "Catalyst Leadership Talk Series",
    tagline: "AI in Healthcare Marketing Systems with Mr. Siddhartha Saha (Co-Founder, DocFyn)",
    date: "25 June 2026",
    location: "Faculty of Management and Commerce (FMC), RUAS",
    attendees: "50 Students • 6 Faculty Benefited",
    badgeColor: "bg-[#DE3F11]/10 text-[#DE3F11] border-[#DE3F11]/20",
    logoSvg: "zap",
    photo: "/images/gallery/g3.webp",
    gallery: ["/images/gallery/g3.webp"],
    featured: false,
    description: "The LEADS Next Gen Centre, in coordination with the Faculty of Management and Commerce, successfully hosted the Catalyst Leadership Talk Series 8.0 on 25 June 2026 featuring Mr. Siddhartha Saha, Co-Founder of DocFyn, to analyze the strategic role of Artificial Intelligence within modern healthcare marketing systems. The session explored the distinct structural parameters of digital health ecosystems, focusing on how high-stakes clinical decisions, strict data privacy regulations, and patient psychological sensitivities differentiate this domain from standard retail marketing. Deliberations highlighted critical frameworks across multi-specialty and single-specialty hospital marketing, demonstrating how tools like search engine optimization (SEO), answer engine optimization (AEO), automated conversational assistants, and data-driven marketing dashboards actively streamline patient acquisition, engagement, conversion, and retention. By reviewing live practical case studies indicating that nearly 70% of patients perform deep online research on search networks and generative platforms like ChatGPT before selecting healthcare providers, the talk provided a baseline workflow to optimize hospital visibility while emphasizing that algorithmic deployment must remain anchored in absolute transparency, ethical standards, and patient-centric care.",
    seriesHighlights: [
      "Analyzing AI, predictive algorithms, and automated workflows in modern healthcare marketing systems",
      "Navigating clinical decision complexity, strict health data privacy regulations, and patient sensitivities",
      "Multi-specialty hospital growth frameworks using SEO, AEO (Answer Engine Optimization), and conversational AI",
      "Practical analysis of consumer digital search behavior across search engines and generative AI platforms"
    ],
    outcomes: [
      "Digital Acquisition Strategies: Students gained practical skills in search visibility, multi-channel marketing, and analytics to better understand consumer digital journeys.",
      "Ethical Automation Practices: Students learned to balance automation with privacy, ethics, and human-centered decision-making."
    ],
    speakers: [
      "Mr. Siddhartha Saha (Co-Founder, DocFyn)",
      "Faculty of Management and Commerce (FMC) Healthcare Management Leads"
    ],
    editions: []
  },

  // 4. Expert Talks & Case Cracker
  {
    id: "case-cracker-nmc",
    placeholderId: 72,
    name: "Case Cracker 1.0 – NMC Healthcare's Billion-Dollar Secret",
    seriesName: "Case Cracker Series",
    category: "Expert Talk",
    subCategory: "Expert Talks",
    tagline: "Corporate Forensic Investigation & Governance Analysis of NMC Healthcare's Collapse",
    date: "03 Sep 2025",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "67 Students • 5 Faculty Benefited",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-200",
    logoSvg: "file-text",
    photo: "/images/gallery/g4.webp",
    gallery: ["/images/gallery/g4.webp"],
    featured: false,
    description: "The LEADS Next Gen Centre, in collaboration with the Faculty of Management and Commerce, hosted 'Case Cracker 1.0,' an immersive and highly analytical academic session dedicated to analyzing the dramatic financial collapse of NMC Healthcare. This intensive corporate forensic investigation dissected the meteoric rise and catastrophic collapse of founder B.R. Shetty, whose massive healthcare empire imploded after a Muddy Waters Research exposé brought to light a staggering $6.6 billion in concealed off-book debt. The session meticulously explored the severe corporate governance deficits, dual-ledger accounting frauds, and blatant external auditing failures that shattered global investor confidence and dismantled a prominent multinational enterprise. The primary strategic objective of this case analysis was to train students to systematically master the diagnostic identification of critical corporate red flags, including unrecorded liabilities, complex off-balance-sheet vehicles, and inflated asset valuations. By evaluating the rigorous administrative and business recovery procedures led by Alvarez & Marsal, the workshop challenged participants to evaluate the systemic failure of external auditing bodies and the critical loss of professional skepticism under client pressure. This interdisciplinary exploration successfully bridged theoretical finance with corporate governance, illustrating the non-negotiable role of independent internal audit controls in modern global corporate management.",
    seriesHighlights: [
      "In-depth forensic dissection of NMC Healthcare's $6.6 billion concealed debt collapse",
      "Analysis of Muddy Waters Research exposé, dual-ledger accounting frauds, and audit deficits",
      "Masterclass on identifying corporate red flags, off-balance-sheet vehicles, and asset inflation",
      "Evaluation of Alvarez & Marsal administrative business recovery procedures and auditor independence failures",
      "Bridging corporate governance theory with practical forensic accounting and risk controls"
    ],
    outcomes: [
      "Forensic Auditing and Red-Flag Analysis: Student analysts developed actionable competence in identifying unrecorded liabilities, duplicate ledger systems, and off-balance-sheet debt within complex multinational corporate reports.",
      "Governance and Strategic Skepticism Literacy: Participating students acquired professional-grade skepticism and evaluative frameworks to assess auditor independence, evaluate internal control structures, and appreciate the strategic necessity of corporate transparency."
    ],
    speakers: [
      "Faculty of Management and Commerce (FMC) Forensic Finance Leads",
      "LEADS Corporate Governance Faculty Panel"
    ],
    editions: []
  },
  {
    id: "case-craft-5-fdp",
    placeholderId: 77,
    name: "Case Craft 5.0 – Five-Day FDP",
    seriesName: "Faculty Development Programmes",
    category: "Workshop",
    subCategory: "Expert Talks",
    tagline: "\"Reimagining Management Education Through Effective Case-Based Pedagogy\"",
    date: "15–19 Dec 2025",
    location: "Faculty of Management and Commerce (FMC), RUAS",
    attendees: "30+ Faculty Educators & Industry Professionals",
    badgeColor: "bg-indigo-100 text-indigo-900 border-indigo-200",
    logoSvg: "file-text",
    photo: "/images/gallery/g5.webp",
    gallery: ["/images/gallery/g5.webp", "/images/gallery/g6.webp"],
    featured: false,
    description: "The Faculty of Management and Commerce, in strategic partnership with the Center for Professional Development (CPD) and the LEADS Next Gen Centre, successfully conducted 'Case Craft 5.0,' an intensive five-day Faculty Development Programme (FDP) dedicated to redefining business education. This comprehensive program brought together over 30 academic educators and industry professionals from across India, engaging them in a hands-on learning ecosystem focused on mastering advanced case study construction, structured classroom facilitation, and outcome-based pedagogical assessments. The fundamental strategic objective was to elevate academic delivery standards by integrating modern digital imperatives including advanced data analytics and generative Artificial Intelligence into traditional curricula. By aligning teaching practices with elite international standards and the requirements of NBA/NAAC accreditation frameworks, the sessions trained participants in structured case writing and qualitative analysis, transforming classrooms into technology-ready hubs of critical thinking.",
    seriesHighlights: [
      "Five-day intensive national FDP co-hosted by FMC, Center for Professional Development (CPD) & LEADS",
      "Hands-on ecosystem focused on advanced case study construction and structured classroom facilitation",
      "Integrating generative AI, advanced data analytics, and digital business tools into pedagogical curricula",
      "Aligning management teaching methodologies with NBA/NAAC accreditation frameworks",
      "Training 30+ national educators to build technology-ready hubs of lateral and critical thinking"
    ],
    outcomes: [
      "Elevated Pedagogy Engagement: Student cohorts experienced a direct qualitative upgrade in active classroom engagement, benefiting from advanced case-study methods that foster lateral thinking and structured business analysis.",
      "Data-Driven Problem Solving Readiness: Participating student groups mastered contemporary industry analytical frameworks by solving business cases integrated with artificial intelligence and digital market data."
    ],
    speakers: [
      "Center for Professional Development (CPD) Master Facilitators",
      "Senior Case Writers & Management Educators",
      "LEADS Pedagogical Innovation Leads"
    ],
    editions: []
  },
  {
    id: "mindful-leadership-heis-workshop",
    placeholderId: 78,
    name: "International Workshop: Mindful Leadership and Well-Being in HEIs",
    seriesName: "International Workshops",
    category: "Workshop",
    subCategory: "Expert Talks",
    tagline: "Conscious Leadership & Stress Resilience with Swami Parameshwar Das Maharaj Ph.D (NYU)",
    date: "12 Oct 2025",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "75 Students • 15 Faculty Benefited",
    badgeColor: "bg-teal-100 text-teal-900 border-teal-200",
    logoSvg: "users",
    photo: "/images/gallery/g7.webp",
    gallery: ["/images/gallery/g7.webp"],
    featured: false,
    description: "The LEADS Next Gen Centre, with the Faculty of Management and Commerce serving as its Knowledge Partner, organized an impactful International Workshop titled 'Mindful Leadership and Well-Being in Higher Education Institutions.' Featuring an inspiring session by world-renowned spiritual consultant Swami Parameshwar Das Maharaj Ph.D in Organizational Psychology, NYU, the program was designed to introduce academic leaders and administrators to the strategic advantages of transitioning from reactive management styles to an 'awakened,' conscious leadership framework. Swamiji seamlessly bridged ancient Vedic spiritual principles with contemporary organizational psychology to address professional burnout, high cognitive loads, and institutional stress. The primary strategic objective was to provide leaders with actionable practices in emotional literacy, deep breathwork, and sensory mindfulness to manage complex workloads while fostering a highly compassionate, 'Heart-Centered' approach to team management.",
    seriesHighlights: [
      "International masterclass by Swami Parameshwar Das Maharaj Ph.D (Organizational Psychology, NYU)",
      "Bridging ancient Vedic spiritual principles with modern organizational psychology",
      "Actionable techniques for emotional literacy, deep breathwork, and sensory mindfulness",
      "Heart-Centered leadership frameworks to prevent burnout and mitigate high cognitive loads",
      "Reflective fireside segment on values-driven inner development and peer collaboration"
    ],
    outcomes: [
      "Stress Resilience and Self-Awareness: Students learned practical mindfulness, breathwork, and self-reflection techniques to manage stress and enhance performance under pressure.",
      "Compassionate Team Leadership: Students developed communication and emotional intelligence skills to foster empathy, collaboration, and psychological safety within teams."
    ],
    speakers: [
      "Swami Parameshwar Das Maharaj Ph.D (Organizational Psychology, NYU; World-Renowned Spiritual Consultant)",
      "Faculty of Management and Commerce (FMC) Academic Mentors"
    ],
    editions: []
  },
  {
    id: "expert-talks-python",
    placeholderId: 73,
    name: "Expert Talk – Exploring Data Science with Python",
    seriesName: "Expert Talks",
    category: "Expert Talk",
    subCategory: "Expert Talks",
    tagline: "An Algorithmic Journey with Python featuring Dr. Rangegowda R (Presidency Business School)",
    date: "04 Sep 2025",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "80 Students • 4 Faculty Benefited",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-200",
    logoSvg: "file-text",
    photo: "/images/gallery/g5.webp",
    gallery: ["/images/gallery/g5.webp"],
    featured: true,
    description: "The LEADS Next Gen Centre hosted a highly engaging Expert Talk titled 'Exploring Data Science: An Algorithmic Journey with Python,' featuring Dr. Rangegowda R from Presidency Business School, to explore the critical intersection of technical computing and modern corporate strategy. The intensive session provided a comprehensive introduction to foundational Data Science principles, highlighting the critical role of Python in algorithmic modeling, machine learning, and business intelligence. Dr. Rangegowda expertly demystified complex mathematical concepts like supervised learning, predictive regression, and advanced classification. The primary strategic objectives of this initiative were to seamlessly bridge complex technical programming frameworks with practical management scenarios, demonstrating how data-driven insights are actively transforming modern market forecasting, corporate decision-making, and global tech entrepreneurship. By establishing data science as a core strategic capability rather than an isolated IT skill, this interdisciplinary session successfully empowered students to strategically leverage predictive algorithms and analytics to drive business model innovation, optimize operational workflows, and secure a sustainable competitive advantage in an increasingly automated, data-centric corporate landscape.",
    seriesHighlights: [
      "Demystifying foundational Data Science principles, machine learning, and Python algorithmic modeling",
      "Deep-dive into supervised learning, predictive regression algorithms, and advanced classification",
      "Bridging complex computational programming frameworks with practical business management scenarios",
      "Leveraging predictive analytics for market forecasting, workflow optimization, and competitive advantage"
    ],
    outcomes: [
      "Algorithmic Modeling Proficiency: Students gained hands-on experience in building and analyzing predictive models using Python-based regression and classification techniques.",
      "Data-Driven Strategic Decision-Making: Students learned to translate data insights into actionable business decisions and strategic recommendations using analytical tools."
    ],
    speakers: [
      "Dr. Rangegowda R (Faculty & Analytics Mentor, Presidency Business School)",
      "LEADS Technical & Analytics Faculty Team"
    ],
    editions: []
  },

  // 5. Fireside Talks
  {
    id: "fireside-talks-change-makers",
    placeholderId: 74,
    name: "Fireside Talk: Global to Local Changemakers",
    seriesName: "Fireside Talks",
    category: "Fireside Talk",
    subCategory: "Fireside Talks",
    tagline: "Bridging Global High-Tech Insights with Grassroots Community Transformation",
    date: "10 Oct 2025",
    location: "LEADS Next Gen Centre, RUAS",
    attendees: "96 Students • 8 Faculty Benefited",
    badgeColor: "bg-orange-100 text-orange-900 border-orange-200",
    logoSvg: "users",
    photo: "/images/gallery/g6.webp",
    gallery: ["/images/gallery/g6.webp"],
    featured: false,
    description: "The LEADS Next Gen Centre at MSRUAS, in collaboration with the Faculty of Management and Commerce, successfully hosted an impactful edition of its signature 'Fireside Talks' series focusing on global-to-local changemakers driving sustainable grassroots transformation. This platform was designed to bridge high-level global industry experiences with strategic local actions, creating meaningful, community-centered societal impact. Featuring a distinguished panel of accomplished global leaders and innovators—including Ms. Padmaja Narsipur, Dr. Malali Gowda, Mr. Ramu Muthangi, and Maj. Arun Sreedharan (Retd.)—the event provided a forum for speakers to share their personal journeys, core values, and evolutionary career pivots. Crucial deliberations centered on the convergence of biotechnology, artificial intelligence, agricultural genomics, and automated hardware manufacturing as primary vehicles for localized job creation and regional economic infrastructure. To prepare emerging leaders, the session explored leveraging cutting-edge assistive technologies to drive scalable national transformation. By examining military-to-defence transitions and Silicon Valley-to-India corporate paths, the panel provided students with guidance on building proactive leadership adaptability, professional resilience, and a commitment to purpose-driven civic solutions.",
    seriesHighlights: [
      "Distinguished panel featuring Ms. Padmaja Narsipur, Dr. Malali Gowda, Mr. Ramu Muthangi, and Maj. Arun Sreedharan (Retd.)",
      "Deliberations on biotechnology, AI, agricultural genomics, and automated hardware manufacturing",
      "Examining Silicon Valley-to-India corporate journeys and military-to-defence leadership transitions",
      "Leveraging cutting-edge assistive technologies for localized job creation and scalable civic impact",
      "Fostering purpose-driven corporate ethics, lifelong learning, and sustainable commercial models"
    ],
    outcomes: [
      "Workforce Transformation Literacy: Participants gained immense clarity on the transformative role of AI and robotics in reshaping future global employment structures and workforce dependencies.",
      "Interdisciplinary Innovation Exposure: Attendees explored innovations at the intersection of digital technology, agriculture, and genetic research.",
      "Adaptive Leadership Insights: Students gained practical lessons on resilient career growth and adaptive leadership from real-world professional journeys."
    ],
    speakers: [
      "Ms. Padmaja Narsipur (Global Technology & Innovation Leader)",
      "Dr. Malali Gowda (Distinguished Genomics & Biotechnology Scholar)",
      "Mr. Ramu Muthangi (Enterprise Technology Stalwart)",
      "Maj. Arun Sreedharan (Retd.) (Military Veteran & Defence Enterprise Strategist)"
    ],
    editions: []
  },

  // 6. Boardroom Battles
  {
    id: "pragati-boardroom-battles",
    placeholderId: 75,
    name: "Pravrutti – Boardroom Battles",
    seriesName: "Pravrutti National Tech Fest",
    category: "Boardroom Battle",
    subCategory: "Boardroom Battles",
    tagline: "Flagship Corporate Crisis Simulation & Strategic Defense at Pravrutti 2025",
    date: "16 Oct 2025",
    location: "RTC Campus, Ramaiah University",
    attendees: "10 Students • 1 Faculty Benefited",
    badgeColor: "bg-rose-100 text-rose-900 border-rose-200",
    logoSvg: "award",
    photo: "/images/gallery/g7.webp",
    gallery: ["/images/gallery/g7.webp"],
    featured: true,
    description: "The L.E.A.D.S Next Gen Centre hosted 'Boardroom Battles,' a flagship management competition during the Pravrutti 2025 National Tech Fest. Acting as corporate executives, students engaged in immersive business simulations to analyze corporate crises, formulate viable recovery strategies, and defend their decisions under intense time pressure. Students pitched their financial and digital transformation solutions directly to an expert judging panel featuring Mr. Moulik Vinod Gajjar (Senior Market Research Analyst, Zyoin Group) and Dr. Praveen Sinha (Professor, Oxford College of Business Management). Concurrently, the student committee took full ownership of the event's execution, managing everything from case study preparation to logistical coordination. Ultimately, this initiative successfully immersed students in simulated boardrooms to apply academic concepts to high-stakes business scenarios, while building vital industry connections, providing a platform for professional feedback, and developing leadership, communication, and creative thinking skills under pressure.",
    seriesHighlights: [
      "Flagship management competition and simulated boardroom battle at Pravrutti 2025 National Tech Fest",
      "Real-time corporate crisis analysis, financial strategy formulation, and time-pressured defense",
      "Direct solution pitching to industry judge Mr. Moulik Vinod Gajjar and Dr. Praveen Sinha",
      "End-to-end student committee management from case study preparation to full logistical coordination"
    ],
    outcomes: [
      "High-Stakes Crisis Simulation: The competition strengthened critical thinking, financial analysis, and strategic communication through real-world corporate challenges and strategy presentations to industry experts.",
      "End-to-End Operational Execution: Managing the event from case development to execution gave the student committee practical experience in project management, teamwork, and real-time problem-solving."
    ],
    speakers: [
      "Mr. Moulik Vinod Gajjar (Senior Market Research Analyst, Zyoin Group)",
      "Dr. Praveen Sinha (Professor, Oxford College of Business Management)",
      "LEADS Faculty Mentors & Student Organising Committee"
    ],
    editions: []
  },

  // 7. Sustainability
  {
    id: "green-leaders-circle",
    placeholderId: 76,
    name: "Leadership Green Circle: NGO Outreach At JananiSevashrama",
    seriesName: "Sustainability & Outreach",
    category: "Sustainability",
    subCategory: "Sustainability",
    tagline: "Community Outreach, Social Responsibility & Child Educational Empowerment",
    date: "22 Nov 2025",
    location: "Janani Sevashrama, Bengaluru",
    attendees: "20 Students • 3 Faculty Benefited",
    badgeColor: "bg-teal-100 text-teal-900 border-teal-200",
    logoSvg: "users",
    photo: "/images/gallery/g8.webp",
    gallery: ["/images/gallery/g8.webp"],
    featured: false,
    description: "The LEADS Next Gen Centre Student Council executed a transformative community outreach initiative with a visit to Janani Sevashrama, Bengaluru. Powered by the Faculty of Management and Commerce, RUAS, this social responsibility event engaged 28 children in a full day of structured recreational activity and meaningful connection, anchored by collaborative formats such as Freeze Dance, Balloon Balance, and a multi-stage Chain Reaction designed to build healthy competition, teamwork, and joy among the participating children through structured, interactive games. Beyond the activities, the Council managed full-scale procurement and distribution of educational supplies — notebooks, stationery, and treats — translating LEADS' theoretical leadership and sustainability principles into independently planned, real-world community impact. The initiative strengthened the student leadership team's organizational, interpersonal, and logistical capabilities through hands-on execution, reinforcing the university's institutional commitment to selfless community upliftment and compassionate social leadership.",
    seriesHighlights: [
      "Full-day structured recreational and interactive games engaging 28 children at Janani Sevashrama",
      "Team-building formats including Freeze Dance, Balloon Balance, and multi-stage Chain Reaction",
      "Full-scale procurement and distribution of educational notebooks, stationery kits, and treats",
      "Hands-on project execution building organizational, interpersonal, and crisis logistics capabilities",
      "Demonstrating compassionate social leadership and selfless community upliftment beyond the campus"
    ],
    outcomes: [
      "Project Management & Logistics: Participants developed hands-on project management proficiency, independently coordinating resource procurement, activity design, and multi-stage logistical execution for a full-scale outreach event.",
      "Leadership in Action: Students strengthened leadership and organizational skills by applying classroom learning to deliver purpose-driven community initiatives with measurable social impact.",
      "Empathetic Leadership Brand: The Council's execution reinforced the LEADS Next Gen Centre's brand as a premier hub for developing empathetic, purposeful leaders dedicated to long-term community welfare."
    ],
    speakers: [
      "Janani Sevashrama Trustees & Administration",
      "Faculty of Management and Commerce (FMC) Community Mentors",
      "LEADS Student Council Outreach Leads"
    ],
    editions: []
  }
];
