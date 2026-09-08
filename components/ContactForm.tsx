"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface ContactFormProps {
  lightMode?: boolean;
}

export default function ContactForm({ lightMode = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    interestArea: "Events",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Please fill in all required fields (Name and Email).");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          organisation: "",
          interestArea: "Events",
          message: "",
        });
      } else {
        const data = await res.json();
        setError(data.message || "Failed to submit form. Please try again.");
      }
    } catch (err) {
      setError("An unexpected network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const containerClass = lightMode
    ? "rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-xl bg-white text-[#1E0C3D]"
    : "glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative bg-[#2A1454]/90 text-white";

  const labelClass = lightMode
    ? "block text-xs font-bold text-[#1E0C3D] mb-1.5"
    : "block text-xs font-semibold text-white mb-1.5";

  const inputClass = lightMode
    ? "w-full px-4 py-3 rounded-xl bg-purple-50/50 border border-purple-200 text-[#1E0C3D] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#DE3F11] transition-all"
    : "w-full px-4 py-3 rounded-xl bg-[#1E0C3D]/80 border border-white/20 text-white placeholder-[#E2D9F3]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#DE3F11] transition-all";

  return (
    <div className={containerClass}>
      {success ? (
        <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#9C1256]/20 to-[#DE3F11]/20 text-[#DE3F11] border border-[#DE3F11]/40 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8 text-[#DE3F11]" />
          </div>
          <h3 className={`text-2xl font-bold ${lightMode ? "text-[#1E0C3D]" : "text-white"}`}>
            Thank You for Reaching Out!
          </h3>
          <p className={`text-sm ${lightMode ? "text-slate-600" : "text-[#E2D9F3]"} max-w-md mx-auto`}>
            Your enquiry has been submitted to the LEADS Next Gen Centre team. We will review your message and get back to you shortly.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-6 px-6 py-2.5 rounded-xl font-semibold text-xs bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white hover:opacity-90 transition-all shadow-md"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className={`border-b ${lightMode ? "border-purple-100" : "border-white/10"} pb-4 mb-2`}>
            <h3 className={`text-xl font-bold ${lightMode ? "text-[#1E0C3D]" : "text-white"}`}>
              Send a Message to LEADS
            </h3>
            <p className={`text-xs ${lightMode ? "text-slate-500" : "text-[#E2D9F3]"} mt-1`}>
              Whether exploring a partnership, summit attendance, or general inquiries — we respond within 24 hours.
            </p>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-[#DE3F11] text-xs flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-[#DE3F11]" />
              <span>{error}</span>
            </div>
          )}

          {/* Full Name */}
          <div>
            <label htmlFor="name" className={labelClass}>
              Full Name <span className="text-[#DE3F11]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Dr. Aravind Sharma"
              required
              className={inputClass}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClass}>
              Email Address <span className="text-[#DE3F11]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@organisation.in"
              required
              className={inputClass}
            />
          </div>

          {/* Organisation / Role */}
          <div>
            <label htmlFor="organisation" className={labelClass}>
              Organisation / Designation <span className={lightMode ? "text-slate-400 font-normal" : "text-[#E2D9F3]/70 font-normal"}>(Optional)</span>
            </label>
            <input
              type="text"
              id="organisation"
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
              placeholder="e.g. Dept. of Higher Education / Startup Co-Founder"
              className={inputClass}
            />
          </div>

          {/* Area of Interest */}
          <div>
            <label htmlFor="interestArea" className={labelClass}>
              Area of Interest
            </label>
            <select
              id="interestArea"
              name="interestArea"
              value={formData.interestArea}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="Events" className={lightMode ? "text-[#1E0C3D]" : "bg-[#241147] text-white"}>Bharath Leadership Summit & Events</option>
              <option value="Partnerships" className={lightMode ? "text-[#1E0C3D]" : "bg-[#241147] text-white"}>Institutional & Government Partnerships</option>
              <option value="Workshops" className={lightMode ? "text-[#1E0C3D]" : "bg-[#241147] text-white"}>Catalyst Skill Upliftment Workshops</option>
              <option value="Media" className={lightMode ? "text-[#1E0C3D]" : "bg-[#241147] text-white"}>Media & Academic Research</option>
              <option value="General Enquiry" className={lightMode ? "text-[#1E0C3D]" : "bg-[#241147] text-white"}>General Enquiry</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className={labelClass}>
              Your Message <span className={lightMode ? "text-slate-400 font-normal" : "text-[#E2D9F3]/70 font-normal"}>(Optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how LEADS can collaborate with your team..."
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* CTA Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
