/*
  PATH src/components/layout/Button1Modal.tsx
*/
import { useTranslation } from "react-i18next";

import Button from "../ui/Button";
import Modal from "../ui/Modal";

export interface ModalButtonProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalButton = ({ isOpen, onClose }: ModalButtonProps) => {
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t("modal.title")}
      closeLabel={t("modal.closeLabel")}
      footer={
        <Button type="button" onClick={onClose}>
          {t("modal.close")}
        </Button>
      }
    >
      <p className="text-sm leading-6 text-muted-foreground">{t("modal.content")}</p>
    </Modal>
  );
};

export default ModalButton;
