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
  // SECTION 1: CONFERENCE / SEMINAR
  {
    id: "conference-seminar",
    placeholderId: 58,
    name: "National Academic Conferences & Symposia",
    seriesName: "Conference / Seminar",
    category: "Conclave",
    tagline: "Bridging Multidisciplinary Academic Research, Industry Quality Standards & Policy Governance",
    date: "Year-Round Symposia",
    location: "RUAS Campuses & Premier Convention Centers, India",
    attendees: "2,000+ Academic Delegates & Industry Researchers",
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
      "High-level national and international academic conferences, quality congresses, and policy symposia convened by LEADS Next Gen Centre to drive evidence-based policy, tax reforms, AI governance, and industry-academia synergy.",
    seriesHighlights: [
      "National conferences on GST 2.0, tax reforms & fiscal federalism with ICSSR",
      "International quality congresses with delegates from 20+ countries",
      "Executive symposiums on AI in management education with BMA & VTU",
      "Student boardroom battle crisis simulations during Pravrutti National Tech Fest",
    ],
    outcomes: [
      "Over 78 peer-reviewed research papers presented across national conferences",
      "Direct MOUs and policy recommendations submitted to tax and industry boards",
      "Frontline event management experience for LEADS student council delegates",
    ],
    speakers: [
      "Prof. (Dr.) K. M. Sharath Kumar (Director, LEADS)",
      "Dr. Subhadeep Mukherjee (Head, LEADS)",
      "Smt. Kajal Singh, IRS (Chief Commissioner of Central Tax)",
      "Mr. Prashant Gokhale (President, BCIC)",
      "Prof. Vidyashankar S (VC, VTU)",
      "Sri Pankaj Kumar Pandey, IAS",
    ],
    editions: [
      {
        id: "inauguration-plenary-2026",
        placeholderId: 581,
        title: "LEADS Next Gen Centre – Inauguration (Official Launch & Plenary Sessions)",
        date: "January 2026",
        location: "Ramaiah University Campus, Bengaluru",
        attendees: "300+ Dignitaries & Student Delegates",
        photo: "/images/gallery/g11.webp",
        overview:
          "Formally opened by Dr. C. N. Manjunath and Mr. Ramanan Ramanathan under the theme Sankalp Se Siddhi, the Bharat Lead Summit 2026 kicked off with a dedicated badging ceremony that officially inducted the core student committee. Featured strategic addresses by Prof. Dr. K. M. Sharath Kumar and Dr. Subhadeep Mukherjee, setting the stage for four plenary sessions centered on deep-tech, sustainable innovation, and leadership paradigms for Viksit Bharat 2047.",
        keyTopics: [
          "Individual Goal-Setting in Business Ecosystems",
          "Structured Thinking, Financial Literacy & Corporate Sustainability",
          "Global Leadership Trends, AI Governance & Capability Evaluations",
        ],
        keySpeakers: [
          "Dr. Kishore Rao (CEO, Aequs INFRA SEZ)",
          "Mr. Shaju Mangalam (Head & Director, FICCI Karnataka)",
          "Mr. Balvir Talwar (Former ED, BHEL)",
          "Dr. Charles Chow (Managing Director, East-West Group, Singapore)",
        ],
        outcomes: [
          "Empowered student committee with hands-on experience managing operational roadmaps and crisis problem-solving.",
          "Bridged academic theory with corporate reality across deep-tech, financial literacy, and cross-cultural competence.",
        ],
      },
      {
        id: "aims-regional-conference",
        placeholderId: 582,
        title: "AIMS South Zone Regional Conference: Emerging Trends in AI & Sustainability",
        date: "February 2026",
        location: "St. Joseph's College, Bangalore",
        attendees: "150 B-School Delegates",
        photo: "/images/gallery/g1.webp",
        overview:
          "A student delegation successfully represented their institution at the AIMS South Zone Regional Conference. Students actively sought out best practices to integrate disruptive technologies and sustainable corporate frameworks into their professional development through panel discussions with keynote experts from NASSCOM and IBM India.",
        keyTopics: [
          "AI's Current Market Impact & Expanding Strategic Role of GCCs",
          "Essential 21st-Century Skill Sets for Modern Management Graduates",
          "Connecting Classroom Learning with Evolving Corporate Strategies",
        ],
        keySpeakers: [
          "NASSCOM Senior Directors",
          "IBM India Executive Technology Mentors",
        ],
        outcomes: [
          "Provided practical insights into AI governance, sustainability, and Global Capability Centres (GCCs).",
          "Established strategic networking opportunities connecting delegates directly with regional academics and policy influencers.",
        ],
      },
      {
        id: "anq-congress-2025",
        placeholderId: 583,
        title: "ANQ Congress 2025: Quality Innovations Forging a Path to a Sustainable Future",
        date: "October 2025",
        location: "RUAS Convention Center, Bengaluru",
        attendees: "400+ International Delegates from 20+ Countries",
        photo: "/images/gallery/g2.webp",
        overview:
          "The LEADS Student Council provided critical frontline logistical and collaborative support for the international ANQ Congress 2025, hosted by the Indian Society for Quality (ISQ). Deployed across eight parallel presentation halls, students managed on-site registration, assisted session chairs, and facilitated high-level Q&A interactions across global research topics.",
        keyTopics: [
          "Sustainable Quality & Green Manufacturing Frameworks",
          "Digital Twin Models & AI-Driven Quality Management",
          "Managing Large-Scale International Congress Operations",
        ],
        keySpeakers: [
          "Dr. K. V. S. Rajkumar",
          "Dr. V. Swaminathan",
          "ISQ Governing Board Directors",
        ],
        outcomes: [
          "Gained hands-on experience in large-scale international event execution and professional hospitality across delegates from 20 countries.",
          "Exposed students to cutting-edge global research in sustainable manufacturing and modern digital transformation.",
        ],
      },
      {
        id: "pravrutti-boardroom-battles",
        placeholderId: 584,
        title: "Pravrutti – Boardroom Battles: High-Stakes Corporate Crisis Simulation",
        date: "November 2025",
        location: "RTC Campus, MSRUAS",
        attendees: "120 Management Competitors",
        photo: "/images/gallery/g3.webp",
        overview:
          "LEADS Next Gen Centre hosted Boardroom Battles, a flagship management competition during the Pravrutti 2025 National Tech Fest. Acting as corporate executives, students engaged in immersive business simulations to analyze corporate crises, formulate viable recovery strategies, and defend their decisions under intense time pressure before an expert judging panel.",
        keyTopics: [
          "High-Stakes Crisis Simulation & Financial Recovery Analysis",
          "Digital Transformation Pitching under Time Pressure",
          "End-to-End Event Development & Logistical Execution",
        ],
        keySpeakers: [
          "Mr. Moulik Vinod Gajjar (Senior Market Research Analyst, Zyoin Group)",
          "Dr. Praveen Sinha (Professor, Oxford College of Business Management)",
        ],
        outcomes: [
          "Strengthened critical thinking, financial analysis, and strategic communication through real-world corporate challenges.",
          "Provided a platform for professional feedback and executive leadership development under pressure.",
        ],
      },
      {
        id: "bma-symposium-2026",
        placeholderId: 585,
        title: "BMA Symposium: AI and the Future of Management Education & Practice",
        date: "March 2026",
        location: "KTPO, Bangalore",
        attendees: "250 Academic & Corporate Delegates",
        photo: "/images/gallery/g4.webp",
        overview:
          "LEADS representatives attended the BMA symposium addressing the gap between academic curricula and tech disruption. The delegation joined discussions with dignitaries including Prof. Vidyashankar S (VTU), Mr. Ashwin Hegde Karkala (Cyware), and Sri Pankaj Kumar Pandey, IAS, emphasizing human-in-the-loop skills alongside AI tools.",
        keyTopics: [
          "Generative AI's Strategic Application Across Business Functions",
          "Prioritizing Human-in-the-Loop Competencies: Emotional Intelligence & Ethics",
          "Aligning University Curricula with Tech-Driven Industry Expectations",
        ],
        keySpeakers: [
          "Prof. Vidyashankar S (Vice Chancellor, VTU)",
          "Mr. Ashwin Hegde Karkala (Cyware)",
          "Sri Pankaj Kumar Pandey, IAS",
        ],
        outcomes: [
          "Developed a sophisticated understanding of generative AI's strategic application across corporate management functions.",
          "Established clear recruiter insights on essential human capabilities required alongside technical AI tools.",
        ],
      },
      {
        id: "icssr-gst-reforms-2026",
        placeholderId: 586,
        title: "ICSSR Two-Day National Conference: Next-Generation GST Reforms 2.0",
        date: "March 2026",
        location: "RUAS Campus Auditorium, Bengaluru",
        attendees: "350 Policy Scholars, Tax Administrators & Students",
        photo: "/images/gallery/g5.webp",
        overview:
          "Co-hosted with the Indian Council for Social Science Research (ICSSR), this national conference brought together policymakers, tax administrators, researchers, and students to discuss India's evolving GST framework under the vision of One Nation, One Tax. Featured keynotes by IRS Chief Commissioner Smt. Kajal Singh, BCIC President Prashant Gokhale, and VC Prof. K.K. Raina, alongside 78 research paper presentations.",
        keyTopics: [
          "AI-Driven Tax Administration, Fiscal Federalism & Rate Rationalization",
          "GST Reforms Impact on MSMEs & Ease of Doing Business",
          "RegTech & Automated Compliance Systems in Digital Taxation",
        ],
        keySpeakers: [
          "Smt. Kajal Singh, IRS (Chief Commissioner of Central Tax)",
          "Mr. Prashant Gokhale (President, BCIC)",
          "Prof. K.K. Raina (Vice-Chancellor, RUAS)",
        ],
        outcomes: [
          "Developed deep working knowledge of India's dual GST architecture, fiscal federalism, and legislative literacy.",
          "Gained practical RegTech insights into machine learning and automated compliance systems for digital tax administration.",
        ],
      },
    ],
  },

  // SECTION 2: CATALYST LEADERSHIP TALK SERIES
  {
    id: "catalyst-series",
    placeholderId: 44,
    name: "Catalyst Leadership Talk Series",
    seriesName: "Catalyst Leadership Talk Series",
    category: "Workshop",
    tagline: "Transforming Technical Expertise into High-Impact Strategic Leadership & Executive Capability",
    date: "Monthly Cohorts & Masterclasses",
    location: "LEADS Centre Campus & Partner B-Schools, Bengaluru",
    attendees: "2,500+ Participants Across Cohorts",
    badgeColor: "bg-[#9C1256]/20 text-white border-[#DE3F11]/40",
    logoSvg: "zap",
    photo: "/events/catalyst-workshop.jpg",
    gallery: [
      "/events/catalyst-workshop.jpg",
      "/images/gallery/g3.webp",
      "/images/gallery/g5.webp",
    ],
    featured: true,
    description:
      "The LEADS Next Gen Centre's flagship talk series and capacity-building masterclass series. Catalyst brings corporate CEOs, diversity leaders, talent recruiters, data scientists, and spiritual mentors to deliver interactive sessions on non-technical leadership skills.",
    seriesHighlights: [
      "Simulated real-time crisis leadership drills & personal resilience toolkits",
      "Executive 360-degree non-technical capability mapping",
      "Aptitude, lateral thinking & cognitive skills mastery for modern hiring",
      "Direct 1-on-1 mentorship with corporate CEOs, CHROs, and institutional deans",
    ],
    outcomes: [
      "Personalized 360 leadership competency baseline certification",
      "Mastery in high-stakes negotiations and board-level persuasion",
      "Cross-functional communication frameworks for multidisciplinary teams",
      "Active enrollment in the LEADS Alumni Leadership Exchange",
    ],
    speakers: [
      "Ms. Iti Rawat (Founder, WEFT Foundation)",
      "Ms. Candida Andrade Halgekar (Accenture Inclusion Leader)",
      "Mr. Hemanth Kumar V (CEO, Bharat Careerconnect)",
      "Mr. Ananth Mallya (CEO, Quan Tech Origin)",
      "Mr. Siddhartha Saha (Co-Founder, DocFyn)",
      "Padmashree Dr. Vijayalakshmi Deshmane",
    ],
    editions: [
      {
        id: "catalyst-series-3",
        placeholderId: 446,
        title: "Catalyst Insight: Leadership Talk Series 3.0 — Breaking Down Barriers to Success",
        date: "September 2025",
        location: "RUAS Campus, Bengaluru",
        attendees: "250+ Student Delegates",
        photo: "/images/gallery/g8.webp",
        overview:
          "Featuring Ms. Iti Rawat, visionary founder of WEFT (Women Entrepreneurship for Transformation) Foundation. Delivered transformational insights on overcoming systemic gender biases, navigating resource limitations, and building resilience based on her experience with the Red Dot Initiative, encouraging students to build inclusive corporate ecosystems.",
        keyTopics: [
          "Dismantling Systemic Gender Biases & Resource Limitations",
          "Building Supportive & Inclusive Entrepreneurial Ecosystems",
          "Personal Resilience & Value-Oriented Corporate Leadership",
        ],
        keySpeakers: [
          "Ms. Iti Rawat (Founder, WEFT Foundation)",
          "LEADS Diversity Committee Leads",
        ],
        outcomes: [
          "Developed actionable frameworks for identifying and dismantling systemic gender biases within student organizations and future workplaces.",
          "Cultivated personal leadership identities focused on emotional resilience and supportive peer networks.",
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
          "Featuring Ms. Candida Andrade Halgekar, Inclusion and Diversity Leader at Accenture. Delivered a profound exploration of how artificial intelligence is transforming conventional leadership paradigms, emphasizing that AI cannot replace essential human capabilities like intuition, emotional intelligence, and empathy.",
        keyTopics: [
          "Artificial Intelligence & Predictive Analytics in Workplaces",
          "Human Intuition, Empathy & Emotional Intelligence vs. AI",
          "Building Universally Inclusive Corporate Environments",
        ],
        keySpeakers: [
          "Ms. Candida Andrade Halgekar (Inclusion Leader, Accenture)",
          "LEADS Tech Ethics Mentors",
        ],
        outcomes: [
          "Learned to balance AI data analytics with essential human skills like empathy & problem-solving.",
          "Gained practical literacy in predictive analytics and assistive tech for inclusive workplaces.",
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
          "Featuring Mr. Hemanth Kumar V, CEO of Bharat Careerconnect Solutions LLP. Provided an inspiring roadmap for bridging the gap between academic learning and corporate expectations, highlighting professional adaptability, corporate communication, and ethical leadership.",
        keyTopics: [
          "Bridging Academic Learning and Corporate Industry Benchmarks",
          "Contemporary Corporate Communication & Professional Ethics",
          "Pursuing Real-World Internships & Problem-Solving Challenges",
        ],
        keySpeakers: [
          "Mr. Hemanth Kumar V (CEO, Bharat Careerconnect Solutions LLP)",
          "Career Advisory Board",
        ],
        outcomes: [
          "Developed concrete personal upskilling and career transition roadmaps.",
          "Established deep understanding of corporate ethics protocols and workspace adaptability.",
        ],
      },
      {
        id: "energy-refresher-program-edition",
        placeholderId: 5611,
        title: "Energy Refresher Program (Ministry of Power & FICCI)",
        date: "Special Edition 2026",
        location: "Convention Center & Ministry Outposts, New Delhi / Bengaluru",
        attendees: "200+ Power Sector Executives & Grid Directors",
        photo: "/images/gallery/g8.webp",
        overview:
          "Organized by the Ministry of Power, Government of India, in strategic collaboration with FICCI and LEADS Next Gen Centre. An intensive executive refresher programme training power utility leaders, grid managers, and policy professionals on clean energy transition, smart grid resilience, and modern utility stewardship.",
        keyTopics: [
          "Clean Energy Transition & Smart Grid Resilience",
          "Power Sector Regulatory Frameworks & Efficiency Metrics",
          "Executive Stewardship in Utility Management & ESG Integration",
        ],
        keySpeakers: [
          "Ministry of Power Senior Officials",
          "FICCI Energy Committee Directors",
          "LEADS Policy & Governance Mentors",
        ],
        outcomes: [
          "Upskilled power sector executives on modern grid management and renewable integration.",
          "Strengthened public-private policy dialogue between Ministry of Power and FICCI energy leadership.",
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
          "Featuring Mr. Ananth Mallya, CEO of Quan Tech Origin. Illuminated corporate hiring shifts from rigid role-based evaluation to dynamic capability-based testing via live mock aptitude simulations and real-time recruiter feedback.",
        keyTopics: [
          "Shift from Role-Based Hiring to Capability-Based Evaluation",
          "Aptitude, Lateral Thinking & Cognitive Skills Mastery",
          "Positioning Profiles using AI Tools & Regional Innovation Platforms",
        ],
        keySpeakers: [
          "Mr. Ananth Mallya (CEO, Quan Tech Origin)",
          "LEADS Capability Mentors",
        ],
        outcomes: [
          "Built practical competence in modern aptitude assessments through live mock simulations.",
          "Learned profile positioning showcasing critical thinking and technology adaptability.",
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
          "Organized in collaboration with IEEE Bangalore Section & IEEE SB RUAS, featuring Prof. Udaya Raghunath Birje (Co-Founder & Director, ThinkStreet Technologies). A multi-dimensional workshop exploring sovereign tech in AI, semiconductors, and quantum missions.",
        keyTopics: [
          "Catalysing Sovereign Tech: Semiconductors, AI & Quantum Missions",
          "Strategic Awareness for India's Viksit Bharat 2047 Vision",
          "Creative Problem-Solving & Emotional Intelligence in Deep-Tech",
        ],
        keySpeakers: [
          "Prof. Udaya Raghunath Birje (ThinkStreet Technologies)",
          "IEEE SB RUAS Mentors",
        ],
        outcomes: [
          "Established deep conceptual literacy of India's sovereign technology missions.",
          "Initiated academic-industry venture pipelines transitioning classroom research to startups.",
        ],
      },
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
        keySpeakers: [
          "Mr. Siddhartha Saha (Co-Founder, DocFyn)",
          "FMC Management Mentors",
        ],
        outcomes: [
          "Gained practical skills in multi-channel search visibility and consumer digital journeys.",
          "Mastered frameworks balancing algorithmic automation with privacy and human-centered ethics.",
        ],
      },
      {
        id: "python-data-science-talk",
        placeholderId: 447,
        title: "Expert Talk: Exploring Data Science with Python — An Algorithmic Journey",
        date: "July 2026",
        location: "Presidency / RUAS Campus",
        attendees: "200+ Tech & Business Students",
        photo: "/images/gallery/g9.webp",
        overview:
          "Featuring Dr. Rangegowda R from Presidency Business School. The intensive session demystified supervised learning, predictive regression, and advanced classification, illustrating how data-driven insights actively transform modern market forecasting.",
        keyTopics: [
          "Algorithmic Modeling Proficiency: Regression & Classification",
          "Data-Driven Strategic Decision Making in Tech Entrepreneurship",
          "Optimizing Operational Workflows with Machine Learning",
        ],
        keySpeakers: [
          "Dr. Rangegowda R (Presidency Business School)",
          "LEADS Analytics Mentors",
        ],
        outcomes: [
          "Students gained hands-on experience in building and analyzing predictive models using Python.",
          "Learned to translate data insights into actionable business decisions.",
        ],
      },
      {
        id: "national-leadership-day-2026",
        placeholderId: 448,
        title: "National Leadership Day: Badging Ceremony & Distinguished Guest Talks",
        date: "August 2026",
        location: "RUAS Auditorium, Bengaluru",
        attendees: "400+ Students, Advisory Board & Faculty",
        photo: "/images/gallery/g10.webp",
        overview:
          "A landmark celebratory event marking National Leadership Day. Highlighted by a formal Badging Ceremony that officially recognized student committee members, graced by Chief Guest Dr. Vijayalakshmi Deshmane (Padmashree Awardee, Former Director Kidwai Memorial Institute of Oncology).",
        keyTopics: [
          "Values-Based Compassionate Leadership in High-Stakes Environments",
          "Corporate-Student Mentorship & Strategic Foresight",
          "Establishing Accountability & Lifelong Dedication to Ethical Stewardship",
        ],
        keySpeakers: [
          "Dr. Vijayalakshmi Deshmane (Padmashree Awardee)",
          "Mr. Kumar Ravi (Senior VP, BCIC Karnataka)",
          "Dr. Naganagouda S J (Honorary Secretary, NHRD Bengaluru)",
        ],
        outcomes: [
          "Successfully inducted and badged advisory and core student council members.",
          "Enhanced student motivation and established strong professional networks with high-profile corporate leaders.",
        ],
      },
      {
        id: "case-cracker-nmc-2026",
        placeholderId: 449,
        title: "Case Cracker 1.0: NMC Healthcare's Billion-Dollar Secret — Forensic Audit",
        date: "September 2026",
        location: "RUAS FMC Campus, Bengaluru",
        attendees: "180 Finance & Management Students",
        photo: "/images/gallery/g12.webp",
        overview:
          "In collaboration with FMC RUAS, an immersive forensic investigation dissecting the financial collapse of NMC Healthcare. Dissected founder B.R. Shetty's concealed off-book debt ($6.6 billion), dual-ledger accounting frauds, and external auditing failures.",
        keyTopics: [
          "Forensic Auditing & Red-Flag Analysis: Off-Balance Sheet Debt",
          "Governance Deficits & Auditor Independence Literacy",
          "Non-Negotiable Role of Independent Internal Audit Controls",
        ],
        keySpeakers: [
          "FMC Forensic Accounting Faculty",
          "LEADS Finance Mentors",
        ],
        outcomes: [
          "Developed actionable competence in identifying unrecorded liabilities and duplicate ledger systems.",
          "Acquired professional-grade skepticism and evaluative audit frameworks.",
        ],
      },
      {
        id: "mindful-leadership-hei-workshop",
        placeholderId: 450,
        title: "International Workshop: Mindful Leadership and Well-Being in HEIs",
        date: "October 2026",
        location: "RUAS Convention Center, Bengaluru",
        attendees: "150 Academic Leaders & Administrators",
        photo: "/images/gallery/g13.webp",
        overview:
          "Organized with FMC RUAS, featuring world-renowned spiritual consultant Swami Parameshwar Das Maharaj Ph.D in Organizational Psychology. Introduced academic leaders to transitioning from reactive management styles to conscious, compassionate leadership.",
        keyTopics: [
          "Vedic Spiritual Principles & Contemporary Organizational Psychology",
          "Emotional Literacy, Deep Breathwork & Burnout Prevention",
          "Building Psychologically Safe & Empathetic Workplaces",
        ],
        keySpeakers: [
          "Swami Parameshwar Das Maharaj Ph.D",
          "FMC Academic Deans",
        ],
        outcomes: [
          "Mastered practical mindfulness and self-reflection techniques to manage stress under pressure.",
          "Developed compassionate communication skills to foster psychological safety within teams.",
        ],
      },
      {
        id: "case-craft-fdp-5",
        placeholderId: 451,
        title: "Case Craft 5.0 — Five-Day FDP: Reimagining Management Education",
        date: "November 2026",
        location: "Center for Professional Development, MSRUAS",
        attendees: "30+ Educators & Industry Professionals Across India",
        photo: "/images/gallery/g14.webp",
        overview:
          "In strategic partnership with CPD and LEADS, an intensive 5-day Faculty Development Programme dedicated to redefining business education. Trained academic educators in advanced case study construction, NBA/NAAC accreditation frameworks, and AI-integrated case pedagogy.",
        keyTopics: [
          "Advanced Case Study Construction & Classroom Facilitation",
          "Integrating AI & Data Analytics into Case Pedagogy",
          "NBA / NAAC Outcome-Based Pedagogical Assessments",
        ],
        keySpeakers: [
          "CPD Master Trainers",
          "LEADS Pedagogical Fellows",
        ],
        outcomes: [
          "Equipped faculty to transform classrooms into technology-ready hubs of critical thinking.",
          "Mastered contemporary analytical frameworks solving business cases integrated with AI data.",
        ],
      },
    ],
  },

  // SECTION 3: FIRESIDE TALKS - GLOBAL TO LOCAL CHANGEMAKERS
  {
    id: "fireside-series",
    placeholderId: 51,
    name: "Fireside Talks: Global to Local Changemakers",
    seriesName: "Fireside Talks Series",
    category: "Roundtable",
    tagline: "Connecting International Industry Leaders with Grassroots Social Transformation & Local Economic Impact",
    date: "Bi-Annual Sessions",
    location: "RUAS Executive Chamber, Bengaluru",
    attendees: "300+ Industry Executives & Student Leaders",
    badgeColor: "bg-[#9C1256]/20 text-white border-[#DE3F11]/40",
    logoSvg: "compass",
    photo: "/events/roundtable-exec.jpg",
    gallery: [
      "/events/roundtable-exec.jpg",
      "/images/gallery/g7.webp",
    ],
    featured: true,
    description:
      "High-level interactive dialogues bridging global tech and corporate experience with local grassroots execution. Features veteran defense officers, Silicon Valley tech leaders, agricultural scientists, and biotech pioneers.",
    seriesHighlights: [
      "Biotechnology, AI & agricultural genomics for regional job creation",
      "Military-to-defense corporate career transitions & resilience",
      "Assistive technologies driving scalable national transformation",
      "Translating international engineering expertise into local market solutions",
    ],
    outcomes: [
      "Interdisciplinary innovation exposure bridging tech, agriculture & genomics",
      "Adaptive leadership toolkits for student delegates",
      "Direct mentorship connections with global-to-local changemakers",
    ],
    speakers: [
      "Ms. Padmaja Narsipur",
      "Dr. Malali Gowda",
      "Mr. Ramu Muthangi",
      "Maj. Arun Sreedharan (Retd.)",
    ],
    editions: [
      {
        id: "fireside-changemakers-2026",
        placeholderId: 511,
        title: "Fireside Talk: Global to Local Changemakers — Driving Sustainable Grassroots Transformation",
        date: "December 2026",
        location: "RUAS Executive Chamber, Bengaluru",
        attendees: "180 Student Leaders & Faculty Delegates",
        photo: "/events/roundtable-exec.jpg",
        overview:
          "Hosted in collaboration with FMC MSRUAS, focusing on global-to-local changemakers driving sustainable grassroots transformation. Featuring a distinguished panel—Ms. Padmaja Narsipur, Dr. Malali Gowda, Mr. Ramu Muthangi, and Maj. Arun Sreedharan (Retd.)—sharing personal evolutionary career pivots.",
        keyTopics: [
          "Convergence of Biotech, AI & Agricultural Genomics for Local Job Creation",
          "Military-to-Defence Corporate Transitions & Resilience under Crisis",
          "Assistive Technologies for Scalable National Infrastructure",
        ],
        keySpeakers: [
          "Ms. Padmaja Narsipur",
          "Dr. Malali Gowda",
          "Mr. Ramu Muthangi",
          "Maj. Arun Sreedharan (Retd.)",
        ],
        outcomes: [
          "Gained immense clarity on the transformative role of AI and robotics in reshaping future global employment structures.",
          "Learned practical lessons on resilient career growth and adaptive leadership from real-world professional journeys.",
        ],
      },
    ],
  },

  // SECTION 4: SUSTAINABILITY EVENTS & COMMUNITY IMPACT
  {
    id: "sustainability-community",
    placeholderId: 56,
    name: "Sustainability Events & Community Impact",
    seriesName: "Sustainability & Social Impact",
    category: "Workshop",
    tagline: "Empowering Compassionate Leadership Through Grassroots Community Service & ESG Action",
    date: "Ongoing Field Missions",
    location: "Janani Sevashrama & Regional Outposts, Karnataka",
    attendees: "500+ Community Beneficiaries & Volunteers",
    badgeColor: "bg-[#9C1256]/20 text-white border-[#DE3F11]/40",
    logoSvg: "users",
    photo: "/images/gallery/g3.webp",
    gallery: [
      "/images/gallery/g3.webp",
      "/images/gallery/g8.webp",
    ],
    featured: true,
    description:
      "Field initiatives connecting student leadership with compassionate social service, educational aid, resource procurement, and environmental sustainability.",
    seriesHighlights: [
      "Leadership Green Circle NGO visits & educational kit distribution",
      "Interactive social games and teamwork building for underprivileged children",
      "Hands-on project management, resource procurement & event logistics",
      "Reinforcing institutional commitment to selfless community upliftment",
    ],
    outcomes: [
      "Hands-on project management proficiency for student council members",
      "Direct material and educational aid provided to regional orphanages and schools",
      "Long-term community service framework established under LEADS Green Circle",
    ],
    speakers: [
      "LEADS Green Circle Student Coordinators",
      "Janani Sevashrama Directors",
      "FMC Social Impact Mentors",
    ],
    editions: [
      {
        id: "janani-sevashrama-outreach",
        placeholderId: 5610,
        title: "Leadership Green Circle: NGO Outreach At JananiSevashrama",
        date: "October 2025",
        location: "Janani Sevashrama, Bengaluru",
        attendees: "28 Children Beneficiaries & 20 Student Volunteers",
        photo: "/images/gallery/g3.webp",
        overview:
          "The LEADS Student Council executed a transformative community outreach initiative at Janani Sevashrama. Powered by FMC RUAS, the team engaged 28 children in structured recreational activities (Freeze Dance, Balloon Balance, Chain Reaction) while managing full-scale procurement and distribution of educational supplies (notebooks, stationery, treats).",
        keyTopics: [
          "Hands-On Resource Procurement & Activity Design",
          "Compassionate Social Leadership & Community Upliftment",
          "Teamwork & Joyful Engagement for Child Development",
        ],
        keySpeakers: [
          "LEADS Student Council Officers",
          "Janani Sevashrama Management",
        ],
        outcomes: [
          "Developed hands-on project management proficiency, independently coordinating resource procurement and activity design.",
          "Strengthened leadership skills by applying classroom learning to deliver purpose-driven community initiatives.",
        ],
      },
    ],
  },

  // SECTION 5: OUTREACH PROGRAMMES
  {
    id: "leads-outreach",
    placeholderId: 50,
    name: "LEADS Outreach Activities & Field Initiatives",
    seriesName: "Outreach Programmes",
    category: "Workshop",
    tagline: "Off-Campus Experiential Retreats, National Industry Symposia & Delegations",
    date: "Year-Round Expeditions & Delegations",
    location: "Rashtrapati Bhavan Delhi, NIMHANS, Palace Grounds, RR Retreat, Bengaluru",
    attendees: "3,500+ Delegates & Field Participants",
    badgeColor: "bg-[#9C1256]/20 text-white border-[#DE3F11]/40",
    logoSvg: "compass",
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
      "Off-campus experiential retreats & outdoor adventure leadership challenges",
      "Educational & cultural delegations to national governance hubs in New Delhi",
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
    ],
  },

  // SECTION 6: BHARAT LEAD SUMMIT 2026
  {
    id: "bharat-lead-summit-2026",
    placeholderId: 54,
    name: "Bharat LEAD Summit 2026",
    seriesName: "Bharat LEAD Summit 2026",
    category: "Summit",
    tagline: "The Stage for Sustainable Leadership and Entrepreneurship: Transforming Vision towards Viksit Bharat 2047",
    date: "April 2026 Flagship Summit",
    location: "RUAS FMC Campus & Council Hall, Bengaluru",
    attendees: "1,000+ Members, Union Dignitaries, CEOs & Student Leaders",
    badgeColor: "bg-[#9C1256]/20 text-white border-[#DE3F11]/40",
    logoSvg: "star",
    photo: "/events/bharath-summit.jpg",
    gallery: [
      "/events/bharath-summit.jpg",
      "/images/gallery/g6.webp",
      "/images/gallery/g8.webp",
    ],
    featured: true,
    description:
      "The pinnacle year-end national summit convened by LEADS Next Gen Centre - MSRUAS. Bringing together Members of Parliament, Atal Innovation Mission directors, unicorn founders, and academic deans across two days of panels, workshops, cultural performances, and valedictory awards.",
    seriesHighlights: [
      "Inaugural address by Dr. C. N. Manjunath (MP & Cardiologist) and Shri Ramanan Ramanathan",
      "Deep-tech revolution & sustainable innovation panels with industry VPs",
      "Hands-on startup pitching & CSR strategic leadership workshops",
      "Valedictory ceremony, report reading & national press coverage across major dailies",
    ],
    outcomes: [
      "National platform for dialogue on leadership, innovation, and sustainability",
      "Comprehensive annual report release & student council awards",
      "Widespread media coverage in South India Times & Business Standard",
    ],
    speakers: [
      "Dr. C. N. Manjunath (Member of Parliament)",
      "Shri Ramanan Ramanathan (Former Mission Director, AIM)",
      "Prof. (Dr.) K. M. Sharath Kumar (Director, LEADS)",
      "Dr. Subhadeep Mukherjee (Head, LEADS)",
      "Prof. K. K. Raina (Hon. Vice Chancellor, RUAS)",
      "Dr. Pallabi Mund (Centre Head / Event Head, LEADS)",
    ],
    editions: [
      {
        id: "bls-inauguration-2026",
        placeholderId: 541,
        title: "Bharat LEAD Summit 2026: Inauguration & Opening Keynotes",
        date: "April 2026",
        location: "RUAS Council Hall, Bengaluru",
        attendees: "600+ Dignitaries & Delegates",
        photo: "/events/bharath-summit.jpg",
        overview:
          "The summit opened with a formal welcome by Prof. Rashmi R, followed by Dean Prof. Dr. K. M. Sharath Kumar's address framing leadership as the force that resolves institutional friction (referencing Peter Drucker, Elon Musk, Vijay Govindarajan). LEADS Head Dr. Subhadeep Mukherjee set the philosophical foundation with Sankalp Se Siddhi. Guest of Honour Shri Ramanan Ramanathan spoke on India's demographic dividend (MANAV doctrine), Chief Guest Dr. C. N. Manjunath MP detailed the '5 D's' and '5 I's', and VC Prof. K. K. Raina tied NEP 2020 alignment.",
        keyTopics: [
          "Sankalp Se Siddhi: Transforming Consumer to Creator, Job Seeker to Job Creator",
          "5 D's (Demography, Democracy, Diversity, Digital, Diaspora) & 5 I's Framework",
          "MANAV Doctrine for Ethical AI & NEP 2020 Specialization Alignment",
        ],
        keySpeakers: [
          "Dr. C. N. Manjunath (Member of Parliament)",
          "Shri Ramanan Ramanathan (Former Mission Director, AIM)",
          "Prof. (Dr.) K. M. Sharath Kumar (Director, LEADS)",
          "Dr. Subhadeep Mukherjee (Head, LEADS)",
          "Prof. K. K. Raina (Hon. VC, RUAS)",
          "Dr. Pallabi Mund (Centre Head / Event Head, LEADS)",
        ],
        outcomes: [
          "Established a national platform for dialogue on leadership, innovation, and sustainability.",
          "Secured institutional commitment to transition students from passive learners to active problem solvers.",
        ],
      },
      {
        id: "bls-day1-deeptech-panel",
        placeholderId: 542,
        title: "Day 1 Panel: Leading the Deep-Tech Revolution",
        date: "April 2026",
        location: "RUAS Council Hall, Bengaluru",
        attendees: "300 Delegates",
        photo: "/images/gallery/g6.webp",
        overview:
          "Explored India's transition from Digital India toward a deep-tech-driven economy, framing discussions around robotics, indigenous tech, and AI infrastructure. Dr. Abhay Tiwari distinguished deep technology from conventional startups, Mr. Nishant Niranjan addressed founder patience in IP development, and Ms. Susmita Roy identified four core startup challenges from lab to market.",
        keyTopics: [
          "Scientific Complexity & Long Development Cycles vs. Conventional Startups",
          "Patient Leadership & Balancing Short-Term Commercial Outcomes with IP",
          "Infrastructure & Capital Intensity in Deep-Tech Sector Transition",
        ],
        keySpeakers: [
          "Dr. Abhay Tiwari",
          "Mr. Nishant Niranjan",
          "Ms. Susmita Roy",
        ],
        outcomes: [
          "Agreed that India needs increased investment, patient execution, and strong experimentation ecosystems.",
          "Delineated proof-of-concept demonstrations from market deployment roadmaps.",
        ],
      },
      {
        id: "bls-day1-sustainability-fireside",
        placeholderId: 543,
        title: "Day 1 Fireside Chat: Leadership for Sustainable Innovation & Entrepreneurship",
        date: "April 2026",
        location: "RUAS Council Hall, Bengaluru",
        attendees: "250 Delegates",
        photo: "/images/gallery/g7.webp",
        overview:
          "Moderated by Dr. Pallabi Mund, bringing together Dr. Roy (RBC), Ms. Padmaja Narsipur (Adeptic Creative Labs), and Mr. Ram Kumar Musunuru (FYB Technologies). Dr. Roy noted that nearly 80% of startups fail from a lack of clarity on long-term differentiation, while Mr. Musunuru framed sustainability as efficient resource utilization.",
        keyTopics: [
          "Solving Local Problems Before Scaling Globally",
          "AI's Dual Nature & Integrating Strong Process Differentiation",
          "Clean Tech, ESG & Energy Systems Startup Opportunities",
        ],
        keySpeakers: [
          "Dr. Pallabi Mund (Moderator)",
          "Dr. Roy (RBC)",
          "Ms. Padmaja Narsipur (Adeptic Creative Labs)",
          "Mr. Ram Kumar Musunuru (FYB Technologies)",
        ],
        outcomes: [
          "Emphasized that local problems must be solved before attempting global scale.",
          "Provided actionable startup strategies in clean technology and ESG systems.",
        ],
      },
      {
        id: "bls-day1-pitch-workshop",
        placeholderId: 544,
        title: "Day 1 Workshop: From Idea to Investment — Mastering Startup Pitching & Growth",
        date: "April 2026",
        location: "RUAS Innovation Suite, Bengaluru",
        attendees: "150 Founders & Student Innovators",
        photo: "/images/gallery/g8.webp",
        overview:
          "Led by Mr. Sandeep Ohri and Ms. Shagun Ohri (Engram). This hands-on session pushed participants to leave with a preliminary pitch deck blueprint. The workshop centered on the distinction between an idea and a business differentiation, customer clarity, and value creation.",
        keyTopics: [
          "Painkiller vs. Vitamin Framework for Evaluating Startup Opportunities",
          "Customer Clarity, Value Creation & Market Validation",
          "Navigating Operational Frustrations in Venture Building",
        ],
        keySpeakers: [
          "Mr. Sandeep Ohri (Engram)",
          "Ms. Shagun Ohri (Engram)",
        ],
        outcomes: [
          "Equipped student founders with a structured pitch deck blueprint.",
          "Trained participants to evaluate business ideas based on problem urgency and customer willingness to pay.",
        ],
      },
      {
        id: "bls-day1-cultural-programme",
        placeholderId: 545,
        title: "Day 1 Cultural Programme: Bharatanatyam & Heritage Celebration",
        date: "April 2026",
        location: "RUAS Auditorium, Bengaluru",
        attendees: "500 Delegates & Guests",
        photo: "/images/gallery/g9.webp",
        overview:
          "Day 1 closed with a vibrant cultural programme featuring captivating Bharatanatyam performances celebrating India's heritage. Coordinated by LEADS Next Gen Core Committee members Nimisha K and Shreesha N, offering delegates and dignitaries an engaging, refreshing interlude.",
        keyTopics: [
          "Translating Day's Leadership Themes into Movement & Art",
          "Fostering Leaders Who Are Technically Equipped & Culturally Rooted",
          "Student Council Cultural Event Management",
        ],
        keySpeakers: [
          "Nimisha K (LEADS Core Committee)",
          "Shreesha N (LEADS Core Committee)",
        ],
        outcomes: [
          "Strengthened summit vision of fostering future leaders who are both technically equipped and culturally rooted.",
        ],
      },
      {
        id: "bls-day2-emerging-tech-talk",
        placeholderId: 546,
        title: "Day 2 Expert Talk: Emerging Technologies & Leadership Shaping Future Innovation",
        date: "April 2026",
        location: "RUAS Council Hall, Bengaluru",
        attendees: "350 Delegates",
        photo: "/images/gallery/g10.webp",
        overview:
          "Dr. Muthukumarswamy DPK (CEO, Krutibimb) opened Day 2 describing Krutibimb as a bootstrapped innovation practice combining consulting, service delivery, and startup incubation. Surveyed IoT, wearables, clean tech, bio-health systems, photonics, 3D/4D bio-printing, and neuromorphic chips.",
        keyTopics: [
          "Emerging vs. Deep Technologies: Industrial Applications vs. Foundational Discovery",
          "Circular Economy Principles in Sustainable Electronics & Electronic Waste Mitigation",
          "AI as Productivity Enhancer vs. Job Destroyer",
        ],
        keySpeakers: [
          "Dr. Muthukumarswamy DPK (CEO, Krutibimb)",
        ],
        outcomes: [
          "Framed product-market fit as the single most critical determinant of startup success.",
          "Established human-centered AI and continuous re-skilling as the true foundation of future leadership.",
        ],
      },
      {
        id: "bls-day2-workplace-ai-panel",
        placeholderId: 547,
        title: "Day 2 Panel: Future-Ready Leaders — Navigating Skills, Jobs, and AI in Workplace",
        date: "April 2026",
        location: "RUAS Council Hall, Bengaluru",
        attendees: "280 Delegates",
        photo: "/images/gallery/g11.webp",
        overview:
          "Examined the changing nature of work under the influence of AI, automation, and emerging technologies, addressing skill obsolescence cycles. Panelists recommended weaving concepts from Indian knowledge systems (Bhagavad Gita) into workplace ethics.",
        keyTopics: [
          "Accelerating Pace of Skill Obsolescence & Capability-Based Internal Marketplaces",
          "Restoring Workplace Trust & Human Judgment in AI-Assisted Environments",
          "Indian Knowledge Systems & Bhagavad Gita in Corporate Workplace Ethics",
        ],
        keySpeakers: [
          "Corporate HR Directors & Tech Strategists",
          "LEADS Capability Mentors",
        ],
        outcomes: [
          "Concluded that the future of work will be determined by the ability to use technology responsibly while preserving empathy.",
        ],
      },
      {
        id: "bls-day2-women-leadership-panel",
        placeholderId: 548,
        title: "Day 2 Panel: Women Redefining Leadership Across Sectors",
        date: "April 2026",
        location: "RUAS Council Hall, Bengaluru",
        attendees: "300 Delegates",
        photo: "/images/gallery/g12.webp",
        overview:
          "Dr. Pallabi Mund opened by framing women not merely as a source of power, but as a force of change capable of redefining systems. Panelists highlighted that leadership is defined not by position, but by confidence, responsibility, action, and social impact.",
        keyTopics: [
          "Dismantling Glass Ceilings & Social Conditioning in Engineering Norms",
          "Advocating for Better Workplace Infrastructure & Underserved Communities",
          "Converting Vision into Action & Self-Belief in Executive Roles",
        ],
        keySpeakers: [
          "Dr. Pallabi Mund (Chair)",
          "Women Enterprise Founders & Tech Directors",
        ],
        outcomes: [
          "Reaffirmed that women's leadership is about self-belief, breaking barriers, and converting vision into action.",
        ],
      },
      {
        id: "bls-day2-csr-workshop",
        placeholderId: 549,
        title: "Day 2 Workshop: Leading Impact — Transforming CSR in Strategic Leadership",
        date: "April 2026",
        location: "RUAS Innovation Suite, Bengaluru",
        attendees: "180 Delegates",
        photo: "/images/gallery/g13.webp",
        overview:
          "Ashwani Sinha's session traced CSR's evolution from charity-based initiatives toward strategic business integration (Milton Friedman, Porter & Kramer's Shared Value Model, C.K. Prahalad's Bottom of the Pyramid). Cited RxDx's telemedicine reaching 1.3 lakh people and GSK's shingles campaign.",
        keyTopics: [
          "Shared Value Model: Businesses Solving Social Problems to Generate Growth",
          "Bottom of the Pyramid Concept: Low-Income Communities as Active Customers",
          "Companies Act 2013 Compliance & Multi-Stage Stakeholder Ecosystems",
        ],
        keySpeakers: [
          "Ashwani Sinha (CSR Strategy Leader)",
        ],
        outcomes: [
          "Challenged students to integrate profitability and ethical governance as one connected discipline.",
        ],
      },
      {
        id: "bls-day2-valedictory-awards",
        placeholderId: 550,
        title: "Day 2 Valedictory Session, Keynote Address & Annual Awards",
        date: "April 2026",
        location: "RUAS Council Hall, Bengaluru",
        attendees: "600 Delegates & Guests",
        photo: "/images/gallery/g14.webp",
        overview:
          "Dr. Subhadeep Mukherjee opened the valedictory session, framing the summit as a multidisciplinary leadership experience aligned with NEP. Mr. Nagana Gowda delivered a keynote on the LEAD framework (Leadership, Energize, Aspirational, Demonstrate). Dr. Shilpa R. G. presented the formal report, reflections by Mr. Gurutejas C. and Mr. Abhijit Arya, and awards distributed by Dr. Kiran Kumar B. M.",
        keyTopics: [
          "LEAD Framework: Leadership, Energize Yourself & Others, Aspirational, Demonstrate Action",
          "Summit Journey Reflections & Year-End Leadership Report Presentation",
          "Leadership Excellence & Student Contributor Awards",
        ],
        keySpeakers: [
          "Dr. Subhadeep Mukherjee (Head, LEADS)",
          "Mr. Nagana Gowda (Keynote Speaker)",
          "Dr. Shilpa R. G. (Assistant Professor, FMC)",
          "Mr. Gurutejas C. (Senior President)",
          "Mr. Abhijit Arya (Senior Vice President)",
          "Dr. Kiran Kumar B. M. (Head, Peenya Campus)",
        ],
        outcomes: [
          "Honored outstanding student leaders and contributors.",
          "Concluded the summit with the National Anthem and formal release of the annual impact report.",
        ],
      },
      {
        id: "bls-press-releases",
        placeholderId: 551,
        title: "Bharat LEAD Summit 2026: National Press Coverage & Media Releases",
        date: "April 2026",
        location: "National Print & Digital Media",
        attendees: "Public Media Distribution",
        photo: "/images/gallery/g6.webp",
        overview:
          "Widespread national and regional press coverage covering the Bharat LEAD Summit 2026. Featured in prominent print and digital publications including The South India Times ('Salute Your Work, You Will Reach the Top' – Padma Shri Dr. C.N. Manjunath), Business Standard Campus Talk, and regional Kannada daily newspapers.",
        keyTopics: [
          "National Media Coverage of Higher Education Leadership Summits",
          "Padma Shri Dr. C. N. Manjunath's Keynote Insights Distribution",
          "Showcasing MSRUAS & LEADS Next Gen Centre National Footprint",
        ],
        keySpeakers: [
          "Dr. C. N. Manjunath (Member of Parliament)",
          "Prof. (Dr.) Kuldeep Kumar Raina (VC, RUAS)",
          "South India Times & Business Standard Editors",
        ],
        outcomes: [
          "Positioned LEADS Next Gen Centre as a premier national hub for leadership, innovation, and sustainability.",
        ],
      },
    ],
  },
];
