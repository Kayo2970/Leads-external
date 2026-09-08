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
  UserCheck,
} from "lucide-react";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedEvent, setSelectedEvent] = useState<LEADSEvent | null>(null);

  const categories = ["All", "Workshop", "Summit", "Roundtable", "Conclave"];

  const filteredEvents =
    selectedCategory === "All"
      ? EVENTS_DATA
      : EVENTS_DATA.filter((e) => e.category === selectedCategory);

  const getLogoIcon = (name: string, isLight: boolean = false) => {
    const iconClass = isLight ? "w-6 h-6 text-[#9C1256]" : "w-6 h-6 text-[#DE3F11]";
    switch (name) {
      case "crown":
        return <Crown className={iconClass} />;
      case "zap":
        return <Zap className={iconClass} />;
      case "shield":
        return <Shield className={iconClass} />;
      case "rocket":
        return <Rocket className={iconClass} />;
      default:
        return <UserCheck className={iconClass} />;
    }
  };

  return (
    <div className="pt-28 pb-24 min-h-screen">
      {/* Full-Screen Interactive Series Modal */}
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />

      {/* Header Banner */}
      <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 text-center mb-16 3xl:mb-24">
        <div className="inline-flex items-center space-x-2 3xl:space-x-3 px-4 py-1.5 3xl:px-6 3xl:py-3 rounded-full bg-white/10 text-white border border-white/20 text-xs 3xl:text-lg font-semibold mb-4 3xl:mb-8 shadow-sm">
          <Calendar className="w-3.5 h-3.5 3xl:w-5 3xl:h-5 text-[#DE3F11]" />
          <span>LEADS National Initiative Calendar & Archives</span>
        </div>
        <h1 className="text-4xl sm:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-extrabold text-white tracking-tight">
          Where Leaders Come Together
        </h1>
        <p className="mt-4 3xl:mt-8 text-base sm:text-lg 2xl:text-xl 3xl:text-2xl text-white/80 max-w-2xl 3xl:max-w-4xl mx-auto leading-relaxed">
          Explore our signature leadership summits, intensive workshops, and executive roundtables. Click any series to open the full-screen interactive archive with photographs and edition breakdowns.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 mb-16 3xl:mb-24">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 3xl:gap-5">
          <span className="text-xs 3xl:text-lg font-semibold text-white/70 mr-2 flex items-center space-x-1">
            <Filter className="w-3.5 h-3.5 3xl:w-5 3xl:h-5 text-[#DE3F11]" />
            <span>Filter Series:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 3xl:px-8 3xl:py-4 rounded-xl 3xl:rounded-2xl text-xs 3xl:text-lg font-bold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-lg scale-105"
                  : "glass-panel text-white/80 border border-white/15 hover:border-[#DE3F11]/50"
              }`}
            >
              {cat} {cat === "All" ? `(${EVENTS_DATA.length})` : ""}
            </button>
          ))}
        </div>
      </div>

      {/* ALTERNATING EVENT SERIES SHOWCASE ROWS */}
      <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 space-y-16 3xl:space-y-24">
        {filteredEvents.map((event, index) => {
          const isImageLeft = index % 2 === 0;
          const isLightCard = index % 2 !== 0; // Alternating white card for odd indices

          if (isLightCard) {
            return (
              <BorderGlow
                key={event.id}
                edgeSensitivity={30}
                glowColor="330 85 50"
                backgroundColor="#FFFFFF"
                borderRadius={28}
                glowRadius={45}
                glowIntensity={1.1}
                colors={["#9C1256", "#DE3F11", "#361C6A"]}
                animated={true}
                className="shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <div className="p-6 sm:p-10 relative overflow-hidden group text-[#1E0C3D]">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
                    {/* PHOTO COLUMN */}
                    <div
                      className={`lg:col-span-6 space-y-4 ${
                        isImageLeft ? "lg:order-1" : "lg:order-2"
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
                          className="w-full h-72 sm:h-96 object-cover group-hover/img:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-75 group-hover/img:opacity-50 transition-opacity" />

                        <div className="absolute top-4 left-4">
                          <span className="text-xs font-bold px-3 py-1 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-white">
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
                            className="cursor-pointer relative rounded-xl overflow-hidden border border-purple-200 h-20 hover:border-[#DE3F11] transition-all shadow-sm"
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

                    {/* TEXT / CONTENT COLUMN */}
                    <div
                      className={`lg:col-span-6 space-y-5 ${
                        isImageLeft ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center text-[#9C1256] shadow-sm shrink-0">
                          {getLogoIcon(event.logoSvg, true)}
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#9C1256]">
                            {event.seriesName}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E0C3D] leading-tight">
                            {event.name}
                          </h2>
                        </div>
                      </div>

                      {/* Subtitle / Tagline */}
                      <p className="text-sm font-semibold text-[#361C6A]">
                        {event.tagline}
                      </p>

                      {/* Paragraph Description: What the series is about */}
                      <div className="space-y-1.5">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#9C1256]">
                          About the Series
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      {/* Series Highlights */}
                      <div className="space-y-2.5 pt-1">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#9C1256]">
                          Key Focus Areas
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {event.seriesHighlights.slice(0, 4).map((hl, hlIdx) => (
                            <div
                              key={hlIdx}
                              className="flex items-start space-x-2 text-xs text-slate-700"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#DE3F11] shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Metadata Chips */}
                      <div className="flex flex-wrap gap-2 pt-2 text-xs text-slate-600">
                        <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-100">
                          <Calendar className="w-3.5 h-3.5 text-[#9C1256]" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-100">
                          <MapPin className="w-3.5 h-3.5 text-[#9C1256]" />
                          <span className="truncate max-w-[160px]">{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-100">
                          <Users className="w-3.5 h-3.5 text-[#9C1256]" />
                          <span>{event.attendees}</span>
                        </div>
                      </div>

                      {/* Action CTA Button */}
                      <div className="pt-4">
                        <button
                          onClick={() => setSelectedEvent(event)}
                          className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <span>Explore Series & All Editions</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            );
          }

          return (
            <BorderGlow
              key={event.id}
              edgeSensitivity={30}
              glowColor="330 85 50"
              backgroundColor="#241147"
              borderRadius={28}
              glowRadius={45}
              glowIntensity={1.1}
              colors={["#9C1256", "#DE3F11", "#FFFFFF"]}
              animated={true}
              className="shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <div className="p-6 sm:p-10 relative overflow-hidden group text-white">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
                  {/* PHOTO COLUMN */}
                  <div
                    className={`lg:col-span-6 space-y-4 ${
                      isImageLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {/* Main Large Photograph */}
                    <div
                      onClick={() => setSelectedEvent(event)}
                      className="cursor-pointer relative rounded-2xl overflow-hidden border border-white/20 shadow-xl group/img"
                    >
                      <img
                        src={event.photo}
                        alt={event.name}
                        className="w-full h-72 sm:h-96 object-cover group-hover/img:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#180A30] via-transparent to-transparent opacity-80 group-hover/img:opacity-60 transition-opacity" />

                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-bold px-3 py-1 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-white">
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
                          className="cursor-pointer relative rounded-xl overflow-hidden border border-white/10 h-20 hover:border-[#DE3F11] transition-all"
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

                  {/* TEXT / CONTENT COLUMN */}
                  <div
                    className={`lg:col-span-6 space-y-5 ${
                      isImageLeft ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#241147] border border-[#DE3F11]/40 flex items-center justify-center text-white shadow-md shrink-0">
                        {getLogoIcon(event.logoSvg, false)}
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#DE3F11]">
                          {event.seriesName}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                          {event.name}
                        </h2>
                      </div>
                    </div>

                    {/* Subtitle / Tagline */}
                    <p className="text-sm font-semibold text-white/90">
                      {event.tagline}
                    </p>

                    {/* Paragraph Description: What the series is about */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#DE3F11]">
                        About the Series
                      </h3>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* Series Highlights */}
                    <div className="space-y-2.5 pt-1">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#DE3F11]">
                        Key Focus Areas
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {event.seriesHighlights.slice(0, 4).map((hl, hlIdx) => (
                          <div
                            key={hlIdx}
                            className="flex items-start space-x-2 text-xs text-white/85"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#DE3F11] shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metadata Chips */}
                    <div className="flex flex-wrap gap-2 pt-2 text-xs text-white/80">
                      <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-[#241147] border border-white/10">
                        <Calendar className="w-3.5 h-3.5 text-[#DE3F11]" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-[#241147] border border-white/10">
                        <MapPin className="w-3.5 h-3.5 text-[#DE3F11]" />
                        <span className="truncate max-w-[160px]">{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-[#241147] border border-white/10">
                        <Users className="w-3.5 h-3.5 text-[#DE3F11]" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>

                    {/* Action CTA Button */}
                    <div className="pt-4">
                      <button
                        onClick={() => setSelectedEvent(event)}
                        className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>Explore Series & All Editions</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </BorderGlow>
          );
        })}

        {filteredEvents.length === 0 && (
          <div className="text-center py-16 text-white/70 glass-panel rounded-3xl border border-white/10">
            No series found in this category. Check back soon for new announcements!
          </div>
        )}
      </div>
    </div>
  );
}
