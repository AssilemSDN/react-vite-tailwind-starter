import { useEffect } from "react";
import type { ParseKeys } from "i18next";
import { useTranslation } from "react-i18next";

import { defaultNS } from "../i18n/resources";

type PageTitleKey = Extract<
  ParseKeys<typeof defaultNS>,
  `pages.${string}.title`
>;

export const useDocumentTitle = (pageTitleKey?: PageTitleKey): void => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const appTitle = t("app.title");

    document.title = pageTitleKey
      ? `${appTitle} — ${t(pageTitleKey)}`
      : appTitle;
  }, [i18n.resolvedLanguage, pageTitleKey, t]);
};