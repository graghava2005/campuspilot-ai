import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  BookOpen, 
  Award, 
  Sparkles, 
  Save, 
  Edit2, 
  CheckCircle2, 
  Globe, 
  Flame,
  ShieldCheck,
  Target
} from 'lucide-react';
import { triggerConfetti } from '../utils/helpers';

export default function ProfilePage({ profile, setProfile, showToast }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...profile });

  // Recalculate profile completion
  const calculateCompletion = (data) => {
    const fields = [
      data.name, data.degree, data.branch, data.college, data.semester,
      data.gpa, data.email, data.interests, data.careerGoal, data.bio,
      data.github, data.linkedin
    ];
    const filled = fields.filter(f => f && f.toString().trim().length > 0).length;
    return Math.round((filled / fields.length) * 100);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const newCompletion = calculateCompletion(formData);
    const updated = {
      ...formData,
      profileCompletion: newCompletion
    };

    setProfile(updated);
    setIsEditing(false);
    triggerConfetti();
    showToast('Profile Updated! 🎓', 'Student credentials and interests saved', 'success');
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Top Banner & Profile Overview */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/40 via-[#111827] to-cyan-900/40 border border-purple-500/20 p-6 sm:p-8">
        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <div className="relative">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-1 shadow-glow-mixed">
                <div className="w-full h-full bg-[#080D19] rounded-[22px] flex items-center justify-center font-black text-3xl text-white">
                  {formData.name?.charAt(0) || 'R'}
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 p-1.5 bg-emerald-500 rounded-full border-4 border-[#0B1120]" title="Verified Student" />
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h2 className="text-2xl font-black text-white">{formData.fullName || formData.name}</h2>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified Student</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                {formData.branch}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {formData.college} • {formData.semester} • CGPA: <strong className="text-emerald-400">{formData.gpa}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (isEditing) {
                  // Cancel
                  setFormData({ ...profile });
                  setIsEditing(false);
                } else {
                  setIsEditing(true);
                }
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                isEditing
                  ? 'bg-white/10 text-slate-300 hover:text-white'
                  : 'bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-glow-mixed'
              }`}
            >
              {isEditing ? (
                <span>Cancel</span>
              ) : (
                <>
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Edit Profile</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Completion & Stats Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-[#111827] border border-white/10">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Profile Completion</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-black text-cyan-300">{profile.profileCompletion || 88}%</span>
            <span className="text-xs text-slate-400">Target: 100%</span>
          </div>
          <div className="mt-2 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-purple-500 to-cyan-400 h-1.5 rounded-full" 
              style={{ width: `${profile.profileCompletion || 88}%` }}
            />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#111827] border border-white/10">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Career Trajectory</span>
          <p className="text-base font-bold text-white mt-1 truncate">{profile.careerGoal || 'AI/ML Engineer'}</p>
          <span className="text-[11px] text-purple-400 font-semibold">Graduation: {profile.targetGraduation || '2026'}</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#111827] border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Campus Streak</span>
            <p className="text-2xl font-black text-amber-400 mt-1">{profile.learningStreak || 14} Days</p>
          </div>
          <Flame className="w-8 h-8 fill-amber-400 text-amber-400 animate-pulse" />
        </div>
      </div>

      {/* Profile Form (View & Edit) */}
      <form onSubmit={handleSave} className="p-6 sm:p-8 rounded-2xl bg-[#111827] border border-white/10 shadow-xl space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <h3 className="text-base font-bold text-white uppercase tracking-wider">
            Academic & Professional Credentials
          </h3>
          {isEditing && (
            <span className="text-xs text-cyan-400 font-semibold animate-pulse">
              Editing Enabled — Click "Save Changes" below
            </span>
          )}
        </div>

        {/* Row 1: Names */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Preferred First Name
            </label>
            <input
              type="text"
              disabled={!isEditing}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-xs sm:text-sm text-white disabled:opacity-75 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Full Legal Name
            </label>
            <input
              type="text"
              disabled={!isEditing}
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-xs sm:text-sm text-white disabled:opacity-75 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Row 2: Degree & Branch */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Degree Program
            </label>
            <input
              type="text"
              disabled={!isEditing}
              value={formData.degree}
              onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-xs sm:text-sm text-white disabled:opacity-75 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Engineering Branch / Specialization
            </label>
            <input
              type="text"
              disabled={!isEditing}
              value={formData.branch}
              onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-xs sm:text-sm text-white disabled:opacity-75 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Row 3: College, Semester, GPA */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              College / University
            </label>
            <input
              type="text"
              disabled={!isEditing}
              value={formData.college}
              onChange={(e) => setFormData({ ...formData, college: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-xs sm:text-sm text-white disabled:opacity-75 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Semester
            </label>
            <input
              type="text"
              disabled={!isEditing}
              value={formData.semester}
              onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-xs sm:text-sm text-white disabled:opacity-75 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Current CGPA
            </label>
            <input
              type="text"
              disabled={!isEditing}
              value={formData.gpa}
              onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-xs sm:text-sm text-white disabled:opacity-75 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Row 4: Career Goal & Interests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Primary Career Goal *
            </label>
            <input
              type="text"
              disabled={!isEditing}
              value={formData.careerGoal}
              onChange={(e) => setFormData({ ...formData, careerGoal: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-xs sm:text-sm text-white disabled:opacity-75 focus:outline-none focus:border-purple-500 font-semibold text-cyan-300"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Target Graduation Year
            </label>
            <input
              type="text"
              disabled={!isEditing}
              value={formData.targetGraduation}
              onChange={(e) => setFormData({ ...formData, targetGraduation: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-xs sm:text-sm text-white disabled:opacity-75 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
            Technical Interests & Specializations
          </label>
          <input
            type="text"
            disabled={!isEditing}
            value={formData.interests}
            onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-xs sm:text-sm text-white disabled:opacity-75 focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Row 5: Bio */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
            Student Professional Bio
          </label>
          <textarea
            rows="3"
            disabled={!isEditing}
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-xs sm:text-sm text-white disabled:opacity-75 focus:outline-none focus:border-purple-500 leading-relaxed"
          />
        </div>

        {/* Row 6: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              GitHub Profile
            </label>
            <input
              type="text"
              disabled={!isEditing}
              value={formData.github}
              onChange={(e) => setFormData({ ...formData, github: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-xs sm:text-sm text-white disabled:opacity-75 focus:outline-none focus:border-purple-500 font-mono text-[11px]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              LinkedIn Profile
            </label>
            <input
              type="text"
              disabled={!isEditing}
              value={formData.linkedin}
              onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-xs sm:text-sm text-white disabled:opacity-75 focus:outline-none focus:border-purple-500 font-mono text-[11px]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Portfolio / Website
            </label>
            <input
              type="text"
              disabled={!isEditing}
              value={formData.portfolio}
              onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-xs sm:text-sm text-white disabled:opacity-75 focus:outline-none focus:border-purple-500 font-mono text-[11px]"
            />
          </div>
        </div>

        {/* Save button */}
        {isEditing && (
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={() => {
                setFormData({ ...profile });
                setIsEditing(false);
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-glow-mixed transition-all flex items-center gap-2"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
