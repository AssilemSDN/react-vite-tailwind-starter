/*
  PATH src/components/componentsPage/ComponentButtonsExample.tsx
*/

import { FileQuestion, Mail, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";

import Button from "../ui/Button";
import ComponentExampleSection from "./ComponentExampleSection";

const ComponentButtonsExample = () => {
  const { t } = useTranslation();

  return (
    <ComponentExampleSection title={t("pages.components.sections.buttons")}>
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="primary">{t("pages.components.buttons.primary")}</Button>
        <Button variant="secondary">{t("pages.components.buttons.secondary")}</Button>
        <Button variant="success">{t("pages.components.buttons.success")}</Button>
        <Button variant="danger">{t("pages.components.buttons.danger")}</Button>
        <Button variant="ghost">{t("pages.components.buttons.ghost")}</Button>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm">{t("pages.components.buttons.small")}</Button>
        <Button size="md">{t("pages.components.buttons.medium")}</Button>
        <Button size="lg">{t("pages.components.buttons.large")}</Button>
        <Button size="icon" aria-label={t("pages.components.buttons.sendEmail")}>
          <Mail aria-hidden="true" className="size-4" />
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button leftIcon={<Trash2 aria-hidden="true" className="size-4" />} variant="danger">
          {t("pages.components.buttons.delete")}
        </Button>
        <Button loading>{t("pages.components.buttons.loading")}</Button>
        <Button disabled>{t("pages.components.buttons.disabled")}</Button>
        <Button
          to="/page-introuvable"
          variant="secondary"
          leftIcon={<FileQuestion aria-hidden="true" className="size-4" />}
        >
          {t("pages.components.buttons.notFound")}
        </Button>
      </div>
    </ComponentExampleSection>
  );
};

export default ComponentButtonsExample;
