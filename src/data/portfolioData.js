export const profile = {
  name: 'Shrishti Banshiar',
  headline: 'AI Engineer · Applied ML · NLP & Agentic AI',
  email: 'shrishtibanshiar105@gmail.com',
  phone: '+91 9301881262',
  location: 'Jaipur, India',
  linkedin: 'https://www.linkedin.com/in/shrishti-b-5756922b9/',
  github: 'https://github.com/Shrishti1701',
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

export const projects = [
  {
    name: 'AnalystGPT', status: 'Featured project', number: '01', featured: true,
    description: 'Upload CSV data and ask questions in natural language or by voice. Explore the results with charts, baseline machine-learning insights, and downloadable PDF reports.',
    details: ['Profile, clean, and compare datasets', 'Generate baseline machine-learning predictions', 'Explore interactive charts and saved dashboards', 'Export analysis reports as PDF'],
    technologies: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'Python', 'scikit-learn', 'Streamlit'],
    capabilities: ['CSV analysis', 'Natural-language queries', 'Interactive charts', 'ML predictions', 'PDF reports'],
    githubUrl: 'https://github.com/Shrishti1701/AnalystGPT', liveDemoUrl: null,
  },
  {
    name: 'Fake News Detector', status: 'Developed', number: '02',
    description: 'Classifies news text with an NLP and TF-IDF pipeline, then surfaces related coverage through an API lookup.',
    details: ['Predictions are screening signals, not definitive fact checks.'],
    technologies: ['Python', 'NLTK', 'TF-IDF', 'Logistic Regression', 'Streamlit'],
    capabilities: ['NLP text classification', 'Related-news API lookup'],
    githubUrl: null, liveDemoUrl: null,
  },
  {
    name: 'Judgment Bias Detector', status: 'Educational app', number: '03',
    description: 'An educational NLP app for exploring language patterns in sample court judgments and visualizing model outputs.',
    details: ['Built for exploration and learning; it does not provide legal conclusions.'],
    technologies: ['Python', 'NLTK', 'scikit-learn', 'Streamlit'],
    githubUrl: null, liveDemoUrl: null,
  },
  {
    name: 'Workforce Analytics Predictive Model', status: 'Exploration', number: '04',
    description: 'Applies predictive machine learning to workforce data to explore patterns that can inform planning.',
    details: ['Designed with validation, privacy, fairness, and human review in mind.'],
    technologies: ['Python', 'HR Analytics', 'Machine Learning'],
    githubUrl: null, liveDemoUrl: null,
  },
  {
    name: 'Netflix EDA Dashboard', status: 'Built', number: '05',
    description: 'An interactive Streamlit dashboard for exploring the Netflix catalog and content trends.',
    details: [], technologies: ['Python', 'Streamlit', 'Data Visualization'], githubUrl: null, liveDemoUrl: null,
  },
  {
    name: 'Court Data Fetcher & Mini Dashboard', status: 'Built', number: '06',
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
