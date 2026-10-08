import React from 'react';
import { MapPin, Cpu, Building2, BarChart3, ArrowRight, Plus, FileText, CheckCircle2, ShieldAlert, LogIn } from 'lucide-react';
import { getImageUrl, handleImageError } from '../utils/imageUtils';

export const Hero = ({ user, onStartReport, onViewReports, onOpenLogin }) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-12 pb-20 border-b border-slate-800">
      {/* Subtle grid background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
              <ShieldAlert className="w-4 h-4 text-blue-400" />
              <span>Road Infrastructure & Safety Intelligence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] font-outfit">
              SEE A ROAD PROBLEM?<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400">
                REPORT IT.
              </span>
            </h1>

            <p className="text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Capture the problem. We'll identify the location, analyze the risk, find the responsible authority, and help you send a structured report.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              {user?.isLoggedIn ? (
                <>
                  <button
                    onClick={onStartReport}
                    className="flex items-center justify-center space-x-2.5 px-8 py-4 rounded-2xl font-extrabold text-base bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl shadow-blue-500/30 hover:from-blue-600 hover:to-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <Plus className="w-5 h-5 stroke-[3]" />
                    <span>Report a Road Issue</span>
                  </button>

                  <button
                    onClick={onViewReports}
                    className="flex items-center justify-center space-x-2 px-6 py-4 rounded-2xl font-bold text-sm bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all hover:text-white"
                  >
                    <FileText className="w-4 h-4 text-blue-400" />
                    <span>View My Reports</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={onOpenLogin}
                  className="flex items-center justify-center space-x-2.5 px-8 py-4 rounded-2xl font-extrabold text-base bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl shadow-blue-500/30 hover:from-blue-600 hover:to-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <LogIn className="w-5 h-5" />
                  <span>Login / Sign Up to Report Issue</span>
                </button>
              )}
            </div>

            {/* Micro Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/60">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Authority Mapping</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>AI-Assisted Docketing</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Live Location Geocoding</span>
              </div>
            </div>
          </div>

          {/* Right Desktop Visual Card (Map + Road Preview) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-3 bg-slate-800/80 border border-slate-700/80 shadow-2xl backdrop-blur-sm">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950">
                <img 
                  src={getImageUrl("/uppal_narapally_road.jpg")} 
                  alt="Uppal Narapally Road Infrastructure Hazard" 
                  onError={handleImageError}
                  className="w-full h-full object-cover opacity-85"
                />
                
                {/* Floating Intelligence Overlay Card */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80 shadow-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded-md">
                      CRITICAL ROAD HAZARD
                    </span>
                    <span className="text-[11px] font-bold text-blue-400">GHMC Uppal Circle</span>
                  </div>
                  <p className="text-xs font-bold text-white truncate">
                    Uppal - Narapally Road (NH 163 Warangal Corridor)
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-red-400" />
                      <span>GPS: 17.4125, 78.6015</span>
                    </span>
                    <span className="text-emerald-400 font-semibold">94% Authority Match</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Capabilities Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-800 hover:border-blue-500/50 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-white mb-1">1. 📍 Location Intelligence</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Automatically identify where the problem occurred using HTML5 GPS & reverse geocoding.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-800 hover:border-blue-500/50 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-white mb-1">2. 🤖 AI Road Analysis</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Understand the issue and assess its severity using Gemini AI visual & text models.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-800 hover:border-blue-500/50 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-white mb-1">3. 🏛 Responsible Authority</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Identify the exact department responsible for the location (GHMC, NHAI, R&B).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-800 hover:border-blue-500/50 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-white mb-1">4. 📊 Road Intelligence</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Find similar reports, contractor tender data, and related infrastructure projects.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
