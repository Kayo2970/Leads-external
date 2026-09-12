"use client";

import React from "react";
import Link from "next/link";
import { Cookie, Sliders, Shield, Info, CheckCircle2, Lock, Sparkles } from "lucide-react";
import BorderGlow from "@/components/BorderGlow";

export default function CookiesPage() {
  const lastUpdated = "September 2026";

  const handleOpenPreferences = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("leads_open_cookie_preferences"));
    }
  };

  return (
    <div className="bg-[#1E0C3D] text-white min-h-screen pt-36 sm:pt-44 pb-16 sm:pb-24">
      {/* Header Banner */}
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border-[#DE3F11]/40 text-[#DE3F11] text-xs font-semibold uppercase tracking-wider mb-4">
          <Cookie className="w-3.5 h-3.5" />
          <span>Cookie & Tracking Policy</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Cookie <span className="gold-gradient-text">Policy</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#E2D9F3] leading-relaxed">
          Learn how LEADS Next Gen Centre uses cookies, local web storage, and telemetry to ensure site performance, secure access, and optimize your browsing experience.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/60">
          <span>Effective Date: {lastUpdated}</span>
          <span>•</span>
          <button
            type="button"
            onClick={handleOpenPreferences}
            className="inline-flex items-center space-x-1.5 text-[#DE3F11] hover:underline font-bold"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Open Cookie Preferences Manager</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section 1: What Are Cookies */}
        <BorderGlow
          edgeSensitivity={30}
          glowColor="330 85 50"
          backgroundColor="#241147"
          borderRadius={24}
          glowRadius={30}
          glowIntensity={0.7}
          colors={["#9C1256", "#DE3F11", "#361C6A"]}
          className="shadow-xl"
        >
          <div className="p-6 sm:p-10 space-y-4">
            <div className="flex items-center space-x-3 text-[#DE3F11]">
              <Info className="w-6 h-6" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">1. What Are Cookies and Storage Technologies?</h2>
            </div>
            <p className="text-sm sm:text-base text-[#E2D9F3] leading-relaxed">
              Cookies are small alphanumeric text files placed on your computer or mobile device when you access websites. Along with local storage (`localStorage`), cookies help web applications remember your authentication state, interface preferences (such as Dark/Light mode), and telemetry.
            </p>
            <p className="text-sm sm:text-base text-[#E2D9F3] leading-relaxed">
              LEADS uses cookies strictly for legitimate operational, security, and educational research analytics in compliance with the Digital Personal Data Protection Act (DPDP Act, 2023).
            </p>
          </div>
        </BorderGlow>

        {/* Section 2: Cookie Breakdown Table */}
        <BorderGlow
          edgeSensitivity={30}
          glowColor="330 85 50"
          backgroundColor="#241147"
          borderRadius={24}
          glowRadius={30}
          glowIntensity={0.7}
          colors={["#9C1256", "#DE3F11", "#361C6A"]}
          className="shadow-xl"
        >
          <div className="p-6 sm:p-10 space-y-6">
            <div className="flex items-center space-x-3 text-[#DE3F11]">
              <Lock className="w-6 h-6" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">2. Categories of Cookies We Deploy</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-[#E2D9F3] border-collapse">
                <thead>
                  <tr className="border-b border-white/15 text-white">
                    <th className="py-3 px-4 font-bold">Category</th>
                    <th className="py-3 px-4 font-bold">Key Function</th>
                    <th className="py-3 px-4 font-bold">Examples</th>
                    <th className="py-3 px-4 font-bold">Default Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Strictly Necessary</td>
                    <td className="py-3 px-4">Enables routing, CSRF defense, ERP session bridge, and theme state.</td>
                    <td className="py-3 px-4 font-mono text-xs text-[#DE3F11]">leads_theme_pref, leads_cookie_consent</td>
                    <td className="py-3 px-4 font-bold text-emerald-400">Always Active</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Analytics & Metrics</td>
                    <td className="py-3 px-4">Aggregates anonymized visitor traffic, summit report downloads, and page dwell time.</td>
                    <td className="py-3 px-4 font-mono text-xs text-[#DE3F11]">_ga_leads, leads_event_telemetry</td>
                    <td className="py-3 px-4 text-amber-300">User Opt-in</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Functional Preferences</td>
                    <td className="py-3 px-4">Remembers directory filters, organogram zoom states, and modal dismissals.</td>
                    <td className="py-3 px-4 font-mono text-xs text-[#DE3F11]">leads_ui_settings</td>
                    <td className="py-3 px-4 text-amber-300">User Opt-in</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </BorderGlow>

        {/* Section 3: Managing and Revoking Consent */}
        <BorderGlow
          edgeSensitivity={30}
          glowColor="330 85 50"
          backgroundColor="#241147"
          borderRadius={24}
          glowRadius={30}
          glowIntensity={0.7}
          colors={["#9C1256", "#DE3F11", "#361C6A"]}
          className="shadow-xl"
        >
          <div className="p-6 sm:p-10 space-y-4">
            <div className="flex items-center space-x-3 text-[#DE3F11]">
              <Sliders className="w-6 h-6" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">3. How to Manage or Revoke Your Consent</h2>
            </div>
            <p className="text-sm sm:text-base text-[#E2D9F3] leading-relaxed">
              You can modify or withdraw your cookie consent at any time. When you reject non-essential cookies, all optional analytical scripts and telemetry cookies are automatically suppressed.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={handleOpenPreferences}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white font-bold text-xs sm:text-sm shadow-lg hover:scale-105 transition-transform flex items-center justify-center space-x-2"
              >
                <Sliders className="w-4 h-4" />
                <span>Adjust Cookie Preferences Now</span>
              </button>

              <Link
                href="/privacy"
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/15 transition-colors text-center"
              >
                View Full Privacy Policy
              </Link>
            </div>
          </div>
        </BorderGlow>
      </div>
    </div>
  );
}
