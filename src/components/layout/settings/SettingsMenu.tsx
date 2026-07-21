/*
  PATH src/components/layout/settings/SettingsMenu.tsx
*/
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "./LanguageSwitcher";

export interface SettingsMenuProps {
  isOpen: boolean;
}

const SettingsMenu = ({ isOpen }: SettingsMenuProps) => {
  const { t } = useTranslation();

  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="settings-menu"
      role="dialog"
      aria-label={t("settings.title")}
      className={[
        "absolute top-full right-0 z-40 mt-2 w-64",
        "rounded-lg border border-gray-200",
        "bg-white p-4 shadow-lg",
      ].join(" ")}
    >
      <h2 className="mb-4 text-sm font-semibold text-gray-900">{t("settings.title")}</h2>

      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700">{t("language.label")}</p>

        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default SettingsMenu;
