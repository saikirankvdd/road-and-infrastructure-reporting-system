import React from 'react';
import { MapPin, Camera, Mic, Bell, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

export const PermissionsModal = ({ isOpen, onClose, onGrantPermissions }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 border border-slate-200 shadow-2xl space-y-6">
        
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
            <Shield className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 font-outfit">Enable Permissions</h2>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            RoadWatch needs access to your device capabilities to capture evidence and geotag road issues accurately.
          </p>
        </div>

        <div className="space-y-3">
          
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="text-xs font-bold text-slate-900">📍 Location</h4>
                <span className="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-md">Required</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">Automatically identify where the road problem occurred.</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="text-xs font-bold text-slate-900">📷 Camera</h4>
                <span className="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-md">Required</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">Capture real photographic road evidence.</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
            <div className="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0">
              <Mic className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="text-xs font-bold text-slate-900">🎤 Microphone</h4>
                <span className="text-[10px] font-bold text-slate-500 bg-slate-200 px-2 py-0.5 rounded-md">Optional</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">For voice descriptions and audio notes.</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
            <div className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="text-xs font-bold text-slate-900">🔔 Notifications</h4>
                <span className="text-[10px] font-bold text-slate-500 bg-slate-200 px-2 py-0.5 rounded-md">Optional</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">For municipal resolution updates & response alerts.</p>
            </div>
          </div>

        </div>

        <button
          onClick={() => {
            onGrantPermissions();
            onClose();
          }}
          className="w-full py-3.5 px-4 rounded-2xl font-extrabold text-xs bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 hover:scale-[1.01] transition-all flex items-center justify-center space-x-2"
        >
          <span>Allow Required Permissions</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};
