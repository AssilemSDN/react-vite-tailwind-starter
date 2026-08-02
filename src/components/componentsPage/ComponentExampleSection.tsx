/*
  PATH src/components/componentsPage/ComponentExampleSection.tsx
*/

import type { ReactNode } from "react";

export interface ComponentExampleSectionProps {
  title: string;
  children: ReactNode;
}

const ComponentExampleSection = ({ title, children }: ComponentExampleSectionProps) => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">{title}</h2>

      {children}
    </section>
  );
};

export default ComponentExampleSection;
