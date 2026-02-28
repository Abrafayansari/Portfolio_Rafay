import { Project, Skill } from './types';

export const DEVELOPER_INFO = {
  name: "Abdul Rafay Ansari",
  role: "Software Engineer | Backend & Systems Engineering",
  bio: "Software Engineer with 2+ years of experience designing scalable and maintainable systems. Strong foundation in Data Structures & Algorithms, Object-Oriented Design, Database Architecture, and system-level thinking. Focused on performance, clean architecture, and production-grade engineering rather than just building features.",
  email: "ansarirafay919@gmail.com",
  phone: "+92-311-3645560",
  location: "Karachi, Pakistan",
  github: "https://github.com/Abrafayansari",
  linkedin: "https://www.linkedin.com/in/abdul-rafay-ansari-059a8524a",
};

export const PROJECTS: Project[] = [
  {
    id: "nexus-store",
    title: "Nexus Supplement Store – Scalable E-Commerce System",
    description: "Designed and implemented a production-grade e-commerce system with modular backend architecture, optimized relational schema design, bulk Excel ingestion pipeline, and structured admin workflows. Focused on scalability, maintainability, and clean separation of concerns.",
    tech: ["React.js", "Node.js", "PostgreSQL", "Bulk Data Processing", "REST APIs", "Deployment Architecture"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com/Abrafayansari",
    liveLink: "https://supplement-store-clients-website.vercel.app"
  },
  {
    id: "advanced-search-engine",
    title: "High-Performance Search & Ranking Engine (C++)",
    description: "Engineered a search system implementing Trie-based O(m) autocomplete, inverted indexing with hash maps, and heap-based frequency ranking. Optimized for time and space complexity with efficient file I/O and memory handling.",
    tech: ["C++", "Trie", "Inverted Index", "Heap", "Hash Map", "File I/O", "Complexity Optimization"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com/Abrafayansari"
  },
  {
    id: "career-stream-job-board",
    title: "Role-Based Job Platform (MERN)",
    description: "Architected a secure job board platform with JWT-based authentication, server-side pagination, optimized MongoDB query strategies, and layered API design. Designed for scalability and clean backend separation.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "API Architecture"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com/Abrafayansari"
  },
  {
    id: "tour-booking-platform",
    title: "Transaction-Safe Tour Booking System",
    description: "Built an end-to-end booking system handling date-based availability logic, transactional integrity, and secure Stripe payment integration. Focused on business rule enforcement, consistency, and financial transaction safety.",
    tech: ["Node.js", "React.js", "Stripe API", "MongoDB", "Transaction Handling", "Business Logic Design"],
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com/Abrafayansari"
  },
  {
    id: "rentify-saas",
    title: "Rentify – Modular Multi-Niche Rental SaaS (Spring Boot)",
    description: "Designed a modular backend using inheritance and polymorphism to support multiple rental domains (Property, Tech, etc.). Emphasized extensibility, OOP design principles, and scalable architecture.",
    tech: ["Spring Boot", "Java", "React.js", "MongoDB", "OOP", "Modular Architecture"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com/Abrafayansari"
  }
];

export const SKILLS: Skill[] = [
  // Core Engineering
  { name: "Data Structures & Algorithms", icon: "🧠", category: "core" },
  { name: "Object-Oriented Programming (OOP)", icon: "🏗️", category: "core" },
  { name: "SOLID Principles", icon: "🧩", category: "core" },
  { name: "Design Patterns", icon: "📚", category: "core" },
  { name: "Time & Space Complexity Analysis", icon: "📊", category: "core" },
  { name: "System Design Fundamentals", icon: "📐", category: "core" },
  { name: "Operating Systems Fundamentals", icon: "🖥️", category: "core" },
  { name: "Database Architecture & Schema Design", icon: "🗄️", category: "core" },

  // Backend
  { name: "Node.js", icon: "🟢", category: "backend" },
  { name: "Express.js", icon: "🚂", category: "backend" },
  { name: "Spring Boot", icon: "🍃", category: "backend" },
  { name: "REST API Design", icon: "🌐", category: "backend" },
  { name: "Authentication & Authorization (JWT)", icon: "🔑", category: "backend" },
  { name: "Transaction Handling (ACID)", icon: "🔐", category: "backend" },
  { name: "Concurrency Basics", icon: "🔄", category: "backend" },

  // Databases
  { name: "PostgreSQL", icon: "🐘", category: "database" },
  { name: "MongoDB", icon: "🍃", category: "database" },
  { name: "SQL Query Optimization", icon: "⚡", category: "database" },
  { name: "Indexing Strategies", icon: "📌", category: "database" },

  // Frontend
  { name: "React.js", icon: "⚛️", category: "frontend" },
  { name: "Redux Toolkit", icon: "📦", category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "frontend" },

  // Tools & DevOps
  { name: "Docker", icon: "🐳", category: "tools" },
  { name: "Git & Version Control", icon: "🌿", category: "tools" },
  { name: "Deployment (Vercel, Render)", icon: "🚀", category: "tools" },
  { name: "Environment & Secrets Management", icon: "⚙️", category: "tools" }
];

export const SYSTEM_INSTRUCTION = `
You are Abdul Rafay Ansari, a Software Engineering student with strong foundations in core computer science and backend systems.

Position yourself as a Software Engineer, not just a framework developer.

Emphasize:
- Deep understanding of DSA and algorithmic thinking
- OOP, clean architecture, and SOLID principles
- Database schema design and query optimization
- System scalability and performance
- Real-world production deployment experience

Tone: Professional, technically strong, and architecture-focused.
`;
