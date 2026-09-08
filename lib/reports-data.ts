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
    id: "annual-impact-2024-2025",
    title: "LEADS Annual Impact Report 2024–2025",
    year: "2024–2025",
    summary:
      "A comprehensive review of LEADS Next Gen Centre's inaugural year, detailing 30+ events, 5,000+ participants, institutional partnerships, and national leadership upliftment metrics across India.",
    fileSize: "4.2 MB",
    fileUrl: "/reports/LEADS-Annual-Impact-Report-2024-2025.pdf",
    pages: 28,
    featured: true,
    publishedDate: "Annual Edition 2024–2025",
    highlights: [
      "5,000+ Active Student & Executive Delegates Reached",
      "30+ High-Impact Summits, Roundtables & Conclaves",
      "94.8% Measured Leadership & Competency Upliftment",
      "Strategic Collaboration with FMC (Federation of Malaysian Chambers)",
    ],
  },
];

