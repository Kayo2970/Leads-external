"use client";

import React, { useState } from "react";
import BorderGlow from "@/components/BorderGlow";
import ChromaGrid, { ChromaItem } from "@/components/ChromaGrid";
import OrganogramChart from "@/components/OrganogramChart";
import {
  LEADERSHIP_MESSAGES,
  BOARD_MEMBERS_DATA,
  BoardMember,
} from "@/lib/board-data";
import {
  Shield,
  Target,
  BookOpen,
  Building2,
  Compass,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const tabOptions = [
    { label: "All Members", value: "All" },
    { label: "Patron & Chief Advisor", value: "Patron & Chief Advisor" },
    { label: "Centre Head & Faculty Leads", value: "Centre Head & Faculty Leads" },
    { label: "Student Core Council", value: "Student Core Council" },
    { label: "Student Advisory Council", value: "Student Advisory Council" },
    { label: "Student Trainee Associates", value: "Student Trainee Associates" },
    { label: "Governing & Advisory", value: "Governing & Advisory" },
  ];

  const filteredMembers: BoardMember[] =
    activeTab === "All"
      ? BOARD_MEMBERS_DATA
      : BOARD_MEMBERS_DATA.filter((m) => m.roleGroup === activeTab);

  // Convert board members into ChromaGrid items with large photos & highlighted name/designation
  const chromaLeadershipItems: ChromaItem[] = LEADERSHIP_MESSAGES.map((m, idx) => ({
    image: m.image || "/images/leadership/subhadeep-mukherjee.webp",
    title: m.name,
    subtitle: m.designation,
    handle: m.role,
    location: m.affiliation,
    borderColor: idx % 2 === 0 ? "#DE3F11" : "#9C1256",
    gradient:
      idx % 2 === 0
        ? "linear-gradient(165deg, #361C6A, #180A30)"
        : "linear-gradient(165deg, #2A1454, #120726)",
    url: m.linkedin,
  }));

  const chromaDirectoryItems: ChromaItem[] = filteredMembers.map((m, idx) => ({
    image: m.image || "/images/leadership/subhadeep-mukherjee.webp",
    title: m.name,
    subtitle: m.designation,
    handle: m.role,
    location: m.affiliation,
    borderColor: idx % 3 === 0 ? "#DE3F11" : idx % 3 === 1 ? "#9C1256" : "#E2D9F3",
    gradient:
      idx % 2 === 0
        ? "linear-gradient(165deg, #361C6A, #180A30)"
        : "linear-gradient(165deg, #2A1454, #120726)",
    url: m.linkedin,
  }));

  return (
    <div className="min-h-screen">
      {/* SECTION 1 [PURPLE]: HERO HEADER & ANIMATED LOGO BANNERS */}
      <section className="pt-32 pb-20 bg-[#361C6A] text-white relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-gradient-to-r from-[#9C1256]/20 to-[#DE3F11]/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/20 text-xs font-semibold mb-6 shadow-sm">
            <Shield className="w-3.5 h-3.5 text-[#DE3F11]" />
            <span>About the Centre & Governance</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Centre for Leadership Empowering Attitude Development for Sustainability
          </h1>
          <p className="mt-5 text-base sm:text-xl text-[#E2D9F3] max-w-3xl mx-auto leading-relaxed font-normal">
            LEADS Next-Gen Centre is a premier leadership and executive empowerment centre at RUAS, dedicated to fostering multidisciplinary non-technical leadership, strategic governance, and future-ready capabilities across India.
          </p>

          {/* Official Centre & FMC Animated Logo Banners */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <BorderGlow
              edgeSensitivity={30}
              glowColor="330 85 50"
              backgroundColor="#FFFFFF"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1.2}
              colors={["#9C1256", "#DE3F11", "#361C6A"]}
              animated={true}
              className="shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="p-4 sm:p-5 flex items-center justify-center">
                <img
                  src="/leads-header-logo.png"
                  alt="LEADS Next Gen Centre - Ramaiah University of Applied Sciences"
                  className="h-12 sm:h-16 w-auto object-contain"
                />
              </div>
            </BorderGlow>

            <BorderGlow
              edgeSensitivity={30}
              glowColor="330 85 50"
              backgroundColor="#FFFFFF"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1.2}
              colors={["#9C1256", "#DE3F11", "#361C6A"]}
              animated={true}
              className="shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="p-4 sm:p-5 flex items-center justify-center">
                <img
                  src="/fmc-logo-white.png"
                  alt="Faculty of Management and Commerce - RUAS"
                  className="h-12 sm:h-16 w-auto object-contain"
                />
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>

      {/* SECTION 2 [WHITE/LIGHT]: STORY, VISION & MISSION BENTO */}
      <section className="py-24 bg-[#FDFBFF] text-[#1E0C3D] border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-[#9C1256] mb-2">
              Foundational Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E0C3D]">
              Our Strategic Imperative
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Bridging the leadership gap through non-technical mastery and sustainable vision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Origin Story Card */}
            <BorderGlow
              edgeSensitivity={30}
              glowColor="330 85 50"
              backgroundColor="#FFFFFF"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1.0}
              colors={["#9C1256", "#DE3F11", "#361C6A"]}
              animated={true}
              className="h-full shadow-md hover:shadow-xl transition-all"
            >
              <div className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9C1256] to-[#DE3F11] text-white flex items-center justify-center shadow-md">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1E0C3D]">Our Foundation</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Established under the Faculty of Management and Commerce (FMC) at RUAS, LEADS Next-Gen Centre addresses a crucial national imperative: empowering emerging executives, founders, and scholars with holistic, non-technical leadership, ethical governance, and strategic management skills.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Through experiential learning, executive roundtables, and industry-aligned summits, LEADS cultivates leaders equipped to drive measurable impact across public and private sectors.
                </p>
              </div>
            </BorderGlow>

            {/* Vision Card */}
            <BorderGlow
              edgeSensitivity={30}
              glowColor="330 85 50"
              backgroundColor="#FFFFFF"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1.0}
              colors={["#9C1256", "#DE3F11", "#361C6A"]}
              animated={true}
              className="h-full shadow-md hover:shadow-xl transition-all"
            >
              <div className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9C1256] to-[#DE3F11] text-white flex items-center justify-center shadow-md">
                  <Compass className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1E0C3D]">Our Vision</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To empower future leaders to be purpose-driven, ethical changemakers who champion sustainable innovation, non-technical capability excellence, and shape an equitable, resilient future for Bharat and the world.
                </p>
                <div className="pt-2 flex items-center space-x-2 text-xs font-bold text-[#9C1256]">
                  <CheckCircle className="w-4 h-4 text-[#DE3F11]" />
                  <span>Reshaping India's Human Capital Frontier</span>
                </div>
              </div>
            </BorderGlow>

            {/* Mission Card */}
            <BorderGlow
              edgeSensitivity={30}
              glowColor="330 85 50"
              backgroundColor="#FFFFFF"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1.0}
              colors={["#9C1256", "#DE3F11", "#361C6A"]}
              animated={true}
              className="h-full shadow-md hover:shadow-xl transition-all"
            >
              <div className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9C1256] to-[#DE3F11] text-white flex items-center justify-center shadow-md">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1E0C3D]">Our Mission</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To build an active ecosystem where experiential learning, high-stakes leadership simulations, and executive mentorship elevate individuals, enterprises, and communities — turning raw knowledge into purposeful, sustainable leadership action.
                </p>
                <div className="pt-2 flex items-center space-x-2 text-xs font-bold text-[#9C1256]">
                  <CheckCircle className="w-4 h-4 text-[#DE3F11]" />
                  <span>Nation Building Through Skill Excellence</span>
                </div>
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>

      {/* SECTION 3 [PURPLE]: EXECUTIVE PATRONS & LEADERSHIP (CHROMA GRID WITH LARGE PHOTOS) */}
      <section className="py-24 bg-[#241147] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-[#DE3F11] mb-2 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#DE3F11]" />
              <span>Executive Leadership & Guidance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Leadership Vision
            </h2>
            <p className="text-sm text-[#E2D9F3] mt-2">
              Guidance from the architects of futuristic management education and leadership development at Ramaiah University of Applied Sciences.
            </p>
          </div>

          {/* Interactive ChromaGrid Spotlight for Key Leadership */}
          <div className="relative min-h-[440px]">
            <ChromaGrid
              items={chromaLeadershipItems}
              radius={625}
              columns={3}
              damping={1.05}
              fadeOut={1.15}
              ease="power3.out"
            />
          </div>

          {/* Interactive Governance Hierarchy & Organogram */}
          <OrganogramChart
            activeRoleGroup={activeTab}
            onSelectRoleGroup={(group) => setActiveTab(group)}
          />
        </div>
      </section>

      {/* SECTION 4 [WHITE/LIGHT]: GOVERNANCE, COMMITTEES & ADVISORY DIRECTORY (CHROMA GRID) */}
      <section className="py-24 bg-[#F7F4FC] text-[#1E0C3D] border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-[#9C1256] mb-2">
              Governance & Mentorship
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E0C3D]">
              Leadership, Committees & Advisory Board
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Meet the faculty deans, executive committee members, and national advisors driving the LEADS mission.
            </p>
          </div>

          {/* Filter Tabs matching the official Organogram */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {tabOptions.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                  activeTab === tab.value
                    ? "bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-md scale-105"
                    : "bg-white text-[#361C6A] border border-purple-200 shadow-sm hover:border-[#DE3F11]/50 hover:bg-purple-50/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Members ChromaGrid with Large Photos and Highlighted Details */}
          <div className="relative min-h-[400px]">
            <ChromaGrid
              items={chromaDirectoryItems}
              radius={625}
              columns={4}
              damping={1.05}
              fadeOut={1.15}
              ease="power3.out"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 [PURPLE]: INSTITUTIONAL AFFILIATION SHOWCASE */}
      <section className="py-20 bg-[#241147] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BorderGlow
            edgeSensitivity={30}
            glowColor="330 85 50"
            backgroundColor="#2A1454"
            borderRadius={28}
            glowRadius={45}
            glowIntensity={1.1}
            colors={["#9C1256", "#DE3F11", "#FFFFFF"]}
            animated={true}
            className="shadow-2xl"
          >
            <div className="p-8 sm:p-12 text-center relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-[#361C6A] border border-[#DE3F11]/40 text-[#DE3F11] flex items-center justify-center mx-auto mb-6 shadow-md">
                <Building2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Academic & Institutional Affiliation
              </h2>
              <p className="text-sm sm:text-base text-[#E2D9F3] max-w-2xl mx-auto leading-relaxed">
                LEADS Next Gen Centre proudly operates within the Faculty of Management and Commerce (FMC) ecosystem at M. S. Ramaiah University of Applied Sciences (RUAS), Bengaluru, combining empirical academic rigor with practical national leadership execution.
              </p>
            </div>
          </BorderGlow>
        </div>
      </section>
    </div>
  );
}
