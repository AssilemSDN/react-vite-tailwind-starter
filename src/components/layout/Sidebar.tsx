/*
  PATH src/components/layout/Sidebar.tsx
*/
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { navigation } from "../../app/navigation";

const Sidebar = () => {
  const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleLabel = isCollapsed ? t("sidebar.expand") : t("sidebar.collapse");

  const sidebarNavigation = navigation.filter((item) => item.showInSidebar !== false);

  return (
    <aside
      className={clsx(
        "hidden shrink-0 transition-[width] duration-300 lg:block",
        isCollapsed ? "w-20" : "w-64",
      )}
    >
      <div className="sticky top-20 rounded-xl border border-border bg-surface p-3 shadow-sm">
        <div
          className={clsx(
            "mb-3 flex items-center",
            isCollapsed ? "justify-center" : "justify-between px-2",
          )}
        >
          {!isCollapsed && (
            <h2 className="text-sm font-semibold tracking-wide text-subtle-foreground uppercase">
              {t("sidebar.title")}
            </h2>
          )}

          <button
            type="button"
            aria-expanded={!isCollapsed}
            aria-controls="sidebar-nav"
            onClick={() => setIsCollapsed((value) => !value)}
            title={toggleLabel}
            aria-label={toggleLabel}
            className={clsx(
              "flex size-8 items-center justify-center rounded-md",
              "text-subtle-foreground transition-colors",
              "hover:bg-surface-hover hover:text-foreground",
              "focus-visible:ring-2 focus-visible:outline-none",
              "focus-visible:ring-ring",
            )}
          >
            {isCollapsed ? (
              <ChevronRight aria-hidden="true" className="size-4" />
            ) : (
              <ChevronLeft aria-hidden="true" className="size-4" />
            )}
          </button>
        </div>

        <nav id="sidebar-nav" aria-label={t("sidebar.title")}>
          <ul className="space-y-1">
            {sidebarNavigation.map(({ labelKey, to, icon: Icon, end }) => {
              const label = t(labelKey);
              return (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={end}
                    title={isCollapsed ? label : undefined}
                    className={({ isActive }) =>
                      clsx(
                        "flex min-h-11 items-center rounded-lg px-3",
                        "text-sm font-medium transition-colors",
                        "focus-visible:ring-2 focus-visible:outline-none",
                        "focus-visible:ring-ring",
                        isCollapsed ? "justify-center" : "gap-3",
                        isActive
                          ? "bg-primary-soft text-primary-soft-foreground"
                          : "text-muted-foreground hover:bg-surface-hover hover:text-foreground",
                      )
                    }
                  >
                    <Icon aria-hidden="true" className="size-5 shrink-0" />

                    <span className={isCollapsed ? "sr-only" : undefined}>{label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
