import React from "react";
import BoardMemberCard from "@/components/BoardMemberCard";
import { BOARD_MEMBERS_DATA } from "@/lib/board-data";
import { Shield, Target, BookOpen, Users, Compass, Award, Building2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 min-h-screen">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-violet/10 text-brand-violet dark:text-brand-gold border border-brand-violet/20 text-xs font-semibold mb-4">
          <Shield className="w-3.5 h-3.5" />
          <span>Our Vision & Leadership</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto">
          India's First Leadership & Non-Technical Skill Upliftment Centre
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          A young centre with a bold national mission — and the empirical track record to back it up.
        </p>
      </div>

      {/* Official Centre Identity Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 flex justify-center">
        <div className="bg-white/95 dark:bg-white/90 p-4 sm:p-6 rounded-3xl border border-brand-gold/30 shadow-xl inline-block max-w-2xl text-center hover:scale-[1.02] transition-transform duration-300">
          <img
            src="/leads-header-logo.png"
            alt="LEADS Next Gen Centre - Ramaiah University of Applied Sciences"
            className="h-14 sm:h-20 w-auto mx-auto object-contain"
          />
        </div>
      </div>

      {/* Story & Mission Split */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Story Card */}
          <div className="glass-panel p-8 rounded-3xl border border-brand-violet/20 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-violet/10 text-brand-violet dark:text-brand-gold flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Story</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Founded in Bengaluru, LEADS Next Gen Centre set out to solve a nationwide challenge: while India produces world-class technical talent, non-technical capabilities — strategic decision making, executive communication, negotiation, and business acumen — often lag behind.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              In just twelve months, LEADS has rapidly expanded into a national hub, convening thousands of delegates across public policy, tech enterprises, startup founders, and researchers.
            </p>
          </div>

          {/* Mission Card */}
          <div className="glass-panel p-8 rounded-3xl border border-brand-gold/30 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/15 text-brand-gold flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To build a sustainable ecosystem where non-technical leadership and entrepreneurship skills elevate individuals, enterprises, and communities — directly advancing national capability and economic resilience.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs font-semibold text-brand-gold">
              <Award className="w-4 h-4" />
              <span>Dedicated to Nation Building Through Skill Excellence</span>
            </div>
          </div>
        </div>
      </div>

      {/* LEADERSHIP & BOARD OF MEMBERS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">
            Governance & Mentorship
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Leadership & Board of Members
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
            Meet the distinguished visionaries, academicians, and advisors guiding LEADS' strategic direction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BOARD_MEMBERS_DATA.map((member) => (
            <BoardMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* INSTITUTIONAL AFFILIATION SHOWCASE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-brand-violet/20 text-center relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-brand-violet/10 dark:bg-brand-violet/30 text-brand-gold flex items-center justify-center mx-auto mb-6">
            <Building2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
            Academic & Institutional Affiliation
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            LEADS Next Gen Centre proudly operates within the Faculty of Management and Commerce ecosystem at M. S. Ramaiah University of Applied Sciences (RUAS), Bengaluru, combining academic rigor with industry relevance.
          </p>
        </div>
      </div>
    </div>
  );
}
