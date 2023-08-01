import { FC } from "react";
import Title from "../Common/Title";
import { Category } from "@/types/collection";
import PostCard from "../Common/Posts/PostCard";

interface Props {
  category: Category;
  locale: string;
}

const CategorySection: FC<Props> = ({ category, locale }): JSX.Element => {
  return (
    <div>
      <Title
        title={category.title}
        subTitle={category.field}
        isCategory
        count={
          category.posts.length + (locale === "en" ? " Articles" : " Bài viết")
        }
      />

      {category.posts.map((post) => (
        <PostCard post={post} key={post.id} locale={locale} />
      ))}
    </div>
  );
};

export default CategorySection;
