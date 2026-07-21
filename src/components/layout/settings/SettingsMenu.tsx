/*
  PATH src/components/layout/settings/SettingsMenu.tsx
*/
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "./LanguageSwitcher";

export interface SettingsMenuProps {
  isOpen: boolean;
}

const SettingsMenu = forwardRef<HTMLDivElement, SettingsMenuProps>(({ isOpen }, ref) => {
  const { t } = useTranslation();

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={ref}
      id="settings-menu"
      role="dialog"
      aria-labelledby="settings-menu-title"
      tabIndex={-1}
      className={[
        "absolute top-full right-0 z-40 mt-2 w-64",
        "rounded-lg border border-gray-200",
        "bg-white p-4 shadow-lg",
      ].join(" ")}
    >
      <h2 id="settings-menu-title" className="mb-4 text-sm font-semibold text-gray-900">
        {t("settings.title")}
      </h2>

      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700">{t("language.label")}</p>

        <LanguageSwitcher />
      </div>
    </div>
  );
});

SettingsMenu.displayName = "SettingsMenu";

export default SettingsMenu;
