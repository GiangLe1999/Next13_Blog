import { FC } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

interface Props {}

const SectionWrapper = (Component: FC<any>, idName?: string) => {
  return function HOC() {
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
        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;
