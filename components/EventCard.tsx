"use client";

import React from "react";
import { LEADSEvent } from "@/lib/events-data";
import { Calendar, MapPin, Users, Crown, Zap, Shield, Rocket, Sparkles, UserCheck, ArrowUpRight } from "lucide-react";

interface EventCardProps {
  event: LEADSEvent;
  onOpenModal: (event: LEADSEvent) => void;
}

export default function EventCard({ event, onOpenModal }: EventCardProps) {
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
      case "sparkles":
        return <Sparkles className="w-6 h-6 text-[#DE3F11]" />;
      default:
        return <UserCheck className="w-6 h-6 text-[#DE3F11]" />;
    }
  };

  return (
    <div className="group relative glass-panel rounded-3xl p-6 border border-white/15 hover:border-[#DE3F11]/60 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between h-full bg-[#2A1454]/90">
      <div>
        {/* Header Row */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#9C1256]/20 to-[#DE3F11]/20 border border-[#DE3F11]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {getLogoIcon(event.logoSvg)}
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full border border-[#DE3F11]/40 bg-gradient-to-r from-[#9C1256]/30 to-[#DE3F11]/30 text-white">
            {event.category}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-white group-hover:text-[#DE3F11] transition-colors line-clamp-2">
          {event.name}
        </h3>
        <p className="text-xs text-[#E2D9F3] font-medium mt-1 mb-3">
          {event.tagline}
        </p>

        {/* Quick Details */}
        <div className="space-y-2 text-xs text-[#E2D9F3] mb-4 pt-2 border-t border-white/10">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-[#DE3F11] shrink-0" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-[#DE3F11] shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-[#DE3F11] shrink-0" />
            <span>{event.attendees}</span>
          </div>
        </div>
      </div>

      {/* Action Trigger */}
      <button
        onClick={() => onOpenModal(event)}
        className="w-full mt-4 py-2.5 px-4 rounded-xl font-semibold text-xs bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white hover:opacity-95 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
      >
        <span>View Event Details</span>
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  );
}
