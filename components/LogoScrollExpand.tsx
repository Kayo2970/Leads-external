"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import PlaceholderBadge from "@/components/PlaceholderBadge";
import "./LogoScrollExpand.css";

const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);

const smoothstep = (edge0: number, edge1: number, x: number) => {
  const t = clamp((x - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
};

export interface LogoScrollExpandProps {
  logoSrc?: string;
  maskSrc?: string;
  scrollDistance?: number;
  holdDistance?: number;
  smoothing?: number;
  children: React.ReactNode;
  className?: string;
}

export const LogoScrollExpand: React.FC<LogoScrollExpandProps> = ({
  logoSrc = "/leads-white-logo.png",
  maskSrc = "/leads-mask.svg",
  scrollDistance = 1.0,
  holdDistance = 0.2,
  smoothing = 0.1,
  children,
  className = "",
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const curtainRef = useRef<HTMLDivElement | null>(null);
  const logoBoxRef = useRef<HTMLDivElement | null>(null);
  const maskGroupRef = useRef<SVGGElement | null>(null);
  const hintRef = useRef<HTMLDivElement | null>(null);

  const propsRef = useRef({
    scrollDistance,
    holdDistance,
    smoothing,
    logoSrc,
    maskSrc,
  });

  propsRef.current = {
    scrollDistance,
    holdDistance,
    smoothing,
    logoSrc,
    maskSrc,
  };

  const applyProgress = useCallback((p: number) => {
    const frame = frameRef.current;
    const curtain = curtainRef.current;
    const logoBox = logoBoxRef.current;
    const maskGroup = maskGroupRef.current;
    const hint = hintRef.current;
    if (!frame || !curtain || !logoBox) return;

    const e = smoothstep(0, 1, p);

    // Responsive initial logo size per screen width
    const w = typeof window !== "undefined" ? window.innerWidth : 1440;
    const h = typeof window !== "undefined" ? window.innerHeight : 900;

    let startSize = 440;
    if (w < 640) {
      // Mobile
      startSize = clamp(w * 0.75, 250, 310);
    } else if (w < 1024) {
      // Tablet
      startSize = clamp(w * 0.45, 360, 460);
    } else if (w < 1920) {
      // Laptop / Desktop
      startSize = clamp(w * 0.3, 420, 540);
    } else {
      // 4K
      startSize = clamp(w * 0.22, 600, 850);
    }

    logoBox.style.width = `${startSize}px`;
    logoBox.style.height = `${startSize}px`;

    // Flythrough: layer mask logo expands toward camera exposing the hero section
    const logoScale = 1 + Math.pow(e, 1.85) * 7.5;

    // Scale and position the white logo outline overlay
    logoBox.style.transform = `translate(-50%, -50%) scale(${logoScale})`;
    
    // Smoothly fade logo outline box as it expands beyond screen boundaries
    const logoBoxOpacity = 1 - smoothstep(0.4, 0.85, p);
    logoBox.style.opacity = `${logoBoxOpacity}`;

    // Synchronize SVG layer mask scale and center coordinates
    if (maskGroup) {
      const cx = w / 2;
      const cy = h / 2;
      // Base dimensions of logo inside SVG mask is 500x500
      const maskScale = (startSize / 500) * logoScale;
      maskGroup.setAttribute(
        "transform",
        `translate(${cx}, ${cy}) scale(${maskScale})`
      );
    }

    // Curtain opacity reduces smoothly as user scrolls, revealing the full hero section
    const curtainFade = smoothstep(0.0, 0.85, p);
    curtain.style.opacity = `${1 - curtainFade}`;
    curtain.style.display = curtainFade >= 1 ? "none" : "block";

    // Hero content subtly scales from 0.95 up to 1.0 and becomes fully interactive
    const frameScale = 0.95 + e * 0.05;
    frame.style.transform = `scale(${frameScale})`;
    frame.style.opacity = `${smoothstep(0.0, 0.25, p)}`;
    frame.style.pointerEvents = p > 0.2 ? "auto" : "none";

    // Scroll hint pill fades out early
    if (hint) {
      const hintFade = smoothstep(0, 0.1, p);
      hint.style.opacity = `${1 - hintFade}`;
      hint.style.transform = `translateX(-50%) translateY(${25 * hintFade}px)`;
    }
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!root || !track || !stage) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let current = 0;
    let target = 0;
    let stageH = 0;
    let running = false;

    const measure = () => {
      const c = propsRef.current;
      stageH = window.innerHeight;
      if (stageH <= 0) return;
      stage.style.height = `${stageH}px`;
      track.style.height = `${stageH * (1 + Math.max(0, c.scrollDistance) + Math.max(0, c.holdDistance))}px`;
    };

    const readProgress = () => {
      const c = propsRef.current;
      const span = stageH * Math.max(0.01, c.scrollDistance);
      const top = track.getBoundingClientRect().top;
      return clamp(-top / span, 0, 1);
    };

    const tick = () => {
      const c = propsRef.current;
      const k = c.smoothing <= 0 ? 1 : 1 - Math.exp(-1 / (60 * c.smoothing));
      current += (target - current) * k;
      if (Math.abs(target - current) < 0.0004) {
        current = target;
        running = false;
      }
      applyProgress(current);
      raf = running ? requestAnimationFrame(tick) : 0;
    };

    const kick = () => {
      if (running) return;
      running = true;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      target = readProgress();
      if (propsRef.current.smoothing <= 0 || reduceMotion) {
        current = target;
        applyProgress(current);
        return;
      }
      kick();
    };

    const onResize = () => {
      measure();
      target = readProgress();
      current = target;
      applyProgress(current);
    };

    measure();
    target = readProgress();
    current = target;
    applyProgress(current);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [applyProgress]);

  const handleScrollDown = useCallback(() => {
    if (trackRef.current) {
      const trackTop = trackRef.current.getBoundingClientRect().top + window.scrollY;
      const stageH = window.innerHeight;
      const c = propsRef.current;
      const targetY = trackTop + stageH * (c.scrollDistance + 0.15);
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div ref={rootRef} className={`logo-scroll-expand ${className}`}>
      <div ref={trackRef} className="logo-scroll-expand__track">
        <div ref={stageRef} className="logo-scroll-expand__stage">
          {/* Hero Content Section - 100% visible through logo mask and revealed on scroll */}
          <div ref={frameRef} className="logo-scroll-expand__frame">
            {children}
          </div>

          {/* Opening Splash Curtain: Royal Purple Backdrop with White Logo Layer Mask Cutout */}
          <div ref={curtainRef} className="logo-scroll-expand__curtain">
            {/* SVG Vector Layer Mask Cutout */}
            <svg className="logo-scroll-expand__mask-svg" width="100%" height="100%">
              <defs>
                <radialGradient id="leads-curtain-grad" cx="50%" cy="50%" r="75%">
                  <stop offset="0%" stopColor="#361C6A" />
                  <stop offset="60%" stopColor="#241147" />
                  <stop offset="100%" stopColor="#15082E" />
                </radialGradient>

                <mask
                  id="leads-logo-cutout-mask"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                >
                  {/* Opaque white rect keeps curtain visible */}
                  <rect width="100%" height="100%" fill="white" />

                  {/* Black logo shape group cuts out transparent hole exposing hero */}
                  <g ref={maskGroupRef}>
                    <image
                      href={maskSrc}
                      xlinkHref={maskSrc}
                      x="-250"
                      y="-250"
                      width="500"
                      height="500"
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </g>
                </mask>
              </defs>

              {/* Curtain Rectangle masked by white logo cutout */}
              <rect
                width="100%"
                height="100%"
                fill="url(#leads-curtain-grad)"
                mask="url(#leads-logo-cutout-mask)"
              />
            </svg>

            {/* White Logo Outline Overlay - Aligned with the Layer Mask */}
            <div ref={logoBoxRef} className="logo-scroll-expand__logo-box">
              <img
                src={logoSrc}
                alt="LEADS Next Gen Centre Logo Mask"
                className="w-full h-full object-contain brightness-0 invert filter drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]"
              />
            </div>

            {/* Clickable Scroll Down Indicator & Button (Accessibility Feature) */}
            <div ref={hintRef} className="logo-scroll-expand__scroll-hint">
              <button
                type="button"
                onClick={handleScrollDown}
                aria-label="Scroll or click here to explore website content"
                title="Scroll or click here to explore website"
                className="logo-scroll-expand__scroll-pill animate-pulse-down hover:scale-105 hover:border-[#DE3F11] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#DE3F11] focus:ring-offset-2 focus:ring-offset-[#1E0C3D]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#DE3F11]" />
                <span>Scroll or Click Here to Explore</span>
                <ChevronDown className="w-4 h-4 text-[#DE3F11] animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoScrollExpand;

