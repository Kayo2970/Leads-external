"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Shield, Handshake, Sliders } from "lucide-react";

export default function Footer() {
  const openCookiePreferences = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("leads_open_cookie_preferences"));
    }
  };

  return (
    <footer className="bg-[#241147] text-white border-t border-white/15 pt-16 pb-12 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#9C1256]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] 4xl:max-w-[2600px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 relative z-10">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <div className="bg-white/95 px-4 py-2 rounded-2xl border border-white/20 inline-block shadow-md group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/leads-header-logo.png"
                  alt="LEADS Next Gen Centre - Ramaiah University of Applied Sciences"
                  className="h-11 sm:h-12 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-[#E2D9F3] leading-relaxed max-w-md">
              India's first dedicated centre for leadership and non-technical skill upliftment. Developed to empower founders, government leaders, industry professionals, students, and researchers.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-white font-medium">
              <Shield className="w-4 h-4 text-[#DE3F11]" />
              <span>In collaboration with Faculty of Management and Commerce, RUAS</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider gold-gradient-text mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-[#DE3F11] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/80 hover:text-[#DE3F11] transition-colors">
                  Events & Summits
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-[#DE3F11] transition-colors">
                  About Us & Leadership
                </Link>
              </li>
              <li>
                <Link href="/reports" className="text-white/80 hover:text-[#DE3F11] transition-colors">
                  Impact Reports
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-[#DE3F11] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Portals & Initiatives */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider gold-gradient-text mb-4">
              Flagship Initiatives
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://www.bharatleadsummit.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-white/90 hover:text-[#DE3F11] transition-colors group"
                >
                  <img
                    src="/bls-logo.webp"
                    alt="BLS Logo"
                    className="w-4 h-4 object-contain rounded-full bg-white/20 p-0.5 group-hover:scale-110 transition-transform"
                  />
                  <span>Bharath Leadership Summit</span>
                </a>
              </li>
              <li>
                <Link
                  href="/portal"
                  className="inline-flex items-center text-white/90 hover:text-[#DE3F11] transition-colors"
                >
                  LEADS Member & ERP Portal
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/80 hover:text-[#DE3F11] transition-colors">
                  Catalyst Skill Series
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider gold-gradient-text mb-4">
              Centre Location
            </h3>
            <div className="space-y-3 text-sm text-[#E2D9F3]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#DE3F11] shrink-0 mt-1" />
                <span>M. S. Ramaiah University of Applied Sciences, Gnanagangothri Campus, Bengaluru, Karnataka 560054</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#DE3F11] shrink-0" />
                <span>contact@leadsnextgen.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Collaboration Strip */}
        <div className="py-6 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#9C1256] to-[#DE3F11] flex items-center justify-center text-white shrink-0 shadow-sm">
              <Handshake className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#DE3F11]">
                Institutional Partnership
              </div>
              <div className="text-sm font-bold text-white">
                In collaboration with FMC (Faculty of Management and Commerce, RUAS)
              </div>
            </div>
          </div>

          <div className="bg-white/95 px-4 py-2 rounded-2xl border border-white/20 shadow-md inline-flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <img
              src="/fmc-logo-white.png"
              alt="Faculty of Management and Commerce - M. S. Ramaiah University of Applied Sciences"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#E2D9F3]/70 space-y-4 md:space-y-0">
          <div>
            © {new Date().getFullYear()} LEADS Next Gen Centre. All rights reserved. Prepared by Kayomarz Pavri.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">
              Accessibility
            </Link>
            <button
              type="button"
              onClick={openCookiePreferences}
              className="hover:text-[#DE3F11] inline-flex items-center space-x-1 transition-colors"
            >
              <Sliders className="w-3 h-3" />
              <span>Cookie Settings</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
