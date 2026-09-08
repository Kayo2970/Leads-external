import React from "react";
import ReportCard from "@/components/ReportCard";
import { REPORTS_DATA } from "@/lib/reports-data";
import { FileText, ShieldCheck } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="pt-28 pb-24 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-xs font-semibold mb-4">
          <FileText className="w-3.5 h-3.5 text-[#DE3F11]" />
          <span>Official Publications & Transparency</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Our Impact, In Numbers
        </h1>
        <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
          Download our official verified reports to inspect what a year of non-technical leadership upliftment looks like across India.
        </p>
      </div>

      {/* Report Listing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REPORTS_DATA.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>

        {/* Verification Guarantee */}
        <div className="mt-16 text-center glass-panel p-6 rounded-3xl max-w-2xl mx-auto border border-[#9C1256]/30">
          <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-[#DE3F11] mb-1">
            <ShieldCheck className="w-4 h-4 text-[#DE3F11]" />
            <span>Open Access Academic & Institutional Policy</span>
          </div>
          <p className="text-xs text-white/75">
            All reports published by LEADS Next Gen Centre are released under Creative Commons for public policy, academic citation, and research use.
          </p>
        </div>
      </div>
    </div>
  );
}
