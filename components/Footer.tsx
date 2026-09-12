"use client";

import React from "react";
import Link from "next/link";
import PlaceholderBadge from "@/components/PlaceholderBadge";
import { Mail, MapPin, Shield, Handshake, Sliders, Phone } from "lucide-react";

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
                  <span>BHARAT LEAD SUMMIT 2026</span>
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
                  Catalyst Leadership Talk Series
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
                <a href="mailto:leads.ngc@msruas.ac.in" className="hover:text-white transition-colors">
                  leads.ngc@msruas.ac.in
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#DE3F11] shrink-0" />
                <a href="https://wa.me/918910133283" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +91 891 013 3283
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Bar */}
        <div className="py-6 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-[#E2D9F3]/70 uppercase tracking-wider font-semibold">Follow &amp; Connect</p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full md:w-auto">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/leads_next_gen_ruas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LEADS Instagram"
              className="group flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10 transition-all duration-300 max-w-full"
            >
              <svg className="w-4 h-4 text-[#E1306C] group-hover:scale-110 transition-transform shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span className="text-xs font-semibold text-white/80 group-hover:text-white truncate">@leads_next_gen_ruas</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/leads-next-gen-centre-ruas-700555327"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LEADS LinkedIn"
              className="group flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 transition-all duration-300"
            >
              <svg className="w-4 h-4 text-[#0A66C2] group-hover:scale-110 transition-transform shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-xs font-semibold text-white/80 group-hover:text-white">LinkedIn</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918910133283"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp LEADS"
              className="group flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-all duration-300"
            >
              <svg className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="text-xs font-semibold text-white/80 group-hover:text-white truncate">+91 891 013 3283</span>
            </a>

            {/* Email */}
            <a
              href="mailto:leads.ngc@msruas.ac.in"
              aria-label="Email LEADS"
              className="group flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#DE3F11]/50 hover:bg-[#DE3F11]/10 transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-[#DE3F11] group-hover:scale-110 transition-transform shrink-0" />
              <span className="text-xs font-semibold text-white/80 group-hover:text-white truncate">leads.ngc@msruas.ac.in</span>
            </a>

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
