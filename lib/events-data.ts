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
