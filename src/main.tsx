/*
  PATH /src/main.tsx
*/

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "./index.css";

import App from "./app/App";
import { ThemeProvider } from "./theme/ThemeProvider";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Element #root not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
