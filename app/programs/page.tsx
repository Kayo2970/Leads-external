"use client";

import React, { useState } from "react";
import Link from "next/link";
import BorderGlow from "@/components/BorderGlow";
import AnimatedContent from "@/components/AnimatedContent";
import {
  GraduationCap,
  Award,
  Users,
  Building2,
  Briefcase,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Crown,
  BookOpen,
  Target,
  ShieldCheck,
  Compass,
} from "lucide-react";

interface ProgramItem {
  id: string;
  category: "Leadership" | "Faculty & MDP" | "Startup & Student";
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ReactNode;
  audience: string;
  description: string;
  highlights: string[];
  duration: string;
  featured?: boolean;
}

const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: "bls-summit",
    category: "Leadership",
    title: "Bharath Leadership Summit (BLS)",
    subtitle: "India's Premier Annual Leadership & Policy Convention",
    badge: "Annual Flagship Summit",
    icon: <Crown className="w-6 h-6 text-[#DE3F11]" />,
    audience: "Policy Makers, Vice-Chancellors, CEOs, & National Delegates",
    description:
      "The flagship annual convention bringing together India's top policy makers, corporate leaders, and academic stalwarts to shape the future of national leadership, skill upliftment, and sustainable growth.",
    highlights: [
      "Keynote panels with central ministry & state leaders",
      "Unveiling of the annual LEADS National Skill Gap Report",
      "High-level networking with 1,000+ national delegates",
      "Distinguished Leadership & Governance Awards ceremony",
    ],
    duration: "Annual Multi-Day Convention",
    featured: true,
  },
  {
    id: "fdp-program",
    category: "Faculty & MDP",
    title: "Faculty Development Programmes (FDP)",
    subtitle: "Multidisciplinary Pedagogical & Leadership Upliftment for Educators",
    badge: "Academic Capacity Building",
    icon: <BookOpen className="w-6 h-6 text-[#DE3F11]" />,
    audience: "University Professors, Department Heads, & Faculty Mentors",
    description:
      "Designed specifically for academic leaders to integrate non-technical leadership skills, modern mentoring, industry-aligned case studies, and research-driven pedagogy into higher education ecosystems.",
    highlights: [
      "Outcome-based education (OBE) & modern leadership pedagogy",
      "Grant writing, research leadership, and institutional governance",
      "Mentorship techniques for nurturing student founders",
      "FDP certification recognized by national academic bodies",
    ],
    duration: "5-Day Intensive Cohorts",
  },
  {
    id: "ldp-program",
    category: "Leadership",
    title: "Leadership Development Programmes (LDP)",
    subtitle: "Executive Capability & Strategic Governance for Senior Leaders",
    badge: "Executive Leadership",
    icon: <ShieldCheck className="w-6 h-6 text-[#DE3F11]" />,
    audience: "Senior Managers, Enterprise Directors, & Public Sector Officers",
    description:
      "Targeted intensive modules equipping senior executives with cross-functional leadership capabilities, emotional intelligence, strategic alignment, and crisis resolution frameworks.",
    highlights: [
      "Crisis leadership & strategic scenario planning",
      "Cross-cultural management & stakeholder communication",
      "Ethics, governance, and sustainable business models",
      "Individual executive coaching & diagnostic assessments",
    ],
    duration: "3-Month Hybrid Modular Track",
    featured: true,
  },
  {
    id: "mdp-program",
    category: "Faculty & MDP",
    title: "Management Development Programmes (MDP)",
    subtitle: "Non-Technical Managerial & Organizational Excellence",
    badge: "Corporate MDP",
    icon: <Briefcase className="w-6 h-6 text-[#DE3F11]" />,
    audience: "Mid-to-Senior Managers, Business Unit Heads, & Entrepreneurs",
    description:
      "Focused managerial training programs tailored for corporate enterprises and institutions to elevate team performance, operational agility, decision making, and fiscal discipline.",
    highlights: [
      "Operational strategy & agile team management",
      "Non-technical financial acumen for non-finance managers",
      "Conflict resolution & high-performance organizational culture",
      "Customized in-company training modules available",
    ],
    duration: "2-Day Workshops & 4-Week Tracks",
  },
  {
    id: "startup-sdp",
    category: "Startup & Student",
    title: "Startup Student Development Programmes (SDP)",
    subtitle: "Empowering Student Founders & Early Venture Innovators",
    badge: "Venture Accelerator",
    icon: <TrendingUp className="w-6 h-6 text-[#DE3F11]" />,
    audience: "Student Entrepreneurs, Research Scholars, & Youth Innovators",
    description:
      "A hands-on, venture-building development programme designed to instill venture scaling capabilities, pitch mastery, non-technical business strategy, and investor readiness in student founders.",
    highlights: [
      "Idea validation, business model canvas, and go-to-market strategy",
      "Pitch deck refinement & mock investor demo days",
      "Mentorship from experienced startup founders & VC advisors",
      "Access to LEADS incubation network & seed grants",
    ],
    duration: "6-Week Hands-On Cohort",
    featured: true,
  },
  {
    id: "vanguard-program",
    category: "Leadership",
    title: "Vanguard Leadership Retreat",
    subtitle: "Elite Experiential Governance, Off-Campus Team Dynamics & Leadership Initiative",
    badge: "Vanguard Leadership Retreat",
    icon: <Award className="w-6 h-6 text-[#DE3F11]" />,
    audience: "Board Members, C-Suite Executives, & Senior Institutional Fellows",
    description:
      "An elite executive vanguard track empowering C-suite executives, directors, and institutional stalwarts to master board governance, strategic realignment, high-stakes negotiation, and disruptive venture stewardship.",
    highlights: [
      "Boardroom dynamics & strategic governance masterclasses",
      "Enterprise resilience, ethics, & crisis scenario navigation",
      "Peer-to-peer executive roundtables & global benchmarking",
      "Exclusive access to LEADS senior advisory & policy networks",
    ],
    duration: "6-Month Modular Executive Track",
    featured: true,
  },
  {
    id: "energy-refresher-program",
    category: "Faculty & MDP",
    title: "ENERGY REFRESHER PROGRAM",
    subtitle: "Organized by Ministry of Power in collaboration with FICCI",
    badge: "Ministry of Power & FICCI",
    icon: <Zap className="w-6 h-6 text-[#DE3F11]" />,
    audience: "Energy Sector Executives, Engineers, Power Utility Leaders & Policy Professionals",
    description:
      "A flagship national executive refresher programme organized by the Ministry of Power, Government of India, in strategic collaboration with FICCI and LEADS Next Gen Centre. Designed to train power sector executives, grid managers, and policy professionals on clean energy transition, smart grid resilience, and modern utility leadership.",
    highlights: [
      "Ministry of Power & FICCI joint executive curriculum",
      "Clean energy transition, smart grid tech & power sector reforms",
      "Keynote addresses by Ministry stalwarts & energy directors",
      "Joint Ministry of Power & FICCI Executive Certification",
    ],
    duration: "Modular Executive Cohorts",
    featured: true,
  },
];

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "Leadership", "Faculty & MDP", "Startup & Student"];

  const filteredPrograms =
    activeTab === "All"
      ? PROGRAMS_DATA
      : PROGRAMS_DATA.filter((p) => p.category === activeTab);

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
            Executive & Academic <span className="bg-gradient-to-r from-[#DE3F11] to-[#FF8C61] bg-clip-text text-transparent">Development Programs</span>
          </h1>
          <p className="mt-5 3xl:mt-8 text-base sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#E2D9F3] max-w-3xl 3xl:max-w-5xl mx-auto leading-relaxed">
            From Faculty Development (FDP), Management Development (MDP), and Vanguard Track to Leadership Development (LDP) & Startup SDP — LEADS empowers leaders across government, corporate enterprises, academia, and student ventures.
          </p>

          {/* Category Filter Pills in Hero */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 3xl:px-8 3xl:py-4 rounded-xl 3xl:rounded-2xl font-bold text-xs sm:text-sm 3xl:text-xl transition-all duration-300 cursor-pointer ${
                  activeTab === cat
                    ? "bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-lg scale-105"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 [WHITE 70%]: PROGRAMS GRID */}
      <section className="py-20 3xl:py-32 bg-[#FDFBFF] text-[#1E0C3D] border-t border-purple-100">
        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 3xl:gap-12">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-3xl p-7 sm:p-9 3xl:p-12 border border-purple-200 shadow-xl flex flex-col justify-between group hover:border-[#DE3F11]/50 hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 3xl:w-16 3xl:h-16 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center shadow-sm">
                        {program.icon}
                      </div>
                      <div>
                        <span className="text-xs 3xl:text-base font-bold uppercase tracking-wider text-[#9C1256]">
                          {program.badge}
                        </span>
                        <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-extrabold text-[#1E0C3D] leading-snug group-hover:text-[#DE3F11] transition-colors">
                          {program.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm 3xl:text-base font-semibold text-[#DE3F11] mb-4">
                    {program.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm 3xl:text-base text-slate-600 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Target Audience Badge */}
                  <div className="mb-6 p-3 rounded-xl bg-purple-50/80 border border-purple-100 flex items-center space-x-2 text-xs sm:text-sm 3xl:text-base text-[#1E0C3D]">
                    <Users className="w-4 h-4 text-[#DE3F11] shrink-0" />
                    <span>
                      <strong className="text-[#1E0C3D] font-bold">Target Audience:</strong> {program.audience}
                    </span>
                  </div>

                  {/* Program Highlights */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-xs uppercase font-bold tracking-wider text-[#9C1256]">
                      Key Highlights
                    </div>
                    {program.highlights.map((h, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm 3xl:text-base text-slate-700">
                        <CheckCircle className="w-4 h-4 text-[#DE3F11] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="pt-6 border-t border-purple-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-xs 3xl:text-base font-semibold text-slate-500">
                    🗓️ {program.duration}
                  </span>

                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm 3xl:text-base bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-md hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center space-x-2 group/btn"
                  >
                    <span>Enquire / Register</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Bottom Banner */}
          <div className="mt-20 rounded-3xl p-8 sm:p-12 3xl:p-16 bg-[#361C6A] text-white border border-purple-300 shadow-2xl text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
                Partner with LEADS for Institutional & Corporate Programs
              </h2>
              <p className="text-sm sm:text-lg text-[#E2D9F3] leading-relaxed">
                We customize Faculty Development (FDP), Executive Leadership (LDP), MDP, Vanguard, and Startup SDP programs for universities, government departments, and corporate enterprises across India.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl font-bold text-base bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-xl hover:scale-105 transition-all"
                >
                  <span>Request Custom Program Brochure</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
