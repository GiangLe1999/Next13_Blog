"use client";

import { FC } from "react";

import ComputersCanvas from "./ComputersCanvas";
import Overall from "./Overall";

export type OverallDictionary = {
  title: string;
  subTitle1: string;
  subTitle2: string;
};

interface Props {
  dictionary: OverallDictionary;
}

const Hero: FC<Props> = ({ dictionary }): JSX.Element => {
  return (
    <section className="relative w-full h-screen">
      {/* Overall */}
      <Overall dictionary={dictionary} />

      {/* 3D Model */}
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
