import React from "react";
import Link from "next/link";
import { Sparkles, ExternalLink, Mail, MapPin, Shield, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-violet-dark text-slate-300 border-t border-brand-violet/30 pt-16 pb-12 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-violet/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-brand-violet/20">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <div className="bg-white/95 px-4 py-2 rounded-2xl border border-brand-gold/40 inline-block shadow-md group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/leads-header-logo.png"
                  alt="LEADS Next Gen Centre - Ramaiah University of Applied Sciences"
                  className="h-11 sm:h-12 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              India's first dedicated centre for leadership and non-technical skill upliftment. Developed to empower founders, government leaders, industry professionals, students, and researchers.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-brand-gold font-medium">
              <Shield className="w-4 h-4" />
              <span>Faculty of Management & Commerce, MSRUAS</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-brand-gold transition-colors">
                  Events & Summits
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-gold transition-colors">
                  About Us & Leadership
                </Link>
              </li>
              <li>
                <Link href="/reports" className="hover:text-brand-gold transition-colors">
                  Impact Reports
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Portals & Initiatives */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-4">
              Flagship Initiatives
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://github.com/Kayo2970/Leads-external.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-amber-300 hover:text-amber-200 transition-colors"
                >
                  <span>Bharath Leadership Summit</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Kayo2970/Leads-external.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-300 hover:text-indigo-200 transition-colors"
                >
                  <span>LEADS Member Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                </a>
              </li>
              <li>
                <Link href="/events#catalyst" className="hover:text-brand-gold transition-colors">
                  Catalyst Skill Series
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-4">
              Centre Location
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-1" />
                <span>M. S. Ramaiah University of Applied Sciences, Gnanagangothri Campus, Bengaluru, Karnataka 560054</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <span>contact@leadsnextgen.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0">
          <div>
            © {new Date().getFullYear()} LEADS Next Gen Centre. All rights reserved. Prepared by Kayomarz Pavri.
          </div>
          <div className="flex space-x-6">
            <span className="hover:text-slate-400">Privacy Policy</span>
            <span className="hover:text-slate-400">Terms of Engagement</span>
            <span className="hover:text-slate-400">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
