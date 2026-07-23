/*
  PATH src/components/ui/Input.tsx
*/
import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "../../lib/cn";

export type InputProps = ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "h-10 rounded-md border-gray-300 bg-white px-3 py-2 w-full border",
          "text-sm text-gray-900 placeholder:text-gray-400",
          "transition-colors",
          "focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 focus:outline-none",
          "disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
