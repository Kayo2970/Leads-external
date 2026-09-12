import React from "react";
import Link from "next/link";
import { Eye, CheckCircle2, HeartHandshake, Laptop, Volume2, Keyboard, Compass, Mail } from "lucide-react";
import BorderGlow from "@/components/BorderGlow";

export const metadata = {
  title: "Accessibility Statement | LEADS Next Gen Centre",
  description: "Official Digital Accessibility Statement of LEADS Next Gen Centre adhering to WCAG 2.1 Level AA accessibility standards.",
};

export default function AccessibilityPage() {
  const lastUpdated = "September 2026";

  return (
    <div className="bg-[#1E0C3D] text-white min-h-screen pt-36 sm:pt-44 pb-16 sm:pb-24">
      {/* Header Banner */}
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border-[#DE3F11]/40 text-[#DE3F11] text-xs font-semibold uppercase tracking-wider mb-4">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Inclusion & Accessibility</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Accessibility <span className="gold-gradient-text">Statement</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#E2D9F3] leading-relaxed">
          LEADS Next Gen Centre is deeply committed to ensuring digital accessibility for all individuals, regardless of ability, neurodiversity, or assistive technologies used.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-white/60">
          <span>Standard: WCAG 2.1 Level AA</span>
          <span>•</span>
          <span>Last Audited: {lastUpdated}</span>
          <span>•</span>
          <span>Platform: Web Content & Summit Portals</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section 1: Our Commitment */}
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
              <Eye className="w-6 h-6" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">1. Conformance Status & Standards</h2>
            </div>
            <p className="text-sm sm:text-base text-[#E2D9F3] leading-relaxed">
              We continually optimize our user interfaces to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong> published by the World Wide Web Consortium (W3C). These standards define how to make web content more accessible for individuals with visual, auditory, motor, or cognitive disabilities.
            </p>
          </div>
        </BorderGlow>

        {/* Section 2: Accessibility Features */}
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
              <Keyboard className="w-6 h-6" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">2. Implemented Accessibility Features</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-[#E2D9F3]">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white mb-1.5 flex items-center space-x-2">
                  <Keyboard className="w-4 h-4 text-[#DE3F11]" />
                  <span>Full Keyboard Navigation</span>
                </h3>
                <p className="text-white/70">
                  All interactive menus, event modals, filters, and portal launchers are fully operable via Tab, Enter, and Arrow navigation with visible focus indicators.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white mb-1.5 flex items-center space-x-2">
                  <Volume2 className="w-4 h-4 text-[#DE3F11]" />
                  <span>Screen Reader Semantic ARIA</span>
                </h3>
                <p className="text-white/70">
                  Descriptive alt text for all images, semantic HTML5 landmarks (`&lt;main&gt;`, `&lt;nav&gt;`, `&lt;footer&gt;`), and ARIA attributes for modal dialogs.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white mb-1.5 flex items-center space-x-2">
                  <Laptop className="w-4 h-4 text-[#DE3F11]" />
                  <span>High Contrast & Scalable Fonts</span>
                </h3>
                <p className="text-white/70">
                  Calibrated text contrast ratios exceeding 4.5:1 against backgrounds, paired with scalable rem/fluid typography up to 200% zoom without loss of content.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white mb-1.5 flex items-center space-x-2">
                  <Compass className="w-4 h-4 text-[#DE3F11]" />
                  <span>Reduced Motion Compatibility</span>
                </h3>
                <p className="text-white/70">
                  All rich WebGL waves and GSAP animations respect the system-level `prefers-reduced-motion` flag to protect vestibular-sensitive users.
                </p>
              </div>
            </div>
          </div>
        </BorderGlow>

        {/* Section 3: Feedback & Support */}
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
              <Mail className="w-6 h-6" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">3. Accessibility Feedback & Assistance</h2>
            </div>
            <p className="text-sm sm:text-base text-[#E2D9F3] leading-relaxed">
              If you experience any difficulty accessing any content on this website or require accommodations for any LEADS masterclass or summit, our accessibility coordinators are ready to assist you.
            </p>
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-[#E2D9F3]">
                Contact Accessibility Support: <span className="text-white font-bold">contact@leadsnextgen.in</span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white text-xs font-bold hover:scale-105 transition-transform"
              >
                Request Assistance
              </Link>
            </div>
          </div>
        </BorderGlow>
      </div>
    </div>
  );
}
