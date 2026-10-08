import React, { useState } from 'react';
import { User, Shield, Bell, MapPin, Camera, Lock, Trash2, HelpCircle, FileText } from 'lucide-react';

export const Settings = ({ user, onLogout }) => {
  const [locationPermission, setLocationPermission] = useState(true);
  const [cameraPermission, setCameraPermission] = useState(true);
  const [micPermission, setMicPermission] = useState(false);
  const [notifPermission, setNotifPermission] = useState(true);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in">
      
      <div>
        <h1 className="text-3xl font-black text-slate-900 font-outfit">Citizen Settings</h1>
        <p className="text-sm text-slate-500 mt-1">Manage your account, device permissions, and report preferences</p>
      </div>

      <div className="space-y-6">
        
        {/* ACCOUNT */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
            <User className="w-4 h-4 text-blue-600" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Account Information</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="text-[11px] font-bold text-slate-500 block mb-1">Citizen Name</label>
              <input
                type="text"
                readOnly
                value={user?.name || 'Sai Kiran'}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-bold text-slate-800 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-500 block mb-1">Email Address</label>
              <input
                type="text"
                readOnly
                value={user?.email || 'saikirankvdd06@gmail.com'}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-bold text-slate-800 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* PERMISSIONS */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
            <Shield className="w-4 h-4 text-blue-600" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Device Permissions</h3>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-600" />
                <div>
                  <p className="font-bold text-slate-900">Location Access</p>
                  <p className="text-[11px] text-slate-500">Automatically identify road defect GPS geotags</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={locationPermission}
                onChange={(e) => setLocationPermission(e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center space-x-3">
                <Camera className="w-4 h-4 text-blue-600" />
                <div>
                  <p className="font-bold text-slate-900">Camera Access</p>
                  <p className="text-[11px] text-slate-500">Capture real road evidence photos & videos</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={cameraPermission}
                onChange={(e) => setCameraPermission(e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center space-x-3">
                <Bell className="w-4 h-4 text-blue-600" />
                <div>
                  <p className="font-bold text-slate-900">Resolution Notifications</p>
                  <p className="text-[11px] text-slate-500">Receive alerts when municipal authority responds</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={notifPermission}
                onChange={(e) => setNotifPermission(e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* DANGER ZONE */}
        <div className="bg-red-50/50 rounded-3xl p-6 border border-red-200 space-y-4">
          <h3 className="text-xs font-bold text-red-700 uppercase tracking-wider">Account Actions</h3>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-slate-900">Sign Out of RoadWatch</p>
              <p className="text-[11px] text-slate-500">Disconnect your current citizen session</p>
            </div>
            <button
              onClick={onLogout}
              className="px-5 py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700 shadow-2xs"
            >
              Sign Out
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
