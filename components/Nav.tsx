"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ExternalLink,
  ChevronDown,
  FileText,
  Menu,
  X,
  Compass,
  Award,
  Sparkles,
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
                  ? "text-brand-violet dark:text-brand-gold bg-brand-violet/10 font-semibold"
                  : "text-slate-700 dark:text-slate-200 hover:text-brand-violet dark:hover:text-brand-gold hover:bg-brand-violet/5"
              }`}
            >
              Home
            </Link>

            <Link
              href="/events"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive("/events")
                  ? "text-brand-violet dark:text-brand-gold bg-brand-violet/10 font-semibold"
                  : "text-slate-700 dark:text-slate-200 hover:text-brand-violet dark:hover:text-brand-gold hover:bg-brand-violet/5"
              }`}
            >
              Events
            </Link>

            <Link
              href="/about"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-brand-violet dark:text-brand-gold bg-brand-violet/10 font-semibold"
                  : "text-slate-700 dark:text-slate-200 hover:text-brand-violet dark:hover:text-brand-gold hover:bg-brand-violet/5"
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
                    ? "text-brand-violet dark:text-brand-gold bg-brand-violet/10 font-semibold"
                    : "text-slate-700 dark:text-slate-200 hover:text-brand-violet dark:hover:text-brand-gold hover:bg-brand-violet/5"
                }`}
              >
                <span>Reports</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    reportsDropdownOpen ? "rotate-180 text-brand-gold" : ""
                  }`}
                />
              </Link>

              {/* Dropdown Menu Box */}
              {reportsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 rounded-2xl glass-panel p-3 shadow-2xl border border-brand-violet/20 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-gold px-3 py-1.5 border-b border-brand-violet/10 mb-1">
                    Downloadable Impact Reports
                  </div>
                  {REPORTS_DATA.map((report) => (
                    <a
                      key={report.id}
                      href={report.fileUrl}
                      download
                      className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-brand-violet/10 dark:hover:bg-brand-violet-surface transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-brand-violet/10 dark:bg-brand-violet/30 text-brand-violet dark:text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-colors mt-0.5">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-slate-800 dark:text-slate-100 group-hover:text-brand-violet dark:group-hover:text-brand-gold truncate">
                          {report.title}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          {report.year} · {report.fileSize} PDF
                        </div>
                      </div>
                    </a>
                  ))}
                  <div className="mt-2 pt-2 border-t border-brand-violet/10 text-center">
                    <Link
                      href="/reports"
                      className="text-xs font-semibold text-brand-violet dark:text-brand-gold hover:underline"
                    >
                      View All Reports →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* External Nav Link: BLS */}
            <a
              href="https://github.com/Kayo2970/Leads-external.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-amber-700 dark:text-amber-300 hover:bg-amber-500/10 transition-colors"
              title="Visit Bharath Leadership Summit website"
            >
              <span>BLS</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            {/* External Nav Link: LEADS Portal */}
            <a
              href="https://github.com/Kayo2970/Leads-external.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/10 transition-colors"
              title="Access LEADS Member & ERP Portal (Coming Soon)"
            >
              <span>LEADS Portal</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </nav>

          {/* Right Action Bar */}
          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-gold to-brand-gold-dark text-slate-950 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu & Theme Toggle Trigger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl glass-panel text-slate-700 dark:text-slate-200 hover:text-brand-gold"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-brand-violet/10 mt-3 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-300">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
              isActive("/") ? "bg-brand-violet/15 text-brand-gold font-bold" : "text-slate-700 dark:text-slate-200"
            }`}
          >
            Home
          </Link>
          <Link
            href="/events"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
              isActive("/events") ? "bg-brand-violet/15 text-brand-gold font-bold" : "text-slate-700 dark:text-slate-200"
            }`}
          >
            Events
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
              isActive("/about") ? "bg-brand-violet/15 text-brand-gold font-bold" : "text-slate-700 dark:text-slate-200"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/reports"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
              isActive("/reports") ? "bg-brand-violet/15 text-brand-gold font-bold" : "text-slate-700 dark:text-slate-200"
            }`}
          >
            Impact Reports
          </Link>

          <div className="pt-2 border-t border-brand-violet/10 space-y-2">
            <a
              href="https://github.com/Kayo2970/Leads-external.git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-amber-600 dark:text-amber-400 bg-amber-500/10"
            >
              <span>Bharath Leadership Summit (BLS)</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/Kayo2970/Leads-external.git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-500/10"
            >
              <span>LEADS Portal (ERP Login)</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full py-3 mt-4 rounded-xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-dark text-slate-950 shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
