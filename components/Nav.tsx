"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  FileText,
  Menu,
  X,
  ExternalLink,
  GraduationCap,
  Award,
  Zap,
} from "lucide-react";
import { REPORTS_DATA } from "@/lib/reports-data";
import PlaceholderBadge from "@/components/PlaceholderBadge";

export default function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reportsDropdownOpen, setReportsDropdownOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHomePage = pathname === "/";
  const showNav = !isHomePage || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  const navLinkClass = (path: string) =>
    `px-3.5 py-2 3xl:px-5 3xl:py-3 rounded-lg 3xl:rounded-xl text-sm 3xl:text-lg font-medium transition-colors inline-flex items-center space-x-1 ${
      isActive(path)
        ? "bg-gradient-to-r from-[#9C1256]/15 to-[#DE3F11]/15 text-[#9C1256] font-bold border border-[#DE3F11]/30 shadow-sm"
        : "text-[#1E0C3D]/90 hover:text-[#9C1256] hover:bg-purple-50/80"
    }`;

  const mobileNavLinkClass = (path: string) =>
    `block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
      isActive(path)
        ? "bg-gradient-to-r from-[#9C1256]/15 to-[#DE3F11]/15 text-[#9C1256] font-bold border border-[#DE3F11]/30"
        : "text-[#1E0C3D]/90 hover:text-[#9C1256] hover:bg-purple-50/80"
    }`;

  return (
    <header
      className={`fixed top-3 sm:top-4 inset-x-0 z-[9999] mx-auto px-3 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] 4xl:max-w-[2600px] transition-all duration-500 ease-out ${
        showNav
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-8 pointer-events-none"
      }`}
    >
      <div
        className={`liquid-glass-header rounded-2xl lg:rounded-full px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? "py-2 sm:py-2.5 shadow-2xl" : "py-2.5 sm:py-3.5 shadow-lg"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3.5 group py-0.5 relative shrink-0">
            <img
              src="/ruas-logo.png"
              alt="Ramaiah University of Applied Sciences"
              className="h-8 sm:h-11 lg:h-13 3xl:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />

            <span className="h-8 sm:h-11 lg:h-12 w-[1.5px] bg-slate-300/80 rounded-full shrink-0" />

            <img
              src="/leads-short-logo.png"
              alt="LEADS Next Gen Centre - RUAS"
              className="h-13 sm:h-16 lg:h-20 3xl:h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 3xl:space-x-4">
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>

            <Link href="/events" className={navLinkClass("/events")}>
              Events
            </Link>

            {/* Programs Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={() => setProgramsDropdownOpen(true)}
              onMouseLeave={() => setProgramsDropdownOpen(false)}
            >
              <Link href="/programs" className={navLinkClass("/programs")}>
                <span>Programs Overview</span>
                <ChevronDown
                  className={`w-4 h-4 3xl:w-5 3xl:h-5 transition-transform duration-200 ${
                    programsDropdownOpen ? "rotate-180 text-[#DE3F11]" : ""
                  }`}
                />
              </Link>

              {/* Programs Dropdown Box */}
              {programsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50">
                  <div className="w-[460px] 3xl:w-[520px] rounded-2xl bg-white/95 backdrop-blur-2xl p-4 shadow-[0_25px_70px_-15px_rgba(30,12,61,0.3)] border border-purple-200/90 animate-in fade-in slide-in-from-top-2 duration-200 space-y-2">
                    
                    {/* Header with Direct Program Overview Button */}
                    <div className="flex items-center justify-between px-3 py-2 border-b border-purple-100/80 mb-1.5">
                      <span className="text-xs 3xl:text-sm font-extrabold uppercase tracking-wider text-transparent bg-gradient-to-r from-[#9C1256] to-[#DE3F11] bg-clip-text">
                        Capability Programs & Summits
                      </span>
                      <Link
                        href="/programs"
                        className="text-xs font-bold px-3 py-1 rounded-lg bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-xs hover:shadow-md hover:scale-[1.02] transition-all flex items-center gap-1"
                      >
                        <span>Program Overview</span>
                        <span>→</span>
                      </Link>
                    </div>

                    {/* Program Items List */}
                    <div className="space-y-1.5 max-h-[420px] overflow-y-auto pr-1">
                      {/* 1. BHARAT LEAD SUMMIT 2026 */}
                      <a
                        href="https://www.bharatleadsummit.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start space-x-3.5 p-3 rounded-xl hover:bg-purple-50/90 transition-all duration-200 group border border-transparent hover:border-purple-100"
                      >
                        <div className="w-10 h-10 rounded-xl bg-purple-100/80 border border-purple-200/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                          <img
                            src="/bls-logo.webp"
                            alt="BLS Logo"
                            className="w-6 h-6 object-contain rounded-full"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-bold text-[#1E0C3D] group-hover:text-[#DE3F11] transition-colors">
                              BHARAT LEAD SUMMIT 2026
                            </span>
                            <span className="text-[9px] bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white px-2 py-0.5 rounded-md font-extrabold uppercase shrink-0 shadow-xs">
                              Summit ↗
                            </span>
                          </div>
                          <div className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed">
                            India's premier annual policy & leadership convention
                          </div>
                        </div>
                      </a>

                      {/* 2. FDP, LDP, MDP & SDP Development Programmes */}
                      <Link
                        href="/programs#consolidated-development-program"
                        className="flex items-start space-x-3.5 p-3 rounded-xl hover:bg-purple-50/90 transition-all duration-200 group border border-transparent hover:border-purple-100"
                      >
                        <div className="w-10 h-10 rounded-xl bg-purple-100/80 border border-purple-200/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                          <GraduationCap className="w-5 h-5 text-[#9C1256]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-bold text-[#1E0C3D] group-hover:text-[#DE3F11] transition-colors">
                              FDP, LDP, MDP & SDP Programmes
                            </span>
                            <span className="text-[9px] bg-purple-100 text-[#9C1256] border border-purple-200 px-2 py-0.5 rounded-md font-extrabold uppercase shrink-0">
                              Core Track
                            </span>
                          </div>
                          <div className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed">
                            Faculty (FDP), Leadership (LDP), Management (MDP) & Student (SDP)
                          </div>
                        </div>
                      </Link>

                      {/* 3. Vanguard Leadership Retreat */}
                      <Link
                        href="/programs#vanguard-program"
                        className="flex items-start space-x-3.5 p-3 rounded-xl hover:bg-purple-50/90 transition-all duration-200 group border border-transparent hover:border-purple-100"
                      >
                        <div className="w-10 h-10 rounded-xl bg-purple-100/80 border border-purple-200/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                          <Award className="w-5 h-5 text-[#9C1256]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-bold text-[#1E0C3D] group-hover:text-[#DE3F11] transition-colors">
                              Vanguard Leadership Retreat
                            </span>
                            <span className="text-[9px] bg-amber-100 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-md font-extrabold uppercase shrink-0">
                              Executive
                            </span>
                          </div>
                          <div className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed">
                            Elite experiential governance & board dynamics initiative
                          </div>
                        </div>
                      </Link>

                      {/* 4. ENERGY REFRESHER PROGRAM */}
                      <Link
                        href="/programs#energy-refresher-program"
                        className="flex items-start space-x-3.5 p-3 rounded-xl hover:bg-purple-50/90 transition-all duration-200 group border border-transparent hover:border-purple-100"
                      >
                        <div className="w-10 h-10 rounded-xl bg-purple-100/80 border border-purple-200/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                          <Zap className="w-5 h-5 text-[#DE3F11]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-bold text-[#1E0C3D] group-hover:text-[#DE3F11] transition-colors">
                              ENERGY REFRESHER PROGRAM
                            </span>
                            <span className="text-[9px] bg-orange-100 text-[#DE3F11] border border-orange-200 px-2 py-0.5 rounded-md font-extrabold uppercase shrink-0">
                              Ministry & FICCI
                            </span>
                          </div>
                          <div className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed">
                            Organized by Ministry of Power in collaboration with FICCI
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="pt-2.5 mt-2 border-t border-purple-100/80 text-center">
                      <Link
                        href="/programs"
                        className="text-xs 3xl:text-sm font-bold text-[#9C1256] hover:text-[#DE3F11] transition-colors inline-flex items-center gap-1 hover:underline"
                      >
                        <span>Jump to Program Overview Page</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/partners" className={navLinkClass("/partners")}>
              Our Partners
            </Link>

            <Link href="/about" className={navLinkClass("/about")}>
              About Us
            </Link>

            {/* Impact Reports Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={() => setReportsDropdownOpen(true)}
              onMouseLeave={() => setReportsDropdownOpen(false)}
            >
              <Link href="/reports" className={navLinkClass("/reports")}>
                <span>Reports</span>
                <ChevronDown
                  className={`w-4 h-4 3xl:w-5 3xl:h-5 transition-transform duration-200 ${
                    reportsDropdownOpen ? "rotate-180 text-[#DE3F11]" : ""
                  }`}
                />
              </Link>

              {/* Dropdown Menu Box */}
              {reportsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50">
                  <div className="w-[450px] 3xl:w-[490px] rounded-2xl bg-white/95 backdrop-blur-2xl p-4 shadow-[0_25px_70px_-15px_rgba(30,12,61,0.3)] border border-purple-200/90 animate-in fade-in slide-in-from-top-2 duration-200 space-y-2">
                    <div className="text-xs 3xl:text-sm font-extrabold uppercase tracking-wider text-transparent bg-gradient-to-r from-[#9C1256] to-[#DE3F11] bg-clip-text px-3 py-1.5 border-b border-purple-100/80 mb-2 flex items-center justify-between">
                      <span>Official Annual Publication</span>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-normal">Verified Release</span>
                    </div>
                    <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
                      {REPORTS_DATA.map((report) => (
                        <a
                          key={report.id}
                          href={report.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start space-x-3.5 p-3 rounded-xl hover:bg-purple-50/90 transition-all duration-200 group border border-transparent hover:border-purple-100"
                        >
                          <div className="w-10 h-10 rounded-xl bg-purple-100/80 border border-purple-200/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                            <FileText className="w-5 h-5 text-[#9C1256]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-bold text-[#1E0C3D] group-hover:text-[#DE3F11] leading-snug flex items-center justify-between gap-2">
                              <span className="truncate">{report.title}</span>
                              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#DE3F11] transition-colors shrink-0" />
                            </div>
                            <div className="text-xs text-slate-500 font-medium mt-1 flex items-center gap-2">
                              <span>{report.year}</span>
                              <span>·</span>
                              <span className="font-semibold text-slate-600">{report.fileSize} PDF</span>
                              <span>·</span>
                              <span className="text-[#9C1256] font-semibold group-hover:underline">Open PDF ↗</span>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="pt-2.5 mt-2 border-t border-purple-100/80 text-center">
                      <Link
                        href="/reports"
                        className="text-xs 3xl:text-sm font-bold text-[#9C1256] hover:text-[#DE3F11] transition-colors inline-flex items-center gap-1 hover:underline"
                      >
                        <span>Open Interactive Reader & Hub</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ERP Subsystem Portal Link */}
            <Link
              href="/portal"
              className="inline-flex items-center px-3.5 py-2 3xl:px-5 3xl:py-3 rounded-lg text-sm 3xl:text-lg font-medium text-[#1E0C3D]/90 hover:text-[#9C1256] hover:bg-purple-50/80 transition-colors"
              title="Access LEADS Internal ERP & Member Management Portal"
            >
              LEADS Portal
            </Link>
          </nav>

          {/* Right Action Bar */}
          <div className="hidden lg:flex items-center space-x-3 3xl:space-x-5">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 3xl:px-8 3xl:py-3.5 rounded-xl 3xl:rounded-2xl font-bold text-sm 3xl:text-lg bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/90 border border-purple-100 text-[#1E0C3D] hover:text-[#DE3F11] shadow-sm"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border border-purple-200/90 mt-2.5 rounded-2xl px-4 pt-4 pb-6 space-y-2.5 text-[#1E0C3D] shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass("/")}>
            Home
          </Link>
          <Link href="/events" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass("/events")}>
            Events
          </Link>
          <div className="bg-purple-50/50 rounded-xl p-2 space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#9C1256] px-3 py-1 border-b border-purple-100">
              Programs & Summits
            </div>
            <Link href="/programs" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-bold text-[#9C1256] hover:bg-purple-100/80 transition-colors">
              <span>Program Overview</span>
              <span>→</span>
            </Link>
            <a
              href="https://www.bharatleadsummit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:text-[#DE3F11] hover:bg-purple-100/80 transition-colors"
            >
              <img
                src="/bls-logo.webp"
                alt="BLS Logo"
                className="w-4 h-4 object-contain rounded-full bg-purple-200 p-0.5 shrink-0"
              />
              <span className="truncate">BHARAT LEAD SUMMIT 2026</span>
              <span className="text-[9px] bg-[#DE3F11] text-white px-1.5 py-0.2 rounded font-bold ml-auto shrink-0">Summit ↗</span>
            </a>
            <Link
              href="/programs#consolidated-development-program"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:text-[#9C1256] hover:bg-purple-100/80 transition-colors"
            >
              <GraduationCap className="w-4 h-4 text-[#9C1256] shrink-0" />
              <span className="truncate">FDP, LDP, MDP & SDP Programmes</span>
            </Link>
            <Link
              href="/programs#vanguard-program"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:text-[#9C1256] hover:bg-purple-100/80 transition-colors"
            >
              <Award className="w-4 h-4 text-[#9C1256] shrink-0" />
              <span className="truncate">Vanguard Leadership Retreat</span>
            </Link>
            <Link
              href="/programs#energy-refresher-program"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:text-[#DE3F11] hover:bg-purple-100/80 transition-colors"
            >
              <Zap className="w-4 h-4 text-[#DE3F11] shrink-0" />
              <span className="truncate">ENERGY REFRESHER PROGRAM</span>
            </Link>
          </div>
          <Link href="/partners" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass("/partners")}>
            Our Partners
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass("/about")}>
            About Us
          </Link>
          <div>
            <Link href="/reports" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass("/reports")}>
              Impact Reports & Publications
            </Link>
            <div className="pl-4 pr-2 mt-1 space-y-1">
              {REPORTS_DATA.map((report) => (
                <a
                  key={report.id}
                  href={report.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-1.5 px-3 rounded-lg text-xs font-medium text-slate-700 hover:text-[#DE3F11] hover:bg-purple-50/80 transition-colors"
                >
                  <span className="truncate">{report.title}</span>
                  <span className="text-[10px] text-[#9C1256] font-bold ml-2 shrink-0">{report.fileSize}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-purple-100 space-y-2">
            <Link
              href="/portal"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-[#1E0C3D] bg-purple-50/80 hover:bg-purple-100/80 transition-colors"
            >
              <span>LEADS Portal (ERP Gateway)</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full py-3 mt-4 rounded-xl font-bold bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
