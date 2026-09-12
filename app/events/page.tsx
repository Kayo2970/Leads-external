"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import EventModal from "@/components/EventModal";
import AnimatedContent from "@/components/AnimatedContent";
import PlaceholderBadge from "@/components/PlaceholderBadge";
import { generateNumberedPlaceholderSvg } from "@/lib/placeholders";
import { EVENTS_DATA, LEADSEvent } from "@/lib/events-data";
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  Sparkles,
  Camera,
  Layers,
  Award,
  Zap,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface CategoryGroup {
  name: string;
  badge: string;
  icon: React.ReactNode;
  description: string;
  events: LEADSEvent[];
}

const CATEGORY_GROUPS: {
  name: string;
  badge: string;
  description: string;
}[] = [
  {
    name: "Stand-alone",
    badge: "Flagship Ceremonies",
    description:
      "Premier standalone institutional ceremonies and executive governance initiatives including the Centre Inauguration and Vanguard Leadership Retreat.",
  },
  {
    name: "Outreach",
    badge: "Delegations & Symposia",
    description:
      "Institutional partnerships, state seminars, industry roundtables & national delegation visits connecting LEADS with government, chambers of commerce, and apex bodies.",
  },
  {
    name: "Catalyst Leadership Talk Series",
    badge: "Executive Masterclasses (3.0 – 9.0)",
    description:
      "Our signature executive masterclass and leadership talk series (restarting from 3.0 through 9.0) designed to build core non-technical business acumen, ethical governance, and strategic adaptability.",
  },
  {
    name: "Expert Talks",
    badge: "Technical Workshops",
    description:
      "Specialized technical masterclasses and analytical workshops focusing on data science with Python, machine learning workflows, and data-driven decision making.",
  },
  {
    name: "Fireside Talks",
    badge: "Interactive Dialogues",
    description:
      "Unfiltered interactive dialogues bridging global thought leaders with local youth innovators to explore social impact, venture creation, and grassroots change.",
  },
  {
    name: "Boardroom Battles",
    badge: "Crisis Simulations",
    description:
      "High-stakes crisis management and boardroom strategy simulations empowering student leaders to master corporate governance, negotiation, and risk mitigation.",
  },
  {
    name: "Sustainability",
    badge: "Community Outreach",
    description:
      "Community impact and social responsibility initiatives executed by the LEADS Student Council, engaging in social care, environmental stewardship, and green leadership.",
  },
];

function EventsContent() {
  const searchParams = useSearchParams();
  const targetCategory = searchParams.get("category");

  // Accordion open/close state for each group (all open by default)
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    "Stand-alone": true,
    "Outreach": true,
    "Catalyst Leadership Talk Series": true,
    "Expert Talks": true,
    "Fireside Talks": true,
    "Boardroom Battles": true,
    "Sustainability": true,
  });

  const [selectedEvent, setSelectedEvent] = useState<LEADSEvent | null>(null);

  useEffect(() => {
    if (targetCategory && CATEGORY_GROUPS.some((g) => g.name === targetCategory)) {
      setExpandedGroups((prev) => ({
        ...prev,
        [targetCategory]: true,
      }));
      const elId = targetCategory.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      setTimeout(() => {
        const el = document.getElementById(elId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
  }, [targetCategory]);

  const toggleGroup = (groupName: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }));
  };

  return (
    <div className="relative min-h-screen bg-[#FDFBFF]">
      {/* Event Detail Modal */}
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />

      {/* SECTION 1 [PURPLE]: HERO HEADER */}
      <section className="pt-36 sm:pt-44 pb-16 sm:pb-24 3xl:pt-52 3xl:pb-36 bg-[#361C6A] text-white overflow-hidden relative border-b border-[#DE3F11]/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#9C1256]/30 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 relative z-10">
          <AnimatedContent distance={40} direction="vertical">
            <div className="text-center max-w-4xl mx-auto space-y-4">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#9C1256]/30 border border-[#DE3F11]/40 backdrop-blur-md">
                <Layers className="w-4 h-4 text-[#DE3F11]" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Events & Keynote Assembly Archive
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl 3xl:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Our Flagship Summits, Workshops & Conclaves
              </h1>

              <p className="text-sm sm:text-lg 3xl:text-xl text-white/80 leading-relaxed font-normal">
                Explore our recurring leadership series, national policy conclaves, executive roundtables, and specialized student founder sprints designed to transform technical talent into strategic leaders.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* SECTION 2 [WHITE]: GROUPED CATEGORIES & EXPANDABLE ACCORDIONS */}
      <section className="py-16 sm:py-24 bg-[#FDFBFF] text-[#1E0C3D]">
        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 space-y-16">
          
          {CATEGORY_GROUPS.map((group) => {
            const groupEvents = EVENTS_DATA.filter((e) => e.subCategory === group.name);
            if (groupEvents.length === 0) return null;

            const isExpanded = expandedGroups[group.name] ?? true;

            return (
              <div
                key={group.name}
                id={group.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className="scroll-mt-36 rounded-3xl bg-white border border-purple-200 shadow-xl overflow-hidden transition-all duration-300"
              >
                {/* GROUP MAIN HEADER BAR */}
                <div
                  onClick={() => toggleGroup(group.name)}
                  className="cursor-pointer p-6 sm:p-8 bg-gradient-to-r from-purple-50 via-white to-orange-50/40 border-b border-purple-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group/header hover:bg-purple-100/50 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-xs">
                        {group.badge}
                      </span>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                        {groupEvents.length} {groupEvents.length === 1 ? "Event Edition" : "Editions Grouped"}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl 3xl:text-4xl font-black text-[#1E0C3D] group-hover/header:text-[#DE3F11] transition-colors mt-1">
                      {group.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0">
                    <button
                      type="button"
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-white border border-purple-200 text-[#1E0C3D] group-hover/header:border-[#DE3F11] transition-colors flex items-center space-x-2 shadow-xs"
                    >
                      <span>{isExpanded ? "Collapse Group" : "Expand All Editions"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#DE3F11]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#9C1256]" />
                      )}
                    </button>
                  </div>
                </div>

                {/* SUB-ITEMS LIST (VISIBLE WHEN EXPANDED) */}
                {isExpanded && (
                  <div className="p-6 sm:p-10 space-y-12 bg-[#FDFBFF]">
                    {groupEvents.map((event, idx) => {
                      const isContentLeft = idx % 2 === 0;
                      const mainPhId = event.placeholderId || 44 + idx;
                      const mainFallback = generateNumberedPlaceholderSvg({
                        id: mainPhId,
                        title: event.name,
                        subtitle: event.seriesName,
                        category: event.category,
                      });

                      return (
                        <div
                          key={event.id}
                          id={event.id}
                          className="bg-white rounded-2xl p-6 sm:p-8 border border-purple-200 shadow-md hover:border-[#DE3F11]/40 hover:shadow-xl transition-all duration-300"
                        >
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            {/* TEXT COLUMN */}
                            <div
                              className={`lg:col-span-6 space-y-5 ${
                                isContentLeft ? "lg:order-1" : "lg:order-2"
                              }`}
                            >
                              <div className="space-y-1.5">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-purple-100 text-[#9C1256] border border-purple-200">
                                    {event.subCategory}
                                  </span>
                                  <span className="text-xs font-bold text-slate-500">
                                    {event.seriesName}
                                  </span>
                                </div>

                                <h3 className="text-xl sm:text-3xl font-extrabold text-[#1E0C3D] leading-tight">
                                  {event.name}
                                </h3>

                                <p className="text-xs sm:text-sm font-semibold text-[#DE3F11]">
                                  {event.tagline}
                                </p>
                              </div>

                              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                {event.description}
                              </p>

                              {/* Metadata Box */}
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3 rounded-xl bg-purple-50/70 border border-purple-100 text-xs">
                                <div>
                                  <div className="text-[10px] uppercase font-bold text-slate-400">
                                    Date & Schedule
                                  </div>
                                  <div className="font-bold text-[#1E0C3D] mt-0.5 truncate">
                                    {event.date}
                                  </div>
                                </div>

                                <div>
                                  <div className="text-[10px] uppercase font-bold text-slate-400">
                                    Venue / Location
                                  </div>
                                  <div className="font-bold text-[#1E0C3D] mt-0.5 truncate">
                                    {event.location}
                                  </div>
                                </div>

                                <div>
                                  <div className="text-[10px] uppercase font-bold text-slate-400">
                                    Reach & Scale
                                  </div>
                                  <div className="font-bold text-[#9C1256] mt-0.5 truncate">
                                    {event.attendees}
                                  </div>
                                </div>
                              </div>

                              {/* Highlights Bullet List */}
                              <div className="space-y-2">
                                <div className="text-[11px] font-bold uppercase tracking-wider text-[#9C1256]">
                                  Core Highlights & Outcomes
                                </div>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                                  {event.seriesHighlights.map((hl, hlIdx) => (
                                    <li key={hlIdx} className="flex items-start space-x-2">
                                      <CheckCircle className="w-3.5 h-3.5 text-[#DE3F11] shrink-0 mt-0.5" />
                                      <span>{hl}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* CTA Button */}
                              <div className="pt-1">
                                <button
                                  type="button"
                                  onClick={() => setSelectedEvent(event)}
                                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                                >
                                  <span>Explore Details & Speakers</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>

                            {/* PHOTO COLUMN */}
                            <div
                              className={`lg:col-span-6 space-y-3 ${
                                isContentLeft ? "lg:order-2" : "lg:order-1"
                              }`}
                            >
                              <div
                                onClick={() => setSelectedEvent(event)}
                                className="cursor-pointer relative rounded-2xl overflow-hidden border border-purple-200 shadow-md group/img"
                              >
                                <img
                                  src={event.photo}
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = mainFallback;
                                  }}
                                  alt={event.name}
                                  className="w-full h-64 sm:h-80 object-cover group-hover/img:scale-105 transition-transform duration-500"
                                />
                                <PlaceholderBadge id={mainPhId} position="top-left" />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#180A30] via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity" />

                                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-xs font-bold text-white border border-white/20">
                                    <Camera className="w-3.5 h-3.5 text-[#DE3F11]" />
                                    <span>Click for Full Details</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default function EventsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#361C6A] pt-44 text-center text-white font-bold">
        Loading Events Archive...
      </div>
    }>
      <EventsContent />
    </Suspense>
  );
}
