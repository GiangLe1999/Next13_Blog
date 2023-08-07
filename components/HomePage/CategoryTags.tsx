import { categories } from "@/config/site";
import Link from "next/link";
import { FC } from "react";
import NextImage from "../Common/NextImage";

interface Props {
  locale: string;
}

const CategoryTags: FC<Props> = ({ locale }): JSX.Element => {
  return (
    <div>
      <p className="text-sm text-gray-400">
        {locale === "en" ? "Common categories" : "Chủ đề thường được quan tâm"}
      </p>

      <div className="flex flex-wrap gap-3 mt-3">
        {categories.slice(0, 5).map((category, index) => (
          <Link
            style={{ color: category.color }}
            className="text-white text-center py-2 px-3 rounded-md font-bold dark:bg-white-100
            header-gradient dark:bg-none text-xs shadow flex items-center gap-1 hover:scale-105 transition"
            href={`${locale}/${category.link}`}
            key={index}
          >
            <div className="relative w-5 h-5">
              <NextImage src={category.icon} alt={category.name} priority />
            </div>
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryTags;
