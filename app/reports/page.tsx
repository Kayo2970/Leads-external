"use client";

import React, { useState } from "react";
import ReportCard from "@/components/ReportCard";
import { REPORTS_DATA } from "@/lib/reports-data";
import { FileText, ShieldCheck, Eye, Download, ExternalLink, Sparkles, BookOpen, CheckCircle } from "lucide-react";
import PdfViewerModal from "@/components/PdfViewerModal";

export default function ReportsPage() {
  const report = REPORTS_DATA[0];
  const [isViewerModalOpen, setIsViewerModalOpen] = useState(false);

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
            Read online or download our official verified report to inspect what a year of non-technical leadership upliftment looks like across India.
          </p>
        </div>
      </section>

      {/* SECTION 2 [LIGHT]: FEATURED REPORT & LIVE ONLINE PDF READER */}
      <section className="py-16 3xl:py-28 bg-[#FDFBFF] text-[#1E0C3D] border-t border-purple-100">
        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 flex flex-col items-center">
          
          <div className="text-center max-w-3xl 3xl:max-w-4xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#9C1256] mb-2 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#DE3F11]" />
              <span>Official Annual Release · {report.year}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1E0C3D]">
              {report.title}
            </h2>
            <p className="text-sm sm:text-base 3xl:text-lg text-slate-600 mt-2 max-w-2xl mx-auto leading-relaxed">
              Browse the complete 28-page report directly in the interactive central document reader below, or download the official high-resolution PDF.
            </p>
          </div>

          {/* Centered 2-Column Layout: Report Details + Embedded Live PDF Reader */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 3xl:gap-12 items-stretch max-w-6xl 2xl:max-w-7xl mx-auto w-full">
            
            {/* Left Column: Report Card & Highlights */}
            <div className="lg:col-span-5 flex flex-col h-full">
              <ReportCard report={report} lightMode={true} />
            </div>

            {/* Right Column: Expanded Centered Live PDF Viewer */}
            <div className="lg:col-span-7 flex flex-col h-full">
              <div className="bg-white rounded-3xl border border-purple-200 shadow-2xl overflow-hidden flex flex-col h-full">
                {/* PDF Viewer Header Toolbar */}
                <div className="px-5 py-4 bg-[#2A1454] text-white flex items-center justify-between shadow-md">
                  <div className="flex items-center space-x-2.5 min-w-0">
                    <BookOpen className="w-4 h-4 text-[#DE3F11] flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-bold truncate">
                      {report.title}
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
                      href={report.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                      title="Open in new browser tab"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">New Tab</span>
                    </a>

                    <a
                      href={report.fileUrl}
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
                    key={report.fileUrl}
                    src={`${report.fileUrl}#toolbar=1&navpanes=0`}
                    title={report.title}
                    className="w-full h-full border-0"
                  />
                </div>

                {/* PDF Viewer Footer bar */}
                <div className="px-5 py-3.5 bg-purple-50/80 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-2">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#DE3F11]" />
                    <span>Viewing page 1 of {report.pages} · Official Public Release ({report.fileSize})</span>
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

      {/* Fullscreen Modal Viewer */}
      <PdfViewerModal
        isOpen={isViewerModalOpen}
        onClose={() => setIsViewerModalOpen(false)}
        pdfUrl={report.fileUrl}
        title={report.title}
        year={report.year}
        fileSize={report.fileSize}
      />
    </div>
  );
}
