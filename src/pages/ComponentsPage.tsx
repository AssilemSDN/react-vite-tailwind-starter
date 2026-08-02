/*
  PATH src/pages/ComponentsPage.tsx
*/
import { useTranslation } from "react-i18next";

import {
  ComponentButtonsExample,
  ComponentCardsExample,
  ComponentFormExample,
  ComponentModalExample,
} from "../components/componentsPage";
import Page from "../components/layout/Page";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const ComponentsPage = () => {
  const { t } = useTranslation();
  useDocumentTitle("pages.components.title");

  return (
    <Page>
      <Page.Header
        title={t("pages.components.title")}
        description={t("pages.components.description")}
      />
      <ComponentCardsExample />
      <ComponentButtonsExample />
      <ComponentFormExample />
      <ComponentModalExample />
    </Page>
  );
};

export default ComponentsPage;
