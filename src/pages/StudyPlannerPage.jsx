import React, { useState } from 'react';
import { 
  Plus, 
  Calendar, 
  CheckCircle2, 
  Circle, 
  Trash2, 
  Clock, 
  AlertCircle, 
  Sparkles, 
  BookOpen, 
  Filter, 
  CalendarDays,
  Flame,
  Check,
  ChevronRight,
  Edit3
} from 'lucide-react';
import Modal from '../components/Modal';
import { formatDate, getDaysRemaining, triggerConfetti } from '../utils/helpers';
import { sampleTimetable } from '../data/initialData';

export default function StudyPlannerPage({ 
  tasks, 
  setTasks, 
  timetable, 
  setTimetable, 
  showToast 
}) {
  const [filterSubject, setFilterSubject] = useState('All');
  const [filterPriority, setFilterPriority] = useState('All');
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [activeTabMode, setActiveTabMode] = useState('tasks'); // 'tasks' or 'timetable'

  // Task form state
  const [newTask, setNewTask] = useState({
    title: '',
    subject: 'Machine Learning',
    priority: 'High',
    deadline: '2026-11-25',
    estimatedHours: 3,
    notes: ''
  });

  // Extract unique subjects
  const subjects = ['All', ...new Set(tasks.map(t => t.subject))];

  // Filter tasks
  const filteredTasks = tasks.filter(t => {
    const matchesSubject = filterSubject === 'All' || t.subject === filterSubject;
    const matchesPriority = filterPriority === 'All' || t.priority === filterPriority;
    return matchesSubject && matchesPriority;
  });

  const completedCount = tasks.filter(t => t.completed).length;
  const totalHours = tasks.reduce((sum, t) => sum + (Number(t.estimatedHours) || 0), 0);
  const remainingHours = tasks.filter(t => !t.completed).reduce((sum, t) => sum + (Number(t.estimatedHours) || 0), 0);
  const progressPercent = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

  // Toggle complete
  const handleToggleTask = (id) => {
    setTasks(prev => {
      const updated = prev.map(t => {
        if (t.id === id) {
          const nextState = !t.completed;
          if (nextState) {
            triggerConfetti();
            showToast('Task Completed! 🎉', `Completed: ${t.title}`, 'success');
          }
          return { ...t, completed: nextState };
        }
        return t;
      });
      return updated;
    });
  };

  // Delete task
  const handleDeleteTask = (id) => {
    const target = tasks.find(t => t.id === id);
    setTasks(prev => prev.filter(t => t.id !== id));
    showToast('Task Deleted', `Removed "${target?.title || 'Task'}"`, 'info');
  };

  // Edit task setup
  const handleEditTask = (task) => {
    setEditingTaskId(task.id);
    setNewTask({
      title: task.title,
      subject: task.subject,
      priority: task.priority,
      deadline: task.deadline,
      estimatedHours: task.estimatedHours,
      notes: task.notes || ''
    });
    setIsAddTaskModalOpen(true);
  };

  // Add / Edit task handler
  const handleCreateTask = (e) => {
    e.preventDefault();
    if (!newTask.title.trim()) {
      showToast('Validation Error', 'Task title cannot be empty', 'error');
      return;
    }

    if (editingTaskId) {
      setTasks(prev => prev.map(t => {
        if (t.id === editingTaskId) {
          return {
            ...t,
            title: newTask.title.trim(),
            subject: newTask.subject,
            priority: newTask.priority,
            deadline: newTask.deadline,
            estimatedHours: Number(newTask.estimatedHours) || 2,
            notes: newTask.notes.trim()
          };
        }
        return t;
      }));
      showToast('Milestone Updated! ✏️', `Updated: ${newTask.title.trim()}`, 'success');
      setEditingTaskId(null);
    } else {
      const created = {
        id: `task-${Date.now()}`,
        title: newTask.title.trim(),
        subject: newTask.subject,
        priority: newTask.priority,
        deadline: newTask.deadline,
        estimatedHours: Number(newTask.estimatedHours) || 2,
        notes: newTask.notes.trim(),
        completed: false
      };

      setTasks(prev => [created, ...prev]);
      showToast('Task Added Successfully! 🚀', `Added task for ${created.subject}`, 'success');
    }

    setIsAddTaskModalOpen(false);
    setNewTask({
      title: '',
      subject: 'Machine Learning',
      priority: 'High',
      deadline: '2026-11-25',
      estimatedHours: 3,
      notes: ''
    });
  };

  // Regenerate Timetable
  const handleGenerateTimetable = () => {
    setTimetable(sampleTimetable);
    setActiveTabMode('timetable');
    triggerConfetti();
    showToast('AI Timetable Generated! 📅', 'Structured weekly study plan created for your curriculum', 'success');
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Header & Metrics */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-white tracking-tight">Study Planner & Academic Hub</h2>
          <p className="text-xs text-slate-400 mt-1">
            Organize coursework, prioritize preparation, and maintain academic velocity with LocalStorage persistence.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex rounded-xl bg-[#111827] border border-white/10 p-1">
            <button
              onClick={() => setActiveTabMode('tasks')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTabMode === 'tasks' 
                  ? 'bg-purple-600 text-white shadow-glow-purple' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Task Board ({tasks.length})
            </button>
            <button
              onClick={() => setActiveTabMode('timetable')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTabMode === 'timetable' 
                  ? 'bg-cyan-500 text-slate-900 font-bold shadow-glow-cyan' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <CalendarDays className="w-3.5 h-3.5" />
              <span>AI Timetable</span>
            </button>
          </div>

          <button
            onClick={() => {
              setEditingTaskId(null);
              setNewTask({
                title: '',
                subject: 'Machine Learning',
                priority: 'High',
                deadline: '2026-11-25',
                estimatedHours: 3,
                notes: ''
              });
              setIsAddTaskModalOpen(true);
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-glow-mixed transition-all flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>New Task</span>
          </button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-[#111827] border border-white/10">
          <p className="text-xs text-slate-400 font-medium">Task Completion</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-extrabold text-white">{progressPercent}%</span>
            <span className="text-xs text-cyan-400">{completedCount}/{tasks.length} done</span>
          </div>
          <div className="mt-3 w-full bg-slate-800 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-purple-500 to-cyan-400 h-2 rounded-full transition-all duration-500" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#111827] border border-white/10">
          <p className="text-xs text-slate-400 font-medium">Estimated Workload</p>
          <p className="text-2xl font-extrabold text-white mt-1">{remainingHours} hrs</p>
          <p className="text-xs text-slate-400 mt-1">Out of {totalHours} total planned hours</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#111827] border border-white/10">
          <p className="text-xs text-slate-400 font-medium">High Priority Items</p>
          <p className="text-2xl font-extrabold text-rose-400 mt-1">
            {tasks.filter(t => t.priority === 'High' && !t.completed).length} Tasks
          </p>
          <p className="text-xs text-slate-400 mt-1">Require immediate attention</p>
        </div>

        <div className="p-5 rounded-2xl bg-gradient-to-br from-[#111827] to-[#172033] border border-purple-500/30 flex flex-col justify-between">
          <div>
            <p className="text-xs text-purple-300 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Smart Timetable</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">Generate a balanced 7-day plan with study intervals</p>
          </div>
          <button
            onClick={handleGenerateTimetable}
            className="mt-3 py-1.5 px-3 rounded-lg text-xs font-bold bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border border-purple-500/40 transition-colors flex items-center justify-center gap-1.5"
          >
            <CalendarDays className="w-3.5 h-3.5 text-cyan-300" />
            <span>Generate Plan</span>
          </button>
        </div>
      </div>

      {/* Main Content: Tasks View vs Timetable View */}
      {activeTabMode === 'tasks' ? (
        <div className="space-y-6">
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#111827] border border-white/10">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                <Filter className="w-3.5 h-3.5" />
                <span>Subject:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {subjects.map(s => (
                  <button
                    key={s}
                    onClick={() => setFilterSubject(s)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                      filterSubject === s
                        ? 'bg-purple-600/20 text-purple-300 border border-purple-500/40'
                        : 'text-slate-400 hover:text-white bg-white/5'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Priority:</span>
              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="bg-[#080D19] border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
              >
                <option value="All">All Priorities</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          {/* Tasks List */}
          {filteredTasks.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-[#111827] border border-white/10">
              <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <p className="text-base font-bold text-white">No tasks match your filters</p>
              <p className="text-xs text-slate-400 mt-1">Try switching subject filter or click below to add a new task.</p>
              <button
                onClick={() => setIsAddTaskModalOpen(true)}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-purple-600 text-white"
              >
                + Add New Task
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredTasks.map((task) => {
                const days = getDaysRemaining(task.deadline);
                const isOverdue = days !== null && days < 0;

                return (
                  <div
                    key={task.id}
                    className={`group rounded-2xl p-4 sm:p-5 border transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      task.completed
                        ? 'bg-[#111827]/40 border-white/5 opacity-70'
                        : 'bg-[#111827] border-white/10 hover:border-purple-500/40 hover:bg-[#172033]'
                    }`}
                  >
                    <div className="flex items-start gap-3.5 flex-1 min-w-0">
                      <button
                        onClick={() => handleToggleTask(task.id)}
                        className={`mt-1 p-1 rounded-lg transition-colors ${
                          task.completed
                            ? 'text-emerald-400 hover:text-emerald-300'
                            : 'text-slate-400 hover:text-purple-400'
                        }`}
                        title={task.completed ? 'Mark incomplete' : 'Mark completed'}
                      >
                        {task.completed ? (
                          <CheckCircle2 className="w-5 h-5 fill-emerald-500/20" />
                        ) : (
                          <Circle className="w-5 h-5" />
                        )}
                      </button>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                            {task.subject}
                          </span>
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                            task.priority === 'High'
                              ? 'bg-rose-500/10 text-rose-300 border border-rose-500/20'
                              : task.priority === 'Medium'
                              ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                              : 'bg-slate-800 text-slate-300 border border-white/10'
                          }`}>
                            {task.priority} Priority
                          </span>
                          <span className="text-[11px] text-slate-400 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-400" />
                            {task.estimatedHours}h
                          </span>
                        </div>

                        <h4 className={`text-sm sm:text-base font-bold mt-2 ${
                          task.completed ? 'line-through text-slate-400' : 'text-white'
                        }`}>
                          {task.title}
                        </h4>

                        {task.notes && (
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            {task.notes}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                      <div className="text-left sm:text-right">
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{formatDate(task.deadline)}</span>
                        </div>
                        <p className={`text-[11px] font-semibold mt-0.5 ${
                          isOverdue ? 'text-rose-400' : days !== null && days <= 3 ? 'text-amber-400' : 'text-slate-400'
                        }`}>
                          {isOverdue ? 'Overdue!' : days !== null ? `${days} days left` : ''}
                        </p>
                      </div>

                      <button
                        onClick={() => handleEditTask(task)}
                        className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                        title="Edit task"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleDeleteTask(task.id)}
                        className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                        title="Delete task"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        /* Timetable View */
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-cyan-400" />
                  <span>Interactive 7-Day AI Study Schedule</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Engineered to balance college lectures, lab projects, and dedicated placement DSA/ML prep.
                </p>
              </div>

              <button
                onClick={handleGenerateTimetable}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white/5 hover:bg-white/10 text-cyan-300 border border-cyan-500/30 transition-colors flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Re-balance Timetable</span>
              </button>
            </div>

            {/* Day selector tabs */}
            <div className="flex items-center gap-2 overflow-x-auto py-4">
              {timetable.map((dayPlan) => (
                <button
                  key={dayPlan.day}
                  onClick={() => setSelectedDay(dayPlan.day)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedDay === dayPlan.day
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-glow-mixed'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {dayPlan.day}
                </button>
              ))}
            </div>

            {/* Time slots for selected day */}
            <div className="space-y-3 mt-4">
              {timetable.find(d => d.day === selectedDay)?.slots.map((slot, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-[#080D19]/80 border border-white/5 hover:border-cyan-500/30 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-semibold shrink-0">
                      {slot.time}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white">{slot.subject}</h4>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                          {slot.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">{slot.topic}</p>
                    </div>
                  </div>

                  <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1 self-start sm:self-auto">
                    <Check className="w-3.5 h-3.5" />
                    <span>Allocated</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Add / Edit Task Modal */}
      <Modal
        isOpen={isAddTaskModalOpen}
        onClose={() => {
          setIsAddTaskModalOpen(false);
          setEditingTaskId(null);
        }}
        title={editingTaskId ? "Edit Study Milestone" : "Add New Study Milestone"}
      >
        <form onSubmit={handleCreateTask} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Task Title *
            </label>
            <input
              type="text"
              required
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              placeholder="e.g. Implement Transformer Attention from scratch"
              className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Subject Domain
              </label>
              <input
                type="text"
                value={newTask.subject}
                onChange={(e) => setNewTask({ ...newTask, subject: e.target.value })}
                placeholder="e.g. Machine Learning, DSA, Cloud"
                className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Priority
              </label>
              <select
                value={newTask.priority}
                onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-sm text-white focus:outline-none focus:border-purple-500"
              >
                <option value="High">High Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="Low">Low Priority</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Deadline
              </label>
              <input
                type="date"
                value={newTask.deadline}
                onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-sm text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Estimated Hours
              </label>
              <input
                type="number"
                min="1"
                max="50"
                value={newTask.estimatedHours}
                onChange={(e) => setNewTask({ ...newTask, estimatedHours: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-sm text-white focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Study Notes / Resources
            </label>
            <textarea
              rows="3"
              value={newTask.notes}
              onChange={(e) => setNewTask({ ...newTask, notes: e.target.value })}
              placeholder="Key textbook chapters, video lecture links, or specific algorithms to cover..."
              className="w-full px-4 py-2.5 rounded-xl bg-[#080D19] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={() => {
                setIsAddTaskModalOpen(false);
                setEditingTaskId(null);
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-glow-mixed transition-all"
            >
              {editingTaskId ? "Update Milestone" : "Save Milestone"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
