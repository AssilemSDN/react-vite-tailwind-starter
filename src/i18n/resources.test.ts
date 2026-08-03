import { describe, expect, it } from "vitest";

import { en } from "./locales/en";
import { fr } from "./locales/fr";

const getKeys = (value: unknown, prefix = ""): string[] => {
  if (typeof value !== "object" || value === null) {
    return [prefix];
  }

  return Object.entries(value).flatMap(([key, child]) =>
    getKeys(child, prefix ? `${prefix}.${key}` : key),
  );
};

describe("translations", () => {
  it("Should keep same keys in french and english", () => {
    expect(getKeys(fr).sort()).toEqual(getKeys(en).sort());
  });
});
