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
            "h-10 rounded-md border-gray-300 w-full appearance-none border",
            "bg-white px-3 py-2 pr-10 text-sm text-gray-900",
            "transition-colors",
            "focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 focus:outline-none",
            "disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50",
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
          className="right-3 size-4 text-gray-400 pointer-events-none absolute top-1/2 -translate-y-1/2"
        />
      </div>
    );
  },
);

Select.displayName = "Select";

export default Select;
