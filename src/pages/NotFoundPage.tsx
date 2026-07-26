/*
  PATH src/pages/NotFoundPage.tsx
*/
import { ArrowLeft, FileQuestion, Home } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const NotFoundPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useDocumentTitle("pages.notFound.title");

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-foreground">{t("pages.notFound.title")}</h1>
      </header>

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
              onClick={() => navigate("/home")}
            >
              {t("pages.notFound.home")}
            </Button>
          </div>
        </Card.Content>
      </Card>
    </section>
  );
};

export default NotFoundPage;
