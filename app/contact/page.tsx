import React from "react";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Building2, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-xs font-semibold mb-4">
          <Mail className="w-3.5 h-3.5 text-[#DE3F11]" />
          <span>Connect With LEADS Team</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let's Build Something Together
        </h1>
        <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
          Whether exploring an institutional partnership, summit delegation, or general inquiries — we'd love to hear from you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Side (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Info Side (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#9C1256]/30 space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-3">
                Centre Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-white/85">
                <div className="flex items-start space-x-3">
                  <Building2 className="w-5 h-5 text-[#DE3F11] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Institution</div>
                    <div>Faculty of Management and Commerce, RUAS</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#DE3F11] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Campus Location</div>
                    <div>M. S. Ramaiah University of Applied Sciences, Gnanagangothri Campus, Bengaluru 560054</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#DE3F11] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Direct Email</div>
                    <div>contact@leadsnextgen.in</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#DE3F11] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Working Hours</div>
                    <div>Monday – Friday: 09:00 AM – 05:30 PM IST</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Note Box */}
            <div className="glass-panel p-6 rounded-3xl border border-[#DE3F11]/40">
              <h4 className="text-sm font-bold text-[#DE3F11] mb-2">
                Flagship Summit Inquiries
              </h4>
              <p className="text-xs text-white/80 leading-relaxed">
                For urgent delegation entries or sponsorship details regarding the Bharath Leadership Summit (BLS), select "Bharath Leadership Summit & Events" in the form interest area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
