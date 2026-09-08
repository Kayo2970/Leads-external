"use client";

import React, { useState } from "react";
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
  Layers,
  Sparkles,
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

  const getLogoIcon = (name: string) => {
    switch (name) {
      case "crown":
        return <Crown className="w-6 h-6 text-[#DE3F11]" />;
      case "zap":
        return <Zap className="w-6 h-6 text-[#DE3F11]" />;
      case "shield":
        return <Shield className="w-6 h-6 text-[#DE3F11]" />;
      case "rocket":
        return <Rocket className="w-6 h-6 text-[#DE3F11]" />;
      default:
        return <UserCheck className="w-6 h-6 text-[#DE3F11]" />;
    }
  };

  return (
    <div className="pt-28 pb-24 min-h-screen">
      {/* Full-Screen Interactive Series Modal */}
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />

      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/20 text-xs font-semibold mb-4 shadow-sm">
          <Calendar className="w-3.5 h-3.5 text-[#DE3F11]" />
          <span>LEADS National Initiative Calendar & Archives</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Where Leaders Come Together
        </h1>
        <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
          Explore our signature leadership summits, intensive workshops, and executive roundtables. Click any series to open the full-screen interactive archive with photographs and edition breakdowns.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="text-xs font-semibold text-white/60 mr-2 flex items-center space-x-1">
            <Filter className="w-3.5 h-3.5 text-[#DE3F11]" />
            <span>Filter Series:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredEvents.map((event, index) => {
          const isImageLeft = index % 2 === 0;

          return (
            <div
              key={event.id}
              className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#9C1256]/30 shadow-2xl hover:border-[#DE3F11]/50 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Soft background glow */}
              <div
                className={`absolute top-0 w-80 h-80 bg-[#DE3F11]/10 blur-3xl pointer-events-none ${
                  isImageLeft ? "right-0" : "left-0"
                }`}
              />

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
                      {getLogoIcon(event.logoSvg)}
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
