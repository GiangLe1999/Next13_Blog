import { Category } from "@/types/collection";
import Link from "next/link";
import { FC } from "react";

interface Props {
  categories: Category[];
  locale: string;
}

const CommonTags: FC<Props> = ({ categories, locale }): JSX.Element => {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <Link
          href={`/${locale}/${category.slug}`}
          style={{ backgroundColor: category.color }}
          className="rounded-md px-2 py-1 text-white hover:scale-105 transition"
          key={category.id}
        >
          {category.title}
        </Link>
      ))}
    </div>
  );
};

export default CommonTags;
