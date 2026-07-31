/*
  PATH src/app/App.tsx
*/
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "../components/layout/Layout";
import NotFoundPage from "../pages/NotFoundPage";
import { navigation } from "./navigation";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/home" replace />} />

        {navigation.map(({ to, Component }) => (
          <Route key={to} path={to} element={<Component />} />
        ))}

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
