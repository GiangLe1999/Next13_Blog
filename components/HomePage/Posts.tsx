"use client";

import { FC } from "react";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "@/utils/motion";
import SectionWrapper from "@/hoc/SectionWrapper";
import PostCard from "../Common/Posts/PostCard";
import { DUMMY_POSTS } from "@/DUMMY_DATA";
import PostList from "../Common/Posts/PostList";
import CTACard from "./CTACard";
import Title from "../Common/Title";

interface Props {}

const Posts: FC<Props> = (props): JSX.Element => {
  return (
    <>
      <Title subTitle="Read now" title="Newest Posts" />

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 0.1)}
          className="sectionDescription"
        >
          In total I&apos;ve written 171 tutorials and posts on internet. This
          site is a collection of most of the them. Hope that you will be
          satisfied with these posts
        </motion.p>
      </div>

      <div className="mt-8 space-y-10">
        <PostCard post={DUMMY_POSTS[0]} />
        <PostList
          posts={DUMMY_POSTS.filter((post, index) => index > 0 && index < 3)}
        />

        <CTACard />

        <PostCard post={DUMMY_POSTS[3]} reverse />
        <PostList
          posts={DUMMY_POSTS.filter((post, index) => index > 3 && index < 6)}
        />
      </div>
    </>
  );
};

export default SectionWrapper(Posts, "posts");
