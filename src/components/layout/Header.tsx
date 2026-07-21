/*
  PATH src/components/layout/Header.tsx
*/
import { Box, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import Button from "../ui/Button";
import SearchBar from "./SearchBar";
import SettingsButton from "./settings/SettingsButton";
import SettingsMenu from "./settings/SettingsMenu";

export interface HeaderProps {
  title?: string;
  searchPlaceholder?: string;
  primaryActionLabel?: string;
  onSearch?: (query: string) => void;
  onPrimaryAction?: () => void;
}

const Header = ({
  title = "My Project",
  searchPlaceholder = "Search...",
  primaryActionLabel = "Button 1",
  onSearch,
  onPrimaryAction,
}: HeaderProps) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const settingsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const container = settingsContainerRef.current;

      if (container && !container.contains(event.target as Node)) {
        setIsSettingsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSettingsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);

      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white">
      <div
        className={[
          "grid min-h-16 grid-cols-[auto_minmax(0,1fr)_auto] items-center",
          "gap-2 px-4 py-3 sm:gap-4 sm:px-6",
        ].join(" ")}
      >
        {/* Left */}
        <div className="min-w-0">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Box aria-hidden="true" className="size-5" />
            </div>

            <h1
              className={[
                "hidden truncate text-xl font-semibold text-gray-900 sm:block",
                "sm:max-w-32 md:max-w-48 lg:max-w-none",
              ].join(" ")}
            >
              {title}
            </h1>
          </div>
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

          <div ref={settingsContainerRef} className="relative shrink-0">
            <SettingsButton
              isOpen={isSettingsOpen}
              onClick={() => setIsSettingsOpen((currentValue) => !currentValue)}
            />

            <SettingsMenu isOpen={isSettingsOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
