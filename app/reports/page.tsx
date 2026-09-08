import React from "react";
import ReportCard from "@/components/ReportCard";
import { REPORTS_DATA } from "@/lib/reports-data";
import { FileText, ShieldCheck } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="min-h-screen">
      {/* SECTION 1 [PURPLE]: HERO HEADER */}
      <section className="pt-32 pb-20 bg-[#361C6A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/20 text-xs font-semibold mb-6 shadow-sm">
            <FileText className="w-3.5 h-3.5 text-[#DE3F11]" />
            <span>Official Publications & Transparency</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Our Impact, In Numbers
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#E2D9F3] max-w-2xl mx-auto leading-relaxed">
            Download our official verified reports to inspect what a year of non-technical leadership upliftment looks like across India.
          </p>
        </div>
      </section>

      {/* SECTION 2 [WHITE/LIGHT]: REPORT LISTING & TRANSPARENCY */}
      <section className="py-24 bg-[#FDFBFF] text-[#1E0C3D] border-t border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-[#9C1256] mb-2">
              Annual & Quarterly Reports
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E0C3D]">
              Verified Publications
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Complete open-access documentation of delegate demographics, competency uplifts, and initiative budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REPORTS_DATA.map((report) => (
              <ReportCard key={report.id} report={report} lightMode={true} />
            ))}
          </div>

          {/* Verification Guarantee in Light Mode */}
          <div className="mt-16 text-center bg-white p-8 rounded-3xl max-w-2xl mx-auto border border-purple-200 shadow-md">
            <div className="flex items-center justify-center space-x-2 text-xs font-bold text-[#9C1256] mb-2">
              <ShieldCheck className="w-4 h-4 text-[#DE3F11]" />
              <span>Open Access Academic & Institutional Policy</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              All reports published by LEADS Next Gen Centre are released under Creative Commons for public policy, academic citation, and research use.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
