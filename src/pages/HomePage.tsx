/*
  PATH /src/pages/HomePage.tsx
*/
import Page from "../components/layout/Page";
import Card from "../components/ui/Card";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const HomePage = () => {
  useDocumentTitle("pages.home.title");

  return (
    <Page>
      <Page.Header title="Lorem ipsum" description="Lorem ipsum dolor sit amet" />
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <Card.Header>
            <Card.Title>Lorem ipsum</Card.Title>

            <Card.Description>Lorem ipsum dolor sit amet.</Card.Description>
          </Card.Header>

          <Card.Content>
            <p className="text-sm leading-6 text-muted-foreground">
              Consectetur adipiscing elit. Nullam feugiat, mauris vitae malesuada aliquam, lorem
              neque tincidunt erat, quis consequat lacus sapien sed lectus.
            </p>
          </Card.Content>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Lorem ipsum</Card.Title>

            <Card.Description>Lorem ipsum dolor sit amet.</Card.Description>
          </Card.Header>

          <Card.Content>
            <p className="text-sm leading-6 text-muted-foreground">
              Consectetur adipiscing elit. Nullam feugiat, mauris vitae malesuada aliquam, lorem
              neque tincidunt erat, quis consequat lacus sapien sed lectus.
            </p>
          </Card.Content>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Lorem ipsum</Card.Title>

            <Card.Description>Lorem ipsum dolor sit amet.</Card.Description>
          </Card.Header>

          <Card.Content>
            <p className="text-sm leading-6 text-muted-foreground">
              Consectetur adipiscing elit. Nullam feugiat, mauris vitae malesuada aliquam, lorem
              neque tincidunt erat, quis consequat lacus sapien sed lectus.
            </p>
          </Card.Content>
        </Card>
      </div>

      <Card>
        <Card.Header>
          <Card.Title>Lorem ipsum</Card.Title>

          <Card.Description>Lorem ipsum dolor sit amet.</Card.Description>
        </Card.Header>

        <Card.Content>
          <p className="text-sm leading-6 text-muted-foreground">
            Consectetur adipiscing elit. Nullam feugiat, mauris vitae malesuada aliquam, lorem neque
            tincidunt erat, quis consequat lacus sapien sed lectus.
          </p>
          <p className="text-sm leading-6 text-muted-foreground">
            Consectetur adipiscing elit. Nullam feugiat, mauris vitae malesuada aliquam, lorem neque
            tincidunt erat, quis consequat lacus sapien sed lectus.
          </p>
        </Card.Content>
      </Card>
    </Page>
  );
};

export default HomePage;
