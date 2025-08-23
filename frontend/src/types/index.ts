// Re-export types from dashboard constants
export type { ResumeSection } from "../app/dashboard/constants";

// Additional resume-related types
export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  city?: string;
  state?: string;
  country?: string;
  socials?: { platform: string; url: string }[];
  title: string;
  summary: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  graduationYear: number;
  gpa?: number;
}

export interface Skill {
  id: string;
  name: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies?: string[];
  link?: string;
}

export interface RandomTitle {
  subtitleLeft?: string;
  subtitleRight?: string;
  description?: string[];
}

export interface ResumeSectionData {
  id: string;
  data:
    | PersonalInfo
    | Experience[]
    | Education[]
    | Skill[]
    | Project[]
    | RandomTitle[];
  order: number;
}

export interface Resume {
  id: string;
  title: string;
  userId: string;
  sections: ResumeSectionData[];
  createdAt: string;
  updatedAt: string;
  isPublic: boolean;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "date" | "checkbox";
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    min?: number;
    max?: number;
  };
}

export interface FormSection {
  title: string;
  fields: FormField[];
}

// User and Auth types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}

export interface Session {
  user: User;
  token: string;
  expiresAt: string;
}
