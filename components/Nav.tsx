"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  FileText,
  Menu,
  X,
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
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ease-out ${
        showNav
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-full pointer-events-none"
      } ${
        scrolled
          ? "liquid-glass-header py-3 shadow-xl"
          : "liquid-glass-header py-4 shadow-md"
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] 4xl:max-w-[2600px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12">
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
            <PlaceholderBadge id={85} position="bottom-right" className="scale-75 origin-bottom-right opacity-70 pointer-events-none" />
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
                <span>Programs</span>
                <ChevronDown
                  className={`w-4 h-4 3xl:w-5 3xl:h-5 transition-transform duration-200 ${
                    programsDropdownOpen ? "rotate-180 text-[#DE3F11]" : ""
                  }`}
                />
              </Link>

              {/* Programs Dropdown Box */}
              {programsDropdownOpen && (
                <div className="absolute top-full left-0 pt-1.5 z-50">
                  <div className="w-88 3xl:w-96 rounded-2xl bg-white/95 backdrop-blur-2xl p-3.5 shadow-[0_20px_60px_-15px_rgba(30,12,61,0.25)] border border-purple-200/90 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="text-xs 3xl:text-sm font-bold uppercase tracking-wider text-transparent bg-gradient-to-r from-[#9C1256] to-[#DE3F11] bg-clip-text px-3 py-1.5 border-b border-purple-100 mb-1">
                      LEADS Initiatives & Summits
                    </div>

                    <Link
                      href="/programs"
                      className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-purple-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-[#9C1256]/10 to-[#DE3F11]/10 text-[#DE3F11] border border-[#DE3F11]/20 mt-0.5">
                        <FileText className="w-4 h-4 text-[#DE3F11]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs 3xl:text-sm font-bold text-[#1E0C3D] group-hover:text-[#DE3F11]">
                          Programs Overview
                        </div>
                        <div className="text-[11px] 3xl:text-xs text-slate-500 font-medium">
                          FDP, LDP, MDP, Vanguard, SIKHI (FICCI) & SDP
                        </div>
                      </div>
                    </Link>

                    <a
                      href="https://www.bharatleadsummit.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-purple-50 transition-colors group"
                    >
                      <div className="p-1.5 rounded-lg bg-purple-100 border border-purple-200 mt-0.5 shrink-0">
                        <img
                          src="/bls-logo.webp"
                          alt="BLS Logo"
                          className="w-5 h-5 object-contain rounded-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs 3xl:text-sm font-bold text-[#1E0C3D] group-hover:text-[#DE3F11] flex items-center gap-1.5">
                          <span>Bharath Leadership Summit</span>
                          <span className="text-[9px] bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white px-1.5 py-0.5 rounded font-extrabold uppercase">
                            Summit
                          </span>
                        </div>
                        <div className="text-[11px] 3xl:text-xs text-slate-500 font-medium">
                          India's premier annual policy & leadership convention
                        </div>
                      </div>
                    </a>

                    <Link
                      href="/programs"
                      className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-purple-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-[#9C1256]/10 to-[#DE3F11]/10 text-[#DE3F11] border border-[#DE3F11]/20 mt-0.5">
                        <FileText className="w-4 h-4 text-[#DE3F11]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs 3xl:text-sm font-bold text-[#1E0C3D] group-hover:text-[#DE3F11]">
                          Catalyst Leadership Talk Series
                        </div>
                        <div className="text-[11px] 3xl:text-xs text-slate-500 font-medium">
                          Monthly executive & non-technical masterclass series
                        </div>
                      </div>
                    </Link>

                    <div className="mt-2 pt-2 border-t border-purple-100 text-center">
                      <Link
                        href="/programs"
                        className="text-xs 3xl:text-sm font-bold text-[#9C1256] hover:text-[#DE3F11] hover:underline"
                      >
                        View All Capability Programs →
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
                <div className="absolute top-full left-0 pt-1.5 z-50">
                  <div className="w-84 3xl:w-96 rounded-2xl bg-white/95 backdrop-blur-2xl p-3.5 shadow-[0_20px_60px_-15px_rgba(30,12,61,0.25)] border border-purple-200/90 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="text-xs 3xl:text-sm font-bold uppercase tracking-wider text-transparent bg-gradient-to-r from-[#9C1256] to-[#DE3F11] bg-clip-text px-3 py-1.5 border-b border-purple-100 mb-1">
                      Official Impact Publication
                    </div>
                    {REPORTS_DATA.map((report) => (
                      <Link
                        key={report.id}
                        href="/reports"
                        className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-purple-50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-gradient-to-r from-[#9C1256]/10 to-[#DE3F11]/10 text-[#DE3F11] border border-[#DE3F11]/20 mt-0.5">
                          <FileText className="w-4 h-4 text-[#DE3F11]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs 3xl:text-sm font-bold text-[#1E0C3D] group-hover:text-[#DE3F11] truncate">
                            {report.title}
                          </div>
                          <div className="text-[11px] 3xl:text-xs text-slate-500 font-medium">
                            {report.year} · {report.fileSize} PDF · Read Online
                          </div>
                        </div>
                      </Link>
                    ))}
                    <div className="mt-2 pt-2 border-t border-purple-100 text-center">
                      <Link
                        href="/reports"
                        className="text-xs 3xl:text-sm font-bold text-[#9C1256] hover:text-[#DE3F11] hover:underline"
                      >
                        Open Interactive Reader →
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
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-purple-200/90 mt-3 px-4 pt-4 pb-6 space-y-2.5 text-[#1E0C3D] shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass("/")}>
            Home
          </Link>
          <Link href="/events" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass("/events")}>
            Events
          </Link>
          <div>
            <Link href="/programs" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass("/programs")}>
              Programs Overview
            </Link>
            <a
              href="https://www.bharatleadsummit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 px-6 py-2 rounded-xl text-sm font-medium text-[#1E0C3D] hover:bg-purple-50/80 transition-colors"
            >
              <img
                src="/bls-logo.webp"
                alt="BLS Logo"
                className="w-4 h-4 object-contain rounded-full bg-purple-200 p-0.5"
              />
              <span>Bharath Leadership Summit</span>
            </a>
          </div>
          <Link href="/partners" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass("/partners")}>
            Our Partners
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass("/about")}>
            About Us
          </Link>
          <Link href="/reports" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass("/reports")}>
            Impact Reports
          </Link>

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
