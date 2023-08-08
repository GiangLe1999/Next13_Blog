"use client";

import { FC, useState, useEffect, FormEvent } from "react";
import { Magnifier, Spinner } from "../Assets/Icons";
import axios from "axios";
import { Post } from "@/types/collection";
import SearchResults from "./SearchResults";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface Props {
  locale: string;
}

const SearchBar: FC<Props> = ({ locale }): JSX.Element => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Post[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timerId = setTimeout(async () => {
      if (query.length >= 2) {
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

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (query.length >= 2) {
      router.push(`/${locale}/browse?search=${query}`);
    } else {
      Swal.fire({
        title: "Oops...",
        text:
          locale === "en"
            ? "Please enter a search string at least 2 characters long.."
            : "Vui lòng nhập ít nhất 2 kí tự để thực hiện tìm kiếm",
        confirmButtonColor: "#c9005b",
        confirmButtonText: locale === "end" ? "Continue" : "Tiếp tục",
        icon: "warning",
        iconColor: "#c9005b",
      });
    }
  };

  return (
    <form className="flex items-center h-14 relative" onSubmit={submitHandler}>
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
        {loading ? (
          <Spinner className="text-white w-6 h-6 animate-spin" />
        ) : (
          <Magnifier className="text-white w-6 h-6" />
        )}
      </button>
    </form>
  );
};

export default SearchBar;
