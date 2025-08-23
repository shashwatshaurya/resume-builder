export interface ResumeSection {
  id: string;
  title: string;
  description: string;
  required: boolean;
  order: number;
  icon?: string;
  maxItems?: number;
}

export const RESUME_SECTIONS: ResumeSection[] = [
  {
    id: "personal-info",
    title: "Personal Information",
    description: "Your contact details and basic information",
    required: true,
    order: 1,
    icon: "👤",
    maxItems: 1
  },
  {
    id: "professional-summary",
    title: "Professional Summary",
    description: "A brief overview of your professional background",
    required: false,
    order: 2,
    icon: "📝",
    maxItems: 1
  },
  {
    id: "experience",
    title: "Work Experience",
    description: "Your professional work history",
    required: true,
    order: 3,
    icon: "💼"
  },
  {
    id: "education",
    title: "Education",
    description: "Your educational background and qualifications",
    required: true,
    order: 4,
    icon: "🎓"
  },
  {
    id: "skills",
    title: "Skills",
    description: "Technical and soft skills",
    required: false,
    order: 5,
    icon: "⚡"
  },
  {
    id: "projects",
    title: "Projects",
    description: "Notable projects you've worked on",
    required: false,
    order: 6,
    icon: "🚀"
  },
  {
    id: "certifications",
    title: "Certifications",
    description: "Professional certifications and licenses",
    required: false,
    order: 7,
    icon: "🏆"
  },
  {
    id: "languages",
    title: "Languages",
    description: "Languages you speak and proficiency levels",
    required: false,
    order: 8,
    icon: "🌍"
  },
  {
    id: "achievements",
    title: "Achievements",
    description: "Awards, honors, and notable accomplishments",
    required: false,
    order: 9,
    icon: "🌟"
  },
  {
    id: "references",
    title: "References",
    description: "Professional references",
    required: false,
    order: 10,
    icon: "👥"
  }
];

export const SECTION_TYPES = {
  PERSONAL_INFO: "personal-info",
  PROFESSIONAL_SUMMARY: "professional-summary",
  EXPERIENCE: "experience",
  EDUCATION: "education",
  SKILLS: "skills",
  PROJECTS: "projects",
  CERTIFICATIONS: "certifications",
  LANGUAGES: "languages",
  ACHIEVEMENTS: "achievements",
  REFERENCES: "references"
} as const;

export const REQUIRED_SECTIONS = RESUME_SECTIONS.filter(
  (section) => section.required
);
export const OPTIONAL_SECTIONS = RESUME_SECTIONS.filter(
  (section) => !section.required
);

// Helper functions
export const getSectionById = (id: string): ResumeSection | undefined => {
  return RESUME_SECTIONS.find((section) => section.id === id);
};

export const getSectionsByOrder = (): ResumeSection[] => {
  return RESUME_SECTIONS.sort((a, b) => a.order - b.order);
};

// Form validation constants specific to resume sections
export const RESUME_VALIDATION_RULES = {
  PERSONAL_INFO: {
    firstName: { required: true, minLength: 2, maxLength: 50 },
    lastName: { required: true, minLength: 2, maxLength: 50 },
    email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    phone: { required: false, pattern: /^[\+]?[1-9][\d]{0,15}$/ }
  },
  EXPERIENCE: {
    title: { required: true, minLength: 2, maxLength: 100 },
    company: { required: true, minLength: 2, maxLength: 100 },
    startDate: { required: true },
    description: { required: false, maxLength: 500 }
  },
  EDUCATION: {
    degree: { required: true, minLength: 2, maxLength: 100 },
    institution: { required: true, minLength: 2, maxLength: 100 },
    graduationYear: {
      required: true,
      min: 1900,
      max: new Date().getFullYear() + 10
    }
  }
};

// Dashboard-specific configuration
export const DASHBOARD_CONFIG = {
  MAX_RESUME_SECTIONS: 15,
  DEFAULT_SECTIONS: [
    SECTION_TYPES.PERSONAL_INFO,
    SECTION_TYPES.EXPERIENCE,
    SECTION_TYPES.EDUCATION
  ],
  SECTION_REORDER_ENABLED: true,
  AUTO_SAVE_ENABLED: true,
  PREVIEW_MODES: ["desktop", "mobile", "print"] as const
};

export enum DASHBOARD_TABS {
  MY_RESUMES = "My Resumes",
  TEMPLATES = "Templates"
}
