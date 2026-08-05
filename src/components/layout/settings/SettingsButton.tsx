/*
  PATH src/components/layout/settings/SettingsButton.tsx
*/
import { Settings } from "lucide-react";
import { forwardRef } from "react";

import Button from "../../ui/Button";

export interface SettingsButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const SettingsButton = forwardRef<HTMLButtonElement, SettingsButtonProps>(
  ({ isOpen, onClick }, ref) => {
    return (
      <Button
        ref={ref}
        type="button"
        variant="secondary"
        size="sm"
        leftIcon={<Settings aria-hidden="true" className="size-4" />}
        aria-expanded={isOpen}
        aria-controls="settings-menu"
        onClick={onClick}
      >
        <span className="sr-only sm:not-sr-only">Paramètres</span>
      </Button>
    );
  },
);

SettingsButton.displayName = "SettingsButton";

export default SettingsButton;
