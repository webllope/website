export const languages = {
    en: 'English',
    es: 'Español'
} as const;

export const defaultLang = 'es';

export type Language = keyof typeof languages;
