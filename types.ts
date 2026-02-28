
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
