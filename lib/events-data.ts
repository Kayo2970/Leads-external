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
        id: "catalyst-series-8",
        placeholderId: 441,
        title: "Catalyst Insight: Leadership Talk Series 8.0 — AI in Healthcare Marketing & Systems",
        date: "June 25, 2026",
        location: "RUAS FMC Campus, Bengaluru",
        attendees: "300+ Management & Health Tech Delegates",
        photo: "/events/catalyst-workshop.jpg",
        overview:
          "Hosted in coordination with the Faculty of Management and Commerce, featuring Mr. Siddhartha Saha (Co-Founder, DocFyn). Deliberated structural parameters of digital health ecosystems, clinical privacy, SEO/AEO search optimization, and ethical automation.",
        keyTopics: [
          "AI & Predictive Analytics in Healthcare Marketing Systems",
          "Search & Answer Engine Optimization (SEO / AEO) in Health Tech",
          "Data Privacy Regulations & Patient-Centric Algorithmic Transparency",
        ],
        keySpeakers: ["Mr. Siddhartha Saha (Co-Founder, DocFyn)", "FMC Management Mentors"],
        outcomes: [
          "Gained practical skills in multi-channel search visibility and consumer digital journeys",
          "Mastered frameworks balancing algorithmic automation with privacy and human-centered ethics",
        ],
      },
      {
        id: "catalyst-series-7",
        placeholderId: 442,
        title: "Catalyst Insight: Leadership Talk Series 7.0 — Innovation & Leadership for Viksit Bharat",
        date: "May 2026",
        location: "MSRUAS RTC Campus, Bengaluru",
        attendees: "250+ Student Innovators",
        photo: "/events/founders-sprint.jpg",
        overview:
          "Organized in collaboration with IEEE Bangalore Section & IEEE SB RUAS, featuring Prof. Udaya Raghunath Birje (Co-Founder & Director, ThinkStreet Technologies). A 2.5-hour workshop exploring sovereign tech in AI, semiconductors, and quantum missions.",
        keyTopics: [
          "Catalysing Sovereign Tech: Semiconductors, AI & Quantum Missions",
          "Strategic Awareness for India's Viksit Bharat 2047 Vision",
          "Creative Problem-Solving & Emotional Intelligence in Deep-Tech",
        ],
        keySpeakers: ["Prof. Udaya Raghunath Birje (ThinkStreet Technologies)", "IEEE SB RUAS Mentors"],
        outcomes: [
          "Established deep conceptual literacy of India's sovereign technology missions",
          "Initiated academic-industry venture pipelines transitioning classroom research to startups",
        ],
      },
      {
        id: "catalyst-series-6",
        placeholderId: 443,
        title: "Catalyst Insight: Leadership Talk Series 6.0 — Strategic Shift in Talent Acquisition",
        date: "March 2026",
        location: "RUAS Campus, Bengaluru",
        attendees: "350+ Students & Recruiters",
        photo: "/events/roundtable-exec.jpg",
        overview:
          "Featuring Mr. Ananth Mallya (CEO, Quan Tech Origin). Illuminated corporate hiring shifts from rigid role-based evaluation to dynamic capability testing via live mock aptitude simulations and real-time feedback.",
        keyTopics: [
          "Shift from Role-Based Hiring to Capability-Based Evaluation",
          "Aptitude, Lateral Thinking & Cognitive Skills Mastery",
          "Positioning Profiles using AI Tools & Regional Innovation Platforms",
        ],
        keySpeakers: ["Mr. Ananth Mallya (CEO, Quan Tech Origin)", "LEADS Capability Mentors"],
        outcomes: [
          "Built practical competence in modern aptitude assessments through live mock simulations",
          "Learned profile positioning showcasing critical thinking and technology adaptability",
        ],
      },
      {
        id: "catalyst-series-5",
        placeholderId: 444,
        title: "Catalyst Insight: Leadership Talk Series 5.0 — From Campus to Corporate",
        date: "January 2026",
        location: "RUAS Campus, Bengaluru",
        attendees: "300+ Career Aspirants",
        photo: "/events/catalyst-workshop.jpg",
        overview:
          "Featuring Mr. Hemanth Kumar V (CEO, Bharat Careerconnect Solutions LLP). Provided an inspiring roadmap for bridging academic learning with corporate expectations, professional ethics, and leadership adaptability.",
        keyTopics: [
          "Bridging Academic Learning and Corporate Industry Benchmarks",
          "Contemporary Corporate Communication & Professional Ethics",
          "Pursuing Real-World Internships & Problem-Solving Challenges",
        ],
        keySpeakers: ["Mr. Hemanth Kumar V (CEO, Bharat Careerconnect Solutions LLP)", "Career Advisory Board"],
        outcomes: [
          "Developed concrete personal upskilling and career transition roadmaps",
          "Established deep understanding of corporate ethics protocols and workspace adaptability",
        ],
      },
      {
        id: "catalyst-series-4",
        placeholderId: 445,
        title: "Catalyst Insight: Leadership Talk Series 4.0 — Leadership in the Age of AI",
        date: "November 2025",
        location: "RUAS Campus, Bengaluru",
        attendees: "280+ Tech & Management Delegates",
        photo: "/events/founders-sprint.jpg",
        overview:
          "Featuring Ms. Candida Andrade Halgekar (Inclusion & Diversity Leader, Accenture). Explored how AI is transforming leadership paradigms, predictive analytics, and why human empathy remains irreplaceable.",
        keyTopics: [
          "Artificial Intelligence & Predictive Analytics in Workplaces",
          "Human Intuition, Empathy & Emotional Intelligence vs. AI",
          "Building Universally Inclusive Corporate Environments",
        ],
        keySpeakers: ["Ms. Candida Andrade Halgekar (Inclusion Leader, Accenture)", "LEADS Tech Ethics Mentors"],
        outcomes: [
          "Learned to balance AI data analytics with essential human skills like empathy & problem-solving",
          "Gained practical literacy in predictive analytics and assistive tech for inclusive workplaces",
        ],
      },
      {
        id: "catalyst-series-3",
        placeholderId: 446,
        title: "Catalyst Insight: Leadership Talk Series 3.0 — Breaking Down Barriers to Success",
        date: "September 2025",
        location: "RUAS Campus, Bengaluru",
        attendees: "250+ Young Entrepreneurs",
        photo: "/events/roundtable-exec.jpg",
        overview:
          "Featuring Ms. Iti Rawat (Founder, WEFT Foundation). Delivered transformational insights on overcoming systemic gender biases, navigating resource limitations, and building resilience based on the Red Dot Initiative.",
        keyTopics: [
          "Dismantling Systemic Gender Biases & Resource Limitations",
          "Building Supportive & Inclusive Entrepreneurial Ecosystems",
          "Personal Resilience & Value-Oriented Corporate Leadership",
        ],
        keySpeakers: ["Ms. Iti Rawat (Founder, WEFT Foundation)", "LEADS Diversity Leads"],
        outcomes: [
          "Developed actionable frameworks for identifying and dismantling systemic biases",
          "Cultivated personal leadership identities focused on emotional resilience and peer networks",
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
    photo: "/events/ph55.jpg",
    gallery: [
      "/events/ph55.jpg",
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
        photo: "/events/ph55.jpg",
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
    photo: "/events/ph55.jpg",
    gallery: [
      "/events/ph55.jpg",
      "/images/gallery/g1.webp",
      "/images/gallery/g4.webp",
      "/images/gallery/g7.webp",
      "/images/gallery/g14.webp",
    ],
    featured: true,
    description:
      "LEADS Outreach Programmes encompass off-campus experiential retreats, national policy symposia, institutional delegations, executive roundtables, and youth empowerment initiatives designed to connect classroom learning with real-world governance, industry leadership, and community impact.",
    seriesHighlights: [
      "Off-campus experiential retreats & adventure leadership challenges",
      "Educational & cultural delegations to national governance hubs",
      "Executive roundtables with BCIC, NHRD, FKCCI & Industry 4.0 leaders",
      "Academic symposia & deep-tech innovation conferences with IISc, ICSSR & Adelaide University",
    ],
    outcomes: [
      "3,500+ student delegates & beneficiaries engaged across 10 major outreach editions",
      "Strategic MOAs & industry-academic research partnerships established",
      "Comprehensive leadership competency certification across multi-campus cohorts",
    ],
    speakers: [
      "Padma Shri Dr. Prahlada Ramarao",
      "Prof. (Dr.) K. M. Sharath Kumar (Director, LEADS)",
      "Dr. Subhadeep Mukherjee (Head, LEADS)",
      "Prof. K. K. Raina (Hon. VC, RUAS)",
      "Shri Ramanan Ramanathan (Atal Innovation Mission)",
      "Ms. Malathi KS (Director, Mercer India)",
      "Sri Ullas Kamath & Dr. C. Somasekhara, IAS",
    ],
    editions: [
      {
        id: "vanguard-retreat-2026",
        placeholderId: 55,
        title: "Vanguard Leadership Retreat 2026: Experiential Team Dynamics",
        date: "January 2026",
        location: "RR Retreat, Bengaluru",
        attendees: "40 LEADS Council Members & Student Leaders",
        photo: "/events/ph55.jpg",
        overview:
          "An immersive off-campus experiential retreat bringing together LEADS student leaders to develop a strong leadership mindset, encourage teamwork through collaboration, and promote self-discovery around individual strengths and values. Features structured reflection sessions paired with adventure activities including swimming, high rope course balancing, archery, and tire obstacle challenges.",
        keyTopics: [
          "Conflict Resolution & Applied Cooperation Skills",
          "Personal Ethics, Purpose & Goal Articulation",
          "Outdoor High-Stress Team Trust & Adventure Drills",
        ],
        keySpeakers: [
          "LEADS Leadership Mentors",
          "Vanguard Field Expedition Trainers",
        ],
        outcomes: [
          "Students gained clarity on their personal vision, goals, and core values through guided reflective sessions distinct from recreational activities.",
          "Participants strengthened trust and interpersonal bonds through adventure-based team activities, directly supporting future coordination on LEADS initiatives.",
        ],
      },
      {
        id: "delhi-visit-2025",
        placeholderId: 561,
        title: "Educational & Cultural Visit to New Delhi",
        date: "September 3–6, 2025",
        location: "Rashtrapati Bhavan, iPHEX 2025, Supreme Court & PM Museum, New Delhi",
        attendees: "6 FMC MSRUAS Student Delegates",
        photo: "/images/gallery/g1.webp",
        overview:
          "Six students from the Faculty of Management & Commerce, MSRUAS, undertook a four-day educational and cultural visit to New Delhi. The delegation toured Rashtrapati Bhavan (Durbar Hall, Presidential diplomatic rooms, State Banquet Hall, tribal heritage exhibition), Akshardham Temple, Lotus Temple, the Supreme Court, and Pradhanmantri Sangrahalaya. They also engaged directly with international healthcare delegates at iPHEX 2025 and Pharma Med 2025 Expo at Bharat Mandapam.",
        keyTopics: [
          "Global Industry Exposure at Pharma Med & iPHEX 2025 (11th Edition)",
          "National Governance & Democratic Institutions Literacy (Rashtrapati Bhavan & Supreme Court)",
          "India's Diplomatic & Cultural Heritage Exploration",
        ],
        keySpeakers: [
          "PM Sangrahalaya & Presidential Guides",
          "iPHEX 2025 Healthcare Delegates",
          "FMC Academic Escorts",
        ],
        outcomes: [
          "Students gained global industry exposure across two major expos (Pharma Med & iPHEX 2025), building direct connections with international healthcare delegates.",
          "Participants developed a sharper sense of India's governance and heritage through first-hand access to Rashtrapati Bhavan, the Supreme Court, and the Prime Ministers' Museum.",
        ],
      },
      {
        id: "state-seminar-transformation-2025",
        placeholderId: 562,
        title: "9th State Level Seminar on Transformation for the Nation",
        date: "August 14, 2025",
        location: "RUAS Campus / Convention Center, Bengaluru",
        attendees: "350+ Student & Faculty Delegates",
        photo: "/images/gallery/g2.webp",
        overview:
          "Co-organised by Vishwamanava Yuva Vedike and Queen's Global Management Solutions, moderated by Dr. Madhurani Gowda across five sessions focused on personal transformation as the foundation of national progress. Featured keynotes on higher education's role in critical thinking by Sri Ullas Kamath, continuous self-reinvention by Dr. C. Somasekhara IAS, and citizen responsibility by Sri Mahesh Masal, along with a patriotism panel.",
        keyTopics: [
          "Personal Transformation as the Foundation of National Progress",
          "Higher Education's Role in Critical Thinking & Entrepreneurship",
          "Citizen Responsibility & Grassroots Social Development",
        ],
        keySpeakers: [
          "Sri Ullas Kamath",
          "Dr. C. Somasekhara, IAS",
          "Sri Mahesh Masal",
          "ACP Dr. Priyadarshini Sanikopp",
          "Dr. Varunmurthy (Rebuild India Foundation)",
        ],
        outcomes: [
          "Students gained direct exposure to national thought leaders, strengthening their understanding of self-leadership and national development.",
          "Participants were inspired to apply transformation principles toward social responsibility and nation-building.",
        ],
      },
      {
        id: "anvaya-innovation-summit-2026",
        placeholderId: 563,
        title: "Anvaya Innovation Summit 2026: Innovation for Impact",
        date: "January 22, 2026",
        location: "NIMHANS Convention Centre, Bengaluru",
        attendees: "25 LEADS Student Delegates & 500+ Innovation Leaders",
        photo: "/images/gallery/g4.webp",
        overview:
          "LEADS Next Gen Centre attended the Anvaya Innovation Summit 2026, structured across four tracks examining how innovation ecosystems transform through policy, corporate engagement, and academic leadership. Highlights included RUAS VC Prof. K. K. Raina's address on universities as innovation ecosystems, and witnessing the MOA signing between Vision Karnataka Foundation and Kishkinda University.",
        keyTopics: [
          "Innovation-Led Governance & Societal Outcomes",
          "Policy Frameworks & AI-Driven Business Rebirth",
          "Universities as Full Innovation & Research Ecosystems",
        ],
        keySpeakers: [
          "Prof. K. K. Raina (Hon. VC, RUAS)",
          "Vision Karnataka Foundation Leadership",
          "Kishkinda University Representatives",
        ],
        outcomes: [
          "Participants gained direct visibility into institutional partnership-building, witnessing the MOA signing as a live collaborative model for sustainable growth.",
          "Students engaged in cross-sectoral dialogue spanning policy, corporate, and academic perspectives, strengthening their understanding of inclusive innovation ecosystems.",
        ],
      },
      {
        id: "bcic-roundtable-generative-economy",
        placeholderId: 564,
        title: "BCIC Roundtable Discussion: Ushering the AI-Driven Industrial Era",
        date: "February 2026",
        location: "Dassault Systèmes, Bengaluru",
        attendees: "35 Manufacturing, Aerospace & Robotics Delegates",
        photo: "/images/gallery/g7.webp",
        overview:
          "Organized by the Bangalore Chamber of Industry and Commerce (BCIC) Expert Committee and hosted by Dassault Systèmes. Delegates analyzed digital twins and smart value chains, featuring an AI voice interface keynote by Chairman G. Prakash and discussions with tech leaders from Rolls Royce (IAMPL), Bosch, and ANSCER Robotics on Industry 4.0 readiness for local MSMEs.",
        keyTopics: [
          "Digital Twins & Smart Value Chain Integration",
          "AI-Driven Business Rebirth & Cost Pressure Management",
          "Industry 4.0 Readiness for Local MSMEs",
        ],
        keySpeakers: [
          "Chairman G. Prakash (BCIC Expert Committee)",
          "Rolls Royce (IAMPL) Technical Directors",
          "Bosch & ANSCER Robotics Tech Leads",
        ],
        outcomes: [
          "Delegates mapped actionable approaches to manage product complexity and time-to-market constraints using digital twinning.",
          "Strengthened structural networks between corporate tech providers and local MSMEs to accelerate AI integration.",
        ],
      },
      {
        id: "nhrd-thought-leadership-meet-2026",
        placeholderId: 565,
        title: "NHRD Thought Leadership Meet: Getting Market Benchmarking Right",
        date: "April 30, 2026",
        location: "SJIM's Loyola Auditorium, Bangalore",
        attendees: "120 HR Professionals & Student Delegates",
        photo: "/images/gallery/g8.webp",
        overview:
          "Attended by LEADS Next Gen Centre delegates at SJIM's Loyola Auditorium. Featured a pre-session networking hour giving students direct access to HR practitioners, followed by a keynote by Ms. Malathi KS (Director of Rewards Consulting, Mercer India) and career practitioners across Bosch, Nestlé, Volvo, Infosys, HCL, and Xerox on skill-based pay frameworks and Labour Code compliance.",
        keyTopics: [
          "Strategic Insight vs. Unquestioned Peer Group Benchmarking",
          "Three-Dimensional Skill-Based Pay Models (Availability, Criticality, Replaceability)",
          "New Labour Code 50% Basic-Wage Compliance Impact",
        ],
        keySpeakers: [
          "Ms. Malathi KS (Director, Mercer India)",
          "Bosch, Nestlé, Volvo & Infosys HR Executives",
        ],
        outcomes: [
          "Students gained practical insights into how compensation decisions influence attrition and business outcomes.",
          "Participants gained a practical evaluation checklist and a skill-based pay framework applicable beyond the classroom.",
        ],
      },
      {
        id: "bcic-ehs-sustainability-awards-2026",
        placeholderId: 566,
        title: "BCIC 3rd Annual EHS & Sustainability Awards: Advancing Net Zero",
        date: "March 2026",
        location: "Bengaluru Hotel & Convention Hub",
        attendees: "200+ Corporate ESG Leaders & LEADS Delegates",
        photo: "/images/gallery/g10.webp",
        overview:
          "LEADS delegates attended the 3rd Edition of BCIC Annual EHS & Sustainability Awards, evaluating 50+ applications across climate action, water management, circularity, employee diversity, and well-being. Featured presentations by TTK Prestige's Chief Manufacturing Officer on rooftop solar and water efficiency, and an IIM Bangalore presentation of the new India BRSR Index.",
        keyTopics: [
          "BRSR Reporting & ESG Rating Frameworks",
          "Scope 3 Supply Chain Engagement & Circular Economy",
          "Rooftop Solar, Water Efficiency & Decarbonization KPIs",
        ],
        keySpeakers: [
          "TTK Prestige Chief Manufacturing Officer",
          "IIM Bangalore BRSR Senior Researcher",
          "BCIC Sustainability Committee Chairs",
        ],
        outcomes: [
          "LEADS students gained exposure to frontiers of sustainable business practice, BRSR reporting, and ESG rating frameworks.",
          "Reinforced that sustainability is an embedded business discipline, not merely a compliance exercise.",
        ],
      },
      {
        id: "fkcci-global-msme-conclave-2026",
        placeholderId: 567,
        title: "FKCCI Global MSME Conclave 2026: Sankalp to Siddhi",
        date: "February 2026",
        location: "Tripuravasini, Palace Grounds, Bangalore",
        attendees: "500+ MSME Founders, Industry Delegates & LEADS Members",
        photo: "/images/gallery/g12.webp",
        overview:
          "Attended by LEADS Next Gen Centre members at Palace Grounds. The conclave aimed to strengthen MSMEs' contribution toward India's vision of a USD 10 trillion economy through technical sessions on cash-flow planning, Industry 4.0 automation, succession planning, IPO readiness, and Vendor Development Master Classes.",
        keyTopics: [
          "MSME Growth Roadmap for India's USD 10 Trillion Economy",
          "Vendor Development, IPO Readiness & Succession Planning",
          "Operations & Technology Automation for Manufacturing",
        ],
        keySpeakers: [
          "FKCCI Leadership & MSME State Officers",
          "Defense & Industrial Manufacturing Captains",
        ],
        outcomes: [
          "LEADS members gained practical insights into entrepreneurship, MSME business challenges, digital transformation, and export readiness.",
          "Gained exposure to vendor development, IPO readiness, and global supply chain integration.",
        ],
      },
      {
        id: "india-ai-impact-presummit-2026",
        placeholderId: 568,
        title: "Pre-Summit: India AI Impact Summit 2026",
        date: "February 2026",
        location: "Ramaiah Medical College Board Room, Bangalore",
        attendees: "80 Tech Founders, Healthcare Directors & Academic Heads",
        photo: "/images/gallery/g13.webp",
        overview:
          "Knowledge session held at Ramaiah Medical College Board Room across four thematic roundtables on Industry Skill Demand, Research & Innovation, National Security, and Academic Transformation. LEADS Centre Head Dr. Subhadeep Mukherjee, Dr. Pallabi Mund, and Dr. Jitendra Kumar convened Roundtable 1 on human-centric AI guidelines, with keynotes from SeedlingLabs, BHIVE, RaceHorse Consulting, KrutiBimb, East-West Group, and Alstom.",
        keyTopics: [
          "Human-Centric & Responsible AI Guidelines for Indian Industry",
          "AI Diagnostics & Healthcare Access Beyond Metropolitan Cities",
          "Algorithm-Monitoring Practices to Prevent Bias in HR Recruitment",
        ],
        keySpeakers: [
          "Dr. Subhadeep Mukherjee (Head LEADS)",
          "Dr. Pallabi Mund (LEADS Event Head)",
          "Ms. Shanti Kuropati (SeedlingLabs)",
          "Mr. Vijetha Shastry (BHIVE)",
          "Ms. Nikki Parihar (Alstom)",
        ],
        outcomes: [
          "Participants developed a shared understanding of AI-driven skill transitions and identified critical priority skill clusters for emerging roles.",
          "Generated specific, actionable policy inputs and strategic roadmaps for curriculum redesign to be taken forward at the main summit.",
        ],
      },
      {
        id: "deeptech-iisc-conference-2026",
        placeholderId: 569,
        title: "International Conference: Innovation & Entrepreneurship for Deep-Tech Startups",
        date: "January 20–22, 2026",
        location: "JN Tata Auditorium, IISc, Bengaluru",
        attendees: "621 Delegates & 46 Expert Speakers",
        photo: "/images/gallery/g14.webp",
        overview:
          "Jointly organised by Indian Institute of Science (IISc) and Adelaide University, sponsored by ICSSR. Brought together 621 delegates to examine deep-tech commercialization, IP frameworks, and entrepreneurial university models. Chaired by Padma Shri Dr. Prahlada Ramarao with Dr. Sujai Shivakumar as Chief Guest, featuring keynotes from Prof. Noel J. Lindsay, Prof. Rishikesha T. Krishnan, Prof. M. P. Gupta, Prof. Debabrata Das, Prof. Milind Atrey, Shri Ramanan Ramanathan, and Dr. Anshuman Awasthi.",
        keyTopics: [
          "Role of Entrepreneurial Universities in Translational Research & IP",
          "Funding Continuum: iDEX, CVC, Angel Investors & Government Grants",
          "Deep Learning, Automation & Digital Twins in Healthcare & Logistics",
        ],
        keySpeakers: [
          "Padma Shri Dr. Prahlada Ramarao",
          "Dr. Sujai Shivakumar (Chief Guest)",
          "Prof. Noel J. Lindsay (Adelaide University)",
          "Prof. Rishikesha T. Krishnan (IIMB)",
          "Shri Ramanan Ramanathan (Atal Innovation Mission)",
        ],
        outcomes: [
          "Students explored international innovation models and learned how India's strengths complement global technology ecosystems.",
          "Students developed practical skills in commercialization, IP positioning, TRL assessment, and pitch presentations across technical sessions.",
          "LEADS student coordinators managed event logistics while building professional networks with industry leaders and international academic institutions.",
        ],
      },
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
