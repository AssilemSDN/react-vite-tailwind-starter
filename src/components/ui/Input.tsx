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
          "h-10 w-full rounded-md border border-border-strong bg-surface px-3 py-2",
          "text-sm text-foreground placeholder:text-placeholder",
          "transition-colors",
          "focus:border-ring focus:ring-2 focus:ring-ring/20 focus:outline-none",
          "disabled:cursor-not-allowed disabled:bg-surface-muted disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
