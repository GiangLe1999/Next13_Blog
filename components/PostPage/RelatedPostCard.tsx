import { Post } from "@/types/collection";
import { FC } from "react";
import NextImage from "../Common/NextImage";
import Link from "next/link";

interface Props {
  post: Post;
  locale: string;
}

const RelatedPostCard: FC<Props> = ({ post, locale }): JSX.Element => {
  return (
    <Link
      className="rounded-md dark:bg-white bg-[#2f2f2f] shadow-md"
      href={`/${locale}/post/${post.slug}`}
    >
      <div className="relative w-full aspect-video">
        <NextImage
          className="rounded-t-md"
          src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post?.image}`}
          alt={post.title}
        />
      </div>

      <div className="p-5 space-y-3">
        <h4 className="text-lg font-bold dark:text-gray-800 text-white h-14">
          {post.title}
        </h4>
        <p className="text-sm text-white">
          {post.description.length > 90
            ? post.description.substring(0, 85) + "..."
            : post.description}
        </p>
        <div className="pt-3 pb-4">
          <button className="post-btn">
            {locale === "en" ? "View full post" : "Bài viết chi tiết"}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default RelatedPostCard;
