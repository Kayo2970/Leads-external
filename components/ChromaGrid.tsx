"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./ChromaGrid.css";

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string | null;
}

interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  columns?: number;
  rows?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

export const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = "",
  radius = 320,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
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
      image: "/images/leadership/kuldeep-raina.webp",
      title: "Prof. Kuldeep Kumar Raina",
      subtitle: "Honourable Vice-Chancellor",
      handle: "Patron (LEADS Centre)",
      borderColor: "#DE3F11",
      gradient: "linear-gradient(165deg, #9C1256, #241147)",
      url: "https://www.linkedin.com/in/dr-kuldeep-raina-b4207524",
    },
    {
      image: "/images/leadership/sharath-kumar.webp",
      title: "Dr. K. M. Sharath Kumar",
      subtitle: "Professor & Dean, FMC",
      handle: "Chief Adviser (LEADS Centre)",
      borderColor: "#DE3F11",
      gradient: "linear-gradient(165deg, #361C6A, #180A30)",
      url: "https://www.linkedin.com/in/dr-k-m-sharath-kumar-ph-d-80400714",
    },
    {
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
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!rootRef.current) return;
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    if (fadeRef.current) {
      gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    }
  };

  const handleLeave = () => {
    if (fadeRef.current) {
      gsap.to(fadeRef.current, {
        opacity: 1,
        duration: fadeOut,
        overwrite: true,
      });
    }
  };

  const handleCardClick = (url?: string | null) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleCardMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--cols": columns,
          "--rows": rows,
        } as React.CSSProperties
      }
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {data.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
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
          <div className="chroma-img-wrapper">
            <img src={c.image} alt={c.title} loading="lazy" />
          </div>
          <footer className="chroma-info">
            <h3 className="name">{c.title}</h3>
            {c.handle && <span className="handle">{c.handle}</span>}
            <p className="role">{c.subtitle}</p>
            {c.location && <span className="location">{c.location}</span>}
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default ChromaGrid;
