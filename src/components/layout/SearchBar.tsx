import { Search } from "lucide-react";
import { useState, type FormEvent } from "react";

import { cn } from "../../lib/cn";
import Input from "../ui/Input";

export interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
  clearOnSubmit?: boolean;
  disabled?: boolean;
}

const SearchBar = ({
  onSearch,
  placeholder = "Rechercher...",
  className,
  clearOnSubmit = false,
  disabled = false,
}: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedQuery = searchQuery.trim();

    if (!normalizedQuery) {
      return;
    }

    onSearch(normalizedQuery);

    if (clearOnSubmit) {
      setSearchQuery("");
    }
  };

  return (
    <search className={cn("w-full max-w-md", className)}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-gray-400"
          />

          <Input
            type="search"
            name="search"
            aria-label={placeholder}
            placeholder={placeholder}
            value={searchQuery}
            disabled={disabled}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="pr-4 pl-10"
          />
        </div>
      </form>
    </search>
  );
};

export default SearchBar;
