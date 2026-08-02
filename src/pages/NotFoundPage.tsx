/*
  PATH src/pages/NotFoundPage.tsx
*/

import { ArrowLeft, FileQuestion, Home } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { routes } from "../app/routes";
import Page from "../components/layout/Page";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const NotFoundPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useDocumentTitle("pages.notFound.title");

  return (
    <Page>
      <Page.Header title={t("pages.notFound.title")} />

      <Card>
        <Card.Content className="flex min-h-80 flex-col items-center justify-center text-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-surface-muted">
            <FileQuestion aria-hidden="true" className="size-6 text-subtle-foreground" />
          </div>

          <p className="mt-4 text-sm font-semibold tracking-wider text-primary uppercase">
            {t("pages.notFound.code")}
          </p>

          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            {t("pages.notFound.description")}
          </p>

          <div className="mt-6 flex w-full flex-col-reverse justify-center gap-3 sm:w-auto sm:flex-row">
            <Button
              variant="secondary"
              leftIcon={<ArrowLeft aria-hidden="true" className="size-4" />}
              onClick={() => navigate(-1)}
            >
              {t("pages.notFound.back")}
            </Button>

            <Button
              leftIcon={<Home aria-hidden="true" className="size-4" />}
              onClick={() => navigate(routes.home)}
            >
              {t("pages.notFound.home")}
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Page>
  );
};

export default NotFoundPage;
