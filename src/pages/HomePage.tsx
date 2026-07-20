// src/pages/HomePage.tsx

import Card from "../components/ui/Card";

const HomePage = () => {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-gray-900">Lorem ipsum</h1>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">Lorem ipsum dolor sit amet</p>
      </header>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <Card.Header>
            <Card.Title>Lorem ipsum</Card.Title>

            <Card.Description>Lorem ipsum dolor sit amet.</Card.Description>
          </Card.Header>

          <Card.Content>
            <p className="text-sm leading-6 text-gray-600">
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
            <p className="text-sm leading-6 text-gray-600">
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
            <p className="text-sm leading-6 text-gray-600">
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
          <p className="text-sm leading-6 text-gray-600">
            Consectetur adipiscing elit. Nullam feugiat, mauris vitae malesuada aliquam, lorem neque
            tincidunt erat, quis consequat lacus sapien sed lectus.
          </p>
          <p className="text-sm leading-6 text-gray-600">
            Consectetur adipiscing elit. Nullam feugiat, mauris vitae malesuada aliquam, lorem neque
            tincidunt erat, quis consequat lacus sapien sed lectus.
          </p>
        </Card.Content>
      </Card>
    </section>
  );
};

export default HomePage;
