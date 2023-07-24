import { Post } from "@/types/collection";
import Link from "next/link";
import { FC } from "react";
import NextImage from "../NextImage";
import PostMetas from "./PostMetas";

interface Props {
  post: Post;
  layout?: "vertical" | "horizontal";
  reverse?: boolean;
}

const PostCard: FC<Props> = ({
  post,
  layout = "horizontal",
  reverse = false,
}): JSX.Element => {
  return (
    <Link
      className={`${
        layout === "horizontal"
          ? "grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:gap-10"
          : "space-y-5"
      }  group`}
      href={"/post/" + post.slug}
    >
      {/* Post image */}
      <div
        className={`w-full aspect-video relative ${
          reverse ? "lg:order-last" : ""
        }`}
      >
        <NextImage src={post.image} alt={post.title} className="rounded-md" />
      </div>

      {/* Tag & Title & Description */}
      <PostMetas post={post} />
    </Link>
  );
};

export default PostCard;
