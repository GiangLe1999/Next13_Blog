"use client";

import { FC } from "react";
import Title from "../Common/Title";
import { Category } from "@/types/collection";
import PostList from "../Common/Posts/PostList";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

interface Props {
  category: Category;
  locale: string;
}

const CategorySection: FC<Props> = ({ category, locale }): JSX.Element => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
    >
      <Title
        title={category.title}
        subTitle={category.field}
        isCategory
        count={
          category.posts.length + (locale === "en" ? " Articles" : " Bài viết")
        }
      />

      <PostList posts={category.posts} locale={locale} />
    </motion.section>
  );
};

export default CategorySection;
