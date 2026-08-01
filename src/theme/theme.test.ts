// @vitest-environment jsdom
import { beforeEach, describe, expect, it } from "vitest";

import { THEME_STORAGE_KEY, getStoredTheme, isThemePreference, resolveTheme } from "./theme";

describe("theme", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("just accepts valid theme preferences", () => {
    expect(isThemePreference("system")).toBe(true);
    expect(isThemePreference("light")).toBe(true);
    expect(isThemePreference("dark")).toBe(true);

    expect(isThemePreference("blue")).toBe(false);
    expect(isThemePreference(null)).toBe(false);
  });

  it("resolves the system theme", () => {
    expect(resolveTheme("system", "dark")).toBe("dark");
    expect(resolveTheme("system", "light")).toBe("light");
  });

  it("keeps an explicit theme", () => {
    expect(resolveTheme("light", "dark")).toBe("light");
    expect(resolveTheme("dark", "light")).toBe("dark");
  });

  it("retrieves the stored theme", () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, "dark");

    expect(getStoredTheme()).toBe("dark");
  });

  it("ignores an invalid stored value", () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, "blue");

    expect(getStoredTheme()).toBe("system");
  });
});
