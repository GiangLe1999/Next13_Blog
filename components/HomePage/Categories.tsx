"use client";

import { FC } from "react";
import Link from "next/link";

import { categories } from "@/config/site";
import BallCanvas from "./BallCanvas";
import Title from "../Common/Title";
import SectionWrapper from "../Common/SectionWrapper";

interface Props {
  dictionary: { title: string; subTitle: string };
}

const Categories: FC<Props> = ({ dictionary }): JSX.Element => {
  return (
    <SectionWrapper idName="categories">
      <Title title={dictionary.title} subTitle={dictionary.subTitle} />

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col items-center">
            <div className="w-28 h-28">
              <BallCanvas icon={category.icon} />
            </div>

            <Link
              className="capitalize text-white font-medium dark:text-neutral-500"
              href="/"
            >
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Categories;
