"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { getInitialTheme, setThemeAttr, THEME_KEY, Theme } from "@/lib/theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    setThemeAttr(initial);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    setThemeAttr(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
  };

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full bg-brand-violet/10 border border-brand-violet/20 animate-pulse" />;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="relative p-2 rounded-full glass-panel hover:border-brand-gold/50 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-brand-gold"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-brand-violet group-hover:rotate-12 transition-transform duration-300" />
      ) : (
        <Sun className="w-5 h-5 text-brand-gold group-hover:rotate-45 transition-transform duration-300" />
      )}
    </button>
  );
}
