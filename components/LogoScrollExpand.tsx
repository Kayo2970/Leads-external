"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
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
  logoSrc = "/leads-logo.png",
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
  const hintRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const logoOverlayRef = useRef<HTMLDivElement | null>(null);

  const propsRef = useRef({
    scrollDistance,
    holdDistance,
    smoothing,
    maskSrc,
  });

  propsRef.current = {
    scrollDistance,
    holdDistance,
    smoothing,
    maskSrc,
  };

  const applyProgress = useCallback((p: number) => {
    const frame = frameRef.current;
    const hint = hintRef.current;
    const bg = bgRef.current;
    const logoOverlay = logoOverlayRef.current;
    if (!frame) return;

    const e = smoothstep(0, 1, p);

    // Responsive initial mask size calculated dynamically per screen width
    const w = typeof window !== "undefined" ? window.innerWidth : 1440;
    const h = typeof window !== "undefined" ? window.innerHeight : 900;
    const maxDim = Math.max(w, h);

    let startSize = 480;
    if (w < 640) {
      // Mobile: 78% of screen width, clamped between 260px and 330px
      startSize = clamp(w * 0.78, 260, 330);
    } else if (w < 1024) {
      // Tablet
      startSize = clamp(w * 0.48, 380, 500);
    } else if (w < 1920) {
      // Standard Desktop / Laptop
      startSize = clamp(w * 0.32, 450, 600);
    } else {
      // 2K / 4K Ultrawide
      startSize = clamp(w * 0.24, 650, 950);
    }

    // Dynamic zoom end size
    const endSize = Math.max(22000, maxDim * 14);
    const currentSize = startSize + (endSize - startSize) * Math.pow(e, 2.5);

    // Fade backdrop as camera zooms in
    if (bg) {
      const bgFade = smoothstep(0.4, 0.9, p);
      bg.style.opacity = `${1 - bgFade}`;
    }

    // Real transparent logo overlay scales and reduces opacity smoothly
    if (logoOverlay) {
      const logoFade = smoothstep(0.0, 0.42, p);
      const logoScale = 1 + e * 3.5;
      logoOverlay.style.width = `${startSize}px`;
      logoOverlay.style.height = `${startSize}px`;
      logoOverlay.style.opacity = `${1 - logoFade}`;
      logoOverlay.style.transform = `translate(-50%, -50%) scale(${logoScale})`;
      logoOverlay.style.display = logoFade >= 1 ? "none" : "flex";
    }

    // Camera flythrough - mask expands continuously and unlocks pointer events when open
    if (e >= 0.98) {
      frame.style.maskImage = "none";
      frame.style.webkitMaskImage = "none";
      frame.style.opacity = "1";
      frame.style.pointerEvents = "auto";
    } else {
      frame.style.maskImage = `url('${propsRef.current.maskSrc}')`;
      frame.style.webkitMaskImage = `url('${propsRef.current.maskSrc}')`;
      frame.style.maskSize = `${currentSize}px auto`;
      frame.style.webkitMaskSize = `${currentSize}px auto`;
      // Smoothly fade in the hero frame content as the camera zooms into the logo
      const frameFade = smoothstep(0.15, 0.65, p);
      frame.style.opacity = `${frameFade}`;
      frame.style.pointerEvents = e > 0.65 ? "auto" : "none";
    }

    if (hint) {
      const hintFade = smoothstep(0, 0.12, p);
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

  return (
    <div ref={rootRef} className={`logo-scroll-expand ${className}`}>
      <div ref={trackRef} className="logo-scroll-expand__track">
        <div ref={stageRef} className="logo-scroll-expand__stage">
          {/* Deep Backdrop behind the masked content */}
          <div ref={bgRef} className="logo-scroll-expand__bg" />

          {/* Masked Frame containing the hero content */}
          <div ref={frameRef} className="logo-scroll-expand__frame">
            {children}
          </div>

          {/* Transparent Logo Overlay that reduces opacity as you scroll */}
          <div ref={logoOverlayRef} className="logo-scroll-expand__logo-layer">
            <img
              src={logoSrc}
              alt="LEADS Next Gen Centre"
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>

          {/* Scroll Down Indicator */}
          <div ref={hintRef} className="logo-scroll-expand__scroll-hint">
            <div className="logo-scroll-expand__scroll-pill animate-pulse-down">
              <Sparkles className="w-3.5 h-3.5 text-[#DE3F11]" />
              <span>Scroll to Explore</span>
              <ChevronDown className="w-4 h-4 text-[#DE3F11] animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoScrollExpand;
