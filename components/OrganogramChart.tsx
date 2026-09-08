"use client";

import React from "react";
import { Shield, Award, Users, ChevronDown } from "lucide-react";

interface OrganogramChartProps {
  onSelectRoleGroup?: (group: string) => void;
  activeRoleGroup?: string;
}

export default function OrganogramChart({
  onSelectRoleGroup,
  activeRoleGroup,
}: OrganogramChartProps) {
  return (
    <div className="w-full max-w-5xl mx-auto my-12 p-6 sm:p-10 rounded-3xl bg-[#1E0C3D] border border-white/15 shadow-2xl relative overflow-hidden text-white">
      {/* Soft Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-[#9C1256]/15 to-[#DE3F11]/15 blur-3xl pointer-events-none" />

      <div className="text-center mb-10 relative z-10">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-semibold mb-3 border border-white/20">
          <Award className="w-3.5 h-3.5 text-[#DE3F11]" />
          <span>Governance & Operational Structure</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          LEADS Organogram & Hierarchy
        </h3>
        <p className="text-xs sm:text-sm text-[#E2D9F3] mt-1 max-w-xl mx-auto">
          Official institutional governance flow from University Leadership down to Student Executive Wings.
        </p>
      </div>

      <div className="flex flex-col items-center relative z-10 space-y-4">
        {/* LEVEL 1: PATRON */}
        <button
          type="button"
          onClick={() => onSelectRoleGroup?.("Patron & Chief Advisor")}
          className={`w-72 sm:w-80 p-4 rounded-2xl text-center transition-all duration-300 shadow-xl border cursor-pointer ${
            activeRoleGroup === "Patron & Chief Advisor"
              ? "bg-gradient-to-r from-[#9C1256] to-[#DE3F11] border-white scale-105 shadow-2xl"
              : "bg-[#2A1454] border-white/20 hover:border-[#DE3F11]/60 hover:scale-[1.02]"
          }`}
        >
          <div className="text-sm sm:text-base font-extrabold tracking-wider text-white">
            PATRON
          </div>
          <div className="text-xs text-[#E2D9F3] italic font-light mt-0.5">
            Hon. Vice Chancellor, RUAS
          </div>
        </button>

        {/* Connector Line 1 */}
        <div className="w-0.5 h-6 bg-gradient-to-b from-[#DE3F11] to-[#9C1256]" />

        {/* LEVEL 2: CHIEF ADVISOR */}
        <button
          type="button"
          onClick={() => onSelectRoleGroup?.("Patron & Chief Advisor")}
          className={`w-72 sm:w-80 p-4 rounded-2xl text-center transition-all duration-300 shadow-xl border cursor-pointer ${
            activeRoleGroup === "Patron & Chief Advisor"
              ? "bg-gradient-to-r from-[#9C1256] to-[#DE3F11] border-white scale-105 shadow-2xl"
              : "bg-[#2A1454] border-white/20 hover:border-[#DE3F11]/60 hover:scale-[1.02]"
          }`}
        >
          <div className="text-sm sm:text-base font-extrabold tracking-wider text-white">
            CHIEF ADVISOR
          </div>
          <div className="text-xs text-[#E2D9F3] italic font-light mt-0.5">
            Dean, FMC - RUAS
          </div>
        </button>

        {/* Connector Line 2 */}
        <div className="w-0.5 h-6 bg-gradient-to-b from-[#9C1256] to-[#DE3F11]" />

        {/* LEVEL 3: CENTRE HEAD */}
        <button
          type="button"
          onClick={() => onSelectRoleGroup?.("Centre Head & Faculty Leads")}
          className={`w-72 sm:w-80 p-4 rounded-2xl text-center transition-all duration-300 shadow-xl border cursor-pointer ${
            activeRoleGroup === "Centre Head & Faculty Leads"
              ? "bg-gradient-to-r from-[#9C1256] to-[#DE3F11] border-white scale-105 shadow-2xl"
              : "bg-[#2A1454] border-white/20 hover:border-[#DE3F11]/60 hover:scale-[1.02]"
          }`}
        >
          <div className="text-sm sm:text-base font-extrabold tracking-wider text-white">
            CENTRE HEAD
          </div>
          <div className="text-xs text-[#E2D9F3] italic font-light mt-0.5">
            LEADS Next Gen Centre
          </div>
        </button>

        {/* Connector Line 3 (Branching) */}
        <div className="w-0.5 h-6 bg-gradient-to-b from-[#DE3F11] to-white/40" />

        {/* LEVEL 4: FACULTY & OPERATIONAL HEADS (4 Boxes Grid) */}
        <div className="w-full pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Centre Head & Faculty Leads")}
              className="p-4 rounded-2xl text-center bg-gradient-to-b from-sky-600/30 to-sky-900/40 border border-sky-400/40 hover:border-sky-300 shadow-lg transition-all hover:scale-[1.03] cursor-pointer"
            >
              <div className="text-xs sm:text-sm font-bold text-white">
                Event Head
              </div>
              <div className="text-xs text-sky-200 mt-0.5">
                (GG Campus)
              </div>
            </button>

            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Centre Head & Faculty Leads")}
              className="p-4 rounded-2xl text-center bg-gradient-to-b from-sky-600/30 to-sky-900/40 border border-sky-400/40 hover:border-sky-300 shadow-lg transition-all hover:scale-[1.03] cursor-pointer"
            >
              <div className="text-xs sm:text-sm font-bold text-white">
                Event Head
              </div>
              <div className="text-xs text-sky-200 mt-0.5">
                (RTC Campus)
              </div>
            </button>

            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Centre Head & Faculty Leads")}
              className="p-4 rounded-2xl text-center bg-gradient-to-b from-sky-600/30 to-sky-900/40 border border-sky-400/40 hover:border-sky-300 shadow-lg transition-all hover:scale-[1.03] cursor-pointer"
            >
              <div className="text-xs sm:text-sm font-bold text-white">
                Head
              </div>
              <div className="text-xs text-sky-200 mt-0.5">
                Industry Collaboration
              </div>
            </button>

            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Centre Head & Faculty Leads")}
              className="p-4 rounded-2xl text-center bg-gradient-to-b from-sky-600/30 to-sky-900/40 border border-sky-400/40 hover:border-sky-300 shadow-lg transition-all hover:scale-[1.03] cursor-pointer"
            >
              <div className="text-xs sm:text-sm font-bold text-white">
                Head
              </div>
              <div className="text-xs text-sky-200 mt-0.5">
                Finance
              </div>
            </button>
          </div>
        </div>

        {/* Connector Line 4 */}
        <div className="w-0.5 h-6 bg-gradient-to-b from-white/40 to-[#DE3F11]" />

        {/* LEVEL 5: STUDENT GOVERNANCE COUNCILS (3 Boxes Grid) */}
        <div className="w-full pt-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Student Trainee Associates")}
              className={`p-4 rounded-2xl text-center transition-all duration-300 border shadow-lg cursor-pointer ${
                activeRoleGroup === "Student Trainee Associates"
                  ? "bg-gradient-to-r from-[#9C1256] to-[#DE3F11] border-white scale-105"
                  : "bg-white/10 hover:bg-white/15 border-white/20 hover:border-[#DE3F11]/60 hover:scale-[1.02]"
              }`}
            >
              <div className="text-xs sm:text-sm font-extrabold text-white">
                Student
              </div>
              <div className="text-xs font-semibold text-[#E2D9F3] mt-0.5">
                Trainee Associates
              </div>
            </button>

            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Student Core Council")}
              className={`p-4 rounded-2xl text-center transition-all duration-300 border shadow-lg cursor-pointer ${
                activeRoleGroup === "Student Core Council"
                  ? "bg-gradient-to-r from-[#9C1256] to-[#DE3F11] border-white scale-105"
                  : "bg-white/10 hover:bg-white/15 border-white/20 hover:border-[#DE3F11]/60 hover:scale-[1.02]"
              }`}
            >
              <div className="text-xs sm:text-sm font-extrabold text-white">
                Student
              </div>
              <div className="text-xs font-semibold text-[#E2D9F3] mt-0.5">
                Core Council
              </div>
            </button>

            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Student Advisory Council")}
              className={`p-4 rounded-2xl text-center transition-all duration-300 border shadow-lg cursor-pointer ${
                activeRoleGroup === "Student Advisory Council"
                  ? "bg-gradient-to-r from-[#9C1256] to-[#DE3F11] border-white scale-105"
                  : "bg-white/10 hover:bg-white/15 border-white/20 hover:border-[#DE3F11]/60 hover:scale-[1.02]"
              }`}
            >
              <div className="text-xs sm:text-sm font-extrabold text-white">
                Student
              </div>
              <div className="text-xs font-semibold text-[#E2D9F3] mt-0.5">
                Advisory Council
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
