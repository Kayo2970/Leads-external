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
    id: "startup-karnataka",
    category: "Startup & Incubation",
    name: "Startup Karnataka",
    type: "Innovation & Venture Ecosystem Partner",
    logo: "/images/partners/startup-karnataka.png",
    description:
      "State innovation hub empowering young entrepreneurs, student founders, and early-stage ventures with non-technical business strategy.",
    collaborationScope: "Startup SDP, Pitch Accelerator & Venture Mentorship",
    featured: true,
  },
  {
    id: "k-tech",
    category: "Government & Missions",
    name: "K-Tech Innovation Hubs",
    type: "Technology & Skill Mission Partner",
    logo: "/images/partners/k-tech.png",
    description:
      "State technology and capability building initiative driving interdisciplinary innovation, digital leadership, and youth skill empowerment.",
    collaborationScope: "Technology Leadership Series & Regional Incubation Tracks",
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
    id: "business-standard",
    category: "Industry & Corporate",
    name: "Business Standard",
    type: "Official Media & Publishing Partner",
    logo: "/images/partners/business-standard.webp",
    description:
      "Leading national business publication disseminating LEADS research studies, summit proceedings, policy insights, and executive commentary.",
    collaborationScope: "National Publication, Media Outreach & Summit Coverage",
  },
  {
    id: "iic-moe",
    category: "Academic & Institution",
    name: "Institution's Innovation Council (IIC - MoE)",
    type: "Ministry Academic Council Partner",
    logo: "/images/partners/iic.webp",
    description:
      "Ministry of Education initiative fostering systematic innovation, entrepreneurship frameworks, and leadership development in academic institutions.",
    collaborationScope: "Academic Innovation Ratings, IIC Workshops & Campus Chapters",
  },
  {
    id: "rtbi",
    category: "Startup & Incubation",
    name: "Ramaiah Technology Business Incubator (RTBI)",
    type: "Incubation & Acceleration Partner",
    logo: "/images/partners/rtbi.png",
    description:
      "Technology business incubator offering seed grants, prototyping support, and venture acceleration for LEADS student founders.",
    collaborationScope: "Incubation Pipeline, Pitch Demo Days & Seed Capital Access",
  },
  {
    id: "india-ai-mission",
    category: "Government & Missions",
    name: "India AI Mission (DST, Govt of India)",
    type: "National Mission Advisory Affiliate",
    logo: "/bls-logo.webp",
    description:
      "National AI governance and technology mission representation driving responsible AI leadership and strategic policy frameworks.",
    collaborationScope: "Policy Guidelines, AI Governance Talks & National Summit Keynotes",
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
    <div className="pt-28 pb-24 min-h-screen bg-[#1E0C3D] text-white">
      {/* Header Banner */}
      <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 text-center mb-16 3xl:mb-24">
        <div className="inline-flex items-center space-x-2 3xl:space-x-3 px-4 py-1.5 3xl:px-6 3xl:py-3 rounded-full liquid-glass text-white border border-[#DE3F11]/40 text-xs 3xl:text-lg font-semibold mb-4 3xl:mb-8 shadow-sm">
          <Handshake className="w-3.5 h-3.5 3xl:w-5 3xl:h-5 text-[#DE3F11]" />
          <span>LEADS Strategic Partner & Institutional Ecosystem</span>
        </div>
        <h1 className="text-4xl sm:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-extrabold text-white tracking-tight">
          Our Strategic <span className="gold-gradient-text">Partner Network</span>
        </h1>
        <p className="mt-4 3xl:mt-8 text-base sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#E2D9F3] max-w-3xl 3xl:max-w-5xl mx-auto leading-relaxed">
          Collaborating with premier government departments, academic institutions, management associations, and venture incubators across India.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 3xl:px-8 3xl:py-4 rounded-xl 3xl:rounded-2xl font-bold text-xs sm:text-sm 3xl:text-xl transition-all duration-300 cursor-pointer ${
                activeTab === cat
                  ? "bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-lg scale-105"
                  : "glass-panel text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Partners Grid */}
      <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 3xl:gap-10">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="liquid-glass rounded-3xl p-7 3xl:p-10 border border-white/15 shadow-2xl flex flex-col justify-between group hover:border-[#DE3F11]/50 transition-all duration-300"
            >
              <div>
                {/* Logo Badge Container */}
                <div className="bg-white/95 dark:bg-white/90 p-4 rounded-2xl border border-white/20 mb-6 flex items-center justify-center h-24 shadow-md group-hover:scale-105 transition-transform">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>

                <span className="text-xs 3xl:text-base font-bold uppercase tracking-wider text-[#DE3F11]">
                  {partner.type}
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1 mb-3 group-hover:text-[#DE3F11] transition-colors leading-snug">
                  {partner.name}
                </h3>

                <p className="text-xs sm:text-sm 3xl:text-base text-slate-300 leading-relaxed mb-5">
                  {partner.description}
                </p>
              </div>

              {/* Collaboration Scope Footer */}
              <div className="pt-4 border-t border-white/10 text-xs sm:text-sm text-[#E2D9F3]/90">
                <div className="font-semibold text-white mb-1">Collaboration Scope:</div>
                <div className="flex items-start space-x-1.5 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#DE3F11] shrink-0 mt-0.5" />
                  <span>{partner.collaborationScope}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Institutional Partnership CTA */}
      <section className="mt-24 3xl:mt-36 max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="liquid-glass rounded-3xl p-8 sm:p-12 3xl:p-16 border border-[#DE3F11]/40 text-center relative overflow-hidden">
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
      </section>
    </div>
  );
}
