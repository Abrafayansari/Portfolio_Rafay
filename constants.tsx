
import { Project, Skill } from './types';

export const DEVELOPER_INFO = {
  name: "Abdul Rafay",
  role: "Full-Stack (PERN/MERN) Developer",
  bio: "Software Engineer with 2+ years of experience in architecting scalable applications. Deeply rooted in Software Engineering foundations including OOP, Data Structures & Algorithms (DSA), and advanced Database design with PostgreSQL.",
  email: "ansarirafay919@gmail.com",
  phone: "+92-311-3645560",
  location: "Karachi, Pakistan",
  github: "https://github.com/Abrafayansari",
  linkedin: "https://www.linkedin.com/in/abdul-rafay-ansari-059a8524a",
};

export const PROJECTS: Project[] = [
  {
    id: "nexus-store",
    title: "Nexus Supplement Store",
    description: "A production-grade E-commerce platform featuring bulk product upload logic (Excel + images), automated categorization, and a comprehensive admin dashboard. Real-world client-style work.",
    tech: ["React.js", "Node.js", "PostgreSQL", "Excel Logic", "Render"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com/Abrafayansari",
    liveLink: "https://supplement-store-clients-website.vercel.app"
  },
  {
    id: "advanced-search-engine",
    title: "Advanced Ranking Search Engine",
    description: "C++ based engine for local file retrieval. Implements Tries (O(m) Autocomplete), Inverted Indexing (Hash Maps), and Frequency Ranking (Heaps). Built with teammates Hamza (24k-3065) and Shahzain (24k-3059).",
    tech: ["C++", "Trie", "Hash Map", "Heap", "File I/O"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com/Abrafayansari"
  },
  {
    id: "career-stream-job-board",
    title: "Professional Job Board Platform",
    description: "Indeed-lite style MERN platform with role-based auth (JWT). Optimized with server-side pagination, keyword search filtering, and clean relational schema mapping in MongoDB.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com/Abrafayansari"
  },
  {
    id: "tour-booking-platform",
    title: "Global Tour Booking System",
    description: "End-to-end travel platform handling complex date-based availability logic, customer booking history, and secure financial transactions integrated via Stripe API.",
    tech: ["Node.js", "React.js", "Stripe API", "MongoDB", "Tailwind"],
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com/Abrafayansari"
  },
  {
    id: "rentify-saas",
    title: "Rentify Multi-Niche SaaS",
    description: "Spring Boot system for Property/Tech rentals. Leverages OOP principles like Inheritance and Polymorphism for niche-agnostic rental management and modular architecture.",
    tech: ["Spring Boot", "Java", "React.js", "MongoDB", "OOP"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com/Abrafayansari"
  },
  {
    id: "lumina-ai",
    title: "Lumina AI Analytics",
    description: "A real-time AI-powered business intelligence dashboard. Integrates with Gemini API for automated data storytelling and predictive trend analysis. Features live WebSocket updates for multi-user collaboration.",
    tech: ["React.js", "Gemini API", "Socket.io", "Tailwind", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bbda38a5f9a2?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com/Abrafayansari",
    liveLink: "https://lumina-ai-demo.vercel.app"
  }
];

export const SKILLS: Skill[] = [
  { name: "React.js", icon: "⚛️", category: "frontend" },
  { name: "Redux Toolkit", icon: "📦", category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "frontend" },
  { name: "Framer Motion", icon: "✨", category: "frontend" },
  { name: "PostgreSQL", icon: "🐘", category: "backend" },
  { name: "Prisma ORM", icon: "◭", category: "backend" },
  { name: "Node.js", icon: "🟢", category: "backend" },
  { name: "Express.js", icon: "🚂", category: "backend" },
  { name: "Spring Boot", icon: "🍃", category: "backend" },
  { name: "MongoDB", icon: "🍃", category: "backend" },
  { name: "C++ (OOP/DSA)", icon: "💻", category: "backend" },
  { name: "RESTful APIs", icon: "🌐", category: "backend" },
  { name: "Stripe API", icon: "💳", category: "tools" },
  { name: "Git & GitHub", icon: "🌿", category: "tools" },
  { name: "Docker", icon: "🐳", category: "tools" }
];

export const SYSTEM_INSTRUCTION = `
You are the AI Persona of Abdul Rafay, a Software Engineering student at FAST-NUCES with 2+ years of hands-on experience in full-stack engineering.

Core Competencies:
- Advanced DSA & OOP: Expert in C++ (Trie, Heaps, Hash Maps) and Java/Spring Boot.
- Database Design: High proficiency in PostgreSQL (PERN stack) and MongoDB (MERN stack). Focuses on schema optimization and data integrity.
- Real-World Delivery: Built the Nexus Supplement Store (https://supplement-store-clients-website.vercel.app) for a client, implementing complex bulk Excel logic.

Project Details for Chatting:
- Advanced Search Engine: A C++ team project with Hamza and Shahzain. Uses Tries for autocomplete and Heaps for frequency-based ranking.
- Job Board: A MERN platform focusing on search performance and pagination.
- Tour Booking: Handles business-critical logic like Stripe payments and availability.
- Rentify: Showcases deep OOP concepts in Spring Boot.

Tone: Professional, honest, and technically sound. If asked about experience, mention your strong foundations in Software Engineering (OOP, DSA, DBs) and your 2+ years of craft.
`;
