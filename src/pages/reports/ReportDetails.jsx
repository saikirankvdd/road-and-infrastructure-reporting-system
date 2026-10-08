import React from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Building2, 
  ShieldAlert, 
  Calendar, 
  Mail, 
  HardHat, 
  Layers, 
  ThumbsUp, 
  Share2, 
  Printer 
} from 'lucide-react';
import { MOCK_REPORTS } from '../../data/mockReports';
import { Timeline } from '../../components/Timeline';
import { EmailStatus } from '../../components/EmailStatus';
import { MapPreview } from '../../components/MapPreview';
import { ProjectCard } from '../../components/ProjectCard';
import { getSeverityBadgeStyle, getStatusBadgeStyle } from '../../utils/formatters';

export const ReportDetails = ({ reportId, onBack, onViewSimilarMap }) => {
  const report = MOCK_REPORTS.find((r) => r.id === reportId) || MOCK_REPORTS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-in fade-in">
      
      {/* Top Back Navigation Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 font-bold text-xs transition-all shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Reports</span>
        </button>

        <div className="flex items-center space-x-2">
          <button 
            onClick={() => window.print()} 
            className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Docket</span>
          </button>
          {onViewSimilarMap && (
            <button
              onClick={onViewSimilarMap}
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 shadow-2xs"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>View Similar Map</span>
            </button>
          )}
        </div>
      </div>

      {/* Desktop 2-Column Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Evidence Gallery & Location Map */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">PHOTOGRAPHIC EVIDENCE</h3>
            
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-200 shadow-xs">
                <img src={report.images[0]} alt={report.title} className="w-full h-full object-cover" />
              </div>

              {report.images.length > 1 && (
                <div className="grid grid-cols-3 gap-2">
                  {report.images.map((img, idx) => (
                    <img 
                      key={idx} 
                      src={img} 
                      alt={`Evidence ${idx + 1}`} 
                      className="w-full h-20 rounded-xl object-cover border border-slate-200 cursor-pointer"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">LOCATION GEOTAG MAP</h3>
            <MapPreview lat={report.lat} lng={report.lng} height="240px" markerTitle={report.title} />
            <div className="text-xs text-slate-600">
              <p className="font-bold">{report.location}</p>
              <p className="font-mono text-[11px] text-slate-400 mt-0.5">Coords: {report.lat}, {report.lng}</p>
            </div>
          </div>

        </div>

        {/* Right Column: Docket Information & Timeline */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Main Info Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-mono text-blue-600 font-bold bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  DOCKET #{report.id}
                </span>
                <span className="text-xs font-mono text-slate-400 ml-2">{report.createdAt}</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full font-bold text-xs ${getSeverityBadgeStyle(report.severity)}`}>
                  {report.severity} Severity
                </span>
                <span className={`px-3 py-1 rounded-full font-bold text-xs ${getStatusBadgeStyle(report.status)}`}>
                  {report.status}
                </span>
              </div>
            </div>

            <div>
              <h1 className="text-2xl font-extrabold text-slate-900 font-outfit leading-tight">{report.title}</h1>
              <p className="text-xs font-bold text-slate-500 mt-1">{report.ward}</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1 text-xs text-slate-800 leading-relaxed font-sans">
              <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">Citizen Statement</span>
              <p>{report.description}</p>
            </div>

            {/* Authority Box */}
            <div className="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 space-y-1 text-xs">
              <span className="text-[10px] font-mono font-bold text-blue-800 uppercase">Assigned Municipal Authority</span>
              <p className="font-extrabold text-slate-900 text-sm">{report.authority}</p>
              <p className="font-mono text-slate-600">Official Inbox: {report.authorityEmail}</p>
            </div>
          </div>

          {/* Project Card if exists */}
          {report.relatedProject && <ProjectCard project={report.relatedProject} />}

          {/* Email Status Widget */}
          <EmailStatus emailStatus={report.emailStatus} recipientEmail={report.authorityEmail} />

          {/* Resolution Timeline */}
          <Timeline timeline={report.timeline} />

        </div>

      </div>

    </div>
  );
};
