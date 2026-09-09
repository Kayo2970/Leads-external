"use client";

import React, { useState, useRef, useEffect } from "react";
import BorderGlow from "@/components/BorderGlow";
import FallingText from "./FallingText";
import Matter from "matter-js";
import {
  ShieldCheck,
  Lock,
  Layers,
  Users,
  DollarSign,
  Calendar,
  FileCheck,
  Database,
  Sparkles,
} from "lucide-react";

const ERP_PORTAL_URL = "https://leadsnextgencentre.online/";

export default function PortalGatewayPage() {
  const [isFallen, setIsFallen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const physicsRef = useRef<{
    engine: Matter.Engine;
    runner: Matter.Runner;
    animId: number;
    overlay: HTMLDivElement;
  } | null>(null);

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

  const triggerFallingPhysics = () => {
    if (isFallen) return;
    setIsFallen(true);

    const isMobile = window.innerWidth < 768;

    // Prevent scrollbar layout shift when locking page scroll
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Dedicated full-screen overlay covering the viewport cleanly
    const overlay = document.createElement("div");
    overlay.className = "fixed inset-0 w-screen h-[100dvh] z-[9999] pointer-events-none overflow-hidden";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100dvh";
    overlay.style.zIndex = "9999";
    overlay.style.pointerEvents = "none";
    overlay.style.overflow = "hidden";
    document.body.appendChild(overlay);

    const {
      Engine,
      World,
      Bodies,
      Body,
      Runner,
    } = Matter;

    const engine = Engine.create();
    engine.gravity.y = isMobile ? 1.8 : 1.6;

    // Batch Step 1: Read all bounding rects first to prevent layout trashing
    const rawItems = Array.from(document.querySelectorAll<HTMLElement>(".portal-fall-item"));
    const measurements = rawItems
      .map((elem) => {
        const rect = elem.getBoundingClientRect();
        return { elem, rect };
      })
      .filter(
        ({ rect }) =>
          rect.width > 0 &&
          rect.height > 0 &&
          rect.bottom >= -100 &&
          rect.top <= window.innerHeight + 250
      );

    // Batch Step 2: Build physics bodies & DOM clones without layout jump
    const fragment = document.createDocumentFragment();
    const physicsElements: {
      body: Matter.Body;
      elem: HTMLElement;
      w: number;
      h: number;
    }[] = [];

    measurements.forEach(({ elem, rect }) => {
      const clone = elem.cloneNode(true) as HTMLElement;
      clone.classList.remove("portal-fall-item");

      // Strip all CSS transitions/animations to prevent frame interpolation glitches
      clone.style.position = "absolute";
      clone.style.left = "0px";
      clone.style.top = "0px";
      clone.style.width = `${rect.width}px`;
      clone.style.height = `${rect.height}px`;
      clone.style.margin = "0px";
      clone.style.boxSizing = "border-box";
      clone.style.transformOrigin = "center center";
      clone.style.transition = "none";
      clone.style.animation = "none";
      clone.style.willChange = "transform";
      clone.style.boxShadow = "0 20px 40px rgba(0,0,0,0.6)";
      clone.style.pointerEvents = "none";

      fragment.appendChild(clone);

      // Exact pixel center (0px teleport offset)
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      // Realistic physics body starting exactly at rest position
      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        restitution: 0.25 + Math.random() * 0.25,
        friction: 0.05,
        frictionAir: 0.005 + Math.random() * 0.008,
        density: 0.002,
        angle: (Math.random() - 0.5) * 0.1,
      });

      // Smooth outward scatter velocity
      const scatterAngle = (Math.random() - 0.5) * Math.PI * 0.7;
      const scatterPower = Math.random() * (isMobile ? 8 : 16) + 4;
      const scatterX = Math.sin(scatterAngle) * scatterPower;
      const scatterY = -Math.abs(Math.cos(scatterAngle)) * (isMobile ? 5 : 9) - 3;
      const spinVelocity = (Math.random() - 0.5) * (isMobile ? 0.2 : 0.35);

      Body.setVelocity(body, { x: scatterX, y: scatterY });
      Body.setAngularVelocity(body, spinVelocity);

      World.add(engine.world, body);
      physicsElements.push({ body, elem: clone, w: rect.width, h: rect.height });
    });

    overlay.appendChild(fragment);

    // Batch Step 3: Hide original elements seamlessly after clones are attached
    measurements.forEach(({ elem }) => {
      elem.style.visibility = "hidden";
    });

    const runner = Runner.create();
    Runner.run(runner, engine);

    let animId: number;
    const tick = () => {
      physicsElements.forEach(({ body, elem, w, h }) => {
        const { x, y } = body.position;
        const angle = body.angle;
        elem.style.transform = `translate3d(${x - w / 2}px, ${y - h / 2}px, 0px) rotate(${angle}rad)`;
      });
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);

    physicsRef.current = {
      engine,
      runner,
      animId,
      overlay,
    };

    // Fast, seamless navigation after 2.0 seconds
    setTimeout(() => {
      window.location.href = ERP_PORTAL_URL;
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (physicsRef.current) {
        cancelAnimationFrame(physicsRef.current.animId);
        Matter.Runner.stop(physicsRef.current.runner);
        Matter.Composite.clear(physicsRef.current.engine.world, false);
        Matter.Engine.clear(physicsRef.current.engine);
        if (physicsRef.current.overlay && physicsRef.current.overlay.parentNode) {
          physicsRef.current.overlay.parentNode.removeChild(physicsRef.current.overlay);
        }
      }
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#241147] text-white overflow-hidden">
      {/* ─────────────────────────────────────────────────────────────
          BACKGROUND LAYER: Live LEADS ERP Portal
          Takes over the FULL screen (covering Nav & Footer) when triggered
      ───────────────────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 w-screen h-[100dvh] z-[90] transition-opacity duration-700 ease-out bg-[#1A0B2E] ${
          isFallen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <iframe
          src={ERP_PORTAL_URL}
          className="w-full h-full border-0"
          title="LEADS ERP Members Portal"
          allow="clipboard-write; fullscreen"
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          PORTAL GATEWAY FOREGROUND
      ───────────────────────────────────────────────────────────── */}
      <div
        ref={containerRef}
        className="relative z-10 min-h-screen pt-28 sm:pt-32 pb-24"
      >
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gradient-to-r from-[#9C1256]/20 to-[#DE3F11]/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 relative">
          {/* Gateway Header */}
          <div className="text-center max-w-3xl 3xl:max-w-5xl mx-auto mb-12 sm:mb-16">
            <div className="portal-fall-item inline-flex items-center space-x-2 3xl:space-x-3 px-4 py-1.5 3xl:px-6 3xl:py-3 rounded-full bg-white/10 text-white border border-white/20 text-xs 3xl:text-lg font-semibold mb-6 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#DE3F11]" />
              <span>LEADS Enterprise Resource Platform</span>
            </div>

            <h1 className="portal-fall-item text-3xl sm:text-6xl 2xl:text-7xl 3xl:text-8xl font-extrabold text-white tracking-tight leading-tight">
              LEADS Members ERP Portal
            </h1>
            <p className="portal-fall-item mt-4 3xl:mt-6 text-sm sm:text-lg 2xl:text-xl 3xl:text-2xl text-[#E2D9F3] leading-relaxed">
              The integrated operational and resource platform for LEADS executive council, faculty leads, committee members, and student officers.
            </p>
          </div>

          {/* Main Launcher Card with independent fall items */}
          <div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto mb-16 sm:mb-20">
            <BorderGlow
              edgeSensitivity={35}
              glowColor="330 85 50"
              backgroundColor="#2A1454"
              borderRadius={32}
              glowRadius={50}
              glowIntensity={1.2}
              colors={["#9C1256", "#DE3F11", "#FFFFFF"]}
              animated={!isFallen}
              className="shadow-2xl"
            >
              <div className="p-6 sm:p-14 3xl:p-20 text-center relative overflow-hidden flex flex-col items-center justify-center">
                <div className="portal-fall-item w-14 h-14 sm:w-16 sm:h-16 3xl:w-20 3xl:h-20 rounded-2xl bg-[#361C6A] border border-[#DE3F11]/40 text-[#DE3F11] flex items-center justify-center mb-6 shadow-lg">
                  <Lock className="w-7 h-7 sm:w-8 sm:h-8 3xl:w-10 3xl:h-10 text-white" />
                </div>

                <div className="portal-fall-item inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs 3xl:text-sm font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Enterprise Portal Active &amp; Deployed</span>
                </div>

                <h2 className="portal-fall-item text-xl sm:text-3xl 2xl:text-4xl font-extrabold text-white mb-3">
                  Authorized Executive Gateway
                </h2>
                <p className="portal-fall-item text-xs sm:text-base 2xl:text-lg text-[#E2D9F3]/90 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
                  Access secure event logistics, real-time budgets, council resolutions, and committee asset repositories with your official LEADS credentials.
                </p>

                {/* Physics Trigger Button */}
                <button
                  onClick={triggerFallingPhysics}
                  type="button"
                  className="portal-fall-item w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-6 rounded-2xl font-extrabold text-base sm:text-xl 2xl:text-2xl bg-gradient-to-r from-[#9C1256] via-[#DE3F11] to-[#9C1256] bg-size-200 text-white shadow-2xl hover:shadow-[0_0_35px_rgba(222,63,17,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-3 group cursor-pointer"
                >
                  <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Login for Members</span>
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 group-hover:rotate-12 transition-transform" />
                </button>
              </div>
            </BorderGlow>
          </div>

          {/* Modules Section Header */}
          <div className="text-center max-w-2xl 3xl:max-w-4xl mx-auto mb-8 sm:mb-10">
            <div className="portal-fall-item text-xs 3xl:text-base font-bold uppercase tracking-wider text-[#DE3F11] mb-1">
              Enterprise Feature Suite
            </div>
            <h2 className="portal-fall-item text-xl sm:text-3xl 2xl:text-4xl font-extrabold text-white">
              Available Modules in LEADS ERP
            </h2>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 3xl:gap-8">
            {erpModules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div
                  key={idx}
                  className="portal-fall-item p-5 sm:p-6 3xl:p-10 rounded-2xl bg-[#2A1454]/80 border border-white/10 hover:border-[#DE3F11]/50 hover:bg-[#361C6A]/60 transition-all duration-300 group"
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 3xl:w-16 3xl:h-16 rounded-2xl bg-gradient-to-r ${mod.color} flex items-center justify-center text-white mb-3 sm:mb-4 3xl:mb-6 shadow-md group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 3xl:w-8 3xl:h-8 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg 2xl:text-xl 3xl:text-2xl font-bold text-white mb-1.5 sm:mb-2">
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
    </div>
  );
}
