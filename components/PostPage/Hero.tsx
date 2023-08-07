import { Post } from "@/types/collection";
import { FC } from "react";
import PostMetas from "../Common/Posts/PostMetas";
import NextImage from "../Common/NextImage";

interface Props {
  post: Post;
  locale: string;
}

const Hero: FC<Props> = ({ post, locale }): JSX.Element => {
  return (
    <div>
      <PostMetas post={post} isPostPage locale={locale} />
      <div className="w-full aspect-video relative mt-6">
        <NextImage
          src={
            process.env.NEXT_PUBLIC_ASSETS_URL + post.image + "?key=optimised"
          }
          alt={post.title}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default Hero;
