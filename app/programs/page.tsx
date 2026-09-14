"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ProgramModal from "@/components/ProgramModal";
import AnimatedContent from "@/components/AnimatedContent";
import { generateNumberedPlaceholderSvg } from "@/lib/placeholders";
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
  Layers,
  Calendar,
  MapPin,
  Clock,
  ExternalLink,
  Camera,
} from "lucide-react";

export interface ProgramItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Conclaves & Policy Summits" | "Conferences & Seminars" | "FDP / MDP / LDP / SDP Programmes";
  badge: string;
  icon: React.ReactNode;
  audience: string;
  description: string;
  highlights: string[];
  duration: string;
  location: string;
  photo: string;
  placeholderId?: number;
  featured?: boolean;
}

const PROGRAM_GROUPS: {
  name: "Conclaves & Policy Summits" | "Conferences & Seminars" | "FDP / MDP / LDP / SDP Programmes";
  badge: string;
  description: string;
}[] = [
  {
    name: "Conclaves & Policy Summits",
    badge: "Policy & Executive Conclaves",
    description:
      "India's premier annual policy and leadership conventions convening central ministers, Vice-Chancellors, enterprise CEOs, and 1,000+ national delegates to shape Viksit Bharat 2047.",
  },
  {
    name: "Conferences & Seminars",
    badge: "National & Intl Symposia",
    description:
      "High-level academic symposia, international deep-tech conventions, national quality congresses, AI impact conventions, and policy conferences co-hosted with IISc, AIMS, BMA, ANQ, and Adelaide University.",
  },
  {
    name: "FDP / MDP / LDP / SDP Programmes",
    badge: "Modular Capability Tracks",
    description:
      "Unified capability-building tracks integrating Faculty Development (FDP) including CaseCraft 5.0, Executive Vanguard Leadership Retreat, Mindfulness Leadership, Management Development (MDP), and Student Development (SDP).",
  },
];

const PROGRAMS_DATA: ProgramItem[] = [
  // 1. CONCLAVES & POLICY SUMMITS
  {
    id: "bls-summit",
    title: "Bharat Lead Summit 2026",
    subtitle: "Transforming Vision Towards Viksit Bharat 2047",
    category: "Conclaves & Policy Summits",
    badge: "Annual Policy Summit",
    icon: <Crown className="w-6 h-6 text-[#DE3F11]" />,
    audience: "Policy Makers, Vice-Chancellors, CEOs & National Delegates",
    description:
      "The premier national policy and leadership annual summit bringing together central ministers, policy makers, VCs, CEOs, and 1,000+ national delegates to shape India's leadership roadmap for Viksit Bharat 2047.",
    highlights: [
      "Keynote panels with central ministry & state leadership",
      "Unveiling of the annual LEADS National Skill Gap Report",
      "High-level networking with 1,000+ national delegates",
      "Distinguished Leadership & Governance Awards ceremony",
    ],
    duration: "10–11 Apr 2026 • 267 Students • 10 Faculty Benefited",
    location: "Bengaluru, India",
    photo: "/images/gallery/g1.webp",
    placeholderId: 60,
    featured: true,
  },
  {
    id: "pre-summit-ai-india-impact",
    title: "Pre-Summit – India AI Impact Summit 2026 Roundtable",
    subtitle: "Strategic AI Governance & National Healthcare Integration",
    category: "Conclaves & Policy Summits",
    badge: "AI Policy Roundtable",
    icon: <Building2 className="w-6 h-6 text-[#9C1256]" />,
    audience: "AI Researchers, Healthcare Directors & Policy Advisors",
    description:
      "Executive preparatory summit held at Ramaiah Medical College Board Room, convening AI leaders, medical directors, and policy stalwarts prior to the national summit.",
    highlights: [
      "AI integration in healthcare & national infrastructure",
      "Ethical AI frameworks & data privacy protocols",
      "Strategic roadmap preparation for Bharat Lead Summit 2026",
    ],
    duration: "28 Nov 2025 • 10 Students • 3 Faculty Benefited",
    location: "Ramaiah Medical College Board Room",
    photo: "/images/gallery/g2.webp",
    placeholderId: 61,
    featured: false,
  },
  {
    id: "anvaya-innovation-summit-2026",
    title: "Anvaya Innovation Summit 2026",
    subtitle: "Healthcare Tech, Deep-Tech & Sustainable Engineering",
    category: "Conclaves & Policy Summits",
    badge: "Deep-Tech & Healthcare Summit",
    icon: <Building2 className="w-6 h-6 text-[#9C1256]" />,
    audience: "Startup Founders, Tech Researchers & Venture Investors",
    description:
      "Four-track national innovation summit hosted at NIMHANS Convention Centre, showcasing deep-tech commercialization, healthcare innovations, and youth venture pitching.",
    highlights: [
      "Four specialized tracks: Deep-Tech, Healthcare, ESG & Youth Venturing",
      "Live startup pitch competition with angel investor panel",
      "Exhibition of patent-pending university research prototypes",
    ],
    duration: "22 Jan 2026 • 25 Students • 5 Faculty Benefited",
    location: "NIMHANS Convention Centre, Bengaluru",
    photo: "/images/gallery/g4.webp",
    placeholderId: 63,
    featured: false,
  },

  // 2. CONFERENCES & SEMINARS
  {
    id: "aims-south-region-conference-2025",
    title: "AIMS South Zone Regional Conference 2025",
    subtitle: "Emerging Trends in AI & Sustainability",
    category: "Conferences & Seminars",
    badge: "Regional Management Conference",
    icon: <Building2 className="w-6 h-6 text-[#9C1256]" />,
    audience: "Management Faculty, Researchers, Industry Executives & Students",
    description:
      "A student delegation successfully represented their institution at the 'Emerging Trends in AI & Sustainability' regional conference, actively seeking out best practices to integrate disruptive technologies and sustainable corporate frameworks into their professional development. By actively participating in core panel discussions centered on industry-academia collaborations, the students gained direct, high-level perspectives from prominent keynote experts representing NASSCOM and IBM India. These industry leaders provided the delegation with critical, real-world insights regarding AI's current market impact, the expanding strategic role of Global Capability Centres (GCCs), and the essential 21st-century skill sets expected of modern management graduates entering a tech-driven workforce. Ultimately, this immersive participation served a dual purpose: it facilitated deep student knowledge acquisition regarding the rapid, cutting-edge developments in artificial intelligence and corporate sustainability, while simultaneously providing the delegation with invaluable, strategic networking opportunities to connect directly with regional academics, policy influencers, and top-tier industry executives.",
    highlights: [
      "Keynote perspectives from prominent industry experts representing NASSCOM and IBM India",
      "Critical insights into AI governance, market impact, and Global Capability Centres (GCCs)",
      "Exploration of sustainable corporate frameworks and 21st-century workforce expectations",
      "Strategic professional networking connecting delegates with regional academics and executives",
    ],
    duration: "12 Sep 2025 • 7 Students • 1 Faculty Benefited",
    location: "St. Joseph college , Banglore",
    photo: "/images/gallery/g5.webp",
    placeholderId: 64,
    featured: true,
  },
  {
    id: "bma-futuristic-leadership-summit-2025",
    title: "BMA Futuristic Leadership Summit 2025",
    subtitle: "Futuristic Leadership, Strategic Innovation & Decision Intelligence",
    category: "Conferences & Seminars",
    badge: "Executive Leadership Summit",
    icon: <Building2 className="w-6 h-6 text-[#9C1256]" />,
    audience: "Corporate Executives, Data Leaders & Academic Administrators",
    description:
      "Executive leadership summit co-hosted with Bengaluru Management Association, exploring futuristic leadership, strategic innovation, and 21st-century management models for modern corporate leaders.",
    highlights: [
      "Futuristic leadership & executive decision-making masterclasses",
      "Panel on strategic corporate governance & innovation",
      "Interactive case studies from leading enterprise tech firms",
    ],
    duration: "30 Oct 2025 • 148 Students • 10 Faculty Benefited",
    location: "Bengaluru Management Association",
    photo: "/images/gallery/g6.webp",
    placeholderId: 65,
    featured: false,
  },
  {
    id: "anq-congress-2025",
    title: "ANQ Congress 2025",
    subtitle: "Global Quality Engineering, TQM & Operational Excellence",
    category: "Conferences & Seminars",
    badge: "International Quality Congress",
    icon: <Building2 className="w-6 h-6 text-[#9C1256]" />,
    audience: "Quality Directors, Industrial Engineers & International Delegates",
    description:
      "International quality congress convening international delegates and quality engineering stalwarts to explore Total Quality Management (TQM), ISO standards, and operational excellence.",
    highlights: [
      "Global quality standards & TQM frameworks",
      "Keynote presentations from international quality directors",
      "Industry-academia exchange on manufacturing excellence",
    ],
    duration: "3–7 Nov 2025 • 25 Students • 2 Faculty Benefited",
    location: "International Quality Convention Centre",
    photo: "/images/gallery/anq-congress-2025.webp",
    placeholderId: 66,
    featured: false,
  },
  {
    id: "bma-symposium-ai-future-management",
    title: "BMA Symposium – AI and the Future of Management Education",
    subtitle: "Curriculum Transformation & AI-Driven Pedagogy",
    category: "Conferences & Seminars",
    badge: "Academic Pedagogy Symposium",
    icon: <Building2 className="w-6 h-6 text-[#9C1256]" />,
    audience: "Deans, B-School Directors & Management Educators",
    description:
      "Academic symposium evaluating AI's transformative impact on business school curricula, digital pedagogy, and corporate readiness for management graduates.",
    highlights: [
      "Integrating Generative AI in management curricula",
      "Industry expectations for AI-literate management graduates",
      "Interactive panel with BMA leadership and academic deans",
    ],
    duration: "17 Jan 2026 • 12 Students • 3 Faculty Benefited",
    location: "FMC Auditorium, RUAS",
    photo: "/images/gallery/bma-symposium.webp",
    placeholderId: 67,
    featured: false,
  },
  {
    id: "two-day-gst-conference",
    title: "Two-Day National Conference – GST Reforms 2.0 (with ICSSR)",
    subtitle: "Tax Policy Reforms, Compliance & National Economic Governance",
    category: "Conferences & Seminars",
    badge: "National Tax Policy Conference",
    icon: <Building2 className="w-6 h-6 text-[#9C1256]" />,
    audience: "Tax Officers, CAs, Policy Researchers & Legal Scholars",
    description:
      "National academic conference examining GST reforms, tax compliance, and fiscal federalism, featuring Chief Commissioner of Central Tax Smt. Kajal Singh, IRS and ICSSR dignitaries.",
    highlights: [
      "Keynote address by Smt. Kajal Singh, IRS (Chief Commissioner of Central Tax)",
      "Policy papers on GST 2.0, tax compliance & fiscal federalism",
      "Interactive workshop for CA & finance scholars",
    ],
    duration: "13–14 Mar 2026 • 45 Students • 12 Faculty Benefited",
    location: "National Tax Policy Centre, Bengaluru",
    photo: "/images/gallery/two-day-gst-reforms-conference.webp",
    placeholderId: 68,
    featured: false,
  },
  {
    id: "iisc-deeptech-startups",
    title: "IISc– Innovation And Entrepreneurship For Deep-Tech Startups",
    subtitle: "Role of Entrepreneurial Universities in Deep-Tech Commercialization",
    category: "Conferences & Seminars",
    badge: "International IISc Deep-Tech Conference",
    icon: <Sparkles className="w-6 h-6 text-[#DE3F11]" />,
    audience: "Incubators, Tech Founders, Patent Attorneys & Investors",
    description:
      "International conference co-hosted at JN Tata Auditorium, IISc Bengaluru with Adelaide University, focusing on deep-tech commercialization, IP protection, and university-based incubation.",
    highlights: [
      "Deep-tech commercialization & IP asset protection",
      "Joint panel with IISc and Adelaide University experts",
      "University incubator setup & spin-off funding models",
    ],
    duration: "20–22 May 2026 • 150 Students • 20 Faculty Benefited",
    location: "JN Tata Auditorium, IISc Bengaluru",
    photo: "/images/gallery/g11.webp",
    placeholderId: 69,
    featured: false,
  },

  // 3. FDP / MDP / LDP / SDP DEVELOPMENT PROGRAMMES
  {
    id: "casecraft-fdp",
    title: "Case Craft 5.0 – Five-Day FDP",
    subtitle: "Advanced Case-Method Pedagogy & Business Teaching Excellence",
    category: "FDP / MDP / LDP / SDP Programmes",
    badge: "5-Day National FDP",
    icon: <GraduationCap className="w-6 h-6 text-[#DE3F11]" />,
    audience: "Management Educators, Doctoral Scholars & University Faculty",
    description:
      "Flagship 5-day national faculty development workshop empowering business educators with advanced Harvard and Ivey-style case teaching methodologies, classroom discussion leadership, and empirical case research publication strategies.",
    highlights: [
      "Harvard & Ivey style case writing and discussion facilitation",
      "Empirical pedagogical research & classroom teaching simulation",
      "Publication strategies in peer-reviewed management case journals",
      "National FDP certification for attending faculty delegates",
    ],
    duration: "8–12 Sep 2025 • 5 Students • 30 Faculty Benefited",
    location: "Faculty of Management and Commerce, RUAS",
    photo: "/images/gallery/case-craft-5-fdp.webp",
    placeholderId: 70,
    featured: true,
  },
  {
    id: "mindfulness-leadership-fdp",
    title: "International Workshop – Mindful Leadership & Well-Being in HEI",
    subtitle: "Conscious Executive Governance, Emotional Intelligence & Stress Resilience",
    category: "FDP / MDP / LDP / SDP Programmes",
    badge: "International FDP Workshop",
    icon: <GraduationCap className="w-6 h-6 text-[#DE3F11]" />,
    audience: "Senior Faculty, Corporate Directors & Executive Cohorts",
    description:
      "Specialized International FDP & Executive Workshop exploring mindfulness practices, emotional intelligence, stress management, and conscious leadership in corporate and academic settings.",
    highlights: [
      "Neuroscience of mindfulness & executive focus",
      "Emotional intelligence & crisis communication techniques",
      "Guided mindfulness sessions for corporate & academic leaders",
      "Personalized executive energy & mental wellness roadmap",
    ],
    duration: "14 Feb 2026 • 10 Students • 30 Faculty Benefited",
    location: "LEADS Executive Training Hall, RUAS",
    photo: "/images/gallery/g13.webp",
    placeholderId: 71,
    featured: false,
  },
  {
    id: "vanguard-program",
    title: "Vanguard Leadership Retreat 2026",
    subtitle: "Elite Experiential Governance, Off-Campus Team Dynamics & Leadership Initiative",
    category: "FDP / MDP / LDP / SDP Programmes",
    badge: "Executive Leadership Retreat",
    icon: <Award className="w-6 h-6 text-[#9C1256]" />,
    audience: "C-Suite Executives, Directors & Senior Fellows",
    description:
      "An elite executive vanguard track empowering C-suite executives, directors, and institutional stalwarts to master board governance, strategic realignment, high-stakes negotiation, and disruptive venture stewardship in an off-campus immersion setting.",
    highlights: [
      "Boardroom dynamics & strategic governance masterclasses",
      "Off-campus leadership simulations & high-stakes crisis strategy",
      "Peer-to-peer executive networking and experiential cohort challenges",
      "Executive governance certification for senior fellows",
    ],
    duration: "1 Mar 2026 • 25 Students • 5 Faculty Benefited",
    location: "RR Retreat & Off-Campus Grounds, Bengaluru",
    photo: "/images/gallery/vanguard-leadership-retreat-2026.webp",
    placeholderId: 59,
    featured: false,
  },
  {
    id: "energy-refresher-program",
    title: "Energy Refresher & Wellness Leadership Program",
    subtitle: "Cognitive Endurance, High-Performance Mindset & Vitality",
    category: "FDP / MDP / LDP / SDP Programmes",
    badge: "Executive Vitality Track",
    icon: <Zap className="w-6 h-6 text-[#DE3F11]" />,
    audience: "Corporate Leaders, Department Heads & Student Executives",
    description:
      "Specialized leadership rejuvenation track focused on high-performance vitality, cognitive stamina, stress decompression, and sustainable personal energy management for leaders navigating complex organizational demands.",
    highlights: [
      "Cognitive energy renewal and burnout mitigation frameworks",
      "Science-backed stress resilience and peak cognitive endurance",
      "Work-life harmony strategies for high-impact decision makers",
      "Practical vitality toolkit and personalized wellness roadmap",
    ],
    duration: "2-Day Executive Wellness Intensive",
    location: "Campus Wellness Center & Executive Studio",
    photo: "/images/gallery/g15.webp",
    placeholderId: 73,
    featured: false,
  },
];

function ProgramsContent() {
  const searchParams = useSearchParams();
  const targetCategory = searchParams.get("category");

  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  useEffect(() => {
    if (targetCategory && PROGRAM_GROUPS.some((g) => g.name === targetCategory)) {
      setActiveTab(targetCategory);
      const elId = targetCategory.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      setTimeout(() => {
        const el = document.getElementById(elId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
  }, [targetCategory]);

  const tabOptions = [
    { label: "All Programs", value: "All" },
    { label: "Conclaves & Policy Summits", value: "Conclaves & Policy Summits" },
    { label: "Conferences & Seminars", value: "Conferences & Seminars" },
    { label: "FDP / MDP / LDP / SDP", value: "FDP / MDP / LDP / SDP Programmes" },
  ];

  const visibleGroups =
    activeTab === "All"
      ? PROGRAM_GROUPS
      : PROGRAM_GROUPS.filter((g) => g.name === activeTab);

  return (
    <div className="relative min-h-screen bg-[#FDFBFF]">
      {/* Program Detail Pop-up Modal */}
      <ProgramModal program={selectedProgram} onClose={() => setSelectedProgram(null)} />

      {/* SECTION 1 [PURPLE]: HERO HEADER */}
      <section className="pt-36 sm:pt-44 pb-16 sm:pb-24 3xl:pt-52 3xl:pb-36 bg-[#361C6A] text-white overflow-hidden relative border-b border-[#DE3F11]/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#9C1256]/30 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 relative z-10">
          <AnimatedContent distance={40} direction="vertical">
            <div className="text-center max-w-4xl mx-auto space-y-4">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#9C1256]/30 border border-[#DE3F11]/40 backdrop-blur-md">
                <GraduationCap className="w-4 h-4 text-[#DE3F11]" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  LEADS National Leadership & Capability Programs
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl 3xl:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Executive, Academic & <span className="bg-gradient-to-r from-[#DE3F11] to-[#FF8C61] bg-clip-text text-transparent">Capability Programs</span>
              </h1>

              <p className="text-sm sm:text-lg 3xl:text-xl text-white/80 leading-relaxed font-normal">
                Empowering leaders across government, corporate enterprises, academia, and student ventures through our national policy summits, academic conferences, and capability-building tracks.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* SECTION 2 [WHITE]: CATEGORY FILTER TABS & GROUPED PROGRAM CARDS */}
      <section className="py-16 sm:py-24 bg-[#FDFBFF] text-[#1E0C3D]">
        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 space-y-16">
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 3xl:gap-4 mb-4">
            {tabOptions.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-2.5 3xl:px-7 3xl:py-4 rounded-xl 3xl:rounded-2xl text-xs 3xl:text-lg font-bold transition-all duration-300 ${
                  activeTab === tab.value
                    ? "bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-md scale-105"
                    : "bg-white text-[#361C6A] border border-purple-200 shadow-sm hover:border-[#DE3F11]/50 hover:bg-purple-50/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {visibleGroups.map((group) => {
            const groupPrograms = PROGRAMS_DATA.filter((p) => p.category === group.name);
            if (groupPrograms.length === 0) return null;

            return (
              <div
                key={group.name}
                id={group.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className="scroll-mt-36 rounded-3xl bg-white border border-purple-200 shadow-xl overflow-hidden transition-all duration-300"
              >
                {/* GROUP MAIN HEADER BAR (NON-COLLAPSIBLE) */}
                <div className="p-6 sm:p-8 bg-gradient-to-r from-purple-50 via-white to-orange-50/40 border-b border-purple-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-xs">
                        {group.badge}
                      </span>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                        {groupPrograms.length} {groupPrograms.length === 1 ? "Program" : "Programs Grouped"}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl 3xl:text-4xl font-black text-[#1E0C3D] mt-1">
                      {group.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* SUB-ITEMS LIST (ALTERNATING LEFT/RIGHT 2-COLUMN LAYOUT MATCHING EVENTS) */}
                <div className="p-6 sm:p-10 space-y-12 bg-[#FDFBFF]">
                  {groupPrograms.map((program, idx) => {
                    const isContentLeft = idx % 2 === 0;
                    const mainPhId = program.placeholderId || 60 + idx;
                    const mainFallback = generateNumberedPlaceholderSvg({
                      id: mainPhId,
                      title: program.title,
                      subtitle: program.subtitle,
                      category: program.category,
                    });

                    return (
                      <div
                        key={program.id}
                        id={program.id}
                        className="bg-white rounded-2xl p-6 sm:p-8 border border-purple-200 shadow-md hover:border-[#DE3F11]/40 hover:shadow-xl transition-all duration-300"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                          {/* TEXT COLUMN */}
                          <div
                            className={`lg:col-span-6 space-y-5 flex flex-col justify-between ${
                              isContentLeft ? "lg:order-1" : "lg:order-2"
                            }`}
                          >
                            <div className="space-y-4">
                              <div className="space-y-1.5">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-purple-100 text-[#9C1256] border border-purple-200">
                                    {program.badge}
                                  </span>
                                  <span className="text-xs font-bold text-slate-500">
                                    {program.category}
                                  </span>
                                </div>

                                <h3 className="text-xl sm:text-3xl font-extrabold text-[#1E0C3D] leading-tight">
                                  {program.title}
                                </h3>

                                <p className="text-xs sm:text-sm font-semibold text-[#DE3F11]">
                                  {program.subtitle}
                                </p>
                              </div>

                              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                {program.description}
                              </p>

                              {/* Metadata Box */}
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3 rounded-xl bg-purple-50/70 border border-purple-100 text-xs">
                                <div>
                                  <div className="text-[10px] uppercase font-bold text-slate-400">
                                    Format & Duration
                                  </div>
                                  <div className="font-bold text-[#1E0C3D] mt-0.5 truncate">
                                    {program.duration}
                                  </div>
                                </div>

                                <div>
                                  <div className="text-[10px] uppercase font-bold text-slate-400">
                                    Venue / Location
                                  </div>
                                  <div className="font-bold text-[#1E0C3D] mt-0.5 truncate">
                                    {program.location}
                                  </div>
                                </div>

                                <div>
                                  <div className="text-[10px] uppercase font-bold text-slate-400">
                                    Target Cohort
                                  </div>
                                  <div className="font-bold text-[#9C1256] mt-0.5 truncate">
                                    {program.audience}
                                  </div>
                                </div>
                              </div>

                              {/* Highlights Bullet List */}
                              <div className="space-y-2">
                                <div className="text-[11px] font-bold uppercase tracking-wider text-[#9C1256]">
                                  Core Pillars & Key Deliverables
                                </div>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                                  {program.highlights.map((hl, hlIdx) => (
                                    <li key={hlIdx} className="flex items-start space-x-2">
                                      <CheckCircle className="w-3.5 h-3.5 text-[#DE3F11] shrink-0 mt-0.5" />
                                      <span>{hl}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* CTA Action Buttons */}
                            <div className="pt-2 flex flex-wrap items-center gap-3">
                              <button
                                type="button"
                                onClick={() => setSelectedProgram(program)}
                                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                              >
                                <span>Read Full Details & Agenda</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>

                              {program.id === "bls-summit" && (
                                <a
                                  href="https://www.bharatleadsummit.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-xs bg-purple-50 text-[#1E0C3D] border border-purple-200 hover:border-[#DE3F11] hover:text-[#DE3F11] transition-all flex items-center justify-center space-x-1.5"
                                >
                                  <span>Summit Website</span>
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                              )}
                            </div>
                          </div>

                          {/* PHOTO COLUMN (16:9 ASPECT RATIO) */}
                          <div
                            className={`lg:col-span-6 flex flex-col justify-center items-center ${
                              isContentLeft ? "lg:order-2" : "lg:order-1"
                            }`}
                          >
                            <div
                              onClick={() => setSelectedProgram(program)}
                              className="cursor-pointer relative rounded-2xl overflow-hidden border border-purple-200 shadow-md group/img w-full aspect-[16/9] bg-[#180A30]"
                            >
                              <img
                                src={program.photo}
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = mainFallback;
                                }}
                                alt={program.title}
                                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 absolute inset-0"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-5">
                                <span className="text-xs font-bold text-white bg-gradient-to-r from-[#9C1256] to-[#DE3F11] px-3.5 py-1.5 rounded-lg shadow-lg backdrop-blur-xs flex items-center gap-1.5 border border-white/20">
                                  <Camera className="w-3.5 h-3.5" />
                                  <span>View Program Visuals & Syllabus</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
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
