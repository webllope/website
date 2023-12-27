import { defaultLang, languages, type Language } from "./i18n";
import dictionaries from "./dictionaries";
import { get } from "@utils/all";
import type { NestedObjectKeys } from "@utils/types";
import { getRelativeLocaleUrl } from "astro:i18n";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in dictionaries) return lang as keyof typeof dictionaries;
  return defaultLang;
}

export function replaceLangFromUrl(url: URL, newLang: keyof typeof languages) {
  const [, mayLang, rest] = url.pathname.split("/");
  if (Object.keys(languages).includes(mayLang)) {
    return getRelativeLocaleUrl(newLang, rest);
  }
  return getRelativeLocaleUrl(newLang, mayLang);
}

export function useTranslations(lang: keyof typeof dictionaries) {
  return function t(
    key: NestedObjectKeys<(typeof dictionaries)[typeof defaultLang]>,
  ) {
    return get(dictionaries[lang], key) || get(dictionaries[defaultLang], key);
  };
}
