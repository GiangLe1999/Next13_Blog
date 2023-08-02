import { Post } from "@/types/collection";
import { FC } from "react";
import PostCard from "./PostCard";

interface Props {
  posts: Post[];
  layout?: "vertical" | "horizontal";
  locale: string;
  special?: boolean;
}

const PostList: FC<Props> = ({
  posts,
  layout = "vertical",
  locale,
  special,
}): JSX.Element => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {posts.map((post, index) => {
        return (
          <PostCard
            index={special ? index + 4 : index + 1}
            post={post}
            key={post.id}
            layout={layout}
            locale={locale}
          />
        );
      })}
    </div>
  );
};

export default PostList;
