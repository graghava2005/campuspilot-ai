import React, { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { 
  initialProfile, 
  initialTasks, 
  sampleTimetable, 
  initialOpportunities, 
  initialSkills, 
  initialRoadmaps, 
  initialBadges 
} from './data/initialData';

// Components
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Toast from './components/Toast';
import Modal from './components/Modal';

// Pages
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import StudyPlannerPage from './pages/StudyPlannerPage';
import OpportunityFinderPage from './pages/OpportunityFinderPage';
import ResumeAnalyzerPage from './pages/ResumeAnalyzerPage';
import CareerRoadmapPage from './pages/CareerRoadmapPage';
import PilotAIPage from './pages/PilotAIPage';
import SkillTrackerPage from './pages/SkillTrackerPage';
import AchievementsPage from './pages/AchievementsPage';
import ProfilePage from './pages/ProfilePage';

export default function App() {
  // App views: 'landing' or 'app'
  const [currentView, setCurrentView] = useLocalStorage('campuspilot_view', 'landing');
  const [activeTab, setActiveTab] = useLocalStorage('campuspilot_active_tab', 'dashboard');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Persistent user state
  const [profile, setProfile] = useLocalStorage('campuspilot_profile', initialProfile);
  const [tasks, setTasks] = useLocalStorage('campuspilot_tasks', initialTasks);
  const [timetable, setTimetable] = useLocalStorage('campuspilot_timetable', sampleTimetable);
  const [opportunities, setOpportunities] = useLocalStorage('campuspilot_opportunities', initialOpportunities);
  const [skills, setSkills] = useLocalStorage('campuspilot_skills', initialSkills);
  const [roadmaps, setRoadmaps] = useLocalStorage('campuspilot_roadmaps', initialRoadmaps);
  const [badges, setBadges] = useLocalStorage('campuspilot_badges', initialBadges);

  // Toast notification system
  const [toasts, setToasts] = useState([]);

  const showToast = (title, message, type = 'info') => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    setToasts(prev => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const dismissToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Quick Task Modal
  const [isQuickTaskOpen, setIsQuickTaskOpen] = useState(false);
  const [quickTaskTitle, setQuickTaskTitle] = useState('');
  const [quickTaskSubject, setQuickTaskSubject] = useState('Machine Learning');
  const [quickTaskPriority, setQuickTaskPriority] = useState('High');

  const handleCreateQuickTask = (e) => {
    e.preventDefault();
    if (!quickTaskTitle.trim()) return;

    const newTask = {
      id: `task-${Date.now()}`,
      title: quickTaskTitle.trim(),
      subject: quickTaskSubject,
      priority: quickTaskPriority,
      deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      estimatedHours: 3,
      notes: 'Quick study task added from navigation bar',
      completed: false
    };

    setTasks(prev => [newTask, ...prev]);
    setQuickTaskTitle('');
    setIsQuickTaskOpen(false);
    showToast('Task Created! 🚀', `Added: ${newTask.title}`, 'success');
  };

  // If in landing page mode, render LandingPage
  if (currentView === 'landing') {
    return (
      <div className="bg-[#080D19] min-h-screen text-[#F8FAFC]">
        <LandingPage
          onGetStarted={() => {
            setCurrentView('app');
            setActiveTab('dashboard');
          }}
          onExploreFeatures={() => {
            setCurrentView('app');
            setActiveTab('dashboard');
          }}
        />
        <Toast toasts={toasts} onDismiss={dismissToast} />
      </div>
    );
  }

  // Main App Shell
  return (
    <div className="min-h-screen bg-[#080D19] text-[#F8FAFC] flex selection:bg-purple-500/30 selection:text-cyan-300">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        profile={profile}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        onGoHome={() => setCurrentView('landing')}
      />

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-72 flex flex-col min-w-0 min-h-screen">
        {/* Top Navbar */}
        <Navbar
          activeTab={activeTab}
          setIsMobileOpen={setIsMobileOpen}
          profile={profile}
          onQuickTask={() => setIsQuickTaskOpen(true)}
          onAskAI={() => setActiveTab('pilot-ai')}
          onGoHome={() => setCurrentView('landing')}
        />

        {/* Dynamic Page Content */}
        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto">
          {activeTab === 'dashboard' && (
            <DashboardPage
              profile={profile}
              tasks={tasks}
              opportunities={opportunities}
              skills={skills}
              badges={badges}
              setActiveTab={setActiveTab}
              onQuickTask={() => setIsQuickTaskOpen(true)}
              onAskAI={() => setActiveTab('pilot-ai')}
            />
          )}

          {activeTab === 'study' && (
            <StudyPlannerPage
              tasks={tasks}
              setTasks={setTasks}
              timetable={timetable}
              setTimetable={setTimetable}
              showToast={showToast}
            />
          )}

          {activeTab === 'opportunities' && (
            <OpportunityFinderPage
              opportunities={opportunities}
              setOpportunities={setOpportunities}
              showToast={showToast}
            />
          )}

          {activeTab === 'resume' && (
            <ResumeAnalyzerPage
              showToast={showToast}
            />
          )}

          {activeTab === 'roadmap' && (
            <CareerRoadmapPage
              roadmaps={roadmaps}
              setRoadmaps={setRoadmaps}
              showToast={showToast}
            />
          )}

          {activeTab === 'pilot-ai' && (
            <PilotAIPage
              profile={profile}
              showToast={showToast}
            />
          )}

          {activeTab === 'skills' && (
            <SkillTrackerPage
              skills={skills}
              setSkills={setSkills}
              showToast={showToast}
            />
          )}

          {activeTab === 'achievements' && (
            <AchievementsPage
              profile={profile}
              setProfile={setProfile}
              badges={badges}
              setBadges={setBadges}
              showToast={showToast}
            />
          )}

          {activeTab === 'profile' && (
            <ProfilePage
              profile={profile}
              setProfile={setProfile}
              showToast={showToast}
            />
          )}
        </main>
      </div>

      {/* Global Quick Task Modal */}
      <Modal
        isOpen={isQuickTaskOpen}
        onClose={() => setIsQuickTaskOpen(false)}
        title="Quick Add Study Milestone"
      >
        <form onSubmit={handleCreateQuickTask} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Task Title *
            </label>
            <input
              type="text"
              required
              autoFocus
              value={quickTaskTitle}
              onChange={(e) => setQuickTaskTitle(e.target.value)}
              placeholder="e.g. Implement Transformer Attention or Solve 5 LeetCode DP"
              className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                value={quickTaskSubject}
                onChange={(e) => setQuickTaskSubject(e.target.value)}
                placeholder="Machine Learning, DSA..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-sm text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Priority
              </label>
              <select
                value={quickTaskPriority}
                onChange={(e) => setQuickTaskPriority(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-sm text-white focus:outline-none focus:border-purple-500"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={() => setIsQuickTaskOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-glow-mixed transition-all"
            >
              Add Task
            </button>
          </div>
        </form>
      </Modal>

      {/* Global Toast Notifications */}
      <Toast toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
