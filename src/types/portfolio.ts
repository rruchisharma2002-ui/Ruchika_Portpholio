export interface ProfileInfo {
  name: string;
  titles: string[];
  location: string;
  experienceYears: string;
  email: string;
  phone?: string;
  github: string;
  bio: string;
  status: string;
  availability: string;
  resumeUrl: string;
  capabilities: string[];
}

export interface CareerTimelineStage {
  period: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  type: 'training' | 'developer' | 'fullstack';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  summary?: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectPlatform {
  label: string;
  url?: string;
  verified: boolean;
  type: 'google-play' | 'app-store' | 'web' | 'code';
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  contributions: string[];
  technicalHighlights: string[];
  technologies: string[];
  platforms: ProjectPlatform[];
  isFeatured: boolean;
  filterTag: 'mobile' | 'backend' | 'enterprise';
}

export interface SkillItem {
  name: string;
  isCore: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  boardOrUniversity: string;
  period: string;
  score: string;
  scoreType: string;
}

export interface AchievementItem {
  title: string;
  category: string;
  description: string;
}
