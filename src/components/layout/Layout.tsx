/*
  PATH src/components/layout/Layout.tsx
*/
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import MobileBottomNav from "./MobileBottomNav";
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
    <div className="bg-gray-50 text-gray-900 min-h-dvh">
      <Header
        title={t("app.title")}
        searchPlaceholder={t("header.searchPlaceholder")}
        primaryActionLabel={t("header.primaryAction")}
        onSearch={handleSearch}
        onPrimaryAction={handlePrimaryAction}
      />

      <div
        className={[
          "flex items-start gap-4",
          "px-4 pt-4 sm:px-6 sm:pt-6",
          "pb-[calc(5rem+env(safe-area-inset-bottom))]",
          "lg:pb-6",
        ].join(" ")}
      >
        <Sidebar />

        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>

      <MobileBottomNav />
    </div>
  );
};

export default Layout;
