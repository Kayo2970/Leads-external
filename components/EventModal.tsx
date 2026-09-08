"use client";

import React, { useEffect, useState } from "react";
import { LEADSEvent, LEADSEventEdition } from "@/lib/events-data";
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
  const [activeTab, setActiveTab] = useState<"editions" | "gallery" | "highlights">("editions");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (event) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setSelectedEditionIndex(0);
      setActiveTab("editions");
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [event, onClose]);

  if (!event) return null;

  const getLogoIcon = (name: string) => {
    switch (name) {
      case "crown":
        return <Crown className="w-8 h-8 text-[#DE3F11]" />;
      case "zap":
        return <Zap className="w-8 h-8 text-[#DE3F11]" />;
      case "shield":
        return <Shield className="w-8 h-8 text-[#DE3F11]" />;
      case "rocket":
        return <Rocket className="w-8 h-8 text-[#DE3F11]" />;
      case "sparkles":
        return <Sparkles className="w-8 h-8 text-[#DE3F11]" />;
      case "star":
        return <Star className="w-8 h-8 text-[#DE3F11]" />;
      default:
        return <UserCheck className="w-8 h-8 text-[#DE3F11]" />;
    }
  };

  const currentEdition: LEADSEventEdition | undefined =
    event.editions && event.editions.length > 0 ? event.editions[selectedEditionIndex] : undefined;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#180A30]/95 backdrop-blur-2xl animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="fullscreen-modal-title"
    >
      {/* Top Floating Control Bar */}
      <header className="sticky top-0 z-50 bg-[#241147]/90 backdrop-blur-md border-b border-white/15 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-[#9C1256]/30 to-[#DE3F11]/30 text-white border border-[#DE3F11]/40">
              {event.category} Series
            </span>
            <span className="hidden sm:inline-block text-white/50">|</span>
            <span className="hidden sm:inline-block text-sm font-bold text-white truncate max-w-md">
              {event.name}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {event.externalLink && (
              <a
                href={event.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-md hover:opacity-90 transition-all"
              >
                <span>Visit Official Summit Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 sm:px-4 sm:py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center space-x-1.5 border border-white/20 transition-all"
              aria-label="Close full-screen view"
            >
              <X className="w-5 h-5" />
              <span className="hidden sm:inline">Close</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Full-Screen Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {/* HERO SERIES OVERVIEW BANNER */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#9C1256]/30 shadow-2xl relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#DE3F11]/15 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left/Main Column: Title & Full Description */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 rounded-2xl bg-[#241147] border border-[#DE3F11]/40 flex items-center justify-center text-white shadow-md shrink-0">
                  {getLogoIcon(event.logoSvg)}
                </div>
                <div>
                  <h1 id="fullscreen-modal-title" className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                    {event.name}
                  </h1>
                  <p className="text-sm sm:text-base text-[#DE3F11] font-semibold mt-1">
                    {event.tagline}
                  </p>
                </div>
              </div>

              <div className="pt-2 text-sm sm:text-base text-white/85 leading-relaxed">
                {event.description}
              </div>

              {/* Series Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                <div className="p-3.5 rounded-2xl bg-[#241147]/80 border border-white/10 flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-[#DE3F11] shrink-0" />
                  <div>
                    <div className="text-[11px] text-white/60">Schedule</div>
                    <div className="text-xs font-bold text-white">{event.date}</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#241147]/80 border border-white/10 flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[#DE3F11] shrink-0" />
                  <div>
                    <div className="text-[11px] text-white/60">Location</div>
                    <div className="text-xs font-bold text-white truncate max-w-[140px]">{event.location}</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#241147]/80 border border-white/10 flex items-center space-x-3">
                  <Users className="w-5 h-5 text-[#DE3F11] shrink-0" />
                  <div>
                    <div className="text-[11px] text-white/60">Total Reach</div>
                    <div className="text-xs font-bold text-white">{event.attendees}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High-Res Series Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                <img
                  src={event.photo}
                  alt={event.name}
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
          {currentEdition ? (
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl space-y-8 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Edition Photograph & Snapshot */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                    <img
                      src={currentEdition.photo}
                      alt={currentEdition.title}
                      className="w-full h-64 sm:h-72 object-cover"
                    />
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
          ) : null}

          {/* All Editions Overview Grid if multiple */}
          {event.editions && event.editions.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {event.editions.map((ed, idx) => (
                <div
                  key={ed.id}
                  onClick={() => setSelectedEditionIndex(idx)}
                  className={`cursor-pointer rounded-3xl p-5 border transition-all duration-300 ${
                    selectedEditionIndex === idx
                      ? "bg-[#361C6A] border-[#DE3F11] shadow-xl scale-[1.02]"
                      : "glass-panel border-white/10 hover:border-white/30"
                  }`}
                >
                  <img
                    src={ed.photo}
                    alt={ed.title}
                    className="w-full h-40 object-cover rounded-2xl mb-4 border border-white/10"
                  />
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
              ))}
            </div>
          )}
        </section>

        {/* PHOTO DOCUMENTATION GALLERY STRIP */}
        <section className="space-y-4">
          <div className="flex items-center space-x-2">
            <Camera className="w-5 h-5 text-[#DE3F11]" />
            <h3 className="text-xl font-bold text-white">
              Series Photo Documentation & Real Captures
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {event.gallery.map((imgUrl, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden border border-white/15 shadow-lg">
                <img
                  src={imgUrl}
                  alt={`Capture ${i + 1}`}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-bold text-white">
                    LEADS Next Gen Centre · Real Session Photography
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM ACTION BAR */}
        <div className="glass-panel rounded-3xl p-8 border border-[#9C1256]/30 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">
            Interested in Participating or Hosting a Cohort?
          </h3>
          <p className="text-sm text-white/80 max-w-2xl mx-auto">
            Contact the LEADS Next Gen Centre team to enroll delegations, sponsor student cohorts, or request bespoke institutional non-technical training modules.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-lg hover:opacity-95 transition-all"
            >
              Contact LEADS Secretariat
            </a>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm glass-panel text-white hover:bg-white/10 border border-white/20 transition-all"
            >
              Return to All Events
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
