"use client";

import React, { useState } from "react";
import Link from "next/link";
import SoftAurora from "@/components/SoftAurora";
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

      {/* HERO SECTION WITH SOFTAURORA BACKGROUND */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-gradient-to-b from-transparent via-brand-violet/5 to-transparent">
        {/* SoftAurora WebGL Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-auto z-0 overflow-hidden opacity-90">
          <SoftAurora
            speed={0.6}
            scale={1.5}
            brightness={1.3}
            color1="#A5346D"
            color2="#F55439"
            noiseFrequency={2.5}
            noiseAmplitude={1}
            bandHeight={0.5}
            bandSpread={1}
            octaveDecay={0.1}
            layerOffset={0}
            colorSpeed={3}
            enableMouseInteraction
            mouseInfluence={0.25}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-panel border-brand-gold/40 text-brand-gold font-semibold text-xs mb-8 shadow-lg animate-float">
            <Sparkles className="w-4 h-4 text-brand-gold animate-spin" />
            <span>India's First Leadership & Non-Technical Skill Upliftment Centre</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-5xl mx-auto leading-[1.15]">
            Building India's <br className="hidden sm:block" />
            <span className="gold-gradient-text">Next Generation of Leaders</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            A national centre for leadership and non-technical skill upliftment — for founders, professionals, government leaders, students, and researchers who want to achieve something more.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/events"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark text-slate-950 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <span>Explore Our Events</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-base glass-panel hover:bg-brand-violet/10 text-slate-900 dark:text-slate-100 hover:border-brand-gold/50 transition-all duration-300 flex items-center justify-center"
            >
              Get in Touch
            </Link>
          </div>

          {/* MSRUAS Affiliation Note */}
          <p className="mt-12 text-xs text-slate-500 dark:text-slate-400 font-medium">
            Part of the Faculty of Management and Commerce ecosystem at M. S. Ramaiah University of Applied Sciences (RUAS), Bengaluru
          </p>
        </div>
      </section>

      {/* STATS STRIP / BY THE NUMBERS */}
      <section className="relative z-10 py-12 border-y border-brand-violet/15 glass-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold gold-gradient-text">30+</div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                Events Hosted in Year 1
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-violet dark:text-brand-gold">
                1st
              </div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                Inaugural Bharath Leadership Summit
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold gold-gradient-text">5,000+</div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                Leaders & Delegates Impacted
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-violet dark:text-brand-gold">
                100%
              </div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                Focus on Non-Technical Skill Upliftment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS LEADS SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-violet/10 text-brand-violet dark:text-brand-gold border border-brand-violet/20 text-xs font-semibold">
              <Compass className="w-3.5 h-3.5" />
              <span>Closing the Critical Skill Gap</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Why Non-Technical Skills Matter More Than Ever
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              LEADS Next Gen Centre exists to close a gap most institutions overlook: the non-technical skills — leadership, entrepreneurship, executive communication, and business acumen — that turn technical knowledge into real-world impact.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              In just one year, LEADS has grown into a thriving national ecosystem for anyone in India ready to lead teams, guide public policy, or build transformative ventures.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Leadership Capability</div>
                  <div className="text-xs text-slate-500">Executive decision making under uncertainty</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Business Acumen</div>
                  <div className="text-xs text-slate-500">Venture scaling & resource strategy</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Highlight Card */}
          <div className="relative">
            <div className="glass-panel rounded-3xl p-8 border border-brand-gold/30 shadow-2xl relative z-10 space-y-6">
              <div className="flex items-center justify-between border-b border-brand-violet/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                  Core Pillar Breakdown
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-gold/15 text-brand-gold">
                  National Impact
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-brand-violet/10 dark:bg-brand-violet-surface/60 border border-brand-violet/20">
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Bharath Leadership Summit (BLS)</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    India's flagship annual summit convening policy makers, CEOs, and academia.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-brand-violet/10 dark:bg-brand-violet-surface/60 border border-brand-violet/20">
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Catalyst Skill Workshops</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Hands-on masterclasses in negotiation, executive presence, and team dynamics.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-brand-violet/10 dark:bg-brand-violet-surface/60 border border-brand-violet/20">
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Research & Policy Insights</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Publishing verified national impact reports on leadership competency.
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background blur */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20 bg-brand-violet/5 dark:bg-brand-violet-dark/50 border-y border-brand-violet/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Built for Every Leader Across India
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
              Whether shaping national policy, scaling a startup, or preparing for your first executive role — LEADS provides the platform you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel p-6 rounded-3xl border border-brand-violet/15 hover:border-brand-gold/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Government & Policy</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Public sector leaders shaping national policy, institutional frameworks, and public administration excellence.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-brand-violet/15 hover:border-brand-gold/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/15 text-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Industry Leaders</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Corporate executives and managers seeking to sharpen non-technical strategy, communication, and governance.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-brand-violet/15 hover:border-brand-gold/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Startup Founders</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Entrepreneurs building high-growth ventures, managing teams under uncertainty, and raising venture capital.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-brand-violet/15 hover:border-brand-gold/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Students & Scholars</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Aspiring young leaders gaining essential business acumen, confidence, and real-world networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS PREVIEW */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">
              National Event Calendar
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Featured Summits & Masterclasses
            </h2>
          </div>
          <Link
            href="/events"
            className="mt-4 md:mt-0 text-sm font-bold text-brand-violet dark:text-brand-gold hover:underline inline-flex items-center space-x-1"
          >
            <span>Explore All Events</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} onOpenModal={(e) => setSelectedEvent(e)} />
          ))}
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-brand-violet via-brand-violet-surface to-brand-violet-dark p-8 sm:p-12 border border-brand-gold/40 shadow-2xl text-center relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Uplift Your Leadership Potential?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Partner with LEADS Next Gen Centre for institutional programs, summit registrations, or research collaborations.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-gold to-brand-gold-dark text-slate-950 shadow-lg hover:scale-105 transition-all"
              >
                Connect With Our Team
              </Link>
              <Link
                href="/about"
                className="px-8 py-3.5 rounded-xl font-semibold text-sm glass-panel text-white hover:bg-white/10 transition-all"
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
