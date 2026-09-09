"use client";

import React from "react";
import BorderGlow from "@/components/BorderGlow";
import { LEADSEvent } from "@/lib/events-data";
import { Calendar, MapPin, Users, Crown, Zap, Shield, Rocket, Sparkles, UserCheck, Star, ArrowUpRight } from "lucide-react";

interface EventCardProps {
  event: LEADSEvent;
  onOpenModal: (event: LEADSEvent) => void;
  lightMode?: boolean;
}

export default function EventCard({ event, onOpenModal, lightMode = false }: EventCardProps) {
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
              src={event.photo}
              alt={event.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
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
            className={`text-lg font-extrabold transition-colors line-clamp-2 ${
              lightMode ? "text-[#1E0C3D] group-hover:text-[#DE3F11]" : "text-white group-hover:text-[#DE3F11]"
            }`}
          >
            {event.name}
          </h3>
          <p
            className={`text-xs font-semibold mt-1 mb-3 line-clamp-2 ${
              lightMode ? "text-[#DE3F11]" : "text-[#E2D9F3]"
            }`}
          >
            {event.tagline}
          </p>

          {/* Quick Details */}
          <div
            className={`space-y-1.5 text-xs mb-4 pt-2 border-t ${
              lightMode ? "text-slate-600 border-purple-100" : "text-[#E2D9F3] border-white/10"
            }`}
          >
            <div className="flex items-center space-x-2">
              <Calendar className="w-3.5 h-3.5 text-[#DE3F11] shrink-0" />
              <span className="truncate">{event.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#DE3F11] shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-3.5 h-3.5 text-[#DE3F11] shrink-0" />
              <span>{event.attendees}</span>
            </div>
          </div>
        </div>

        {/* Action Trigger */}
        <button
          onClick={() => onOpenModal(event)}
          className="w-full mt-2 py-2.5 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white hover:opacity-95 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
        >
          <span>Explore Series & Editions</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </BorderGlow>
  );
}
