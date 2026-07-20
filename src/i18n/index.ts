// src/i18n/index.ts

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { defaultNS, resources, supportedLanguages, type SupportedLanguage } from "./resources";

const LANGUAGE_STORAGE_KEY = "language";
const fallbackLanguage: SupportedLanguage = "fr";

const normalizeLanguage = (language: string | null | undefined): SupportedLanguage => {
  return language?.toLowerCase().startsWith("en") ? "en" : "fr";
};

const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

const initialLanguage = normalizeLanguage(storedLanguage ?? navigator.language);

void i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: fallbackLanguage,
  supportedLngs: supportedLanguages,
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
});

const updateDocumentLanguage = (language: string) => {
  const normalizedLanguage = normalizeLanguage(language);

  document.documentElement.lang = normalizedLanguage;

  localStorage.setItem(LANGUAGE_STORAGE_KEY, normalizedLanguage);
};

updateDocumentLanguage(initialLanguage);

i18n.on("languageChanged", updateDocumentLanguage);

export default i18n;
