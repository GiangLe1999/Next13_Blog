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
      className="py-4 border-b flex flex-col space-y-2"
    >
      <div className="flex gap-1 hover:text-quaternary">
        <h4
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: makeBold(result.title, query) }}
        ></h4>
        <NewTab2 className="w-3 h-3" />
      </div>
      <p
        className="text-sm text-gray-500"
        dangerouslySetInnerHTML={{
          __html: makeBold(result.description, query),
        }}
      />
      <div className="flex items-center text-sm italic text-gray-500 gap-2">
        <p className="">{formatDate(result.date_updated, locale)}</p>
        <div className="post-dot" />
        <p>{result.author.first_name + " " + result.author.last_name}</p>
      </div>
    </Link>
  );
};

export default SearchResultItem;
