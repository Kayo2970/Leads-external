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
    pages: 0,
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
];

