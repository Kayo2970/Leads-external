"use client";

import React, { useEffect, useState } from "react";
import BorderGlow from "@/components/BorderGlow";
import {
  ShieldCheck,
  ExternalLink,
  Lock,
  Server,
  Layers,
  Users,
  DollarSign,
  Calendar,
  FileCheck,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Database,
} from "lucide-react";

export default function PortalGatewayPage() {
  const [portalOnline, setPortalOnline] = useState<boolean | null>(null);
  const portalUrl = "http://localhost:3030";

  useEffect(() => {
    // Check if local ERP server on port 3030 is reachable
    const checkPortal = async () => {
      try {
        await fetch("http://localhost:3030", { mode: "no-cors" });
        setPortalOnline(true);
      } catch (err) {
        setPortalOnline(false);
      }
    };
    checkPortal();
    const interval = setInterval(checkPortal, 5000);
    return () => clearInterval(interval);
  }, []);

  const erpModules = [
    {
      title: "Events & Task Engine",
      desc: "Task assignments, Kanban board, countdown timers, and event masterclass logs.",
      icon: Calendar,
      color: "from-[#9C1256] to-[#DE3F11]",
    },
    {
      title: "Budget & Finance System",
      desc: "Expense tracking, sponsorship invoicing, ledger approvals, and audit trails.",
      icon: DollarSign,
      color: "from-[#361C6A] to-[#9C1256]",
    },
    {
      title: "Member Directory & RBAC",
      desc: "Multi-tier role privileges, superuser administration, and team council directories.",
      icon: Users,
      color: "from-[#DE3F11] to-[#FF8C61]",
    },
    {
      title: "Design & Form Submissions",
      desc: "Creative workflow approvals, asset archives, registration forms, and QR verification.",
      icon: Layers,
      color: "from-[#2A1454] to-[#361C6A]",
    },
    {
      title: "Meeting Minutes & Attendance",
      desc: "Executive council quorum, resolution records, biometric/PIN check-ins, and voting.",
      icon: FileCheck,
      color: "from-[#9C1256] to-[#DE3F11]",
    },
    {
      title: "System Audit & Analytics",
      desc: "Real-time query logging, security events, backup rotation, and system health metrics.",
      icon: Database,
      color: "from-[#361C6A] to-[#241147]",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#241147] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gradient-to-r from-[#9C1256]/20 to-[#DE3F11]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 relative z-10">
        {/* Gateway Header */}
        <div className="text-center max-w-3xl 3xl:max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 3xl:space-x-3 px-4 py-1.5 3xl:px-6 3xl:py-3 rounded-full bg-white/10 text-white border border-white/20 text-xs 3xl:text-lg font-semibold mb-6 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#DE3F11]" />
            <span>LEADS Internal Enterprise Resource Gateway</span>
          </div>

          <h1 className="text-4xl sm:text-6xl 2xl:text-7xl 3xl:text-8xl font-extrabold text-white tracking-tight">
            LEADS Member & ERP Portal
          </h1>
          <p className="mt-4 3xl:mt-6 text-base sm:text-lg 2xl:text-xl 3xl:text-2xl text-[#E2D9F3] leading-relaxed">
            The private operational platform for LEADS executive council, faculty leads, committee members, and student officers.
          </p>
        </div>

        {/* Main Launcher Card */}
        <div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto mb-20">
          <BorderGlow
            edgeSensitivity={35}
            glowColor="330 85 50"
            backgroundColor="#2A1454"
            borderRadius={32}
            glowRadius={50}
            glowIntensity={1.2}
            colors={["#9C1256", "#DE3F11", "#FFFFFF"]}
            animated={true}
            className="shadow-2xl"
          >
            <div className="p-8 sm:p-14 3xl:p-20 relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-b border-white/10 pb-8 mb-8">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-xs 3xl:text-base font-bold uppercase tracking-wider text-[#DE3F11]">
                      Local Enterprise Subsystem
                    </span>
                    <span className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{portalOnline === false ? "Ready to Launch" : "Subsystem Active"}</span>
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-extrabold text-white">
                    Direct ERP Console Access
                  </h2>
                  <p className="text-sm 2xl:text-base text-[#E2D9F3]/80 mt-1">
                    Port: <code className="px-2 py-0.5 rounded bg-black/40 text-brand-gold font-mono">http://localhost:3030</code>
                  </p>
                </div>

                {/* Launch Button */}
                <a
                  href={portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 2xl:px-10 2xl:py-5 rounded-2xl font-bold text-base 2xl:text-xl bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-3 group shrink-0"
                >
                  <Lock className="w-5 h-5 2xl:w-6 2xl:h-6" />
                  <span>Launch ERP Portal</span>
                  <ArrowRight className="w-5 h-5 2xl:w-6 2xl:h-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Quick CLI launch instructions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs 2xl:text-sm text-[#E2D9F3]/90 bg-[#1A0A33] p-5 3xl:p-8 rounded-2xl border border-white/10">
                <div>
                  <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                    <Server className="w-4 h-4 text-[#DE3F11]" />
                    <span>How to Start ERP Subsystem</span>
                  </div>
                  <p className="text-[#E2D9F3]/70">Run from workspace root:</p>
                  <code className="block mt-1 p-2 rounded bg-black/50 text-emerald-400 font-mono">
                    npm run dev:portal
                  </code>
                </div>

                <div>
                  <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#DE3F11]" />
                    <span>Create Superuser / Reset Password</span>
                  </div>
                  <p className="text-[#E2D9F3]/70">Run interactive superuser script:</p>
                  <code className="block mt-1 p-2 rounded bg-black/50 text-emerald-400 font-mono">
                    npm run setup:portal
                  </code>
                </div>
              </div>
            </div>
          </BorderGlow>
        </div>

        {/* Modules Grid */}
        <div className="text-center max-w-2xl 3xl:max-w-4xl mx-auto mb-10">
          <div className="text-xs 3xl:text-base font-bold uppercase tracking-wider text-[#DE3F11] mb-1">
            Enterprise Feature Suite
          </div>
          <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-extrabold text-white">
            Available Modules in LEADS ERP
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 3xl:gap-8">
          {erpModules.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <div
                key={idx}
                className="p-6 3xl:p-10 rounded-2xl bg-[#2A1454]/80 border border-white/10 hover:border-[#DE3F11]/50 hover:bg-[#361C6A]/60 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 3xl:w-16 3xl:h-16 rounded-2xl bg-gradient-to-r ${mod.color} flex items-center justify-center text-white mb-4 3xl:mb-6 shadow-md group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 3xl:w-8 3xl:h-8 text-white" />
                </div>
                <h3 className="text-lg 2xl:text-xl 3xl:text-2xl font-bold text-white mb-2">
                  {mod.title}
                </h3>
                <p className="text-xs 2xl:text-sm 3xl:text-base text-[#E2D9F3]/80 leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
