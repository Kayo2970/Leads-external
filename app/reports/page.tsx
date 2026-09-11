"use client";

import React from "react";
import ReportCard from "@/components/ReportCard";
import { REPORTS_DATA } from "@/lib/reports-data";
import { FileText, ShieldCheck, Sparkles } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="min-h-screen">
      {/* SECTION 1 [PURPLE]: HERO HEADER */}
      <section className="pt-32 pb-20 bg-[#361C6A] text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-[#9C1256]/30 to-[#DE3F11]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 3xl:space-x-3 px-4 py-1.5 3xl:px-6 3xl:py-3 rounded-full bg-white/10 text-white border border-white/20 text-xs 3xl:text-lg font-semibold mb-6 3xl:mb-10 shadow-sm">
            <FileText className="w-3.5 h-3.5 3xl:w-5 3xl:h-5 text-[#DE3F11]" />
            <span>Official Publications & Transparency</span>
          </div>
          <h1 className="text-4xl sm:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-extrabold text-white tracking-tight max-w-4xl 3xl:max-w-6xl mx-auto leading-tight">
            Our Impact, <span className="bg-gradient-to-r from-[#DE3F11] to-[#FF8C61] bg-clip-text text-transparent">In Verified Numbers</span>
          </h1>
          <p className="mt-5 3xl:mt-8 text-base sm:text-lg 2xl:text-xl 3xl:text-2xl text-[#E2D9F3] max-w-2xl 3xl:max-w-4xl mx-auto leading-relaxed">
            Access and inspect our official verified annual impact reports directly in your browser&apos;s native document viewer or download high-resolution PDFs.
          </p>
        </div>
      </section>

      {/* SECTION 2 [LIGHT]: FEATURED REPORT & DIRECT NATIVE VIEWER LINKS */}
      <section className="py-16 3xl:py-28 bg-[#FDFBFF] text-[#1E0C3D] border-t border-purple-100">
        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 flex flex-col items-center">
          
          <div className="text-center max-w-3xl 3xl:max-w-4xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#9C1256] mb-2 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#DE3F11]" />
              <span>Official Institutional Publications</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1E0C3D]">
              Verified Impact Reports & Publications
            </h2>
            <p className="text-sm sm:text-base 3xl:text-lg text-slate-600 mt-2 max-w-2xl mx-auto leading-relaxed">
              Click any report below to launch directly in your browser&apos;s native PDF viewer or download the official release.
            </p>
          </div>

          {/* Centered Report Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full items-stretch">
            {REPORTS_DATA.map((report) => (
              <ReportCard key={report.id} report={report} lightMode={true} />
            ))}
          </div>

          {/* Section 3: Verification Guarantee & Institutional Transparency */}
          <div className="mt-16 text-center bg-white p-8 sm:p-10 rounded-3xl max-w-3xl mx-auto border border-purple-200 shadow-lg">
            <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm font-bold text-[#9C1256] mb-2">
              <ShieldCheck className="w-4 h-4 text-[#DE3F11]" />
              <span>Open Access Academic & Institutional Policy</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              All reports published by LEADS Next Gen Centre are verified and released under Creative Commons for public policy, academic citation, and research use in collaboration with national and international partner bodies.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
