"use client";

import { FC } from "react";

import { projects } from "@/config/site";
import ProjectCard from "../Common/ProjectCard";
import Title from "../Common/Title";
import SectionWrapper from "../Common/SectionWrapper";
import Subtitle from "../Common/Subtitle";

interface Props {
  dictionary: {
    title: string;
    subTitle: string;
    description: string;
  };
}

const Projects: FC<Props> = ({ dictionary }): JSX.Element => {
  return (
    <SectionWrapper idName="projects">
      <Title subTitle={dictionary.subTitle} title={dictionary.title} />

      <div className="w-full flex">
        <Subtitle content={dictionary.description} />
      </div>

      <div className="mt-8 flex flex-wrap gap-7">
        {projects.map((post, index) => (
          <ProjectCard key={index} index={index} project={post} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
