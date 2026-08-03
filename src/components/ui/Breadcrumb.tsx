import { ChevronRight } from "lucide-react";
import { type ReactNode } from "react";
import { Link } from "react-router-dom";

import { cn } from "../../lib/cn";

export interface BreadcrumbItem {
  label: ReactNode;
  to?: string;
}

export interface BreadcrumbProps {
  ariaLabel: string;
  items: readonly BreadcrumbItem[];
  className?: string;
}

const Breadcrumb = ({ ariaLabel, items, className }: BreadcrumbProps) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav aria-label={ariaLabel} className={cn("min-w-0", className)}>
      <ol className="flex min-w-0 flex-wrap items-center gap-1 text-sm text-muted-foreground">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;

          return (
            <li key={`${index}-${String(item.to)}`} className="flex min-w-0 items-center gap-1">
              {index > 0 ? (
                <ChevronRight
                  aria-hidden="true"
                  className="size-4 shrink-0 text-subtle-foreground"
                />
              ) : null}

              {item.to && !isCurrent ? (
                <Link
                  to={item.to}
                  className={cn(
                    "rounded-sm transition-colors hover:text-foreground",
                    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isCurrent ? "page" : undefined}
                  className={cn("min-w-0 truncate", isCurrent && "font-medium text-foreground")}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
