"use client";

import React, { useEffect, useRef } from "react";

interface ThreadsProps {
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
}

export default function Threads({
  amplitude = 1,
  distance = 0,
  enableMouseInteraction = true,
}: ThreadsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableMouseInteraction || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Reduced motion check
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Line configurations
    const lineCount = 18;
    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        step += 0.008 * amplitude;
      }

      for (let i = 0; i < lineCount; i++) {
        ctx.beginPath();
        const progress = i / lineCount;
        const offset = i * 25 + distance;

        // Gradient for each line switching between Royal Violet, Soft Violet & Warm Gold
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        if (i % 3 === 0) {
          gradient.addColorStop(0, "rgba(54, 27, 106, 0.05)");
          gradient.addColorStop(0.5, "rgba(122, 77, 210, 0.45)");
          gradient.addColorStop(1, "rgba(212, 165, 55, 0.2)");
        } else if (i % 3 === 1) {
          gradient.addColorStop(0, "rgba(212, 165, 55, 0.1)");
          gradient.addColorStop(0.5, "rgba(212, 165, 55, 0.5)");
          gradient.addColorStop(1, "rgba(54, 27, 106, 0.3)");
        } else {
          gradient.addColorStop(0, "rgba(122, 77, 210, 0.2)");
          gradient.addColorStop(0.5, "rgba(54, 27, 106, 0.4)");
          gradient.addColorStop(1, "rgba(122, 77, 210, 0.1)");
        }

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5 + progress * 1.5;

        // Wave curve calculation
        const startY = (height / (lineCount + 1)) * (i + 1);
        ctx.moveTo(0, startY);

        const cp1x = width * 0.3 + Math.sin(step + progress * 4) * 80;
        const cp1y =
          startY + Math.cos(step * 1.2 + i) * 60 + (mouseY - height / 2) * 0.1 * (1 - progress);

        const cp2x = width * 0.7 + Math.cos(step * 0.8 + progress * 3) * 90;
        const cp2y =
          startY - Math.sin(step + i) * 70 + (mouseX - width / 2) * 0.08 * progress;

        const endY = startY + Math.sin(step + progress * 2) * 30;

        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, width, endY);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [amplitude, distance, enableMouseInteraction]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-700"
    />
  );
}
