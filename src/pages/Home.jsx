import React from 'react';
import { Hero } from '../components/Hero';
import { IssueCategoryCard } from '../components/IssueCategoryCard';
import { ROAD_CATEGORIES } from '../data/categories';
import { MOCK_REPORTS } from '../data/mockReports';
import { getSeverityBadgeStyle, getStatusBadgeStyle } from '../utils/formatters';
import { 
  Camera, 
  MapPin, 
  Cpu, 
  Building2, 
  FileText, 
  Send, 
  ArrowRight, 
  ShieldCheck, 
  BarChart3, 
  CheckCircle2,
  HardHat
} from 'lucide-react';

export const Home = ({ user, onStartReport, onViewReports, onSelectReport, onOpenLogin }) => {
  const howItWorksSteps = [
    { num: 1, title: 'Capture Evidence', desc: 'Take a photo or upload video of the road damage.', icon: Camera },
    { num: 2, title: 'Detect Location', desc: 'HTML5 GPS identifies the exact street & ward.', icon: MapPin },
    { num: 3, title: 'AI Understands', desc: 'Gemini 3.8 Flash assesses severity & safety risk.', icon: Cpu },
    { num: 4, title: 'Find Authority', desc: 'Geo-polygons map the responsible municipal desk.', icon: Building2 },
    { num: 5, title: 'Generate Report', desc: 'System constructs a formal civic docket.', icon: FileText },
    { num: 6, title: 'Send & Track', desc: 'Dispatches via DKIM SMTP with 48h SLA tracking.', icon: Send }
  ];

  const handleCategoryClick = () => {
    if (!user?.isLoggedIn) {
      onOpenLogin();
    } else {
      onStartReport();
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section */}
      <Hero 
        user={user} 
        onStartReport={onStartReport} 
        onViewReports={onViewReports} 
        onOpenLogin={onOpenLogin}
      />

      {/* 2. What Can You Report Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            ROAD INFRASTRUCTURE & SAFETY SCOPE
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-outfit">WHAT CAN YOU REPORT?</h2>
          <p className="text-sm text-slate-500">
            RoadWatch is dedicated specifically to road infrastructure, pavement conditions, geometry, and safety hazards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROAD_CATEGORIES.map((cat) => (
            <IssueCategoryCard key={cat.id} category={cat} onClick={handleCategoryClick} />
          ))}
        </div>
      </section>

      {/* 3. How It Works Section */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider">CIVIC INTELLIGENCE PIPELINE</span>
            <h2 className="text-3xl font-extrabold text-white font-outfit">HOW IT WORKS</h2>
            <p className="text-xs text-slate-400">Transforming raw citizen photos into actionable, location-aware municipal dockets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {howItWorksSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 relative space-y-3 group hover:border-blue-500 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center">
                      {step.num}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h3 className="font-extrabold text-sm text-white">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Road Intelligence Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-3xl p-8 md:p-12 border border-blue-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] font-mono font-bold text-blue-300 uppercase tracking-widest bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">
              INTELLIGENT DOCKET ENGINE
            </span>
            <h2 className="text-3xl font-extrabold text-white font-outfit">ROAD INTELLIGENCE</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              When you report an issue, RoadWatch does far more than collect complaints. The system correlates multiple open datasets to provide instant municipal context:
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs pt-2">
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                <span className="font-bold text-white block">📍 Exact GPS Location</span>
                <span className="text-slate-400 text-[11px]">Sub-meter geotagging</span>
              </div>
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                <span className="font-bold text-white block">🛣 Road / Junction Geometry</span>
                <span className="text-slate-400 text-[11px]">Corridor identification</span>
              </div>
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                <span className="font-bold text-white block">🏛 Municipal Jurisdiction</span>
                <span className="text-slate-400 text-[11px]">GHMC, NHAI, R&B</span>
              </div>
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                <span className="font-bold text-white block">🏗 Related Tender Project</span>
                <span className="text-slate-400 text-[11px]">Contractor data matching</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900/90 p-6 rounded-2xl border border-slate-700 space-y-3">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider">Live System Capabilities</h3>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero guesswork for citizens</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Automatic duplicate detection & upvoting</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct email dispatch to executive engineers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Real-time SLA status tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Recent Reports Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 font-outfit">Recent Road Reports</h2>
            <p className="text-xs text-slate-500">Live citizen road infrastructure submissions across Hyderabad</p>
          </div>
          <button
            onClick={onViewReports}
            className="flex items-center space-x-1 text-xs font-bold text-blue-600 hover:text-blue-800"
          >
            <span>View All Reports</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_REPORTS.map((report) => (
            <div
              key={report.id}
              onClick={() => onSelectReport(report.id)}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-slate-300 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 bg-slate-100 overflow-hidden">
                  <img src={report.images[0]} alt={report.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-0.5 rounded-full font-extrabold text-[10px] uppercase border shadow-sm ${getSeverityBadgeStyle(report.severity)}`}>
                      {report.severity}
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>#{report.id}</span>
                    <span>{report.createdAt}</span>
                  </div>

                  <h3 className="font-extrabold text-sm text-slate-900 line-clamp-2">{report.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-1">{report.location}</p>
                </div>
              </div>

              <div className="p-4 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${getStatusBadgeStyle(report.status)}`}>
                  {report.status}
                </span>
                <span className="text-xs font-bold text-blue-600 hover:underline">View Docket</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
