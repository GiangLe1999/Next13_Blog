import PostList from "@/components/Common/Posts/PostList";
import Container from "@/components/Layout/Container";
import { NextPage } from "next";
import Title from "@/components/Common/Title";
import directus from "@/lib/directus";
import { notFound } from "next/navigation";
import { getCategoryData } from "@/lib/fetchData";

export const generateMetadata = async ({ params }: Props) => {
  const { category, lang } = params;
  const categoryData = await getCategoryData(category, lang);

  return {
    title: categoryData.title,
    description: categoryData.description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${category}`,
      languages: {
        "en-US": `${process.env.NEXT_PUBLIC_BASE_URL}/en/${category}`,
        "vi-VN": `${process.env.NEXT_PUBLIC_BASE_URL}/vi/${category}`,
      },
    },
    openGraph: {
      title: categoryData.title,
      description: categoryData.description,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/${category}`,
      siteName: categoryData.title,
      locale: lang,
      type: "website",
    },
  };
};

export const generateStaticParams = async () => {
  try {
    const categories = await directus.items("category").readByQuery({
      filter: { status: { _eq: "published" } },
      fields: ["slug"],
    });

    const params = categories?.data?.map((category) => ({
      category: category.slug as string,
      lang: "en",
    }));

    const localisedParams = categories?.data?.map((category) => ({
      category: category.slug as string,
      lang: "vi",
    }));

    const allParams = params?.concat(localisedParams || []);

    return allParams || [];
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching categories");
  }
};

interface Props {
  params: { category: string; lang: string };
}

const Page: NextPage<Props> = async ({ params }) => {
  const locale = params.lang;
  const category = await getCategoryData(params.category, locale);
  if (!category) return notFound();

  const posts = category.posts;

  return (
    <Container className="pt-[120px]">
      <Title
        title={params.category[0].toUpperCase() + params.category.slice(1)}
        subTitle={locale === "en" ? "CATEGORY" : "DANH MỤC"}
        count={posts.length + (locale === "en" ? " Articles" : " Bài viết")}
        isCategory
      />

      <PostList locale={locale} posts={posts} />
    </Container>
  );
};

export default Page;
