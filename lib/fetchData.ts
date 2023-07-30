import { cache } from "react";
import directus from "./directus";
import { Category, Post } from "@/types/collection";

const commonFields: string[] = [
  "*",
  "posts.*",
  "posts.author.id",
  "posts.author.first_name",
  "posts.author.last_name",
  "posts.category.id",
  "posts.category.title",
];

export const getCategoryData = cache(
  async (categoryName: string, locale: string) => {
    const fields =
      locale === "en"
        ? [...commonFields]
        : [...commonFields, "posts.translations.*"];

    try {
      const category = await directus.items("category").readByQuery({
        filter: { slug: { _eq: categoryName } },
        fields,
      });

      let fetchedCategory = category?.data?.[0];

      if (locale === "en") {
        return fetchedCategory as Category;
      } else {
        const localisedCategory: Category = {
          ...fetchedCategory,
          posts: fetchedCategory.posts.map((post: Post) => ({
            ...post,
            title: post.translations[0].title,
            description: post.translations[0].description,
            body: post.translations[0].body,
          })),
        };

        return localisedCategory;
      }
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching category");
    }
  }
);

export const getPostData = cache(async (postSlug: string, locale: string) => {
  const fields =
    locale === "en" ? commonFields : [...commonFields, "translations.*"];
  try {
    const post = await directus.items("post").readByQuery({
      filter: { slug: { _eq: postSlug } },
      fields,
    });

    const postData = post?.data?.[0] as Post;

    if (locale === "en") {
      return postData;
    } else {
      const localisedPostData = {
        ...postData,
        title: postData?.translations?.[0].title,
        description: postData?.translations?.[0].description,
        body: postData?.translations?.[0].body,
      };

      return localisedPostData;
    }
  } catch (error) {}
});

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
      return posts.data as Post[];
    } else {
      const localisedPosts = posts.data?.map((post) => ({
        ...post,
        title: post.translations[0].title,
        description: post.translations[0].description,
      }));

      return localisedPosts as Post[];
    }
  } catch (error) {
    console.log(error);
  }
};
