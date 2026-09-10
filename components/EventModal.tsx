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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
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

              {/* Event Metadata Strip */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white/90">
                <div className="flex items-center space-x-2 bg-white/5 p-3 rounded-xl border border-white/10">
                  <Calendar className="w-4 h-4 text-[#DE3F11] shrink-0" />
                  <span className="truncate">{event.date}</span>
                </div>

                <div className="flex items-center space-x-2 bg-white/5 p-3 rounded-xl border border-white/10">
                  <MapPin className="w-4 h-4 text-[#DE3F11] shrink-0" />
                  <span className="truncate">{event.location}</span>
                </div>

                <div className="flex items-center space-x-2 bg-white/5 p-3 rounded-xl border border-white/10">
                  <Users className="w-4 h-4 text-[#DE3F11] shrink-0" />
                  <span className="truncate">{event.attendees}</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Res Series Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                <img
                  src={event.photo}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = mainFallback;
                  }}
                  alt={event.name}
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#DE3F11]">
                Interactive Series Timeline
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Individual Editions & What We Have Done
              </h2>
            </div>

            {/* Edition Tabs */}
            {event.editions && event.editions.length > 1 && (
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
            )}
          </div>

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
                  <div className="lg:col-span-5 space-y-4">
                    <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                      <img
                        src={currentEdition.photo}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = editionFallback;
                        }}
                        alt={currentEdition.title}
                        className="w-full h-64 sm:h-72 object-cover"
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

                    <div className="p-4 rounded-2xl bg-[#241147]/80 border border-white/10 space-y-2">
                      <div className="flex items-center space-x-2 text-xs text-white/80">
                        <MapPin className="w-4 h-4 text-[#DE3F11] shrink-0" />
                        <span>{currentEdition.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Edition Deep-Dive Content */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#9C1256]/30 text-white border border-[#DE3F11]/40 inline-block mb-3">
                        Edition Spotlight
                      </span>
                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {currentEdition.title}
                      </h3>
                      <p className="text-sm text-white/85 mt-2 leading-relaxed">
                        {currentEdition.overview}
                      </p>
                    </div>

                    {/* Key Topics Explored */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#DE3F11]">
                        Key Topics & Masterclasses Delivered
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {currentEdition.keyTopics.map((topic, i) => (
                          <div
                            key={i}
                            className="flex items-start space-x-2 text-xs text-white p-2.5 rounded-xl bg-[#241147]/60 border border-white/10"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#DE3F11] shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Speakers / Mentors Involved */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#DE3F11]">
                        Distinguished Faculty & Mentors
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentEdition.keySpeakers.map((spk, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-lg bg-[#241147] text-white border border-[#9C1256]/40 font-medium"
                          >
                            {spk}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quantified Outcomes */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#DE3F11]">
                        Measurable Outcomes & Highlights
                      </h4>
                      <ul className="space-y-2">
                        {currentEdition.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start space-x-2.5 text-xs text-white/90">
                            <Award className="w-4 h-4 text-[#DE3F11] shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
                    <div className="relative overflow-hidden rounded-2xl mb-4">
                      <img
                        src={ed.photo}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = edFallback;
                        }}
                        alt={ed.title}
                        className="w-full h-40 object-cover rounded-2xl border border-white/10"
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
