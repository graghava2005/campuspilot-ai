import React, { useState } from 'react';
import { 
  Zap, 
  Plus, 
  Edit3, 
  Trash2, 
  CheckCircle2, 
  Target, 
  Filter, 
  BarChart2, 
  Sparkles,
  TrendingUp,
  Award
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import Modal from '../components/Modal';
import { triggerConfetti } from '../utils/helpers';

export default function SkillTrackerPage({ 
  skills, 
  setSkills, 
  showToast 
}) {
  const categories = ['All', 'Programming', 'AI/ML', 'Web Development', 'Databases', 'Cloud', 'Communication'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    category: 'AI/ML',
    level: 'Intermediate',
    progress: 75,
    target: 'Advanced (90%)'
  });

  // Filter skills
  const filteredSkills = skills.filter(s => {
    return selectedCategory === 'All' || s.category === selectedCategory;
  });

  // Prepare category averages for chart
  const categoryStats = categories.filter(c => c !== 'All').map(cat => {
    const catSkills = skills.filter(s => s.category === cat);
    const avg = catSkills.length > 0 
      ? Math.round(catSkills.reduce((sum, s) => sum + s.progress, 0) / catSkills.length)
      : 0;
    return { category: cat, score: avg, fullMark: 100, count: catSkills.length };
  });

  // Handle Save (Add or Edit)
  const handleSaveSkill = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      showToast('Validation Error', 'Skill name is required', 'error');
      return;
    }

    if (editingSkill) {
      setSkills(prev => prev.map(s => {
        if (s.id === editingSkill.id) {
          return {
            ...s,
            name: formData.name.trim(),
            category: formData.category,
            level: formData.level,
            progress: Number(formData.progress),
            target: formData.target.trim()
          };
        }
        return s;
      }));
      showToast('Skill Updated! ⚡', `Updated ${formData.name}`, 'success');
      setEditingSkill(null);
    } else {
      const newSkill = {
        id: `sk-${Date.now()}`,
        name: formData.name.trim(),
        category: formData.category,
        level: formData.level,
        progress: Number(formData.progress),
        target: formData.target.trim(),
        verified: false
      };
      setSkills(prev => [newSkill, ...prev]);
      triggerConfetti();
      showToast('Skill Added! 🎯', `Added ${newSkill.name} to tracker`, 'success');
    }

    setIsAddModalOpen(false);
    setFormData({
      name: '',
      category: 'AI/ML',
      level: 'Intermediate',
      progress: 75,
      target: 'Advanced (90%)'
    });
  };

  const handleOpenEdit = (skill) => {
    setEditingSkill(skill);
    setFormData({
      name: skill.name,
      category: skill.category,
      level: skill.level,
      progress: skill.progress,
      target: skill.target || 'Mastery (95%)'
    });
    setIsAddModalOpen(true);
  };

  const handleDeleteSkill = (id) => {
    const target = skills.find(s => s.id === id);
    setSkills(prev => prev.filter(s => s.id !== id));
    showToast('Skill Deleted', `Removed ${target?.name || 'Skill'}`, 'info');
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/40 via-[#111827] to-cyan-900/40 border border-purple-500/20 p-6 sm:p-8">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>Competency Matrix & Goals</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Skill Tracker & Growth Metrics
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Track proficiency across Programming, AI/ML, Web Development, Databases, Cloud, and Communication.
            </p>
          </div>

          <button
            onClick={() => {
              setEditingSkill(null);
              setFormData({
                name: '',
                category: 'AI/ML',
                level: 'Intermediate',
                progress: 75,
                target: 'Advanced (90%)'
              });
              setIsAddModalOpen(true);
            }}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-glow-mixed transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Skill</span>
          </button>
        </div>
      </div>

      {/* Chart Section: Competency Radar + Category Average Bars */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Category Strength Radar */}
        <div className="lg:col-span-5 rounded-2xl bg-[#111827] border border-white/10 p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Skill Distribution Radar</h3>
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>
            <p className="text-xs text-slate-400 mb-4">Competency benchmark across 6 core technical verticals</p>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={categoryStats}>
                  <PolarGrid stroke="#1E293B" />
                  <PolarAngleAxis dataKey="category" stroke="#94A3B8" fontSize={10} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" fontSize={9} />
                  <Radar name="Proficiency" dataKey="score" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.4} />
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const d = payload[0].payload;
                        return (
                          <div className="rounded-lg bg-[#080D19] border border-white/10 p-2 text-xs text-white">
                            <span className="font-bold text-cyan-400">{d.category}</span>: {d.score}% avg ({d.count} skills)
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
            <span>Primary Focus: <strong className="text-cyan-300">AI/ML & Programming</strong></span>
            <span className="text-emerald-400 font-bold">Top Tier Undergrad</span>
          </div>
        </div>

        {/* Category Bar Graph */}
        <div className="lg:col-span-7 rounded-2xl bg-[#111827] border border-white/10 p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Category Proficiency Averages</h3>
              <BarChart2 className="w-4 h-4 text-cyan-400" />
            </div>
            <p className="text-xs text-slate-400 mb-4">Average progress scores mapped to industrial readiness</p>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryStats} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                  <XAxis dataKey="category" stroke="#64748B" fontSize={11} interval={0} angle={-15} textAnchor="end" />
                  <YAxis domain={[0, 100]} stroke="#64748B" fontSize={11} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const d = payload[0].payload;
                        return (
                          <div className="rounded-xl bg-[#080D19] border border-white/10 p-3 shadow-xl text-xs">
                            <p className="font-bold text-white">{d.category}</p>
                            <p className="text-cyan-400 mt-1">Average: {d.score}%</p>
                            <p className="text-slate-400">{d.count} tracked skills</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="score" fill="#8B5CF6" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
            <span>Total Tracked Skills: <strong className="text-white">{skills.length}</strong></span>
            <span>Target Benchmark: 85% Across All Domains</span>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-purple-600 text-white shadow-glow-purple'
                : 'bg-[#111827] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            {cat} {cat === 'All' ? `(${skills.length})` : `(${skills.filter(s => s.category === cat).length})`}
          </button>
        ))}
      </div>

      {/* Skills Matrix Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map(skill => (
          <div 
            key={skill.id}
            className="rounded-2xl bg-[#111827] border border-white/10 hover:border-purple-500/40 p-5 transition-all duration-200 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {skill.category}
                </span>

                <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleOpenEdit(skill)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                    title="Edit skill"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDeleteSkill(skill.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-white/5 transition-colors"
                    title="Delete skill"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mt-3">
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h4>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  skill.level === 'Expert' || skill.level === 'Mastery'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    : skill.level === 'Advanced'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'bg-slate-800 text-slate-300'
                }`}>
                  {skill.level}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                  <span>Proficiency</span>
                  <span className="font-bold text-white">{skill.progress}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-cyan-400 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Target Goal Footer */}
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
              <span className="text-slate-400 flex items-center gap-1">
                <Target className="w-3 h-3 text-purple-400" />
                <span>Next Goal:</span>
              </span>
              <span className="font-semibold text-slate-200">{skill.target}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Skill Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title={editingSkill ? `Edit Skill: ${editingSkill.name}` : 'Add Technical Skill'}
      >
        <form onSubmit={handleSaveSkill} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Skill / Tool Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. PyTorch, TypeScript, Docker, SQL"
              className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-sm text-white focus:outline-none focus:border-purple-500"
              >
                <option value="Programming">Programming</option>
                <option value="AI/ML">AI/ML</option>
                <option value="Web Development">Web Development</option>
                <option value="Databases">Databases</option>
                <option value="Cloud">Cloud</option>
                <option value="Communication">Communication</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Current Level
              </label>
              <select
                value={formData.level}
                onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-sm text-white focus:outline-none focus:border-purple-500"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Proficiency Progress ({formData.progress}%)
              </label>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              value={formData.progress}
              onChange={(e) => setFormData({ ...formData, progress: e.target.value })}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Learning Goal / Next Milestone
            </label>
            <input
              type="text"
              value={formData.target}
              onChange={(e) => setFormData({ ...formData, target: e.target.value })}
              placeholder="e.g. Master LoRA Fine-Tuning (90%)"
              className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-glow-mixed transition-all"
            >
              {editingSkill ? 'Save Changes' : 'Add Skill'}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
