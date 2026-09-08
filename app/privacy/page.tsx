import React from "react";
import Link from "next/link";
import { Shield, Lock, Eye, FileText, CheckCircle2, UserCheck, AlertCircle, Mail, Globe } from "lucide-react";
import BorderGlow from "@/components/BorderGlow";

export const metadata = {
  title: "Privacy Policy | LEADS Next Gen Centre",
  description: "Official Privacy Policy of LEADS Next Gen Centre detailing our data collection, handling, and protection practices under DPDP Act 2023.",
};

export default function PrivacyPage() {
  const lastUpdated = "September 2026";

  return (
    <div className="bg-[#1E0C3D] text-white min-h-screen py-16 sm:py-24">
      {/* Header Banner */}
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border-[#DE3F11]/40 text-[#DE3F11] text-xs font-semibold uppercase tracking-wider mb-4">
          <Shield className="w-3.5 h-3.5" />
          <span>Governance & Compliance</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Privacy <span className="gold-gradient-text">Policy</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#E2D9F3] leading-relaxed">
          LEADS Next Gen Centre ("LEADS", "the Centre", "we", "us") is dedicated to protecting the privacy, security, and digital confidentiality of our students, executive delegates, summit attendees, partners, and online visitors.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-white/60">
          <span>Effective Date: {lastUpdated}</span>
          <span>•</span>
          <span>Jurisdiction: India (DPDP Act, 2023)</span>
          <span>•</span>
          <span>Collaboration: Faculty of Management and Commerce (FMC), RUAS</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section 1: Overview */}
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
              <FileText className="w-6 h-6" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">1. Scope and Applicability</h2>
            </div>
            <p className="text-sm sm:text-base text-[#E2D9F3] leading-relaxed">
              This Privacy Policy governs the collection, processing, storage, and transfer of personal data collected through the official LEADS public website, summit portals (including the Bharath Leadership Summit), event registrations, and ERP login gateways.
            </p>
            <p className="text-sm sm:text-base text-[#E2D9F3] leading-relaxed">
              By accessing our web portals or participating in our programmes, you acknowledge and agree to the practices outlined in this policy.
            </p>
          </div>
        </BorderGlow>

        {/* Section 2: Data We Collect */}
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
              <Eye className="w-6 h-6" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">2. Categories of Information We Collect</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#E2D9F3]">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white mb-2 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#DE3F11]" />
                  <span>Personal Identifiers</span>
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Full name, academic/institutional affiliation, professional designation, email address, phone number, and student registration ID submitted via contact forms or event registrations.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white mb-2 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#DE3F11]" />
                  <span>Summit & Workshop Data</span>
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Participation logs, masterclass attendance, certification eligibility, presentation submissions, and post-session feedback evaluations.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white mb-2 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#DE3F11]" />
                  <span>Technical & Device Telemetry</span>
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  IP address, browser type, operating system, device identifiers, session timestamps, and page engagement patterns collected to ensure portal performance and system stability.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white mb-2 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#DE3F11]" />
                  <span>Media & Photography</span>
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Official event photography, session audio/video recordings, and panel snapshots captured during open public sessions for archival and official centre proceedings.
                </p>
              </div>
            </div>
          </div>
        </BorderGlow>

        {/* Section 3: Legal Basis & Purpose */}
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
              <Lock className="w-6 h-6" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">3. Purpose of Processing & Legal Basis</h2>
            </div>
            <p className="text-sm sm:text-base text-[#E2D9F3] leading-relaxed">
              We process personal data strictly in compliance with the Digital Personal Data Protection Act (DPDP Act, 2023) and global best practices for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#E2D9F3]">
              <li>Administering academic, leadership, and non-technical skill upliftment initiatives.</li>
              <li>Issuing verified certificates of completion and official summit credentials.</li>
              <li>Providing secure authentication and role-based access to the LEADS ERP dashboard.</li>
              <li>Responding to stakeholder inquiries, corporate partnership proposals, and speaker invitations.</li>
              <li>Fulfilling statutory academic reporting and accreditation requirements with university authorities.</li>
            </ul>
          </div>
        </BorderGlow>

        {/* Section 4: Data Sharing & Zero Commercial Selling */}
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
              <UserCheck className="w-6 h-6" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">4. Data Sharing & Third-Party Protections</h2>
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#9C1256]/20 to-[#DE3F11]/20 border border-[#DE3F11]/30 text-white font-medium text-sm">
              LEADS Next Gen Centre enforces a strict zero-sale policy: We do not sell, rent, monetize, or broker personal attendee data to commercial marketers or unauthorized entities.
            </div>
            <p className="text-sm sm:text-base text-[#E2D9F3] leading-relaxed">
              Data is shared strictly on a need-to-know basis with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#E2D9F3]">
              <li><strong>Academic Administration:</strong> Faculty of Management and Commerce (FMC) and Ramaiah University of Applied Sciences (RUAS) for legitimate governance and academic accreditation.</li>
              <li><strong>Trusted Infrastructure Providers:</strong> Secure hosting platforms, transactional email gateways, and database backup servers operating under strict data processing agreements.</li>
              <li><strong>Legal & Regulatory Authorities:</strong> When compelled by valid judicial order or applicable Indian laws.</li>
            </ul>
          </div>
        </BorderGlow>

        {/* Section 5: Data Rights & Contact */}
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
              <AlertCircle className="w-6 h-6" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">5. Your Privacy Rights & Grievance Redressal</h2>
            </div>
            <p className="text-sm sm:text-base text-[#E2D9F3] leading-relaxed">
              Under applicable data protection legislation, you retain the right to:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-white">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">✓ Request a copy of your personal data held by LEADS</div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">✓ Request correction of incomplete or inaccurate data</div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">✓ Withdraw consent for optional communications</div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">✓ File a privacy grievance with our Data Officer</div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-[#E2D9F3]">
                For privacy requests, email: <span className="text-white font-bold">contact@leadsnextgen.in</span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white text-xs font-bold hover:scale-105 transition-transform"
              >
                Contact Data Desk
              </Link>
            </div>
          </div>
        </BorderGlow>
      </div>
    </div>
  );
}
