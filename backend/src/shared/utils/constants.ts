export const SALT_ROUNDS = 10;

// Resume section types (shared between frontend and backend)
export const SECTION_TYPES = {
  PERSONAL_INFO: 'personal-info',
  PROFESSIONAL_SUMMARY: 'professional-summary',
  EXPERIENCE: 'experience',
  EDUCATION: 'education',
  SKILLS: 'skills',
  PROJECTS: 'projects',
  CERTIFICATIONS: 'certifications',
  LANGUAGES: 'languages',
  ACHIEVEMENTS: 'achievements',
  REFERENCES: 'references',
} as const;

export const REQUIRED_SECTION_IDS = [
  SECTION_TYPES.PERSONAL_INFO,
  SECTION_TYPES.EXPERIENCE,
  SECTION_TYPES.EDUCATION,
];

// Database constraints
export const DB_CONSTRAINTS = {
  MAX_RESUME_TITLE_LENGTH: 100,
  MAX_SECTION_CONTENT_LENGTH: 10000,
  MAX_RESUMES_PER_USER: 10,
  MAX_SECTIONS_PER_RESUME: 15,
};

// Session configuration
export const SESSION_CONFIG = {
  SECRET: process.env.SESSION_SECRET || 'default-secret-key',
  MAX_AGE: 24 * 60 * 60 * 1000, // 24 hours
  SECURE: process.env.NODE_ENV === 'production',
  HTTP_ONLY: true,
  SAME_SITE: 'strict' as const,
};
