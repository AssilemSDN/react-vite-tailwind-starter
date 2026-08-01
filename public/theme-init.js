const allowedThemes = ["system", "light", "dark"];
let theme = "system";

try {
  const storedTheme = window.localStorage.getItem("theme");

  if (storedTheme && allowedThemes.includes(storedTheme)) {
    theme = storedTheme;
  }
} catch {
  // localStorage can be unavailable.
}

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const resolvedTheme = theme === "system" ? (prefersDark ? "dark" : "light") : theme;

const root = document.documentElement;

root.dataset.theme = resolvedTheme;
root.style.colorScheme = resolvedTheme;
