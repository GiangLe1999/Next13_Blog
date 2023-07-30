"use client";

import { FC, ReactNode } from "react";

import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

interface Props {
  content: string;
}

const Subtitle: FC<Props> = ({ content }): JSX.Element => {
  return (
    <motion.p variants={textVariant()} className="sectionDescription">
      {content}
    </motion.p>
  );
};

export default Subtitle;
