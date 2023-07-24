import { DUMMY_POSTS } from "@/DUMMY_DATA";
import Container from "@/components/Layout/Container";
import Hero from "@/components/PostPage/Hero";
import { NextPage } from "next";
import { notFound } from "next/navigation";
import PostBody from "@/components/PostPage/PostBody";
import SocialShare from "@/components/PostPage/SocialShare";
import CTACard from "@/components/HomePage/CTACard";

interface Props {
  params: { slug: string };
}

const Page: NextPage<Props> = ({ params }) => {
  const post = DUMMY_POSTS.find((post) => post.slug === params.slug);
  if (!post) return notFound();

  return (
    <Container className="pt-[120px] space-y-10">
      <Hero post={post} />

      {/* Body */}
      <div className="">
        <PostBody body={post.body} />
      </div>

      {/* Social Share */}
      <SocialShare slug={post.slug} title={post.title} />

      {/* CTA Card */}
      <CTACard />
    </Container>
  );
};

export const generateStaticParams = async () => {
  return DUMMY_POSTS.map((post) => ({ slug: post.slug }));
};

export default Page;
