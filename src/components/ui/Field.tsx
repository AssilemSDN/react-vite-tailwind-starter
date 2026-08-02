/*
  PATH src/components/ui/Field.tsx
*/
import { cloneElement, isValidElement, useId, type ReactElement, type ReactNode } from "react";

import { cn } from "../../lib/cn";
import Label from "./Label";

export interface FieldProps {
  label: ReactNode;
  children: ReactElement<{
    id?: string;
    "aria-describedby"?: string;
    "aria-invalid"?: boolean;
  }>;
  error?: ReactNode;
  hint?: ReactNode;
  required?: boolean;
  className?: string;
  id?: string;
}

const Field = ({ label, children, error, hint, required = false, className, id }: FieldProps) => {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const hintId = `${fieldId}-hint`;
  const errorId = `${fieldId}-error`;

  const describedBy = [hint && hintId, error && errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <Label htmlFor={fieldId} required={required}>
        {label}
      </Label>

      {isValidElement(children)
        ? cloneElement(children, {
            id: fieldId,
            "aria-describedby": describedBy,
            "aria-invalid": Boolean(error),
          })
        : children}

      {hint && !error && (
        <p id={hintId} className="text-xs text-placeholder">
          {hint}
        </p>
      )}

      {error && (
        <p id={errorId} role="alert" className="text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  );
};

export default Field;
