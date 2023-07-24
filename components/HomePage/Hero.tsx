"use client";

import { FC } from "react";

import ComputersCanvas from "./ComputersCanvas";
import Overall from "./Overall";

interface Props {}

const Hero: FC<Props> = (props): JSX.Element => {
  return (
    <section className="relative w-full h-screen">
      {/* Overall */}
      <Overall />

      {/* 3D Model */}
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
