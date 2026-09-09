"use client";

import React, { useState } from "react";
import BorderGlow from "@/components/BorderGlow";
import EventModal from "@/components/EventModal";
import { EVENTS_DATA, LEADSEvent } from "@/lib/events-data";
import {
  Calendar,
  Filter,
  MapPin,
  Users,
  CheckCircle2,
  ArrowRight,
  Camera,
  Crown,
  Zap,
  Shield,
  Rocket,
  Star,
  UserCheck,
} from "lucide-react";

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<LEADSEvent | null>(null);

  const getLogoIcon = (name: string) => {
    const iconClass = "w-6 h-6 text-[#DE3F11]";
    switch (name) {
      case "crown":
        return <Crown className={iconClass} />;
      case "zap":
        return <Zap className={iconClass} />;
      case "shield":
        return <Shield className={iconClass} />;
      case "rocket":
        return <Rocket className={iconClass} />;
      case "star":
        return <Star className={iconClass} />;
      default:
        return <UserCheck className={iconClass} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBFF]">
      {/* Full-Screen Interactive Series Modal */}
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />

      {/* SECTION 1 [PURPLE 30%]: HERO HEADER */}
      <section className="pt-32 pb-20 bg-[#361C6A] text-white relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-[#9C1256]/30 to-[#DE3F11]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 3xl:space-x-3 px-4 py-1.5 3xl:px-6 3xl:py-3 rounded-full bg-white/10 text-white border border-white/20 text-xs 3xl:text-lg font-semibold mb-6 3xl:mb-10 shadow-sm">
            <Calendar className="w-3.5 h-3.5 3xl:w-5 3xl:h-5 text-[#DE3F11]" />
            <span>LEADS National Initiative Calendar & Archives</span>
          </div>
          <h1 className="text-4xl sm:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Where Leaders <span className="bg-gradient-to-r from-[#DE3F11] to-[#FF8C61] bg-clip-text text-transparent">Come Together</span>
          </h1>
          <p className="mt-5 3xl:mt-8 text-base sm:text-lg 2xl:text-xl 3xl:text-2xl text-[#E2D9F3] max-w-2xl 3xl:max-w-4xl mx-auto leading-relaxed">
            Explore our signature leadership summits, intensive workshops, and executive roundtables. Click any series to open the full-screen interactive archive with photographs and edition breakdowns.
          </p>
        </div>
      </section>

      {/* SECTION 2 [WHITE 70%]: ALTERNATING EVENT SERIES ROWS */}
      <section className="py-20 3xl:py-32 bg-[#FDFBFF] text-[#1E0C3D] border-t border-purple-100">
        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 space-y-16 3xl:space-y-24">
          {EVENTS_DATA.map((event, index) => {
            const isContentLeft = index % 2 === 0;

            return (
              <div
                key={event.id}
                className="bg-white rounded-3xl 3xl:rounded-[36px] p-6 sm:p-10 3xl:p-14 border border-purple-200 shadow-xl relative overflow-hidden group text-[#1E0C3D]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
                {/* TEXT / CONTENT COLUMN */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isContentLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 3xl:w-16 3xl:h-16 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center shadow-sm shrink-0">
                      {getLogoIcon(event.logoSvg)}
                    </div>
                    <div>
                      <span className="text-xs 3xl:text-base font-bold uppercase tracking-wider text-[#9C1256]">
                        {event.seriesName}
                      </span>
                      <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-extrabold text-[#1E0C3D] leading-tight">
                        {event.name}
                      </h2>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm 2xl:text-base font-semibold text-[#DE3F11]">
                    {event.tagline}
                  </p>

                  {/* Description */}
                  <div className="space-y-2">
                    <h3 className="text-xs 3xl:text-sm font-bold uppercase tracking-wider text-[#9C1256]">
                      About the Series
                    </h3>
                    <p className="text-sm 2xl:text-base text-slate-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2.5 pt-1">
                    <h3 className="text-xs 3xl:text-sm font-bold uppercase tracking-wider text-[#9C1256]">
                      Key Focus Areas
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {event.seriesHighlights.slice(0, 4).map((hl, hlIdx) => (
                        <div
                          key={hlIdx}
                          className="flex items-start space-x-2 text-xs 2xl:text-sm text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#DE3F11] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap gap-2 pt-2 text-xs 2xl:text-sm text-slate-700">
                    <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-100 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#DE3F11]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-100 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#DE3F11]" />
                      <span className="truncate max-w-[160px]">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-100 font-medium">
                      <Users className="w-3.5 h-3.5 text-[#DE3F11]" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>

                  {/* Action CTA Button */}
                  <div className="pt-4">
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
                      alt={event.name}
                      className="w-full h-72 sm:h-96 2xl:h-[420px] object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#180A30] via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity" />

                    <div className="absolute top-4 left-4">
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
                        {event.editions.length} Editions
                      </span>
                    </div>
                  </div>

                  {/* Thumbnail Previews Strip */}
                  <div className="grid grid-cols-3 gap-3">
                    {event.gallery.map((thumbUrl, thumbIdx) => (
                      <div
                        key={thumbIdx}
                        onClick={() => setSelectedEvent(event)}
                        className="cursor-pointer relative rounded-xl overflow-hidden border border-purple-200 h-20 2xl:h-24 hover:border-[#DE3F11] transition-all shadow-sm"
                      >
                        <img
                          src={thumbUrl}
                          alt="Thumbnail preview"
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
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
