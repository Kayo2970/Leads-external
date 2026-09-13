"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  FileText,
  ExternalLink,
  GraduationCap,
  Award,
  Zap,
  Building2,
  Users,
} from "lucide-react";
import { REPORTS_DATA } from "@/lib/reports-data";
import CardNav, { CardNavItem } from "@/components/CardNav";

const MOBILE_NAV_CARDS: CardNavItem[] = [
  {
    label: "Explore & Events",
    bgColor: "#241147",
    textColor: "#ffffff",
    links: [
      { label: "Home", href: "/", ariaLabel: "Home Page" },
      { label: "All Events Directory", href: "/events", ariaLabel: "All Events Directory" },
      { label: "Catalyst Talk Series (3.0 – 8.0)", href: "/events?category=Catalyst%20Leadership%20Talk%20Series", ariaLabel: "Catalyst Talk Series" },
      { label: "Expert & Fireside Talks", href: "/events?category=Expert%20Talks", ariaLabel: "Expert Talks" },
    ],
  },
  {
    label: "Programs & Summits",
    bgColor: "#9C1256",
    textColor: "#ffffff",
    links: [
      { label: "Programs Overview", href: "/programs", ariaLabel: "Programs Overview" },
      { label: "Bharat Lead Summit 2026", href: "https://www.bharatleadsummit.com/", ariaLabel: "Bharat Lead Summit 2026", isExternal: true },
      { label: "FDP, LDP, MDP & SDP", href: "/programs?category=FDP%20%2F%20MDP%20%2F%20LDP%20%2F%20SDP%20Programmes", ariaLabel: "Capability Programmes" },
      { label: "Vanguard Leadership Retreat", href: "/programs#vanguard-program", ariaLabel: "Vanguard Leadership Retreat" },
      { label: "Energy Refresher Program", href: "/programs#energy-refresher-program", ariaLabel: "Energy Refresher Program" },
    ],
  },
  {
    label: "About & Reports",
    bgColor: "#1E0C3D",
    textColor: "#ffffff",
    links: [
      { label: "About Us & Governance", href: "/about", ariaLabel: "About Us & Governance" },
      { label: "Our Institutional Partners", href: "/partners", ariaLabel: "Our Institutional Partners" },
      { label: "Impact Reports & Publications", href: "/reports", ariaLabel: "Impact Reports & Publications" },
      { label: "LEADS Portal (ERP)", href: "/portal", ariaLabel: "LEADS Portal" },
      { label: "Contact Us", href: "/contact", ariaLabel: "Contact Us" },
    ],
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [reportsDropdownOpen, setReportsDropdownOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const isHomePage = pathname === "/";
  const showNav = !isHomePage || scrolled || isMobile;

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isActive = (path: string) => pathname === path;

  const navLinkClass = (path: string) =>
    `px-3.5 py-2 3xl:px-5 3xl:py-3 rounded-lg 3xl:rounded-xl text-sm 3xl:text-lg font-medium transition-colors inline-flex items-center space-x-1 ${
      isActive(path)
        ? "bg-gradient-to-r from-[#9C1256]/15 to-[#DE3F11]/15 text-[#9C1256] font-bold border border-[#DE3F11]/30 shadow-sm"
        : "text-[#1E0C3D]/90 hover:text-[#9C1256] hover:bg-purple-50/80"
    }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 w-full transition-all duration-300 ease-out ${
        showNav
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      {/* MOBILE VIEW: Animated CardNav from React Bits */}
      <div className="block lg:hidden px-3 pt-2 pb-1">
        <CardNav
          items={MOBILE_NAV_CARDS}
          baseColor="rgba(255, 255, 255, 0.96)"
          menuColor="#1E0C3D"
          buttonText="Contact"
          buttonHref="/contact"
          buttonBgColor="linear-gradient(to right, #9C1256, #DE3F11)"
          buttonTextColor="#ffffff"
          ease="power3.out"
        />
      </div>

      {/* DESKTOP VIEW: Full Glass Navbar with Dropdowns & Mega Menus */}
      <div className="hidden lg:block bg-white/95 backdrop-blur-2xl border-b border-purple-200/50 shadow-md">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] 4xl:max-w-[2600px] py-2 sm:py-2.5 lg:py-3">
          <div className="flex items-center justify-between">
            {/* Logo & Identity */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3.5 group py-0.5 relative shrink-0">
              <img
                src="/ruas-logo.png"
                alt="Ramaiah University of Applied Sciences"
                className="h-7 sm:h-9 lg:h-12 3xl:h-16 w-auto max-w-[110px] sm:max-w-none object-contain group-hover:scale-105 transition-transform duration-300"
              />

              <span className="h-6 sm:h-8 lg:h-10 w-[1.5px] bg-slate-300/80 rounded-full shrink-0" />

              <img
                src="/leads-short-logo.png"
                alt="LEADS Next Gen Centre - RUAS"
                className="h-8 sm:h-11 lg:h-15 3xl:h-20 w-auto max-w-[130px] sm:max-w-none object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="flex items-center space-x-1 xl:space-x-2 3xl:space-x-4">
              <Link href="/" className={navLinkClass("/")}>
                Home
              </Link>

              {/* Events Dropdown Menu */}
              <div
                className="relative"
                onMouseEnter={() => setEventsDropdownOpen(true)}
                onMouseLeave={() => setEventsDropdownOpen(false)}
              >
                <Link href="/events" className={navLinkClass("/events")}>
                  <span>Events</span>
                  <ChevronDown
                    className={`w-4 h-4 3xl:w-5 3xl:h-5 transition-transform duration-200 ${
                      eventsDropdownOpen ? "rotate-180 text-[#DE3F11]" : ""
                    }`}
                  />
                </Link>

                {/* Events Dropdown Box */}
                {eventsDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50">
                    <div className="w-[460px] 3xl:w-[520px] rounded-2xl bg-white/95 backdrop-blur-2xl p-4 shadow-[0_25px_70px_-15px_rgba(30,12,61,0.3)] border border-purple-200/90 animate-in fade-in slide-in-from-top-2 duration-200 space-y-2">
                      <div className="flex items-center justify-between px-3 py-1 border-b border-purple-100/80 mb-1.5">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#9C1256]">
                          Event Categories
                        </span>
                        <Link
                          href="/events"
                          className="text-xs font-bold px-3 py-1 rounded-lg bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-xs hover:shadow-md hover:scale-[1.02] transition-all flex items-center gap-1"
                        >
                          <span>View All Events</span>
                          <span>→</span>
                        </Link>
                      </div>

                      <div className="space-y-1.5 max-h-[420px] overflow-y-auto pr-1">

                        <Link
                          href="/events?category=Outreach"
                          className="flex items-start space-x-3.5 p-2.5 rounded-xl hover:bg-purple-50/90 transition-all duration-200 group border border-transparent hover:border-purple-100"
                        >
                          <div className="w-9 h-9 rounded-xl bg-blue-100/80 border border-blue-200/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                            <Users className="w-4 h-4 text-blue-800" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-sm font-bold text-[#1E0C3D] group-hover:text-[#DE3F11] transition-colors">
                                Outreach Programmes
                              </span>
                              <span className="text-[9px] bg-blue-100 text-blue-800 border border-blue-200 px-2 py-0.5 rounded-md font-extrabold uppercase shrink-0">
                                Outreach
                              </span>
                            </div>
                            <div className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed truncate">
                              AIMS Conference, Delhi Visit, NHRD Meet & FKCCI Conclave
                            </div>
                          </div>
                        </Link>

                        <Link
                          href="/events?category=Catalyst%20Leadership%20Talk%20Series"
                          className="flex items-start space-x-3.5 p-2.5 rounded-xl hover:bg-purple-50/90 transition-all duration-200 group border border-transparent hover:border-purple-100"
                        >
                          <div className="w-9 h-9 rounded-xl bg-[#DE3F11]/10 border border-[#DE3F11]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                            <Zap className="w-4 h-4 text-[#DE3F11]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-sm font-bold text-[#1E0C3D] group-hover:text-[#DE3F11] transition-colors">
                                Catalyst Leadership Talk Series
                              </span>
                              <span className="text-[9px] bg-[#DE3F11]/15 text-[#DE3F11] border border-[#DE3F11]/30 px-2 py-0.5 rounded-md font-extrabold uppercase shrink-0">
                                3.0 – 8.0
                              </span>
                            </div>
                            <div className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed truncate">
                              Executive capability, ethics, digital leadership & ESG series
                            </div>
                          </div>
                        </Link>

                        <Link
                          href="/events?category=Expert%20Talks"
                          className="flex items-start space-x-3.5 p-2.5 rounded-xl hover:bg-purple-50/90 transition-all duration-200 group border border-transparent hover:border-purple-100"
                        >
                          <div className="w-9 h-9 rounded-xl bg-emerald-100/80 border border-emerald-200/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                            <FileText className="w-4 h-4 text-emerald-800" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-sm font-bold text-[#1E0C3D] group-hover:text-[#DE3F11] transition-colors">
                                Expert Talks
                              </span>
                              <span className="text-[9px] bg-emerald-100 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-md font-extrabold uppercase shrink-0">
                                Workshop
                              </span>
                            </div>
                            <div className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed truncate">
                              Data science with Python & analytical masterclasses
                            </div>
                          </div>
                        </Link>

                        <Link
                          href="/events?category=Fireside%20Talks"
                          className="flex items-start space-x-3.5 p-2.5 rounded-xl hover:bg-purple-50/90 transition-all duration-200 group border border-transparent hover:border-purple-100"
                        >
                          <div className="w-9 h-9 rounded-xl bg-orange-100/80 border border-orange-200/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                            <Users className="w-4 h-4 text-orange-800" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-sm font-bold text-[#1E0C3D] group-hover:text-[#DE3F11] transition-colors">
                                Fireside Talks
                              </span>
                              <span className="text-[9px] bg-orange-100 text-orange-800 border border-orange-200 px-2 py-0.5 rounded-md font-extrabold uppercase shrink-0">
                                Dialogue
                              </span>
                            </div>
                            <div className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed truncate">
                              Global to Local Changemakers interactive dialogue
                            </div>
                          </div>
                        </Link>

                        <Link
                          href="/events?category=Boardroom%20Battles"
                          className="flex items-start space-x-3.5 p-2.5 rounded-xl hover:bg-purple-50/90 transition-all duration-200 group border border-transparent hover:border-purple-100"
                        >
                          <div className="w-9 h-9 rounded-xl bg-rose-100/80 border border-rose-200/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                            <Award className="w-4 h-4 text-rose-800" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-sm font-bold text-[#1E0C3D] group-hover:text-[#DE3F11] transition-colors">
                                Boardroom Battles
                              </span>
                              <span className="text-[9px] bg-rose-100 text-rose-800 border border-rose-200 px-2 py-0.5 rounded-md font-extrabold uppercase shrink-0">
                                Simulation
                              </span>
                            </div>
                            <div className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed truncate">
                              Executive crisis management & high-stakes governance
                            </div>
                          </div>
                        </Link>

                        <Link
                          href="/events?category=Sustainability"
                          className="flex items-start space-x-3.5 p-2.5 rounded-xl hover:bg-purple-50/90 transition-all duration-200 group border border-transparent hover:border-purple-100"
                        >
                          <div className="w-9 h-9 rounded-xl bg-teal-100/80 border border-teal-200/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                            <Users className="w-4 h-4 text-teal-800" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-sm font-bold text-[#1E0C3D] group-hover:text-[#DE3F11] transition-colors">
                                Sustainability Events
                              </span>
                              <span className="text-[9px] bg-teal-100 text-teal-800 border border-teal-200 px-2 py-0.5 rounded-md font-extrabold uppercase shrink-0">
                                Outreach
                              </span>
                            </div>
                            <div className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed truncate">
                              Green Leaders Circle & Janani Sevashrama NGO Visit
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Programs Dropdown */}
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

                {programsDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50">
                    <div className="w-[440px] 3xl:w-[500px] rounded-2xl bg-white/95 backdrop-blur-2xl p-4 shadow-[0_25px_70px_-15px_rgba(30,12,61,0.3)] border border-purple-200/90 animate-in fade-in slide-in-from-top-2 duration-200 space-y-2">
                      <div className="flex items-center justify-between px-3 py-1 border-b border-purple-100/80 mb-1.5">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#9C1256]">
                          Flagship Programs & Summits
                        </span>
                        <Link
                          href="/programs"
                          className="text-xs font-bold px-3 py-1 rounded-lg bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-xs hover:shadow-md hover:scale-[1.02] transition-all flex items-center gap-1"
                        >
                          <span>Explore All</span>
                          <span>→</span>
                        </Link>
                      </div>

                      <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
                        <a
                          href="https://www.bharatleadsummit.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start space-x-3.5 p-2.5 rounded-xl hover:bg-purple-50/90 transition-all duration-200 group border border-transparent hover:border-purple-100"
                        >
                          <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform overflow-hidden p-1 border border-purple-200">
                            <img
                              src="/bls-logo.webp"
                              alt="BLS Logo"
                              className="w-full h-full object-contain rounded-lg"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-sm font-bold text-[#1E0C3D] group-hover:text-[#DE3F11] transition-colors flex items-center gap-1">
                                <span>BHARAT LEAD SUMMIT 2026</span>
                                <ExternalLink className="w-3.5 h-3.5 text-[#DE3F11]" />
                              </span>
                              <span className="text-[9px] bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white px-2 py-0.5 rounded-md font-extrabold uppercase shrink-0 shadow-xs">
                                Flagship
                              </span>
                            </div>
                            <div className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed truncate">
                              India's Annual Policy, Leadership & Viksit Bharat Summit
                            </div>
                          </div>
                        </a>

                        <Link
                          href="/programs?category=FDP%20%2F%20MDP%20%2F%20LDP%20%2F%20SDP%20Programmes"
                          className="flex items-start space-x-3.5 p-2.5 rounded-xl hover:bg-purple-50/90 transition-all duration-200 group border border-transparent hover:border-purple-100"
                        >
                          <div className="w-9 h-9 rounded-xl bg-purple-100/80 border border-purple-200/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                            <GraduationCap className="w-4 h-4 text-[#9C1256]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-sm font-bold text-[#1E0C3D] group-hover:text-[#DE3F11] transition-colors">
                                FDP / MDP / LDP / SDP
                              </span>
                              <span className="text-[9px] bg-purple-100 text-[#9C1256] border border-purple-200 px-2 py-0.5 rounded-md font-extrabold uppercase shrink-0">
                                Training
                              </span>
                            </div>
                            <div className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed truncate">
                              Faculty, Management, Leadership & Student Development Tracks
                            </div>
                          </div>
                        </Link>

                        <Link
                          href="/programs#vanguard-program"
                          className="flex items-start space-x-3.5 p-2.5 rounded-xl hover:bg-purple-50/90 transition-all duration-200 group border border-transparent hover:border-purple-100"
                        >
                          <div className="w-9 h-9 rounded-xl bg-purple-100/80 border border-purple-200/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                            <Award className="w-4 h-4 text-[#9C1256]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-sm font-bold text-[#1E0C3D] group-hover:text-[#DE3F11] transition-colors">
                                Vanguard Leadership Retreat
                              </span>
                              <span className="text-[9px] bg-purple-100 text-[#9C1256] border border-purple-200 px-2 py-0.5 rounded-md font-extrabold uppercase shrink-0">
                                Executive
                              </span>
                            </div>
                            <div className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed truncate">
                              Elite experiential governance, off-campus immersion & strategy
                            </div>
                          </div>
                        </Link>

                        <Link
                          href="/programs#energy-refresher-program"
                          className="flex items-start space-x-3.5 p-2.5 rounded-xl hover:bg-purple-50/90 transition-all duration-200 group border border-transparent hover:border-purple-100"
                        >
                          <div className="w-9 h-9 rounded-xl bg-[#DE3F11]/10 border border-[#DE3F11]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                            <Zap className="w-4 h-4 text-[#DE3F11]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-sm font-bold text-[#1E0C3D] group-hover:text-[#DE3F11] transition-colors">
                                Energy Refresher & Wellness Program
                              </span>
                              <span className="text-[9px] bg-[#DE3F11]/15 text-[#DE3F11] border border-[#DE3F11]/30 px-2 py-0.5 rounded-md font-extrabold uppercase shrink-0">
                                Vitality
                              </span>
                            </div>
                            <div className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed truncate">
                              Executive vitality, cognitive stamina & personal renewal
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/partners" className={navLinkClass("/partners")}>
                Partners
              </Link>

              <Link href="/about" className={navLinkClass("/about")}>
                About Us
              </Link>

              {/* Reports Dropdown */}
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

                {reportsDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50">
                    <div className="w-[360px] 3xl:w-[420px] rounded-2xl bg-white/95 backdrop-blur-2xl p-4 shadow-[0_25px_70px_-15px_rgba(30,12,61,0.3)] border border-purple-200/90 animate-in fade-in slide-in-from-top-2 duration-200 space-y-2">
                      <div className="flex items-center justify-between px-3 py-1 border-b border-purple-100/80 mb-1.5">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#9C1256]">
                          Official Publications
                        </span>
                        <Link
                          href="/reports"
                          className="text-xs font-bold text-[#DE3F11] hover:underline"
                        >
                          View All ({REPORTS_DATA.length})
                        </Link>
                      </div>

                      <div className="space-y-1 max-h-[300px] overflow-y-auto pr-1">
                        {REPORTS_DATA.map((report) => (
                          <a
                            key={report.id}
                            href={report.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-purple-50/80 transition-colors group"
                          >
                            <div className="flex items-center space-x-2.5 min-w-0">
                              <FileText className="w-4 h-4 text-[#9C1256] shrink-0 group-hover:scale-110 transition-transform" />
                              <span className="text-xs font-semibold text-slate-800 group-hover:text-[#DE3F11] transition-colors truncate">
                                {report.title}
                              </span>
                            </div>
                            <span className="text-[10px] text-[#9C1256] font-bold shrink-0 ml-2 bg-purple-100 px-2 py-0.5 rounded-md">
                              {report.fileSize}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/portal" className={navLinkClass("/portal")}>
                LEADS Portal
              </Link>
            </nav>

            {/* Right Action Bar */}
            <div className="flex items-center space-x-3 3xl:space-x-5">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 3xl:px-8 3xl:py-3.5 rounded-xl 3xl:rounded-2xl font-bold text-sm 3xl:text-lg bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
