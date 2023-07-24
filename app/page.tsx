import Hero from "@/components/HomePage/Hero";
import Categories from "@/components/HomePage/Categories";
import Projects from "@/components/HomePage/Projects";
import Posts from "@/components/HomePage/Posts";

import { NextPage } from "next";
import directus from "@/lib/directus";
import { notFound } from "next/navigation";

interface Props {}

const Page: NextPage<Props> = async () => {
  const getAllPosts = async () => {
    try {
      const posts = await directus.items("post").readByQuery({
        fields: [
          "*",
          "author.id",
          "author.first_name",
          "author.last_name",
          "category.id",
          "category.title",
        ],
      });

      return posts.data;
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching posts");
    }
  };

  const posts = await getAllPosts();

  console.log(posts);

  if (!posts) {
    notFound();
  }

  return (
    <main
    // className="bg-hero-pattern bg-cover bg-no-repeat bg-center dark:bg-none"
    >
      <Hero />
      <Categories />
      <Posts />
      <Projects />
    </main>
  );
};

export default Page;
