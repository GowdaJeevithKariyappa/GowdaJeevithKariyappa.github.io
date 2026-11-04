export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  cgpaOrGrade: string;
  highlights: string[];
  coursework?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  validity: string;
  credentialBadge?: string;
  description: string;
  skillsVerified: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export const educationHistory: EducationItem[] = [
  {
    id: 'presidency-btech',
    degree: 'Bachelor of Technology (B.Tech)',
    institution: 'Presidency University',
    location: 'Bengaluru, Karnataka, India',
    period: '2023 – 2027',
    status: 'Currently Pursuing (Expected Graduation: 2027)',
    cgpaOrGrade: 'CGPA: 8.62 / 10.0',
    highlights: [
      'Specialization in Computer Science and Engineering (Data Science).',
      'Developed research and applied systems in financial crime graph analytics and local LLM architectures.',
      'Active focus on algorithmic problem solving, machine learning pipelines, and full-stack engineering.'
    ],
    coursework: [
      'Machine Learning',
      'Deep Learning',
      'Generative AI',
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Data Mining'
    ]
  },
  {
    id: 'indraprastha-pu',
    degree: 'Pre-University Education (Class XII - PCMC)',
    institution: 'Indraprastha Pre-University College',
    location: 'Uppinangady, Karnataka, India',
    period: '2021 – 2023',
    status: 'Completed',
    cgpaOrGrade: 'Score: 90.16%',
    highlights: [
      'Physics, Chemistry, Mathematics, and Computer Science (PCMC).',
      'Built early programming foundations in C++ and computational logic.'
    ]
  },
  {
    id: 'navodaya-high-school',
    degree: 'Secondary School Education (Class X)',
    institution: 'Navodaya English High School & Junior College',
    location: 'Thane, Maharashtra, India',
    period: 'Graduated 2021',
    status: 'Completed',
    cgpaOrGrade: 'Score: 85.80%',
    highlights: [
      'Comprehensive academic foundation in mathematics, science, and languages.'
    ]
  }
];

export const certifications: CertificationItem[] = [
  {
    id: 'oci-ai-2025',
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle Corporation',
    issueDate: 'November 2025',
    validity: 'Valid through November 2027',
    description: 'Validates foundational knowledge of artificial intelligence, machine learning concepts, and practical AI workloads utilizing Oracle Cloud Infrastructure services.',
    skillsVerified: [
      'Machine Learning Concepts',
      'Deep Learning & Neural Networks',
      'Generative AI & LLM Architectures',
      'OCI Generative AI Services',
      'Responsible AI & Security'
    ]
  },
  {
    id: 'ml-python-yhills',
    title: 'Machine Learning with Python',
    issuer: 'YHills',
    issueDate: '2023 – 2024',
    validity: 'Lifetime',
    description: 'Comprehensive practical training covering supervised learning, unsupervised learning, data preprocessing, model evaluation, and deployment.',
    skillsVerified: [
      'Python Data Science Stack',
      'Scikit-learn Modeling',
      'Feature Engineering',
      'Regression & Classification'
    ]
  }
];

export const experience: ExperienceItem[] = [
  {
    id: 'vaultofcodes-intern',
    role: 'AI & Prompt Engineering Intern',
    company: 'VaultofCodes',
    location: 'Remote',
    period: 'Aug 2025 – Nov 2025',
    description: [
      'Authored, tested, and iterated LLM prompts across task-specific use cases, systematically evaluating outputs to improve response relevance, consistency, and alignment.',
      'Applied structured few-shot and chain-of-thought prompting methodologies to enhance the operational reliability of AI-assisted engineering workflows.'
    ]
  }
];
