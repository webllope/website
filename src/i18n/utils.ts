import { defaultLang, languages, type Language } from "./i18n";
import dictionaries from "./dictionaries";
import { get, getFormattedDate } from "@utils/all";
import type { NestedObjectKeys } from "@lib/types";

// @ts-ignore
import { getRelativeLocaleUrl } from "astro:i18n";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in dictionaries) return lang as keyof typeof dictionaries;
  return defaultLang;
}

export function replaceLangFromUrl(url: URL, newLang: keyof typeof languages) {
  const [, , rest] = url.pathname.split("/");
  return getRelativeLocaleUrl(newLang, rest);
}

export function useTranslations(lang: keyof typeof dictionaries) {
  return function t(
    key: NestedObjectKeys<(typeof dictionaries)[typeof defaultLang]>,
  ) {
    return get(dictionaries[lang], key) || get(dictionaries[defaultLang], key);
  };
}

export function formatDate(lang: Language, date?: Date | string) {
  return getFormattedDate(lang, "default", date);
}

export function formatShortDate(lang: Language, date?: Date | string) {
  return getFormattedDate(lang, "short", date);
}
