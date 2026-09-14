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
    <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2100px] 4xl:max-w-[2600px] mx-auto my-4 sm:my-12 p-3 sm:p-10 3xl:p-16 rounded-2xl sm:rounded-3xl 3xl:rounded-[40px] liquid-glass border border-white/20 shadow-2xl relative overflow-hidden text-white">
      {/* Background Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#9C1256]/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#DE3F11]/20 blur-3xl rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-4 sm:mb-10 relative z-10">
        <div className="inline-flex items-center space-x-1.5 sm:space-x-2 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 text-white text-[10px] sm:text-xs 3xl:text-sm font-semibold mb-2 sm:mb-3 border border-white/20 shadow-sm">
          <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#DE3F11]" />
          <span>Institutional Governance & Architecture</span>
        </div>
        <h3 className="text-lg sm:text-4xl 2xl:text-5xl font-extrabold text-white tracking-tight">
          LEADS Organogram & Leadership
        </h3>
        <p className="text-[11px] sm:text-sm 2xl:text-base text-[#E2D9F3] mt-1 sm:mt-2 max-w-2xl mx-auto leading-relaxed px-2">
          Official organizational chart linking University Patronage, Executive Deanship, Operational Heads, and Student Associate Councils.
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Tier 1: Patron (Vice Chancellor) */}
        <div className="w-full max-w-xs sm:max-w-md">
          <button
            type="button"
            onClick={() => onSelectRoleGroup?.("Centers Leadership")}
            className={`w-full p-2.5 sm:p-5 rounded-xl sm:rounded-2xl text-center border transition-all duration-300 cursor-pointer ${
              activeRoleGroup === "Centers Leadership"
                ? "bg-gradient-to-r from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-[1.02] sm:scale-105"
                : "bg-blue-900/40 border-blue-400/50 hover:border-blue-300 shadow-lg sm:shadow-xl"
            }`}
          >
            <Crown className="w-4 h-4 sm:w-7 sm:h-7 text-amber-400 mx-auto mb-1" />
            <div className="text-[19px] sm:text-[25px] font-black text-white">Patron</div>
            <div className="text-[18px] sm:text-[21px] text-amber-300 font-extrabold mt-0.5">Prof. Kuldeep Kumar Raina</div>
            <div className="text-[16px] sm:text-[19px] text-blue-200/90 font-medium">Hon. Vice Chancellor, RUAS</div>
          </button>
        </div>

        {/* Mobile View: Dedicated Governing & Advisory Row (BoG & BoA) */}
        <div className="md:hidden w-full max-w-xs sm:max-w-md my-0.5 flex flex-col items-center">
          <div className="w-0.5 h-2.5 bg-gradient-to-b from-amber-400 to-blue-400" />
          <div className="w-full p-2 rounded-xl bg-blue-950/60 border border-blue-400/40 backdrop-blur-md shadow-lg">
            <div className="text-[16px] font-bold text-blue-300 uppercase tracking-wider text-center mb-1.5 flex items-center justify-center gap-1">
              <Landmark className="w-3.5 h-3.5 text-blue-400" />
              <span>Governing & Advisory Bodies</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {/* BoG */}
              <div className="p-1.5 rounded-lg bg-blue-900/40 border border-blue-400/30 text-center">
                <Landmark className="w-3.5 h-3.5 text-blue-400 mx-auto mb-0.5" />
                <div className="text-[18px] font-black text-blue-100">BoG</div>
                <div className="text-[15px] text-blue-200/80 font-medium leading-tight">Board of Governors</div>
              </div>

              {/* BoA */}
              <button
                type="button"
                onClick={() => onSelectRoleGroup?.("Governing & Advisory")}
                className={`p-1.5 rounded-lg text-center border transition-all cursor-pointer ${
                  activeRoleGroup === "Governing & Advisory"
                    ? "bg-gradient-to-r from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-md"
                    : "bg-blue-900/40 border-blue-400/30 hover:border-blue-300"
                }`}
              >
                <Users className="w-3.5 h-3.5 text-blue-400 mx-auto mb-0.5" />
                <div className="text-[18px] font-black text-blue-100">BoA</div>
                <div className="text-[15px] text-blue-200/80 font-medium leading-tight">Board of Advisors</div>
              </button>
            </div>
          </div>
          <div className="w-0.5 h-2.5 bg-gradient-to-b from-blue-400 to-emerald-400" />
        </div>

        {/* Desktop View: Vertical Spine with Dotted Horizontal Branch to BoG & BoA on Right */}
        <div className="hidden md:flex w-full max-w-4xl relative flex-col items-center">
          {/* Top Line Segment touching Patron */}
          <div className="w-0.5 h-8 bg-gradient-to-b from-amber-400 to-blue-400" />

          {/* Intermediate Junction with Dotted Branch to Right */}
          <div className="w-full relative flex items-center justify-center">
            {/* Vertical Flowchart Line Segment */}
            <div className="w-0.5 h-24 bg-gradient-to-b from-blue-400 to-emerald-400" />

            {/* Dotted Horizontal Branch to Right for BoG & BoA */}
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 flex items-center">
              {/* Dotted Line */}
              <div className="w-8 lg:w-16 border-t-2 border-dashed border-blue-400/80" />

              {/* BoG & BoA Box */}
              <div className="flex gap-3 p-3 rounded-2xl bg-blue-950/60 border border-blue-400/40 backdrop-blur-md shadow-2xl">
                {/* BoG */}
                <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-400/30 text-center min-w-[130px]">
                  <Landmark className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                  <div className="text-[19px] font-black text-blue-100">BoG</div>
                  <div className="text-[17px] text-blue-200/80 font-medium">Board of Governors</div>
                </div>

                {/* BoA */}
                <button
                  type="button"
                  onClick={() => onSelectRoleGroup?.("Governing & Advisory")}
                  className={`p-3 rounded-xl text-center min-w-[130px] border transition-all cursor-pointer ${
                    activeRoleGroup === "Governing & Advisory"
                      ? "bg-gradient-to-r from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-lg"
                      : "bg-blue-900/40 border-blue-400/30 hover:border-blue-300"
                  }`}
                >
                  <Users className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                  <div className="text-[19px] font-black text-blue-100">BoA</div>
                  <div className="text-[17px] text-blue-200/80 font-medium">Board of Advisors</div>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Line Segment touching Chief Advisor / Advisor */}
          <div className="w-0.5 h-6 bg-emerald-400" />
        </div>

        {/* Tier 2: Chief Advisor & Advisor (2-Column Grid on Both Mobile & Desktop) */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl grid grid-cols-2 gap-2 sm:gap-4">
          {/* Chief Advisor */}
          <button
            type="button"
            onClick={() => onSelectRoleGroup?.("Centers Leadership")}
            className={`p-2 sm:p-5 rounded-xl sm:rounded-2xl text-center border transition-all duration-300 cursor-pointer flex flex-col items-center justify-center ${
              activeRoleGroup === "Centers Leadership"
                ? "bg-gradient-to-r from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-[1.02] sm:scale-105"
                : "bg-emerald-950/40 border-emerald-400/40 hover:border-emerald-300 shadow-lg"
            }`}
          >
            <Shield className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400 mb-0.5 sm:mb-1" />
            <div className="text-[18px] sm:text-[23px] font-black text-white">Chief Advisor</div>
            <div className="text-[17px] sm:text-[19px] text-emerald-300 font-bold mt-0.5">Dr. K. M. Sharath Kumar</div>
            <div className="text-[15px] sm:text-[18px] text-emerald-100/90 font-medium leading-tight mt-0.5">Dean, FMC - RUAS</div>
          </button>

          {/* Advisor */}
          <button
            type="button"
            onClick={() => onSelectRoleGroup?.("Centers Leadership")}
            className={`p-2 sm:p-5 rounded-xl sm:rounded-2xl text-center border transition-all duration-300 cursor-pointer flex flex-col items-center justify-center ${
              activeRoleGroup === "Centers Leadership"
                ? "bg-gradient-to-r from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-[1.02] sm:scale-105"
                : "bg-emerald-950/40 border-emerald-400/40 hover:border-emerald-300 shadow-lg"
            }`}
          >
            <UserCheck className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400 mb-0.5 sm:mb-1" />
            <div className="text-[18px] sm:text-[23px] font-black text-white">Advisor</div>
            <div className="text-[17px] sm:text-[19px] text-emerald-300 font-bold mt-0.5">Dr. Subhadeep Mukherjee</div>
            <div className="text-[15px] sm:text-[18px] text-emerald-100/90 font-medium leading-tight mt-0.5">CEO, Ramaiah TBI</div>
          </button>
        </div>

        {/* Connector Line -> Centre Head */}
        <div className="w-0.5 h-3 sm:h-8 bg-gradient-to-b from-emerald-400 to-purple-400" />

        {/* Tier 3: Centre Head */}
        <div className="w-full max-w-xs sm:max-w-md">
          <button
            type="button"
            onClick={() => onSelectRoleGroup?.("Centers Leadership")}
            className={`w-full p-2.5 sm:p-5 rounded-xl sm:rounded-2xl text-center border transition-all duration-300 cursor-pointer ${
              activeRoleGroup === "Centers Leadership"
                ? "bg-gradient-to-b from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-[1.02] sm:scale-105"
                : "bg-purple-950/50 border-purple-400/50 hover:border-purple-300 shadow-xl"
            }`}
          >
            <Crown className="w-4 h-4 sm:w-7 sm:h-7 text-purple-300 mx-auto mb-1" />
            <div className="text-[19px] sm:text-[27px] font-black text-white">Centre Head</div>
            <div className="text-[18px] sm:text-[21px] text-purple-200 font-extrabold mt-0.5">Dr. Pallabi Mund</div>
            <div className="text-[16px] sm:text-[19px] text-purple-300/90 font-medium">Centre Head, LEADS Next-Gen Centre</div>
          </button>
        </div>

        {/* Connector Line -> Functional Heads */}
        <div className="w-0.5 h-3 sm:h-8 bg-gradient-to-b from-purple-400 to-amber-400" />

        {/* Tier 4: Functional Heads & Finance Hierarchy */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-5 items-stretch">
          {/* Column 1: Unified Finance Department Block (2 columns on mobile, stacked on desktop) */}
          <div className="flex flex-col gap-1.5 sm:gap-2 p-2 sm:p-4 rounded-xl sm:rounded-3xl bg-amber-950/20 border border-amber-500/30 shadow-lg">
            <div className="text-center text-[16px] sm:text-[18px] font-black text-amber-400 uppercase tracking-widest">
              Finance Wing
            </div>

            <div className="grid grid-cols-2 md:flex md:flex-col gap-1.5 sm:gap-2 flex-1">
              {/* Finance Advisor & Auditor (Dr. Ajay R) */}
              <button
                type="button"
                onClick={() => onSelectRoleGroup?.("Centers Leadership")}
                className={`p-2 sm:p-4 rounded-lg sm:rounded-2xl text-center border transition-all duration-300 flex flex-col items-center justify-center cursor-pointer flex-1 ${
                  activeRoleGroup === "Centers Leadership"
                    ? "bg-gradient-to-b from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-[1.02] sm:scale-105"
                    : "bg-amber-950/50 border-amber-500/40 hover:border-amber-300 shadow-md sm:shadow-lg"
                }`}
              >
                <Coins className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 mb-0.5 sm:mb-1" />
                <div className="text-[17px] sm:text-[21px] font-extrabold text-amber-100 leading-tight">Finance Advisor & Auditor</div>
                <div className="text-[16.5px] sm:text-[19px] text-amber-300 font-bold mt-0.5">Dr. Ajay R</div>
                <div className="text-[15px] sm:text-[18px] text-amber-200/80 font-medium mt-0.5 leading-tight">
                  Sr. Asst. Professor, FMC
                </div>
              </button>

              {/* Vertical Connector Line (Desktop Only) */}
              <div className="hidden md:flex justify-center my-0">
                <div className="w-0.5 h-3 sm:h-5 bg-gradient-to-b from-amber-400 to-amber-500" />
              </div>

              {/* Finance Officer (Dr. Tapas Kumar Sahoo) */}
              <button
                type="button"
                onClick={() => onSelectRoleGroup?.("Centers Leadership")}
                className={`p-2 sm:p-3.5 rounded-lg sm:rounded-2xl text-center border transition-all duration-300 flex flex-col items-center justify-center cursor-pointer flex-1 ${
                  activeRoleGroup === "Centers Leadership"
                    ? "bg-gradient-to-b from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-[1.02] sm:scale-105"
                    : "bg-amber-950/40 border-amber-400/30 hover:border-amber-300 shadow-md sm:shadow-lg"
                }`}
              >
                <Coins className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 mb-0.5" />
                <div className="text-[17px] sm:text-[19px] font-extrabold text-amber-100 leading-tight">Finance Officer</div>
                <div className="text-[16.5px] sm:text-[19px] text-amber-300 font-bold mt-0.5">Dr. Tapas Kumar Sahoo</div>
                <div className="text-[15px] sm:text-[17px] text-amber-200/80 font-medium mt-0.5 leading-tight">
                  Asst. Professor, FMC
                </div>
              </button>
            </div>
          </div>

          {/* Column 2 & 3: Industry Connect & Events RTC (Side-by-Side on Mobile & Grid on Desktop) */}
          <div className="grid grid-cols-2 md:contents gap-2 sm:gap-4">
            {/* Column 2: Head Industry Connect */}
            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Centers Leadership")}
              className={`p-2 sm:p-5 rounded-xl sm:rounded-3xl text-center border transition-all duration-300 flex flex-col items-center justify-center cursor-pointer h-full ${
                activeRoleGroup === "Centers Leadership"
                  ? "bg-gradient-to-b from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-[1.02] sm:scale-105"
                  : "bg-blue-950/40 border-blue-400/40 hover:border-blue-300 shadow-lg"
              }`}
            >
              <Building className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400 mb-1" />
              <div className="text-[17px] sm:text-[21px] font-extrabold text-white leading-tight">Head Industry Connect</div>
              <div className="text-[16.5px] sm:text-[19px] text-blue-300 font-bold mt-0.5">Mrs. Sujata Bijwe</div>
              <div className="text-[15px] sm:text-[18px] text-blue-200/90 font-medium mt-0.5 leading-tight">
                Adjunct Faculty, FMC
              </div>
            </button>

            {/* Column 3: Head Events RTC */}
            <button
              type="button"
              onClick={() => onSelectRoleGroup?.("Centers Leadership")}
              className={`p-2 sm:p-5 rounded-xl sm:rounded-3xl text-center border transition-all duration-300 flex flex-col items-center justify-center cursor-pointer h-full ${
                activeRoleGroup === "Centers Leadership"
                  ? "bg-gradient-to-b from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-[1.02] sm:scale-105"
                  : "bg-rose-950/40 border-rose-400/40 hover:border-rose-300 shadow-lg"
              }`}
            >
              <CalendarDays className="w-4 h-4 sm:w-6 sm:h-6 text-rose-400 mb-1" />
              <div className="text-[17px] sm:text-[21px] font-extrabold text-white leading-tight">Head Events RTC</div>
              <div className="text-[16.5px] sm:text-[19px] text-rose-300 font-bold mt-0.5">Dr. Kiran Kumar B.M.</div>
              <div className="text-[15px] sm:text-[18px] text-rose-200/90 font-medium leading-tight">Assoc. Professor, FET</div>
              <div className="text-[14.5px] sm:text-[17px] text-rose-300/90 font-semibold mt-0.5">Head - IIC, RUAS</div>
            </button>
          </div>
        </div>

        {/* Flowchart Connector Tree to Student Councils */}
        <div className="w-full max-w-5xl relative flex flex-col items-center my-0.5">
          {/* Vertical stem down from Tier 4 */}
          <div className="w-0.5 h-2.5 sm:h-6 bg-gradient-to-b from-amber-400 via-rose-400 to-[#DE3F11]" />

          {/* Horizontal crossbar line connecting across all 3 student columns */}
          <div className="w-[72%] sm:w-[66%] md:w-[72%] lg:w-[76%] h-0.5 bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400" />

          {/* Vertical drop lines touching into each of the 3 Tier 5 Student Council boxes */}
          <div className="grid w-full grid-cols-3 gap-1.5 sm:gap-4 px-0">
            <div className="flex justify-center"><div className="w-0.5 h-2 sm:h-4 bg-blue-400" /></div>
            <div className="flex justify-center"><div className="w-0.5 h-2 sm:h-4 bg-emerald-400" /></div>
            <div className="flex justify-center"><div className="w-0.5 h-2 sm:h-4 bg-purple-400" /></div>
          </div>
        </div>

        {/* Tier 5: Councils & Wings (3 Columns on Both Mobile & Desktop) */}
        <div className="w-full max-w-5xl grid grid-cols-3 gap-1.5 sm:gap-4">
          {/* Alumni Student Council */}
          <button
            type="button"
            onClick={() => onSelectRoleGroup?.("Alumni Student Council")}
            className={`p-2 sm:p-5 rounded-xl sm:rounded-2xl text-center border transition-all duration-300 cursor-pointer flex flex-col items-center justify-center ${
              activeRoleGroup === "Alumni Student Council"
                ? "bg-gradient-to-b from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-[1.02] sm:scale-105"
                : "bg-blue-950/40 border-blue-400/30 hover:border-blue-300 shadow-md sm:shadow-lg"
            }`}
          >
            <GraduationCap className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400 mx-auto mb-1" />
            <div className="text-[17px] sm:text-[21px] font-extrabold text-white leading-tight">Alumni Council</div>
          </button>

          {/* Core Committee */}
          <button
            type="button"
            onClick={() => onSelectRoleGroup?.("Core Committee")}
            className={`p-2 sm:p-5 rounded-xl sm:rounded-2xl text-center border transition-all duration-300 cursor-pointer flex flex-col items-center justify-center ${
              activeRoleGroup === "Core Committee"
                ? "bg-gradient-to-b from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-[1.02] sm:scale-105"
                : "bg-emerald-950/40 border-emerald-400/30 hover:border-emerald-300 shadow-md sm:shadow-lg"
            }`}
          >
            <Users className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400 mx-auto mb-1" />
            <div className="text-[17px] sm:text-[21px] font-extrabold text-white leading-tight">Core Committee</div>
          </button>

          {/* Student Trainee Associates */}
          <button
            type="button"
            onClick={() => onSelectRoleGroup?.("Student Trainee Associates")}
            className={`p-2 sm:p-5 rounded-xl sm:rounded-2xl text-center border transition-all duration-300 cursor-pointer flex flex-col items-center justify-center ${
              activeRoleGroup === "Student Trainee Associates"
                ? "bg-gradient-to-b from-[#9C1256]/80 to-[#DE3F11]/80 border-white shadow-xl scale-[1.02] sm:scale-105"
                : "bg-purple-950/40 border-purple-400/30 hover:border-purple-300 shadow-md sm:shadow-lg"
            }`}
          >
            <UserPlus className="w-4 h-4 sm:w-6 sm:h-6 text-purple-400 mx-auto mb-1" />
            <div className="text-[17px] sm:text-[21px] font-extrabold text-white leading-tight">Trainee Associates</div>
          </button>
        </div>
      </div>
    </div>
  );
}
