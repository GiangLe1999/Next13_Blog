import directus from "@/lib/directus";
import { Post } from "@/types/collection";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
    const locale = searchParams.get("locale");
    const limit = searchParams.get("limit");

    if (!query && !query?.trim())
      return NextResponse.json(
        { error: "Invalid query!" },
        {
          status: 422,
        }
      );

    const posts = await directus.items("post").readByQuery({
      filter: {
        // _or: [
        //   { title: { _icontains: query } },
        //   { description: { _icontains: query } },
        // ],
        title: { _icontains: query },
      },
      fields: [
        "title",
        "description",
        "slug",
        "translations.title",
        "translations.description",
        "date_updated",
      ],
      limit: Number(limit) || 5,
    });

    let postsData;
    if (locale === "en") {
      postsData = posts.data as Post[];
    } else {
      const localisedPosts = posts.data?.map((post) => ({
        ...post,
        title: post.translations[0].title,
        description: post.translations[0].description,
      }));

      postsData = localisedPosts as Post[];
    }

    return NextResponse.json(postsData);
  } catch (error) {
    return NextResponse.json(
      { error },
      {
        status: 400,
      }
    );
  }
}
