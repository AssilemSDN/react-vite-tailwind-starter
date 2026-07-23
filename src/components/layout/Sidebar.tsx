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

  return (
    <aside
      className={clsx(
        "lg:block hidden shrink-0 transition-[width] duration-300",
        isCollapsed ? "w-20" : "w-64",
      )}
    >
      <div className="top-20 rounded-xl border-gray-200 bg-white p-3 shadow-sm sticky border">
        <div
          className={clsx(
            "mb-3 flex items-center",
            isCollapsed ? "justify-center" : "px-2 justify-between",
          )}
        >
          {!isCollapsed && (
            <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
              {t("sidebar.title")}
            </h2>
          )}

          <button
            type="button"
            onClick={() => setIsCollapsed((value) => !value)}
            title={toggleLabel}
            aria-label={toggleLabel}
            className={clsx(
              "size-8 rounded-md flex items-center justify-center",
              "text-gray-500 transition-colors",
              "hover:bg-gray-100 hover:text-gray-900",
              "focus-visible:ring-2 focus-visible:outline-none",
              "focus-visible:ring-blue-500",
            )}
          >
            {isCollapsed ? (
              <ChevronRight aria-hidden="true" className="size-4" />
            ) : (
              <ChevronLeft aria-hidden="true" className="size-4" />
            )}
          </button>
        </div>

        <nav aria-label={t("sidebar.title")}>
          <ul className="space-y-1">
            {navigation.map(({ labelKey, to, icon: Icon, end }) => {
              const label = t(labelKey);
              return (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={end}
                    title={isCollapsed ? label : undefined}
                    className={({ isActive }) =>
                      clsx(
                        "min-h-11 rounded-lg px-3 flex items-center",
                        "text-sm font-medium transition-colors",
                        "focus-visible:ring-2 focus-visible:outline-none",
                        "focus-visible:ring-blue-500",
                        isCollapsed ? "justify-center" : "gap-3",
                        isActive
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                      )
                    }
                  >
                    <Icon aria-hidden="true" className="size-5 shrink-0" />

                    {!isCollapsed && <span>{label}</span>}
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
