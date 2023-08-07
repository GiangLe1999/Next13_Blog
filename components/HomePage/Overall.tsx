import { FC } from "react";
import { OverallDictionary } from "./Hero";
import SearchBar from "./SearchBar";
import CategoryTags from "./CategoryTags";

interface Props {
  dictionary: OverallDictionary;
  locale: string;
}

const Overall: FC<Props> = ({ dictionary, locale }) => {
  return (
    <div className="relative flex flex-col gap-8 w-full lg:w-[50%]">
      {/* Dot & line */}
      <div className="flex gap-5">
        <div className="hidden md:flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-quaternary" />
          <div className="w-1 sm:h-80 h-40 pink-gradient"></div>
        </div>

        <div className="space-y-5 w-full">
          <div>
            <h1 className="heroHeadText">
              <span className="font-medium">{dictionary.title} </span>
              <span className="text-quaternary">Giang</span>
            </h1>

            <p className="heroSubText flex flex-col">
              <span>{dictionary.subTitle1}</span>
              <span>{dictionary.subTitle2}</span>
            </p>
          </div>

          <SearchBar locale={locale} />

          <CategoryTags locale={locale} />
        </div>
      </div>
    </div>
  );
};

export default Overall;
