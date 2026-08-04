import { useTranslation } from "react-i18next";
import { matchPath, useLocation } from "react-router";

import { navigation } from "../../app/navigation";
import { routes } from "../../app/routes";
import Breadcrumb from "../ui/Breadcrumb";

const AppBreadcrumb = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const currentItem = navigation.find(({ to }) =>
    matchPath(
      {
        path: to,
        end: true,
      },
      pathname,
    ),
  );

  if (pathname === "/" || currentItem?.to === routes.home) {
    return null;
  }

  const currentLabel = currentItem ? t(currentItem.labelKey) : t("pages.notFound.title");

  return (
    <Breadcrumb
      ariaLabel={t("breadcrumb.label")}
      className="mb-4"
      items={[
        {
          label: t("navigation.home"),
          to: routes.home,
        },
        {
          label: currentLabel,
        },
      ]}
    />
  );
};

export default AppBreadcrumb;
