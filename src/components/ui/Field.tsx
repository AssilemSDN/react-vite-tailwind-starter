/*
  PATH src/components/ui/Field.tsx
*/
import { cloneElement, useId, type AriaAttributes, type ReactElement, type ReactNode } from "react";

import { cn } from "../../lib/cn";
import Label from "./Label";

type FieldControlProps = {
  id?: string;
  required?: boolean;
} & Pick<AriaAttributes, "aria-required" | "aria-describedby" | "aria-invalid">;

export interface FieldProps {
  label: ReactNode;
  children: ReactElement<FieldControlProps>;
  error?: ReactNode;
  hint?: ReactNode;
  required?: boolean;
  className?: string;
  id?: string;
}

const mergeIds = (...values: Array<string | undefined>) => {
  const ids = values.flatMap((value) => value?.split(/\s+/).filter(Boolean) ?? []);

  return [...new Set(ids)].join(" ") || undefined;
};

const Field = ({ label, children, error, hint, required = false, className, id }: FieldProps) => {
  const generatedId = useId();

  const fieldId = id ?? children.props.id ?? generatedId;
  const hintId = `${fieldId}-hint`;
  const errorId = `${fieldId}-error`;

  const effectiveRequired = required || children.props.required === true;

  const fieldDescriptionId = error ? errorId : hint ? hintId : undefined;

  const describedBy = mergeIds(children.props["aria-describedby"], fieldDescriptionId);

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <Label htmlFor={fieldId} required={effectiveRequired}>
        {label}
      </Label>

      {cloneElement(children, {
        id: fieldId,
        required: effectiveRequired || undefined,
        "aria-required": effectiveRequired ? true : children.props["aria-required"],
        "aria-describedby": describedBy,
        "aria-invalid": error ? true : children.props["aria-invalid"],
      })}

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
