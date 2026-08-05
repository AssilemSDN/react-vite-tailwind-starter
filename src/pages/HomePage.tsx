/*
  PATH /src/pages/HomePage.tsx
*/
import Page from "../components/layout/Page";
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
