import { Settings } from "lucide-react";
import { useTranslation } from "react-i18next";

import Button from "../../ui/Button";

export interface SettingsButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const SettingsButton = ({ isOpen, onClick }: SettingsButtonProps) => {
  const { t } = useTranslation();

  return (
    <Button
      type="button"
      variant="secondary"
      size="sm"
      leftIcon={<Settings aria-hidden="true" className="size-4" />}
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      aria-controls="settings-menu"
      onClick={onClick}
    >
      <span className="hidden sm:inline">{t("settings.title")}</span>
    </Button>
  );
};

export default SettingsButton;
