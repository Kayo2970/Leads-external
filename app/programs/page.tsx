"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Users,
  ArrowRight,
  CheckCircle,
  Zap,
  Crown,
  Building2,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export interface ProgramItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Flagship Summit" | "Conferences & Seminars" | "FDP / MDP / LDP / SDP Programmes" | "National Initiatives" | "Innovation & Entrepreneurship Tracks";
  badge: string;
  icon: React.ReactNode;
  audience: string;
  description: string;
  highlights: string[];
  duration: string;
  featured?: boolean;
}

const PROGRAM_GROUPS: {
  name: "Flagship Summit" | "Conferences & Seminars" | "FDP / MDP / LDP / SDP Programmes" | "National Initiatives" | "Innovation & Entrepreneurship Tracks";
  badge: string;
  description: string;
}[] = [
  {
    name: "Flagship Summit",
    badge: "Annual Flagship",
    description:
      "India's premier annual policy and leadership convention convening central ministers, Vice-Chancellors, enterprise CEOs, and 1,000+ delegates to shape Viksit Bharat 2047.",
  },
  {
    name: "Conferences & Seminars",
    badge: "National Symposia & Conclaves",
    description:
      "High-level academic symposia, national quality congresses, AI impact conventions, and policy conferences co-hosted with AIMS, BMA, ANQ, AIU, and state ministries.",
  },
  {
    name: "FDP / MDP / LDP / SDP Programmes",
    badge: "Modular Capability Tracks",
    description:
      "Unified capability-building tracks integrating Faculty Development (FDP) including CaseCraft 5.0 5-Day FDP, Leadership Development (LDP), Management Development (MDP), and Student Development (SDP).",
  },
  {
    name: "National Initiatives",
    badge: "Institutional Commemorations",
    description:
      "Institutional national celebrations, student council badging ceremonies, and public service leadership commemorations.",
  },
  {
    name: "Innovation & Entrepreneurship Tracks",
    badge: "DeepTech Incubation",
    description:
      "Deep-tech commercialization, university incubator frameworks, and technology commercialization programs co-hosted at IISc with Adelaide University.",
  },
];

const PROGRAMS_DATA: ProgramItem[] = [
  // 1. STAND-ALONE FLAGSHIP SUMMIT (ALWAYS ON TOP!)
  {
    id: "bls-summit",
    title: "BHARAT LEAD SUMMIT 2026",
    subtitle: "Transforming Vision Towards Viksit Bharat 2047",
    category: "Flagship Summit",
    badge: "Annual Flagship Summit",
    icon: <Crown className="w-6 h-6 text-[#DE3F11]" />,
    audience: "Policy Makers, Vice-Chancellors, CEOs, & National Delegates",
    description:
      "The premier national flagship annual summit bringing together central ministers, policy makers, VCs, CEOs, and 1,000+ national delegates to shape India's leadership roadmap for Viksit Bharat 2047.",
    highlights: [
      "Keynote panels with central ministry & state leaders",
      "Unveiling of the annual LEADS National Skill Gap Report",
      "High-level networking with 1,000+ national delegates",
      "Distinguished Leadership & Governance Awards ceremony",
    ],
    duration: "Annual Multi-Day Convention",
    featured: true,
  },

  // 2. CONFERENCES & SEMINARS / SUMMITS
  {
    id: "aims-south-region-conference-2025",
    title: "AIMS South Region Conference 2025",
    subtitle: "Emerging Trends in AI & Sustainability",
    category: "Conferences & Seminars",
    badge: "Conferences & Seminars",
    icon: <Building2 className="w-6 h-6 text-[#9C1256]" />,
    audience: "Management Faculty, Researchers, Industry Executives & Students",
    description:
      "Regional conference organized at St. Joseph's College, Bengaluru in collaboration with AIMS, focusing on AI governance, sustainability frameworks, Global Capability Centres (GCCs), and 21st-century management skills.",
    highlights: [
      "Sessions on AI market impact & Global Capability Centres (GCCs)",
      "Keynote addresses by NASSCOM and IBM India stalwarts",
      "Faculty & student paper presentations on sustainable business models",
    ],
    duration: "2-Day Regional Conference",
    featured: true,
  },
  {
    id: "bma-visualization-leadership-summit",
    title: "BMA Visualization Leadership Summit",
    subtitle: "Visual Analytics, Executive Dashboards & Decision Intelligence",
    category: "Conferences & Seminars",
    badge: "Conferences & Seminars",
    icon: <Building2 className="w-6 h-6 text-[#9C1256]" />,
    audience: "Corporate Executives, Data Leaders & Academic Administrators",
    description:
      "Executive leadership summit co-hosted with Bengaluru Management Association, exploring data visualization, executive decision dashboards, and visual storytelling for modern corporate leaders.",
    highlights: [
      "Visual analytics & executive dashboard masterclasses",
      "Panel on data-driven corporate governance",
      "Interactive case studies from leading enterprise tech firms",
    ],
    duration: "1-Day Executive Summit",
    featured: false,
  },
  {
    id: "anq-congress-2025",
    title: "ANQ Congress 2025 (Asian Network for Quality)",
    subtitle: "Global Quality Engineering, TQM & Operational Excellence",
    category: "Conferences & Seminars",
    badge: "Conferences & Seminars",
    icon: <Building2 className="w-6 h-6 text-[#9C1256]" />,
    audience: "Quality Directors, Industrial Engineers & International Delegates",
    description:
      "International quality congress convening international delegates and quality engineering stalwarts to explore Total Quality Management (TQM), ISO standards, and operational excellence.",
    highlights: [
      "Global quality standards & TQM frameworks",
      "Keynote presentations from international quality directors",
      "Industry-academia exchange on manufacturing excellence",
    ],
    duration: "3-Day International Congress",
    featured: false,
  },
  {
    id: "pre-summit-ai-india-impact",
    title: "Pre-Summit: AI India Impact Summit 2026",
    subtitle: "Strategic AI Governance & National Healthcare Integration",
    category: "Conferences & Seminars",
    badge: "Conferences & Seminars",
    icon: <Building2 className="w-6 h-6 text-[#9C1256]" />,
    audience: "AI Researchers, Healthcare Directors & Policy Advisors",
    description:
      "Executive preparatory summit held at Ramaiah Medical College Board Room, convening AI leaders, medical directors, and policy stalwarts prior to the national summit.",
    highlights: [
      "AI integration in healthcare & national infrastructure",
      "Ethical AI frameworks & data privacy protocols",
      "Strategic roadmap preparation for Bharat Lead Summit 2026",
    ],
    duration: "Pre-Summit Roundtable",
    featured: false,
  },
  {
    id: "bma-symposium-ai-future-management",
    title: "BMA Symposium: AI & Future Management Education",
    subtitle: "Curriculum Transformation & AI-Driven Pedagogy",
    category: "Conferences & Seminars",
    badge: "Conferences & Seminars",
    icon: <Building2 className="w-6 h-6 text-[#9C1256]" />,
    audience: "Deans, B-School Directors & Management Educators",
    description:
      "Academic symposium evaluating AI's transformative impact on business school curricula, digital pedagogy, and corporate readiness for management graduates.",
    highlights: [
      "Integrating Generative AI in management curricula",
      "Industry expectations for AI-literate management graduates",
      "Interactive panel with BMA leadership and academic deans",
    ],
    duration: "1-Day Academic Symposium",
    featured: false,
  },
  {
    id: "aiu-south-zone-vc-meet",
    title: "AIU South Zone Vice-Chancellors' Meet",
    subtitle: "NEP 2020 Implementation & Higher Education Governance",
    category: "Conferences & Seminars",
    badge: "Conferences & Seminars",
    icon: <Building2 className="w-6 h-6 text-[#9C1256]" />,
    audience: "Vice-Chancellors, Registrars & University Chancellors",
    description:
      "Conclave of Vice-Chancellors from southern Indian universities discussing NEP 2020 alignment, multidisciplinary skill integration, research grants, and institutional autonomy.",
    highlights: [
      "NEP 2020 strategic implementation benchmarks",
      "Inter-university research collaboration & grant allocation",
      "Vice-Chancellors' roundtable on skill-integrated degrees",
    ],
    duration: "2-Day Vice-Chancellors' Conclave",
    featured: false,
  },
  {
    id: "innova-innovation-summit-2026",
    title: "INNOVA Innovation Summit 2026",
    subtitle: "Healthcare Tech, Deep-Tech & Sustainable Engineering",
    category: "Conferences & Seminars",
    badge: "Conferences & Seminars",
    icon: <Building2 className="w-6 h-6 text-[#9C1256]" />,
    audience: "Startup Founders, Tech Researchers & Venture Investors",
    description:
      "Four-track national innovation summit hosted at NIMHANS Convention Centre, showcasing deep-tech commercialization, healthcare innovations, and youth venture pitching.",
    highlights: [
      "Four specialized tracks: Deep-Tech, Healthcare, ESG & Youth Venturing",
      "Live startup pitch competition with angel investor panel",
      "Exhibition of patent-pending university research prototypes",
    ],
    duration: "4-Track National Summit",
    featured: false,
  },
  {
    id: "two-day-gst-conference",
    title: "Two-Day National Conference on GST 2.0",
    subtitle: "Tax Policy Reforms, Compliance & National Economic Governance",
    category: "Conferences & Seminars",
    badge: "Conferences & Seminars",
    icon: <Building2 className="w-6 h-6 text-[#9C1256]" />,
    audience: "Tax Officers, CAs, Policy Researchers & Legal Scholars",
    description:
      "National academic conference examining GST reforms, tax compliance, and fiscal federalism, featuring Chief Commissioner of Central Tax Smt. Kajal Singh, IRS and ICSSR dignitaries.",
    highlights: [
      "Keynote address by Smt. Kajal Singh, IRS (Chief Commissioner of Central Tax)",
      "Policy papers on GST 2.0, tax compliance & fiscal federalism",
      "Interactive workshop for CA & finance scholars",
    ],
    duration: "2-Day National Conference",
    featured: false,
  },

  // 3. FDP / MDP / LDP / SDP DEVELOPMENT PROGRAMMES
  {
    id: "consolidated-development-program",
    title: "FDP, LDP, MDP & SDP Development Programmes",
    subtitle: "Faculty (FDP), Leadership (LDP), Management (MDP) & Student Development (SDP) Track",
    category: "FDP / MDP / LDP / SDP Programmes",
    badge: "Integrated Capability Track",
    icon: <GraduationCap className="w-6 h-6 text-[#DE3F11]" />,
    audience: "Educators, Senior Executives, Corporate Managers, & Student Founders",
    description:
      "A unified capability-building framework integrating Faculty Development (FDP) including CaseCraft 5.0 5-Day FDP, Leadership Development (LDP), Management Development (MDP), and Student Development (SDP) into specialized modular cohorts for universities, government bodies, corporate enterprises, and student ventures.",
    highlights: [
      "CaseCraft 5.0 (5-Day FDP): Reimagining Management Education Through Effective Case-Based Pedagogy",
      "Faculty Development (FDP): Multidisciplinary pedagogy, OBE standards & research mentoring for educators",
      "Leadership Development (LDP): Executive capability, crisis governance & strategic alignment for senior leaders",
      "Management Development (MDP): Non-technical managerial acumen, operational agility & fiscal discipline",
      "Student Development (SDP): Venture scaling, pitch mastery, business model canvas & investor readiness",
    ],
    duration: "Modular Cohorts (2-Day Workshops to 3-Month Modular Tracks)",
    featured: true,
  },
  {
    id: "mindfulness-leadership-fdp",
    title: "International Workshop on Mindfulness Leadership",
    subtitle: "Conscious Executive Governance, Emotional Intelligence & Stress Resilience",
    category: "FDP / MDP / LDP / SDP Programmes",
    badge: "FDP / MDP / LDP / SDP Programmes",
    icon: <GraduationCap className="w-6 h-6 text-[#DE3F11]" />,
    audience: "Senior Faculty, Corporate Directors & Executive Cohorts",
    description:
      "Specialized International FDP & Executive Workshop exploring mindfulness practices, emotional intelligence, stress management, and conscious leadership in corporate and academic settings.",
    highlights: [
      "Neuroscience of mindfulness & executive focus",
      "Emotional intelligence & crisis communication techniques",
      "Guided mindfulness sessions for corporate & academic leaders",
    ],
    duration: "3-Day International FDP Workshop",
    featured: false,
  },

  // 4. NATIONAL INITIATIVES
  {
    id: "national-leadership-day-badging",
    title: "National Leadership Day - Badging Ceremony",
    subtitle: "Student Council Induction & National Leadership Commemoration",
    category: "National Initiatives",
    badge: "National Initiatives",
    icon: <Award className="w-6 h-6 text-[#9C1256]" />,
    audience: "Student Council Delegates, University Leadership & Guest Dignitaries",
    description:
      "Institutional celebration marking National Leadership Day, featuring the formal badging of the LEADS Student Council and keynote addresses on youth leadership and national service.",
    highlights: [
      "Formal badging ceremony for the LEADS Student Council",
      "Keynote addresses by distinguished national leaders",
      "Unveiling of the annual student leadership charter",
    ],
    duration: "Annual Commemoration Ceremony",
    featured: false,
  },

  // 5. INNOVATION & ENTREPRENEURSHIP TRACKS
  {
    id: "iic-deeptech-startups",
    title: "IIC Innovation & Entrepreneurship for DeepTech Startups",
    subtitle: "Role of Entrepreneurial Universities in Deep-Tech Commercialization",
    category: "Innovation & Entrepreneurship Tracks",
    badge: "Innovation & Entrepreneurship Tracks",
    icon: <Sparkles className="w-6 h-6 text-[#DE3F11]" />,
    audience: "Incubators, Tech Founders, Patent Attorneys & Investors",
    description:
      "International conference co-hosted at JN Tata Auditorium, IISc Bengaluru with Adelaide University, focusing on deep-tech commercialization, IP protection, and university-based incubation.",
    highlights: [
      "Deep-tech commercialization & IP asset protection",
      "Joint panel with IISc and Adelaide University experts",
      "University incubator setup & spin-off funding models",
    ],
    duration: "2-Day International Conference",
    featured: false,
  },
];

function ProgramsContent() {
  const searchParams = useSearchParams();
  const targetCategory = searchParams.get("category");

  // Accordion state for each group (open by default)
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    "Flagship Summit": true,
    "Conferences & Seminars": true,
    "FDP / MDP / LDP / SDP Programmes": true,
    "National Initiatives": true,
    "Innovation & Entrepreneurship Tracks": true,
  });

  useEffect(() => {
    if (targetCategory && PROGRAM_GROUPS.some((g) => g.name === targetCategory)) {
      setExpandedGroups((prev) => ({
        ...prev,
        [targetCategory]: true,
      }));
      const elId = targetCategory.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      setTimeout(() => {
        const el = document.getElementById(elId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
  }, [targetCategory]);

  const toggleGroup = (groupName: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }));
  };

  return (
    <div className="min-h-screen bg-[#FDFBFF]">
      {/* SECTION 1 [PURPLE 30%]: HERO HEADER */}
      <section className="pt-36 sm:pt-44 pb-20 3xl:pt-52 bg-[#361C6A] text-white relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-[#9C1256]/30 to-[#DE3F11]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 3xl:space-x-3 px-4 py-1.5 3xl:px-6 3xl:py-3 rounded-full bg-white/10 text-white border border-white/20 text-xs 3xl:text-lg font-semibold mb-6 3xl:mb-10 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 3xl:w-5 3xl:h-5 text-[#DE3F11]" />
            <span>LEADS National Leadership & Capability Programs</span>
          </div>
          <h1 className="text-4xl sm:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-extrabold text-white tracking-tight max-w-5xl mx-auto leading-tight">
            Executive & Academic <span className="bg-gradient-to-r from-[#DE3F11] to-[#FF8C61] bg-clip-text text-transparent">Programs</span>
          </h1>
          <p className="mt-5 3xl:mt-8 text-base sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#E2D9F3] max-w-3xl 3xl:max-w-5xl mx-auto leading-relaxed">
            Empowering leaders across government, corporate enterprises, academia, and student ventures through our flagship summits and capability-building tracks.
          </p>
        </div>
      </section>

      {/* SECTION 2 [WHITE 70%]: GROUPED PROGRAM CATEGORIES & ACCORDIONS */}
      <section className="py-16 sm:py-24 bg-[#FDFBFF] text-[#1E0C3D] border-t border-purple-100">
        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 space-y-16">
          
          {PROGRAM_GROUPS.map((group) => {
            const groupPrograms = PROGRAMS_DATA.filter((p) => p.category === group.name);
            if (groupPrograms.length === 0) return null;

            const isExpanded = expandedGroups[group.name] ?? true;

            return (
              <div
                key={group.name}
                id={group.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className="scroll-mt-36 rounded-3xl bg-white border border-purple-200 shadow-xl overflow-hidden transition-all duration-300"
              >
                {/* GROUP MAIN HEADER BAR */}
                <div
                  onClick={() => toggleGroup(group.name)}
                  className="cursor-pointer p-6 sm:p-8 bg-gradient-to-r from-purple-50 via-white to-orange-50/40 border-b border-purple-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group/header hover:bg-purple-100/50 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-xs">
                        {group.badge}
                      </span>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                        {groupPrograms.length} {groupPrograms.length === 1 ? "Program" : "Programs Grouped"}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl 3xl:text-4xl font-black text-[#1E0C3D] group-hover/header:text-[#DE3F11] transition-colors mt-1">
                      {group.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0">
                    <button
                      type="button"
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-white border border-purple-200 text-[#1E0C3D] group-hover/header:border-[#DE3F11] transition-colors flex items-center space-x-2 shadow-xs"
                    >
                      <span>{isExpanded ? "Collapse Group" : "Expand All Programs"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#DE3F11]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#9C1256]" />
                      )}
                    </button>
                  </div>
                </div>

                {/* SUB-ITEMS GRID (VISIBLE WHEN EXPANDED) */}
                {isExpanded && (
                  <div className="p-6 sm:p-10 bg-[#FDFBFF]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 3xl:gap-12">
                      {groupPrograms.map((program) => (
                        <div
                          key={program.id}
                          id={program.id}
                          className="bg-white rounded-2xl p-6 sm:p-8 border border-purple-200 shadow-md flex flex-col justify-between group/card hover:border-[#DE3F11]/50 hover:shadow-xl transition-all duration-300"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-5">
                              <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center shadow-sm">
                                  {program.icon}
                                </div>
                                <div>
                                  <span className="text-xs font-bold uppercase tracking-wider text-[#9C1256]">
                                    {program.badge}
                                  </span>
                                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E0C3D] leading-snug group-hover/card:text-[#DE3F11] transition-colors">
                                    {program.title}
                                  </h3>
                                </div>
                              </div>
                            </div>

                            <p className="text-xs sm:text-sm font-semibold text-[#DE3F11] mb-4">
                              {program.subtitle}
                            </p>

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                              {program.description}
                            </p>

                            {/* Target Audience */}
                            <div className="mb-6 p-3 rounded-xl bg-purple-50/80 border border-purple-100 flex items-center space-x-2 text-xs text-[#1E0C3D]">
                              <Users className="w-4 h-4 text-[#DE3F11] shrink-0" />
                              <span>
                                <strong className="font-bold">Target Audience:</strong> {program.audience}
                              </span>
                            </div>

                            {/* Highlights */}
                            <div className="space-y-2 mb-8">
                              <div className="text-[11px] uppercase font-bold tracking-wider text-[#9C1256]">
                                Core Pillars & Deliverables
                              </div>
                              {program.highlights.map((hl, hlIdx) => (
                                <div key={hlIdx} className="flex items-start space-x-2 text-xs text-slate-700 font-medium">
                                  <CheckCircle className="w-3.5 h-3.5 text-[#9C1256] shrink-0 mt-0.5" />
                                  <span>{hl}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-5 border-t border-purple-100 flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-500">
                              {program.duration}
                            </span>
                            <Link
                              href="/contact"
                              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-sm hover:shadow-md hover:scale-105 transition-all"
                            >
                              <span>Enquire Now</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default function ProgramsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#361C6A] pt-44 text-center text-white font-bold">
        Loading Programs...
      </div>
    }>
      <ProgramsContent />
    </Suspense>
  );
}
