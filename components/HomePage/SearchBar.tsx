"use client";

import { FC, useState, useEffect } from "react";
import { Magnifier } from "../Assets/Icons";
import axios from "axios";
import { Post } from "@/types/collection";
import SearchResults from "./SearchResults";

interface Props {
  locale: string;
}

const SearchBar: FC<Props> = ({ locale }): JSX.Element => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Post[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(async () => {
      if (query.length > 0) {
        setLoading(true);
        const { data } = await axios(
          `/api/search?query=${query}&locale=${locale}&limit=5`
        );
        setResults(data);
        setLoading(false);
      }
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [query, locale]);

  return (
    <form className="flex items-center h-14 relative">
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="flex-1 dark:bg-white-100 header-gradient dark:bg-none h-full p-4 text-white dark:text-gray-600 border border-transparent
        focus:border dark:focus:border-quaternary focus:border-white focus:outline-none focus:border-r-transparent rounded-l-md"
        type="text"
        placeholder={
          locale === "en"
            ? "Search for all articles (e.g. CS50, ReactJS)"
            : "Tìm kiếm bài viết (v.d CS50, ReactJS)"
        }
        onBlur={() => setShowSearchResults(false)}
        onFocus={() => setShowSearchResults(true)}
      />
      <SearchResults
        results={results}
        showSearchResults={showSearchResults}
        query={query}
        loading={loading}
        locale={locale}
      />
      <button
        type="submit"
        className="w-14 h-full grid place-items-center bg-quaternary cursor-pointer rounded-r-md"
      >
        <Magnifier className="text-white w-6 h-6" />
      </button>
    </form>
  );
};

export default SearchBar;
