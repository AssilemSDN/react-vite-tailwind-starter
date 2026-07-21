/*
  PATH /src/pages/Menu2Page.tsx
*/
import { useTranslation } from "react-i18next";

import PlaceholderPage from "../components/layout/PlaceholderPage";

const Menu2Page = () => {
  const { t } = useTranslation();

  return (
    <PlaceholderPage title={t("navigation.menu2")} description={t("pages.underConstruction")} />
  );
};

export default Menu2Page;
