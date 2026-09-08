"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, Cookie, X, Sliders } from "lucide-react";

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
  timestamp: string;
}

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [functional, setFunctional] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("leads_cookie_consent");
      if (!saved) {
        // Show banner after brief delay
        const timer = setTimeout(() => setShowBanner(true), 1200);
        return () => clearTimeout(timer);
      } else {
        const parsed: CookiePreferences = JSON.parse(saved);
        setAnalytics(parsed.analytics ?? true);
        setFunctional(parsed.functional ?? true);
      }
    } catch {
      setShowBanner(true);
    }

    // Listen to custom event to reopen preferences from footer or legal pages
    const handleOpenModal = () => {
      setShowModal(true);
    };
    window.addEventListener("leads_open_cookie_preferences", handleOpenModal);
    return () => {
      window.removeEventListener("leads_open_cookie_preferences", handleOpenModal);
    };
  }, []);

  const saveConsent = (analyticsVal: boolean, functionalVal: boolean) => {
    const pref: CookiePreferences = {
      essential: true,
      analytics: analyticsVal,
      functional: functionalVal,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem("leads_cookie_consent", JSON.stringify(pref));
    } catch {}
    setShowBanner(false);
    setShowModal(false);
  };

  const handleAcceptAll = () => {
    setAnalytics(true);
    setFunctional(true);
    saveConsent(true, true);
  };

  const handleEssentialOnly = () => {
    setAnalytics(false);
    setFunctional(false);
    saveConsent(false, false);
  };

  const handleSaveCustom = () => {
    saveConsent(analytics, functional);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating Cookie Consent Banner */}
      {showBanner && !showModal && (
        <aside
          role="region"
          aria-label="Cookie Consent"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-500"
        >
          <div className="bg-[#241147]/95 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl text-white">
            <div className="flex items-start space-x-3.5 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#9C1256] to-[#DE3F11] flex items-center justify-center shrink-0 shadow-md">
                <Cookie className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white leading-snug">
                  Privacy & Cookie Preferences
                </h3>
                <p className="text-xs text-[#E2D9F3] mt-1 leading-relaxed">
                  We use cookies and telemetry to enhance navigation, analyze centre event participation, and ensure secure digital services in accordance with our{" "}
                  <Link href="/privacy" className="underline hover:text-[#DE3F11] transition-colors">
                    Privacy Policy
                  </Link>.
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-center gap-2 pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="w-full sm:w-auto flex-1 py-2.5 px-4 bg-gradient-to-r from-[#9C1256] to-[#DE3F11] hover:opacity-95 text-white text-xs font-bold rounded-xl shadow-md transition-transform active:scale-95 text-center"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={handleEssentialOnly}
                className="w-full sm:w-auto py-2.5 px-3 bg-white/10 hover:bg-white/20 text-[#E2D9F3] text-xs font-semibold rounded-xl border border-white/15 transition-colors text-center"
              >
                Essential Only
              </button>
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="w-full sm:w-auto py-2.5 px-3 hover:text-[#DE3F11] text-[#E2D9F3] text-xs font-medium transition-colors inline-flex items-center justify-center space-x-1"
                title="Customize preferences"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Customize</span>
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Customizable Preferences Modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="bg-[#1E0C3D] border border-white/20 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-white shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#9C1256] to-[#DE3F11] flex items-center justify-center text-white shadow-sm">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h2 id="cookie-modal-title" className="text-lg font-bold text-white">
                    Cookie & Data Settings
                  </h2>
                  <p className="text-xs text-[#E2D9F3]">LEADS Next Gen Centre Privacy Center</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-white/60 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#E2D9F3] mb-6 leading-relaxed">
              You have full control over the optional cookies and telemetry scripts we use on this website. Essential cookies cannot be turned off as they are required for security, routing, and portal launch functions.
            </p>

            {/* Cookie Categories */}
            <div className="space-y-4">
              {/* Essential */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-sm font-bold text-white">Strictly Necessary Cookies</h3>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Always Active
                      </span>
                    </div>
                    <p className="text-xs text-white/70 mt-1">
                      Required for site security, session maintenance, theme state, and ERP launchpad connectivity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">Analytics & Event Insights</h3>
                    <p className="text-xs text-white/70 mt-1">
                      Helps the Centre evaluate summit attendance patterns, page engagement, and report downloads.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={analytics}
                      onChange={(e) => setAnalytics(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#DE3F11]" />
                  </label>
                </div>
              </div>

              {/* Functional */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">Functional & Experience Preferences</h3>
                    <p className="text-xs text-white/70 mt-1">
                      Saves your UI preferences, search filters, and smooth motion settings.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={functional}
                      onChange={(e) => setFunctional(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#DE3F11]" />
                  </label>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="mt-6 text-xs text-[#E2D9F3]/80 flex items-center justify-between">
              <Link href="/cookies" className="hover:text-[#DE3F11] underline transition-colors">
                Read our full Cookie Policy →
              </Link>
              <Link href="/privacy" className="hover:text-[#DE3F11] underline transition-colors">
                Privacy Notice →
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleEssentialOnly}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-white/20 text-white hover:bg-white/10 text-xs font-semibold transition-colors"
              >
                Reject Optional
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#9C1256] to-[#DE3F11] hover:opacity-95 text-white text-xs font-bold shadow-lg transition-transform active:scale-95"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
