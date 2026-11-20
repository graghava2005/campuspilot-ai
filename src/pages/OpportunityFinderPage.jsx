import React, { useState } from 'react';
import { 
  Compass, 
  Search, 
  Bookmark, 
  BookmarkCheck, 
  Briefcase, 
  Award, 
  Trophy, 
  ExternalLink, 
  Calendar, 
  DollarSign, 
  MapPin, 
  Users, 
  CheckCircle2, 
  Filter,
  Sparkles,
  Info,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import Modal from '../components/Modal';
import { formatDate, getDaysRemaining, triggerConfetti } from '../utils/helpers';

export default function OpportunityFinderPage({ 
  opportunities, 
  setOpportunities, 
  showToast 
}) {
  const [activeCategory, setActiveCategory] = useState('internships'); // 'internships' | 'scholarships' | 'hackathons' | 'saved'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  // Toggle bookmark across categories
  const handleToggleBookmark = (categoryKey, id) => {
    setOpportunities(prev => {
      const updatedList = prev[categoryKey].map(item => {
        if (item.id === id) {
          const nextBookmarked = !item.bookmarked;
          if (nextBookmarked) {
            showToast('Saved Opportunity! ⭐', `Added to your saved bookmarks`, 'success');
          } else {
            showToast('Bookmark Removed', `Removed from saved opportunities`, 'info');
          }
          return { ...item, bookmarked: nextBookmarked };
        }
        return item;
      });
      return { ...prev, [categoryKey]: updatedList };
    });
  };

  // Compile all saved items
  const savedOpportunities = [
    ...opportunities.internships.filter(i => i.bookmarked).map(i => ({ ...i, sourceCategory: 'internships', typeLabel: 'Internship' })),
    ...opportunities.scholarships.filter(s => s.bookmarked).map(s => ({ ...s, sourceCategory: 'scholarships', typeLabel: 'Scholarship' })),
    ...opportunities.hackathons.filter(h => h.bookmarked).map(h => ({ ...h, sourceCategory: 'hackathons', typeLabel: 'Hackathon' })),
  ];

  // Filter current active list
  const getFilteredList = () => {
    if (activeCategory === 'saved') {
      return savedOpportunities.filter(item => {
        const text = `${item.company || ''} ${item.role || ''} ${item.name || ''} ${item.theme || ''} ${item.eligibility || ''}`.toLowerCase();
        return text.includes(searchQuery.toLowerCase());
      });
    }

    const currentList = opportunities[activeCategory] || [];
    return currentList.filter(item => {
      const text = `${item.company || ''} ${item.role || ''} ${item.name || ''} ${item.theme || ''} ${item.eligibility || ''} ${item.requiredSkills?.join(' ') || ''}`.toLowerCase();
      return text.includes(searchQuery.toLowerCase());
    });
  };

  const filteredItems = getFilteredList();

  const handleSimulateApplication = (e) => {
    e.preventDefault();
    setApplicationSubmitted(true);
    triggerConfetti();
    showToast('Demo Application Sent! 📄', 'Simulation complete: Application package prepared', 'success');
    setTimeout(() => {
      setSelectedOpportunity(null);
      setApplicationSubmitted(false);
    }, 1800);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/40 via-[#111827] to-cyan-900/40 border border-purple-500/20 p-6 sm:p-8">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Verified High-Impact Opportunities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Opportunity Finder
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Curated summer internships, merit-cum-means scholarships, and collegiate hackathons with bookmark tracking.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-[#080D19]/80 border border-white/10 text-xs text-slate-300">
              <span className="text-slate-400">Saved: </span>
              <span className="font-bold text-cyan-400">{savedOpportunities.length} opportunities</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation & Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Category tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveCategory('internships')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeCategory === 'internships'
                ? 'bg-purple-600 text-white shadow-glow-purple'
                : 'bg-[#111827] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Internships ({opportunities.internships.length})</span>
          </button>

          <button
            onClick={() => setActiveCategory('scholarships')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeCategory === 'scholarships'
                ? 'bg-purple-600 text-white shadow-glow-purple'
                : 'bg-[#111827] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Scholarships ({opportunities.scholarships.length})</span>
          </button>

          <button
            onClick={() => setActiveCategory('hackathons')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeCategory === 'hackathons'
                ? 'bg-purple-600 text-white shadow-glow-purple'
                : 'bg-[#111827] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Hackathons ({opportunities.hackathons.length})</span>
          </button>

          <button
            onClick={() => setActiveCategory('saved')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeCategory === 'saved'
                ? 'bg-cyan-500 text-slate-900 font-extrabold shadow-glow-cyan'
                : 'bg-[#111827] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Saved ({savedOpportunities.length})</span>
          </button>
        </div>

        {/* Search input */}
        <div className="relative min-w-[280px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search role, skills, keywords..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#111827] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>
      </div>

      {/* Listings Grid */}
      {filteredItems.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-[#111827] border border-white/10">
          <Compass className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <p className="text-base font-bold text-white">No opportunities found</p>
          <p className="text-xs text-slate-400 mt-1">Try modifying your search or browse a different category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const currentCategory = item.sourceCategory || activeCategory;
            const days = getDaysRemaining(item.deadline || item.registrationDeadline);

            // Card Rendering based on category
            if (currentCategory === 'internships') {
              return (
                <div 
                  key={item.id}
                  className="rounded-2xl bg-[#111827] border border-white/10 hover:border-purple-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group shadow-xl"
                >
                  <div>
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center font-bold text-purple-300">
                          {item.logo || item.company?.slice(0, 2)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {item.company}
                            </h4>
                            <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded bg-white/5 text-slate-400 border border-white/10">Demo</span>
                          </div>
                          <p className="text-xs text-slate-400 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleToggleBookmark('internships', item.id)}
                        className={`p-2 rounded-xl transition-colors ${
                          item.bookmarked 
                            ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20' 
                            : 'text-slate-400 hover:text-white bg-white/5'
                        }`}
                        title={item.bookmarked ? 'Remove bookmark' : 'Bookmark internship'}
                      >
                        {item.bookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Role & Stipend */}
                    <h3 className="text-base font-bold text-white mt-4 line-clamp-2">
                      {item.role}
                    </h3>

                    <div className="mt-3 flex items-center justify-between text-xs">
                      <span className="text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-lg">
                        {item.stipend}
                      </span>
                      <span className="text-slate-400">{item.experience}</span>
                    </div>

                    <p className="text-xs text-slate-400 mt-3 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Required Skills tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {item.requiredSkills?.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer & Demo Apply */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Due {formatDate(item.deadline)}</span>
                    </div>

                    <button
                      onClick={() => setSelectedOpportunity(item)}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-500/30 transition-all flex items-center gap-1"
                    >
                      <span>Apply Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            }

            if (currentCategory === 'scholarships') {
              return (
                <div 
                  key={item.id}
                  className="rounded-2xl bg-[#111827] border border-white/10 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group shadow-xl"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                          {item.category}
                        </span>
                        <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">Demo Listing</span>
                      </div>

                      <button
                        onClick={() => handleToggleBookmark('scholarships', item.id)}
                        className={`p-2 rounded-xl transition-colors ${
                          item.bookmarked 
                            ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20' 
                            : 'text-slate-400 hover:text-white bg-white/5'
                        }`}
                      >
                        {item.bookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                      </button>
                    </div>

                    <h3 className="text-base font-bold text-white mt-3 group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-purple-300 font-medium mt-1">Provider: {item.provider}</p>

                    <div className="mt-4 p-3 rounded-xl bg-[#080D19] border border-white/5 space-y-2 text-xs">
                      <div>
                        <span className="text-slate-400 text-[11px] block">Grant Benefits:</span>
                        <span className="text-emerald-400 font-bold">{item.benefits}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[11px] block">Eligibility:</span>
                        <span className="text-slate-300 line-clamp-2">{item.eligibility}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">Due {formatDate(item.deadline)}</span>
                    <button
                      onClick={() => setSelectedOpportunity(item)}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-slate-900 border border-cyan-500/30 transition-all flex items-center gap-1"
                    >
                      <span>Grant Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            }

            if (currentCategory === 'hackathons') {
              return (
                <div 
                  key={item.id}
                  className="rounded-2xl bg-[#111827] border border-white/10 hover:border-amber-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group shadow-xl"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1">
                          <Trophy className="w-3 h-3" />
                          <span>Hackathon</span>
                        </span>
                        <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">Demo Listing</span>
                      </div>

                      <button
                        onClick={() => handleToggleBookmark('hackathons', item.id)}
                        className={`p-2 rounded-xl transition-colors ${
                          item.bookmarked 
                            ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20' 
                            : 'text-slate-400 hover:text-white bg-white/5'
                        }`}
                      >
                        {item.bookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                      </button>
                    </div>

                    <h3 className="text-base font-bold text-white mt-3 group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-1">Organizer: {item.organizer}</p>

                    <div className="mt-4 p-3 rounded-xl bg-[#080D19] border border-white/5 space-y-2 text-xs">
                      <div>
                        <span className="text-slate-400 text-[11px] block">Themes:</span>
                        <span className="text-slate-200 line-clamp-2">{item.theme}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[11px] block">Prize Pool:</span>
                        <span className="text-amber-400 font-bold">{item.prizeDetails}</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                        <span>Team: {item.teamSize}</span>
                        <span>Mode: {item.mode}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] text-rose-400 font-semibold">
                      Reg. Closes {formatDate(item.registrationDeadline)}
                    </span>
                    <button
                      onClick={() => setSelectedOpportunity(item)}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-900 border border-amber-500/30 transition-all flex items-center gap-1"
                    >
                      <span>Register Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
      )}

      {/* Simulated Application Modal */}
      <Modal
        isOpen={!!selectedOpportunity}
        onClose={() => setSelectedOpportunity(null)}
        title={selectedOpportunity?.company ? `Demo Application: ${selectedOpportunity.company}` : `Demo Registration: ${selectedOpportunity?.name}`}
      >
        <div className="space-y-5">
          <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-xs text-purple-200 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <p>
              This is a simulated demo listing for student hackathon evaluation. No real external network request or application will be submitted.
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-[#080D19] border border-white/10">
              <span className="text-slate-400">Position / Event:</span>
              <p className="text-sm font-bold text-white mt-0.5">
                {selectedOpportunity?.role || selectedOpportunity?.name}
              </p>
              <p className="text-cyan-400 mt-1">
                {selectedOpportunity?.stipend || selectedOpportunity?.benefits || selectedOpportunity?.prizeDetails}
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-bold text-white uppercase tracking-wider text-[11px]">Simulated Application Checklist</p>
              <div className="space-y-1.5 text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Student Profile: Verified (Raghava • B.Tech CSM)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>ATS Resume Draft: Attached (Score: 86 / 100)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Portfolio & GitHub: Linked</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              onClick={() => setSelectedOpportunity(null)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
            >
              Close
            </button>
            <button
              onClick={handleSimulateApplication}
              disabled={applicationSubmitted}
              className="px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-glow-mixed transition-all"
            >
              {applicationSubmitted ? 'Submitting Demo...' : 'Submit Demo Package'}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
