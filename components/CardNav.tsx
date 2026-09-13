"use client";

import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";
import "./CardNav.css";

export interface CardNavLink {
  label: string;
  href: string;
  ariaLabel?: string;
  isExternal?: boolean;
}

export interface CardNavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
}

export interface CardNavProps {
  logo?: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  buttonText?: string;
  buttonHref?: string;
  onLinkClick?: () => void;
}

export const CardNav: React.FC<CardNavProps> = ({
  logo = "/ruas-logo.png",
  logoAlt = "LEADS Next Gen Centre",
  items,
  className = "",
  ease = "power3.out",
  baseColor = "rgba(255, 255, 255, 0.98)",
  menuColor = "#1E0C3D",
  buttonBgColor = "linear-gradient(to right, #9C1256, #DE3F11)",
  buttonTextColor = "#ffffff",
  buttonText = "Contact Us",
  buttonHref = "/contact",
  onLinkClick,
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const contentEl = navEl.querySelector(".card-nav-content") as HTMLElement | null;
    if (contentEl) {
      const wasVisible = contentEl.style.visibility;
      const wasPointerEvents = contentEl.style.pointerEvents;
      const wasPosition = contentEl.style.position;
      const wasHeight = contentEl.style.height;

      contentEl.style.visibility = "visible";
      contentEl.style.pointerEvents = "auto";
      contentEl.style.position = "static";
      contentEl.style.height = "auto";

      contentEl.offsetHeight;

      const topBar = 60;
      const padding = 16;
      const contentHeight = contentEl.scrollHeight;

      contentEl.style.visibility = wasVisible;
      contentEl.style.pointerEvents = wasPointerEvents;
      contentEl.style.position = wasPosition;
      contentEl.style.height = wasHeight;

      return topBar + contentHeight + padding;
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(cardsRef.current.filter(Boolean), { y: 35, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.35,
      ease,
    });

    tl.to(
      cardsRef.current.filter(Boolean),
      { y: 0, opacity: 1, duration: 0.35, ease, stagger: 0.06 },
      "-=0.15"
    );

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current || !navRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const closeMenu = () => {
    if (isExpanded) {
      const tl = tlRef.current;
      setIsHamburgerOpen(false);
      if (tl) {
        tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
        tl.reverse();
      } else {
        setIsExpanded(false);
      }
    }
    if (onLinkClick) onLinkClick();
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div className={`card-nav-container ${className}`}>
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? "open" : ""}`}
        style={{ backgroundColor: baseColor }}
      >
        <div className="card-nav-top">
          {/* Brand Logo Group */}
          <Link href="/" onClick={closeMenu} className="logo-container">
            <div className="flex items-center space-x-2">
              <img
                src="/ruas-logo.png"
                alt="Ramaiah University"
                className="h-7 w-auto object-contain"
              />
              <span className="h-6 w-[1px] bg-slate-300" />
              <img
                src="/leads-short-logo.png"
                alt="LEADS Next Gen"
                className="h-8 w-auto object-contain"
              />
            </div>
          </Link>

          <div className="flex items-center space-x-2">
            {/* Header Action Button */}
            <Link
              href={buttonHref}
              onClick={closeMenu}
              className="card-nav-cta-button"
              style={{
                background: buttonBgColor,
                color: buttonTextColor,
              }}
            >
              {buttonText}
            </Link>

            {/* Hamburger Animated Icon */}
            <div
              className={`hamburger-menu ${isHamburgerOpen ? "open" : ""}`}
              onClick={toggleMenu}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleMenu();
                }
              }}
              role="button"
              aria-label={isExpanded ? "Close menu" : "Open menu"}
              aria-expanded={isExpanded}
              tabIndex={0}
              style={{ color: menuColor }}
            >
              <div className="hamburger-line" />
              <div className="hamburger-line" />
            </div>
          </div>
        </div>

        {/* Animated Card Navigation Content */}
        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {(items || []).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card shadow-md"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links?.map((lnk, i) => {
                  if (lnk.isExternal || lnk.href.startsWith("http")) {
                    return (
                      <a
                        key={`${lnk.label}-${i}`}
                        className="nav-card-link"
                        href={lnk.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={lnk.ariaLabel || lnk.label}
                        onClick={closeMenu}
                      >
                        <ArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                        <span>{lnk.label}</span>
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={`${lnk.label}-${i}`}
                      className="nav-card-link"
                      href={lnk.href}
                      aria-label={lnk.ariaLabel || lnk.label}
                      onClick={closeMenu}
                    >
                      <ArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                      <span>{lnk.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
