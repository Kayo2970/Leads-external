"use client";

import React, { useState } from "react";
import BorderGlow from "@/components/BorderGlow";
import AnimatedContent from "@/components/AnimatedContent";
import PlaceholderBadge from "@/components/PlaceholderBadge";
import { generateNumberedPlaceholderSvg } from "@/lib/placeholders";
import {
  Building2,
  Handshake,
  Award,
  Globe,
  Briefcase,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface PartnerItem {
  id: string;
  placeholderId: number;
  category: "Academic & Institution" | "Government & Missions" | "Industry & Corporate" | "Startup & Incubation";
  name: string;
  type: string;
  logo: string;
  description: string;
  collaborationScope: string;
  featured?: boolean;
}

const PARTNERS_DATA: PartnerItem[] = [
  {
    id: "fmc-ruas",
    placeholderId: 73,
    category: "Academic & Institution",
    name: "Faculty of Management and Commerce (FMC), RUAS",
    type: "Academic Collaboration Partner",
    logo: "/images/partners/ruas-fmc.png",
    description:
      "Primary academic collaboration partner providing institutional deanship, faculty mentorship, curriculum design, and accredited executive certification.",
    collaborationScope: "FDP, MDP, Joint Research Whitepapers & Academic Governance",
    featured: true,
  },
  {
    id: "rtbi",
    placeholderId: 74,
    category: "Startup & Incubation",
    name: "Ramaiah Technology Business Incubator (RTBI)",
    type: "Incubation & Venture Accelerator Partner",
    logo: "/images/partners/rtbi.png",
    description:
      "Technology business incubator offering seed grants, prototyping support, and venture acceleration for LEADS student founders.",
    collaborationScope: "Incubation Pipeline, Pitch Demo Days & Seed Capital Access",
    featured: true,
  },
  {
    id: "govt-karnataka",
    placeholderId: 75,
    category: "Government & Missions",
    name: "Government of Karnataka",
    type: "State Strategic Partner",
    logo: "/images/partners/govt-karnataka.png",
    description:
      "State government institutional collaboration supporting public sector leadership programs, skill upliftment initiatives, and regional summits.",
    collaborationScope: "Public Administration Workshops & State Skill Development",
    featured: true,
  },
  {
    id: "k-tech",
    placeholderId: 76,
    category: "Government & Missions",
    name: "K-TECH (Karnataka Innovation & Technology Society)",
    type: "State Innovation & Tech Partner",
    logo: "/images/partners/k-tech.png",
    description:
      "Government of Karnataka technology flagship powering deep-tech entrepreneurship, innovation hubs, and skill development.",
    collaborationScope: "Technology Incubation, Skill Missions & Innovation Grants",
    featured: true,
  },
  {
    id: "ficci",
    placeholderId: 77,
    category: "Industry & Corporate",
    name: "Federation of Indian Chambers of Commerce & Industry (FICCI)",
    type: "Apex Industry & Commerce Partner",
    logo: "/images/partners/ficci.webp",
    description:
      "Apex national industry chamber collaborating on SIKHI executive development programs, trade leadership, and policy forums.",
    collaborationScope: "SIKHI Executive Track, Policy Roundtables & Industry Summit",
    featured: true,
  },
  {
    id: "bcic",
    placeholderId: 78,
    category: "Industry & Corporate",
    name: "Bangalore Chamber of Industry and Commerce (BCIC)",
    type: "Regional Industry & Trade Partner",
    logo: "/images/partners/bcic.png",
    description:
      "Premier regional industrial chamber driving trade leadership, enterprise capability building, and CXO executive interaction.",
    collaborationScope: "Executive LDP, Corporate Governance & Industry Networking",
    featured: true,
  },
  {
    id: "istd",
    placeholderId: 79,
    category: "Academic & Institution",
    name: "Indian Society for Training & Development (ISTD)",
    type: "National HR & Capability Partner",
    logo: "/images/partners/istd.png",
    description:
      "National professional body empowering trainers, HR leaders, and organizational development specialists with certified training frameworks.",
    collaborationScope: "Faculty Pedagogy, Trainer Certification & HR Masterclasses",
    featured: true,
  },
  {
    id: "bma",
    placeholderId: 80,
    category: "Industry & Corporate",
    name: "Bangalore Management Association (BMA)",
    type: "Industry & Professional Management Partner",
    logo: "/images/partners/bma.webp",
    description:
      "Apex regional management association connecting LEADS with senior corporate directors, enterprise managers, and industry thought leaders.",
    collaborationScope: "Executive LDP, Corporate MDP Roundtables & CXO Keynotes",
    featured: true,
  },
  {
    id: "nhrd",
    placeholderId: 81,
    category: "Industry & Corporate",
    name: "National HRD Network (NHRDN)",
    type: "Human Capital & Leadership Partner",
    logo: "/images/partners/nhrd.png",
    description:
      "National apex body of HR professionals advancing human resource development, executive talent management, and strategic leadership.",
    collaborationScope: "Leadership Capability Studies & Human Capital Conclaves",
    featured: true,
  },
  {
    id: "aims",
    placeholderId: 82,
    category: "Academic & Institution",
    name: "Association of Indian Management Schools (AIMS)",
    type: "Academic Management Association",
    logo: "/images/partners/aims.png",
    description:
      "Network of management schools promoting excellence in business education, dean leadership, research publications, and academic quality.",
    collaborationScope: "FDP Pedagogy, Academic Deanship & B-School Research",
    featured: true,
  },
  {
    id: "aima",
    placeholderId: 83,
    category: "Academic & Institution",
    name: "All India Management Association (AIMA)",
    type: "Apex National Management Body",
    logo: "/images/partners/aima.webp",
    description:
      "Apex national body for management profession in India, collaborating on national management conventions, skill certifications, and leadership benchmarks.",
    collaborationScope: "National Management Conventions & Leadership Benchmarking",
    featured: true,
  },
];

export default function PartnersPage() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = [
    "All",
    "Academic & Institution",
    "Government & Missions",
    "Industry & Corporate",
    "Startup & Incubation",
  ];

  const filteredPartners =
    activeTab === "All"
      ? PARTNERS_DATA
      : PARTNERS_DATA.filter((p) => p.category === activeTab);

  return (
    <div className="relative">
      {/* SECTION 1 [PURPLE]: HERO HEADER */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 3xl:pt-48 3xl:pb-36 bg-[#361C6A] text-white overflow-hidden relative border-b border-[#DE3F11]/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#9C1256]/30 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 relative z-10">
          <AnimatedContent distance={40} direction="vertical">
            <div className="text-center max-w-4xl mx-auto space-y-4">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#9C1256]/30 border border-[#DE3F11]/40 backdrop-blur-md">
                <Handshake className="w-4 h-4 text-[#DE3F11]" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Institutional Ecosystem & Partnerships
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl 3xl:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Our Strategic Industry & Academic Partners
              </h1>

              <p className="text-sm sm:text-lg 3xl:text-xl text-white/80 leading-relaxed font-normal">
                LEADS Next Gen Centre collaborates with apex government bodies, leading industrial chambers, academic institutions, and incubation networks to power national leadership development.
              </p>
            </div>
          </AnimatedContent>

          {/* Category Filter Tabs */}
          <div className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-lg scale-105"
                    : "bg-[#2A1454] text-white/70 hover:text-white border border-[#DE3F11]/30 hover:border-[#DE3F11]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 [WHITE]: PARTNERS GRID */}
      <section className="py-20 3xl:py-32 bg-[#FDFBFF] text-[#1E0C3D] border-t border-purple-100">
        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 3xl:gap-10">
            {filteredPartners.map((partner) => {
              const svgFallback = generateNumberedPlaceholderSvg({
                id: partner.placeholderId,
                title: partner.name,
                subtitle: partner.type,
                category: partner.category,
              });

              return (
                <div
                  key={partner.id}
                  className="bg-white rounded-3xl p-7 3xl:p-10 border border-purple-200 shadow-xl flex flex-col justify-between group hover:border-[#DE3F11]/50 hover:shadow-2xl transition-all duration-300 text-[#1E0C3D] relative"
                >
                  <div>
                    {/* Logo Badge Container */}
                    <div className="bg-purple-50/60 p-4 rounded-2xl border border-purple-100 mb-6 flex items-center justify-center h-24 shadow-sm group-hover:scale-105 transition-transform relative overflow-hidden">
                      <img
                        src={partner.logo}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = svgFallback;
                        }}
                        alt={partner.name}
                        className="max-h-16 w-auto object-contain"
                      />
                      <PlaceholderBadge id={partner.placeholderId} position="top-left" className="scale-75 origin-top-left" />
                    </div>

                    <span className="text-xs 3xl:text-base font-bold uppercase tracking-wider text-[#9C1256]">
                      {partner.type}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E0C3D] mt-1 mb-3 group-hover:text-[#DE3F11] transition-colors leading-snug">
                      {partner.name}
                    </h3>

                    <p className="text-xs sm:text-sm 3xl:text-base text-slate-600 leading-relaxed mb-5">
                      {partner.description}
                    </p>
                  </div>

                  {/* Collaboration Scope Footer */}
                  <div className="pt-4 border-t border-purple-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center space-x-1.5 truncate mr-2">
                      <ShieldCheck className="w-4 h-4 text-[#DE3F11] shrink-0" />
                      <span className="truncate font-semibold text-slate-700">
                        {partner.collaborationScope}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
