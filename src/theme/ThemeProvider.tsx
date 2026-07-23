import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

import {
  THEME_STORAGE_KEY,
  applyResolvedTheme,
  getStoredTheme,
  getSystemTheme,
  resolveTheme,
  type ResolvedTheme,
  type ThemePreference,
} from "./theme";

export interface ThemeContextValue {
  theme: ThemePreference;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemePreference) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemePreference>(getStoredTheme);
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme);

  const resolvedTheme = resolveTheme(theme, systemTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  useEffect(() => {
    applyResolvedTheme(resolvedTheme);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Le thème fonctionne pour la session même
      // lorsque localStorage est indisponible.
    }
  }, [resolvedTheme, theme]);

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

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
};
