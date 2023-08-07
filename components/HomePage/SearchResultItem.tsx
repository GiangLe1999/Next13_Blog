import { Post } from "@/types/collection";
import Link from "next/link";
import { FC } from "react";
import { makeBold } from "../Common/MakeBold";
import { NewTab2 } from "../Assets/Icons";
import { formatDate } from "@/lib/helpers";

interface Props {
  result: Post;
  locale: string;
  query: string;
}

const SearchResultItem: FC<Props> = ({
  result,
  locale,
  query,
}): JSX.Element => {
  return (
    <Link
      href={`/${locale}/post/${result.slug}`}
      className="p-4 border-b flex flex-col space-y-2 group hover:dark:bg-slate-50 hover:bg-[#2b2b2b]"
    >
      <div className="flex justify-between gap-1">
        <h4
          className="text-lg text-white dark:text-gray-600 group-hover:text-quaternary"
          dangerouslySetInnerHTML={{
            __html: makeBold(
              result.title.length > 54
                ? result.title.substring(0, 54) + "..."
                : result.title,
              query
            ),
          }}
        ></h4>
        <NewTab2 className="w-4 h-4 text-white dark:text-gray-600 group-hover:text-quaternary" />
      </div>
      <p
        className="text-sm dark:text-gray-500 text-white"
        dangerouslySetInnerHTML={{
          __html: makeBold(
            result.description.length > 70
              ? result.description.substring(0, 70) + "..."
              : result.description,
            query
          ),
        }}
      />
      <div className="flex items-center text-xs italic dark:text-gray-500 text-white gap-2">
        <p className="">{formatDate(result.date_updated, locale)}</p>
        <div className="post-dot" />
        <p>{result.author.first_name + " " + result.author.last_name}</p>
      </div>
    </Link>
  );
};

export default SearchResultItem;
