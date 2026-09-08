export interface ImpactReport {
  id: string;
  title: string;
  year: string;
  summary: string;
  fileSize: string;
  fileUrl: string;
  pages: number;
  featured?: boolean;
}

export const REPORTS_DATA: ImpactReport[] = [
  {
    id: "annual-impact-2024-2025",
    title: "LEADS Annual Impact Report 2024–2025",
    year: "2025",
    summary:
      "A comprehensive review of LEADS Next Gen Centre's inaugural year, detailing 30+ events, 5,000+ participants, and national leadership metrics.",
    fileSize: "4.2 MB",
    fileUrl: "/reports/LEADS-Annual-Impact-Report-2024-2025.pdf",
    pages: 28,
    featured: true,
  },
  {
    id: "bls-proceedings-2024",
    title: "Bharath Leadership Summit Official Proceedings",
    year: "2024",
    summary:
      "Keynote summaries, policy recommendations, and inter-sectoral leadership guidelines compiled from the inaugural Bharath Leadership Summit.",
    fileSize: "3.8 MB",
    fileUrl: "/reports/BLS-Official-Proceedings-2024.pdf",
    pages: 42,
    featured: true,
  },
  {
    id: "skill-gap-study-2025",
    title: "National Non-Technical Skill Gap Study",
    year: "2025",
    summary:
      "Empirical research analyzing critical gaps in leadership, communication, and business acumen among technical graduates and startup founders in India.",
    fileSize: "5.1 MB",
    fileUrl: "/reports/LEADS-Skill-Gap-Study-2025.pdf",
    pages: 36,
  },
  {
    id: "strategic-roadmap-2025-2030",
    title: "LEADS Strategic Vision & Roadmap 2025–2030",
    year: "2025",
    summary:
      "Operational blueprint for expanding LEADS leadership upliftment frameworks across 50+ institutional hubs and government centers.",
    fileSize: "2.9 MB",
    fileUrl: "/reports/LEADS-Strategic-Roadmap-2025-2030.pdf",
    pages: 20,
  },
];
