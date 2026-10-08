import React from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle2, Info } from 'lucide-react';

export const SafetyAssessment = ({ severity = 'High', safetyImpact = 'High' }) => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">CIVIC RISK MATRIX</span>
            <h3 className="text-base font-extrabold text-slate-900">ROAD SAFETY ASSESSMENT</h3>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold text-slate-500">Severity:</span>
          <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 font-extrabold text-xs flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span>🔴 {severity.toUpperCase()}</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
        <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-2">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Risk Indicators</h4>
          <div className="space-y-1.5 text-xs text-slate-700">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Two-wheeler skidding & wheel entrapment</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Vehicular swerving & bottleneck creation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Poor night visibility hazard</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-2">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Potential Road Impact</h4>
          <div className="space-y-1.5 text-xs text-slate-700">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span>Vehicle suspension / rim damage</span>
            </div>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span>Accident & collision risk on corridor</span>
            </div>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span>Peak commute traffic slowdown</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[11px] text-slate-500 italic bg-amber-50/60 p-2.5 rounded-xl border border-amber-200/60 flex items-center space-x-2">
        <Info className="w-4 h-4 text-amber-600 shrink-0" />
        <span>This is an AI-assisted road safety assessment to assist municipal triage, not a certified structural engineering judgment.</span>
      </p>
    </div>
  );
};
