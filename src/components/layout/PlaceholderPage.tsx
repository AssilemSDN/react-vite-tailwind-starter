import { Construction } from "lucide-react";

import Card from "../ui/Card";
import Page from "./Page";

export interface PlaceholderPageProps {
  title: string;
  description: string;
}

const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
  return (
    <Page>
      <Page.Header title={title} />
      <Card>
        <Card.Content className="flex min-h-48 flex-col items-center justify-center text-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-surface-muted">
            <Construction aria-hidden="true" className="size-6 text-subtle-foreground" />
          </div>

          <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">{description}</p>
        </Card.Content>
      </Card>
    </Page>
  );
};

export default PlaceholderPage;
