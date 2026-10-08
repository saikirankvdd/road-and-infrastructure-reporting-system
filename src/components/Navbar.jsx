import React from 'react';
import { Shield, Plus, User, FileText, Home, LogIn } from 'lucide-react';

export const Navbar = ({ 
  user, 
  activeTab, 
  setActiveTab, 
  onStartReport, 
  onOpenLogin,
  onOpenSettings
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & System Title */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center space-x-3.5 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-all">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-2xl tracking-tight text-white font-outfit">
                  ROAD<span className="text-blue-400">WATCH</span>
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 font-mono text-[10px] font-semibold uppercase tracking-wider border border-blue-400/30">
                  Citizen Safety
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                Road Infrastructure & Safety Intelligence & Reporting System
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links (Only for logged in citizens) */}
          {user?.isLoggedIn && (
            <nav className="hidden lg:flex items-center space-x-1 bg-slate-800/60 p-1.5 rounded-2xl border border-slate-700/60">
              <button
                onClick={() => setActiveTab('home')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'home'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Dashboard</span>
              </button>

              <button
                onClick={() => setActiveTab('my-reports')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'my-reports'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>My Reports</span>
              </button>
            </nav>
          )}

          {/* Actions & Primary Auth CTA */}
          <div className="flex items-center space-x-3.5">
            {user?.isLoggedIn ? (
              <>
                <button
                  onClick={onStartReport}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:from-blue-600 hover:to-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Plus className="w-4 h-4 stroke-[3]" />
                  <span>Report Road Issue</span>
                </button>

                <div 
                  onClick={onOpenSettings}
                  className="flex items-center space-x-2.5 p-1.5 pl-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-slate-600 cursor-pointer transition-all"
                >
                  <div className="text-right hidden sm:block">
                    <p className="text-xs font-bold text-slate-200 leading-tight">{user.name}</p>
                    <p className="text-[10px] text-slate-400 font-mono">{user.citizenId || 'CITIZEN-TEL-13894'}</p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shadow-inner">
                    {user.name ? user.name.split(' ').map(n => n[0]).join('') : 'SK'}
                  </div>
                </div>
              </>
            ) : (
              <button
                onClick={onOpenLogin}
                className="flex items-center space-x-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:from-blue-600 hover:to-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <LogIn className="w-4 h-4" />
                <span>Login / Sign Up</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
