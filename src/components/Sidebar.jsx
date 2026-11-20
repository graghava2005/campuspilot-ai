import React from 'react';
import { 
  LayoutDashboard, 
  CalendarCheck, 
  Compass, 
  FileText, 
  Map, 
  Sparkles, 
  Award, 
  Zap, 
  User, 
  ExternalLink,
  Flame,
  ChevronRight,
  GraduationCap
} from 'lucide-react';

export const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
  { id: 'study', label: 'Study Planner', icon: CalendarCheck, badge: 'Tasks' },
  { id: 'opportunities', label: 'Opportunities', icon: Compass, badge: 'Hot' },
  { id: 'resume', label: 'Resume Analyzer', icon: FileText, badge: 'AI' },
  { id: 'roadmap', label: 'Career Roadmap', icon: Map, badge: null },
  { id: 'pilot-ai', label: 'Pilot AI Assistant', icon: Sparkles, badge: 'Pro' },
  { id: 'skills', label: 'Skill Tracker', icon: Zap, badge: null },
  { id: 'achievements', label: 'Achievements', icon: Award, badge: 'XP' },
  { id: 'profile', label: 'Student Profile', icon: User, badge: null }
];

export default function Sidebar({ activeTab, setActiveTab, profile, isMobileOpen, setIsMobileOpen, onGoHome }) {
  return (
    <>
      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar container */}
      <aside className={`fixed top-0 bottom-0 left-0 z-40 w-72 bg-[#0B1120] border-r border-white/10 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isMobileOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Brand Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div 
            onClick={() => { setActiveTab('dashboard'); setIsMobileOpen(false); }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-0.5 shadow-glow-purple group-hover:shadow-glow-mixed transition-all duration-300">
              <div className="w-full h-full bg-[#080D19] rounded-[10px] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors">CampusPilot</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">AI</span>
              </div>
              <p className="text-[11px] text-slate-400">Student Success OS</p>
            </div>
          </div>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5 custom-scroll">
          <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Platform Hub
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600/20 to-cyan-500/10 text-white border border-purple-500/30 shadow-[0_0_15px_rgba(139,92,246,0.15)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 transition-colors ${
                    isActive ? 'text-cyan-400' : 'text-slate-400 group-hover:text-slate-200'
                  }`} />
                  <span className={isActive ? 'font-semibold' : ''}>{item.label}</span>
                </div>

                <div className="flex items-center gap-2">
                  {item.badge && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      item.badge === 'AI' || item.badge === 'Pro'
                        ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : item.badge === 'Hot'
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />}
                </div>
              </button>
            );
          })}

          <div className="pt-4 px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Navigation
          </div>

          <button
            onClick={() => {
              onGoHome();
              setIsMobileOpen(false);
            }}
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/[0.04] transition-colors"
          >
            <div className="flex items-center gap-3">
              <ExternalLink className="w-4 h-4 text-slate-400" />
              <span>Landing Page</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>

        {/* User Card & Gamification Snippet */}
        <div className="p-4 border-t border-white/10 bg-[#080D19]/60">
          <div 
            onClick={() => { setActiveTab('profile'); setIsMobileOpen(false); }}
            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 cursor-pointer transition-colors border border-transparent hover:border-white/10"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 p-0.5">
                <div className="w-full h-full bg-[#111827] rounded-full flex items-center justify-center font-bold text-sm text-white">
                  {profile.name?.charAt(0) || 'R'}
                </div>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#0B1120] rounded-full" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-white truncate">{profile.name || 'Raghava'}</p>
                <div className="flex items-center gap-1 text-[11px] font-bold text-amber-400">
                  <Flame className="w-3 h-3 fill-amber-400" />
                  <span>{profile.learningStreak || 14}d</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 truncate">{profile.shortBranch || 'B.Tech CSM'}</p>
              
              <div className="mt-2 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-cyan-400 h-1.5 rounded-full" 
                  style={{ width: `${profile.profileCompletion || 88}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
