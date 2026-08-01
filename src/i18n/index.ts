// src/i18n/index.ts

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { defaultNS, resources, supportedLanguages, type SupportedLanguage } from "./resources";

const LANGUAGE_STORAGE_KEY = "language";
const fallbackLanguage: SupportedLanguage = "fr";

const normalizeLanguage = (language: string | null | undefined): SupportedLanguage => {
  return language?.toLowerCase().startsWith("en") ? "en" : "fr";
};

const getStoredLanguage = (): string | null => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch {
    return null;
  }
};

const getBrowserLanguage = (): string | undefined => {
  if (typeof navigator === "undefined") {
    return undefined;
  }

  return navigator.language;
};

const persistLanguage = (language: SupportedLanguage) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // The selected theme still works for the current session when storage is unavailable.
  }
};

const updateDocumentLanguage = (language: string) => {
  const normalizedLanguage = normalizeLanguage(language);

  if (typeof document !== "undefined") {
    document.documentElement.lang = normalizedLanguage;
  }

  persistLanguage(normalizedLanguage);
};

const initialLanguage = normalizeLanguage(
  getStoredLanguage() ?? getBrowserLanguage() ?? fallbackLanguage,
);

// oxlint-disable-next-line import/no-named-as-default-member -- i18next default export is an instance exposing use()
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

updateDocumentLanguage(initialLanguage);

i18n.on("languageChanged", updateDocumentLanguage);

export default i18n;
