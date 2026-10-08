import React from 'react';
import { Shield, Camera, MapPin, Cpu, Building2, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export const About = ({ onStartReport }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-in fade-in">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-blue-500/20">
          <Shield className="w-7 h-7" />
        </div>
        <h1 className="text-4xl font-black text-slate-900 font-outfit">About RoadWatch</h1>
        <p className="text-base text-slate-600 leading-relaxed">
          RoadWatch helps citizens report road infrastructure and safety problems using evidence, location intelligence, AI-assisted analysis, and authority mapping.
        </p>
      </div>

      {/* Workflow Explanation */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-xl font-extrabold text-slate-900 font-outfit text-center">System Methodology & Workflow</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-7 gap-3 items-center text-center text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <Camera className="w-5 h-5 text-blue-600 mx-auto" />
            <span className="font-bold text-slate-900 block">Capture</span>
          </div>
          <span className="hidden md:block text-slate-300 font-bold text-lg">&rarr;</span>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <MapPin className="w-5 h-5 text-blue-600 mx-auto" />
            <span className="font-bold text-slate-900 block">Locate</span>
          </div>
          <span className="hidden md:block text-slate-300 font-bold text-lg">&rarr;</span>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <Cpu className="w-5 h-5 text-blue-600 mx-auto" />
            <span className="font-bold text-slate-900 block">Analyze</span>
          </div>
          <span className="hidden md:block text-slate-300 font-bold text-lg">&rarr;</span>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <Building2 className="w-5 h-5 text-blue-600 mx-auto" />
            <span className="font-bold text-slate-900 block">Identify</span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
          <div className="space-y-1.5">
            <h4 className="font-extrabold text-slate-900 text-sm">Evidence & Geotagging</h4>
            <p>High-resolution photos captured by citizens are tagged with HTML5 GPS coordinates and reverse geocoded to match municipal ward boundaries.</p>
          </div>
          <div className="space-y-1.5">
            <h4 className="font-extrabold text-slate-900 text-sm">Gemini AI Road Audit</h4>
            <p>Google Gemini 3.8 Flash assesses severity, safety impact on two-wheelers and vehicles, and drafts a formal engineering complaint notice.</p>
          </div>
          <div className="space-y-1.5">
            <h4 className="font-extrabold text-slate-900 text-sm">Authority Routing & SLA</h4>
            <p>Reports are routed to official executive engineer inboxes (GHMC, NHAI, R&B) with automatic DKIM signed email delivery and 48-hour SLA tracking.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 text-center space-y-4">
        <h2 className="text-2xl font-black font-outfit">Ready to report a road issue?</h2>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Help make roadways safer for two-wheelers, drivers, and pedestrians in your city.
        </p>
        <button
          onClick={onStartReport}
          className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-2xl font-extrabold text-sm bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl shadow-blue-500/25 hover:scale-105 transition-all"
        >
          <span>Report Road Issue Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
