"use client";

import React from "react";
import BorderGlow from "@/components/BorderGlow";
import { ImpactReport } from "@/lib/reports-data";
import { FileText, ArrowDownToLine, ExternalLink, Sparkles, CheckCircle } from "lucide-react";

interface ReportCardProps {
  report: ImpactReport;
  lightMode?: boolean;
}

export default function ReportCard({ report, lightMode = false }: ReportCardProps) {
  return (
    <BorderGlow
      edgeSensitivity={30}
      glowColor="330 85 50"
      backgroundColor={lightMode ? "#FFFFFF" : "#2A1454"}
      borderRadius={24}
      glowRadius={35}
      glowIntensity={1.0}
      colors={lightMode ? ["#9C1256", "#DE3F11", "#361C6A"] : ["#9C1256", "#DE3F11", "#FFFFFF"]}
      animated={true}
      className="h-full shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className={`p-6 sm:p-8 group flex flex-col justify-between h-full ${lightMode ? "text-[#1E0C3D]" : "text-white"}`}>
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#9C1256]/20 to-[#DE3F11]/20 border border-[#DE3F11]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <FileText className="w-6 h-6 text-[#DE3F11]" />
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                lightMode
                  ? "bg-gradient-to-r from-[#9C1256]/10 to-[#DE3F11]/10 text-[#9C1256] border-[#DE3F11]/30"
                  : "bg-gradient-to-r from-[#9C1256]/30 to-[#DE3F11]/30 text-white border-[#DE3F11]/40"
              }`}>
                Year {report.year}
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Featured
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className={`text-xl sm:text-2xl font-extrabold mb-3 transition-colors ${
            lightMode ? "text-[#1E0C3D] group-hover:text-[#9C1256]" : "text-white group-hover:text-[#DE3F11]"
          }`}>
            {report.title}
          </h3>

          {/* Summary */}
          <p className={`text-sm leading-relaxed mb-6 ${
            lightMode ? "text-slate-600" : "text-[#E2D9F3]"
          }`}>
            {report.summary}
          </p>

          {/* Highlights */}
          {report.highlights && report.highlights.length > 0 && (
            <div className={`p-4 rounded-2xl mb-6 border ${
              lightMode ? "bg-purple-50/60 border-purple-100" : "bg-white/5 border-white/10"
            }`}>
              <div className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${
                lightMode ? "text-[#9C1256]" : "text-[#DE3F11]"
              }`}>
                Executive Highlights
              </div>
              <ul className="space-y-2">
                {report.highlights.map((highlight, idx) => (
                  <li key={idx} className={`text-xs flex items-start gap-2 ${
                    lightMode ? "text-slate-700" : "text-white/90"
                  }`}>
                    <CheckCircle className="w-3.5 h-3.5 text-[#DE3F11] mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stats */}
          <div className={`flex flex-wrap items-center gap-4 text-xs mb-6 pt-3 border-t ${
            lightMode ? "text-slate-500 border-purple-100" : "text-[#E2D9F3]/80 border-white/10"
          }`}>
            <span className="font-semibold">{report.fileSize} PDF</span>
            <span>•</span>
            <span className="font-semibold">{report.pages} Pages</span>
            <span>•</span>
            <span className={`font-semibold flex items-center gap-1 ${
              lightMode ? "text-[#361C6A]" : "text-white"
            }`}>
              <CheckCircle className="w-3.5 h-3.5 text-[#DE3F11]" /> Verified Official
            </span>
          </div>
        </div>

        {/* Action Buttons: Direct Native Browser View & Download */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <a
            href={report.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl font-bold text-xs bg-[#1E0C3D] hover:bg-[#361C6A] text-white border border-purple-300 shadow-md flex items-center justify-center space-x-2 transition-all duration-200 hover:scale-[1.02]"
          >
            <ExternalLink className="w-4 h-4 text-[#DE3F11]" />
            <span>Open Native Viewer</span>
          </a>

          <a
            href={report.fileUrl}
            download
            className="w-full py-3.5 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white hover:opacity-95 shadow-md flex items-center justify-center space-x-2 transition-all duration-200 hover:scale-[1.02]"
          >
            <ArrowDownToLine className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </BorderGlow>
  );
}
