// General validation patterns for forms
export const VALIDATION_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[\+]?[1-9][\d]{0,15}$/,
  URL: /^https?:\/\/.+/,
  USERNAME: /^[a-zA-Z0-9_]{3,20}$/
};

// App-wide constants
export const APP_CONFIG = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  SUPPORTED_FILE_TYPES: ["pdf", "doc", "docx"],
  MAX_RESUME_TITLE_LENGTH: 100,
  AUTO_SAVE_INTERVAL: 30000, // 30 seconds
  SESSION_TIMEOUT: 24 * 60 * 60 * 1000 // 24 hours
};
