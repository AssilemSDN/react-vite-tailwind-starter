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
          "grid min-h-16 items-center gap-4 px-4 py-3 sm:px-6",
          "grid-cols-[1fr_minmax(16rem,40rem)_1fr]",
        ].join(" ")}
      >
        {/* Left */}
        <div className="col-start-1 row-start-1 min-w-0 justify-self-start">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Box aria-hidden="true" className="size-5" />
            </div>

            <h1 className="hidden truncate text-xl font-semibold text-gray-900 sm:block">
              {title}
            </h1>
          </div>
        </div>

        {/* Center */}
        <div
          className={[
            "col-span-2 row-start-2 w-full min-w-0",
            "lg:col-span-1 lg:col-start-2 lg:row-start-1",
          ].join(" ")}
        >
          {onSearch && (
            <SearchBar onSearch={onSearch} placeholder={searchPlaceholder} className="max-w-xl" />
          )}
        </div>

        {/* Right */}
        <div
          className={[
            "col-start-2 row-start-1 flex items-center justify-self-end gap-2",
            "lg:col-start-3",
          ].join(" ")}
        >
          <Button
            type="button"
            size="sm"
            onClick={onPrimaryAction}
            leftIcon={<Plus aria-hidden="true" className="size-4" />}
          >
            <span className="hidden sm:inline">{primaryActionLabel}</span>
          </Button>
          <div ref={settingsContainerRef} className="relative">
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
