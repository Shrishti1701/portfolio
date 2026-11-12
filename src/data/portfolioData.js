export const profile = {
  name: 'Shrishti Banshiar',
  headline: 'AI Engineer | Machine Learning | Applied NLP | RAG',
  email: 'shrishtibanshiar105@gmail.com',
  phone: '+91 9301881262',
  location: 'Jaipur, India',
  linkedin: 'https://www.linkedin.com/in/shrishti-b-5756922b9/',
  github: 'https://github.com/shrishtibanshiar',
  resumeUrl: '/Shrishti_Banshiar_Resume.pdf',
  resumePath: '/Shrishti_Banshiar_Resume.pdf',
};

export const skillGroups = [
  { title: 'Programming Languages', icon: 'code', skills: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'Java'] },
  { title: 'AI, Machine Learning & NLP', icon: 'model', skills: ['scikit-learn', 'Pandas', 'NumPy', 'Natural Language Processing (NLP)', 'TF-IDF', 'Logistic Regression', 'Text Classification', { name: 'Model Evaluation', status: 'learning' }] },
  {
    title: 'Agentic AI & LLM Engineering', icon: 'agent', featured: true,
    skills: [
      { name: 'Large Language Models (LLMs)', status: 'learning' },
      'AI Agents and Agentic Workflows',
      { name: 'Tool Calling / Function Calling', status: 'learning' },
      { name: 'Model Context Protocol (MCP)', status: 'learning' },
      { name: 'MCP Servers and Clients', status: 'learning' },
      'Agent Tool Integration',
      { name: 'Prompt Engineering', status: 'learning' },
      { name: 'RAG (Retrieval-Augmented Generation)', status: 'learning' },
      'LLM API Integration',
      { name: 'Multi-step AI Workflows', status: 'learning' },
      { name: 'Structured Outputs', status: 'learning' },
    ],
  },
  { title: 'Data Analytics & Visualization', icon: 'chart', skills: ['Data Cleaning', 'Exploratory Data Analysis (EDA)', 'Matplotlib', 'Power BI', 'Dashboard Development', { name: 'Statistical Analysis', status: 'learning' }] },
  { title: 'Backend & Full-Stack Development', icon: 'layers', skills: ['FastAPI', 'Flask', 'React', 'Next.js', 'REST APIs', 'OAuth / JWT', 'SQLite'] },
  { title: 'Developer Tools & Deployment', icon: 'tools', skills: ['Git', 'GitHub', 'Docker', { name: 'Selenium', status: 'learning' }, 'Web Scraping', 'API Integration'] },
];

export const featuredProjects = [
  {
    name: 'IncidentRAG', title: 'IncidentRAG — AI Incident Investigation System', status: 'Featured project', number: '01', featured: true,
    description: 'Investigate technical incidents with indexed evidence using document ingestion, semantic embeddings, BM25, and hybrid retrieval.',
    technologies: ['Python', 'FastAPI', 'RAG', 'Sentence Transformers', 'BM25', 'SQLite', 'Next.js', 'React'],
    metrics: [
      { value: '100%', label: 'Recall@3 · 30 questions' },
      { value: '100%', label: 'Hit Rate@3 · 30 questions' },
      { value: '0.883', label: 'MRR' },
      { value: '12.8 ms', label: 'Median retrieval latency' },
    ],
    metricNote: 'Local benchmark results; retrieval evaluation only, not answer-generation accuracy or production-scale performance.',
    allMetrics: ['30 labeled evaluation questions', 'Recall@3: 100%', 'Hit Rate@3: 100%', 'MRR: 0.883', 'Median retrieval latency: 12.8 ms', 'One source document processed into 18 searchable chunks', 'Chunking-to-indexing time: 3.40 seconds', 'Backend tests: 165/165 passed', 'Frontend security tests: 5/5 passed'],
    githubUrl: null, liveDemoUrl: null,
  },
  {
    name: 'SentimentIQ', title: 'SentimentIQ — Financial Sentiment Analysis Platform', status: 'Featured project', number: '02', featured: true,
    description: 'A financial news analysis platform with article extraction, a sentiment-analysis workflow, and a React dashboard for NLP research and analysis.',
    technologies: ['Python', 'FastAPI', 'React', 'FinBERT', 'Transformers', 'VADER'],
    metrics: [
      { value: '10/10', label: 'Benchmark articles extracted' },
      { value: '1.58 s', label: 'Average extraction time / article' },
      { value: '340', label: 'Passing backend + frontend tests' },
    ],
    metricNote: 'Article extraction and platform workflow are implemented. Sentiment inference is not yet implemented.',
    allMetrics: ['Article extraction: 10/10 benchmark articles successful', 'Average article extraction time: 1.58 seconds per article', '340 passing tests across backend and frontend suites'],
    githubUrl: null, liveDemoUrl: null,
  },
  {
    name: 'AnalystGPT', title: 'AnalystGPT — AI-Powered Data Analytics Platform', status: 'Featured project', number: '03', featured: true,
    description: 'Analyze structured data with automated profiling, deterministic natural-language Q&A, visualizations, and regression analysis.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'FastAPI', 'React'],
    metrics: [
      { value: '6', label: 'Supported file formats' },
      { value: '20/20', label: 'Deterministic local Q&A' },
      { value: '36.95 ms', label: 'Average Q&A latency' },
      { value: '0.9875', label: 'R² · synthetic data' },
    ],
    metricNote: 'Q&A is a deterministic local evaluation; regression uses synthetic data. No external LLM accuracy is implied.',
    allMetrics: ['Supported formats: CSV, TSV, XLSX, JSON, JSONL, Parquet (6 total)', 'Parsing benchmark: 18/18 scenarios successful', 'Dataset sizes tested up to 10,000 rows', 'Natural-language Q&A: 20/20 correct answers in deterministic local evaluation', 'Q&A average response latency: 36.95 ms', 'Regression benchmark: 10,000 synthetic records', 'R²: 0.9875', 'MAE: 0.4010', 'RMSE: 0.5048'],
    githubUrl: 'https://github.com/Shrishti1701/AnalystGPT', liveDemoUrl: null,
  },
];

export const projects = [
  {
    name: 'Fake News Detector', status: 'Developed', number: '01',
    description: 'Classifies news text with an NLP and TF-IDF pipeline, then surfaces related coverage through an API lookup.',
    details: ['Predictions are screening signals, not definitive fact checks.'],
    technologies: ['Python', 'NLTK', 'TF-IDF', 'Logistic Regression', 'Streamlit'],
    capabilities: ['NLP text classification', 'Related-news API lookup'],
    githubUrl: 'https://github.com/Shrishti1701/fake-news-detector', liveDemoUrl: null,
  },
  {
    name: 'Judgment Bias Detector', status: 'Educational app', number: '02',
    description: 'An educational NLP app for exploring language patterns in sample court judgments and visualizing model outputs.',
    details: ['Built for exploration and learning; it does not provide legal conclusions.'],
    technologies: ['Python', 'NLTK', 'scikit-learn', 'Streamlit'],
    githubUrl: 'https://github.com/Shrishti1701/judgment-bias-detector', liveDemoUrl: null,
  },
  {
    name: 'Workforce Analytics Predictive Model', status: 'Exploration', number: '03',
    description: 'Applies predictive machine learning to workforce data to explore patterns that can inform planning.',
    details: ['Designed with validation, privacy, fairness, and human review in mind.'],
    technologies: ['Python', 'HR Analytics', 'Machine Learning'],
    githubUrl: null, liveDemoUrl: null,
  },
  {
    name: 'Netflix EDA Dashboard', status: 'Built', number: '04',
    description: 'An interactive Streamlit dashboard for exploring the Netflix catalog and content trends.',
    details: [], technologies: ['Python', 'Streamlit', 'Data Visualization'], githubUrl: 'https://github.com/Shrishti1701/netflix-data-analysis', liveDemoUrl: null,
  },
  {
    name: 'Court Data Fetcher & Mini Dashboard', status: 'Built', number: '05',
    description: 'Fetches court-related data and presents it in a compact web dashboard built with Flask and SQLite.',
    details: [], technologies: ['Flask', 'SQLite', 'APIs'], githubUrl: null, liveDemoUrl: null,
  },
];

export const experience = [
  {
    eyebrow: 'AI ENGINEERING', role: 'AI Engineer Intern',
    organization: 'Onion Information Security Solutions Pvt. Ltd.', location: 'Mumbai, India', dates: '1 Apr – 30 Sep 2026',
    details: ['Contributed to agentic AI tooling and machine-learning work with the engineering team.', 'Supported solution design, testing, technical documentation, and delivery.'],
  },
  {
    eyebrow: 'OPEN SOURCE', role: 'Open-Source Contributor',
    organization: 'Google Summer of Code 2025', location: '', dates: '2025',
    details: ['Contributed to open-source AI and data tooling, including data-pipeline components and integrations.'],
  },
  {
    eyebrow: 'CONTRACT · REMOTE', role: 'AI / Data Science Collaborator',
    organization: 'Contract project', location: '', dates: '2024',
    details: ['Built ML-powered data tools and automated pipelines with third-party APIs; delivered interactive dashboards and model insights.'],
  },
];
