import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  const { t } = useTranslation();

  const handleSearch = (query: string) => {
    console.log("Recherche :", query);
  };

  const handlePrimaryAction = () => {
    console.log("Button clicked !");
  };

  return (
    <div className="min-h-dvh bg-gray-50 text-gray-900">
      <Header
        title={t("app.title")}
        searchPlaceholder={t("header.searchPlaceholder")}
        primaryActionLabel={t("header.primaryAction")}
        onSearch={handleSearch}
        onPrimaryAction={handlePrimaryAction}
      />

      <div className="flex items-start gap-4 p-4 sm:p-6">
        <Sidebar />

        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
