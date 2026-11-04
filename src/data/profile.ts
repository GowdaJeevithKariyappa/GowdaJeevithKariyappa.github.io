export interface ProfileData {
  fullName: string;
  headline: string;
  shortBio: string;
  location: string;
  university: string;
  degree: string;
  branch: string;
  academicPeriod: string;
  graduationYear: string;
  cgpa: string;
  cgpaMax: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string | null;
  email: string | null;
  phoneNumber: string | null;
  languages: string[];
  certification: {
    title: string;
    issuer: string;
    year: string;
    validity: string;
  };
  roles: string[];
  summaryParagraphs: string[];
  interests: string[];
}

export const profile: ProfileData = {
  fullName: "Gowda Jeevith Kariyappa",
  headline: "Building intelligent systems. Turning ideas into reality.",
  shortBio: "I'm a Computer Science and Data Science undergraduate interested in software engineering, artificial intelligence, and building practical technology products. I enjoy exploring complex ideas, understanding systems deeply, and turning what I learn into working applications.",
  location: "Bengaluru, Karnataka, India",
  university: "Presidency University, Bengaluru",
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Computer Science and Engineering (Data Science)",
  academicPeriod: "2023–2027",
  graduationYear: "2027",
  cgpa: "8.62",
  cgpaMax: "10.0",
  githubUrl: "https://github.com/GowdaJeevithKariyappa",
  linkedinUrl: "https://www.linkedin.com/in/gowda-jeevith-kariyappa-b1a43426a/",
  
  // Configurable resume path:
  // When set to a valid path, the "Download Resume" button will be active.
  // Set to null or "" to hide the download button.
  resumeUrl: "/resume/Gowda_Jeevith_Kariyappa_Resume.pdf",

  // Configurable contact fields:
  // Update these with your preferred public email and phone number.
  // When null or empty, contact options adapt gracefully without broken links.
  email: null, // e.g. "gowdajeevith72@gmail.com"
  phoneNumber: null, // e.g. "+91 80507 87037"

  languages: ["English", "Hindi", "Kannada", "Marathi", "Tulu"],

  certification: {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    validity: "Valid through Nov 2027",
  },

  roles: [
    "Software Engineer",
    "AI/ML Engineer",
    "Data Science Enthusiast"
  ],

  summaryParagraphs: [
    "I'm currently pursuing Computer Science and Engineering with a specialization in Data Science at Presidency University, Bengaluru. My interests sit at the intersection of software engineering, artificial intelligence, and data science.",
    "I enjoy understanding how systems work, experimenting with new technologies, and turning technical ideas into useful applications. Rather than staying confined to theory, I focus on building practical tools that solve real problems.",
    "Through projects involving graph analytics for financial crime detection, locally hosted conversational AI, and productivity architectures, I have explored different aspects of building software end-to-end—from data ingestion and algorithms to API design and user interfaces.",
    "I believe good engineering comes from curiosity, disciplined experimentation, understanding fundamental principles, and continuous improvement."
  ],

  interests: [
    "Machine Learning & Deep Learning",
    "Graph Analytics & Network Science",
    "Local AI & Offline LLMs",
    "Full-Stack Web Development",
    "Systems Architecture & Distributed Systems",
    "Algorithmic Problem Solving"
  ]
};
