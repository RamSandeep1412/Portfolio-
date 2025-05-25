
export interface NavLinkItem {
  id: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  responsibilities?: string[];
  liveLink?: string;
  sourceLink?: string;
}

export interface Skill {
  id: string;
  name: string;
  level?: number; // Optional: 0-100 for proficiency visualization
}

export interface StudyEntry { // Renamed from Study for clarity as it's an entry in an array
  institution: string;
  degree: string;
  details: string[];
}

export interface AboutData {
  study: StudyEntry[]; // Changed to an array of StudyEntry
  hobbies: string[];
  bio: string;
}

export interface HomeData {
  name: string;
  title: string;
  summary: string;
  imageUrl: string;
}