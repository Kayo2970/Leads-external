import React from "react";
import { ImpactReport } from "@/lib/reports-data";
import { FileText, Download, CheckCircle, ArrowDownToLine } from "lucide-react";

interface ReportCardProps {
  report: ImpactReport;
  lightMode?: boolean;
}

export default function ReportCard({ report, lightMode = false }: ReportCardProps) {
  if (lightMode) {
    return (
      <div className="rounded-3xl p-6 border border-purple-100 hover:border-[#DE3F11]/60 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between bg-white shadow-md text-[#1E0C3D]">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#9C1256]/15 to-[#DE3F11]/15 border border-[#DE3F11]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <FileText className="w-6 h-6 text-[#9C1256]" />
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-[#9C1256]/15 to-[#DE3F11]/15 text-[#9C1256] border border-[#DE3F11]/30">
              Year {report.year}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-[#1E0C3D] group-hover:text-[#DE3F11] transition-colors mb-2">
            {report.title}
          </h3>

          {/* Summary */}
          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            {report.summary}
          </p>

          {/* Stats */}
          <div className="flex items-center space-x-4 text-xs text-slate-500 mb-6 pt-2 border-t border-purple-100">
            <span>{report.fileSize} PDF</span>
            <span>•</span>
            <span>{report.pages} Pages</span>
            <span>•</span>
            <span className="text-[#361C6A] font-medium flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-[#DE3F11]" /> Verified Official
            </span>
          </div>
        </div>

        {/* Download Action */}
        <a
          href={report.fileUrl}
          download
          className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white hover:opacity-95 shadow-md flex items-center justify-center space-x-2 transition-all duration-300 group-hover:scale-[1.02]"
        >
          <ArrowDownToLine className="w-4 h-4" />
          <span>Download Official Report</span>
        </a>
      </div>
    );
  }

  return (
    <div className="glass-panel rounded-3xl p-6 border border-white/15 hover:border-[#DE3F11]/60 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between bg-[#2A1454]/90">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#9C1256]/20 to-[#DE3F11]/20 border border-[#DE3F11]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <FileText className="w-6 h-6 text-[#DE3F11]" />
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-[#9C1256]/30 to-[#DE3F11]/30 text-white border border-[#DE3F11]/40">
            Year {report.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-[#DE3F11] transition-colors mb-2">
          {report.title}
        </h3>

        {/* Summary */}
        <p className="text-xs text-[#E2D9F3] leading-relaxed mb-4">
          {report.summary}
        </p>

        {/* Stats */}
        <div className="flex items-center space-x-4 text-xs text-[#E2D9F3]/80 mb-6 pt-2 border-t border-white/10">
          <span>{report.fileSize} PDF</span>
          <span>•</span>
          <span>{report.pages} Pages</span>
          <span>•</span>
          <span className="text-white font-medium flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#DE3F11]" /> Verified Official</span>
        </div>
      </div>

      {/* Download Action */}
      <a
        href={report.fileUrl}
        download
        className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white hover:opacity-95 shadow-md flex items-center justify-center space-x-2 transition-all duration-300 group-hover:scale-[1.02]"
      >
        <ArrowDownToLine className="w-4 h-4" />
        <span>Download Official Report</span>
      </a>
    </div>
  );
}
