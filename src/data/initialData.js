// Comprehensive initial dataset for CampusPilot AI

export const initialProfile = {
  name: "Raghava",
  fullName: "G Raghava (Demo Profile)",
  degree: "B.Tech",
  branch: "Computer Science and Engineering – AI/ML",
  shortBranch: "B.Tech CSM – AI/ML",
  semester: "6th Semester",
  college: "National Institute of Science & Technology (Demo Campus)",
  gpa: "8.9 / 10.0",
  email: "raghava.student@demo-campus.edu",
  phone: "+91 98765 XXXXX (Demo)",
  location: "Hyderabad, India (Demo)",
  interests: "Artificial Intelligence, Machine Learning, Web Development, Cloud Computing, Distributed Systems",
  careerGoal: "AI/ML Engineer",
  targetGraduation: "2026",
  github: "github.com/demo-raghava-ai",
  linkedin: "linkedin.com/in/demo-raghava-aiml",
  portfolio: "raghava-demo.vercel.app",
  bio: "Demo student profile: Passionate B.Tech AI/ML undergrad enthusiastic about deep learning, generative vision-language models, and full-stack intelligent tools. Building real-world AI applications and preparing for high-impact campus placements.",
  profileCompletion: 88,
  learningStreak: 14,
  xp: 2450,
  level: "Level 6 Pathfinder"
};

export const initialTasks = [
  {
    id: "task-1",
    subject: "Machine Learning",
    title: "Implement Gradient Descent & Backprop from scratch in NumPy",
    priority: "High",
    deadline: "2026-11-20",
    completed: true,
    estimatedHours: 4,
    notes: "Review Andrew Ng CS229 lecture 4 notes on vectorization"
  },
  {
    id: "task-2",
    subject: "Deep Learning",
    title: "Fine-tune Transformer model for Sentiment Analysis on HuggingFace",
    priority: "High",
    deadline: "2026-11-22",
    completed: false,
    estimatedHours: 5,
    notes: "Evaluate with LoRA adapters to reduce GPU VRAM requirements"
  },
  {
    id: "task-3",
    subject: "Data Structures & Algorithms",
    title: "Solve 10 LeetCode Mediums on Dynamic Programming & Graphs",
    priority: "High",
    deadline: "2026-11-25",
    completed: false,
    estimatedHours: 6,
    notes: "Target: Coin Change, Course Schedule, Longest Common Subsequence"
  },
  {
    id: "task-4",
    subject: "Cloud Computing",
    title: "Deploy Containerized FastAPI service on AWS ECS with Docker",
    priority: "Medium",
    deadline: "2026-11-28",
    completed: false,
    estimatedHours: 3,
    notes: "Configure IAM roles and application load balancer"
  },
  {
    id: "task-5",
    subject: "Compiler Design",
    title: "Submit Lab Assignment 3: Syntax Directed Translation Lexer",
    priority: "Medium",
    deadline: "2026-11-21",
    completed: true,
    estimatedHours: 2,
    notes: "Flex and Bison configuration verified"
  },
  {
    id: "task-6",
    subject: "Web Development",
    title: "Build real-time websocket chat for CampusPilot prototype",
    priority: "Low",
    deadline: "2026-12-02",
    completed: false,
    estimatedHours: 4,
    notes: "Test socket reconnect logic and local caching"
  }
];

export const sampleTimetable = [
  { day: "Monday", slots: [
    { time: "09:00 AM - 11:00 AM", subject: "Machine Learning", topic: "Vector Math & Optimization Algorithms", type: "Lecture & Practice" },
    { time: "02:00 PM - 04:00 PM", subject: "DSA Lab", topic: "Graph Traversal (BFS / DFS / Dijkstra)", type: "Hands-on Coding" },
    { time: "06:00 PM - 07:30 PM", subject: "Self Study", topic: "LeetCode 2 Practice Problems", type: "Problem Solving" }
  ]},
  { day: "Tuesday", slots: [
    { time: "10:00 AM - 12:00 PM", subject: "Deep Learning", topic: "CNN Architecture & ResNet implementation", type: "Lecture" },
    { time: "02:30 PM - 04:30 PM", subject: "Cloud Computing", topic: "Dockerizing PyTorch Inference Containers", type: "Lab Work" },
    { time: "08:00 PM - 09:30 PM", subject: "Interview Prep", topic: "Core OS Concepts & Virtual Memory", type: "Revision" }
  ]},
  { day: "Wednesday", slots: [
    { time: "09:30 AM - 11:30 AM", subject: "Compiler Design", topic: "Parsing Tables & LL(1) Grammars", type: "Lecture" },
    { time: "01:30 PM - 03:30 PM", subject: "Project Work", topic: "CampusPilot AI Feature Enhancements", type: "Development" },
    { time: "07:00 PM - 08:30 PM", subject: "DSA", topic: "Dynamic Programming Patterns", type: "Problem Solving" }
  ]},
  { day: "Thursday", slots: [
    { time: "10:00 AM - 12:00 PM", subject: "Machine Learning", topic: "Unsupervised Clustering & PCA", type: "Lecture & Code" },
    { time: "02:00 PM - 04:00 PM", subject: "Self-Paced AI", topic: "LangChain & RAG Pipeline Architecture", type: "Research" },
    { time: "06:30 PM - 08:00 PM", subject: "Aptitude & Soft Skills", topic: "Mock Placement Technical Screening", type: "Assessment" }
  ]},
  { day: "Friday", slots: [
    { time: "09:00 AM - 11:00 AM", subject: "Deep Learning", topic: "Attention Mechanisms & Transformers", type: "Seminar" },
    { time: "02:00 PM - 04:30 PM", subject: "Full Stack Lab", topic: "REST API Integration & State Management", type: "Lab" },
    { time: "07:00 PM - 09:00 PM", subject: "Hackathon Prep", topic: "Brainstorming AI Hackathon Challenge", type: "Team Sprint" }
  ]},
  { day: "Saturday", slots: [
    { time: "10:00 AM - 01:00 PM", subject: "Open Source / Project", topic: "Portfolio AI Project Development", type: "Build Time" },
    { time: "03:00 PM - 05:00 PM", subject: "Resume & Applications", topic: "Review Job Descriptions & Update Skills", type: "Career" }
  ]},
  { day: "Sunday", slots: [
    { time: "11:00 AM - 01:00 PM", subject: "Weekly Revision", topic: "Review Key Formulas & DSA mistakes", type: "Review" },
    { time: "04:00 PM - 06:00 PM", subject: "Pilot AI Practice", topic: "Mock Technical Interview with Pilot AI", type: "Interactive" }
  ]}
];

export const initialOpportunities = {
  internships: [
    {
      id: "int-1",
      company: "Google",
      logo: "G",
      role: "Software Engineering Intern (Summer 2025 Demo)",
      requiredSkills: ["C++", "Python", "Algorithms", "Data Structures"],
      stipend: "₹1,25,000 / month",
      deadline: "2026-12-15",
      location: "Bengaluru / Hyderabad (Hybrid)",
      type: "Internship",
      experience: "Undergraduates (Class of 2026)",
      description: "Sample opportunity for demonstration. Work on scalable search algorithms, YouTube recommendations, or cloud computing infrastructure alongside senior Google engineers.",
      bookmarked: false
    },
    {
      id: "int-2",
      company: "Microsoft",
      logo: "MS",
      role: "AI & Azure Machine Learning Research Intern Demo",
      requiredSkills: ["Python", "PyTorch", "Azure AI", "Transformer Models"],
      stipend: "₹1,10,000 / month",
      deadline: "2026-12-20",
      location: "Bengaluru, India",
      type: "Internship",
      experience: "Pre-final Year B.Tech / M.Tech",
      description: "Sample opportunity for demonstration. Join the Azure Cognitive Services team to build and evaluate next-gen multimodal reasoning engines and enterprise copilots.",
      bookmarked: true
    },
    {
      id: "int-3",
      company: "NVIDIA",
      logo: "NV",
      role: "Deep Learning Hardware & Inference Intern Demo",
      requiredSkills: ["CUDA", "C++", "PyTorch", "TensorRT", "Computer Vision"],
      stipend: "₹95,000 / month",
      deadline: "2026-12-10",
      location: "Pune / Bengaluru",
      type: "Internship",
      experience: "CS / ECE Undergraduates",
      description: "Sample opportunity for demonstration. Optimize real-time generative models and computer vision pipelines using TensorRT and NVIDIA CUDA acceleration.",
      bookmarked: false
    },
    {
      id: "int-4",
      company: "Razorpay",
      logo: "RZ",
      role: "Full Stack Engineering Intern Demo",
      requiredSkills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Kafka"],
      stipend: "₹65,000 / month",
      deadline: "2026-11-30",
      location: "Remote / Bengaluru",
      type: "Internship",
      experience: "Open to all pre-final year students",
      description: "Sample opportunity for demonstration. Build high-concurrency payment gateway dashboards, automated merchant onboarding, and developer APIs.",
      bookmarked: false
    },
    {
      id: "int-5",
      company: "Swiggy",
      logo: "SW",
      role: "Data Science & Routing Algorithms Intern Demo",
      requiredSkills: ["Python", "Pandas", "Scikit-Learn", "Operations Research", "SQL"],
      stipend: "₹60,000 / month",
      deadline: "2026-12-05",
      location: "Bengaluru, India",
      type: "Internship",
      experience: "3rd & 4th year B.Tech",
      description: "Sample opportunity for demonstration. Formulate delivery time prediction models and dynamic pricing models serving 10M+ daily food and grocery orders.",
      bookmarked: false
    },
    {
      id: "int-6",
      company: "Amazon",
      logo: "AM",
      role: "Applied Scientist Intern (AWS ML Labs Demo)",
      requiredSkills: ["Python", "NLP", "LLM Fine-tuning", "Distributed Training"],
      stipend: "₹1,15,000 / month",
      deadline: "2026-12-25",
      location: "Hyderabad, India",
      type: "Internship",
      experience: "CS / Data Science Students",
      description: "Sample opportunity for demonstration. Research automated code generation and semantic search systems powering Amazon Bedrock services.",
      bookmarked: false
    }
  ],
  scholarships: [
    {
      id: "sch-1",
      name: "Reliance Foundation Undergraduate Scholarship Demo",
      provider: "Reliance Foundation",
      eligibility: "First to pre-final year students enrolled in full-time degree in India; family annual income criteria apply",
      benefits: "Up to ₹2,00,000 for entire degree duration + mentorship network",
      deadline: "2026-12-18",
      category: "Merit-cum-Means",
      awardType: "Tuition & Tech Grant",
      description: "Sample scholarship listing. Designed to support meritorious undergraduate engineering students across India with financial assistance and leadership workshops.",
      bookmarked: true
    },
    {
      id: "sch-2",
      name: "Generation Google Scholarship (APAC) Demo",
      provider: "Google for Education",
      eligibility: "Women and underrepresented students pursuing Computer Science or related STEM degrees in the Asia-Pacific region",
      benefits: "$2,500 USD (~₹2,10,000) award + Google Mentorship Summit invite",
      deadline: "2026-12-30",
      category: "Diversity & Merit",
      awardType: "Global Grant",
      description: "Sample scholarship listing. Celebrates academic excellence and passion for technology with financial grant and career coaching from Google engineers.",
      bookmarked: false
    },
    {
      id: "sch-3",
      name: "Adobe India Women-in-Technology Scholarship Demo",
      provider: "Adobe Research",
      eligibility: "Female students currently enrolled in B.Tech / M.Tech in Indian universities",
      benefits: "Full tuition fee waiver for final year + Internship offer at Adobe + Trip to Grace Hopper Celebration",
      deadline: "2026-12-12",
      category: "Women in Tech",
      awardType: "Full Scholarship + Internship",
      description: "Sample scholarship listing. Recognized worldwide for opening career opportunities for top female software innovators and researchers.",
      bookmarked: false
    },
    {
      id: "sch-4",
      name: "Tata Trust Merit-cum-Means Engineering Grant Demo",
      provider: "Sir Ratan Tata Trust",
      eligibility: "Undergraduates in 2nd, 3rd, or 4th year of accredited engineering college with >75% aggregate marks",
      benefits: "₹50,000 - ₹80,000 direct tuition fee reimbursement",
      deadline: "2027-01-15",
      category: "Need & Merit",
      awardType: "Direct Grant",
      description: "Sample scholarship listing. Philanthropic educational grant assisting hardworking STEM students with academic and hostel expenses.",
      bookmarked: false
    }
  ],
  hackathons: [
    {
      id: "hack-1",
      name: "Smart India Hackathon (SIH 2025) Demo",
      organizer: "Ministry of Education & AICTE",
      theme: "Smart Automation, AI in Healthcare, Disaster Management & Clean Energy",
      registrationDeadline: "2026-12-08",
      prizeDetails: "₹1,00,000 per problem statement (Over ₹1 Crore total pool)",
      teamSize: "6 Members (Mandatory 1 female member)",
      mode: "National Finals: In-person Nodal Centers",
      description: "Sample hackathon listing. World's biggest open innovation model solving pressing challenges faced by Indian government ministries and private industries.",
      bookmarked: true
    },
    {
      id: "hack-2",
      name: "ETHIndia Web3 & AI Hackathon Sprint Demo",
      organizer: "Devfolio & ETHGlobal",
      theme: "Decentralized AI, Zero-Knowledge Proofs, Autonomous Agents & DeFi",
      registrationDeadline: "2026-11-28",
      prizeDetails: "$120,000+ USD in Bounties & Seed Grants",
      teamSize: "2 - 4 Members",
      mode: "Hybrid / Bengaluru Onsite",
      description: "Sample hackathon listing. Asia's premier hackathon bringing together builders to pioneer sovereign AI agents and verifiable computing protocols.",
      bookmarked: false
    },
    {
      id: "hack-3",
      name: "Google Cloud GenAI Student Hack Sprint Demo",
      organizer: "Google Cloud Innovators",
      theme: "Multimodal Gemini API Solutions for Campus, Climate & Education",
      registrationDeadline: "2026-12-22",
      prizeDetails: "$25,000 Google Cloud Credits + Pixel devices + Pitch to VCs",
      teamSize: "1 - 4 Members",
      mode: "Virtual",
      description: "Sample hackathon listing. Showcase how generative AI applications can solve local campus challenges with real-time demos and multimodal reasoning.",
      bookmarked: false
    },
    {
      id: "hack-4",
      name: "HackMIT Global Collegiate AI Hackathon Demo",
      organizer: "MIT Tech Club",
      theme: "Next-gen Computational Intelligence & Robotics",
      registrationDeadline: "2027-01-05",
      prizeDetails: "$40,000 Grand Prize Pool + Tech hardware kits",
      teamSize: "1 - 4 Members",
      mode: "Virtual & In-Person Cambridge, MA",
      description: "Sample hackathon listing. Prestigious global student competition hosting 1,000+ collegiate hackers across 50 countries.",
      bookmarked: false
    }
  ]
};

export const initialSkills = [
  { id: "sk-1", name: "Python", category: "Programming", level: "Advanced", progress: 92, target: "Expert (95%)", verified: true },
  { id: "sk-2", name: "C++ / Data Structures", category: "Programming", level: "Intermediate", progress: 80, target: "Advanced (90%)", verified: true },
  { id: "sk-3", name: "PyTorch & Deep Learning", category: "AI/ML", level: "Advanced", progress: 84, target: "Expert (95%)", verified: true },
  { id: "sk-4", name: "Scikit-Learn & ML Algorithms", category: "AI/ML", level: "Advanced", progress: 88, target: "Expert (95%)", verified: true },
  { id: "sk-5", name: "Transformers & LLMs (HuggingFace)", category: "AI/ML", level: "Intermediate", progress: 75, target: "Advanced (90%)", verified: false },
  { id: "sk-6", name: "React.js & Modern Frontend", category: "Web Development", level: "Advanced", progress: 86, target: "Mastery (95%)", verified: true },
  { id: "sk-7", name: "Node.js & Express / FastAPI", category: "Web Development", level: "Intermediate", progress: 78, target: "Advanced (85%)", verified: false },
  { id: "sk-8", name: "Tailwind CSS & UI Design", category: "Web Development", level: "Advanced", progress: 90, target: "Expert (95%)", verified: true },
  { id: "sk-9", name: "PostgreSQL & Vector Databases", category: "Databases", level: "Intermediate", progress: 76, target: "Advanced (85%)", verified: false },
  { id: "sk-10", name: "MongoDB & NoSQL", category: "Databases", level: "Intermediate", progress: 72, target: "Advanced (80%)", verified: true },
  { id: "sk-11", name: "Docker & Containerization", category: "Cloud", level: "Intermediate", progress: 68, target: "Advanced (80%)", verified: false },
  { id: "sk-12", name: "AWS Fundamentals (S3, EC2, Lambda)", category: "Cloud", level: "Beginner", progress: 60, target: "Intermediate (75%)", verified: false },
  { id: "sk-13", name: "Technical Communication & Pitching", category: "Communication", level: "Advanced", progress: 85, target: "Mastery (95%)", verified: true },
  { id: "sk-14", name: "System Design Fundamentals", category: "Programming", level: "Intermediate", progress: 65, target: "Advanced (80%)", verified: false }
];

export const initialRoadmaps = [
  {
    id: "aiml",
    title: "AI/ML Engineer",
    icon: "Brain",
    tagline: "Design, train, and deploy predictive models, neural architectures, and generative systems.",
    match: "94% Match for Raghava",
    stats: {
      averageSalary: "₹14 - 32 LPA",
      timeToLearn: "8 - 12 Months",
      totalStages: 5,
      openOpportunities: "1,200+ Active Roles"
    },
    skills: ["Python", "Linear Algebra", "Calculus & Probability", "PyTorch", "TensorFlow", "Scikit-Learn", "Transformers", "CUDA basics", "MLOps", "Docker", "FastAPI"],
    languages: ["Python", "C++", "SQL", "Julia"],
    tools: ["Jupyter", "PyTorch", "Hugging Face", "MLflow", "Weights & Biases", "Docker", "Git", "Google Colab Pro", "vLLM", "FAISS"],
    stages: [
      {
        id: "aiml-1",
        name: "Stage 1: Mathematical Foundations & Python Mastery",
        duration: "4 - 6 Weeks",
        difficulty: "Foundational",
        completed: true,
        description: "Master vector math, matrix decomposition, differential calculus, and advanced Python idioms.",
        topics: [
          { name: "Vector & Matrix Operations, Eigenvalues & PCA", done: true },
          { name: "Multivariate Calculus & Partial Derivatives", done: true },
          { name: "Probability Distributions, Bayes Theorem & Maximum Likelihood", done: true },
          { name: "NumPy & Pandas performance optimization", done: true },
          { name: "Matplotlib & Seaborn exploratory data analysis", done: true }
        ]
      },
      {
        id: "aiml-2",
        name: "Stage 2: Classical Machine Learning & Algorithms",
        duration: "6 - 8 Weeks",
        difficulty: "Intermediate",
        completed: true,
        description: "Understand the statistical mechanics behind supervised, unsupervised, and ensemble methods.",
        topics: [
          { name: "Linear & Logistic Regression with regularizations (L1/L2)", done: true },
          { name: "Decision Trees, Random Forests & Gradient Boosted Trees (XGBoost/LightGBM)", done: true },
          { name: "Support Vector Machines (SVM) & Kernel tricks", done: true },
          { name: "Cross-validation, Hyperparameter tuning (Optuna)", done: true },
          { name: "Bias-Variance tradeoff & Feature Engineering pipelines", done: true }
        ]
      },
      {
        id: "aiml-3",
        name: "Stage 3: Deep Neural Networks & Computer Vision / NLP",
        duration: "8 - 10 Weeks",
        difficulty: "Advanced",
        completed: false,
        description: "Build feedforward networks, convolutional architectures, and sequence models from first principles.",
        topics: [
          { name: "Backpropagation algorithm & Custom Autograd in PyTorch", done: true },
          { name: "CNN Architectures (ResNet, EfficientNet) & Transfer Learning", done: true },
          { name: "Recurrent Networks (LSTM/GRU) and Seq2Seq", done: false },
          { name: "Attention Is All You Need: Transformer Encoder/Decoder Architecture", done: false },
          { name: "Vision Transformers (ViT) & Object Detection (YOLOv8)", done: false }
        ]
      },
      {
        id: "aiml-4",
        name: "Stage 4: Generative AI, LLMs & Multimodal Systems",
        duration: "6 - 8 Weeks",
        difficulty: "Cutting Edge",
        completed: false,
        description: "Explore Large Language Models, LoRA fine-tuning, RAG pipelines, and diffusion models.",
        topics: [
          { name: "Hugging Face transformers pipeline & tokenizer mechanics", done: false },
          { name: "Retrieval-Augmented Generation (RAG) with LangChain/LlamaIndex & Vector DBs", done: false },
          { name: "Parameter-Efficient Fine-Tuning (PEFT, LoRA, QLoRA)", done: false },
          { name: "Quantization (GGUF, AWQ) & High-throughput inference (vLLM, Ollama)", done: false },
          { name: "Evaluation of LLMs using Ragas and automated benchmarks", done: false }
        ]
      },
      {
        id: "aiml-5",
        name: "Stage 5: MLOps, Model Deployment & Production Pipelines",
        duration: "4 - 6 Weeks",
        difficulty: "Industry Ready",
        completed: false,
        description: "Package, serve, monitor, and scale models across cloud clusters.",
        topics: [
          { name: "Packaging inference endpoints with FastAPI & Docker", done: false },
          { name: "Experiment tracking with MLflow or Weights & Biases", done: false },
          { name: "CI/CD for Machine Learning (CML / GitHub Actions)", done: false },
          { name: "Cloud model deployment on AWS SageMaker / GCP Vertex AI", done: false },
          { name: "Model drift monitoring and automated retraining triggers", done: false }
        ]
      }
    ],
    projects: [
      { level: "Beginner", title: "Customer Churn Prediction & Survival Analysis", tech: "Python, Scikit-Learn, Streamlit", outcome: "Predict churn with 91% ROC-AUC and feature importance dashboard" },
      { level: "Intermediate", title: "Medical Chest X-Ray Pneumonia Classifier with Explainability", tech: "PyTorch, TorchVision, Grad-CAM, FastAPI", outcome: "Classify 14 pathologies with heatmaps showing visual clinical evidence" },
      { level: "Capstone", title: "Enterprise RAG Assistant with Hybrid Search & Source Grounding", tech: "LangChain, ChromaDB, FastAPI, React, Docker", outcome: "Sub-second multi-turn document retrieval with strict citation checks" }
    ],
    interviewPrep: [
      "Explain the vanishing gradient problem and how Residual connections (ResNets) solve it.",
      "How does multi-head self-attention scale computationally with sequence length?",
      "Derive the loss function for Binary Cross Entropy and Softmax Cross Entropy.",
      "Compare XGBoost vs Random Forest: when would you choose one over another?",
      "How do you handle severe class imbalance in tabular and image datasets?",
      "System Design: How would you design a real-time recommendation feed like TikTok or Netflix?"
    ]
  },
  {
    id: "fullstack",
    title: "Full Stack Developer",
    icon: "Layers",
    tagline: "Build end-to-end, high-performance web products from interactive UIs to distributed backends.",
    match: "88% Match",
    stats: {
      averageSalary: "₹10 - 26 LPA",
      timeToLearn: "6 - 9 Months",
      totalStages: 4,
      openOpportunities: "3,500+ Active Roles"
    },
    skills: ["HTML5", "CSS3 / Tailwind", "Modern JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "Express", "PostgreSQL", "Prisma", "Redis", "Docker"],
    languages: ["JavaScript", "TypeScript", "SQL", "HTML/CSS"],
    tools: ["VS Code", "Git / GitHub", "Postman", "Vite", "Docker", "Vercel", "Supabase", "Tailwind CSS"],
    stages: [
      {
        id: "fs-1",
        name: "Stage 1: Modern Frontend Core & React",
        duration: "6 Weeks",
        difficulty: "Foundational",
        completed: true,
        description: "DOM manipulation, asynchronous JavaScript, React 19 hooks, component architecture, and responsive styling.",
        topics: [
          { name: "ES6+ Features (Promises, Async/Await, Destructuring)", done: true },
          { name: "React Components, State, Hooks & Custom Hooks", done: true },
          { name: "Tailwind CSS & Glassmorphic UI Design Systems", done: true },
          { name: "Client-side Routing & Protected Navigation", done: true }
        ]
      },
      {
        id: "fs-2",
        name: "Stage 2: Backend Architecture & RESTful APIs",
        duration: "6 Weeks",
        difficulty: "Intermediate",
        completed: true,
        description: "Build secure servers, authentication flows (JWT/OAuth), and middleware pipelines.",
        topics: [
          { name: "Node.js runtime, Event Loop & Express.js architecture", done: true },
          { name: "REST API design standards & HTTP status codes", done: true },
          { name: "JWT Token-based Auth & Cookie security (CORS, CSRF, XSS)", done: true },
          { name: "Input validation and automated error handling middlewares", done: false }
        ]
      },
      {
        id: "fs-3",
        name: "Stage 3: Databases, ORMs & Caching",
        duration: "6 Weeks",
        difficulty: "Intermediate",
        completed: false,
        description: "Relational database modeling with PostgreSQL, indexing strategies, and Redis caching.",
        topics: [
          { name: "Relational Database Schema Design & Normalization", done: true },
          { name: "Prisma ORM migrations and complex relational joins", done: false },
          { name: "Redis caching layer for high-throughput queries", done: false },
          { name: "Transaction safety & ACID properties in fintech flows", done: false }
        ]
      },
      {
        id: "fs-4",
        name: "Stage 4: Full Stack Production Systems & CI/CD",
        duration: "6 Weeks",
        difficulty: "Advanced",
        completed: false,
        description: "Next.js App Router, SSR, Docker containerization, WebSockets, and cloud deployment.",
        topics: [
          { name: "Next.js 14/15 App Router & Server Actions", done: false },
          { name: "Real-time communication with WebSockets / Socket.io", done: false },
          { name: "Containerizing frontend & backend with Docker Compose", done: false },
          { name: "Automated GitHub Actions workflow & cloud deployments", done: false }
        ]
      }
    ],
    projects: [
      { level: "Beginner", title: "Collaborative Kanban Task Board", tech: "React, Tailwind, LocalStorage / Drag & Drop", outcome: "Interactive task board with tags, filters, and state sync" },
      { level: "Intermediate", title: "Full-Stack E-Commerce Platform with Stripe Checkout", tech: "Next.js, Node.js, PostgreSQL, Stripe API", outcome: "Inventory management, webhook handling, and customer order tracking" },
      { level: "Capstone", title: "Real-Time Collaborative Code Editor with WebSockets", tech: "React, Monaco Editor, Socket.io, Redis, Docker", outcome: "Multi-user live editing with presence indicators and code execution sandbox" }
    ],
    interviewPrep: [
      "Explain the Virtual DOM and React reconciliation algorithm (Fiber).",
      "What is the difference between SQL and NoSQL databases? When should you prefer PostgreSQL over MongoDB?",
      "How do you prevent SQL Injection and Cross-Site Scripting (XSS)?",
      "Explain the Browser Event Loop: Call stack, Microtask queue, and Macrotask queue.",
      "How do optimistic UI updates work in modern frontend applications?"
    ]
  },
  {
    id: "datascientist",
    title: "Data Scientist",
    icon: "TrendingUp",
    tagline: "Uncover predictive insights, build statistical models, and transform enterprise raw data into strategic intelligence.",
    match: "85% Match",
    stats: {
      averageSalary: "₹12 - 28 LPA",
      timeToLearn: "7 - 10 Months",
      totalStages: 4,
      openOpportunities: "1,800+ Active Roles"
    },
    skills: ["Python", "R", "SQL", "Statistics", "A/B Testing", "Time Series Forecasting", "Pandas", "Tableau / PowerBI", "Scikit-Learn"],
    languages: ["Python", "SQL", "R"],
    tools: ["JupyterLab", "PowerBI", "Tableau", "Git", "BigQuery", "Snowflake", "Optuna"],
    stages: [
      {
        id: "ds-1",
        name: "Stage 1: Statistical Inference & Exploratory Analysis",
        duration: "6 Weeks",
        difficulty: "Foundational",
        completed: true,
        description: "Hypothesis testing, confidence intervals, p-values, and data munging.",
        topics: [
          { name: "Descriptive & Inferential Statistics", done: true },
          { name: "Hypothesis Testing (t-test, ANOVA, Chi-square)", done: true },
          { name: "Advanced SQL window functions, CTEs & data aggregations", done: true },
          { name: "Data wrangling with Pandas and NumPy", done: true }
        ]
      },
      {
        id: "ds-2",
        name: "Stage 2: Predictive Modeling & Experimentation",
        duration: "8 Weeks",
        difficulty: "Intermediate",
        completed: false,
        description: "Regression, classification, clustering, and designing statistically rigorous A/B tests.",
        topics: [
          { name: "Supervised Learning models & evaluation metrics", done: true },
          { name: "Designing & Analyzing A/B Tests (Sample size calculation, p-hacking avoidance)", done: false },
          { name: "Feature Selection & Dimensionality Reduction (PCA, t-SNE)", done: false },
          { name: "Imbalanced classification (SMOTE, Focal Loss)", done: false }
        ]
      },
      {
        id: "ds-3",
        name: "Stage 3: Time Series & Business Intelligence",
        duration: "6 Weeks",
        difficulty: "Advanced",
        completed: false,
        description: "ARIMA, Prophet, seasonal decomposition, and executive dashboard storytelling.",
        topics: [
          { name: "Time series decomposition, Stationarity & ARIMA/SARIMAX", done: false },
          { name: "Facebook Prophet & Deep learning for time-series (Temporal Fusion Transformers)", done: false },
          { name: "Interactive executive dashboards with Tableau / Streamlit", done: false },
          { name: "Data storytelling and translating metrics to business ROI", done: false }
        ]
      },
      {
        id: "ds-4",
        name: "Stage 4: Scalable Big Data & Cloud Analytics",
        duration: "6 Weeks",
        difficulty: "Industry Ready",
        completed: false,
        description: "Spark, distributed dataframes, and cloud data warehouses.",
        topics: [
          { name: "PySpark & Distributed dataframe computations", done: false },
          { name: "Cloud data warehouses (Google BigQuery / Snowflake)", done: false },
          { name: "Automated ETL pipelines with Apache Airflow", done: false }
        ]
      }
    ],
    projects: [
      { level: "Beginner", title: "E-Commerce Customer Lifetime Value & RFM Segmentation", tech: "Python, Pandas, K-Means, Seaborn", outcome: "Group customers into high-value cohorts with targeted marketing strategies" },
      { level: "Intermediate", title: "Retail Inventory Demand Forecasting Engine", tech: "Python, Prophet, XGBoost, Streamlit", outcome: "Predict product stock requirements with 88% MAPE improvement over baseline" },
      { level: "Capstone", title: "End-to-End A/B Testing Platform with Bayesian Inference", tech: "Python, SciPy, Dash, PostgreSQL", outcome: "Real-time statistical power calculator and conversion lift evaluator" }
    ],
    interviewPrep: [
      "What is the Central Limit Theorem and why is it fundamental to A/B testing?",
      "How do you determine the required sample size before launching an A/B test?",
      "What is Type I vs Type II error, and how do you trade off between them?",
      "Explain the difference between L1 (Lasso) and L2 (Ridge) regularization."
    ]
  },
  {
    id: "softwareeng",
    title: "Software Engineer",
    icon: "Code",
    tagline: "Engineer robust, scalable distributed architectures, algorithms, and core platform software.",
    match: "82% Match",
    stats: {
      averageSalary: "₹12 - 30 LPA",
      timeToLearn: "8 - 12 Months",
      totalStages: 4,
      openOpportunities: "4,000+ Active Roles"
    },
    skills: ["Data Structures & Algorithms", "Java / C++ / Go", "Object Oriented Design", "System Design", "Operating Systems", "Networking", "Database Internals", "Concurrency"],
    languages: ["C++", "Java", "Go", "Python", "SQL"],
    tools: ["Linux / Bash", "Git", "GDB", "Valgrind", "Docker", "Kubernetes", "Jira"],
    stages: [
      {
        id: "swe-1",
        name: "Stage 1: Core CS Foundations & Advanced DSA",
        duration: "8 Weeks",
        difficulty: "Foundational",
        completed: true,
        description: "Arrays, LinkedLists, Trees, Tries, Graphs, DP, and time/space complexity analysis.",
        topics: [
          { name: "Big-O Time & Space Complexity analysis", done: true },
          { name: "Advanced Graph algorithms (Dijkstra, Bellman-Ford, Tarjan's)", done: true },
          { name: "Dynamic Programming multi-dimensional memoization", done: false },
          { name: "Bit manipulation & custom allocator concepts", done: false }
        ]
      },
      {
        id: "swe-2",
        name: "Stage 2: Systems Programming, OS & Networking",
        duration: "6 Weeks",
        difficulty: "Intermediate",
        completed: false,
        description: "Processes, threads, locks, virtual memory, TCP/IP, and socket programming.",
        topics: [
          { name: "Process vs Thread, Deadlocks & Concurrency primitives (Mutex, Semaphores)", done: true },
          { name: "Virtual memory, Paging, TLB & Cache hierarchies (L1/L2/L3)", done: false },
          { name: "TCP vs UDP, Three-way handshake, TLS 1.3 handshake", done: false },
          { name: "Non-blocking I/O and epoll socket servers", done: false }
        ]
      },
      {
        id: "swe-3",
        name: "Stage 3: Object-Oriented Design & Clean Architecture",
        duration: "6 Weeks",
        difficulty: "Intermediate",
        completed: false,
        description: "Design Patterns (Factory, Singleton, Observer, Strategy) and SOLID principles.",
        topics: [
          { name: "SOLID principles applied in production codebases", done: false },
          { name: "Creational, Structural and Behavioral GoF patterns", done: false },
          { name: "Refactoring legacy code & Unit testing with Mocking frameworks", done: false }
        ]
      },
      {
        id: "swe-4",
        name: "Stage 4: High-Level System Design & Scalability",
        duration: "8 Weeks",
        difficulty: "Advanced",
        completed: false,
        description: "Load balancers, CDN, caching, horizontal partitioning, and microservices.",
        topics: [
          { name: "Consistent Hashing & Distributed caching strategies", done: false },
          { name: "Message brokers (Kafka, RabbitMQ) & Event-driven architecture", done: false },
          { name: "Database sharding, Read-replicas, CAP theorem & PACELC", done: false },
          { name: "Designing URL Shortener, Twitter Feed, Rate Limiter", done: false }
        ]
      }
    ],
    projects: [
      { level: "Beginner", title: "Custom In-Memory Key-Value Store with TTL", tech: "C++ / Go, Sockets, Mutexes", outcome: "Thread-safe LRU cache with sub-millisecond query latency" },
      { level: "Intermediate", title: "Distributed Task Queue Worker with Redis & RabbitMQ", tech: "Python / Go, Docker, Redis", outcome: "Handles 5,000 tasks/second with automatic retries and exponential backoff" },
      { level: "Capstone", title: "Distributed File Storage with Chunking & Deduplication", tech: "Go / C++, gRPC, Raft Consensus", outcome: "Fault-tolerant cluster tolerating single-node crashes without data loss" }
    ],
    interviewPrep: [
      "Explain the difference between a process and a thread. How does the OS handle context switching?",
      "Design a scalable distributed Rate Limiter (Token Bucket vs Leaky Bucket vs Sliding Window).",
      "What is the CAP Theorem? Can a system be both CA and CP during network partitions?",
      "How does B-Tree indexing in databases work, and why is it preferred over Hash indexing for range queries?"
    ]
  },
  {
    id: "dataanalyst",
    title: "Data Analyst",
    icon: "PieChart",
    tagline: "Turn complex raw datasets into actionable executive insights, dashboards, and growth levers.",
    match: "78% Match",
    stats: {
      averageSalary: "₹6 - 15 LPA",
      timeToLearn: "4 - 6 Months",
      totalStages: 3,
      openOpportunities: "2,200+ Active Roles"
    },
    skills: ["SQL", "Excel / Google Sheets", "PowerBI", "Tableau", "Python (Pandas)", "Data Cleaning", "Business Metrics", "Storytelling"],
    languages: ["SQL", "Python", "R"],
    tools: ["Excel", "PowerBI", "Tableau", "PostgreSQL", "Google Data Studio", "Notion"],
    stages: [
      {
        id: "da-1",
        name: "Stage 1: Advanced Excel & SQL Fluency",
        duration: "4 Weeks",
        difficulty: "Foundational",
        completed: true,
        description: "Pivot tables, VLOOKUP/XLOOKUP, subqueries, and window functions.",
        topics: [
          { name: "Complex SQL queries with multiple JOINs and GROUP BY", done: true },
          { name: "Window functions (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD)", done: true },
          { name: "Data cleaning and outlier detection in spreadsheets", done: true }
        ]
      },
      {
        id: "da-2",
        name: "Stage 2: BI Dashboards & Visual Storytelling",
        duration: "6 Weeks",
        difficulty: "Intermediate",
        completed: false,
        description: "Build interactive executive dashboards in PowerBI and Tableau.",
        topics: [
          { name: "PowerBI DAX measures and calculated columns", done: false },
          { name: "Tableau calculated fields and dual-axis visualization", done: false },
          { name: "UI/UX principles for corporate analytical dashboards", done: false }
        ]
      },
      {
        id: "da-3",
        name: "Stage 3: Business Analytics & Metric Formulation",
        duration: "4 Weeks",
        difficulty: "Advanced",
        completed: false,
        description: "SaaS metrics (CAC, LTV, Churn, ARR), conversion funnels, and executive reporting.",
        topics: [
          { name: "Cohort analysis & retention curve modeling", done: false },
          { name: "Marketing attribution & sales funnel analysis", done: false },
          { name: "Executive presentation and automated report generation", done: false }
        ]
      }
    ],
    projects: [
      { level: "Beginner", title: "Global Superstore Sales Analytics Dashboard", tech: "PowerBI, Excel, DAX", outcome: "Interactive dashboard uncovering regional profit bottlenecks" },
      { level: "Intermediate", title: "SaaS Product Engagement & Churn Retention Funnel", tech: "SQL, Tableau, PostgreSQL", outcome: "Identify user drop-off points in product onboarding flow" },
      { level: "Capstone", title: "Healthcare Patient Wait Times & Resource Allocation Model", tech: "Python, SQL, Streamlit", outcome: "Optimized nurse-to-patient ratio reducing hospital wait times by 22%" }
    ],
    interviewPrep: [
      "Write a SQL query to find the 2nd highest salary from an Employee table without using LIMIT.",
      "What is the difference between RANK() and DENSE_RANK() in SQL?",
      "How would you explain a 15% drop in weekly active users to non-technical stakeholders?",
      "Explain the difference between Primary Key, Foreign Key, and Unique Constraint."
    ]
  },
  {
    id: "cloudengineer",
    title: "Cloud Engineer",
    icon: "Cloud",
    tagline: "Architect and manage secure, auto-scaling cloud infrastructure and continuous deployment pipelines.",
    match: "75% Match",
    stats: {
      averageSalary: "₹10 - 24 LPA",
      timeToLearn: "6 - 9 Months",
      totalStages: 4,
      openOpportunities: "1,900+ Active Roles"
    },
    skills: ["AWS / Azure / GCP", "Linux", "Docker", "Kubernetes", "Terraform", "CI/CD", "Networking", "IAM Security", "Bash"],
    languages: ["Bash / Shell", "Python", "HCL (Terraform)", "YAML"],
    tools: ["AWS Console & CLI", "Terraform", "Docker", "Kubernetes (k8s)", "Helm", "Prometheus & Grafana", "GitHub Actions"],
    stages: [
      {
        id: "ce-1",
        name: "Stage 1: Linux Administration & Cloud Fundamentals",
        duration: "6 Weeks",
        difficulty: "Foundational",
        completed: true,
        description: "Bash scripting, user permissions, networking (VPC, CIDR, subnets), and core cloud concepts.",
        topics: [
          { name: "Linux command line mastery & shell automation scripting", done: true },
          { name: "VPC, Subnets, Route Tables, NAT Gateways & Security Groups", done: true },
          { name: "AWS EC2 instances, S3 storage classes & IAM policies", done: true }
        ]
      },
      {
        id: "ce-2",
        name: "Stage 2: Containers & Orchestration with Docker & Kubernetes",
        duration: "8 Weeks",
        difficulty: "Intermediate",
        completed: false,
        description: "Docker multi-stage builds, Kubernetes Pods, Deployments, Services, and Ingress controllers.",
        topics: [
          { name: "Docker image optimization and multi-stage builds", done: true },
          { name: "Kubernetes architecture (Control Plane, Worker Nodes, etcd)", done: false },
          { name: "Deploying Pods, ReplicaSets, Services and ConfigMaps", done: false },
          { name: "Helm chart packaging and configuration management", done: false }
        ]
      },
      {
        id: "ce-3",
        name: "Stage 3: Infrastructure as Code (IaC) with Terraform",
        duration: "6 Weeks",
        difficulty: "Advanced",
        completed: false,
        description: "Provision reproducible, immutable infrastructure across multiple regions.",
        topics: [
          { name: "Terraform state management, remote backends (S3/DynamoDB locks)", done: false },
          { name: "Modular Terraform codebase for Dev, Staging, and Production", done: false },
          { name: "Automated drift detection and policy-as-code", done: false }
        ]
      },
      {
        id: "ce-4",
        name: "Stage 4: Observability, Security & Site Reliability (SRE)",
        duration: "6 Weeks",
        difficulty: "Industry Ready",
        completed: false,
        description: "Prometheus, Grafana alerting, zero-trust security, and disaster recovery.",
        topics: [
          { name: "Metrics collection with Prometheus and Grafana alerting boards", done: false },
          { name: "Centralized logging with ELK Stack or CloudWatch", done: false },
          { name: "Disaster recovery, automated snapshots, and high-availability failovers", done: false }
        ]
      }
    ],
    projects: [
      { level: "Beginner", title: "Automated Static Web Hosting with S3, CloudFront & SSL", tech: "AWS S3, Route53, CloudFront, ACM", outcome: "Global low-latency static site delivery with automated cache invalidation" },
      { level: "Intermediate", title: "Multi-Tier Web App on AWS ECS with Auto-Scaling", tech: "AWS ECS, Fargate, ALB, RDS, Docker", outcome: "Zero-downtime rolling deployments handling simulated traffic spikes" },
      { level: "Capstone", title: "Multi-Region Kubernetes Cluster Provisioned via Terraform", tech: "Terraform, AWS EKS, Helm, Prometheus, ArgoCD", outcome: "Fully automated GitOps infrastructure with disaster failover across 2 AWS regions" }
    ],
    interviewPrep: [
      "What is the difference between a Security Group and a Network ACL in AWS VPC?",
      "How does Kubernetes handle self-healing when a container crashes?",
      "Explain Terraform state locks and why remote state storage is mandatory in team environments.",
      "What is the difference between horizontal pod autoscaling (HPA) and cluster autoscaling?"
    ]
  }
];

export const initialBadges = [
  {
    id: "badge-1",
    name: "First Step",
    category: "Onboarding",
    icon: "Compass",
    description: "Welcome to CampusPilot AI! Created your verified student profile and explored your academic dashboard.",
    unlocked: true,
    unlockedAt: "Nov 1, 2026",
    xp: 100
  },
  {
    id: "badge-2",
    name: "Coding Explorer",
    category: "Skills",
    icon: "Code2",
    description: "Added 5+ programming skills and verified your Python and C++ proficiency levels.",
    unlocked: true,
    unlockedAt: "Nov 5, 2026",
    xp: 250
  },
  {
    id: "badge-3",
    name: "Consistency Champion",
    category: "Streak",
    icon: "Flame",
    description: "Maintained a continuous 14-day study and task completion streak on CampusPilot.",
    unlocked: true,
    unlockedAt: "Nov 14, 2026",
    xp: 500
  },
  {
    id: "badge-4",
    name: "Skill Master",
    category: "Skills",
    icon: "Award",
    description: "Reached Advanced proficiency level in 3 or more technical subject domains.",
    unlocked: true,
    unlockedAt: "Nov 12, 2026",
    xp: 400
  },
  {
    id: "badge-5",
    name: "Career Ready",
    category: "Career",
    icon: "Target",
    description: "Completed 75% of your chosen career roadmap milestones and analyzed your resume.",
    unlocked: false,
    progress: 78,
    target: "Reach 100% Roadmap & 80+ Resume Score",
    xp: 1000
  },
  {
    id: "badge-6",
    name: "Hackathon Hustler",
    category: "Competitions",
    icon: "Trophy",
    description: "Bookmarked and planned submissions for 2+ upcoming collegiate hackathons.",
    unlocked: true,
    unlockedAt: "Nov 10, 2026",
    xp: 300
  },
  {
    id: "badge-7",
    name: "Resume Refiner",
    category: "Career",
    icon: "FileCheck",
    description: "Analyzed your resume with Pilot AI and resolved missing section suggestions.",
    unlocked: true,
    unlockedAt: "Nov 8, 2026",
    xp: 350
  },
  {
    id: "badge-8",
    name: "AI Pathfinder",
    category: "Learning",
    icon: "Sparkles",
    description: "Asked 10+ strategic career and technical questions to Pilot AI Assistant.",
    unlocked: true,
    unlockedAt: "Nov 13, 2026",
    xp: 450
  }
];

export const weeklyChallenges = [
  { id: "wc-1", title: "Complete 5 Study Tasks", progress: 4, target: 5, xp: 150, completed: false },
  { id: "wc-2", title: "Update 2 Skill Proficiencies", progress: 2, target: 2, xp: 100, completed: true },
  { id: "wc-3", title: "Analyze 1 Resume Draft", progress: 1, target: 1, xp: 120, completed: true },
  { id: "wc-4", title: "Practice 3 Placement Questions with Pilot AI", progress: 2, target: 3, xp: 150, completed: false }
];

export const pilotKnowledgeBase = {
  suggestedQuestions: [
    "Explain machine learning.",
    "Create my study timetable.",
    "How can I prepare for placements?",
    "Suggest AI/ML projects.",
    "Help me prepare for interviews.",
    "How can I improve my resume ATS score?",
    "What are the top skills for Full Stack in 2025?",
    "Give me a 30-day DSA study roadmap."
  ]
};
