"use client";

import React, { useEffect } from "react";
import { LEADSEvent } from "@/lib/events-data";
import { X, Calendar, MapPin, Users, CheckCircle2, ExternalLink, Crown, Zap, Shield, Rocket, Sparkles, UserCheck } from "lucide-react";

interface EventModalProps {
  event: LEADSEvent | null;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (event) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [event, onClose]);

  if (!event) return null;

  const getLogoIcon = (name: string) => {
    switch (name) {
      case "crown":
        return <Crown className="w-8 h-8 text-[#DE3F11]" />;
      case "zap":
        return <Zap className="w-8 h-8 text-[#DE3F11]" />;
      case "shield":
        return <Shield className="w-8 h-8 text-[#DE3F11]" />;
      case "rocket":
        return <Rocket className="w-8 h-8 text-[#DE3F11]" />;
      case "sparkles":
        return <Sparkles className="w-8 h-8 text-[#DE3F11]" />;
      default:
        return <UserCheck className="w-8 h-8 text-[#DE3F11]" />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#9C1256]/40 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full glass-panel hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header & Branding */}
        <div className="flex items-start space-x-4 pb-6 border-b border-white/10">
          <div className="w-16 h-16 rounded-2xl bg-[#241147] border border-[#9C1256]/40 flex items-center justify-center shrink-0">
            {getLogoIcon(event.logoSvg)}
          </div>
          <div>
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full border inline-block mb-2 bg-[#9C1256]/20 border-[#DE3F11]/40 text-[#DE3F11]"
            >
              {event.category}
            </span>
            <h2 id="event-modal-title" className="text-2xl font-bold text-white leading-tight">
              {event.name}
            </h2>
            <p className="text-sm text-white/80 font-medium mt-1">
              {event.tagline}
            </p>
          </div>
        </div>

        {/* Event Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 p-4 rounded-2xl bg-[#241147]/90 border border-[#9C1256]/30">
          <div className="flex items-center space-x-3 text-xs">
            <Calendar className="w-5 h-5 text-[#DE3F11] shrink-0" />
            <div>
              <div className="text-white/60 font-medium">Date</div>
              <div className="font-semibold text-white">{event.date}</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-xs">
            <MapPin className="w-5 h-5 text-[#DE3F11] shrink-0" />
            <div>
              <div className="text-white/60 font-medium">Location</div>
              <div className="font-semibold text-white">{event.location}</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-xs">
            <Users className="w-5 h-5 text-[#DE3F11] shrink-0" />
            <div>
              <div className="text-white/60 font-medium">Scale</div>
              <div className="font-semibold text-white">{event.attendees}</div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#DE3F11] mb-2">
              About the Initiative
            </h3>
            <p className="text-sm text-white/85 leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Key Outcomes */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#DE3F11] mb-2">
              Key Outcomes & Highlights
            </h3>
            <ul className="space-y-2">
              {event.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#DE3F11] shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Speakers */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#DE3F11] mb-2">
              Distinguished Mentors & Speakers
            </h3>
            <div className="flex flex-wrap gap-2">
              {event.speakers.map((speaker, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-lg bg-[#241147] text-white border border-[#9C1256]/30"
                >
                  {speaker}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/70 text-center sm:text-left">
            Need custom institutional invitations? Contact LEADS team.
          </div>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl font-semibold text-xs glass-panel hover:bg-white/10 text-white border border-white/20"
            >
              Close
            </button>
            {event.externalLink && (
              <a
                href={event.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-md hover:opacity-95 flex items-center justify-center space-x-1.5"
              >
                <span>Register / Learn More</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
