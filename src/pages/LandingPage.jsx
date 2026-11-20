import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  CalendarCheck, 
  Compass, 
  FileText, 
  Map, 
  Zap, 
  Award, 
  ChevronDown, 
  Star, 
  GraduationCap, 
  ShieldCheck, 
  TrendingUp, 
  Terminal,
  Flame,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export default function LandingPage({ onGetStarted, onExploreFeatures }) {
  const [openFaq, setOpenFaq] = useState(0);

  const features = [
    {
      icon: Sparkles,
      title: "Pilot AI Companion",
      desc: "Instant personalized answers for syllabus topics, DSA roadmaps, mock placement interviews, and timetable generation without paid keys.",
      tag: "Intelligent Assistant",
      color: "from-purple-500/20 to-indigo-500/20 text-purple-400"
    },
    {
      icon: CalendarCheck,
      title: "Smart Study Planner",
      desc: "Organize academic subjects, set high-priority milestones, estimate study hours, and generate automated weekly timetables with localStorage persistence.",
      tag: "Productivity",
      color: "from-cyan-500/20 to-blue-500/20 text-cyan-400"
    },
    {
      icon: Compass,
      title: "Opportunity Finder",
      desc: "Curated internships at Google, Microsoft, and NVIDIA, high-value STEM scholarships, and premier collegiate hackathons with bookmarking.",
      tag: "Career Radar",
      color: "from-amber-500/20 to-orange-500/20 text-amber-400"
    },
    {
      icon: FileText,
      title: "AI Resume Analyzer",
      desc: "Client-side ATS scoring engine that pinpoints missing sections, quantifies action metrics, highlights hard skills, and guides job readiness.",
      tag: "Placement Edge",
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400"
    },
    {
      icon: Map,
      title: "6 Specialized Career Roadmaps",
      desc: "Step-by-step milestones for AI/ML, Full Stack, Data Science, SWE, Data Analytics, and Cloud Engineering with interactive checkboxes.",
      tag: "Curated Paths",
      color: "from-purple-500/20 to-pink-500/20 text-purple-400"
    },
    {
      icon: Award,
      title: "Gamified Skill Tracker & XP",
      desc: "Earn XP points, unlock rare badges, complete weekly study quests, and maintain your learning streak as you master technical competencies.",
      tag: "Gamification",
      color: "from-indigo-500/20 to-cyan-500/20 text-indigo-400"
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Set Up Your Academic Profile",
      desc: "Enter your degree, branch, target graduation year, and career aspirations in seconds."
    },
    {
      step: "02",
      title: "Follow Your Career Roadmap",
      desc: "Track concrete milestones, build industry-grade projects, and sharpen placement algorithms."
    },
    {
      step: "03",
      title: "Score Your Resume & Apply",
      desc: "Evaluate your resume ATS readiness, bookmark verified opportunities, and land dream roles."
    }
  ];

  const benefits = [
    "100% Client-Side & Zero-Cost: No API limits or subscriptions required",
    "Tailored for Indian & Global Engineering Curriculums (CS, AI/ML, ECE)",
    "Instant LocalStorage Sync: Never lose your study tasks or bookmark data",
    "Integrated ATS Resume Evaluator with actionable feedback",
    "Complete Pre-Placement Preparation (DSA, Core CS, System Design)"
  ];

  const faqs = [
    {
      q: "What makes CampusPilot AI different from generic study planners?",
      a: "CampusPilot AI is engineered specifically for engineering undergraduates. It bridges the gap between college semester exams and real-world software careers by integrating study timetables, live career roadmaps, realistic opportunity curation, and resume analysis into one seamless dark-mode SaaS dashboard."
    },
    {
      q: "Does this require paid API keys like OpenAI or Claude?",
      a: "No! CampusPilot AI is built with intelligent client-side heuristics and predefined knowledge bases for Pilot AI and Resume Analysis. It functions out of the box with zero subscription fees and zero external latency."
    },
    {
      q: "Is my student data and resume stored securely?",
      a: "Yes. All your study tasks, bookmarks, profile changes, and resume drafts are saved directly in your browser's LocalStorage. No server stores or shares your confidential academic information."
    },
    {
      q: "Can I customize the career roadmap for my specific target role?",
      a: "Absolutely. You can switch between 6 specialized technical careers (AI/ML Engineer, Full Stack, Data Scientist, Software Engineer, Data Analyst, Cloud Engineer), check off completed milestones, and track your completion percentage dynamically."
    }
  ];

  return (
    <div className="min-h-screen bg-[#080D19] text-[#F8FAFC] selection:bg-purple-500/30 selection:text-cyan-300">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#080D19]/70 border-b border-white/10 px-6 sm:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-0.5 shadow-glow-purple">
            <div className="w-full h-full bg-[#080D19] rounded-[10px] flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-lg tracking-tight text-white">CampusPilot</span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">AI</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-cyan-300 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-cyan-300 transition-colors">How It Works</a>
          <a href="#benefits" className="hover:text-cyan-300 transition-colors">Benefits</a>
          <a href="#faq" className="hover:text-cyan-300 transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onGetStarted}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-glow-mixed transition-all duration-300 hover:scale-105"
          >
            <span>Launch App</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-28 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden text-center">
        {/* Glow backdrop effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-600/20 via-cyan-500/15 to-transparent blur-3xl pointer-events-none rounded-full" />
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-purple-500/30 shadow-[0_0_20px_rgba(139,92,246,0.2)] mb-8">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-semibold text-slate-200">
            Urgent Student Hackathon Release • Built for High Impact
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.1] sm:leading-[1.15]">
          Your College Journey.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-400 animate-gradient">
            Supercharged by AI.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          One intelligent platform to organize your studies, discover opportunities, build skills, and become career-ready.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onGetStarted}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-glow-mixed transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2.5"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreFeatures}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm bg-[#111827] hover:bg-[#172033] text-slate-200 border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Explore Features</span>
            <ChevronDown className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

        {/* Micro social proof */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Ready for B.Tech & Engineering Students</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            <span>100% Client-Side LocalStorage</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Integrated Pilot AI Assistant</span>
          </div>
        </div>

        {/* Animated Dashboard Preview Card */}
        <div className="mt-16 relative mx-auto max-w-5xl rounded-3xl p-1 bg-gradient-to-b from-purple-500/30 via-cyan-500/20 to-transparent shadow-[0_20px_80px_rgba(139,92,246,0.15)] group">
          <div className="rounded-[22px] bg-[#0B1120] border border-white/10 p-4 sm:p-6 text-left overflow-hidden">
            {/* Window bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">campuspilot-ai.app/dashboard</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Raghava (B.Tech CSM – AI/ML)</span>
              </div>
            </div>

            {/* Mock Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-[#111827] border border-purple-500/30">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Learning Streak</span>
                  <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                </div>
                <p className="text-2xl font-bold text-white mt-2">14 Days</p>
                <p className="text-xs text-emerald-400 mt-1">Top 5% consistency this semester</p>
              </div>

              <div className="p-4 rounded-xl bg-[#111827] border border-cyan-500/30">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">AI Career Target</span>
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
                <p className="text-2xl font-bold text-white mt-2">AI/ML Engineer</p>
                <p className="text-xs text-cyan-300 mt-1">Stage 3 in progress • 94% Match</p>
              </div>

              <div className="p-4 rounded-xl bg-[#111827] border border-emerald-500/30">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Resume ATS Readiness</span>
                  <FileText className="w-4 h-4 text-emerald-400" />
                </div>
                <p className="text-2xl font-bold text-white mt-2">86 / 100</p>
                <p className="text-xs text-emerald-400 mt-1">Ready for Google & MS intern screening</p>
              </div>
            </div>

            {/* Quick interactive peek button */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-cyan-900/30 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-white">Experience the full interactive dashboard</p>
                <p className="text-xs text-slate-400 mt-0.5">Click below to manage study tasks, opportunities, roadmaps, and chat with Pilot AI.</p>
              </div>
              <button
                onClick={onGetStarted}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 transition-colors shrink-0 flex items-center gap-2"
              >
                <span>Enter Live Workspace</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section id="features" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">Comprehensive Student Suite</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
            Engineered for Modern Engineers
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            Every tool you need to balance difficult university coursework with high-paying tech career prep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div 
                key={i} 
                className="group relative rounded-2xl bg-[#111827]/80 hover:bg-[#172033] border border-white/10 hover:border-purple-500/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-purple"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${feat.color} border border-white/10`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    {feat.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-400">Streamlined Workflow</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            How CampusPilot Supercharges You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((st, i) => (
            <div key={i} className="p-8 rounded-2xl bg-[#111827] border border-white/10 relative group">
              <span className="text-5xl font-black text-white/10 group-hover:text-purple-500/20 transition-colors">
                {st.step}
              </span>
              <h3 className="text-lg font-bold text-white mt-4">{st.title}</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Student Benefits */}
      <section id="benefits" className="py-20 px-6 sm:px-12 max-w-5xl mx-auto border-t border-white/10">
        <div className="rounded-3xl bg-gradient-to-r from-purple-900/30 via-[#111827] to-cyan-900/30 border border-purple-500/20 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">Why Students Love Us</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                Say goodbye to fragmented notes, missed deadlines & interview panic.
              </h2>
              <div className="mt-6 space-y-3">
                {benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#080D19]/80 border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center font-bold text-purple-300">
                  R
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Raghava</p>
                  <p className="text-xs text-slate-400">B.Tech CSM – AI/ML Undergrad</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                "CampusPilot organized my 6th-semester coursework while keeping my focus on AI/ML roadmaps. In just 2 weeks, my resume ATS score went from 62 to 86, and I unlocked 4 major hackathons I didn't know existed!"
              </p>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 sm:px-12 max-w-4xl mx-auto border-t border-white/10">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-400">Got Questions?</p>
          <h2 className="text-3xl font-extrabold text-white mt-2">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="rounded-xl bg-[#111827] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02]"
                >
                  <span className="text-sm font-bold text-white">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-cyan-400" />
          <span className="font-bold text-white">CampusPilot AI</span>
          <span>— Your Campus. Your Career. Your Future.</span>
        </div>

        <p>© 2026 CampusPilot AI. Built for Student Hackathon Excellence.</p>
      </footer>
    </div>
  );
}
