/*
  PATH src/components/ui/Label.tsx
*/
import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "../../lib/cn";

export interface LabelProps extends ComponentPropsWithoutRef<"label"> {
  required?: boolean;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, required = false, children, ...props }, ref) => {
    return (
      <label ref={ref} className={cn("text-sm font-medium text-foreground", className)} {...props}>
        {children}

        {required && (
          <span aria-hidden="true" className="ml-0.5 text-danger">
            *
          </span>
        )}
      </label>
    );
  },
);

Label.displayName = "Label";

export default Label;
