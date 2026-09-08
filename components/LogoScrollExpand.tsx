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
  maskSrc = "/leads-mask.png",
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
    if (!frame) return;

    const e = smoothstep(0, 1, p);

    // Initial mask size 280px expanding to 5200px to fully reveal through logo cutout
    const startSize = 280;
    const endSize = 5200;
    const currentSize = startSize + (endSize - startSize) * Math.pow(e, 1.8);

    if (e >= 0.96) {
      frame.style.maskImage = "none";
      frame.style.webkitMaskImage = "none";
      frame.style.pointerEvents = "auto";
    } else {
      frame.style.maskImage = `url('${propsRef.current.maskSrc}')`;
      frame.style.webkitMaskImage = `url('${propsRef.current.maskSrc}')`;
      frame.style.maskSize = `${currentSize}px auto`;
      frame.style.webkitMaskSize = `${currentSize}px auto`;
      frame.style.pointerEvents = e > 0.6 ? "auto" : "none";
    }

    if (hint) {
      const hintFade = smoothstep(0, 0.15, p);
      hint.style.opacity = `${1 - hintFade}`;
      hint.style.transform = `translateX(-50%) translateY(${20 * hintFade}px)`;
    }

    if (bg) {
      const bgFade = smoothstep(0.5, 0.95, p);
      bg.style.opacity = `${1 - bgFade}`;
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
