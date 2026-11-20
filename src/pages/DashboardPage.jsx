import React from 'react';
import { 
  Flame, 
  Sparkles, 
  GraduationCap, 
  Calendar, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  Trophy, 
  Briefcase, 
  BookOpen, 
  ChevronRight,
  TrendingUp,
  Award,
  AlertCircle,
  FileCheck,
  Zap,
  Target
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';
import StatCard from '../components/StatCard';
import { formatDate, getDaysRemaining } from '../utils/helpers';

export default function DashboardPage({ 
  profile, 
  tasks, 
  opportunities, 
  skills, 
  badges, 
  setActiveTab,
  onQuickTask,
  onAskAI
}) {
  const completedTasks = tasks.filter(t => t.completed).length;
  const pendingTasks = tasks.length - completedTasks;
  const taskProgress = tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0;

  // Chart data for weekly study hours
  const weeklyData = [
    { day: 'Mon', hours: 4.5, focus: 'ML Math' },
    { day: 'Tue', hours: 6.0, focus: 'Deep Learning' },
    { day: 'Wed', hours: 5.2, focus: 'DSA Problems' },
    { day: 'Thu', hours: 7.0, focus: 'LangChain & RAG' },
    { day: 'Fri', hours: 4.8, focus: 'Full Stack' },
    { day: 'Sat', hours: 8.5, focus: 'Hackathon Sprint' },
    { day: 'Sun', hours: 3.5, focus: 'Pilot AI Mock' },
  ];

  // Activity breakdown by domain
  const domainActivity = [
    { name: 'AI/ML', value: 38 },
    { name: 'DSA & C++', value: 24 },
    { name: 'Web Dev', value: 20 },
    { name: 'Cloud & OS', value: 18 },
  ];

  // Upcoming deadlines (tasks + opportunities)
  const upcomingDeadlines = [
    ...tasks.filter(t => !t.completed).map(t => ({
      title: t.title,
      type: 'Study Task',
      subject: t.subject,
      deadline: t.deadline,
      priority: t.priority
    })),
    ...opportunities.internships.slice(0, 2).map(o => ({
      title: `${o.company} - ${o.role}`,
      type: 'Internship',
      subject: o.stipend,
      deadline: o.deadline,
      priority: 'High'
    })),
    ...opportunities.hackathons.slice(0, 1).map(h => ({
      title: h.name,
      type: 'Hackathon',
      subject: h.prizeDetails,
      deadline: h.registrationDeadline,
      priority: 'High'
    }))
  ].sort((a, b) => new Date(a.deadline) - new Date(b.deadline)).slice(0, 4);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/40 via-[#111827] to-cyan-950/40 border border-purple-500/20 p-6 sm:p-8 shadow-glow-purple">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>AI Placement Season 2026 Ready</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-white">{profile.name || 'Raghava'}</span>! 👋
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-2 font-medium">
              {profile.shortBranch || 'B.Tech CSM – AI/ML'} • Semester 6 • {profile.college || 'Engineering Institute'}
            </p>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Targeting <span className="text-cyan-300 font-semibold">{profile.careerGoal || 'AI/ML Engineer'}</span>. You are on track with your 14-day study streak!
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
            <button
              onClick={() => setActiveTab('pilot-ai')}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-glow-purple transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Ask Pilot AI</span>
            </button>
            <button
              onClick={onQuickTask}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors flex items-center gap-2"
            >
              <span>+ Add Task</span>
            </button>
          </div>
        </div>
      </div>

      {/* Primary KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Profile Completion"
          value={`${profile.profileCompletion || 88}%`}
          subtitle="Portfolio & verified credentials"
          icon={GraduationCap}
          color="purple"
          trend="+5% this week"
          trendPositive={true}
        />
        <StatCard
          title="Learning Streak"
          value={`${profile.learningStreak || 14} Days`}
          subtitle="Consistent daily academic activity"
          icon={Flame}
          color="amber"
          trend="Top 5% on campus"
          trendPositive={true}
        />
        <StatCard
          title="Skills Acquired"
          value={`${skills.length} Skills`}
          subtitle={`${skills.filter(s => s.level === 'Advanced' || s.level === 'Expert').length} at Advanced / Expert`}
          icon={Zap}
          color="cyan"
          trend="+2 verified"
          trendPositive={true}
        />
        <StatCard
          title="Study Progress"
          value={`${taskProgress}%`}
          subtitle={`${completedTasks} of ${tasks.length} tasks completed`}
          icon={CheckCircle2}
          color="emerald"
          trend={`${pendingTasks} remaining`}
          trendPositive={false}
        />
      </div>

      {/* Charts & Interactive Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Study Hours Chart */}
        <div className="lg:col-span-2 rounded-2xl bg-[#111827] border border-white/10 p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-bold text-white">Weekly Study & Focus Hours</h3>
              <p className="text-xs text-slate-400">Total 39.5 hours logged this week across coursework & AI prep</p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
              Avg 5.6 hrs/day
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                <XAxis dataKey="day" stroke="#64748B" fontSize={12} tickLine={false} />
                <YAxis stroke="#64748B" fontSize={12} tickLine={false} />
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="rounded-xl bg-[#080D19] border border-white/10 p-3 shadow-xl text-xs">
                          <p className="font-bold text-white">{data.day}: {data.hours} Hours</p>
                          <p className="text-cyan-400 mt-0.5">Focus: {data.focus}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="hours" 
                  stroke="#8B5CF6" 
                  strokeWidth={2.5} 
                  fillOpacity={1} 
                  fill="url(#purpleGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Domain Activity Chart */}
        <div className="rounded-2xl bg-[#111827] border border-white/10 p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white">Domain Breakdown</h3>
              <Target className="w-4 h-4 text-cyan-400" />
            </div>
            <p className="text-xs text-slate-400 mb-6">Percentage of active study time invested per discipline</p>
          
            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={domainActivity} layout="vertical" margin={{ top: 0, right: 20, left: 20, bottom: 0 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg bg-[#080D19] border border-white/10 p-2 text-xs text-white">
                            {payload[0].payload.name}: <span className="font-bold text-cyan-400">{payload[0].value}%</span>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="value" fill="#22D3EE" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
            <span className="text-slate-400">Roadmap Alignment</span>
            <span className="text-emerald-400 font-bold">94% Optimal for AI/ML</span>
          </div>
        </div>
      </div>

      {/* Quick Action Hub & AI Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Recommendations Card */}
        <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-[#111827] to-[#172033] border border-cyan-500/20 p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white">Pilot AI Personalized Recommendations</h3>
            </div>
            <button
              onClick={() => setActiveTab('pilot-ai')}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              <span>Explore All</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3 mt-4">
            <div className="p-3.5 rounded-xl bg-[#080D19]/60 border border-white/5 flex items-start justify-between gap-4 hover:border-purple-500/30 transition-colors">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0 mt-0.5">
                  <FileCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Resume Suggestion: Quantify PyTorch Project Impact</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Your sentiment analysis project will gain 14 ATS points by mentioning model latency reduction and dataset size.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('resume')}
                className="shrink-0 text-xs px-2.5 py-1 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 font-semibold transition-colors"
              >
                Analyze
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-[#080D19]/60 border border-white/5 flex items-start justify-between gap-4 hover:border-cyan-500/30 transition-colors">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Opportunity Match: Smart India Hackathon 2025</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Your AI/ML skills match the "AI in Healthcare" problem statement. 6-member teams forming now.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('opportunities')}
                className="shrink-0 text-xs px-2.5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-semibold transition-colors"
              >
                View
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-[#080D19]/60 border border-white/5 flex items-start justify-between gap-4 hover:border-emerald-500/30 transition-colors">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Roadmap Milestone: Transformer Encoder Architecture</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    You completed Backpropagation. Next step in Stage 3 is Multi-Head Self-Attention.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('roadmap')}
                className="shrink-0 text-xs px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-semibold transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Deadlines Widget */}
        <div className="rounded-2xl bg-[#111827] border border-white/10 p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white">Upcoming Deadlines</h3>
              <Clock className="w-4 h-4 text-purple-400" />
            </div>

            <div className="space-y-3">
              {upcomingDeadlines.map((item, idx) => {
                const days = getDaysRemaining(item.deadline);
                return (
                  <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {item.type}
                      </span>
                      <span className={`text-[11px] font-semibold ${
                        days && days <= 5 ? 'text-rose-400' : 'text-slate-400'
                      }`}>
                        {days !== null ? `${days}d left` : 'Upcoming'}
                      </span>
                    </div>
                    <p className="font-semibold text-white mt-1.5 truncate">{item.title}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{item.subject} • Due {formatDate(item.deadline)}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => setActiveTab('study')}
            className="w-full mt-4 py-2 rounded-xl text-xs font-bold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Open Study Planner</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Featured Opportunities Preview */}
      <div className="rounded-2xl bg-[#111827] border border-white/10 p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-base font-bold text-white">Recommended Opportunities</h3>
            <p className="text-xs text-slate-400">Curated high-impact summer internships, grants, and hackathons</p>
          </div>
          <button
            onClick={() => setActiveTab('opportunities')}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
          >
            <span>View All ({opportunities.internships.length + opportunities.scholarships.length + opportunities.hackathons.length})</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {opportunities.internships.slice(0, 3).map((opp) => (
            <div 
              key={opp.id} 
              className="p-4 rounded-xl bg-[#080D19]/60 border border-white/5 hover:border-purple-500/30 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {opp.company}
                  </span>
                  <span className="text-[11px] text-emerald-400 font-semibold">{opp.stipend}</span>
                </div>
                <h4 className="text-sm font-bold text-white mt-2 group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {opp.role}
                </h4>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {opp.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400">Due {formatDate(opp.deadline)}</span>
                <button
                  onClick={() => setActiveTab('opportunities')}
                  className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1"
                >
                  <span>Apply Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
