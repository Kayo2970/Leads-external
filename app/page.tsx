"use client";

import React, { useState } from "react";
import Link from "next/link";
import SoftAurora from "@/components/SoftAurora";
import BorderGlow from "@/components/BorderGlow";
import LogoScrollExpand from "@/components/LogoScrollExpand";
import EventCard from "@/components/EventCard";
import EventModal from "@/components/EventModal";
import { EVENTS_DATA, LEADSEvent } from "@/lib/events-data";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  Building2,
  GraduationCap,
  Briefcase,
  CheckCircle,
  ChevronRight,
  Compass,
} from "lucide-react";

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState<LEADSEvent | null>(null);

  const featuredEvents = EVENTS_DATA.filter((e) => e.featured);

  return (
    <div className="relative">
      {/* Event Detail Modal */}
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />

      {/* SECTION 1 [PURPLE]: OPENING HERO WITH LOGO OUTLINE SCROLLEXPAND & SOFTAURORA */}
      <LogoScrollExpand
        logoSrc="/leads-white-logo.png"
        scrollDistance={0.8}
        holdDistance={0.15}
      >
        <section className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 3xl:pt-48 3xl:pb-36 overflow-hidden bg-[#361C6A]">
          {/* SoftAurora WebGL Background (Blue Wave) - Refined compact beam */}
          <div className="absolute inset-0 w-full h-full pointer-events-auto z-0 overflow-hidden opacity-85">
            <SoftAurora
              speed={0.55}
              scale={1.35}
              brightness={1.15}
              color1="#00cfff"
              color2="#3B82F6"
              noiseFrequency={2.4}
              noiseAmplitude={0.9}
              bandHeight={0.35}
              bandSpread={0.7}
              octaveDecay={0.12}
              layerOffset={0}
              colorSpeed={2.5}
              enableMouseInteraction
              mouseInfluence={0.2}
            />
          </div>

          <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 relative z-10 text-center">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2 3xl:space-x-3 px-4 py-2 2xl:px-6 2xl:py-3 3xl:px-8 3xl:py-4 rounded-full glass-panel border-[#DE3F11]/40 text-white font-semibold text-xs 2xl:text-base 3xl:text-xl mb-8 3xl:mb-12 shadow-lg animate-float">
              <Sparkles className="w-4 h-4 2xl:w-5 2xl:h-5 3xl:w-6 3xl:h-6 text-[#DE3F11] animate-spin" />
              <span>India's First Leadership & Non-Technical Skill Upliftment Centre</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl 4xl:text-[7.5rem] font-extrabold tracking-tight text-white max-w-5xl 2xl:max-w-7xl 3xl:max-w-[1800px] mx-auto leading-[1.12]">
              Building India's <br className="hidden sm:block" />
              <span className="gold-gradient-text">Next Generation of Leaders</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 3xl:mt-10 text-base sm:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl text-[#E2D9F3] max-w-3xl 2xl:max-w-5xl 3xl:max-w-6xl 4xl:max-w-7xl mx-auto leading-relaxed font-normal">
              A national centre for leadership and non-technical skill upliftment — for founders, professionals, government leaders, students, and researchers who want to achieve something more.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 3xl:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 3xl:gap-8">
              <Link
                href="/events"
                className="w-full sm:w-auto px-8 py-4 2xl:px-12 2xl:py-5 3xl:px-16 3xl:py-6 rounded-2xl 3xl:rounded-3xl font-bold text-base 2xl:text-xl 3xl:text-2xl bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 3xl:space-x-4 group"
              >
                <span>Explore Our Events</span>
                <ArrowRight className="w-5 h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 2xl:px-12 2xl:py-5 3xl:px-16 3xl:py-6 rounded-2xl 3xl:rounded-3xl font-semibold text-base 2xl:text-xl 3xl:text-2xl glass-panel hover:bg-white/10 text-white border border-white/20 hover:border-[#DE3F11]/50 transition-all duration-300 flex items-center justify-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </LogoScrollExpand>

      {/* SECTION 2: STATS STRIP / BY THE NUMBERS */}
      <section className="relative z-10 py-16 3xl:py-28 bg-[#1E0C3D] text-white border-y border-white/10 shadow-lg">
        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12">
          <div className="text-center max-w-2xl 3xl:max-w-4xl mx-auto mb-10 3xl:mb-16">
            <div className="text-xs 3xl:text-base font-bold uppercase tracking-wider text-[#DE3F11] mb-1">
              National Footprint & Impact
            </div>
            <h2 className="text-2xl sm:text-3xl 2xl:text-4xl 3xl:text-5xl font-extrabold text-white">
              LEADS by the Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 3xl:gap-10">
            <div className="liquid-glass-card rounded-3xl p-6 2xl:p-8 3xl:p-12 text-center group">
              <div className="text-3xl sm:text-4xl 2xl:text-5xl 3xl:text-6xl font-black gold-gradient-text group-hover:scale-105 transition-transform duration-300">
                30+
              </div>
              <div className="text-xs sm:text-sm 2xl:text-base 3xl:text-xl text-white font-bold mt-2">
                Events Hosted in Year 1
              </div>
              <div className="text-[11px] 2xl:text-xs 3xl:text-sm text-[#E2D9F3]/70 mt-1">Masterclasses & Summits</div>
            </div>

            <div className="liquid-glass-card rounded-3xl p-6 2xl:p-8 3xl:p-12 text-center group">
              <div className="text-3xl sm:text-4xl 2xl:text-5xl 3xl:text-6xl font-black gold-gradient-text group-hover:scale-105 transition-transform duration-300">
                1st
              </div>
              <div className="text-xs sm:text-sm 2xl:text-base 3xl:text-xl text-white font-bold mt-2">
                Inaugural Bharath Leadership Summit
              </div>
              <div className="text-[11px] 2xl:text-xs 3xl:text-sm text-[#E2D9F3]/70 mt-1">Signature Annual Flagship</div>
            </div>

            <div className="liquid-glass-card rounded-3xl p-6 2xl:p-8 3xl:p-12 text-center group">
              <div className="text-3xl sm:text-4xl 2xl:text-5xl 3xl:text-6xl font-black gold-gradient-text group-hover:scale-105 transition-transform duration-300">
                5,000+
              </div>
              <div className="text-xs sm:text-sm 2xl:text-base 3xl:text-xl text-white font-bold mt-2">
                Leaders & Delegates Impacted
              </div>
              <div className="text-[11px] 2xl:text-xs 3xl:text-sm text-[#E2D9F3]/70 mt-1">Nationwide Participation</div>
            </div>

            <div className="liquid-glass-card rounded-3xl p-6 2xl:p-8 3xl:p-12 text-center group">
              <div className="text-3xl sm:text-4xl 2xl:text-5xl 3xl:text-6xl font-black gold-gradient-text group-hover:scale-105 transition-transform duration-300">
                100%
              </div>
              <div className="text-xs sm:text-sm 2xl:text-base 3xl:text-xl text-white font-bold mt-2">
                Non-Technical Skill Focus
              </div>
              <div className="text-[11px] 2xl:text-xs 3xl:text-sm text-[#E2D9F3]/70 mt-1">Leadership & Acumen</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY NON-TECHNICAL SKILLS MATTER */}
      <section className="py-24 3xl:py-36 bg-[#241147] text-white relative overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 3xl:gap-20 items-center">
            <div className="space-y-6 3xl:space-y-8">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 3xl:px-5 3xl:py-2 rounded-full liquid-glass text-white border border-[#DE3F11]/40 text-xs 3xl:text-base font-semibold shadow-md">
                <Compass className="w-3.5 h-3.5 3xl:w-5 3xl:h-5 text-[#DE3F11]" />
                <span>Closing the Critical Skill Gap</span>
              </div>
              <h2 className="text-3xl sm:text-4xl 2xl:text-5xl 3xl:text-6xl font-extrabold text-white leading-tight">
                Why Non-Technical Skills Matter More Than Ever
              </h2>
              <p className="text-sm sm:text-base 2xl:text-xl 3xl:text-2xl text-[#E2D9F3] leading-relaxed">
                LEADS Next Gen Centre exists to close a gap most institutions overlook: the non-technical skills — leadership, entrepreneurship, executive communication, and business acumen — that turn technical knowledge into real-world impact.
              </p>
              <p className="text-sm sm:text-base 2xl:text-xl 3xl:text-2xl text-[#E2D9F3] leading-relaxed">
                In just one year, LEADS has grown into a thriving national ecosystem for anyone in India ready to lead teams, guide public policy, or build transformative ventures.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 3xl:gap-6">
                <div className="liquid-glass-card rounded-2xl p-4 3xl:p-6 flex items-start space-x-3 group">
                  <CheckCircle className="w-5 h-5 3xl:w-6 3xl:h-6 text-[#DE3F11] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-sm 2xl:text-base 3xl:text-xl font-bold text-white">Leadership Capability</div>
                    <div className="text-xs 2xl:text-sm 3xl:text-base text-[#E2D9F3]/80">Executive decision making under uncertainty</div>
                  </div>
                </div>
                <div className="liquid-glass-card rounded-2xl p-4 3xl:p-6 flex items-start space-x-3 group">
                  <CheckCircle className="w-5 h-5 3xl:w-6 3xl:h-6 text-[#DE3F11] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-sm 2xl:text-base 3xl:text-xl font-bold text-white">Business Acumen</div>
                    <div className="text-xs 2xl:text-sm 3xl:text-base text-[#E2D9F3]/80">Venture scaling & resource strategy</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Highlight Card with Liquid Glass */}
            <div className="relative">
              <div className="liquid-glass rounded-3xl p-8 3xl:p-12 space-y-6 3xl:space-y-8 border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs 3xl:text-base font-bold uppercase tracking-wider gold-gradient-text">
                    Core Pillar Breakdown
                  </span>
                  <span className="text-xs 3xl:text-base font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-[#9C1256]/40 to-[#DE3F11]/40 text-white border border-[#DE3F11]/40 shadow-sm">
                    National Impact
                  </span>
                </div>

                <div className="space-y-4 3xl:space-y-6">
                  <div className="liquid-glass-card rounded-2xl p-4 3xl:p-6 group">
                    <div className="text-sm 2xl:text-base 3xl:text-xl font-bold text-white group-hover:text-[#DE3F11] transition-colors">
                      Bharath Leadership Summit (BLS)
                    </div>
                    <div className="text-xs 2xl:text-sm 3xl:text-base text-[#E2D9F3]/80 mt-1">
                      India's flagship annual summit convening policy makers, CEOs, and academia.
                    </div>
                  </div>

                  <div className="liquid-glass-card rounded-2xl p-4 3xl:p-6 group">
                    <div className="text-sm 2xl:text-base 3xl:text-xl font-bold text-white group-hover:text-[#DE3F11] transition-colors">
                      Catalyst Skill Workshops
                    </div>
                    <div className="text-xs 2xl:text-sm 3xl:text-base text-[#E2D9F3]/80 mt-1">
                      Hands-on masterclasses in negotiation, executive presence, and team dynamics.
                    </div>
                  </div>

                  <div className="liquid-glass-card rounded-2xl p-4 3xl:p-6 group">
                    <div className="text-sm 2xl:text-base 3xl:text-xl font-bold text-white group-hover:text-[#DE3F11] transition-colors">
                      Research & Policy Insights
                    </div>
                    <div className="text-xs 2xl:text-sm 3xl:text-base text-[#E2D9F3]/80 mt-1">
                      Publishing verified national impact reports on leadership competency.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHO IT'S FOR */}
      <section className="py-24 3xl:py-36 bg-[#1E0C3D] text-white border-y border-white/10">
        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12">
          <div className="text-center max-w-3xl 3xl:max-w-5xl mx-auto mb-16 3xl:mb-24">
            <div className="text-xs 3xl:text-base font-bold uppercase tracking-wider text-[#DE3F11] mb-2">
              Cross-Sector Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl 2xl:text-5xl 3xl:text-6xl font-extrabold text-white">
              Built for Every Leader Across India
            </h2>
            <p className="text-sm sm:text-base 2xl:text-xl 3xl:text-2xl text-[#E2D9F3] mt-3 leading-relaxed">
              Whether shaping national policy, scaling a startup, or preparing for your first executive role — LEADS provides the platform you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 3xl:gap-8">
            <div className="liquid-glass-card rounded-3xl p-7 3xl:p-10 group cursor-pointer">
              <div className="w-12 h-12 3xl:w-16 3xl:h-16 rounded-2xl bg-gradient-to-r from-[#9C1256]/30 to-[#DE3F11]/30 border border-[#DE3F11]/40 text-[#DE3F11] flex items-center justify-center mb-5 3xl:mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-md">
                <Building2 className="w-6 h-6 3xl:w-8 3xl:h-8" />
              </div>
              <h3 className="font-bold text-lg 2xl:text-xl 3xl:text-2xl text-white mb-2 group-hover:text-[#DE3F11] transition-colors">
                Government & Policy
              </h3>
              <p className="text-xs 2xl:text-sm 3xl:text-base text-[#E2D9F3]/80 leading-relaxed">
                Public sector leaders shaping national policy, institutional frameworks, and public administration excellence.
              </p>
            </div>

            <div className="liquid-glass-card rounded-3xl p-7 3xl:p-10 group cursor-pointer">
              <div className="w-12 h-12 3xl:w-16 3xl:h-16 rounded-2xl bg-gradient-to-r from-[#9C1256]/30 to-[#DE3F11]/30 border border-[#DE3F11]/40 text-[#DE3F11] flex items-center justify-center mb-5 3xl:mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-md">
                <Briefcase className="w-6 h-6 3xl:w-8 3xl:h-8" />
              </div>
              <h3 className="font-bold text-lg 2xl:text-xl 3xl:text-2xl text-white mb-2 group-hover:text-[#DE3F11] transition-colors">
                Industry Leaders
              </h3>
              <p className="text-xs 2xl:text-sm 3xl:text-base text-[#E2D9F3]/80 leading-relaxed">
                Corporate executives and managers seeking to sharpen non-technical strategy, communication, and governance.
              </p>
            </div>

            <div className="liquid-glass-card rounded-3xl p-7 3xl:p-10 group cursor-pointer">
              <div className="w-12 h-12 3xl:w-16 3xl:h-16 rounded-2xl bg-gradient-to-r from-[#9C1256]/30 to-[#DE3F11]/30 border border-[#DE3F11]/40 text-[#DE3F11] flex items-center justify-center mb-5 3xl:mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-md">
                <TrendingUp className="w-6 h-6 3xl:w-8 3xl:h-8" />
              </div>
              <h3 className="font-bold text-lg 2xl:text-xl 3xl:text-2xl text-white mb-2 group-hover:text-[#DE3F11] transition-colors">
                Startup Founders
              </h3>
              <p className="text-xs 2xl:text-sm 3xl:text-base text-[#E2D9F3]/80 leading-relaxed">
                Entrepreneurs building high-growth ventures, managing teams under uncertainty, and raising venture capital.
              </p>
            </div>

            <div className="liquid-glass-card rounded-3xl p-7 3xl:p-10 group cursor-pointer">
              <div className="w-12 h-12 3xl:w-16 3xl:h-16 rounded-2xl bg-gradient-to-r from-[#9C1256]/30 to-[#DE3F11]/30 border border-[#DE3F11]/40 text-[#DE3F11] flex items-center justify-center mb-5 3xl:mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-md">
                <GraduationCap className="w-6 h-6 3xl:w-8 3xl:h-8" />
              </div>
              <h3 className="font-bold text-lg 2xl:text-xl 3xl:text-2xl text-white mb-2 group-hover:text-[#DE3F11] transition-colors">
                Students & Scholars
              </h3>
              <p className="text-xs 2xl:text-sm 3xl:text-base text-[#E2D9F3]/80 leading-relaxed">
                Aspiring young leaders gaining essential business acumen, confidence, and real-world networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED EVENTS PREVIEW */}
      <section className="py-24 3xl:py-36 bg-[#241147] text-white">
        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 3xl:mb-16">
            <div>
              <div className="text-xs 3xl:text-base font-bold uppercase tracking-wider gold-gradient-text mb-2">
                National Event Calendar
              </div>
              <h2 className="text-3xl sm:text-4xl 2xl:text-5xl 3xl:text-6xl font-extrabold text-white">
                Featured Summits & Masterclasses
              </h2>
            </div>
            <Link
              href="/events"
              className="mt-4 md:mt-0 text-sm 2xl:text-base 3xl:text-xl font-bold text-white hover:text-[#DE3F11] hover:underline inline-flex items-center space-x-1"
            >
              <span>Explore All Events</span>
              <ChevronRight className="w-4 h-4 3xl:w-6 3xl:h-6 text-[#DE3F11]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 3xl:gap-12">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} onOpenModal={(e) => setSelectedEvent(e)} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CALL TO ACTION BANNER */}
      <section className="py-24 3xl:py-36 px-4 sm:px-6 lg:px-8 3xl:px-12 bg-[#1E0C3D]">
        <div className="max-w-5xl 2xl:max-w-6xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] mx-auto rounded-3xl 3xl:rounded-[40px] liquid-glass p-8 sm:p-14 3xl:p-24 border border-white/20 shadow-2xl text-center relative overflow-hidden text-white group">
          {/* Subtle iridescent glow accent in background */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#9C1256]/30 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#DE3F11]/30 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

          <div className="relative z-10 space-y-6 3xl:space-y-10">
            <h2 className="text-3xl sm:text-4xl 2xl:text-5xl 3xl:text-6xl font-extrabold text-white">
              Ready to Uplift Your Leadership Potential?
            </h2>
            <p className="text-sm sm:text-base 2xl:text-xl 3xl:text-2xl text-[#E2D9F3] max-w-2xl 3xl:max-w-4xl mx-auto">
              Partner with LEADS Next Gen Centre for institutional programs, summit registrations, or research collaborations.
            </p>
            <div className="pt-4 3xl:pt-8 flex flex-col sm:flex-row justify-center gap-4 3xl:gap-8">
              <Link
                href="/contact"
                className="px-8 py-3.5 2xl:px-12 2xl:py-5 3xl:px-16 3xl:py-6 rounded-2xl 3xl:rounded-3xl font-bold text-sm 2xl:text-lg 3xl:text-xl bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Connect With Our Team
              </Link>
              <Link
                href="/about"
                className="liquid-glass px-8 py-3.5 2xl:px-12 2xl:py-5 3xl:px-16 3xl:py-6 rounded-2xl 3xl:rounded-3xl font-semibold text-sm 2xl:text-lg 3xl:text-xl text-white hover:border-[#DE3F11]/60 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
              >
                Learn About Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
