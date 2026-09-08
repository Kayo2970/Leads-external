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

  // Partition member categories
  const partitions = [
    {
      id: "patron-advisors",
      group: "Patron & Chief Advisor" as const,
      title: "Patron & Chief Advisor",
      badge: "Governance Tier 01",
      count: "2 Leaders",
      description:
        "High-level institutional patronage and strategic stewardship guiding the academic and national mission of LEADS.",
      members: BOARD_MEMBERS_DATA.filter((m) => m.roleGroup === "Patron & Chief Advisor"),
      columns: 2,
    },
    {
      id: "faculty-leads",
      group: "Centre Head & Faculty Leads" as const,
      title: "Centre Leadership & Faculty Leads",
      badge: "Governance Tier 02",
      count: "5 Faculty Heads",
      description:
        "Faculty leadership driving daily centre operations, inter-campus event execution, corporate collaborations, and fiscal governance.",
      members: BOARD_MEMBERS_DATA.filter((m) => m.roleGroup === "Centre Head & Faculty Leads"),
      columns: 3,
    },
    {
      id: "core-council",
      group: "Student Core Council" as const,
      title: "Student Core Council",
      badge: "Governance Tier 03",
      count: "8 Senior Officers",
      description:
        "Senior student executive leadership spearheading national summits, public relations, operations, finance, design, and research initiatives.",
      members: BOARD_MEMBERS_DATA.filter((m) => m.roleGroup === "Student Core Council"),
      columns: 4,
    },
    {
      id: "student-advisory",
      group: "Student Advisory Council" as const,
      title: "Student Advisory Council",
      badge: "Governance Tier 04",
      count: "2 Senior Advisors",
      description:
        "Experienced student leaders providing strategic counsel, institutional continuity, and mentorship across committees.",
      members: BOARD_MEMBERS_DATA.filter((m) => m.roleGroup === "Student Advisory Council"),
      columns: 2,
    },
    {
      id: "trainee-associates",
      group: "Student Trainee Associates" as const,
      title: "Student Trainee Associates & Organizing Committee",
      badge: "Governance Tier 05",
      count: "17 Associates",
      description:
        "The operational powerhouse managing ground logistics, digital media, creative design, communications, finance, and summit workflows.",
      members: BOARD_MEMBERS_DATA.filter((m) => m.roleGroup === "Student Trainee Associates"),
      columns: 4,
    },
    {
      id: "governing-advisory",
      group: "Governing & Advisory" as const,
      title: "Governing & Corporate Advisory Board",
      badge: "Governance Tier 06",
      count: "6 Distinguished Advisors",
      description:
        "Eminent policy makers, government leaders (AIM, NSDC, MeitY, INDIAai), and global corporate executives providing nationwide strategic direction.",
      members: BOARD_MEMBERS_DATA.filter((m) => m.roleGroup === "Governing & Advisory"),
      columns: 3,
    },
  ];

  const mapToChromaItems = (members: BoardMember[]): ChromaItem[] =>
    members.map((m, idx) => ({
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

  const visiblePartitions =
    activeTab === "All"
      ? partitions
      : partitions.filter((p) => p.group === activeTab);

  return (
    <div className="min-h-screen">
      {/* SECTION 1 [PURPLE]: HERO HEADER & ANIMATED LOGO BANNERS */}
      <section className="pt-32 pb-20 3xl:pt-48 3xl:pb-32 bg-[#361C6A] text-white relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-gradient-to-r from-[#9C1256]/20 to-[#DE3F11]/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 3xl:space-x-3 px-4 py-1.5 3xl:px-6 3xl:py-3 rounded-full bg-white/10 text-white border border-white/20 text-xs 3xl:text-lg font-semibold mb-6 3xl:mb-10 shadow-sm">
            <Shield className="w-3.5 h-3.5 3xl:w-5 3xl:h-5 text-[#DE3F11]" />
            <span>About the Centre & Governance</span>
          </div>
          <h1 className="text-4xl sm:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-extrabold text-white tracking-tight max-w-5xl 2xl:max-w-6xl 3xl:max-w-[1800px] mx-auto leading-tight">
            Centre for Leadership Empowering Attitude Development for Sustainability
          </h1>
          <p className="mt-5 3xl:mt-8 text-base sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#E2D9F3] max-w-3xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto leading-relaxed font-normal">
            LEADS Next-Gen Centre is a premier leadership and executive empowerment centre at RUAS, dedicated to fostering multidisciplinary non-technical leadership, strategic governance, and future-ready capabilities across India.
          </p>

          {/* Official Centre & FMC Animated Logo Banners */}
          <div className="mt-12 3xl:mt-16 flex flex-wrap items-center justify-center gap-6 3xl:gap-10">
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
              <div className="p-4 sm:p-5 3xl:p-8 flex items-center justify-center">
                <img
                  src="/leads-header-logo.png"
                  alt="LEADS Next Gen Centre - Ramaiah University of Applied Sciences"
                  className="h-12 sm:h-16 3xl:h-20 w-auto object-contain"
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
              <div className="p-4 sm:p-5 3xl:p-8 flex items-center justify-center">
                <img
                  src="/fmc-logo-white.png"
                  alt="Faculty of Management and Commerce - RUAS"
                  className="h-12 sm:h-16 3xl:h-20 w-auto object-contain"
                />
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>

      {/* SECTION 2 [WHITE/LIGHT]: STORY, VISION & MISSION BENTO */}
      <section className="py-24 3xl:py-36 bg-[#FDFBFF] text-[#1E0C3D] border-y border-purple-100">
        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12">
          <div className="text-center max-w-2xl 3xl:max-w-4xl mx-auto mb-16 3xl:mb-24">
            <div className="text-xs 3xl:text-base font-bold uppercase tracking-wider text-[#9C1256] mb-2">
              Foundational Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl 2xl:text-5xl 3xl:text-6xl font-extrabold text-[#1E0C3D]">
              Our Strategic Imperative
            </h2>
            <p className="text-sm sm:text-base 2xl:text-xl 3xl:text-2xl text-slate-600 mt-2">
              Bridging the leadership gap through non-technical mastery and sustainable vision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 3xl:gap-12">
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
              <div className="p-8 3xl:p-12 space-y-4 3xl:space-y-6">
                <div className="w-12 h-12 3xl:w-16 3xl:h-16 rounded-2xl bg-gradient-to-br from-[#9C1256] to-[#DE3F11] text-white flex items-center justify-center shadow-md">
                  <BookOpen className="w-6 h-6 3xl:w-8 3xl:h-8 text-white" />
                </div>
                <h3 className="text-2xl 3xl:text-3xl font-bold text-[#1E0C3D]">Our Foundation</h3>
                <p className="text-xs sm:text-sm 2xl:text-base 3xl:text-lg text-slate-600 leading-relaxed">
                  Established under the Faculty of Management and Commerce (FMC) at RUAS, LEADS Next-Gen Centre addresses a crucial national imperative: empowering emerging executives, founders, and scholars with holistic, non-technical leadership, ethical governance, and strategic management skills.
                </p>
                <p className="text-xs sm:text-sm 2xl:text-base 3xl:text-lg text-slate-600 leading-relaxed">
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
              <div className="p-8 3xl:p-12 space-y-4 3xl:space-y-6">
                <div className="w-12 h-12 3xl:w-16 3xl:h-16 rounded-2xl bg-gradient-to-br from-[#9C1256] to-[#DE3F11] text-white flex items-center justify-center shadow-md">
                  <Compass className="w-6 h-6 3xl:w-8 3xl:h-8 text-white" />
                </div>
                <h3 className="text-2xl 3xl:text-3xl font-bold text-[#1E0C3D]">Our Vision</h3>
                <p className="text-xs sm:text-sm 2xl:text-base 3xl:text-lg text-slate-600 leading-relaxed">
                  To empower future leaders to be purpose-driven, ethical changemakers who champion sustainable innovation, non-technical capability excellence, and shape an equitable, resilient future for Bharat and the world.
                </p>
                <div className="pt-2 flex items-center space-x-2 text-xs 2xl:text-sm 3xl:text-base font-bold text-[#9C1256]">
                  <CheckCircle className="w-4 h-4 3xl:w-5 3xl:h-5 text-[#DE3F11]" />
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
              <div className="p-8 3xl:p-12 space-y-4 3xl:space-y-6">
                <div className="w-12 h-12 3xl:w-16 3xl:h-16 rounded-2xl bg-gradient-to-br from-[#9C1256] to-[#DE3F11] text-white flex items-center justify-center shadow-md">
                  <Target className="w-6 h-6 3xl:w-8 3xl:h-8 text-white" />
                </div>
                <h3 className="text-2xl 3xl:text-3xl font-bold text-[#1E0C3D]">Our Mission</h3>
                <p className="text-xs sm:text-sm 2xl:text-base 3xl:text-lg text-slate-600 leading-relaxed">
                  To build an active ecosystem where experiential learning, high-stakes leadership simulations, and executive mentorship elevate individuals, enterprises, and communities — turning raw knowledge into purposeful, sustainable leadership action.
                </p>
                <div className="pt-2 flex items-center space-x-2 text-xs 2xl:text-sm 3xl:text-base font-bold text-[#9C1256]">
                  <CheckCircle className="w-4 h-4 3xl:w-5 3xl:h-5 text-[#DE3F11]" />
                  <span>Nation Building Through Skill Excellence</span>
                </div>
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>

      {/* SECTION 3 [PURPLE]: EXECUTIVE PATRONS & ORGANOGRAM */}
      <section className="py-24 3xl:py-36 bg-[#241147] text-white relative overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12">
          <div className="text-center max-w-3xl 3xl:max-w-5xl mx-auto mb-14 3xl:mb-20">
            <div className="text-xs 3xl:text-base font-bold uppercase tracking-wider text-[#DE3F11] mb-2 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 3xl:w-5 3xl:h-5 text-[#DE3F11]" />
              <span>Governance Architecture & Hierarchy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl 2xl:text-5xl 3xl:text-6xl font-extrabold text-white">
              Institutional Governance Structure
            </h2>
            <p className="text-sm 2xl:text-base 3xl:text-xl text-[#E2D9F3] mt-2">
              Comprehensive structural organogram representing the executive leadership, faculty leads, and student council governance at LEADS Next-Gen Centre.
            </p>
          </div>

          {/* Interactive Governance Hierarchy & Organogram */}
          <OrganogramChart
            activeRoleGroup={activeTab}
            onSelectRoleGroup={(group) => {
              setActiveTab(group);
              const el = document.getElementById("members-directory-section");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        </div>
      </section>

      {/* SECTION 4 [WHITE/LIGHT]: PARTITIONS OF ALL MEMBERS DIRECTORY */}
      <section
        id="members-directory-section"
        className="py-24 3xl:py-36 bg-[#F7F4FC] text-[#1E0C3D] border-y border-purple-100 scroll-mt-20"
      >
        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12">
          <div className="text-center max-w-3xl 3xl:max-w-5xl mx-auto mb-10 3xl:mb-16">
            <div className="text-xs 3xl:text-base font-bold uppercase tracking-wider text-[#9C1256] mb-2">
              Members Directory & Governance Tiers
            </div>
            <h2 className="text-3xl sm:text-4xl 2xl:text-5xl 3xl:text-6xl font-extrabold text-[#1E0C3D]">
              Leadership, Committees & Advisory Board
            </h2>
            <p className="text-sm sm:text-base 2xl:text-xl 3xl:text-2xl text-slate-600 mt-2">
              Explore the partitioned councils, faculty committees, and student executive teams driving LEADS initiatives.
            </p>
          </div>

          {/* Partition Filter Tabs matching the official Organogram */}
          <div className="flex flex-wrap items-center justify-center gap-2 3xl:gap-4 mb-16 3xl:mb-24">
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

          {/* PARTITIONS CONTAINER */}
          <div className="space-y-20 3xl:space-y-28">
            {visiblePartitions.map((partition) => {
              const chromaItems = mapToChromaItems(partition.members);
              return (
                <div
                  key={partition.id}
                  id={partition.id}
                  className="p-6 sm:p-10 3xl:p-16 rounded-3xl 3xl:rounded-[40px] bg-white border border-purple-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Partition Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-purple-100 pb-6 3xl:pb-10 mb-8 3xl:mb-12 gap-4">
                    <div>
                      <div className="flex items-center gap-2.5 3xl:gap-4 mb-2 3xl:mb-4">
                        <span className="px-3 py-1 3xl:px-5 3xl:py-2 rounded-full text-[11px] 3xl:text-base font-bold uppercase tracking-wider bg-[#361C6A] text-white">
                          {partition.badge}
                        </span>
                        <span className="px-2.5 py-0.5 3xl:px-4 3xl:py-1.5 rounded-md text-xs 3xl:text-base font-semibold bg-[#DE3F11]/10 text-[#DE3F11] border border-[#DE3F11]/20">
                          {partition.count}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl 2xl:text-4xl 3xl:text-5xl font-extrabold text-[#1E0C3D]">
                        {partition.title}
                      </h3>
                      <p className="text-xs sm:text-sm 2xl:text-base 3xl:text-xl text-slate-600 mt-1 max-w-3xl 3xl:max-w-5xl">
                        {partition.description}
                      </p>
                    </div>
                  </div>

                  {/* Partition ChromaGrid */}
                  <div className="relative">
                    <ChromaGrid
                      items={chromaItems}
                      radius={625}
                      columns={partition.columns}
                      damping={1.05}
                      fadeOut={1.15}
                      ease="power3.out"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 [PURPLE]: INSTITUTIONAL AFFILIATION SHOWCASE */}
      <section className="py-20 3xl:py-32 bg-[#241147] text-white">
        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12">
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
            <div className="p-8 sm:p-12 3xl:p-20 text-center relative overflow-hidden">
              <div className="w-16 h-16 3xl:w-20 3xl:h-20 rounded-2xl bg-[#361C6A] border border-[#DE3F11]/40 text-[#DE3F11] flex items-center justify-center mx-auto mb-6 3xl:mb-8 shadow-md">
                <Building2 className="w-8 h-8 3xl:w-10 3xl:h-10" />
              </div>
              <h2 className="text-2xl sm:text-3xl 2xl:text-4xl 3xl:text-5xl font-extrabold text-white mb-3 3xl:mb-6">
                Academic & Institutional Affiliation
              </h2>
              <p className="text-sm sm:text-base 2xl:text-xl 3xl:text-2xl text-[#E2D9F3] max-w-2xl 3xl:max-w-4xl mx-auto leading-relaxed">
                LEADS Next Gen Centre proudly operates within the Faculty of Management and Commerce (FMC) ecosystem at M. S. Ramaiah University of Applied Sciences (RUAS), Bengaluru, combining empirical academic rigor with practical national leadership execution.
              </p>
            </div>
          </BorderGlow>
        </div>
      </section>
    </div>
  );
}
