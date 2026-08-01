import { useEffect, useLayoutEffect, useMemo, useState, type PropsWithChildren } from "react";

import {
  THEME_STORAGE_KEY,
  getStoredTheme,
  getSystemTheme,
  resolveTheme,
  type ResolvedTheme,
  type ThemePreference,
} from "./theme";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemePreference>(getStoredTheme);
  const [systemTheme, _setSystemTheme] = useState<ResolvedTheme>(getSystemTheme);

  const resolvedTheme = resolveTheme(theme, systemTheme);

  useLayoutEffect(() => {
    const root = document.documentElement;

    root.dataset.themeChanging = "";
    root.dataset.theme = resolvedTheme;
    root.style.colorScheme = resolvedTheme;

    const frame = window.requestAnimationFrame(() => {
      delete root.dataset.themeChanging;
    });

    return () => {
      window.cancelAnimationFrame(frame);
      delete root.dataset.themeChanging;
    };
  }, [resolvedTheme]);

  useEffect(() => {
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // The selected theme still works for the current session when storage is unavailable.
    }
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
    }),
    [resolvedTheme, theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
