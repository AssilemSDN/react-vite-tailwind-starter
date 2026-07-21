/*
  PATH /src/pages/Menu1Page.tsx
*/
import { useTranslation } from "react-i18next";

import PlaceholderPage from "../components/layout/PlaceholderPage";

const Menu1Page = () => {
  const { t } = useTranslation();

  return (
    <PlaceholderPage title={t("navigation.menu1")} description={t("pages.underConstruction")} />
  );
};

export default Menu1Page;
