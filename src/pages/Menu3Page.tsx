/*
  PATH /src/pages/Menu3Page.tsx
*/
import { useTranslation } from "react-i18next";

import PlaceholderPage from "../components/layout/PlaceholderPage";

const Menu3Page = () => {
  const { t } = useTranslation();

  return (
    <PlaceholderPage title={t("navigation.menu3")} description={t("pages.underConstruction")} />
  );
};

export default Menu3Page;
