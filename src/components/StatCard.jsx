import React from 'react';

export default function StatCard({ title, value, subtitle, icon: Icon, color = 'purple', trend, trendPositive }) {
  const colorMap = {
    purple: {
      border: 'border-purple-500/20 hover:border-purple-500/40',
      iconBg: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
      glow: 'group-hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]',
      gradient: 'from-purple-500/10 to-transparent'
    },
    cyan: {
      border: 'border-cyan-500/20 hover:border-cyan-500/40',
      iconBg: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
      glow: 'group-hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]',
      gradient: 'from-cyan-500/10 to-transparent'
    },
    emerald: {
      border: 'border-emerald-500/20 hover:border-emerald-500/40',
      iconBg: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
      glow: 'group-hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]',
      gradient: 'from-emerald-500/10 to-transparent'
    },
    amber: {
      border: 'border-amber-500/20 hover:border-amber-500/40',
      iconBg: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
      glow: 'group-hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]',
      gradient: 'from-amber-500/10 to-transparent'
    }
  };

  const scheme = colorMap[color] || colorMap.purple;

  return (
    <div className={`relative overflow-hidden group rounded-2xl bg-[#111827]/80 backdrop-blur-md p-5 border transition-all duration-300 ${scheme.border} ${scheme.glow}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${scheme.gradient} opacity-40 pointer-events-none`} />
      
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">{title}</p>
          <div className="flex items-baseline gap-2 mt-2">
            <h3 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">{value}</h3>
            {trend && (
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                trendPositive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-800 text-slate-300'
              }`}>
                {trend}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1.5">{subtitle}</p>
          )}
        </div>

        {Icon && (
          <div className={`p-3 rounded-xl ${scheme.iconBg} transition-transform duration-300 group-hover:scale-110`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
    </div>
  );
}
