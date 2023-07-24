import { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  idName: string;
  className?: string;
}

const ScrollIcon: FC<Props> = ({ idName, className }): JSX.Element => {
  return (
    <div className={`absolute z-10 ${className}`}>
      <a href={"#" + idName}>
        <div
          className="w-[35px] h-[64px] rounded-3xl border-4 
    border-quaternary flex justify-center items-start p-2"
        >
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-quaternary mb-1"
          ></motion.div>
        </div>
      </a>
    </div>
  );
};

export default ScrollIcon;
