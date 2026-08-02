/*
  PATH src/components/componentsPage/ComponentModalExample.tsx
*/

import { useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "../ui/Button";
import Modal from "../ui/Modal";
import ComponentExampleSection from "./ComponentExampleSection";

const ComponentModalExample = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ComponentExampleSection title={t("pages.components.sections.modal")}>
      <Button onClick={() => setIsOpen(true)}>{t("pages.components.modal.open")}</Button>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={t("pages.components.modal.title")}
        closeLabel={t("modal.closeLabel")}
        footer={
          <>
            <Button variant="secondary" onClick={closeModal}>
              {t("pages.components.modal.cancel")}
            </Button>
            <Button onClick={closeModal}>{t("pages.components.modal.confirm")}</Button>
          </>
        }
      >
        <p className="text-sm text-subtle-foreground">{t("pages.components.modal.content")}</p>
      </Modal>
    </ComponentExampleSection>
  );
};

export default ComponentModalExample;
