"use client";

import React from "react";
import {
  Shield,
  Award,
  Users,
  UserCheck,
  Crown,
  GraduationCap,
  Building,
  Coins,
  CalendarDays,
  UserPlus,
  Landmark,
  BookOpenCheck,
} from "lucide-react";

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
      {/* Background Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#9C1256]/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#DE3F11]/20 blur-3xl rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-10 relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs 3xl:text-sm font-semibold mb-3 border border-white/20 shadow-sm">
          <Award className="w-4 h-4 text-[#DE3F11]" />
          <span>Institutional Governance & Organizational Architecture</span>
        </div>
        <h3 className="text-2xl sm:text-4xl 2xl:text-5xl font-extrabold text-white">
          LEADS Organogram & Leadership Structure
        </h3>
        <p className="text-xs sm:text-sm 2xl:text-base text-[#E2D9F3] mt-2 max-w-2xl mx-auto leading-relaxed">
          Official organizational chart linking University Patronage, Executive Deanship, Operational Heads, and Student Associate Councils.
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Tier 1: Patron (Vice Chancellor) */}
        <div className="w-full max-w-md">
          <button
            type="button"
            onClick={() => onSelectRoleGroup?.("Patron & Chief Advisor")}
            className={`w-full p-5 rounded-2xl text-center border transition-all duration-300 cursor-pointer ${
              activeRoleGroup === "Patron & Chief Advisor"
                ? "bg-gradient-to-r from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-105"
                : "bg-blue-900/40 border-blue-400/50 hover:border-blue-300 shadow-xl"
            }`}
          >
            <Crown className="w-7 h-7 text-amber-400 mx-auto mb-1.5" />
            <div className="text-lg font-black text-white">Patron</div>
            <div className="text-sm text-amber-300 font-extrabold mt-0.5">Prof. Kuldeep Kumar Raina</div>
            <div className="text-xs text-blue-200/90 font-medium">Hon. Vice Chancellor, RUAS</div>
          </button>
        </div>

        {/* Vertical Spine from Patron with Dotted Horizontal Line to BoG & BoA on Right */}
        <div className="w-full max-w-4xl relative flex flex-col items-center">
          {/* Top Line Segment touching Patron */}
          <div className="w-0.5 h-8 bg-gradient-to-b from-amber-400 to-blue-400" />

          {/* Intermediate Junction with Dotted Branch to Right */}
          <div className="w-full relative flex items-center justify-center">
            {/* Vertical Flowchart Line Segment */}
            <div className="w-0.5 h-24 bg-gradient-to-b from-blue-400 to-emerald-400" />

            {/* Dotted Horizontal Branch to Right for BoG & BoA */}
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 flex items-center">
              {/* Dotted Line */}
              <div className="w-6 sm:w-12 md:w-20 border-t-2 border-dashed border-blue-400/80" />

              {/* BoG & BoA Box */}
              <div className="flex flex-col sm:flex-row gap-3 p-3 rounded-2xl bg-blue-950/60 border border-blue-400/40 backdrop-blur-md shadow-2xl">
                {/* BoG */}
                <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-400/30 text-center min-w-[120px] sm:min-w-[140px]">
                  <Landmark className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                  <div className="text-xs font-black text-blue-100">BoG</div>
                  <div className="text-[10px] text-blue-200/80 font-medium">Board of Governors</div>
                </div>

                {/* BoA */}
                <button
                  type="button"
                  onClick={() => onSelectRoleGroup?.("Governing & Advisory")}
                  className={`p-3 rounded-xl text-center min-w-[120px] sm:min-w-[140px] border transition-all cursor-pointer ${
                    activeRoleGroup === "Governing & Advisory"
                      ? "bg-gradient-to-r from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-lg"
                      : "bg-blue-900/40 border-blue-400/30 hover:border-blue-300"
                  }`}
                >
                  <Users className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                  <div className="text-xs font-black text-blue-100">BoA</div>
                  <div className="text-[10px] text-blue-200/80 font-medium">Board of Advisors</div>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Line Segment touching Chief Advisor / Advisor */}
          <div className="w-0.5 h-6 bg-emerald-400" />
        </div>

        {/* Tier 2: Chief Advisor & Advisor */}
        <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Chief Advisor */}
          <button
            type="button"
            onClick={() => onSelectRoleGroup?.("Patron & Chief Advisor")}
            className={`p-5 rounded-2xl text-center border transition-all duration-300 cursor-pointer ${
              activeRoleGroup === "Patron & Chief Advisor"
                ? "bg-gradient-to-r from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-105"
                : "bg-emerald-950/40 border-emerald-400/40 hover:border-emerald-300 shadow-lg"
            }`}
          >
            <Shield className="w-6 h-6 text-emerald-400 mx-auto mb-1.5" />
            <div className="text-base font-black text-white">Chief Advisor</div>
            <div className="text-xs text-emerald-300 font-bold mt-0.5">Dr. K. M. Sharath Kumar</div>
            <div className="text-[11px] text-emerald-100/90 font-medium">Dean, Faculty of Management and Commerce - RUAS</div>
          </button>

          {/* Advisor */}
          <button
            type="button"
            onClick={() => onSelectRoleGroup?.("Centers Leadership")}
            className={`p-5 rounded-2xl text-center border transition-all duration-300 cursor-pointer ${
              activeRoleGroup === "Centers Leadership"
                ? "bg-gradient-to-r from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-105"
                : "bg-emerald-950/40 border-emerald-400/40 hover:border-emerald-300 shadow-lg"
            }`}
          >
            <UserCheck className="w-6 h-6 text-emerald-400 mx-auto mb-1.5" />
            <div className="text-base font-black text-white">Advisor</div>
            <div className="text-xs text-emerald-300 font-bold mt-0.5">Dr. Subhadeep Mukherjee</div>
            <div className="text-[11px] text-emerald-100/90 font-medium">CEO of RTBI</div>
          </button>
        </div>

        {/* Connector Line -> Centre Head (touching boxes) */}
        <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-400 to-purple-400" />

        {/* Tier 3: Centre Head */}
        <div className="w-full max-w-md">
          <button
            type="button"
            onClick={() => onSelectRoleGroup?.("Centers Leadership")}
            className={`w-full p-5 rounded-2xl text-center border transition-all duration-300 cursor-pointer ${
              activeRoleGroup === "Centers Leadership"
                ? "bg-gradient-to-b from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-105"
                : "bg-purple-950/50 border-purple-400/50 hover:border-purple-300 shadow-xl"
            }`}
          >
            <Crown className="w-7 h-7 text-purple-300 mx-auto mb-1.5" />
            <div className="text-xl font-black text-white">Centre Head</div>
            <div className="text-sm text-purple-200 font-extrabold mt-0.5">Dr. Pallabi Mund</div>
            <div className="text-xs text-purple-300/90 font-medium">Centre Head, LEADS Next-Gen Centre</div>
          </button>
        </div>

        {/* Connector Line -> Functional Heads (touching boxes) */}
        <div className="w-0.5 h-8 bg-gradient-to-b from-purple-400 to-amber-400" />

        {/* Tier 4: Functional Heads & Finance Hierarchy */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {/* Column 1: Unified Finance Department Block */}
          <div className="flex flex-col gap-3 p-4 rounded-3xl bg-amber-950/20 border border-amber-500/30 shadow-lg">
            <div className="text-center text-[11px] font-black text-amber-400 uppercase tracking-widest mb-0.5">
              Finance
            </div>

            {/* Finance Advisor & Auditor (Dr. Ajay R) */}
            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Centers Leadership")}
              className={`p-4 rounded-2xl text-center border transition-all duration-300 flex flex-col items-center justify-center cursor-pointer ${
                activeRoleGroup === "Centers Leadership"
                  ? "bg-gradient-to-b from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-105"
                  : "bg-amber-950/50 border-amber-500/40 hover:border-amber-300 shadow-lg"
              }`}
            >
              <Coins className="w-6 h-6 text-amber-400 mb-1.5" />
              <div className="text-sm font-extrabold text-amber-100">Finance Advisor and Auditor</div>
              <div className="text-xs text-amber-300 font-bold mt-1">Dr. Ajay R</div>
              <div className="text-[11px] text-amber-200/80 font-medium mt-0.5 leading-snug">
                Senior Assistant Professor & Program Head (BCom), Faculty of Management and Commerce, RUAS
              </div>
            </button>

            {/* Vertical Connector Line touching Dr. Ajay and Dr. Tapas boxes */}
            <div className="flex justify-center my-0">
              <div className="w-0.5 h-6 bg-gradient-to-b from-amber-400 to-amber-500" />
            </div>

            {/* Finance Officer (Dr. Tapas Kumar Sahoo) - Level Down */}
            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Centers Leadership")}
              className={`p-3.5 rounded-2xl text-center border transition-all duration-300 flex flex-col items-center justify-center cursor-pointer ${
                activeRoleGroup === "Centers Leadership"
                  ? "bg-gradient-to-b from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-105"
                  : "bg-amber-950/40 border-amber-400/30 hover:border-amber-300 shadow-lg"
              }`}
            >
              <Coins className="w-5 h-5 text-amber-300 mb-1" />
              <div className="text-xs font-extrabold text-amber-100">Finance Officer</div>
              <div className="text-xs text-amber-300 font-bold mt-0.5">Dr. Tapas Kumar Sahoo</div>
              <div className="text-[10px] text-amber-200/80 font-medium mt-0.5 leading-snug">
                Assistant Professor of Faculty of Management and Commerce, RUAS
              </div>
            </button>
          </div>

          {/* Column 2: Head Industry Connect */}
          <button
            type="button"
            onClick={() => onSelectRoleGroup?.("Centers Leadership")}
            className={`p-5 rounded-2xl text-center border transition-all duration-300 flex flex-col items-center justify-center cursor-pointer h-fit ${
              activeRoleGroup === "Centers Leadership"
                ? "bg-gradient-to-b from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-105"
                : "bg-blue-950/40 border-blue-400/40 hover:border-blue-300 shadow-lg"
            }`}
          >
            <Building className="w-6 h-6 text-blue-400 mb-2" />
            <div className="text-sm font-extrabold text-white">Head Industry Connect</div>
            <div className="text-xs text-blue-300 font-bold mt-2">Mrs. Sujata Bijwe</div>
            <div className="text-[11px] text-blue-200/90 font-medium mt-0.5 leading-snug">
              Adjunct Faculty of Faculty of Management and Commerce, RUAS
            </div>
          </button>

          {/* Column 3: Head Events RTC */}
          <button
            type="button"
            onClick={() => onSelectRoleGroup?.("Centers Leadership")}
            className={`p-5 rounded-2xl text-center border transition-all duration-300 flex flex-col items-center justify-center cursor-pointer h-fit ${
              activeRoleGroup === "Centers Leadership"
                ? "bg-gradient-to-b from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-105"
                : "bg-rose-950/40 border-rose-400/40 hover:border-rose-300 shadow-lg"
            }`}
          >
            <CalendarDays className="w-6 h-6 text-rose-400 mb-2" />
            <div className="text-sm font-extrabold text-white">Head Events RTC</div>
            <div className="text-xs text-rose-300 font-bold mt-2">Dr. Kiran Kumar B.M.</div>
            <div className="text-[11px] text-rose-200/90 font-medium leading-snug">Associate Professor, FET</div>
            <div className="text-[10px] text-rose-300/90 font-semibold mt-0.5">Head - IISc, RUAS</div>
          </button>
        </div>

        {/* Connector Line -> Councils & Wings (touching boxes) */}
        <div className="w-0.5 h-8 bg-gradient-to-b from-amber-400 to-[#DE3F11]" />

        {/* Tier 5: Councils & Wings */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Alumni Student Council */}
          <button
            type="button"
            onClick={() => onSelectRoleGroup?.("Student Core Council")}
            className={`p-5 rounded-2xl text-center border transition-all duration-300 cursor-pointer ${
              activeRoleGroup === "Student Core Council"
                ? "bg-gradient-to-b from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-105"
                : "bg-blue-950/40 border-blue-400/30 hover:border-blue-300 shadow-lg"
            }`}
          >
            <GraduationCap className="w-6 h-6 text-blue-400 mx-auto mb-1.5" />
            <div className="text-sm font-extrabold text-white">Alumni Student Council</div>
          </button>

          {/* Student Advisory Committee */}
          <button
            type="button"
            onClick={() => onSelectRoleGroup?.("Student Advisory Council")}
            className={`p-5 rounded-2xl text-center border transition-all duration-300 cursor-pointer ${
              activeRoleGroup === "Student Advisory Council"
                ? "bg-gradient-to-b from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-105"
                : "bg-emerald-950/40 border-emerald-400/30 hover:border-emerald-300 shadow-lg"
            }`}
          >
            <BookOpenCheck className="w-6 h-6 text-emerald-400 mx-auto mb-1.5" />
            <div className="text-sm font-extrabold text-white">Student Advisory Committee</div>
          </button>

          {/* Student Core Council */}
          <button
            type="button"
            onClick={() => onSelectRoleGroup?.("Student Core Council")}
            className={`p-5 rounded-2xl text-center border transition-all duration-300 cursor-pointer ${
              activeRoleGroup === "Student Core Council"
                ? "bg-gradient-to-b from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-105"
                : "bg-amber-950/40 border-amber-400/30 hover:border-amber-300 shadow-lg"
            }`}
          >
            <Crown className="w-6 h-6 text-amber-400 mx-auto mb-1.5" />
            <div className="text-sm font-extrabold text-white">Student Core Council</div>
          </button>

          {/* Student Trainee Associates */}
          <button
            type="button"
            onClick={() => onSelectRoleGroup?.("Student Trainee Associates")}
            className={`p-5 rounded-2xl text-center border transition-all duration-300 cursor-pointer ${
              activeRoleGroup === "Student Trainee Associates"
                ? "bg-gradient-to-b from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-105"
                : "bg-purple-950/40 border-purple-400/30 hover:border-purple-300 shadow-lg"
            }`}
          >
            <UserPlus className="w-6 h-6 text-purple-400 mx-auto mb-1.5" />
            <div className="text-sm font-extrabold text-white">Student Trainee Associates</div>
          </button>
        </div>
      </div>
    </div>
  );
}
