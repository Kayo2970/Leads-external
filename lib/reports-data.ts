export interface ImpactReport {
  id: string;
  title: string;
  year: string;
  summary: string;
  fileSize: string;
  fileUrl: string;
  pages: number;
  featured?: boolean;
  publishedDate?: string;
  highlights?: string[];
  category?: string;
}

export const REPORTS_DATA: ImpactReport[] = [
  {
    id: "impact-report-2025-2026",
    title: "LEADS Impact Report 2025–2026",
    year: "2025–2026",
    summary:
      "The definitive annual impact report for LEADS Next Gen Centre's 2025–26 academic year — documenting institutional growth, flagship programme outcomes, national leadership initiatives, partnership milestones, and the measurable upliftment impact across student, faculty, and executive cohorts.",
    fileSize: "12.4 MB",
    fileUrl: "/reports/LEADS-Impact-Report-2025-2026.pdf",
    pages: 28,
    featured: true,
    publishedDate: "Annual Edition 2025–2026",
    highlights: [
      "Full year review of all flagship programmes and summits",
      "Bharath Leadership Summit 2026 outcomes and proceedings",
      "National leadership upliftment metrics and delegate impact data",
      "Institutional partnerships, MoUs and strategic roadmap updates",
    ],
  },
  {
    id: "annual-impact-2024-2025",
    title: "LEADS Annual Impact Report 2024–2025",
    year: "2024–2025",
    summary:
      "A comprehensive review of LEADS Next Gen Centre's inaugural year, detailing 30+ events, 5,000+ participants, institutional partnerships, and national leadership upliftment metrics across India.",
    fileSize: "4.2 MB",
    fileUrl: "/reports/LEADS-Annual-Impact-Report-2024-2025.pdf",
    pages: 28,
    featured: false,
    publishedDate: "Annual Edition 2024–2025",
    highlights: [
      "5,000+ Active Student & Executive Delegates Reached",
      "30+ High-Impact Summits, Roundtables & Conclaves",
      "94.8% Measured Leadership & Competency Upliftment",
      "Strategic Collaboration with FMC (Faculty of Management and Commerce)",
    ],
  },
  {
    id: "bls-proceedings-2024",
    title: "Bharath Leadership Summit Proceedings 2024",
    year: "2024",
    summary:
      "Official convention compendium, keynote transcripts, and executive resolutions from India's flagship summit on leadership, innovation, and national capacity building.",
    fileSize: "3.8 MB",
    fileUrl: "/reports/BLS-Official-Proceedings-2024.pdf",
    pages: 36,
    featured: false,
    publishedDate: "Summit Edition 2024",
    highlights: [
      "Keynote addresses from senior industry captains and policymakers",
      "Track proceedings across Education, AI Ethics, Governance & Enterprise",
      "National Leadership Declaration and future talent policy recommendations",
    ],
  },
  {
    id: "skill-gap-study-2025",
    title: "National Non-Technical Skill Gap Study 2025",
    year: "2025",
    summary:
      "In-depth empirical research on core non-technical competency deficits across tier-1 and tier-2 higher education institutions in India, with actionable pedagogical frameworks.",
    fileSize: "2.6 MB",
    fileUrl: "/reports/LEADS-Skill-Gap-Study-2025.pdf",
    pages: 24,
    featured: false,
    publishedDate: "Research Edition 2025",
    highlights: [
      "Survey of 12,000+ engineering and management students nationwide",
      "Critical gaps in executive presence, critical reasoning, and negotiation",
      "Benchmarked curriculum interventions with verified upliftment outcomes",
    ],
  },
  {
    id: "strategic-roadmap-2025-2030",
    title: "LEADS Strategic Roadmap 2025–2030",
    year: "2025–2030",
    summary:
      "The 5-year vision document outlining the expansion of LEADS Next Gen Centre into a pan-India center of excellence for youth leadership, corporate executive education, and policy advocacy.",
    fileSize: "1.9 MB",
    fileUrl: "/reports/LEADS-Strategic-Roadmap-2025-2030.pdf",
    pages: 18,
    featured: false,
    publishedDate: "Strategic Vision 2025–2030",
    highlights: [
      "Scaling to 50,000+ certified leaders and 200 partner institutions by 2030",
      "Incubation of the National Leadership Repository & AI Assessment Engine",
      "Establishment of regional outreach hubs in North, South, East & Western India",
    ],
  },
];
