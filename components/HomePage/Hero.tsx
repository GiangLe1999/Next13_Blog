"use client";

import { FC } from "react";

import Overall from "./Overall";
import SectionWrapper from "../Common/SectionWrapper";
import NextImage from "../Common/NextImage";
import NextImageContain from "../Common/NextImageContain";

export type OverallDictionary = {
  title: string;
  subTitle1: string;
  subTitle2: string;
};

interface Props {
  dictionary: OverallDictionary;
  locale: string;
}

const Hero: FC<Props> = ({ dictionary, locale }): JSX.Element => {
  return (
    <SectionWrapper idName="hero">
      {/* Overall */}
      <div className="flex flex-col lg:flex-row items-center pt-12 gap-5 lg:gap-20">
        <Overall dictionary={dictionary} locale={locale} />

        <div className="lg:flex-1 w-full">
          <div className="relative w-full h-[450px]">
            <NextImageContain src="/assets/hero.svg" alt="Hero banner" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
