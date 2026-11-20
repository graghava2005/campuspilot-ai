import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  Trash2, 
  Copy, 
  Check, 
  Bot, 
  User, 
  Lightbulb, 
  Calendar, 
  Briefcase, 
  Code2, 
  HelpCircle,
  Flame,
  ArrowRight
} from 'lucide-react';
import { pilotKnowledgeBase } from '../data/initialData';

export default function PilotAIPage({ profile, showToast }) {
  const [messages, setMessages] = useState([
    {
      id: 'msg-1',
      sender: 'ai',
      text: `Hello ${profile.name || 'Raghava'}! I am **Pilot AI**, your personal campus learning companion.\n\nI can help you:\n- 🧠 Explain complex AI/ML and engineering concepts\n- 📅 Generate personalized study timetables\n- 💼 Create placement preparation strategies for tier-1 tech firms\n- 🚀 Suggest standout capstone projects for your resume\n- 🎯 Practice behavioral and technical interview questions\n\nTry clicking one of the suggested prompts below or ask me anything!`,
      timestamp: '12:00 PM'
    }
  ]);

  const [inputPrompt, setInputPrompt] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // AI Response Generator with heuristic keyword matching
  const generateAIResponse = (query) => {
    const q = query.toLowerCase().trim();

    if (q.includes('explain machine learning') || (q.includes('what is') && q.includes('machine learning')) || q.includes('ml')) {
      return `### 🧠 Understanding Machine Learning

Machine Learning is a subset of Artificial Intelligence that enables computers to **learn patterns directly from data** rather than following explicitly hardcoded rules.

#### 1. Core Paradigms
- **Supervised Learning**: Model learns from input-output pairs $(X \rightarrow Y)$.
  - *Algorithms*: Linear/Logistic Regression, Decision Trees, Random Forests, XGBoost, Neural Networks.
  - *Use Case*: Spam filtering, house price prediction, medical diagnosis.
- **Unsupervised Learning**: Discovering hidden structures without ground-truth labels $(X)$.
  - *Algorithms*: K-Means Clustering, Principal Component Analysis (PCA), Autoencoders.
  - *Use Case*: Customer segmentation, anomaly detection, dimension reduction.
- **Reinforcement Learning**: Agent learns through trial and error by optimizing a reward signal $R_t$.
  - *Use Case*: Game-playing (AlphaGo), robotics control, autonomous driving.

#### 2. Key Workflow
1. **Data Preprocessing & Feature Engineering** (Imputation, Scaling, Encoding)
2. **Model Selection & Training** (Optimizing Loss Function via Gradient Descent)
3. **Hyperparameter Tuning** (Cross-validation, Optuna, GridSearch)
4. **Evaluation & Deployment** (Precision, Recall, ROC-AUC, FastAPI serving)

💡 *Pilot AI Tip*: For your B.Tech CSM profile, start by implementing Linear Regression from scratch with NumPy, then advance to PyTorch neural models!`;
    }

    if (q.includes('timetable') || q.includes('schedule') || q.includes('study plan')) {
      return `### 📅 Recommended Weekly Study Timetable for ${profile.name || 'Raghava'} (${profile.shortBranch || 'B.Tech CSM'})

Here is an optimal balance between semester coursework, DSA problem solving, and AI capstone development:

| Time Slot | Monday – Wednesday | Thursday – Friday | Saturday – Sunday |
| :--- | :--- | :--- | :--- |
| **08:30 - 11:30 AM** | University Lectures & Core Theory | University Lab Sessions | Open Source & Project Building |
| **02:00 - 04:30 PM** | Machine Learning Math & PyTorch | Compiler Design & Cloud Infra | Hackathon Team Sprints |
| **06:00 - 07:30 PM** | 2 Medium LeetCode Problems (Graphs/DP) | 2 Medium LeetCode Problems (Trees) | Weekly Formula & Concept Revision |
| **08:30 - 09:30 PM** | System Design / CS Fundamentals | Resume & Opportunity Radar Review | Pilot AI Mock Interview Practice |

⚡ *Pro Tip*: Use 50-minute focused Pomodoro blocks with 10-minute breaks to avoid cognitive fatigue!`;
    }

    if (q.includes('placement') || q.includes('prepare for placements') || q.includes('job')) {
      return `### 💼 Complete 5-Pillar Placement Strategy for AI & SDE Roles

To secure high-paying placements (₹14 - 30+ LPA) during your campus recruitment season:

#### 1. Data Structures & Algorithms (The Screening Filter)
- Master **150 - 200 LeetCode patterns**: Arrays, HashMaps, Sliding Window, Binary Search, Trees, Graphs, and Dynamic Programming.
- Target solving 2-3 problems daily in C++ or Java with clean time/space complexity analysis.

#### 2. Core CS Fundamentals (The Technical Rounds)
- **Operating Systems**: Processes vs Threads, Deadlocks, Virtual Memory, Paging, Page Replacement.
- **DBMS**: Normalization, Indexing (B-Trees), ACID properties, SQL Window functions.
- **Computer Networks**: TCP/IP 3-Way Handshake, DNS resolution, HTTP/HTTPS, WebSockets.

#### 3. High-Impact Projects (The Interview Talking Points)
- Avoid generic Todo apps. Showcase production systems (e.g., Multimodal RAG with FastAPI, Microservices with Docker).
- Deploy live demo links and clean GitHub README documentation.

#### 4. System Design Basics
- Study Horizontal vs Vertical Scaling, Load Balancers, Consistent Hashing, and Caching with Redis.

#### 5. Behavioral Rounds (HR & Leadership)
- Frame past team projects and hackathons using the **STAR method** (Situation, Task, Action, Result).`;
    }

    if (q.includes('project') || q.includes('suggest ai/ml projects') || q.includes('ideas')) {
      return `### 🚀 3 Standout AI/ML Project Ideas for Your Portfolio

#### 1. Enterprise Multi-Document RAG with Citation Grounding
- **Tech Stack**: LangChain, ChromaDB / FAISS, FastAPI, Streamlit, PyTorch.
- **Why It Stands Out**: Solves real-world hallucination problems by attributing every generation to specific PDF page coordinates.
- **Resume Impact**: "Architected sub-500ms hybrid search reducing factual hallucinations by 35%."

#### 2. Real-Time Explainable Medical Vision Classifier
- **Tech Stack**: PyTorch, TorchVision (ResNet/EfficientNet), Grad-CAM, React frontend.
- **Why It Stands Out**: Visualizes clinical decision heatmaps for doctors rather than operating as a black box.
- **Resume Impact**: "Trained on 10k scans with 94% test accuracy and integrated live Grad-CAM interpretability."

#### 3. Distributed Sentiment & Topic Intelligence Pipeline
- **Tech Stack**: Hugging Face Transformers, Kafka, Docker, PostgreSQL, React Dashboard.
- **Why It Stands Out**: Shows distributed systems awareness alongside NLP modeling.`;
    }

    if (q.includes('interview') || q.includes('prepare for interviews')) {
      return `### 🎯 Top Technical & Behavioral Interview Questions for Practice

#### Machine Learning & AI
1. *What is the difference between Batch Gradient Descent, Mini-batch, and Stochastic Gradient Descent (SGD)?*
2. *How does the Attention mechanism in Transformers overcome the bottleneck of RNNs/LSTMs?*
3. *How do you deal with severe class imbalance in fraud detection or disease classification?*

#### Algorithms & Coding
4. *Given a directed graph, how would you detect whether a cycle exists? (Topological Sort / Kahn's algorithm or DFS colors).*
5. *Explain how a HashMap handles hash collisions (Chaining vs Open Addressing).*

#### Behavioral (STAR Method)
6. *"Tell me about a time when your code failed right before a project or hackathon deadline. How did you troubleshoot it?"*

💡 *Next Step*: Reply with your answer to any question above, and I will critique your explanation!`;
    }

    if (q.includes('resume') || q.includes('ats')) {
      return `### 📄 4 Quick Wins to Skyrocket Your Resume ATS Score

1. **Quantify Every Bullet Point**:
   - ❌ *Weak*: "Worked on model training and data preprocessing."
   - ✅ *Strong*: "Fine-tuned BERT model on 45,000 customer reviews, improving F1-score from 0.74 to 0.88 and decreasing inference latency by 32%."
2. **Lead with Active Engineering Verbs**:
   - Use: *Architected, Implemented, Engineered, Containerized, Deployed, Benchmarked, Reduced, Formulated*.
3. **Include Dedicated Technical Skills Breakdown**:
   - Separate Languages, Frameworks, Developer Tools, and Cloud Platforms for parsing clarity.
4. **Remove Graphics & Two-Column Formatting**:
   - ATS parsers favor clean, single-column, standard UTF-8 text hierarchies.`;
    }

    if (q.includes('dsa') || q.includes('algorithm') || q.includes('leetcode')) {
      return `### ⚡ 30-Day High-Yield DSA Mastery Sprint

For tier-1 campus placements (Google, Microsoft, Amazon, Atlassian):

1. **Week 1: Foundations & Two Pointers**
   - Two Pointers, Sliding Window, Fast & Slow Pointers.
   - Core questions: *Trapping Rain Water, Longest Substring Without Repeating Characters, 3Sum*.
2. **Week 2: Trees & Graph Traversals**
   - Inorder/Preorder/Postorder, Level Order (BFS), Depth First Search (DFS).
   - Core questions: *Lowest Common Ancestor, Course Schedule, Clone Graph, Word Ladder*.
3. **Week 3: Dynamic Programming Patterns**
   - 1D DP, 0/1 Knapsack, Longest Common Subsequence, Grid paths.
   - Core questions: *Coin Change, House Robber, Edit Distance, Unique Paths*.
4. **Week 4: Heaps & System Design Screening**
   - Top-K elements, Median from Data Stream, LRU Cache implementation.

💡 *Daily Habit*: Solve 2 medium questions consistently without looking at solutions for the first 25 minutes!`;
    }

    if (q.includes('web dev') || q.includes('full stack') || q.includes('react')) {
      return `### 🌐 Full Stack Engineering Essentials in 2025

To build industrial-grade full stack SaaS applications:

- **Frontend Core**: React 19, TypeScript, Tailwind CSS, State Management (Zustand/Redux), Next.js App Router.
- **Backend Architecture**: Node.js/Express or Python FastAPI, RESTful standards, WebSockets for live sync.
- **Databases & Caching**: PostgreSQL (Relational integrity), Prisma ORM, Redis (Sub-millisecond cache layer).
- **DevOps & Cloud**: Docker containerization, GitHub Actions CI/CD pipelines, Vercel/AWS deployments.
- **Security Essentials**: JWT Auth, HttpOnly Cookies, CORS policies, SQL injection protection, Input sanitization.`;
    }

    if (q.includes('cloud') || q.includes('docker') || q.includes('aws') || q.includes('kubernetes')) {
      return `### ☁️ Cloud & DevOps Fundamentals for Campus Engineers

1. **Containerization with Docker**:
   - Multi-stage builds to produce minimal Alpine images (<100MB).
   - Docker Compose for multi-container development (Frontend + Backend + Postgres + Redis).
2. **AWS Core Services**:
   - **EC2 & ECS**: Virtual compute and managed container orchestration.
   - **S3 & CloudFront**: Object storage with global low-latency CDN edge caching.
   - **IAM**: Least-privilege access policies and service roles.
3. **Observability**:
   - Structured JSON logging, Prometheus metrics, and Grafana alert boards.`;
    }

    if (q.includes('hackathon') || q.includes('sih')) {
      return `### 🏆 Winning Strategy for College Hackathons (SIH, ETHIndia)

1. **Idea Validation (First 3 Hours)**:
   - Pick problem statements with clear end-user pain points and measurable impact.
   - Define your MVP scope strictly: 1 core killer feature rather than 5 half-working tabs.
2. **Architecture & Velocity (Hours 4 - 24)**:
   - Use pre-built component libraries (Tailwind + Lucide) and reliable boilerplate.
   - Deploy early to Vercel/Netlify so the jury has a working live link.
3. **The 3-Minute Winning Pitch**:
   - 30s: The Problem & who suffers from it.
   - 90s: Live interactive product demo (no static slides!).
   - 45s: Technical innovation, scalability, and market viability.
   - 15s: Q&A closing.`;
    }

    // Default intelligent fallback
    return `### 💡 Pilot AI Analysis

Thank you for your question regarding **"${query}"**!

As your academic and career copilot:
- **Immediate Action**: Focus on breaking down this goal into actionable daily milestones.
- **Curriculum Alignment**: Relevant to your **${profile.shortBranch || 'B.Tech CSM – AI/ML'}** semester journey.
- **Recommended Next Step**: Check your **Study Planner** to schedule dedicated study slots, or explore the **Career Roadmap** for milestone tracking.

Would you like me to generate a tailored step-by-step checklist or mock interview questions on this topic?`;
  };

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputPrompt;
    if (!query.trim()) return;

    const userMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputPrompt('');
    setIsTyping(true);

    setTimeout(() => {
      const responseText = generateAIResponse(query);
      const aiMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 700);
  };

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    showToast('Copied to Clipboard 📋', 'Response text copied', 'info');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'msg-cleared',
        sender: 'ai',
        text: `Chat cleared! How can I assist you with your college studies, placement preparation, or AI/ML roadmaps today, ${profile.name || 'Raghava'}?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    showToast('Chat Reset', 'Cleared conversation history', 'info');
  };

  return (
    <div className="space-y-6 animate-fade-in flex flex-col h-[calc(100vh-140px)] min-h-[600px]">
      {/* Header Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-900/40 via-[#111827] to-cyan-900/40 border border-purple-500/20 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-0.5 shadow-glow-purple">
            <div className="w-full h-full bg-[#080D19] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">Pilot AI</h2>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Demo AI • Zero API Costs
              </span>
            </div>
            <p className="text-xs text-slate-400">Your Personal Learning Companion • B.Tech AI/ML Specialist</p>
          </div>
        </div>

        <button
          onClick={handleClearChat}
          className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors flex items-center gap-1.5 text-xs font-semibold"
          title="Clear chat history"
        >
          <Trash2 className="w-4 h-4" />
          <span className="hidden sm:inline">Clear Chat</span>
        </button>
      </div>

      {/* Suggested Questions Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 shrink-0">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0 flex items-center gap-1">
          <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
          <span>Suggestions:</span>
        </span>
        {pilotKnowledgeBase.suggestedQuestions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(q)}
            className="px-3 py-1.5 rounded-xl text-xs font-medium bg-[#111827] hover:bg-white/5 text-slate-300 hover:text-cyan-300 border border-white/10 whitespace-nowrap transition-colors"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto rounded-2xl bg-[#0B1120] border border-white/10 p-4 sm:p-6 space-y-4 custom-scroll">
        {messages.map((msg) => {
          const isAi = msg.sender === 'ai';

          return (
            <div 
              key={msg.id}
              className={`flex items-start gap-3 ${isAi ? 'justify-start' : 'justify-end'}`}
            >
              {isAi && (
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-4 h-4 text-cyan-400" />
                </div>
              )}

              <div className={`group relative max-w-2xl rounded-2xl p-4 sm:p-5 text-xs sm:text-sm leading-relaxed ${
                isAi 
                  ? 'bg-[#111827] border border-white/10 text-slate-200' 
                  : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-glow-purple'
              }`}>
                {/* Markdown style simple renderer */}
                <div className="whitespace-pre-wrap space-y-2">
                  {msg.text.split('\n').map((line, lIdx) => {
                    if (line.startsWith('### ')) {
                      return <h4 key={lIdx} className="text-base font-bold text-white mt-2 mb-1">{line.replace('### ', '')}</h4>;
                    }
                    if (line.startsWith('#### ')) {
                      return <h5 key={lIdx} className="text-sm font-bold text-cyan-300 mt-2">{line.replace('#### ', '')}</h5>;
                    }
                    if (line.startsWith('- ')) {
                      return <li key={lIdx} className="ml-4 list-disc text-slate-300">{line.replace('- ', '')}</li>;
                    }
                    if (line.startsWith('|')) {
                      return <div key={lIdx} className="font-mono text-xs overflow-x-auto py-0.5">{line}</div>;
                    }
                    return <p key={lIdx}>{line}</p>;
                  })}
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/5">
                  <span>{msg.timestamp}</span>
                  {isAi && (
                    <button
                      onClick={() => handleCopy(msg.id, msg.text)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-white flex items-center gap-1"
                    >
                      {copiedId === msg.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                    </button>
                  )}
                </div>
              </div>

              {!isAi && (
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0 mt-1 font-bold text-xs text-purple-300">
                  {profile.name?.charAt(0) || 'R'}
                </div>
              )}
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
              <Bot className="w-4 h-4 text-cyan-400 animate-pulse" />
            </div>
            <div className="p-4 rounded-2xl bg-[#111827] border border-white/10 text-xs text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Pilot AI is formulating curriculum guidance...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="relative flex items-center gap-2 shrink-0"
      >
        <input
          type="text"
          value={inputPrompt}
          onChange={(e) => setInputPrompt(e.target.value)}
          placeholder="Ask Pilot AI anything (e.g., 'Explain transformers', 'Study timetable', 'Placement strategy')..."
          className="w-full px-5 py-3.5 rounded-2xl bg-[#111827] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors pr-14 shadow-xl"
        />
        <button
          type="submit"
          disabled={!inputPrompt.trim() || isTyping}
          className="absolute right-2 p-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 disabled:opacity-40 text-white shadow-glow-purple transition-all"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
