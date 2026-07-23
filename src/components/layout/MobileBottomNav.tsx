/*
  PATH src/components/layout/MobileBottomNav.tsx
*/
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { navigation } from "../../app/navigation";

const MobileBottomNav = () => {
  const { t } = useTranslation();

  return (
    <nav
      aria-label={t("sidebar.title")}
      className={[
        "fixed inset-x-0 bottom-0 z-40",
        "border-t border-gray-200 bg-white/95 shadow-[0_-4px_20px_rgb(0_0_0/0.06)]",
        "pb-[env(safe-area-inset-bottom)] backdrop-blur",
        "lg:hidden",
      ].join(" ")}
    >
      <ul
        className="max-w-xl mx-auto grid"
        style={{
          gridTemplateColumns: `repeat(${navigation.length}, minmax(0, 1fr))`,
        }}
      >
        {navigation.map(({ labelKey, to, icon: Icon, end }) => {
          const label = t(labelKey);

          return (
            <li key={to} className="min-w-0">
              <NavLink
                to={to}
                end={end}
                className={clsx(
                  "min-w-0 rounded-xl block",
                  "focus-visible:ring-blue-500 focus-visible:ring-2",
                  "focus-visible:outline-none focus-visible:ring-inset",
                )}
              >
                {({ isActive }) => (
                  <span
                    className={clsx(
                      "min-h-16 min-w-0 relative flex",
                      "gap-1 px-2 py-2 flex-col items-center justify-center",
                      "font-medium sm:text-xs text-[11px] transition-colors",
                      isActive ? "text-blue-700" : "text-gray-500 hover:text-gray-900",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={clsx(
                        "top-0 h-0.5 w-8 absolute rounded-full",
                        isActive ? "bg-blue-600" : "bg-transparent",
                      )}
                    />

                    <span
                      className={clsx(
                        "size-9 rounded-xl flex items-center justify-center",
                        isActive && "bg-blue-50",
                      )}
                    >
                      <Icon aria-hidden="true" className="size-5" />
                    </span>

                    <span className="max-w-full truncate">{label}</span>
                  </span>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileBottomNav;
