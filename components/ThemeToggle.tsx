"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { getInitialTheme, setThemeAttr, THEME_KEY, Theme } from "@/lib/theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
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
    return <div className="w-9 h-9 rounded-full bg-[#361C6A]/50 border border-[#9C1256]/30 animate-pulse" />;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="relative p-2 rounded-full glass-panel hover:border-[#DE3F11]/60 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#DE3F11]"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
      ) : (
        <Sun className="w-5 h-5 text-[#DE3F11] group-hover:rotate-45 transition-transform duration-300" />
      )}
    </button>
  );
}
