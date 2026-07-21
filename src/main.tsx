/*
  PATH /src/main.tsx
*/

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./i18n";

import "./index.css";

import App from "./app/App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Element #root not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
