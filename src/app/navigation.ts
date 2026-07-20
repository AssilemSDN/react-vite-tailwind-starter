// src/app/navigation.ts

import { BookOpen, Home, Layers, Tag, type LucideIcon } from "lucide-react";

export type NavigationLabelKey =
  | "navigation.home"
  | "navigation.menu1"
  | "navigation.menu2"
  | "navigation.menu3";

export interface NavigationItem {
  labelKey: NavigationLabelKey;
  to: string;
  icon: LucideIcon;
  end?: boolean;
}

export const navigation = [
  {
    labelKey: "navigation.home",
    to: "/home",
    icon: Home,
    end: true,
  },
  {
    labelKey: "navigation.menu1",
    to: "/menu-1",
    icon: BookOpen,
  },
  {
    labelKey: "navigation.menu2",
    to: "/menu-2",
    icon: Layers,
  },
  {
    labelKey: "navigation.menu3",
    to: "/menu-3",
    icon: Tag,
  },
] satisfies readonly NavigationItem[];
