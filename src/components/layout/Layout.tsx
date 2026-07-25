import { useState } from "react";
/*
  PATH src/components/layout/Layout.tsx
*/
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import MobileBottomNav from "./MobileBottomNav";
import ModalButton from "./ModalButton";
import Sidebar from "./Sidebar";

const Layout = () => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (query: string) => {
    console.log("Recherche :", query);
  };

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header
        title={t("app.title")}
        searchPlaceholder={t("header.searchPlaceholder")}
        primaryActionLabel={t("header.primaryAction")}
        onSearch={handleSearch}
        onPrimaryAction={() => setIsModalOpen(true)}
      />
      <ModalButton isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

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
