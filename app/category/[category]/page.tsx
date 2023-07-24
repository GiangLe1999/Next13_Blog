"use client";

import { DUMMY_CATEGORIES, DUMMY_POSTS } from "@/DUMMY_DATA";
import PostList from "@/components/Common/Posts/PostList";
import Container from "@/components/Layout/Container";
import { NextPage } from "next";
import Title from "@/components/Common/Title";

interface Props {
  params: { category: string };
}

const Page: NextPage<Props> = ({ params }) => {
  const posts = DUMMY_POSTS.filter(
    (post) => post.category.title.toLowerCase() === params.category
  );
  return (
    <Container className="pt-[120px]">
      <Title
        title={params.category[0].toUpperCase() + params.category.slice(1)}
        subTitle="Category"
        count={posts.length + " Articles"}
        isCategory
      />

      <PostList posts={posts} />
    </Container>
  );
};

export const generateStaticParams = async () => {
  return DUMMY_CATEGORIES.map((category) => ({ category: category.slug }));
};

export default Page;
