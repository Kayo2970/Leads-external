"use client";

import React, { useState } from "react";
import BorderGlow from "@/components/BorderGlow";
import { LEADSEvent } from "@/lib/events-data";
import PlaceholderBadge from "@/components/PlaceholderBadge";
import { generateNumberedPlaceholderSvg } from "@/lib/placeholders";
import { Calendar, MapPin, Users, Crown, Zap, Shield, Rocket, Sparkles, UserCheck, Star, ArrowUpRight, Compass, GraduationCap } from "lucide-react";

interface EventCardProps {
  event: LEADSEvent;
  onOpenModal: (event: LEADSEvent) => void;
  lightMode?: boolean;
}

export default function EventCard({ event, onOpenModal, lightMode = false }: EventCardProps) {
  const placeholderId = event.placeholderId || 44;
  const placeholderSvg = generateNumberedPlaceholderSvg({
    id: placeholderId,
    title: event.name,
    subtitle: event.seriesName,
    category: event.category,
  });

  const [imgSrc, setImgSrc] = useState<string>(event.photo || placeholderSvg);

  const getLogoIcon = (name: string) => {
    switch (name) {
      case "crown":
        return <Crown className="w-5 h-5 text-[#DE3F11]" />;
      case "zap":
        return <Zap className="w-5 h-5 text-[#DE3F11]" />;
      case "shield":
        return <Shield className="w-5 h-5 text-[#DE3F11]" />;
      case "rocket":
        return <Rocket className="w-5 h-5 text-[#DE3F11]" />;
      case "sparkles":
        return <Sparkles className="w-5 h-5 text-[#DE3F11]" />;
      case "star":
        return <Star className="w-5 h-5 text-[#DE3F11]" />;
      case "compass":
        return <Compass className="w-5 h-5 text-[#DE3F11]" />;
      case "users":
        return <Users className="w-5 h-5 text-[#DE3F11]" />;
      case "graduation-cap":
        return <GraduationCap className="w-5 h-5 text-[#DE3F11]" />;
      default:
        return <UserCheck className="w-5 h-5 text-[#DE3F11]" />;
    }
  };

  return (
    <BorderGlow
      edgeSensitivity={35}
      glowColor="330 85 50"
      backgroundColor={lightMode ? "#FFFFFF" : "#2A1454"}
      borderRadius={24}
      glowRadius={40}
      glowIntensity={1.1}
      colors={["#9C1256", "#DE3F11", "#361C6A"]}
      animated={true}
      className="h-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      <div
        className={`group relative p-5 flex flex-col justify-between h-full overflow-hidden rounded-3xl ${
          lightMode ? "bg-white text-[#1E0C3D] border border-purple-200" : "text-white"
        }`}
      >
        <div>
          {/* Card Photo Header */}
          <div className="relative rounded-2xl overflow-hidden mb-4 border border-purple-200/60 h-44">
            <img
              src={imgSrc}
              onError={() => setImgSrc(placeholderSvg)}
              alt={event.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <PlaceholderBadge id={placeholderId} position="top-left" />

            <div
              className={`absolute inset-0 ${
                lightMode
                  ? "bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70"
                  : "bg-gradient-to-t from-[#2A1454] via-transparent to-transparent opacity-80"
              }`}
            />
            <div className="absolute top-3 right-3">
              <span
                className={`text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-sm ${
                  lightMode
                    ? "bg-white/90 text-[#1E0C3D] border border-purple-200"
                    : "bg-black/60 text-white border border-[#DE3F11]/40"
                }`}
              >
                {event.category}
              </span>
            </div>
            <div className="absolute bottom-3 left-3 flex items-center space-x-2">
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-md ${
                  lightMode
                    ? "bg-purple-50 border border-purple-200"
                    : "bg-[#361C6A] border border-[#DE3F11]/40 text-white"
                }`}
              >
                {getLogoIcon(event.logoSvg)}
              </div>
              <span className="text-xs font-bold text-white shadow-sm drop-shadow-md">
                {event.seriesName}
              </span>
            </div>
          </div>

          {/* Title & Tagline */}
          <h3
            className={`text-xl font-black mb-1.5 leading-snug group-hover:text-[#DE3F11] transition-colors ${
              lightMode ? "text-[#1E0C3D]" : "text-white"
            }`}
          >
            {event.name}
          </h3>

          <p
            className={`text-xs leading-relaxed mb-4 ${
              lightMode ? "text-slate-600" : "text-white/70"
            }`}
          >
            {event.tagline}
          </p>

          {/* Event Quick Snapshot */}
          <div className="space-y-2 mb-5">
            <div className="flex items-center space-x-2 text-xs">
              <Calendar className="w-3.5 h-3.5 text-[#DE3F11] shrink-0" />
              <span className={lightMode ? "text-slate-700 font-medium" : "text-white/80 font-medium"}>
                {event.date}
              </span>
            </div>

            <div className="flex items-center space-x-2 text-xs truncate">
              <MapPin className="w-3.5 h-3.5 text-[#DE3F11] shrink-0" />
              <span className={`truncate ${lightMode ? "text-slate-600" : "text-white/70"}`}>
                {event.location}
              </span>
            </div>

            <div className="flex items-center space-x-2 text-xs">
              <Users className="w-3.5 h-3.5 text-[#DE3F11] shrink-0" />
              <span className={`font-semibold ${lightMode ? "text-[#9C1256]" : "text-white/90"}`}>
                {event.attendees}
              </span>
            </div>
          </div>
        </div>

        {/* Footer Action Bar */}
        <div className={`pt-3 border-t flex items-center justify-between ${lightMode ? "border-purple-100" : "border-white/10"}`}>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#DE3F11]">
            {event.editions ? `${event.editions.length} Editions` : "Flagship Event"}
          </span>

          <button
            onClick={() => onOpenModal(event)}
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>Explore Event</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </BorderGlow>
  );
}
