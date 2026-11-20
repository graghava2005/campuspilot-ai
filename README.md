# CampusPilot AI
### *Your Campus. Your Career. Your Future.*

> **"Your College Journey. Supercharged by AI."**  
> One intelligent platform to organize your studies, discover opportunities, build skills, and become career-ready.

---

## 🌟 Executive Summary

**CampusPilot AI** is an all-in-one AI-powered academic and career acceleration platform built specifically for engineering undergraduates (B.Tech CSM / CSE / AI-ML / ECE). It bridges the gap between demanding semester coursework and high-paying tech industry recruitment by unifying study planning, career roadmaps, verified opportunities, ATS resume optimization, and a personal learning assistant into a high-performance dark-mode SaaS dashboard.

---

## 🚀 Key Modules & Features

### 1. 🌌 High-Converting SaaS Landing Page
- **Hero Showcase**: Gradient typography, live animated preview window, dynamic social proof.
- **Interactive Feature Matrix**: Pilot AI, Study Planner, Opportunity Finder, ATS Resume Analyzer, Career Roadmaps, and XP Gamification.
- **Workflow & Benefits**: Step-by-step student onboarding guide and student reviews.
- **Interactive FAQ & Footer**: Complete answers for hackathon evaluation.

### 2. 📊 Student Dashboard (`/dashboard`)
- **Personalized Header**: *"Welcome back, Raghava!"* (B.Tech CSM – AI/ML, Semester 6).
- **Core KPI Stat Cards**: Profile completion (88%), 14-day learning streak, skills acquired, and study completion progress.
- **Interactive Visualizations (Recharts)**:
  - Weekly Study & Focus Hours (Area chart with custom gradient and tooltips).
  - Domain Breakdown (Bar chart mapping AI/ML, DSA, Web Dev, Cloud).
- **Pilot AI Recommendations**: Context-aware suggestions for resume improvements, hackathons, and roadmap checkpoints.
- **Upcoming Deadlines Radar**: Live countdown for coursework tasks, summer internships, and hackathon registration dates.

### 3. 📅 Smart Study Planner & AI Timetable
- **Task Management**: Create, filter by subject/priority, mark complete, and delete milestones.
- **Interactive 7-Day AI Timetable**: Generates structured daily routines balancing theory lectures, lab coding, and placement DSA practice.
- **LocalStorage Sync**: Every task, edit, and completion status persists across browser sessions.
- **Gamified Completion**: Confetti celebration upon checking off tasks.

### 4. 🧭 Opportunity Finder (Internships, Scholarships, Hackathons)
- **Internships**: Realistic demo listings for Google SWE Intern, Microsoft Azure AI Intern, NVIDIA Deep Learning, Amazon SDE, Razorpay, and Swiggy.
- **Scholarships**: Reliance Foundation Undergraduate Scholarship, Generation Google APAC, Adobe Women in Tech, Tata Trust Grant.
- **Hackathons**: Smart India Hackathon (SIH 2025), ETHIndia Web3 & AI, Google Cloud GenAI Student Sprint, HackMIT.
- **Bookmark Hub**: One-click save to personal bookmark drawer with search and filters.
- **Simulated Application Flow**: Interactive modal demonstrating one-click package preparation.

### 5. 📄 AI Resume Analyzer & ATS Readiness
- **Multi-Format Input**: Upload PDF or paste plain-text resume into code editor.
- **Client-Side Algorithmic Parsing Engine**:
  - Section completeness scanner (Contact, Education, Skills, Projects, Experience, Certifications).
  - Hard skill keyword density extractor (Python, PyTorch, React, Docker, FastAPI, AWS, etc.).
  - Impactful action verb detection (Architected, Deployed, Fine-tuned, Containerized, etc.).
  - Quantified metrics score (% latency drop, throughput, scale).
- **Dynamic Score & Actionable Feedback**: Detailed ATS score out of 100 with clear suggestions for improvement.

### 6. 🗺️ 6 Specialized Career Roadmaps
- **Career Tracks**:
  1. **AI/ML Engineer** (94% Match for Raghava)
  2. **Full Stack Developer** (88% Match)
  3. **Data Scientist** (85% Match)
  4. **Software Engineer** (82% Match)
  5. **Data Analyst** (78% Match)
  6. **Cloud Engineer** (75% Match)
- **Track Features**: Required skills, languages, tools, interactive stages with checklist milestones, portfolio project suggestions (Beginner, Intermediate, Capstone), and technical interview questions.

### 7. 🤖 Pilot AI Assistant — *Your Personal Learning Companion*
- **Conversational Chatbot**: Pre-seeded with student knowledge base.
- **Instant Suggested Queries**:
  - *"Explain machine learning."*
  - *"Create my study timetable."*
  - *"How can I prepare for placements?"*
  - *"Suggest AI/ML projects."*
  - *"Help me prepare for interviews."*
  - *"How can I improve my resume ATS score?"*
- **Features**: Copy responses, clear chat history, rich markdown formatting, zero external API cost or rate limits.

### 8. ⚡ Technical Skill Tracker
- **Categories**: Programming, AI/ML, Web Development, Databases, Cloud, Communication.
- **Interactive Controls**: Add skill, edit proficiency (Beginner, Intermediate, Advanced, Expert), update progress slider, and set learning milestones.
- **Radar & Bar Charts**: Live competency benchmarking comparing domain strengths.

### 9. 🏆 Achievements & XP Gamification
- **XP Progression**: 2,450 XP, Level 6 Pathfinder, rank progress bar.
- **Learning Streak**: 14-day continuous activity counter.
- **Verified Badges**:
  - First Step
  - Coding Explorer
  - Consistency Champion
  - Skill Master
  - Career Ready (in-progress tracker)
  - Hackathon Hustler
  - Resume Refiner
  - AI Pathfinder
- **Weekly Sprint Quests**: Claimable XP rewards with confetti celebratory animations.

### 10. 👤 Student Profile Management
- **Demo Profile**: G Raghava • B.Tech Computer Science & Engineering (AI/ML) • Semester 6.
- **Editable Fields**: Name, Degree, College, CGPA, Target Graduation, Bio, Interests, GitHub, LinkedIn, Portfolio.
- **Dynamic Completion Calculation**: Real-time percentage update upon saving changes.

---

## 🎨 Design Philosophy & Color Palette

Inspired by **Linear, Vercel, Stripe**, and state-of-the-art AI dashboards:
- **Main Background**: `#080D19`
- **Card Background**: `#111827`
- **Secondary Background**: `#172033`
- **Brand Purple**: `#8B5CF6`
- **Brand Cyan**: `#22D3EE`
- **Pure White**: `#F8FAFC`
- **Muted Text**: `#94A3B8`

---

## 💻 Tech Stack

- **Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS 3.4 (custom design tokens, glassmorphism, glow effects)
- **Icons**: Lucide React
- **Data Visualization**: Recharts (Responsive AreaChart, BarChart, RadarChart)
- **Animations & Delight**: Canvas Confetti + Tailwind Keyframes
- **Persistence**: Browser `window.localStorage` (zero backend dependencies)

---

## 🛠️ Getting Started & Local Development

### 1. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 2. Start Development Server
\`\`\`bash
npm run dev
\`\`\`
The application will launch at \`http://localhost:5173/\`.

### 3. Production Build
\`\`\`bash
npm run build
\`\`\`
Produces optimized assets in the \`dist/\` directory ready for deployment on Vercel, Netlify, or Embarko.

---

© 2026 CampusPilot AI. Developed for Student Hackathon Excellence.
