"use client";

import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  idName?: string;
}

const SectionWrapper: FC<Props> = ({ children, idName }): JSX.Element => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="padding max-w-7xl mx-auto relative z-0"
    >
      {idName && (
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
      )}
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
