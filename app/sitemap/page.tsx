import React from "react";
import Link from "next/link";
import {
  Map,
  Home,
  CalendarDays,
  GraduationCap,
  Handshake,
  Users,
  FileText,
  Lock,
  Mail,
  Scale,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import BorderGlow from "@/components/BorderGlow";

export const metadata = {
  title: "Site Map | LEADS Next Gen Centre",
  description:
    "Complete index of every page on the LEADS Next Gen Centre website — events, programs, partners, leadership, reports, and policies.",
};

interface SiteMapLink {
  label: string;
  href: string;
}

interface SiteMapSection {
  title: string;
  icon: React.ElementType;
  href: string;
  description: string;
  links?: SiteMapLink[];
}

const sections: SiteMapSection[] = [
  {
    title: "Home",
    icon: Home,
    href: "/",
    description: "Overview of LEADS Next Gen Centre, leadership spotlights, and featured programs.",
  },
  {
    title: "Events & Summits",
    icon: CalendarDays,
    href: "/events",
    description: "Full catalogue of conclaves, talk series, roundtables, and outreach activities.",
    links: [
      { label: "All Events", href: "/events" },
      { label: "Catalyst Leadership Talk Series", href: "/events?category=Catalyst%20Leadership%20Talk%20Series" },
      { label: "Expert Talks", href: "/events?category=Expert%20Talks" },
      { label: "Fireside Talks", href: "/events?category=Fireside%20Talks" },
      { label: "Boardroom Battles", href: "/events?category=Boardroom%20Battles" },
      { label: "Sustainability", href: "/events?category=Sustainability" },
      { label: "Outreach Activities", href: "/events?category=Outreach" },
    ],
  },
  {
    title: "Programs",
    icon: GraduationCap,
    href: "/programs",
    description: "Executive, academic, and capability-building programs across every track.",
    links: [
      { label: "All Programs", href: "/programs" },
      { label: "Conclaves & Policy Summits", href: "/programs?category=Conclaves%20%26%20Policy%20Summits" },
      { label: "Conferences & Seminars", href: "/programs?category=Conferences%20%26%20Seminars" },
      { label: "FDP / MDP / LDP / SDP Programmes", href: "/programs?category=FDP%20%2F%20MDP%20%2F%20LDP%20%2F%20SDP%20Programmes" },
      { label: "Vanguard Leadership Program", href: "/programs#vanguard-program" },
      { label: "Energy Refresher Program", href: "/programs#energy-refresher-program" },
    ],
  },
  {
    title: "Partners",
    icon: Handshake,
    href: "/partners",
    description: "Academic, government, and industry partners collaborating with LEADS.",
  },
  {
    title: "About Us",
    icon: Users,
    href: "/about",
    description: "Mission, patron & advisory board, faculty leads, and the full member directory.",
    links: [
      { label: "Board & Member Directory", href: "/about#members-directory-section" },
    ],
  },
  {
    title: "Impact Reports",
    icon: FileText,
    href: "/reports",
    description: "Annual impact reports and archived summit documentation.",
  },
  {
    title: "Member & ERP Portal",
    icon: Lock,
    href: "/portal",
    description: "Gateway to the internal task, finance, and member-management system.",
  },
  {
    title: "Contact Us",
    icon: Mail,
    href: "/contact",
    description: "Reach the LEADS team for partnerships, summit delegations, and general inquiries.",
  },
];

const legalLinks: SiteMapLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Engagement", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Accessibility Statement", href: "/accessibility" },
];

const externalLinks: SiteMapLink[] = [
  { label: "Bharat Lead Summit 2026", href: "https://www.bharatleadsummit.com/" },
  { label: "LEADS ERP Portal", href: "https://portal-leads.msruas.ac.in/" },
  { label: "Instagram", href: "https://www.instagram.com/leads_next_gen_ruas" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leads-next-gen-centre-ruas-700555327" },
];

export default function SiteMapPage() {
  return (
    <div className="bg-[#1E0C3D] text-white min-h-screen pt-36 sm:pt-44 pb-16 sm:pb-24">
      {/* Header Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border-[#DE3F11]/40 text-[#DE3F11] text-xs font-semibold uppercase tracking-wider mb-4">
          <Map className="w-3.5 h-3.5" />
          <span>Complete Site Index</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Site <span className="gold-gradient-text">Map</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#E2D9F3] leading-relaxed max-w-2xl">
          Every page on leadsnextgen.in in one place — a quick index for visitors and search engines alike.
        </p>
      </div>

      {/* Primary Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <BorderGlow
              key={section.href}
              edgeSensitivity={30}
              glowColor="330 85 50"
              backgroundColor="#241147"
              borderRadius={24}
              glowRadius={30}
              glowIntensity={0.7}
              colors={["#9C1256", "#DE3F11", "#361C6A"]}
              className="shadow-xl h-full"
            >
              <div className="p-6 sm:p-8 space-y-4 h-full flex flex-col">
                <div className="flex items-center space-x-3 text-[#DE3F11]">
                  <Icon className="w-6 h-6" />
                  <Link href={section.href} className="text-lg sm:text-xl font-bold text-white hover:text-[#DE3F11] transition-colors">
                    {section.title}
                  </Link>
                </div>
                <p className="text-sm text-[#E2D9F3] leading-relaxed">{section.description}</p>

                {section.links && (
                  <ul className="pt-2 border-t border-white/10 space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="inline-flex items-center space-x-1.5 text-xs sm:text-sm text-white/75 hover:text-[#DE3F11] transition-colors"
                        >
                          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </BorderGlow>
          );
        })}
      </div>

      {/* Legal & External Links */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <BorderGlow
          edgeSensitivity={30}
          glowColor="330 85 50"
          backgroundColor="#241147"
          borderRadius={24}
          glowRadius={30}
          glowIntensity={0.7}
          colors={["#9C1256", "#DE3F11", "#361C6A"]}
          className="shadow-xl"
        >
          <div className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center space-x-3 text-[#DE3F11]">
              <Scale className="w-6 h-6" />
              <h2 className="text-lg sm:text-xl font-bold text-white">Legal & Policies</h2>
            </div>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center space-x-1.5 text-sm text-white/75 hover:text-[#DE3F11] transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </BorderGlow>

        <BorderGlow
          edgeSensitivity={30}
          glowColor="330 85 50"
          backgroundColor="#241147"
          borderRadius={24}
          glowRadius={30}
          glowIntensity={0.7}
          colors={["#9C1256", "#DE3F11", "#361C6A"]}
          className="shadow-xl"
        >
          <div className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center space-x-3 text-[#DE3F11]">
              <ArrowUpRight className="w-6 h-6" />
              <h2 className="text-lg sm:text-xl font-bold text-white">Flagship Initiatives & Social</h2>
            </div>
            <ul className="space-y-2">
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-sm text-white/75 hover:text-[#DE3F11] transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </BorderGlow>
      </div>
    </div>
  );
}
