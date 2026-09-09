"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export interface AnimatedContentProps {
  children: React.ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  className?: string;
  onAnimationComplete?: () => void;
}

export default function AnimatedContent({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.6,
  ease = "power2.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  className = "",
  onAnimationComplete,
}: AnimatedContentProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Calculate initial translation based on direction and reverse
    const initialX = direction === "horizontal" ? (reverse ? -distance : distance) : 0;
    const initialY = direction === "vertical" ? (reverse ? -distance : distance) : 0;

    // Set initial GPU hardware-accelerated layout state
    gsap.set(el, {
      x: initialX,
      y: initialY,
      opacity: animateOpacity ? initialOpacity : 1,
      scale: scale,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(el, {
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              duration: duration,
              delay: delay,
              ease: ease,
              onComplete: () => {
                if (onAnimationComplete) onAnimationComplete();
              },
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    onAnimationComplete,
  ]);

  return (
    <div ref={containerRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
