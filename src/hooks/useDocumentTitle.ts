import { useEffect } from "react";

const APP_TITLE = "Mon application";

export const useDocumentTitle = (pageTitle?: string): void => {
  useEffect(() => {
    document.title = pageTitle ? `${APP_TITLE} — ${pageTitle}` : APP_TITLE;
  }, [pageTitle]);
};
