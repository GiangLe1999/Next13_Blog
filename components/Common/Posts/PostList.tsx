import { Post } from "@/types/collection";
import { FC } from "react";
import PostCard from "./PostCard";

interface Props {
  posts: Post[];
  layout?: "vertical" | "horizontal";
}

const PostList: FC<Props> = ({ posts, layout = "vertical" }): JSX.Element => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} layout={layout} />
      ))}
    </div>
  );
};

export default PostList;
