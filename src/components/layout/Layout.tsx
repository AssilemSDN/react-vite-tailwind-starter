import { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import MobileBottomNav from "./MobileBottomNav";
import ModalButton from "./ModalButton";
import Sidebar from "./Sidebar";

interface PageLoaderProps {
  label: string;
}

const PageLoader = ({ label }: PageLoaderProps) => (
  <div aria-live="polite" aria-busy="true" className="flex min-h-64 items-center justify-center">
    <span className="text-sm text-muted-foreground">{label}</span>
  </div>
);

const Layout = () => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (query: string) => {
    console.log("Recherche :", query);
  };

  return (
    <>
      <div className="min-h-dvh bg-background text-foreground">
        <Header
          title={t("app.title")}
          searchPlaceholder={t("header.searchPlaceholder")}
          primaryActionLabel={t("header.primaryAction")}
          onSearch={handleSearch}
          onPrimaryAction={() => setIsModalOpen(true)}
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
            <Suspense fallback={<PageLoader label={t("app.loading")} />}>
              <Outlet />
            </Suspense>
          </main>
        </div>

        <MobileBottomNav />
      </div>

      <ModalButton isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Layout;
