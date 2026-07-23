/*
  PATH src/components/ui/Button.tsx
*/
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

import { cn } from "../../lib/cn";

const BUTTON_VARIANTS = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:ring-ring",

  secondary:
    "border border-border-strong bg-surface text-foreground hover:bg-surface-hover focus-visible:ring-ring",

  success: "bg-success text-success-foreground hover:bg-success-hover focus-visible:ring-success",

  danger: "bg-danger text-danger-foreground hover:bg-danger-hover focus-visible:ring-danger",

  ghost: "bg-transparent text-foreground hover:bg-surface-hover focus-visible:ring-ring",
} as const;

const BUTTON_SIZES = {
  sm: "min-h-8 px-3 py-1.5 text-sm",
  md: "min-h-10 px-4 py-2 text-base",
  lg: "min-h-12 px-6 py-3 text-lg",
  icon: "size-10 p-0",
} as const;

export type ButtonVariant = keyof typeof BUTTON_VARIANTS;
export type ButtonSize = keyof typeof BUTTON_SIZES;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      type = "button",
      className,
      disabled = false,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-md font-medium",
          "transition-colors duration-200",
          "focus-visible:ring-2 focus-visible:ring-offset-2",
          "focus-visible:ring-offset-surface focus-visible:outline-none",
          "disabled:cursor-not-allowed disabled:opacity-50",
          BUTTON_VARIANTS[variant],
          BUTTON_SIZES[size],
          className,
        )}
        {...props}
      >
        {loading ? (
          <span
            aria-hidden="true"
            className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          />
        ) : (
          leftIcon
        )}

        {children}

        {!loading && rightIcon}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
