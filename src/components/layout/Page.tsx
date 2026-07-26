/*
  PATH src/components/layout/Page.tsx
*/
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";

import { cn } from "../../lib/cn";

export interface PageProps extends ComponentPropsWithoutRef<"section"> {}

const PageRoot = forwardRef<HTMLElement, PageProps>(({ className, ...props }, ref) => {
  return <section ref={ref} className={cn("space-y-6", className)} {...props} />;
});

PageRoot.displayName = "Page";

export interface PageHeaderProps extends Omit<ComponentPropsWithoutRef<"header">, "title"> {
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
}

const PageHeader = forwardRef<HTMLElement, PageHeaderProps>(
  ({ title, description, actions, className, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
          className,
        )}
        {...props}
      >
        <div className="min-w-0">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h1>

          {description ? (
            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">{description}</p>
          ) : null}
        </div>

        {actions ? (
          <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div>
        ) : null}
      </header>
    );
  },
);

PageHeader.displayName = "Page.Header";

const Page = Object.assign(PageRoot, {
  Header: PageHeader,
});

export default Page;
