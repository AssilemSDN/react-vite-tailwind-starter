/*
  PATH src/app/App.tsx
*/
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
import Menu1Page from "../pages/Menu1Page";
import Menu2Page from "../pages/Menu2Page";
import Menu3Page from "../pages/Menu3Page";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/home" replace />} />

        <Route path="home" element={<HomePage />} />
        <Route path="menu-1" element={<Menu1Page />} />
        <Route path="menu-2" element={<Menu2Page />} />
        <Route path="menu-3" element={<Menu3Page />} />
      </Route>

      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default App;
