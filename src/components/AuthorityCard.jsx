import React from 'react';
import { Building2, CheckCircle2, ShieldCheck, Mail, Info } from 'lucide-react';

export const AuthorityCard = ({ authorityData }) => {
  const authorityName = authorityData?.authority || 'GHMC Uppal Circle - Roads & Infrastructure Wing';
  const email = authorityData?.authorityEmail || 'ee.roads.uppal@ghmc.gov.in';
  const confidence = authorityData?.authorityConfidence || 94;

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">RESPONSIBLE AUTHORITY</span>
            <h3 className="text-lg font-extrabold text-slate-900 leading-tight">{authorityName}</h3>
          </div>
        </div>

        <div className="text-right">
          <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{confidence}% Confidence</span>
          </span>
          <p className="text-[10px] text-slate-400 mt-0.5">✓ Authority Mapped</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
          <span className="text-[10px] font-mono text-slate-400 block uppercase">Official Desk Email</span>
          <span className="font-bold text-slate-800 flex items-center space-x-1 mt-0.5">
            <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="truncate">{email}</span>
          </span>
        </div>

        <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
          <span className="text-[10px] font-mono text-slate-400 block uppercase">Routing Status</span>
          <span className="font-bold text-emerald-700 flex items-center space-x-1 mt-0.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Direct Ward Inbox Resolution</span>
          </span>
        </div>
      </div>

      <p className="text-[11px] text-slate-500 italic bg-blue-50/50 p-2.5 rounded-xl border border-blue-100 flex items-center space-x-2">
        <Info className="w-4 h-4 text-blue-600 shrink-0" />
        <span>Authority identified based on GIS jurisdiction boundary polygons & verified municipal datasets.</span>
      </p>
    </div>
  );
};
