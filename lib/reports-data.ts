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
];
