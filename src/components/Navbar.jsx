import React, { useState } from 'react';
import { 
  Menu, 
  Search, 
  Bell, 
  Sparkles, 
  Flame, 
  Plus, 
  Check, 
  ChevronDown,
  Layers,
  GraduationCap
} from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setIsMobileOpen, 
  profile, 
  onQuickTask, 
  onAskAI,
  onGoHome,
  notifications = []
}) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [readNotifs, setReadNotifs] = useState([]);

  const defaultNotifications = [
    { id: 1, title: 'Hackathon Alert', desc: 'Smart India Hackathon registration closes in 23 days!', time: '10m ago' },
    { id: 2, title: 'Study Reminder', desc: 'Gradient Descent implementation due in 5 days.', time: '1h ago' },
    { id: 3, title: 'Pilot AI Tip', desc: 'Your ATS resume score could increase with metrics in Deep Learning section.', time: '3h ago' }
  ];

  const notifList = notifications.length > 0 ? notifications : defaultNotifications;

  const getPageTitle = (tab) => {
    switch(tab) {
      case 'dashboard': return 'Student Overview';
      case 'study': return 'Study Planner & Timetable';
      case 'opportunities': return 'Opportunity Finder';
      case 'resume': return 'AI Resume Analyzer';
      case 'roadmap': return 'Career Roadmap Engine';
      case 'pilot-ai': return 'Pilot AI Assistant';
      case 'skills': return 'Skill Tracker & Goals';
      case 'achievements': return 'Achievements & Quests';
      case 'profile': return 'Student Profile';
      default: return 'CampusPilot AI';
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-[#080D19]/80 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
      {/* Left section */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 lg:hidden transition-colors"
          aria-label="Open mobile menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {getPageTitle(activeTab)}
            </h1>
            <span className="hidden sm:inline-block text-[11px] font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">
              Live MVP
            </span>
          </div>
          <p className="text-[11px] text-slate-400 hidden sm:block">
            {profile.shortBranch || 'B.Tech CSM – AI/ML'} • Semester 6
          </p>
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* Quick Ask AI button */}
        <button
          onClick={onAskAI}
          className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-glow-purple transition-all duration-200"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          <span>Ask Pilot AI</span>
        </button>

        {/* Quick Add Task */}
        <button
          onClick={onQuickTask}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors"
        >
          <Plus className="w-3.5 h-3.5 text-purple-400" />
          <span>Add Task</span>
        </button>

        {/* Learning Streak Pill */}
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold">
          <Flame className="w-4 h-4 fill-amber-400 text-amber-400 animate-pulse" />
          <span>{profile.learningStreak || 14}d</span>
        </div>

        {/* Notification Bell Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            {notifList.length > readNotifs.length && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_8px_#8B5CF6]" />
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 rounded-2xl bg-[#111827] border border-white/10 shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Campus Alerts</span>
                <button 
                  onClick={() => setReadNotifs(notifList.map(n => n.id))}
                  className="text-[11px] text-cyan-400 hover:underline"
                >
                  Mark all read
                </button>
              </div>

              <div className="mt-3 space-y-2.5 max-h-64 overflow-y-auto">
                {notifList.map((n) => (
                  <div 
                    key={n.id} 
                    className={`p-2.5 rounded-xl border text-xs transition-colors ${
                      readNotifs.includes(n.id) 
                        ? 'bg-white/[0.02] border-white/5 text-slate-400' 
                        : 'bg-purple-500/5 border-purple-500/20 text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between font-semibold text-white">
                      <span>{n.title}</span>
                      <span className="text-[10px] text-slate-400 font-normal">{n.time}</span>
                    </div>
                    <p className="mt-1 text-slate-300 text-[11px] leading-relaxed">{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Home / Landing Switcher */}
        <button
          onClick={onGoHome}
          className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs text-slate-400 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
          title="Back to Landing Page"
        >
          <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-[11px]">Home</span>
        </button>
      </div>
    </header>
  );
}
