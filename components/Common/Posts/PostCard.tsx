import { Post } from "@/types/collection";
import Link from "next/link";
import { FC } from "react";
import NextImage from "../NextImage";
import PostMetas from "./PostMetas";

interface Props {
  post: Post;
  layout?: "vertical" | "horizontal";
  reverse?: boolean;
  locale: string;
}

const PostCard: FC<Props> = ({
  post,
  layout = "horizontal",
  reverse = false,
  locale,
}): JSX.Element => {
  return (
    <Link
      className={`${
        layout === "horizontal"
          ? "grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:gap-10"
          : "space-y-5"
      }  group`}
      href={`/${locale}/post/${post.slug}`}
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
    </Link>
  );
};

export default PostCard;
