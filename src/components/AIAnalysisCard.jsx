import React from 'react';
import { Sparkles, CheckCircle2, AlertOctagon, ShieldAlert, Cpu } from 'lucide-react';

export const AIAnalysisCard = ({ isAnalyzing, progress, analysisResult }) => {
  const checklist = [
    { label: 'Understanding description', threshold: 15 },
    { label: 'Analyzing evidence photo & vision AI', threshold: 30 },
    { label: 'Detecting road issue classification', threshold: 45 },
    { label: 'Checking location & GIS jurisdiction', threshold: 60 },
    { label: 'Assessing safety severity & hazard risk', threshold: 75 },
    { label: 'Identifying responsible municipal authority', threshold: 90 },
    { label: 'Searching similar nearby reports & project data', threshold: 100 }
  ];

  if (isAnalyzing) {
    return (
      <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-2xl space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center animate-pulse">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-black text-white font-outfit">Analyzing Your Road Report</h2>
            <p className="text-xs text-slate-400">Gemini 3.8 Flash Road Infrastructure AI Engine</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono text-slate-300">
            <span>Audit Pipeline Running...</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Checklist */}
        <div className="space-y-2.5 pt-2">
          {checklist.map((item, idx) => {
            const isDone = progress >= item.threshold;
            return (
              <div key={idx} className="flex items-center space-x-3 text-xs">
                <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                  isDone ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-600'
                }`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className={isDone ? 'text-slate-200 font-semibold' : 'text-slate-500'}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-wider">AI ROAD ANALYSIS COMPLETE</span>
            <h2 className="text-xl font-extrabold text-slate-900">{analysisResult?.title || 'Pothole & Surface Hazard'}</h2>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs">
          ✓ AI Verified
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <p className="text-[10px] font-mono font-bold text-slate-400 uppercase">CATEGORY</p>
          <p className="text-sm font-extrabold text-slate-900 mt-1">{analysisResult?.category || 'Potholes'}</p>
        </div>

        <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200">
          <p className="text-[10px] font-mono font-bold text-amber-700 uppercase">SEVERITY</p>
          <p className="text-sm font-extrabold text-amber-900 mt-1">{analysisResult?.severity || 'HIGH'}</p>
        </div>

        <div className="bg-red-50 p-4 rounded-2xl border border-red-200">
          <p className="text-[10px] font-mono font-bold text-red-700 uppercase">SAFETY RISK</p>
          <p className="text-sm font-extrabold text-red-900 mt-1">{analysisResult?.safetyImpact || 'HIGH'}</p>
        </div>
      </div>

      {/* Potential Impact List */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Potential Road Safety Impact</h4>
        <div className="space-y-1.5">
          {(analysisResult?.impactFactors || [
            'Vehicle damage and tire blowout risk',
            'Two-wheeler skidding hazard',
            'Commuter traffic disruption'
          ]).map((factor, idx) => (
            <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{factor}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
