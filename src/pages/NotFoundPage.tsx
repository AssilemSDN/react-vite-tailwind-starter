/*
  PATH src/pages/NotFoundPage.tsx
*/

import { ArrowLeft, FileQuestion, Home } from "lucide-react";
import { useNavigate } from "react-router";

import { routes } from "../app/routes";
import Page from "../components/layout/Page";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useDocumentTitle("Page introuvable");

  const canGoBack = Number(window.history.state?.idx ?? 0) > 0;

  return (
    <Page>
      <Page.Header title="Page introuvable" />

      <Card>
        <Card.Content className="flex min-h-80 flex-col items-center justify-center text-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-surface-muted">
            <FileQuestion aria-hidden="true" className="size-6 text-subtle-foreground" />
          </div>

          <p className="mt-4 text-sm font-semibold tracking-wider text-primary uppercase">404</p>

          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            La page que vous recherchez n'existe pas.
          </p>

          <div className="mt-6 flex w-full flex-col-reverse justify-center gap-3 sm:w-auto sm:flex-row">
            {canGoBack && (
              <Button
                variant="secondary"
                leftIcon={<ArrowLeft aria-hidden="true" className="size-4" />}
                onClick={() => navigate(-1)}
              >
                Retour
              </Button>
            )}

            <Button to={routes.home} leftIcon={<Home aria-hidden="true" className="size-4" />}>
              Page d'accueil
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Page>
  );
};

export default NotFoundPage;
