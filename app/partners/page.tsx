"use client";

import React, { useState } from "react";
import Link from "next/link";
import BorderGlow from "@/components/BorderGlow";
import AnimatedContent from "@/components/AnimatedContent";
import {
  Building2,
  GraduationCap,
  Globe,
  TrendingUp,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Handshake,
} from "lucide-react";

interface PartnerItem {
  id: string;
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
    category: "Industry & Corporate",
    name: "Federation of Indian Chambers of Commerce & Industry (FICCI)",
    type: "Apex Industry & Commerce Partner",
    logo: "/images/partners/ficci.png",
    description:
      "Apex national industry chamber collaborating on SIKHI executive development programs, trade leadership, and policy forums.",
    collaborationScope: "SIKHI Executive Track, Policy Roundtables & Industry Summit",
    featured: true,
  },
  {
    id: "bcic",
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
    category: "Industry & Corporate",
    name: "National HRD Network (NHRDN)",
    type: "Human Capital & Leadership Partner",
    logo: "/images/partners/nhrd.svg",
    description:
      "National apex body of HR professionals advancing human resource development, executive talent management, and strategic leadership.",
    collaborationScope: "Leadership Capability Studies & Human Capital Conclaves",
    featured: true,
  },
  {
    id: "aims",
    category: "Academic & Institution",
    name: "Association of Indian Management Schools (AIMS)",
    type: "Academic Management Association",
    logo: "/images/partners/aims.svg",
    description:
      "Network of management schools promoting excellence in business education, dean leadership, research publications, and academic quality.",
    collaborationScope: "FDP Pedagogy, Academic Deanship & B-School Research",
    featured: true,
  },
  {
    id: "aima",
    category: "Academic & Institution",
    name: "All India Management Association (AIMA)",
    type: "Apex National Management Body",
    logo: "/images/partners/aima.png",
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
    <div className="min-h-screen bg-[#FDFBFF]">
      {/* SECTION 1 [PURPLE 30%]: HERO HEADER */}
      <section className="pt-32 pb-20 bg-[#361C6A] text-white relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-[#9C1256]/30 to-[#DE3F11]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 3xl:space-x-3 px-4 py-1.5 3xl:px-6 3xl:py-3 rounded-full bg-white/10 text-white border border-white/20 text-xs 3xl:text-lg font-semibold mb-6 3xl:mb-10 shadow-sm">
            <Handshake className="w-3.5 h-3.5 3xl:w-5 3xl:h-5 text-[#DE3F11]" />
            <span>LEADS Strategic Partner & Institutional Ecosystem</span>
          </div>
          <h1 className="text-4xl sm:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-extrabold text-white tracking-tight max-w-5xl mx-auto leading-tight">
            Our Strategic <span className="bg-gradient-to-r from-[#DE3F11] to-[#FF8C61] bg-clip-text text-transparent">Partner Network</span>
          </h1>
          <p className="mt-5 3xl:mt-8 text-base sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#E2D9F3] max-w-3xl 3xl:max-w-5xl mx-auto leading-relaxed">
            Collaborating with premier government departments, academic institutions, management associations, and venture incubators across India.
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

      {/* SECTION 2 [WHITE 70%]: PARTNERS GRID */}
      <section className="py-20 3xl:py-32 bg-[#FDFBFF] text-[#1E0C3D] border-t border-purple-100">
        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 3xl:gap-10">
            {filteredPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-3xl p-7 3xl:p-10 border border-purple-200 shadow-xl flex flex-col justify-between group hover:border-[#DE3F11]/50 hover:shadow-2xl transition-all duration-300 text-[#1E0C3D]"
              >
                <div>
                  {/* Logo Badge Container */}
                  <div className="bg-purple-50/60 p-4 rounded-2xl border border-purple-100 mb-6 flex items-center justify-center h-24 shadow-sm group-hover:scale-105 transition-transform">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-16 w-auto object-contain"
                    />
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
                <div className="pt-4 border-t border-purple-100 text-xs sm:text-sm text-slate-700">
                  <div className="font-bold text-[#1E0C3D] mb-1">Collaboration Scope:</div>
                  <div className="flex items-start space-x-1.5 text-slate-600">
                    <CheckCircle className="w-4 h-4 text-[#DE3F11] shrink-0 mt-0.5" />
                    <span>{partner.collaborationScope}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Institutional Partnership CTA */}
          <div className="mt-20 rounded-3xl p-8 sm:p-12 3xl:p-16 bg-[#361C6A] text-white border border-purple-300 shadow-2xl text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
                Become a LEADS Institutional or Industry Partner
              </h2>
              <p className="text-sm sm:text-lg text-[#E2D9F3] leading-relaxed">
                Join our national network of government agencies, corporate enterprises, management associations, and academic institutions to drive leadership capability across India.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl font-bold text-base bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-xl hover:scale-105 transition-all"
                >
                  <span>Inquire for Institutional Partnership</span>
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
