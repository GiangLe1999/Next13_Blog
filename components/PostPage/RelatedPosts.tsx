import { getRelatedPosts } from "@/lib/fetchData";
import { FC } from "react";
import RelatedPostCard from "./RelatedPostCard";

interface Props {
  locale: string;
  postId: string;
  categoryId: string;
}

const RelatedPosts: FC<Props> = async ({ locale, postId, categoryId }) => {
  const relatedPosts = await getRelatedPosts(locale, postId, categoryId, 3);

  return (
    <div>
      <h3 className="post-section-title">
        {locale === "en"
          ? "Check out these related posts"
          : "Bài viết liên quan"}
      </h3>
      <div className="grid grid-cols-3 gap-x-10">
        {relatedPosts?.map((post, index) => (
          <RelatedPostCard post={post} key={index} locale={locale} />
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
