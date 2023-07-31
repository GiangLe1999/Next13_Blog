"use client";

import { FC } from "react";
import Overview from "@/components/AboutPage/Overview";
import WorkExperience from "@/components/AboutPage/WorkExperience";

interface Props {
  params: {
    lang: string;
  };
}

const Page: FC<Props> = ({ params }): JSX.Element => {
  return (
    <main>
      <section className="relative w-full">
        <Overview locale={params.lang} />
        <WorkExperience locale={params.lang} />
      </section>
    </main>
  );
};

export default Page;
