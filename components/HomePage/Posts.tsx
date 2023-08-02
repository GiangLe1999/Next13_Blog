import { FC } from "react";

import PostCard from "../Common/Posts/PostCard";
import CTACard from "./CTACard";
import Title from "../Common/Title";
import { Dictionary, Post } from "@/types/collection";
import SectionWrapper from "../Common/SectionWrapper";
import Subtitle from "../Common/Subtitle";
import PostList from "../Common/Posts/PostList";

interface Props {
  posts: Post[];
  dictionary: Dictionary;
  locale: string;
}

const Posts: FC<Props> = async ({ posts, dictionary, locale }) => {
  return (
    <SectionWrapper idName="posts">
      <Title
        subTitle={dictionary.post.subTitle}
        title={dictionary.post.title}
      />

      <div className="w-full flex">
        <Subtitle content={dictionary.post.description}></Subtitle>
      </div>

      <div className="mt-8 space-y-10">
        <PostCard index={0} post={posts[0]} locale={locale} />
        <PostList
          locale={locale}
          posts={posts.filter((post, index) => index > 0 && index < 3)}
        />

        <CTACard dictionary={dictionary.ctaCard} />

        <PostCard index={3} post={posts[3]} reverse locale={locale} />
        <PostList
          special
          locale={locale}
          posts={posts.filter((post, index) => index > 3 && index < 6)}
        />
      </div>
    </SectionWrapper>
  );
};

export default Posts;
