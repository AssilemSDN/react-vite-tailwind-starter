/*
  PATH src/components/ui/Form.tsx
*/
import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "../../lib/cn";

const formSpacingClassNames = {
  compact: "space-y-4",
  default: "space-y-6",
  relaxed: "space-y-8",
} as const;

export interface FormProps extends ComponentPropsWithoutRef<"form"> {
  spacing?: keyof typeof formSpacingClassNames;
}

const FormRoot = forwardRef<HTMLFormElement, FormProps>(
  ({ className, children, spacing = "default", ...props }, ref) => {
    return (
      <form
        ref={ref}
        className={cn("w-full", formSpacingClassNames[spacing], className)}
        {...props}
      >
        {children}
      </form>
    );
  },
);

FormRoot.displayName = "Form";

export type FormSectionProps = ComponentPropsWithoutRef<"section">;

const FormSection = forwardRef<HTMLElement, FormSectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section ref={ref} className={cn("space-y-4", className)} {...props}>
        {children}
      </section>
    );
  },
);

FormSection.displayName = "Form.Section";

export type FormHeaderProps = ComponentPropsWithoutRef<"header">;

const FormHeader = forwardRef<HTMLElement, FormHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <header ref={ref} className={cn("space-y-1", className)} {...props}>
        {children}
      </header>
    );
  },
);

FormHeader.displayName = "Form.Header";

export type FormTitleProps = ComponentPropsWithoutRef<"h2">;

const FormTitle = forwardRef<HTMLHeadingElement, FormTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn("text-base font-semibold tracking-tight text-foreground", className)}
        {...props}
      >
        {children}
      </h2>
    );
  },
);

FormTitle.displayName = "Form.Title";

export type FormDescriptionProps = ComponentPropsWithoutRef<"p">;

const FormDescription = forwardRef<HTMLParagraphElement, FormDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn("text-sm leading-5 text-subtle-foreground", className)} {...props}>
        {children}
      </p>
    );
  },
);

FormDescription.displayName = "Form.Description";

const formGridColumnClassNames = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
} as const;

export interface FormGridProps extends ComponentPropsWithoutRef<"div"> {
  columns?: keyof typeof formGridColumnClassNames;
}

const FormGrid = forwardRef<HTMLDivElement, FormGridProps>(
  ({ className, children, columns = 2, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("grid gap-4", formGridColumnClassNames[columns], className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

FormGrid.displayName = "Form.Grid";

export type FormActionsProps = ComponentPropsWithoutRef<"div">;

const FormActions = forwardRef<HTMLDivElement, FormActionsProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col-reverse gap-2",
          "border-t border-border-subtle pt-4",
          "sm:flex-row sm:items-center sm:justify-end",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

FormActions.displayName = "Form.Actions";

const Form = Object.assign(FormRoot, {
  Section: FormSection,
  Header: FormHeader,
  Title: FormTitle,
  Description: FormDescription,
  Grid: FormGrid,
  Actions: FormActions,
});

export default Form;
