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
import ThemeToggle from "./ThemeToggle";
import { REPORTS_DATA } from "@/lib/reports-data";

export default function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reportsDropdownOpen, setReportsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <Link href="/" className="flex items-center group">
            <div className="bg-white/95 dark:bg-white/90 px-3 py-1.5 rounded-xl border border-brand-gold/30 shadow-sm group-hover:scale-105 transition-transform duration-300">
              <img
                src="/leads-header-logo.png"
                alt="LEADS Next Gen Centre - Ramaiah University of Applied Sciences"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive("/")
                  ? "bg-gradient-to-r from-[#9C1256]/30 to-[#DE3F11]/30 text-white font-bold border border-[#DE3F11]/40"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Home
            </Link>

            <Link
              href="/events"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive("/events")
                  ? "bg-gradient-to-r from-[#9C1256]/30 to-[#DE3F11]/30 text-white font-bold border border-[#DE3F11]/40"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Events
            </Link>

            <Link
              href="/about"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "bg-gradient-to-r from-[#9C1256]/30 to-[#DE3F11]/30 text-white font-bold border border-[#DE3F11]/40"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              About Us
            </Link>

            {/* Impact Reports Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={() => setReportsDropdownOpen(true)}
              onMouseLeave={() => setReportsDropdownOpen(false)}
            >
              <Link
                href="/reports"
                className={`inline-flex items-center space-x-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive("/reports")
                    ? "bg-gradient-to-r from-[#9C1256]/30 to-[#DE3F11]/30 text-white font-bold border border-[#DE3F11]/40"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>Reports</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    reportsDropdownOpen ? "rotate-180 text-[#DE3F11]" : ""
                  }`}
                />
              </Link>

              {/* Dropdown Menu Box */}
              {reportsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 rounded-2xl bg-[#241147]/95 glass-panel p-3 shadow-2xl border border-white/20 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="text-xs font-semibold uppercase tracking-wider text-transparent bg-gradient-to-r from-[#DE3F11] to-[#FF8C61] bg-clip-text px-3 py-1.5 border-b border-white/10 mb-1">
                    Official Impact Publication
                  </div>
                  {REPORTS_DATA.map((report) => (
                    <Link
                      key={report.id}
                      href="/reports"
                      className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-[#9C1256]/30 to-[#DE3F11]/30 text-white border border-[#DE3F11]/30 mt-0.5">
                        <FileText className="w-4 h-4 text-[#DE3F11]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-white group-hover:text-[#DE3F11] truncate">
                          {report.title}
                        </div>
                        <div className="text-[11px] text-[#E2D9F3]">
                          {report.year} · {report.fileSize} PDF · Read Online
                        </div>
                      </div>
                    </Link>
                  ))}
                  <div className="mt-2 pt-2 border-t border-white/10 text-center">
                    <Link
                      href="/reports"
                      className="text-xs font-semibold text-white hover:text-[#DE3F11] hover:underline"
                    >
                      Open Interactive Reader →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* External Nav Link: BLS */}
            <a
              href="https://www.bharatleadsummit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors group"
              title="Visit Bharath Leadership Summit website"
            >
              <img
                src="/bls-logo.webp"
                alt="BLS Logo"
                className="w-5 h-5 object-contain rounded-full bg-white/20 p-0.5 group-hover:scale-110 transition-transform"
              />
              <span>BLS</span>
            </a>

            {/* External Nav Link: LEADS Portal */}
            <a
              href="https://github.com/Kayo2970/Leads-external.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3.5 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              title="Access LEADS Member & ERP Portal"
            >
              LEADS Portal
            </a>
          </nav>

          {/* Right Action Bar */}
          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu & Theme Toggle Trigger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl glass-panel text-white hover:text-[#DE3F11]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-white/15 mt-3 px-4 pt-4 pb-6 space-y-3 bg-[#241147]/95 animate-in slide-in-from-top-4 duration-300">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
              isActive("/") ? "bg-gradient-to-r from-[#9C1256]/40 to-[#DE3F11]/40 text-white font-bold" : "text-white/90"
            }`}
          >
            Home
          </Link>
          <Link
            href="/events"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
              isActive("/events") ? "bg-gradient-to-r from-[#9C1256]/40 to-[#DE3F11]/40 text-white font-bold" : "text-white/90"
            }`}
          >
            Events
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
              isActive("/about") ? "bg-gradient-to-r from-[#9C1256]/40 to-[#DE3F11]/40 text-white font-bold" : "text-white/90"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/reports"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
              isActive("/reports") ? "bg-gradient-to-r from-[#9C1256]/40 to-[#DE3F11]/40 text-white font-bold" : "text-white/90"
            }`}
          >
            Impact Reports
          </Link>

          <div className="pt-2 border-t border-white/15 space-y-2">
            <a
              href="https://www.bharatleadsummit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-white/10 hover:bg-white/15 transition-colors"
            >
              <img
                src="/bls-logo.webp"
                alt="BLS Logo"
                className="w-5 h-5 object-contain rounded-full bg-white/20 p-0.5"
              />
              <span>Bharath Leadership Summit (BLS)</span>
            </a>

            <a
              href="https://github.com/Kayo2970/Leads-external.git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-white/10"
            >
              <span>LEADS Portal (ERP Login)</span>
            </a>

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
