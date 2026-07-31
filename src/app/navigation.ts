import { lazy, type ComponentType } from "react";
import { BookOpen, Home, Layers, Tag, type LucideIcon } from "lucide-react";

const HomePage = lazy(() => import("../pages/HomePage"));
const Menu1Page = lazy(() => import("../pages/Menu1Page"));
const Menu2Page = lazy(() => import("../pages/Menu2Page"));
const Menu3Page = lazy(() => import("../pages/Menu3Page"));

export type NavigationLabelKey =
  | "navigation.home"
  | "navigation.menu1"
  | "navigation.menu2"
  | "navigation.menu3";

export interface NavigationItem {
  labelKey: NavigationLabelKey;
  to: string;
  icon: LucideIcon;
  Component: ComponentType;
  end?: boolean;
}

export const navigation = [
  {
    labelKey: "navigation.home",
    to: "/home",
    icon: Home,
    Component: HomePage,
    end: true,
  },
  {
    labelKey: "navigation.menu1",
    to: "/menu-1",
    icon: BookOpen,
    Component: Menu1Page,
  },
  {
    labelKey: "navigation.menu2",
    to: "/menu-2",
    icon: Layers,
    Component: Menu2Page,
  },
  {
    labelKey: "navigation.menu3",
    to: "/menu-3",
    icon: Tag,
    Component: Menu3Page,
  },
] satisfies readonly NavigationItem[];