import { FC } from "react";

import { motion } from "framer-motion";

import { textVariant } from "@/utils/motion";
import { experiences } from "@/config/site";
import ExperienceCard from "./ExperienceCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionWrapper from "../Common/SectionWrapper";
import { getDictionary } from "@/lib/getDictionary";

interface Props {
  locale: string;
}

const WorkExperience: FC<Props> = async ({ locale }) => {
  const dictionary = await getDictionary(locale);
  return (
    <SectionWrapper idName="experience">
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">{dictionary.about.subTitle2}</p>
        <h1 className="sectionHeadText">{dictionary.about.title2}</h1>
      </motion.div>

      <div className="mt-12 flex flex-col">
        <VerticalTimeline lineColor="#ff0a78">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  );
};

export default WorkExperience;
