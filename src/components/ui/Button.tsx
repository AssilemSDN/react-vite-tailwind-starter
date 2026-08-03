/*
  PATH src/components/ui/Button.tsx
*/
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  type Ref,
  type RefAttributes,
} from "react";
import { Link, type LinkProps } from "react-router-dom";

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

interface SharedButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export type NativeButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: never;
  };

export type RouterButtonProps = SharedButtonProps &
  Omit<LinkProps, "children" | "className" | "to"> & {
    to: LinkProps["to"];
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
  };

export type ButtonProps = NativeButtonProps | RouterButtonProps;

type ButtonComponent = {
  (props: NativeButtonProps & RefAttributes<HTMLButtonElement>): ReactElement | null;
  (props: RouterButtonProps & RefAttributes<HTMLAnchorElement>): ReactElement | null;
};

const getButtonClassName = (variant: ButtonVariant, size: ButtonSize, className?: string) =>
  cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium",
    "transition-colors duration-200",
    "focus-visible:ring-2 focus-visible:ring-offset-2",
    "focus-visible:ring-offset-surface focus-visible:outline-none",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
    BUTTON_VARIANTS[variant],
    BUTTON_SIZES[size],
    className,
  );

const ButtonContent = ({
  loading,
  leftIcon,
  rightIcon,
  children,
}: Pick<SharedButtonProps, "loading" | "leftIcon" | "rightIcon"> & {
  children?: ReactNode;
}) => (
  <>
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
  </>
);

const ButtonBase = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
  if ("to" in props && props.to !== undefined) {
    const {
      to,
      variant = "primary",
      size = "md",
      className,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled = false,
      onClick,
      tabIndex,
      ...linkProps
    } = props;
    const isDisabled = disabled || loading;

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      if (isDisabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      onClick?.(event);
    };

    return (
      <Link
        {...linkProps}
        ref={ref as Ref<HTMLAnchorElement>}
        to={to}
        aria-busy={loading || undefined}
        aria-disabled={isDisabled || undefined}
        tabIndex={isDisabled ? -1 : tabIndex}
        className={getButtonClassName(variant, size, className)}
        onClick={handleClick}
      >
        <ButtonContent loading={loading} leftIcon={leftIcon} rightIcon={rightIcon}>
          {children}
        </ButtonContent>
      </Link>
    );
  }

  const {
    variant = "primary",
    size = "md",
    type = "button",
    className,
    disabled = false,
    loading = false,
    leftIcon,
    rightIcon,
    children,
    ...buttonProps
  } = props as NativeButtonProps;
  const isDisabled = disabled || loading;

  return (
    <button
      {...buttonProps}
      ref={ref as Ref<HTMLButtonElement>}
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={getButtonClassName(variant, size, className)}
    >
      <ButtonContent loading={loading} leftIcon={leftIcon} rightIcon={rightIcon}>
        {children}
      </ButtonContent>
    </button>
  );
});
ButtonBase.displayName = "Button";

const Button = ButtonBase as ButtonComponent;

export default Button;
