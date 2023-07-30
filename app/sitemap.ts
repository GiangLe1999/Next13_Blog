import directus from "@/lib/directus";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string;

  //   Fetch về các Dynamic Post
  const posts = await directus.items("post").readByQuery({
    fields: ["slug", "date_updated"],
  });

  const postLinks = posts?.data?.map((post) => [
    {
      url: `${baseURL}/en/post/${post.slug}`,
      lastModified: new Date(post.date_updated),
    },
    {
      url: `${baseURL}/vi/post/${post.slug}`,
      lastModified: new Date(post.date_updated),
    },
    {
      url: `${baseURL}/post/${post.slug}`,
      lastModified: new Date(post.date_updated),
    },
  ]);

  //   Fetch về các Dynamic Category
  const categories = await directus.items("category").readByQuery({
    fields: ["slug", "updated_at"],
  });

  const categoryLinks = categories?.data?.map((category) => [
    {
      url: `${baseURL}/en/${category.slug}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/vi/${category.slug}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/${category.slug}`,
      lastModified: new Date(),
    },
  ]);

  const dynamicLinks = postLinks?.concat(categoryLinks ?? []).flat() ?? [];

  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/en`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/vi`,
      lastModified: new Date(),
    },
    ...dynamicLinks,
  ];
}
