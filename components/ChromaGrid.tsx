"use client";

import React, { useRef, useEffect } from "react";
import "./ChromaGrid.css";
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
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const fadeRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setX = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setY = useRef<any>(null);
  const pos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const demo: ChromaItem[] = [
    {
      placeholderId: 41,
      image: "/images/leadership/kuldeep-raina.webp",
      title: "Prof. Kuldeep Kumar Raina",
      subtitle: "Honourable Vice-Chancellor",
      handle: "Patron (LEADS Centre)",
      borderColor: "#DE3F11",
      gradient: "linear-gradient(165deg, #9C1256, #241147)",
      url: "https://www.linkedin.com/in/dr-kuldeep-raina-b4207524",
    },
    {
      placeholderId: 42,
      image: "/images/leadership/sharath-kumar.webp",
      title: "Dr. K. M. Sharath Kumar",
      subtitle: "Professor & Dean, FMC",
      handle: "Chief Adviser (LEADS Centre)",
      borderColor: "#DE3F11",
      gradient: "linear-gradient(165deg, #361C6A, #180A30)",
      url: "https://www.linkedin.com/in/dr-k-m-sharath-kumar-ph-d-80400714",
    },
    {
      placeholderId: 43,
      image: "/images/leadership/subhadeep-mukherjee.webp",
      title: "Dr. Subhadeep Mukherjee",
      subtitle: "Associate Professor, FMC",
      handle: "Centre Head (LEADS Centre)",
      borderColor: "#DE3F11",
      gradient: "linear-gradient(165deg, #9C1256, #241147)",
      url: "https://www.linkedin.com/in/dr-subhadeep-mukherjee-aa78a182",
    },
  ];

  const data = items && items.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      pos.current = { x, y };

      if (setX.current) setX.current(x);
      if (setY.current) setY.current(y);
    };

    el.addEventListener("pointermove", handlePointerMove);
    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  const handleCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleLeave = () => {
    if (fadeRef.current) {
      fadeRef.current.style.opacity = "0";
    }
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
        } as React.CSSProperties
      }
      onPointerLeave={handleLeave}
    >
      {data.map((c, i) => {
        const phId = c.placeholderId || 41 + i;
        const svgFallback = generateNumberedPlaceholderSvg({
          id: phId,
          title: c.title,
          subtitle: c.subtitle,
          category: c.handle,
        });

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
                  (e.target as HTMLImageElement).src = svgFallback;
                }}
                alt={c.title}
                loading="lazy"
              />
              <PlaceholderBadge id={phId} position="top-left" className="scale-90 origin-top-left" />
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
