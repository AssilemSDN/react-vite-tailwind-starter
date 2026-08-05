/*
  PATH src/app/navigation.ts
*/

import { Home, LayoutDashboard, type LucideIcon } from "lucide-react";
import { lazy, type ComponentType } from "react";

import HomePage from "../pages/HomePage";
import { routes } from "./routes";

const ExamplePage = lazy(() => import("../pages/ExamplePage"));

export interface NavigationItem {
  label: string;
  to: string;
  icon: LucideIcon;
  Component: ComponentType;
  end?: boolean;
  showInSidebar?: boolean;
  showInBottomNav?: boolean;
}

export const navigation = [
  {
    label: "Accueil",
    to: routes.home,
    icon: Home,
    Component: HomePage,
    end: true,
  },
  {
    label: "Exemple",
    to: routes.example,
    icon: LayoutDashboard,
    Component: ExamplePage,
  },
] satisfies readonly NavigationItem[];
