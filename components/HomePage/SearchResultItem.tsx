import { Post } from "@/types/collection";
import Link from "next/link";
import { FC } from "react";

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
    <Link href={`/${locale}/post/${result.slug}`} className="py-4 border-b">
      <h4>{result.title}</h4>
      <p>{result.description}</p>
    </Link>
  );
};

export default SearchResultItem;
