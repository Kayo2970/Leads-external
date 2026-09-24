import React from "react";
import BorderGlow from "@/components/BorderGlow";
import {
  Mail,
  MapPin,
  Building2,
  Clock,
  Phone,
  MessageCircle,
  ExternalLink,
  Shield,
  Calendar,
  Sparkles,
  Handshake,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDFBFF] text-[#1E0C3D]">
      {/* SECTION 1 [PURPLE]: HERO HEADER */}
      <section className="pt-36 sm:pt-44 pb-20 3xl:pt-52 bg-[#361C6A] text-white relative overflow-hidden">
        {/* Subtle background decorative light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#9C1256]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/20 text-xs font-semibold mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#DE3F11]" />
            <span>Connect With LEADS Team</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Get in Touch With Us
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#E2D9F3] max-w-2xl mx-auto leading-relaxed">
            Reach out directly for institutional partnerships, summit delegations, leadership programs, or general inquiries. Our team is here to assist you.
          </p>
        </div>
      </section>

      {/* SECTION 2: PRIMARY QUICK ACTIONS */}
      <section className="py-16 sm:py-20 -mt-10 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Phone / Voice Call */}
          <BorderGlow
            edgeSensitivity={30}
            glowColor="330 85 50"
            backgroundColor="#FFFFFF"
            borderRadius={24}
            glowRadius={30}
            glowIntensity={1.0}
            colors={["#9C1256", "#DE3F11", "#361C6A"]}
            animated={true}
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#9C1256] to-[#DE3F11] flex items-center justify-center text-white shadow-md">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1E0C3D]">Direct Phone Call</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Call our desk during university working hours for immediate assistance.
                  </p>
                </div>
                <div className="text-base sm:text-lg font-bold text-[#361C6A]">
                  +91 891 013 3283
                </div>
              </div>
              <a
                href="tel:+918910133283"
                className="inline-flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-xl bg-purple-50 hover:bg-[#361C6A] text-[#361C6A] hover:text-white font-semibold text-sm transition-colors duration-200 border border-purple-200 hover:border-transparent group"
              >
                <span>Call Now</span>
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </BorderGlow>

          {/* WhatsApp Direct */}
          <BorderGlow
            edgeSensitivity={30}
            glowColor="140 85 45"
            backgroundColor="#FFFFFF"
            borderRadius={24}
            glowRadius={30}
            glowIntensity={1.0}
            colors={["#25D366", "#128C7E", "#361C6A"]}
            animated={true}
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-md">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1E0C3D]">WhatsApp Message</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Fast inquiries, summit questions, or quick coordination with our coordinators.
                  </p>
                </div>
                <div className="text-base sm:text-lg font-bold text-[#1E0C3D]">
                  +91 891 013 3283
                </div>
              </div>
              <a
                href="https://wa.me/918910133283"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-xl bg-emerald-50 hover:bg-[#25D366] text-emerald-800 hover:text-white font-semibold text-sm transition-colors duration-200 border border-emerald-200 hover:border-transparent group"
              >
                <span>Open WhatsApp</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </BorderGlow>

          {/* Direct Email */}
          <BorderGlow
            edgeSensitivity={30}
            glowColor="330 85 50"
            backgroundColor="#FFFFFF"
            borderRadius={24}
            glowRadius={30}
            glowIntensity={1.0}
            colors={["#9C1256", "#DE3F11", "#361C6A"]}
            animated={true}
            className="shadow-lg hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1"
          >
            <div className="p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#361C6A] to-[#9C1256] flex items-center justify-center text-white shadow-md">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1E0C3D]">Official Email</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    For formal proposals, institutional tie-ups, registrations, and official communication.
                  </p>
                </div>
                <div className="text-base sm:text-lg font-bold text-[#361C6A] truncate">
                  leads.ngc@msruas.ac.in
                </div>
              </div>
              <a
                href="mailto:leads.ngc@msruas.ac.in"
                className="inline-flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-xl bg-purple-50 hover:bg-[#9C1256] text-[#9C1256] hover:text-white font-semibold text-sm transition-colors duration-200 border border-purple-200 hover:border-transparent group"
              >
                <span>Send Email</span>
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </BorderGlow>
        </div>
      </section>

      {/* SECTION 3: DETAILED CENTRE DIRECTORY & CAMPUS DETAILS */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Centre Location & Timings (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <BorderGlow
              edgeSensitivity={30}
              glowColor="330 85 50"
              backgroundColor="#FFFFFF"
              borderRadius={28}
              glowRadius={35}
              glowIntensity={1.0}
              colors={["#9C1256", "#DE3F11", "#361C6A"]}
              animated={true}
              className="shadow-xl"
            >
              <div className="p-6 sm:p-10 space-y-8">
                <div className="flex items-center justify-between border-b border-purple-100 pb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-[#1E0C3D]">Centre Information</h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Campus office details and official operating schedule
                    </p>
                  </div>
                  <div className="p-2 rounded-xl bg-purple-50 text-[#9C1256] shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-6 text-sm text-slate-700">
                  {/* Campus Location */}
                  <div className="flex items-start space-x-4">
                    <div className="p-2.5 rounded-xl bg-purple-50 text-[#9C1256] shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-[#1E0C3D] text-base">Campus Location & Address</div>
                      <div className="text-slate-600 leading-relaxed">
                        Faculty of Management and Commerce (FMC),<br />
                        M. S. Ramaiah University of Applied Sciences,<br />
                        Gnanagangothri Campus, New BEL Road, MSR Nagar, Bengaluru, Karnataka 560054
                      </div>
                      <div className="pt-2">
                        <a
                          href="https://maps.google.com/?q=Faculty+of+Management+and+Commerce+RUAS+Bengaluru"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#9C1256] hover:text-[#DE3F11] transition-colors"
                        >
                          <span>Open in Google Maps</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="p-2.5 rounded-xl bg-purple-50 text-[#9C1256] shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-[#1E0C3D] text-base">Working Hours</div>
                      <div className="text-slate-600">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-slate-800">Monday – Friday:</span>
                          <span>09:00 AM – 05:30 PM IST</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="font-medium text-slate-800">Saturday:</span>
                          <span>By prior appointment / session schedule</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="font-medium text-slate-800">Sunday & University Holidays:</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Institutional Collaboration */}
                  <div className="flex items-start space-x-4">
                    <div className="p-2.5 rounded-xl bg-purple-50 text-[#9C1256] shrink-0 mt-0.5">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-[#1E0C3D] text-base">Institutional Collaboration</div>
                      <div className="text-slate-600 leading-relaxed">
                        Developed in collaboration with Faculty of Management and Commerce (FMC), M. S. Ramaiah University of Applied Sciences.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BorderGlow>
          </div>

          {/* Flagship Inquiries & Socials (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Flagship Summit Box */}
            <BorderGlow
              edgeSensitivity={30}
              glowColor="330 85 50"
              backgroundColor="#FFFFFF"
              borderRadius={24}
              glowRadius={30}
              glowIntensity={1.0}
              colors={["#9C1256", "#DE3F11", "#361C6A"]}
              animated={true}
              className="shadow-md"
            >
              <div className="bg-gradient-to-br from-purple-50/80 via-white to-orange-50/40 p-6 sm:p-7 rounded-3xl space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#9C1256] to-[#DE3F11] flex items-center justify-center text-white shadow-sm shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#1E0C3D]">
                      BHARAT LEAD SUMMIT 2026
                    </h4>
                    <p className="text-xs text-[#9C1256] font-semibold">
                      Flagship Leadership Gathering
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For summit registrations, speaker nominations, corporate sponsorships, and university delegation queries, visit our summit portal or email us directly.
                </p>
                <div className="pt-2">
                  <a
                    href="https://www.bharatleadsummit.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-white bg-gradient-to-r from-[#9C1256] to-[#DE3F11] px-4 py-2.5 rounded-xl shadow hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    <span>Visit Bharat Lead Summit</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </BorderGlow>

            {/* Social Channels & Online Presence */}
            <BorderGlow
              edgeSensitivity={30}
              glowColor="330 85 50"
              backgroundColor="#FFFFFF"
              borderRadius={24}
              glowRadius={30}
              glowIntensity={1.0}
              colors={["#9C1256", "#DE3F11", "#361C6A"]}
              animated={true}
              className="shadow-md"
            >
              <div className="p-6 sm:p-7 space-y-4">
                <h4 className="text-base font-bold text-[#1E0C3D] flex items-center space-x-2">
                  <Handshake className="w-5 h-5 text-[#9C1256]" />
                  <span>Connect on Social Media</span>
                </h4>
                <p className="text-xs text-slate-600">
                  Stay updated with our latest workshops, programs, speaker announcements, and impact reports:
                </p>

                <div className="space-y-2.5 pt-2">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/leads_next_gen_ruas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-purple-50/60 hover:bg-[#E1306C]/10 border border-purple-100 hover:border-[#E1306C]/40 text-slate-700 hover:text-[#E1306C] transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <svg className="w-4 h-4 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                      <span className="text-xs font-semibold">@leads_next_gen_ruas</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#E1306C] transition-colors" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/leads-next-gen-centre-ruas-700555327"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-purple-50/60 hover:bg-[#0A66C2]/10 border border-purple-100 hover:border-[#0A66C2]/40 text-slate-700 hover:text-[#0A66C2] transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <svg className="w-4 h-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span className="text-xs font-semibold">LinkedIn Profile</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0A66C2] transition-colors" />
                  </a>
                </div>
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>
    </div>
  );
}
