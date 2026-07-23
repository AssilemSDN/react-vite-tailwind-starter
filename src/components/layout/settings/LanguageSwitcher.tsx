/*
  PATH src/components/layout/settings/LanguageSwitcher.tsx
*/
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

import { supportedLanguages, type SupportedLanguage } from "../../../i18n/resources";
import Select, { type SelectOption } from "../../ui/Select";

const isSupportedLanguage = (value: string): value is SupportedLanguage => {
  return supportedLanguages.includes(value as SupportedLanguage);
};

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const resolvedLanguage = i18n.resolvedLanguage?.split("-")[0] ?? "";

  const currentLanguage: SupportedLanguage = isSupportedLanguage(resolvedLanguage)
    ? resolvedLanguage
    : "fr";

  const options = [
    {
      label: t("language.french"),
      value: "fr",
    },
    {
      label: t("language.english"),
      value: "en",
    },
  ] satisfies readonly SelectOption[];

  const handleLanguageChange = (value: string) => {
    if (!isSupportedLanguage(value)) {
      return;
    }

    void i18n.changeLanguage(value);
  };

  return (
    <div className="gap-2 flex items-center">
      <Languages aria-hidden="true" className="size-4 text-gray-500 shrink-0" />

      <Select
        aria-label={t("language.label")}
        value={currentLanguage}
        options={options}
        onChange={(event) => {
          handleLanguageChange(event.target.value);
        }}
        className="w-32"
      />
    </div>
  );
};

export default LanguageSwitcher;
