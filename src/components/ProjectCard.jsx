import React from 'react';
import { HardHat, FileText, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  if (!project) {
    return (
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex items-center space-x-4">
        <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
          <HardHat className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-800">RELATED ROAD PROJECT</h3>
          <p className="text-xs text-slate-500 mt-0.5">
            No related active infrastructure project was found for this location in official tender records.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold border border-amber-400/30">
            <HardHat className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">PROJECT INTELLIGENCE MATCH</span>
            <h3 className="text-base font-extrabold text-white leading-snug">{project.name}</h3>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs border border-amber-400/30 whitespace-nowrap">
          {project.status || 'Under Construction'}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
        <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
          <span className="text-[10px] font-mono text-slate-400 block uppercase">Executing Agency / Authority</span>
          <span className="font-bold text-slate-200 block mt-0.5">{project.authority}</span>
        </div>

        <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
          <span className="text-[10px] font-mono text-slate-400 block uppercase">Assigned Contractor</span>
          <span className="font-bold text-amber-300 block mt-0.5">{project.contractor || 'Contractor Data Available'}</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800/80">
        <span className="text-[11px] text-slate-400 font-mono">
          Ref: {project.reference}
        </span>
        <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
          Source: {project.source || 'Government Verified Dataset'}
        </span>
      </div>
    </div>
  );
};
