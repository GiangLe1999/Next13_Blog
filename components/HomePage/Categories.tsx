"use client";
import { FC } from "react";
import { motion } from "framer-motion";

import { textVariant } from "@/utils/motion";
import SectionWrapper from "@/hoc/SectionWrapper";
import { categories } from "@/config/site";
import BallCanvas from "./BallCanvas";
import Link from "next/link";
import ScrollIcon from "../Common/ScrollIcon";
import Title from "../Common/Title";

interface Props {}

const Categories: FC<Props> = (props): JSX.Element => {
  return (
    <>
      <Title title="Top Categories" subTitle="What I have written so far" />

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

      <ScrollIcon idName="posts" className="bottom-10 left-16" />
    </>
  );
};

export default SectionWrapper(Categories, "categories");
