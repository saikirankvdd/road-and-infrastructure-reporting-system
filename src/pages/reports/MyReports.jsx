import React, { useState } from 'react';
import { Search, Filter, Plus, MapPin, Eye, ThumbsUp, Calendar } from 'lucide-react';
import { MOCK_REPORTS } from '../../data/mockReports';
import { getSeverityBadgeStyle, getStatusBadgeStyle } from '../../utils/formatters';
import { getImageUrl, handleImageError } from '../../utils/imageUtils';

export const MyReports = ({ onStartReport, onSelectReport }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Awaiting Response', 'Sent', 'Resolved'];

  const filteredReports = MOCK_REPORTS.filter((report) => {
    const matchesFilter = selectedFilter === 'All' || report.status === selectedFilter;
    const matchesSearch = 
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 font-outfit">My Road Reports</h1>
          <p className="text-sm text-slate-500 mt-1">Manage and track your submitted road infrastructure reports</p>
        </div>

        <button
          onClick={onStartReport}
          className="flex items-center space-x-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:scale-[1.02] transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>+ Report Road Issue</span>
        </button>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-slate-200 shadow-2xs">
        
        {/* Filter Tabs */}
        <div className="flex items-center space-x-1 overflow-x-auto pb-1 md:pb-0">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedFilter === f
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search road reports..."
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 font-semibold focus:outline-none focus:border-blue-500"
          />
        </div>

      </div>

      {/* Reports List/Card View */}
      {filteredReports.length > 0 ? (
        <div className="space-y-4">
          {filteredReports.map((report) => (
            <div
              key={report.id}
              onClick={() => onSelectReport(report.id)}
              className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="flex items-start space-x-4 min-w-0">
                <img
                  src={getImageUrl(report.images[0])}
                  alt={report.title}
                  onError={handleImageError}
                  className="w-24 h-24 rounded-2xl object-cover border border-slate-200 shrink-0"
                />

                <div className="space-y-1.5 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] font-mono text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                      #{report.id}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] uppercase border ${getSeverityBadgeStyle(report.severity)}`}>
                      {report.severity} Severity
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{report.createdAt}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 truncate">{report.title}</h3>
                  
                  <p className="text-xs text-slate-500 flex items-center space-x-1 truncate">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{report.location}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between lg:justify-end space-x-4 shrink-0 pt-4 lg:pt-0 border-t lg:border-0 border-slate-100">
                <div className="text-right">
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${getStatusBadgeStyle(report.status)}`}>
                    {report.status}
                  </span>
                  <p className="text-[10px] text-slate-400 mt-1">{report.authority}</p>
                </div>

                <button className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs transition-all border border-blue-200">
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Report</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
          <p className="text-slate-400 text-sm font-semibold">No road reports match your filter criteria.</p>
        </div>
      )}

    </div>
  );
};
