/*
  PATH src/components/layout/Header.tsx
*/

import { Box, Plus } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { routes } from "../../app/routes";
import Button from "../ui/Button";
import SearchBar from "./SearchBar";
import SettingsButton from "./settings/SettingsButton";
import SettingsMenu from "./settings/SettingsMenu";

export interface HeaderProps {
  title: string;
  searchPlaceholder: string;
  primaryActionLabel: string;
  onSearch?: (query: string) => void;
  onPrimaryAction?: () => void;
}

const Header = ({
  title,
  searchPlaceholder,
  primaryActionLabel,
  onSearch,
  onPrimaryAction,
}: HeaderProps) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const settingsContainerRef = useRef<HTMLDivElement>(null);
  const settingsButtonRef = useRef<HTMLButtonElement>(null);
  const settingsMenuRef = useRef<HTMLElement>(null);

  const closeSettings = useCallback((restoreFocus = false) => {
    setIsSettingsOpen(false);

    if (restoreFocus) {
      requestAnimationFrame(() => {
        settingsButtonRef.current?.focus();
      });
    }
  }, []);

  useEffect(() => {
    if (!isSettingsOpen) {
      return;
    }

    const menu = settingsMenuRef.current;

    const firstFocusableElement = menu?.querySelector<HTMLElement>(
      [
        "button:not([disabled])",
        "select:not([disabled])",
        "input:not([disabled])",
        "textarea:not([disabled])",
        "a[href]",
        '[tabindex]:not([tabindex="-1"])',
      ].join(","),
    );

    if (firstFocusableElement) {
      firstFocusableElement.focus();
    } else {
      menu?.focus();
    }
  }, [isSettingsOpen]);

  useEffect(() => {
    if (!isSettingsOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const container = settingsContainerRef.current;

      if (container && !container.contains(event.target as Node)) {
        closeSettings();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      closeSettings(true);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSettingsOpen, closeSettings]);

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-surface">
      <div
        className={[
          "grid min-h-16 grid-cols-[auto_minmax(0,1fr)_auto] items-center",
          "gap-2 px-4 py-3 sm:gap-4 sm:px-6",
        ].join(" ")}
      >
        {/* Left */}
        <div className="min-w-0">
          <Link
            to={routes.home}
            aria-label={title}
            className={[
              "group flex min-w-0 items-center gap-3 rounded-lg",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-ring focus-visible:ring-offset-2",
              "focus-visible:ring-offset-surface",
            ].join(" ")}
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Box aria-hidden="true" className="size-5" />
            </div>

            <span
              className={[
                "hidden truncate text-xl font-semibold text-foreground sm:block",
                "sm:max-w-32 md:max-w-48 lg:max-w-none",
              ].join(" ")}
            >
              {title}
            </span>
          </Link>
        </div>

        {/* Center */}
        <div className="min-w-0">
          {onSearch && (
            <SearchBar
              onSearch={onSearch}
              placeholder={searchPlaceholder}
              className="mx-auto max-w-xl"
            />
          )}
        </div>

        {/* Right */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <Button
            type="button"
            size="sm"
            className="shrink-0"
            onClick={onPrimaryAction}
            leftIcon={<Plus aria-hidden="true" className="size-4" />}
          >
            <span className="sr-only sm:not-sr-only">{primaryActionLabel}</span>
          </Button>

          <div
            ref={settingsContainerRef}
            className="relative shrink-0"
            onBlur={(event) => {
              const nextFocusedElement = event.relatedTarget;

              if (
                nextFocusedElement instanceof Node &&
                event.currentTarget.contains(nextFocusedElement)
              ) {
                return;
              }

              closeSettings();
            }}
          >
            <SettingsButton
              ref={settingsButtonRef}
              isOpen={isSettingsOpen}
              onClick={() => {
                setIsSettingsOpen((currentValue) => !currentValue);
              }}
            />

            <SettingsMenu ref={settingsMenuRef} isOpen={isSettingsOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
