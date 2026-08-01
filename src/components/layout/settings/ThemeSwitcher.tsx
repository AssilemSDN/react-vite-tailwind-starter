import { Monitor, Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";

import { isThemePreference, type ThemePreference } from "../../../theme/theme";
import { useTheme } from "../../../theme/useTheme";
import Select, { type SelectOption } from "../../ui/Select";

const themeIcons = {
  system: Monitor,
  light: Sun,
  dark: Moon,
} satisfies Record<ThemePreference, typeof Monitor>;

const ThemeSwitcher = () => {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();

  const ThemeIcon = themeIcons[theme];

  const options = [
    {
      label: t("theme.system"),
      value: "system",
    },
    {
      label: t("theme.light"),
      value: "light",
    },
    {
      label: t("theme.dark"),
      value: "dark",
    },
  ] satisfies readonly SelectOption[];

  return (
    <div className="flex items-center gap-2">
      <ThemeIcon aria-hidden="true" className="size-4 shrink-0 text-subtle-foreground" />

      <Select
        aria-label={t("theme.label")}
        value={theme}
        options={options}
        onChange={(event) => {
          const nextTheme = event.target.value;

          if (isThemePreference(nextTheme)) {
            setTheme(nextTheme);
          }
        }}
        className="w-32"
      />
    </div>
  );
};

export default ThemeSwitcher;
