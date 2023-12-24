export const languages = {
    en: 'English',
    es: 'Español'
} as const;

export const defaultLang = 'en';

export type Language = keyof typeof languages;
