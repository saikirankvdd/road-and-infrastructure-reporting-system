import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import { PermissionsModal } from './components/PermissionsModal';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { ReportWizard } from './pages/report/ReportWizard';
import { MyReports } from './pages/reports/MyReports';
import { ReportDetails } from './pages/reports/ReportDetails';
import { SimilarReportsMap } from './pages/reports/SimilarReportsMap';
import { About } from './pages/About';
import { Settings } from './pages/Settings';

export function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'my-reports', 'about', 'settings', 'report-wizard', 'report-details', 'similar-map'
  const [selectedReportId, setSelectedReportId] = useState('RW-2026-001284');

  // Common User Auth State - Default to public guest landing mode
  const [user, setUser] = useState({
    name: '',
    email: '',
    isLoggedIn: false,
    citizenId: ''
  });

  // Modal States
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isPermissionsModalOpen, setIsPermissionsModalOpen] = useState(false);

  const handleStartReport = () => {
    if (!user.isLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }
    setActiveTab('report-wizard');
  };

  const handleViewReports = () => {
    if (!user.isLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }
    setActiveTab('my-reports');
  };

  const handleSelectReport = (reportId) => {
    setSelectedReportId(reportId);
    setActiveTab('report-details');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Global Navbar */}
      <Navbar
        user={user}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onStartReport={handleStartReport}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onOpenSettings={() => setActiveTab('settings')}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1">
        {activeTab === 'home' && (
          user.isLoggedIn ? (
            <Dashboard
              user={user}
              onStartReport={handleStartReport}
              onViewReports={handleViewReports}
              onSelectReport={handleSelectReport}
            />
          ) : (
            <Home
              user={user}
              onStartReport={handleStartReport}
              onViewReports={handleViewReports}
              onSelectReport={handleSelectReport}
              onOpenLogin={() => setIsLoginModalOpen(true)}
            />
          )
        )}

        {activeTab === 'my-reports' && (
          <MyReports
            onStartReport={handleStartReport}
            onSelectReport={handleSelectReport}
          />
        )}

        {activeTab === 'report-wizard' && (
          <ReportWizard
            user={user}
            onCancel={() => setActiveTab('home')}
            onReportCreated={(rep) => {
              setSelectedReportId(rep.id);
              setActiveTab('report-details');
            }}
            onTrackReport={(id) => {
              setSelectedReportId(id);
              setActiveTab('report-details');
            }}
            onViewSimilarMap={() => setActiveTab('similar-map')}
          />
        )}

        {activeTab === 'report-details' && (
          <ReportDetails
            reportId={selectedReportId}
            onBack={() => setActiveTab('my-reports')}
            onViewSimilarMap={() => setActiveTab('similar-map')}
          />
        )}

        {activeTab === 'similar-map' && (
          <SimilarReportsMap
            onBack={() => setActiveTab('report-details')}
            onInspectReport={handleSelectReport}
          />
        )}

        {activeTab === 'about' && (
          <About onStartReport={handleStartReport} />
        )}

        {activeTab === 'settings' && (
          <Settings
            user={user}
            onLogout={() => {
              setUser({ isLoggedIn: false, name: '', email: '', citizenId: '' });
              setActiveTab('home');
            }}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={(userData) => {
          setUser(userData);
          setActiveTab('home');
        }}
      />

      <PermissionsModal
        isOpen={isPermissionsModalOpen}
        onClose={() => setIsPermissionsModalOpen(false)}
        onGrantPermissions={() => {}}
      />

    </div>
  );
}

export default App;
