/*
  PATH src/components/ui/Card.tsx
*/
import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "../../lib/cn";

export interface CardProps extends ComponentPropsWithoutRef<"div"> {}

const CardRoot = forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("rounded-xl border-gray-200 bg-white text-gray-900 border", className)}
      {...props}
    />
  );
});

CardRoot.displayName = "Card";

export interface CardHeaderProps extends ComponentPropsWithoutRef<"header"> {}

const CardHeader = forwardRef<HTMLElement, CardHeaderProps>(({ className, ...props }, ref) => {
  return (
    <header ref={ref} className={cn("border-gray-100 px-4 py-3 border-b", className)} {...props} />
  );
});

CardHeader.displayName = "Card.Header";

export interface CardTitleProps extends ComponentPropsWithoutRef<"h3"> {}

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

export interface CardDescriptionProps extends ComponentPropsWithoutRef<"p"> {}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => {
    return <p ref={ref} className={cn("mt-1 text-sm text-gray-500", className)} {...props} />;
  },
);

CardDescription.displayName = "Card.Description";

export interface CardContentProps extends ComponentPropsWithoutRef<"div"> {}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("px-4 py-3", className)} {...props} />;
});

CardContent.displayName = "Card.Content";

export interface CardFooterProps extends ComponentPropsWithoutRef<"footer"> {}

const CardFooter = forwardRef<HTMLElement, CardFooterProps>(({ className, ...props }, ref) => {
  return (
    <footer
      ref={ref}
      className={cn(
        "gap-2 border-gray-100 px-4 py-3 flex items-center justify-end border-t",
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
