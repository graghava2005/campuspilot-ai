import React, { useState } from 'react';
import { 
  Map, 
  Brain, 
  Layers, 
  TrendingUp, 
  Code, 
  PieChart, 
  Cloud, 
  CheckCircle2, 
  Circle, 
  ChevronDown, 
  ChevronRight, 
  Sparkles, 
  FolderGit2, 
  HelpCircle, 
  Award,
  Zap,
  Target
} from 'lucide-react';
import { triggerConfetti } from '../utils/helpers';

export default function CareerRoadmapPage({ 
  roadmaps, 
  setRoadmaps, 
  showToast 
}) {
  const [selectedRoadmapId, setSelectedRoadmapId] = useState('aiml');
  const [expandedStages, setExpandedStages] = useState({ 'aiml-1': true, 'aiml-2': true, 'aiml-3': true });

  const currentRoadmap = roadmaps.find(r => r.id === selectedRoadmapId) || roadmaps[0];

  // Map icons
  const iconMap = {
    Brain: Brain,
    Layers: Layers,
    TrendingUp: TrendingUp,
    Code: Code,
    PieChart: PieChart,
    Cloud: Cloud
  };

  const CurrentIcon = iconMap[currentRoadmap.icon] || Brain;

  // Calculate completion percentage
  let totalTopics = 0;
  let doneTopics = 0;
  currentRoadmap.stages.forEach(stage => {
    stage.topics.forEach(t => {
      totalTopics++;
      if (t.done) doneTopics++;
    });
  });
  const overallProgress = totalTopics > 0 ? Math.round((doneTopics / totalTopics) * 100) : 0;

  // Toggle stage topic done
  const handleToggleTopic = (stageId, topicName) => {
    setRoadmaps(prevRoadmaps => {
      return prevRoadmaps.map(rm => {
        if (rm.id !== selectedRoadmapId) return rm;

        const updatedStages = rm.stages.map(st => {
          if (st.id !== stageId) return st;

          const updatedTopics = st.topics.map(tp => {
            if (tp.name === topicName) {
              const nextDone = !tp.done;
              if (nextDone) {
                showToast('Milestone Mastered! 🚀', `Completed: ${tp.name.slice(0, 30)}...`, 'success');
              }
              return { ...tp, done: nextDone };
            }
            return tp;
          });

          const allDone = updatedTopics.every(tp => tp.done);
          if (allDone && !st.completed) {
            triggerConfetti();
            showToast('Stage Completed! 🏆', `Mastered ${st.name}`, 'success');
          }

          return { ...st, topics: updatedTopics, completed: allDone };
        });

        return { ...rm, stages: updatedStages };
      });
    });
  };

  // Toggle expand/collapse
  const toggleStageExpand = (stageId) => {
    setExpandedStages(prev => ({
      ...prev,
      [stageId]: !prev[stageId]
    }));
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/40 via-[#111827] to-cyan-900/40 border border-purple-500/20 p-6 sm:p-8">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-2">
              <Map className="w-3.5 h-3.5" />
              <span>Industry-Aligned Engineering Milestones</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Interactive Career Roadmaps
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Track foundational math, system design, capstone projects, and interview preparation for high-demand engineering careers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2.5 rounded-2xl bg-[#080D19]/80 border border-white/10 text-right">
              <span className="text-[11px] text-slate-400 block">Roadmap Velocity</span>
              <span className="text-xl font-black text-cyan-300">{overallProgress}% Done</span>
            </div>
          </div>
        </div>
      </div>

      {/* Career Path Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {roadmaps.map((rm) => {
          const IconComponent = iconMap[rm.icon] || Brain;
          const isSelected = selectedRoadmapId === rm.id;

          // Compute individual rm progress
          let rmTotal = 0;
          let rmDone = 0;
          rm.stages.forEach(s => s.topics.forEach(t => { rmTotal++; if (t.done) rmDone++; }));
          const rmPct = rmTotal > 0 ? Math.round((rmDone / rmTotal) * 100) : 0;

          return (
            <button
              key={rm.id}
              onClick={() => setSelectedRoadmapId(rm.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-br from-purple-900/40 to-cyan-900/30 border-cyan-400/50 shadow-glow-purple -translate-y-0.5'
                  : 'bg-[#111827] border-white/10 hover:border-purple-500/30 hover:bg-[#172033]'
              }`}
            >
              <div>
                <div className={`p-2 rounded-xl w-fit ${
                  isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/5 text-slate-400'
                }`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <h4 className={`text-xs font-bold mt-2.5 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {rm.title}
                </h4>
              </div>

              <div className="mt-3 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div 
                  className={`h-1.5 rounded-full ${isSelected ? 'bg-cyan-400' : 'bg-purple-500'}`} 
                  style={{ width: `${rmPct}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Roadmap Details Overview */}
      <div className="rounded-2xl bg-[#111827] border border-white/10 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-400 text-white shadow-glow-mixed shrink-0">
              <CurrentIcon className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">{currentRoadmap.title}</h3>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {currentRoadmap.match}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {currentRoadmap.tagline}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-[#080D19] border border-white/5">
              <span className="text-slate-400 text-[11px] block">Average CTC</span>
              <span className="font-bold text-emerald-400 mt-0.5 block">{currentRoadmap.stats.averageSalary}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#080D19] border border-white/5">
              <span className="text-slate-400 text-[11px] block">Time to Master</span>
              <span className="font-bold text-white mt-0.5 block">{currentRoadmap.stats.timeToLearn}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#080D19] border border-white/5">
              <span className="text-slate-400 text-[11px] block">Stages</span>
              <span className="font-bold text-purple-400 mt-0.5 block">{currentRoadmap.stages.length} Levels</span>
            </div>
            <div className="p-3 rounded-xl bg-[#080D19] border border-white/5">
              <span className="text-slate-400 text-[11px] block">Open Roles</span>
              <span className="font-bold text-cyan-300 mt-0.5 block">{currentRoadmap.stats.openOpportunities}</span>
            </div>
          </div>
        </div>

        {/* Skills, Languages, Tools Badges */}
        <div className="py-6 border-b border-white/10 space-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Required Skills</span>
            <div className="flex flex-wrap gap-2">
              {currentRoadmap.skills.map((sk, idx) => (
                <span key={idx} className="text-xs px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20 font-medium">
                  {sk}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Core Languages</span>
              <div className="flex flex-wrap gap-2">
                {currentRoadmap.languages.map((l, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono">
                    {l}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Tools & Platforms</span>
              <div className="flex flex-wrap gap-2">
                {currentRoadmap.tools.map((t, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Learning Stages with Interactive Checkboxes */}
        <div className="py-6 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              Learning Stages & Checkpoints
            </h4>
            <span className="text-xs text-slate-400">Click checkboxes to track completion</span>
          </div>

          <div className="space-y-4">
            {currentRoadmap.stages.map((stage, sIdx) => {
              const isExpanded = expandedStages[stage.id] !== false;
              const completedTopicsCount = stage.topics.filter(t => t.done).length;
              const stagePct = Math.round((completedTopicsCount / stage.topics.length) * 100);

              return (
                <div 
                  key={stage.id} 
                  className={`rounded-2xl border transition-all ${
                    stage.completed 
                      ? 'bg-emerald-950/10 border-emerald-500/30' 
                      : 'bg-[#080D19]/80 border-white/10'
                  }`}
                >
                  {/* Stage Accordion Header */}
                  <div 
                    onClick={() => toggleStageExpand(stage.id)}
                    className="p-5 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-1.5 rounded-lg ${
                        stage.completed ? 'text-emerald-400 bg-emerald-500/10' : 'text-purple-400 bg-purple-500/10'
                      }`}>
                        {stage.completed ? <CheckCircle2 className="w-5 h-5" /> : <Target className="w-5 h-5" />}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h5 className="text-sm font-bold text-white">{stage.name}</h5>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/5 text-slate-400">
                            {stage.duration}
                          </span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300">
                            {stage.difficulty}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{stage.description}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="hidden sm:block text-right">
                        <span className="text-xs font-bold text-white">{completedTopicsCount}/{stage.topics.length}</span>
                        <span className="text-[10px] text-slate-400 block">{stagePct}% complete</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  {/* Stage Topics Checklist */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 space-y-2 border-t border-white/5">
                      {stage.topics.map((topic, tIdx) => (
                        <div 
                          key={tIdx}
                          onClick={() => handleToggleTopic(stage.id, topic.name)}
                          className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-colors text-xs ${
                            topic.done 
                              ? 'bg-emerald-500/5 border-emerald-500/20 text-slate-300' 
                              : 'bg-white/[0.02] border-white/5 text-slate-200 hover:border-purple-500/30'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {topic.done ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            ) : (
                              <Circle className="w-4 h-4 text-slate-500 shrink-0" />
                            )}
                            <span className={topic.done ? 'line-through text-slate-400' : ''}>
                              {topic.name}
                            </span>
                          </div>
                          <span className={`text-[10px] font-semibold ${topic.done ? 'text-emerald-400' : 'text-slate-500'}`}>
                            {topic.done ? 'Done' : 'Pending'}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Project Suggestions & Interview Prep */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6 border-t border-white/10">
          {/* Project Suggestions */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-cyan-400" />
              <span>Recommended Portfolio Projects</span>
            </h4>

            <div className="space-y-3">
              {currentRoadmap.projects.map((proj, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#080D19] border border-white/5 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      proj.level === 'Capstone' 
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                        : proj.level === 'Intermediate'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    }`}>
                      {proj.level}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">{proj.tech}</span>
                  </div>
                  <h5 className="font-bold text-white text-sm">{proj.title}</h5>
                  <p className="text-slate-400">{proj.outcome}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interview Preparation */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-purple-400" />
              <span>Technical & System Design Interview Prep</span>
            </h4>

            <div className="space-y-2.5">
              {currentRoadmap.interviewPrep.map((q, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#080D19] border border-white/5 text-xs flex items-start gap-3">
                  <span className="font-mono text-cyan-400 font-bold shrink-0 mt-0.5">Q{idx + 1}.</span>
                  <p className="text-slate-200 leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
