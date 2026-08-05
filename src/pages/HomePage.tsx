/*
  PATH /src/pages/HomePage.tsx
*/
import { routes } from "../app/routes";
import Page from "../components/layout/Page";
import Card from "../components/ui/Card";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const HomePage = () => {
  useDocumentTitle("Accueil");

  return (
    <Page>
      <Page.Header title="Accueil" description="Bienvenue sur la page d'accueil." />
    </Page>
  );
};

export default HomePage;
