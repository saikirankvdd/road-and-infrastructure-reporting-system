import React from 'react';
import { CheckCircle2, Clock, Circle } from 'lucide-react';

export const Timeline = ({ timeline = [] }) => {
  if (!timeline || timeline.length === 0) return null;

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Report Resolution Timeline</h3>
      
      <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
        {timeline.map((step, idx) => {
          const isCompleted = step.status === 'completed';
          const isCurrent = step.status === 'current';

          return (
            <div key={idx} className="relative flex items-start space-x-3 group">
              <div
                className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs transition-all ${
                  isCompleted
                    ? 'bg-emerald-600 text-white ring-4 ring-emerald-100'
                    : isCurrent
                    ? 'bg-blue-600 text-white ring-4 ring-blue-100 animate-pulse'
                    : 'bg-slate-200 text-slate-400'
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                ) : isCurrent ? (
                  <Clock className="w-3 h-3 stroke-[3]" />
                ) : (
                  <Circle className="w-2 h-2 fill-current" />
                )}
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <h4 className={`text-xs font-bold ${isCurrent ? 'text-blue-600' : isCompleted ? 'text-slate-900' : 'text-slate-400'}`}>
                    {step.title}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400">{step.timestamp}</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
