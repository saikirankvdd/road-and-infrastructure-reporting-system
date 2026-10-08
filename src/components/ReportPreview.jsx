import React from 'react';
import { getImageUrl, handleImageError } from '../utils/imageUtils';
import { 
  Building2, 
  MapPin, 
  ShieldAlert, 
  FileText, 
  HardHat, 
  Layers, 
  CheckCircle2, 
  Image as ImageIcon 
} from 'lucide-react';

export const ReportPreview = ({ 
  title, 
  category, 
  description, 
  locationText, 
  coords, 
  authorityData, 
  severity, 
  safetyImpact, 
  images = [], 
  relatedProject,
  followUpAnswers
}) => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg space-y-6">
      
      {/* Docket Header */}
      <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800 font-mono font-bold text-[10px] uppercase">
              STRUCTURED ROAD DOCKET
            </span>
            <span className="text-xs font-mono text-slate-400">RW-2026-DRAFT</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">{title || 'Road Infrastructure Defect Report'}</h2>
          <p className="text-xs text-slate-500 mt-0.5">{locationText}</p>
        </div>

        <div className="flex items-center space-x-2">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 font-extrabold text-xs border border-amber-200">
            Severity: {severity || 'High'}
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-red-100 text-red-800 font-extrabold text-xs border border-red-200">
            Risk: {safetyImpact || 'High'}
          </span>
        </div>
      </div>

      {/* Grid Specs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">1. Location & Geotag</span>
          <p className="font-bold text-slate-900 leading-snug">{locationText}</p>
          <p className="font-mono text-[11px] text-slate-500">GPS: {coords?.lat?.toFixed(4)}, {coords?.lng?.toFixed(4)}</p>
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">2. Primary Authority Recipient</span>
          <p className="font-bold text-blue-900">{authorityData?.authority || 'GHMC Roads Department'}</p>
          <p className="font-mono text-[11px] text-slate-500">Inbox: {authorityData?.authorityEmail || 'ee.roads.uppal@ghmc.gov.in'}</p>
        </div>

      </div>

      {/* Description */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">3. Citizen Statement & Evidence Context</h4>
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-800 leading-relaxed font-sans">
          {description}
        </div>
      </div>

      {/* Evidence Gallery */}
      {images.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">4. Attached Photographic Evidence ({images.length})</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {images.map((img, idx) => (
              <img 
                key={idx} 
                src={getImageUrl(img)} 
                alt={`Road Evidence ${idx + 1}`} 
                onError={handleImageError}
                className="w-full h-32 rounded-xl object-cover border border-slate-200 shadow-2xs"
              />
            ))}
          </div>
        </div>
      )}

      {/* Follow-up answers if answered */}
      {followUpAnswers && Object.keys(followUpAnswers).length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">5. Citizen Survey Responses</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {Object.entries(followUpAnswers).map(([q, a], idx) => (
              <div key={idx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <span className="text-slate-500 block text-[11px]">{q}</span>
                <span className="font-bold text-slate-900">{a}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Project */}
      {relatedProject && (
        <div className="bg-indigo-950 text-white p-4 rounded-2xl border border-indigo-900 text-xs space-y-1">
          <span className="text-[10px] font-mono text-indigo-300 font-bold uppercase">6. Related Road Infrastructure Project</span>
          <p className="font-bold text-amber-300">{relatedProject.name}</p>
          <p className="text-slate-300">Authority: {relatedProject.authority} &bull; Contractor: {relatedProject.contractor}</p>
        </div>
      )}

      {/* Recommendation */}
      <div className="bg-blue-50/80 p-4 rounded-2xl border border-blue-200 text-xs text-blue-900 space-y-1">
        <span className="font-bold block text-blue-800">RECOMMENDED MUNICIPAL ACTION:</span>
        <p className="leading-relaxed">
          Immediate site inspection by ward engineering officer, temporary cordoning off of hazardous shoulder zone, and issuance of work order for patch repair & debris clearing within 48 hours SLA window.
        </p>
      </div>

    </div>
  );
};
