import React from "react";
import Link from "next/link";
import { FileCode2, Scale, BookOpen, AlertTriangle, ShieldCheck, CheckCircle2, Award } from "lucide-react";
import BorderGlow from "@/components/BorderGlow";

export const metadata = {
  title: "Terms of Engagement | LEADS Next Gen Centre",
  description: "Official Terms of Engagement, event participation rules, code of conduct, and intellectual property policies for LEADS Next Gen Centre.",
};

export default function TermsPage() {
  const lastUpdated = "September 2026";

  return (
    <div className="bg-[#1E0C3D] text-white min-h-screen pt-36 sm:pt-44 pb-16 sm:pb-24">
      {/* Header Banner */}
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border-[#DE3F11]/40 text-[#DE3F11] text-xs font-semibold uppercase tracking-wider mb-4">
          <Scale className="w-3.5 h-3.5" />
          <span>Legal Framework & Terms</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Terms of <span className="gold-gradient-text">Engagement</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#E2D9F3] leading-relaxed">
          Welcome to the official digital platform and programmes of LEADS Next Gen Centre. These Terms of Engagement govern your access to our website, event registrations, masterclasses, and internal member portals.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-white/60">
          <span>Effective Date: {lastUpdated}</span>
          <span>•</span>
          <span>Governing Law: Karnataka, India</span>
          <span>•</span>
          <span>Institutional Partner: Faculty of Management and Commerce (FMC), RUAS</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section 1: Agreement to Terms */}
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
              <FileCode2 className="w-6 h-6" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">1. Acceptance of Terms</h2>
            </div>
            <p className="text-sm sm:text-base text-[#E2D9F3] leading-relaxed">
              By accessing, browsing, or utilizing any portion of this website, or by enrolling in any summit, workshop, competition, or fellowship offered by LEADS Next Gen Centre, you enter into a binding agreement with LEADS and agree to abide fully by these Terms of Engagement.
            </p>
            <p className="text-sm sm:text-base text-[#E2D9F3] leading-relaxed">
              If you do not agree with any provision of these terms, you must refrain from using this website and from registering for our programmes.
            </p>
          </div>
        </BorderGlow>

        {/* Section 2: Code of Conduct & Academic Integrity */}
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
              <ShieldCheck className="w-6 h-6" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">2. Centre Code of Conduct & Participant Standards</h2>
            </div>
            <p className="text-sm sm:text-base text-[#E2D9F3] leading-relaxed">
              As a centre dedicated to ethical leadership and skill upliftment, all delegates, student leaders, speakers, and portal users must uphold the highest standards of integrity:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-[#E2D9F3]">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white mb-1.5 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#DE3F11]" />
                  <span>Respect & Non-Discrimination</span>
                </h3>
                <p className="text-white/70">
                  Zero tolerance for harassment, discrimination, hate speech, or unprofessional conduct across physical and virtual forums.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white mb-1.5 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#DE3F11]" />
                  <span>Academic Honesty</span>
                </h3>
                <p className="text-white/70">
                  All workshop submissions, case study entries, and competition pitch decks must represent original, authentic student/delegate work.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white mb-1.5 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#DE3F11]" />
                  <span>Authentic Registration</span>
                </h3>
                <p className="text-white/70">
                  Delegates must provide accurate credentials and university/corporate affiliations when registering for summits or certification tracks.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white mb-1.5 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#DE3F11]" />
                  <span>Credential Confidentiality</span>
                </h3>
                <p className="text-white/70">
                  Internal ERP accounts, portal passwords, and session passcodes must not be shared with unauthorized third parties.
                </p>
              </div>
            </div>
          </div>
        </BorderGlow>

        {/* Section 3: Intellectual Property */}
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
              <Award className="w-6 h-6" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">3. Intellectual Property & Program Materials</h2>
            </div>
            <p className="text-sm sm:text-base text-[#E2D9F3] leading-relaxed">
              All materials published on this website, including but not limited to the LEADS trademark, summit logos, brand marks, official impact reports, presentation slide decks, whitepapers, video recordings, and UI software interfaces are the exclusive intellectual property of LEADS Next Gen Centre or its collaborating bodies.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#E2D9F3]">
              <li>You may download public impact reports and proceedings for non-commercial personal, educational, or scholarly evaluation.</li>
              <li>You may not reproduce, redistribute, monetize, or create derivative commercial works from centre curriculum without prior written authorization.</li>
            </ul>
          </div>
        </BorderGlow>

        {/* Section 4: Limitation of Liability */}
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
              <AlertTriangle className="w-6 h-6" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">4. Disclaimers & Limitation of Liability</h2>
            </div>
            <p className="text-sm sm:text-base text-[#E2D9F3] leading-relaxed">
              This digital platform and associated materials are provided on an "as is" and "as available" basis without warranty of any kind. While LEADS strives to maintain 100% accuracy of event schedules, speaker lineups, and academic information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#E2D9F3]">
              <li>Event schedules, venue allocations, and guest speakers are subject to modification based on institutional requirements.</li>
              <li>To the fullest extent permissible by law, LEADS Next Gen Centre and its associated university departments shall not be liable for any direct, indirect, incidental, or consequential damages arising from site access or event participation.</li>
            </ul>
          </div>
        </BorderGlow>

        {/* Section 5: Governing Law & Jurisdiction */}
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
              <BookOpen className="w-6 h-6" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">5. Governing Law & Dispute Resolution</h2>
            </div>
            <p className="text-sm sm:text-base text-[#E2D9F3] leading-relaxed">
              These Terms of Engagement shall be governed by and construed in accordance with the laws of the Republic of India. Any dispute or claim arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka, India.
            </p>
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-[#E2D9F3]">
                For legal inquiries or clarifications: <span className="text-white font-bold">contact@leadsnextgen.in</span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white text-xs font-bold hover:scale-105 transition-transform"
              >
                Inquire With Centre
              </Link>
            </div>
          </div>
        </BorderGlow>
      </div>
    </div>
  );
}
