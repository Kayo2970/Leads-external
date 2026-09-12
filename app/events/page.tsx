"use client";

import React, { useState } from "react";
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
} from "lucide-react";

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<LEADSEvent | null>(null);

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
      <section className="py-20 3xl:py-32 bg-[#FDFBFF] text-[#1E0C3D]">
        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 space-y-16 sm:space-y-24">
          {EVENTS_DATA.map((event, idx) => {
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
                className="bg-white rounded-3xl p-6 sm:p-10 3xl:p-14 border border-purple-200 shadow-2xl overflow-hidden hover:border-[#DE3F11]/40 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                  {/* TEXT CONTENT COLUMN */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isContentLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-[#9C1256]/15 to-[#DE3F11]/15 text-[#9C1256] border border-[#DE3F11]/30">
                          {event.category}
                        </span>
                        <span className="text-xs font-bold text-slate-500">
                          {event.seriesName}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-4xl 3xl:text-5xl font-black text-[#1E0C3D] leading-tight">
                        {event.name}
                      </h2>

                      <p className="text-sm sm:text-base font-semibold text-[#DE3F11]">
                        {event.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm 3xl:text-base text-slate-600 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Metadata Pill Box */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-purple-50/70 border border-purple-100 text-xs">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">
                          Frequency & Schedule
                        </div>
                        <div className="font-bold text-[#1E0C3D] mt-0.5 truncate">
                          {event.date}
                        </div>
                      </div>

                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">
                          Primary Location
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
                        Series Core Pillars
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
                        <span>Explore Series & All Editions</span>
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
                    {/* Main Large Photograph */}
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
                          {event.category}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-xs font-bold text-white border border-white/20">
                          <Camera className="w-3.5 h-3.5 text-[#DE3F11]" />
                          <span>Click to Open Full Archive</span>
                        </div>
                        <span className="text-xs font-bold bg-[#DE3F11] px-2.5 py-1 rounded-lg text-white shadow-md">
                          {event.editions ? event.editions.length : 1} Editions
                        </span>
                      </div>
                    </div>

                    {/* Thumbnail Previews Strip */}
                    <div className="grid grid-cols-3 gap-3">
                      {event.gallery.map((thumbUrl, thumbIdx) => {
                        const galleryPhId = 57 + (idx * 3 + thumbIdx);
                        const thumbFallback = generateNumberedPlaceholderSvg({
                          id: galleryPhId,
                          title: `Gallery #${galleryPhId}`,
                          subtitle: event.name,
                          category: "Gallery",
                        });

                        return (
                          <div
                            key={thumbIdx}
                            onClick={() => setSelectedEvent(event)}
                            className="cursor-pointer relative rounded-xl overflow-hidden border border-purple-200 h-20 2xl:h-24 hover:border-[#DE3F11] transition-all shadow-sm"
                          >
                            <img
                              src={thumbUrl}
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = thumbFallback;
                              }}
                              alt="Thumbnail preview"
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                            <PlaceholderBadge id={galleryPhId} position="top-left" className="scale-75 origin-top-left" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
