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
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const physicsRef = useRef<{
    engine: Matter.Engine;
    runner: Matter.Runner;
    animId: number;
    elements: { body: Matter.Body; elem: HTMLElement; w: number; h: number }[];
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

    // Prevent body scroll during physics scatter
    document.body.style.overflow = "hidden";

    const {
      Engine,
      World,
      Bodies,
      Body,
      Runner,
    } = Matter;

    const engine = Engine.create();
    // Strong gravity so everything falls completely off screen within 3 seconds
    engine.gravity.y = 1.35;

    // Notice: NO floor or walls added — elements will scatter and fall off the screen completely!

    // Select all interactive portal items marked for falling
    const items = document.querySelectorAll<HTMLElement>(".portal-fall-item");
    const physicsElements: {
      body: Matter.Body;
      elem: HTMLElement;
      w: number;
      h: number;
    }[] = [];

    items.forEach((elem) => {
      const rect = elem.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      // Create Matter physics body
      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        restitution: 0.5,
        friction: 0.05,
        frictionAir: 0.005, // low air drag so it plunges fast
        density: 0.002,
        angle: (Math.random() - 0.5) * 0.2,
      });

      // Dramatic scatter impulse: explode outwards in X and pop upwards in Y before plunging
      const scatterX = (Math.random() - 0.5) * 22; // strong left/right scatter
      const scatterY = -4 - Math.random() * 8;     // pop up into the air
      Body.setVelocity(body, { x: scatterX, y: scatterY });
      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.25); // rapid tumble

      // Fix element in place at current viewport coordinates
      elem.style.position = "fixed";
      elem.style.left = "0px";
      elem.style.top = "0px";
      elem.style.width = `${rect.width}px`;
      elem.style.height = `${rect.height}px`;
      elem.style.margin = "0px";
      elem.style.zIndex = "40";
      elem.style.boxSizing = "border-box";
      elem.style.transformOrigin = "center center";
      elem.style.pointerEvents = "none";
      elem.style.willChange = "transform, opacity";
      elem.style.boxShadow = "0 25px 50px rgba(0,0,0,0.6)";

      World.add(engine.world, body);
      physicsElements.push({ body, elem, w: rect.width, h: rect.height });
    });

    const runner = Runner.create();
    Runner.run(runner, engine);

    // RAF loop syncing DOM elements with physics bodies
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
      elements: physicsElements,
    };

    // Auto-redirect to ERP portal URL precisely after 3 seconds
    setTimeout(() => {
      window.location.href = ERP_PORTAL_URL;
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (physicsRef.current) {
        cancelAnimationFrame(physicsRef.current.animId);
        Matter.Runner.stop(physicsRef.current.runner);
        Matter.Composite.clear(physicsRef.current.engine.world, false);
        Matter.Engine.clear(physicsRef.current.engine);
      }
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#241147] text-white overflow-hidden">
      {/* ─────────────────────────────────────────────────────────────
          BACKGROUND LAYER: Live LEADS ERP Portal
          Shows https://leadsnextgencentre.online/ immediately in the bg
      ───────────────────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 w-full h-full z-0 transition-opacity duration-700 ease-out ${
          isFallen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <iframe
          src={ERP_PORTAL_URL}
          className="w-full h-full border-0"
          title="LEADS ERP Members Portal"
          onLoad={() => setIframeLoaded(true)}
          allow="clipboard-write; fullscreen"
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          PORTAL GATEWAY FOREGROUND
          When Login button is clicked, all elements scatter and fall off screen
      ───────────────────────────────────────────────────────────── */}
      <div
        ref={containerRef}
        className={`relative z-10 min-h-screen pt-32 pb-24 transition-colors duration-700 ${
          isFallen ? "pointer-events-none" : ""
        }`}
      >
        {/* Ambient background glow (fades out on collapse) */}
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gradient-to-r from-[#9C1256]/20 to-[#DE3F11]/20 blur-3xl pointer-events-none transition-opacity duration-500 ${
            isFallen ? "opacity-0" : "opacity-100"
          }`}
        />

        <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 relative">
          {/* Gateway Header */}
          <div className="text-center max-w-3xl 3xl:max-w-5xl mx-auto mb-16">
            <div className="portal-fall-item inline-flex items-center space-x-2 3xl:space-x-3 px-4 py-1.5 3xl:px-6 3xl:py-3 rounded-full bg-white/10 text-white border border-white/20 text-xs 3xl:text-lg font-semibold mb-6 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#DE3F11]" />
              <span>LEADS Enterprise Resource Platform</span>
            </div>

            <h1 className="portal-fall-item text-4xl sm:text-6xl 2xl:text-7xl 3xl:text-8xl font-extrabold text-white tracking-tight">
              LEADS Members ERP Portal
            </h1>
            <p className="portal-fall-item mt-4 3xl:mt-6 text-base sm:text-lg 2xl:text-xl 3xl:text-2xl text-[#E2D9F3] leading-relaxed">
              The integrated operational and resource platform for LEADS executive council, faculty leads, committee members, and student officers.
            </p>
          </div>

          {/* Main Launcher Card */}
          <div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto mb-20">
            <div className="portal-fall-item">
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
                <div className="p-8 sm:p-14 3xl:p-20 text-center relative overflow-hidden flex flex-col items-center justify-center">
                  <div className="w-16 h-16 3xl:w-20 3xl:h-20 rounded-2xl bg-[#361C6A] border border-[#DE3F11]/40 text-[#DE3F11] flex items-center justify-center mb-6 shadow-lg">
                    <Lock className="w-8 h-8 3xl:w-10 3xl:h-10 text-white" />
                  </div>

                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs 3xl:text-sm font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Enterprise Portal Active &amp; Deployed</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-extrabold text-white mb-3">
                    Authorized Executive Gateway
                  </h2>
                  <p className="text-sm sm:text-base 2xl:text-lg text-[#E2D9F3]/90 max-w-xl mx-auto mb-8 leading-relaxed">
                    Access secure event logistics, real-time budgets, council resolutions, and committee asset repositories with your official LEADS credentials.
                  </p>

                  {/* Physics Trigger Button */}
                  <button
                    onClick={triggerFallingPhysics}
                    type="button"
                    className="px-10 py-5 sm:px-12 sm:py-6 rounded-2xl font-extrabold text-lg sm:text-xl 2xl:text-2xl bg-gradient-to-r from-[#9C1256] via-[#DE3F11] to-[#9C1256] bg-size-200 text-white shadow-2xl hover:shadow-[0_0_35px_rgba(222,63,17,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-3 group cursor-pointer"
                  >
                    <Lock className="w-6 h-6" />
                    <span>Login for Members</span>
                    <Sparkles className="w-6 h-6 text-yellow-300 group-hover:rotate-12 transition-transform" />
                  </button>
                </div>
              </BorderGlow>
            </div>
          </div>

          {/* Modules Section Header */}
          <div className="text-center max-w-2xl 3xl:max-w-4xl mx-auto mb-10">
            <div className="portal-fall-item text-xs 3xl:text-base font-bold uppercase tracking-wider text-[#DE3F11] mb-1">
              Enterprise Feature Suite
            </div>
            <h2 className="portal-fall-item text-2xl sm:text-3xl 2xl:text-4xl font-extrabold text-white">
              Available Modules in LEADS ERP
            </h2>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 3xl:gap-8">
            {erpModules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div
                  key={idx}
                  className="portal-fall-item p-6 3xl:p-10 rounded-2xl bg-[#2A1454]/80 border border-white/10 hover:border-[#DE3F11]/50 hover:bg-[#361C6A]/60 transition-all duration-300 group"
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
    </div>
  );
}
