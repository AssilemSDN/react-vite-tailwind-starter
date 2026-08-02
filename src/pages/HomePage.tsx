/*
  PATH /src/pages/HomePage.tsx
*/
import { useTranslation } from "react-i18next";

import Page from "../components/layout/Page";
import Card from "../components/ui/Card";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const HomePage = () => {
  const { t } = useTranslation();
  useDocumentTitle("pages.home.title");

  return (
    <Page>
      <Page.Header title={t("pages.home.title")} description={t("pages.home.description")} />
      <div className="grid gap-4 lg:grid-cols-3">
        <Card to={t("pages.home.firstCard.to")}>
          <Card.Header>
            <Card.Title>{t("pages.home.firstCard.title")}</Card.Title>
            <Card.Description>{t("pages.home.firstCard.subtitle")}</Card.Description>
          </Card.Header>
          <Card.Content>
            <p className="text-sm leading-6 text-muted-foreground">
              {t("pages.home.firstCard.description")}
            </p>
          </Card.Content>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>{t("pages.home.secondCard.title")}</Card.Title>
            <Card.Description>{t("pages.home.secondCard.subtitle")}</Card.Description>
          </Card.Header>
          <Card.Content>
            <p className="text-sm leading-6 text-muted-foreground">
              {t("pages.home.secondCard.description")}
            </p>
          </Card.Content>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>{t("pages.home.thirdCard.title")}</Card.Title>
            <Card.Description>{t("pages.home.thirdCard.subtitle")}</Card.Description>
          </Card.Header>
          <Card.Content>
            <p className="text-sm leading-6 text-muted-foreground">
              {t("pages.home.thirdCard.description")}
            </p>
          </Card.Content>
        </Card>
      </div>

      <Card>
        <Card.Header>
          <Card.Title>{t("pages.home.horizontalCard.title")}</Card.Title>
          <Card.Description>{t("pages.home.horizontalCard.subtitle")}</Card.Description>
        </Card.Header>
        <Card.Content>
          <p className="text-sm leading-6 text-muted-foreground">
            {t("pages.home.horizontalCard.description")}
          </p>
        </Card.Content>
      </Card>
    </Page>
  );
};

export default HomePage;
