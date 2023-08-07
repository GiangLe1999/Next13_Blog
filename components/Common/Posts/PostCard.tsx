"use client";

import { Post } from "@/types/collection";
import { useRouter } from "next/navigation";
import { FC } from "react";
import NextImage from "../NextImage";
import PostMetas from "./PostMetas";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

interface Props {
  post: Post;
  layout?: "vertical" | "horizontal";
  reverse?: boolean;
  locale: string;
  index: number;
}

const PostCard: FC<Props> = ({
  post,
  layout = "horizontal",
  reverse = false,
  locale,
  index,
}): JSX.Element => {
  const router = useRouter();
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.25, 0.5)}
      className={`${
        layout === "horizontal"
          ? "grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:gap-10"
          : "space-y-5"
      }  group cursor-pointer`}
      onClick={() => router.push(`/${locale}/post/${post.slug}`)}
    >
      {/* Post image */}
      <div
        className={`w-full aspect-video relative ${
          reverse ? "lg:order-last" : ""
        }`}
      >
        <NextImage
          src={
            process.env.NEXT_PUBLIC_ASSETS_URL + post.image + "?key=optimised"
          }
          alt={post.title}
          className="rounded-md"
        />
      </div>

      {/* Tag & Title & Description */}
      <PostMetas post={post} locale={locale} />
    </motion.div>
  );
};

export default PostCard;
