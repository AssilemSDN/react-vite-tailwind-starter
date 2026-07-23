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
        "border-t border-border bg-surface/95 shadow-[0_-4px_20px_var(--color-shadow)]",
        "pb-[env(safe-area-inset-bottom)] backdrop-blur",
        "lg:hidden",
      ].join(" ")}
    >
      <ul
        className="mx-auto grid max-w-xl"
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
                  "block min-w-0 rounded-xl",
                  "focus-visible:ring-2 focus-visible:ring-ring",
                  "focus-visible:outline-none focus-visible:ring-inset",
                )}
              >
                {({ isActive }) => (
                  <span
                    className={clsx(
                      "relative flex min-h-16 min-w-0",
                      "flex-col items-center justify-center gap-1 px-2 py-2",
                      "text-[11px] font-medium transition-colors sm:text-xs",
                      isActive
                        ? "text-primary-soft-foreground"
                        : "text-subtle-foreground hover:text-foreground",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={clsx(
                        "absolute top-0 h-0.5 w-8 rounded-full",
                        isActive ? "bg-primary" : "bg-transparent",
                      )}
                    />

                    <span
                      className={clsx(
                        "flex size-9 items-center justify-center rounded-xl",
                        isActive && "bg-primary-soft",
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
