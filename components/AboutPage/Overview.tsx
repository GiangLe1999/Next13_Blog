import { FC } from "react";

import { services } from "@/config/site";
import ServiceCard from "./ServiceCard";
import SectionWrapper from "../Common/SectionWrapper";
import Subtitle from "../Common/Subtitle";
import Title from "../Common/Title";
import { getDictionary } from "@/lib/getDictionary";

interface Props {
  locale: string;
}

const Overview: FC<Props> = async ({ locale }) => {
  const dictionary = await getDictionary(locale);
  return (
    <SectionWrapper>
      <div className="relative top-[70px]">
        <Title
          title={dictionary.about.title}
          subTitle={dictionary.about.subTitle}
        />

        <Subtitle content={dictionary.about.description1} />
        <Subtitle content={dictionary.about.description2} />
        <Subtitle content={dictionary.about.description3} />

        <div className="mt-12 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} service={service} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Overview;
