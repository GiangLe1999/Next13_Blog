"use client";

import { Post } from "@/types/collection";
import { FC } from "react";
import SearchResultItem from "./SearchResultItem";
import { useRouter } from "next/navigation";

interface Props {
  results: Post[];
  showSearchResults: boolean;
  query: string;
  loading: boolean;
  locale: string;
}

const SearchResults: FC<Props> = ({
  results,
  showSearchResults,
  query,
  loading,
  locale,
}): JSX.Element => {
  const router = useRouter();

  return (
    <div
      className="absolute w-full top-[60px] left-0 dark:bg-white header-gradient dark:bg-none
      shadow-xl z-[9999] rounded-md origin-top"
      style={{
        transform:
          results.length >= 0 && showSearchResults
            ? "scale3d(1,1,1)"
            : "scale3d(1,0,1)",
        transition: "all 0.2s",
      }}
    >
      {!loading && results.length > 0 && (
        <>
          <div className="search-results-header rounded-t-md">Results</div>

          <div>
            {results.map((result) => (
              <SearchResultItem
                key={result.id}
                result={result}
                locale={locale}
                query={query}
              />
            ))}
          </div>

          <div
            onMouseDown={() => router.push(`/${locale}/browse?search=${query}`)}
            className="search-results-header rounded-b-md hover:underline cursor-pointer"
          >
            See all results
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResults;
