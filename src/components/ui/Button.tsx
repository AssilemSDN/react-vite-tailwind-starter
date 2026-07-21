/*
  PATH src/components/ui/Button.tsx
*/
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

import { cn } from "../../lib/cn";

const BUTTON_VARIANTS = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",

  secondary:
    "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-400",

  success: "bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500",

  danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",

  ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-400",
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
          "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
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
