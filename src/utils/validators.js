export const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export const MIN_PASSWORD_LENGTH = 6;
