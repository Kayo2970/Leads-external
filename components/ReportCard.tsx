import React from "react";
import { ImpactReport } from "@/lib/reports-data";
import { FileText, Download, CheckCircle, ArrowDownToLine } from "lucide-react";

interface ReportCardProps {
  report: ImpactReport;
}

export default function ReportCard({ report }: ReportCardProps) {
  return (
    <div className="glass-panel rounded-3xl p-6 hover:border-brand-gold/60 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-violet/10 dark:bg-brand-violet/30 border border-brand-violet/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <FileText className="w-6 h-6 text-brand-gold" />
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
            Year {report.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-violet dark:group-hover:text-brand-gold transition-colors mb-2">
          {report.title}
        </h3>

        {/* Summary */}
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          {report.summary}
        </p>

        {/* Stats */}
        <div className="flex items-center space-x-4 text-xs text-slate-400 mb-6 pt-2 border-t border-brand-violet/10">
          <span>{report.fileSize} PDF</span>
          <span>•</span>
          <span>{report.pages} Pages</span>
          <span>•</span>
          <span className="text-emerald-500 font-medium">Verified Official</span>
        </div>
      </div>

      {/* Download Action */}
      <a
        href={report.fileUrl}
        download
        className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-brand-gold to-brand-gold-dark text-slate-950 hover:shadow-lg flex items-center justify-center space-x-2 transition-all duration-300 group-hover:scale-[1.02]"
      >
        <ArrowDownToLine className="w-4 h-4" />
        <span>Download Official Report</span>
      </a>
    </div>
  );
}
