import { FC } from "react";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "@/utils/motion";
import { services } from "@/config/site";
import ServiceCard from "./ServiceCard";
import SectionWrapper from "@/hoc/SectionWrapper";
import ScrollIcon from "../Common/ScrollIcon";

interface Props {}

const Overview: FC<Props> = (props): JSX.Element => {
  return (
    <div className="relative top-[70px]">
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">Introduction</p>
        <h1 className="sectionHeadText">Overview</h1>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="sectionDescription"
      >
        I&apos;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Next.js and Node.js.{" "}
        <br />
        I&apos;m a quick learner and collaborate closely with clients to create
        efficient, scalable, and user-friendly solutions that solve real-world
        problems. <br />
        When I am not writing code, I&apos;m probably spending my time either
        reading a book, working on a blog post or traveling.
      </motion.p>

      <div className="mt-12 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            service={service}
          ></ServiceCard>
        ))}
      </div>

      <ScrollIcon idName="experience" className="top-0 right-0" />
    </div>
  );
};

export default SectionWrapper(Overview);
