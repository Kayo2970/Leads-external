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
  Filter,
} from "lucide-react";

// Removed "All Events" from top tabs as requested by user
const EVENT_CATEGORIES = [
  "Stand-alone",
  "Outreach",
  "Catalyst Leadership Talk Series",
  "Expert Talks",
  "Fireside Talks",
  "Boardroom Battles",
  "Sustainability",
];

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "All Events":
    "Browse our complete national archive of standalone ceremonies, outreach delegations, catalyst talk masterclasses, expert workshops, and sustainability drives.",
  "Stand-alone":
    "Premier standalone institutional ceremonies and executive governance initiatives including the Centre Inauguration and Vanguard Leadership Retreat.",
  "Outreach":
    "Institutional partnerships, state seminars, industry roundtables & national delegation visits connecting LEADS with government, chambers of commerce, and apex bodies.",
  "Catalyst Leadership Talk Series":
    "Our signature executive masterclass and leadership talk series (3.0 through 9.0) designed to build core non-technical business acumen, ethical governance, and strategic adaptability.",
  "Expert Talks":
    "Specialized technical masterclasses and analytical workshops focusing on data science with Python, machine learning workflows, and data-driven decision making.",
  "Fireside Talks":
    "Unfiltered interactive dialogues bridging global thought leaders with local youth innovators to explore social impact, venture creation, and grassroots change.",
  "Boardroom Battles":
    "High-stakes crisis management and boardroom strategy simulations empowering student leaders to master corporate governance, negotiation, and risk mitigation.",
  "Sustainability":
    "Community impact and social responsibility initiatives executed by the LEADS Student Council, engaging in social care, environmental stewardship, and green leadership.",
};

function EventsContent() {
  const searchParams = useSearchParams();
  const queryCat = searchParams.get("category");
  const initialCategory = (queryCat && (EVENT_CATEGORIES.includes(queryCat) || queryCat === "All Events"))
    ? queryCat
    : "Stand-alone";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [showAllEvents, setShowAllEvents] = useState<boolean>(queryCat === "All Events" || queryCat === "all");
  const [selectedEvent, setSelectedEvent] = useState<LEADSEvent | null>(null);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat === "All Events" || cat === "all") {
      setShowAllEvents(true);
      setSelectedCategory("All Events");
    } else if (cat && EVENT_CATEGORIES.includes(cat)) {
      setShowAllEvents(false);
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const filteredEvents =
    showAllEvents || selectedCategory === "All Events"
      ? EVENTS_DATA
      : EVENTS_DATA.filter((e) => e.subCategory === selectedCategory);

  return (
    <div className="relative">
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

      {/* SECTION 2 [WHITE]: EVENTS DEEP-DIVE CATALOG */}
      <section className="py-16 sm:py-24 bg-[#FDFBFF] text-[#1E0C3D]">
        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12">
          
          {/* CATEGORY TABS / GROUP BAR (NO ALL EVENTS BUTTON HERE) */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#9C1256]">
                <Filter className="w-4 h-4 text-[#DE3F11]" />
                <span>Subcategories</span>
              </div>
              <span className="text-xs text-slate-500 font-semibold">
                Showing {filteredEvents.length} {filteredEvents.length === 1 ? "Event" : "Events"}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 p-2 rounded-2xl bg-purple-50/70 border border-purple-100">
              {EVENT_CATEGORIES.map((cat) => {
                const isActive = !showAllEvents && selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setShowAllEvents(false);
                      setSelectedCategory(cat);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-md scale-[1.02]"
                        : "text-[#1E0C3D] hover:bg-purple-100/80 hover:text-[#9C1256]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* MAIN CATEGORY HEADING DISPLAY */}
          <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-50 to-orange-50/50 border border-purple-200/80 shadow-sm">
            <div className="flex items-center space-x-3 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-xs">
                {showAllEvents ? "Complete Archive" : "Event Group"}
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                Topic Selection
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl 3xl:text-5xl font-black text-[#1E0C3D] leading-tight">
              {showAllEvents ? "All Events & Assemblies" : selectedCategory}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-4xl leading-relaxed">
              {showAllEvents
                ? CATEGORY_DESCRIPTIONS["All Events"]
                : CATEGORY_DESCRIPTIONS[selectedCategory] || CATEGORY_DESCRIPTIONS["Stand-alone"]}
            </p>
          </div>

          {/* EVENTS LIST */}
          <div className="space-y-16 sm:space-y-24">
            {filteredEvents.map((event, idx) => {
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
                  className="scroll-mt-36 bg-white rounded-3xl p-6 sm:p-10 3xl:p-14 border border-purple-200 shadow-2xl overflow-hidden hover:border-[#DE3F11]/40 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                    {/* TEXT COLUMN */}
                    <div
                      className={`lg:col-span-6 space-y-6 ${
                        isContentLeft ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-[#9C1256]/15 to-[#DE3F11]/15 text-[#9C1256] border border-[#DE3F11]/30">
                            {event.subCategory}
                          </span>
                          <span className="text-xs font-bold text-slate-500">
                            {event.seriesName}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-4xl 3xl:text-5xl font-black text-[#1E0C3D] leading-tight">
                          {event.name}
                        </h3>

                        <p className="text-sm sm:text-base font-semibold text-[#DE3F11]">
                          {event.tagline}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm 3xl:text-base text-slate-600 leading-relaxed">
                        {event.description}
                      </p>

                      {/* Metadata Box */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-purple-50/70 border border-purple-100 text-xs">
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
                        <div className="text-xs font-bold uppercase tracking-wider text-[#9C1256]">
                          Key Highlights & Outcomes
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                          {event.seriesHighlights.map((hl, hlIdx) => (
                            <li key={hlIdx} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-[#DE3F11] shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => setSelectedEvent(event)}
                          className="w-full sm:w-auto px-7 py-3.5 rounded-2xl font-bold text-xs 2xl:text-sm bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                        >
                          <span>Explore Details & Speakers</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* PHOTO COLUMN */}
                    <div
                      className={`lg:col-span-6 space-y-4 ${
                        isContentLeft ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div
                        onClick={() => setSelectedEvent(event)}
                        className="cursor-pointer relative rounded-2xl overflow-hidden border border-purple-200 shadow-xl group/img"
                      >
                        <img
                          src={event.photo}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = mainFallback;
                          }}
                          alt={event.name}
                          className="w-full h-72 sm:h-96 2xl:h-[420px] object-cover group-hover/img:scale-105 transition-transform duration-500"
                        />
                        <PlaceholderBadge id={mainPhId} position="top-left" />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#180A30] via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity" />

                        <div className="absolute top-4 right-4">
                          <span className="text-xs font-bold px-3 py-1 rounded-full border border-purple-200 bg-white/90 backdrop-blur-md text-[#1E0C3D]">
                            {event.subCategory}
                          </span>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
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

          {/* BOTTOM SECTION: INTEGRATED VIEW ALL BUTTON */}
          <div className="mt-16 pt-12 border-t border-purple-100 text-center">
            {!showAllEvents ? (
              <div className="bg-gradient-to-r from-purple-50 via-white to-orange-50/50 rounded-3xl p-8 sm:p-10 border border-purple-200 shadow-lg max-w-3xl mx-auto space-y-4">
                <h3 className="text-xl sm:text-2xl font-black text-[#1E0C3D]">
                  Want to explore our entire assembly archive?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                  View all 19 national events, summits, outreach visits, and catalyst talk editions together in one complete list.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setShowAllEvents(true);
                    setSelectedCategory("All Events");
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                  className="px-8 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2 cursor-pointer"
                >
                  <span>View All Events</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="bg-purple-50/70 rounded-3xl p-6 border border-purple-200 max-w-2xl mx-auto flex items-center justify-between">
                <span className="text-xs sm:text-sm font-bold text-[#1E0C3D]">
                  Currently displaying all 19 events
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setShowAllEvents(false);
                    setSelectedCategory("Stand-alone");
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white hover:scale-105 transition-transform"
                >
                  Filter by Category
                </button>
              </div>
            )}
          </div>
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
