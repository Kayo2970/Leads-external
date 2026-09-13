"use client";

import React, { useEffect, useState } from "react";
import { LEADSEvent, LEADSEventEdition } from "@/lib/events-data";
import PlaceholderBadge from "@/components/PlaceholderBadge";
import { generateNumberedPlaceholderSvg } from "@/lib/placeholders";
import {
  X,
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  ExternalLink,
  Crown,
  Zap,
  Shield,
  Rocket,
  Sparkles,
  Star,
  UserCheck,
  ChevronRight,
  Layers,
  Camera,
  Award,
  ArrowRight,
} from "lucide-react";

interface EventModalProps {
  event: LEADSEvent | null;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
  const [selectedEditionIndex, setSelectedEditionIndex] = useState<number>(0);

  useEffect(() => {
    setSelectedEditionIndex(0);
  }, [event]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (event) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [event, onClose]);

  if (!event) return null;

  const currentEdition: LEADSEventEdition | undefined =
    event.editions && event.editions.length > 0
      ? event.editions[selectedEditionIndex] || event.editions[0]
      : undefined;

  const mainPhId = event.placeholderId || 44;
  const mainFallback = generateNumberedPlaceholderSvg({
    id: mainPhId,
    title: event.name,
    subtitle: event.seriesName,
    category: event.category,
  });

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto bg-[#180A30] text-white rounded-3xl border border-white/20 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.9)] p-6 sm:p-10 space-y-10 custom-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-[#DE3F11] text-white transition-all duration-200 border border-white/20 cursor-pointer shadow-lg"
          title="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HEADER HERO BANNER */}
        <div className="relative pt-4 border-b border-white/15 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Title & Overview */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#9C1256]/30 text-white border border-[#DE3F11]/40">
                  {event.category}
                </span>
                <span className="text-xs font-bold text-white/70">
                  {event.seriesName}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                {event.name}
              </h1>

              <p className="text-base font-medium text-[#DE3F11]">
                {event.tagline}
              </p>

              <p className="text-sm text-white/80 leading-relaxed font-normal">
                {event.description}
              </p>

              {/* Event Metadata Strip (Prominent Cards) */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs">
                <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-2xl border border-white/20 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-[#DE3F11] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase font-extrabold tracking-wider text-white/50">Date & Schedule</div>
                    <div className="font-extrabold text-white text-xs sm:text-sm truncate">{event.date}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-2xl border border-white/20 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-[#9C1256] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase font-extrabold tracking-wider text-white/50">Venue / Location</div>
                    <div className="font-extrabold text-white text-xs sm:text-sm truncate">{event.location}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-gradient-to-r from-[#9C1256]/50 to-[#DE3F11]/40 p-3 rounded-2xl border border-[#DE3F11]/50 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#9C1256] to-[#DE3F11] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase font-extrabold tracking-wider text-yellow-300">Reach & Scale</div>
                    <div className="font-black text-white text-xs sm:text-sm truncate">{event.attendees}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High-Res Series Visual Showcase */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group w-full aspect-[9/16] max-w-[340px] mx-auto bg-[#180A30]">
                <img
                  src={event.photo}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = mainFallback;
                  }}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
                />
                <PlaceholderBadge id={mainPhId} position="top-left" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#180A30] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold text-white border border-white/20">
                    <Camera className="w-3.5 h-3.5 text-[#DE3F11]" />
                    <span>Official Series Documentation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: DETAILED EDITIONS & SESSIONS BREAKDOWN */}
        <section className="space-y-6">
          {event.editions && event.editions.length > 1 && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-4">
              {/* Edition Tabs */}
              <div className="flex flex-wrap gap-2">
                {event.editions.map((edition, idx) => (
                  <button
                    key={edition.id}
                    onClick={() => setSelectedEditionIndex(idx)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedEditionIndex === idx
                        ? "bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-lg scale-105"
                        : "glass-panel text-white/80 border border-white/10 hover:border-white/30"
                    }`}
                  >
                    Edition {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Active Edition Display Card */}
          {currentEdition ? (() => {
            const editionPhId = currentEdition.placeholderId || mainPhId + selectedEditionIndex + 1;
            const editionFallback = generateNumberedPlaceholderSvg({
              id: editionPhId,
              title: currentEdition.title,
              subtitle: currentEdition.date,
              category: "Event Edition",
            });

            return (
              <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl space-y-8 animate-in fade-in duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Edition Photograph & Snapshot */}
                  <div className="lg:col-span-5 space-y-4 flex flex-col items-center">
                    <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-xl w-full aspect-[9/16] max-w-[340px] mx-auto bg-[#180A30]">
                      <img
                        src={currentEdition.photo}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = editionFallback;
                        }}
                        alt={currentEdition.title}
                        className="w-full h-full object-cover absolute inset-0"
                      />
                      <PlaceholderBadge id={editionPhId} position="top-left" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#180A30] via-transparent to-transparent opacity-70" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-bold">
                        <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                          {currentEdition.date}
                        </span>
                        <span className="bg-[#DE3F11] px-2.5 py-1 rounded-lg text-white">
                          {currentEdition.attendees}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#241147]/80 border border-white/10 space-y-2 w-full">
                      <div className="flex items-center space-x-2 text-xs text-white/80">
                        <MapPin className="w-4 h-4 text-[#9C1256] shrink-0" />
                        <span className="truncate">{currentEdition.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Detailed Session Content */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <div className="text-xs font-bold text-[#DE3F11] uppercase tracking-wider">
                        Edition Focus & Objectives
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                        {currentEdition.title}
                      </h3>
                      <p className="text-sm text-white/80 mt-3 leading-relaxed">
                        {currentEdition.overview}
                      </p>
                    </div>

                    {/* Key Topics Checklist */}
                    {currentEdition.keyTopics && currentEdition.keyTopics.length > 0 && (
                      <div className="space-y-3">
                        <div className="text-xs font-bold uppercase tracking-wider text-purple-300">
                          Key Modules & Themes Discussed
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/90">
                          {currentEdition.keyTopics.map((topic, tIdx) => (
                            <div key={tIdx} className="flex items-start space-x-2 bg-white/5 p-2.5 rounded-xl border border-white/5">
                              <CheckCircle2 className="w-4 h-4 text-[#DE3F11] shrink-0 mt-0.5" />
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Speakers */}
                    {currentEdition.keySpeakers && currentEdition.keySpeakers.length > 0 && (
                      <div className="space-y-3">
                        <div className="text-xs font-bold uppercase tracking-wider text-purple-300">
                          Distinguished Mentors & Speakers
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {currentEdition.keySpeakers.map((spk, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-3 py-1.5 rounded-xl bg-purple-900/40 text-purple-200 border border-purple-500/30 text-xs font-semibold"
                            >
                              {spk}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Edition Key Outcomes */}
                    {currentEdition.outcomes && currentEdition.outcomes.length > 0 && (
                      <div className="space-y-3 pt-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#DE3F11] flex items-center space-x-1.5">
                          <Award className="w-4 h-4" />
                          <span>Student Outcomes & Impact</span>
                        </div>
                        <div className="space-y-2">
                          {currentEdition.outcomes.map((outcome, oIdx) => (
                            <div
                              key={oIdx}
                              className="p-3 rounded-xl bg-gradient-to-r from-purple-900/30 to-[#9C1256]/20 border border-purple-500/20 text-xs text-white/90 leading-relaxed font-medium"
                            >
                              {outcome}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })() : null}

          {/* All Editions Overview Grid if multiple */}
          {event.editions && event.editions.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {event.editions.map((ed, idx) => {
                const edPhId = ed.placeholderId || mainPhId + idx + 1;
                const edFallback = generateNumberedPlaceholderSvg({
                  id: edPhId,
                  title: ed.title,
                  subtitle: ed.date,
                  category: "Edition",
                });

                return (
                  <div
                    key={ed.id}
                    onClick={() => setSelectedEditionIndex(idx)}
                    className={`cursor-pointer rounded-3xl p-5 border transition-all duration-300 relative ${
                      selectedEditionIndex === idx
                        ? "bg-[#361C6A] border-[#DE3F11] shadow-xl scale-[1.02]"
                        : "glass-panel border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[9/16] w-full max-h-[280px] bg-[#180A30]">
                      <img
                        src={ed.photo}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = edFallback;
                        }}
                        alt={ed.title}
                        className="w-full h-full object-cover rounded-2xl border border-white/10 absolute inset-0"
                      />
                      <PlaceholderBadge id={edPhId} position="top-left" className="scale-75 origin-top-left" />
                    </div>
                    <div className="text-[11px] font-bold text-[#DE3F11] uppercase tracking-wider">
                      {ed.date}
                    </div>
                    <h4 className="text-sm font-bold text-white mt-1 line-clamp-2">
                      {ed.title}
                    </h4>
                    <p className="text-xs text-white/70 mt-2 line-clamp-2">
                      {ed.overview}
                    </p>
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white">
                      <span>View Edition Details</span>
                      <ChevronRight className="w-4 h-4 text-[#DE3F11]" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
