"use client";

import { FC } from "react";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "@/utils/motion";
import SectionWrapper from "@/hoc/SectionWrapper";
import { projects } from "@/config/site";
import ProjectCard from "../Common/ProjectCard";
import Title from "../Common/Title";

interface Props {}

const Projects: FC<Props> = (props): JSX.Element => {
  return (
    <>
      <Title subTitle="My work" title="Projects" />

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 0.1)}
          className="sectionDescription"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-8 flex flex-wrap gap-7">
        {projects.map((post, index) => (
          <ProjectCard key={index} index={index} project={post} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "posts");
