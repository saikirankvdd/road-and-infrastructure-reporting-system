import React from 'react';
import { Plus, FileText, CheckCircle2, Clock, ShieldAlert, ArrowRight, MapPin } from 'lucide-react';
import { MOCK_REPORTS } from '../data/mockReports';
import { getSeverityBadgeStyle, getStatusBadgeStyle } from '../utils/formatters';

export const Dashboard = ({ user, onStartReport, onViewReports, onSelectReport }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in">
      
      {/* Citizen Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs border border-blue-400/30">
            <span>Verified Citizen Profile: {user?.citizenId || 'CITIZEN-TEL-13894'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-outfit text-white">
            Good morning, {user?.name || 'Sai Kiran'}
          </h1>
          <p className="text-sm text-slate-300">
            Report road infrastructure and safety problems in your area.
          </p>
        </div>

        <button
          onClick={onStartReport}
          className="flex items-center justify-center space-x-2.5 px-7 py-4 rounded-2xl font-extrabold text-sm bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl shadow-blue-500/25 hover:from-blue-600 hover:to-indigo-700 hover:scale-[1.02] transition-all shrink-0"
        >
          <Plus className="w-5 h-5 stroke-[3]" />
          <span>Report a Road Issue</span>
        </button>
      </div>

      {/* Citizen Activity Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-mono font-bold text-slate-400 uppercase">SUBMITTED REPORTS</p>
            <p className="text-3xl font-black text-slate-900 mt-1">4</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Active Road Dockets</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-mono font-bold text-amber-600 uppercase">AWAITING RESPONSE</p>
            <p className="text-3xl font-black text-amber-900 mt-1">2</p>
            <p className="text-[11px] text-amber-700 mt-0.5">Municipal SLA Active</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-mono font-bold text-emerald-600 uppercase">RESOLVED</p>
            <p className="text-3xl font-black text-emerald-900 mt-1">2</p>
            <p className="text-[11px] text-emerald-700 mt-0.5">Repaired & Verified</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Citizen's Recent Road Reports List */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-lg font-extrabold text-slate-900">Your Road Reports</h2>
            <p className="text-xs text-slate-500">Track recent road safety issues submitted by you</p>
          </div>
          <button
            onClick={onViewReports}
            className="flex items-center space-x-1 text-xs font-bold text-blue-600 hover:text-blue-800"
          >
            <span>View All My Reports</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4">
          {MOCK_REPORTS.map((report) => (
            <div
              key={report.id}
              onClick={() => onSelectReport(report.id)}
              className="p-4 rounded-2xl border border-slate-200 hover:border-blue-400 bg-slate-50/50 hover:bg-white transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-center space-x-4 min-w-0">
                <img
                  src={report.images[0]}
                  alt={report.title}
                  className="w-16 h-16 rounded-xl object-cover border border-slate-200 shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono text-slate-400 font-bold">#{report.id}</span>
                    <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${getSeverityBadgeStyle(report.severity)}`}>
                      {report.severity} Severity
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 truncate mt-1">{report.title}</h3>
                  <p className="text-xs text-slate-500 truncate flex items-center space-x-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{report.location}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end space-x-4 shrink-0 pt-2 md:pt-0 border-t md:border-0 border-slate-200">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${getStatusBadgeStyle(report.status)}`}>
                  {report.status}
                </span>
                <button className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 font-bold text-xs text-slate-700">
                  Track Report &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
