export const THEME_STORAGE_KEY = "theme";

export const themePreferences = ["system", "light", "dark"] as const;

export type ThemePreference = (typeof themePreferences)[number];

export type ResolvedTheme = Exclude<ThemePreference, "system">;

export const isThemePreference = (value: string | null): value is ThemePreference => {
  return themePreferences.includes(value as ThemePreference);
};

export const getSystemTheme = (): ResolvedTheme => {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const getStoredTheme = (): ThemePreference => {
  if (typeof window === "undefined") {
    return "system";
  }

  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    return isThemePreference(storedTheme) ? storedTheme : "system";
  } catch {
    return "system";
  }
};

export const resolveTheme = (
  preference: ThemePreference,
  systemTheme: ResolvedTheme,
): ResolvedTheme => {
  return preference === "system" ? systemTheme : preference;
};

export const applyResolvedTheme = (theme: ResolvedTheme) => {
  document.documentElement.dataset.theme = theme;
};
