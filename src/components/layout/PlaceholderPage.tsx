import { Construction } from "lucide-react";

import Card from "../ui/Card";

export interface PlaceholderPageProps {
  title: string;
  description: string;
}

const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      </header>

      <Card>
        <Card.Content className="min-h-48 flex flex-col items-center justify-center text-center">
          <div className="size-12 bg-gray-100 flex items-center justify-center rounded-full">
            <Construction aria-hidden="true" className="size-6 text-gray-500" />
          </div>

          <p className="mt-4 max-w-md text-sm leading-6 text-gray-600">{description}</p>
        </Card.Content>
      </Card>
    </section>
  );
};

export default PlaceholderPage;
