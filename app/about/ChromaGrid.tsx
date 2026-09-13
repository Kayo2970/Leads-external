"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "@/components/ChromaGrid.css";
import PlaceholderBadge from "@/components/PlaceholderBadge";
import { generateNumberedPlaceholderSvg } from "@/lib/placeholders";

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string | null;
  placeholderId?: number;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  columns?: number;
  rows?: number;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = "",
  columns = 3,
  rows = 1,
  radius = 675,
  damping = 1.25,
  fadeOut = 1.4,
  ease = "power3.out",
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const fadeRef = useRef<HTMLDivElement | null>(null);

  const demo: ChromaItem[] = [
    {
      image: "https://i.pravatar.cc/300?img=1",
      title: "Sarah Johnson",
      subtitle: "Frontend Developer",
      handle: "@sarahjohnson",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://github.com/sarahjohnson",
    },
    {
      image: "https://i.pravatar.cc/300?img=2",
      title: "Mike Chen",
      subtitle: "Backend Engineer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen",
    },
  ];

  const data = items && items.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    el.style.setProperty("--r", `${radius}px`);

    const setX = gsap.quickTo(el, "--x", { duration: damping, ease: ease, unit: "px" });
    const setY = gsap.quickTo(el, "--y", { duration: damping, ease: ease, unit: "px" });

    const handlePointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setX(x);
      setY(y);

      if (fadeRef.current) {
        gsap.to(fadeRef.current, { opacity: 1, duration: 0.3, ease: ease });
      }
    };

    const handlePointerLeave = () => {
      if (fadeRef.current) {
        gsap.to(fadeRef.current, { opacity: 0, duration: fadeOut, ease: ease });
      }
    };

    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [radius, damping, fadeOut, ease]);

  const handleCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleCardClick = (url?: string | null) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={
        {
          "--cols": columns,
          "--rows": rows,
          "--r": `${radius}px`,
        } as React.CSSProperties
      }
    >
      {data.map((c, i) => {
        const phId = c.placeholderId;
        const svgFallback = phId
          ? generateNumberedPlaceholderSvg({
              id: phId,
              title: c.title,
              subtitle: c.subtitle,
              category: c.handle,
            })
          : "";

        return (
          <article
            key={i}
            className="chroma-card relative"
            onMouseMove={handleCardMove}
            onClick={() => handleCardClick(c.url)}
            style={
              {
                "--card-border": c.borderColor || "#DE3F11",
                "--card-gradient":
                  c.gradient ||
                  (i % 2 === 0
                    ? "linear-gradient(165deg, #361C6A, #180A30)"
                    : "linear-gradient(165deg, #2A1454, #120726)"),
                cursor: c.url ? "pointer" : "default",
              } as React.CSSProperties
            }
          >
            <div className="chroma-img-wrapper relative">
              <img
                src={c.image}
                onError={(e) => {
                  if (svgFallback) {
                    (e.target as HTMLImageElement).src = svgFallback;
                  }
                }}
                alt={c.title}
                loading="lazy"
              />
              {phId && (
                <PlaceholderBadge id={phId} position="top-left" className="scale-90 origin-top-left" />
              )}
            </div>
            <footer className="chroma-info">
              <h3 className="name">{c.title}</h3>
              {c.handle && <span className="handle">{c.handle}</span>}
              <p className="role">{c.subtitle}</p>
              {c.location && <span className="location">{c.location}</span>}
            </footer>
          </article>
        );
      })}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default ChromaGrid;
