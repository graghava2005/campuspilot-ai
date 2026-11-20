import React, { useState } from 'react';
import { 
  Award, 
  Flame, 
  Trophy, 
  CheckCircle2, 
  Circle, 
  Zap, 
  Sparkles, 
  Compass, 
  Code2, 
  Target, 
  FileCheck, 
  ShieldCheck,
  Star,
  Lock,
  ArrowUpRight,
  TrendingUp
} from 'lucide-react';
import { triggerConfetti } from '../utils/helpers';
import { weeklyChallenges as defaultWeeklyChallenges } from '../data/initialData';

export default function AchievementsPage({ 
  profile, 
  setProfile, 
  badges, 
  setBadges, 
  showToast 
}) {
  const [challenges, setChallenges] = useState(defaultWeeklyChallenges);

  // Icon mapping
  const badgeIcons = {
    Compass: Compass,
    Code2: Code2,
    Flame: Flame,
    Award: Award,
    Target: Target,
    Trophy: Trophy,
    FileCheck: FileCheck,
    Sparkles: Sparkles
  };

  const currentXp = profile.xp || 2450;
  const nextLevelXp = 3000;
  const levelProgress = Math.min(100, Math.round((currentXp / nextLevelXp) * 100));

  // Claim challenge reward
  const handleClaimChallenge = (id, rewardXp) => {
    setChallenges(prev => prev.map(ch => {
      if (ch.id === id) {
        return { ...ch, claimed: true };
      }
      return ch;
    }));

    setProfile(prev => ({
      ...prev,
      xp: (prev.xp || 2450) + rewardXp
    }));

    triggerConfetti();
    showToast(`Claimed +${rewardXp} XP! 🌟`, `Your student profile XP increased`, 'success');
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/40 via-[#111827] to-cyan-900/40 border border-purple-500/20 p-6 sm:p-8">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-2">
              <Trophy className="w-3.5 h-3.5" />
              <span>Campus Gamification & Mastery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Achievements, XP & Badges
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Earn XP points, unlock verified student badges, complete weekly study quests, and maintain your 14-day streak.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 font-bold">
              <Flame className="w-5 h-5 fill-amber-400 animate-pulse" />
              <div>
                <span className="text-xs text-slate-400 block font-normal">Active Streak</span>
                <span className="text-lg">{profile.learningStreak || 14} Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gamification KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Level Progression */}
        <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Current Rank</span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                Top 5% Campus
              </span>
            </div>
            <h3 className="text-2xl font-black text-white mt-2">{profile.level || 'Level 6 Pathfinder'}</h3>
            <p className="text-xs text-slate-400 mt-1">
              {currentXp} / {nextLevelXp} XP points earned
            </p>

            <div className="mt-4 w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${levelProgress}%` }}
              />
            </div>
          </div>

          <p className="text-[11px] text-cyan-300 mt-4 pt-3 border-t border-white/5">
            550 XP needed to unlock Level 7 Innovator
          </p>
        </div>

        {/* Badges Count */}
        <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Badges Unlocked</span>
              <Award className="w-4 h-4 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-black text-white mt-2">
              {badges.filter(b => b.unlocked).length} <span className="text-base font-normal text-slate-400">/ {badges.length} Badges</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">Verified academic & technical achievements</p>
          </div>

          <p className="text-[11px] text-emerald-400 mt-4 pt-3 border-t border-white/5 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Next up: Complete Career Ready milestone</span>
          </p>
        </div>

        {/* Weekly Quests Summary */}
        <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Weekly Quests</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <h3 className="text-2xl font-black text-white mt-2">
              {challenges.filter(c => c.completed).length} <span className="text-base font-normal text-slate-400">/ {challenges.length} Done</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">Resets every Monday at midnight</p>
          </div>

          <p className="text-[11px] text-slate-400 mt-4 pt-3 border-t border-white/5">
            Earn up to <strong className="text-amber-400">+520 XP</strong> every single week
          </p>
        </div>
      </div>

      {/* Badges Showcase Grid */}
      <div className="rounded-2xl bg-[#111827] border border-white/10 p-6 sm:p-8 shadow-xl space-y-6">
        <div>
          <h3 className="text-base font-bold text-white uppercase tracking-wider">
            Achievement Badges & Honours
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Verified proof of discipline, consistency, and technical mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((badge) => {
            const Icon = badgeIcons[badge.icon] || Award;
            const isUnlocked = badge.unlocked;

            return (
              <div 
                key={badge.id}
                className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
                  isUnlocked
                    ? 'bg-gradient-to-br from-[#111827] to-[#172033] border-purple-500/30 hover:border-cyan-400/50 hover:shadow-glow-purple'
                    : 'bg-[#080D19]/60 border-white/5 opacity-60'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl border ${
                      isUnlocked 
                        ? 'bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-300' 
                        : 'bg-white/5 border-white/10 text-slate-500'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-bold text-amber-400 font-mono">
                      +{badge.xp} XP
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mt-4 group-hover:text-cyan-300 transition-colors">
                    {badge.name}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {badge.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5">
                  {isUnlocked ? (
                    <div className="flex items-center justify-between text-[11px] text-emerald-400 font-semibold">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Unlocked</span>
                      </span>
                      <span className="text-slate-400 font-normal">{badge.unlockedAt}</span>
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <Lock className="w-3 h-3" />
                          <span>In Progress</span>
                        </span>
                        <span className="text-cyan-300 font-bold">{badge.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-cyan-400 h-1.5 rounded-full" 
                          style={{ width: `${badge.progress}%` }}
                        />
                      </div>
                      <p className="text-[10px] text-slate-400 truncate">{badge.target}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Weekly Quests & Challenges */}
      <div className="rounded-2xl bg-[#111827] border border-white/10 p-6 sm:p-8 shadow-xl space-y-6">
        <div>
          <h3 className="text-base font-bold text-white uppercase tracking-wider">
            Weekly Sprint Challenges
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Complete high-leverage habits every week to boost placement readiness and level up your avatar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {challenges.map((ch) => {
            const isDone = ch.progress >= ch.target;

            return (
              <div 
                key={ch.id}
                className={`p-4 rounded-xl border flex items-center justify-between gap-4 transition-colors ${
                  isDone 
                    ? 'bg-purple-950/20 border-purple-500/30 text-white' 
                    : 'bg-[#080D19] border-white/5 text-slate-300'
                }`}
              >
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className={`p-2 rounded-lg mt-0.5 ${
                    isDone ? 'bg-purple-500/20 text-purple-300' : 'bg-white/5 text-slate-500'
                  }`}>
                    {isDone ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Target className="w-4 h-4" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-white truncate">{ch.title}</h4>
                      <span className="text-[11px] font-bold text-amber-400 ml-2">+{ch.xp} XP</span>
                    </div>

                    <div className="mt-2 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className={`h-1.5 rounded-full ${isDone ? 'bg-emerald-400' : 'bg-purple-500'}`} 
                        style={{ width: `${Math.min(100, (ch.progress / ch.target) * 100)}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
                      <span>Progress: {ch.progress} / {ch.target}</span>
                      <span>{isDone ? 'Completed!' : 'In progress'}</span>
                    </div>
                  </div>
                </div>

                {isDone && !ch.claimed && (
                  <button
                    onClick={() => handleClaimChallenge(ch.id, ch.xp)}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-glow-purple shrink-0 hover:scale-105 transition-transform"
                  >
                    Claim XP
                  </button>
                )}

                {ch.claimed && (
                  <span className="text-[11px] text-emerald-400 font-bold px-2 py-1 rounded bg-emerald-500/10 shrink-0">
                    Claimed
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
