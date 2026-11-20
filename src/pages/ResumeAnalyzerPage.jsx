import React, { useState } from 'react';
import { 
  FileText, 
  Upload, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  RefreshCw, 
  ShieldCheck, 
  Zap, 
  FileCheck, 
  Info,
  TrendingUp,
  Award,
  Copy
} from 'lucide-react';
import { triggerConfetti } from '../utils/helpers';

export default function ResumeAnalyzerPage({ showToast }) {
  const sampleResumeText = `G RAGHAVA (DEMO RESUME SAMPLE)
Hyderabad, India | +91 98765 XXXXX (Demo) | raghava.student@demo-campus.edu | github.com/demo-raghava-ai | linkedin.com/in/demo-raghava-aiml

EDUCATION
Bachelor of Technology in Computer Science & Engineering (AI/ML)
National Institute of Science & Technology (Demo Campus, 2022 – 2026) | CGPA: 8.9 / 10.0

TECHNICAL SKILLS
Languages: Python, C++, JavaScript, TypeScript, SQL
Frameworks & Libraries: PyTorch, TensorFlow, Hugging Face, Scikit-Learn, React.js, FastAPI, Node.js, Tailwind CSS
Tools & Cloud: Git, Docker, AWS (S3, EC2), Postman, Linux, Weights & Biases

PROJECTS
1. Multimodal Document RAG Engine with Source Grounding
- Architected an end-to-end Retrieval-Augmented Generation pipeline using LangChain, FAISS, and PyTorch.
- Reduced hallucination rate by 34% by enforcing citation attribution and semantic reranking with cross-encoders.
- Containerized the FastAPI microservice with Docker and deployed with sub-600ms latency on AWS.

2. Pneumonia Pathology Classifier from Chest X-Rays
- Fine-tuned a ResNet-50 vision model on 5,800+ clinical radiograph scans achieving 94.2% test accuracy.
- Integrated Grad-CAM explainability heatmaps into a React frontend to visualize clinical evidence for physicians.
- Decreased training time by 45% using mixed-precision FP16 CUDA kernels.

EXPERIENCE & INTERNSHIPS
Machine Learning Research Intern | Campus AI Labs (June 2024 – August 2024)
- Formulated predictive models for academic student drop-out risks using XGBoost and SHAP feature analysis.
- Processed 100,000+ student historical records with automated imputation pipelines in Pandas.

LEADERSHIP & ACHIEVEMENTS
- Finalist, Smart India Hackathon 2024 (Regional Round)
- Solved 350+ algorithmic coding problems across LeetCode and CodeChef`;

  const [resumeText, setResumeText] = useState(sampleResumeText);
  const [fileName, setFileName] = useState('Raghava_AIML_Resume.pdf');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState({
    score: 86,
    atsStatus: 'Strong ATS Readiness',
    summary: 'Well-structured technical resume with strong quantifiable metrics and modern AI/ML project impact.',
    sections: {
      contact: true,
      education: true,
      skills: true,
      projects: true,
      experience: true,
      certifications: false,
    },
    skillsFound: ['Python', 'C++', 'PyTorch', 'TensorFlow', 'Hugging Face', 'React.js', 'FastAPI', 'Docker', 'AWS', 'LangChain', 'Git', 'Linux'],
    actionVerbsFound: ['Architected', 'Reduced', 'Enforced', 'Containerized', 'Deployed', 'Fine-tuned', 'Achieved', 'Integrated', 'Decreased', 'Formulated', 'Processed'],
    metricsScore: 92,
    formattingScore: 88,
    brevityScore: 85,
    improvements: [
      { type: 'suggestion', text: 'Add an Industry Certification section (e.g., AWS Cloud Practitioner or DeepLearning.AI Specialization) to strengthen recruiter credibility.' },
      { type: 'suggestion', text: 'Quantify the dataset scale for the student drop-out research project in terms of accuracy gain or business impact.' },
      { type: 'strength', text: 'Excellent usage of strong action verbs (Architected, Containerized, Fine-tuned) with measurable percentage outcomes.' }
    ]
  });

  // Client-side text analysis logic
  const handleAnalyzeResume = () => {
    if (!resumeText.trim()) {
      showToast('Validation Error', 'Please upload a resume or paste text to analyze', 'error');
      return;
    }

    setIsAnalyzing(true);

    setTimeout(() => {
      const lower = resumeText.toLowerCase();

      // Check sections
      const hasContact = lower.includes('@') && (lower.includes('phone') || lower.includes('+91') || lower.includes('email') || lower.includes('.edu') || lower.includes('.com'));
      const hasEducation = lower.includes('education') || lower.includes('bachelor') || lower.includes('b.tech') || lower.includes('cgpa') || lower.includes('gpa');
      const hasSkills = lower.includes('skills') || lower.includes('technologies') || lower.includes('languages');
      const hasProjects = lower.includes('projects') || lower.includes('project');
      const hasExperience = lower.includes('experience') || lower.includes('internship') || lower.includes('employment');
      const hasCertifications = lower.includes('certification') || lower.includes('certificates') || lower.includes('credential');

      // Check skills
      const techKeywords = [
        'Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 'PyTorch', 'TensorFlow', 
        'Hugging Face', 'React', 'Node.js', 'FastAPI', 'Docker', 'Kubernetes', 'AWS', 
        'SQL', 'PostgreSQL', 'MongoDB', 'Git', 'Linux', 'Pandas', 'NumPy', 'Scikit-Learn',
        'LangChain', 'Next.js', 'Tailwind', 'REST', 'GraphQL'
      ];
      const skillsFound = techKeywords.filter(k => lower.includes(k.toLowerCase()));

      // Check action verbs
      const actionKeywords = [
        'architected', 'implemented', 'deployed', 'engineered', 'reduced', 'optimized', 
        'designed', 'built', 'fine-tuned', 'integrated', 'decreased', 'formulated', 
        'accelerated', 'authored', 'led', 'mentored'
      ];
      const verbsFound = actionKeywords.filter(v => lower.includes(v)).map(v => v.charAt(0).toUpperCase() + v.slice(1));

      // Check for metrics (numbers, %, ms, x, k)
      const metricMatches = resumeText.match(/\d+([.,]\d+)?\s*(%|ms|x|k|sec|hours|users|records)/gi) || [];
      const metricsScore = Math.min(100, Math.max(40, metricMatches.length * 15 + 30));

      // Calculate total score
      let calculatedScore = 50;
      if (hasContact) calculatedScore += 8;
      if (hasEducation) calculatedScore += 8;
      if (hasSkills) calculatedScore += 10;
      if (hasProjects) calculatedScore += 12;
      if (hasExperience) calculatedScore += 8;
      if (hasCertifications) calculatedScore += 4;
      calculatedScore += Math.min(15, skillsFound.length * 1.5);
      calculatedScore = Math.min(96, Math.max(45, Math.round(calculatedScore)));

      let atsStatus = 'Strong ATS Readiness';
      if (calculatedScore < 60) atsStatus = 'Needs Significant Optimization';
      else if (calculatedScore < 75) atsStatus = 'Moderate ATS Potential';
      else if (calculatedScore < 85) atsStatus = 'Good ATS Alignment';

      const improvements = [];
      if (!hasCertifications) {
        improvements.push({ type: 'suggestion', text: 'Add verified certifications (e.g., DeepLearning.AI, AWS, or Coursera) to boost recruiter filtering.' });
      }
      if (metricMatches.length < 3) {
        improvements.push({ type: 'suggestion', text: 'Incorporate quantifiable outcomes (% latency drop, throughput, accuracy numbers) in project bullet points.' });
      }
      if (!hasExperience) {
        improvements.push({ type: 'suggestion', text: 'Add research internships, open-source contributions, or campus technical society roles.' });
      }
      if (skillsFound.length >= 6) {
        improvements.push({ type: 'strength', text: `Strong hard skill keyword density with ${skillsFound.length} recognized engineering tools.` });
      }
      if (verbsFound.length >= 4) {
        improvements.push({ type: 'strength', text: `Impactful action verbs (${verbsFound.slice(0, 3).join(', ')}) demonstrating engineering ownership.` });
      }

      setAnalysisResult({
        score: calculatedScore,
        atsStatus,
        summary: `Evaluated resume with ${skillsFound.length} technical skills and ${metricMatches.length} quantifiable metric proof points.`,
        sections: {
          contact: hasContact,
          education: hasEducation,
          skills: hasSkills,
          projects: hasProjects,
          experience: hasExperience,
          certifications: hasCertifications,
        },
        skillsFound,
        actionVerbsFound: verbsFound,
        metricsScore,
        formattingScore: 90,
        brevityScore: 88,
        improvements
      });

      setIsAnalyzing(false);
      triggerConfetti();
      showToast('Resume Analysis Complete! 🎯', `Estimated ATS Score: ${calculatedScore} / 100`, 'success');
    }, 900);
  };

  // File upload handler
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      
      reader.onload = (event) => {
        const content = event.target.result;
        if (typeof content === 'string') {
          // If the file is plain text or markdown, set it directly
          if (file.type === 'text/plain' || file.name.endsWith('.txt') || file.name.endsWith('.md')) {
            setResumeText(content);
          } else {
            // For binary/PDF streams, extract printable text characters
            const printable = content.replace(/[^\x20-\x7E\t\n\r]/g, ' ').replace(/\s+/g, ' ').trim();
            if (printable.length > 80) {
              setResumeText(printable);
            }
          }
        }
      };

      reader.readAsText(file);
      showToast('Resume File Loaded 📄', `Loaded ${file.name}. Click "Analyze Resume ATS Readiness" below!`, 'info');
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/40 via-[#111827] to-cyan-900/40 border border-purple-500/20 p-6 sm:p-8">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-2">
              <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Client-Side Algorithmic Parsing</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              AI Resume Analyzer & ATS Readiness
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Evaluate section completeness, hard skill keywords, quantifiable metrics, and action verbs to optimize your application.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 bg-[#080D19]/80 border border-white/10 px-3 py-1.5 rounded-xl">
              Target: <strong className="text-cyan-300">AI/ML & SDE Roles</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Upload & Editor on Left, Results on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Upload / Editor */}
        <div className="lg:col-span-6 space-y-4">
          {/* File Upload Box */}
          <div className="p-5 rounded-2xl bg-[#111827] border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Upload Resume (PDF / TXT)</span>
              <span className="text-[11px] text-cyan-400 font-mono">{fileName}</span>
            </div>

            <label className="border-2 border-dashed border-white/10 hover:border-purple-500/40 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition-colors group bg-[#080D19]/60">
              <Upload className="w-8 h-8 text-slate-400 group-hover:text-cyan-400 transition-colors mb-2" />
              <span className="text-xs font-semibold text-white">Click to upload or drag & drop</span>
              <span className="text-[11px] text-slate-400 mt-0.5">PDF or plain text resume supported</span>
              <input 
                type="file" 
                accept=".pdf,.txt,.doc,.docx" 
                onChange={handleFileUpload} 
                className="hidden" 
              />
            </label>
          </div>

          {/* Text Editor Fallback */}
          <div className="p-5 rounded-2xl bg-[#111827] border border-white/10 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Resume Text Stream</span>
              <button
                onClick={() => setResumeText(sampleResumeText)}
                className="text-[11px] text-cyan-400 hover:underline flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset to Sample Resume</span>
              </button>
            </div>

            <textarea
              rows="14"
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Paste raw resume text here for detailed ATS parsing..."
              className="w-full p-3.5 rounded-xl bg-[#080D19] border border-white/10 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors resize-none leading-relaxed"
            />

            <button
              onClick={handleAnalyzeResume}
              disabled={isAnalyzing}
              className="mt-4 w-full py-3 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-glow-mixed transition-all flex items-center justify-center gap-2"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-cyan-300" />
                  <span>Analyzing Resume Structure...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-cyan-300" />
                  <span>Analyze Resume ATS Readiness</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Analysis Results */}
        <div className="lg:col-span-6 space-y-6">
          {/* ATS Score Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#111827] to-[#172033] border border-purple-500/30 shadow-xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Estimated Resume Score</p>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-5xl font-black text-white">{analysisResult.score}</span>
                  <span className="text-slate-400 font-semibold text-lg">/ 100</span>
                </div>
                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{analysisResult.atsStatus}</span>
                </div>
              </div>

              <div className="space-y-2 text-xs w-full sm:w-48 bg-[#080D19]/60 p-3 rounded-xl border border-white/5">
                <div className="flex justify-between">
                  <span className="text-slate-400">Quantified Impact</span>
                  <span className="font-bold text-cyan-400">{analysisResult.metricsScore}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Formatting & ATS</span>
                  <span className="font-bold text-purple-400">{analysisResult.formattingScore}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Brevity & Conciseness</span>
                  <span className="font-bold text-emerald-400">{analysisResult.brevityScore}%</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 mt-4 leading-relaxed pt-3 border-t border-white/5">
              {analysisResult.summary}
            </p>
          </div>

          {/* Section Detection Checklist */}
          <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 shadow-xl">
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Essential Section Detection
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Object.entries(analysisResult.sections).map(([key, present]) => (
                <div 
                  key={key} 
                  className={`p-3 rounded-xl border flex items-center justify-between text-xs font-medium capitalize ${
                    present 
                      ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-300' 
                      : 'bg-rose-500/5 border-rose-500/20 text-rose-300'
                  }`}
                >
                  <span>{key}</span>
                  {present ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <AlertCircle className="w-4 h-4 text-rose-400" />}
                </div>
              ))}
            </div>
          </div>

          {/* Hard Skills Identified */}
          <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Recognized Hard Skills ({analysisResult.skillsFound.length})
              </h3>
              <Zap className="w-4 h-4 text-cyan-400" />
            </div>

            <div className="flex flex-wrap gap-2">
              {analysisResult.skillsFound.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Action Verbs Identified */}
          <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 shadow-xl">
            <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">
              Impactful Action Verbs ({analysisResult.actionVerbsFound.length})
            </h3>

            <div className="flex flex-wrap gap-1.5">
              {analysisResult.actionVerbsFound.map((verb, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-0.5 rounded text-[11px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20"
                >
                  {verb}
                </span>
              ))}
            </div>
          </div>

          {/* Improvement Suggestions */}
          <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 shadow-xl space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              AI Actionable Recommendations
            </h3>

            {analysisResult.improvements.map((imp, idx) => (
              <div 
                key={idx}
                className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                  imp.type === 'strength'
                    ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-200'
                    : 'bg-amber-500/5 border-amber-500/20 text-amber-200'
                }`}
              >
                {imp.type === 'strength' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                )}
                <span className="leading-relaxed">{imp.text}</span>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="p-3.5 rounded-xl bg-[#080D19] border border-white/5 text-[11px] text-slate-400 flex items-start gap-2">
            <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p>
              Disclaimer: This client-side score is an algorithmic estimate designed to assist students with structure and phrasing. Does not guarantee ATS pass-through or job interview selection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
