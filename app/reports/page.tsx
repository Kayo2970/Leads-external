"use client";

import React, { useState } from "react";
import ReportCard from "@/components/ReportCard";
import { REPORTS_DATA } from "@/lib/reports-data";
import { FileText, ShieldCheck, Eye, Download, ExternalLink, Sparkles, BookOpen, CheckCircle } from "lucide-react";
import PdfViewerModal from "@/components/PdfViewerModal";

export default function ReportsPage() {
  const [selectedReportId, setSelectedReportId] = useState<string>(REPORTS_DATA[0].id);
  const [isViewerModalOpen, setIsViewerModalOpen] = useState(false);

  const activeReport = REPORTS_DATA.find((r) => r.id === selectedReportId) || REPORTS_DATA[0];

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
            Read online or download our official verified reports, proceedings, and research publications to inspect non-technical leadership upliftment across India.
          </p>
        </div>
      </section>

      {/* SECTION 2 [LIGHT]: REPORT SELECTOR & LIVE ONLINE PDF READER */}
      <section className="py-16 3xl:py-28 bg-[#FDFBFF] text-[#1E0C3D] border-t border-purple-100">
        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 flex flex-col items-center">
          
          {/* Report Selector Pills */}
          <div className="w-full max-w-5xl mx-auto mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {REPORTS_DATA.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelectedReportId(r.id)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                  r.id === activeReport.id
                    ? "bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-lg scale-105"
                    : "bg-white text-slate-700 hover:text-[#9C1256] hover:bg-purple-50 border border-purple-200/80 shadow-sm"
                }`}
              >
                <FileText className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate max-w-[220px] sm:max-w-none">{r.title}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                  r.id === activeReport.id ? "bg-white/20 text-white" : "bg-purple-100 text-[#9C1256]"
                }`}>
                  {r.fileSize}
                </span>
              </button>
            ))}
          </div>

          <div className="text-center max-w-3xl 3xl:max-w-4xl mx-auto mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-[#9C1256] mb-2 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#DE3F11]" />
              <span>Official Release · {activeReport.year}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1E0C3D]">
              {activeReport.title}
            </h2>
            <p className="text-sm sm:text-base 3xl:text-lg text-slate-600 mt-2 max-w-2xl mx-auto leading-relaxed">
              Browse the document directly in the interactive document reader below, or download the official PDF.
            </p>
          </div>

          {/* Centered 2-Column Layout: Report Details + Embedded Live PDF Reader */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 3xl:gap-12 items-stretch max-w-6xl 2xl:max-w-7xl mx-auto w-full">
            
            {/* Left Column: Report Card & Highlights */}
            <div className="lg:col-span-5 flex flex-col h-full">
              <ReportCard report={activeReport} lightMode={true} />
            </div>

            {/* Right Column: Expanded Centered Live PDF Viewer */}
            <div className="lg:col-span-7 flex flex-col h-full">
              <div className="bg-white rounded-3xl border border-purple-200 shadow-2xl overflow-hidden flex flex-col h-full">
                {/* PDF Viewer Header Toolbar */}
                <div className="px-5 py-4 bg-[#2A1454] text-white flex items-center justify-between shadow-md">
                  <div className="flex items-center space-x-2.5 min-w-0">
                    <BookOpen className="w-4 h-4 text-[#DE3F11] flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-bold truncate">
                      {activeReport.title}
                    </span>
                    <span className="hidden sm:inline-block text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-white/10 text-[#E2D9F3]">
                      Interactive
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => setIsViewerModalOpen(true)}
                      className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                      title="Open Fullscreen Viewer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#DE3F11]" />
                      <span className="hidden sm:inline">Fullscreen</span>
                    </button>

                    <a
                      href={activeReport.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                      title="Open in new browser tab"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">New Tab</span>
                    </a>

                    <a
                      href={activeReport.fileUrl}
                      download
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white text-xs font-bold shadow hover:opacity-90 transition-opacity"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>

                {/* Embedded PDF iframe */}
                <div className="w-full h-[650px] sm:h-[720px] 3xl:h-[800px] bg-[#120726] relative flex-1">
                  <iframe
                    key={activeReport.fileUrl}
                    src={`${activeReport.fileUrl}#toolbar=1&navpanes=0`}
                    title={activeReport.title}
                    className="w-full h-full border-0"
                  />
                </div>

                {/* PDF Viewer Footer bar */}
                <div className="px-5 py-3.5 bg-purple-50/80 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-2">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#DE3F11]" />
                    <span>Viewing {activeReport.title} · {activeReport.fileSize} PDF</span>
                  </div>
                  <button
                    onClick={() => setIsViewerModalOpen(true)}
                    className="text-xs font-bold text-[#9C1256] hover:text-[#DE3F11] transition-colors underline underline-offset-2"
                  >
                    Click to expand full screen reader →
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Section 3: All Publications Grid */}
          <div className="mt-20 w-full">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E0C3D]">
                All Publications & Documentation
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Access any of the published annual reviews, summit proceedings, and research studies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {REPORTS_DATA.map((r) => (
                <div
                  key={r.id}
                  onClick={() => setSelectedReportId(r.id)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                    r.id === activeReport.id
                      ? "bg-purple-50/90 border-[#9C1256] shadow-md ring-2 ring-[#9C1256]/20"
                      : "bg-white border-purple-100 hover:border-purple-300 hover:shadow-lg"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-[#9C1256]/10 to-[#DE3F11]/10 text-[#DE3F11]">
                        <FileText className="w-5 h-5 text-[#DE3F11]" />
                      </div>
                      <span className="text-[11px] font-bold text-[#9C1256] bg-purple-100/80 px-2 py-0.5 rounded-full">
                        {r.year}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-[#1E0C3D] mb-1.5 leading-snug">
                      {r.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">
                      {r.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-purple-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-500">{r.fileSize} PDF</span>
                    <a
                      href={r.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs font-bold text-[#9C1256] hover:text-[#DE3F11] flex items-center gap-1"
                    >
                      <span>Direct PDF</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Verification Guarantee & Institutional Transparency */}
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

      {/* Fullscreen Modal Viewer */}
      <PdfViewerModal
        isOpen={isViewerModalOpen}
        onClose={() => setIsViewerModalOpen(false)}
        pdfUrl={activeReport.fileUrl}
        title={activeReport.title}
        year={activeReport.year}
        fileSize={activeReport.fileSize}
      />
    </div>
  );
}
