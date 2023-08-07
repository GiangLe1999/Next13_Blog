import { Post } from "@/types/collection";
import Link from "next/link";
import { FC } from "react";
import SearchResultItem from "./SearchResultItem";

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

          <div className="pt-0 px-4 pb-2">
            {results.map((result) => (
              <SearchResultItem
                key={result.id}
                result={result}
                locale={locale}
                query={query}
              />
            ))}
          </div>

          <Link
            href={`/browse?search=${query}`}
            className="search-results-header rounded-b-md hover:underline"
          >
            See all results
          </Link>
        </>
      )}
    </div>
  );
};

export default SearchResults;
