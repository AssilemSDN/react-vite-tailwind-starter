/*
  PATH /src/pages/ExamplePage
*/
import PlaceholderPage from "../components/layout/PlaceholderPage";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const ExamplePage = () => {
  useDocumentTitle("Exemple");

  return <PlaceholderPage title="Exemple" description="Cette page est en construction." />;
};

export default ExamplePage;
