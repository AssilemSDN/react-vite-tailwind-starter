/*
  PATH src/components/ui/Card.tsx
*/
import { ChevronRight } from "lucide-react";
import { forwardRef, type ComponentPropsWithoutRef, type Ref } from "react";
import { Link, type LinkProps } from "react-router-dom";

import { cn } from "../../lib/cn";

const cardBaseClassName = "rounded-xl border border-border bg-surface text-foreground";

const cardInteractiveClassName = cn(
  "group relative block w-full text-left",
  "[&>header:first-child]:pr-12",
  "transition-[background-color,border-color,box-shadow,transform] duration-150",
  "hover:-translate-y-0.5 hover:border-border-strong",
  "hover:bg-surface-muted hover:shadow-sm",
  "focus-visible:outline-none",
  "focus-visible:ring-2 focus-visible:ring-ring/20",
);

type CardDivProps = Omit<ComponentPropsWithoutRef<"div">, "onClick"> & {
  /**
   * Une carte statique ne doit pas être rendue interactive avec onClick.
   * Place plutôt un Button dans Card.Footer.
   */
  onClick?: never;
  to?: never;
};

type CardLinkProps = LinkProps & {
  to: LinkProps["to"];
  showIndicator?: boolean;
};

export type CardProps = CardDivProps | CardLinkProps;

const CardRoot = forwardRef<HTMLDivElement | HTMLAnchorElement, CardProps>(
  ({ className, ...props }, ref) => {
    if ("to" in props && props.to !== undefined) {
      const { to, children, showIndicator = true, ...linkProps } = props as CardLinkProps;

      return (
        <Link
          ref={ref as Ref<HTMLAnchorElement>}
          to={to}
          className={cn(cardBaseClassName, cardInteractiveClassName, className)}
          {...linkProps}
        >
          {children}

          {showIndicator && (
            <ChevronRight
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute top-4 right-4 size-5",
                "text-subtle-foreground",
                "transition-[color,transform] duration-150",
                "group-hover:translate-x-0.5 group-hover:text-foreground",
                "group-focus-visible:translate-x-0.5",
                "group-focus-visible:text-foreground",
              )}
            />
          )}
        </Link>
      );
    }

    return (
      <div
        ref={ref as Ref<HTMLDivElement>}
        className={cn(cardBaseClassName, className)}
        {...(props as CardDivProps)}
      />
    );
  },
);

CardRoot.displayName = "Card";

export type CardHeaderProps = ComponentPropsWithoutRef<"header">;

const CardHeader = forwardRef<HTMLElement, CardHeaderProps>(({ className, ...props }, ref) => {
  return (
    <header
      ref={ref}
      className={cn("border-b border-border-subtle px-4 py-3", className)}
      {...props}
    />
  );
});

CardHeader.displayName = "Card.Header";

export type CardTitleProps = ComponentPropsWithoutRef<"h3">;

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3 ref={ref} className={cn("text-base font-semibold tracking-tight", className)} {...props}>
        {children}
      </h3>
    );
  },
);

CardTitle.displayName = "Card.Title";

export type CardDescriptionProps = ComponentPropsWithoutRef<"p">;

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p ref={ref} className={cn("mt-1 text-sm text-subtle-foreground", className)} {...props} />
    );
  },
);

CardDescription.displayName = "Card.Description";

export type CardContentProps = ComponentPropsWithoutRef<"div">;

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("px-4 py-3", className)} {...props} />;
});

CardContent.displayName = "Card.Content";

export type CardFooterProps = ComponentPropsWithoutRef<"footer">;

const CardFooter = forwardRef<HTMLElement, CardFooterProps>(({ className, ...props }, ref) => {
  return (
    <footer
      ref={ref}
      className={cn(
        "flex items-center justify-end gap-2",
        "border-t border-border-subtle px-4 py-3",
        className,
      )}
      {...props}
    />
  );
});

CardFooter.displayName = "Card.Footer";

const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});

export default Card;
