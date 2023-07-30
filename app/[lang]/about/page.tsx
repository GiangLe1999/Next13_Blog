"use client";

import { FC } from "react";
import Overview from "@/components/AboutPage/Overview";
import WorkExperience from "@/components/AboutPage/WorkExperience";

interface Props {}

const Page: FC<Props> = (props): JSX.Element => {
  return (
    <main>
      <section className="relative w-full">
        <Overview />
        <WorkExperience />
      </section>
    </main>
  );
};

export default Page;
