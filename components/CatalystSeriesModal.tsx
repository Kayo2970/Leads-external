"use client";

import React, { useEffect, useState } from "react";
import { LEADSEvent, EVENTS_DATA } from "@/lib/events-data";
import PlaceholderBadge from "@/components/PlaceholderBadge";
import { generateNumberedPlaceholderSvg } from "@/lib/placeholders";
import {
  X,
  Calendar,
  MapPin,
  Users,
  CheckCircle,
  Zap,
  Sparkles,
  Search,
  ArrowRight,
  UserCheck,
  Award,
} from "lucide-react";

interface CatalystSeriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedEditionId?: string | null;
}

export default function CatalystSeriesModal({
  isOpen,
  onClose,
  selectedEditionId = null,
}: CatalystSeriesModalProps) {
  const catalystEvents = EVENTS_DATA.filter(
    (e) => e.subCategory === "Catalyst Leadership Talk Series" || e.category === "Catalyst"
  );

  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (selectedEditionId) {
      setActiveFilter(selectedEditionId);
    } else {
      setActiveFilter("All");
    }
  }, [selectedEditionId, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredEvents = catalystEvents.filter((ev) => {
    const matchesTab =
      activeFilter === "All" ||
      ev.id === activeFilter ||
      ev.name.toLowerCase().includes(activeFilter.toLowerCase());

    const matchesSearch =
      searchQuery === "" ||
      ev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.speakers.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTab && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl max-h-[92vh] flex flex-col bg-[#180A30] text-white rounded-3xl border border-white/20 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* MODAL HEADER */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#361C6A] via-[#241147] to-[#9C1256]/40 border-b border-white/15 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-[#DE3F11] text-white transition-all duration-200 border border-white/20 cursor-pointer shadow-lg"
            title="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-3 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white border border-[#DE3F11]/40 shadow-xs flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>Catalyst Insights Series Archive</span>
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-white border border-white/20">
                {catalystEvents.length} Active Masterclass Editions (3.0 – 9.0+)
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Catalyst Insights Leadership Talk Series
            </h2>

            <p className="text-xs sm:text-sm text-[#E2D9F3]/90 leading-relaxed max-w-3xl">
              Our signature executive masterclass and leadership talk series designed to build core non-technical business acumen, ethical governance, personal branding, digital adaptability, and attitude development across 7+ active editions.
            </p>
          </div>

          {/* FILTER TAB BAR & SEARCH INPUT */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Quick Edition Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full custom-scrollbar">
              <button
                onClick={() => setActiveFilter("All")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  activeFilter === "All"
                    ? "bg-[#DE3F11] text-white shadow-md scale-105"
                    : "bg-white/10 text-white/80 hover:bg-white/20 border border-white/15"
                }`}
              >
                All Editions ({catalystEvents.length})
              </button>
              {catalystEvents.map((ev) => {
                const edLabel = ev.name
                  .replace("Catalyst Insight: Leadership Talk Series ", "Edition ")
                  .replace("Catalyst Insights Leadership Talk Series ", "Edition ");
                return (
                  <button
                    key={ev.id}
                    onClick={() => setActiveFilter(ev.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                      activeFilter === ev.id
                        ? "bg-[#9C1256] text-white shadow-md scale-105 border border-[#DE3F11]"
                        : "bg-white/10 text-white/80 hover:bg-white/20 border border-white/15"
                    }`}
                  >
                    {edLabel}
                  </button>
                );
              })}
            </div>

            {/* Search Filter Box */}
            <div className="relative shrink-0 w-full md:w-64">
              <Search className="w-4 h-4 text-white/50 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search topic or speaker..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-[#DE3F11] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* MODAL BODY SCROLLABLE CONTAINER */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-8 bg-[#120726] custom-scrollbar">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-16 text-white/60">
              <Zap className="w-12 h-12 mx-auto text-[#DE3F11] opacity-40 mb-3" />
              <p className="text-base font-bold">No Catalyst talk editions found matching your search.</p>
              <button
                onClick={() => {
                  setActiveFilter("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-[#DE3F11] text-white"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredEvents.map((ev, idx) => {
              const phId = ev.placeholderId || 66 + idx;
              const fallbackSvg = generateNumberedPlaceholderSvg({
                id: phId,
                title: ev.name,
                subtitle: ev.seriesName,
                category: ev.category,
              });

              return (
                <article
                  key={ev.id}
                  id={`modal-${ev.id}`}
                  className="bg-[#241147] rounded-2xl p-6 sm:p-8 border border-white/15 shadow-xl hover:border-[#DE3F11]/50 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* LEFT COLUMN: TITLE & OVERVIEW */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-md bg-[#DE3F11]/20 text-[#FF8C61] border border-[#DE3F11]/30">
                          {ev.name
                            .replace("Catalyst Insight: Leadership Talk Series ", "Catalyst Edition ")
                            .replace("Catalyst Insights Leadership Talk Series ", "Catalyst Edition ")}
                        </span>
                        <span className="text-xs text-white/70 font-semibold flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#DE3F11]" />
                          <span>{ev.date}</span>
                        </span>
                        <span className="text-xs text-white/70 font-semibold flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#9C1256]" />
                          <span>{ev.location}</span>
                        </span>
                        <span className="text-xs font-bold text-[#DE3F11] ml-auto">
                          {ev.attendees}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                        {ev.name}
                      </h3>

                      <p className="text-xs sm:text-sm font-semibold text-[#FF8C61]">
                        "{ev.tagline}"
                      </p>

                      <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                        {ev.description}
                      </p>

                      {/* SPEAKERS / KEYNOTE MASTERS */}
                      {ev.speakers && ev.speakers.length > 0 && (
                        <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                          <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#DE3F11] flex items-center gap-1.5">
                            <UserCheck className="w-3.5 h-3.5" />
                            <span>Featured Keynote Speaker(s)</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {ev.speakers.map((spk, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#361C6A] text-white border border-white/20"
                              >
                                {spk}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* HIGHLIGHTS CHECKLIST */}
                      {ev.seriesHighlights && ev.seriesHighlights.length > 0 && (
                        <div className="space-y-2 pt-2">
                          <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#9C1256]">
                            Edition Core Pillars & Takeaways
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/90 font-medium">
                            {ev.seriesHighlights.map((hl, hlIdx) => (
                              <div key={hlIdx} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-[#DE3F11] shrink-0 mt-0.5" />
                                <span>{hl}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* RIGHT COLUMN: MEDIA / THUMBNAIL & OUTCOMES */}
                    <div className="lg:col-span-4 space-y-4">
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/20 bg-[#361C6A] shadow-md group">
                        <img
                          src={ev.photo || fallbackSvg}
                          onError={(e) => {
                            if (fallbackSvg) {
                              (e.target as HTMLImageElement).src = fallbackSvg;
                            }
                          }}
                          alt={ev.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {ev.placeholderId && (
                          <PlaceholderBadge id={ev.placeholderId} position="top-right" className="scale-75 origin-top-right" />
                        )}
                      </div>

                      {/* OUTCOMES BADGES */}
                      {ev.outcomes && ev.outcomes.length > 0 && (
                        <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-800/40 space-y-1.5">
                          <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#9C1256] flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5" />
                            <span>Student Outcomes</span>
                          </div>
                          <ul className="space-y-1 text-xs text-white/80 font-medium">
                            {ev.outcomes.map((oc, ocIdx) => (
                              <li key={ocIdx} className="flex items-start gap-1.5">
                                <span className="text-[#DE3F11] font-bold">•</span>
                                <span>{oc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>

        {/* MODAL FOOTER */}
        <div className="p-4 sm:p-5 bg-[#180A30] border-t border-white/15 flex items-center justify-between shrink-0 text-xs text-white/70">
          <span>Viewing Catalyst Insights Leadership Talk Series Archive</span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl font-bold bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Close Series Explorer
          </button>
        </div>
      </div>
    </div>
  );
}
