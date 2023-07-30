import Hero from "@/components/HomePage/Hero";
import Categories from "@/components/HomePage/Categories";
import Projects from "@/components/HomePage/Projects";
import Posts from "@/components/HomePage/Posts";

import { NextPage } from "next";
import directus from "@/lib/directus";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/getDictionary";
import { Dictionary } from "@/types/collection";

export const getAllPosts = async (locale: string) => {
  try {
    const posts = await directus.items("post").readByQuery({
      fields: [
        "*",
        "author.id",
        "author.first_name",
        "author.last_name",
        "category.id",
        "category.title",
        "category.color",
        // get tất cả các field thuộc translations của Post (gồm title, description và body)
        "translations.*",
      ],
    });

    if (locale === "en") {
      return posts.data;
    } else {
      const localisedPosts = posts.data?.map((post) => ({
        ...post,
        title: post.translations[0].title,
        description: post.translations[0].description,
      }));

      return localisedPosts;
    }
  } catch (error) {
    console.log(error);
  }
};

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
