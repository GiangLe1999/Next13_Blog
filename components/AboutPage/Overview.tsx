import { FC } from "react";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "@/utils/motion";
import { services } from "@/config/site";
import ServiceCard from "./ServiceCard";
import ScrollIcon from "../Common/ScrollIcon";
import SectionWrapper from "../Common/SectionWrapper";
import Subtitle from "../Common/Subtitle";
import Title from "../Common/Title";

interface Props {}

const Overview: FC<Props> = (props): JSX.Element => {
  return (
    <SectionWrapper>
      <div className="relative top-[70px]">
        <Title title="Overview" subTitle="Introduction" />

        <Subtitle
          content="Iam a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Next.js and
          Node.js. <br />
          Iam a quick learner and collaborate closely with clients to create
          efficient, scalable, and user-friendly solutions that solve real-world
          problems. <br />
          When I am not writing code, Iam probably spending my time either
          reading a book, working on a blog post or traveling."
        />

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
    </SectionWrapper>
  );
};

export default Overview;
