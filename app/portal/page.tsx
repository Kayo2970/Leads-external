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
  ExternalLink,
  RotateCcw,
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
    render?: Matter.Render;
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

    // Prevent body scroll during physics simulation
    document.body.style.overflow = "hidden";

    const {
      Engine,
      World,
      Bodies,
      Body,
      Runner,
      Mouse,
      MouseConstraint,
    } = Matter;

    const engine = Engine.create();
    // Gravity matching React Bits FallingText spec (0.84)
    engine.gravity.y = 0.84;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Floor and walls to keep elements within screen bounds
    const floorThickness = 80;
    const floor = Bodies.rectangle(
      width / 2,
      height + floorThickness / 2 - 20,
      width * 2,
      floorThickness,
      { isStatic: true, friction: 0.8, restitution: 0.3 }
    );
    const leftWall = Bodies.rectangle(
      -30,
      height / 2,
      60,
      height * 2,
      { isStatic: true }
    );
    const rightWall = Bodies.rectangle(
      width + 30,
      height / 2,
      60,
      height * 2,
      { isStatic: true }
    );

    World.add(engine.world, [floor, leftWall, rightWall]);

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
      // Skip invisible elements
      if (rect.width === 0 || rect.height === 0) return;

      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      // Create Matter physics body
      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        restitution: 0.45,
        friction: 0.15,
        frictionAir: 0.012,
        density: 0.0018,
        angle: (Math.random() - 0.5) * 0.12,
      });

      // Initial impulse & spin for realistic physical detachment
      Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 6,
        y: -1.5 - Math.random() * 2,
      });
      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.07);

      // Convert element to fixed position
      elem.style.position = "fixed";
      elem.style.left = "0px";
      elem.style.top = "0px";
      elem.style.width = `${rect.width}px`;
      elem.style.height = `${rect.height}px`;
      elem.style.margin = "0px";
      elem.style.zIndex = "40";
      elem.style.boxSizing = "border-box";
      elem.style.transformOrigin = "center center";
      elem.style.pointerEvents = "auto";
      elem.style.cursor = "grab";
      elem.style.willChange = "transform";
      elem.style.boxShadow = "0 20px 40px rgba(0,0,0,0.5)";

      World.add(engine.world, body);
      physicsElements.push({ body, elem, w: rect.width, h: rect.height });
    });

    // Mouse constraint for interactive dragging
    const mouse = Mouse.create(document.body);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 1.4, // matching React Bits mouseConstraintStiffness
        render: { visible: false },
      },
    });
    World.add(engine.world, mouseConstraint);

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
  };

  const resetFallingPhysics = () => {
    if (physicsRef.current) {
      const { engine, runner, animId, elements } = physicsRef.current;
      cancelAnimationFrame(animId);
      Matter.Runner.stop(runner);
      Matter.Composite.clear(engine.world, false);
      Matter.Engine.clear(engine);

      // Reset inline styles on all elements
      elements.forEach(({ elem }) => {
        elem.removeAttribute("style");
      });
      physicsRef.current = null;
    }
    document.body.style.overflow = "";
    setIsFallen(false);
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
    <div className="relative min-h-screen bg-[#241147] text-white overflow-x-hidden">
      {/* ─────────────────────────────────────────────────────────────
          BACKGROUND LAYER: Live LEADS ERP Portal
          Shows https://leadsnextgencentre.online/ directly in the bg
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
          FLOATING CONTROL BAR (Appears when elements fall down)
      ───────────────────────────────────────────────────────────── */}
      {isFallen && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#1A0B2E]/90 backdrop-blur-xl border border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
            <span>Portal Unlocked · Ready to Login</span>
          </div>
          <span className="text-white/20">|</span>
          <button
            onClick={resetFallingPhysics}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
            title="Restore page elements"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset View</span>
          </button>
          <a
            href={ERP_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#9C1256] to-[#DE3F11] hover:brightness-110 shadow-sm transition-all"
          >
            <span>Open Fullscreen</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          PORTAL GATEWAY FOREGROUND
          When Login button is clicked, elements tumble down with physics
      ───────────────────────────────────────────────────────────── */}
      <div
        ref={containerRef}
        className={`relative z-10 min-h-screen pt-32 pb-24 transition-colors duration-700 ${
          isFallen ? "pointer-events-none" : ""
        }`}
      >
        {/* Ambient background glow (fades out on collapse) */}
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gradient-to-r from-[#9C1256]/20 to-[#DE3F11]/20 blur-3xl pointer-events-none transition-opacity duration-700 ${
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
