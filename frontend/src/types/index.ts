// Re-export types from dashboard constants
export type { ResumeSection } from "../app/dashboard/constants";

// Additional resume-related types
export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  linkedIn?: string;
  website?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description?: string;
  achievements?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  graduationYear: number;
  gpa?: number;
  honors?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: "technical" | "soft" | "language";
  proficiency?: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies?: string[];
  url?: string;
  githubUrl?: string;
  startDate?: string;
  endDate?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  dateObtained: string;
  expirationDate?: string;
  credentialId?: string;
  url?: string;
}

export interface Language {
  id: string;
  name: string;
  proficiency: "basic" | "conversational" | "fluent" | "native";
}

export interface Achievement {
  id: string;
  title: string;
  description?: string;
  date?: string;
  issuer?: string;
}

export interface Reference {
  id: string;
  name: string;
  title: string;
  company: string;
  email?: string;
  phone?: string;
  relationship: string;
}

export interface ResumeSectionData {
  id: string;
  sectionType: string;
  data:
    | PersonalInfo
    | Experience[]
    | Education[]
    | Skill[]
    | Project[]
    | Certification[]
    | Language[]
    | Achievement[]
    | Reference[]
    | string;
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

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
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
