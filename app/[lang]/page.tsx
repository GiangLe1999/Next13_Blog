import Hero from "@/components/HomePage/Hero";
import Categories from "@/components/HomePage/Categories";
import Projects from "@/components/HomePage/Projects";
import Posts from "@/components/HomePage/Posts";

import { NextPage } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/getDictionary";
import { Dictionary } from "@/types/collection";
import { getAllPosts } from "@/lib/fetchData";

interface Props {
  params: { lang: string };
}

const Page: NextPage<Props> = async ({ params }) => {
  const locale = params.lang;
  const posts = await getAllPosts(locale);
  const dictionary = (await getDictionary(params.lang)) as Dictionary;

  if (!posts) {
    notFound();
  }

  return (
    <main
    // className="bg-hero-pattern bg-cover bg-no-repeat bg-center dark:bg-none"
    >
      <Hero dictionary={dictionary.overall} />
      <Categories dictionary={dictionary.categories} />
      <Posts posts={posts} locale={locale} dictionary={dictionary} />
      <Projects dictionary={dictionary.projects} />
    </main>
  );
};

export default Page;
