import React from "react";
import ContactForm from "@/components/ContactForm";
import BorderGlow from "@/components/BorderGlow";
import { Mail, MapPin, Building2, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* SECTION 1 [PURPLE]: HERO HEADER */}
      <section className="pt-36 sm:pt-44 pb-20 3xl:pt-52 bg-[#361C6A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/20 text-xs font-semibold mb-6 shadow-sm">
            <Mail className="w-3.5 h-3.5 text-[#DE3F11]" />
            <span>Connect With LEADS Team</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Let's Build Something Together
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#E2D9F3] max-w-2xl mx-auto leading-relaxed">
            Whether exploring an institutional partnership, summit delegation, or general inquiries — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* SECTION 2 [WHITE/LIGHT]: FORM & DIRECTORY */}
      <section className="py-24 bg-[#FDFBFF] text-[#1E0C3D] border-t border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Side (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm lightMode={true} />
            </div>

            {/* Info Side (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
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
                <div className="p-6 sm:p-8 space-y-6">
                  <h3 className="text-xl font-bold text-[#1E0C3D] border-b border-purple-100 pb-3">
                    Centre Information
                  </h3>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-xl bg-purple-50 text-[#9C1256] shrink-0">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-[#1E0C3D]">Institution</div>
                        <div className="text-slate-600">Faculty of Management and Commerce, RUAS</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-xl bg-purple-50 text-[#9C1256] shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-[#1E0C3D]">Campus Location</div>
                        <div className="text-slate-600">M. S. Ramaiah University of Applied Sciences, Gnanagangothri Campus, Bengaluru 560054</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-xl bg-purple-50 text-[#9C1256] shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-[#1E0C3D]">Direct Email</div>
                        <div className="text-slate-600">contact@leadsnextgen.in</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-xl bg-purple-50 text-[#9C1256] shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-[#1E0C3D]">Working Hours</div>
                        <div className="text-slate-600">Monday – Friday: 09:00 AM – 05:30 PM IST</div>
                      </div>
                    </div>
                  </div>
                </div>
              </BorderGlow>

              {/* Quick Note Box */}
              <BorderGlow
                edgeSensitivity={30}
                glowColor="330 85 50"
                backgroundColor="#FFFFFF"
                borderRadius={24}
                glowRadius={30}
                glowIntensity={1.0}
                colors={["#9C1256", "#DE3F11", "#361C6A"]}
                animated={true}
                className="shadow-sm"
              >
                <div className="bg-gradient-to-br from-purple-50/70 to-orange-50/40 p-6 rounded-3xl">
                  <h4 className="text-sm font-bold text-[#9C1256] mb-2">
                    Flagship Summit Inquiries
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For urgent delegation entries or sponsorship details regarding the Bharath Leadership Summit (BLS), select "Bharath Leadership Summit & Events" in the form interest area.
                  </p>
                </div>
              </BorderGlow>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
