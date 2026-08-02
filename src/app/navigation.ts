/*
  PATH src/app/navigation.ts
*/

import { BookOpen, Blocks, Home, Layers, Tag, type LucideIcon } from "lucide-react";
import { lazy, type ComponentType } from "react";

import HomePage from "../pages/HomePage";
import { routes } from "./routes";

const Menu1Page = lazy(() => import("../pages/Menu1Page"));
const Menu2Page = lazy(() => import("../pages/Menu2Page"));
const Menu3Page = lazy(() => import("../pages/Menu3Page"));
const ComponentsPage = lazy(() => import("../pages/ComponentsPage"));

export type NavigationLabelKey =
  | "navigation.home"
  | "navigation.menu1"
  | "navigation.menu2"
  | "navigation.menu3"
  | "navigation.components";

export interface NavigationItem {
  labelKey: NavigationLabelKey;
  to: string;
  icon: LucideIcon;
  Component: ComponentType;
  end?: boolean;
  showInSidebar?: boolean;
  showInBottomNav?: boolean;
}

export const navigation = [
  {
    labelKey: "navigation.home",
    to: routes.home,
    icon: Home,
    Component: HomePage,
    end: true,
  },
  {
    labelKey: "navigation.menu1",
    to: routes.menu1,
    icon: BookOpen,
    Component: Menu1Page,
  },
  {
    labelKey: "navigation.menu2",
    to: routes.menu2,
    icon: Layers,
    Component: Menu2Page,
  },
  {
    labelKey: "navigation.menu3",
    to: routes.menu3,
    icon: Tag,
    Component: Menu3Page,
  },
  {
    labelKey: "navigation.components",
    to: routes.components,
    icon: Blocks,
    Component: ComponentsPage,
    showInBottomNav: false,
    showInSidebar: false,
  },
] satisfies readonly NavigationItem[];
