"use client";

import React from "react";
import { Shield, Award, Users, ChevronDown, UserCheck, Crown, Briefcase, GraduationCap, Sparkles } from "lucide-react";

interface OrganogramChartProps {
  onSelectRoleGroup?: (group: string) => void;
  activeRoleGroup?: string;
}

export default function OrganogramChart({
  onSelectRoleGroup,
  activeRoleGroup,
}: OrganogramChartProps) {
  return (
    <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2100px] 4xl:max-w-[2600px] mx-auto my-12 p-6 sm:p-10 3xl:p-16 rounded-3xl 3xl:rounded-[40px] liquid-glass border border-white/20 shadow-2xl relative overflow-hidden text-white">
      {/* Soft Ambient Background Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#9C1256]/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#DE3F11]/20 blur-3xl rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs 3xl:text-sm font-semibold mb-3 border border-white/20 shadow-sm">
          <Award className="w-4 h-4 text-[#DE3F11]" />
          <span>Institutional Governance & Leadership Architecture</span>
        </div>
        <h3 className="text-2xl sm:text-4xl 2xl:text-5xl font-extrabold text-white">
          LEADS Organogram & Operational Structure
        </h3>
        <p className="text-xs sm:text-sm 2xl:text-base text-[#E2D9F3] mt-2 max-w-2xl mx-auto leading-relaxed">
          Integrated hierarchy linking University Leadership, Centre Faculty Heads, Governing Advisors, and Student Executive Wings. Click any tier to filter the directory below.
        </p>
      </div>

      <div className="relative z-10 space-y-8">
        {/* TIER 1: UNIVERSITY PATRONAGE & DEANSHIP (Vertical Hierarchy) */}
        <div className="space-y-4">
          <div className="text-[11px] 2xl:text-xs uppercase font-bold tracking-widest text-[#DE3F11] text-center mb-3">
            Tier 01 · University Patronage & Advisory
          </div>
          
          {/* Patron: Hon. Vice Chancellor */}
          <div className="max-w-xl mx-auto">
            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Patron & Chief Advisor")}
              className={`w-full p-6 rounded-2xl 3xl:rounded-3xl text-left transition-all duration-300 border cursor-pointer liquid-glass-card group ${
                activeRoleGroup === "Patron & Chief Advisor"
                  ? "bg-gradient-to-r from-[#9C1256]/60 to-[#DE3F11]/60 border-white scale-[1.02] shadow-2xl"
                  : "border-white/15 hover:border-[#DE3F11]/50"
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#9C1256] to-[#DE3F11] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <Crown className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-[#DE3F11]">Patron</div>
                  <div className="text-base sm:text-lg font-bold text-white leading-snug">Hon. Vice Chancellor</div>
                  <div className="text-xs text-[#E2D9F3]/80">M. S. Ramaiah University of Applied Sciences</div>
                </div>
              </div>
            </button>
          </div>

          {/* Connector Line VC -> Dean */}
          <div className="flex justify-center">
            <div className="w-0.5 h-5 bg-gradient-to-b from-[#DE3F11] to-[#9C1256]" />
          </div>

          {/* Chief Advisor: Dean, FMC */}
          <div className="max-w-xl mx-auto">
            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Patron & Chief Advisor")}
              className={`w-full p-6 rounded-2xl 3xl:rounded-3xl text-left transition-all duration-300 border cursor-pointer liquid-glass-card group ${
                activeRoleGroup === "Patron & Chief Advisor"
                  ? "bg-gradient-to-r from-[#9C1256]/60 to-[#DE3F11]/60 border-white scale-[1.02] shadow-2xl"
                  : "border-white/15 hover:border-[#DE3F11]/50"
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#9C1256] to-[#DE3F11] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-[#DE3F11]">Chief Advisor</div>
                  <div className="text-base sm:text-lg font-bold text-white leading-snug">Dean, FMC</div>
                  <div className="text-xs text-[#E2D9F3]/80">Faculty of Management and Commerce, RUAS</div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Connector Line */}
        <div className="flex justify-center">
          <div className="w-0.5 h-6 bg-gradient-to-b from-[#DE3F11] to-[#9C1256]" />
        </div>

        {/* TIER 2: CENTRE HEAD & FACULTY LEADS (Full Width 5-Card Grid) */}
        <div>
          <div className="text-[11px] 2xl:text-xs uppercase font-bold tracking-widest text-[#DE3F11] text-center mb-3">
            Tier 02 · Centre Leadership & Faculty Heads
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Centre Head & Faculty Leads")}
              className={`p-5 rounded-2xl text-center transition-all duration-300 border cursor-pointer liquid-glass-card ${
                activeRoleGroup === "Centre Head & Faculty Leads"
                  ? "bg-gradient-to-b from-[#9C1256]/60 to-[#DE3F11]/60 border-white scale-[1.02] shadow-xl"
                  : "border-white/15 hover:border-[#DE3F11]/50"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 mx-auto mb-2 flex items-center justify-center text-[#DE3F11]">
                <UserCheck className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-white leading-tight">Centre Head</div>
              <div className="text-xs text-[#E2D9F3]/80 mt-1">LEADS Operational Lead</div>
            </button>

            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Centre Head & Faculty Leads")}
              className={`p-5 rounded-2xl text-center transition-all duration-300 border cursor-pointer liquid-glass-card ${
                activeRoleGroup === "Centre Head & Faculty Leads"
                  ? "bg-gradient-to-b from-[#9C1256]/60 to-[#DE3F11]/60 border-white scale-[1.02] shadow-xl"
                  : "border-white/15 hover:border-[#DE3F11]/50"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 mx-auto mb-2 flex items-center justify-center text-[#DE3F11]">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-white leading-tight">Event Head</div>
              <div className="text-xs text-[#E2D9F3]/80 mt-1">GG Campus</div>
            </button>

            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Centre Head & Faculty Leads")}
              className={`p-5 rounded-2xl text-center transition-all duration-300 border cursor-pointer liquid-glass-card ${
                activeRoleGroup === "Centre Head & Faculty Leads"
                  ? "bg-gradient-to-b from-[#9C1256]/60 to-[#DE3F11]/60 border-white scale-[1.02] shadow-xl"
                  : "border-white/15 hover:border-[#DE3F11]/50"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 mx-auto mb-2 flex items-center justify-center text-[#DE3F11]">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-white leading-tight">Event Head</div>
              <div className="text-xs text-[#E2D9F3]/80 mt-1">RTC Campus</div>
            </button>

            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Centre Head & Faculty Leads")}
              className={`p-5 rounded-2xl text-center transition-all duration-300 border cursor-pointer liquid-glass-card ${
                activeRoleGroup === "Centre Head & Faculty Leads"
                  ? "bg-gradient-to-b from-[#9C1256]/60 to-[#DE3F11]/60 border-white scale-[1.02] shadow-xl"
                  : "border-white/15 hover:border-[#DE3F11]/50"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 mx-auto mb-2 flex items-center justify-center text-[#DE3F11]">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-white leading-tight">Industry Lead</div>
              <div className="text-xs text-[#E2D9F3]/80 mt-1">Corporate Relations</div>
            </button>

            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Centre Head & Faculty Leads")}
              className={`p-5 rounded-2xl text-center transition-all duration-300 border cursor-pointer liquid-glass-card ${
                activeRoleGroup === "Centre Head & Faculty Leads"
                  ? "bg-gradient-to-b from-[#9C1256]/60 to-[#DE3F11]/60 border-white scale-[1.02] shadow-xl"
                  : "border-white/15 hover:border-[#DE3F11]/50"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 mx-auto mb-2 flex items-center justify-center text-[#DE3F11]">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-white leading-tight">Finance Head</div>
              <div className="text-xs text-[#E2D9F3]/80 mt-1">Fiscal Governance</div>
            </button>
          </div>
        </div>

        {/* Connector Line */}
        <div className="flex justify-center">
          <div className="w-0.5 h-6 bg-gradient-to-b from-[#9C1256] to-[#DE3F11]" />
        </div>

        {/* TIER 3: GOVERNING & ADVISORY BOARD (Right After Faculty Leadership) */}
        <div>
          <div className="text-[11px] 2xl:text-xs uppercase font-bold tracking-widest text-[#DE3F11] text-center mb-3">
            Tier 03 · Governing & Strategic Advisory Board
          </div>
          <div className="max-w-3xl mx-auto">
            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Governing & Advisory")}
              className={`w-full p-5 rounded-2xl 3xl:rounded-3xl text-center transition-all duration-300 border cursor-pointer liquid-glass-card group ${
                activeRoleGroup === "Governing & Advisory"
                  ? "bg-gradient-to-r from-[#9C1256]/60 to-[#DE3F11]/60 border-white scale-[1.02] shadow-2xl"
                  : "border-white/15 hover:border-[#DE3F11]/50"
              }`}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#DE3F11] shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-sm sm:text-base font-bold text-white">Governing & Advisory Board</div>
                  <div className="text-xs text-[#E2D9F3]">Eminent Corporate Leaders, Public Policy Dignitaries & Academic Counselors</div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Connector Line */}
        <div className="flex justify-center">
          <div className="w-0.5 h-6 bg-gradient-to-b from-[#DE3F11] to-[#9C1256]" />
        </div>

        {/* TIER 4: STUDENT EXECUTIVE WINGS */}
        <div>
          <div className="text-[11px] 2xl:text-xs uppercase font-bold tracking-widest text-[#DE3F11] text-center mb-3">
            Tier 04 · Student Executive Wings & Operations
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Student Core Council")}
              className={`p-6 rounded-2xl 3xl:rounded-3xl text-center transition-all duration-300 border cursor-pointer liquid-glass-card ${
                activeRoleGroup === "Student Core Council"
                  ? "bg-gradient-to-r from-[#9C1256]/60 to-[#DE3F11]/60 border-white scale-[1.02] shadow-xl"
                  : "border-white/15 hover:border-[#DE3F11]/50"
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/10 mx-auto mb-3 flex items-center justify-center text-[#DE3F11] shadow-sm">
                <Crown className="w-6 h-6" />
              </div>
              <div className="text-base font-extrabold text-white">Student Core Council</div>
              <div className="text-xs text-[#E2D9F3]/80 mt-1">Presidents, Secretaries, Treasury & Executive Operations</div>
            </button>

            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Student Advisory Council")}
              className={`p-6 rounded-2xl 3xl:rounded-3xl text-center transition-all duration-300 border cursor-pointer liquid-glass-card ${
                activeRoleGroup === "Student Advisory Council"
                  ? "bg-gradient-to-r from-[#9C1256]/60 to-[#DE3F11]/60 border-white scale-[1.02] shadow-xl"
                  : "border-white/15 hover:border-[#DE3F11]/50"
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/10 mx-auto mb-3 flex items-center justify-center text-[#DE3F11] shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="text-base font-extrabold text-white">Student Advisory Council</div>
              <div className="text-xs text-[#E2D9F3]/80 mt-1">Strategic Mentorship, Alumni Affairs & Policy Governance</div>
            </button>

            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Student Trainee Associates")}
              className={`p-6 rounded-2xl 3xl:rounded-3xl text-center transition-all duration-300 border cursor-pointer liquid-glass-card ${
                activeRoleGroup === "Student Trainee Associates"
                  ? "bg-gradient-to-r from-[#9C1256]/60 to-[#DE3F11]/60 border-white scale-[1.02] shadow-xl"
                  : "border-white/15 hover:border-[#DE3F11]/50"
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/10 mx-auto mb-3 flex items-center justify-center text-[#DE3F11] shadow-sm">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-base font-extrabold text-white">Student Trainee Associates</div>
              <div className="text-xs text-[#E2D9F3]/80 mt-1">Emerging Student Coordinators & Event Marshals</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
