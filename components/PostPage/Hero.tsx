import { Post } from "@/types/collection";
import { FC } from "react";
import PostMetas from "../Common/Posts/PostMetas";
import NextImage from "../Common/NextImage";

interface Props {
  post: Post;
}

const Hero: FC<Props> = ({ post }): JSX.Element => {
  return (
    <div>
      <PostMetas post={post} isPostPage />
      <div className="w-full aspect-video lg:max-h-[500px] relative mt-6">
        <NextImage src={post.image} alt={post.title} className="rounded-md" />
      </div>
    </div>
  );
};

export default Hero;
