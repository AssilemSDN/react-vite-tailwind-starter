/*
  PATH src/components/ui/Select.tsx
*/
import { ChevronDown } from "lucide-react";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "../../lib/cn";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<ComponentPropsWithoutRef<"select">, "children"> {
  options: readonly SelectOption[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, placeholder, disabled = false, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          disabled={disabled}
          className={cn(
            "h-10 w-full appearance-none rounded-md border border-border-strong",
            "bg-surface px-3 py-2 pr-10 text-sm text-foreground",
            "transition-colors",
            "focus:border-ring focus:ring-2 focus:ring-ring/20 focus:outline-none",
            "disabled:cursor-not-allowed disabled:bg-surface-muted disabled:opacity-50",
            className,
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-placeholder"
        />
      </div>
    );
  },
);

Select.displayName = "Select";

export default Select;
