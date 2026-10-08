import React, { useState } from 'react';
import { ArrowLeft, MapPin, AlertOctagon, ThumbsUp, Layers, CheckCircle2, Eye, FileText } from 'lucide-react';
import { NEARBY_SIMILAR_REPORTS } from '../../data/mockReports';
import { MapPreview } from '../../components/MapPreview';

export const SimilarReportsMap = ({ onBack, onInspectReport }) => {
  const [selectedReportId, setSelectedReportId] = useState(NEARBY_SIMILAR_REPORTS[0].id);
  const [upvotedIds, setUpvotedIds] = useState({});
  const [reports, setReports] = useState(NEARBY_SIMILAR_REPORTS);

  const selectedReport = reports.find(r => r.id === selectedReportId) || reports[0];

  const handleUpvote = (id) => {
    setUpvotedIds((prev) => ({ ...prev, [id]: !prev[id] }));
    setReports((prev) =>
      prev.map((r) => {
        if (r.id === id) {
          const isUpvoted = upvotedIds[id];
          return { ...r, upvotes: isUpvoted ? r.upvotes - 1 : r.upvotes + 1 };
        }
        return r;
      })
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-in fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <button
              onClick={onBack}
              className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 mr-2"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <h1 className="text-3xl font-black text-slate-900 font-outfit">Similar Road Reports Nearby</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">5 similar reports found within 2 km &bull; Uppal - Narapally NH 163 Corridor</p>
        </div>

        {/* Legend */}
        <div className="flex items-center space-x-4 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-2xs text-xs font-semibold">
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-blue-600"></span>
            <span className="text-slate-700">Your Report</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="text-slate-700">Similar Reports</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Interactive Map + List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Interactive Leaflet Map & Inspector Overlay */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-4 border border-slate-200 shadow-sm space-y-4">
          <MapPreview 
            lat={selectedReport?.lat || 17.4125} 
            lng={selectedReport?.lng || 78.6015} 
            height="420px" 
            markerTitle={selectedReport?.title || 'Report Location'} 
          />

          {/* Active Selected Report Card Overlay */}
          <div className="bg-slate-900 text-white p-4 rounded-2xl border border-slate-800 flex items-center justify-between gap-4">
            <div className="flex items-center space-x-3 min-w-0">
              <img
                src={selectedReport.image}
                alt={selectedReport.title}
                className="w-12 h-12 rounded-xl object-cover border border-slate-700 shrink-0"
              />
              <div className="min-w-0">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono text-blue-400">#{selectedReport.id}</span>
                  <span className="text-[10px] font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">
                    {selectedReport.status}
                  </span>
                </div>
                <h4 className="text-xs font-extrabold text-white truncate mt-0.5">{selectedReport.title}</h4>
              </div>
            </div>

            {onInspectReport && (
              <button
                onClick={() => onInspectReport(selectedReport.id)}
                className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shrink-0 transition-all"
              >
                <Eye className="w-4 h-4" />
                <span>Inspect Docket &rarr;</span>
              </button>
            )}
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
            <span className="font-bold block">Smart Deduplication & Ward Prioritization</span>
            CivicReport automatically aggregates nearby road issues. Upvote existing reports to escalate municipal repair priority without submitting duplicate tickets!
          </div>
        </div>

        {/* Right List of Similar Reports */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Nearby Cluster Reports</h2>

          <div className="space-y-3 max-h-[560px] overflow-y-auto pr-1">
            {reports.map((item) => {
              const isSelected = selectedReportId === item.id;
              const isUpvoted = upvotedIds[item.id];

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedReportId(item.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50/50 ring-2 ring-blue-100 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 h-14 rounded-xl object-cover border border-slate-200 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-slate-400">#{item.id}</span>
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                          {item.distance}
                        </span>
                      </div>
                      <h3 className="text-xs font-bold text-slate-900 truncate mt-1">{item.title}</h3>
                      <p className="text-[11px] text-slate-500 mt-0.5">Status: <span className="font-semibold text-slate-700">{item.status}</span></p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                    {onInspectReport ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onInspectReport(item.id);
                        }}
                        className="text-xs font-bold text-blue-600 hover:underline flex items-center space-x-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Docket</span>
                      </button>
                    ) : (
                      <span className="text-[10px] text-slate-400 font-mono">{item.createdAt}</span>
                    )}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUpvote(item.id);
                      }}
                      className={`flex items-center space-x-1.5 px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                        isUpvoted
                          ? 'bg-blue-600 text-white shadow-2xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{item.upvotes} Upvotes</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
};
