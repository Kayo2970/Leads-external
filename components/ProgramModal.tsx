"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ProgramItem } from "@/app/programs/page";
import {
  X,
  GraduationCap,
  Users,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  Award,
  Crown,
} from "lucide-react";

interface ProgramModalProps {
  program: ProgramItem | null;
  onClose: () => void;
}

export default function ProgramModal({ program, onClose }: ProgramModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (program) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [program, onClose]);

  if (!program) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#180A30] text-white rounded-3xl border border-white/20 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.9)] p-6 sm:p-10 space-y-8 custom-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-[#DE3F11] text-white transition-all duration-200 border border-white/20 cursor-pointer shadow-lg"
          title="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HEADER HERO BANNER */}
        <div className="pt-2 border-b border-white/15 pb-6 space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#9C1256]/40 text-white border border-[#DE3F11]/50 shadow-sm">
              {program.category}
            </span>
            <span className="text-xs font-bold text-amber-300 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
              {program.badge}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl 3xl:text-5xl font-black text-white leading-tight">
            {program.title}
          </h1>

          <p className="text-base sm:text-lg font-semibold text-[#DE3F11]">
            {program.subtitle}
          </p>

          <p className="text-sm sm:text-base text-white/85 leading-relaxed font-normal">
            {program.description}
          </p>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
            <div className="flex items-center space-x-3 bg-white/5 p-3.5 rounded-2xl border border-white/10">
              <Users className="w-5 h-5 text-[#DE3F11] shrink-0" />
              <div>
                <div className="text-[10px] uppercase font-bold text-white/50">Target Audience</div>
                <div className="text-xs font-bold text-white truncate">{program.audience}</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/5 p-3.5 rounded-2xl border border-white/10">
              <Clock className="w-5 h-5 text-[#9C1256] shrink-0" />
              <div>
                <div className="text-[10px] uppercase font-bold text-white/50">Program Duration</div>
                <div className="text-xs font-bold text-white truncate">{program.duration}</div>
              </div>
            </div>
          </div>
        </div>

        {/* CORE HIGHLIGHTS & DELIVERABLES */}
        <div className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#DE3F11]">
            Core Pillars, Modules & Key Deliverables
          </div>

          <div className="grid grid-cols-1 gap-3">
            {program.highlights.map((hl, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#DE3F11]/40 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[#DE3F11] shrink-0 mt-0.5" />
                <span className="text-sm text-white/95 leading-relaxed font-medium">{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ACTION CTA BAR */}
        <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/70">
            For institution-wide customization, corporate sponsorship, or enrollment details:
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              type="button"
              className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all text-center"
            >
              Close Details
            </button>

            {program.id === "bls-summit" ? (
              <a
                href="https://www.bharatleadsummit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center space-x-2"
              >
                <span>Visit Official Summit Portal</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            ) : (
              <Link
                href="/contact"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center space-x-2"
              >
                <span>Enquire & Register Interest</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
