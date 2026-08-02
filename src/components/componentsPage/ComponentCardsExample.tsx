/*
  PATH src/components/componentsPage/ComponentCardsExample.tsx
*/

import { useTranslation } from "react-i18next";

import { routes } from "../../app/routes";
import Button from "../ui/Button";
import Card from "../ui/Card";
import ComponentExampleSection from "./ComponentExampleSection";

const ComponentCardsExample = () => {
  const { t } = useTranslation();

  return (
    <ComponentExampleSection title={t("pages.components.sections.cards")}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card>
          <Card.Header>
            <Card.Title>{t("pages.components.cards.static.title")}</Card.Title>
            <Card.Description>{t("pages.components.cards.static.description")}</Card.Description>
          </Card.Header>

          <Card.Content>
            <p className="text-sm text-subtle-foreground">
              {t("pages.components.cards.static.content")}
            </p>
          </Card.Content>

          <Card.Footer>
            <Button variant="secondary" size="sm">
              {t("pages.components.cards.static.action")}
            </Button>
          </Card.Footer>
        </Card>

        <Card to={routes.home}>
          <Card.Header>
            <Card.Title>{t("pages.components.cards.clickable.title")}</Card.Title>
            <Card.Description>{t("pages.components.cards.clickable.description")}</Card.Description>
          </Card.Header>

          <Card.Content>
            <p className="text-sm text-subtle-foreground">
              {t("pages.components.cards.clickable.content")}
            </p>
          </Card.Content>
        </Card>
      </div>
    </ComponentExampleSection>
  );
};

export default ComponentCardsExample;
