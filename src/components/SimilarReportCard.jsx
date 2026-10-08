import React, { useState } from 'react';
import { Layers, ThumbsUp, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { NEARBY_SIMILAR_REPORTS } from '../data/mockReports';

export const SimilarReportCard = ({ onViewMap }) => {
  const [reports, setReports] = useState(NEARBY_SIMILAR_REPORTS);
  const [upvotedState, setUpvotedState] = useState({});

  const handleUpvote = (id) => {
    setUpvotedState((prev) => ({ ...prev, [id]: !prev[id] }));
    setReports((prev) =>
      prev.map((r) => {
        if (r.id === id) {
          const isUpvoted = upvotedState[id];
          return { ...r, upvotes: isUpvoted ? r.upvotes - 1 : r.upvotes + 1 };
        }
        return r;
      })
    );
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-wider">PREVIOUS REPORT INTELLIGENCE</span>
          <h3 className="text-lg font-extrabold text-slate-900">Similar Road Reports Nearby</h3>
          <p className="text-xs text-slate-500 mt-0.5">5 similar reports found within 2 km of your location</p>
        </div>

        {onViewMap && (
          <button
            onClick={onViewMap}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs transition-all border border-blue-200"
          >
            <span>View Interactive Map</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      <div className="space-y-3">
        {reports.slice(0, 3).map((item) => {
          const isUpvoted = upvotedState[item.id];
          return (
            <div 
              key={item.id}
              className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4 hover:border-slate-300 transition-all"
            >
              <div className="flex items-center space-x-3 min-w-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 rounded-xl object-cover border border-slate-200 shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono text-slate-400">#{item.id}</span>
                    <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                      {item.distance}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 truncate mt-0.5">{item.title}</h4>
                  <p className="text-[11px] text-slate-500">{item.createdAt} &bull; Status: <span className="font-semibold text-slate-700">{item.status}</span></p>
                </div>
              </div>

              <button
                onClick={() => handleUpvote(item.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl font-bold text-xs transition-all shrink-0 ${
                  isUpvoted
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>{item.upvotes}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
