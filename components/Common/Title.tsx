"use client";

import { FC } from "react";
import { motion } from "framer-motion";

import { textVariant } from "@/utils/motion";

interface Props {
  subTitle: string;
  title: string;
  count?: string;
  isCategory?: Boolean;
}

const Title: FC<Props> = ({
  subTitle,
  title,
  count,
  isCategory,
}): JSX.Element => {
  return (
    <motion.div
      className={isCategory && `flex justify-between mb-4`}
      variants={textVariant()}
    >
      <div className="flex flex-col">
        <p className="sectionSubText">{subTitle}</p>
        <h1 className="sectionHeadText">{title}</h1>
      </div>

      {isCategory && (
        <span className="flex self-end mb-2 font-semibold text-white dark:text-primary text-base">
          {count}
        </span>
      )}
    </motion.div>
  );
};

export default Title;
