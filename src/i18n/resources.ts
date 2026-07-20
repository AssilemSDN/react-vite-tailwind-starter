// src/i18n/resources.ts

import { en } from "./locales/en";
import { fr } from "./locales/fr";

export const defaultNS = "translation";

export const resources = {
  fr: {
    translation: fr,
  },
  en: {
    translation: en,
  },
} as const;

export type SupportedLanguage = keyof typeof resources;

export const supportedLanguages = Object.keys(resources) as SupportedLanguage[];
