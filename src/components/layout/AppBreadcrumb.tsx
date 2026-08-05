import { matchPath, useLocation } from "react-router";

import { navigation } from "../../app/navigation";
import { routes } from "../../app/routes";
import Breadcrumb from "../ui/Breadcrumb";

const AppBreadcrumb = () => {
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

  const currentLabel = currentItem ? currentItem.label : "Page introuvable";

  return (
    <Breadcrumb
      ariaLabel="Fil d'Ariane"
      className="mb-4"
      items={[
        {
          label: "Accueil",
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
