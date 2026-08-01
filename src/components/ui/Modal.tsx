/*
  PATH src/components/ui/Modal.tsx
*/
import { X } from "lucide-react";
import { type ReactNode, useEffect, useId, useRef } from "react";

import Button from "./Button";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  closeLabel?: string;
}

const Modal = ({ isOpen, onClose, title, children, footer, closeLabel = "Fermer" }: ModalProps) => {
  const titleId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (!isOpen) {
      if (dialog.open) {
        dialog.close();
      }

      return;
    }

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (!dialog.open) {
      dialog.showModal();
    }

    const focusableSelector = [
      "a[href]",
      "button:not([disabled])",
      "input:not([disabled]):not([type='hidden'])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
    ].join(",");

    const getFocusableElements = () =>
      Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector)).filter(
        (element) =>
          element.getClientRects().length > 0 && element.getAttribute("aria-hidden") !== "true",
      );

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = getFocusableElements();

      if (focusableElements.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (
        event.shiftKey &&
        (document.activeElement === firstElement || document.activeElement === dialog)
      ) {
        event.preventDefault();
        lastElement?.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    dialog.addEventListener("keydown", handleKeyDown);

    const animationFrame = window.requestAnimationFrame(() => {
      const [firstFocusableElement] = getFocusableElements();

      if (firstFocusableElement) {
        firstFocusableElement.focus();
      } else {
        dialog.tabIndex = -1;
        dialog.focus();
      }
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      dialog.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = previousOverflow;

      if (dialog.open) {
        dialog.close();
      }

      previousFocusRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        onCloseRef.current();
      }}
      className={[
        "m-auto w-[calc(100%-2rem)] max-w-md overflow-hidden p-0",
        "rounded-xl border border-border bg-surface text-foreground",
        "shadow-xl backdrop:bg-black/50",
      ].join(" ")}
    >
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <h2 id={titleId} className="text-lg font-semibold text-foreground">
          {title}
        </h2>

        <Button type="button" variant="ghost" size="icon" aria-label={closeLabel} onClick={onClose}>
          <X aria-hidden="true" className="size-5" />
        </Button>
      </div>

      <div className="p-5">{children}</div>

      {footer && (
        <div className="flex justify-end gap-2 border-t border-border px-5 py-4">{footer}</div>
      )}
    </dialog>
  );
};

export default Modal;
