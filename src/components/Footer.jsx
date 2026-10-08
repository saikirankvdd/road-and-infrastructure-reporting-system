import React from 'react';
import { Shield, AlertOctagon } from 'lucide-react';

export const Footer = ({ setActiveTab }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white font-outfit tracking-tight">
                ROAD<span className="text-blue-400">WATCH</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Road Infrastructure & Safety Intelligence & Reporting System. Transforming citizen evidence into structured, location-aware reports routed directly to municipal engineering wings and highway authorities.
            </p>
            <div className="flex items-center space-x-2 text-[11px] text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg w-fit">
              <AlertOctagon className="w-3.5 h-3.5 shrink-0" />
              <span>Dedicated strictly to Road Infrastructure & Road Safety intelligence.</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => setActiveTab('home')} className="hover:text-white transition-all">Home</button></li>
              <li><button onClick={() => setActiveTab('my-reports')} className="hover:text-white transition-all">My Road Reports</button></li>
              <li><button onClick={() => setActiveTab('settings')} className="hover:text-white transition-all">Settings & Privacy</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Jurisdictions</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>GHMC Roads & Infra Wing</li>
              <li>National Highways Authority (NHAI)</li>
              <li>Telangana R&B Department</li>
              <li>TSSPDCL Electrical & Lighting</li>
              <li>HMWSSB Stormwater Drainage</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; 2026 RoadWatch. All rights reserved. Production-grade Road Safety Platform.</p>
          <p className="flex items-center space-x-1">
            <span>Built for safer roads & empowered citizens</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
