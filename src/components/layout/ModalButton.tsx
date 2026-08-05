/*
  PATH src/components/layout/ModalButton.tsx
*/

import Button from "../ui/Button";
import Modal from "../ui/Modal";

export interface ModalButtonProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalButton = ({ isOpen, onClose }: ModalButtonProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Fenêtre Modale"
      closeLabel="Fermer"
      footer={
        <Button type="button" onClick={onClose}>
          Fermer
        </Button>
      }
    >
      <p className="text-sm leading-6 text-muted-foreground">Contenu de la fenêtre modale</p>
    </Modal>
  );
};

export default ModalButton;
