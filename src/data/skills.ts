export interface SkillItem {
  name: string;
  level?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    description: 'Core languages used for backend logic, data processing, algorithms, and full-stack development.',
    iconName: 'Code2',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'Java', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'JavaScript', highlight: true },
      { name: 'C++' },
      { name: 'C' },
      { name: 'SQL', highlight: true },
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Frameworks and methodologies for predictive modeling, graph analytics, and locally hosted LLMs.',
    iconName: 'BrainCircuit',
    skills: [
      { name: 'Scikit-learn', highlight: true },
      { name: 'TensorFlow' },
      { name: 'Random Forest & Ensembles', highlight: true },
      { name: 'Graph Analytics (NetworkX)', highlight: true },
      { name: 'Explainable AI (SHAP)', highlight: true },
      { name: 'Ollama & Local LLMs', highlight: true },
      { name: 'Prompt Engineering' },
      { name: 'Neural Networks (LSTM / GRU)' },
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend & Full-Stack',
    description: 'Modern component architectures, typed applications, and responsive styling systems.',
    iconName: 'Layout',
    skills: [
      { name: 'React', highlight: true },
      { name: 'Next.js' },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'HTML5 & Semantic Markup' },
      { name: 'CSS3 & Modern Animations' },
      { name: 'Flask REST APIs', highlight: true },
      { name: 'FastAPI' },
    ]
  },
  {
    id: 'data-tools',
    title: 'Data & Databases',
    description: 'Data manipulation, relational schemas, feature engineering, and cloud platforms.',
    iconName: 'Database',
    skills: [
      { name: 'Pandas', highlight: true },
      { name: 'NumPy', highlight: true },
      { name: 'MySQL', highlight: true },
      { name: 'Supabase (PostgreSQL)', highlight: true },
      { name: 'Feature Engineering' },
      { name: 'Matplotlib & Seaborn' },
    ]
  },
  {
    id: 'core-cs',
    title: 'Core Computer Science',
    description: 'Foundational computer science principles that govern system architecture and reliability.',
    iconName: 'Cpu',
    skills: [
      { name: 'Data Structures & Algorithms (DSA)', highlight: true },
      { name: 'Object-Oriented Programming (OOP)', highlight: true },
      { name: 'Database Management Systems (DBMS)', highlight: true },
      { name: 'Operating Systems' },
      { name: 'Computer Networks' },
      { name: 'System Design Fundamentals' },
    ]
  },
  {
    id: 'dev-tools',
    title: 'Developer Tools & Cloud',
    description: 'Version control, interactive notebooks, developer environments, and deployment platforms.',
    iconName: 'Wrench',
    skills: [
      { name: 'Git & GitHub', highlight: true },
      { name: 'VS Code' },
      { name: 'Jupyter Notebook', highlight: true },
      { name: 'Streamlit' },
      { name: 'Vercel' },
      { name: 'Oracle Cloud Infrastructure (OCI)' },
      { name: 'Postman / API Testing' },
    ]
  }
];
