/*
  PATH src/components/layout/settings/SettingsMenu.tsx
*/
import { forwardRef } from "react";

import ThemeSwitcher from "./ThemeSwitcher";

export interface SettingsMenuProps {
  isOpen: boolean;
}

const SettingsMenu = forwardRef<HTMLElement, SettingsMenuProps>(({ isOpen }, ref) => {
  if (!isOpen) {
    return null;
  }

  return (
    <section
      ref={ref}
      id="settings-menu"
      aria-labelledby="settings-menu-title"
      tabIndex={-1}
      className={[
        "absolute top-full right-0 z-40 mt-2 w-64",
        "rounded-lg border border-border",
        "bg-surface p-4 shadow-lg",
      ].join(" ")}
    >
      <h2 id="settings-menu-title" className="mb-4 text-sm font-semibold text-foreground">
        Paramètres
      </h2>

      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Thème</p>
          <ThemeSwitcher />
        </div>
      </div>
    </section>
  );
});

SettingsMenu.displayName = "SettingsMenu";

export default SettingsMenu;
