import Container from "@/components/Layout/Container";
import Hero from "@/components/PostPage/Hero";
import { NextPage } from "next";
import { notFound } from "next/navigation";
import PostBody from "@/components/PostPage/PostBody";
import SocialShare from "@/components/PostPage/SocialShare";
import CTACard from "@/components/HomePage/CTACard";
import directus from "@/lib/directus";
import { getDictionary } from "@/lib/getDictionary";
import { Dictionary } from "@/types/collection";
import { getPostData } from "@/lib/fetchData";
import RelatedPosts from "@/components/PostPage/RelatedPosts";
import Comments from "@/components/PostPage/Comments";
import { NextAuthProvider } from "@/app/providers";
import CommentForm from "@/components/PostPage/CommentForm";

export const generateMetadata = async ({
  params,
}: {
  params: { lang: string; slug: string };
}) => {
  const { lang, slug } = params;
  const postData = await getPostData(slug, lang);
  return {
    title: postData?.title,
    description: postData?.description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/post/${slug}`,
      languages: {
        "en-US": `${process.env.NEXT_PUBLIC_BASE_URL}/en/post/${slug}`,
        "vi-VN": `${process.env.NEXT_PUBLIC_BASE_URL}/vi/post/${slug}`,
      },
    },
    openGraph: {
      title: postData?.title,
      description: postData?.description,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/post/${slug}`,
      siteName: postData?.title,
      locale: lang,
      type: "website",
    },
  };
};

export const generateStaticParams = async () => {
  try {
    const posts = await directus.items("post").readByQuery({
      filter: {
        status: { _eq: "published" },
      },
      fields: ["slug"],
    });

    const params = posts?.data?.map((post) => ({
      slug: post.slug as string,
      lang: "en",
    }));

    const localisedParams = posts?.data?.map((post) => ({
      slug: post.slug as string,
      lang: "vi",
    }));

    const allParams = params?.concat(localisedParams ?? []);

    return allParams || [];
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching post!");
  }
};

interface Props {
  params: { slug: string; lang: string };
}

const Page: NextPage<Props> = async ({ params }) => {
  const locale = params.lang;
  const dictionary = (await getDictionary(locale)) as Dictionary;
  const post = await getPostData(params.slug, locale);
  if (!post) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: `${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}`,
    author: post.author.first_name + post.author.last_name,
    genre: post.category.title,
    publisher: "River Lee's Blog",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/post/${params.slug}`,
    datePublished: new Date(post.date_created).toISOString(),
    dateCreated: new Date(post.date_created).toISOString(),
    dateModified: new Date(post.date_updated).toISOString(),
    description: post.description,
    articleBody: post.body,
  };

  return (
    <Container className="pt-[80px] space-y-16">
      {/* Add JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <Hero post={post} locale={locale} />

      {/* Body */}
      <div className="">
        <PostBody body={post.body} />
      </div>

      {/* Social Share */}
      <SocialShare slug={post.slug} title={post.title} locale={locale} />

      {/* CTA Card */}
      <CTACard dictionary={dictionary.ctaCard} />

      {/* Related Posts */}
      <RelatedPosts
        locale={locale}
        postId={post.id}
        categoryId={post.category.id}
      />

      {/* Comments */}
      <Comments locale={locale} postId={post.id} />

      {/* Comment Form */}
      <NextAuthProvider>
        <CommentForm locale={locale} postId={post.id} />
      </NextAuthProvider>
    </Container>
  );
};

export default Page;
