"use client";

import React, { useState } from "react";
import Link from "next/link";
import BorderGlow from "@/components/BorderGlow";
import {
  ShieldCheck,
  Lock,
  Mail,
  KeyRound,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Building2,
  Users,
  Shield,
} from "lucide-react";

export default function PortalLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [roleGroup, setRoleGroup] = useState("Executive Council");
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccess, setAuthSuccess] = useState(false);
  const [resetModalOpen, setResetModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);

    if (!email.trim()) {
      setAuthError("Please enter your registered institutional email address or Member ID.");
      return;
    }

    if (!password.trim()) {
      setAuthError("Please enter your password.");
      return;
    }

    setIsLoading(true);

    // Simulate enterprise authentication check
    setTimeout(() => {
      setIsLoading(false);
      setAuthSuccess(true);
    }, 1200);
  };

  const handleQuickDemo = (demoEmail: string, demoRole: string) => {
    setEmail(demoEmail);
    setPassword("••••••••••••");
    setRoleGroup(demoRole);
    setAuthError(null);
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail.trim()) return;
    setResetSent(true);
    setTimeout(() => {
      setResetSent(false);
      setResetModalOpen(false);
      setResetEmail("");
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#241147] text-white relative overflow-hidden flex flex-col justify-center">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gradient-to-r from-[#9C1256]/20 to-[#DE3F11]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#361C6A]/40 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2200px] 4xl:max-w-[2800px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 relative z-10 w-full">
        {/* Navigation Breadcrumb */}
        <div className="max-w-xl mx-auto mb-6 flex items-center justify-between">
          <Link
            href="/portal"
            className="inline-flex items-center space-x-2 text-xs 2xl:text-sm font-semibold text-[#E2D9F3] hover:text-[#DE3F11] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portal Overview</span>
          </Link>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-[#DE3F11] border border-white/10">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>256-Bit Encrypted</span>
          </div>
        </div>

        {/* Main Login Container */}
        <div className="max-w-xl mx-auto">
          <BorderGlow
            edgeSensitivity={35}
            glowColor="330 85 50"
            backgroundColor="#2A1454"
            borderRadius={32}
            glowRadius={45}
            glowIntensity={1.2}
            colors={["#9C1256", "#DE3F11", "#FFFFFF"]}
            animated={true}
            className="shadow-2xl"
          >
            <div className="p-8 sm:p-12 3xl:p-16 relative">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-14 h-14 3xl:w-18 3xl:h-18 rounded-2xl bg-[#361C6A] border border-[#DE3F11]/40 text-[#DE3F11] flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Lock className="w-7 h-7 3xl:w-9 3xl:h-9 text-white" />
                </div>
                <h1 className="text-2xl sm:text-3xl 2xl:text-4xl font-extrabold text-white">
                  Member & ERP Login
                </h1>
                <p className="text-xs sm:text-sm 2xl:text-base text-[#E2D9F3]/80 mt-1">
                  Access official LEADS executive modules, task boards, and finance ledgers.
                </p>
              </div>

              {/* Success Notification Banner */}
              {authSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-sm flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Authentication Successful!</div>
                    <div className="text-xs text-emerald-300/90 mt-0.5">
                      Redirecting to your personalized role workspace ({roleGroup})...
                    </div>
                  </div>
                </div>
              )}

              {/* Error Notification Banner */}
              {authError && (
                <div className="mb-6 p-4 rounded-2xl bg-red-500/20 border border-red-500/40 text-red-200 text-sm flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Authentication Failed</div>
                    <div className="text-xs text-red-300/90 mt-0.5">{authError}</div>
                  </div>
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-5">
                {/* Governance Role Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#DE3F11] mb-2">
                    Governance Tier / Role
                  </label>
                  <select
                    value={roleGroup}
                    onChange={(e) => setRoleGroup(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1A0A33] border border-white/15 text-white text-sm focus:outline-none focus:border-[#DE3F11] transition-colors"
                  >
                    <option value="Executive Council">Student Core & Executive Council</option>
                    <option value="Faculty Leadership">Centre Head & Faculty Leads</option>
                    <option value="Advisory Board">Governing & Corporate Advisory Board</option>
                    <option value="Student Associate">Student Trainee Associate / Marshals</option>
                    <option value="System Administrator">Superadmin / IT Operations</option>
                  </select>
                </div>

                {/* Email / ID Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#E2D9F3] mb-2">
                    Institutional Email / Member ID
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E2D9F3]/60">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. member@msruas.ac.in"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1A0A33] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#DE3F11] transition-colors"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#E2D9F3]">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => setResetModalOpen(true)}
                      className="text-xs font-medium text-[#DE3F11] hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E2D9F3]/60">
                      <KeyRound className="w-4 h-4" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#1A0A33] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#DE3F11] transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#E2D9F3]/60 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 rounded border-white/20 text-[#DE3F11] focus:ring-[#DE3F11] bg-[#1A0A33]"
                    />
                    <span className="text-xs text-[#E2D9F3]/80">Remember this workstation</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading || authSuccess}
                  className="w-full py-4 rounded-xl font-extrabold text-base bg-gradient-to-r from-[#9C1256] via-[#DE3F11] to-[#9C1256] text-white shadow-xl hover:shadow-[0_0_25px_rgba(222,63,17,0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Authenticate & Sign In</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Demo Credentials Quick Switcher */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#DE3F11] text-center mb-3">
                  Evaluation & Quick Demo Access
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => handleQuickDemo("council.president@msruas.ac.in", "Executive Council")}
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-left transition-colors"
                  >
                    <div className="font-bold text-white">Student Core</div>
                    <div className="text-[10px] text-[#E2D9F3]/70">council.president</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickDemo("centre.head@msruas.ac.in", "Faculty Leadership")}
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-left transition-colors"
                  >
                    <div className="font-bold text-white">Faculty Lead</div>
                    <div className="text-[10px] text-[#E2D9F3]/70">centre.head</div>
                  </button>
                </div>
              </div>
            </div>
          </BorderGlow>
        </div>

        {/* Footer Security Badges */}
        <div className="mt-8 text-center text-xs text-[#E2D9F3]/70 max-w-md mx-auto flex items-center justify-center space-x-4">
          <span className="flex items-center gap-1">
            <Building2 className="w-3.5 h-3.5 text-[#DE3F11]" /> FMC · RUAS
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-[#DE3F11]" /> Role-Based Access Control
          </span>
        </div>
      </div>

      {/* Password Reset Modal */}
      {resetModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#2A1454] border border-white/20 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <h3 className="text-xl font-bold text-white mb-2">Request Password Reset</h3>
            <p className="text-xs text-[#E2D9F3]/80 mb-6">
              Enter your registered institutional email to receive an executive recovery link.
            </p>

            {resetSent ? (
              <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-xs">
                Recovery instructions sent to your institutional inbox.
              </div>
            ) : (
              <form onSubmit={handlePasswordReset} className="space-y-4">
                <input
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="name@msruas.ac.in"
                  className="w-full px-4 py-3 rounded-xl bg-[#1A0A33] border border-white/15 text-white text-sm focus:outline-none focus:border-[#DE3F11]"
                  required
                />
                <div className="flex space-x-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setResetModalOpen(false)}
                    className="w-1/2 py-2.5 rounded-xl border border-white/20 text-xs font-bold text-white hover:bg-white/10"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 py-2.5 rounded-xl bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-xs font-bold text-white shadow-md hover:scale-105 transition-transform"
                  >
                    Send Recovery
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
