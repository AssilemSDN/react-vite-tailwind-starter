import { BookOpen, Home, Layers, Tag, type LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

import HomePage from "../pages/HomePage";
import Menu1Page from "../pages/Menu1Page";
import Menu2Page from "../pages/Menu2Page";
import Menu3Page from "../pages/Menu3Page";

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
