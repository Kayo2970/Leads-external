"use client";

import React, { useState } from "react";
import EventCard from "@/components/EventCard";
import EventModal from "@/components/EventModal";
import { EVENTS_DATA, LEADSEvent } from "@/lib/events-data";
import { Calendar, Filter, Sparkles } from "lucide-react";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedEvent, setSelectedEvent] = useState<LEADSEvent | null>(null);

  const categories = ["All", "Summit", "Workshop", "Roundtable", "Conclave"];

  const filteredEvents =
    selectedCategory === "All"
      ? EVENTS_DATA
      : EVENTS_DATA.filter((e) => e.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />

      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-violet/10 text-brand-violet dark:text-brand-gold border border-brand-violet/20 text-xs font-semibold mb-4">
          <Calendar className="w-3.5 h-3.5" />
          <span>LEADS Event Calendar</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Where Leaders Come Together
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Explore the summits, workshops, and gatherings shaping India's non-technical skill ecosystem. Click any event for full details & branding.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="text-xs font-semibold text-slate-400 mr-2 flex items-center space-x-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-brand-violet text-white dark:bg-brand-gold dark:text-slate-950 shadow-md scale-105"
                  : "glass-panel text-slate-700 dark:text-slate-300 hover:border-brand-gold/40"
              }`}
            >
              {cat} {cat === "All" ? `(${EVENTS_DATA.length})` : ""}
            </button>
          ))}
        </div>
      </div>

      {/* Event Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} onOpenModal={(e) => setSelectedEvent(e)} />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-16 text-slate-500 glass-panel rounded-3xl">
            No events found in this category. Check back soon for new announcements!
          </div>
        )}
      </div>
    </div>
  );
}
