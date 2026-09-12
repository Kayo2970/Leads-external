"use client";

import React, { useState } from "react";
import ReportCard from "@/components/ReportCard";
import PdfViewerModal from "@/components/PdfViewerModal";
import { REPORTS_DATA, ImpactReport } from "@/lib/reports-data";
import { FileText, ShieldCheck, Sparkles, Eye, Download, ExternalLink, Maximize2 } from "lucide-react";

export default function ReportsPage() {
  const [selectedPdfReport, setSelectedPdfReport] = useState<ImpactReport | null>(null);
  const featuredReport = REPORTS_DATA[0];

  return (
    <div className="min-h-screen">
      {/* Fullscreen PDF Viewer Modal */}
      {selectedPdfReport && (
        <PdfViewerModal
          isOpen={!!selectedPdfReport}
          onClose={() => setSelectedPdfReport(null)}
          pdfUrl={selectedPdfReport.fileUrl}
          title={selectedPdfReport.title}
          year={selectedPdfReport.year}
          fileSize={selectedPdfReport.fileSize}
        />
      )}

      {/* SECTION 1 [PURPLE]: HERO HEADER */}
      <section className="pt-36 sm:pt-44 pb-20 3xl:pt-52 bg-[#361C6A] text-white relative overflow-hidden">
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
            Access and inspect our official verified annual impact reports directly in your browser&apos;s native document viewer box or download high-resolution PDFs.
          </p>
        </div>
      </section>

      {/* SECTION 2 [LIGHT]: FEATURED REPORT & DIRECT NATIVE VIEWER LINKS */}
      <section className="py-16 3xl:py-28 bg-[#FDFBFF] text-[#1E0C3D] border-t border-purple-100">
        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 flex flex-col items-center space-y-16">
          
          <div className="text-center max-w-3xl 3xl:max-w-4xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-wider text-[#9C1256] mb-2 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#DE3F11]" />
              <span>Official Institutional Publications</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1E0C3D]">
              Verified Impact Reports & Publications
            </h2>
            <p className="text-sm sm:text-base 3xl:text-lg text-slate-600 mt-2 max-w-2xl mx-auto leading-relaxed">
              Explore our annual report live preview below or launch the interactive full-screen viewer.
            </p>
          </div>

          {/* Centered Report Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full items-stretch">
            {REPORTS_DATA.map((report) => (
              <ReportCard
                key={report.id}
                report={report}
                lightMode={true}
                onPreview={(rep) => setSelectedPdfReport(rep)}
              />
            ))}
          </div>

          {/* EMBEDDED LIVE PDF PREVIEW BOX */}
          {featuredReport && (
            <div className="w-full max-w-5xl mx-auto bg-[#180A30] rounded-3xl p-4 sm:p-8 border border-purple-200 shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#9C1256]/30 border border-[#DE3F11]/40 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-[#DE3F11]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>Live Interactive PDF Preview</span>
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-[#DE3F11] text-white">
                        Live Box
                      </span>
                    </h3>
                    <p className="text-xs text-[#E2D9F3]">
                      {featuredReport.title} ({featuredReport.fileSize})
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={() => setSelectedPdfReport(featuredReport)}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 flex items-center space-x-1.5 transition-all cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#DE3F11]" />
                    <span>Expand Full Screen</span>
                  </button>

                  <a
                    href={featuredReport.fileUrl}
                    download
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white text-xs font-bold shadow flex items-center space-x-1.5 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>

              {/* Interactive PDF Container Frame */}
              <div className="w-full h-[650px] sm:h-[750px] bg-[#120726] rounded-2xl overflow-hidden border border-white/15 shadow-inner relative">
                <object
                  data={`${featuredReport.fileUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                  type="application/pdf"
                  className="w-full h-full border-0"
                >
                  <iframe
                    src={`${featuredReport.fileUrl}#toolbar=1&navpanes=1`}
                    title={featuredReport.title}
                    className="w-full h-full border-0"
                  >
                    <div className="flex flex-col items-center justify-center h-full p-8 text-center text-white bg-[#1E0C3D] space-y-4">
                      <FileText className="w-12 h-12 text-[#DE3F11]" />
                      <h4 className="font-bold text-base text-white">Live PDF Preview</h4>
                      <p className="text-xs text-[#E2D9F3] max-w-md">
                        Your browser plugin settings require opening the document directly.
                      </p>
                      <a
                        href={featuredReport.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white font-bold text-xs shadow-md"
                      >
                        Open Official PDF in New Tab
                      </a>
                    </div>
                  </iframe>
                </object>
              </div>
            </div>
          )}

          {/* Section 3: Verification Guarantee & Institutional Transparency */}
          <div className="text-center bg-white p-8 sm:p-10 rounded-3xl max-w-3xl mx-auto border border-purple-200 shadow-lg">
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
